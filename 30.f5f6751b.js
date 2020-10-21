(window.webpackJsonp=window.webpackJsonp||[]).push([[30,31],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(95);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(86),l=n(87),c=n(22),i=n(95),s=n(2),u=n(6),p=n(88),m=n(104),d=n(107),y=n(108),f=n(109),h=n(106),b=n(89),g=n(91),v=n(57),k=n.n(v);var j=function e(t,n){return"link"===t.type?(a=t.href,r=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(a)===o(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,o};function O(e){var t,n,o,l=e.item,c=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),y=l.items,f=l.label,h=j(l,m),b=(n=h,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!h&&l.collapsed)})),v=g[0],O=g[1];Object(a.useEffect)((function(){h&&!b&&v&&O(!1)}),[h,b,v]);var E=Object(a.useCallback)((function(e){e.preventDefault(),O((function(e){return!e}))}),[O]);return 0===y.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[k.a.menuLinkText]=!i,t)),onClick:i?E:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list"},y.map((function(e){return r.a.createElement(C,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:m})}))))}function E(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,i=j(t,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(b.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function C(e){switch(e.item.type){case"category":return r.a.createElement(O,e);case"link":default:return r.a.createElement(E,e)}}var N=function(e){var t,n,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,g=Object(a.useState)(!1),v=g[0],j=g[1],O=Object(l.a)(),E=O.siteConfig,N=(E=void 0===E?{}:E).themeConfig,w=(N=void 0===N?{}:N).navbar,x=(w=void 0===w?{}:w).title,P=void 0===x?"":x,_=w.hideOnScroll,T=void 0!==_&&_,S=O.isClient,L=Object(f.a)(),D=L.logoLink,I=L.logoLinkProps,B=L.logoImageUrl,M=L.logoAlt,A=Object(m.a)().isAnnouncementBarClosed,R=Object(h.a)().scrollY;Object(d.a)(v);var F=Object(y.a)();return Object(a.useEffect)((function(){F===y.b.desktop&&j(!1)}),[F]),r.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=T,t))},T&&r.a.createElement(b.a,Object(s.a)({tabIndex:-1,className:k.a.sidebarLogo,to:D},I),null!=B&&r.a.createElement("img",{key:S,src:B,alt:M}),null!=P&&r.a.createElement("strong",null,P)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":v},n[k.a.menuWithAnnouncementBar]=!A&&0===R,n))},r.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!v)}},v?r.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},w=n(99),x=(n(58),n(59)),P=n.n(x),_=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),c=Object(l.a)().siteConfig,i=(c=void 0===c?{}:c).themeConfig,s=(i=void 0===i?{}:i).navbar,m=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==m&&m;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[P.a.enhancedAnchor]=!d,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},T=n(60),S=n.n(T),L={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(w.a,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(b.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:S.a.mdxCodeBlock},e))},h1:_("h1"),h2:_("h2"),h3:_("h3"),h4:_("h4"),h5:_("h5"),h6:_("h6")},D=n(101),I=n(93),B=n(96),M=n(61),A=n.n(M);function R(e){var t=e.version,n=e.isLast?[t,"latest"]:[t];return r.a.createElement(B.a,null,r.a.createElement("meta",{name:"docsearch:version",content:n.join(",")}))}function F(e){var t,n,a=e.currentDocRoute,c=e.versionMetadata,s=e.children,u=Object(l.a)(),p=u.siteConfig,m=u.isClient,d=c.permalinkToSidebar,y=c.docsSidebars,f=c.version,h=c.isLast,b=y[d[a.path]];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{version:f,isLast:h}),r.a.createElement(i.a,{key:m},r.a.createElement("div",{className:A.a.docPage},b&&r.a.createElement("div",{className:A.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{sidebar:b,path:a.path,sidebarCollapsible:null===(t=null===(n=p.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:A.a.docMainContainer},r.a.createElement(o.a,{components:L},s)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(I.matchPath)(a.pathname,e)}));return o?r.a.createElement(F,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(D.default,e)}},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,c(c({ref:t},s),{},{components:n})):r.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},98:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],l=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=l);for(var c=n;c!=r;c+=l)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},99:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),l=n(88),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(20).a,theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=u({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],y=n[l][o];if("string"==typeof y?(u=l>0?u:["plain"],s=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),s=y.content),"string"==typeof s){var f=s.split(p),h=f.length;c.push({types:u,content:f[0]});for(var b=1;b<h;b++)m(c),i.push(c=[]),c.push({types:u,content:f[b]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return m(c),i}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),b=n(97),g=n.n(b),v=n(98),k=n.n(v),j=n(87),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(92),C=function(){var e=Object(j.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(E.a)().isDarkTheme,a=t.theme||O,r=t.darkTheme||a;return n?r:a},N=n(47),w=n.n(N),x=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},_=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,c=e.metastring,s=Object(j.a)().siteConfig.themeConfig.prism,u=void 0===s?{}:s,p=Object(r.useState)(!1),m=p[0],d=p[1],y=Object(r.useState)(!1),f=y[0],b=y[1];Object(r.useEffect)((function(){b(!0)}),[]);var v=Object(r.useRef)(null),O=[],E="",N=C();if(c&&x.test(c)){var T=c.match(x)[1];O=k.a.parse(T).filter((function(e){return e>0}))}c&&_.test(c)&&(E=c.match(_)[0].split("title=")[1].replace(/"+/g,""));var S=n&&n.replace(/language-/,"");!S&&u.defaultLanguage&&(S=u.defaultLanguage);var L=t.replace(/\n$/,"");if(0===O.length&&void 0!==S){for(var D,I="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(S),M=t.replace(/\n$/,"").split("\n"),A=0;A<M.length;){var R=A+1,F=M[A].match(B);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=R+",";break;case"highlight-start":D=R;break;case"highlight-end":I+=D+"-"+(R-1)+","}M.splice(A,1)}else A+=1}O=k.a.parse(I),L=M.join("\n")}var W=function(){g()(L),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(h,Object(a.a)({},i,{key:String(f),theme:N,code:L,language:S}),(function(e){var t,n,r=e.className,c=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,E&&o.a.createElement("div",{style:c,className:w.a.codeBlockTitle},E),o.a.createElement("div",{className:w.a.codeBlockContent},o.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(w.a.copyButton,(t={},t[w.a.copyButtonWithTitle]=E,t)),onClick:W},m?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(l.a)(r,w.a.codeBlock,(n={},n[w.a.codeBlockWithTitle]=E,n))},o.a.createElement("div",{className:w.a.codeBlockLines,style:c},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return O.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))}}}]);