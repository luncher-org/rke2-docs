"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4186],{9840:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=i(5893),t=i(1151);const o={title:"Default Pod Security Policies"},r=void 0,l={id:"security/pod_security_policies",title:"Default Pod Security Policies",description:"This document describes how RKE2 configures PodSecurityPolicies and NetworkPolicies in order to be secure-by-default while also providing operators with maximum configuration flexibility.",source:"@site/docs/security/pod_security_policies.md",sourceDirName:"security",slug:"/security/pod_security_policies",permalink:"/security/pod_security_policies",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/pod_security_policies.md",tags:[],version:"current",lastUpdatedAt:1704881943,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Default Pod Security Policies"},sidebar:"mySidebar",previous:{title:"FIPS 140-2 Enablement",permalink:"/security/fips_support"},next:{title:"Default Pod Security Standards",permalink:"/security/pod_security_standards"}},c={},a=[{value:"Pod Security Policies",id:"pod-security-policies",level:4},{value:"Network Policies",id:"network-policies",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This document describes how RKE2 configures ",(0,s.jsx)(n.code,{children:"PodSecurityPolicies"})," and ",(0,s.jsx)(n.code,{children:"NetworkPolicies"})," in order to be secure-by-default while also providing operators with maximum configuration flexibility."]}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["This document applies to RKE2 v1.24 and older, please refer to the ",(0,s.jsx)(n.a,{href:"/security/pod_security_standards",children:"Pod Security Standards Documentation"})," for the default policy information for RKE2 v1.25 and higher."]})}),"\n",(0,s.jsx)(n.h4,{id:"pod-security-policies",children:"Pod Security Policies"}),"\n",(0,s.jsxs)(n.p,{children:["RKE2 can be ran with or without the ",(0,s.jsx)(n.code,{children:"profile: cis-1.6"})," configuration parameter. This will cause it to apply different ",(0,s.jsx)(n.code,{children:"PodSecurityPolicies"})," (PSPs) at start-up."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If running with the ",(0,s.jsx)(n.code,{children:"cis-1.6"})," profile, RKE2 will apply a restrictive policy called ",(0,s.jsx)(n.code,{children:"global-restricted-psp"})," to all namespaces except ",(0,s.jsx)(n.code,{children:"kube-system"}),". The ",(0,s.jsx)(n.code,{children:"kube-system"})," namespace needs a less restrictive policy named ",(0,s.jsx)(n.code,{children:"system-unrestricted-psp"})," in order to launch critical components."]}),"\n",(0,s.jsxs)(n.li,{children:["If running without the ",(0,s.jsx)(n.code,{children:"cis-1.6"})," profile, RKE2 will apply a completely unrestricted policy called ",(0,s.jsx)(n.code,{children:"global-unrestricted-psp"}),", which is the equivalent of running without the PSP admission controller enabled."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"RKE2 will put these policies in place upon initial startup, but will not modify them after that, unless explicitly triggered by the cluster operator as described below. This is to allow the operator to fully control the PSPs without RKE2's defaults adding interference."}),"\n",(0,s.jsxs)(n.p,{children:["The creation and application of the PSPs are controlled by the presence or absence of certain annotations on the ",(0,s.jsx)(n.code,{children:"kube-system"})," namespace. These map directly to the PSPs which can be created and are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"psp.rke2.io/global-restricted"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"psp.rke2.io/system-unrestricted"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"psp.rke2.io/global-unrestricted"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following logic is performed at startup for the policies and their annotations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the annotation exists, RKE2 continues without further action."}),"\n",(0,s.jsx)(n.li,{children:"If the annotation doesn't exist, RKE2 checks to see if the associated policy exists and if so, deletes and recreates it, along with adding the annotation to the namespace."}),"\n",(0,s.jsxs)(n.li,{children:["In the case of the ",(0,s.jsx)(n.code,{children:"global-unrestricted-psp"}),", the policy is not recreated. This is to account for moving between CIS and non-CIS modes without making the cluster less secure."]}),"\n",(0,s.jsx)(n.li,{children:"At the time of creating a policy, cluster roles and cluster role bindings are also created to ensure the appropriate policies are put into use by default."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['So, after the initial start-up, operators can modify or delete RKE2\'s policies and RKE2 will respect those changes. Additionally, to "reset" a policy, an operator just needs to delete the associated annotation from the ',(0,s.jsx)(n.code,{children:"kube-system"})," namespace and restart RKE2."]}),"\n",(0,s.jsxs)(n.p,{children:["The policies are outlined below, starting with the most restrictive ",(0,s.jsx)(n.code,{children:"global-restricted"})," PSP."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: global-restricted-psp\nspec:\n  privileged: false                # CIS - 5.2.1\n  allowPrivilegeEscalation: false  # CIS - 5.2.5\n  requiredDropCapabilities:        # CIS - 5.2.7/8/9\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'persistentVolumeClaim'\n  hostNetwork: false               # CIS - 5.2.4\n  hostIPC: false                   # CIS - 5.2.3\n  hostPID: false                   # CIS - 5.2.2\n  runAsUser:\n    rule: 'MustRunAsNonRoot'       # CIS - 5.2.6\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n"})}),"\n",(0,s.jsx)(n.p,{children:"If RKE2 is started in non CIS mode, annotations are checked like above however the resulting application of pod security policies is a permissive one. See below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: global-unrestricted-psp\nspec:\n  privileged: true\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  volumes:\n  - '*'\n  hostNetwork: true\n  hostPorts:\n  - min: 0\n    max: 65535\n  hostIPC: true\n  hostPID: true\n  runAsUser:\n    rule: 'RunAsAny'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'RunAsAny'\n  fsGroup:\n    rule: 'RunAsAny'\n"})}),"\n",(0,s.jsx)(n.p,{children:'In both cases, the "system unrestricted policy" is applied. See below.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: system-unrestricted-psp\nspec:\n  privileged: true\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  volumes:\n  - '*'\n  hostNetwork: true\n  hostPorts:\n  - min: 0\n    max: 65535\n  hostIPC: true\n  hostPID: true\n  runAsUser:\n    rule: 'RunAsAny'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'RunAsAny'\n  fsGroup:\n    rule: 'RunAsAny'\n"})}),"\n",(0,s.jsx)(n.p,{children:"To view the pod security policies currently deployed on your system, run the below command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get psp -A\n"})}),"\n",(0,s.jsx)(n.h4,{id:"network-policies",children:"Network Policies"}),"\n",(0,s.jsxs)(n.p,{children:["When RKE2 is run with the ",(0,s.jsx)(n.code,{children:"profile: cis-1.6"})," parameter, it will apply 2 network policies to the ",(0,s.jsx)(n.code,{children:"kube-system"}),", ",(0,s.jsx)(n.code,{children:"kube-public"}),", and ",(0,s.jsx)(n.code,{children:"default"})," namespaces and applies associated annotations. The same logic applies to these policies and annotations as the PSPs. On start, the annotations for each namespace are checked for existence and if they exist, RKE2 takes no action. If the annotation doesn't exist, RKE2 checks to see if the policy exists and if it does, recreates it."]}),"\n",(0,s.jsx)(n.p,{children:"The first policy applied is to restrict network traffic to only the namespace itself. See below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:policyTypes: {}\n  name: default-network-policy\n  namespace: default\nspec:\n  ingress:\n  - from:\n    - podSelector: {}\n  podSelector: {}\n  policyTypes:\n  - Ingress\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The second policy applied is to the ",(0,s.jsx)(n.code,{children:"kube-system"})," namespace and allows for DNS traffic. See below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:podSelector:\n          f:matchLabels:\n        f:policyTypes: {}\n  name: default-network-dns-policy\n  namespace: kube-system\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n  policyTypes:\n  - Ingress\n"})}),"\n",(0,s.jsxs)(n.p,{children:["RKE2 applies the ",(0,s.jsx)(n.code,{children:"default-network-policy"})," policy and ",(0,s.jsx)(n.code,{children:"np.rke2.io"})," annotation to all built-in namespaces. The ",(0,s.jsx)(n.code,{children:"kube-system"})," namespace additionally gets the ",(0,s.jsx)(n.code,{children:"default-network-dns-policy"})," policy and ",(0,s.jsx)(n.code,{children:"np.rke2.io/dns"})," annotation applied to it."]}),"\n",(0,s.jsx)(n.p,{children:"To view the network policies currently deployed on your system, run the below command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get networkpolicies -A\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);