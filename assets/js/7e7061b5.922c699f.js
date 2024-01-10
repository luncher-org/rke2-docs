"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[3782],{7581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(5893),a=t(1151);const o={title:"Server Configuration Reference"},i=void 0,s={id:"reference/server_config",title:"Server Configuration Reference",description:"This is a reference to all parameters that can be used to configure the rke2 server. Note that while this is a reference to the command line arguments, the best way to configure RKE2 is using the configuration file.",source:"@site/docs/reference/server_config.md",sourceDirName:"reference",slug:"/reference/server_config",permalink:"/reference/server_config",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/reference/server_config.md",tags:[],version:"current",lastUpdatedAt:1704881943,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Server Configuration Reference"},sidebar:"mySidebar",previous:{title:"Logging",permalink:"/reference/logging"},next:{title:"Windows Agent Configuration Reference",permalink:"/reference/windows_agent_config"}},l={},c=[{value:"RKE2 Server CLI Help",id:"rke2-server-cli-help",level:3},{value:"Critical Configuration Values",id:"critical-configuration-values",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This is a reference to all parameters that can be used to configure the rke2 server. Note that while this is a reference to the command line arguments, the best way to configure RKE2 is using the ",(0,r.jsx)(n.a,{href:"/install/configuration#configuration-file",children:"configuration file"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"rke2-server-cli-help",children:"RKE2 Server CLI Help"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If an option appears in brackets below, for example ",(0,r.jsx)(n.code,{children:"[$RKE2_TOKEN]"}),", it means that the option can be passed in as an environment variable of that name."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:'NAME:\n   rke2 server - Run management server\n\nUSAGE:\n   rke2 server [OPTIONS]\n\nOPTIONS:\n   --config FILE, -c FILE                        (config) Load configuration from FILE (default: "/etc/rancher/rke2/config.yaml") [$RKE2_CONFIG_FILE]\n   --debug                                       (logging) Turn on debug logs [$RKE2_DEBUG]\n   --bind-address value                          (listener) rke2 bind address (default: 0.0.0.0)\n   --advertise-address value                     (listener) IPv4 address that apiserver uses to advertise to members of the cluster (default: node-external-ip/node-ip)\n   --tls-san value                               (listener) Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert\n   --data-dir value, -d value                    (data) Folder to hold state (default: "/var/lib/rancher/rke2")\n   --cluster-cidr value                          (networking) IPv4/IPv6 network CIDRs to use for pod IPs (default: 10.42.0.0/16)\n   --service-cidr value                          (networking) IPv4/IPv6 network CIDRs to use for service IPs (default: 10.43.0.0/16)\n   --service-node-port-range value               (networking) Port range to reserve for services with NodePort visibility (default: "30000-32767")\n   --cluster-dns value                           (networking) IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: 10.43.0.10)\n   --cluster-domain value                        (networking) Cluster Domain (default: "cluster.local")\n   --token value, -t value                       (cluster) Shared secret used to join a server or agent to a cluster [$RKE2_TOKEN]\n   --token-file value                            (cluster) File containing the cluster-secret/token [$RKE2_TOKEN_FILE]\n   --write-kubeconfig value, -o value            (client) Write kubeconfig for admin client to this file [$RKE2_KUBECONFIG_OUTPUT]\n   --write-kubeconfig-mode value                 (client) Write kubeconfig with this mode [$RKE2_KUBECONFIG_MODE]\n   --kube-apiserver-arg value                    (flags) Customized flag for kube-apiserver process\n   --etcd-arg value                              (flags) Customized flag for etcd process\n   --kube-controller-manager-arg value           (flags) Customized flag for kube-controller-manager process\n   --kube-scheduler-arg value                    (flags) Customized flag for kube-scheduler process\n   --etcd-expose-metrics                         (db) Expose etcd metrics to client interface. (Default false)\n   --etcd-disable-snapshots                      (db) Disable automatic etcd snapshots\n   --etcd-snapshot-name value                    (db) Set the base name of etcd snapshots. Default: etcd-snapshot-<unix-timestamp> (default: "etcd-snapshot")\n   --etcd-snapshot-schedule-cron value           (db) Snapshot interval time in cron spec. eg. every 5 hours \'0 */5 * * *\' (default: "0 */12 * * *")\n   --etcd-snapshot-retention value               (db) Number of snapshots to retain Default: 5 (default: 5)\n   --etcd-snapshot-dir value                     (db) Directory to save db snapshots. (Default location: ${data-dir}/db/snapshots)\n   --etcd-s3                                     (db) Enable backup to S3\n   --etcd-s3-endpoint value                      (db) S3 endpoint url (default: "s3.amazonaws.com")\n   --etcd-s3-endpoint-ca value                   (db) S3 custom CA cert to connect to S3 endpoint\n   --etcd-s3-skip-ssl-verify                     (db) Disables S3 SSL certificate validation\n   --etcd-s3-access-key value                    (db) S3 access key [$AWS_ACCESS_KEY_ID]\n   --etcd-s3-secret-key value                    (db) S3 secret key [$AWS_SECRET_ACCESS_KEY]\n   --etcd-s3-bucket value                        (db) S3 bucket name\n   --etcd-s3-region value                        (db) S3 region / bucket location (optional) (default: "us-east-1")\n   --etcd-s3-folder value                        (db) S3 folder\n   --disable value                               (components) Do not deploy packaged components and delete any deployed components (valid items: rke2-coredns, rke2-ingress-nginx, rke2-metrics-server)\n   --disable-scheduler                           (components) Disable Kubernetes default scheduler\n   --disable-cloud-controller                    (components) Disable rke2 default cloud controller manager\n   --disable-kube-proxy                          (components) Disable running kube-proxy\n   --node-name value                             (agent/node) Node name [$RKE2_NODE_NAME]\n   --node-label value                            (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                            (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value     (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value      (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --container-runtime-endpoint value            (agent/runtime) Disable embedded containerd and use alternative CRI implementation\n   --snapshotter value                           (agent/runtime) Override default containerd snapshotter (default: "overlayfs")\n   --private-registry value                      (agent/runtime) Private registry configuration file (default: "/etc/rancher/rke2/registries.yaml")\n   --node-ip value, -i value                     (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                      (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                           (agent/networking) Kubelet resolv.conf file [$RKE2_RESOLV_CONF]\n   --kubelet-arg value                           (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                        (agent/flags) Customized flag for kube-proxy process\n   --protect-kernel-defaults                     (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --agent-token value                           (experimental/cluster) Shared secret used to join agents to the cluster, but not servers [$RKE2_AGENT_TOKEN]\n   --agent-token-file value                      (experimental/cluster) File containing the agent secret [$RKE2_AGENT_TOKEN_FILE]\n   --server value, -s value                      (experimental/cluster) Server to connect to, used to join a cluster [$RKE2_URL]\n   --cluster-reset                               (experimental/cluster) Forget all peers and become sole member of a new cluster [$RKE2_CLUSTER_RESET]\n   --cluster-reset-restore-path value            (db) Path to snapshot file to be restored\n   --system-default-registry value               (image) Private registry to be used for all system images [$RKE2_SYSTEM_DEFAULT_REGISTRY]\n   --selinux                                     (agent/node) Enable SELinux in containerd [$RKE2_SELINUX]\n   --lb-server-port value                        (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer. (default: 6444) [$RKE2_LB_SERVER_PORT]\n   --cni value                                   (networking) CNI Plugins to deploy, one of none, calico, canal, cilium; optionally with multus as the first value to enable the multus meta-plugin (default: canal) [$RKE2_CNI]\n   --kube-apiserver-image value                  (image) Override image to use for kube-apiserver [$RKE2_KUBE_APISERVER_IMAGE]\n   --kube-controller-manager-image value         (image) Override image to use for kube-controller-manager [$RKE2_KUBE_CONTROLLER_MANAGER_IMAGE]\n   --kube-proxy-image value                      (image) Override image to use for kube-proxy [$RKE2_KUBE_PROXY_IMAGE]\n   --kube-scheduler-image value                  (image) Override image to use for kube-scheduler [$RKE2_KUBE_SCHEDULER_IMAGE]\n   --pause-image value                           (image) Override image to use for pause [$RKE2_PAUSE_IMAGE]\n   --runtime-image value                         (image) Override image to use for runtime binaries (containerd, kubectl, crictl, etc) [$RKE2_RUNTIME_IMAGE]\n   --etcd-image value                            (image) Override image to use for etcd [$RKE2_ETCD_IMAGE]\n   --kubelet-path value                          (experimental/agent) Override kubelet binary path [$RKE2_KUBELET_PATH]\n   --cloud-provider-name value                   (cloud provider) Cloud provider name [$RKE2_CLOUD_PROVIDER_NAME]\n   --cloud-provider-config value                 (cloud provider) Cloud provider configuration file path [$RKE2_CLOUD_PROVIDER_CONFIG]\n   --profile value                               (security) Validate system configuration against the selected benchmark (valid items: cis-1.6, cis-1.23 ) [$RKE2_CIS_PROFILE]\n   --pod-security-admission-config-file value    (security) Path to the file that defines the pod security admission configuration\n   --audit-policy-file value                     (security) Path to the file that defines the audit policy configuration [$RKE2_AUDIT_POLICY_FILE]\n   --control-plane-resource-requests value       (components) Control Plane resource requests [$RKE2_CONTROL_PLANE_RESOURCE_REQUESTS]\n   --control-plane-resource-limits value         (components) Control Plane resource limits [$RKE2_CONTROL_PLANE_RESOURCE_LIMITS]\n   --kube-apiserver-extra-mount value            (components) kube-apiserver extra volume mounts [$RKE2_KUBE_APISERVER_EXTRA_MOUNT]\n   --kube-scheduler-extra-mount value            (components) kube-scheduler extra volume mounts [$RKE2_KUBE_SCHEDULER_EXTRA_MOUNT]\n   --kube-controller-manager-extra-mount value   (components) kube-controller-manager extra volume mounts [$RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_MOUNT]\n   --kube-proxy-extra-mount value                (components) kube-proxy extra volume mounts [$RKE2_KUBE_PROXY_EXTRA_MOUNT]\n   --etcd-extra-mount value                      (components) etcd extra volume mounts [$RKE2_ETCD_EXTRA_MOUNT]\n   --cloud-controller-manager-extra-mount value  (components) cloud-controller-manager extra volume mounts [$RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_MOUNT]\n   --kube-apiserver-extra-env value              (components) kube-apiserver extra environment variables [$RKE2_KUBE_APISERVER_EXTRA_ENV]\n   --kube-scheduler-extra-env value              (components) kube-scheduler extra environment variables [$RKE2_KUBE_SCHEDULER_EXTRA_ENV]\n   --kube-controller-manager-extra-env value     (components) kube-controller-manager extra environment variables [$RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_ENV]\n   --kube-proxy-extra-env value                  (components) kube-proxy extra environment variables [$RKE2_KUBE_PROXY_EXTRA_ENV]\n   --etcd-extra-env value                        (components) etcd extra environment variables [$RKE2_ETCD_EXTRA_ENV]\n   --cloud-controller-manager-extra-env value    (components) cloud-controller-manager extra environment variables [$RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_ENV]```\n'})}),"\n",(0,r.jsx)(n.h2,{id:"critical-configuration-values",children:"Critical Configuration Values"}),"\n",(0,r.jsx)(n.p,{children:"The following options must be set to the same value on all servers in the cluster. Failure to do so will cause new servers to fail to join the cluster."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--agent-token"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--cluster-cidr"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--cluster-dns"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--cluster-domain"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--disable-cloud-controller"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--disable-kube-proxy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--egress-selector-mode"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--service-cidr"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);