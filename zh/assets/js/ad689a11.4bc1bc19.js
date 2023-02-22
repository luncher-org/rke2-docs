"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?l.createElement(h,i(i({ref:t},d),{},{components:n})):l.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const a={title:"Uninstall"},i=void 0,o={unversionedId:"install/uninstall",id:"install/uninstall",title:"Uninstall",description:"Uninstalling RKE2 deletes the cluster data and all of the scripts.",source:"@site/docs/install/uninstall.md",sourceDirName:"install",slug:"/install/uninstall",permalink:"/zh/install/uninstall",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/uninstall.md",tags:[],version:"current",lastUpdatedAt:1677087697,formattedLastUpdatedAt:"2023\u5e742\u670822\u65e5",frontMatter:{title:"Uninstall"},sidebar:"mySidebar",previous:{title:"Windows \u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/install/windows_airgap"},next:{title:"\u6982\u8ff0",permalink:"/zh/upgrade/"}},s={},u=[{value:"Linux Uninstall",id:"linux-uninstall",level:2},{value:"RPM Method",id:"rpm-method",level:3},{value:"Tarball Method",id:"tarball-method",level:3},{value:"Windows Uninstall",id:"windows-uninstall",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Uninstalling RKE2 deletes the cluster data and all of the scripts.")),(0,r.kt)("h2",{id:"linux-uninstall"},"Linux Uninstall"),(0,r.kt)("p",null,"Depending on the method used to install RKE2, the uninstallation process varies."),(0,r.kt)("h3",{id:"rpm-method"},"RPM Method"),(0,r.kt)("p",null,"To uninstall RKE2 installed via the RPM method from your system, simply run the commands corresponding to the version of RKE2 you have installed, either as the root user or through ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),". This will shutdown RKE2 process, remove the RKE2 RPMs, and clean up files used by RKE2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/bin/rke2-uninstall.sh\n")),(0,r.kt)("h3",{id:"tarball-method"},"Tarball Method"),(0,r.kt)("p",null,"To uninstall RKE2 installed via the Tarball method from your system, simply run the command below. This will terminate the process, remove the RKE2 binary, and clean up files used by RKE2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/rke2-uninstall.sh\n")),(0,r.kt)("h2",{id:"windows-uninstall"},"Windows Uninstall"),(0,r.kt)("p",null,"To uninstall the RKE2 Windows Agent installed via the tarball method from your system, simply run the command below. This will shutdown all RKE2 Windows processes, remove the RKE2 Windows binary, and clean up the files used by RKE2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"c:/usr/local/bin/rke2-uninstall.ps1\n")))}c.isMDXComponent=!0}}]);