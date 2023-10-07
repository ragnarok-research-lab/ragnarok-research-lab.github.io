"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2932],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],m={sidebar_position:3,slug:"/game-mechanics/movement",title:"Movement and Pathfinding"},s=void 0,l={unversionedId:"game-mechanics/movement-and-pathfinding",id:"game-mechanics/movement-and-pathfinding",title:"Movement and Pathfinding",description:"This document describes how Ragnarok Online's zone servers implement the movement of ingame actors.",source:"@site/docs/game-mechanics/03-movement-and-pathfinding.md",sourceDirName:"game-mechanics",slug:"/game-mechanics/movement",permalink:"/game-mechanics/movement",editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/game-mechanics/03-movement-and-pathfinding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/game-mechanics/movement",title:"Movement and Pathfinding"},sidebar:"tutorialSidebar",previous:{title:"World State Updates",permalink:"/game-mechanics/world-state-updates"},next:{title:"Creature AI and Skillsets",permalink:"/game-mechanics/creature-ai"}},c={},p=[{value:"Movement Speed",id:"movement-speed",level:2},{value:"Unit of Measurement",id:"unit-of-measurement",level:3},{value:"Examples",id:"examples",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Pathfinding",id:"pathfinding",level:2},{value:"Hit Stun",id:"hit-stun",level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how Ragnarok Online's zone servers implement the movement of ingame actors."),(0,i.kt)("h2",{id:"movement-speed"},"Movement Speed"),(0,i.kt)("p",null,"All actors have a movement speed value that determines how fast they move around the game world."),(0,i.kt)("h3",{id:"unit-of-measurement"},"Unit of Measurement"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section contains unverified information and/or speculation. It may or may not be completely wrong."))),(0,i.kt)("p",null,'Movement speeds are given in the unit of "milliseconds taken to move to the next adjacent tile" (i.e., a distance of one world unit). This should be interpreted as "delay after moving to the next ground tile", since movement happens instantaneously:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"On aegis you move to the target cell instantly, then animate the movement where ","[on]"," emulators you animate first and arrive second")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Source: Kokotewa (no direct link available)")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Creature"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Movement Speed (ms)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Perceived Speed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Red Plant"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Immobile",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," (extremely slow if glitched)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Pupa"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Immobile",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," (very slow if glitched)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Zombie"),(0,i.kt)("td",{parentName:"tr",align:"center"},"400"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Moves slowly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Osiris"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Very fast")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Treasure Box"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cannot move at all")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Immobile creatures can still technically move (at their configured speed), but this is almost certainly a bug."),(0,i.kt)("h3",{id:"statistics"},"Statistics"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section needs a review. The information may be outdated, incomplete, or factually incorrect."))),(0,i.kt)("p",null,"Most creatures appear to use speed values between 150 and 400 ms. Immobile creatures always seem to use 1000 or 2000 ms."),(0,i.kt)("h2",{id:"pathfinding"},"Pathfinding"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is a placeholder. If you know anything about the topic, please help fill it with content!"))),(0,i.kt)("h2",{id:"hit-stun"},"Hit Stun"),(0,i.kt)("p",null,"When damaged, actors usually ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),' cannot move for a brief period of time, effectively "stunning" them when they suffer a "hit". Afterwards, movement commences on the precomputed path unless their position has been altered via knockback effects.'),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," Certain auras, like Endure, can make them immune to this mechanic."))}u.isMDXComponent=!0}}]);