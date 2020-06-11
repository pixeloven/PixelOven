(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(10),o=(n(0),n(175)),i={id:"cli-addon-generators",title:"PixelOven.Generate"},l={id:"api/cli-addon-generators",title:"PixelOven.Generate",description:"This addon features an interactive CLI for generating common project files. The goal of this addon is to reduce the need for repeative boilerplating usually required by developers. Creating new apps, packages, or components within your project doesn't have to be a chore, we've provided generators to lend a hand.",source:"@site/docs/api/cli-addon-generators.mdx",permalink:"/docs/api/cli-addon-generators",editUrl:"https://github.com/pixeloven/pixeloven/tree/master/docusaurus/docs/docs/api/cli-addon-generators.mdx",lastUpdatedBy:"Brian Gebel",lastUpdatedAt:1591915342,sidebar:"docs",previous:{title:"PixelOven.Test",permalink:"/docs/api/cli-core-test"},next:{title:"PixelOven.Story",permalink:"/docs/api/cli-addon-storybook"}},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"Usage",id:"usage",children:[]},{value:"Details",id:"details",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This addon features an interactive CLI for generating common project files. The goal of this addon is to reduce the need for repeative boilerplating usually required by developers. Creating new apps, packages, or components within your project doesn't have to be a chore, we've provided generators to lend a hand."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: This section is a work in progress and should contain basic information for creating and working with generators")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note the current version of this extension only supports react as that is the primary use case for PixelOven. Though our ultimate goal is to provide a more general development platform we want to first nail this subset before conquering others.")),Object(o.b)("p",null,"To install this addon simply run the following with NPM"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev @pixeloven/cli-addon-generators\n")),Object(o.b)("p",null,"or yarn"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @pixeloven/cli-addon-generators\n")),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#cli-pixelovengenerate"}),Object(o.b)("inlineCode",{parentName:"a"},"generate"))),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CLI entry point for interactive project generators.")))),Object(o.b)("p",null,"All arguments and options for this addon are optional. The entire CLI is interactive and provides a more traditional experience for convenience."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<type>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"null")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Shortcuts the first part of the interactive menu.")))),Object(o.b)("p",null,"As mentioned above these types are optional and simply shortcut the first part of the interactive menu. The below types have a a 1:1 relationship with the first part of the interactive menu."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"app")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Starts the interactive menu for creating a new App.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"component")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Starts the interactive menu for generating a React component.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"package")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Starts the interactive menu for creating a new Package.")))),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Providing a type to generate is entirely optional. This argument is provided to help shortcuts the menu for a slightly more customized experience."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven generate <type[optional]>\n")),Object(o.b)("p",null,"To run the full interactive CLI simply run the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven generate\n")),Object(o.b)("p",null,"Finally, here is an example of how you might use these shortcuts to start the component generator."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven generate component\n")),Object(o.b)("h3",{id:"details"},"Details"),Object(o.b)("p",null,"The generators are somewhat opinionated and make a few assumptions about the organization of your project. See the instructions for each individual generator below for specifics."),Object(o.b)("h4",{id:"components"},"Components"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To create a new component, run the ",Object(o.b)("inlineCode",{parentName:"li"},"generate")," command from the root of the host app or package and choose ",Object(o.b)("inlineCode",{parentName:"li"},"Component")," from the selection menu."),Object(o.b)("li",{parentName:"ol"},"Choose the appropriate atomic type for your component. Refer to the component docs to learn more about atomic design and how it's implemented in Pixeloven."),Object(o.b)("li",{parentName:"ol"},"Choose the format of the component, we recommend Functional components if you're using React 16.4.x or later."),Object(o.b)("li",{parentName:"ol"},"Choose to manage state within your component. If you're unsure, choose ",Object(o.b)("inlineCode",{parentName:"li"},"N"),". It's easy enough to add this later if necessary."),Object(o.b)("li",{parentName:"ol"},"Choose to include styles with your component. If you're unsure, choose ",Object(o.b)("inlineCode",{parentName:"li"},"N"),". It's easy enough to add this later if necessary."),Object(o.b)("li",{parentName:"ol"},"Enter a component name following the naming conventions in the contributing docs."),Object(o.b)("li",{parentName:"ol"},"Enter a short description of what your component does. You can expand on the description in the component README."),Object(o.b)("li",{parentName:"ol"},"Enter a namespace for the component if necessary. These are slightly different from app and package namespaces as they're not use for publishing. These namespaces are used to group the components within each app and package within your project. For example of the components within our packages use a ",Object(o.b)("inlineCode",{parentName:"li"},"packages/package-name")," namespace format.")),Object(o.b)("p",null,"Congrats, your brand new component is ready and waiting for you in ",Object(o.b)("inlineCode",{parentName:"p"},"/src/components")," under the directory that matches the atomic type you chose above, ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," into it to get started and view the component docs to learn more."),Object(o.b)("h4",{id:"packages"},"Packages"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To start a new package, run the ",Object(o.b)("inlineCode",{parentName:"li"},"generate")," command from the root of your project and choose ",Object(o.b)("inlineCode",{parentName:"li"},"Package")," from the selection menu."),Object(o.b)("li",{parentName:"ol"},"Enter a package name following the naming conventions in the contributing docs."),Object(o.b)("li",{parentName:"ol"},"Enter a namespace for the package if necessary. Namespaces are useful to discern packages of similar names across registries like NPM. For example all Pixeloven packages are prefixed with a ",Object(o.b)("inlineCode",{parentName:"li"},"@pixeloven")," namespace."),Object(o.b)("li",{parentName:"ol"},"Enter a short description of what your package does. This will be used in the package.json manifest so keep it short. You can expand on the description in the package README."),Object(o.b)("li",{parentName:"ol"},"Enter a license type. This is intentionally left open, there are too many license types available, but we suggest MIT for its comprehensive coverage and standard use across the open source community."),Object(o.b)("li",{parentName:"ol"},"Enter an author name. For projects within a large organization you'll typically want to use the name of the organization or managing team."),Object(o.b)("li",{parentName:"ol"},"Enter an email address for the author. If you publish your project to a public repo this will be public, you've been warned."),Object(o.b)("li",{parentName:"ol"},"Enter a private registry if necessary. If your organization publishes to enterprise NPM or GitHhub packages enter the registry url."),Object(o.b)("li",{parentName:"ol"},"Enter an initial publishing version. We typically use 0.0.1 and let Lerna forward the versions as necessary.")),Object(o.b)("p",null,"Congrats, your brand new package is ready and waiting for you in the ",Object(o.b)("inlineCode",{parentName:"p"},"/packages")," directory, ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," into it to get started and view the packages docs to learn more."),Object(o.b)("h4",{id:"applications"},"Applications"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To start a new app, run the ",Object(o.b)("inlineCode",{parentName:"li"},"generate")," command from the root of your project and choose ",Object(o.b)("inlineCode",{parentName:"li"},"App")," from the selection menu."),Object(o.b)("li",{parentName:"ol"},"Enter an app name following the naming conventions in the contributing docs."),Object(o.b)("li",{parentName:"ol"},"Enter a namespace for the app if necessary. Namespaces are useful to discern apps of similar names across registries like NPM. For example all Pixeloven apps are prefixed with a ",Object(o.b)("inlineCode",{parentName:"li"},"@pixeloven")," namespace."),Object(o.b)("li",{parentName:"ol"},"Enter a short description of what your app does. This will be used in the package.json manifest so keep it short. You can expand on the description in the app README."),Object(o.b)("li",{parentName:"ol"},"Enter a license type. This is intentionally left open, there are too many license types available, but we suggest MIT for its comprehensive coverage and standard use across the open source community."),Object(o.b)("li",{parentName:"ol"},"Enter an author name. For projects within a large organization you'll typically want to use the name of the organization or managing team."),Object(o.b)("li",{parentName:"ol"},"Enter an email address for the author. If you publish your project to a public repo this will be public, you've been warned."),Object(o.b)("li",{parentName:"ol"},"Enter a private registry if necessary. If your organization publishes to enterprise NPM or GitHhub packages enter the registry url."),Object(o.b)("li",{parentName:"ol"},"Enter an initial publishing version. We typically use 0.0.1 and let Lerna forward the versions as necessary.")),Object(o.b)("p",null,"Congrats, your brand new app is ready and waiting for you in the ",Object(o.b)("inlineCode",{parentName:"p"},"/apps")," directory, ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," into it to get started and view the app docs to learn more."))}s.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);