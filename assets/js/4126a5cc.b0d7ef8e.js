"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[626],{2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(4848),r=n(8453);const s={sidebar_position:30,slug:"/rendering/camera-controls",title:"Camera Controls"},l=void 0,a={id:"rendering/camera-controls",title:"Camera Controls",description:"This document describes the camera controller used by the Ragnarok Online client.",source:"@site/docs/rendering/camera-controls.md",sourceDirName:"rendering",slug:"/rendering/camera-controls",permalink:"/rendering/camera-controls",draft:!1,unlisted:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/rendering/camera-controls.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,slug:"/rendering/camera-controls",title:"Camera Controls"},sidebar:"tutorialSidebar",previous:{title:"Ground Mesh",permalink:"/rendering/ground-mesh"},next:{title:"Scene Lighting",permalink:"/rendering/scene-lighting"}},o={},d=[{value:"Orbital Camera",id:"orbital-camera",level:2},{value:"Perspective Projection",id:"perspective-projection",level:2},{value:"Fixed Viewpoints",id:"fixed-viewpoints",level:2},{value:"Data Tables",id:"data-tables",level:3},{value:"Viewpoint Table Layout",id:"viewpoint-table-layout",level:3},{value:"Orbital Rotations",id:"orbital-rotations",level:2},{value:"Zoom Levels",id:"zoom-levels",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This document describes the camera controller used by the Ragnarok Online client."}),"\n",(0,i.jsx)(t.h2,{id:"orbital-camera",children:"Orbital Camera"}),"\n",(0,i.jsx)(t.p,{children:"The game uses a flexible but fairly standard camera system, known under many different names, to create a third-person POV:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The distance from the camera target is given as a radius (in world units)"}),"\n",(0,i.jsx)(t.li,{children:"Players can adjust the camera on two angles, horizontally and vertically"}),"\n",(0,i.jsx)(t.li,{children:"In RO, only half of the horizontal range can be explored (for technical and probably stylistic reasons)"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#arc-rotate-camera",children:"Here's"})," an example explaining how it works; this is not engine-specific but rather a general method of rendering a 3D scene."]}),"\n",(0,i.jsx)(t.h2,{id:"perspective-projection",children:"Perspective Projection"}),"\n",(0,i.jsx)(t.p,{children:"The camera settings control how exactly the scene is projected on the viewport window, giving the game its unique look:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The vertical field of view was claimed to be 15 degrees [by curiosity], which is a bit of a... curiosity (hah)"}),"\n",(0,i.jsx)(t.li,{children:"The near plane is located at a distance of 10 (2 if normalized) world units - the size of one GND surface"}),"\n",(0,i.jsx)(t.li,{children:"... and the far plane seems to be at a distance of 1500 (300 if normalized) world units, just outside the fog sphere"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["It's important to point out the unusually narrow ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Field_of_view",children:"field of view"})," as it directly impacts how fog effects color the scene."]}),"\n",(0,i.jsx)(t.h2,{id:"fixed-viewpoints",children:"Fixed Viewpoints"}),"\n",(0,i.jsx)(t.p,{children:"Certain maps lock in the camera settings, limiting the player's ability to adjust them (without hacking the client, that is)."}),"\n",(0,i.jsx)(t.h3,{id:"data-tables",children:"Data Tables"}),"\n",(0,i.jsx)(t.p,{children:"There are two data files (CSV tables) that control the fixed viewpoint camera on a per-map basis."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"data/indoorRswTable.txt"}),": Features a list of maps for which camera adjustments should be disabled"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"data/viewpointtable.txt"}),": Compliments the above with fixed viewpoints for a selection of maps"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The format of the files is quite simple:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If a map's ",(0,i.jsx)(t.a,{href:"/file-formats/rsw",children:"RSW"})," file is listed in the ",(0,i.jsx)(t.code,{children:"indoorRswTable"}),", orbital rotations will be disabled completely for the map"]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"viewpointtable"}),' defines what camera angles to allow for the given map (no entry means "use default values")']}),"\n",(0,i.jsxs)(t.li,{children:["Entries in the viewpoint table are separated by hashtags (",(0,i.jsx)(t.code,{children:"#"}),") and arbitrary amounts of whitespace characters"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"viewpoint-table-layout",children:"Viewpoint Table Layout"}),"\n",(0,i.jsx)(t.p,{children:"Viewpoint presets are defined by the following fields:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Index"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Field"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Interpretation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"mapID"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the map's RSW resource file (with extension)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"range"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Minimum radial distance from the camera to the player character (in world units)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"scope"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Maximum radial distance adjustment that is allowed on top of ",(0,i.jsx)(t.code,{children:"range"})," (in world units)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"range_IN"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Initial radial distance from the camera to the player character (in world units)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"rotationFrom"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Minimum longitude of the camera's ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Azimuth",children:"azimuth"})," angle (in degrees)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"rotationTo"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Maximum longitude of the camera's ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Azimuth",children:"azimuth"})," angle (in degrees)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"rotation_IN"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Initial longitude of the camera's ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Azimuth",children:"azimuth"})," angle (in degrees)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"altitudeFrom"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Minimum latitude of the camera's ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Spherical_coordinate_system",children:"polar"})," angle (in degrees)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"altitudeTo"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Maximum latitude of the camera's ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Spherical_coordinate_system",children:"polar"})," angle (in degrees)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"altitude_IN"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Initial latitude of the camera's ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Spherical_coordinate_system",children:"polar"})," angle (in degrees)"]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Here's an example entry for the viewpoint table:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:"ex_map02.rsw#\t250#\t250#\t500#\t\t0#\t\t90#\t\t45#\t\t-40#\t\t-65#\t\t-65#\n"})}),"\n",(0,i.jsx)(t.p,{children:"If this map was to be loaded, the camera's range of movement would be limited such that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"It starts zoomed out at the maximum radial distance of 500 (100 if normalized) world units"}),"\n",(0,i.jsx)(t.li,{children:"You can't zoom further in than 250 (50 if normalized) world units from the player character"}),"\n",(0,i.jsx)(t.li,{children:"You can't zoom further out than the maximum distance (500, or 100 if normalized)"}),"\n",(0,i.jsxs)(t.li,{children:["You ",(0,i.jsx)(t.em,{children:"can"})," zoom in and out freely between the two thresholds by scrolling the mouse wheel"]}),"\n",(0,i.jsx)(t.li,{children:"The horizontal (azimuth) angle can be adjusted freely from 0 to 90 degrees"}),"\n",(0,i.jsxs)(t.li,{children:["The vertical (polar) angle can be adjusted from ",(0,i.jsx)(t.em,{children:"positive"})," 40 to 65 degrees (remember that ",(0,i.jsx)(t.a,{href:"/rendering/coordinate-systems#world-coordinates",children:"the game world is upside down"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Upon loading the map, the client places the camera so that it orbits the player at ",(0,i.jsx)(t.code,{children:"(45, 65)"})," in spherical coordinates."]}),"\n",(0,i.jsx)(t.h2,{id:"orbital-rotations",children:"Orbital Rotations"}),"\n",(0,i.jsxs)(t.p,{children:['The origin of the spherical coordinates appears to be "looking into the screen" (alongside the positive Z axis). That is to say, rotating the camera by ',(0,i.jsx)(t.code,{children:"(0, 0)"})," in spherical coordinates would place it at ",(0,i.jsx)(t.code,{children:"(0, 0, -1)"})," in world coordinates. Camera rotations work similarly to directional lighting - as far as I can tell - although sunrays originate from ",(0,i.jsx)(t.code,{children:"(0, 1, 0)"})," (in a non-inverted system) ",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"As for rotating alongside the axes, a few observations can be made:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Increasing the latitude (polar angle) rotates the camera clockwise around the X axis ",(0,i.jsx)(t.strong,{children:"in RO's world coordinates"})," (!)"]}),"\n",(0,i.jsx)(t.li,{children:'Due to the inverted Y axis, these angles are always negative - positive values would move the camera "under the ground"'}),"\n",(0,i.jsxs)(t.li,{children:["In a normalized coordinate system, north-south rotations must be inverted to move ",(0,i.jsx)(t.em,{children:"counterclockwise"}),' ("up" and not "down")']}),"\n",(0,i.jsx)(t.li,{children:"Adding to the longitude (azimuth angle) rotates the camera clockwise around the Y axis, which works fine if normalized"}),"\n",(0,i.jsx)(t.li,{children:"Horizontal rotations appear to roughly add/remove one degree per pixel (possibly normalized for screen size?)"}),"\n",(0,i.jsx)(t.li,{children:"Vertical rotations appear to add/remove exactly five degrees per scroll event to the vertical rotation angle"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'"Clockwise" here means "clockwise if looking at the origin" (from the camera\'s point of view), parallel to the respective axis.'}),"\n",(0,i.jsxs)(t.p,{children:["For a specific example, you can take a look at how the viewpoint controls the camera in Nameless Island (",(0,i.jsx)(t.code,{children:"abbey01"}),"):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'The azimuth angle can be adjusted from 0 to 70 degrees; it\'s easy to confirm that the camera will only move to the "left"'}),"\n",(0,i.jsx)(t.li,{children:"Polar angles range from -50 to -70 (meaning, 50 to 70 if normalized), although the rotation is actually more restricted (?)"}),"\n",(0,i.jsx)(t.li,{children:"There's probably some special rules for fixed-viewpoint maps since the range is more limited than expected (4 vs. 5 steps)"}),"\n",(0,i.jsx)(t.li,{children:'Checking other maps we can see that the rule of "five degrees per step" holds, at least while the angle is below 65 degree'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"More research is needed as to why and how exactly the range is clamped in special cases (fixed viewpoint, high vertical angles)."}),"\n",(0,i.jsxs)(t.p,{children:['While it\'s not possible to "see" that the world is upside down, negative polar angles in the table imply that it probably is ',(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"zoom-levels",children:"Zoom Levels"}),"\n",(0,i.jsx)(t.p,{children:"The exact range of allowed zoom levels depends on the client version. There are two versions that I've seen:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"In a 2004 client, the maximum zoom level was (roughly) 7 steps - and a final 8th one that barely moves the camera"}),"\n",(0,i.jsx)(t.li,{children:"In a 20212 Renewal client, the maximum zoom level was (roughly) 24 steps - and again a more limited 25th one"}),"\n",(0,i.jsx)(t.li,{children:'In both cases, the step size appears to be uneven as the last step was noticeably "smaller"'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After testing different settings, I arrived at the following approximate results:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'The step size is ~5 normalized world units per zoom level (possibly a little below that due to the "extra" bump?)'}),"\n",(0,i.jsx)(t.li,{children:"A minimal distance of 40 to 50 normalized world units (200 to 250) looks right - I opted for 45, which seemed close enough"}),"\n",(0,i.jsx)(t.li,{children:"As a max distance, something like (normalized) 80 for a classic feel and maybe 150 or so for Renewal might work (unsure)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The exact values depend on the mimum level plus step size, but here's the levels at a step size of five normalized world units:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Zoom Level"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Distance"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Normalized"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"225"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"45"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"250"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"50"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"275"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"55"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"300"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"60"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"325"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"65"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"350"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"70"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"375"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"75"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"400"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"80"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"This can be extrapolated up to the maximum distance of about 800 - 825, but the step size should still be the same."}),"\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(t.p,{children:["Derived by applying the same rotations with directional light angles stored in the ",(0,i.jsx)(t.a,{href:"/file-formats/rsw",children:"RSW"})," file and visually checking the result ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,i.jsxs)(t.p,{children:["Considering that terrain altitudes and water levels are also inverted in the game files, this seems like a safe bet. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);