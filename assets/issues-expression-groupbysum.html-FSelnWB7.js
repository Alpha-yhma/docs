import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-m6Hcf_8v.js";const t={},e=p(`<h1 id="动态聚合列-sum-case-when" tabindex="-1"><a class="header-anchor" href="#动态聚合列-sum-case-when" aria-hidden="true">#</a> 动态聚合列 sum(case when ...)</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span><span class="token punctuation">,</span>
v1 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
v2 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">2</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
v3 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">3</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token string">&quot;table&quot;</span> a
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上 v1,v2,v3 是动态聚合值，如果 where IN (1,2,3,4) 那就会产生 v1-v4</p><p>正常情况下，静态的 lambda 查询没办法处理这种动态列查询。</p><hr><p>变通一下，这样查询：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span><span class="token punctuation">,</span>
v <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">2</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">case</span> <span class="token keyword">when</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">3</span> <span class="token keyword">then</span> <span class="token number">1</span> <span class="token keyword">else</span> <span class="token number">0</span> <span class="token keyword">end</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token string">&quot;table&quot;</span> a
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span><span class="token string">&quot;Time&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此便可以使用 FreeSql 实现：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> ids <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>table<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> ids<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Time<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>g <span class="token operator">=&gt;</span> <span class="token keyword">new</span> 
    <span class="token punctuation">{</span>
        Time <span class="token operator">=</span> g<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
        Values <span class="token operator">=</span> MyExt<span class="token punctuation">.</span><span class="token function">SumCase</span><span class="token punctuation">(</span>ids<span class="token punctuation">,</span> g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义解析表达式树，实现如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ExpressionCall</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyExt</span>
<span class="token punctuation">{</span>
    <span class="token keyword">internal</span> <span class="token keyword">static</span> <span class="token class-name">ThreadLocal<span class="token punctuation">&lt;</span>ExpressionCallContext<span class="token punctuation">&gt;</span></span> expContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ThreadLocal<span class="token punctuation">&lt;</span>ExpressionCallContext<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token generic-method"><span class="token function">SumCase</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TValue<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">RawValue</span></span><span class="token punctuation">]</span> <span class="token class-name">TValue<span class="token punctuation">[</span><span class="token punctuation">]</span></span> values<span class="token punctuation">,</span> <span class="token class-name">TValue</span> column<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> ctx <span class="token operator">=</span> expContext<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>Result <span class="token operator">=</span> ctx<span class="token punctuation">.</span>Utility<span class="token punctuation">.</span>CommonUtils<span class="token punctuation">.</span><span class="token function">StringConcat</span><span class="token punctuation">(</span>
            values<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> idx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
                <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
                    ctx<span class="token punctuation">.</span>_commonExp<span class="token punctuation">.</span>_common<span class="token punctuation">.</span><span class="token function">IsNull</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;SUM(case when </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ctx<span class="token punctuation">.</span>ParsedContent<span class="token punctuation">[</span><span class="token string">&quot;column&quot;</span><span class="token punctuation">]</span></span><span class="token punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ctx<span class="token punctuation">.</span><span class="token function">FormatSql</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string"> then 1 else 0 end)&quot;</span></span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    idx <span class="token operator">==</span> values<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">?</span> <span class="token string">&quot;&#39;&#39;&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;&#39;,&#39;&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SelectMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
            values<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>val <span class="token operator">=&gt;</span> 
                <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
                    <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">TValue</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SelectMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">default</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","issues-expression-groupbysum.html.vue"]]);export{r as default};
