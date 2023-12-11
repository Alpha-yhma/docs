const n=JSON.parse(`{"key":"v-d029b358","path":"/md/devops/jenkins/jenkins-pipeline.html","title":"Jenkins pipeline示例","lang":"zh-CN","frontmatter":{"title":"Jenkins pipeline示例","icon":"fab fa-markdown","tag":"Jenkins","description":"def label = \\"slave-\${UUID.randomUUID().toString()}\\" podTemplate(label: label, containers: [ containerTemplate(name: 'maven', image: 'maven:latest', command: 'cat', ttyEnabled: true), containerTemplate(name: 'docker', image: 'docker:latest', command: 'cat', ttyEnabled: true), containerTemplate(name: 'kubectl', image: 'kubesphere/kubectl', command: 'cat', ttyEnabled: true) ], serviceAccount: 'jenkins', volumes: [ hostPathVolume(mountPath: '/root/.m2', hostPath: '/root/.m2'), hostPathVolume(mountPath: '/root/.kube', hostPath: '/root/.kube'), hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock') ]) { node(label) { stage('单元测试') { echo \\"测试阶段\\" } stage('代码编译打包') { container('maven') { // git 'https://github.com/mybatis/spring-boot-starter.git' withCredentials([file(credentialsId: 'maven-settings', variable: 'SETTINGS')]) { echo \\"查看 K8S 集群 Pod 列表\\" sh \\"mkdir -p ~/.m2 &amp;&amp; cp \${SETTINGS} ~/.m2/settings.xml\\" // sh 'mvn clean compile -DskipTests -T10' } } } stage('构建 Docker 镜像') { container('docker') { echo \\"构建 Docker 镜像阶段\\" sh 'docker ps' } } stage('运行 Kubectl') { container('kubectl') { echo \\"查看 K8S 集群 Pod 列表\\" // sh 'echo $USER' sh \\"kubectl get pods\\" } } } }","head":[["meta",{"property":"og:url","content":"https://Alpha-yhma.github.io/md/devops/jenkins/jenkins-pipeline.html"}],["meta",{"property":"og:site_name","content":"Ikaros"}],["meta",{"property":"og:title","content":"Jenkins pipeline示例"}],["meta",{"property":"og:description","content":"def label = \\"slave-\${UUID.randomUUID().toString()}\\" podTemplate(label: label, containers: [ containerTemplate(name: 'maven', image: 'maven:latest', command: 'cat', ttyEnabled: true), containerTemplate(name: 'docker', image: 'docker:latest', command: 'cat', ttyEnabled: true), containerTemplate(name: 'kubectl', image: 'kubesphere/kubectl', command: 'cat', ttyEnabled: true) ], serviceAccount: 'jenkins', volumes: [ hostPathVolume(mountPath: '/root/.m2', hostPath: '/root/.m2'), hostPathVolume(mountPath: '/root/.kube', hostPath: '/root/.kube'), hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock') ]) { node(label) { stage('单元测试') { echo \\"测试阶段\\" } stage('代码编译打包') { container('maven') { // git 'https://github.com/mybatis/spring-boot-starter.git' withCredentials([file(credentialsId: 'maven-settings', variable: 'SETTINGS')]) { echo \\"查看 K8S 集群 Pod 列表\\" sh \\"mkdir -p ~/.m2 &amp;&amp; cp \${SETTINGS} ~/.m2/settings.xml\\" // sh 'mvn clean compile -DskipTests -T10' } } } stage('构建 Docker 镜像') { container('docker') { echo \\"构建 Docker 镜像阶段\\" sh 'docker ps' } } stage('运行 Kubectl') { container('kubectl') { echo \\"查看 K8S 集群 Pod 列表\\" // sh 'echo $USER' sh \\"kubectl get pods\\" } } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-11T11:50:12.000Z"}],["meta",{"property":"article:author","content":"yhma"}],["meta",{"property":"article:tag","content":"Jenkins"}],["meta",{"property":"article:modified_time","content":"2023-12-11T11:50:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins pipeline示例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-11T11:50:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yhma\\",\\"url\\":\\"https://github.com/Alpha-yhma/Alpha-yhma.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1702295412000,"updatedTime":1702295412000,"contributors":[{"name":"yhma","email":"44752536+Alpha-yhma@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.56,"words":167},"filePathRelative":"md/devops/jenkins/jenkins-pipeline.md","localizedDate":"2023年12月11日","excerpt":"<div class=\\"language-groovy line-numbers-mode\\" data-ext=\\"groovy\\"><pre class=\\"language-groovy\\"><code><span class=\\"token keyword\\">def</span> label <span class=\\"token operator\\">=</span> <span class=\\"token interpolation-string\\"><span class=\\"token string\\">\\"slave-</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span><span class=\\"token expression\\">UUID<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">randomUUID</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span></span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">\\"</span></span>\\n \\n<span class=\\"token function\\">podTemplate</span><span class=\\"token punctuation\\">(</span>label<span class=\\"token punctuation\\">:</span> label<span class=\\"token punctuation\\">,</span> containers<span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token function\\">containerTemplate</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'maven'</span><span class=\\"token punctuation\\">,</span> image<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'maven:latest'</span><span class=\\"token punctuation\\">,</span> command<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'cat'</span><span class=\\"token punctuation\\">,</span> ttyEnabled<span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">containerTemplate</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'docker'</span><span class=\\"token punctuation\\">,</span> image<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'docker:latest'</span><span class=\\"token punctuation\\">,</span> command<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'cat'</span><span class=\\"token punctuation\\">,</span> ttyEnabled<span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">containerTemplate</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'kubectl'</span><span class=\\"token punctuation\\">,</span> image<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'kubesphere/kubectl'</span><span class=\\"token punctuation\\">,</span> command<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'cat'</span><span class=\\"token punctuation\\">,</span> ttyEnabled<span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> serviceAccount<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'jenkins'</span><span class=\\"token punctuation\\">,</span> volumes<span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token function\\">hostPathVolume</span><span class=\\"token punctuation\\">(</span>mountPath<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'/root/.m2'</span><span class=\\"token punctuation\\">,</span> hostPath<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'/root/.m2'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">hostPathVolume</span><span class=\\"token punctuation\\">(</span>mountPath<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'/root/.kube'</span><span class=\\"token punctuation\\">,</span> hostPath<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'/root/.kube'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">hostPathVolume</span><span class=\\"token punctuation\\">(</span>mountPath<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'/var/run/docker.sock'</span><span class=\\"token punctuation\\">,</span> hostPath<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'/var/run/docker.sock'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">node</span><span class=\\"token punctuation\\">(</span>label<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n \\n    <span class=\\"token function\\">stage</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'单元测试'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      echo <span class=\\"token interpolation-string\\"><span class=\\"token string\\">\\"测试阶段\\"</span></span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token function\\">stage</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'代码编译打包'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">container</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'maven'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          \\n        <span class=\\"token comment\\">//   git 'https://github.com/mybatis/spring-boot-starter.git'</span>\\n          \\n          <span class=\\"token function\\">withCredentials</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token function\\">file</span><span class=\\"token punctuation\\">(</span>credentialsId<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'maven-settings'</span><span class=\\"token punctuation\\">,</span> variable<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'SETTINGS'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n              echo <span class=\\"token interpolation-string\\"><span class=\\"token string\\">\\"查看 K8S 集群 Pod 列表\\"</span></span>\\n              sh <span class=\\"token interpolation-string\\"><span class=\\"token string\\">\\"mkdir -p ~/.m2 &amp;&amp; cp </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span><span class=\\"token expression\\">SETTINGS</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\"> ~/.m2/settings.xml\\"</span></span>\\n            <span class=\\"token comment\\">//   sh 'mvn clean compile -DskipTests -T10'</span>\\n            <span class=\\"token punctuation\\">}</span>\\n\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token function\\">stage</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'构建 Docker 镜像'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">container</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'docker'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        echo <span class=\\"token interpolation-string\\"><span class=\\"token string\\">\\"构建 Docker 镜像阶段\\"</span></span>\\n        sh <span class=\\"token string\\">'docker ps'</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token function\\">stage</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'运行 Kubectl'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">container</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'kubectl'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        echo <span class=\\"token interpolation-string\\"><span class=\\"token string\\">\\"查看 K8S 集群 Pod 列表\\"</span></span>\\n        <span class=\\"token comment\\">// sh 'echo $USER'</span>\\n        sh <span class=\\"token interpolation-string\\"><span class=\\"token string\\">\\"kubectl get pods\\"</span></span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
