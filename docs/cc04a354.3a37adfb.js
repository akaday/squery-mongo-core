(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||l;return a?r.a.createElement(m,c(c({ref:t},i),{},{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},113:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},117:function(e,t,a){"use strict";var n=a(0),r=a(118);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},118:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},119:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(117),o=a(113),c=a(48),s=a.n(c);const i=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:u,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(l.a)(),[h,v]=Object(n.useState)(c),[O,f]=Object(n.useState)(!1);if(null!=b){const e=m[b];null!=e&&e!==h&&u.some((t=>t.value===e))&&v(e)}const g=e=>{v(e),null!=b&&j(b,e)},w=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||f(!0)},N=()=>{f(!1)};return Object(n.useEffect)((()=>(window.addEventListener("keydown",y),window.addEventListener("mousedown",N),()=>{window.removeEventListener("keydown",y),window.removeEventListener("mousedown",N)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},u.map((e=>{let{value:t,label:a}=e;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),style:O?{}:{outline:"none"},key:t,ref:e=>w.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(w,e.target,e),y(e)},onFocus:()=>g(t),onClick:()=>{g(t),f(!1)},onPointerDown:()=>f(!1)},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((e=>e.props.value===h))[0]))}},120:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),l=(a(0),a(112)),o=a(119),c=a(120),s=["components"],i={id:"javaapp",title:" ",sidebar_label:"Java",slug:"/cmqlapp/javaapp"},p={unversionedId:"cmqlapp/javaapp",id:"cmqlapp/javaapp",isDocsHomePage:!1,title:" ",description:"Why cMQL for Java",source:"@site/docs/cmqlapp/javaapp.md",slug:"/cmqlapp/javaapp",permalink:"/cmql-core/docs/cmqlapp/javaapp",version:"current",sidebar_label:"Java",sidebar:"someSidebar",previous:{title:" ",permalink:"/cmql-core/docs/cqmlapp/intro"},next:{title:" ",permalink:"/cmql-core/docs/cmqlapp/clojureapp"}},u=[{value:"Why cMQL for Java",id:"why-cmql-for-java",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"Examples",id:"examples",children:[{value:"Insert",id:"insert",children:[]},{value:"Aggregate",id:"aggregate",children:[]}]},{value:"Install dependencies",id:"install-dependencies",children:[{value:"Install cMQL",id:"install-cmql",children:[]},{value:"Install clojureapp",id:"install-clojureapp",children:[]}]},{value:"JavaAppMaven",id:"javaappmaven",children:[{value:"Project structure",id:"project-structure",children:[]},{value:"pom.xml",id:"pomxml",children:[]},{value:"cMQL queries as library",id:"cmql-queries-as-library",children:[]},{value:"cMQL queries in maven project",id:"cmql-queries-in-maven-project",children:[]},{value:"Run the project",id:"run-the-project",children:[]}]},{value:"Clojureapp",id:"clojureapp",children:[]}],b={rightToc:u};function d(e){var t=e.components,a=Object(r.a)(e,s);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"why-cmql-for-java"},"Why cMQL for Java"),Object(l.b)("p",null,"General reasons "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"less code up to ",Object(l.b)("strong",{parentName:"li"},"3x")),Object(l.b)("li",{parentName:"ul"},"simple structure  "),Object(l.b)("li",{parentName:"ul"},"simple notation   ")),Object(l.b)("p",null,"Java specific reasons"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"JSON literals"),Object(l.b)("li",{parentName:"ul"},"simple interop ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"call as a normal static java method"),Object(l.b)("li",{parentName:"ul"},"get java objects back")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Java programmers can use")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/cmqltool/generatemql"},"cMQL as a tool")," see also ",Object(l.b)("a",{parentName:"li",href:"www.cmql-live.org"},"cMQL-live"),"  "),Object(l.b)("li",{parentName:"ul"},"call cMQL directly from their Java code  ")),Object(l.b)("p",null,"Here is explained how to use cMQL, to call it from Java code.\nFor more info about cMQL and why is useful see ",Object(l.b)("a",{parentName:"p",href:"/docs/intro/what"},"what?")," and ",Object(l.b)("a",{parentName:"p",href:"/docs/intro/why#comparison"},"why?"),".",Object(l.b)("br",{parentName:"p"}),"\n","Java programmers use ",Object(l.b)("strong",{parentName:"p"},"cMQL-j")),Object(l.b)("h2",{id:"how-to-use"},"How to use"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"write the cMQL queries as seperate project,or add the clojure code inside the java project   "),Object(l.b)("li",{parentName:"ul"},"call them from java    ")),Object(l.b)("p",null,"Its very easy to do clojure is hosted language,its created to run on the JVM",Object(l.b)("br",{parentName:"p"}),"\n","See bellow the JavaAppMaven  "),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("p",null,"Two examples,from the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/mongodb-developer/java-quick-start"},"Java Quick Start")," implemented in cMQL  "),Object(l.b)("h3",{id:"insert"},"Insert"),Object(l.b)("p",null,"cMQL= 540 characters\nJava = 1010 characters ",Object(l.b)("strong",{parentName:"p"},"(~2x)")),Object(l.b)(o.a,{defaultValue:"cMQL",values:[{label:"cMQL",value:"cMQL"},{label:"Java",value:"Java"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"cMQL",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},'(defn generateNewGrade [student-id class-id]\n  {:_id (ObjectId.)\n   :student_id student-id\n   :class_id class-id\n   :scores [{:type "exam" :score (* (.nextDouble random) 100)}\n            {:type "quiz" :score (* (.nextDouble random) 100)}\n            {:type "homework" :score (* (.nextDouble random) 100)}\n            {:type "homework" :score (* (.nextDouble random) 100)}]})\n\n(insert :sample_training.grades (generateNewGrade 10000. 1.))\n(println "One grade inserted for studentId 10000.")\n(insert :sample_training.grades\n        (mapv (fn [n] (generateNewGrade 10001. (double n))) (range 1 11))\n        {:ordered false})\n(println "Ten grades inserted for studentId 10001.")\n'))),Object(l.b)(c.a,{value:"Java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},'Document generateNewGrade(double studentId, double classId) {\n  List<Document> scores;\n  scores = asList(new Document("type", "exam").append("score", rand.nextDouble() * 100),\n                  new Document("type", "quiz").append("score", rand.nextDouble() * 100),\n                  new Document("type", "homework").append("score", rand.nextDouble() * 100),\n                  new Document("type", "homework").append("score", rand.nextDouble() * 100));\n  return new Document("_id", new ObjectId()).append("student_id", studentId)\n                                            .append("class_id", classId)\n                                            .append("scores", scores);\n}\n\nMongoDatabase sampleTrainingDB = mongoClient.getDatabase("sample_training");\nMongoCollection<Document> gradesCollection = sampleTrainingDB.getCollection("grades");\n\ngradesCollection.insertOne(generateNewGrade(10000d, 1d));\nSystem.out.println("One grade inserted for studentId 10000.");\n\nList<Document> grades = new ArrayList<>();\nfor (double classId = 1d; classId <= 10d; classId++) {\n    grades.add(generateNewGrade(10001d, classId));\n}\n\ngradesCollection.insertMany(grades, new InsertManyOptions().ordered(false));\nSystem.out.println("Ten grades inserted for studentId 10001.");\n')))),Object(l.b)("h3",{id:"aggregate"},"Aggregate"),Object(l.b)("p",null,"cMQL = 345 characters",Object(l.b)("br",{parentName:"p"}),"\n","Java Builder = 1106 characters ",Object(l.b)("strong",{parentName:"p"},"(~3x)")),Object(l.b)("p",null,"*Java code can be a bit smaller and go 2.5x,this is the original code from github.  "),Object(l.b)("p",null,"The 2x-3x is the best possible case,if using the supported from Java operators",Object(l.b)("br",{parentName:"p"}),"\n","if operators is not supported(100+ aggregation operators aren't supported) we can go to 4x+  "),Object(l.b)(o.a,{defaultValue:"cMQL",values:[{label:"cMQL",value:"cMQL"},{label:"Java",value:"Java"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"cMQL",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},'(println "==> 3 most densely populated cities in Texas")\n(c-print-all (q :sample_training.zips\n                (= :state "TX")\n                (group :city\n                       {:totalPop (sum :pop)})\n                (sort :!totalPop)\n                (limit 3)))\n  \n(println "==> 3 most popular tags and their posts titles")\n(c-print-all (q :sample_training.posts\n                (unwind :tags)\n                (group :tags\n                       {:count (sum 1)\n                        :titles (conj-each :title)})\n                (sort :!count)\n                (limit 3)\n                [:tags :count :titles]))\n'))),Object(l.b)(c.a,{value:"Java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},'MongoDatabase db = mongoClient.getDatabase("sample_training");\nMongoCollection<Document> zips = db.getCollection("zips");\nMongoCollection<Document> posts = db.getCollection("posts");\n\nBson match = match(eq("state", "TX"));\nBson group = group("$city", sum("totalPop", "$pop"));\nBson project = project(fields(excludeId(), include("totalPop"), computed("city", "$_id")));\nBson sort = sort(descending("totalPop"));\nBson limit = limit(3);\n\nList<Document> results = zips\n                        .aggregate(Arrays.asList(match, group, project, sort, limit))\n                        .into(new ArrayList<>());\nSystem.out.println("==> 3 most densely populated cities in Texas");\nresults.forEach(printDocuments());\n\nprivate static void threeMostPopularTags(MongoCollection<Document> posts) {\nBson unwind = unwind("$tags");\nBson group = group("$tags", sum("count", 1L), push("titles", "$title"));\nBson sort = sort(descending("count"));\nBson limit = limit(3);\nBson project = project(fields(excludeId(), computed("tag", "$_id"),\n                       include("count", "titles")));\n\nList<Document> results = posts\n                         .aggregate(Arrays.asList(unwind, group, sort, limit, project))\n                         .into(new ArrayList<>());\nSystem.out.println("==> 3 most popular tags and their posts titles");\nresults.forEach(printDocuments());\n')))),Object(l.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(l.b)("h3",{id:"install-cmql"},"Install cMQL"),Object(l.b)("p",null,"First ",Object(l.b)("a",{parentName:"p",href:"/docs/cmqlapp/installcmql"},"install cMQL")," do all the steps.   "),Object(l.b)("h3",{id:"install-clojureapp"},"Install clojureapp"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"cd clojureapp\nlein install\n")),Object(l.b)("p",null,"In JavaAppMaven we use cMQL queries with 2 ways"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"queries as maven dependency"),Object(l.b)("li",{parentName:"ol"},"queries written in Clojure inside the maven project")),Object(l.b)("p",null,"We do this step for the first,to use the queries as dependency"),Object(l.b)("h2",{id:"javaappmaven"},"JavaAppMaven"),Object(l.b)("p",null,"Assuming that you have done the stemps in ",Object(l.b)("a",{parentName:"p",href:"docs/install/installcmql"},"install cMQL"),"\nOpen the javaappmavenapp with intellijIdea as a normal maven project.  "),Object(l.b)("h3",{id:"project-structure"},"Project structure"),Object(l.b)("p",null,"2 folders for source code"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Java"),Object(l.b)("li",{parentName:"ul"},"Clojure (we put the cMQL clojure code)")),Object(l.b)("p",null,"Clojure/queries/aggregate_framework.clj"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"example query that we will call from Java code")),Object(l.b)("p",null,"Java/javaapp/quickstart "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"the official ",Object(l.b)("a",{parentName:"li",href:"https://github.com/mongodb-developer/java-quick-start"},"Java Quick Start")," ")),Object(l.b)("p",null,"Java/Main"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"main Java class,that we use to call the queries")),Object(l.b)("p",null,"Java/Queries "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"java static functions that wrap clojure functions\nthis is an example of how to wrap clojure function\nfrom Java (we could do it from clojure code also)")),Object(l.b)("h3",{id:"pomxml"},"pom.xml"),Object(l.b)("p",null,"We have as maven dependency cMQL,cMQL-j and the clojureapp"),Object(l.b)("p",null,"The clojureapp contains the example queries that we will call from\nthe JavaMavenApp"),Object(l.b)("p",null,"We also have add some extra resources for maven to find the clojure code "),Object(l.b)("h3",{id:"cmql-queries-as-library"},"cMQL queries as library"),Object(l.b)("p",null,"Clojure programmer makes the a Clojure project with the cMQL queries.",Object(l.b)("br",{parentName:"p"}),"\n","Java programmers use it as dependency from the maven project.  "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Clojure programmer makes a Clojure project with the cMQL queries\nit can contain clojure and java code"),Object(l.b)("li",{parentName:"ol"},"From clojure makes a java class with methods to call those queries"),Object(l.b)("li",{parentName:"ol"},"install jar as maven dependency\nlein install  "),Object(l.b)("li",{parentName:"ol"},"java user adds the maven depedency in pom.xml"),Object(l.b)("li",{parentName:"ol"},"java user just use this class like normal java class")),Object(l.b)("p",null,"We used this approach in javaappmaven "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"clojureapp is the clojure project\ncontains clojure and java code and we use leiningen as build tool"),Object(l.b)("li",{parentName:"ol"},"clojureapp.interop.quickstart-api  creates this Java class"),Object(l.b)("li",{parentName:"ol"},"we did lein install"),Object(l.b)("li",{parentName:"ol"},"we added in the pom.xml the clojureapp dependency"),Object(l.b)("li",{parentName:"ol"},"we import static clojureapp.interop.Quickstart_api.*;\nand then we called those static methods as normal java static methods")),Object(l.b)("p",null,"Its very easy to use,and its the best approach,keeping the projects seperate",Object(l.b)("br",{parentName:"p"}),"\n","with their own build tools  "),Object(l.b)("p",null,"If the clojure app needs some shared java files,for example some classes we\ncan add java files inside the clojure app that uses leiningen as build tool.\n(clojureapp has a java directory with some classes)"),Object(l.b)("h3",{id:"cmql-queries-in-maven-project"},"cMQL queries in maven project"),Object(l.b)("p",null,"We can also write the cMQL Clojure code,inside the java maven project.  "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"we make a clojure directory to put the cMQL clojure files\nand we edit the the pom.xml (see javaappmaven)"),Object(l.b)("li",{parentName:"ol"},"we write the cMQL code inside the clojure directory"),Object(l.b)("li",{parentName:"ol"},"we make a java wrapper to call the clojure function\n2 lines are needed per clojure function that we call\nsee javaapp/Queries  "),Object(l.b)("li",{parentName:"ol"},"we done with the clojure part,we import static javaapp.Queries.*;\nand we use the static java methods (the wrappers)")),Object(l.b)("p",null,"*to make the wrapper in Clojure(like we did on cMQL library example) we need AOT compilation,\nso here java wrapper was prefered    "),Object(l.b)("h3",{id:"run-the-project"},"Run the project"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Load the data required(see source files for info)"),Object(l.b)("li",{parentName:"ul"},"Run Main.java")),Object(l.b)("p",null,"This project is made to show the way we can use cMQL\nfrom a maven Java project."),Object(l.b)("p",null,"To make a standalone jar for javaappmaven(with all the dependencies)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"mvn clean compile assembly:single\n")),Object(l.b)("h2",{id:"clojureapp"},"Clojureapp"),Object(l.b)("p",null,"In JavaAppMaven was used as how to use cMQL from Java.   "),Object(l.b)("p",null,"To explore cMQL open the clojureapp(its leiningen project) in intellijdea for example\nand run the example namespaces "),Object(l.b)("p",null,"See how to use the ",Object(l.b)("a",{parentName:"p",href:"/docs/cmqlapp/clojureapp"},"Clojureapp")," to run the cMQL examples.     "))}d.isMDXComponent=!0}}]);