"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9913],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9883:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={slug:"/file-formats/gr2",title:"GR2 Format Specification"},s=void 0,c={unversionedId:"file-formats/GR2",id:"file-formats/GR2",title:"GR2 Format Specification",description:"This document describes the GR2 file format used in the Ragnarok Online client.",source:"@site/docs/file-formats/GR2.md",sourceDirName:"file-formats",slug:"/file-formats/gr2",permalink:"/file-formats/gr2",editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/file-formats/GR2.md",tags:[],version:"current",frontMatter:{slug:"/file-formats/gr2",title:"GR2 Format Specification"},sidebar:"tutorialSidebar",previous:{title:"GND Format Specification",permalink:"/file-formats/gnd"},next:{title:"GRF Format Specification",permalink:"/file-formats/grf"}},p={},m=[{value:"Contents",id:"contents",level:2},{value:"Layout",id:"layout",level:2},{value:"Oodle Compression",id:"oodle-compression",level:2},{value:"See also",id:"see-also",level:2}],u={toc:m};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes the GR2 file format used in the Ragnarok Online client."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("p",null,"GR2 files are binary data stores created by the proprietary ",(0,a.kt)("a",{parentName:"p",href:"http://www.radgametools.com/granny.html"},"Granny3D")," SDK. They contain the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3D mesh geometry and textures for the WoE guardians, emperium, treasure box, and guild flag"),(0,a.kt)("li",{parentName:"ul"},"Skeletons and pose animations for the above models (in separate files, one per model and pose)"),(0,a.kt)("li",{parentName:"ul"},"Some leftover (unfinished) data for a potential 3D Novice-class player character")),(0,a.kt)("p",null,"Although the format is widely used in the games industry, only the specific version used in RO is referenced here."),(0,a.kt)("h2",{id:"layout"},"Layout"),(0,a.kt)("p",null,"The layout is quite complex and has been described elsewhere:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A great description is found at the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/arves100/opengr2/wiki/File-Format-documentation"},"OpenGR2 wiki"),", which contains many details worth reading"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rdw-archive/RagnarokFileFormats/blob/master/GR2.MD"},"previous version")," of this documentation is still available (warning: may contain inaccuracies and errors)"),(0,a.kt)("li",{parentName:"ul"},"Alternate implementations exist on GitHub, several of which are listed in the above document")),(0,a.kt)("p",null,"As of 2023, there appears to be no third-party implementation that doesn't rely on the ",(0,a.kt)("inlineCode",{parentName:"p"},"granny2.dll")," in at least some way."),(0,a.kt)("h2",{id:"oodle-compression"},"Oodle Compression"),(0,a.kt)("p",null,"This is just a quick correction to the original article, which mentions the use of Huffman tables."),(0,a.kt)("p",null,"According to ",(0,a.kt)("a",{parentName:"p",href:"https://fgiesen.wordpress.com/2022/04/04/entropy-decoding-in-oodle-data-huffman-decoding-on-the-jaguar/#comment-23605"},"this blog comment by Fabian Giesen")," (of RAD), Oodle-0 is actually\nusing a standard ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77"},"Lempel-Ziv-77")," compressor combined with a (presumably adaptive) ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Arithmetic_coding"},"arithmetic encoder"),". Indeed it appears that the compressed GR2 sections are fed into the AE decoder and then the LZ decompressor, though the specifics of how the AE works aren't exactly clear to me."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("p",null,"Here's a few resources that might help with understanding the Oodle decompression:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-wusp/fb98aa28-5cd7-407f-8869-a6cef1ff1ccb"},"Explanation of the LZ77 compression algorithm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go-compression.github.io/"},"The Hitchhiker's Guide to Compression")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marknelson.us/posts/2014/10/19/data-compression-with-arithmetic-coding.html"},"Data Compression With Arithmetic Coding")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Arithmetic_coding"},"Arithmetic coding (Wikipedia)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/@mathematicalmonk/videos"},"Arithmetic coding - Video series on YouTube (by mathematicalmonk)"))))}f.isMDXComponent=!0}}]);