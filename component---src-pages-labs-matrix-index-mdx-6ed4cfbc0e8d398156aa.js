(window.webpackJsonp=window.webpackJsonp||[]).push([[43,35,39,40,44,63,65,66,68],{"013z":function(e,t,a){"use strict";var c=a("q1tI"),n=a.n(c),r=a("NmYn"),i=a.n(r),b=a("Wbzz"),s=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),m=a.n(l),d=a("QH2O"),u=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,c=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===c,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,c=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||c,r=n.baseUrl,i=n.subDirectory,s=r+"/edit/"+n.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),A=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,c=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),r=n===c,s=new RegExp(c+"/?(#.*)?$"),o=a.replace(s,n);return Object(p.b)("li",{key:e,className:m()((t={},t[A.selectedItem]=r,t),A.listItem)},Object(p.b)(b.Link,{className:A.link,to:""+o},e))}));return Object(p.b)("div",{className:A.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:A.list},n))))))},t}(n.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,c=e.location,n=e.Title,r=t.frontmatter,l=void 0===r?{}:r,m=t.relativePagePath,d=t.titleType,u=l.tabs,x=l.title,O=l.theme,A=l.description,T=l.keywords,k=Object(w.a)().interiorTheme,y=Object(b.useStaticQuery)("2456312558").site.pathPrefix,N=y?c.pathname.replace(y,""):c.pathname,I=u?N.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",H=O||k;return Object(p.b)(o.a,{tabs:u,homepage:!1,theme:H,pageTitle:x,pageDescription:A,pageKeywords:T,titleType:d},Object(p.b)(g,{title:n?Object(p.b)(n,null):x,label:"label",tabs:u,theme:H}),u&&Object(p.b)(v,{slug:N,tabs:u,currentTab:I}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:m})),Object(p.b)(j.a,{pageContext:t,location:c,slug:N,tabs:u,currentTab:I}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},PakB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return l}));var c=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),{}),s={_frontmatter:b},o=i.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(o,Object(c.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Cloud Pak for Multicloud Management Labs Environments"),Object(r.b)("p",null,"As described in the previous page, DTE provides two options of labs environment (ROKS and Skytap). Here you will learn the use cases, pros and cons for each approach."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABf0lEQVQY01WLuW/TcBiG/YcyVJQyMCMYYUAgoAMTYoIJIVAj2nKoStKmaVJ8xInjK85l56zt2EkTkUDZHn7xgMTw6D2+95MevbXZeapw+3mNu/sNHryxeSjYfaGzK7qdZ6ro69x/bWV5y96+wb1XZtbtvaxzR2xvPVF5/M5BKsk+xwWbfKWHYqYc5S3e56qZfik6nJS7lLUJ30sen45VDr7pfD11OZOHfD4x+HAoi39LdB5Kc4rk9Zc4nWtML8Xy5hRKJh9zZ+SOLjg4LHN+2cZspYKEpmDrDSemIVAbIy41H6U+RDUm9AYrJKs1Qa51sb2QwXSNbvgUz+uUKiZV2eXih03Hn2O1rqgZAXozwLDH9IcrTHdKwxpl2nSm9IIEaZauCaMVcbJmfn2DH4TojRauN6Dvh4wmKYvlH0yrS75YQavZYhMxSzeoNYvCaZV2d0y7MyaMl0jp4rc4/sqIk81/Pox/Es3W//JVtM0b0sUNicCyfVTNRtNdFKHBIOIvsjCWCYhneaQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"matrix",title:"matrix",src:"/cp4mcm-demohub/static/013b7898981c8c72c50c39389a856183/3cbba/matrix.png",srcSet:["/cp4mcm-demohub/static/013b7898981c8c72c50c39389a856183/7fc1e/matrix.png 288w","/cp4mcm-demohub/static/013b7898981c8c72c50c39389a856183/a5df1/matrix.png 576w","/cp4mcm-demohub/static/013b7898981c8c72c50c39389a856183/3cbba/matrix.png 1152w","/cp4mcm-demohub/static/013b7898981c8c72c50c39389a856183/0b124/matrix.png 1728w","/cp4mcm-demohub/static/013b7898981c8c72c50c39389a856183/234eb/matrix.png 1865w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}l.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-labs-matrix-index-mdx-6ed4cfbc0e8d398156aa.js.map