import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as l,c as i,a,b as n,d as t,w as p,e}from"./app-m6Hcf_8v.js";const u={},r=e(`<h1 id="多租户" tabindex="-1"><a class="header-anchor" href="#多租户" aria-hidden="true">#</a> 多租户</h1><h3 id="什么是多租户" tabindex="-1"><a class="header-anchor" href="#什么是多租户" aria-hidden="true">#</a> 什么是多租户</h3><p>维基百科：“软件多租户是指一种软件架构，在这种软件架构中，软件的一个实例运行在服务器上并且为多个租户服务”。一个租户是一组共享该软件实例特定权限的用户。有了多租户架构，软件应用被设计成为每个租户提供一个 专用的实例包括该实例的数据的共享，还可以共享配置，用户管理，租户自己的功能和非功能属性。多租户和多实例架构相比，多租户分离了代表不同的租户操作的多个实例。</p><p>多租户用于创建 Saas（Software as-a service）应用（云处理）。</p><h3 id="方案一-按租户字段区分" tabindex="-1"><a class="header-anchor" href="#方案一-按租户字段区分" aria-hidden="true">#</a> 方案一：按租户字段区分</h3><p>第1步：了解 AsyncLocal&lt;int&gt;</p><p>ThreadLocal 可以理解为字典 Dictionary&lt;int, string&gt; Key=线程ID Value=值，跨方法时只需要知道线程ID，就能取得对应的 Value。</p><p>我们知道跨异步方法可能造成线程ID变化，ThreadLocal 将不能满足我们使用。</p><p>AsyncLocal 是 ThreadLocal 的升级版，解决跨异步方法也能获取到对应的 Value。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TenantManager</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 注意一定是 static 静态化</span>
    <span class="token keyword">static</span> <span class="token class-name">AsyncLocal<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> _asyncLocal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AsyncLocal<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Current
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> <span class="token operator">=&gt;</span> _asyncLocal<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
        <span class="token keyword">set</span> <span class="token operator">=&gt;</span> _asyncLocal<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第2步：FreeSql 全局过滤器，让任何查询/更新/删除，都附带租户条件；</p><p>以下代码若当前没有设置租户值，则过滤器不生效，什么意思？</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 全局过滤器只需要在 IFreeSql 初始化处执行一次</span>
<span class="token comment">// ITenant 可以是自定义接口，也可以是任何一个包含 TenantId 属性的实体类型，FreeSql 不需要为每个实体类型都设置过滤器（一次即可）</span>
fsql<span class="token punctuation">.</span>GlobalFilter<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ApplyIf</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ITenant<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token string">&quot;TenantFilter&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 过滤器名称</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> TenantManager<span class="token punctuation">.</span>Current <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 过滤器生效判断</span>
    a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TenantId <span class="token operator">==</span> TenantManager<span class="token punctuation">.</span>Current <span class="token comment">// 过滤器条件</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

TenantManager<span class="token punctuation">.</span>Current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SELECT .. FROM T</span>

TenantManager<span class="token punctuation">.</span>Current <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SELECT .. FROM T WHERE TenantId = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第3步：FreeSql Aop.AuditValue 对象审计事件，实现统一拦截插入、更新实体对象；</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>AuditValue <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>TenantManager<span class="token punctuation">.</span>Current <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>PropertyType <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;TenantId&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span>Value <span class="token operator">=</span> TenantManager<span class="token punctuation">.</span>Current
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第4步：AspnetCore Startup.cs Configure 中间件处理租户逻辑；</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> app<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 使用者通过 aspnetcore 中间件，解析 token 获得 租户ID</span>
            TenantManager<span class="token punctuation">.</span>Current <span class="token operator">=</span> <span class="token function">YourGetTenantIdFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 清除租户状态</span>
            TenantManager<span class="token punctuation">.</span>Current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseRouting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseEndpoints</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wherecascade" tabindex="-1"><a class="header-anchor" href="#wherecascade" aria-hidden="true">#</a> WhereCascade</h3><p>多表查询时，像 isdeleted 每个表都给条件，挺麻烦的。WhereCascade 使用后生成 sql 时，所有表都附上这个条件。多表租户条件也可以这样解决。</p><p>如：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>t1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">LeftJoin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>t2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">WhereCascade</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>IsDeleted <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的 SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> t1
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> t2 <span class="token keyword">on</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">(</span>t2<span class="token punctuation">.</span>IsDeleted <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">WHERE</span> t1<span class="token punctuation">.</span>IsDeleted <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实体可附加表达式时才生效，支持子表查询。单次查询使用的表数目越多收益越大。</p><p>可应用范围：</p><ul><li>子查询，一对多、多对多、自定义的子查询；</li><li>Join 查询，导航属性、自定义的 Join 查询；</li><li>Include/IncludeMany 的子集合查询；</li></ul><blockquote><p>暂时不支持【延时属性】的广播；</p></blockquote><blockquote><p>此功能和【过滤器】不同，用于单次多表查询条件的传播；</p></blockquote><h3 id="方案二-按租户分表" tabindex="-1"><a class="header-anchor" href="#方案二-按租户分表" aria-hidden="true">#</a> 方案二：按租户分表</h3><p>此方案要求每个租户对应不同的数据表，如 Goods_1、Goods_2、Goods_3 分别对应 租户1、租户2、租户3 的商品表。</p><p>这其实就是一般的分表方案，FreeSql 提供了分表场景的几个 API：</p><ul><li>创建表 fsql.CodeFirst.SyncStructure(typeof(Goods), &quot;Goods_1&quot;)</li><li>操作表 CURD</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> goodsRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Goods<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> old <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Goods</span><span class="token punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">TenantManager<span class="token punctuation">.</span>Current</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面我们得到一个仓储按租户分表，使用它 CURD 最终会操作 Goods_1 表。</p>`,34),k=e(`<h3 id="方案三-按租户分库" tabindex="-1"><a class="header-anchor" href="#方案三-按租户分库" aria-hidden="true">#</a> 方案三：按租户分库</h3><ul><li>场景1：同数据库实例（未跨服务器），租户间使用不同的数据库名或Schema区分，使用方法与方案二相同；</li><li>场景2：跨服务器分库，本段讲解该场景；</li></ul><p>第1步：FreeSql.Cloud 为 FreeSql 提供跨数据库访问，分布式事务TCC、SAGA解决方案，支持 .NET Core 2.1+, .NET Framework 4.0+.</p><p>原本使用 FreeSqlBuilder 创建 IFreeSql，需要使用 FreeSqlCloud 代替，因为 FreeSqlCloud 也实现了 IFreeSql 接口。</p><blockquote><p>dotnet add package FreeSql.Cloud</p></blockquote><p>or</p><blockquote><p>Install-Package FreeSql.Cloud</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">FreeSqlCloud<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlCloud<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    fsql<span class="token punctuation">.</span>DistributeTrace <span class="token operator">=</span> log <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fsql<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>SqlServer<span class="token punctuation">,</span> <span class="token string">&quot;data source=main.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//db.Aop.CommandAfter += ...</span>
        <span class="token keyword">return</span> db<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> app<span class="token punctuation">,</span> <span class="token class-name">IWebHostEnvironment</span> env<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 使用者通过 aspnetcore 中间件，解析 token，查询  main 库得到租户信息。</span>
            <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> tenant<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> connectionString<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">YourGetTenantFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 只会首次注册，如果已经注册过则不生效</span>
            fsql<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>tenant<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>SqlServer<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//db.Aop.CommandAfter += ...</span>
                <span class="token keyword">return</span> db<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 切换租户</span>
            fsql<span class="token punctuation">.</span><span class="token function">Change</span><span class="token punctuation">(</span>tenant<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 切换回 main 库</span>
            fsql<span class="token punctuation">.</span><span class="token function">Change</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseRouting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseEndpoints</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第2步：直接使用 IFreeSql 访问租户数据库</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
<span class="token punctuation">{</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">FromServices</span></span><span class="token punctuation">]</span> <span class="token class-name">IFreeSql</span> fsql<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 使用 fsql 操作当前租户对应的数据库</span>
        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>临时访问其他数据库表，使用 FreeSqlCloud 对象 Use(&quot;db3&quot;).Select&lt;T&gt;().ToList()</li><li>主库基础表，应该使用 FreeSqlCloud 对象 EntitySteering 设置固定永久定向到 main，而不需要使用 .Use 手工切换</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>EntitySteering <span class="token operator">=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>EntityType <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//查询 T 自动定向 db3</span>
        e<span class="token punctuation">.</span>DBKey <span class="token operator">=</span> <span class="token string">&quot;db3&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function d(v,m){const s=c("RouterLink");return l(),i("div",null,[r,a("blockquote",null,[a("p",null,[n("更多说明参考："),t(s,{to:"/guide/repository.html"},{default:p(()=>[n("《FreeSql.Repository 仓储》")]),_:1}),n("、"),t(s,{to:"/guide/sharding.html"},{default:p(()=>[n("《分表分库》")]),_:1}),n("。")])]),k])}const y=o(u,[["render",d],["__file","multi-tenancy.html.vue"]]);export{y as default};
