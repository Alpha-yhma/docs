const e=JSON.parse('{"key":"v-3012b2ef","path":"/md/tool/jdk/jdk-build-image.html","title":"JDK基础镜像构建","lang":"zh-CN","frontmatter":{"title":"JDK基础镜像构建","icon":"fab fa-docker","tag":"JDK","description":"FROM frolvlad/alpine-glibc:glibc-2.34 LABEL maintainer=\\"yhma@amarsoft.com\\" ENV TZ=Asia/Shanghai RUN ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone #******************更换Alpine源为mirrors.ustc.edu.cn****************** RUN echo http://mirrors.aliyun.com/alpine/v3.10/main/ &gt; /etc/apk/repositories &amp;&amp; \\\\ echo http://mirrors.aliyun.com/alpine/v3.10/community/ &gt;&gt; /etc/apk/repositories RUN apk update &amp;&amp; apk upgrade RUN apk --no-cache add bash wget curl &amp;&amp; rm -rf /var/cache/apk/* ENV LANG=zh_CN.UTF-8 LANGUAGE=zh_CN.UTF-8 LC_ALL=zh_CN.UTF-8 RUN echo \\"export LANG=$LANG\\" &gt; /etc/profile.d/locale.sh ADD jre1.8.0_201_server /jdk ENV JAVA_HOME /jdk ENV PATH ${JAVA_HOME}/bin:${PATH}","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/tool/jdk/jdk-build-image.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"JDK基础镜像构建"}],["meta",{"property":"og:description","content":"FROM frolvlad/alpine-glibc:glibc-2.34 LABEL maintainer=\\"yhma@amarsoft.com\\" ENV TZ=Asia/Shanghai RUN ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone #******************更换Alpine源为mirrors.ustc.edu.cn****************** RUN echo http://mirrors.aliyun.com/alpine/v3.10/main/ &gt; /etc/apk/repositories &amp;&amp; \\\\ echo http://mirrors.aliyun.com/alpine/v3.10/community/ &gt;&gt; /etc/apk/repositories RUN apk update &amp;&amp; apk upgrade RUN apk --no-cache add bash wget curl &amp;&amp; rm -rf /var/cache/apk/* ENV LANG=zh_CN.UTF-8 LANGUAGE=zh_CN.UTF-8 LC_ALL=zh_CN.UTF-8 RUN echo \\"export LANG=$LANG\\" &gt; /etc/profile.d/locale.sh ADD jre1.8.0_201_server /jdk ENV JAVA_HOME /jdk ENV PATH ${JAVA_HOME}/bin:${PATH}"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-10T08:44:07.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:modified_time","content":"2023-12-10T08:44:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK基础镜像构建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-10T08:44:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1702197847000,"updatedTime":1702197847000,"contributors":[{"name":"alpha","email":"dota2again2@hotmail.com","commits":1}]},"readingTime":{"minutes":0.31,"words":93},"filePathRelative":"md/tool/jdk/jdk-build-image.md","localizedDate":"2023年12月10日","excerpt":"<div class=\\"language-Dockerfile line-numbers-mode\\" data-ext=\\"Dockerfile\\"><pre class=\\"language-Dockerfile\\"><code>FROM frolvlad/alpine-glibc:glibc-2.34\\n\\nLABEL maintainer=\\"yhma@amarsoft.com\\"\\n\\nENV TZ=Asia/Shanghai\\nRUN ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone\\n\\n#******************更换Alpine源为mirrors.ustc.edu.cn******************\\nRUN echo http://mirrors.aliyun.com/alpine/v3.10/main/ &gt; /etc/apk/repositories &amp;&amp; \\\\\\n    echo http://mirrors.aliyun.com/alpine/v3.10/community/ &gt;&gt; /etc/apk/repositories\\nRUN apk update &amp;&amp; apk upgrade\\nRUN apk --no-cache add bash wget curl &amp;&amp; rm -rf /var/cache/apk/*\\n\\nENV LANG=zh_CN.UTF-8 LANGUAGE=zh_CN.UTF-8  LC_ALL=zh_CN.UTF-8\\nRUN echo \\"export LANG=$LANG\\" &gt; /etc/profile.d/locale.sh\\n\\nADD jre1.8.0_201_server /jdk\\nENV JAVA_HOME /jdk\\nENV PATH ${JAVA_HOME}/bin:${PATH}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
