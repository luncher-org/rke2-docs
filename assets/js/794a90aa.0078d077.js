"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"Air-Gap Install"},l=void 0,o={unversionedId:"install/airgap",id:"install/airgap",title:"Air-Gap Install",description:"Important: If your node has NetworkManager installed and enabled, ensure that it is configured to ignore CNI-managed interfaces.",source:"@site/docs/install/airgap.md",sourceDirName:"install",slug:"/install/airgap",permalink:"/install/airgap",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/airgap.md",tags:[],version:"current",lastUpdatedAt:1677087697,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"Air-Gap Install"},sidebar:"mySidebar",previous:{title:"Containerd Registry Configuration",permalink:"/install/containerd_registry_configuration"},next:{title:"Windows Air-Gap Install",permalink:"/install/windows_airgap"}},s={},p=[{value:"Tarball Method",id:"tarball-method",level:2},{value:"Private Registry Method",id:"private-registry-method",level:2},{value:"Install RKE2",id:"install-rke2",level:2},{value:"RKE2 Binary Install",id:"rke2-binary-install",level:3},{value:"RKE2 Install.sh Script Install",id:"rke2-installsh-script-install",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:")," If your node has NetworkManager installed and enabled, ",(0,n.kt)("a",{parentName:"p",href:"/known_issues#networkmanager"},"ensure that it is configured to ignore CNI-managed interfaces.")),(0,n.kt)("p",null,"RKE2 can be installed in an air-gapped environment with two different methods. You can either deploy via the ",(0,n.kt)("inlineCode",{parentName:"p"},"rke2-airgap-images")," tarball release artifact, or by using a private registry."),(0,n.kt)("p",null,"All files mentioned in the steps can be obtained from the assets of the desired released rke2 version ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases"},"here"),"."),(0,n.kt)("p",null,"If running on an air-gapped node with SELinux enabled, you must manually install the necessary SELinux policy RPM before performing these steps. See our ",(0,n.kt)("a",{parentName:"p",href:"/install/methods#rpm"},"RPM Documentation")," to determine what you need."),(0,n.kt)("p",null,"If running on an air-gapped node running SELinux, CentOS, or RHEL 8, with SELinux enabled, the following are required dependencies when doing an ",(0,n.kt)("a",{parentName:"p",href:"/install/methods#rpm"},"RPM install"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Installing dependencies:\ncontainer-selinux\niptables\nlibnetfilter_conntrack\nlibnfnetlink\nlibnftnl\npolicycoreutils-python-utils\nrke2-common\nrke2-selinux\n")),(0,n.kt)("p",null,"All the steps listed on this document must be run as the root user or through ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo"),"."),(0,n.kt)("h2",{id:"tarball-method"},"Tarball Method"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the airgap images tarballs from the RKE release artifacts list for the version and platform of RKE2 you are using.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images.linux-amd64.tar.zst"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images.linux-amd64.tar.gz")," for releases prior to v1.20. Zstandard offers better compression ratios and faster decompression speeds compared to gzip."),(0,n.kt)("li",{parentName:"ul"},"If using the default Canal CNI (",(0,n.kt)("inlineCode",{parentName:"li"},"--cni=canal"),"), you can use either the ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-image")," legacy archive as described above, or ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-core")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-canal")," archives."),(0,n.kt)("li",{parentName:"ul"},"If using the alternative Cilium CNI (",(0,n.kt)("inlineCode",{parentName:"li"},"--cni=cilium"),"), you must download the ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-core")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-cilium")," archives instead."),(0,n.kt)("li",{parentName:"ul"},"If using your own CNI (",(0,n.kt)("inlineCode",{parentName:"li"},"--cni=none"),"), you can download only the ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-core")," archive."),(0,n.kt)("li",{parentName:"ul"},"If enabling the vSphere CPI/CSI charts (",(0,n.kt)("inlineCode",{parentName:"li"},"--cloud-provider-name=rancher-vsphere"),"), you must also download the ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-vsphere")," archive."))),(0,n.kt)("li",{parentName:"ol"},"Ensure that the ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/agent/images/")," directory exists on the node."),(0,n.kt)("li",{parentName:"ol"},"Copy the compressed archive to ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/agent/images/")," on the node, ensuring that the file extension is retained."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#install-rke2"},"Install RKE2"))),(0,n.kt)("h2",{id:"private-registry-method"},"Private Registry Method"),(0,n.kt)("p",null,"As of RKE2 v1.20, private registry support honors all settings from the ",(0,n.kt)("a",{parentName:"p",href:"/install/containerd_registry_configuration"},"containerd registry configuration"),". This includes endpoint override and transport protocol (HTTP/HTTPS), authentication, certificate verification, etc."),(0,n.kt)("p",null,"Prior to RKE2 v1.20, private registries must use TLS, with a cert trusted by the host CA bundle. If the registry is using a self-signed cert, you can add the cert to the host CA bundle with ",(0,n.kt)("inlineCode",{parentName:"p"},"update-ca-certificates"),". The registry must also allow anonymous (unauthenticated) access."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add all the required system images to your private registry. A list of images can be obtained from the ",(0,n.kt)("inlineCode",{parentName:"li"},".txt")," file corresponding to each tarball referenced above, or you may ",(0,n.kt)("inlineCode",{parentName:"li"},"docker load")," the airgap image tarballs, then tag and push the loaded images."),(0,n.kt)("li",{parentName:"ol"},"If using a private or self-signed certificate on the registry, add the registry's CA cert to the containerd registry configuration, or operating system's trusted certs for releases prior to v1.20."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#install-rke2"},"Install RKE2")," using the ",(0,n.kt)("inlineCode",{parentName:"li"},"system-default-registry")," parameter, or use the ",(0,n.kt)("a",{parentName:"li",href:"/install/containerd_registry_configuration"},"containerd registry configuration")," to use your registry as a mirror for docker.io.")),(0,n.kt)("h2",{id:"install-rke2"},"Install RKE2"),(0,n.kt)("p",null,"The following options to install RKE2 should only be performed after completing one of either the ",(0,n.kt)("a",{parentName:"p",href:"#tarball-method"},"Tarball Method")," or ",(0,n.kt)("a",{parentName:"p",href:"#private-registry-method"},"Private Registry Method"),"."),(0,n.kt)("p",null,"RKE2 can be installed either by running the ",(0,n.kt)("a",{parentName:"p",href:"#rke2-binary-install"},"binary")," directly or by using the ",(0,n.kt)("a",{parentName:"p",href:"#rke2-installsh-script-install"},"install.sh script"),"."),(0,n.kt)("h3",{id:"rke2-binary-install"},"RKE2 Binary Install"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Obtain the rke2 binary file ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2.linux-amd64"),"."),(0,n.kt)("li",{parentName:"ol"},"Ensure the binary is named ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2")," and place it in ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin"),". Ensure it is executable."),(0,n.kt)("li",{parentName:"ol"},"Run the binary with the desired parameters. For example, if using the Private Registry Method, your config file would have the following:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'system-default-registry: "registry.example.com:5000"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," The ",(0,n.kt)("inlineCode",{parentName:"p"},"system-default-registry")," parameter must specify only valid RFC 3986 URI authorities, i.e. a host and optional port."),(0,n.kt)("h3",{id:"rke2-installsh-script-install"},"RKE2 Install.sh Script Install"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"install.sh")," may be used in an offline mode by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_RKE2_ARTIFACT_PATH")," variable to a path containing pre-downloaded artifacts. This will run though a normal install, including creating systemd units."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the install script, rke2, rke2-images, and sha256sum archives from the release into a directory, as in the example below:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /root/rke2-artifacts && cd /root/rke2-artifacts/\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2-images.linux-amd64.tar.zst\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2.linux-amd64.tar.gz\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/sha256sum-amd64.txt\ncurl -sfL https://get.rke2.io --output install.sh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Next, run install.sh using the directory, as in the example below:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_RKE2_ARTIFACT_PATH=/root/rke2-artifacts sh install.sh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Enable and run the service as outlined ",(0,n.kt)("a",{parentName:"li",href:"/install/quickstart#2-enable-the-rke2-server-service"},"here."))))}u.isMDXComponent=!0}}]);