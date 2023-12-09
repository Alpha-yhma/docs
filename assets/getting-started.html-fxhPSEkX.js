import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as r,c as d,d as o,w as a,a as n,b as s,e as c}from"./app-m6Hcf_8v.js";const k={},m=c(`<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><p>FreeSql is a powerful <strong>.NET ORM</strong> that supports all <em>.NET Standard</em> runtime platforms like <em>.NET Framework 4.0+</em>, <em>.NET Core 2.1+</em> and <em>Xamarin</em>, etc.</p><p>FreeSql supports MySql, SqlServer, PostgreSQL, Oracle, Sqlite, Firebird, Dameng, Shentong Database, Kingbase ES(V008R003), Hangao Database, ClickHouse, GBase and MsAccess.</p><p>QQ Groups：4336577(full)、8578575(full)、<strong>52508226(available)</strong></p><h2 id="models" tabindex="-1"><a class="header-anchor" href="#models" aria-hidden="true">#</a> Models</h2><p>FreeSql uses a model to perform data access. The model is represented by an entity class to represent a database table or view for querying and saving data.</p><p>The entity model can be generated from an existing database, and FreeSql provides the <code>IDbFirst</code> interface to <a href="DbFirst-Mode">generate the entity model</a>.</p><p>Or you can create the model manually, and then create or modify the database based on the model. FreeSql provides an API for the <code>ICodeFirst</code> synchronization structure (it can even be synchronized automatically during the development phase).</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">FreeSql<span class="token punctuation">.</span>DataAnnotations</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BlogId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Rating <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> Packages</h2><p>FreeSql.Provider.XXX (<a href="Install">Optional Providers</a>)</p>`,11),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("dotnet "),n("span",{class:"token function"},"add"),s(` package FreeSql
dotnet `),n("span",{class:"token function"},"add"),s(` package FreeSql.Provider.Sqlite
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`Install-Package FreeSql
Install-Package FreeSql.Provider.Sqlite
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h2",{id:"declaring",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#declaring","aria-hidden":"true"},"#"),s(" Declaring")],-1),g=n("blockquote",null,[n("p",null,"Note: IFreeSql should be declared as a singleton in the project, not created every time it is used.")],-1),S=n("ul",null,[n("li",null,".NET Core Singleton")],-1),f=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"ConfigureServices"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IServiceCollection"),s(" services"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},[s("Func"),n("span",{class:"token punctuation"},"<"),s("IServiceProvider"),n("span",{class:"token punctuation"},","),s(" IFreeSql"),n("span",{class:"token punctuation"},">")]),s(" implementationFreeSql "),n("span",{class:"token operator"},"="),s(" r "),n("span",{class:"token operator"},"=>"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"IFreeSql"),s(" fsql "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("FreeSql"),n("span",{class:"token punctuation"},"."),s("FreeSqlBuilder")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseConnectionString"),n("span",{class:"token punctuation"},"("),s("FreeSql"),n("span",{class:"token punctuation"},"."),s("DataType"),n("span",{class:"token punctuation"},"."),s("Sqlite"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'@"Data Source=db1.db"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseMonitorCommand"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"=>"),s(" Console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Sql：'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("cmd"),n("span",{class:"token punctuation"},"."),s("CommandText")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseAutoSyncStructure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"//Automatically synchronize the entity structure to the database."),s(`
        `),n("span",{class:"token comment"},"//FreeSql will not scan the assembly, and will generate a table if and only when the CRUD instruction is executed."),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" fsql"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"AddSingleton"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("IFreeSql"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("implementationFreeSql"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" builder "),n("span",{class:"token operator"},"="),s(" WebApplication"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateBuilder"),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},[s("Func"),n("span",{class:"token punctuation"},"<"),s("IServiceProvider"),n("span",{class:"token punctuation"},","),s(" IFreeSql"),n("span",{class:"token punctuation"},">")]),s(" implementationFreeSql "),n("span",{class:"token operator"},"="),s(" r "),n("span",{class:"token operator"},"=>"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"IFreeSql"),s(" fsql "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("FreeSql"),n("span",{class:"token punctuation"},"."),s("FreeSqlBuilder")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseConnectionString"),n("span",{class:"token punctuation"},"("),s("FreeSql"),n("span",{class:"token punctuation"},"."),s("DataType"),n("span",{class:"token punctuation"},"."),s("Sqlite"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'@"Data Source=db1.db"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseMonitorCommand"),n("span",{class:"token punctuation"},"("),s("cmd "),n("span",{class:"token operator"},"=>"),s(" Console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"Sql：'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[s("cmd"),n("span",{class:"token punctuation"},"."),s("CommandText")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UseAutoSyncStructure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"//Automatically synchronize the entity structure to the database."),s(`
        `),n("span",{class:"token comment"},"//FreeSql will not scan the assembly, and will generate a table if and only when the CRUD instruction is executed."),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" fsql"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
builder`),n("span",{class:"token punctuation"},"."),s("Services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"AddSingleton"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("IFreeSql"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("implementationFreeSql"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q={href:"https://github.com/dotnetcore/FreeSql/issues/44",target:"_blank",rel:"noopener noreferrer"},D=n("li",null,".NET Framework Singleton",-1),_=c(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DB</span>
<span class="token punctuation">{</span>
   <span class="token keyword">static</span> Lazy<span class="token operator">&lt;</span>IFreeSql<span class="token operator">&gt;</span>sqliteLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=db1.db&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Sql：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">cmd<span class="token punctuation">.</span>CommandText</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">//Automatically synchronize the entity structure to the database.</span>
        <span class="token comment">//FreeSql will not scan the assembly, and will generate a table if and only when the CRUD instruction is executed.</span>
        <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> Sqlite <span class="token operator">=&gt;</span> sqliteLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then when using it, use <code>fsql</code> directly through <code>IFreeSql fsql = DB.Sqlite;</code>.</p><p>IFreeSql is the top-level object of ORM, and all operations use its methods or properties:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Query</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Insert</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Update</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Delete</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// Insert or Update</span>
fsql<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Transaction</span>

fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">;</span> <span class="token comment">//CodeFirst Object</span>
fsql<span class="token punctuation">.</span>DbFirst<span class="token punctuation">;</span> <span class="token comment">//DbFirst Object</span>
fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">;</span> <span class="token comment">//Ado Object</span>
fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">;</span> <span class="token comment">//Aop Object</span>
fsql<span class="token punctuation">.</span>GlobalFilter<span class="token punctuation">;</span> <span class="token comment">//Gloabl Filter Object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migration" tabindex="-1"><a class="header-anchor" href="#migration" aria-hidden="true">#</a> Migration</h2><p>When the program is running, <code>FreeSql</code> will check the <code>AutoSyncStructure</code> parameter, and use this condition to determine whether to compare the changes between the entity and the database structure to achieve the purpose of automatic migration. For more information, please refer to the <a href="CodeFirst-Mode">CodeFirst Documentation</a>.</p><blockquote><p>Note: Use this feature in a production environment with <strong>caution</strong>.</p></blockquote><blockquote><p>Note: Use this feature in a production environment with <strong>caution</strong>.</p></blockquote><blockquote><p>Note: Use this feature in a production environment with <strong>caution</strong>.</p></blockquote><h2 id="query-data" tabindex="-1"><a class="header-anchor" href="#query-data" aria-hidden="true">#</a> Query Data</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> blogs <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Rating <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Skip</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//Query the record from line 100 to line 110</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="insert-data" tabindex="-1"><a class="header-anchor" href="#insert-data" aria-hidden="true">#</a> Insert Data</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> blog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Blog</span> <span class="token punctuation">{</span> Url <span class="token operator">=</span> <span class="token string">&quot;http://sample.com&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
blog<span class="token punctuation">.</span>BlogId <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteIdentity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-data" tabindex="-1"><a class="header-anchor" href="#update-data" aria-hidden="true">#</a> Update Data</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url<span class="token punctuation">,</span> <span class="token string">&quot;http://sample2222.com&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url <span class="token operator">==</span> <span class="token string">&quot;http://sample.com&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-data" tabindex="-1"><a class="header-anchor" href="#delete-data" aria-hidden="true">#</a> Delete Data</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url <span class="token operator">==</span> <span class="token string">&quot;http://sample.com&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="freesqlbuilder" tabindex="-1"><a class="header-anchor" href="#freesqlbuilder" aria-hidden="true">#</a> FreeSqlBuilder</h1><table><thead><tr><th>Methods</th><th>Return</th><th>Description</th></tr></thead><tbody><tr><td>UseConnectionString</td><td>this</td><td>Connection string</td></tr><tr><td>UseSlave</td><td>this</td><td>Set up the slave database, support multipleslace databases.</td></tr><tr><td>UseConnectionFactory</td><td>this</td><td>Set up a custom database connection object (abandon the built-in object connection pool technology)</td></tr><tr><td>UseAutoSyncStructure</td><td>this</td><td><strong>[Recommended development environment]</strong> Automatically synchronize the entity structure to the database, and check entity creation or modification table structure during program operation</td></tr><tr><td>UseNoneCommandParameter</td><td>this</td><td>Do not use command parameterized execution. for <code>Insert/Update</code>, you can also temporarily use <code>IInsert/IUpdate.NoneParameter()</code></td></tr><tr><td>UseGenerateCommandParameterWithLambda</td><td>this</td><td>For lambda expression analysis, generate command parameterized execution</td></tr><tr><td>UseLazyLoading</td><td>this</td><td>Turn on the lazy loading function,</td></tr><tr><td>UseMonitorCommand</td><td>this</td><td>Monitor before and after global SQL execution.</td></tr><tr><td>UseMappingPriority</td><td>this</td><td>Specify mapping priority（default Aop &lt; FluentApi &lt; Attribute）</td></tr><tr><td>UseNameConvert</td><td>this</td><td>Automatic name conversion Entity -&gt; Db</td></tr><tr><td>UseExitAutoDisposePool</td><td>this</td><td>Listen to the AppDomain.CurrentDomain.ProcessExit/Console.CancelKeyPress event to automatically release the connection pool (default true)</td></tr><tr><td>Build&lt;T&gt;</td><td>IFreeSql&lt;T&gt;</td><td>Create an IFreeSql object. Note: Singleton design, don’t repeat creation</td></tr></tbody></table><h1 id="connectionstrings" tabindex="-1"><a class="header-anchor" href="#connectionstrings" aria-hidden="true">#</a> ConnectionStrings</h1>`,20),F=n("thead",null,[n("tr",null,[n("th",null,"DataType"),n("th",null,"ConnectionString")])],-1),T=n("tr",null,[n("td",null,"DataType.MySql"),n("td",null,"Data Source=127.0.0.1;Port=3306;User ID=root;Password=root; Initial Catalog=cccddd;Charset=utf8; SslMode=none;Min pool size=1")],-1),P=n("tr",null,[n("td",null,"DataType.PostgreSQL"),n("td",null,"Host=192.168.164.10;Port=5432;Username=postgres;Password=123456; Database=tedb;Pooling=true;Minimum Pool Size=1")],-1),w=n("tr",null,[n("td",null,"DataType.SqlServer"),n("td",null,"Data Source=.;User Id=sa;Password=123456;Initial Catalog=freesqlTest;TrustServerCertificate=true;Pooling=true;Min Pool Size=1")],-1),I=n("tr",null,[n("td",null,"DataType.Oracle"),n("td",null,"user id=user1;password=123456; data source=//127.0.0.1:1521/XE;Pooling=true;Min Pool Size=1")],-1),C=n("tr",null,[n("td",null,"DataType.Sqlite"),n("td",null,"Data Source=|DataDirectory|\\document.db; Attachs=xxxtb.db; Pooling=true;Min Pool Size=1")],-1),U=n("tr",null,[n("td",null,"DataType.Firebird"),n("td",null,"database=localhost:D:\\fbdata\\EXAMPLES.fdb;user=sysdba;password=123456")],-1),A=n("tr",null,[n("td",null,"DataType.MsAccess"),n("td",null,"Provider=Microsoft.Jet.OleDb.4.0;Data Source=d:/accdb/2003.mdb")],-1),x=n("tr",null,[n("td",null,"DataType.Dameng(达梦)"),n("td",null,"server=127.0.0.1;port=5236;user id=2user;password=123456789;database=2user;poolsize=5")],-1),E=n("tr",null,[n("td",null,"DataType.ShenTong(神通)"),n("td",null,"HOST=192.168.164.10;PORT=2003;DATABASE=OSRDB;USERNAME=SYSDBA;PASSWORD=szoscar55;MAXPOOLSIZE=2")],-1),M=n("tr",null,[n("td",null,"DataType.KingbaseES(人大金仓) V008R003"),n("td",null,"Server=127.0.0.1;Port=54321;UID=USER2;PWD=123456789;database=TEST;MAXPOOLSIZE=2")],-1),B=n("tr",null,[n("td",null,"DataType.Gbase(南大通用)"),n("td",null,"Driver={GBase ODBC DRIVER (64-Bit)};Host=192.168.164.134;Service=9088;Server=gbase01;Database=testdb;Protocol=onsoctcp;Uid=gbasedbt;Pwd=GBase123;Db_locale=zh_CN.utf8;Client_locale=zh_CN.utf8")],-1),O=n("tr",null,[n("td",null,"DataType.OdbcMySql"),n("td",null,"Driver={MySQL ODBC 8.0 Unicode Driver}; Server=127.0.0.1;Persist Security Info=False; Trusted_Connection=Yes;UID=root;PWD=root; DATABASE=cccddd_odbc;Charset=utf8; SslMode=none;Min Pool Size=1")],-1),L=n("tr",null,[n("td",null,"DataType.OdbcSqlServer"),n("td",null,"Driver={SQL Server};Server=.;Persist Security Info=False; Trusted_Connection=Yes;Integrated Security=True; DATABASE=freesqlTest_odbc; Pooling=true;Min Pool Size=1")],-1),N=n("tr",null,[n("td",null,"DataType.OdbcOracle"),n("td",null,"Driver={Oracle in XE};Server=//127.0.0.1:1521/XE; Persist Security Info=False; Trusted_Connection=Yes;UID=odbc1;PWD=123456; Min Pool Size=1")],-1),z=n("tr",null,[n("td",null,"DataType.OdbcPostgreSQL"),n("td",null,"Driver={PostgreSQL Unicode(x64)};Server=192.168.164.10; Port=5432;UID=postgres;PWD=123456; Database=tedb_odbc;Pooling=true;Min Pool Size=1")],-1),R=n("tr",null,[n("td",null,"DataType.OdbcDameng (达梦)"),n("td",null,"Driver={DM8 ODBC DRIVER};Server=127.0.0.1:5236; Persist Security Info=False; Trusted_Connection=Yes; UID=USER1;PWD=123456789")],-1),W=n("tr",null,[n("td",null,"DataType.OdbcKingbaseES (人大金仓) V008R003"),n("td",null,"Driver={KingbaseES 8.2 ODBC Driver ANSI};Server=127.0.0.1;Port=54321;UID=USER2;PWD=123456789;database=TEST")],-1),Q=n("tr",null,[n("td",null,"DataType.Odbc"),n("td",null,"Driver={SQL Server};Server=.;Persist Security Info=False; Trusted_Connection=Yes;Integrated Security=True; DATABASE=freesqlTest_odbc; Pooling=true;Min pool size=1")],-1),j={href:"https://github.com/dotnetcore/FreeSql/tree/master/Providers/FreeSql.Provider.Custom",target:"_blank",rel:"noopener noreferrer"},G=n("td",null,"Custom connection string, access any database",-1),V=c('<h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Install">《Install FreeSql》</a></li><li><a href="Insert-Data">《FreeSql 101, Part 1: Insert Data》</a></li><li><a href="Delete-Data">《FreeSql 101, Part 2: Delete Data》</a></li><li><a href="Update-Data">《FreeSql 101, Part 3: Update Data》</a></li><li><a href="Query-Data">《FreeSql 101, Part 4: Query Data》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Unit-of-Work">《UnitOfWork》</a></li></ul>',2);function X(Y,H){const l=i("CodeTabs"),p=i("ExternalLinkIcon");return r(),d("div",null,[m,o(l,{id:"31",data:[{id:".NET CLI"},{id:"Package Manager"}]},{title0:a(({value:t,isActive:e})=>[s(".NET CLI")]),title1:a(({value:t,isActive:e})=>[s("Package Manager")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[b]),_:1},8,["data"]),v,g,S,o(l,{id:"54",data:[{id:".NET Core 5"},{id:".NET 6"}]},{title0:a(({value:t,isActive:e})=>[s(".NET Core 5")]),title1:a(({value:t,isActive:e})=>[s(".NET 6")]),tab0:a(({value:t,isActive:e})=>[f]),tab1:a(({value:t,isActive:e})=>[y]),_:1},8,["data"]),n("ul",null,[n("li",null,[n("a",q,[s(".NET Core injects multiple FreeSql instances"),o(p)])]),D]),_,n("table",null,[F,n("tbody",null,[T,P,w,I,C,U,A,x,E,M,B,O,L,N,z,R,W,Q,n("tr",null,[n("td",null,[n("a",j,[s("DataType.Custom"),o(p)])]),G])])]),V])}const Z=u(k,[["render",X],["__file","getting-started.html.vue"]]);export{Z as default};
