"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Managing Server Roles"},l=void 0,i={unversionedId:"install/server_roles",id:"install/server_roles",title:"Managing Server Roles",description:"By default, starting the RKE2 will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes.",source:"@site/docs/install/server_roles.md",sourceDirName:"install",slug:"/install/server_roles",permalink:"/install/server_roles",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/server_roles.md",tags:[],version:"current",lastUpdatedAt:1692036990,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{title:"Managing Server Roles"},sidebar:"mySidebar",previous:{title:"Windows Air-Gap Install",permalink:"/install/windows_airgap"},next:{title:"Uninstall",permalink:"/install/uninstall"}},d={},s=[{value:"Dedicated <code>etcd</code> Nodes",id:"dedicated-etcd-nodes",level:2},{value:"Dedicated <code>control-plane</code> Nodes",id:"dedicated-control-plane-nodes",level:2},{value:"Adding Roles To Existing Servers",id:"adding-roles-to-existing-servers",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, starting the RKE2 will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes."),(0,a.kt)("h2",{id:"dedicated-etcd-nodes"},"Dedicated ",(0,a.kt)("inlineCode",{parentName:"h2"},"etcd")," Nodes"),(0,a.kt)("p",null,"To create a server with only the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role, deploy a config with all the control-plane components disabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\n")),(0,a.kt)("p",null,"This first node will start etcd, and wait for additional ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," nodes to join. The cluster will not be usable until you join an additional server with the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," components enabled."),(0,a.kt)("h2",{id:"dedicated-control-plane-nodes"},"Dedicated ",(0,a.kt)("inlineCode",{parentName:"h2"},"control-plane")," Nodes"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," node cannot be the first server in the cluster; there must be an existing node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role before joining dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," nodes.")),(0,a.kt)("p",null,"To create a server with only the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," role, deploy a config with etcd disabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\nserver: https://<etcd-only-node>:9345\ndisable-etcd: true\n")),(0,a.kt)("p",null,"After creating dedicated server nodes, the selected roles will be visible in ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get node"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME           STATUS   ROLES                       AGE     VERSION\nrke2-server-1   Ready    etcd                        5h39m   v1.26.4+rke2r1\nrke2-server-2   Ready    control-plane,master        5h39m   v1.26.4+rke2r1\n")),(0,a.kt)("h2",{id:"adding-roles-to-existing-servers"},"Adding Roles To Existing Servers"),(0,a.kt)("p",null,"Roles can be added to existing dedicated nodes by restarting RKE2 with the disable flags removed. For example, if you want to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," role to a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," node, you can remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"disable-apiserver disable-controller-manager disable-scheduler")," lines from the config file, and restart the service."))}p.isMDXComponent=!0}}]);