(window.webpackJsonp=window.webpackJsonp||[]).push([[25,35,39,40,44,64,66,67,69],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),l=a.n(o),i=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),p=a("QH2O"),m=a.n(p),d=a("qKvR"),h=function(e){var t,a=e.title,r=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===r,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,l=n.subDirectory,c=o+"/edit/"+n.branch+l+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),y=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),o=n===r,c=new RegExp(r+"/?(#.*)?$"),b=a.replace(c,n);return Object(d.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(i.Link,{className:f.link,to:""+b},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},n))))))},t}(n.a.Component),w=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,m=s.tabs,j=s.title,y=s.theme,f=s.description,x=s.keywords,k=Object(v.a)().interiorTheme,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=T?r.pathname.replace(T,""):r.pathname,q=m?P.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",C=y||k;return Object(d.b)(b.a,{tabs:m,homepage:!1,theme:C,pageTitle:j,pageDescription:f,pageKeywords:x,titleType:p},Object(d.b)(h,{title:n?Object(d.b)(n,null):j,label:"label",tabs:m,theme:C}),m&&Object(d.b)(N,{slug:P,tabs:m,currentTab:q}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:u})),Object(d.b)(g.a,{pageContext:t,location:r,slug:P,tabs:m,currentTab:q}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kBVM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var r,n=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),b=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),s={_frontmatter:c},u=i.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(u,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{mdxType:"PageDescription"},Object(l.b)("p",null,"Anyone can contribute to IBM Cloud Paks playbook projects, whether you are an IBM’er or not.\nWe welcome your collaboration & contributions happily, as our reference applications are meant to reflect your real world scenarios.\nThere are multiple ways to contribute: report bugs and improvement suggestions, improve documentation, and contribute code.")),Object(l.b)("h2",null,"Bug reports, documentation changes, and feature requests"),Object(l.b)("p",null,"If you would like to contribute your experience back to the project in the form of encountered bug reports, necessary documentation changes, or new feature requests, this can be done through the use of the repository’s ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),Object(l.b)("strong",{parentName:"a"},"Issues"))," list.  "),Object(l.b)("p",null,"Before opening a new issue, please reference the existing list to make sure a similar or duplicate item does not already exist.  Otherwise, please be as explicit as possible when creating the new item and be sure to include the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Bug reports"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Specific Project Version"),Object(l.b)("li",{parentName:"ul"},"Deployment environment"),Object(l.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate the problem"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Documentation changes"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"URL to existing incorrect or incomplete documentation (either in the project’s GitHub repo or external product documentation)"),Object(l.b)("li",{parentName:"ul"},"Updates required to correct current inconsistency"),Object(l.b)("li",{parentName:"ul"},"If possible, a link to a project fork, sample, or workflow to expose the gap in documentation."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Feature requests"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Complete description of project feature request, including but not limited to, components of the existing project that are impacted, as well as additional components that may need to be created."),Object(l.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate environment necessary to identify the new feature’s current gap.")))),Object(l.b)("p",null,"The more explicit and thorough you are in opening GitHub Issues, the more efficient your interaction with the maintainers will be.  When creating the GitHub Issue for your bug report, documentation change, or feature request, be sure to add as many relevant labels as necessary (that are defined for that specific project).  These will vary by project, but will be helpful to the maintainers in quickly triaging your new GitHub issues."),Object(l.b)("h2",null,"Code contributions"),Object(l.b)("p",null,"We really value contributions, and to maximize the impact of code contributions, we request that any contributions follow the guidelines below.  If you are new to open source contribution and would like some more pointers or guidance, you may want to check out ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://yourfirstpr.github.io/"}),Object(l.b)("strong",{parentName:"a"},"Your First PR"))," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.firsttimersonly.com/"}),Object(l.b)("strong",{parentName:"a"},"First Timers Only")),".  These are a few projects that help on-board new contributors to the overall process."),Object(l.b)("h3",null,"Coding and Pull Requests best practices"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Please ensure you follow the coding standard and code formatting used throughout the existing code base.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This may vary project by project, but any specific diversion from normal language standards will be explicitly noted."))),Object(l.b)("li",{parentName:"ul"},"One feature / bug fix / documentation update per pull request",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Always pull the latest changes from upstream and rebase before creating any pull request.  "),Object(l.b)("li",{parentName:"ul"},"New pull requests should be created against the ",Object(l.b)("inlineCode",{parentName:"li"},"integration")," branch of the repository, if available."),Object(l.b)("li",{parentName:"ul"},"This ensures new code is included in full-stack integration tests before being merged into the ",Object(l.b)("inlineCode",{parentName:"li"},"master")," branch"))),Object(l.b)("li",{parentName:"ul"},"All new features must be accompanied by associated tests.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Make sure all tests pass locally before submitting a pull request."),Object(l.b)("li",{parentName:"ul"},"Include tests with every feature enhancement, improve tests with every bug fix")))),Object(l.b)("h3",null,"Github and git flow"),Object(l.b)("p",null,"The internet is littered with guides and information on how to use and understand git.\nHowever, here’s a compact guide that follows the suggested workflow"),Object(l.b)("img",{src:"https://ibm-cloud-architecture.github.io/assets/img/github_flow.png",alt:"Github flow"}),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Fork the desired repo in github.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Clone your repo to your local computer.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Add the upstream repository"),Object(l.b)("p",{parentName:"li"},"Note: Guide for step 1-3 here: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo/"}),"forking a repo"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create new development branch off the targeted upstream branch.  This will often be ",Object(l.b)("inlineCode",{parentName:"p"},"master"),"."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git checkout -b <my-feature-branch> master\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Do your work:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Write your code"),Object(l.b)("li",{parentName:"ul"},"Write your tests"),Object(l.b)("li",{parentName:"ul"},"Pass your tests locally"),Object(l.b)("li",{parentName:"ul"},"Commit your intermediate changes as you go and as appropriate"),Object(l.b)("li",{parentName:"ul"},"Repeat until satisfied"),Object(l.b)("li",{parentName:"ul"},"See the ",Object(l.b)("a",{href:"/contribute/#testing-locally",title:"Testing locally"},Object(l.b)("span",null,"Testing locally"))," section below for more information regarding running Gatsby locally"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Fetch latest upstream changes (in case other changes had been delivered upstream while you were developing your new feature)."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git fetch upstream\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Rebase to the latest upstream changes, resolving any conflicts. This will ‘replay’ your local commits, one by one, after the changes delivered upstream while you were locally developing, letting you manually resolve any conflict."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git branch --set-upstream-to=upstream/master\ngit rebase\n")),Object(l.b)("p",{parentName:"li"},"Instructions on how to manually resolve a conflict and commit the new change or skip your local replayed commit will be presented on screen by the git CLI.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Push the changes to your repository"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git push origin <my-feature-branch>\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create a pull request against the same targeted upstream branch."),Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/creating-a-pull-request/"}),"Creating a pull request")))),Object(l.b)("p",null,"Once the pull request has been reviewed, accepted and merged into the main github repository, you should synchronise your remote and local forked github repository ",Object(l.b)("inlineCode",{parentName:"p"},"master")," branch with the upstream master branch. To do so:"),Object(l.b)("ol",{start:10},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Pull to your local forked repository the latest changes upstream (that is, the pull request)."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git pull upstream master\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Push those latest upstream changes pulled locally to your remote forked repository."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git push origin master\n")))),Object(l.b)("h3",null,"What happens next?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"All pull requests will be automatically built and unit tested by travis-ci, when implemented by that specific project.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"You can determine if a given project is enabled for travis-ci unit tests by the existence of a ",Object(l.b)("inlineCode",{parentName:"li"},".travis.yml")," file in the root of the repository or branch."),Object(l.b)("li",{parentName:"ul"},"When in use, all travis-ci unit tests must pass completely before any further review or discussion takes place."))),Object(l.b)("li",{parentName:"ul"},"The repository maintainer will then inspect the commit and, if accepted, will pull the code into the upstream branch."),Object(l.b)("li",{parentName:"ul"},"Should a maintainer or reviewer ask for changes to be made to the pull request, these can be made locally and pushed to your forked repository and branch."),Object(l.b)("li",{parentName:"ul"},"Commits passing this stage will make it into the next release cycle for the given project.\nSend pull requests against the ",Object(l.b)("inlineCode",{parentName:"li"},"gh-pages")," branch.")),Object(l.b)("h2",null,"Testing locally"),Object(l.b)("p",null,"Once you have forked the repository and have cloned the code to your local system you can begin contributing. The best way to contribute is to run the Gatsby project locally in ",Object(l.b)("inlineCode",{parentName:"p"},"dev")," mode so you can make sure your documentation renders correctly before creating a pull request."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Once you have cloned your fork of the repository to your local system navigate to the directory where your project resides",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"cd /<your repo directory>\n"))),Object(l.b)("li",{parentName:"ol"},"Run the following command to initialize npm in your local directory",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install\n"))),Object(l.b)("li",{parentName:"ol"},"Start Gatsby with the Carbon theme on your local system",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run dev\n"))),Object(l.b)("li",{parentName:"ol"},"Open your browser to ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:8000/"}),"localhost:8000")," to verify your changes have rendered correctly"),Object(l.b)("li",{parentName:"ol"},"If further changes are required, make your modifications and Gatsby will reder the changes automatically and you can refresh your browser to see the changes.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contribute-index-md-3bf901224f541450729e.js.map