"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[120],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,slug:"/file-formats",title:"Overview"},s=void 0,d={unversionedId:"file-formats/index",id:"file-formats/index",title:"Overview",description:"In this category, you will find a description of the custom file formats that are used in the Ragnarok Online client.",source:"@site/docs/file-formats/01-index.md",sourceDirName:"file-formats",slug:"/file-formats",permalink:"/file-formats",editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/file-formats/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/file-formats",title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/contributing"},next:{title:"GAT Format Specification",permalink:"/file-formats/gat"}},p={},m=[{value:"Target Audience",id:"target-audience",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Units and Data Types",id:"units-and-data-types",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this category, you will find a description of the custom file formats that are used in the Ragnarok Online client."),(0,i.kt)("h2",{id:"target-audience"},"Target Audience"),(0,i.kt)("p",null,"Due to the technical nature of the subject matter, this specification is written under the assumption that you're a programmer or at least have some programming experience. The information provided here will hopefully be interesting to anyone familiar with the game, but if you're not on good terms with basic programming concepts a bit of a learning curve should be expected."),(0,i.kt)("h2",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,"After studying this documentation, you should know the answers to the following questions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What types of files exist in the Ragnarok Online client?"),(0,i.kt)("li",{parentName:"ul"},"What information do they contain and how is it structured?"),(0,i.kt)("li",{parentName:"ul"},'How can the file contents be decoded from their binary format into a raw ("in-memory") representation?')),(0,i.kt)("p",null,"Needless to say, ",(0,i.kt)("strong",{parentName:"p"},"all information is provided for educational purposes only.")),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"This section doesn't cover the rather complex topic of rendering the game world. To learn how the decoded information from within the game's resource files can be transformed into a visual representation, matching what players expect when they think about \"the game\", see ",(0,i.kt)("a",{parentName:"p",href:"/rendering/"},"Rendering"),". For information about the relationship between RO and ",(0,i.kt)("a",{parentName:"p",href:"https://steam-games.org/game/47632/arcturus-the-curse-and-loss-of-divinity/"},"Arcturus"),", browse ",(0,i.kt)("a",{parentName:"p",href:"/arcturus/"},"this category"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You might want to read up on some of the fundamentals of binary encodings, computer graphics, and game development to make best use of this resource. Here's some external links that might help you get started if you aren't already familiar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Binary_file"},"The Wikipedia page on binary files")," describes the basics of working with non-textual file formats"),(0,i.kt)("li",{parentName:"ul"},"Similarly, their ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Endianness"},"article on Endianness")," explains how numbers may be represented in different ways"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://betterexplained.com/articles/understanding-big-and-little-endian-byte-order/"},"Here"),"'s two more explanations ",(0,i.kt)("a",{parentName:"li",href:"https://betterexplained.com/articles/understanding-big-and-little-endian-byte-order/"},"of the same topic"),", with better examples and more background information"),(0,i.kt)("li",{parentName:"ul"},"Finally, another ",(0,i.kt)("a",{parentName:"li",href:"https://betterexplained.com/articles/a-little-diddy-about-binary-file-formats/"},"introduction to binary file formats")," from the above website (for good measure)")),(0,i.kt)("p",null,"You absolutely should have a solid grasp of binary types if you wish to learn about the relatively complex formats that RO uses."),(0,i.kt)("h2",{id:"units-and-data-types"},"Units and Data Types"),(0,i.kt)("p",null,"This specification follows the following conventions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All offsets and field lengths are given in bytes, unless otherwise denoted"),(0,i.kt)("li",{parentName:"ul"},'All numbers are assumed to be stored in "reversed" byte order (little-endian)'),(0,i.kt)("li",{parentName:"ul"},"Boolean values are interpreted as ",(0,i.kt)("inlineCode",{parentName:"li"},"FALSE")," if zero, and ",(0,i.kt)("inlineCode",{parentName:"li"},"TRUE")," otherwise")),(0,i.kt)("p",null,"Here's a list of the atomic data types that you may encounter in the layout tables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Size"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A single byte that is exclusively used to store a boolean flag (",(0,i.kt)("inlineCode",{parentName:"td"},"FALSE")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"TRUE"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"byte")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"8-bit unsigned integer that is used to encode numbers rather than characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ushort")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"16-bit unsigned integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"short")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"16-bit signed integer (in ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Two%27s_complement"},"Two's Complement"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A 32-bit single-precision floating point number, in ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/IEEE_754"},"IEEE 754")," format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"32-bit signed integer (in ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Two%27s_complement"},"Two's Complement"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"32-bit unsigned integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"char")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"An ASCII-encoded fixed-size character of unit length")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Fixed-size, null-terminated, or counted string (as noted in the field's description)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"struct")),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Binary structure of arbitrary size, with a unique layout (will generally be listed separately)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Fixed-size array of structures or values; the exact size depends and may only be implicit")))),(0,i.kt)("p",null,'Please note that in many cases the exact type is unknown and can only be guessed, based on examples found "in the wild".'))}u.isMDXComponent=!0}}]);