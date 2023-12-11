---
title: ZAB算法详解
icon: fab fa-markdown
tag:
  - 一致性算法
  - ZAB
---
> 最近需要设计一个分布式系统，需要一个中间件来存储共享的信息，来保证多个系统之间的数据一致性，调研了两个主流框架Zookeeper和ETCD，发现都能满足我们的系统需求。其中ETCD是K8s中采用的分布式存储，而其底层采用了RAFT算法来保证一致性，之前已经详细分析了Raft算法的原理，今天主要仔细分析下Zookeeper的底层算法-ZAB算法。

### 什么是ZAB 算法？

ZAB的全称是 **Zookeeper Atomic Broadcast** （Zookeeper原子广播)。Zookeeper 是通过 Zab 算法来保证分布式事务的最终一致性。

1.  Zab协议是为分布式协调服务Zookeeper专门设计的一种 **支持崩溃恢复** 的 **原子广播协议** ，是Zookeeper保证数据一致性的核心算法。Zab借鉴了Paxos算法，但又不像Paxos那样，是一种通用的分布式一致性算法。**它是特别为Zookeeper设计的支持崩溃恢复的原子广播协议**。  
    
2.  在Zookeeper中主要依赖Zab协议来实现数据一致性，基于该协议，zk实现了一种主备模型（即Leader和Follower模型）的系统架构来保证集群中各个副本之间数据的一致性。 这里的主备系统架构模型，就是指只有一台客户端（Leader）负责处理外部的写事务请求，然后Leader客户端将数据同步到其他Follower节点。  
    

客户端的读取流程：客户端会随机的链接到 zookeeper 集群中的一个节点，如果是读请求，就直接从当前节点中读取数据；如果是写请求，那么节点就会向 Leader 提交事务，Leader 接收到事务提交，会广播该事务，只要超过半数节点写入成功，该事务就会被提交。

### 深入ZAB算法

ZAB算法分为两大块内容，**消息广播**和**崩溃恢复**。

*   消息广播（boardcast）：Zab 协议中，所有的写请求都由 leader 来处理。正常工作状态下，leader 接收请求并通过广播协议来处理。  
    
*   崩溃恢复（recovery）：当服务初次启动，或者 leader 节点挂了，系统就会进入恢复模式，直到选出了有合法数量 follower 的新 leader，然后新 leader 负责将整个系统同步到最新状态。  
    

### 1\. 消息广播

**消息广播**的过程实际上是一个简化的两阶段提交过程，这里对两阶段提交做一个简单的介绍。

### 两阶段提交

两阶段提交算法本身是一致强一致性算法，适合用作数据库的分布式事务，其实数据库的经常用到的TCC本身就是一种2PC。

下面以MySQL中对数据库的修改过程，来介绍下两阶段提交的具体流程，在MySQL中对一条数据的修改操作首先写undo日志，记录的数据原来的样子，接下来执行事务修改操作，把数据写到redo日志里面，万一捅娄子，事务失败了，可从undo里面恢复数据。数据库通过undo与redo能保证数据的强一致性。

*   首先第一阶段叫准备节点，事务的请求都发送给一个个的资源，这里的资源可以是数据库，也可以是其他支持事务的框架，他们会分别执行自己的事务，写日志到undo与redo，但是不提交事务。
*   当事务管理器收到了所以资源的反馈，事务都执行没报错后，事务管理器再发送commit指令让资源把事务提交，一旦发现任何一个资源在准备阶段没有执行成功，事务管理器会发送rollback，让所有的资源都回滚。这就是2pc，非常简单。

  

![](https://pic3.zhimg.com/v2-cda10811d65e2bee71c4b093186a5c1a_r.jpg)

说他是强一致性的是他需要保证任何一个资源都成功，整个分布式事务才成功。

优点：原理简单，实现方便 缺点：同步阻塞，单点问题，数据不一致，容错性不好

*   同步阻塞：在二阶段提交的过程中，所有的节点都在等待其他节点的响应，无法进行其他操作。这种同步阻塞极大的限制了分布式系统的性能。
*   单点问题：协调者在整个二阶段提交过程中很重要，如果协调者在提交阶段出现问题，那么整个流程将无法运转。更重要的是，其他参与者将会处于一直锁定事务资源的状态中，而无法继续完成事务操作。
*   数据不一致：假设当协调者向所有的参与者发送commit请求之后，发生了局部网络异常，或者是协调者在尚未发送完所有 commit请求之前自身发生了崩溃，导致最终只有部分参与者收到了commit请求。这将导致严重的数据不一致问题。
*   容错性不好：二阶段提交协议没有设计较为完善的容错机制，任意一个节点是失败都会导致整个事务的失败。

### ZAB消息广播过程

> Zookeeper集群中，存在以下三种角色的节点： **Leader**：Zookeeper集群的核心角色，在集群启动或崩溃恢复中通过Follower参与选举产生，**为客户端提供读写服务，并对事务请求进行处理**。 **Follower**：Zookeeper集群的核心角色，在集群启动或崩溃恢复中参加选举，没有被选上就是这个角色，**为客户端提供读取服务**，也就是处理非事务请求，Follower不能处理事务请求，对于收到的事务请求会转发给Leader。 **Observer**：观察者角色，**不参加选举，为客户端提供读取服务，处理非事务请求**，对于收到的事务请求会转发给Leader。使用Observer的目的是为了扩展系统，提高读取性能。

1.  Leader 接收到消息请求后，将消息赋予一个全局唯一的 64 位自增 id，叫做：zxid，通过 zxid 的大小比较即可实现因果有序这一特性。
2.  Leader 通过先进先出队列（通过 TCP 协议来实现，以此实现了全局有序这一特性）将带有 zxid 的消息作为一个提案（proposal）分发给所有 follower。
3.  当 follower 接收到 proposal，先将 proposal 写到硬盘，写硬盘成功后再向 leader 回一个 ACK。
4.  当 leader 接收到合法数量的 ACKs 后，leader 就向所有 follower 发送 COMMIT 命令，同时会在本地执行该消息。
5.  当 follower 收到消息的 COMMIT 命令时，就会执行该消息。

  

![](https://pic1.zhimg.com/v2-547cb3051bb5476323189318cd9a01f8_r.jpg)

  

相比于完整的二阶段提交，Zab 协议最大的区别就是不能终止事务，follower 要么回 ACK 给 leader，要么抛弃 leader，在某一时刻，leader 的状态与 follower 的状态很可能不一致，因此它不能处理 leader 挂掉的情况，所以 Zab 协议引入了恢复模式来处理这一问题。

从另一角度看，正因为 Zab 的广播过程不需要终止事务，也就是说不需要所有 follower 都返回 ACK 才能进行 COMMIT，而是只需要合法数量（2n+1 台服务器中的 n+1 台） 的follower，也提升了整体的性能。

> Leader 服务器与每一个 Follower 服务器之间都维护了一个单独的 FIFO 消息队列进行收发消息，使用队列消息可以做到异步解耦。 Leader 和 Follower 之间只需要往队列中发消息即可。如果使用同步的方式会引起阻塞，性能要下降很多。

### 2\. 崩溃恢复

**崩溃恢复的主要任务就是选举Leader（Leader Election）**，Leader选举分两个场景： _Zookeeper服务器启动时Leader选举。_ Zookeeper集群运行过程中Leader崩溃后的Leader选举。

### 选举参数

在介绍选举流程之前，需要介绍几个参数，

*   **myid**: 服务器ID，这个是在安装Zookeeper时配置的，myid越大，该服务器在选举中被选为Leader的优先级会越大。**ZAB算法中通过myid来规避了多个节点可能有相同zxid问题，注意可以对比之前的Raft算法，Raft算法中通过随机的timeout来规避多个节点可能同时成为Leader的问题。**
*   **zxid**: 事务ID，这个是由Zookeeper集群中的Leader节点进行Proposal时生成的全局唯一的事务ID，由于只有Leader才能进行Proposal，所以这个zxid很容易做到全局唯一且自增。因为Follower没有生成zxid的权限。zxid越大，表示当前节点上提交成功了最新的事务，这也是为什么在崩溃恢复的时候，需要优先考虑zxid的原因。
*   **epoch**: 投票轮次，每完成一次Leader选举的投票，当前Leader节点的epoch会增加一次。在没有Leader时，本轮此的epoch会保持不变。

另外在选举的过程中，每个节点的当前状态会在以下几种状态之中进行转变。

    LOOKING: 竞选状态。
    FOLLOWING: 随从状态，同步Leader 状态，参与Leader选举的投票过程。
    OBSERVING: 观察状态，同步Leader 状态，不参与Leader选举的投票过程。
    LEADING: 领导者状态。

### 选举流程

选举的流程如下：

*   每个Server会发出一个投票,第一次都是投自己。投票信息：（myid，ZXID）
*   收集来自各个服务器的投票
*   处理投票并重新投票，处理逻辑：优先比较ZXID,然后比较myid
*   统计投票，只要超过半数的机器接收到同样的投票信息，就可以确定leader
*   改变服务器状态，进入正常的消息广播流程。

  

![](https://pic2.zhimg.com/v2-2403d06e73b77f9d9a86fa8962cf6ec1_r.jpg)

  

### ZAB算法需要解决的两大问题

### 1. 已经被处理的消息不能丢

> 这一情况会出现在以下场景：当 leader 收到合法数量 follower 的 ACKs 后，就向各个 follower 广播 COMMIT 命令，同时也会在本地执行 COMMIT 并向连接的客户端返回「成功」。但是如果在各个 follower 在收到 COMMIT 命令前 leader 就挂了，导致剩下的服务器并没有执行都这条消息。

为了实现已经被处理的消息不能丢这个目的，Zab 的恢复模式使用了以下的策略：

1.  选举拥有 proposal 最大值（即 zxid 最大） 的节点作为新的 leader：由于所有提案被 COMMIT 之前必须有合法数量的 follower ACK，即必须有合法数量的服务器的事务日志上有该提案的 proposal，**因此，只要有合法数量的节点正常工作，就必然有一个节点保存了所有被 COMMIT 的 proposal。 而在选举Leader的过程中，会比较zxid，因此选举出来的Leader必然会包含所有被COMMIT的proposal。**
2.  新的 leader 将自己事务日志中 proposal 但未 COMMIT 的消息处理。
3.  新的 leader 与 follower 建立先进先出的队列， 先将自身有而 follower 没有的 proposal 发送给 follower，再将这些 proposal 的 COMMIT 命令发送给 follower，以保证所有的 follower 都保存了所有的 proposal、所有的 follower 都处理了所有的消息。

### 2. 被丢弃的消息不能再次出现

> 这一情况会出现在以下场景：当 leader 接收到消息请求生成 proposal 后就挂了，其他 follower 并没有收到此 proposal，因此经过恢复模式重新选了 leader 后，这条消息是被跳过的。 此时，之前挂了的 leader 重新启动并注册成了 follower，他保留了被跳过消息的 proposal 状态，与整个系统的状态是不一致的，需要将其删除。

  

![](https://pic2.zhimg.com/v2-773167c572ad9ec9cb6f318d5751451d_r.jpg)

  

Zab 通过巧妙的设计 zxid 来实现这一目的。一个 zxid 是64位，高 32 是纪元（epoch）编号，每经过一次 leader 选举产生一个新的 leader，新 leader 会将 epoch 号 +1。低 32 位是消息计数器，每接收到一条消息这个值 +1，新 leader 选举后这个值重置为 0。这样设计的好处是旧的 leader 挂了后重启，它不会被选举为 leader，因为此时它的 zxid 肯定小于当前的新 leader。当旧的 leader 作为 follower 接入新的 leader 后，新的 leader 会让它将所有的拥有旧的 epoch 号的未被 COMMIT 的 proposal 清除。

> Zab 协议设计的优秀之处有两点，一是简化二阶段提交，提升了在正常工作情况下的性能；二是巧妙地利用率自增序列，简化了异常恢复的逻辑，也很好地保证了顺序处理这一特性