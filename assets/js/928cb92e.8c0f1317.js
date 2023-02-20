"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[164],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,f=function(e,t){if(null==e)return{};var n,r,f={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(f[n]=e[n]);return f}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(f[n]=e[n])}return f}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var n=e.components,f=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),A=c(n),v=f,p=A["".concat(o,".").concat(v)]||A[v]||d[v]||a;return n?r.createElement(p,i(i({ref:t},s),{},{components:n})):r.createElement(p,i({ref:t},s))}));function v(e,t){var n=arguments,f=t&&t.mdxType;if("string"==typeof e||f){var a=n.length,i=new Array(a);i[0]=A;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:f,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},3431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),f=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,slug:"/game-mechanics/effects/fire-wall",title:"Fire Wall"},o=void 0,c={unversionedId:"game-mechanics/effects/fire-wall",id:"game-mechanics/effects/fire-wall",title:"Fire Wall",description:"Fire Wall is a Mage spell that places several AOE triggers, which can damage and knock back enemies.",source:"@site/docs/game-mechanics/effects/fire-wall.md",sourceDirName:"game-mechanics/effects",slug:"/game-mechanics/effects/fire-wall",permalink:"/game-mechanics/effects/fire-wall",editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/game-mechanics/effects/fire-wall.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/game-mechanics/effects/fire-wall",title:"Fire Wall"},sidebar:"tutorialSidebar",previous:{title:"Skills and Spell Effects",permalink:"/game-mechanics/effects"},next:{title:"Overview",permalink:"/arcturus"}},s={},d=[{value:"Lifecycle",id:"lifecycle",level:2},{value:"Placement Logic",id:"placement-logic",level:2},{value:"Knockback Effect",id:"knockback-effect",level:2},{value:"References",id:"references",level:2}],A={toc:d};function v(e){var t=e.components,l=(0,f.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},A,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Fire Wall is a Mage spell that places several AOE triggers, which can damage and knock back enemies."),(0,a.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,a.kt)("p",null,'A Fire Wall consists of three segments, which are spawned when the spell is cast. These segments seem to exist as independent game actors for the duration of their lifetime. Segments will expire after a fixed time (if still "alive") determined by the skill level.'),(0,a.kt)("p",null,'Each segment carries a number of charges (I like to think of it as "health points"), representing how many hits can be inflicted on enemies that touch the actor. Once all charges are depleted, the segment "dies" and vanishes from the game world.'),(0,a.kt)("p",null,"As noted in ",(0,a.kt)("a",{parentName:"p",href:"/game-mechanics/world-state-updates#server-tick-rate"},"World State Updates"),", the clock speed of the server determines how fast charges can be consumed by enemy hits."),(0,a.kt)("h2",{id:"placement-logic"},"Placement Logic"),(0,a.kt)("p",null,"The placement depends on the direction and length of the displacement vector from caster to target location:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"firewall-placement-diagram.png",src:n(4856).Z,width:"666",height:"343"})),(0,a.kt)("p",null,"Assuming the player stands in the center, the color indicates how segments are placed when cast on the given square:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Casting horizontally or vertically results in a horizontal (or vertical) Fire Wall"),(0,a.kt)("li",{parentName:"ul"},"If cast on the player itself, the result is ",(0,a.kt)("em",{parentName:"li"},"always")," a vertical Fire Wall, with its center placed on top of them"),(0,a.kt)("li",{parentName:"ul"},"Casting diagonally results in a Fire Wall that's perpendicular to the direction that the player is facing")),(0,a.kt)("p",null,'When cast at a distance, the created Fire Walls usually face "outward" from the player (here represented by the red square):'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"firewall-center.png",src:n(4154).Z,width:"253",height:"253"})),(0,a.kt)("p",null,"In the game world, this might look something like this (orange = cast location, red = player):"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"firewall-diagonal.png",src:n(3462).Z,width:"521",height:"472"})),(0,a.kt)("p",null,'By comparison, a "vertical self-cast" would spawn segments in the following pattern:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"firewall-vertical-selfcast.png",src:n(7097).Z,width:"509",height:"504"})),(0,a.kt)("h2",{id:"knockback-effect"},"Knockback Effect"),(0,a.kt)("p",null,"Enemies that touch a segment will be damaged and knocked back. ",(0,a.kt)("strong",{parentName:"p"},"TBD: In which direction exactly?")),(0,a.kt)("p",null,'Since Boss monsters cannot be knocked back, they must fully "consume" the segment before they can pass through.'),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/HerculesWS/Hercules/blob/491048ac5a21a3ec3c114a1cfbdee3e6c00fa44e/src/map/skill.c#L21074-L21105"},"Fire Wall placement in the Hercules emulator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://irowiki.org/wiki/Fire_Wall"},"irowiki entry")," (contains additional information that isn't yet verified)")))}v.isMDXComponent=!0},4154:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAAD9CAIAAAD4V+arAAAALHRFWHRDcmVhdGlvbiBUaW1lAEZyaSAyOSBBcHIgMjAyMiAwNjozNjoxMCArMDEwMOIkOKAAAAAHdElNRQfmBB0FKBQadsOBAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAAzFJREFUeNrt3bGNwlAURUF7U8pwK5RNK5RB7IWlBMTT6p8ZifjJ5gTO7rZBz/78nec5dGzfZ2/NnHre2h63Y+bW5XqffK5V2/iZuQT/iu4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4BGqb3rexAfXxr4d0u+1bwTbqnSPcU6Z4i3VOke4p0T5HuKdI9RbqnSPcU6Z4i3VOke4p0T5HuKdI9RbqnSPcU6Z4i3VOke4p0T5HuKdI9RbqnSPcU6Z4i3VOke4p0T5HuKdI9RboHaHjvW00d24dvTW5OrXpr5tR0G75zKNI9RbqnSPcU6Z4i3VOke4p0T5HuKdI9RbqnSPcU6Z4i3VOke4p0T5HuKdI9RbqnSPcU6Z4i3VOke4p0T5HuKdI9RbqnSPcU6Z4i3VOke4p0T5HuKdI9QMNr3+pxO2aOXa73ZXegZi79/WGrvsPJDn3nUKR7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7gIbXvtXUhNG278O31tyBmr01c2q6Dd85FOmeIt1TpHuKdE+R7inSPUW6p0j3FOmeIt1TpHuKdE+R7inSPUW6p0j3FOmeIt1TpHuKdE+R7inSPUW6p0j3FOmeIt1TpHuKdE+R7inSPUW6p0j3FOkeoOG9bzW3l/S4HTO3Ltf7ultac881+3/NvUPfORTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpHqBhet/KDtSHlt7tsm8F36R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7inRPke4p0j1FuqdI9xTpniLdU6R7gIZfbFCC5NH4QuMAAAAASUVORK5CYII="},3462:function(e,t,n){t.Z=n.p+"assets/images/firewall-diagonal-f28a25297f6d684c96cc5037110ae27e.png"},4856:function(e,t,n){t.Z=n.p+"assets/images/firewall-placement-diagram-5627d35478dd177b7ebcdb0c00ad7bfb.png"},7097:function(e,t){t.Z="data:image/png;base64,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"}}]);