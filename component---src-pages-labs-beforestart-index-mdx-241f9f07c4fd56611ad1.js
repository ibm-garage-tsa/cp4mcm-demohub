(window.webpackJsonp=window.webpackJsonp||[]).push([[36,35,39,40,44,64,66,67,69],{"013z":function(e,a,t){"use strict";var c=t("q1tI"),b=t.n(c),s=t("NmYn"),n=t.n(s),o=t("Wbzz"),i=t("Xrax"),m=t("k4MR"),l=t("TSYQ"),r=t.n(l),p=t("QH2O"),d=t.n(p),g=t("qKvR"),u=function(e){var a,t=e.title,c=e.theme,b=e.tabs,s=void 0===b?[]:b;return Object(g.b)("div",{className:r()(d.a.pageHeader,(a={},a[d.a.withTabs]=s.length,a[d.a.darkMode]="dark"===c,a))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},t)))))},A=t("BAC9"),h=function(e){var a=e.relativePagePath,t=e.repository,c=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=t||c,s=b.baseUrl,n=b.subDirectory,i=s+"/edit/"+b.branch+n+"/src/pages"+a;return s?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:i},"Edit this page on GitHub"))):null},f=t("FCXl"),O=t("dI71"),j=t("I8xM"),y=function(e){function a(){return e.apply(this,arguments)||this}return Object(O.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,c=t.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var a,b=n()(e,{lower:!0,strict:!0}),s=b===c,i=new RegExp(c+"/?(#.*)?$"),m=t.replace(i,b);return Object(g.b)("li",{key:e,className:r()((a={},a[j.selectedItem]=s,a),j.listItem)},Object(g.b)(o.Link,{className:j.link,to:""+m},e))}));return Object(g.b)("div",{className:j.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:j.list},b))))))},a}(b.a.Component),w=t("MjG9"),x=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,c=e.location,b=e.Title,s=a.frontmatter,l=void 0===s?{}:s,r=a.relativePagePath,p=a.titleType,d=l.tabs,A=l.title,O=l.theme,j=l.description,v=l.keywords,k=Object(x.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,N=C?c.pathname.replace(C,""):c.pathname,S=d?N.split("/").filter(Boolean).slice(-1)[0]||n()(d[0],{lower:!0}):"",T=O||k;return Object(g.b)(m.a,{tabs:d,homepage:!1,theme:T,pageTitle:A,pageDescription:j,pageKeywords:v,titleType:p},Object(g.b)(u,{title:b?Object(g.b)(b,null):A,label:"label",tabs:d,theme:T}),d&&Object(g.b)(y,{slug:N,tabs:d,currentTab:S}),Object(g.b)(w.a,{padded:!0},t,Object(g.b)(h,{relativePagePath:r})),Object(g.b)(f.a,{pageContext:a,location:c,slug:N,tabs:d,currentTab:S}),Object(g.b)(i.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},D9Tb:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return l}));var c=t("wx14"),b=t("zLVn"),s=(t("q1tI"),t("7ljp")),n=t("013z"),o=(t("qKvR"),{}),i={_frontmatter:o},m=n.a;function l(e){var a=e.components,t=Object(b.a)(e,["components"]);return Object(s.b)(m,Object(c.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You should have your CP4MCM environment on ROKS requested and installed. If not, please complete the ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"../../environment/overview"}),"Request Your Environment")," steps before start the labs. The following labs are specific for ROKS environment, in ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Multicloud-Management"}),"IBM Demos site"),", you will find a similar version using Skytap (available to use with Customers and Business Partners)."),Object(s.b)("h2",null,"Accessing your CP4MCM console"),Object(s.b)("p",null,"If you have just requested your environment and installed your CP4MCM on ROKS, you should be on your CP4MCM Console Page, so you can skip this section."),Object(s.b)("p",null,"If not, follow the steps below to access the CP4MCM Console."),Object(s.b)("p",null,"1.Log in to ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"http://cloud.ibm.com"}),"IBM Cloud")," using your IBM credentials."),Object(s.b)("p",null,"2.First, confirm that you are on Digital Technical Engagement Account, if not click to change it."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACf0lEQVQ4y5WTS2gTURSGZy0UdKHZ1ScilaJWKYG+LMWIxjYlidBJYkRcVVxUN6JUqe2msYoLdadF1CroRqSlVrQVTWwbF6WIm24qVNA0j0mcTOY9v+fexBahih74ODP33vnvf889I4iiCL/fD5/Ph3A4jEgkwgmFQhw2HwgE+Bqeg0GIhz1o3LEVDds2o67aBdemKuyp3Y2794YhpFIpLC0tIZfLQVEUyLKMYrH4G2yMQ89qXsLnDwkMXruB2OAQgqeHUHekH9Erc/iWViBks1kwUSZmmiYMw/gjqmbSBiVaK8MwLbDQHaCgA1kZSGcyEAqFAgkZ+NcwaNMfioGSqkM3TDg2EzYJB8ycIKtAUXWgmw4cZ224kKYhX8hCVhWQFlTyoJK9kubAsstrWNkE2ykPMP4maFkWP4lpWdxNOZyVZ5u+T6W+Q2BCdkXQslax13hn2qzO9srmQGU/aJqOxS+LEPDfseqaZdu2y5mcS5IEoe9mEj39cZxjDMTRczWO3uszuHV/no+fH/hFAmcuv8Oz0QVoqkz1ksiVRoKsFBbV0uItJmxpfoqNBx7DVf+E53U1D3huEcewfu8I8QhVtQ+xYd8ILR5Gd2+cCqaiqGj86JX7ALsLuShD2O8dx67WUdS0jWJ70wtUu5+j1jMG8ex71Le/RIN/Am7fBBoDr/jcpdgcTDrmco5uXTZ5hxiVDuEOD/nfosn7Bs3eSRzsKNPaMYVo9zTcntdoOTbJaeucws76cfTFPqGkW/i6rCGd10FGSbTcQopCgidPfURXaBZieBZdRKd/Gse7ZnDh4jxCJ5Jg81EiEk3iaHsCt+8sUC/qJFhCRlK5EIO5ZD/JT7cYZql3toChAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud account",title:"ibmcloud account",src:"/cp4mcm-demohub/static/0ec8deb588d7dc1fee2bcb4178926faf/3cbba/ibmcloud-account.png",srcSet:["/cp4mcm-demohub/static/0ec8deb588d7dc1fee2bcb4178926faf/7fc1e/ibmcloud-account.png 288w","/cp4mcm-demohub/static/0ec8deb588d7dc1fee2bcb4178926faf/a5df1/ibmcloud-account.png 576w","/cp4mcm-demohub/static/0ec8deb588d7dc1fee2bcb4178926faf/3cbba/ibmcloud-account.png 1152w","/cp4mcm-demohub/static/0ec8deb588d7dc1fee2bcb4178926faf/ce6f1/ibmcloud-account.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"3.On IBM Cloud Dashboard, click ",Object(s.b)("strong",{parentName:"p"},"Clusters")," to see your OpenShift Hub Cluster."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACf0lEQVQ4y5WTXUgUURTH5zkI6iF6iyCIEISiWIRSk0UfMl13VsP9aKOXwOjB6iEKA8snIYgoH7aHiMqCeglRzCiNWvGjh5KgByEMVmLddmZ2m53POzv/zr3jGkJFXfjxv3Pu4T/nnjkjxeNxyLKMSCSCZDKJVColSCQSAn4ei8VEDldONBpFT3c3YhTrjEQhx04gHG5FJpOBlM/nkcvloKoqDMOAruuoVCqb4DFd53tdwPO0soFSuYKRMRtnbrm4eJdh9ZsCSSGjQrEIwzTBGIPrun/Esl3Ks/GjXIKiqDBNC5rOkFcZCpqHYpEMS6oGR1MA5uJfluMy6AYT6lX99WigikKG+Y+fUfySg8Mo7Pu/hS/XtumKCnTLgOUAFr2fq2n7G8a8bZLneRQAeOxvhjyP0S0Yaa2iQIN9lQzW1vKQ+Ibjkavn+RsEsc3P3Jv3OdgHz+vvg207WPm6Agn/vX5VzbVarQZKlWuaBmnw5iL6r2dxnjOURf+1LAZuzOP2/SURvzBUYxZnr77Fs/Fl2JZO/dKoKpsMeSs86qUnRkza3fQUOw49xs7QE6Fb6h4IbY5PYNv+UeIRttY/xPYDo5R8D30DWWqYhYphi6vXPnSVqtRpRqWD7ZPY1zKOuvA49jSOYVfDc9S3TSB+7h1CHS9wWJ5CQ2QKR2IvxdmV4Q9gdM2CSl+dZrBi+XBZ0AZRYav8Bo3tr9HUPo2jnQEtnTNI982hoe0Vmo9PC8JdM9gbmsTg8CeYjofVgo3vJQdUKJnyEfLpDyLDU6ffozexgHhyAb1ElzyHnt55XLq8hMTJRfDzNJFKL+JYxyzujCzTLDpkaKKoWcKIw6ssl8v4CW2ibT1E7a+KAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud dashboard cluster",title:"ibmcloud dashboard cluster",src:"/cp4mcm-demohub/static/89428fbb387100fb846eff119de920e4/3cbba/ibmcloud-dashboard-cluster.png",srcSet:["/cp4mcm-demohub/static/89428fbb387100fb846eff119de920e4/7fc1e/ibmcloud-dashboard-cluster.png 288w","/cp4mcm-demohub/static/89428fbb387100fb846eff119de920e4/a5df1/ibmcloud-dashboard-cluster.png 576w","/cp4mcm-demohub/static/89428fbb387100fb846eff119de920e4/3cbba/ibmcloud-dashboard-cluster.png 1152w","/cp4mcm-demohub/static/89428fbb387100fb846eff119de920e4/ce6f1/ibmcloud-dashboard-cluster.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"4.Click the OpenShift Hub cluster to open the cluster view."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABt0lEQVQ4y51T244SQRCd39PEKFkuDxAe/QJ/Yn302fgf+wv6btbZZQVhgLnRzJ259bFPDSxrjHuxyEmd6i5Od3XVWJPJBP1+H71eD+TT6VRAPh6PxQ8GA8mhHw6HwkejkYn7ePvuAr2LEV6/eoPLy4+wXNfFZrOBHwQoigJ5ngsOh8MfMfkpps+yHHVV4MtVg/efWnz4rGHPFazlcon5fI71eo3tdgseQCwWC1kj9zwPq9VK1sjpmcv92zsHNz89zBa+yfVh7fd7uZ0yfqcU4jhGkiRQao8gDI1XEkdRJPvdngL/F8cJ4kghz2JUZY7Q5FtpmsktWOLJNM6m9cPob9OS0/Hdbgcrupvh17ev8H5cI7z+jsr3ZJNvVVWVCBLkEptfWmSG17Letq34pmnkYlZqynVubKxnt8gCHwd3gypN0R6TxZ/4MW4ecHpaYSq0bRtWnKRwjWhZ1/el6uOpLwGF5YZ8XI5NWZbdSOSFnKxfjOMbUoTd4Tiwg5yxczn6XPK/0HagqHSZIqFR5oOf7EmRxwQ5d47jyPzVfEfdjYHGM6HPY3Zfcmq6SkF+TpzH/wF7EJjm/gYg+cp1klDBdQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ocp hubcluster",title:"ocp hubcluster",src:"/cp4mcm-demohub/static/8d948b07969e54c03a6d5d5c1af55a5e/3cbba/ocp-hubcluster.png",srcSet:["/cp4mcm-demohub/static/8d948b07969e54c03a6d5d5c1af55a5e/7fc1e/ocp-hubcluster.png 288w","/cp4mcm-demohub/static/8d948b07969e54c03a6d5d5c1af55a5e/a5df1/ocp-hubcluster.png 576w","/cp4mcm-demohub/static/8d948b07969e54c03a6d5d5c1af55a5e/3cbba/ocp-hubcluster.png 1152w","/cp4mcm-demohub/static/8d948b07969e54c03a6d5d5c1af55a5e/ce6f1/ocp-hubcluster.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"5.From the Hub Cluster details view, copy the ",Object(s.b)("strong",{parentName:"p"},"Ingress subdomain")," url."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACKUlEQVQ4y32S2W7TQBiF84CARNabLH0T7pDIa3CDeBLUXoHUkoJCkra09TYee2Y83g//P84GCEY6drzMl3P+4950OsNwOES/38d8PsfF4gKLxQKz2QzT6dRpPB67d/g8Go3xuj/EcDTBYDAiDTCZTPDqxUssl0v0NtsdPO8Zvu/j58MDHv1nJGmKOI6RJAmMMdBakwzKwuD7vcW7jw3efijx5n2JTzcWMjEQSYYgFOgxLIoiJyklRCyQ5zmKonAqy/IoQ9Aoktg9hgjjkiAVTNY9q6rKMXqbH2uEAb0QhlBKQUQCbdt2AHKXZRmapkELwOYWgdoiyjZI8ye606JoCtgqh1QJhGCHQQDNG0nskMG87D5qi/1qgFDuEClK5CfwCWyKFC0Bq1LTeKIOuKODJGeGNrvIdM2ODP1ReH8H5XvIEwl7d4/IWyOyT+Rcw9cbFKUBHdDYDJpG5YCaYCyOyxEFzSGzFuHtCl+vLrH+8hmb62uE31YoUgVpAwR6C2UFOauPpcUEczPkC4Z1TWrXtqG5GRkjJXe1VqhUSupSpImijTHqqnFFVHWntm064AF2DmWxy4zaPoquuX2WNha1g7Ro6k5VSS2LPfAc+rvSk+jb5MY5oud57ndd18gpdkZzFDI5RT7Xn07P71tyycqz7szl1eSy4hIzTSNRJ4f/0wHIHzpDfJ2ioMi8ODavvABkav92+C8dHNZUhMy7+boZOl6Ly1WJq5sUvwBIO8FfxsaAbwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ingress subdomain",title:"ingress subdomain",src:"/cp4mcm-demohub/static/5e2a2cb99a25c2fe4fc9d273297c6e20/3cbba/ingress-subdomain.png",srcSet:["/cp4mcm-demohub/static/5e2a2cb99a25c2fe4fc9d273297c6e20/7fc1e/ingress-subdomain.png 288w","/cp4mcm-demohub/static/5e2a2cb99a25c2fe4fc9d273297c6e20/a5df1/ingress-subdomain.png 576w","/cp4mcm-demohub/static/5e2a2cb99a25c2fe4fc9d273297c6e20/3cbba/ingress-subdomain.png 1152w","/cp4mcm-demohub/static/5e2a2cb99a25c2fe4fc9d273297c6e20/ce6f1/ingress-subdomain.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"6.Open a new browser tab, and on the URL field, enter ",Object(s.b)("strong",{parentName:"p"},"https://icp-console.")," and paste the Ingress subdomain url that you copied in the previous step and press ",Object(s.b)("strong",{parentName:"p"},"Enter"),"."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1051px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.763888888888888%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAj0lEQVQI1y2KPQuCUABF/Z9NpdhrMsfGIOhP9A05NNSWEhFF0Pg+bC5IX9ES0S84qTgc7rnc64hWg8Gwz3q2IBpNCsaspnNOccI52XHcxlz2BzbLiF4QEng+YbtTIwh9UWXX9Wi6Pk5mn9jbnZdU2PRKrg2P0k1KpnThsup54ZlSFeWn3K0x9V/y1prP98cfTOR65wJpsGQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cp4mcm console url",title:"cp4mcm console url",src:"/cp4mcm-demohub/static/1beeb51b320f4caf9b2b0784006acccd/fb23a/cp4mcm-console-url.png",srcSet:["/cp4mcm-demohub/static/1beeb51b320f4caf9b2b0784006acccd/7fc1e/cp4mcm-console-url.png 288w","/cp4mcm-demohub/static/1beeb51b320f4caf9b2b0784006acccd/a5df1/cp4mcm-console-url.png 576w","/cp4mcm-demohub/static/1beeb51b320f4caf9b2b0784006acccd/fb23a/cp4mcm-console-url.png 1051w"],sizes:"(max-width: 1051px) 100vw, 1051px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"7.Log in with your admin and password defined on ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"../../environment/overview"}),"Request Your Environment")," section."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACnklEQVQ4yz2Ty2/TQBDG88cCR94VEjcuIHGGA4ceQD0hJC60VEBbqUSFRFXahDa0adMkjeM8ncT2Pry7Lh8za8Lh086uvb+ZnUcpVRbGOQCFbO7AZyyhHRJpMZ1rTCKN0VRjPCvslabzDMvEIFpmmNK+xLCjiwzrW8rr4DTzDhgoCRgTcDBWiBYGqXAYR4b2GsFIoz/U3l4mDovYYjghoDYOF4HBdlXjc0XjpGN8ZPPEUnQOS2H9pTh1cO4PObmhvcFFT+HymkRrq1uoEyiUhLZ0iTykhcKZRTA1aIcG/Yn1wO5AodnWOGxqAmk0WgrHvyWOz5S3m22F2YJSpHIGcjQGAT0rnCqMKScc3Sw2fmXg6aX0gPqZxOGpxM86AxVqTYlKg88UJnNHULcCaoST1Gsea2T0NJa2OUVtUCNY9VcBY8BORXpg41yhXFPkQOKkVfxTkllOFRLoD0YIhhNaxwjHEcJRhEUisUwtftQF9g8FWh3K1ZXEbkVgsyzx6bvExz2JGjkKQoUjiriUU7Ps7lfw4OFjrK09wd1798l+hFu37+DLt11QsbFdjrG5n3pgjxK/sZXgxbsYLzdSPH+bYqssMKSUVRsCJWVuqNwRzluX6Pb66HSv/XrV6VGPLZEoh3Zf4axTVLRL9vuvMZ6+HuDZ+hyvPijsVAV6fYneQBc5TJWBNjncDf6LtmBnieRvRfOn1JPcxJNZRk+kvI8yksaMCrmgImb0nwcmQlPTKnBP6sySeGosXF40tqB3K2ovviRpjalQ4TjDdcjTktF3A2MtFTVDKSUgQ3kq+KLwE2Jx0HQ4DxxUZn2UgsTNmwjjz6SmyZGFzUDeR0tDQJ5bvZpf521FEb7ZyrFXz2EdRSSKyBjMKwNWjgvYv1cQ/C8WB8flxdzfSAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cp4mcm console login",title:"cp4mcm console login",src:"/cp4mcm-demohub/static/c20a774aec0d9c7ba9359dabbb3ec654/3cbba/cp4mcm-console-login.png",srcSet:["/cp4mcm-demohub/static/c20a774aec0d9c7ba9359dabbb3ec654/7fc1e/cp4mcm-console-login.png 288w","/cp4mcm-demohub/static/c20a774aec0d9c7ba9359dabbb3ec654/a5df1/cp4mcm-console-login.png 576w","/cp4mcm-demohub/static/c20a774aec0d9c7ba9359dabbb3ec654/3cbba/cp4mcm-console-login.png 1152w","/cp4mcm-demohub/static/c20a774aec0d9c7ba9359dabbb3ec654/b53fa/cp4mcm-console-login.png 1310w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"8.Great, now you are ready to start your lab! Next section you will learn how to install Command Line Interface tools."),Object(s.b)("p",null,"  ",Object(s.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACTUlEQVQ4y1VTPY8SYRDev2gLnLmFIzacBPCi0djZWFqchaWFiZ2NtblY6FXmNBF2WT4XFjj2G3aXL+9xZmD5IJm8M/PO+zDPM7NKXs2jXC6jUqmgWq2iVq3h6tkVihdFZDIZ5HI55LIHy2ayYo/PcmRnUFUVhXwB6rmKWq0GZbFYYDabYT6fy8kWhiHiJMFqtcJyudzbgmyz2YB/9/4S0WJN3gMYgy2KIij8eGrbsB1HjP3p1IbrugJ88idxgrFl4uvNH7z/9oDP3x38vvuFcFfj+/4W0Gh30Gy15Uz9/mAI1/Okc65JqGPLslAoXqD24iWeXmt4VHyDUukJfvy8xXq9hkf1AljXmtCaBup6E7rRQoP8TrcHx3GJxlYKpuN5Pqqk0/PXb/HxJsH5q08oXZagNXShvO+QgeqaLsCNnf+XilgCBkppR3GM9TLB7d0Ylx8CvPviInBs0TudgwD2TBPWaAzbPmjI3R0P6tiSeE6yTOA6HkkRnWit8PRYH275ZKIUcz69S5JDzPZvs5I8DyrN8TtlsVzB9ed0EUlHMVOcJ/CDQ46L/TCmaUaiqdQRkO3F5B9yPBiFd8v3AxE0CALRTAawi5lGTNrxmcZpLiCqnEvXhvdWYaFbnS5G44kAcyGvi9HuYjC0pJCpDUcjqeNOth3Gslqc83brJYB8oRsGPR7KBccOTbdv9iXeA9IO1jVNQLgrlsEcDKjOpI/gGJDE1jsTWBOXHodCN5jFGExCok2rwFOlx+NpAKN3T1vg7ignGE1Dyof7bWAN/wMCm6vuQ40zagAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cp4mcm welcome page",title:"cp4mcm welcome page",src:"/cp4mcm-demohub/static/04e26b3e103fd8339d4959c148003952/3cbba/cp4mcm-welcome-page.png",srcSet:["/cp4mcm-demohub/static/04e26b3e103fd8339d4959c148003952/7fc1e/cp4mcm-welcome-page.png 288w","/cp4mcm-demohub/static/04e26b3e103fd8339d4959c148003952/a5df1/cp4mcm-welcome-page.png 576w","/cp4mcm-demohub/static/04e26b3e103fd8339d4959c148003952/3cbba/cp4mcm-welcome-page.png 1152w","/cp4mcm-demohub/static/04e26b3e103fd8339d4959c148003952/ce6f1/cp4mcm-welcome-page.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}l.isMDXComponent=!0},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-labs-beforestart-index-mdx-241f9f07c4fd56611ad1.js.map