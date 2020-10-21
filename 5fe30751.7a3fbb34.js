(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(6),a=(n(0),n(86)),c={id:"react-components",title:"React Components"},i={unversionedId:"recommendations/react-components",id:"recommendations/react-components",isDocsHomePage:!1,title:"React Components",description:"This document is general advice for creating and working with new components.",source:"@site/docs/recommendations/react-components.mdx",slug:"/recommendations/react-components",permalink:"/docs/recommendations/react-components",editUrl:"https://github.com/pixeloven/pixeloven/tree/master/docusaurus/docs/docs/recommendations/react-components.mdx",version:"current",lastUpdatedBy:"Brian Gebel",lastUpdatedAt:1597953156,sidebar:"docs",previous:{title:"Working with libraries",permalink:"/docs/recommendations/working-with-libraries"}},s=[{value:"Referencing source files",id:"referencing-source-files",children:[]},{value:"Supporting files",id:"supporting-files",children:[]},{value:"Connecting a component to state",id:"connecting-a-component-to-state",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document is general advice for creating and working with new components."),Object(a.b)("h2",{id:"referencing-source-files"},"Referencing source files"),Object(a.b)("p",null,"To make referencing source files easier we have set up three simple aliases when working inside an app."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@client")," which points to ",Object(a.b)("inlineCode",{parentName:"li"},"src/client/*")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@server")," which points to ",Object(a.b)("inlineCode",{parentName:"li"},"src/server/*")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@shared")," which points to ",Object(a.b)("inlineCode",{parentName:"li"},"src/shared/*"))),Object(a.b)("p",null,"Example usage would be as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import { Logo } from "@shared/components/atoms/Logo";\n')),Object(a.b)("p",null,"Alternatively we can also create an ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts")," file in the atoms directory and export all of our ",Object(a.b)("strong",{parentName:"p"},"atoms")," allowing us to reference multiple at once."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import { Logo } from "@shared/components/atoms";\n')),Object(a.b)("h2",{id:"supporting-files"},"Supporting files"),Object(a.b)("p",null,"Our components may also contain other important files. For instance this framework supports the use of localized stylesheets with ",Object(a.b)("inlineCode",{parentName:"p"},"Logo.scss"),". It is also highly recommended that all ",Object(a.b)("em",{parentName:"p"},"stories")," be accompanied by a ",Object(a.b)("inlineCode",{parentName:"p"},"README.md")," file to help with development."),Object(a.b)("p",null,"And finally we have our ",Object(a.b)("inlineCode",{parentName:"p"},"index.ts"),". This file should simply export our component for consumption in the general application."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * Register components here\n */\nexport { default as Logo } from "./Logo";\n\n// We may also export the connected version if present\nexport { default as LogoConnected } from "./Logo.connect";\n')),Object(a.b)("h2",{id:"connecting-a-component-to-state"},"Connecting a component to state"),Object(a.b)("p",null,"If this component needs to ",Object(a.b)("em",{parentName:"p"},"connect")," to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," state then it will need the following file(s)."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"Logo.connect.ts\n")),Object(a.b)("p",null,"Here's a simple example of what this file might look like."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const makeMapStateToProps = () => {\n    const mapStateToProps = (state: State, ownProps: OwnProps) => ({\n\n    });\n    return mapStateToProps;\n};\n\nconst mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {\n\n});\n\nconst LogoConnect = connect(\n    makeMapStateToProps,\n    mapDispatchToProps,\n)(Logo);\n\nexport default LogoConnect;\n")),Object(a.b)("p",null,"The reason for this separation is primarily for testability but it also allows us to use a component in multiple contexts (with or without redux). The only reference to a connected component should be with in our route config."))}l.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),b=o,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);