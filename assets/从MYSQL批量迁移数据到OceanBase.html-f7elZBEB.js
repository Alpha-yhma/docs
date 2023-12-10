const s=JSON.parse(`{"key":"v-f419a786","path":"/md/tool/datax/%E4%BB%8EMYSQL%E6%89%B9%E9%87%8F%E8%BF%81%E7%A7%BB%E6%95%B0%E6%8D%AE%E5%88%B0OceanBase.html","title":"从MYSQL批量迁移数据到OceanBase","lang":"zh-CN","frontmatter":{"title":"从MYSQL批量迁移数据到OceanBase","icon":"fab fa-markdown","tag":"DataX","description":"目录结构 mig.sh template.json als env.txt tables.txt mig.sh #!/bin/bash if [ -z \\"$1\\" ]; then echo '请输入需要导入的目录地址！' exit fi dir=$(cd $(dirname $0); pwd) cd $dir # 检查env.txt文件是否存在 ls $1 | grep env.txt | grep -V grep if [ $? -ne 0 ]; then echo '指定目录下没有env.txt文件，请检查！' exit fi # 检查tables.txt文件是否存在 ls $1 | grep tables.txt | grep -V grep if [ $? -ne 0 ]; then echo '指定目录下没有tables.txt文件，请检查！' exit fi DATAX_HOME='/home' # 设置需要进行模板替换的变量 source $1/env.txt buildDir=$1/build logDir=$1/log rm -rf $buildDir $logDir mkdir $buildDir $logDir # 读取需要其按哦已的数据表集合，进行模板变量替换 while read table do file_text=$(&lt; ./template.json) eval \\"cat &lt;&lt;EOF $file_text EOF\\" &gt; $buildDir/$table.json done &lt; $1/tables.txt # ---------------------------多线程处理--------------------------- # 线程数量 threads=10 # mkfifo 创建有名管道 myfifo=\\"/tmp/migfd\\" rm -rf $myfifo mkfifo $myfifo # 创建文件描述符，以可读（&lt;）和可写（&gt;）关联管道文件 exec 2&lt;&gt;$myfifo rm -rf $myfifo # 为文件描述符创建占位信息 for ((i=0;i&lt;\${threads};i++)) do echo &gt;&amp;2 done # ---------------------------多线程处理--------------------------- # 根据变量startTable判断是否需要跳过开头的某些表，用于断点续跑 skip=1 if [ -z \\"$startTable\\" ]; then skip=0 fi # 开始表数据迁移 for table in \`cat $1/tables.txt\` do # 跳过已经迁移成功的表 if [ $skip -eq 1 ]; then if [ \\"$table\\" == \\"$startTable\\" ]; then skip=0 else echo \\"---------------------------跳过表：\${table}---------------------------\\" fi fi read -u2 { echo \\"---------------------------开始迁移表：\${table}---------------------------\\" python $DATAX_HOME/bin/datax.py $buildDir/$table.json 2&gt;&amp;1 &gt; $logDir/$table.log if [ $? -ne 0 ]; then echo \\"---------------------------迁移表：\${table}失败！---------------------------\\" fi echo \\"---------------------------迁移表：\${table}结束---------------------------\\" echo &gt;&amp;2 }&amp; done wait # 关闭文件描述符的读写 exec 2&lt;&amp;- exec 2&gt;&amp;-","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/tool/datax/%E4%BB%8EMYSQL%E6%89%B9%E9%87%8F%E8%BF%81%E7%A7%BB%E6%95%B0%E6%8D%AE%E5%88%B0OceanBase.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"从MYSQL批量迁移数据到OceanBase"}],["meta",{"property":"og:description","content":"目录结构 mig.sh template.json als env.txt tables.txt mig.sh #!/bin/bash if [ -z \\"$1\\" ]; then echo '请输入需要导入的目录地址！' exit fi dir=$(cd $(dirname $0); pwd) cd $dir # 检查env.txt文件是否存在 ls $1 | grep env.txt | grep -V grep if [ $? -ne 0 ]; then echo '指定目录下没有env.txt文件，请检查！' exit fi # 检查tables.txt文件是否存在 ls $1 | grep tables.txt | grep -V grep if [ $? -ne 0 ]; then echo '指定目录下没有tables.txt文件，请检查！' exit fi DATAX_HOME='/home' # 设置需要进行模板替换的变量 source $1/env.txt buildDir=$1/build logDir=$1/log rm -rf $buildDir $logDir mkdir $buildDir $logDir # 读取需要其按哦已的数据表集合，进行模板变量替换 while read table do file_text=$(&lt; ./template.json) eval \\"cat &lt;&lt;EOF $file_text EOF\\" &gt; $buildDir/$table.json done &lt; $1/tables.txt # ---------------------------多线程处理--------------------------- # 线程数量 threads=10 # mkfifo 创建有名管道 myfifo=\\"/tmp/migfd\\" rm -rf $myfifo mkfifo $myfifo # 创建文件描述符，以可读（&lt;）和可写（&gt;）关联管道文件 exec 2&lt;&gt;$myfifo rm -rf $myfifo # 为文件描述符创建占位信息 for ((i=0;i&lt;\${threads};i++)) do echo &gt;&amp;2 done # ---------------------------多线程处理--------------------------- # 根据变量startTable判断是否需要跳过开头的某些表，用于断点续跑 skip=1 if [ -z \\"$startTable\\" ]; then skip=0 fi # 开始表数据迁移 for table in \`cat $1/tables.txt\` do # 跳过已经迁移成功的表 if [ $skip -eq 1 ]; then if [ \\"$table\\" == \\"$startTable\\" ]; then skip=0 else echo \\"---------------------------跳过表：\${table}---------------------------\\" fi fi read -u2 { echo \\"---------------------------开始迁移表：\${table}---------------------------\\" python $DATAX_HOME/bin/datax.py $buildDir/$table.json 2&gt;&amp;1 &gt; $logDir/$table.log if [ $? -ne 0 ]; then echo \\"---------------------------迁移表：\${table}失败！---------------------------\\" fi echo \\"---------------------------迁移表：\${table}结束---------------------------\\" echo &gt;&amp;2 }&amp; done wait # 关闭文件描述符的读写 exec 2&lt;&amp;- exec 2&gt;&amp;-"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T08:44:07.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"DataX"}],["meta",{"property":"article:modified_time","content":"2023-12-10T08:44:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从MYSQL批量迁移数据到OceanBase\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T08:44:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"mig.sh","slug":"mig-sh","link":"#mig-sh","children":[]},{"level":2,"title":"template.json","slug":"template-json","link":"#template-json","children":[]},{"level":2,"title":"env.txt","slug":"env-txt","link":"#env-txt","children":[]},{"level":2,"title":"tables.txt","slug":"tables-txt","link":"#tables-txt","children":[]}],"git":{"createdTime":1702197847000,"updatedTime":1702197847000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":1.88,"words":564},"filePathRelative":"md/tool/datax/从MYSQL批量迁移数据到OceanBase.md","localizedDate":"2023年12月10日","excerpt":"<h2> 目录结构</h2>\\n<ul>\\n<li>mig.sh</li>\\n<li>template.json</li>\\n<li>als\\n<ul>\\n<li>env.txt</li>\\n<li>tables.txt</li>\\n</ul>\\n</li>\\n</ul>\\n<h2> mig.sh</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash  </span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token parameter variable\\">-z</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$1</span>\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>  \\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">'请输入需要导入的目录地址！'</span>  \\n  <span class=\\"token builtin class-name\\">exit</span>  \\n<span class=\\"token keyword\\">fi</span>  \\n  \\n<span class=\\"token assign-left variable\\">dir</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token builtin class-name\\">cd</span> <span class=\\"token punctuation\\">$(</span>dirname $0<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token builtin class-name\\">pwd</span><span class=\\"token variable\\">)</span></span>  \\n<span class=\\"token builtin class-name\\">cd</span> <span class=\\"token variable\\">$dir</span>  \\n  \\n<span class=\\"token comment\\"># 检查env.txt文件是否存在  </span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token variable\\">$1</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> env.txt <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> <span class=\\"token parameter variable\\">-V</span> <span class=\\"token function\\">grep</span>  \\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$?</span> <span class=\\"token parameter variable\\">-ne</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>  \\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">'指定目录下没有env.txt文件，请检查！'</span>  \\n  <span class=\\"token builtin class-name\\">exit</span>  \\n<span class=\\"token keyword\\">fi</span>  \\n<span class=\\"token comment\\"># 检查tables.txt文件是否存在  </span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token variable\\">$1</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> tables.txt <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> <span class=\\"token parameter variable\\">-V</span> <span class=\\"token function\\">grep</span>  \\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$?</span> <span class=\\"token parameter variable\\">-ne</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>  \\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">'指定目录下没有tables.txt文件，请检查！'</span>  \\n  <span class=\\"token builtin class-name\\">exit</span>  \\n<span class=\\"token keyword\\">fi</span>  \\n  \\n<span class=\\"token assign-left variable\\">DATAX_HOME</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'/home'</span>  \\n<span class=\\"token comment\\"># 设置需要进行模板替换的变量  </span>\\n<span class=\\"token builtin class-name\\">source</span> <span class=\\"token variable\\">$1</span>/env.txt  \\n  \\n<span class=\\"token assign-left variable\\">buildDir</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$1</span>/build  \\n<span class=\\"token assign-left variable\\">logDir</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$1</span>/log  \\n<span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-rf</span> <span class=\\"token variable\\">$buildDir</span> <span class=\\"token variable\\">$logDir</span>  \\n<span class=\\"token function\\">mkdir</span> <span class=\\"token variable\\">$buildDir</span> <span class=\\"token variable\\">$logDir</span>  \\n<span class=\\"token comment\\"># 读取需要其按哦已的数据表集合，进行模板变量替换  </span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token builtin class-name\\">read</span> table  \\n<span class=\\"token keyword\\">do</span>  \\n<span class=\\"token assign-left variable\\">file_text</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token operator\\">&lt;</span> ./template.json<span class=\\"token variable\\">)</span></span>  \\n<span class=\\"token builtin class-name\\">eval</span> <span class=\\"token string\\">\\"cat &lt;&lt;EOF  \\n<span class=\\"token variable\\">$file_text</span>  \\nEOF\\"</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token variable\\">$buildDir</span>/<span class=\\"token variable\\">$table</span>.json  \\n<span class=\\"token keyword\\">done</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token variable\\">$1</span>/tables.txt  \\n  \\n<span class=\\"token comment\\"># ---------------------------多线程处理---------------------------  </span>\\n<span class=\\"token comment\\"># 线程数量  </span>\\n<span class=\\"token assign-left variable\\">threads</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span>  \\n<span class=\\"token comment\\"># mkfifo 创建有名管道  </span>\\n<span class=\\"token assign-left variable\\">myfifo</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/tmp/migfd\\"</span>  \\n<span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-rf</span> <span class=\\"token variable\\">$myfifo</span>  \\n<span class=\\"token function\\">mkfifo</span> <span class=\\"token variable\\">$myfifo</span>  \\n<span class=\\"token comment\\"># 创建文件描述符，以可读（&lt;）和可写（&gt;）关联管道文件  </span>\\n<span class=\\"token builtin class-name\\">exec</span> <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&lt;&gt;</span><span class=\\"token variable\\">$myfifo</span>  \\n<span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-rf</span> <span class=\\"token variable\\">$myfifo</span>  \\n  \\n<span class=\\"token comment\\"># 为文件描述符创建占位信息  </span>\\n<span class=\\"token keyword\\">for</span> <span class=\\"token variable\\"><span class=\\"token punctuation\\">((</span>i<span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>i<span class=\\"token operator\\">&lt;</span>\${threads}<span class=\\"token punctuation\\">;</span>i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">))</span></span>  \\n<span class=\\"token keyword\\">do</span>  \\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token operator\\">&gt;</span><span class=\\"token file-descriptor important\\">&amp;2</span>  \\n<span class=\\"token keyword\\">done</span>  \\n<span class=\\"token comment\\"># ---------------------------多线程处理---------------------------  </span>\\n  \\n<span class=\\"token comment\\"># 根据变量startTable判断是否需要跳过开头的某些表，用于断点续跑  </span>\\n<span class=\\"token assign-left variable\\">skip</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>  \\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token parameter variable\\">-z</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$startTable</span>\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>  \\n  <span class=\\"token assign-left variable\\">skip</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>  \\n<span class=\\"token keyword\\">fi</span>  \\n<span class=\\"token comment\\"># 开始表数据迁移  </span>\\n<span class=\\"token keyword\\">for</span> <span class=\\"token for-or-select variable\\">table</span> <span class=\\"token keyword\\">in</span> <span class=\\"token variable\\"><span class=\\"token variable\\">\`</span><span class=\\"token function\\">cat</span> $1/tables.txt<span class=\\"token variable\\">\`</span></span>  \\n<span class=\\"token keyword\\">do</span>  \\n  <span class=\\"token comment\\"># 跳过已经迁移成功的表  </span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$skip</span> <span class=\\"token parameter variable\\">-eq</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>  \\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$table</span>\\"</span> <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$startTable</span>\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>  \\n      <span class=\\"token assign-left variable\\">skip</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>  \\n    <span class=\\"token keyword\\">else</span>  \\n      <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"---------------------------跳过表：<span class=\\"token variable\\">\${table}</span>---------------------------\\"</span>  \\n    <span class=\\"token keyword\\">fi</span>  \\n  <span class=\\"token keyword\\">fi</span>  \\n  <span class=\\"token builtin class-name\\">read</span> <span class=\\"token parameter variable\\">-u2</span>  \\n  <span class=\\"token punctuation\\">{</span>  \\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"---------------------------开始迁移表：<span class=\\"token variable\\">\${table}</span>---------------------------\\"</span>  \\n    python <span class=\\"token variable\\">$DATAX_HOME</span>/bin/datax.py <span class=\\"token variable\\">$buildDir</span>/<span class=\\"token variable\\">$table</span>.json <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&gt;</span><span class=\\"token file-descriptor important\\">&amp;1</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token variable\\">$logDir</span>/<span class=\\"token variable\\">$table</span>.log  \\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$?</span> <span class=\\"token parameter variable\\">-ne</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>  \\n      <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"---------------------------迁移表：<span class=\\"token variable\\">\${table}</span>失败！---------------------------\\"</span>  \\n    <span class=\\"token keyword\\">fi</span>  \\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"---------------------------迁移表：<span class=\\"token variable\\">\${table}</span>结束---------------------------\\"</span>  \\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token operator\\">&gt;</span><span class=\\"token file-descriptor important\\">&amp;2</span>  \\n  <span class=\\"token punctuation\\">}</span><span class=\\"token operator\\">&amp;</span>  \\n<span class=\\"token keyword\\">done</span>  \\n  \\n<span class=\\"token function\\">wait</span>  \\n<span class=\\"token comment\\"># 关闭文件描述符的读写  </span>\\n<span class=\\"token builtin class-name\\">exec</span> <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&lt;&amp;</span>-  \\n<span class=\\"token builtin class-name\\">exec</span> <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&gt;&amp;</span>-\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
