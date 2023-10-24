"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||k[m]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u9ad8\u53ef\u7528"},o=void 0,i={unversionedId:"install/ha",id:"install/ha",title:"\u9ad8\u53ef\u7528",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b89\u88c5\u9ad8\u53ef\u7528 (HA) \u7684 RKE2 \u96c6\u7fa4\u3002\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684 RKE2 \u96c6\u7fa4\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/ha.md",sourceDirName:"install",slug:"/install/ha",permalink:"/zh/install/ha",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/ha.md",tags:[],version:"current",lastUpdatedAt:1698168547,formattedLastUpdatedAt:"2023\u5e7410\u670824\u65e5",frontMatter:{title:"\u9ad8\u53ef\u7528"},sidebar:"mySidebar",previous:{title:"\u7f51\u7edc\u9009\u9879",permalink:"/zh/install/network_options"},next:{title:"\u5b89\u88c5\u65b9\u6cd5",permalink:"/zh/install/methods"}},p={},s=[{value:"1. \u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740",id:"1-\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740",level:3},{value:"2. \u542f\u52a8\u7b2c\u4e00\u4e2a Server \u8282\u70b9",id:"2-\u542f\u52a8\u7b2c\u4e00\u4e2a-server-\u8282\u70b9",level:3},{value:"2a. \u53ef\u9009\uff1a\u8003\u8651 Server \u8282\u70b9\u6c61\u70b9",id:"2a-\u53ef\u9009\u8003\u8651-server-\u8282\u70b9\u6c61\u70b9",level:4},{value:"3. \u542f\u52a8\u5176\u4ed6 Server \u8282\u70b9",id:"3-\u542f\u52a8\u5176\u4ed6-server-\u8282\u70b9",level:3},{value:"4. \u786e\u8ba4\u96c6\u7fa4\u6b63\u5e38\u8fd0\u884c",id:"4-\u786e\u8ba4\u96c6\u7fa4\u6b63\u5e38\u8fd0\u884c",level:3},{value:"5. \u53ef\u9009\uff1a\u52a0\u5165 Agent \u8282\u70b9",id:"5-\u53ef\u9009\u52a0\u5165-agent-\u8282\u70b9",level:3}],c={toc:s},u="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b89\u88c5\u9ad8\u53ef\u7528 (HA) \u7684 RKE2 \u96c6\u7fa4\u3002\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684 RKE2 \u96c6\u7fa4\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740"),"\uff0c\u653e\u5728 Server \u8282\u70b9\u7684\u524d\u9762\uff0c\u5141\u8bb8\u5176\u4ed6\u8282\u70b9\u6ce8\u518c\u5230\u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c etcd\u3001Kubernetes API \u548c\u5176\u4ed6 control plane \u670d\u52a1\u7684\u5947\u6570\u4e2a\uff08\u63a8\u8350\u4e09\u4e2a\uff09",(0,a.kt)("strong",{parentName:"li"},"Server \u8282\u70b9")),(0,a.kt)("li",{parentName:"ul"},"\u96f6\u4e2a\u6216\u591a\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"Agent \u8282\u70b9"),"\uff0c\u7528\u4e8e\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u548c\u670d\u52a1")),(0,a.kt)("p",null,"Agent \u901a\u8fc7\u56fa\u5b9a\u6ce8\u518c\u5730\u5740\u6ce8\u518c\u3002\u7136\u800c\uff0c\u5f53 RKE2 \u542f\u52a8 kubelet \u5e76\u4e14\u5fc5\u987b\u8fde\u63a5\u5230 Kubernetes api-server \u65f6\uff0c\u5b83\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 agent")," \u8fdb\u7a0b\u8fdb\u884c\u8fde\u63a5\uff0c\u8be5\u8fdb\u7a0b\u5145\u5f53\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e HA \u96c6\u7fa4\u9700\u8981\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u56fa\u5b9a\u6ce8\u518c\u5730\u5740"),(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u7b2c\u4e00\u4e2a Server \u8282\u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165\u989d\u5916\u7684 Server \u8282\u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165 Agent \u8282\u70b9")),(0,a.kt)("h3",{id:"1-\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740"},"1. \u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740"),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u4ee5\u5916\u7684 Server \u8282\u70b9\u548c\u6240\u6709 Agent \u8282\u70b9\u90fd\u9700\u8981\u4e00\u4e2a URL \u6765\u6ce8\u518c\u3002\u8fd9\u53ef\u4ee5\u662f\u4efb\u4f55 server \u8282\u70b9\u7684 IP \u6216\u4e3b\u673a\u540d\uff0c\u4f46\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u968f\u7740\u8282\u70b9\u7684\u521b\u5efa\u548c\u9500\u6bc1\uff0c\u5b83\u4eec\u53ef\u80fd\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u6539\u53d8\u3002\u56e0\u6b64\uff0c\u4f60\u5e94\u8be5\u5728 Server \u8282\u70b9\u524d\u9762\u6709\u4e00\u4e2a\u7a33\u5b9a\u7684\u7aef\u70b9\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u65b9\u6cd5\u6765\u8bbe\u7f6e\u6b64\u7aef\u70b9\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4 \u5c42 (TCP) \u8d1f\u8f7d\u5747\u8861\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u8f6e\u8be2 DNS"),(0,a.kt)("li",{parentName:"ul"},"\u865a\u62df\u6216\u5f39\u6027 IP \u5730\u5740")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u7aef\u70b9\u4e5f\u53ef\u4ee5\u7528\u6765\u8bbf\u95ee Kubernetes API\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," \u6587\u4ef6\u6765\u6307\u5411\u5b83\uff0c\u800c\u4e0d\u662f\u7279\u5b9a\u7684\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 server")," \u8fdb\u7a0b\u5728\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"9345")," \u4e0a\u4fa6\u542c\u65b0\u8282\u70b9\u6ce8\u518c\u3002Kubernetes API \u7167\u5e38\u5728\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"6443")," \u4e0a\u63d0\u4f9b\u670d\u52a1\u3002\u4f60\u53ef\u4ee5\u76f8\u5e94\u5730\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,a.kt)("h3",{id:"2-\u542f\u52a8\u7b2c\u4e00\u4e2a-server-\u8282\u70b9"},"2. \u542f\u52a8\u7b2c\u4e00\u4e2a Server \u8282\u70b9"),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u4f1a\u5efa\u7acb\u5176\u4ed6 Server \u6216 Agent \u8282\u70b9\u5728\u8fde\u63a5\u96c6\u7fa4\u65f6\u7528\u4e8e\u6ce8\u518c\u7684 Secret \u4ee4\u724c\u3002"),(0,a.kt)("p",null,"\u8981\u5c06\u4f60\u81ea\u5df1\u7684\u9884\u5171\u4eab secret \u6307\u5b9a\u4e3a\u4ee4\u724c\uff0c\u8bf7\u5728\u542f\u52a8\u65f6\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," \u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u6307\u5b9a\u9884\u5171\u4eab secret\uff0cRKE2 \u4f1a\u751f\u6210\u4e00\u4e2a\u9884\u5171\u4eab secret \u5e76\u5c06\u5b83\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/node-token")," \u4e2d\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u56fa\u5b9a\u6ce8\u518c\u5730\u5740\u7684\u8bc1\u4e66\u9519\u8bef\uff0c\u8bf7\u5728\u542f\u52a8 Server \u65f6\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-san")," \u53c2\u6570\u3002\u8fd9\u4e2a\u9009\u9879\u5728 Server \u7684 TLS \u8bc1\u4e66\u4e2d\u589e\u52a0\u4e00\u4e2a\u989d\u5916\u7684\u4e3b\u673a\u540d\u6216 IP \u4f5c\u4e3a Subject Alternative Name\u3002\u5982\u679c\u4f60\u60f3\u901a\u8fc7 IP \u548c\u4e3b\u673a\u540d\u8bbf\u95ee\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u6307\u5b9a\u4e3a\u4e00\u4e2a\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u53f0 Server \u7684 RKE2 \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff1a"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"RKE2 \u914d\u7f6e\u6587\u4ef6\u9700\u8981\u624b\u52a8\u521b\u5efa\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u7279\u6743\u7528\u6237\u8eab\u4efd\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"touch /etc/rancher/rke2/config.yaml")," \u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"token: my-shared-secret\ntls-san:\n  - my-kubernetes-domain.com\n  - another-kubernetes-domain.com\n")),(0,a.kt)("h4",{id:"2a-\u53ef\u9009\u8003\u8651-server-\u8282\u70b9\u6c61\u70b9"},"2a. \u53ef\u9009\uff1a\u8003\u8651 Server \u8282\u70b9\u6c61\u70b9"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cServer \u8282\u70b9\u662f\u53ef\u8c03\u5ea6\u7684\uff0c\u56e0\u6b64\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u4ee5\u5728\u5b83\u4eec\u4e0a\u542f\u52a8\u3002\u5982\u679c\u4f60\u5e0c\u671b\u62e5\u6709\u4e00\u4e2a\u4e0d\u4f1a\u8fd0\u884c\u7528\u6237\u5de5\u4f5c\u8d1f\u8f7d\u7684\u4e13\u7528 control plane\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6c61\u70b9\uff08taint\uff09\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"node-taint")," \u53c2\u6570\u5141\u8bb8\u4f60\u914d\u7f6e\u5e26\u6709\u6c61\u70b9\u7684\u8282\u70b9\u3002\u4ee5\u4e0b\u662f\u5c06\u8282\u70b9\u6c61\u70b9\u6dfb\u52a0\u5230\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'node-taint:\n  - "CriticalAddonsOnly=true:NoExecute"\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u6240\u6709\u8282\u70b9\u90fd\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"CriticalAddonsOnly")," \u6c61\u70b9\u65f6\uff0cNGINX Ingress \u548c Metrics Server \u63d2\u4ef6\u5c06",(0,a.kt)("strong",{parentName:"p"},"\u4e0d"),"\u90e8\u7f72\u3002\u5982\u679c\u4f60\u7684 Server \u8282\u70b9\u6709\u8be5\u6c61\u70b9\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u5c06\u4fdd\u6301\u6302\u8d77\u72b6\u6001\uff0c\u76f4\u5230\u6ca1\u6709\u6c61\u70b9\u7684 Agent \u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("h3",{id:"3-\u542f\u52a8\u5176\u4ed6-server-\u8282\u70b9"},"3. \u542f\u52a8\u5176\u4ed6 Server \u8282\u70b9"),(0,a.kt)("p",null,"\u5176\u4ed6 Server \u8282\u70b9\u7684\u542f\u52a8\u4e0e\u7b2c\u4e00\u4e2a\u8282\u70b9\u975e\u5e38\u76f8\u4f3c\uff0c\u53ea\u662f\u4f60\u5fc5\u987b\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," \u53c2\u6570\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u6210\u529f\u8fde\u63a5\u5230\u521d\u59cb Server \u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u5176\u4ed6 Server \u8282\u70b9\u7684 RKE2 \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server: https://my-kubernetes-domain.com:9345\ntoken: my-shared-secret\ntls-san:\n  - my-kubernetes-domain.com\n  - another-kubernetes-domain.com\n\n")),(0,a.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u4f60\u7684 Server \u8282\u70b9\u603b\u6570\u5fc5\u987b\u4e3a\u5947\u6570\u3002"),(0,a.kt)("h3",{id:"4-\u786e\u8ba4\u96c6\u7fa4\u6b63\u5e38\u8fd0\u884c"},"4. \u786e\u8ba4\u96c6\u7fa4\u6b63\u5e38\u8fd0\u884c"),(0,a.kt)("p",null,"\u5728\u6240\u6709 Server \u8282\u70b9\u4e0a\u542f\u52a8\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 server")," \u8fdb\u7a0b\u540e\uff0c\u786e\u4fdd\u96c6\u7fa4\u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/rancher/rke2/bin/kubectl get nodes \\\n  --kubeconfig /etc/rancher/rke2/rke2.yaml\n")),(0,a.kt)("p",null,"\u4f60\u5e94\u8be5\u770b\u5230 server \u8282\u70b9\u5904\u4e8e Ready \u72b6\u6001\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u90fd\u9700\u8981 root \u7528\u6237\u8bbf\u95ee\u6743\u9650\uff0c\u9664\u975e\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"RKE2_KUBECONFIG_MODE")," \u8986\u76d6\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/cluster_access"},"\u96c6\u7fa4\u8bbf\u95ee\u9875\u9762"),"\u3002")),(0,a.kt)("h3",{id:"5-\u53ef\u9009\u52a0\u5165-agent-\u8282\u70b9"},"5. \u53ef\u9009\uff1a\u52a0\u5165 Agent \u8282\u70b9"),(0,a.kt)("p",null,"\u56e0\u4e3a RKE2 Server \u8282\u70b9\u9ed8\u8ba4\u662f\u53ef\u8c03\u5ea6\u7684\uff0c\u6240\u4ee5 HA RKE2 Server \u96c6\u7fa4\u7684\u6700\u5c0f\u8282\u70b9\u6570\u662f\u4e09\u4e2a Server \u8282\u70b9\u548c\u96f6\u4e2a Agent \u8282\u70b9\u3002\u8981\u6dfb\u52a0\u7528\u4e8e\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u7684\u8282\u70b9\uff0c\u8bf7\u5c06 Agent \u8282\u70b9\u52a0\u5165\u5230\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("p",null,"\u5728 HA \u96c6\u7fa4\u4e2d\u52a0\u5165 Agent \u8282\u70b9\u4e0e",(0,a.kt)("a",{parentName:"p",href:"/zh/install/quickstart#linux-agent-worker-%E8%8A%82%E7%82%B9%E5%AE%89%E8%A3%85"},"\u5728\u5355\u4e2a Server \u96c6\u7fa4\u4e2d\u52a0\u5165 Agent \u8282\u70b9"),"\u662f\u4e00\u6837\u7684\u3002\u4f60\u53ea\u9700\u8981\u6307\u5b9a Agent \u5e94\u8be5\u6ce8\u518c\u7684 URL \u548c\u8981\u4f7f\u7528\u7684 Token \u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server: https://my-kubernetes-domain.com:9345\ntoken: my-shared-secret\n")))}k.isMDXComponent=!0}}]);