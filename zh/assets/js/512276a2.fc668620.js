"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2222],{3034:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(5893),c=r(1151);const i={title:"SELinux"},s=void 0,o={id:"security/selinux",title:"SELinux",description:"RKE2 \u53ef\u4ee5\u5728\u652f\u6301 SELinux \u7684\u7cfb\u7edf\u4e0a\u8fd0\u884c\uff0c\u8fd9\u662f\u5b89\u88c5\u5728 CentOS/RHEL 7 &amp; 8 \u65f6\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/selinux.md",sourceDirName:"security",slug:"/security/selinux",permalink:"/zh/security/selinux",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/selinux.md",tags:[],version:"current",lastUpdatedAt:1704881943,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"SELinux"},sidebar:"mySidebar",previous:{title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u6807\u51c6",permalink:"/zh/security/pod_security_standards"},next:{title:"Secret \u52a0\u5bc6",permalink:"/zh/security/secrets_encryption"}},l={},d=[{value:"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e",id:"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4}];function a(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["RKE2 \u53ef\u4ee5\u5728\u652f\u6301 SELinux \u7684\u7cfb\u7edf\u4e0a\u8fd0\u884c\uff0c\u8fd9\u662f\u5b89\u88c5\u5728 CentOS/RHEL 7 & 8 \u65f6\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002\n\u652f\u6301\u8be5\u8bbe\u7f6e\u7684",(0,t.jsx)(n.a,{href:"https://github.com/rancher/rke2-selinux",children:"\u7b56\u7565"}),"\u662f ",(0,t.jsx)(n.a,{href:"https://github.com/containers/container-selinux",children:"container-selinux"})," \u7b56\u7565\u7684\u4e00\u4e2a\u7279\u6b8a\u7248\u672c\uff0c\u7528\u4e8e containerd\u3002\u5b83\u89e3\u91ca\u4e86 containerd \u5b89\u88c5\u5728\u975e\u6807\u51c6\u4f4d\u7f6e\u7684\u539f\u56e0\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6301\u4e45\u548c\u77ed\u6682\u72b6\u6001\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e",children:"\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u6807\u7b7e"}),"\n",(0,t.jsxs)(n.p,{children:["RKE2 \u5c06 control plane \u670d\u52a1\u4f5c\u4e3a\u9759\u6001 pod \u8fd0\u884c\uff0c\u9700\u8981\u8bbf\u95ee\u591a\u4e2a ",(0,t.jsx)(n.a,{href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L59",children:(0,t.jsx)(n.code,{children:"container_var_lib_t"})})," \u4f4d\u7f6e\u3002",(0,t.jsx)(n.code,{children:"etcd"})," \u5bb9\u5668\u5fc5\u987b\u80fd\u591f\u5728 ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/server/db"})," \u4e0b\u8bfb\u5199\uff0c\u5e76\u4e0e ",(0,t.jsx)(n.code,{children:"kube-apiserver"}),"\u3001",(0,t.jsx)(n.code,{children:"kube-controller-manager"})," \u548c ",(0,t.jsx)(n.code,{children:"kube-scheduler"})," \u4e00\u8d77\u4ece ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/server/tls"})," \u8bfb\u53d6\u3002\n\u4e3a\u4e86\u4e0d\u8fc7\u5ea6\u6388\u6743\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.a,{href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L47-L49",children:(0,t.jsx)(n.code,{children:"spc_t"})}),"\uff0cRKE2 SELinux \u7b56\u7565\u5f15\u5165\u4e86 ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L15-L21",children:(0,t.jsx)(n.code,{children:"rke2_service_db_t"})})," \u548c ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L15-L21",children:(0,t.jsx)(n.code,{children:"rke2_service_t"})})," \u4e0a\u4e0b\u6587\u6807\u7b7e\uff0c\u5206\u522b\u4e3a\u8bfb\u5199\u548c\u53ea\u8bfb\u8bbf\u95ee\u3002\u8fd9\u4e9b\u6807\u7b7e\u5c06\u4ec5\u9002\u7528\u4e8e RKE2 control plane \u9759\u6001 pod\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["RKE2 \u5bf9 SELinux \u7684\u652f\u6301\u76f8\u5f53\u4e8e\u4e00\u4e2a\u914d\u7f6e\u9879\uff0c\u5373 ",(0,t.jsx)(n.code,{children:"--selinux"})," \u5e03\u5c14\u6807\u5fd7\u3002\u8fd9\u662f\u4e00\u4e2a\u901a\u5411 ",(0,t.jsxs)(n.a,{href:"https://github.com/containerd/cri/blob/release/1.4/docs/config.md",children:["containerd/cri toml \u7684 CRI \u90e8\u5206\u7684 ",(0,t.jsx)(n.code,{children:"enable_selinux"})," \u5e03\u5c14\u503c"]}),"\u7684\u901a\u9053\u3002\n\u5982\u679c RKE2 \u662f\u901a\u8fc7 tarball \u5b89\u88c5\u7684\uff0c\u90a3\u4e48 SELinux \u5c06\u4e0d\u4f1a\u5728\u6ca1\u6709\u989d\u5916\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\u542f\u7528\u3002\u63a8\u8350\u7684\u914d\u7f6e\u65b9\u6cd5\u662f\u4f7f\u7528 RKE2 ",(0,t.jsx)(n.code,{children:"config.yaml"})," \u4e2d\u7684\u4e00\u4e2a\u6761\u76ee\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/rke2/config.yaml is the default location\nselinux: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u76f8\u5f53\u4e8e\u5c06 ",(0,t.jsx)(n.code,{children:"--selinux"})," \u6807\u5fd7\u4f20\u9012\u7ed9 ",(0,t.jsx)(n.code,{children:"rke2 server"})," \u6216 ",(0,t.jsx)(n.code,{children:"rke2 agent"})," \u547d\u4ee4\u884c\u6216\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"RKE2_SELINUX=true"})," \u73af\u5883\u53d8\u91cf\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(7294);const c={},i=t.createContext(c);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);