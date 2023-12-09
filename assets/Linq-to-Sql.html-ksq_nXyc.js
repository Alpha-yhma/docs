import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-m6Hcf_8v.js";const e={},p=t(`<h1 id="linq-to-sql" tabindex="-1"><a class="header-anchor" href="#linq-to-sql" aria-hidden="true">#</a> Linq to Sql</h1><p>Originally not supporting IQueryable is mainly due to the consideration of usage habits. The intelligence of writing code will always prompt a bunch of methods you don&#39;t want to use. IQueryable itself provides a bunch of methods that cannot be implemented, as well as external intrusion extension methods, which seriously affect Coding experience. As shown below:</p><figure><img src="https://user-images.githubusercontent.com/16286519/57295126-5dd7bd00-70fc-11e9-99c0-d1c46423afa2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>For FreeSql v1.4.0+ version, please use the following items to install with commands (old version does not need to be installed):</p><blockquote><p>dotnet add package FreeSql.Extensions.Linq</p></blockquote><h2 id="special-note" tabindex="-1"><a class="header-anchor" href="#special-note" aria-hidden="true">#</a> Special Note</h2><ul><li><p>Please try not to use the following Linq methods in <code>ISelect</code> mode: <code>GroupJoin</code>, <code>Select</code>, <code>SelectMany</code>, <code>Join</code> and <code>DefaultIfEmpty</code>.</p></li><li><p>If you must use the <code>.Select()</code> method in <code>ISelect</code>, be sure to call it before <code>.ToList()</code>.</p></li></ul><h2 id="iqueryable" tabindex="-1"><a class="header-anchor" href="#iqueryable" aria-hidden="true">#</a> IQueryable</h2><p>FreeSql provides a powerful data query object: ISelect.</p><p>FreeSql.Extensions.Linq v1.4.0+ implements the common functions of IQueryable query objects for interactive use in various frameworks.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//Convert ISelect to IQueryable</span>
<span class="token class-name">IQueryable<span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span> queryable <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsQueryable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Linq Query</span>
<span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> queryable<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Restore IQueryable to ISelect</span>
<span class="token class-name">ISelect<span class="token punctuation">&lt;</span>Studeng<span class="token punctuation">&gt;</span></span> <span class="token keyword">select</span> <span class="token operator">=</span> queryable<span class="token punctuation">.</span><span class="token function">RestoreToSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: The implementation of IQueryable does not currently support <code>GroupBy</code>. You can consider using the <code>RestoreSelect</code> method to switch back to <code>ISelect</code> for query.</p><h2 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> Where</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id
    <span class="token keyword">select</span> a
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="specify-fields-select" tabindex="-1"><a class="header-anchor" href="#specify-fields-select" aria-hidden="true">#</a> Specify Fields: Select</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="casewhen" tabindex="-1"><a class="header-anchor" href="#casewhen" aria-hidden="true">#</a> CaseWhen</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
        a<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
        testsub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>
            time <span class="token operator">=</span> a<span class="token punctuation">.</span>age <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">?</span> <span class="token string">&quot;大于&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;小于或等于&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> Join</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId
    <span class="token keyword">select</span> a
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leftjoin" tabindex="-1"><a class="header-anchor" href="#leftjoin" aria-hidden="true">#</a> LeftJoin</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId <span class="token keyword">into</span> temp
    <span class="token keyword">from</span> tc <span class="token keyword">in</span> temp<span class="token punctuation">.</span><span class="token function">DefaultIfEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">select</span> a
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId <span class="token keyword">into</span> temp
    <span class="token keyword">from</span> tc <span class="token keyword">in</span> temp<span class="token punctuation">.</span><span class="token function">DefaultIfEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> tc<span class="token punctuation">.</span>id <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">join</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">on</span> a<span class="token punctuation">.</span>id equals b<span class="token punctuation">.</span>StudentId <span class="token keyword">into</span> temp
    <span class="token keyword">from</span> tc <span class="token keyword">in</span> temp<span class="token punctuation">.</span><span class="token function">DefaultIfEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> tc<span class="token punctuation">.</span>id <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multi-table-query-from" tabindex="-1"><a class="header-anchor" href="#multi-table-query-from" aria-hidden="true">#</a> Multi-table Query: From</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">from</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> b<span class="token punctuation">.</span>StudentId
    <span class="token keyword">select</span> a
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">from</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> b<span class="token punctuation">.</span>StudentId
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">from</span> b <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>School<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> b<span class="token punctuation">.</span>StudentId
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> bid <span class="token operator">=</span> b<span class="token punctuation">.</span>id <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grouping-groupby" tabindex="-1"><a class="header-anchor" href="#grouping-groupby" aria-hidden="true">#</a> Grouping: GroupBy</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">from</span> a <span class="token keyword">in</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Student<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">a</span><span class="token punctuation">.</span>id <span class="token operator">==</span> item<span class="token punctuation">.</span>id
    <span class="token keyword">group</span> a <span class="token keyword">by</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>name <span class="token punctuation">}</span> <span class="token keyword">into</span> g
    <span class="token keyword">select</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>
        g<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>id<span class="token punctuation">,</span> g<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
        cou <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        avg <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span>
        sum <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span>
        max <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span>
        min <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Min</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Query-from-Multi-Tablea">《Query from Multi Tables》</a></li><li><a href="Return-Data">《Return Data》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Expression-Function">《Expression Function》</a></li></ul>`,28),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","Linq-to-Sql.html.vue"]]);export{r as default};
