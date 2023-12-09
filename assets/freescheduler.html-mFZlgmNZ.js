import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as u,a as n,b as s,d as t,e as l}from"./app-m6Hcf_8v.js";const p="/281375469-a5d5f4bb-6af9-4695-9570-8777c39d7329.png",i={},d=n("h1",{id:"freescheduler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#freescheduler","aria-hidden":"true"},"#"),s(" FreeScheduler")],-1),r=n("p",null,"FreeScheduler 是利用 IdleBus 实现的轻量化定时任务调度，支持集群、临时的延时任务和重复循环任务(可持久化)，可按秒，每天/每周/每月固定时间，自定义间隔执行，支持 .NET Core 2.1+、.NET Framework 4.0+ 运行环境。",-1),k={href:"https://github.com/2881099/FreeScheduler",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/FreeSql/p/16623030.html",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><blockquote><p>dotnet add package FreeScheduler</p></blockquote><blockquote><p>Install-Package FreeScheduler</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">Scheduler</span> scheduler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSchedulerBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OnExecuting</span><span class="token punctuation">(</span>task <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;[</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">&quot;HH:mm:ss.fff&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">] </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">task<span class="token punctuation">.</span>Topic</span><span class="token punctuation">}</span></span><span class="token string"> 被执行&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>task<span class="token punctuation">.</span>Topic<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;武林大会&quot;</span><span class="token punctuation">:</span> <span class="token function">Wulin</span><span class="token punctuation">(</span>task<span class="token punctuation">.</span>Body<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;攻城活动&quot;</span><span class="token punctuation">:</span> <span class="token function">AttackCity</span><span class="token punctuation">(</span>task<span class="token punctuation">.</span>Body<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Method</th><th>说明</th></tr></thead><tbody><tr><td>OnExecuting(Action&lt;TaskInfo&gt; executing)</td><td>任务触发</td></tr><tr><td>UseStorage()</td><td>基于 数据库或者 Redis 持久化</td></tr><tr><td>UseCluster()</td><td>开启集群（依赖 Redis），支持跨进程互通</td></tr><tr><td>UseCustomInterval()</td><td>自定义间隔（可实现 cron）</td></tr><tr><td>UseScanInterval()</td><td>扫描间隔（默认200ms），值越小触发精准</td></tr><tr><td>Build()</td><td>创建 Scheduler 对象</td></tr></tbody></table><p>使用 ASP.NET Core 项目，一行代码解决如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>app<span class="token punctuation">.</span><span class="token function">UseFreeSchedulerUI</span><span class="token punctuation">(</span><span class="token string">&quot;/freescheduler/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="Admin Dashboard" tabindex="0" loading="lazy"><figcaption>Admin Dashboard</figcaption></figure><h2 id="集群特性" tabindex="-1"><a class="header-anchor" href="#集群特性" aria-hidden="true">#</a> 集群特性</h2><ul><li>支持 单项目，多站点部署</li><li>支持 多进程，不重复执行</li><li>支持 进程退出后，由其他进程重新加载任务（约30秒后）</li><li>支持 进程互通，任意进程都可以执行（RemoveTask/ExistsTask/PauseTask/RunNowTask/RemoveTempTask/ExistsTempTask）</li><li>支持 进程意外离线后，卸载进程内的任务，重新安排上线</li></ul><h2 id="临时任务-不可持久化" tabindex="-1"><a class="header-anchor" href="#临时任务-不可持久化" aria-hidden="true">#</a> 临时任务(不可持久化)</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;时间到了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    scheduler<span class="token punctuation">.</span><span class="token function">AddTempTask</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Callback<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//下一次定时</span>
<span class="token punctuation">}</span>
scheduler<span class="token punctuation">.</span><span class="token function">AddTempTask</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Method</th><th>说明</th></tr></thead><tbody><tr><td>string AddTempTask(TimeSpan, Action)</td><td>创建临时的延时任务，返回 id</td></tr><tr><td>bool RemoveTempTask(string id)</td><td>删除任务(临时任务)</td></tr><tr><td>bool ExistsTempTask(string id)</td><td>判断任务是否存在(临时任务)</td></tr><tr><td>int QuantityTempTask</td><td>任务数量(临时任务)</td></tr></tbody></table><h2 id="循环任务-可持久化" tabindex="-1"><a class="header-anchor" href="#循环任务-可持久化" aria-hidden="true">#</a> 循环任务/可持久化</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//每5秒触发，执行N次</span>
<span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">AddTask</span><span class="token punctuation">(</span><span class="token string">&quot;topic1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;body1&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">round</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//每次 不同的间隔秒数触发，执行6次</span>
<span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">AddTask</span><span class="token punctuation">(</span><span class="token string">&quot;topic1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;body1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//每天 20:00:00 触发，指定utc时间，执行N次</span>
<span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">AddTaskRunOnDay</span><span class="token punctuation">(</span><span class="token string">&quot;topic1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;body1&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">round</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;20:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//每周一 20:00:00 触发，指定utc时间，执行1次</span>
<span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">AddTaskRunOnWeek</span><span class="token punctuation">(</span><span class="token string">&quot;topic1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;body1&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">round</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1:20:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//每月1日 20:00:00 触发，指定utc时间，执行12次</span>
<span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">AddTaskRunOnMonth</span><span class="token punctuation">(</span><span class="token string">&quot;topic1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;body1&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">round</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;1:20:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//每月最后一日 20:00:00 触发，指定utc时间，执行12次</span>
<span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">AddTaskRunOnMonth</span><span class="token punctuation">(</span><span class="token string">&quot;topic1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;body1&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">round</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;-1:20:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//自定义间隔 cron</span>
<span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">AddTaskCustom</span><span class="token punctuation">(</span><span class="token string">&quot;topic1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;body1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0/1 * * * * ? &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSchedulerBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
    <span class="token punctuation">.</span><span class="token function">UseCustomInterval</span><span class="token punctuation">(</span>task <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//利用 cron 功能库解析 task.IntervalArgument 得到下一次执行时间</span>
        <span class="token comment">//与当前时间相减，得到 TimeSpan，若返回 null 则任务完成</span>
        <span class="token keyword">return</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Method</th><th>说明</th></tr></thead><tbody><tr><td>void ctor(ITaskHandler)</td><td>指定任务调度器（单例）</td></tr><tr><td>string AddTask(string topic, string body, int round, int seconds)</td><td>创建循环定时任务，返回 id</td></tr><tr><td>string AddTask(string topic, string body, int[] seconds)</td><td>创建每轮间隔不同的定时任务，返回 id</td></tr><tr><td>string AddTaskRunOnDay(..)</td><td>创建每日循环任务，指定utc时间，返回 id</td></tr><tr><td>string AddTaskRunOnWeek(..)</td><td>创建每周循环任务，指定utc时间，返回 id</td></tr><tr><td>string AddTaskRunOnMonth(..)</td><td>创建每月循环任务，指定utc时间，返回 id</td></tr><tr><td>string AddTaskCustom(string topic, string body, string expression)</td><td>创建自定义任务，返回 id</td></tr><tr><td>bool RemoveTask(string id)</td><td>删除任务</td></tr><tr><td>bool ExistsTask(string id)</td><td>判断任务是否存在</td></tr><tr><td>bool ResumeTask(string id)</td><td>恢复已暂停的任务</td></tr><tr><td>bool PauseTask(string id)</td><td>暂停正在运行的任务</td></tr><tr><td>TaskInfo[] FindTask(lambda)</td><td>查询正在运行中的任务</td></tr><tr><td>int QuantityTask</td><td>任务数量</td></tr></tbody></table><h2 id="系统预留任务" tabindex="-1"><a class="header-anchor" href="#系统预留任务" aria-hidden="true">#</a> 系统预留任务</h2><blockquote><p>[系统预留]清理任务数据</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//每小时触发，定期清理24小时之前的数据（单位：秒）</span>
scheduler<span class="token punctuation">.</span><span class="token function">AddTask</span><span class="token punctuation">(</span><span class="token string">&quot;[系统预留]清理任务数据&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;86400&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">round</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理任务" tabindex="-1"><a class="header-anchor" href="#管理任务" aria-hidden="true">#</a> 管理任务</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 使用 FreeSql 或者 SQL 查询 TaskInfo、TaskLog 两个表进行分页显示</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TaskInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> total<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span>pageNumber<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TaskLog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> total<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span>pageNumber<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//暂停任务</span>
scheduler<span class="token punctuation">.</span><span class="token function">PauseTask</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//恢复暂停的任务</span>
scheduler<span class="token punctuation">.</span><span class="token function">ResumeTask</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//删除任务</span>
scheduler<span class="token punctuation">.</span><span class="token function">RemoveTask</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果正在使用 ASP.NET Core 项目，一行代码解决如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>app<span class="token punctuation">.</span><span class="token function">UseFreeSchedulerUI</span><span class="token punctuation">(</span><span class="token string">&quot;/freescheduler/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>https://github.com/2881099/FreeScheduler/tree/master/Examples/Examples_FreeScheduler_Net60 <img src="`+p+'" alt="Admin Dashboard" loading="lazy"></p>',24);function b(h,g){const a=o("ExternalLinkIcon");return c(),u("div",null,[d,r,n("p",null,[s("开源地址："),n("a",k,[s("https://github.com/2881099/FreeScheduler"),t(a)])]),n("p",null,[s("扩展资料："),n("a",m,[s("《.NET 定时任务 -- FreeScheduler 支持 cron、持久化、可变定时设置》"),t(a)])]),v])}const q=e(i,[["render",b],["__file","freescheduler.html.vue"]]);export{q as default};
