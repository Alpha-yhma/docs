const e=JSON.parse('{"key":"v-69ac110c","path":"/md/tool/K8S/k8s-zero-down.html","title":"K8s实现SpringBoot零宕机发布","lang":"zh-CN","frontmatter":{"title":"K8s实现SpringBoot零宕机发布","icon":"fab fa-markdown","tag":"K8S","description":"前言 K8s + springBoot实现零宕机发布：健康检查+滚动更新+优雅停机+弹性伸缩+Prometheus监控+配置分离（镜像复用） 配置 健康检查 健康检查类型：就绪探针（readiness）+ 存活探针（liveness） 探针类型：exec（进入容器执行脚本）、tcpSocket（探测端口）、httpGet（调用接口） 业务层面","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/tool/K8S/k8s-zero-down.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"K8s实现SpringBoot零宕机发布"}],["meta",{"property":"og:description","content":"前言 K8s + springBoot实现零宕机发布：健康检查+滚动更新+优雅停机+弹性伸缩+Prometheus监控+配置分离（镜像复用） 配置 健康检查 健康检查类型：就绪探针（readiness）+ 存活探针（liveness） 探针类型：exec（进入容器执行脚本）、tcpSocket（探测端口）、httpGet（调用接口） 业务层面"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T08:44:07.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"K8S"}],["meta",{"property":"article:modified_time","content":"2023-12-10T08:44:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"K8s实现SpringBoot零宕机发布\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T08:44:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"健康检查","slug":"健康检查","link":"#健康检查","children":[]},{"level":3,"title":"业务层面","slug":"业务层面","link":"#业务层面","children":[]},{"level":3,"title":"运维层面","slug":"运维层面","link":"#运维层面","children":[]},{"level":3,"title":"滚动更新","slug":"滚动更新","link":"#滚动更新","children":[]},{"level":3,"title":"优雅停机","slug":"优雅停机","link":"#优雅停机","children":[]},{"level":3,"title":"业务层面","slug":"业务层面-1","link":"#业务层面-1","children":[]},{"level":3,"title":"运维层面","slug":"运维层面-1","link":"#运维层面-1","children":[]},{"level":3,"title":"弹性伸缩","slug":"弹性伸缩","link":"#弹性伸缩","children":[]},{"level":3,"title":"Prometheus集成","slug":"prometheus集成","link":"#prometheus集成","children":[]},{"level":3,"title":"业务层面","slug":"业务层面-2","link":"#业务层面-2","children":[]},{"level":3,"title":"运维层面","slug":"运维层面-2","link":"#运维层面-2","children":[]},{"level":3,"title":"配置分离","slug":"配置分离","link":"#配置分离","children":[]},{"level":3,"title":"业务层面","slug":"业务层面-3","link":"#业务层面-3","children":[]},{"level":3,"title":"运维层面","slug":"运维层面-3","link":"#运维层面-3","children":[]}]}],"git":{"createdTime":1702197847000,"updatedTime":1702197847000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":6.48,"words":1944},"filePathRelative":"md/tool/K8S/k8s-zero-down.md","localizedDate":"2023年12月10日","excerpt":"<h2> <strong>前言</strong></h2>\\n<p>K8s + springBoot实现零宕机发布：健康检查+滚动更新+优雅停机+弹性伸缩+Prometheus监控+配置分离（镜像复用）</p>\\n<h2> <strong>配置</strong></h2>\\n<h3> <strong>健康检查</strong></h3>\\n<ul>\\n<li>健康检查类型：就绪探针（readiness）+ 存活探针（liveness）</li>\\n<li>探针类型：exec（进入容器执行脚本）、tcpSocket（探测端口）、httpGet（调用接口）</li>\\n</ul>\\n<h3> <strong>业务层面</strong></h3>","autoDesc":true}');export{e as data};
