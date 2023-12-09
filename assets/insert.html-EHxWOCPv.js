import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-m6Hcf_8v.js";const e={},p=t(`<h1 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h1><p><code>FreeSql</code> 提供单条和批量插入数据的方法，在特定的数据库执行还可以返回插入后的记录。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> connectionString <span class="token operator">=</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;&quot;</span> <span class="token operator">+</span>
    <span class="token string">&quot;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//自动同步实体结构到数据库</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>

<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> items<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;newtitle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> Clicks <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1、单条插入" tabindex="-1"><a class="header-anchor" href="#_1、单条插入" aria-hidden="true">#</a> 1、单条插入</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`, \`CreateTime\`)</span>
<span class="token comment">//VALUES(?Clicks0, ?Title0, ?CreateTime0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果表有自增列，插入数据后应该要返回 id。</p><p>方法 1：(原始)</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">long</span></span> id <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteIdentity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Id <span class="token operator">=</span> id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方法 2：(依赖 FreeSql.Repository)</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>内部会将插入后的自增值填充给 items[0].Id (支持批量插入回填)</p></blockquote><blockquote><p>DbFirst 模式序列：[Column(IsIdentity = true, InsertValueSql = &quot;seqname.nextval&quot;)]</p></blockquote><h2 id="_2、批量插入" tabindex="-1"><a class="header-anchor" href="#_2、批量插入" aria-hidden="true">#</a> 2、批量插入</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`, \`CreateTime\`)</span>
<span class="token comment">//VALUES(?Clicks0, ?Title0, ?CreateTime0), (?Clicks1, ?Title1, ?CreateTime1),</span>
<span class="token comment">//(?Clicks2, ?Title2, ?CreateTime2), (?Clicks3, ?Title3, ?CreateTime3),</span>
<span class="token comment">//(?Clicks4, ?Title4, ?CreateTime4), (?Clicks5, ?Title5, ?CreateTime5),</span>
<span class="token comment">//(?Clicks6, ?Title6, ?CreateTime6), (?Clicks7, ?Title7, ?CreateTime7),</span>
<span class="token comment">//(?Clicks8, ?Title8, ?CreateTime8), (?Clicks9, ?Title9, ?CreateTime9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解决了 SqlServer 批量添加容易导致的错误：传入的请求具有过多的参数。该服务器支持最多 2100 个参数。请减少参数的数目，然后重新发送该请求。</p></blockquote><blockquote><p>原理为拆成多个包用事务执行；</p></blockquote><p>当插入大批量数据时，内部采用分割分批执行的逻辑进行。分割规则如下：</p><table><thead><tr><th></th><th>数量</th><th>参数量</th></tr></thead><tbody><tr><td>MySql</td><td>5000</td><td>3000</td></tr><tr><td>PostgreSQL</td><td>5000</td><td>3000</td></tr><tr><td>SqlServer</td><td>1000</td><td>2100</td></tr><tr><td>Oracle</td><td>500</td><td>999</td></tr><tr><td>Sqlite</td><td>5000</td><td>999</td></tr></tbody></table><blockquote><p>数量：为每批分割的大小，如批量插入 10000 条数据，在 mysql 执行时会分割为两批。<br> 参数量：为每批分割的参数量大小，如批量插入 10000 条数据，每行需要使用 5 个参数化，在 mysql 执行时会分割为每批 3000 / 5。</p></blockquote><p>分割执行后，当外部未提供事务时，内部自开事务，实现插入完整性。也可以通过 BatchOptions 设置合适的值。</p><p>FreeSql 适配了每一种数据类型参数化，和不参数化的使用。批量插入建议关闭参数化功能，使用 .NoneParameter() 进行执行。</p><h2 id="_3、bulkcopy" tabindex="-1"><a class="header-anchor" href="#_3、bulkcopy" aria-hidden="true">#</a> 3、BulkCopy</h2><table><thead><tr><th>程序包</th><th>扩展方法</th><th>说明</th></tr></thead><tbody><tr><td>FreeSql.Provider.SqlServer</td><td>ExecuteSqlBulkCopy</td><td></td></tr><tr><td>FreeSql.Provider.MySqlConnector</td><td>ExecuteMySqlBulkCopy</td><td></td></tr><tr><td>FreeSql.Provider.Oracle</td><td>ExecuteOracleBulkCopy</td><td></td></tr><tr><td>FreeSql.Provider.Dameng</td><td>ExecuteDmBulkCopy</td><td>达梦</td></tr><tr><td>FreeSql.Provider.PostgreSQL</td><td>ExecutePgCopy</td><td></td></tr><tr><td>FreeSql.Provider.KingbaseES</td><td>ExecuteKdbCopy</td><td>人大金仓</td></tr></tbody></table><p>批量插入测试参考(52 个字段)</p><table><thead><tr><th></th><th>18W</th><th>1W</th><th>5K</th><th>2K</th><th>1K</th><th>500</th><th>100</th><th>50</th></tr></thead><tbody><tr><td>MySql 5.5 ExecuteAffrows</td><td>38,481</td><td>2,234</td><td>1,136</td><td>284</td><td>239</td><td>167</td><td>66</td><td>30</td></tr><tr><td>MySql 5.5 ExecuteMySqlBulkCopy</td><td>28,405</td><td>1,142</td><td>657</td><td>451</td><td>435</td><td>592</td><td>47</td><td>22</td></tr><tr><td>SqlServer Express ExecuteAffrows</td><td>402,355</td><td>24,847</td><td>11,465</td><td>4,971</td><td>2,437</td><td>915</td><td>138</td><td>88</td></tr><tr><td>SqlServer Express ExecuteSqlBulkCopy</td><td>21,065</td><td>578</td><td>326</td><td>139</td><td>105</td><td>79</td><td>60</td><td>48</td></tr><tr><td>PostgreSQL 10 ExecuteAffrows</td><td>46,756</td><td>3,294</td><td>2,269</td><td>1,019</td><td>374</td><td>209</td><td>51</td><td>37</td></tr><tr><td>PostgreSQL 10 ExecutePgCopy</td><td>10,090</td><td>583</td><td>337</td><td>136</td><td>88</td><td>61</td><td>30</td><td>25</td></tr></tbody></table><blockquote><p>18W 解释：插入 18 万行记录，表格中的数字是执行时间（单位 ms）</p></blockquote><p>批量插入测试参考(10 个字段)</p><table><thead><tr><th></th><th>18W</th><th>1W</th><th>5K</th><th>2K</th><th>1K</th><th>500</th><th>100</th><th>50</th></tr></thead><tbody><tr><td>MySql 5.5 ExecuteAffrows</td><td>11,171</td><td>866</td><td>366</td><td>80</td><td>83</td><td>50</td><td>24</td><td>34</td></tr><tr><td>MySql 5.5 ExecuteMySqlBulkCopy</td><td>6,504</td><td>399</td><td>257</td><td>116</td><td>87</td><td>100</td><td>16</td><td>16</td></tr><tr><td>SqlServer Express ExecuteAffrows</td><td>47,204</td><td>2,275</td><td>1,108</td><td>488</td><td>279</td><td>123</td><td>35</td><td>16</td></tr><tr><td>SqlServer Express ExecuteSqlBulkCopy</td><td>4,248</td><td>127</td><td>71</td><td>30</td><td>48</td><td>14</td><td>11</td><td>10</td></tr><tr><td>PostgreSQL 10 ExecuteAffrows</td><td>9,786</td><td>568</td><td>336</td><td>157</td><td>102</td><td>34</td><td>9</td><td>6</td></tr><tr><td>PostgreSQL 10 ExecutePgCopy</td><td>4,081</td><td>167</td><td>93</td><td>39</td><td>21</td><td>12</td><td>4</td><td>2</td></tr></tbody></table><blockquote><p>测试结果，是在相同操作系统下进行的，并且都有预热</p></blockquote><h2 id="_4、插入指定的列" tabindex="-1"><a class="header-anchor" href="#_4、插入指定的列" aria-hidden="true">#</a> 4、插入指定的列</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InsertColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Title\`)</span>
<span class="token comment">//VALUES(?Title0), (?Title1), (?Title2), (?Title3), (?Title4),</span>
<span class="token comment">//(?Title5), (?Title6), (?Title7), (?Title8), (?Title9)</span>

<span class="token class-name"><span class="token keyword">var</span></span> t4 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InsertColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span><span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Clicks <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`)</span>
<span class="token comment">//VALUES(?Clicks0, ?Title0), (?Clicks1, ?Title1), (?Clicks2, ?Title2),</span>
<span class="token comment">//(?Clicks3, ?Title3), (?Clicks4, ?Title4), (?Clicks5, ?Title5),</span>
<span class="token comment">//(?Clicks6, ?Title6), (?Clicks7, ?Title7), (?Clicks8, ?Title8),</span>
<span class="token comment">//(?Clicks9, ?Title9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、忽略列" tabindex="-1"><a class="header-anchor" href="#_5、忽略列" aria-hidden="true">#</a> 5、忽略列</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t5 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`Topic\`(\`Clicks\`, \`Title\`)</span>
<span class="token comment">//VALUES(?Clicks0, ?Title0), (?Clicks1, ?Title1), (?Clicks2, ?Title2),</span>
<span class="token comment">//(?Clicks3, ?Title3), (?Clicks4, ?Title4), (?Clicks5, ?Title5),</span>
<span class="token comment">//(?Clicks6, ?Title6), (?Clicks7, ?Title7), (?Clicks8, ?Title8),</span>
<span class="token comment">//(?Clicks9, ?Title9)</span>

<span class="token class-name"><span class="token keyword">var</span></span> t6 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span> a<span class="token punctuation">.</span>CreateTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">///INSERT INTO \`Topic\`(\`Clicks\`)</span>
<span class="token comment">//VALUES(?Clicks0), (?Clicks1), (?Clicks2), (?Clicks3), (?Clicks4),</span>
<span class="token comment">//(?Clicks5), (?Clicks6), (?Clicks7), (?Clicks8), (?Clicks9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、列插入优先级" tabindex="-1"><a class="header-anchor" href="#_6、列插入优先级" aria-hidden="true">#</a> 6、列插入优先级</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>全部列 <span class="token operator">&lt;</span> 指定列<span class="token punctuation">(</span>InsertColumns<span class="token punctuation">)</span> <span class="token operator">&lt;</span> 忽略列<span class="token punctuation">(</span>IgnoreColumns<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在没有使用 <code>InsertColumns/IgnoreColumns</code> 的情况下，实体所有列将被插入数据库；</p><p>在使用 <code>InsertColumns</code>，没有使用 <code>IgnoreColumns</code> 的情况下，只有指定的列插入数据库；</p><p>在使用 <code>IgnoreColumns</code> 的情况下，只有未被指定的列插入数据库；</p><h2 id="_7、字典插入" tabindex="-1"><a class="header-anchor" href="#_7、字典插入" aria-hidden="true">#</a> 7、字典插入</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> dic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span><span class="token function">InsertDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、导入表数据" tabindex="-1"><a class="header-anchor" href="#_8、导入表数据" aria-hidden="true">#</a> 8、导入表数据</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">int</span></span> affrows <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">InsertInto</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic2</span>
  <span class="token punctuation">{</span>
    Title <span class="token operator">=</span> a<span class="token punctuation">.</span>Title
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>Topic2<span class="token punctuation">\`</span></span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>Title<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>Clicks<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>CreateTime<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>Title<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;0001-01-01 00:00:00&#39;</span>
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>Topic<span class="token punctuation">\`</span></span> a
<span class="token keyword">limit</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：因为 <code>Clicks</code>、<code>CreateTime</code> 没有被选择，所以使用目标实体属性<code>[Column(InsertValueSql = xx)]</code> 设置的值，或者使用目标实体属性的 <code>c#</code>默认值。</p><h2 id="_9、mysql-特有功能-insert-ignore-into" tabindex="-1"><a class="header-anchor" href="#_9、mysql-特有功能-insert-ignore-into" aria-hidden="true">#</a> 9、MySql 特有功能 <code>Insert Ignore Into</code></h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MySqlIgnoreInto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">///INSERT IGNORE INTO \`Topic\`(\`Clicks\`)</span>
<span class="token comment">//VALUES(?Clicks0), (?Clicks1), (?Clicks2), (?Clicks3), (?Clicks4),</span>
<span class="token comment">//(?Clicks5), (?Clicks6), (?Clicks7), (?Clicks8), (?Clicks9)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10、mysql-特有功能-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_10、mysql-特有功能-on-duplicate-key-update" aria-hidden="true">#</a> 10、MySql 特有功能 <code>On Duplicate Key Update</code></h2><p>FreeSql.Provider.MySql 和 FreeSql.Provider.MySqlConnector 支持 MySql 特有的功能，On Duplicate Key Update。</p><p>这个功能也可以实现插入或更新数据，并且支持批量操作。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestOnDuplicateKeyUpdateInfo</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnDuplicateKeyUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-100&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`TestOnDuplicateKeyUpdateInfo\`(\`id\`, \`title\`, \`time\`) VALUES(100, &#39;title-100&#39;, &#39;2000-01-01 00:00:00.000&#39;)</span>
<span class="token comment">//ON DUPLICATE KEY UPDATE</span>
<span class="token comment">//\`title\` = VALUES(\`title\`), </span>
<span class="token comment">//\`time\` = VALUES(\`time\`)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OnDuplicateKeyUpdate() 之后可以调用的方法：</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td>IgnoreColumns</td><td>忽略更新的列，机制和 IUpdate.IgnoreColumns 一样</td></tr><tr><td>UpdateColumns</td><td>指定更新的列，机制和 IUpdate.UpdateColumns 一样</td></tr><tr><td>Set</td><td>手工指定更新的列，与 IUpdate.Set 功能一样</td></tr><tr><td>SetRaw</td><td>作为 Set 方法的补充，可传入 SQL 字符串</td></tr><tr><td>ToSql</td><td>返回即将执行的 SQL 语句</td></tr><tr><td>ExecuteAffrows</td><td>执行，返回影响的行数</td></tr></tbody></table><p>IInsert 与 OnDuplicateKeyUpdate 都有 IgnoreColumns、UpdateColumns 方法。</p><p>当插入实体/集合实体的时候，忽略了 time 列，代码如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>time<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`TestOnDuplicateKeyUpdateInfo\`(\`id\`, \`title\`) VALUES(200, &#39;title-200&#39;)</span>
<span class="token comment">//ON DUPLICATE KEY UPDATE</span>
<span class="token comment">//\`title\` = VALUES(\`title\`), </span>
<span class="token comment">//\`time\` = &#39;2000-01-01 00:00:00.000&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现，UPDATE time 部分变成了常量，而不是 VALUES(\`time\`)，机制如下：</p><p>当 insert 部分中存在的列，在 update 中将以 VALUES(\`字段\`) 的形式设置；</p><p>当 insert 部分中不存在的列，在 update 中将为常量形式设置，当操作实体数组的时候，此常量为 case when ... end 执行（与 IUpdate 一样）；</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>AppendData</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>追加准备插入的实体</td></tr><tr><td>InsertIdentity</td><td>&lt;this&gt;</td><td>无</td><td>指明插入自增列</td></tr><tr><td>InsertColumns</td><td>&lt;this&gt;</td><td>Lambda</td><td>只插入的列</td></tr><tr><td>IgnoreColumns</td><td>&lt;this&gt;</td><td>Lambda</td><td>忽略的列</td></tr><tr><td>IgnoreInsertValueSql</td><td>&lt;this&gt;</td><td>Lambda</td><td>忽略的设置过 InsertValueSql 的列</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>命令超时设置(秒)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>设置事务对象</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>设置连接对象</td></tr><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的 SQL 语句</td></tr><tr><td>OnDuplicateKeyUpdate</td><td>OnDuplicateKeyUpdate&lt;T1&gt;</td><td>无</td><td>MySql 特有的功能，On Duplicate Key Update</td></tr><tr><td>OnConflictDoUpdate</td><td>OnConflictDoUpdate&lt;T1&gt;</td><td>无</td><td>PostgreSQL 特有的功能，On Conflict Do Update</td></tr><tr><td>ExecuteAffrows</td><td>long</td><td></td><td>执行 SQL 语句，返回影响的行数</td></tr><tr><td>ExecuteIdentity</td><td>long</td><td></td><td>执行 SQL 语句，返回自增值</td></tr><tr><td>ExecuteInserted</td><td>List&lt;T1&gt;</td><td></td><td>执行 SQL 语句，返回插入后的记录</td></tr><tr><td>ExecuteSqlBulkCopy</td><td>void</td><td></td><td>SqlServer 特有的功能，执行 SqlBulkCopy 批量插入的封装</td></tr><tr><td>ExecutePgCopy</td><td>void</td><td></td><td>PostgreSQL 特有的功能，执行 Copy 批量导入数据</td></tr></tbody></table>`,60),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","insert.html.vue"]]);export{r as default};
