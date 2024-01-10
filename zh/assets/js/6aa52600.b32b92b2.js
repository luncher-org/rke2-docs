"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[172],{8577:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(5893),a=r(1151);const o={title:"Windows Agent \u914d\u7f6e\u53c2\u8003"},i=void 0,l={id:"reference/windows_agent_config",title:"Windows Agent \u914d\u7f6e\u53c2\u8003",description:"\u672c\u6587\u63d0\u4f9b\u4e86\u53ef\u7528\u4e8e\u914d\u7f6e Windows RKE2 Agent \u7684\u6240\u6709\u53c2\u6570\u7684\u53c2\u8003\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/windows_agent_config.md",sourceDirName:"reference",slug:"/reference/windows_agent_config",permalink:"/zh/reference/windows_agent_config",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/reference/windows_agent_config.md",tags:[],version:"current",lastUpdatedAt:1704881943,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"Windows Agent \u914d\u7f6e\u53c2\u8003"},sidebar:"mySidebar",previous:{title:"Server \u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference/server_config"},next:{title:"v1.24.X",permalink:"/zh/release-notes/v1.24.X"}},s={},u=[{value:"Windows RKE2 Agent CLI \u5e2e\u52a9",id:"windows-rke2-agent-cli-\u5e2e\u52a9",level:3},{value:"\u6b64 Windows Agent \u914d\u7f6e\u53c2\u8003\u4f7f\u7528 v1.22.5+rke2r2 \u7248\u672c\u8fdb\u884c\u66f4\u65b0",id:"\u6b64-windows-agent-\u914d\u7f6e\u53c2\u8003\u4f7f\u7528-v1225rke2r2-\u7248\u672c\u8fdb\u884c\u66f4\u65b0",level:4},{value:"Windows RKE2 Agent Calico \u73af\u5883\u53d8\u91cf",id:"windows-rke2-agent-calico-\u73af\u5883\u53d8\u91cf",level:3}];function c(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u672c\u6587\u63d0\u4f9b\u4e86\u53ef\u7528\u4e8e\u914d\u7f6e Windows RKE2 Agent \u7684\u6240\u6709\u53c2\u6570\u7684\u53c2\u8003\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Windows \u652f\u6301\u76ee\u524d\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff08\u4ece v1.21.3+rke2r1 \u5f00\u59cb\uff09\uff0c\u4f60\u9700\u8981\u9009\u62e9 Calico \u4f5c\u4e3a RKE2 \u96c6\u7fa4\u7684 CNI"})}),"\n",(0,t.jsx)(n.h3,{id:"windows-rke2-agent-cli-\u5e2e\u52a9",children:"Windows RKE2 Agent CLI \u5e2e\u52a9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'NAME:\n   rke2-windows-amd64.exe agent - Run node agent\n\nUSAGE:\n   rke2-windows-amd64.exe agent command [command options] [arguments...]\n\nCOMMANDS:\n   service  Manage RKE2 as a Windows Service\n\nOPTIONS:\n   --config FILE, -c FILE                        (config) Load configuration from FILE (default: "/etc/rancher/rke2/config.yaml") [%RKE2_CONFIG_FILE%]\n   --debug                                       (logging) Turn on debug logs [%RKE2_DEBUG%]\n   --token value, -t value                       (cluster) Token to use for authentication [%RKE2_TOKEN%]\n   --token-file value                            (cluster) Token file to use for authentication [%RKE2_TOKEN_FILE%]\n   --server value, -s value                      (cluster) Server to connect to [%RKE2_URL%]\n   --data-dir value, -d value                    (data) Folder to hold state (default: "/var/lib/rancher/rke2")\n   --node-name value                             (agent/node) Node name [%RKE2_NODE_NAME%]\n   --node-label value                            (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                            (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value     (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value      (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --container-runtime-endpoint value            (agent/runtime) Disable embedded containerd and use alternative CRI implementation\n   --snapshotter value                           (agent/runtime) Override default containerd snapshotter (default: "native")\n   --private-registry value                      (agent/runtime) Private registry configuration file (default: "/etc/rancher/rke2/registries.yaml")\n   --node-ip value, -i value                     (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                      (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                           (agent/networking) Kubelet resolv.conf file [%RKE2_RESOLV_CONF%]\n   --kubelet-arg value                           (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                        (agent/flags) Customized flag for kube-proxy process\n   --protect-kernel-defaults                     (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --selinux                                     (agent/node) Enable SELinux in containerd [%RKE2_SELINUX%]\n   --lb-server-port value                        (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer. (default: 6444) [%RKE2_LB_SERVER_PORT%]\n   --kube-apiserver-image value                  (image) Override image to use for kube-apiserver [%RKE2_KUBE_APISERVER_IMAGE%]\n   --kube-controller-manager-image value         (image) Override image to use for kube-controller-manager [%RKE2_KUBE_CONTROLLER_MANAGER_IMAGE%]\n   --kube-proxy-image value                      (image) Override image to use for kube-proxy [%RKE2_KUBE_PROXY_IMAGE%]\n   --kube-scheduler-image value                  (image) Override image to use for kube-scheduler [%RKE2_KUBE_SCHEDULER_IMAGE%]\n   --pause-image value                           (image) Override image to use for pause [%RKE2_PAUSE_IMAGE%]\n   --runtime-image value                         (image) Override image to use for runtime binaries (containerd, kubectl, crictl, etc) [%RKE2_RUNTIME_IMAGE%]\n   --etcd-image value                            (image) Override image to use for etcd [%RKE2_ETCD_IMAGE%]\n   --kubelet-path value                          (experimental/agent) Override kubelet binary path [%RKE2_KUBELET_PATH%]\n   --cloud-provider-name value                   (cloud provider) Cloud provider name [%RKE2_CLOUD_PROVIDER_NAME%]\n   --cloud-provider-config value                 (cloud provider) Cloud provider configuration file path [%RKE2_CLOUD_PROVIDER_CONFIG%]\n   --profile value                               (security) Validate system configuration against the selected benchmark (valid items: cis-1.6, cis-1.23 ) [%RKE2_CIS_PROFILE%]\n   --audit-policy-file value                     (security) Path to the file that defines the audit policy configuration [%RKE2_AUDIT_POLICY_FILE%]\n   --control-plane-resource-requests value       (components) Control Plane resource requests [%RKE2_CONTROL_PLANE_RESOURCE_REQUESTS%]\n   --control-plane-resource-limits value         (components) Control Plane resource limits [%RKE2_CONTROL_PLANE_RESOURCE_LIMITS%]\n   --kube-apiserver-extra-mount value            (components) kube-apiserver extra volume mounts [%RKE2_KUBE_APISERVER_EXTRA_MOUNT%]\n   --kube-scheduler-extra-mount value            (components) kube-scheduler extra volume mounts [%RKE2_KUBE_SCHEDULER_EXTRA_MOUNT%]\n   --kube-controller-manager-extra-mount value   (components) kube-controller-manager extra volume mounts [%RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_MOUNT%]\n   --kube-proxy-extra-mount value                (components) kube-proxy extra volume mounts [%RKE2_KUBE_PROXY_EXTRA_MOUNT%]\n   --etcd-extra-mount value                      (components) etcd extra volume mounts [%RKE2_ETCD_EXTRA_MOUNT%]\n   --cloud-controller-manager-extra-mount value  (components) cloud-controller-manager extra volume mounts [%RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_MOUNT%]\n   --kube-apiserver-extra-env value              (components) kube-apiserver extra environment variables [%RKE2_KUBE_APISERVER_EXTRA_ENV%]\n   --kube-scheduler-extra-env value              (components) kube-scheduler extra environment variables [%RKE2_KUBE_SCHEDULER_EXTRA_ENV%]\n   --kube-controller-manager-extra-env value     (components) kube-controller-manager extra environment variables [%RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_ENV%]\n   --kube-proxy-extra-env value                  (components) kube-proxy extra environment variables [%RKE2_KUBE_PROXY_EXTRA_ENV%]\n   --etcd-extra-env value                        (components) etcd extra environment variables [%RKE2_ETCD_EXTRA_ENV%]\n   --cloud-controller-manager-extra-env value    (components) cloud-controller-manager extra environment variables [%RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_ENV%]\n   --help, -h                                    show help\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u6b64-windows-agent-\u914d\u7f6e\u53c2\u8003\u4f7f\u7528-v1225rke2r2-\u7248\u672c\u8fdb\u884c\u66f4\u65b0",children:"\u6b64 Windows Agent \u914d\u7f6e\u53c2\u8003\u4f7f\u7528 v1.22.5+rke2r2 \u7248\u672c\u8fdb\u884c\u66f4\u65b0"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"rke2-windows-amd64.exe version v1.22.5+rke2r2 (b61d4b3cb989b0380aae97fceb9a3e45a35ee2b9)\ngo version go1.16.10b7\n"})}),"\n",(0,t.jsx)(n.h3,{id:"windows-rke2-agent-calico-\u73af\u5883\u53d8\u91cf",children:"Windows RKE2 Agent Calico \u73af\u5883\u53d8\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u81ea\u5b9a\u4e49 Windows \u4e0a\u7684 Calico \u5b89\u88c5\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6307\u5b9a\u8fd9\u4e9b\u53d8\u91cf\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$env:<YOUR_VARIABLE>=<VALUE>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5f53\u524d\u53d8\u91cf\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"VXLAN_ADAPTER \t\tSpecifies the interface to be used for the vxlan VTEP. Required if the interface is in team mode\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(7294);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);