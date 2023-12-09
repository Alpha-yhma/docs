import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as i,a as n,b as s,d as t,w as p,e as a}from"./app-m6Hcf_8v.js";const u={},r=a(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>尝试过 ado.net、dapper、ef，以及Repository仓储，甚至自己还写过生成器工具，以便做常规CRUD操作。</p><p>它们日常操作不方便之处：</p><ul><li><p>每次使用前需要声明，再操作；</p></li><li><p>很多人一个实体类，对应一个操作类（或DAL、DbContext、Repository）；</p></li></ul><p>BaseEntity 是一种极简单的 CodeFirst 开发方式，特别对单表或多表CRUD，利用继承节省了每个实体类的重复属性（创建时间、ID等字段），软删除等功能，进行 crud 操作时不必时常考虑仓储的使用；</p><p>本文介绍 BaseEntity 一种极简约的 CRUD 操作方法。</p><h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点" aria-hidden="true">#</a> 功能特点</h2><ul><li><p>自动迁移实体结构（CodeFirst），到数据库；</p></li><li><p>直接操作实体的方法，进行 CRUD 操作；</p></li><li><p>简化用户定义实体类型，省去主键、常用字段的配置（如CreateTime、UpdateTime）；</p></li><li><p>实现单表、多表查询的软删除逻辑；</p></li></ul><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql.Extensions.BaseEntity
dotnet <span class="token function">add</span> package FreeSql.Provider.Sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>BaseEntity<span class="token punctuation">.</span><span class="token function">Initialization</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1、定义一个主键 int 并且自增的实体类型，BaseEntity TKey 指定为 int/long 时，会认为主键是自增；</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserGroup</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseEntity<span class="token punctuation">&lt;</span>UserGroup<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> GroupName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不想主键是自增键，可以重写属性：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserGroup</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseEntity<span class="token punctuation">&lt;</span>UserGroup<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> GroupName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=a(`<p>2、定义一个主键 Guid 的实体类型，保存数据时会自动产生有序不重复的 Guid 值（不用自己指定 Guid.NewGuid()）；</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseEntity<span class="token punctuation">&lt;</span>UserGroup<span class="token punctuation">,</span> Guid<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> UserName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="crud-使用" tabindex="-1"><a class="header-anchor" href="#crud-使用" aria-hidden="true">#</a> CRUD 使用</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//添加</span>
<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserGroup</span> <span class="token punctuation">{</span> GroupName <span class="token operator">=</span> <span class="token string">&quot;组一&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
item<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//更新</span>
item<span class="token punctuation">.</span>GroupName <span class="token operator">=</span> <span class="token string">&quot;组二&quot;</span><span class="token punctuation">;</span>
item<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//添加或更新</span>
item<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//软删除</span>
item<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//恢复软删除</span>
item<span class="token punctuation">.</span><span class="token function">Restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//根据主键获取对象</span>
<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> UserGroup<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//查询数据</span>
<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> UserGroup<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实体类型.Select 是一个查询对象，使用方法和 FreeSql.ISelect 一样；</p><p>支持多表查询时，软删除条件会附加在每个表中；</p>`,6),k=a(`<h2 id="事务建议" tabindex="-1"><a class="header-anchor" href="#事务建议" aria-hidden="true">#</a> 事务建议</h2><p>1、同线程事务，不支持异步：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">//todo ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、如果你是异步控</p><p>由于 AsyncLocal 平台兼容不好，所以交给外部管理事务。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">AsyncLocal<span class="token punctuation">&lt;</span>IUnitOfWork<span class="token punctuation">&gt;</span></span> _asyncUow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AsyncLocal<span class="token punctuation">&lt;</span>IUnitOfWork<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

BaseEntity<span class="token punctuation">.</span><span class="token function">Initialization</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> _asyncUow<span class="token punctuation">.</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Scoped 开始时：_asyncUow.Value = fsql.CreateUnitOfWork(); (也可以使用 UnitOfWorkManager 对象获取 uow)</p><p>在 Scoped 结束时：_asyncUow.Value = null;</p><p>如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    _asyncUow<span class="token punctuation">.</span>Value <span class="token operator">=</span> uow<span class="token punctuation">;</span>

    <span class="token keyword">try</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//todo ... BaseEntity 内部 curd 方法保持使用 uow 事务</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">finally</span>
    <span class="token punctuation">{</span>
        _asyncUow<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    uow<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(m,b){const e=o("RouterLink");return l(),i("div",null,[r,n("blockquote",null,[n("p",null,[s("有关更多实体的特性配置，请参考资料："),t(e,{to:"/guide/entity-attribute.html"},{default:p(()=>[s("实体特性")]),_:1})])]),d,n("blockquote",null,[n("p",null,[s("有关更多查询方法，请参考资料："),t(e,{to:"/guide/select.html"},{default:p(()=>[s("查询")]),_:1})])]),k])}const g=c(u,[["render",v],["__file","freesql-extensions-baseentity.html.vue"]]);export{g as default};
