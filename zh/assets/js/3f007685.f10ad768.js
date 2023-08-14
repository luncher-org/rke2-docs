"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u5b50\u547d\u4ee4"},s=void 0,c={unversionedId:"reference/subcommands",id:"reference/subcommands",title:"\u5b50\u547d\u4ee4",description:"RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u542b\u591a\u4e2a\u5b50\u547d\u4ee4\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5b83\u4eec\u7684\u9009\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/subcommands.md",sourceDirName:"reference",slug:"/reference/subcommands",permalink:"/zh/reference/subcommands",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/reference/subcommands.md",tags:[],version:"current",lastUpdatedAt:1692036990,formattedLastUpdatedAt:"2023\u5e748\u670814\u65e5",frontMatter:{title:"\u5b50\u547d\u4ee4"},sidebar:"mySidebar",previous:{title:"Server \u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference/server_config"},next:{title:"Windows Agent \u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference/windows_agent_config"}},l={},i=[{value:"etcd-snapshot",id:"etcd-snapshot",level:2},{value:"certificate",id:"certificate",level:2},{value:"secrets-encrypt",id:"secrets-encrypt",level:2}],d={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u542b\u591a\u4e2a\u5b50\u547d\u4ee4\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5b83\u4eec\u7684\u9009\u9879\u3002"),(0,a.kt)("h2",{id:"etcd-snapshot"},"etcd-snapshot"),(0,a.kt)("p",null,"\u6b64\u5b50\u547d\u4ee4\u7528\u4e8e\u624b\u52a8\u521b\u5efa\u5feb\u7167\u3001\u5217\u51fa\u5f53\u524d\u53ef\u7528\u7684\u6240\u6709\u5feb\u7167\u3001\u4ee5\u53ca\u624b\u52a8\u5220\u9664\u4efb\u4f55\u4e0d\u9700\u8981\u7684\u6216\u8f83\u65e7\u7684\u5feb\u7167\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'NAME:\n   rke2 etcd-snapshot - Trigger an immediate etcd snapshot\n\nUSAGE:\n   rke2 etcd-snapshot command [command options] [arguments...]\n\nCOMMANDS:\n   delete       Delete given snapshot(s)\n   ls, list, l  List snapshots\n   prune        Remove snapshots that exceed the configured retention count\n   save         Trigger an immediate etcd snapshot\n\nOPTIONS:\n   --debug                                              (logging) Turn on debug logs [$RKE2_DEBUG]\n   --config FILE, -c FILE                               (config) Load configuration from FILE (default: "/etc/rancher/rke2/config.yaml") [$RKE2_CONFIG_FILE]\n   --log value, -l value                                (logging) Log to file\n   --alsologtostderr                                    (logging) Log to standard error as well as file (if set)\n   --node-name value                                    (agent/node) Node name [$RKE2_NODE_NAME]\n   --data-dir value, -d value                           (data) Folder to hold state (default: "/var/lib/rancher/rke2")\n   --dir value, --etcd-snapshot-dir value               (db) Directory to save etcd on-demand snapshot. (default: ${data-dir}/db/snapshots)\n   --name value                                         (db) Set the base name of the etcd on-demand snapshot (appended with UNIX timestamp). (default: "on-demand")\n   --snapshot-compress, --etcd-snapshot-compress        (db) Compress etcd snapshot\n   --s3, --etcd-s3                                      (db) Enable backup to S3\n   --s3-endpoint value, --etcd-s3-endpoint value        (db) S3 endpoint url (default: "s3.amazonaws.com")\n   --s3-endpoint-ca value, --etcd-s3-endpoint-ca value  (db) S3 custom CA cert to connect to S3 endpoint\n   --s3-skip-ssl-verify, --etcd-s3-skip-ssl-verify      (db) Disables S3 SSL certificate validation\n   --s3-access-key value, --etcd-s3-access-key value    (db) S3 access key [$AWS_ACCESS_KEY_ID]\n   --s3-secret-key value, --etcd-s3-secret-key value    (db) S3 secret key [$AWS_SECRET_ACCESS_KEY]\n   --s3-bucket value, --etcd-s3-bucket value            (db) S3 bucket name\n   --s3-region value, --etcd-s3-region value            (db) S3 region / bucket location (optional) (default: "us-east-1")\n   --s3-folder value, --etcd-s3-folder value            (db) S3 folder\n   --s3-insecure, --etcd-s3-insecure                    (db) Disables S3 over HTTPS\n   --s3-timeout value, --etcd-s3-timeout value          (db) S3 timeout (default: 30s)\n   --help, -h                                           show help\n')),(0,a.kt)("h2",{id:"certificate"},"certificate"),(0,a.kt)("p",null,"\u8be5\u5b50\u547d\u4ee4\u53ef\u7528\u4e8e\u8f6e\u6362\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u670d\u52a1\u7684\u8bc1\u4e66\uff0c\u4f8b\u5982 kubelet\u3001etcd \u548c api-server\u3002\u8fd9\u4e9b\u8bc1\u4e66\u5728\u6bcf\u5e74\u5230\u671f\u4e4b\u524d\u4f1a\u81ea\u52a8\u8f6e\u6362\uff0c\u4f60\u4e5f\u53ef\u4ee5\u63d0\u524d\u8f6e\u6362\u5b83\u4eec\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'NAME:\n   rke2 certificate - Certificates management\n\nUSAGE:\n   rke2 certificate command [command options] [arguments...]\n\nCOMMANDS:\n   rotate  Certificate Rotation\n\nOPTIONS:\n   --debug                     (logging) Turn on debug logs [$RKE2_DEBUG]\n   --config FILE, -c FILE      (config) Load configuration from FILE (default: "/etc/rancher/rke2/config.yaml") [$RKE2_CONFIG_FILE]\n   --log value, -l value       (logging) Log to file\n   --alsologtostderr           (logging) Log to standard error as well as file (if set)\n   --data-dir value, -d value  (data) Folder to hold state (default: "/var/lib/rancher/rke2")\n   --service value, -s value   List of services to rotate certificates for. Options include (admin, api-server, controller-manager, scheduler, rke2-controller, rke2-server, cloud-controller, etcd, auth-proxy, kubelet, kube-proxy)\n   --help, -h                  show help\n')),(0,a.kt)("h2",{id:"secrets-encrypt"},"secrets-encrypt"),(0,a.kt)("p",null,"RKE2 \u9ed8\u8ba4\u542f\u7528 Secret \u52a0\u5bc6\u3002\u6b64\u5b50\u547d\u4ee4\u5141\u8bb8\u4f60\u7981\u7528\u8be5\u529f\u80fd\uff0c\u4ee5\u53ca\u8f6e\u6362\u4f7f\u7528\u7684\u52a0\u5bc6\u5bc6\u94a5\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/security/secrets_encryption"},"Secret \u52a0\u5bc6"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"NAME:\n   rke2 secrets-encrypt - Control secrets encryption and keys rotation\n\nUSAGE:\n   rke2 secrets-encrypt command [command options] [arguments...]\n\nCOMMANDS:\n   status     Print current status of secrets encryption\n   enable     Enable secrets encryption\n   disable    Disable secrets encryption\n   prepare    Prepare for encryption keys rotation\n   rotate     Rotate secrets encryption keys\n   reencrypt  Reencrypt all data with new encryption key\n\nOPTIONS:\n   --help, -h  show help\n")))}u.isMDXComponent=!0}}]);