const e=JSON.parse('{"key":"v-444afaed","path":"/extra/freesql-auditlog.html","title":"FreeSql 实现审计日志","lang":"zh-CN","frontmatter":{"description":"有两种情况，如果都是针对实体操作，确实很好做这个功能。 IFreeSql 更新/删除，都可以不传实体进行操作，所以这个 oldvalues, newvalues 实现起来比较麻烦（可能需要查询一次？性能？）。另外还有批量操作。 1、fsql.Aop.CurdAfter 事件是 CRUD 之后触发，提供以下参数 2、FreeSql.DbContext 或...","head":[["meta",{"property":"og:url","content":"https://freesql.net/extra/freesql-auditlog.html"}],["meta",{"property":"og:site_name","content":"FreeSql 官方文档"}],["meta",{"property":"og:title","content":"FreeSql 实现审计日志"}],["meta",{"property":"og:description","content":"有两种情况，如果都是针对实体操作，确实很好做这个功能。 IFreeSql 更新/删除，都可以不传实体进行操作，所以这个 oldvalues, newvalues 实现起来比较麻烦（可能需要查询一次？性能？）。另外还有批量操作。 1、fsql.Aop.CurdAfter 事件是 CRUD 之后触发，提供以下参数 2、FreeSql.DbContext 或..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-09T09:19:30.000Z"}],["meta",{"property":"article:author","content":"nicye"}],["meta",{"property":"article:modified_time","content":"2023-12-09T09:19:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FreeSql 实现审计日志\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-09T09:19:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"nicye\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://freesql.net/atom.xml","title":"FreeSql 官方文档 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://freesql.net/feed.json","title":"FreeSql 官方文档 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://freesql.net/rss.xml","title":"FreeSql 官方文档 RSS Feed"}]]},"headers":[{"level":2,"title":"1、fsql.Aop.CurdAfter 事件是 CRUD 之后触发，提供以下参数","slug":"_1、fsql-aop-curdafter-事件是-crud-之后触发-提供以下参数","link":"#_1、fsql-aop-curdafter-事件是-crud-之后触发-提供以下参数","children":[]},{"level":2,"title":"2、FreeSql.DbContext 或者 FreeSql.UnitOfWork 提供对象变化跟踪","slug":"_2、freesql-dbcontext-或者-freesql-unitofwork-提供对象变化跟踪","link":"#_2、freesql-dbcontext-或者-freesql-unitofwork-提供对象变化跟踪","children":[]}],"git":{"createdTime":1702113570000,"updatedTime":1702113570000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"extra/freesql-auditlog.md","localizedDate":"2023年12月9日","autoDesc":true}');export{e as data};
