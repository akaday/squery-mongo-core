(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{110:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),l=t(116),r=t(123),c=t(133),m=t(114);var s=function(a){const{metadata:e}=a,{previousPage:t,nextPage:n}=e;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(125);e.default=function(a){const{metadata:e,items:t,sidebar:n}=a,{siteConfig:{title:m}}=Object(l.a)(),{blogDescription:d,blogTitle:p,permalink:v}=e,g="/"===v?m:p;return i.a.createElement(r.a,{title:g,description:d},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(o.a,{sidebar:n})),i.a.createElement("main",{className:"col col--8"},t.map((a=>{let{content:e}=a;return i.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},i.a.createElement(e,null))})),i.a.createElement(s,{metadata:e})))))}}}]);