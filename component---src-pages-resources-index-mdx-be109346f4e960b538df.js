(window.webpackJsonp=window.webpackJsonp||[]).push([[52,35,39,40,44,63,65,66,68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),c=a.n(b),l=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,c=r.subDirectory,o=b+"/edit/"+r.branch+c+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),b=r===n,o=new RegExp(n+"/?(#.*)?$"),i=a.replace(o,r);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+i},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:f.list},r))))))},t}(r.a.Component),k=a("MjG9"),P=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,u=t.relativePagePath,d=t.titleType,m=s.tabs,x=s.title,h=s.theme,f=s.description,T=s.keywords,v=Object(P.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,N=C?n.pathname.replace(C,""):n.pathname,M=m?N.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",y=h||v;return Object(p.b)(i.a,{tabs:m,homepage:!1,theme:y,pageTitle:x,pageDescription:f,pageKeywords:T,titleType:d},Object(p.b)(g,{title:r?Object(p.b)(r,null):x,label:"label",tabs:m,theme:y}),m&&Object(p.b)(w,{slug:N,tabs:m,currentTab:M}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:N,tabs:m,currentTab:M}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FHeL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),o={_frontmatter:l},i=c.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(i,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Multicloud-Management",target:"blank"},"CP4MCM IBM Demos Page")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F/product_welcome_cloud_pak.html",target:"blank"},"CP4MCM Knowledge Center")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{href:"https://www.ibm.com/cloud/cloud-pak-for-management",target:"blank"},"CP4MCM External Product Page")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{href:"https://ocp42.cloudpak8s.io/mcm/cp4mcm_introduction/",target:"blank"},"CP4MCM Playbook")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{href:"https://github.com/ibm-garage-tsa/cp4mcm-installer",target:"blank"},"Installation scripts for CP4MCM 2.1"))))}s.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-resources-index-mdx-be109346f4e960b538df.js.map