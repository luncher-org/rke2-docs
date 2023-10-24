"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2753],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>N});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(n),k=l,N=s["".concat(d,".").concat(k)]||s[k]||m[k]||r;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3132:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={title:"Requirements"},i=void 0,o={unversionedId:"install/requirements",id:"install/requirements",title:"Requirements",description:"RKE2 is very lightweight, but has some minimum requirements as outlined below.",source:"@site/docs/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/install/requirements",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/requirements.md",tags:[],version:"current",lastUpdatedAt:1698168547,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{title:"Requirements"},sidebar:"mySidebar",previous:{title:"Quick Start",permalink:"/install/quickstart"},next:{title:"Configuration Options",permalink:"/install/configuration"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Operating Systems",id:"operating-systems",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Linux/Windows",id:"linuxwindows",level:3},{value:"VM Sizing Guide",id:"vm-sizing-guide",level:3},{value:"Disks",id:"disks",level:4},{value:"Networking",id:"networking",level:2},{value:"Inbound Network Rules",id:"inbound-network-rules",level:3},{value:"Windows Specific Inbound Network Rules",id:"windows-specific-inbound-network-rules",level:3}],p={toc:u},s="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(s,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"RKE2 is very lightweight, but has some minimum requirements as outlined below."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Two rke2 nodes cannot have the same node name. By default, the node name is taken from the machine's hostname."),(0,l.kt)("p",null,"If two or more of your machines have the same hostname, you must do one of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update the hostname to a unique value"),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("inlineCode",{parentName:"li"},"node-name")," parameter in the config file to a unique value"),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("inlineCode",{parentName:"li"},"with-node-id")," parameter in the config file to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," to append a randomly generated ID number to the hostname.")),(0,l.kt)("admonition",{title:"Version Gate",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"with-node-id")," parameter is available starting with the 2023-05 releases (v1.27.2+rke2r1, v1.26.5+rke2r1, v1.25.10+rke2r1, v1.24.14+rke2r1).")),(0,l.kt)("h2",{id:"operating-systems"},"Operating Systems"),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,"RKE2 has been tested and validated on the following operating systems, and their subsequent non-major releases:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Distro"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,l.kt)("td",{parentName:"tr",align:null},"18.04, 20.04, 22.04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CentOS/RHEL"),(0,l.kt)("td",{parentName:"tr",align:null},"7.8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rocky/RHEL"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5, 9.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Oracle Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"8.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SLES"),(0,l.kt)("td",{parentName:"tr",align:null},"15 SP3, SP4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenSUSE, SLE Micro"),(0,l.kt)("td",{parentName:"tr",align:null},"5.1, 5.2, 5.3, 5.4")))),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("admonition",{title:"Version Gate",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Experimental as of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/tag/v1.21.3%2Brke2r1"},"v1.21.3+rke2r1"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Windows Support requires choosing Calico as the CNI for the RKE2 cluster")),(0,l.kt)("p",null,"The RKE2 Windows Node (Worker) agent has been tested and validated on the following operating systems, and their subsequent non-major releases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"),(0,l.kt)("li",{parentName:"ul"},"Windows Server 2022 LTSC (amd64) (OS Build 20348.169)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")," The Windows Server Containers feature needs to be enabled for the RKE2 Windows agent to work."),(0,l.kt)("p",null,"Open a new Powershell window with Administrator privileges"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,l.kt)("p",null,"In the new Powershell window, run the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName Containers \u2013All\n")),(0,l.kt)("p",null,"This will require a reboot for the ",(0,l.kt)("inlineCode",{parentName:"p"},"Containers")," feature to properly function."),(0,l.kt)("h2",{id:"hardware"},"Hardware"),(0,l.kt)("p",null,"Hardware requirements scale based on the size of your deployments. Minimum recommendations are outlined here."),(0,l.kt)("h3",{id:"linuxwindows"},"Linux/Windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RAM: 4GB Minimum (we recommend at least 8GB)"),(0,l.kt)("li",{parentName:"ul"},"CPU: 2 Minimum (we recommend at least 4CPU)")),(0,l.kt)("h3",{id:"vm-sizing-guide"},"VM Sizing Guide"),(0,l.kt)("p",null,"When limited on CPU and RAM on the control-plane + etcd nodes, there could be limitations for the amount of agent nodes that can be joined under standard workload conditions. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Server CPU"),(0,l.kt)("th",{parentName:"tr",align:null},"Server RAM"),(0,l.kt)("th",{parentName:"tr",align:null},"Number of Agents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"0-225")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"226-450")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"451-1300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16+"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"1300+")))),(0,l.kt)("p",null,"It is recommended to join agent nodes in batches of 50 or less to allow the CPU to free up space, as there is a spike on node join. Remember to modify the default ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," if desiring more than 255 nodes!"),(0,l.kt)("p",null,"This data was retrieved under specific test conditions. It will vary depending upon environment and workloads. The steps below give an overview of the test that was run to retrieve this. It was last performed on v1.27.4+rke2r1. All of the machines were provisioned in AWS with standard 20 GiB gp3 volumes."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Monitor resources on grafana using prometheus data source."),(0,l.kt)("li",{parentName:"ol"},"Deploy workloads in such a way to simulate continuous cluster activity:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A basic workload that scales up and down continuously"),(0,l.kt)("li",{parentName:"ul"},"A workload that is deleted and recreated in a loop"),(0,l.kt)("li",{parentName:"ul"},"A constant workload that contains multiple other resources including CRDs."))),(0,l.kt)("li",{parentName:"ol"},"Join agent nodes in batches of 30-50 at a time.")),(0,l.kt)("h4",{id:"disks"},"Disks"),(0,l.kt)("p",null,"RKE2 performance depends on the performance of the database, and since RKE2 runs etcd embeddedly and it stores the data dir on disk, we recommend using an SSD when possible to ensure optimal performance."),(0,l.kt)("h2",{id:"networking"},"Networking"),(0,l.kt)("admonition",{title:"Important",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If your node has NetworkManager installed and enabled, ",(0,l.kt)("a",{parentName:"p",href:"/known_issues#networkmanager"},"ensure that it is configured to ignore CNI-managed interfaces."),". If your node has Wicked installed and enabled, ",(0,l.kt)("a",{parentName:"p",href:"/known_issues#wicked"},"ensure that the forwarding sysctl config is enabled"))),(0,l.kt)("p",null,"The RKE2 server needs port 6443 and 9345 to be accessible by other nodes in the cluster."),(0,l.kt)("p",null,"All nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used."),(0,l.kt)("p",null,"If you wish to utilize the metrics server, you will need to open port 10250 on each node."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472."),(0,l.kt)("h3",{id:"inbound-network-rules"},"Inbound Network Rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Destination"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9345"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 supervisor API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"6443"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"8472"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Required only for Flannel VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"10250"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"kubelet metrics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"2379"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"etcd client port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"2380"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"etcd peer port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"2381"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"etcd metrics port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"30000-32767"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"NodePort port range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"8472"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Cilium CNI VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"4240"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Cilium CNI health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ICMP"),(0,l.kt)("td",{parentName:"tr",align:null},"8/0"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Cilium CNI health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"179"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with BGP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"4789"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"5473"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with Typha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9098"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico Typha health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9099"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"5473"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with Typha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"8472"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI with VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9099"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"51820"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI with WireGuard IPv4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"51821"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI with WireGuard IPv6/dual-stack")))),(0,l.kt)("h3",{id:"windows-specific-inbound-network-rules"},"Windows Specific Inbound Network Rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Destination"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"4789"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Required for Calico and Flannel VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"179"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"All RKE2 nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with BGP")))),(0,l.kt)("p",null,"Typically, all outbound traffic will be allowed."))}m.isMDXComponent=!0}}]);