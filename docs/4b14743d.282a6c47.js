(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},117:function(e,t,n){"use strict";var a=n(0),r=n(118);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},118:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},119:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(117),l=n(113),c=n(48),i=n.n(c);const s=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:u,groupId:p,className:b}=e,{tabGroupChoices:m,setTabGroupChoices:g}=Object(o.a)(),[f,h]=Object(a.useState)(c),[j,O]=Object(a.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==f&&u.some((t=>t.value===e))&&h(e)}const w=e=>{h(e),null!=p&&g(p,e)},y=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},N=()=>{O(!1)};return Object(a.useEffect)((()=>(window.addEventListener("keydown",v),window.addEventListener("mousedown",N),()=>{window.removeEventListener("keydown",v),window.removeEventListener("mousedown",N)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},b)},u.map((e=>{let{value:t,label:n}=e;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),style:j?{}:{outline:"none"},key:t,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),v(e)},onFocus:()=>w(t),onClick:()=>{w(t),O(!1)},onPointerDown:()=>O(!1)},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===f))[0]))}},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(112)),l=(n(119),n(120),["components"]),c={id:"stages",title:" ",sidebar_label:"Stages",slug:"/cMQL/stages"},i={unversionedId:"cMQL/stages",id:"cMQL/stages",isDocsHomePage:!1,title:" ",description:"Stage operators overview",source:"@site/docs/cMQL/stages.md",slug:"/cMQL/stages",permalink:"/cmql-core/docs/cMQL/stages",version:"current",sidebar_label:"Stages",sidebar:"someSidebar",previous:{title:" ",permalink:"/cmql-core/docs/cMQL/operators"},next:{title:" ",permalink:"/cmql-core/docs/cMQL/arguments"}},s=[{value:"Stage operators overview",id:"stage-operators-overview",children:[]},{value:"match",id:"match",children:[]},{value:"project",id:"project",children:[]},{value:"addFields",id:"addfields",children:[]},{value:"lookup",id:"lookup",children:[]},{value:"Join",id:"join",children:[]},{value:"group",id:"group",children:[]},{value:"merge",id:"merge",children:[]},{value:"Nested stages,empty stages",id:"nested-stagesempty-stages",children:[]}],d={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"stage-operators-overview"},Object(o.b)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/"},"Stage operators overview")),Object(o.b)("p",null,"cMQL supports all aggregation stages ","[see the API]",Object(o.b)("br",{parentName:"p"}),"\n","Bellow are only some of them"),Object(o.b)("h3",{id:"match"},Object(o.b)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/match/"},"match")),Object(o.b)("p",null,':age is a field reference ,will become "$age"'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Text"},'(q :testdb.testcoll\n  (>_ :age 20)\n  (=_ :gender "male"))\n')),Object(o.b)("p",null,"*Both will become one match stage with $and and $expr"),Object(o.b)("h3",{id:"project"},Object(o.b)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/project/"},"project")),Object(o.b)("p",null,"Project with addFields []"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'(q :testdb.testcoll\n   [:!_id :name :age {:blond (= :hairColor "blond")}])\n')),Object(o.b)("p",null,'Project of MQL has a "weird" behaviour,when we add new field,that exists',Object(o.b)("br",{parentName:"p"}),"\n","Replaces always except  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"array-> add document => array with all members that document")),Object(o.b)("p",null,"If you want to replace an array field with a document field use this notation\n(! is like remove the field,first and then add it)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"{:!myfield adocument}\n")),Object(o.b)("p",null,"Something else important is the use of literal when added new fields with number values"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"{:myfield (literal 2)}  ;;if only 2 it will not add field,just keep the :myfield if it exists\n")),Object(o.b)("h3",{id:"addfields"},Object(o.b)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/"},"addFields")),Object(o.b)("p",null,"AddFields {}"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'(q :testdb.testcoll\n   {:maleStudent (and (= :gender "male") (= :type "student"))\n    :femaleStudent (and (= :gender "female") (= :type "student"))})\n')),Object(o.b)("p",null,'AddFields of MQL has a "weird" behaviour,when we add new field,that exists  '),Object(o.b)("p",null,"Replace always except  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"array-> add document => array with all members that document"),Object(o.b)("li",{parentName:"ul"},"document-> add document => merge documents")),Object(o.b)("p",null,"If you want to replace even if you do the above 2 use the !"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"{:!myfield adocument}\n")),Object(o.b)("h3",{id:"lookup"},Object(o.b)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/"},"lookup")),Object(o.b)("p",null,"Lookup,merge when equal on the join field"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"(lookip :a :acoll.e :ajoined) ; join if :a value == :e value on ajoined field\n")),Object(o.b)("p",null,"Lookup with pipeline to allow more join creteria(not just equality on 2 field)\nalso the pipeline allows the joined doc to have any shape (not just merge)\n:ajoined will be an array with the result of the pipeline"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"(lookup-p :coll2\n          [:v1- :afield ...] ; optional\n          [stage1\n           stage2]\n          :ajoined)\n")),Object(o.b)("h3",{id:"join"},"Join"),Object(o.b)("p",null,"This is exactly like SQL join\nInternally is $lookup $unwind and $replaceRoot"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Text"},"(q :testdb.testcoll\n   (join :songs.songid))   ; assumes join on songid\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Text"},"(q :testdb.testcoll\n   (join :songn :songs.songid))   ; join if songn==songid\n")),Object(o.b)("h3",{id:"group"},Object(o.b)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/group/"},"group")),Object(o.b)("p",null,"In this grouping :_id will be renamed to :songid"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"(group :songid\n       {\n        :points (sum- :points)\n        :views (sum- :views)\n        :dates (conj- :date)\n        })\n")),Object(o.b)("h3",{id:"merge"},Object(o.b)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/merge/"},"merge")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Text"},"(merge :mydb.mycoll)\n\n(merge :mydb.mycoll                ;;no variables used\n       (if-match [field1 fied2]    ;;becomes  :on [field1 field2]\n         whenMatched            ;;can also be pipeline\n         whenNoMatched))\n\n(merge :mydb.mycoll\n       (if-match [field1 fied2]\n         (let- [:v1- :f1 :v2- :f2 ...] ; to refer pipeline doc fields\n           whenMatched     ;;can also be pipeline\n           whenNoMatced)))\n\nwhenMatched\n replace      (keep pipelines)\n keepExisting (keep collections)\n merge   (merge old+new document ,like mergeObjects)\n fail    (stops in the middle if happen,no rollback)\n pipeline(used like update pipepline =>,i can use only\n          $addFields=$set  $project=$unset $replaceRoot=$replaceWith)\n\nwhenNotMatched\n insert  (insert pipelines)\n discard (ignore pipelines)\n fail (if pipeline has ane not match fail,but no rollback)\n")),Object(o.b)("h3",{id:"nested-stagesempty-stages"},"Nested stages,empty stages"),Object(o.b)("p",null,"cMQL allows nested stages that flattens, nil and empty stages that ignores."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"(def x? false)\n(defn f [] [stage2 stage3])\n\n(q :testdb.testcoll\n    (if x? stage1)\n    (f))\n\nPipeline will become [stage2 stage3]  (nil removed,stages flatten)    \nIt will run as if it was  \n\n(q :testdb.testcoll\n   stage2\n   stage3)\n")))}u.isMDXComponent=!0}}]);