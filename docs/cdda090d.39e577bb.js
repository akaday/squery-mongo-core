(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||c;return r?a.a.createElement(d,o(o({ref:t},i),{},{components:r})):a.a.createElement(d,o({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<c;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(6),c=(r(0),r(112)),l=["components"],o={id:"cmql-js",title:" ",sidebar_label:"cmql-js",slug:"/api/cmql-js"},s={unversionedId:"api/cmql-js",id:"api/cmql-js",isDocsHomePage:!1,title:" ",description:"cMQL parts APIs",source:"@site/docs/api/cmql-js.md",slug:"/api/cmql-js",permalink:"/cmql-core/docs/api/cmql-js",version:"current",sidebar_label:"cmql-js",sidebar:"someSidebar",previous:{title:" ",permalink:"/cmql-core/docs/api/cmql-j"},next:{title:" ",permalink:"/cmql-core/docs/javascript-clojurescript/javascript"}},i=[{value:"cMQL parts APIs",id:"cmql-parts-apis",children:[]},{value:"Lein dependencies",id:"lein-dependencies",children:[]},{value:"Required namespaces",id:"required-namespaces",children:[]},{value:"cMQL internal namespaces",id:"cmql-internal-namespaces",children:[]},{value:"Cursive",id:"cursive",children:[]}],p={rightToc:i};function m(e){var t=e.components,r=Object(a.a)(e,l);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"cmql-parts-apis"},"cMQL parts APIs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/cmql/index.html"},"cMQL"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/cmql-j/index.html"},"cMQL-j")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/cmql-js/index.html"},"cMQL-js")," ")),Object(c.b)("p",null,"*cmql is the core, written in .cljc files, shared in both cqml-j and cmql-js  "),Object(c.b)("h3",{id:"lein-dependencies"},"Lein dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'[cmql "0.1.0-SNAPSHOT"]')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'[cmql-js "0.1.0-SNAPSHOT"]'),"  ")),Object(c.b)("h3",{id:"required-namespaces"},"Required namespaces"),Object(c.b)("p",null,"cMQL query functions like ",Object(c.b)("inlineCode",{parentName:"p"},"q,fq ...")," creates a local enviroment where all operators/stages are defined.\nThe :use is not allowed in clojurescript, its only used for the IDE, before complile its auto-removed with as script."),Object(c.b)("p",null,"The important cmql ones to see the API are the ",Object(c.b)("inlineCode",{parentName:"p"},"cmql.operators"),"\nThe important cmql-js ones to see the API are the ",Object(c.b)("inlineCode",{parentName:"p"},"cmql-js.commands")," and ",Object(c.b)("inlineCode",{parentName:"p"},"cmql-js.cmql-arguments"),"\ncmql-j and cmql-js have similar namespaces structure."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"(ns clojurescriptapp.example\n  (:use cmql.operators.operators\n        cmql.operators.options\n        cmql.operators.stages)\n  (:require \n    cmql.operators.operators     ;;aggregate operators\n    cmql.operators.stages        ;;aggregate stage operators\n    cmql.operators.options       ;;some command options\n    [cmql-js.commands :refer-macros [q fq insert insert! delete! dq]]\n    [cmql-js.cmql-arguments :refer-macros [p f qf] :refer [o d]]\n    [cmql-js.driver.settings :refer [update-defaults defaults]]\n    [cmql-js.util :refer-macros [golet cmql]]\n    [cmql-js.driver.cursor\n      :refer [c-take-all] :refer-macros [c-take-all! c-print-all!]]\n    [cmql-js.driver.client :refer [create-mongo-client]]\n\n    [cljs.core.async :refer [go go-loop <! chan close! take!]]\n    [cljs.core.async.interop :refer-macros [<p! ]]]))\n")),Object(c.b)("p",null,"Clojurescript doesn't allow :use, but we need it for the auto-complete of IDE (for example cursive).",Object(c.b)("br",{parentName:"p"}),"\n","A small script calls usecljs.jar that makes the use comment before compile (in all project).",Object(c.b)("br",{parentName:"p"}),"\n","The 2nd line makes it a comment, and the 4th line restores it, this is usedful only while developing.  "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"rm -rf target\njava -jar usecljs-0.1.0-SNAPSHOT-standalone.jar 0\nshadow-cljs compile app\njava -jar usecljs-0.1.0-SNAPSHOT-standalone.jar 1\nnode target/main.js\n")),Object(c.b)("h3",{id:"cmql-internal-namespaces"},"cMQL internal namespaces"),Object(c.b)("p",null,"They are not used from the user directly. "),Object(c.b)("p",null,"Internal important used from from cMQL-j, cMQL-js"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"cmql.read-write"),Object(c.b)("li",{parentName:"ul"},"cmql.administration"),Object(c.b)("li",{parentName:"ul"},"cmql.users"),Object(c.b)("li",{parentName:"ul"},"cmql.roles"),Object(c.b)("li",{parentName:"ul"},"cmql.diagnostic")),Object(c.b)("p",null,"Internal use from cMQL"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"cmql-convert ")),Object(c.b)("h3",{id:"cursive"},"Cursive"),Object(c.b)("p",null,"Cursive provides auto-complete, it also allows us to define how a symbol should be resolved.\nFor example golet is a macro that combines let and go, we can tell cursive to resolve it as let.\nright-click on golet,show-context actions,and resolve as let (helps on showing the un-resolved symbols)\nWe can do the same for if- to resolve it as if, that helps on spacing etc."))}m.isMDXComponent=!0}}]);