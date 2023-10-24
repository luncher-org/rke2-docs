"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7714],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(t),c=n,u=k["".concat(s,".").concat(c)]||k[c]||d[c]||l;return t?a.createElement(u,i(i({ref:r},m),{},{components:t})):a.createElement(u,i({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[k]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3033:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const l={title:"Windows \u79bb\u7ebf\u5b89\u88c5"},i=void 0,o={unversionedId:"install/windows_airgap",id:"install/windows_airgap",title:"Windows \u79bb\u7ebf\u5b89\u88c5",description:"Windows \u652f\u6301\u76ee\u524d\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff08\u4ece v1.21.3+rke2r1 \u5f00\u59cb\uff09",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/windows_airgap.md",sourceDirName:"install",slug:"/install/windows_airgap",permalink:"/zh/install/windows_airgap",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/windows_airgap.md",tags:[],version:"current",lastUpdatedAt:1698168547,formattedLastUpdatedAt:"2023\u5e7410\u670824\u65e5",frontMatter:{title:"Windows \u79bb\u7ebf\u5b89\u88c5"},sidebar:"mySidebar",previous:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/install/airgap"},next:{title:"\u7ba1\u7406 Server \u89d2\u8272",permalink:"/zh/install/server_roles"}},s={},p=[{value:"\u51c6\u5907 Windows Agent \u8282\u70b9",id:"\u51c6\u5907-windows-agent-\u8282\u70b9",level:4},{value:"Windows Tarball \u65b9\u6cd5",id:"windows-tarball-\u65b9\u6cd5",level:2},{value:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5",id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5 Windows RKE2",id:"\u5b89\u88c5-windows-rke2",level:2}],m={toc:p},k="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(k,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Windows \u652f\u6301\u76ee\u524d\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff08\u4ece v1.21.3+rke2r1 \u5f00\u59cb\uff09"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Windows \u652f\u6301\u8981\u6c42\u9009\u62e9 Calico \u4f5c\u4e3a RKE2 \u96c6\u7fa4\u7684 CNI")),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 RKE2 Windows Agent (Worker) \u8282\u70b9\u3002\u4f60\u9700\u8981\u5148\u5b8c\u6210 RKE2 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/airgap"},"\u79bb\u7ebf\u8bbe\u7f6e"),"\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"rke2-windows-<BUILD_VERSION>-amd64-images.tar.gz")," \u538b\u7f29\u5305\u53d1\u5e03\u5de5\u4ef6\u8fdb\u884c\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u90e8\u7f72\u3002\u6839\u636e\u6211\u4eec\u5df2\u9a8c\u8bc1\u7684 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/requirements#windows"},"Windows \u7248\u672c"),"\uff0c\u6211\u4eec\u76ee\u524d\u4e3a Windows \u53d1\u5e03\u4e86\u4e09\u4e2a tarball \u5de5\u4ef6\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rke2-windows-1809-amd64-images.tar.gz"),(0,n.kt)("li",{parentName:"ul"},"rke2-windows-2004-amd64-images.tar.gz"),(0,n.kt)("li",{parentName:"ul"},"rke2-windows-20H2-amd64-images.tar.gz")),(0,n.kt)("p",null,"\u6b65\u9aa4\u4e2d\u63d0\u5230\u7684\u6240\u6709\u6587\u4ef6\u90fd\u53ef\u4ee5\u4ece",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases"},"\u6b64\u5904"),"\u6240\u9700 RKE2 \u7248\u672c\u7684 asset \u4e2d\u83b7\u53d6\u3002"),(0,n.kt)("h4",{id:"\u51c6\u5907-windows-agent-\u8282\u70b9"},"\u51c6\u5907 Windows Agent \u8282\u70b9"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u9700\u8981\u542f\u7528 Windows Server Containers \u529f\u80fd\u624d\u80fd\u4f7f RKE2 Agent \u5de5\u4f5c\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u6253\u5f00\u4e00\u4e2a\u65b0\u7684 Powershell \u7a97\u53e3\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,n.kt)("p",null,"\u5728\u65b0\u7684 Powershell \u7a97\u53e3\u4e2d\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName containers \u2013All\n")),(0,n.kt)("p",null,"\u9700\u8981\u91cd\u542f\u624d\u80fd\u4f7f ",(0,n.kt)("inlineCode",{parentName:"p"},"Containers")," \u529f\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),(0,n.kt)("h2",{id:"windows-tarball-\u65b9\u6cd5"},"Windows Tarball \u65b9\u6cd5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4ece RKE2 release artifacts \u5217\u8868\u4e0b\u8f7d RKE2 \u7248\u672c\u7684 Windows \u955c\u50cf tarball \u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,n.kt)("h4",{parentName:"li",id:"\u4f7f\u7528-targz-\u955c\u50cf-tarball"},"\u4f7f\u7528 tar.gz \u955c\u50cf tarball"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$ProgressPreference = 'SilentlyContinue'\nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-1809-amd64-images.tar.gz -OutFile /var/lib/rancher/rke2/agent/images/rke2-windows-1809-amd64-images.tar.gz\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Windows Server SAC 2004 (amd64) (OS Build 19041.1110)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-2004-amd64-images.tar.gz -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-2004-amd64-images.tar.gz\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Windows Server SAC 20H2 (amd64) (OS Build 19042.1110)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-20H2-amd64-images.tar.gz -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-20H2-amd64-images.tar.gz\n")),(0,n.kt)("h4",{parentName:"li",id:"\u4f7f\u7528-tarzst-\u955c\u50cf-tarball"},"\u4f7f\u7528 tar.zst \u955c\u50cf tarball")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-1809-amd64-images.tar.zst -OutFile /var/lib/rancher/rke2/agent/images/rke2-windows-1809-amd64-images.tar.zst\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Windows Server SAC 2004 (amd64) (OS Build 19041.1110)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-2004-amd64-images.tar.zst -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-2004-amd64-images.tar.zst\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Windows Server SAC 20H2 (amd64) (OS Build 19042.1110)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$ProgressPreference = 'SilentlyContinue'\nInvoke-WebRequest hhttps://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-20H2-amd64-images.tar.zst -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-20H2-amd64-images.tar.zst\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"rke2-windows-<BUILD_VERSION>-amd64.tar.gz")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"rke2-windows-<BUILD_VERSION>-amd64.tar.zst"),"\u3002\u4e0e pigz \u76f8\u6bd4\uff0cZstandard \u652f\u6301\u66f4\u597d\u7684\u538b\u7f29\u6bd4\u548c\u66f4\u5feb\u7684\u89e3\u538b\u7f29\u901f\u5ea6\u3002"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u786e\u4fdd\u8282\u70b9\u4e0a\u5b58\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/images/")," \u76ee\u5f55\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"New-Item -Type Directory c:\\usr\\local\\bin -Force\nNew-Item -Type Directory c:\\var\\lib\\rancher\\rke2\\bin -Force\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u538b\u7f29\u5305\u590d\u5236\u5230\u8282\u70b9\u4e0a\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/images/"),"\uff0c\u9700\u8981\u4fdd\u7559\u6587\u4ef6\u6269\u5c55\u540d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85-windows-rke2"},"\u5b89\u88c5 RKE2")))),(0,n.kt)("h2",{id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5"),(0,n.kt)("p",null,"\u4ece RKE2 v1.20 \u5f00\u59cb\uff0c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u652f\u6301\u9075\u5faa ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/containerd_registry_configuration"},"containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"),"\u4e2d\u7684\u6240\u6709\u8bbe\u7f6e\u3002\u5176\u4e2d\u5305\u62ec\u7aef\u70b9\u8986\u76d6\u548c\u4f20\u8f93\u534f\u8bae\uff08HTTP/HTTPS\uff09\u3001\u8eab\u4efd\u9a8c\u8bc1\u3001\u8bc1\u4e66\u9a8c\u8bc1\u7b49\u3002"),(0,n.kt)("p",null,"\u5728 RKE2 v1.20 \u4e4b\u524d\uff0c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u5fc5\u987b\u4f7f\u7528 TLS\uff0c\u5e76\u4f7f\u7528\u4e3b\u673a CA \u6346\u7ed1\u5305\u4fe1\u4efb\u7684\u8bc1\u4e66\u3002\u5982\u679c\u955c\u50cf\u4ed3\u5e93\u4f7f\u7528\u7684\u662f\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"update-ca-certificates")," \u5c06\u8bc1\u4e66\u6dfb\u52a0\u5230\u4e3b\u673a CA \u6346\u7ed1\u5305\u3002\u955c\u50cf\u4ed3\u5e93\u8fd8\u5fc5\u987b\u5141\u8bb8\u533f\u540d\uff08\u672a\u7ecf\u8eab\u4efd\u9a8c\u8bc1\uff09\u8bbf\u95ee\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u5fc5\u9700\u7684\u7cfb\u7edf\u955c\u50cf\u6dfb\u52a0\u5230\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\u4f60\u53ef\u4ee5\u4ece\u4e0e\u4e0a\u8ff0\u6bcf\u4e2a\u538b\u7f29\u5305\u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},".txt")," \u6587\u4ef6\u4e2d\u83b7\u53d6\u955c\u50cf\u5217\u8868\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u79bb\u7ebf\u955c\u50cf\u538b\u7f29\u5305\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"docker load"),"\uff0c\u7136\u540e\u6807\u8bb0\u5e76\u63a8\u9001\u52a0\u8f7d\u7684\u955c\u50cf\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u5728\u955c\u50cf\u4ed3\u5e93\u4e0a\u4f7f\u7528\u79c1\u6709\u6216\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u8bf7\u5c06\u955c\u50cf\u4ed3\u5e93\u7684 CA \u8bc1\u4e66\u6dfb\u52a0\u5230 containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u4e2d\uff0c\u5982\u679c\u4f7f\u7528 v1.20 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u5219\u6dfb\u52a0\u5230\u64cd\u4f5c\u7cfb\u7edf\u7684\u53d7\u4fe1\u4efb\u8bc1\u4e66\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"system-default-registry")," \u53c2\u6570",(0,n.kt)("a",{parentName:"li",href:"#%E5%AE%89%E8%A3%85-windows-rke2"},"\u5b89\u88c5 RKE2"),"\uff0c\u6216\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"/zh/install/containerd_registry_configuration"},"containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"),"\u5c06\u4f60\u7684\u955c\u50cf\u4ed3\u5e93\u7528\u4f5c docker.io \u7684 mirror\u3002")),(0,n.kt)("h2",{id:"\u5b89\u88c5-windows-rke2"},"\u5b89\u88c5 Windows RKE2"),(0,n.kt)("p",null,"\u8fd9\u4e9b\u6b65\u9aa4\u53ea\u80fd\u5728\u5b8c\u6210 ",(0,n.kt)("a",{parentName:"p",href:"#windows-tarball-%E6%96%B9%E6%B3%95"},"Tarball \u65b9\u6cd5"),"\u6216",(0,n.kt)("a",{parentName:"p",href:"#%E7%A7%81%E6%9C%89%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E6%96%B9%E6%B3%95"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5"),"\u4e4b\u4e00\u540e\u6267\u884c\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u83b7\u53d6 Windows RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-windows-amd64.exe"),"\u3002\u786e\u4fdd\u4e8c\u8fdb\u5236\u6587\u4ef6\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2.exe")," \u5e76\u5c06\u5176\u653e\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"c:/usr/local/bin")," \u4e2d\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.21.4%2Brke2r2/rke2-windows-amd64.exe -OutFile c:/usr/local/bin/rke2.exe\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u4e3a Windows \u914d\u7f6e rke2-agent")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'New-Item -Type Directory c:/etc/rancher/rke2 -Force\nSet-Content -Path c:/etc/rancher/rke2/config.yaml -Value @"\nserver: https://<server>:9345\ntoken: <token from server node>\n"@\n')),(0,n.kt)("p",null,"\u6709\u5173 ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/install/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u5b89\u88c5\u9009\u9879\u6587\u6863"),"\u3002"),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e PATH")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH+=";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin"\n\n[Environment]::SetEnvironmentVariable(\n    "Path",\n    [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine) + ";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin",\n    [EnvironmentVariableTarget]::Machine)\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4f7f\u7528\u6240\u9700\u53c2\u6570\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u542f\u52a8 RKE2 Windows \u670d\u52a1\u3002\u6709\u5173\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"li",href:"/zh/reference/windows_agent_config"},"Windows Agent \u914d\u7f6e\u53c2\u8003"),"\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"c:\\usr\\local\\bin\\rke2.exe agent service --add\n")),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5\uff0c\u4f60\u7684\u914d\u7f6e\u6587\u4ef6\u5c06\u5177\u6709\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'system-default-registry: "registry.example.com:5000"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"system-default-registry")," \u53c2\u6570\u5fc5\u987b\u4ec5\u6307\u5b9a\u6709\u6548\u7684 RFC 3986 URI \u6388\u6743\uff0c\u5373\u4e3b\u673a\u548c\u53ef\u9009\u7aef\u53e3\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u4ec5\u4f7f\u7528 CLI \u53c2\u6570\uff0c\u8bf7\u4f7f\u7528\u6240\u9700\u53c2\u6570\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"c:/usr/local/bin/rke2.exe agent --token <> --server <>\n")))}d.isMDXComponent=!0}}]);