"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7349],{3688:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=r(5893),t=r(1151);const o={title:"\u81ea\u52a8\u5347\u7ea7"},c=void 0,l={id:"upgrade/automated_upgrade",title:"\u81ea\u52a8\u5347\u7ea7",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrade/automated_upgrade.md",sourceDirName:"upgrade",slug:"/upgrade/automated_upgrade",permalink:"/zh/upgrade/automated_upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/upgrade/automated_upgrade.md",tags:[],version:"current",lastUpdatedAt:1704881943,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"\u81ea\u52a8\u5347\u7ea7"},sidebar:"mySidebar",previous:{title:"\u624b\u52a8\u5347\u7ea7",permalink:"/zh/upgrade/manual_upgrade"},next:{title:"\u5f3a\u5316\u955c\u50cf",permalink:"/zh/security/about_hardened_images"}},a={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u5b89\u88c5 system-upgrade-controller",id:"\u5b89\u88c5-system-upgrade-controller",level:3},{value:"\u914d\u7f6e\u8ba1\u5212",id:"\u914d\u7f6e\u8ba1\u5212",level:3}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u7684 system-upgrade-controller \u7ba1\u7406 RKE2 \u96c6\u7fa4\u5347\u7ea7\u3002\u8fd9\u662f\u4e00\u79cd Kubernetes \u539f\u751f\u7684\u96c6\u7fa4\u5347\u7ea7\u65b9\u6cd5\u3002\u5b83\u5229\u7528",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources",children:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08custom resource definition\uff0cCRD\uff09"}),"\u3001",(0,s.jsx)(n.code,{children:"\u8ba1\u5212"}),"\u548c",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/architecture/controller/",children:"\u63a7\u5236\u5668"}),"\uff0c\u6839\u636e\u914d\u7f6e\u7684\u8ba1\u5212\u5b89\u6392\u5347\u7ea7\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8ba1\u5212\u5b9a\u4e49\u4e86\u5347\u7ea7\u7684\u7b56\u7565\u548c\u8981\u6c42\u3002\u672c\u6587\u6863\u5c06\u63d0\u4f9b\u9002\u7528\u4e8e\u5347\u7ea7 RKE2 \u96c6\u7fa4\u7684\u9ed8\u8ba4\u8ba1\u5212\u3002\u6709\u5173\u66f4\u9ad8\u7ea7\u7684\u8ba1\u5212\u914d\u7f6e\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go",children:"CRD"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a7\u5236\u5668\u901a\u8fc7\u76d1\u63a7\u8ba1\u5212\u548c\u9009\u62e9\u8981\u8fd0\u884c\u5347\u7ea7 ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",children:"job"})," \u7684\u8282\u70b9\u6765\u5b89\u6392\u5347\u7ea7\u3002\u8ba1\u5212\u901a\u8fc7",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"\u6807\u7b7e\u9009\u62e9\u5668"}),"\u5b9a\u4e49\u5e94\u8be5\u5347\u7ea7\u54ea\u4e9b\u8282\u70b9\u3002job \u6210\u529f\u8fd0\u884c\u5b8c\u6210\u65f6\uff0c\u63a7\u5236\u5668\u5c06\u76f8\u5e94\u5730\u6807\u8bb0\u5b83\u8fd0\u884c\u7684\u8282\u70b9\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u542f\u52a8\u7684\u5347\u7ea7 job \u5fc5\u987b\u5177\u6709\u9ad8\u6743\u9650\u3002\u5b83\u914d\u7f6e\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e3b\u673a ",(0,s.jsx)(n.code,{children:"IPC"}),"\u3001",(0,s.jsx)(n.code,{children:"NET"})," \u548c ",(0,s.jsx)(n.code,{children:"PID"})," \u547d\u540d\u7a7a\u95f4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CAP_SYS_BOOT"})," \u80fd\u529b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6302\u8f7d\u5728 ",(0,s.jsx)(n.code,{children:"/host"})," \u7684\u4e3b\u673a\u6839\u76ee\u5f55\uff0c\u5177\u6709\u8bfb\u5199\u6743\u9650"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u5173 system-upgrade-controller \u7684\u8bbe\u8ba1\u548c\u67b6\u6784\uff0c\u4ee5\u53ca\u5b83\u4e0e RKE2 \u96c6\u6210\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b Git \u4ed3\u5e93\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/rancher/k3s-upgrade",children:"rke2-upgrade"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u81ea\u52a8\u5347\u7ea7\uff0c\u4f60\u5fc5\u987b\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5c06 system-upgrade-controller \u5b89\u88c5\u5230\u96c6\u7fa4\u4e2d"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u8ba1\u5212"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5-system-upgrade-controller",children:"\u5b89\u88c5 system-upgrade-controller"}),"\n",(0,s.jsx)(n.p,{children:"system-upgrade-controller \u53ef\u4ee5\u4f5c\u4e3a Deployment \u5b89\u88c5\u5230\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002Deployment \u9700\u8981 ServiceAccount\u3001clusterRoleBinding \u548c configmap\u3002\u8981\u5b89\u88c5\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/download/v0.9.1/system-upgrade-controller.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63a7\u5236\u5668\u53ef\u4ee5\u901a\u8fc7\u524d\u9762\u63d0\u5230\u7684 configmap \u8fdb\u884c\u914d\u7f6e\u548c\u81ea\u5b9a\u4e49\uff0c\u4f46\u63a7\u5236\u5668\u5fc5\u987b\u91cd\u65b0\u90e8\u7f72\u624d\u80fd\u5e94\u7528\u66f4\u6539\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e\u8ba1\u5212",children:"\u914d\u7f6e\u8ba1\u5212"}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u4f60\u81f3\u5c11\u521b\u5efa\u4e24\u4e2a\u8ba1\u5212\uff1a\u5347\u7ea7 server\uff08master/control plane\uff09\u8282\u70b9\u7684\u8ba1\u5212\u548c\u5347\u7ea7 agent\uff08worker\uff09\u8282\u70b9\u7684\u8ba1\u5212\u3002\u6839\u636e\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u5176\u4ed6\u8ba1\u5212\u6765\u63a7\u5236\u8de8\u8282\u70b9\u7684\u5347\u7ea7\u56de\u6eda\u3002\u4ee5\u4e0b\u4e24\u4e2a\u793a\u4f8b\u8ba1\u5212\u4f1a\u5c06\u4f60\u7684\u96c6\u7fa4\u5347\u7ea7\u5230 rke2 v1.23.1+rke2r2\u3002\u521b\u5efa\u8ba1\u5212\u540e\uff0c\u63a7\u5236\u5668\u5c06\u9009\u62e9\u5b83\u4eec\u5e76\u5f00\u59cb\u5347\u7ea7\u4f60\u7684\u96c6\u7fa4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Server plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: server\nspec:\n  concurrency: 1\n  nodeSelector:\n    matchExpressions:\n       - {key: rke2-upgrade, operator: Exists}\n       - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n       # When using k8s version 1.19 or older, swap control-plane with master\n       - {key: node-role.kubernetes.io/control-plane, operator: In, values: ["true"]}\n  serviceAccountName: system-upgrade\n  cordon: true\n#  drain:\n#    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.23.1-rke2r2\n---\n# Agent plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: agent\nspec:\n  concurrency: 2\n  nodeSelector:\n    matchExpressions:\n      - {key: rke2-upgrade, operator: Exists}\n      - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n      # When using k8s version 1.19 or older, swap control-plane with master\n      - {key: node-role.kubernetes.io/control-plane, operator: NotIn, values: ["true"]}\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/rke2-upgrade\n  serviceAccountName: system-upgrade\n  cordon: true\n  drain:\n    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.23.1-rke2r2\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5173\u4e8e\u8fd9\u4e9b\u8ba1\u5212\uff0c\u6709\u51e0\u4e2a\u91cd\u8981\u7684\u4e8b\u60c5\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8ba1\u5212\u5fc5\u987b\u5728\u90e8\u7f72\u63a7\u5236\u5668\u7684\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"concurrency"})," \u5b57\u6bb5\u8868\u793a\u53ef\u4ee5\u540c\u65f6\u5347\u7ea7\u591a\u5c11\u4e2a\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"server-plan"})," \u901a\u8fc7\u6307\u5b9a\u4e00\u4e2a\u6807\u7b7e\u9009\u62e9\u5668\u6765\u9009\u62e9 Server \u8282\u70b9\uff0c\u8be5\u6807\u7b7e\u9009\u62e9\u5668\u4f1a\u9009\u62e9\u5177\u6709 ",(0,s.jsx)(n.code,{children:"node-role.kubernetes.io/control-plane"})," \u6807\u7b7e\u7684\u8282\u70b9\uff08",(0,s.jsx)(n.code,{children:"node-role.kubernetes.io/master"})," \u9002\u7528\u4e8e 1.19 \u6216\u66f4\u65e9\u7248\u672c\uff09\u3002",(0,s.jsx)(n.code,{children:"agent-plan"})," \u901a\u8fc7\u6307\u5b9a\u4e00\u4e2a\u6807\u7b7e\u9009\u62e9\u5668\u6765\u9009\u62e9\u6ca1\u6709\u8be5\u6807\u7b7e\u7684\u8282\u70b9\uff0c\u4ece\u800c\u9501\u5b9a agent \u8282\u70b9\u3002\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u5305\u542b\u5176\u4ed6\u6807\u7b7e\uff0c\u5982\u4e0a\u4f8b\u6240\u793a\uff0c\u5b83\u8981\u6c42\u6807\u7b7e \u201crke2-upgrade\u201d \u5b58\u5728\u5e76\u4e14\u503c\u4e0d\u662f \u201cdisabled\u201d \u6216 \u201cfalse\u201d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"agent-plan"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"prepare"})," \u6b65\u9aa4\u4f1a\u4f7f\u8be5\u8ba1\u5212\u7b49\u5f85 ",(0,s.jsx)(n.code,{children:"server-plan"})," \u5b8c\u6210\u540e\u518d\u6267\u884c\u5347\u7ea7 job\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e24\u4e2a\u8ba1\u5212\u90fd\u5c06 ",(0,s.jsx)(n.code,{children:"version"})," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a v1.23.1+rke2r2\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u7701\u7565 ",(0,s.jsx)(n.code,{children:"version"})," \u5b57\u6bb5\u5e76\u5c06 ",(0,s.jsx)(n.code,{children:"channel"})," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u89e3\u6790\u5230 RKE2 \u7248\u672c\u7684 URL\u3002\u8fd9\u5c06\u5bfc\u81f4\u63a7\u5236\u5668\u76d1\u63a7\u8be5 URL\uff0c\u5e76\u5728\u5b83\u89e3\u6790\u5230\u65b0\u7248\u672c\u65f6\u968f\u65f6\u5347\u7ea7\u96c6\u7fa4\u3002\u8fd9\u9002\u7528\u4e8e",(0,s.jsx)(n.a,{href:"manual_upgrade#%E7%89%88%E6%9C%AC-channels",children:"\u7248\u672c channels"}),"\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684 channel \u914d\u7f6e\u8ba1\u5212\uff0c\u4ece\u800c\u786e\u4fdd\u4f60\u7684\u96c6\u7fa4\u603b\u662f\u81ea\u52a8\u5347\u7ea7\u5230 RKE2 \u7684\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.rke2.io/v1-release/channels/stable\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u524d\u6240\u8ff0\uff0c\u4e00\u65e6\u63a7\u5236\u5668\u68c0\u6d4b\u5230\u5df2\u521b\u5efa\u8ba1\u5212\uff0c\u5347\u7ea7\u5c31\u4f1a\u7acb\u5373\u5f00\u59cb\u3002\u66f4\u65b0\u8ba1\u5212\u5c06\u5bfc\u81f4\u63a7\u5236\u5668\u91cd\u65b0\u8bc4\u4f30\u8ba1\u5212\u5e76\u786e\u5b9a\u662f\u5426\u9700\u8981\u518d\u6b21\u5347\u7ea7\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7 kubectl \u67e5\u770b\u8ba1\u5212\u548c job \u6765\u76d1\u63a7\u5347\u7ea7\u8fdb\u5ea6\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var s=r(7294);const t={},o=s.createContext(t);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);