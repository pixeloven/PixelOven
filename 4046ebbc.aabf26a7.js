(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(10),o=(n(0),n(166)),c={id:"cli-core-document",title:"PixelOven.Document"},i={id:"api/cli-core-document",title:"PixelOven.Document",description:"## Overview",source:"@site/docs/api/cli-core-document.mdx",permalink:"/docs/api/cli-core-document",editUrl:"https://github.com/pixeloven/pixeloven/tree/master/docusaurus/docs/docs/api/cli-core-document.mdx",lastUpdatedBy:"Brian Gebel",lastUpdatedAt:1581439077,sidebar:"docs",previous:{title:"PixelOven.Delete",permalink:"/docs/api/cli-core-delete"},next:{title:"PixelOven.Lint",permalink:"/docs/api/cli-core-lint"}},l=[{value:"Overview",id:"overview",children:[]},{value:"TypeScript",id:"typescript",children:[{value:"Options",id:"options",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Usage",id:"usage",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTICE: This feature will be removed from the core cli and become an addon in a future update.")),Object(o.b)("p",null,"Document is a wrapper for type doc and is therefore dependent on TypeScript. As such it follows a similar pattern as our own ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#compile"}),"Compile")," cmd."),Object(o.b)("h2",{id:"typescript"},"TypeScript"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It is important to note that currently this feature expects both a ",Object(o.b)("strong",{parentName:"p"},"tsconfig.json")," and ",Object(o.b)("strong",{parentName:"p"},"typedoc.json")," file to be present at the root of the package for TypeDoc to run.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ts")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A proxy for the TypeDoc API with a few opinionated defaults for easier setup.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"tsx")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An alias for ",Object(o.b)("inlineCode",{parentName:"td"},"ts"),". Implemented to help differentiate JSX based projects.")))),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("p",null,"For reference on all the available options please review the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://typedoc.org/"}),"official documentation")," for TypeDoc."),Object(o.b)("h3",{id:"setup"},"Setup"),Object(o.b)("p",null,"First be sure to create a ",Object(o.b)("strong",{parentName:"p"},"tsconfig.json")," file at the root of the project or in other words adjacent to the ",Object(o.b)("strong",{parentName:"p"},"package.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "compilerOptions": {\n        "rootDir": "./src",\n        "declarationDir": "./dist/types",\n        "outDir": "./dist/lib"\n    }\n}\n')),Object(o.b)("p",null,"Second make sure to have a configuration file for TypeDoc like seen below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "@project/name",\n    "target": "es5",\n    "out": "docs",\n    "exclude": "*.{test}.{ts}",\n    "externalPattern": "**/node_modules/**",\n    "excludeExternals": true,\n    "includeDeclarations": true\n}\n')),Object(o.b)("p",null,"The above configuration files are not exhaustive examples but instead represents our recommendation for getting started. Please review the official documentation for more advanced configurations."),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Once configured we can create our documentation from our source using a cmd similar what you see below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven document ts ./src\n")))}b.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(m,i({ref:t},p,{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);