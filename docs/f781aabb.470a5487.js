(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(112)),c=["components"],l={id:"functions",title:" ",sidebar_label:"Server side functions",slug:"/javascript-clojurescript/functions"},o={unversionedId:"javascript-clojurescript/functions",id:"javascript-clojurescript/functions",isDocsHomePage:!1,title:" ",description:"Functions without dependencies",source:"@site/docs/javascript-clojurescript/functions.md",slug:"/javascript-clojurescript/functions",permalink:"/cmql-core/docs/javascript-clojurescript/functions",version:"current",sidebar_label:"Server side functions",sidebar:"someSidebar",previous:{title:" ",permalink:"/cmql-core/docs/javascript-clojurescript/javascript"},next:{title:" ",permalink:"/cmql-core/docs/encodedecode/intro"}},s=[{value:"Functions without dependencies",id:"functions-without-dependencies",children:[]},{value:"Function dependencies",id:"function-dependencies",children:[]},{value:"Directory structure",id:"directory-structure",children:[]},{value:"Use JS",id:"use-js",children:[]},{value:"cMQL wrappers",id:"cmql-wrappers",children:[]},{value:"Clojurescript like language",id:"clojurescript-like-language",children:[]},{value:"Perfomance",id:"perfomance",children:[]},{value:"Summary",id:"summary",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"functions-without-dependencies"},"Functions without dependencies"),Object(i.b)("p",null,"cMQL provide 3 aways to write Javascript in cMQL like way  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"js functions"),Object(i.b)("li",{parentName:"ul"},"cMQL wrappers    "),Object(i.b)("li",{parentName:"ul"},"Clojure like language(Wisp)  ")),Object(i.b)("p",null,"When we need to combine some javascript calls we use cMQL wrappers.",Object(i.b)("br",{parentName:"p"}),"\n","When we need more advanced features like loops,map,filter etc we use wisp.  "),Object(i.b)("h2",{id:"function-dependencies"},"Function dependencies"),Object(i.b)("p",null,"No matter which way it will be used cMQL allows functions to have functions dependencies.\nWe can't use dependencies,but cMQL provides a way to write functions and if we say what\nother functions they need,cMQL will auto-combine them.  "),Object(i.b)("p",null,"For example if f3 depends on f1 f2,f2 depends on f1,and f1 doesn't have any dependency."),Object(i.b)("p",null,"We make 5 files (inside js/lib)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"f1.js (with the code)    "),Object(i.b)("li",{parentName:"ul"},"f2.js",Object(i.b)("br",{parentName:"li"}),"f2.deps ","[f1]"," (will contain 1 vector only with the dependencies)  "),Object(i.b)("li",{parentName:"ul"},"f3.js",Object(i.b)("br",{parentName:"li"}),"f3.deps ","[f2 f1]"," (order is not important,cMQL will find that we need f1 first)   ")),Object(i.b)("p",null,"cMQL will produce this standalone code js/f3.js  (f1 code is only in f3 body not in f2 also)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"function f3() \n{\n  var f1=function f1(){...}\n  var f2=function f2(){...calls-f1...}\n  ...f3-body...\n  }\n")),Object(i.b)("p",null,"This is done automatically,the user only gives the body of a function\nand 1 vector with its dependencies(if it has any)."),Object(i.b)("h2",{id:"directory-structure"},"Directory structure"),Object(i.b)("p",null,"For now a standard folder structure is needed.",Object(i.b)("br",{parentName:"p"}),"\n","We place it in the project folder,or the folder that the standalone.jar is  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83d\udcc1 js  ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ud83d\udcc1 core    "),Object(i.b)("li",{parentName:"ul"},"\ud83d\udcc1 library (optional libraries)"),Object(i.b)("li",{parentName:"ul"},"...stand-alone-functions....")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Important"),"\nRun the code with leinengen,if you use Intellijea go to run options.",Object(i.b)("br",{parentName:"p"}),"\n","Else the working directory will be different and cMQL will not be able to find the files.  "),Object(i.b)("h4",{id:"jscore"},"js/core"),Object(i.b)("p",null,"for internal use only,it contains the wisp core language."),Object(i.b)("h4",{id:"jslibrary"},"js/library"),Object(i.b)("p",null,"we put there our javascript functions 1 function/js file or wisp functions 1 function/wisp file  "),Object(i.b)("p",null,"Our function f1 for example should have"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"f1.js"),Object(i.b)("li",{parentName:"ul"},"f1.deps optional (a vector with the names of the other function it needs)")),Object(i.b)("p",null,"Even if the function has no dependencies(its standalone),still put it in library,\nso some other function can use it.  "),Object(i.b)("p",null,"Before using a function that exists in the library do"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"(compile-functions :f1 :f2 ...)\n")),Object(i.b)("p",null,"And f1.js f2.js will appear as standalone function in the js/"),Object(i.b)("h4",{id:"js"},"js/"),Object(i.b)("p",null,"For auto-generated standalone functions.",Object(i.b)("br",{parentName:"p"}),"\n","We can put js functions there also,but dont do it,unless the function is standalone,\nand you dont want to use it as a library to other function.   "),Object(i.b)("h2",{id:"use-js"},"Use JS"),Object(i.b)("p",null,"How to use JS from cMQL.    "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create for example 1 js function and save it in js/lib/assoc_js.js",Object(i.b)("br",{parentName:"p"}),"\n","if it has dependencies add also a js/lib/assoc_js.deps (with the dependencies vector)        ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Compile it",Object(i.b)("br",{parentName:"p"}),"\n","Always put your code in js/lib and compile before use",Object(i.b)("br",{parentName:"p"}),"\n","(compile :assoc_js)",Object(i.b)("br",{parentName:"p"}),"\n","After complile 1 standalone functions will be created js/assoc_js.js  ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use it",Object(i.b)("br",{parentName:"p"}),"\n","(ejs :assoc_js ","[arg1 arg2 ...]",")  "),Object(i.b)("p",{parentName:"li"},"ejs is like the $function aggregate operator   "))),Object(i.b)("h2",{id:"cmql-wrappers"},"cMQL wrappers"),Object(i.b)("p",null,"This is the first and simple way to write cMQL like code,even if we call javascript."),Object(i.b)("p",null,"How it works   "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"create small javascript functions    "),Object(i.b)("li",{parentName:"ul"},"wrap them with cMQL    "),Object(i.b)("li",{parentName:"ul"},"nest them to make more complicated code ")),Object(i.b)("p",null,"We still write small javascript functions,but the code looks like cMQL code   "),Object(i.b)("p",null,"cMQL optimizes the nested calls and allow them to be fast",Object(i.b)("br",{parentName:"p"}),"\n","For example even if we nest 10 $function calls,cMQL will generate only 1 to run on the server\nFrom benchmarks that can help like 3x compared to sending the 10 nested function to server directly "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"How to use")," "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create for example 2 js functions and save them in js/lib"),Object(i.b)("p",{parentName:"li"}," js/lib/assocjs.js"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"function assoc_js(o, k, v) \n{ \n o[k]=v;\n return o;\n}\n")),Object(i.b)("p",{parentName:"li"}," js/lib/dissocjs.js "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"function dissoc_js(obj,k)\n{\n delete obj[k];\n return obj;\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create 2 wrappers for them (optional) "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"(defn assocjs [m k v]\n  (njs :assocjs [m k v]))\n\n(defn dissocjs [m k]\n  (njs :dissocjs [m k]))\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Execute them,nest them in any way,and run them,for example"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"  (ejs (dissocjs (assocjs (assocjs :mydoc 'e' 5) 'f' 6) 'f'))\n")),Object(i.b)("p",{parentName:"li"},"The last ejs will make 1 function from the 3 nested ones.",Object(i.b)("br",{parentName:"p"}),"\n","For MongoDB will be 1 $function operator with 1 js function making it fast.",Object(i.b)("br",{parentName:"p"}),"\n","We can nest ejs also,without the use of njs,but when tested it was 2x slower.  ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you dont want to create the wrappers you can still use njs for example\nBut its hard even for 3 levels,and doesnt look Clojure like function calls"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},'(ejs (njs :dissocjs\n          [(njs :assocjs\n                [(njs :assocjs\n                     [:mydoc "e" 5])\n                  "f" 6]])\n          "f"]))\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"How it works internally\ncMQL will find the f1,f2 js code,and will produce 1 function"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-text"},"(f1 (f2 arg1 arg2) arg3)\n\n//will generate\n\nfunction (arg1,arg2,arg3)\n{\n   f2=code_of_f2;\n   //and then call the nested function\n   return f1(f2(arg1,arg2),arg3);\n}\n")),Object(i.b)("p",{parentName:"li"},"This can be done for many functions,up to many nested levels not only 2  "))),Object(i.b)("h2",{id:"clojurescript-like-language"},"Clojurescript like language"),Object(i.b)("p",null,"The above method works if we want to combine some functions,but if\nwe need more complicated things like loops etc,this approach is better."),Object(i.b)("p",null,"cMQL uses compiles wisp to js(using wisp compiler)  "),Object(i.b)("p",null,"Install wisp,so cMQL can use it internally  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"npm install wisp -g   ")),Object(i.b)("h4",{id:"how-to-use"},"How to use"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Write the wisp function"),Object(i.b)("p",{parentName:"li"},"Create a file  js/lib/f1.wisp for example (write Clojurescript like wisp code)",Object(i.b)("br",{parentName:"p"}),"\n","If it has dependencies create also f1.deps file with the dependencies vector like before.  "),Object(i.b)("p",{parentName:"li"},"(compile-functions :f1)"),Object(i.b)("p",{parentName:"li"},"js/lib/f1.js will appear (not standalone)\njs/f1.js will appear (standalone) "),Object(i.b)("p",{parentName:"li"},"cMQL will run the js/f1.js , when i use it for example in (ejs :f1 ...)",Object(i.b)("br",{parentName:"p"}),"\n","No need to do anything else   "))),Object(i.b)("h2",{id:"perfomance"},"Perfomance"),Object(i.b)("p",null,"Results are based on very simple benchmark just to get a general idea.",Object(i.b)("br",{parentName:"p"}),"\n","They are not to be trusted,but it seems that both the cMQL wrappers and wisp are usable.  "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Cost of Javascript",Object(i.b)("br",{parentName:"li"}),"Javascript is at least 2x slower than native aggregate operators",Object(i.b)("br",{parentName:"li"}),"Javascript is supposed to be used only if aggregation framework cannot be used  "),Object(i.b)("li",{parentName:"ol"},"Cost of wrappers",Object(i.b)("br",{parentName:"li"}),"1x-1.3x",Object(i.b)("br",{parentName:"li"}),"1.3x is for 10 levels of nesting    "),Object(i.b)("li",{parentName:"ol"},"Cost of wisp",Object(i.b)("br",{parentName:"li"}),"generated code ~1.2x slower from hand-written",Object(i.b)("br",{parentName:"li"}),"because we need the core also,we go to 2x-3x slower",Object(i.b)("br",{parentName:"li"}),'(2x is only for the "optimized core",that looks more like javascript)          ')),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use MQL unless no solution or no fast solution in MQL      "),Object(i.b)("li",{parentName:"ul"},"Use wrappers and nest code to make more complex code       "),Object(i.b)("li",{parentName:"ul"},"If you need more advanced features like loops use wisp or javascript   ")))}p.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),j=a,d=p["".concat(c,".").concat(j)]||p[j]||u[j]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);