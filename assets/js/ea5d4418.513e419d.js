"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[338],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,N=s["".concat(o,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],d={slug:"/file-formats/grf",title:"GRF Format Specification"},o=void 0,p={unversionedId:"file-formats/GRF",id:"file-formats/GRF",title:"GRF Format Specification",description:"This document describes the GRF file format used in the Ragnarok Online client.",source:"@site/docs/file-formats/GRF.md",sourceDirName:"file-formats",slug:"/file-formats/grf",permalink:"/file-formats/grf",editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/file-formats/GRF.md",tags:[],version:"current",frontMatter:{slug:"/file-formats/grf",title:"GRF Format Specification"},sidebar:"tutorialSidebar",previous:{title:"GR2 (Placeholder)",permalink:"/file-formats/gr2"},next:{title:"IMF (Placeholder)",permalink:"/file-formats/imf"}},m={},c=[{value:"Contents",id:"contents",level:2},{value:"Layout",id:"layout",level:2},{value:"Arcturus (PAK)",id:"arcturus-pak",level:3},{value:"Archive Metadata",id:"archive-metadata",level:4},{value:"File Records",id:"file-records",level:4},{value:"Version 1.2",id:"version-12",level:3},{value:"Version 1.3",id:"version-13",level:3},{value:"Version 2.0",id:"version-20",level:3},{value:"File Table",id:"file-table",level:4},{value:"File Entries",id:"file-entries",level:4},{value:"References",id:"references",level:2}],s={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes the GRF file format used in the Ragnarok Online client."),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("p",null,"GRF files are virtual file system containers not unlike ZIP archives. The main features are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By streaming game assets more efficiently they may help reduce loading times"),(0,i.kt)("li",{parentName:"ul"},"Optional support for multiple data compression and encryption schemes"),(0,i.kt)("li",{parentName:"ul"},"Compressing files greatly reduces the amount of storage space on disk")),(0,i.kt)("p",null,"The GRF format is closely related to PAK files used in Arcturus, which are an earlier implementation of the same concept."),(0,i.kt)("h2",{id:"layout"},"Layout"),(0,i.kt)("h3",{id:"arcturus-pak"},"Arcturus (PAK)"),(0,i.kt)("p",null,"The PAK file format used in Arcturus is nearly identical to early versions of the GRF format."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"StorageBytes")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"blob")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The compressed file records (contents of the archive)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"FileRecords")),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A list of file records describing the compressed byte storage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Footer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ArchiveMetadata")),(0,i.kt)("td",{parentName:"tr",align:"center"},'"Header" containing the location and size of the file records list')))),(0,i.kt)("p",null,"Due to the large size, this structure shouldn't be read into memory. It's listed purely for illustration purposes."),(0,i.kt)("h4",{id:"archive-metadata"},"Archive Metadata"),(0,i.kt)("p",null,"The metadata required for reading file records, located at the end of the file (at offset ",(0,i.kt)("inlineCode",{parentName:"p"},"EOF - sizeof(ArchiveMetadata)"),")."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"StartOffset")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Relative offset (from the start of the file) of the first record")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"NumRecords")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"How many records there are in this archive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"VersionTag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"byte")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Always ",(0,i.kt)("inlineCode",{parentName:"td"},"0x12")," (decimal: ",(0,i.kt)("inlineCode",{parentName:"td"},"18"),")")))),(0,i.kt)("h4",{id:"file-records"},"File Records"),(0,i.kt)("p",null,"Each record describes where in the archive a given file can be found, and what options to pass to the decompressor."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"PathStringSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"byte")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Size of the entry's path name (excluding the null terminator)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"byte")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"1"),' for "file" and ',(0,i.kt)("inlineCode",{parentName:"td"},"2"),' for "directory" (?) - needs more research')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Offset")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Relative offset (from the start of the archive)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"CompressedSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Size of the compressed buffer area for this file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DecompressedSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Size of the entry after decompressing the buffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"FilePath")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Null-terminated C string of size ",(0,i.kt)("inlineCode",{parentName:"td"},"PathStringSize + 1"))))),(0,i.kt)("h3",{id:"version-12"},"Version 1.2"),(0,i.kt)("p",null,"This version has been used in at least the fRO client."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is a placeholder. If you know anything about the topic, please help fill it with content!"))),(0,i.kt)("p",null,"More research is needed on this topic."),(0,i.kt)("h3",{id:"version-13"},"Version 1.3"),(0,i.kt)("p",null,"This version has been used in at least the 2003 iRO Beta client."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is a placeholder. If you know anything about the topic, please help fill it with content!"))),(0,i.kt)("p",null,"More research is needed on this topic."),(0,i.kt)("h3",{id:"version-20"},"Version 2.0"),(0,i.kt)("p",null,"This is the GRF version used in the latest kRO client, as well as regional clients dating back to at least 2004."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Signature")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"15"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Always ",(0,i.kt)("inlineCode",{parentName:"td"},'"Master of Magic"')," (fixed-sice, ",(0,i.kt)("em",{parentName:"td"},"without")," a null-terminator)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"EncryptionKey")),(0,i.kt)("td",{parentName:"tr",align:"center"},"15"),(0,i.kt)("td",{parentName:"tr",align:"center"},"15"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array of ",(0,i.kt)("inlineCode",{parentName:"td"},"byte")," values; all zeroes if encryption isn't used (default)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"FileTableOffset")),(0,i.kt)("td",{parentName:"tr",align:"center"},"30"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Where the file table is stored (relative to the start of the file)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ScramblingSeed")),(0,i.kt)("td",{parentName:"tr",align:"center"},"34"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Seemingly used for obfusciating the contents of the archive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ScrambledFileCount")),(0,i.kt)("td",{parentName:"tr",align:"center"},"38"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Subtract ",(0,i.kt)("inlineCode",{parentName:"td"},"ScramblingSeed")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"7")," to compute the real ",(0,i.kt)("inlineCode",{parentName:"td"},"FileCount"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Version")),(0,i.kt)("td",{parentName:"tr",align:"center"},"42"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Encodes the version in major.minor format (two bytes each)")))),(0,i.kt)("h4",{id:"file-table"},"File Table"),(0,i.kt)("p",null,"This is the manifest of the archive, stored at an arbitrary position in the file (defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"FileTableOffset"),")."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"CompressedSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Compressed size of the file table (list of file entries)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DecompressedSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Size of the file table after decompressing it")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"CompressedRecordHeaders")),(0,i.kt)("td",{parentName:"tr",align:"center"},"8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"blob")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Compressed buffer (use zlib's ",(0,i.kt)("inlineCode",{parentName:"td"},"inflate")," to decompress)")))),(0,i.kt)("p",null,"These parameters all have to be passed to the decompressor in order to unpack the list of file records."),(0,i.kt)("h4",{id:"file-entries"},"File Entries"),(0,i.kt)("p",null,"After unpacking the ",(0,i.kt)("inlineCode",{parentName:"p"},"CompressedRecordHeaders"),' buffer, you\'ll get a list of these file records ("headers").'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"CompressedSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"How large the compressed file contents are (zlib parameter)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ByteAlignedSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"How many bytes to actually read (padded to next 8-byte boundary)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"DecompressedSize")),(0,i.kt)("td",{parentName:"tr",align:"center"},"8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Size of the actual file contents (another zlib parameter)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:"center"},"12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"byte")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Whether the file is stored raw, compressed, or encrypted (?)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Offset")),(0,i.kt)("td",{parentName:"tr",align:"center"},"13"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"uint")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Where in the archive the compressed file contents can be found")))),(0,i.kt)("p",null,"You can pass the compressed/aligned buffer to zlib's ",(0,i.kt)("inlineCode",{parentName:"p"},"inflate")," to unpack a given file."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rathena.org/board/topic/57175-description-of-the-grf-file-format/"},"An older description of the GRF 2.0 format (written by Tiera)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tools/#euc-kr-path-conversion"},"Example code for the EUC-KR path conversion")," (using JavaScript/NodeJS)")))}k.isMDXComponent=!0}}]);