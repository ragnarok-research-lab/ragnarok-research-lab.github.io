"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5900],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,N=c["".concat(p,".").concat(k)]||c[k]||s[k]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"/file-formats/gat",title:"GAT Format Specification"},p=void 0,d={unversionedId:"file-formats/GAT",id:"file-formats/GAT",title:"GAT Format Specification",description:"This document describes the GAT file format used in the Ragnarok Online client.",source:"@site/docs/file-formats/GAT.md",sourceDirName:"file-formats",slug:"/file-formats/gat",permalink:"/file-formats/gat",editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/file-formats/GAT.md",tags:[],version:"current",frontMatter:{slug:"/file-formats/gat",title:"GAT Format Specification"},sidebar:"tutorialSidebar",previous:{title:"EZV (Placeholder)",permalink:"/file-formats/ezv"},next:{title:"GND Format Specification",permalink:"/file-formats/gnd"}},m={},s=[{value:"Contents",id:"contents",level:2},{value:"Layout",id:"layout",level:2},{value:"Version 1.2",id:"version-12",level:3},{value:"Tile Properties",id:"tile-properties",level:4},{value:"Terrain Types",id:"terrain-types",level:4},{value:"Version 1.3",id:"version-13",level:3},{value:"References",id:"references",level:2}],c={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes the GAT file format used in the Ragnarok Online client."),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("p",null,"GAT files contain the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Altitude data, encoded as height vectors, for each tile of a map"),(0,i.kt)("li",{parentName:"ul"},"Terrain type flags to identify the terrain on a given tile")),(0,i.kt)("p",null,"The file contents can be interpreted as a 2-dimensional navigation map, similar to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Navigation_mesh"},"3D navigation meshes")," in concept."),(0,i.kt)("h2",{id:"layout"},"Layout"),(0,i.kt)("h3",{id:"version-12"},"Version 1.2"),(0,i.kt)("p",null,"The vast majority of maps in the RO client use this version, including those found in alpha clients (and even ",(0,i.kt)("a",{parentName:"p",href:"/arcturus"},"Arcturus"),")",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Header")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"GRAT"')," as an ASCII-encoded, fixed-size string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"MajorVersion")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"byte")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Versioning information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"MinorVersion")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"byte")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Versioning information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Width")),(0,i.kt)("td",{parentName:"tr",align:"center"},"6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The horizontal size of the map, given in tiles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Height")),(0,i.kt)("td",{parentName:"tr",align:"center"},"10"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The vertical size of the map, given in tiles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Tiles")),(0,i.kt)("td",{parentName:"tr",align:"center"},"14+"),(0,i.kt)("td",{parentName:"tr",align:"center"},"20"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Contains the navigation properties for ",(0,i.kt)("inlineCode",{parentName:"td"},"Width * Height")," tiles")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Technically, old versions have a zero-byte prefix shifting the layout. It's still GAT 1.2 otherwise."),(0,i.kt)("h4",{id:"tile-properties"},"Tile Properties"),(0,i.kt)("p",null,"Each entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tiles"),' array represents a surface block ("tile") of the given map\'s terrain, and is structured as follows:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"SouthWestAltitude")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Altitude at the bottom left corner, i.e., at (0, 0) relative coordinates")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"SouthEastAltitude")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Altitude at the bottom right corner, i.e., at (1, 0) relative coordinates")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"NorthWestAltitude")),(0,i.kt)("td",{parentName:"tr",align:"center"},"8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Altitude at the top left corner, i.e., at (0, 1) relative coordinates")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"NorthEastAltitude")),(0,i.kt)("td",{parentName:"tr",align:"center"},"12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Altitude at the top right corner, i.e., at (1, 1) relative coordinates")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TerrainType")),(0,i.kt)("td",{parentName:"tr",align:"center"},"16"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Identifier for the tile's terrain type")))),(0,i.kt)("h4",{id:"terrain-types"},"Terrain Types"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"More research is needed. If you know anything about the topic, please help fill in the blanks!"))),(0,i.kt)("p",null,"The following terrain types are known to have practical applications:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Walkable"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Interpretation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"YES"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Regular (walkable) terrain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Obstructed (impassable) terrain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,i.kt)("td",{parentName:"tr",align:"center"},'Impassable snipeable terrain ("cliff")')))),(0,i.kt)("p",null,"There are ",(0,i.kt)("a",{parentName:"p",href:"https://openkore.com/wiki/Field_file_format"},"several other terrain types"),", but it's unclear whether they affect clientside collision checks at all."),(0,i.kt)("h3",{id:"version-13"},"Version 1.3"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"More research is needed. If you know anything about the topic, please help fill in the blanks!"))),(0,i.kt)("p",null,"This version adds a twist to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TerrainType")," values: A special flag marks water tiles, though the layout itself hasn't changed. Effectively, two flags are seemingly embedded in the existing terrain type field. Consider the following example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A water tile might use a ",(0,i.kt)("inlineCode",{parentName:"li"},"TerrainType")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," (obstructed), which in GAT 1.2 would be encoded as ",(0,i.kt)("inlineCode",{parentName:"li"},"0x01000000")," (LE ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,i.kt)("li",{parentName:"ul"},"In GAT 1.3, the same",(0,i.kt)("inlineCode",{parentName:"li"},"TerrainType")," property would however be encoded as ",(0,i.kt)("inlineCode",{parentName:"li"},"0x01000080")," (LE ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", value is now ",(0,i.kt)("inlineCode",{parentName:"li"},"-2147483647"),")"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"IsWaterTile")," flag can then be extracted by masking the ",(0,i.kt)("inlineCode",{parentName:"li"},"TerrainType"),", leaving only the ",(0,i.kt)("inlineCode",{parentName:"li"},"0x08")," component (binary: ",(0,i.kt)("inlineCode",{parentName:"li"},"0000 1000"),")")),(0,i.kt)("p",null,"What exactly should be done with that information is unclear, but all water tiles in GAT 1.3 files have been assigned such a flag."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rendering/coordinate-systems"},"Rendering/Coordinate Systems"),' describes the GAT-based coordinate system ("map coordinates")')))}k.isMDXComponent=!0}}]);