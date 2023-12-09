import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-m6Hcf_8v.js";const i={},u=n("h1",{id:"entity-relationship",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#entity-relationship","aria-hidden":"true"},"#"),s(" Entity-Relationship")],-1),r=n("p",null,"Navigation properties are one of FreeSql's characteristic functions, which can be configured by agreement or customized configuration of the relationship between objects.",-1),k={href:"https://www.cnblogs.com/FreeSql/p/16351417.html",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"With navigation properties, multi-table query is very convenient. Directly using navigation objects in lambda expressions can get the IDE's BUFF blessing.",-1),y=n("ul",null,[n("li",null,"Naming convention,or not (need to specify Navigate attribute association);"),n("li",null,[s("If there is no association relationship, you can specify the "),n("code",null,"On"),s(" condition when querying, "),n("code",null,"LeftJoin(a => a.Parent.Id == a.ParentId)"),s(";")]),n("li",null,[s("If there is an association relationship, just use the navigation object directly, and the "),n("code",null,"On"),s(" condition will be automatically attached;")])],-1),v={href:"https://www.cnblogs.com/kellynic/p/13575053.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<blockquote><p>Warm up note: to load navigation attributes, you need to solve the problem of dead cycle reference. When the reference relationship is very complex, it may lead to the failure of using navigation attributes for the first time. The second time is enough. The solution is to preheat all entity classes when the program starts, and while execute fsql.Select&lt;object&gt;().Astype (entity type);</p></blockquote><p>OneToMany/ManyToMany supported by collection navigation properties: ICollection&lt;T&gt;、List&lt;T&gt;、ObservableCollection&lt;T&gt;</p><h2 id="custom-navigation-relationship" tabindex="-1"><a class="header-anchor" href="#custom-navigation-relationship" aria-hidden="true">#</a> Custom Navigation Relationship</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//Navigation properties, OneToMany</span>
<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>song_tag<span class="token punctuation">.</span>song_id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>song_tag<span class="token punctuation">&gt;</span></span> Obj_song_tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">//Find the song_id property in song_tag and associate it with this ENTITY.PrimaryKey</span>

<span class="token comment">//Navigation properties, ManyToOne/OneToOne</span>
<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>song_id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Obj_song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">//Find the song_id property in THIS ENTITY and associate it with the Song.PrimaryKey</span>

<span class="token comment">//Navigation properties, ManyToMany</span>
<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span>ManyToMany <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">tag_song</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>tag<span class="token punctuation">&gt;</span></span> tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>You can also use FluentApi to set the navigation relationship externally:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>YOUR_ENTITY<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a
    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>roles<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MANY_TO_MANY_MID_ENTITY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>users<span class="token punctuation">,</span> <span class="token string">&quot;uid&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Priority: Attribute&gt; FluentApi</p><blockquote><p>Note:</p></blockquote><ol><li><p>Set <code>Column(IsIgnore = true)</code> on Property, then the navigation property will be invalid</p></li><li><p>The string set by Navigate is the property name of the type, NOT THE TABLE IR FIELD NAME.</p></li></ol><h2 id="detect-navigation-properties" tabindex="-1"><a class="header-anchor" href="#detect-navigation-properties" aria-hidden="true">#</a> Detect Navigation Properties</h2><p>How to detect whether a navigation property is configured to take effect:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> tbref <span class="token operator">=</span> fsql<span class="token punctuation">.</span>CodeFirst
    <span class="token punctuation">.</span><span class="token function">GetTableByEntity</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GetTableRef</span><span class="token punctuation">(</span><span class="token string">&quot;Children&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Method signature:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GetTableRef(string propertyName, bool isThrow);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="naming-convention-no-need-to-specify-navigate" tabindex="-1"><a class="header-anchor" href="#naming-convention-no-need-to-specify-navigate" aria-hidden="true">#</a> Naming convention (no need to specify Navigate)</h2><h3 id="one-to-one" tabindex="-1"><a class="header-anchor" href="#one-to-one" aria-hidden="true">#</a> One-to-One</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">UserExt</span> UserExt <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">UserExt</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id、UserExtId、UserExt_id</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),b={href:"https://github.com/dotnetcore/FreeSql/issues/45",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="many-to-one" tabindex="-1"><a class="header-anchor" href="#many-to-one" aria-hidden="true">#</a> Many-to-One</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>


    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> AGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> BGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="one-to-many" tabindex="-1"><a class="header-anchor" href="#one-to-many" aria-hidden="true">#</a> One-to-Many</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> AUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> BUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>


    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> AGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> BGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h={href:"https://github.com/dotnetcore/FreeSql/issues/46",target:"_blank",rel:"noopener noreferrer"},w=t(`<h3 id="parent-and-children" tabindex="-1"><a class="header-anchor" href="#parent-and-children" aria-hidden="true">#</a> Parent and Children</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> ParentId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//ParentId、Parent_id</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Group<span class="token punctuation">&gt;</span></span> Childs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The parent-children relationship is similar to One-to-Many mode. You can also refer to this link:</p>`,3),f={href:"https://github.com/dotnetcore/FreeSql/issues/46",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="many-to-many" tabindex="-1"><a class="header-anchor" href="#many-to-many" aria-hidden="true">#</a> Many-to-Many</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Song_tag</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Song_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Tag_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Tag</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> Parent_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> Songs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Song, Tag, Song_tag, these three entities use the four relationships: OneToMany, ManyToOne, Parent, and ManyToMany.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Entity-Attributes">《CodeFirst Mode, Part 1: Entity Attributes》</a></li><li><a href="FluentApi-Mode">《CodeFirst Mode, Part 2: FluentApi》</a></li><li><a href="Custom-Attributes">《CodeFirst Mode, Part 3: Custom Attributes》</a></li><li><a href="Type-Mapping">《CodeFirst Mode, Part 4: Type Mapping》</a></li><li><a href="Import-Entity-Configuration-from-Database">《Import Entity Configuration from Database》</a></li></ul>`,5);function I(T,x){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[s("Navigation properties have six configuration relationships: OneToMany, ManyToOne, ManyToMany, OneToOne, Parent, And "),n("a",k,[s("PgArrayToMany"),e(a)]),s(".")]),d,y,n("p",null,[n("a",v,[s("《What problems can navigation properties solve?》"),e(a)])]),m,n("p",null,[n("a",b,[s("《How to add data in one-to-one mode?》"),e(a)])]),g,n("p",null,[n("a",h,[s("《How to add data in one-to-many mode?》"),e(a)])]),w,n("p",null,[n("a",f,[s("《How to add data in one-to-many mode?》"),e(a)])]),_])}const C=p(i,[["render",I],["__file","Entity-Relationship.html.vue"]]);export{C as default};
