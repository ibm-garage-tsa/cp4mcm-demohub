(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{xbZq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));var n,o=a("k1TG"),b=a("8o2o"),c=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),r=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),p={_frontmatter:i},s=l.a;function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)(s,Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(r,{mdxType:"PageDescription"},Object(c.b)("p",null,"Install and configure these tools for the course.")),Object(c.b)("h2",null,"Create accounts"),Object(c.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda Account"),": The account is free and easy to create.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.redhat.com/en"}),"RedHat Account"),": Needed for CodeReady Containers."))),Object(c.b)("h3",null,"Windows Users"),Object(c.b)("p",null,"Create ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.virtualbox.org/wiki/Downloads"}),"Linux VM")," with the following CLI’s and tools."),Object(c.b)("h3",null,"Mac/Linux Users"),Object(c.b)("p",null,"Make sure you install ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew")," for CLI and tool installation."),Object(c.b)("h2",null,"Install CLIs and tools"),Object(c.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Don’t install just the ",Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(o.a)({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n"))),Object(c.b)("li",{parentName:"ul"},"Note: If you log in to the web UI using SSO, you’ll need to ",Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI. (You can also use this API key for ",Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/cp4mcm-demohub/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".)"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for building and running docker images."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(o.a)({parentName:"pre"},{}),"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(c.b)("li",{parentName:"ul"},"Enabling ",Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(c.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Minikube"),": Follow the instructions for your Operating System."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Make sure you have Cisco VPN turned off when using minikube"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://code-ready.github.io/crc/#installing-codeready-containers_gsg"}),"OpenShift CodeReady Containers (CRC)")))),Object(c.b)("h3",null,"Minikube Setup"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Verify your cluster has 4GB+ memory, and kubernetes 1.16+",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"minikube config view\n"))),Object(c.b)("li",{parentName:"ul"},"Verify your ",Object(c.b)("inlineCode",{parentName:"li"},"vm-driver")," is set for ",Object(c.b)("inlineCode",{parentName:"li"},"hyperkit"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"minikube config set vm-driver hyperkit\n"))),Object(c.b)("li",{parentName:"ul"},"In case memory is not set, or need to increase set the memory and recreate the VM",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"minikube config set memory 4096\nminikube config set kubernetes-version v1.16.6\nminikube delete\nminikube start\n"))),Object(c.b)("li",{parentName:"ul"},"Kubernetes should be v1.15+",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"kubectl version\n")))),Object(c.b)("h2",null,"Reading Material"),Object(c.b)("p",null,"Watch the video and read the overview on this page ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://pages.github.ibm.com/CASE/cloudnative-bootcamp/cloud-native-overview"}),"Overview")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prerequisites-index-mdx-d9b1a7308b4dabcdb6b2.js.map