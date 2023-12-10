const e=JSON.parse('{"key":"v-bb7d0218","path":"/md/algorithm/consistency/zab.html","title":"ZAB算法详解","lang":"zh-CN","frontmatter":{"title":"ZAB算法详解","icon":"fab fa-markdown","tag":["一致性算法","ZAB"],"description":"最近需要设计一个分布式系统，需要一个中间件来存储共享的信息，来保证多个系统之间的数据一致性，调研了两个主流框架Zookeeper和ETCD，发现都能满足我们的系统需求。其中ETCD是K8s中采用的分布式存储，而其底层采用了RAFT算法来保证一致性，之前已经详细分析了Raft算法的原理，今天主要仔细分析下Zookeeper的底层算法-ZAB算法。 什么是ZAB 算法？ ZAB的全称是 Zookeeper Atomic Broadcast （Zookeeper原子广播)。Zookeeper 是通过 Zab 算法来保证分布式事务的最终一致性。","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/algorithm/consistency/zab.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"ZAB算法详解"}],["meta",{"property":"og:description","content":"最近需要设计一个分布式系统，需要一个中间件来存储共享的信息，来保证多个系统之间的数据一致性，调研了两个主流框架Zookeeper和ETCD，发现都能满足我们的系统需求。其中ETCD是K8s中采用的分布式存储，而其底层采用了RAFT算法来保证一致性，之前已经详细分析了Raft算法的原理，今天主要仔细分析下Zookeeper的底层算法-ZAB算法。 什么是ZAB 算法？ ZAB的全称是 Zookeeper Atomic Broadcast （Zookeeper原子广播)。Zookeeper 是通过 Zab 算法来保证分布式事务的最终一致性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T08:44:07.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"一致性算法"}],["meta",{"property":"article:tag","content":"ZAB"}],["meta",{"property":"article:modified_time","content":"2023-12-10T08:44:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZAB算法详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T08:44:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[{"level":3,"title":"什么是ZAB 算法？","slug":"什么是zab-算法","link":"#什么是zab-算法","children":[]},{"level":3,"title":"深入ZAB算法","slug":"深入zab算法","link":"#深入zab算法","children":[]},{"level":3,"title":"1. 消息广播","slug":"_1-消息广播","link":"#_1-消息广播","children":[]},{"level":3,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]},{"level":3,"title":"ZAB消息广播过程","slug":"zab消息广播过程","link":"#zab消息广播过程","children":[]},{"level":3,"title":"2. 崩溃恢复","slug":"_2-崩溃恢复","link":"#_2-崩溃恢复","children":[]},{"level":3,"title":"选举参数","slug":"选举参数","link":"#选举参数","children":[]},{"level":3,"title":"选举流程","slug":"选举流程","link":"#选举流程","children":[]},{"level":3,"title":"ZAB算法需要解决的两大问题","slug":"zab算法需要解决的两大问题","link":"#zab算法需要解决的两大问题","children":[]},{"level":3,"title":"1. 已经被处理的消息不能丢","slug":"_1-已经被处理的消息不能丢","link":"#_1-已经被处理的消息不能丢","children":[]},{"level":3,"title":"2. 被丢弃的消息不能再次出现","slug":"_2-被丢弃的消息不能再次出现","link":"#_2-被丢弃的消息不能再次出现","children":[]}],"git":{"createdTime":1702197847000,"updatedTime":1702197847000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":10.89,"words":3267},"filePathRelative":"md/algorithm/consistency/zab.md","localizedDate":"2023年12月10日","excerpt":"<blockquote>\\n<p>最近需要设计一个分布式系统，需要一个中间件来存储共享的信息，来保证多个系统之间的数据一致性，调研了两个主流框架Zookeeper和ETCD，发现都能满足我们的系统需求。其中ETCD是K8s中采用的分布式存储，而其底层采用了RAFT算法来保证一致性，之前已经详细分析了Raft算法的原理，今天主要仔细分析下Zookeeper的底层算法-ZAB算法。</p>\\n</blockquote>\\n<h3> 什么是ZAB 算法？</h3>\\n<p>ZAB的全称是 <strong>Zookeeper Atomic Broadcast</strong> （Zookeeper原子广播)。Zookeeper 是通过 Zab 算法来保证分布式事务的最终一致性。</p>","autoDesc":true}');export{e as data};
