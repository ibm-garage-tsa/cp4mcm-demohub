(window.webpackJsonp=window.webpackJsonp||[]).push([[60,35,39,40,44,63,65,66,68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),u=a.n(m),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},A=a("FCXl"),j=a("dI71"),w=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,s=new RegExp(n+"/?(#.*)?$"),l=a.replace(s,o);return Object(p.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(p.b)(c.Link,{className:w.link,to:""+l},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:w.list},o))))))},t}(o.a.Component),O=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,u=b.tabs,x=b.title,j=b.theme,w=b.description,y=b.keywords,T=Object(v.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,N=k?n.pathname.replace(k,""):n.pathname,P=u?N.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",C=j||T;return Object(p.b)(l.a,{tabs:u,homepage:!1,theme:C,pageTitle:x,pageDescription:w,pageKeywords:y,titleType:m},Object(p.b)(g,{title:o?Object(p.b)(o,null):x,label:"label",tabs:u,theme:C}),u&&Object(p.b)(f,{slug:N,tabs:u,currentTab:P}),Object(p.b)(O.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d})),Object(p.b)(A.a,{pageContext:t,location:n,slug:N,tabs:u,currentTab:P}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dIT8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=r.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Do you want to learn more about CP4MCM using your ROKS environment? Here is the right place. In the following sections, you will have hands-on experience with Cloud Pak for Multicloud Management. And to complete the labs, you will use your CP4MCM environment on ROKS."),Object(i.b)("p",null,"By now, there are four hands-on labs: Multicluster Management, Application Management, Security & Compliance Management and CI/CD."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"950px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAADQUlEQVQ4y2NgOraKmQEELmyK5V3cf1lgQe8Z5otbJoCEpGoKGfli/BhgYHVwr+GKoG5dGF/CQIsBHxADYjMg1gFiDpDAhDYjxl9z54AtPB+7zPPZhONfHvUc/nQqapEtSKyybxer9eqTzDbHXoENsNn7AEgyMkKMY2EWBpIgK6W4BTh50G3bGzQ94tX889+fzznzbaP/RH90eWuwYUCgpq0PNZGBjdtIV1E00FMdxPn72lX48FZnuTN77GW3LXOUBwpx7k+f77AnC+w6FrvlR52tZ23ts153ttnu3BcJsKF77jFi+Dt1XxvYu88vWVduXGK959g22w33z9o1IKspAhqoVz/VUq96YrHF0kMRRosOgHzH4HDiDQODiaWdiKmZDRdYgIFRwBMYlv///wdxFYHYEhT2skq2IHmmTUnTRVfE9PIy+GmwAPmiQMwH8hkQc8FtM7Wy8zd2dDUvBUoor5xRKbBv2Vo3FjEJJi4uBWD46gGVCDJIC7DdLtzasTZp6tIr+RtWPC3dUwWKOAU7byURXVNpIBsccWwi4kADLe259H18eR35ZRWl5vUG8Gyfn++goq8jIC6mDVSjD8QqssqKAkG6rtGeGraJK8K7jXamzQWHs9eivYIRW86zg9h6xhaMZrZOiDA0dnLjtlTT17GVVte1snGUZmQTETI3kVC0MpdQYeeW4wfFHxArA7EAAycDZzQwCLAmPhMrOwYTW0ewyZo56UxKDSVMBpb2rE5uHhz//y9j/v+1jSU8NppVgE9Ql5WRWYmdlUNZkotb1rS6X9p+7/02jw1nymT84jjNLGzUTK3s3YFetgMbbG5oAbfEw9MaGNN+QK+w8nPzswgyMESzyitIgiJBkEVFG5RGmS22XisKuPrjf/CRR//11190Nudiljd1cDeAuBJqKDA8oUZmMKUkGhlePBx0/PLRkCtlhSY2DAz/UXzmsvSAY+j+27esDz09btm3TA2r94FOZvj/3xbs/fmTNCO/PMn+//dt6f91C3SyQWL/f+oxiQkIwNVr9q2St2yaLgHjGwkLYBpaWmgHNlDL0Jnv4CariUe3Wc4OCXUEeZehvQEiJwvEKf8RLrYHsg1BDvIJZQAAfZfr7hFQAO8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"toc labs",title:"toc labs",src:"/cp4mcm-demohub/static/7a1d870a212ec08f865568959b638016/ffcdc/toc-labs.png",srcSet:["/cp4mcm-demohub/static/7a1d870a212ec08f865568959b638016/7fc1e/toc-labs.png 288w","/cp4mcm-demohub/static/7a1d870a212ec08f865568959b638016/a5df1/toc-labs.png 576w","/cp4mcm-demohub/static/7a1d870a212ec08f865568959b638016/ffcdc/toc-labs.png 950w"],sizes:"(max-width: 950px) 100vw, 950px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"We recommend to follow the sequence above, however if you want to explore one specific lab, you can do it, just check the lab prerequisite section before start it."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-roks-overview-index-mdx-e7e40477ad6bc8dfca4d.js.map