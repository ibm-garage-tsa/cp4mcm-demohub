(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2vla":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},p=r.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Preparing the Virtual Server Instance"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In order to create an Openstack instance in IBM Cloud following this procedure you need to setup a VPC and create a Gen2 virtual server instance (VSI) with Ubuntu 18.04. For the testing purpose I have used ",Object(a.b)("inlineCode",{parentName:"p"},"bx2-8x32")," profile. Instance needs to be assigned with the floating IP to provide connectivity to the Internet.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Connect to the VSI. Update the Ubuntu"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"apt-get update\napt-get upgarde -y\n")),Object(a.b)("p",{parentName:"li"},"In case of warning over the ",Object(a.b)("inlineCode",{parentName:"p"},"sshd_config")," file you can either keep the local version or use the maintainer package."))),Object(a.b)("h2",null,"Installing the Openstack"),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install the Microstack"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"snap install microstack --classic --beta\n")),Object(a.b)("p",{parentName:"li"},"The installation should take less then 5 minutes (depends on the network speed) and if all works as expected will finish with the following message:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"2020-06-03T08:03:07Z INFO Waiting for restart...\nmicrostack (beta) stein from Canonical✓ installed\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Initialize the Microstack\nMicroStack needs to be initialised, so that networks and databases get configured. To do this, run:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"microstack.init --auto\n")),Object(a.b)("p",{parentName:"li"},"Initialization process may take 10-15 minutes.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create alias for Openstack CLI"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'alias os="microstack.openstack"\n')))),Object(a.b)("h2",null,"Exposing the Openstack endpoints on the external IP"),Object(a.b)("p",null,"By default Microstack creates intenal network 10.20.20.1/24 and this network is used for exposing API endpoints. You need to expose public endpoints in VSI external IP, so the CloudForms can connect to the Openstack services."),Object(a.b)("ol",{start:6},Object(a.b)("li",{parentName:"ol"},"Edit the default security group in your VPC, adding incoming rule for port 5000"),Object(a.b)("li",{parentName:"ol"},"Change the default admin password. (Default is ",Object(a.b)("inlineCode",{parentName:"li"},"keystone"),").")),Object(a.b)("p",null,"openstack endpoint create —region microstack volumev2 public ",Object(a.b)("a",o({parentName:"p"},{href:"http://10.20.20.1:8776/v2/%25%5C(project_id%5C)s"}),"http://10.20.20.1:8776/v2/%\\(project_id\\)s"),"\nopenstack endpoint create —region microstack volumev2 internal ",Object(a.b)("a",o({parentName:"p"},{href:"http://10.20.20.1:8776/v2/%25%5C(project_id%5C)s"}),"http://10.20.20.1:8776/v2/%\\(project_id\\)s"),"\nopenstack endpoint create —region microstack volumev2 admin ",Object(a.b)("a",o({parentName:"p"},{href:"http://10.20.20.1:8776/v2/%25%5C(project_id%5C)s"}),"http://10.20.20.1:8776/v2/%\\(project_id\\)s"),"\nopenstack endpoint create —region microstack volumev3 public ",Object(a.b)("a",o({parentName:"p"},{href:"http://10.20.20.1:8776/v3/%25%5C(project_id%5C)s"}),"http://10.20.20.1:8776/v3/%\\(project_id\\)s"),"\nopenstack endpoint create —region microstack volumev3 internal ",Object(a.b)("a",o({parentName:"p"},{href:"http://10.20.20.1:8776/v3/%25%5C(project_id%5C)s"}),"http://10.20.20.1:8776/v3/%\\(project_id\\)s"),"\nopenstack endpoint create —region microstack volumev3 admin ",Object(a.b)("a",o({parentName:"p"},{href:"http://10.20.20.1:8776/v3/%25%5C(project_id%5C)s"}),"http://10.20.20.1:8776/v3/%\\(project_id\\)s")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-environment-modules-microstack-mdx-82d24de47966b014ae00.js.map