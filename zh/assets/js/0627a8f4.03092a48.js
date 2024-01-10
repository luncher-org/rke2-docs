"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4288],{4092:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var t=n(5893),s=n(1151);const l={title:"Helm \u96c6\u6210"},d=void 0,c={id:"helm",title:"Helm \u96c6\u6210",description:"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u901a\u8fc7 Helm\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u53ef\u914d\u7f6e\u7684 deployment\uff0c\u800c\u4e0d\u4ec5\u4ec5\u53ea\u80fd\u4f7f\u7528\u9759\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Deployment \u5546\u5e97\u5e94\u7528\uff0c\u8bf7\u53c2\u89c1 Helm \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/helm.md",sourceDirName:".",slug:"/helm",permalink:"/zh/helm",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/helm.md",tags:[],version:"current",lastUpdatedAt:1704881943,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"Helm \u96c6\u6210"},sidebar:"mySidebar",previous:{title:"\u7f51\u7edc",permalink:"/zh/networking"},next:{title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e",permalink:"/zh/advanced"}},h={},i=[{value:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c Helm Chart",id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c-helm-chart",level:3},{value:"\u4f7f\u7528 Helm CRD",id:"\u4f7f\u7528-helm-crd",level:3},{value:"HelmChart \u5b57\u6bb5\u5b9a\u4e49",id:"helmchart-\u5b57\u6bb5\u5b9a\u4e49",level:4},{value:"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",id:"\u4f7f\u7528-helmchartconfig-\u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u901a\u8fc7 Helm\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u53ef\u914d\u7f6e\u7684 deployment\uff0c\u800c\u4e0d\u4ec5\u4ec5\u53ea\u80fd\u4f7f\u7528\u9759\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Deployment \u5546\u5e97\u5e94\u7528\uff0c\u8bf7\u53c2\u89c1 ",(0,t.jsx)(r.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"Helm \u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["RKE2 \u4e0d\u9700\u8981\u4efb\u4f55\u7279\u6b8a\u914d\u7f6e\u5373\u53ef\u914d\u5408 Helm \u547d\u4ee4\u884c\u5de5\u5177\u4e00\u8d77\u4f7f\u7528\u3002\u8bf7\u786e\u4fdd\u4f60\u5df2\u6309\u7167",(0,t.jsx)(r.a,{href:"/zh/cluster_access",children:"\u96c6\u7fa4\u8bbf\u95ee"}),"\u90e8\u5206\u6b63\u786e\u8bbe\u7f6e\u4e86 kubeconfig\u3002RKE2 \u5305\u542b\u4e00\u4e9b\u5176\u4ed6\u529f\u80fd\uff0c\u8ba9\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(r.a,{href:"#%E4%BD%BF%E7%94%A8-helm-crd",children:"rancher/helm-release CRD"})," \u66f4\u8f7b\u677e\u5730\u90e8\u7f72\u4f20\u7edf\u7684 Kubernetes \u8d44\u6e90\u6e05\u5355\u548c Helm Chart\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u672c\u8282\u6db5\u76d6\u4ee5\u4e0b\u4e3b\u9898\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E6%B8%85%E5%8D%95%E5%92%8C-helm-chart",children:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c Helm Chart"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#%E4%BD%BF%E7%94%A8-helm-crd",children:"\u4f7f\u7528 Helm CRD"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#%E4%BD%BF%E7%94%A8-helmchartconfig-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%93%E5%8C%85%E7%BB%84%E4%BB%B6",children:"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6"})}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c-helm-chart",children:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355\u548c Helm Chart"}),"\n",(0,t.jsxs)(r.p,{children:["\u5728 ",(0,t.jsx)(r.code,{children:"/var/lib/rancher/rke2/server/manifests"})," \u4e2d\u627e\u5230\u7684 Kubernetes \u6e05\u5355\u90fd\u4f1a\u4ee5\u7c7b\u4f3c\u4e8e ",(0,t.jsx)(r.code,{children:"kubectl apply"})," \u7684\u65b9\u5f0f\u81ea\u52a8\u90e8\u7f72\u5230 RKE2\u3002\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u90e8\u7f72\u7684\u6e05\u5355\u4f5c\u4e3a AddOn \u81ea\u5b9a\u4e49\u8d44\u6e90\u8fdb\u884c\u7ba1\u7406\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,t.jsx)(r.code,{children:"kubectl get addon -A"})," \u67e5\u770b\u5b83\u4eec\u3002\u4f60\u80fd\u627e\u5230\u7528\u4e8e\u6253\u5305\u7ec4\u4ef6\u7684 AddOn\uff0c\u4f8b\u5982 CoreDNS\u3001Nginx-Ingress \u7b49\u3002AddOn \u7531\u90e8\u7f72\u63a7\u5236\u5668\u81ea\u52a8\u521b\u5efa\uff0c\u5e76\u6839\u636e\u5b83\u4eec\u5728\u6e05\u5355\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u540d\u547d\u540d\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u5c06 Helm Chart \u90e8\u7f72\u4e3a AddOn\u3002RKE2 \u5305\u542b\u4e00\u4e2a ",(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/helm-controller",children:"Helm Controller"}),"\uff0c\u5b83\u4f7f\u7528 HelmChart \u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 (CRD) \u7ba1\u7406 Helm Chart\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"\u4f7f\u7528-helm-crd",children:"\u4f7f\u7528 Helm CRD"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/k3s-io/helm-controller#helm-controller",children:"HelmChart \u8d44\u6e90\u5b9a\u4e49"}),"\u6355\u83b7\u4e86\u4f60\u901a\u5e38\u4f20\u9012\u7ed9 ",(0,t.jsx)(r.code,{children:"helm"})," \u547d\u4ee4\u884c\u5de5\u5177\u7684\u5927\u90e8\u5206\u9009\u9879\u3002\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u4ece\u9ed8\u8ba4 Chart \u4ed3\u5e93\u90e8\u7f72 Grafana\uff0c\u5e76\u8986\u76d6\u67d0\u4e9b\u9ed8\u8ba4\u7684 Chart \u503c\u3002\u8bf7\u6ce8\u610f\uff0cHelmChart \u8d44\u6e90\u672c\u8eab\u4f4d\u4e8e ",(0,t.jsx)(r.code,{children:"kube-system"})," \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u4f46 Chart \u7684\u8d44\u6e90\u5c06\u90e8\u7f72\u5230 ",(0,t.jsx)(r.code,{children:"monitoring"})," \u547d\u540d\u7a7a\u95f4\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: grafana\n  namespace: kube-system\nspec:\n  chart: stable/grafana\n  targetNamespace: monitoring\n  set:\n    adminPassword: "NotVerySafePassword"\n  valuesContent: |-\n    image:\n      tag: master\n    env:\n      GF_EXPLORE_ENABLED: true\n    adminUser: admin\n    sidecar:\n      datasources:\n        enabled: true\n'})}),"\n",(0,t.jsx)(r.h4,{id:"helmchart-\u5b57\u6bb5\u5b9a\u4e49",children:"HelmChart \u5b57\u6bb5\u5b9a\u4e49"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5b57\u6bb5"}),(0,t.jsx)(r.th,{children:"\u9ed8\u8ba4"}),(0,t.jsx)(r.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(r.th,{children:"Helm \u53c2\u6570/\u6807\u5fd7\u7b49\u6548\u9879"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"name"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Helm Chart \u540d\u79f0"}),(0,t.jsx)(r.td,{children:"NAME"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.chart"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"\u4ed3\u5e93\u4e2d\u7684 Helm Chart \u540d\u79f0\uff0c\u6216 chart archive (.tgz) \u7684\u5b8c\u6574 HTTPS URL"}),(0,t.jsx)(r.td,{children:"CHART"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.targetNamespace"}),(0,t.jsx)(r.td,{children:"default"}),(0,t.jsx)(r.td,{children:"Helm Chart \u76ee\u6807\u547d\u540d\u7a7a\u95f4"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--namespace"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.version"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Helm Chart \u7248\u672c\uff08\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5\u65f6\uff09"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--version"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.repo"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Helm Chart \u4ed3\u5e93 URL"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--repo"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.helmVersion"}),(0,t.jsx)(r.td,{children:"v3"}),(0,t.jsxs)(r.td,{children:["\u8981\u4f7f\u7528\u7684 Helm \u7248\u672c\uff08",(0,t.jsx)(r.code,{children:"v2"})," \u6216 ",(0,t.jsx)(r.code,{children:"v3"}),"\uff09"]}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.bootstrap"}),(0,t.jsx)(r.td,{children:"False"}),(0,t.jsxs)(r.td,{children:["\u5982\u679c\u9700\u8981\u6b64 Chart \u6765\u5f15\u5bfc\u96c6\u7fa4\uff08Cloud Controller Manager \u7b49\uff09\uff0c\u8bf7\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.set"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"\u8986\u76d6\u7b80\u5355\u7684\u9ed8\u8ba4 Chart \u503c\u3002\u4f18\u5148\u4e8e\u901a\u8fc7 valuesContent \u8bbe\u7f6e\u7684\u9009\u9879\u3002"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"--set"})," / ",(0,t.jsx)(r.code,{children:"--set-string"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.valuesContent"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"\u901a\u8fc7 YAML \u6587\u4ef6\u5185\u5bb9\u8986\u76d6\u590d\u6742\u7684\u9ed8\u8ba4 Chart \u503c"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--values"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"spec.chartContent"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Base64 \u7f16\u7801\u7684 chart archive .tgz\uff0c\u8986\u76d6 spec.chart"}),(0,t.jsx)(r.td,{children:"CHART"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"\u4f7f\u7528-helmchartconfig-\u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6",children:"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(r.p,{children:["\u4e3a\u4e86\u5141\u8bb8\u8986\u76d6\u90e8\u7f72\u4e3a HelmCharts\uff08\u4f8b\u5982 Canal\u3001CoreDNS\u3001Nginx-Ingress \u7b49\uff09\u7684\u6253\u5305\u7ec4\u4ef6\u7684\u503c\uff0cRKE2 \u652f\u6301\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"HelmChartConfig"})," \u8d44\u6e90\u8fdb\u884c\u81ea\u5b9a\u4e49\u90e8\u7f72\u3002",(0,t.jsx)(r.code,{children:"HelmChartConfig"})," \u8d44\u6e90\u5fc5\u987b\u4e0e\u5bf9\u5e94\u7684 HelmChart \u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u5339\u914d\uff0c\u5e76\u4e14\u652f\u6301\u63d0\u4f9b\u989d\u5916\u7684 ",(0,t.jsx)(r.code,{children:"valuesContent"}),"\uff0c\u5b83\u4f5c\u4e3a\u9644\u52a0\u503c\u6587\u4ef6\u4f20\u9012\u7ed9 ",(0,t.jsx)(r.code,{children:"helm"})," \u547d\u4ee4\u3002"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u6ce8\u610f"}),"\uff1aHelmChart ",(0,t.jsx)(r.code,{children:"spec.set"})," \u503c\u4f1a\u8986\u76d6 HelmChart \u548c HelmChartConfig ",(0,t.jsx)(r.code,{children:"spec.valuesContent"})," \u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\u4f8b\u5982\uff0c\u8981\u81ea\u5b9a\u4e49\u6253\u5305\u7684 CoreDNS \u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(r.code,{children:"/var/lib/rancher/rke2/server/manifests/rke2-coredns-config.yaml"})," \u7684\u6587\u4ef6\u5e76\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u586b\u5145\u5b83:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-coredns\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image: coredns/coredns\n    imageTag: v1.7.1\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/rke2-charts/tree/main/charts",children:"RKE2 Chart \u4ed3\u5e93"}),"\u627e\u5230\u6240\u6709\u6253\u5305\u7684 Helm Chart\uff0c\u5305\u62ec\u5176\u6587\u6863\u548c\u9ed8\u8ba4\u503c\u3002"]})]})}function o(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>d});var t=n(7294);const s={},l=t.createContext(s);function d(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);