"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),k=a,d=c["".concat(i,".").concat(k)]||c[k]||m[k]||l;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={hide_table_of_contents:!0},s="v1.28.X",o={unversionedId:"release-notes/v1.28.X",id:"release-notes/v1.28.X",title:"v1.28.X",description:"Before upgrading from earlier releases, be sure to read the Kubernetes Urgent Upgrade Notes.",source:"@site/docs/release-notes/v1.28.X.md",sourceDirName:"release-notes",slug:"/release-notes/v1.28.X",permalink:"/release-notes/v1.28.X",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/release-notes/v1.28.X.md",tags:[],version:"current",lastUpdatedAt:1698168547,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"v1.27.X",permalink:"/release-notes/v1.27.X"},next:{title:"Known Issues and Limits",permalink:"/known_issues"}},i={},p=[{value:"Release v1.28.2+rke2r1",id:"release-v1282rke2r1",level:2},{value:"Changes since v1.28.1+rke2r1:",id:"changes-since-v1281rke2r1",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"v128x"},"v1.28.X"),(0,a.kt)("admonition",{title:"Upgrade Notice",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md#urgent-upgrade-notes"},"Urgent Upgrade Notes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Release date"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes"),(0,a.kt)("th",{parentName:"tr",align:null},"Etcd"),(0,a.kt)("th",{parentName:"tr",align:null},"Containerd"),(0,a.kt)("th",{parentName:"tr",align:null},"Runc"),(0,a.kt)("th",{parentName:"tr",align:null},"Metrics-server"),(0,a.kt)("th",{parentName:"tr",align:null},"CoreDNS"),(0,a.kt)("th",{parentName:"tr",align:null},"Ingress-Nginx"),(0,a.kt)("th",{parentName:"tr",align:null},"Helm-controller"),(0,a.kt)("th",{parentName:"tr",align:null},"Canal (Default)"),(0,a.kt)("th",{parentName:"tr",align:null},"Calico"),(0,a.kt)("th",{parentName:"tr",align:null},"Cilium"),(0,a.kt)("th",{parentName:"tr",align:null},"Multus"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/release-notes/v1.28.X#release-v1282rke2r1"},"v1.28.2+rke2r1")),(0,a.kt)("td",{parentName:"tr",align:null},"Sep 18 2023"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.28.md#v1282"},"v1.28.2")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1"},"v3.5.9-k3s1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.3-k3s1"},"v1.7.3-k3s1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/opencontainers/runc/releases/tag/v1.1.8"},"v1.1.8")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3"},"v0.6.3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/coredns/coredns/releases/tag/v1.10.1"},"v1.10.1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/ingress-nginx/releases/tag/helm-chart-4.6.1"},"4.6.1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.4"},"v0.15.4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/flannel-io/flannel/releases/tag/v0.22.1"},"Flannel v0.22.1"),(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"td",href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26"},"Calico v3.26.1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.tigera.io/calico/latest/release-notes/#v3.26"},"v3.26.1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/cilium/cilium/releases/tag/v1.14.1"},"v1.14.1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/k8snetworkplumbingwg/multus-cni/releases/tag/v4.0.2"},"v4.0.2"))))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"release-v1282rke2r1"},"Release v1.28.2+rke2r1"),(0,a.kt)("p",null,"This release updates Kubernetes to v1.28.2."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important Note")),(0,a.kt)("p",null,"If your server (control-plane) nodes were not started with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--token")," CLI flag or config file key, a randomized token was generated during initial cluster startup. This key is used both for joining new nodes to the cluster, and for encrypting cluster bootstrap data within the datastore. Ensure that you retain a copy of this token, as is required when restoring from backup."),(0,a.kt)("p",null,"You may retrieve the token value from any server already joined to the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/lib/rancher/rke2/server/token\n")),(0,a.kt)("h3",{id:"changes-since-v1281rke2r1"},"Changes since v1.28.1+rke2r1:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Support new generic "cis" profile ',(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2/pull/4708"},"(#4708)")),(0,a.kt)("li",{parentName:"ul"},"Update cilium to 1.14.1 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2/pull/4755"},"(#4755)")),(0,a.kt)("li",{parentName:"ul"},"Update Kubernetes to v1.28.2 Go to v1.20.8 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2/pull/4760"},"(#4760)"))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);