const e=JSON.parse('{"key":"v-6f577e04","path":"/md/middleware/rocketmq/rocketmq-ha.html","title":"RocketMQ高可用部署方案","lang":"zh-CN","frontmatter":{"title":"RocketMQ高可用部署方案","icon":"fab fa-markdown","order":1,"tag":"RocketMQ","description":"前言 本部分主要介绍如何部署自动容灾切换的 RocketMQ-on-DLedger Group。 RocketMQ-on-DLedger Group 是指一组相同名称的 Broker，至少需要 3 个节点，通过 Raft 自动选举出一个 Leader，其余节点 作为 Follower，并在 Leader 和 Follower 之间复制数据以保证高可用。 RocketMQ-on-DLedger Group 能自动容灾切换，并保证数据一致。 RocketMQ-on-DLedger Group 是可以水平扩展的，也即可以部署任意多个 RocketMQ-on-DLedger Group 同时对外提供服务。","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/middleware/rocketmq/rocketmq-ha.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"RocketMQ高可用部署方案"}],["meta",{"property":"og:description","content":"前言 本部分主要介绍如何部署自动容灾切换的 RocketMQ-on-DLedger Group。 RocketMQ-on-DLedger Group 是指一组相同名称的 Broker，至少需要 3 个节点，通过 Raft 自动选举出一个 Leader，其余节点 作为 Follower，并在 Leader 和 Follower 之间复制数据以保证高可用。 RocketMQ-on-DLedger Group 能自动容灾切换，并保证数据一致。 RocketMQ-on-DLedger Group 是可以水平扩展的，也即可以部署任意多个 RocketMQ-on-DLedger Group 同时对外提供服务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T06:41:34.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:modified_time","content":"2023-12-10T06:41:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ高可用部署方案\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T06:41:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"1. 下载Apache RocketMQ","slug":"_1-下载apache-rocketmq","link":"#_1-下载apache-rocketmq","children":[]},{"level":3,"title":"2. 快速部署","slug":"_2-快速部署","link":"#_2-快速部署","children":[]},{"level":3,"title":"3. 双中心DLedger集群搭建","slug":"_3-双中心dledger集群搭建","link":"#_3-双中心dledger集群搭建","children":[]}],"git":{"createdTime":1702190494000,"updatedTime":1702190494000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":4.09,"words":1226},"filePathRelative":"md/middleware/rocketmq/rocketmq-ha.md","localizedDate":"2023年12月10日","excerpt":"<h3> 前言</h3>\\n<p>本部分主要介绍如何部署自动容灾切换的 RocketMQ-on-DLedger Group。</p>\\n<p>RocketMQ-on-DLedger Group 是指一组相同名称的 Broker，至少需要 3 个节点，通过 Raft 自动选举出一个 Leader，其余节点 作为\\nFollower，并在 Leader 和 Follower 之间复制数据以保证高可用。 RocketMQ-on-DLedger Group 能自动容灾切换，并保证数据一致。\\nRocketMQ-on-DLedger Group 是可以水平扩展的，也即可以部署任意多个 RocketMQ-on-DLedger Group 同时对外提供服务。</p>","autoDesc":true}');export{e as data};
