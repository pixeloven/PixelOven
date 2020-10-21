(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(86)),c={id:"cli-core-copy",title:"PixelOven.Copy"},i={unversionedId:"api/cli-core-copy",id:"api/cli-core-copy",isDocsHomePage:!1,title:"PixelOven.Copy",description:"Overview",source:"@site/docs/api/cli-core-copy.mdx",slug:"/api/cli-core-copy",permalink:"/docs/api/cli-core-copy",editUrl:"https://github.com/pixeloven/pixeloven/tree/master/docusaurus/docs/docs/api/cli-core-copy.mdx",version:"current",lastUpdatedBy:"Brian Gebel",lastUpdatedAt:1581439077,sidebar:"docs",previous:{title:"PixelOven.Compile",permalink:"/docs/api/cli-core-compile"},next:{title:"PixelOven.Delete",permalink:"/docs/api/cli-core-delete"}},l=[{value:"Overview",id:"overview",children:[]},{value:"By Pattern",id:"by-pattern",children:[{value:"Usage",id:"usage",children:[]}]},{value:"Shortcuts",id:"shortcuts",children:[{value:"Usage",id:"usage-1",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Copy is a utility API that helps copy static assets from src directories into a distribution directory. This can be useful for when developing component libraries that depend on static components throughout the development life cycle."),Object(o.b)("h2",{id:"by-pattern"},"By Pattern"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<source>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"N/A")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Source path directory to copy from")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<dest>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"./disb/lib")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Destination path to copy to")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<pattern>")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"./**/*.{ico,scss,svg}")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Matching pattern for source files")))),Object(o.b)("p",null,"There are three arguments available for copy files. All paths and patterns are relative to where the command is invoked."),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"While source is a required field both dest and the given pattern are not. Source generally is a path but can also be one of a few keywords."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven copy <source> <dest[optional]> <pattern[optional]>\n")),Object(o.b)("p",null,"More information about these ",Object(o.b)("inlineCode",{parentName:"p"},"<source>")," keywords can be found in our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#shortcuts"}),"Shortcuts")," section below."),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"<source>")," is not one of the args from above, ",Object(o.b)("inlineCode",{parentName:"p"},"copy")," will attempt to copy all contents of the source path/file to the provided dest path/file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixeloven copy /work/dir/file.txt /dist/lib/custom/dir/file.txt\n")),Object(o.b)("p",null,"Optionally we can provide a pattern to match specific file types against when copying between two locations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run pixelove copy /work/dir /dist/lib **.tsx\n")),Object(o.b)("p",null,"A common pattern where this might be used is as a post command hook after a compilation step has completed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n    "compile": "pixeloven compile ts",\n    "postcompile": "pixeloven copy src dist/lib **.{scss,jpg}"\n}\n')),Object(o.b)("h2",{id:"shortcuts"},"Shortcuts"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: The shortcuts listed below are based on our own opinions for directory structure. They are provided as a convenience.\n|Argument|Description|\n|---|---|\n|",Object(o.b)("inlineCode",{parentName:"p"},"ico"),"| Copies ",Object(o.b)("inlineCode",{parentName:"p"},".ico")," files |\n|",Object(o.b)("inlineCode",{parentName:"p"},"scss"),"| Copies ",Object(o.b)("inlineCode",{parentName:"p"},".scss")," files |\n|",Object(o.b)("inlineCode",{parentName:"p"},"svg"),"| Copies ",Object(o.b)("inlineCode",{parentName:"p"},".svg")," files |\n|",Object(o.b)("inlineCode",{parentName:"p"},"assets"),"| Functions as an alias for combing all of the above cmds. |")),Object(o.b)("p",null,"All files in all subdirectories relative to where the command is run that have the file extension matching that of the above keywords will be copied to a default ",Object(o.b)("inlineCode",{parentName:"p"},"./disb/lib")," directory. If the source provided is of an existing directory or file path, ",Object(o.b)("inlineCode",{parentName:"p"},"copy")," will attempt to copy all ",Object(o.b)("em",{parentName:"p"},"contents")," of the provided source path to a default ",Object(o.b)("inlineCode",{parentName:"p"},"./dist/lib")),Object(o.b)("h3",{id:"usage-1"},"Usage"),Object(o.b)("p",null,"The general pattern for these shortcuts follows the below pattern."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn run pixeloven copy <source>\n")),Object(o.b)("p",null,"A more specific example for copying scss into our distribution directory might look like the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pixeloven copy scss\n")),Object(o.b)("p",null,"As with the more general version a common pattern is to use this as a post command hook."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n    "compile": "pixeloven compile ts",\n    "postcompile": "pixeloven copy assets"\n}\n')))}b.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);