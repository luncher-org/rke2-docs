"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[9804],{2919:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=r(5893),a=r(1151);const t={title:"Manual Upgrades"},i=void 0,l={id:"upgrade/manual_upgrade",title:"Manual Upgrades",description:"You can upgrade rke2 by using the installation script, by manually installing the binary of the desired version, or by using rpm upgrades in case of rpm installation.",source:"@site/docs/upgrade/manual_upgrade.md",sourceDirName:"upgrade",slug:"/upgrade/manual_upgrade",permalink:"/upgrade/manual_upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/upgrade/manual_upgrade.md",tags:[],version:"current",lastUpdatedAt:1704881943,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Manual Upgrades"},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/upgrade/"},next:{title:"Automated Upgrades",permalink:"/upgrade/automated_upgrade"}},d={},o=[{value:"Release Channels",id:"release-channels",level:3},{value:"Upgrade rke2 Using the Installation Script",id:"upgrade-rke2-using-the-installation-script",level:3},{value:"Manually Upgrade rke2 Using the Binary",id:"manually-upgrade-rke2-using-the-binary",level:3},{value:"Upgrade rke2 Using the RPM upgrades",id:"upgrade-rke2-using-the-rpm-upgrades",level:3},{value:"Restarting rke2",id:"restarting-rke2",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"You can upgrade rke2 by using the installation script, by manually installing the binary of the desired version, or by using rpm upgrades in case of rpm installation."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Upgrade the server nodes first, one at a time. Once all servers have been upgraded, you may then upgrade agent nodes."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"release-channels",children:"Release Channels"}),"\n",(0,s.jsxs)(n.p,{children:["Upgrades performed via the installation script or using our ",(0,s.jsx)(n.a,{href:"/upgrade/automated_upgrade",children:"automated upgrades"})," feature can be tied to different release channels. The following channels are available:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Channel"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stable"}),(0,s.jsx)(n.td,{children:"(Default) Stable is recommended for production environments. These releases have been through a period of community hardening, and are compatible with the most recent release of Rancher."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"latest"}),(0,s.jsx)(n.td,{children:"Latest is recommended for trying out the latest features.  These releases have not yet been through a period of community hardening, and may not be compatible with Rancher."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v1.26 (example)"}),(0,s.jsx)(n.td,{children:"There is a release channel tied to each Kubernetes minor version, including versions that are end-of-life. These channels will select the latest patch available, not necessarily a stable release."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For an exhaustive and up-to-date list of channels, you can visit the ",(0,s.jsx)(n.a,{href:"https://update.rke2.io/v1-release/channels",children:"rke2 channel service API"}),". For more technical details on how channels work, you can see the ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/channelserver",children:"channelserver project"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["When attempting to upgrade to a new version of RKE2, the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/release/version-skew-policy/",children:"Kubernetes version skew policy"})," applies. Ensure that your plan does not skip intermediate minor versions when upgrading. Nothing in the upgrade process will protect against unsupported changes to the Kubernetes version."]})}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-rke2-using-the-installation-script",children:"Upgrade rke2 Using the Installation Script"}),"\n",(0,s.jsx)(n.p,{children:"To upgrade rke2 from an older version you can re-run the installation script using the same flags, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.rke2.io | sh -\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will upgrade to the most recent version in the stable channel by default."}),"\n",(0,s.jsxs)(n.p,{children:["If upgrading agent nodes, you should specify the ",(0,s.jsx)(n.code,{children:"INSTALL_RKE2_TYPE"})," environment variable:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.rke2.io | INSTALL_RKE2_TYPE=agent sh -\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to upgrade to the most recent version in a specific channel (such as latest) you can specify the channel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=latest sh -\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to upgrade to a specific version you can run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.rke2.io | INSTALL_RKE2_VERSION=vX.Y.Z+rke2rN sh -\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remember to restart the rke2 process after installing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# Server nodes:\nsystemctl restart rke2-server\n\n# Agent nodes:\nsystemctl restart rke2-agent\n"})}),"\n",(0,s.jsx)(n.h3,{id:"manually-upgrade-rke2-using-the-binary",children:"Manually Upgrade rke2 Using the Binary"}),"\n",(0,s.jsx)(n.p,{children:"Or to manually upgrade rke2:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download the desired version of the rke2 binary from ",(0,s.jsx)(n.a,{href:"https://github.com/rancher/rke2/releases",children:"releases"})]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the downloaded binary to ",(0,s.jsx)(n.code,{children:"/usr/local/bin/rke2"})," for tarball installed rke2, and ",(0,s.jsx)(n.code,{children:"/usr/bin"})," for rpm installed rke2"]}),"\n",(0,s.jsx)(n.li,{children:"Stop the old rke2 binary"}),"\n",(0,s.jsx)(n.li,{children:"Launch the new rke2 binary"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"upgrade-rke2-using-the-rpm-upgrades",children:"Upgrade rke2 Using the RPM upgrades"}),"\n",(0,s.jsx)(n.p,{children:"In case of RPM installation, its expected to upgrade rke2 from an older version using rpm upgrades, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# zypper upgrade\nzypper update rke2-server\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yum update rke2-server\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will upgrade ",(0,s.jsx)(n.code,{children:"rke2-server"})," rpm package to the latest package in your channel which is configured initially in the yum or zypper repos by the install script at the initial installation."]}),"\n",(0,s.jsxs)(n.p,{children:["If upgrading agent nodes, you should specify name of the ",(0,s.jsx)(n.code,{children:"rke2-agent"})," package"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# zypper upgrade\nzypper update rke2-agent\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# yum upgrade\nyum update rke2-agent\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remember to restart the rke2 process after installing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# Server nodes:\nsystemctl restart rke2-server\n\n# Agent nodes:\nsystemctl restart rke2-agent\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": in case you enabled ",(0,s.jsx)(n.code,{children:"rke2-selinux"})," you should also be able to upgrade rke2-selinux to the latest version using:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yum update rke2-selinux\n"})}),"\n",(0,s.jsx)(n.h3,{id:"restarting-rke2",children:"Restarting rke2"}),"\n",(0,s.jsx)(n.p,{children:"Restarting rke2 is supported by the installation script for systemd."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"systemd"})}),"\n",(0,s.jsx)(n.p,{children:"To restart servers manually:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo systemctl restart rke2-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"To restart agents manually:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo systemctl restart rke2-agent\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var s=r(7294);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);