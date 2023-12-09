import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as u,c as i,a as s,b as n,d as a,w as e,e as c}from"./app-m6Hcf_8v.js";const k={},r=s("h1",{id:"导航属性-✨",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#导航属性-✨","aria-hidden":"true"},"#"),n(" 导航属性 ✨")],-1),d={href:"https://www.cnblogs.com/FreeSql/p/16351417.html",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"导航属性能干什么？",-1),m=c(`<p>导航属性进行多表查询非常方便，lambda 表达式中直接使用导航对象点点点，舒服！！</p><h2 id="自定义配置" tabindex="-1"><a class="header-anchor" href="#自定义配置" aria-hidden="true">#</a> 自定义配置</h2><p>OneToMany/ManyToMany 支持的类型：ICollection&lt;T&gt;、List&lt;T&gt;、ObservableCollection&lt;T&gt;</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//OneToMany</span>
<span class="token keyword">class</span> <span class="token class-name">Group</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>GroupId<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> Users <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token comment">//在 User 查找 GroupId 属性，与 本实体.主键 关联</span>
<span class="token punctuation">}</span>

<span class="token comment">//ManyToOne</span>
<span class="token keyword">class</span> <span class="token class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> GroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>GroupId<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> Group <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token comment">//在 本实体 查找 GroupId 属性，与 Group.主键 关联</span>
<span class="token punctuation">}</span>

<span class="token comment">//ManyToMany</span>
<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span>ManyToMany <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">TagSong</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Items <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>也可以使用 FluentApi 在外部设置导航关系：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a
    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>roles<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">TMid</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>users<span class="token punctuation">,</span> <span class="token string">&quot;uid&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：</p></blockquote><p>1、属性设置 Column(IsIgnore = true) 后，导航属性会失效</p><p>2、Navigate 设置的字符串是 类属性名，不是表 字段名！！！</p><blockquote><p>预热说明：导航属性配置的加载，因为要解决死循环引用，当相互引用关系很复杂的时候，可能导致首次使用导航属性失败，第二次就可以了。解决办法可以程序启动时就预热所有实体类，循环执行 fsql.Select&lt;object&gt;().AsType(实体类);</p></blockquote><h2 id="与非主键关联" tabindex="-1"><a class="header-anchor" href="#与非主键关联" aria-hidden="true">#</a> 与非主键关联</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//OneToMany</span>
<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>GroupId<span class="token punctuation">)</span><span class="token punctuation">,</span> TempPrimary <span class="token operator">=</span> <span class="token keyword">nameof</span><span class="token punctuation">(</span>Code<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> Users <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token comment">//ManyToOne</span>
<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>GroupId<span class="token punctuation">)</span><span class="token punctuation">,</span> TempPrimary <span class="token operator">=</span> <span class="token keyword">nameof</span><span class="token punctuation">(</span>Group<span class="token punctuation">.</span>Code<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">Group</span> Group <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非主键关联权支持 OneToMany/ManyToOne 两种关系，并且只能在查询的时候有效。（不支持级联保存、级联删除）</p><h2 id="检测导航属性" tabindex="-1"><a class="header-anchor" href="#检测导航属性" aria-hidden="true">#</a> 检测导航属性</h2><p>如何检测一个导航属性是否有效：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> tbref <span class="token operator">=</span> fsql<span class="token punctuation">.</span>CodeFirst
    <span class="token punctuation">.</span><span class="token function">GetTableByEntity</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GetTableRef</span><span class="token punctuation">(</span><span class="token string">&quot;Children&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GetTableRef(string propertyName, bool isThrow);</p><h2 id="onetoone" tabindex="-1"><a class="header-anchor" href="#onetoone" aria-hidden="true">#</a> OneToOne</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Key</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">UserExt</span> Ext <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">UserExt</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Key</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> UserId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>UserId<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一对一，要求两边都使用 Navigate 特性与自身的【主键】关联。（支持级联保存，级联删除）</p><h2 id="pgarraytomany" tabindex="-1"><a class="header-anchor" href="#pgarraytomany" aria-hidden="true">#</a> PgArrayToMany</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> RoleIds <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>RoleIds<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Role<span class="token punctuation">&gt;</span></span> Roles <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Role</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>RoleIds<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> Users <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),y={href:"https://github.com/dotnetcore/FreeSql/issues/1145",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="约定命名-无须指明-navigate" tabindex="-1"><a class="header-anchor" href="#约定命名-无须指明-navigate" aria-hidden="true">#</a> 约定命名（无须指明 Navigate）</h2><p>提示：本节内容稍微了解即可，不是必须掌握的，可以跳过。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> AUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> BUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> ParentId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//ParentId、Parent_id</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Group<span class="token punctuation">&gt;</span></span> Childs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">UserExt</span> Ext <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> AGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> BGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Role<span class="token punctuation">&gt;</span></span> Roles <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">UserExt</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> UserId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Role</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> Users <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">UserRole</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> UserId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> RoleId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Role</span> Role <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(g,h){const p=o("ExternalLinkIcon"),t=o("RouterLink");return u(),i("div",null,[r,s("p",null,[n("FreeSql 提供 OneToMany, ManyToOne, ManyToMany, OneToOne, Parent, "),s("a",d,[n("PgArrayToMany"),a(p)]),n(" 六种导航属性关系。")]),v,s("ul",null,[s("li",null,[a(t,{to:"/guide/select-multi-table.html"},{default:e(()=>[n("《多表查询》")]),_:1}),n(' Where(a => a.Parent.Parent.Name == "xx") Where(a => a.Childs.Any(b => b.title == "xxx"))')]),s("li",null,[a(t,{to:"/guide/select-include.html"},{default:e(()=>[n("《贪婪加载》")]),_:1}),n(" Include/IncludeMany")]),s("li",null,[a(t,{to:"/guide/select-lazy-loading.html"},{default:e(()=>[n("《延时加载》")]),_:1})]),s("li",null,[a(t,{to:"/guide/select-as-tree.html"},{default:e(()=>[n("《树表查询》")]),_:1})]),s("li",null,[a(t,{to:"/guide/cascade-saving.html"},{default:e(()=>[n("《级联保存》")]),_:1})]),s("li",null,[a(t,{to:"/guide/cascade-delete.html"},{default:e(()=>[n("《级联删除》")]),_:1})]),s("li",null,[a(t,{to:"/guide/aggregateroot.html"},{default:e(()=>[n("《聚合根仓储》")]),_:1})])]),m,s("p",null,[n("更多资料："),s("a",y,[n("#1145"),a(p)])]),b])}const I=l(k,[["render",w],["__file","navigate-attribute.html.vue"]]);export{I as default};
