const e=JSON.parse('{"key":"v-0f3cbe50","path":"/md/tool/traefik/traefik-route.html","title":"Traefik路由配置示例","lang":"zh-CN","frontmatter":{"title":"Traefik路由配置示例","icon":"fab fa-markdown","tag":"Traefik","description":"http: # Add the router routers: my-router: entryPoints: - web middlewares: - my-stripprefix - my-traefik-timer-plugin service: my-service rule: PathPrefix(`/`) # Add the middleware middlewares: my-stripprefix: stripPrefix: prefixes: - \\"/\\" my-traefik-timer-plugin: plugin: traefik-timer-plugin: log: \\"true\\" # Add the service services: my-service: loadBalancer: servers: - url: http://localhost:8080/","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/tool/traefik/traefik-route.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"Traefik路由配置示例"}],["meta",{"property":"og:description","content":"http: # Add the router routers: my-router: entryPoints: - web middlewares: - my-stripprefix - my-traefik-timer-plugin service: my-service rule: PathPrefix(`/`) # Add the middleware middlewares: my-stripprefix: stripPrefix: prefixes: - \\"/\\" my-traefik-timer-plugin: plugin: traefik-timer-plugin: log: \\"true\\" # Add the service services: my-service: loadBalancer: servers: - url: http://localhost:8080/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T08:44:07.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"Traefik"}],["meta",{"property":"article:modified_time","content":"2023-12-10T08:44:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Traefik路由配置示例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T08:44:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1702197847000,"updatedTime":1702197847000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":0.23,"words":68},"filePathRelative":"md/tool/traefik/traefik-route.md","localizedDate":"2023年12月10日","excerpt":"<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">http</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token comment\\"># Add the router</span>\\n  <span class=\\"token key atrule\\">routers</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">my-router</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">entryPoints</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token punctuation\\">-</span> web\\n      <span class=\\"token key atrule\\">middlewares</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token punctuation\\">-</span> my<span class=\\"token punctuation\\">-</span>stripprefix\\n        <span class=\\"token punctuation\\">-</span> my<span class=\\"token punctuation\\">-</span>traefik<span class=\\"token punctuation\\">-</span>timer<span class=\\"token punctuation\\">-</span>plugin\\n      <span class=\\"token key atrule\\">service</span><span class=\\"token punctuation\\">:</span> my<span class=\\"token punctuation\\">-</span>service\\n      <span class=\\"token key atrule\\">rule</span><span class=\\"token punctuation\\">:</span> PathPrefix(`/`)\\n\\n  <span class=\\"token comment\\"># Add the middleware</span>\\n  <span class=\\"token key atrule\\">middlewares</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">my-stripprefix</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">stripPrefix</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token key atrule\\">prefixes</span><span class=\\"token punctuation\\">:</span>\\n          <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"/\\"</span>\\n    <span class=\\"token key atrule\\">my-traefik-timer-plugin</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">plugin</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token key atrule\\">traefik-timer-plugin</span><span class=\\"token punctuation\\">:</span>\\n          <span class=\\"token key atrule\\">log</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"true\\"</span>\\n  <span class=\\"token comment\\"># Add the service</span>\\n  <span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">my-service</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">loadBalancer</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token key atrule\\">servers</span><span class=\\"token punctuation\\">:</span>\\n          <span class=\\"token punctuation\\">-</span> <span class=\\"token key atrule\\">url</span><span class=\\"token punctuation\\">:</span> http<span class=\\"token punctuation\\">:</span>//localhost<span class=\\"token punctuation\\">:</span>8080/\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
