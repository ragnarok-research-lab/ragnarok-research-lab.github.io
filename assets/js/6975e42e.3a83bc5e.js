"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3452],{2190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(4848),r=n(8453);const s={sidebar_position:300,slug:"/rendering/scene-lighting",title:"Scene Lighting"},o=void 0,l={id:"rendering/scene-lighting",title:"Scene Lighting",description:"This document describes the lighting model used by the Ragnarok Online client.",source:"@site/docs/rendering/scene-lighting.md",sourceDirName:"rendering",slug:"/rendering/scene-lighting",permalink:"/rendering/scene-lighting",draft:!1,unlisted:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/rendering/scene-lighting.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300,slug:"/rendering/scene-lighting",title:"Scene Lighting"},sidebar:"tutorialSidebar",previous:{title:"Camera Controls",permalink:"/rendering/camera-controls"},next:{title:"Animation Systems",permalink:"/rendering/animation-systems"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Pipeline Stages",id:"pipeline-stages",level:2},{value:"Input Variables",id:"input-variables",level:2},{value:"Lighting Stage",id:"lighting-stage",level:2},{value:"Directional Light",id:"directional-light",level:3},{value:"Ambient Light",id:"ambient-light",level:3},{value:"Dynamic Lights",id:"dynamic-lights",level:3},{value:"Contrast Correction",id:"contrast-correction",level:3},{value:"Object Lighting",id:"object-lighting",level:3},{value:"Texture Blending Stages",id:"texture-blending-stages",level:2},{value:"Diffuse Textures",id:"diffuse-textures",level:3},{value:"Lightmap Textures",id:"lightmap-textures",level:3},{value:"Vertex Fogging Stage",id:"vertex-fogging-stage",level:2},{value:"Fog Parameters",id:"fog-parameters",level:3},{value:"Alpha Composition Stage",id:"alpha-composition-stage",level:2},{value:"Blending Equations",id:"blending-equations",level:3},{value:"Supported Blend Modes",id:"supported-blend-modes",level:3},{value:"A Note on Color Spaces",id:"a-note-on-color-spaces",level:2},{value:"References",id:"references",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This document describes the lighting model used by the Ragnarok Online client."}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Several inputs contribute to the final color sent to the display device:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The geometry itself defines the initial ",(0,i.jsx)(t.a,{href:"https://gamedev.stackexchange.com/questions/139059/what-is-a-vertex-color",children:"vertex color"})," for each textured surface, as well as a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Vertex_normal",children:"vertex normal"})]}),"\n",(0,i.jsxs)(t.li,{children:["One global ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Shading#Ambient_lighting",children:"ambient light source"}),' can be configured, which controls the general "brightness" level of the scene']}),"\n",(0,i.jsxs)(t.li,{children:["A single ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Shading#Directional_lighting",children:"directional light source"}),' is always present; it can be thought of as "the sun", casting shadows onto the map']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Texture_mapping",children:"Diffuse textures"})," (also known as color maps) add detail to the geometry, or even 2D objects like sprites and effects"]}),"\n",(0,i.jsxs)(t.li,{children:["Dynamic light sources, here stored in precomputed ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Lightmap",children:"lightmap textures"}),", additionally contribute to the lighting"]}),"\n",(0,i.jsxs)(t.li,{children:["If enabled, the engine's ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/vertex-fog#range-based-fog",children:"vertex fog effect"})," will be used to apply color-grading according to the fog parameters"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following sections explain how an accurate rendition of the game world can be produced from all of the above."}),"\n",(0,i.jsx)(t.h2,{id:"pipeline-stages",children:"Pipeline Stages"}),"\n",(0,i.jsxs)(t.p,{children:["Not all objects in the world are affected by light equally. This can be expressed in terms of ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Fixed-function",children:"fixed-function pipeline"})," stages:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Object Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Lighting"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Diffuse Texture Blending"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Lightmap Texture Blending"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Vertex Fog"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Alpha Blending"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Ground"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"YES"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"YES"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"YES"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"YES"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"NO"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Water"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"NO"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"YES"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"NO"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"YES"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"YES"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The list is currently incomplete; more research is needed on the remaining object types. Some educated guesses:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Models: Diffuse, lighting, vertex fog, alpha blend stages are enabled - lightmap contribution is TBD"}),"\n",(0,i.jsx)(t.li,{children:"Sprites: Diffuse, vertex fog, alpha blend stages are likely enabled - lightmap contribution is TBD"}),"\n",(0,i.jsx)(t.li,{children:"UI widgets: Diffuse, alpha blend stages are likely enabled - everything else is probably disabled"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There may be other game objects that use different settings, but these should be the most important ones."}),"\n",(0,i.jsx)(t.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsx)(t.p,{children:"The operations performed as part of a given pipeline stage may depend on various inputs:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The base color is always interpolated from the fragment's vertex color and defaults to black, i.e., ",(0,i.jsx)(t.code,{children:"rgb(0, 0, 0)"})]}),"\n",(0,i.jsxs)(t.li,{children:["To increase the vibrancy of colors, both ambient and directional light colors must be ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Blend_modes#Screen",children:"screen blended"})," with the base color"]}),"\n",(0,i.jsx)(t.li,{children:"Next, the total light contribution can be computed using the directional and ambient light's setting and the vertex normal"}),"\n",(0,i.jsx)(t.li,{children:"Diffuse textures are modulated (multiplied) with the result of the previous stage, presumably while ignoring alpha?"}),"\n",(0,i.jsx)(t.li,{children:'The alpha channel of the lightmap texture ("shadowmap") is first modulated with the result of the previous stage'}),"\n",(0,i.jsx)(t.li,{children:'Afterwards, the RGB channel of the lightmap texture ("color map") is added on top of this result, and possibly clamped?'}),"\n",(0,i.jsx)(t.li,{children:"Vertex fog contributes its color based on the distance from the vertex to the camera's viewpoint, linearly interpolated"}),"\n",(0,i.jsxs)(t.li,{children:["Finally, the generated fragment may be layered on top (via ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Alpha_compositing",children:"alpha compositing"}),") in accordance with the selected blend mode"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["How those operations are implemented depends on the graphics API. DirectX7 uses ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/render-states",children:"render states"})," and ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/creating-blending-stages",children:"blending stages"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"lighting-stage",children:"Lighting Stage"}),"\n",(0,i.jsxs)(t.p,{children:["Computes the lit base color, corrected for ",(0,i.jsx)(t.a,{href:"https://www.adobe.com/creativecloud/photography/hub/guides/underexposure-vs-overexposure-photography.html",children:"underexposure"})," that's being introduced due to working in the wrong color space."]}),"\n",(0,i.jsx)(t.p,{children:"Inputs:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Directional light settings from the map's ",(0,i.jsx)(t.a,{href:"/file-formats/rsw",children:"RSW"})," file"]}),"\n",(0,i.jsxs)(t.li,{children:["Ambient light settings from the map's ",(0,i.jsx)(t.a,{href:"/file-formats/rsw",children:"RSW"})," file"]}),"\n",(0,i.jsxs)(t.li,{children:["Vertex color and surface normals derived from the ",(0,i.jsx)(t.a,{href:"/file-formats/gnd",children:"GND"}),", ",(0,i.jsx)(t.a,{href:"/file-formats/rsm",children:"RSM"}),", or ",(0,i.jsx)(t.a,{href:"/file-formats/gr2",children:"GR2"})," file"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Operations:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Compute sunlight contribution from the directional light settings"}),"\n",(0,i.jsx)(t.li,{children:"Add ambient light contribution from the ambient light settings"}),"\n",(0,i.jsx)(t.li,{children:"Clamp result to the unit range (in order to avoid overexposure)"}),"\n",(0,i.jsxs)(t.li,{children:["Compute contrast correction color using ",(0,i.jsx)(t.a,{href:"https://affinityspotlight.com/article/blend-modes-explained/",children:"Screen"})," blending"]}),"\n",(0,i.jsx)(t.li,{children:"Modulate the previous result with the contrast correction color"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Specular highlights are disabled and needn't be added."}),"\n",(0,i.jsx)(t.h3,{id:"directional-light",children:"Directional Light"}),"\n",(0,i.jsxs)(t.p,{children:["The ray direction of the sun can be calculated from its world position, stored as ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Spherical_coordinate_system",children:"spherical coordinates"})," in the ",(0,i.jsx)(t.a,{href:"/file-formats/rsw",children:"RSW"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"function RagnarokRSW:ComputeSunRayDirection(latitudeInDegrees, longitudeInDegrees)\n\tlocal sunRayDirection = Vector3D(0, -1, 0)\n\n\tlocal rotationAroundX = Matrix3D:CreateAxisRotationX(-latitudeInDegrees) -- Account for inverted Y\n\tlocal rotationAroundY = Matrix3D:CreateAxisRotationY(longitudeInDegrees)\n\n\tsunRayDirection:Transform(rotationAroundX)\n\tsunRayDirection:Transform(rotationAroundY)\n\n\treturn sunRayDirection\nend\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Source: Example implementation taken from the ",(0,i.jsx)(t.a,{href:"https://github.com/RagnarokResearchLab/RagLite/blob/0bc2856e2acebcbb568b095853180574a78dc4ba/Core/FileFormats/RagnarokRSW.lua#L246-L256",children:"RagLite SDK"})," (based on previous work by ",(0,i.jsx)(t.a,{href:"https://github.com/Borf",children:"Borf"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/flaviojs/",children:"FlavioJS"}),")"]})}),"\n",(0,i.jsx)(t.h3,{id:"ambient-light",children:"Ambient Light"}),"\n",(0,i.jsx)(t.p,{children:"If lightmaps are disabled, the ambient scene lighting is amplified by a factor of 50% (multiply color components by 1.5)."}),"\n",(0,i.jsx)(t.p,{children:'This serves as an optional "brightness correction" step that only takes place when lightmaps are disabled on load.'}),"\n",(0,i.jsx)(t.h3,{id:"dynamic-lights",children:"Dynamic Lights"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/file-formats/rsw",children:"RSW"})," file of each map contains definitions for the dynamic light sources in the scene. However, they aren't rendered by the client in real time. Instead, the game uses pre-computed ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Lightmap",children:"lightmap"})," textures which can be blended with the terrain geometry more efficiently at runtime. Since the lights don't directly contribute to the scene lighting, I won't discuss them in detail here."]}),"\n",(0,i.jsxs)(t.p,{children:["If you're interested in how they can be used for dynamic lighting, you should check out ",(0,i.jsx)(t.a,{href:"https://youtu.be/VKywJ0QtcFE?t=561",children:"Doddler's explanation on YouTube"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"contrast-correction",children:"Contrast Correction"}),"\n",(0,i.jsx)(t.p,{children:"When rendering the scene with just the ambient and directional light sources contributing alongside the diffuse or lightmap textures, the resulting image is severly underexposed. This is likely because lighting computations were performed in the wrong color space, prompting the developers to layer a composite blending effect on top to make the colors more vibrant."}),"\n",(0,i.jsxs)(t.p,{children:["For more information, see the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Blend_modes",children:"Wikipedia article on blend modes"}),", in particular the section about composite ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Blend_modes#Screen",children:"screen blending"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"object-lighting",children:"Object Lighting"}),"\n",(0,i.jsxs)(t.p,{children:["Scene objects (i.e., RSM model instances) may receive additional lighting when lightmap textures are enabled. The client includes a file called ",(0,i.jsx)(t.code,{children:"mapobjlighttable.txt"})," that looks like it would be used to control this behavior. However, this mechanism seems to be broken or unused. More research is needed to determine how objects should be lit when the feature is enabled."]}),"\n",(0,i.jsxs)(t.p,{children:["Examples: According to said table, object lighting is ",(0,i.jsx)(t.strong,{children:"enabled"})," for",(0,i.jsx)(t.code,{children:"orcsdun01"})," and ",(0,i.jsx)(t.code,{children:"orcsdun02"}),", but ",(0,i.jsx)(t.strong,{children:"disabled"})," for ",(0,i.jsx)(t.code,{children:"gef_dun0"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"texture-blending-stages",children:"Texture Blending Stages"}),"\n",(0,i.jsx)(t.p,{children:"Projects textures onto the lit geometry (as computed during the lighting stage) in order to cheaply add more detail."}),"\n",(0,i.jsx)(t.h3,{id:"diffuse-textures",children:"Diffuse Textures"}),"\n",(0,i.jsx)(t.p,{children:"Diffuse textures don't use the alpha channel directly, but rather adopt a convention where magenta becomes transparent:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"fn isTransparentBackgroundPixel(diffuseTextureColor : vec4f) -> bool {\n\treturn (diffuseTextureColor.r >= 254.0/255.0\n\t&& diffuseTextureColor.g <= 3.0/255.0\n\t&& diffuseTextureColor.b >= 254.0/255.0);\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Example: A method to determine which background pixels to discard based on the RGBA value (originally proposed by ",(0,i.jsx)(t.a,{href:"https://github.com/curio-r",children:"curiosity"}),")"]})}),"\n",(0,i.jsxs)(t.p,{children:["This enables the use of simple 256 color bitmaps (stored in ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/BMP_file_format",children:"BMP files"}),") for mostly every texture, at the cost of flexibility."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, texture images are degraded by what appears to be a reduction in ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Color_depth",children:"color depth"})," to 16 bits per pixel:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"color-banding-example.png",src:n(1139).A+"",width:"739",height:"256"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Pictured: The use of a smooth gradient demonstrates how textures are rendered with fewer colors inside the game"})}),"\n",(0,i.jsxs)(t.p,{children:["This quantization step is the cause of ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Colour_banding",children:"color banding"}),", which explains the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Posterization",children:"posterization"})," effect that can be observed on lightmaps."]}),"\n",(0,i.jsx)(t.h3,{id:"lightmap-textures",children:"Lightmap Textures"}),"\n",(0,i.jsxs)(t.p,{children:["Lightmap textures affect only the terrain (",(0,i.jsx)(t.a,{href:"/rendering/ground-mesh",children:"ground mesh"}),") directly. Scene decorations may be lit separately (see ",(0,i.jsx)(t.a,{href:"#object-lighting",children:"Object Lighting"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Said alpha channel encodes the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Ambient_occlusion",children:"ambient occlusion"})," percentage, while the RGB channel encodes the light contribution of the ",(0,i.jsx)(t.a,{href:"#dynamic-lights",children:"dynamic light sources"})," that were used to bake the lightmap texture. Colors lose even more precision due to the alpha channel:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"posterized-lightmaps-closeup.png",src:n(728).A+"",width:"717",height:"325"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Pictured: The banding effect introduced by downsampling lightmaps to 4 bits per channel can immediately be spotted"})}),"\n",(0,i.jsxs)(t.p,{children:["Each lightmap texture slices include a buffer area (1 pixel wide) that's designed to soften the impact of ",(0,i.jsx)(t.a,{href:"https://gamedev.stackexchange.com/questions/111704/getting-rid-of-texture-bleeding",children:"texture bleeding"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"vertex-fogging-stage",children:"Vertex Fogging Stage"}),"\n",(0,i.jsx)(t.p,{children:"Adds a basic color grading effect to any scene that uses the effect - if there's no fog this is effectively a NOOP."}),"\n",(0,i.jsx)(t.h3,{id:"fog-parameters",children:"Fog Parameters"}),"\n",(0,i.jsxs)(t.p,{children:["The GRF archive includes a list of ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/fog-parameters",children:"fog parameters"})," (",(0,i.jsx)(t.code,{children:"fogParameterTable.txt"}),"), which controls the ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/vertex-fog#range-based-fog",children:"range-based vertex fog effect"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This database contains one entry for each map that should use the fog effect. All entries have the following format:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:"map_id#\nnearLimitPercentage#\nfarLimitPercentage#\nfogColorARGB#\nunusedDensityPercentage#\n"})}),"\n",(0,i.jsxs)(t.p,{children:["As an example, consider the fog settings for Payon Cave F0 (",(0,i.jsx)(t.code,{children:"pay_dun00"}),"):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:"pay_dun00.rsw#\n0.1#\n0.9#\n0xff04009A#\n0.3#\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This tells the DirectX engine to apply a vertex fog effect using color ",(0,i.jsx)(t.code,{children:"rgb(4, 0, 154)"})," (",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/fog-color",children:"alpha is ignored"}),") that reaches its highest density level at a distance of ",(0,i.jsx)(t.code,{children:"1490 * 0.9 = 1341"})," world units (",(0,i.jsx)(t.code,{children:"268.2"})," if normalized) and is the least dense at a distance of ",(0,i.jsx)(t.code,{children:"1490 * 0.1 = 149"})," world units (",(0,i.jsx)(t.code,{children:"29.8"}),' if normalized), where the size of the imagined "fog sphere" is determined by the delta between the camera\'s near and far planes: ',(0,i.jsx)(t.code,{children:"farPlaneDistance - nearPlaneDistance"})," resulting in ",(0,i.jsx)(t.code,{children:"1500 - 10 = 1490"})," - see ",(0,i.jsx)(t.a,{href:"/rendering/camera-controls/#perspective-projection",children:"Camera Controls"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The density parameter is completely ignored as it's used for ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/fog-formulas#exponential-fog",children:"exponential mode"}),", but the game only uses ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/fog-formulas#linear-fog",children:"linear fog."}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"alpha-composition-stage",children:"Alpha Composition Stage"}),"\n",(0,i.jsx)(t.p,{children:"Whenever transparency effects are used, this is the stage that actually computes the result."}),"\n",(0,i.jsx)(t.h3,{id:"blending-equations",children:"Blending Equations"}),"\n",(0,i.jsx)(t.p,{children:"Alpha blending may be performed to render translucent objects on top of the existing scenery (i.e., the game world). This process is highly specific to the type of object being rendered, but much more research is needed to cover the various 2D effects, sprites, etc. So far only the method for rendering water surfaces can be stated here with a high degree of certainty:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["General blend formula: ",(0,i.jsx)(t.code,{children:"RGBAsrc \xd7 RGBAsrcFactor + RGBAdst \xd7 RGBAdstFactor"})," (using ",(0,i.jsx)(t.a,{href:"https://gpuweb.github.io/gpuweb/#blend-state",children:"WebGPU"})," terminology)"]}),"\n",(0,i.jsxs)(t.li,{children:["Color components: ",(0,i.jsx)(t.code,{children:"RGBAsrc \xd7 SrcAlpha + RGBAdst \xd7 OneMinusSrcAlpha"})]}),"\n",(0,i.jsxs)(t.li,{children:["Alpha component: ",(0,i.jsx)(t.code,{children:"RGBAsrc \xd7 One + RGBAdst \xd7 OneMinusSrcAlpha"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Perhaps unsurprisingly, this is the standard ",(0,i.jsx)(t.strong,{children:"A over B"})," operator described in the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Alpha_compositing",children:"Wikipedia article on alpha compositing"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"supported-blend-modes",children:"Supported Blend Modes"}),"\n",(0,i.jsx)(t.p,{children:"The following table contains the blend parameters for all blend modes that have been verified so far:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Object Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Component"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Source Factor"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Destination Factor"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Blend Operation"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Water Plane"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Color"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"SrcAlpha"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"OneMinusSrcAlpha"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"Add"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Water Plane"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Alpha"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"One"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"OneMinusSrcAlpha"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"Add"})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Here, ",(0,i.jsx)(t.code,{children:"Source"})," is the object to be blended (e.g., the water surface) and ",(0,i.jsx)(t.code,{children:"Destination"})," refers to the existing frame buffer contents."]}),"\n",(0,i.jsx)(t.h2,{id:"a-note-on-color-spaces",children:"A Note on Color Spaces"}),"\n",(0,i.jsxs)(t.p,{children:["Lighting computations are usually performed on linear colors, even if most output devices expect the result in ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/SRGB",children:"sRGB"})," format."]}),"\n",(0,i.jsxs)(t.p,{children:["Since textures generally store colors in sRGB format, they need to be gamma-decompressed before use as the result will otherwise be a severely underexposed image. Afterwards, colors would then be sRGB-encoded again before the device can actually display them. This step is called ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Gamma_correction",children:"gamma correction"})," and intended to emulate the characteristics of ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cathode-ray_tube",children:"CRT monitors"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The RO client, however, doesn't seem to be doing any of this. Instead, the sRGB-encoded textures are seemingly used as-is. The lighting computations then fundamentally alter the appearance of the rendered scene by introducing underexposure into the final image, so that darker regions appear more intense. This is alleviated by the ",(0,i.jsx)(t.a,{href:"/rendering/scene-lighting#contrast-correction",children:"tone mapping step"})," added via screen blending."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://blog.johnnovak.net/2016/09/21/what-every-coder-should-know-about-gamma/",children:"This blog post"})," explains the issue in more detail. With the screen blending effect there's no need to perform gamma correction."]}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://lettier.github.io/3d-game-shaders-for-beginners/gamma-correction.html",children:"OpenGL-specific tutorial that explains gamma correction"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://learnopengl.com/Advanced-Lighting/Gamma-Correction",children:"Another OpenGL-based explanation of the gamma correction issue"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.photoshopessentials.com/photo-editing/layer-blend-modes/screen/",children:"Tutorial explaining the use of the Screen blend mode in Photoshop"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/RagnarokResearchLab/RagLite/blob/0bc2856e2acebcbb568b095853180574a78dc4ba/Core/NativeClient/WebGPU/Shaders/TerrainGeometryShader.wgsl#L138-L171",children:"Implementation of the lighting model - for terrain surfaces only - in WebGPU Shader Language (WGSL)"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1139:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/color-banding-example-0a0dcf8688267eab9163dbb1750af27b.png"},728:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);