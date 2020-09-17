(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zeqw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},i=l("PageDescription"),c=l("AnchorLinks"),p=l("AnchorLink"),b={_frontmatter:s},m=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(m,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i,{mdxType:"PageDescription"},Object(a.b)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the development environment set up as quickly as possible so you can start contributing.")),Object(a.b)(c,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Project setup"),Object(a.b)(p,{mdxType:"AnchorLink"},"Development"),Object(a.b)(p,{mdxType:"AnchorLink"},"Work in a branch"),Object(a.b)(p,{mdxType:"AnchorLink"},"Sass and CSS Modules"),Object(a.b)(p,{mdxType:"AnchorLink"},"VS Code"),Object(a.b)(p,{mdxType:"AnchorLink"},"Test pages"),Object(a.b)(p,{mdxType:"AnchorLink"},"Publishing")),Object(a.b)("h2",null,"Project setup"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Go to ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon"}),"gatsby-theme-carbon")," and click the ",Object(a.b)("inlineCode",{parentName:"p"},"Fork")," button in the top-right corner.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After it’s finished, click on the ",Object(a.b)("inlineCode",{parentName:"p"},"Clone or Download")," button and copy the contents.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In your terminal, clone the repo into your directory of choice"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git clone [PASTE_URL_HERE]\ncd gatsby-theme-carbon\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When you clone your forked repo the ",Object(a.b)("inlineCode",{parentName:"p"},"origin")," is set to your fork by default. You’ll want to add a remote that points to the upstream repo."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In your terminal, verify that the remotes have been set"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git remote -v\n")))),Object(a.b)("h2",null,"Development"),Object(a.b)("p",null,"We use ",Object(a.b)("a",r({parentName:"p"},{href:"https://yarnpkg.com/lang/en/docs/install/"}),"yarn")," and yarn workspaces to develop the Carbon Gatsby theme. This allows us to have a development environment that’s closely linked to the theme with minimal setup. Run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn install")," to install all of the projects dependencies."),Object(a.b)("p",null,"This project has two packages: the actual theme package (",Object(a.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"),") and the ",Object(a.b)("inlineCode",{parentName:"p"},"example")," package. The example package emulates a project which uses the theme. Its only dependencies are Gatsby, React, and the adjacent theme package. The ",Object(a.b)("inlineCode",{parentName:"p"},"example")," package also serves as the theme’s documentation and ",Object(a.b)("a",r({parentName:"p"},{href:"https://gatsby-theme-carbon.now.sh"}),"website"),"; it’s deployed on every merge to master."),Object(a.b)("p",null,"New theme development will happen in the theme package while documentation and testing of that change will occur through changes in the example directory."),Object(a.b)("h3",null,"Development scripts"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yarn dev")," – start the development environment"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yarn dev:clean")," – clear cache and restart dev"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yarn format")," – format your code with prettier"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yarn lint")," - check for errors in your javascript"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yarn test:prefix")," – build and serve with a path prefix")),Object(a.b)("h2",null,"Work in a branch"),Object(a.b)("p",null,"You should always start a new project by pulling upstream changes into master and then creating a new branch. This workflow ensures you don’t accidentally commit anything to your master branch and get stuck when trying to open a pull request."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git checkout master\ngit pull upstream master\ngit checkout -b my-branch-name\n")),Object(a.b)("p",null,"When you’re ready to open a pull request, push to your origin remote."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git push origin my-branch-name\n")),Object(a.b)("p",null,"You’ll get a message in your terminal with a URL to open up a pull request in the upstream repository. Navigate to that URL and be sure to give a detailed summary of your pull request in the title and body section of the form."),Object(a.b)("h2",null,"Sass and CSS Modules"),Object(a.b)("p",null,"For internal theme components we use ",Object(a.b)("a",r({parentName:"p"},{href:"https://sass-lang.com/documentation/syntax"}),"Sass")," and ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/css-modules/css-modules#css-modules"}),"CSS Modules"),". This allows us to take advantage of the Carbon Design System resources while not worrying about className collisions. By default, each ",Object(a.b)("inlineCode",{parentName:"p"},".scss")," file will be supplied with all of the Carbon Sass ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_vars.scss"}),"variables"),": color, spacing, theme, and motion, as well as type and layout mixins, are imported automatically."),Object(a.b)("p",null,"You should colocate your stylesheet with the component(s) that import it. If the component is ",Object(a.b)("inlineCode",{parentName:"p"},"TreeView")," then the stylesheet should be ",Object(a.b)("inlineCode",{parentName:"p"},"TreeView.module.scss"),". All contained within the ",Object(a.b)("inlineCode",{parentName:"p"},"TreeView")," directory."),Object(a.b)("h3",null,"CSS Modules"),Object(a.b)("p",null,"You don’t need to prefix your classes as CSS Modules will generate unique class names for you. Import the class from the ",Object(a.b)("inlineCode",{parentName:"p"},".scss")," file."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-scss",metastring:"path=TreeView.module.scss",path:"TreeView.module.scss"}),".treeView {\n  color: $text-01;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import { treeView } from './style.css';\n\nconst TreeView = props => <div className={treeView} />;\n")),Object(a.b)("p",null,"For conditionally applying class names, use the ",Object(a.b)("inlineCode",{parentName:"p"},"classname")," library. Note how we’re using a ",Object(a.b)("a",r({parentName:"p"},{href:"https://tylermcginnis.com/computed-property-names/"}),"computed property name")," for the property being based to ",Object(a.b)("inlineCode",{parentName:"p"},"cx"),". That’s because the className isn’t literally ",Object(a.b)("inlineCode",{parentName:"p"},'"long"')," it’s a value generated by CSS Modules and placed in the ",Object(a.b)("inlineCode",{parentName:"p"},"long")," variable."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"}),"import cx from 'classname';\nimport { treeView, long } from './style.css';\n\nconst TreeView = props => {\n  const className = cx(treeView, {\n    [long]: props.long,\n  });\n  const TreeView = props => <div className={className} />;\n};\n")),Object(a.b)("p",null,"If you need to target a global class not processed by CSS Modules, you can do so with the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/css-modules/css-modules#exceptions"}),"global selector"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-scss"}),":global(.bx--grid) .codeBlock {\n  @include carbon--type-style('code-01');\n}\n")),Object(a.b)("h2",null,"VS Code"),Object(a.b)("p",null,"To get linting error feedback while writing javascript and SCSS in VS Code, install the ",Object(a.b)("a",r({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint"}),"stylelint")," and ",Object(a.b)("a",r({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}),"ESlint")," extensions. We use ESLint’s Prettier rules to format and lint all of our JavaScript in one pass. To get your code to format properly on save, add the following to a ",Object(a.b)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the root of your project"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/settings.json",path:".vscode/settings.json"}),'{\n  "editor.formatOnSave": true,\n  "[javascript]": {\n    "editor.formatOnSave": false\n  },\n  "[javascriptreact]": {\n    "editor.formatOnSave": false\n  },\n  "eslint.autoFixOnSave": true,\n  "prettier.disableLanguages": ["javascript", "javascriptreact"]\n}\n')),Object(a.b)("p",null,"To lint the entire project and get errors in your ",Object(a.b)("inlineCode",{parentName:"p"},"Problems")," tray, you can add the following to a ",Object(a.b)("inlineCode",{parentName:"p"},".vscode/tasks.json")," file in the root of your project. You can run these tasks with ",Object(a.b)("inlineCode",{parentName:"p"},"cmd+shift+d")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json",metastring:"path=.vscode/tasks.json",path:".vscode/tasks.json"}),'{\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "lint:js",\n      "problemMatcher": "$eslint-stylish"\n    },\n    {\n      "type": "npm",\n      "script": "lint:scss",\n      "problemMatcher": {\n        "owner": "stylelint",\n        "fileLocation": ["relative", "${workspaceFolder}"],\n        "pattern": [\n          {\n            "regexp": "^([^\\\\s].*)$",\n            "file": 1\n          },\n          {\n            "regexp": "^\\\\s+(\\\\d+):(\\\\d+)\\\\s+(✖|warning)\\\\s+(.*)\\\\s\\\\s+(.*)$",\n            "line": 1,\n            "column": 2,\n            "severity": 3,\n            "message": 4,\n            "code": 5,\n            "loop": true\n          }\n        ]\n      }\n    }\n  ]\n}\n')),Object(a.b)("h2",null,"Test pages"),Object(a.b)("p",null,"If you want to add examples of what you are working on or see changes you’ve made, you can add an MDX file to ",Object(a.b)("inlineCode",{parentName:"p"},"packages/src/pages/test")," that will be visible at ",Object(a.b)("inlineCode",{parentName:"p"},"(your-server-name)/test/(added-file)")," during development. If you do add a page to the ",Object(a.b)("inlineCode",{parentName:"p"},"/test")," directory, update the below list with the file you added and its purpose to be included with your pull request."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"/demohub/cp4mcm20-skytap/test/spacing-audit"}),Object(a.b)("inlineCode",{parentName:"a"},"Spacing audit")),": use this page to test spacing around components when combined in common patterns.")),Object(a.b)("h2",null,"Publishing"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"figure out if it’s patch or feature"),Object(a.b)("li",{parentName:"ol"},"from the root of the package run ",Object(a.b)("inlineCode",{parentName:"li"},"lerna publish patch")," or ",Object(a.b)("inlineCode",{parentName:"li"},"lerna publish minor")),Object(a.b)("li",{parentName:"ol"},"git push upstream master —follow-tags"),Object(a.b)("li",{parentName:"ol"},"In the project’s ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/releases"}),"release tab"),", edit the new release to include a summary of new changes")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contributions-mdx-d6c6779a51b07a4fbb01.js.map