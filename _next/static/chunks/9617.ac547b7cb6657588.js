(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9617],{712:(e,t,i)=>{"use strict";i.d(t,{g:()=>l});var r=i(51153),n=i(50319),s=i(29101),o=i(27832);let a={"1d":"1d","2d":"2d","2d-array":"2d",cube:"2d","cube-array":"2d","3d":"3d"};class l extends r.F{static SAMPLE=4;static STORAGE=8;static RENDER=16;static COPY_SRC=1;static COPY_DST=2;static TEXTURE=4;static RENDER_ATTACHMENT=16;dimension;baseDimension;format;width;height;depth;mipLevels;samples;byteAlignment;ready=Promise.resolve(this);isReady=!0;updateTimestamp;get[Symbol.toStringTag](){return"Texture"}toString(){return`Texture(${this.id},${this.format},${this.width}x${this.height})`}constructor(e,t,i){if(super(e,t=l.normalizeProps(e,t),l.defaultProps),this.dimension=this.props.dimension,this.baseDimension=a[this.dimension],this.format=this.props.format,this.width=this.props.width,this.height=this.props.height,this.depth=this.props.depth,this.mipLevels=this.props.mipLevels,this.samples=this.props.samples||1,"cube"===this.dimension&&(this.depth=6),void 0===this.props.width||void 0===this.props.height)if(e.isExternalImage(t.data)){let i=e.getExternalImageSize(t.data);this.width=i?.width||1,this.height=i?.height||1}else this.width=1,this.height=1,(void 0===this.props.width||void 0===this.props.height)&&s.R.warn(`${this} created with undefined width or height. This is deprecated. Use DynamicTexture instead.`)();this.byteAlignment=i?.byteAlignment||1,this.updateTimestamp=e.incrementTimestamp()}clone(e){return this.device.createTexture({...this.props,...e})}setSampler(e){this.sampler=e instanceof n.L?e:this.device.createSampler(e)}copyImageData(e){let{data:t,depth:i,...r}=e;this.writeData(t,{...r,depthOrArrayLayers:r.depthOrArrayLayers??i})}computeMemoryLayout(e={}){let{width:t=this.width,height:i=this.height,depthOrArrayLayers:r=this.depth}=this._normalizeTextureReadOptions(e),{format:n,byteAlignment:s}=this;return o.vz.computeMemoryLayout({format:n,width:t,height:i,depth:r,byteAlignment:s})}readBuffer(e,t){throw Error("readBuffer not implemented")}readDataAsync(e){throw Error("readBuffer not implemented")}writeBuffer(e,t){throw Error("readBuffer not implemented")}writeData(e,t){throw Error("readBuffer not implemented")}readDataSyncWebGL(e){throw Error("readDataSyncWebGL not available")}generateMipmapsWebGL(){throw Error("generateMipmapsWebGL not available")}static normalizeProps(e,t){let i={...t},{width:r,height:n}=i;return"number"==typeof r&&(i.width=Math.max(1,Math.ceil(r))),"number"==typeof n&&(i.height=Math.max(1,Math.ceil(n))),i}_initializeData(e){this.device.isExternalImage(e)?this.copyExternalImage({image:e,width:this.width,height:this.height,depth:this.depth,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}):e&&this.copyImageData({data:e,mipLevel:0,x:0,y:0,z:0,aspect:"all"})}_normalizeCopyImageDataOptions(e){let{data:t,depth:i,...r}=e,n=this._normalizeTextureWriteOptions({...r,depthOrArrayLayers:r.depthOrArrayLayers??i});return{data:t,depth:n.depthOrArrayLayers,...n}}_normalizeCopyExternalImageOptions(e){let t=l._omitUndefined(e),i=t.mipLevel??0,r=this._getMipLevelSize(i),n=this.device.getExternalImageSize(e.image),s={...l.defaultCopyExternalImageOptions,...r,...n,...t};return s.width=Math.min(s.width,r.width-s.x),s.height=Math.min(s.height,r.height-s.y),s.depth=Math.min(s.depth,r.depthOrArrayLayers-s.z),s}_normalizeCopyElementImageOptions(e){let t=l._omitUndefined(e),i=t.mipLevel??0,r=this._getMipLevelSize(i),n={...l.defaultCopyElementImageOptions,...r,...t};return n.width=Math.min(n.width,r.width-n.x),n.height=Math.min(n.height,r.height-n.y),n.depth=Math.min(n.depth,r.depthOrArrayLayers-n.z),n}_normalizeTextureReadOptions(e){let t=l._omitUndefined(e),i=t.mipLevel??0,r=this._getMipLevelSize(i),n={...l.defaultTextureReadOptions,...r,...t};return n.width=Math.min(n.width,r.width-n.x),n.height=Math.min(n.height,r.height-n.y),n.depthOrArrayLayers=Math.min(n.depthOrArrayLayers,r.depthOrArrayLayers-n.z),n}_getSupportedColorReadOptions(e){let t=this._normalizeTextureReadOptions(e),i=o.vz.getInfo(this.format);switch(this._validateColorReadAspect(t),this._validateColorReadFormat(i),this.dimension){case"2d":case"cube":case"cube-array":case"2d-array":case"3d":return t;default:throw Error(`${this} color readback does not support ${this.dimension} textures`)}}_validateColorReadAspect(e){if("all"!==e.aspect)throw Error(`${this} color readback only supports aspect 'all'`)}_validateColorReadFormat(e){if(e.compressed)throw Error(`${this} color readback does not support compressed formats (${this.format})`);switch(e.attachment){case"color":return;case"depth":throw Error(`${this} color readback does not support depth formats (${this.format})`);case"stencil":throw Error(`${this} color readback does not support stencil formats (${this.format})`);case"depth-stencil":throw Error(`${this} color readback does not support depth-stencil formats (${this.format})`);default:throw Error(`${this} color readback does not support format ${this.format}`)}}_normalizeTextureWriteOptions(e){let t=l._omitUndefined(e),i=t.mipLevel??0,r=this._getMipLevelSize(i),n={...l.defaultTextureWriteOptions,...r,...t};n.width=Math.min(n.width,r.width-n.x),n.height=Math.min(n.height,r.height-n.y),n.depthOrArrayLayers=Math.min(n.depthOrArrayLayers,r.depthOrArrayLayers-n.z);let s=o.vz.computeMemoryLayout({format:this.format,width:n.width,height:n.height,depth:n.depthOrArrayLayers,byteAlignment:this.byteAlignment}),a=s.bytesPerPixel*n.width;if(n.bytesPerRow=t.bytesPerRow??s.bytesPerRow,n.rowsPerImage=t.rowsPerImage??n.height,n.bytesPerRow<a)throw Error(`bytesPerRow (${n.bytesPerRow}) must be at least ${a} for ${this.format}`);if(n.rowsPerImage<n.height)throw Error(`rowsPerImage (${n.rowsPerImage}) must be at least ${n.height} for ${this.format}`);let u=this.device.getTextureFormatInfo(this.format).bytesPerPixel;if(u&&n.bytesPerRow%u!=0)throw Error(`bytesPerRow (${n.bytesPerRow}) must be a multiple of bytesPerPixel (${u}) for ${this.format}`);return n}_getMipLevelSize(e){let t=Math.max(1,this.width>>e);return{width:t,height:"1d"===this.baseDimension?1:Math.max(1,this.height>>e),depthOrArrayLayers:"3d"===this.dimension?Math.max(1,this.depth>>e):this.depth}}getAllocatedByteLength(){let e=0;for(let t=0;t<this.mipLevels;t++){let{width:i,height:r,depthOrArrayLayers:n}=this._getMipLevelSize(t);e+=o.vz.computeMemoryLayout({format:this.format,width:i,height:r,depth:n,byteAlignment:1}).byteLength}return e*this.samples}static _omitUndefined(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>void 0!==e))}static defaultProps={...r.F.defaultProps,data:null,dimension:"2d",format:"rgba8unorm",usage:l.SAMPLE|l.RENDER|l.COPY_DST,width:void 0,height:void 0,depth:1,mipLevels:1,samples:void 0,sampler:{},view:void 0};static defaultCopyDataOptions={data:void 0,byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,width:void 0,height:void 0,depthOrArrayLayers:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all"};static defaultCopyExternalImageOptions={image:void 0,sourceX:0,sourceY:0,width:void 0,height:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1};static defaultCopyElementImageOptions={element:void 0,width:void 0,height:void 0,sourceX:0,sourceY:0,sourceWidth:void 0,sourceHeight:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1};static defaultTextureReadOptions={x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"};static defaultTextureWriteOptions={byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"}}},796:(e,t,i)=>{"use strict";i.d(t,{$A:()=>s,Z0:()=>o,Z8:()=>c,eL:()=>u,ei:()=>a,g7:()=>d,gL:()=>l,jb:()=>f,x6:()=>h,ze:()=>n});var r=i(55218);function n(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function s(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[0],a=i[1],l=i[2];return e[0]=n*l-s*a,e[1]=s*o-r*l,e[2]=r*a-n*o,e}function o(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[3]*r+i[7]*n+i[11]*s+i[15];return o=o||1,e[0]=(i[0]*r+i[4]*n+i[8]*s+i[12])/o,e[1]=(i[1]*r+i[5]*n+i[9]*s+i[13])/o,e[2]=(i[2]*r+i[6]*n+i[10]*s+i[14])/o,e}function a(e,t,i){let r=t[0],n=t[1],s=t[2];return e[0]=r*i[0]+n*i[3]+s*i[6],e[1]=r*i[1]+n*i[4]+s*i[7],e[2]=r*i[2]+n*i[5]+s*i[8],e}function l(e,t,i){let r=i[0],n=i[1],s=i[2],o=i[3],a=t[0],l=t[1],u=t[2],c=n*u-s*l,h=s*a-r*u,d=r*l-n*a,f=n*d-s*h,p=s*c-r*d,g=r*h-n*c,m=2*o;return c*=m,h*=m,d*=m,f*=2,p*=2,g*=2,e[0]=a+c+f,e[1]=l+h+p,e[2]=u+d+g,e}function u(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[0],s[1]=n[1]*Math.cos(r)-n[2]*Math.sin(r),s[2]=n[1]*Math.sin(r)+n[2]*Math.cos(r),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function c(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[2]*Math.sin(r)+n[0]*Math.cos(r),s[1]=n[1],s[2]=n[2]*Math.cos(r)-n[0]*Math.sin(r),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function h(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[0]*Math.cos(r)-n[1]*Math.sin(r),s[1]=n[0]*Math.sin(r)+n[1]*Math.cos(r),s[2]=n[2],e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function d(e,t){let i=e[0],r=e[1],n=e[2],s=t[0],o=t[1],a=t[2],l=Math.sqrt((i*i+r*r+n*n)*(s*s+o*o+a*a));return Math.acos(Math.min(Math.max(l&&(e[0]*t[0]+e[1]*t[1]+e[2]*t[2])/l,-1),1))}let f=function(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e};!function(){let e=new r.tb(3);r.tb!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0)}()},1142:(e,t,i)=>{"use strict";i.d(t,{a:()=>n});var r=i(94878);class n extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let i=0;i<this.ELEMENTS;++i)this[i]=e[i+t];return this.check()}toArray(e=[],t=0){for(let i=0;i<this.ELEMENTS;++i)e[t+i]=this[i];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:(0,r.cy)(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(r.$W)}formatString(e){let t="";for(let i=0;i<this.ELEMENTS;++i)t+=(i>0?", ":"")+(0,r.Fl)(this[i],e);return`${e.printTypes?this.constructor.name:""}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!(0,r.aI)(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,i){if(void 0===i)return this.lerp(this,e,t);for(let r=0;r<this.ELEMENTS;++r){let n=e[r],s="number"==typeof t?t:t[r];this[r]=n+i*(s-n)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e[i]),t[i]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if("number"==typeof e)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(r.$W.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e=e&&Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e),t);return this.check()}get elements(){return this}}},1955:(e,t,i)=>{"use strict";i.d(t,{C:()=>n});var r=i(51153);class n extends r.F{get[Symbol.toStringTag](){return"ComputePipeline"}hash="";shaderLayout;constructor(e,t){super(e,t,n.defaultProps),this.shaderLayout=t.shaderLayout}static defaultProps={...r.F.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0}}},2389:(e,t,i)=>{"use strict";i.d(t,{x:()=>a});var r=i(29101);let n=`\
precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,s=`\
// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`;var o=i(71190);let a={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",directionalLightCount:"i32",pointLightCount:"i32",spotLightCount:"i32",ambientColor:"vec3<f32>",lights:[{color:"vec3<f32>",position:"vec3<f32>",direction:"vec3<f32>",attenuation:"vec3<f32>",coneCos:"vec2<f32>"},5]},defaultUniforms:u(),bindingLayout:[{name:"lighting",group:2}],firstBindingSlot:0,source:s,vs:n,fs:n,getUniforms:function(e,t={}){if(!(e=e?{...e}:e))return u();e.lights&&(e={...e,...function(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let i of e||[])switch(i.type){case"ambient":t.ambientLight=i;break;case"directional":t.directionalLights?.push(i);break;case"point":t.pointLights?.push(i);break;case"spot":t.spotLights?.push(i)}return t}(e.lights),lights:void 0});let{useByteColors:i,ambientLight:n,pointLights:s,spotLights:o,directionalLights:a}=e||{};if(!(n||s&&s.length>0||o&&o.length>0||a&&a.length>0))return{...u(),enabled:0};let h={...u(),...function({useByteColors:e,ambientLight:t,pointLights:i=[],spotLights:n=[],directionalLights:s=[]}){let o=c(),a=0,u=0,h=0,d=0;for(let t of i){if(a>=5)break;o[a]={...o[a],color:l(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},a++,u++}for(let t of n){var f;if(a>=5)break;o[a]={...o[a],color:l(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:[Math.cos((f=t).innerConeAngle??0),Math.cos(f.outerConeAngle??Math.PI/4)]},a++,h++}for(let t of s){if(a>=5)break;o[a]={...o[a],color:l(t,e),direction:t.direction},a++,d++}return i.length+n.length+s.length>5&&r.R.warn("MAX_LIGHTS exceeded, truncating to 5")(),{ambientColor:l(t,e),directionalLightCount:d,pointLightCount:u,spotLightCount:h,lights:o}}({useByteColors:i,ambientLight:n,pointLights:s,spotLights:o,directionalLights:a})};return void 0!==e.enabled&&(h.enabled=+!!e.enabled),h}};function l(e={},t){let{color:i=[0,0,0],intensity:r=1}=e;return(0,o.sC)(i,(0,o.eS)(t,!0)).map(e=>e*r)}function u(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:c()}}function c(){return Array.from({length:5},()=>({color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}))}},2682:(e,t,i)=>{"use strict";i.d(t,{R:()=>s});var r=i(22839);class n{poolSize=20;bufferPools;constructor(){this.bufferPools=new Map}createOrReuse(e,t){if(t>e.limits.maxBufferSize)throw Error(`Buffer pool cannot allocate ${t} bytes: device.limits.maxBufferSize is ${e.limits.maxBufferSize}`);let i=this.bufferPools.get(e),n=i?i.findIndex(e=>e.byteLength>=t):-1;if(n<0)return e.createBuffer({usage:r.h.VERTEX|r.h.STORAGE|r.h.COPY_DST|r.h.COPY_SRC,byteLength:t});let[s]=i.splice(n,1);return s}recycle(e){let t=e.device;this.bufferPools.has(t)||this.bufferPools.set(t,[]);let i=this.bufferPools.get(t),r=i.findIndex(t=>t.byteLength>e.byteLength);r<0?i.push(e):i.splice(r,0,e),this.purge()}purge(){for(let[e,t]of this.bufferPools){let i=e.isLost?0:this.poolSize;for(;t.length>i;)t.shift().destroy();0===t.length&&this.bufferPools.delete(e)}}}let s=new n},3905:(e,t,i)=>{"use strict";i.d(t,{L:()=>n});let r={};function n(e="id"){r[e]=r[e]||1;let t=r[e]++;return`${e}-${t}`}},6431:(e,t,i)=>{"use strict";i.d(t,{Z1:()=>o,Ay:()=>f,uz:()=>a});var r=i(71190);let n={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useByteColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:function(e={},t){let i={},n=(0,r.eS)(e.useByteColors,!0);return void 0===e.highlightedObjectColor||(null===e.highlightedObjectColor?i.isHighlightActive=!1:(i.isHighlightActive=!0,i.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(i.highlightColor=(0,r.jI)(e.highlightColor,n)),void 0!==e.isActive&&(i.isActive=!!e.isActive,i.isAttribute=!!e.isAttribute),void 0!==e.useByteColors&&(i.useByteColors=!!e.useByteColors),i}};var s=i(77397);let o=0xffffff;function a(e,t){10===e.length?s.A.warn("pickMultipleObjects can only exclude 10 previously picked objects for layers without picking buffers")():e.push(t)}let l=`\
  float disabledPickingIndexCount;
  vec4 disabledPickingIndices0;
  vec4 disabledPickingIndices1;
  vec4 disabledPickingIndices2;
`;function u(e){return e.replace("  vec4 highlightColor;\n} picking;",`  vec4 highlightColor;
${l}} picking;`)}function c(e,t){return[e[t]||0,e[t+1]||0,e[t+2]||0,e[t+3]||0]}let h=`\
vec3 picking_getPickingColorFromIndex(float objectIndex) {
  if (objectIndex < 0.0 || objectIndex >= ${o}.0) {
    return vec3(0.0);
  }

  for (int i = 0; i < 10; i++) {
    if (float(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    vec4 disabledIndices = i < 4
      ? picking.disabledPickingIndices0
      : (i < 8 ? picking.disabledPickingIndices1 : picking.disabledPickingIndices2);
    float disabledIndex = disabledIndices[i - (i / 4) * 4];
    if (disabledIndex == objectIndex) {
      return vec3(0.0);
    }
  }

  float encodedIndex = objectIndex + 1.0;
  return vec3(
    mod(encodedIndex, 256.0),
    mod(floor(encodedIndex / 256.0), 256.0),
    mod(floor(encodedIndex / 65536.0), 256.0)
  );
}

vec3 picking_getPickingColorFromIndex(uint objectIndex) {
  return picking_getPickingColorFromIndex(float(objectIndex));
}

vec3 picking_getPickingColorFromInstanceID() {
  return picking_getPickingColorFromIndex(float(gl_InstanceID));
}

void picking_setPickingColorFromInstanceID() {
  picking_setPickingColor(picking_getPickingColorFromInstanceID());
}
`,d=`\
struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
  disabledPickingIndexCount: f32,
  disabledPickingIndices0: vec4<f32>,
  disabledPickingIndices1: vec4<f32>,
  disabledPickingIndices2: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}

fn picking_getPickingColorFromIndex(objectIndex: u32) -> vec3<f32> {
  if (objectIndex >= ${o}u) {
    return vec3<f32>(0.0);
  }

  for (var i = 0; i < 10; i = i + 1) {
    if (f32(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    let disabledIndices = select(
      picking.disabledPickingIndices2,
      select(picking.disabledPickingIndices1, picking.disabledPickingIndices0, i < 4),
      i < 8
    );
    let disabledIndex = disabledIndices[i % 4];
    if (disabledIndex == f32(objectIndex)) {
      return vec3<f32>(0.0);
    }
  }

  let encodedIndex = objectIndex + 1u;
  return vec3<f32>(
    f32(encodedIndex % 256u),
    f32((encodedIndex / 256u) % 256u),
    f32((encodedIndex / 65536u) % 256u)
  ) / 255.0;
}
`,f={...n,vs:`${u(n.vs)}
${h}`,fs:u(n.fs),source:d,uniformTypes:{...n.uniformTypes,disabledPickingIndexCount:"f32",disabledPickingIndices0:"vec4<f32>",disabledPickingIndices1:"vec4<f32>",disabledPickingIndices2:"vec4<f32>"},defaultUniforms:{...n.defaultUniforms,useByteColors:!0,disabledPickingIndexCount:0,disabledPickingIndices0:[0,0,0,0],disabledPickingIndices1:[0,0,0,0],disabledPickingIndices2:[0,0,0,0]},getUniforms(e,t){let i=n.getUniforms(e,t),r=e.disabledPickingIndices||[];return i.disabledPickingIndexCount=r.length,i.disabledPickingIndices0=c(r,0),i.disabledPickingIndices1=c(r,4),i.disabledPickingIndices2=c(r,8),i},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}}},6953:(e,t,i)=>{"use strict";i.d(t,{$h:()=>g,B8:()=>s,I0:()=>p,Qr:()=>f,Tl:()=>l,Z8:()=>d,a4:()=>o,e$:()=>c,eL:()=>h,fN:()=>m,hs:()=>u,lw:()=>a,mg:()=>n,t5:()=>y,v3:()=>v});var r=i(55218);function n(e,t){if(e===t){let i=t[1],r=t[2],n=t[3],s=t[6],o=t[7],a=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=i,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=s,e[11]=t[14],e[12]=n,e[13]=o,e[14]=a}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function s(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],f=t[11],p=t[12],g=t[13],m=t[14],v=t[15],y=i*a-r*o,b=i*l-n*o,_=i*u-s*o,x=r*l-n*a,w=r*u-s*a,P=n*u-s*l,S=c*g-h*p,C=c*m-d*p,E=c*v-f*p,L=h*m-d*g,A=h*v-f*g,T=d*v-f*m,M=y*T-b*A+_*L+x*E-w*C+P*S;return M?(M=1/M,e[0]=(a*T-l*A+u*L)*M,e[1]=(n*A-r*T-s*L)*M,e[2]=(g*P-m*w+v*x)*M,e[3]=(d*w-h*P-f*x)*M,e[4]=(l*E-o*T-u*C)*M,e[5]=(i*T-n*E+s*C)*M,e[6]=(m*_-p*P-v*b)*M,e[7]=(c*P-d*_+f*b)*M,e[8]=(o*A-a*E+u*S)*M,e[9]=(r*E-i*A-s*S)*M,e[10]=(p*w-g*_+v*y)*M,e[11]=(h*_-c*w-f*y)*M,e[12]=(a*C-o*L-l*S)*M,e[13]=(i*L-r*C+n*S)*M,e[14]=(g*b-p*x-m*y)*M,e[15]=(c*x-h*b+d*y)*M,e):null}function o(e){let t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],u=e[8],c=e[9],h=e[10],d=e[11],f=e[12],p=e[13],g=e[14],m=e[15],v=t*o-i*s,y=t*a-r*s,b=i*a-r*o,_=u*p-c*f,x=u*g-h*f,w=c*g-h*p;return l*(t*w-i*x+r*_)-n*(s*w-o*x+a*_)+m*(u*b-c*y+h*v)-d*(f*b-p*y+g*v)}function a(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],u=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],m=t[13],v=t[14],y=t[15],b=i[0],_=i[1],x=i[2],w=i[3];return e[0]=b*r+_*a+x*h+w*g,e[1]=b*n+_*l+x*d+w*m,e[2]=b*s+_*u+x*f+w*v,e[3]=b*o+_*c+x*p+w*y,b=i[4],_=i[5],x=i[6],w=i[7],e[4]=b*r+_*a+x*h+w*g,e[5]=b*n+_*l+x*d+w*m,e[6]=b*s+_*u+x*f+w*v,e[7]=b*o+_*c+x*p+w*y,b=i[8],_=i[9],x=i[10],w=i[11],e[8]=b*r+_*a+x*h+w*g,e[9]=b*n+_*l+x*d+w*m,e[10]=b*s+_*u+x*f+w*v,e[11]=b*o+_*c+x*p+w*y,b=i[12],_=i[13],x=i[14],w=i[15],e[12]=b*r+_*a+x*h+w*g,e[13]=b*n+_*l+x*d+w*m,e[14]=b*s+_*u+x*f+w*v,e[15]=b*o+_*c+x*p+w*y,e}function l(e,t,i){let r,n,s,o,a,l,u,c,h,d,f,p,g=i[0],m=i[1],v=i[2];return t===e?(e[12]=t[0]*g+t[4]*m+t[8]*v+t[12],e[13]=t[1]*g+t[5]*m+t[9]*v+t[13],e[14]=t[2]*g+t[6]*m+t[10]*v+t[14],e[15]=t[3]*g+t[7]*m+t[11]*v+t[15]):(r=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],u=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],e[0]=r,e[1]=n,e[2]=s,e[3]=o,e[4]=a,e[5]=l,e[6]=u,e[7]=c,e[8]=h,e[9]=d,e[10]=f,e[11]=p,e[12]=r*g+a*m+h*v+t[12],e[13]=n*g+l*m+d*v+t[13],e[14]=s*g+u*m+f*v+t[14],e[15]=o*g+c*m+p*v+t[15]),e}function u(e,t,i){let r=i[0],n=i[1],s=i[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function c(e,t,i,n){let s,o,a,l,u,c,h,d,f,p,g,m,v,y,b,_,x,w,P,S,C,E,L,A,T=n[0],M=n[1],I=n[2],R=Math.sqrt(T*T+M*M+I*I);return R<r.p8?null:(T*=R=1/R,M*=R,I*=R,o=Math.sin(i),a=1-(s=Math.cos(i)),l=t[0],u=t[1],c=t[2],h=t[3],d=t[4],f=t[5],p=t[6],g=t[7],m=t[8],v=t[9],y=t[10],b=t[11],_=T*T*a+s,x=M*T*a+I*o,w=I*T*a-M*o,P=T*M*a-I*o,S=M*M*a+s,C=I*M*a+T*o,E=T*I*a+M*o,L=M*I*a-T*o,A=I*I*a+s,e[0]=l*_+d*x+m*w,e[1]=u*_+f*x+v*w,e[2]=c*_+p*x+y*w,e[3]=h*_+g*x+b*w,e[4]=l*P+d*S+m*C,e[5]=u*P+f*S+v*C,e[6]=c*P+p*S+y*C,e[7]=h*P+g*S+b*C,e[8]=l*E+d*L+m*A,e[9]=u*E+f*L+v*A,e[10]=c*E+p*L+y*A,e[11]=h*E+g*L+b*A,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function h(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[4],o=t[5],a=t[6],l=t[7],u=t[8],c=t[9],h=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*n+u*r,e[5]=o*n+c*r,e[6]=a*n+h*r,e[7]=l*n+d*r,e[8]=u*n-s*r,e[9]=c*n-o*r,e[10]=h*n-a*r,e[11]=d*n-l*r,e}function d(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],u=t[8],c=t[9],h=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*n-u*r,e[1]=o*n-c*r,e[2]=a*n-h*r,e[3]=l*n-d*r,e[8]=s*r+u*n,e[9]=o*r+c*n,e[10]=a*r+h*n,e[11]=l*r+d*n,e}function f(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],u=t[4],c=t[5],h=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*n+u*r,e[1]=o*n+c*r,e[2]=a*n+h*r,e[3]=l*n+d*r,e[4]=u*n-s*r,e[5]=c*n-o*r,e[6]=h*n-a*r,e[7]=d*n-l*r,e}function p(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=i+i,a=r+r,l=n+n,u=i*o,c=r*o,h=r*a,d=n*o,f=n*a,p=n*l,g=s*o,m=s*a,v=s*l;return e[0]=1-h-p,e[1]=c+v,e[2]=d-m,e[3]=0,e[4]=c-v,e[5]=1-u-p,e[6]=f+g,e[7]=0,e[8]=d+m,e[9]=f-g,e[10]=1-u-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function g(e,t,i,r,n,s,o){let a=1/(i-t),l=1/(n-r),u=1/(s-o);return e[0]=2*s*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*s*l,e[6]=0,e[7]=0,e[8]=(i+t)*a,e[9]=(n+r)*l,e[10]=(o+s)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*u,e[15]=0,e}let m=function(e,t,i,r,n){let s=1/Math.tan(t/2);if(e[0]=s/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=n&&n!==1/0){let t=1/(r-n);e[10]=(n+r)*t,e[14]=2*n*r*t}else e[10]=-1,e[14]=-2*r;return e},v=function(e,t,i,r,n,s,o){let a=1/(t-i),l=1/(r-n),u=1/(s-o);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+i)*a,e[13]=(n+r)*l,e[14]=(o+s)*u,e[15]=1,e};function y(e,t,i,n){let s,o,a,l,u,c,h,d,f,p,g=t[0],m=t[1],v=t[2],y=n[0],b=n[1],_=n[2],x=i[0],w=i[1],P=i[2];if(Math.abs(g-x)<r.p8&&Math.abs(m-w)<r.p8&&Math.abs(v-P)<r.p8)return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e;return s=1/Math.sqrt((d=g-x)*d+(f=m-w)*f+(p=v-P)*p),d*=s,f*=s,p*=s,(s=Math.sqrt((o=b*p-_*f)*o+(a=_*d-y*p)*a+(l=y*f-b*d)*l))?(o*=s=1/s,a*=s,l*=s):(o=0,a=0,l=0),(s=Math.sqrt((u=f*l-p*a)*u+(c=p*o-d*l)*c+(h=d*a-f*o)*h))?(u*=s=1/s,c*=s,h*=s):(u=0,c=0,h=0),e[0]=o,e[1]=u,e[2]=d,e[3]=0,e[4]=a,e[5]=c,e[6]=f,e[7]=0,e[8]=l,e[9]=h,e[10]=p,e[11]=0,e[12]=-(o*g+a*m+l*v),e[13]=-(u*g+c*m+h*v),e[14]=-(d*g+f*m+p*v),e[15]=1,e}},6994:(e,t,i)=>{"use strict";function r(e,t,i){let r=t[0],n=t[1],s=i[3]*r+i[7]*n||1;return e[0]=(i[0]*r+i[4]*n)/s,e[1]=(i[1]*r+i[5]*n)/s,e}function n(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[3]*r+i[7]*n+i[11]*s||1;return e[0]=(i[0]*r+i[4]*n+i[8]*s)/o,e[1]=(i[1]*r+i[5]*n+i[9]*s)/o,e[2]=(i[2]*r+i[6]*n+i[10]*s)/o,e}function s(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[2]*n,e[1]=i[1]*r+i[3]*n,e[2]=t[2],e}i.d(t,{B$:()=>r,J4:()=>s,cL:()=>n})},7276:(e,t,i)=>{"use strict";i.d(t,{A:()=>u});var r=i(76741),n=i(18086),s=i(94878),o=i(58038),a=i(71343);class l extends r.A{constructor(e={}){let t,{latitude:i=0,longitude:r=0,zoom:a=0,pitch:l=0,bearing:u=0,nearZMultiplier:c=.1,farZMultiplier:h=1.01,nearZ:d,farZ:f,orthographic:p=!1,projectionMatrix:g,repeat:m=!1,worldOffset:v=0,position:y,padding:b,legacyMeterSizes:_=!1}=e,{width:x,height:w,altitude:P=1.5}=e,S=Math.pow(2,a);x=x||1,w=w||1;let C=null;if(g)P=g[5]/2,t=(0,n.Os)(P);else{let r;if(e.fovy?(t=e.fovy,P=(0,n.wZ)(t)):t=(0,n.Os)(P),b){let{top:e=0,bottom:t=0}=b;r=[0,(0,s.qE)((e+w-t)/2,0,w)-w/2]}C=(0,n.om)({width:x,height:w,scale:S,center:y&&[0,0,y[2]*(0,n.mY)(i)],offset:r,pitch:l,fovy:t,nearZMultiplier:c,farZMultiplier:h}),Number.isFinite(d)&&(C.near=d),Number.isFinite(f)&&(C.far=f)}let E=(0,n.rY)({height:w,pitch:l,bearing:u,scale:S,altitude:P});v&&(E=new o.k().translate([512*v,0,0]).multiplyLeft(E)),super({...e,width:x,height:w,viewMatrix:E,longitude:r,latitude:i,zoom:a,...C,fovy:t,focalDistance:P}),this.latitude=i,this.longitude=r,this.zoom=a,this.pitch=l,this.bearing=u,this.altitude=P,this.fovy=t,this.orthographic=p,this._subViewports=m?[]:null,this._pseudoMeters=_,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let e=this.getBounds(),t=Math.floor((e[0]+180)/360),i=Math.ceil((e[2]-180)/360);for(let e=t;e<=i;e++){let t=e?new l({...this,worldOffset:e}):this;this._subViewports.push(t)}}return this._subViewports}equals(e){return e instanceof l&&e._pseudoMeters===this._pseudoMeters&&super.equals(e)}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*(0,n.mY)(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,i]=this.unprojectFlat(e),r=(e[2]||0)/(0,n.mY)(i);return[t,i,r]}addMetersToLngLat(e,t){return(0,n.dT)(e,t)}panByPosition(e,t,i){let r=(0,n.xJ)(t,this.pixelUnprojectionMatrix),s=this.projectFlat(e),o=a.WQ([],s,a.ze([],r)),l=a.WQ([],this.center,o),[u,c]=this.unprojectFlat(l);return{longitude:u,latitude:c}}panByPosition3D(e,t){let i=e[2]||0,r=a.jb([],e,this.unproject(t,{targetZ:i}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=(0,n.gW)(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(e,t={}){let{width:i,height:r}=this,{longitude:s,latitude:o,zoom:a}=(0,n.Fe)({width:i,height:r,bounds:e,...t});return new l({width:i,height:r,longitude:s,latitude:o,zoom:a})}}l.displayName="WebMercatorViewport";let u=l},7617:(e,t,i)=>{"use strict";i.d(t,{l:()=>o});var r=i(29101),n=i(38380),s=i(76807);class o{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;directBindings={};constructor(e,t){for(let i of(Object.assign(this.options,t),(0,n.$Q)(Object.values(e).filter(h))))e[i.name]=i;for(let[t,i]of(r.R.log(1,"Creating ShaderInputs with modules",Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={},Object.entries(e)))i&&(this._addModule(i),i.name&&t!==i.name&&!this.options.disableWarnings&&r.R.warn(`Module name: ${t} vs ${i.name}`)())}destroy(){}setProps(e){for(let t of(e.bindings&&Object.assign(this.directBindings,e.bindings),Object.keys(e))){if("bindings"===t)continue;let i=e[t]||{},n=this.modules[t];if(n){let e=this.moduleUniforms[t],r=this.moduleBindings[t],{uniforms:o,bindings:l}=function(e,t={}){let i={bindings:{},uniforms:{}};return Object.keys(e).forEach(r=>{let n=e[r];Object.prototype.hasOwnProperty.call(t,r)||(0,s.H9)(n)||"number"==typeof n||"boolean"==typeof n?i.uniforms[r]=n:i.bindings[r]=n}),i}(n.getUniforms?.(i,e)||i,n.uniformTypes);this.moduleUniforms[t]=a(e,o,n.uniformTypes),this.moduleBindings[t]={...r,...l}}else this.options.disableWarnings||r.R.warn(`Module ${t} not found`)()}}getModules(){return Object.values(this.modules)}addModules(e){for(let t of(0,n.$Q)(e)){let e=t.name;this.modules[e]||(this.modules[e]=t,this._addModule(t))}}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let t of Object.values(this.moduleBindings))Object.assign(e,t);return Object.assign(e,this.directBindings),e}getModuleBindingValues(e){let t=this.moduleBindings[e];return t?{...t}:{}}getDebugTable(){let e={};for(let[t,i]of Object.entries(this.moduleUniforms))for(let[r,n]of Object.entries(i))e[`${t}.${r}`]={type:this.modules[t].uniformTypes?.[r],value:String(n)};return e}_addModule(e){let t=e.name;this.moduleUniforms[t]=a({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[t]={}}}function a(e={},t={},i={}){let r={...e};for(let[n,s]of Object.entries(t))void 0!==s&&(r[n]=function e(t,i,r){if(!r||"string"==typeof r)return l(i);if(Array.isArray(r)){if(u(i)||!Array.isArray(i))return l(i);let n=Array.isArray(t)&&!u(t)?[...t]:[],s=n.slice();for(let t=0;t<i.length;t++){let o=i[t];void 0!==o&&(s[t]=e(n[t],o,r[0]))}return s}if(!c(i))return l(i);let n=c(t)?t:{},s={...n};for(let[t,o]of Object.entries(i))void 0!==o&&(s[t]=e(n[t],o,r[t]));return s}(e[n],s,i[n]));return r}function l(e){return ArrayBuffer.isView(e)?Array.prototype.slice.call(e):Array.isArray(e)?u(e)?e.slice():e.map(e=>void 0===e?void 0:l(e)):c(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,void 0===t?void 0:l(t)])):e}function u(e){return ArrayBuffer.isView(e)||Array.isArray(e)&&(0===e.length||"number"==typeof e[0])}function c(e){return!!e&&"object"==typeof e&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function h(e){return!!e?.dependencies}},7724:(e,t,i)=>{"use strict";i.d(t,{JP:()=>o,h1:()=>l,UE:()=>a,vE:()=>n,K7:()=>s,Ak:()=>c,Y0:()=>u});let r=globalThis.Float16Array;function n(e){let t=e.includes("norm"),i=!t&&!e.startsWith("float"),r=e.startsWith("s"),[n,s,o]=h[e]||["uint8 ","i32",1];return{signedType:n,primitiveType:s,byteLength:o,normalized:t,integer:i,signed:r}}function s(e){switch(e){case"uint8":return"unorm8";case"sint8":return"snorm8";case"uint16":return"unorm16";case"sint16":return"snorm16";default:return e}}function o(e,t){switch(t){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}}function a(e){let t=ArrayBuffer.isView(e)?e.constructor:e;if(r&&t===r)return"float16";if(t===Uint8ClampedArray)return"uint8";let i=Object.values(h).find(e=>t===e[4]);if(!i)throw Error(t.name);return i[0]}function l(e){return a(e)}function u(e){if("float16"===e)return r??Uint16Array;let t=h[e];if(!t)throw Error(e);let[,,,,i]=t;return i}function c(e){return u(e)}let h={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]}},8926:(e,t,i)=>{"use strict";i.d(t,{p:()=>a});var r=i(22839);let n=`\
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`,s=`#version 300 es
${n}`;var o=i(40978);class a{device;model;transformFeedback;static defaultProps={...o.K.defaultProps,feedbackBufferMode:"separate",outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type==="webgl"}constructor(e,t=a.defaultProps){if(!a.isSupported(e))throw Error("BufferTransform not yet implemented on WebGPU");this.device=e,this.model=new o.K(this.device,{id:t.id||"buffer-transform-model",fs:t.fs||function(e){let{input:t,inputChannels:i,output:r}={};if(!t)return s;if(!i)throw Error("inputChannels");let n=function(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw Error(`invalid channels: ${e}`)}}(i),o=function(e,t){switch(t){case 1:return`vec4(${e}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${e}, 0.0, 1.0)`;case 3:return`vec4(${e}, 1.0)`;case 4:return e;default:throw Error(`invalid channels: ${t}`)}}(t,i);return`\
#version 300 es
in ${n} ${t};
out vec4 ${r};
void main() {
  ${r} = ${o};
}`}(),topology:t.topology||"point-list",varyings:t.outputs||t.varyings,...t,bufferMode:t.bufferMode||("interleaved"===t.feedbackBufferMode?35980:35981)}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:t.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let t=this.device.beginRenderPass({discard:!0,...e});this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let t=this.getBuffer(e);if(!t)throw Error("BufferTransform#getBuffer");if(t instanceof r.h)return t.readAsync();let{buffer:i,byteOffset:n=0,byteLength:s=i.byteLength}=t;return i.readAsync(n,s)}}},9241:(e,t,i)=>{"use strict";i.d(t,{Ft:()=>l,Tm:()=>o,u4:()=>a});var r=i(11094);let n=/^vertex-list<([^<>]+)>$/,s=/^value-list<([^<>]+)>$/;function o(e){return n.test(e)}function a(e){return s.test(e)}function l(e){let t=function(e){let t=n.exec(e),i=s.exec(e),o=t?.[1]??i?.[1]??e;try{r.E.getVertexFormatInfo(o)}catch{throw Error(`Unsupported GPUVector format ${e}`)}return o}(e),i=o(e),l=a(e),u=r.E.getVertexFormatInfo(t),c=u.type,h=u.normalized,d=function(e,t){if(t)return"f32";switch(e){case"float32":return"f32";case"float16":return"f16";case"uint8":case"uint16":case"uint32":return"u32";case"sint8":case"sint16":case"sint32":return"i32";default:throw Error(`Unsupported GPUVector component type ${e}`)}}(c,h);return{format:e,elementFormat:t,vertexList:i,valueList:l,type:c,signedDataType:function(e,t){if("unorm10-10-10-2"===e)return"uint32";switch(t){case"unorm8":return"uint8";case"snorm8":return"sint8";case"unorm16":return"uint16";case"snorm16":return"sint16";default:return t}}(t,c),primitiveType:d,components:u.components,byteLength:u.byteLength,integer:u.integer,signed:u.signed,normalized:h,...u.webglOnly?{webglOnly:!0}:{}}}},11094:(e,t,i)=>{"use strict";i.d(t,{E:()=>s});var r=i(15821);class n{getVertexFormatInfo(e){let t,i;if("unorm10-10-10-2"===e)return{type:"unorm8",components:4,byteLength:4,integer:!1,signed:!1,normalized:!0};let n="unorm8x4-bgra"===e?"unorm8x4":e;n.endsWith("-webgl")&&(n=n.slice(0,-6),t=!0);let s=n.split("x");if(s.length>2)throw Error(`Unsupported vertex format: ${e}`);let[o,a]=s,l=function(e,t){if(!t)return 1;let i=Number(t);if(2===i||3===i||4===i)return i;throw Error(`Unsupported vertex format: ${e}`)}(e,a),u=function(e,t){try{return r.r.getDataTypeInfo(t)}catch{throw Error(`Unsupported vertex format: ${e}`)}}(e,o);try{i=t?function(e,t,i){if(3!==i)throw Error(`Unsupported vertex format: ${e}`);switch(t){case"uint8":case"sint8":case"unorm8":case"snorm8":case"uint16":case"sint16":case"unorm16":case"snorm16":return`${t}x3-webgl`;default:throw Error(`Unsupported vertex format: ${e}`)}}(e,o,l):this.makeVertexFormat(u.signedType,l,u.normalized)}catch{throw Error(`Unsupported vertex format: ${e}`)}if(i!==(t?e:n))throw Error(`Unsupported vertex format: ${e}`);let c={type:o,components:l,byteLength:u.byteLength*l,integer:u.integer,signed:u.signed,normalized:u.normalized};return t&&(c.webglOnly=!0),c}makeVertexFormat(e,t,i){let n=i?r.r.getNormalizedDataType(e):e;switch(n){case"unorm8":if(1===t)return"unorm8";if(3===t)return"unorm8x3-webgl";return`${n}x${t}`;case"snorm8":if(1===t)return"snorm8";if(3===t)return"snorm8x3-webgl";return`${n}x${t}`;case"uint8":case"sint8":case"float16":if(3===t)throw Error(`size: ${t}`);return 1===t?n:`${n}x${t}`;case"uint16":if(1===t)return"uint16";if(3===t)return"uint16x3-webgl";return`${n}x${t}`;case"sint16":if(1===t)return"sint16";if(3===t)return"sint16x3-webgl";return`${n}x${t}`;case"unorm16":if(1===t)return"unorm16";if(3===t)return"unorm16x3-webgl";return`${n}x${t}`;case"snorm16":if(1===t)return"snorm16";if(3===t)return"snorm16x3-webgl";return`${n}x${t}`;default:return 1===t?n:`${n}x${t}`}}getVertexFormatFromAttribute(e,t,i){if(!t||t>4)throw Error(`size ${t}`);let n=r.r.getDataType(e);return this.makeVertexFormat(n,t,i)}getCompatibleVertexFormat(e){let t;switch(e.primitiveType){case"f32":t="float32";break;case"i32":t="sint32";break;case"u32":t="uint32";break;case"f16":return e.components<=2?"float16x2":"float16x4"}return 1===e.components?t:`${t}x${e.components}`}}let s=new n},11986:(e,t,i)=>{"use strict";i.d(t,{D:()=>s,l:()=>n});var r=i(76894);function n(e){return!!e&&(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions))}function s(e){let t;return(0,r.v)(e,"null loader"),(0,r.v)(n(e),"invalid loader"),Array.isArray(e)&&(t=e[1],e={...e=e[0],options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}},12187:(e,t,i)=>{"use strict";var r,n,s;i.d(t,{Cp:()=>B,EU:()=>en,uq:()=>N,h1:()=>j,Cx:()=>z}),!function(e){e[e.Start=1]="Start",e[e.Move=2]="Move",e[e.End=4]="End",e[e.Cancel=8]="Cancel"}(r||(r={})),function(e){e[e.None=0]="None",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.Up=4]="Up",e[e.Down=8]="Down",e[e.Horizontal=3]="Horizontal",e[e.Vertical=12]="Vertical",e[e.All=15]="All"}(n||(n={})),function(e){e[e.Possible=1]="Possible",e[e.Began=2]="Began",e[e.Changed=4]="Changed",e[e.Ended=8]="Ended",e[e.Recognized=8]="Recognized",e[e.Cancelled=16]="Cancelled",e[e.Failed=32]="Failed"}(s||(s={}));let o="manipulation",a="none",l="pan-x",u="pan-y";class c{constructor(e,t){this.actions="",this.manager=e,this.set(t)}set(e){"compute"===e&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));var t=e.join(" ");if(t.includes(a))return a;let i=t.includes(l),r=t.includes(u);return i&&r?a:i||r?i?l:u:t.includes(o)?o:"auto"}}function h(e){return e.trim().split(/\s+/g)}function d(e,t,i){if(e)for(let r of h(t))e.addEventListener(r,i,!1)}function f(e,t,i){if(e)for(let r of h(t))e.removeEventListener(r,i,!1)}function p(e){return(e.ownerDocument||e).defaultView}function g(e){let t=e.length;if(1===t)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let i=0,r=0,n=0;for(;n<t;)i+=e[n].clientX,r+=e[n].clientY,n++;return{x:Math.round(i/t),y:Math.round(r/t)}}function m(e){let t=[],i=0;for(;i<e.pointers.length;)t[i]={clientX:Math.round(e.pointers[i].clientX),clientY:Math.round(e.pointers[i].clientY)},i++;return{timeStamp:Date.now(),pointers:t,center:g(t),deltaX:e.deltaX,deltaY:e.deltaY}}function v(e,t){let i=t.x-e.x,r=t.y-e.y;return Math.sqrt(i*i+r*r)}function y(e,t){let i=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(i*i+r*r)}function b(e,t){let i=t.clientX-e.clientX;return 180*Math.atan2(t.clientY-e.clientY,i)/Math.PI}function _(e,t){return e===t?n.None:Math.abs(e)>=Math.abs(t)?e<0?n.Left:n.Right:t<0?n.Up:n.Down}function x(e,t,i){return{x:t/e||0,y:i/e||0}}function w(e,t){return"pointerId"in e?e.pointerId:t}function P(e,t){e.movementOrigin=new Map(t.map((e,t)=>[w(e,t),{clientX:e.clientX,clientY:e.clientY}])),e.firstMovementTime=void 0}class S{constructor(e){this.evEl="",this.evWin="",this.evTarget="",this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){!function(e,t,i){let n=i.pointers.length,s=i.changedPointers.length,o=t&r.Start&&n-s==0,a=t&(r.End|r.Cancel)&&n-s==0;i.isFirst=!!o,i.isFinal=!!a,o&&(e.session={}),i.eventType=t;let l=function(e,t){var i,n;let{session:s}=e,{pointers:o}=t,{length:a}=o;s.firstInput||(s.firstInput=m(t)),a>1&&!s.firstMultiple?s.firstMultiple=m(t):1===a&&(s.firstMultiple=!1);let{firstInput:l,firstMultiple:u}=s,c=u?u.center:l.center,h=t.center=g(o);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-l.timeStamp;let d=t.pointers.map(w);if(s.movementOrigin?.size===d.length&&d.every(e=>s.movementOrigin.has(e))||P(s,t.pointers),t.distancePerPointer=t.pointers.map((e,t)=>y(s.movementOrigin.get(d[t]),e)),t.eventType&r.Move&&t.distancePerPointer.some(e=>e>0)&&(s.firstMovementTime??(s.firstMovementTime=t.timeStamp)),t.movementDeltaTime=void 0===s.firstMovementTime?0:t.timeStamp-s.firstMovementTime,t.eventType&(r.End|r.Cancel)){let e=t.changedPointers.map(e=>w(e,t.pointers.indexOf(e)));P(s,t.pointers.filter((t,i)=>!e.includes(d[i])))}t.angle=function(e,t){let i=t.x-e.x;return 180*Math.atan2(t.y-e.y,i)/Math.PI}(c,h),t.distance=v(c,h);let{deltaX:f,deltaY:p}=function(e,t){let i=t.center,n=e.offsetDelta,s=e.prevDelta,o=e.prevInput;return(t.eventType===r.Start||o?.eventType===r.End)&&(s=e.prevDelta={x:o?.deltaX||0,y:o?.deltaY||0},n=e.offsetDelta={x:i.x,y:i.y}),{deltaX:s.x+(i.x-n.x),deltaY:s.y+(i.y-n.y)}}(s,t);t.deltaX=f,t.deltaY=p,t.offsetDirection=_(t.deltaX,t.deltaY);let S=x(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=S.x,t.overallVelocityY=S.y,t.overallVelocity=Math.abs(S.x)>Math.abs(S.y)?S.x:S.y,t.scale=u?(i=u.pointers,y(o[0],o[1])/y(i[0],i[1])):1,t.rotation=u?(n=u.pointers,b(o[1],o[0])-b(n[1],n[0])):0,t.maxPointers=s.prevInput?t.pointers.length>s.prevInput.maxPointers?t.pointers.length:s.prevInput.maxPointers:t.pointers.length;let C=e.element;return function(e,t){let i=e;for(;i;){if(i===t)return!0;i=i.parentNode}return!1}(t.srcEvent.target,C)&&(C=t.srcEvent.target),t.target=C,!function(e,t){let i,n,s,o,a=e.lastInterval||t,l=t.timeStamp-a.timeStamp;if(t.eventType!==r.Cancel&&(l>25||void 0===a.velocity)){let r=t.deltaX-a.deltaX,u=t.deltaY-a.deltaY,c=x(l,r,u);n=c.x,s=c.y,i=Math.abs(c.x)>Math.abs(c.y)?c.x:c.y,o=_(r,u),e.lastInterval=t}else i=a.velocity,n=a.velocityX,s=a.velocityY,o=a.direction;t.velocity=i,t.velocityX=n,t.velocityY=s,t.direction=o}(s,t),t}(e,i);e.emit("hammer.input",l),e.recognize(l),e.session.prevInput=l}(this.manager,e,t)}init(){d(this.element,this.evEl,this.domHandler),d(this.target,this.evTarget,this.domHandler),d(p(this.element),this.evWin,this.domHandler)}destroy(){f(this.element,this.evEl,this.domHandler),f(this.target,this.evTarget,this.domHandler),f(p(this.element),this.evWin,this.domHandler)}}let C={pointerdown:r.Start,pointermove:r.Move,pointerup:r.End,pointercancel:r.Cancel,pointerout:r.Cancel};class E extends S{constructor(e){super(e),this.evEl="pointerdown",this.evWin="pointermove pointerup pointercancel",this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,i=!1,n=C[e.type],s=e.pointerType,o="touch"===s,a=t.findIndex(t=>t.pointerId===e.pointerId);n&r.Start&&(e.buttons||o)?a<0&&(t.push(e),a=t.length-1):n&(r.End|r.Cancel)&&(i=!0),!(a<0)&&(t[a]=e,this.callback(n,{pointers:t,changedPointers:[e],eventType:n,pointerType:s,srcEvent:e}),i&&t.splice(a,1))}}let L=["","webkit","Moz","MS","ms","o"],A={touchAction:"compute",enable:!0,inputTarget:null,cssProps:{userSelect:"none",userDrag:"none",touchCallout:"none",tapHighlightColor:"rgba(0,0,0,0)"}};class T{constructor(e,t){this.options={...A,...t,cssProps:{...A.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new E(this),this.touchAction=new c(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?2:1}recognize(e){let t,{session:i}=this;if(i.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let{recognizers:r}=this,{curRecognizer:n}=i;(!n||n&&n.state&s.Recognized)&&(n=i.curRecognizer=null);let o=0;for(;o<r.length;)t=r[o],2!==i.stopped&&(!n||t===n||t.canRecognizeWith(n))?t.recognize(e):t.reset(),!n&&t.state&(s.Began|s.Changed|s.Ended)&&(n=i.curRecognizer=t),o++}get(e){let{recognizers:t}=this;for(let i=0;i<t.length;i++)if(t[i].options.event===e)return t[i];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t="string"==typeof e?this.get(e):e;if(t){let{recognizers:e}=this,i=e.indexOf(t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:i}=this;for(let r of h(e))i[r]=i[r]||[],i[r].push(t)}off(e,t){if(!e)return;let{handlers:i}=this;for(let r of h(e))t?i[r]&&i[r].splice(i[r].indexOf(t),1):delete i[r]}emit(e,t){let i=this.handlers[e]&&this.handlers[e].slice();if(!i||!i.length)return;t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};let r=0;for(;r<i.length;)i[r](t),r++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[i,r]of Object.entries(this.options.cssProps)){let n=function(e,t){let i=t[0].toUpperCase()+t.slice(1);for(let r of L){let n=r?r+i:t;if(n in e)return n}}(t.style,i);e?(this.oldCssProps[n]=t.style[n],t.style[n]=r):t.style[n]=this.oldCssProps[n]||""}e||(this.oldCssProps={})}}}let M=1;function I(e){return e&s.Cancelled?"cancel":e&s.Ended?"end":e&s.Changed?"move":e&s.Began?"start":""}class R{constructor(e){this.options=e,this.id=M++,this.state=s.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:i}=this;return i[t.id]||(i[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}return(t="string"==typeof e?this.manager.get(e):e)&&delete this.simultaneous[t.id],this}requireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:i}=this;return -1===i.indexOf(t)&&(i.push(t),t.requireFailure(this)),this}dropRequireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}if(t="string"==typeof e?this.manager.get(e):e){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<s.Ended&&this.manager.emit(this.options.event+I(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=s.Ended&&this.manager.emit(this.options.event+I(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=s.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(s.Failed|s.Possible)))return!1;e++}return!0}recognize(e){let t={...e};if(!this.options.enable){this.reset(),this.state=s.Failed;return}this.state&(s.Recognized|s.Cancelled|s.Failed)&&(this.state=s.Possible),this.state=this.process(t),this.state&(s.Began|s.Changed|s.Ended|s.Cancelled)&&this.tryEmit(t)}getEventNames(){return[this.options.event]}reset(){}}class O extends R{attrTest(e){let t=this.options.pointers;return 0===t||e.pointers.length===t}coherentTest(e){let t=this.options.coherent;return!t?.length||t.some(t=>{var i,r;return i=e,(void 0===(r=t).distance||i.distance>=r.distance)&&(void 0===r.distancePerPointer||i.distancePerPointer.length>0&&i.distancePerPointer.every(e=>e>=r.distancePerPointer))&&(void 0===r.movementDeltaTime||i.movementDeltaTime>=r.movementDeltaTime)&&(void 0===r.rotation||Math.abs(((i.rotation+180)%360+360)%360-180)>=r.rotation)&&(void 0===r.scale||Math.abs(i.scale-1)>=r.scale)})}process(e){let{state:t}=this,{eventType:i}=e,n=t&(s.Began|s.Changed),o=this.attrTest(e);return n&&(i&r.Cancel||!o)?t|s.Cancelled:n||o?i&r.End?t|s.Ended:t&s.Began?t|s.Changed:s.Began:s.Failed}}let k=["","start","move","end","cancel"];class B extends R{constructor(e={}){super({enable:!0,event:"doubleclickdrag",pointers:1,interval:500,time:350,threshold:28,dragThreshold:1,pixelsPerScale:120,...e}),this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}getTouchAction(){return[o]}getEventNames(){return k.map(e=>this.options.event+e)}process(e){let{options:t}=this;return e.pointers.length!==t.pointers?(this.reset(),s.Failed):e.eventType&r.Start?this._handleStart(e):e.eventType&r.Move?this._handleMove(e):e.eventType&r.Cancel?this._handleEnd(e,!0):e.eventType&r.End?this._handleEnd(e,!1):s.Failed}reset(){this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}emit(e){if(e){if(this.state===s.Began){if(!this._drag?.active||this._emittedStart)return;this._emittedStart=!0,this.manager.emit(`${this.options.event}start`,e),this.manager.emit(this.options.event,e);return}if(this.state===s.Changed){if(!this._emittedStart)return;this.manager.emit(`${this.options.event}move`,e),this.manager.emit(this.options.event,e);return}if(this.state===s.Ended){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}end`,e),this._emittedStart=!1;return}if(this.state===s.Cancelled){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}cancel`,e),this._emittedStart=!1}}}_handleStart(e){let t=this._getPointerId(e);return this._lastTap&&this._isTapMatch(e,this._lastTap)?(this._tapStart=null,this._lastTap=null,this._drag={startCenter:e.center,pointerId:t,active:!1},this._emittedStart=!1,s.Began):(this._tapStart={center:e.center,timeStamp:e.timeStamp,pointerId:t},this._lastTap=null,this._drag=null,this._emittedStart=!1,s.Failed)}_handleMove(e){if(!this._drag||!this._isSamePointer(e,this._drag.pointerId))return s.Failed;let t=this._drag.startCenter.y-e.center.y;return!this._drag.active&&Math.abs(t)<this.options.dragThreshold?s.Began:(this._drag.active=!0,e.scale=Math.pow(2,t/this.options.pixelsPerScale),this._emittedStart?s.Changed:s.Began)}_handleEnd(e,t){if(this._drag&&this._isSamePointer(e,this._drag.pointerId)){let{active:i,startCenter:r}=this._drag;if(this._drag=null,this._tapStart=null,this._lastTap=null,!i)return this._emittedStart=!1,s.Failed;let n=r.y-e.center.y;return e.scale=Math.pow(2,n/this.options.pixelsPerScale),t?s.Cancelled:s.Ended}return this._tapStart&&this._isSamePointer(e,this._tapStart.pointerId)?(this._isValidTap(e)?this._lastTap={center:e.center,timeStamp:e.timeStamp,pointerId:this._tapStart.pointerId}:this._lastTap=null,this._tapStart=null):t&&this.reset(),s.Failed}_isTapMatch(e,t){return e.timeStamp-t.timeStamp<=this.options.interval&&v(e.center,t.center)<=this.options.threshold}_isValidTap(e){return e.deltaTime<=this.options.time&&e.distance<=this.options.threshold}_getPointerId(e){return"pointerId"in e.srcEvent?e.srcEvent.pointerId:null}_isSamePointer(e,t){return null===t||this._getPointerId(e)===t}}class z extends R{constructor(e={}){super({enable:!0,event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[o]}process(e){let{options:t}=this,i=e.pointers.length===t.pointers,n=e.distance<t.threshold,o=e.deltaTime<t.time;if(this.reset(),e.eventType&r.Start&&0===this.count)return this.failTimeout();if(n&&o&&i){if(e.eventType!==r.End)return this.failTimeout();let i=!this.pTime||e.timeStamp-this.pTime<t.interval,n=!this.pCenter||v(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,n&&i?this.count+=1:this.count=1,this._input=e,0==this.count%t.taps)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=s.Recognized,this.tryEmit(this._input)},t.interval),s.Began):s.Recognized}return s.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=s.Failed},this.options.interval),s.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===s.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}}class D extends O{constructor(){super(...arguments),this.wheelSession=null,this.wheelSessionUnsubscribe=null,this.handleWheelSessionEvent=e=>{"trackpad"===e.device&&this.handleTrackpadEvent(e)}}set(e){let{wheelSession:t,...i}=e;return t&&t!==this.wheelSession&&(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=null,this.wheelSession=t),super.set(i),this.updateWheelSessionSubscription(),this}getTrackpadInput(e,t={}){let{srcEvent:i}=e,r=t.deltaX??e.deltaX,n=t.deltaY??e.deltaY,s=_(r,n),o=Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY);return{pointers:[i,i],changedPointers:[i,i],pointerType:"trackpad",srcEvent:i,eventType:e.eventType,timeStamp:e.timeStamp,deltaTime:e.deltaTime,center:e.center,deltaX:r,deltaY:n,angle:180*Math.atan2(n,r)/Math.PI,distance:Math.sqrt(r*r+n*n),distancePerPointer:[o,o],movementDeltaTime:e.deltaTime,scale:1,rotation:0,direction:s,offsetDirection:s,velocity:e.velocity,velocityX:e.velocityX,velocityY:e.velocityY,overallVelocity:e.overallVelocity,overallVelocityX:e.overallVelocityX,overallVelocityY:e.overallVelocityY,maxPointers:2,target:i.target||this.manager.element,additionalEvent:"",...t}}updateWheelSessionSubscription(){let e=!!(this.wheelSession&&this.options.enable&&this.options.trackpad&&2===this.options.pointers);e&&!this.wheelSessionUnsubscribe?this.wheelSessionUnsubscribe=this.wheelSession.on(this.handleWheelSessionEvent):!e&&this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe(),this.wheelSessionUnsubscribe=null)}}let F=["","start","move","end","cancel","up","down","left","right"];class N extends D{constructor(e={}){super({enable:!0,pointers:1,event:"pan",threshold:10,direction:n.All,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1,this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&n.Horizontal&&t.push(u),e&n.Vertical&&t.push(l),t}getEventNames(){return F.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,i=!0,{distance:r}=e,{direction:s}=e,o=e.deltaX,a=e.deltaY;return s&t.direction||(t.direction&n.Horizontal?(s=0===o?n.None:o<0?n.Left:n.Right,i=o!==this.pX,r=Math.abs(e.deltaX)):(s=0===a?n.None:a<0?n.Up:n.Down,i=a!==this.pY,r=Math.abs(e.deltaY))),e.direction=s,i&&r>t.threshold&&!!(s&t.direction)}attrTest(e){let t=!!(this.state&s.Began),i=!(this.options.coherent?.length&&e.eventType&(r.End|r.Cancel));return super.attrTest(e)&&(t||i&&this.coherentTest(e)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=n[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=!e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(s.Recognized|s.Cancelled|s.Failed)&&(this.state=s.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:-e.deltaX,deltaY:-e.deltaY,velocity:-e.velocity,velocityX:-e.velocityX,velocityY:-e.velocityY,overallVelocity:-e.overallVelocity,overallVelocityX:-e.overallVelocityX,overallVelocityY:-e.overallVelocityY})),e.isFinal&&(this.trackpadGesture=!1))}}let $=["","start","move","end","cancel","in","out"];class j extends D{constructor(e={}){super({enable:!0,event:"pinch",threshold:0,pointers:2,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1}getTouchAction(){return[a]}getEventNames(){return $.map(e=>this.options.event+e)}attrTest(e){let t=!!this.options.coherent?.length,i=!!(this.state&s.Began),n=!(t&&e.eventType&(r.End|r.Cancel));return super.attrTest(e)&&(i||n&&(t?this.coherentTest(e):Math.abs(e.scale-1)>this.options.threshold))}emit(e){if(1!==e.scale){let t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(s.Recognized|s.Cancelled|s.Failed)&&(this.state=s.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:0,deltaY:0,velocity:0,velocityX:0,velocityY:0,overallVelocity:0,overallVelocityX:0,overallVelocityY:0,scale:Math.exp(-e.deltaY/100)})),e.isFinal&&(this.trackpadGesture=!1))}}class U{constructor(e,t,i){this.element=e,this.callback=t,this.options=i}listen(e,t){t?this.element.addEventListener(e,this.handleEvent,{passive:!1}):this.element.removeEventListener(e,this.handleEvent)}}let V="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"";"undefined"!=typeof window&&window;let G=-1!==V.indexOf("firefox");class W extends U{constructor(e,t,i){i.enable=i.enable??!1,super(e,t,i),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(G&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=40)),e.shiftKey&&t&&(t*=.25),this.callback({type:"wheel",center:{x:e.clientX,y:e.clientY},delta:-t,device:this.options.wheelSession?.device??"unknown",srcEvent:e,pointerType:"mouse",target:e.target})},i.enable&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{}),this.listen("wheel",!0))}destroy(){this.listen("wheel",!1),this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0}enableEventType(e,t){"wheel"===e&&this.options.enable!==t&&(this.options.enable=t,t&&!this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{})),this.listen("wheel",t),t||(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0))}}let H={classificationDelay:32,endDelay:80};class q{constructor(e,t={}){this.subscriptions=new Map,this.session=null,this.classificationTimer=null,this.endTimer=null,this.pressedControlKeys=new Set,this.listeningForControlKeys=!1,this.handleEvent=e=>{if(!this.hasSubscribers)return"unknown";let t=function(e,t){let i=e.deltaX,r=e.deltaY;return 1===e.deltaMode&&(i*=40,r*=40),{event:e,timeStamp:e.timeStamp,deltaX:i,deltaY:r,isControlKeyDown:t}}(e,this.pressedControlKeys.size>0),i=this.session;if(i&&t.timeStamp-i.lastTimeStamp>=this.options.endDelay){if(this.end(),!this.hasSubscribers)return"unknown";i=null}i?(this.scheduleEnd(),this.addSample(i,t)):(i=this.startPendingSession(t),this.scheduleEnd());let{device:r}=i;return"unknown"===r&&"unknown"!==(r=Y(i.samples,!1))&&this.begin(i,r),r},this.finishClassification=()=>{if(this.classificationTimer=null,!this.session||"unknown"!==this.session.device)return;let e=this.session,t=Y(e.samples,!0);this.begin(e,"unknown"===t?"mouse":t)},this.end=()=>{if(!this.session)return;if("unknown"===this.session.device){let e=this.session,t=Y(e.samples,!0);this.begin(e,"unknown"===t?"mouse":t)}if(!this.session)return;let e=this.session;this.emit(r.End,e.lastEvent),this.reset()},this.handleKeyDown=e=>{"Control"===e.key&&this.pressedControlKeys.add(e.code||e.key)},this.handleKeyUp=e=>{"Control"===e.key&&(e.code?this.pressedControlKeys.delete(e.code):this.pressedControlKeys.clear())},this.handleWindowBlur=()=>{this.pressedControlKeys.clear()},this.element=e,this.options={...H,...t},this.element?.addEventListener("wheel",this.handleEvent,{passive:!0})}get hasSubscribers(){return this.subscriptions.size>0}get device(){return this.session?.device??"unknown"}on(e){let t={listener:e};return this.subscriptions.set(e,t),this.updateControlKeyEventListeners(),()=>{this.subscriptions.get(e)===t&&this.off(e)}}off(e){this.subscriptions.delete(e),this.updateControlKeyEventListeners(),this.hasSubscribers||this.reset()}cancel(){let e=this.session;e&&"unknown"!==e.device&&this.emit(r.Cancel,e.lastEvent),this.reset()}destroy(){this.cancel(),this.subscriptions.clear(),this.updateControlKeyEventListeners(),this.element?.removeEventListener("wheel",this.handleEvent)}startPendingSession(e){let t={samples:[e],device:"unknown",firstTimeStamp:e.timeStamp,lastTimeStamp:e.timeStamp,totalDeltaX:e.deltaX,totalDeltaY:e.deltaY,velocityX:0,velocityY:0,lastEvent:e.event};return this.session=t,this.classificationTimer=globalThis.setTimeout(this.finishClassification,this.options.classificationDelay),t}addSample(e,t){if(e.samples.push(t),e.lastTimeStamp=t.timeStamp,e.lastEvent=t.event,e.totalDeltaX+=t.deltaX,e.totalDeltaY+=t.deltaY,"unknown"!==e.device){let i=e.samples[e.samples.length-2],n=t.timeStamp-i.timeStamp;e.velocityX=n>0?t.deltaX/n:0,e.velocityY=n>0?t.deltaY/n:0,this.emit(r.Move,t.event,{velocityX:e.velocityX,velocityY:e.velocityY})}}begin(e,t){e.device=t,this.clearClassificationTimer(),this.emit(r.Start,e.samples[0].event);let i=e.lastTimeStamp-e.firstTimeStamp;e.velocityX=i>0?e.totalDeltaX/i:0,e.velocityY=i>0?e.totalDeltaY/i:0,this.emit(r.Move,e.lastEvent,{velocityX:e.velocityX,velocityY:e.velocityY})}scheduleEnd(){this.clearEndTimer(),this.endTimer=globalThis.setTimeout(this.end,this.options.endDelay)}emit(e,t,i){let n=this.session;if(!n||"unknown"===n.device)return;let s=e===r.Start,o=e===r.End||e===r.Cancel,a=s?n.firstTimeStamp:n.lastTimeStamp,l=s?0:Math.max(0,a-n.firstTimeStamp),u=s?0:n.totalDeltaX,c=s?0:n.totalDeltaY,h=l>0?u/l:0,d=l>0?c/l:0,f=s?0:i?.velocityX??n.velocityX,p=s?0:i?.velocityY??n.velocityY,g={eventType:e,device:n.device,srcEvent:t,timeStamp:a,center:{x:t.clientX,y:t.clientY},deltaX:u,deltaY:c,deltaTime:l,velocity:Math.abs(f)>Math.abs(p)?f:p,velocityX:f,velocityY:p,overallVelocity:Math.abs(h)>Math.abs(d)?h:d,overallVelocityX:h,overallVelocityY:d,isFirst:s,isFinal:o};for(let{listener:e}of[...this.subscriptions.values()])e(g)}reset(){this.clearClassificationTimer(),this.clearEndTimer(),this.session=null}clearClassificationTimer(){null!==this.classificationTimer&&(globalThis.clearTimeout(this.classificationTimer),this.classificationTimer=null)}clearEndTimer(){null!==this.endTimer&&(globalThis.clearTimeout(this.endTimer),this.endTimer=null)}updateControlKeyEventListeners(){let e=this.hasSubscribers,t="undefined"!=typeof window?window:globalThis.document?.defaultView;t&&e!==this.listeningForControlKeys&&(this.listeningForControlKeys=e,e?(t.addEventListener("keydown",this.handleKeyDown,!0),t.addEventListener("keyup",this.handleKeyUp,!0),t.addEventListener("blur",this.handleWindowBlur)):(t.removeEventListener("keydown",this.handleKeyDown,!0),t.removeEventListener("keyup",this.handleKeyUp,!0),t.removeEventListener("blur",this.handleWindowBlur),this.pressedControlKeys.clear()))}}function Y(e,t){return e.some(({event:e,isControlKeyDown:t})=>e.ctrlKey&&!t)?"trackpad":e.some(({event:e})=>0!==e.deltaMode)||e.some(Z)||e.every(({event:e})=>{let t=e.wheelDelta;return void 0!==t&&Math.abs(t)%40==0})?"mouse":e.some(({deltaX:e})=>0!==e)||e.length>1&&function(e){for(let t=0;t<e.length;t++){let i=e[t];if(Math.abs(i.deltaX)>40||Math.abs(i.deltaY)>40||t>0&&i.timeStamp-e[t-1].timeStamp>40)return!1}return!0}(e)?"trackpad":t?"mouse":"unknown"}function Z({event:e,deltaX:t,deltaY:i}){if(0!==t||0===i)return!1;if(Number.isInteger(Math.abs(i/4.000244140625)))return!0;let r=e.wheelDelta;return"number"==typeof r&&0!==r&&r%120==0}let K=["mousedown","mousemove","mouseup","mouseover","mouseout","mouseenter","mouseleave"];class X extends U{constructor(e,t,i){super(e,t,{enable:!0,...i}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;let{enable:r=!1}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,r&&K.forEach(e=>this.listen(e,!0))}destroy(){K.forEach(e=>this.listen(e,!1))}enableEventType(e,t){switch(e){case"pointermove":this.enableMoveEvent!==t&&(this.enableMoveEvent=t,this.listen("mousedown",t),this.listen("mousemove",t),this.listen("mouseup",t));break;case"pointerover":this.enableOverEvent!==t&&(this.enableOverEvent=t,this.listen("mouseover",t));break;case"pointerout":this.enableOutEvent!==t&&(this.enableOutEvent=t,this.listen("mouseout",t));break;case"pointerenter":this.enableEnterEvent!==t&&(this.enableEnterEvent=t,this.listen("mouseenter",t));break;case"pointerleave":this.enableLeaveEvent!==t&&(this.enableLeaveEvent=t,this.listen("mouseleave",t))}}handleOverEvent(e){this.enableOverEvent&&"mouseover"===e.type&&this._emit("pointerover",e)}handleOutEvent(e){this.enableOutEvent&&"mouseout"===e.type&&this._emit("pointerout",e)}handleEnterEvent(e){this.enableEnterEvent&&"mouseenter"===e.type&&this._emit("pointerenter",e)}handleLeaveEvent(e){this.enableLeaveEvent&&"mouseleave"===e.type&&this._emit("pointerleave",e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case"mousedown":e.button>=0&&(this.pressed=!0);break;case"mousemove":0===e.buttons&&(this.pressed=!1),this.pressed||this._emit("pointermove",e);break;case"mouseup":this.pressed=!1}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:"mouse",target:t.target})}}let Q=["keydown","keyup"];class J extends U{constructor(e,t,i){super(e,t,{enable:!0,tabIndex:0,...i}),this.handleEvent=e=>{let t=e.target||e.srcElement;("INPUT"!==t.tagName||"text"!==t.type)&&"TEXTAREA"!==t.tagName&&(this.enableDownEvent&&"keydown"===e.type&&this.callback({type:"keydown",srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&"keyup"===e.type&&this.callback({type:"keyup",srcEvent:e,key:e.key,target:e.target}))};let{enable:r=!1}=this.options;this.enableDownEvent=r,this.enableUpEvent=r,e.tabIndex=this.options.tabIndex,e.style.outline="none",r&&Q.forEach(e=>this.listen(e,!0))}destroy(){Q.forEach(e=>this.listen(e,!1))}enableEventType(e,t){"keydown"===e&&this.enableDownEvent!==t&&(this.enableDownEvent=t,this.listen(e,t)),"keyup"===e&&this.enableUpEvent!==t&&(this.enableUpEvent=t,this.listen(e,t))}}class ee extends U{constructor(e,t,i){i.enable=i.enable??!1,super(e,t,i),this.handleEvent=e=>{this.options.enable&&this.callback({type:"contextmenu",center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:"mouse",target:e.target})},i.enable&&this.listen("contextmenu",!0)}destroy(){this.listen("contextmenu",!1)}enableEventType(e,t){"contextmenu"===e&&this.options.enable!==t&&(this.options.enable=t,this.listen("contextmenu",t))}}let et={pointerdown:1,pointermove:2,pointerup:4,mousedown:1,mousemove:2,mouseup:4},ei={srcElement:"root",priority:0};class er{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),i=e.srcEvent.target;for(;i&&i!==t.rootElement;){if(this._emit(t,i),t.handled)return;i=i.parentNode}this._emit(t,"root")},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,i,r=!1,n=!1){let{handlers:s,handlersByElement:o}=this,a={...ei,...i},l=o.get(a.srcElement);l||(l=[],o.set(a.srcElement,l));let u={type:e,handler:t,srcElement:a.srcElement,priority:a.priority};r&&(u.once=!0),n&&(u.passive=!0),s.push(u),this._active=this._active||!u.passive;let c=l.length-1;for(;c>=0&&!(l[c].priority>=u.priority);)c--;l.splice(c+1,0,u)}remove(e,t){let{handlers:i,handlersByElement:r}=this;for(let n=i.length-1;n>=0;n--){let s=i[n];if(s.type===e&&s.handler===t){i.splice(n,1);let e=r.get(s.srcElement);e.splice(e.indexOf(s),1),0===e.length&&r.delete(s.srcElement)}}this._active=i.some(e=>!e.passive)}_emit(e,t){let i=this.handlersByElement.get(t);if(i){let t=!1,r=()=>{e.handled=!0},n=()=>{e.handled=!0,t=!0},s=[];for(let o=0;o<i.length;o++){let{type:a,handler:l,once:u}=i[o];if(l({...e,type:a,stopPropagation:r,stopImmediatePropagation:n}),u&&s.push(i[o]),t)break}for(let e=0;e<s.length;e++){let{type:t,handler:i}=s[e];this.remove(t,i)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...function(e){let t=et[e.srcEvent.type];if(!t)return null;let{buttons:i,button:r}=e.srcEvent,n=!1,s=!1,o=!1;return 2===t?(n=!!(1&i),s=!!(4&i),o=!!(2&i)):(n=0===r,s=1===r,o=2===r),{leftButton:n,middleButton:s,rightButton:o}}(e),...function(e,t){let i=e.center;if(!i)return null;let r=t.getBoundingClientRect(),n=r.width/t.offsetWidth||1,s=r.height/t.offsetHeight||1,o={x:(i.x-r.left-t.clientLeft)/n,y:(i.y-r.top-t.clientTop)/s};return{center:i,offsetCenter:o}}(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}}class en{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:"compute",tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,this.wheelSession=new q(e),!e)return;for(let t of(this.manager=new T(e,this.options),this.options.recognizers)){let{recognizer:e,recognizeWith:i,requireFailure:r}=function(e){let t;if("recognizer"in e)return e;let i=Array.isArray(e)?[...e]:[e];return{recognizer:t="function"==typeof i[0]?new(i.shift())(i.shift()||{}):i.shift(),recognizeWith:"string"==typeof i[0]?[i[0]]:i[0],requireFailure:"string"==typeof i[1]?[i[1]]:i[1]}}(t);this.manager.add(e),i&&e.recognizeWith(i),r&&e.requireFailure(r)}this.manager.on("hammer.input",this._onBasicInput),this.wheelInput=new W(e,this._onOtherEvent,{enable:!1,wheelSession:this.wheelSession}),this.moveInput=new X(e,this._onOtherEvent,{enable:!1}),this.keyInput=new J(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new ee(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}getElement(){return this.element}destroy(){if(!this.element)return void this.wheelSession.destroy();this.wheelInput.destroy(),this.wheelSession.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy()}on(e,t,i){this._addEventHandler(e,t,i,!1)}once(e,t,i){this._addEventHandler(e,t,i,!0)}watch(e,t,i){this._addEventHandler(e,t,i,!1,!0)}off(e,t){this._removeEventHandler(e,t)}emit(e){this.manager?.emit(e.type,e)}_toggleRecognizer(e,t){let{manager:i}=this;if(!i)return;let r=i.get(e);r&&(r.set({enable:t,wheelSession:this.wheelSession}),i.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,i,r,n){if("string"!=typeof e){for(let[s,o]of(i=t,Object.entries(e)))this._addEventHandler(s,o,i,r,n);return}let{manager:s,events:o}=this;if(!s)return;let a=o.get(e);!a&&(a=new er(this,this._getRecognizerName(e)||e),o.set(e,a),s&&s.on(e,a.handleEvent)),a.add(e,t,i,r,n),a.isEmpty()||this._toggleRecognizer(a.recognizerName,!0)}_removeEventHandler(e,t){if("string"!=typeof e){for(let[t,i]of Object.entries(e))this._removeEventHandler(t,i);return}let{events:i}=this,r=i.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of i.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}}},12522:(e,t,i)=>{"use strict";i.d(t,{Ef:()=>l,JO:()=>u,Lv:()=>a,TC:()=>o});var r=i(29101),n=i(56823),s=i(11094);function o(e){return e.attributes?e.attributes.map(e=>e.attribute):[e.name]}function a(e){return Object.fromEntries(e.attributes.map(e=>[e.name,e.location]))}function l(e){let t=1/0;for(let i of e)void 0!==i&&(t=Math.min(t,i));return t}function u(e,t,i){var o=t;for(let e of o)(e.attributes&&e.format||!e.attributes&&!e.format)&&r.R.warn(`BufferLayout ${e.name} must have either 'attributes' or 'format' field`)();let a=new Map;for(let e of t){let t=function(e){if("number"==typeof e.byteStride)return e.byteStride;if(e.attributes){let t=0;for(let i of e.attributes)t+=s.E.getVertexFormatInfo(i.format).byteLength;return t}return s.E.getVertexFormatInfo(e.format).byteLength}(e);if(e.attributes)for(let i of e.attributes)a.has(i.attribute)||a.set(i.attribute,{bufferName:e.name,stepMode:e.stepMode,vertexFormat:i.format,byteOffset:i.byteOffset,byteStride:t});else e.format&&!a.has(e.name)&&a.set(e.name,{bufferName:e.name,stepMode:e.stepMode,vertexFormat:e.format,byteOffset:0,byteStride:t})}return e.attributes.map(e=>{let t=a.get(e.name);!t&&i?.warnOnMissingBufferLayout&&r.R.warn(`layout for attribute "${e.name}" not present in buffer layout`)();let o=n.Co.getAttributeShaderTypeInfo(e.type),l=t?.vertexFormat||s.E.getCompatibleVertexFormat(o);return{attributeName:e.name,bufferName:t?.bufferName||e.name,location:e.location,vertexFormat:l,byteOffset:t?.byteOffset??0,byteStride:t?.byteStride??s.E.getVertexFormatInfo(l).byteLength,stepMode:t?.stepMode||e.stepMode||(e.name.startsWith("instance")?"instance":"vertex")}}).sort((e,t)=>e.location-t.location)}},13750:(e,t,i)=>{"use strict";i.d(t,{P:()=>l});var r=i(19612),n=i(79241),s=i(24387),o=i(44293);let a=new n.Ry;function l({module:e,elementWise:t=!1,expression:i,inputs:n,output:l,operationType:u=l.type,outputBuffer:c}){var h;if(!e.source)throw Error(`WebGPU computation ${e.name} requires WGSL source`);let d=Array.isArray(h=n)?h.map((e,t)=>[`x${t}`,e]):Object.entries(h),f=d.map(([e,t])=>({name:e,input:t})),p=f.filter(({input:e})=>!e.isConstant).map((e,t)=>({...e,index:t})),g=(0,o.iP)(u),m=(0,o.iP)(l.type),v={TYPE:g,RESULT_LEN:l.size.toString()},y=(0,s.BB)(Math.ceil(l.length/64),c.device.limits.maxComputeWorkgroupsPerDimension);for(let[e,t]of d)v[`${e.toUpperCase()}_LEN`]=t.size.toString();let b=`
${function(e,t){for(let i in t)e=e.replaceAll(`{${i}}`,t[i]);return e}(e.source,v)}
${p.map(({name:e,input:t,index:i})=>(function(e,t,i){if(t.isConstant)return"";let r=(0,o.iP)(t.type);return`@group(0) @binding(${i}) var<storage, read> ${e}: array<${r}>;`})(e,t,i)).join("\n")}
${f.map(({name:e,input:t})=>(function(e,t,i){let r=(0,o.iP)(i),n=t.type===i?"":r,s=t.stride/t.ValueType.BYTES_PER_ELEMENT,a=t.offset/t.ValueType.BYTES_PER_ELEMENT;return t.isConstant?`fn read_${e}(_rowIndex: u32) -> array<${r}, ${t.size}> {
  return array<${r}, ${t.size}>(${function(e,t){let i=e.value;if(!i)throw Error(`Constant input ${e} is missing CPU values`);return Array.from({length:e.size},(e,r)=>(0,o.Lm)(t,i[r]??0)).join(", ")}(t,n)});
}`:`fn read_${e}(rowIndex: u32) -> array<${r}, ${t.size}> {
  var value: array<${r}, ${t.size}>;
  let rowOffset = ${a}u + rowIndex * ${s}u;
${Array.from({length:t.size},(t,i)=>n?`  value[${i}] = ${n}(${e}[rowOffset + ${i}u]);`:`  value[${i}] = ${e}[rowOffset + ${i}u];`).join("\n")}
  return value;
}`})(e,t,u)).join("\n")}
${function(e,t){let i=(0,o.iP)(e.type);return`@group(0) @binding(${t}) var<storage, read_write> result: array<${i}>;`}(l,p.length)}
${function(e){let t=e.stride/e.ValueType.BYTES_PER_ELEMENT,i=e.offset/e.ValueType.BYTES_PER_ELEMENT,r=(0,o.iP)(e.type);return`fn write_result(rowIndex: u32, value: array<${r}, ${e.size}>) {
  let rowOffset = ${i}u + rowIndex * ${t}u;
${Array.from({length:e.size},(e,t)=>`  result[rowOffset + ${t}u] = value[${t}];`).join("\n")}
}`}(l)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${(0,s.vL)(y,64)};
  if (rowIndex >= ${l.length}u) {
    return;
  }

${f.map(({name:e})=>`  let ${e} = read_${e}(rowIndex);`).join("\n")}
  var result: array<${m}, ${l.size}>;
${function(e,t,i,r,n){let s="";if(n)for(let e=0;e<i.size;e++)s+=`  result[${e}] = ${n(e)};
`;else if(r){let r=(0,o._1)(i.type),n=(0,o.iP)(i.type);for(let a=0;a<i.size;a++){let i=t.map(([e,t])=>a<t.size?(0,o.iP)(t.type)===n?`${e}[${a}]`:`${n}(${e}[${a}])`:r);s+=`  result[${a}] = ${e}(${i.join(", ")});
`}}else s+=`result = ${e}(${t.map(([e])=>e).join(", ")});`;return s.trimEnd()}(e.name,d,l,t,i)}
  write_result(rowIndex, result);
}
`,_=new r.C(c.device,{source:b,modules:e.dependencies,shaderAssembler:a,shaderLayout:{bindings:[...p.map(({name:e},t)=>({name:e,type:"storage",group:0,location:t})),{name:"result",type:"storage",group:0,location:p.length}]}}),x=Object.fromEntries(p.map(({name:e,input:t})=>[e,t.buffer]));x.result=c,_.setBindings(x);let w=c.device.beginComputePass({});c.device.statsManager.getStats("GPGPU Operation Counts").get("Computation Runs").incrementCount(),_.dispatch(w,y.x,y.y,y.z),w.end(),c.device.submit(),_.destroy()}},15821:(e,t,i)=>{"use strict";i.d(t,{r:()=>s});var r=i(7724);class n{getDataTypeInfo(e){return(0,r.vE)(e)}getNormalizedDataType(e){return(0,r.K7)(e)}alignTo(e,t){return(0,r.JP)(e,t)}getDataType(e){return(0,r.h1)(e)}getTypedArrayConstructor(e){return(0,r.Ak)(e)}}let s=new n},17103:(e,t,i)=>{"use strict";i.d(t,{A:()=>t6});var r=i(48616);let n=1,s=1;class o{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;constructor(){}addChannel(e){let{delay:t=0,duration:i=1/0,rate:r=1,repeat:s=1}=e,o=n++,a={time:0,delay:t,duration:i,rate:r,repeat:s};return this._setChannelTime(a,this.time),this.channels.set(o,a),o}removeChannel(e){for(let[t,i]of(this.channels.delete(e),this.animations))i.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return void 0!==t&&this.time>=t.delay+t.duration*t.repeat}getTime(e){if(void 0===e)return this.time;let t=this.channels.get(e);return void 0===t?-1:t.time}setTime(e){for(let t of(this.time=Math.max(0,e),this.channels.values()))this._setChannelTime(t,this.time);for(let e of this.animations.values()){let{animation:t,channel:i}=e;t.setTime(this.getTime(i))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let i=s++;return this.animations.set(i,{animation:e,channel:t}),e.setTime(this.getTime(t)),i}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(-1===this.lastEngineTime&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let i=t-e.delay;i>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,i)%e.duration,e.time*=e.rate)}}var a=i(79241);let l=[i(68711).A],u=["vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)","vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)","vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)","fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)"],c=[],h=`\
layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,d={name:"layer",source:`\
struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,vs:h,fs:h,getUniforms:e=>({opacity:Math.pow(e.opacity,1/2.2)}),uniformTypes:{opacity:"f32"}};var f=i(79155),p=i(77397),g=i(97253),m=i(62605),v=i(18567),y=i(46043);class b{constructor(e,t,i){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=i,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let i=++this._loadCount,r=e;for(let t of("string"==typeof e&&(r=(0,y.H)(e)),r instanceof Promise?(this.isLoaded=!1,this._loader=r.then(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e),this._subscribers))t.onChange(this.getData())}}class _{constructor(e){this.protocol=e.protocol||"resource://",this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return!!e.startsWith(this.protocol)||e in this._resources}add({resourceId:e,data:t,forceUpdate:i=!1,persistent:r=!0}){let n=this._resources[e];n?n.setData(t,i):(n=new b(e,t,this._context),this._resources[e]=n),n.persistent=r}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let i=t[e],r=this._resources[i.resourceId];r&&r.unsubscribe(i)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:i,requestId:r="default"}){let{_resources:n,protocol:s}=this;e.startsWith(s)&&(n[e=e.replace(s,"")]||this.add({resourceId:e,data:null,persistent:!1}));let o=n[e];if(this._track(i,r,o,t),o)return o.getData()}prune(){this._pruneRequest||(this._pruneRequest=setTimeout(()=>this._prune(),0))}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,i,r){let n=this._consumers,s=n[e]=n[e]||{},o=s[t],a=o&&o.resourceId&&this._resources[o.resourceId];a&&(a.unsubscribe(o),this.prune()),i&&(o?(o.onChange=r,o.resourceId=i.id):o={onChange:r,resourceId:i.id},s[t]=o,i.subscribe(o))}_prune(){for(let e of(this._pruneRequest=null,Object.keys(this._resources))){let t=this._resources[e];t.persistent||t.inUse()||(t.delete(),delete this._resources[e])}}}var x=i(76741);class w{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{(0,g.A)("layerManager.activateViewport",this,e),e&&(this.context.viewport=e)};let{deck:i,stats:r,viewport:n,timeline:s}=t||{};this.layers=[],this.resourceManager=new _({device:e,protocol:"deck://"}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:i,shaderAssembler:function(e){let t=a._P.getDefaultShaderAssembler(e);for(let e of l)t.addDefaultModule(e);for(let i of(t._hookFunctions.length=0,"glsl"===e?u:c))t.addShaderHook(i);return t}(e?.info?.shadingLanguage||"glsl"),defaultShaderModules:[d],renderPass:void 0,stats:r||new v.Uz({id:"deck.gl"}),viewport:n||new x.A({id:"DEFAULT-INITIAL-VIEWPORT"}),timeline:s||new o,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){for(let e of(this.resourceManager.finalize(),this.layers))this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;for(let i of(e.clearRedrawFlags&&(this._needsRedraw=!1),this.layers)){let r=i.getNeedsRedraw(e);t=t||r}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?"layers changed":this._defaultShaderModulesChanged?"shader modules changed":this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>0===t.id.indexOf(e))):this.layers}setProps(e){"debug"in e&&(this._debug=e.debug),"userData"in e&&(this.context.userData=e.userData),"layers"in e&&(this._nextLayers=e.layers),"onError"in e&&(this.context.onError=e.onError)}setLayers(e,t){(0,g.A)("layerManager.setLayers",this,t,e),this._lastRenderedLayers=e;let i=(0,m.B)(e,Boolean);for(let e of i)e.context=this.context;this._updateLayers(this.layers,i)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,i=t.findIndex(t=>t.name===e.name);i>=0&&(t.splice(i,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,i){i.raiseError(t,`${e} of ${i}`)}_updateLayers(e,t){let i={};for(let t of e)i[t.id]?p.A.warn(`Multiple old layers with same id ${t.id}`)():i[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let r=[];this._updateSublayersRecursively(t,i,r),this._finalizeOldLayers(i);let n=!1;for(let e of r)if(e.hasUniformTransition()){n=`Uniform transition in ${e}`;break}this._needsUpdate=n,this.layers=r}_updateSublayersRecursively(e,t,i){for(let r of e){r.context=this.context;let e=t[r.id];null===e&&p.A.warn(`Multiple new layers with same id ${r.id}`)(),t[r.id]=null;let n=null;try{this._debug&&e!==r&&r.validateProps(),e?(this._transferLayerState(e,r),this._updateLayer(r)):this._initializeLayer(r),i.push(r),n=r.isComposite?r.getSubLayers():null}catch(e){this._handleError("matching",e,r)}n&&this._updateSublayersRecursively(n,t,i)}}_finalizeOldLayers(e){for(let t in e){let i=e[t];i&&this._finalizeLayer(i)}}_initializeLayer(e){try{e._initialize(),e.lifecycle=f.VD.INITIALIZED}catch(t){this._handleError("initialization",t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle=f.VD.MATCHED,t!==e&&(e.lifecycle=f.VD.AWAITING_GC)}_updateLayer(e){try{e._update()}catch(t){this._handleError("update",t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle=f.VD.AWAITING_FINALIZATION;try{e._finalize(),e.lifecycle=f.VD.FINALIZED}catch(t){this._handleError("finalization",t,e)}}}var P=i(43626);let S="default-canvas";class C{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw="First render",this._needsUpdate="Initialize",this._eventManager=e.eventManager,this._eventManagers=e.eventManagers||{},this._viewEventManagers={},this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,this._getCanvasContext=e.getCanvasContext,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>{let i=!e.canvasId||this.getCanvasId(t.id)===e.canvasId,r=!("x"in e)||t.containsPixel(e);return i&&r}):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t="string"==typeof e?this.getView(e):e,i=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(i):i}getViewport(e){return this._viewportMap[e]}getCanvasId(e){let t="string"==typeof e?this.getView(e):e;return t?this._viewEventManagers[t.id]?.canvasId||this._getCanvasIdFromView(t):void 0}unproject(e,t){let i=this.getViewports(),r={x:e[0],y:e[1]};for(let n=i.length-1;n>=0;--n){let s=i[n];if(s.containsPixel(r)){let i=e.slice();return i[0]-=s.x,i[1]-=s.y,s.unproject(i,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),("width"in e||"height"in e)&&this._setSize(e.width,e.height),"pickPosition"in e&&(this._pickPosition=e.pickPosition),"eventManagers"in e&&this._setEventManagers(e.eventManagers||{}),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate("Size changed"))}_setViews(e){e=(0,m.B)(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate("views changed"),this.views=e}_setViewState(e){e?((0,P.b)(e,this.viewState,3)||this.setNeedsUpdate("viewState changed"),this.viewState=e):p.A.warn("missing `viewState` or `initialViewState`")()}_setEventManagers(e){this._eventManagers!==e&&(this._eventManagers=e,this.setNeedsUpdate("eventManagers changed"))}_getCanvasIdFromView(e){return e.props.canvasId||this._getCanvasContext?.(e.id)?.id||S}_getCanvasDimensions(e){let t=this._getCanvasContext?.(e.id),[i,r]=t?.getCSSSize()||[this.width,this.height];return{width:i,height:r}}_getViewEventManager(e){let t=this.getCanvasId(e)||S;return{canvasId:t,eventManager:this._eventManagers[t]||this._eventManager}}_startViewportRebuild(){let e=this.controllers,t=this._viewEventManagers;return this._viewports=[],this.controllers={},this._viewEventManagers={},{oldControllers:e,oldViewEventManagers:t}}_getReusableController(e,t,i){return e&&(t?.canvasId!==i.canvasId||t?.eventManager!==i.eventManager)?(e.finalize(),null):e}_createController(e,t){return new t.type({timeline:this.timeline,eventManager:this._getViewEventManager(e).eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,...this._getCanvasDimensions(e)}),pickPosition:(t,i)=>this._pickPosition?.(t,i,e.id)})}_updateController(e,t,i,r){let n=e.controller;if(n&&i){let s={...t,...n,id:e.id,x:i.x,y:i.y,width:i.width,height:i.height};return r&&r.constructor===n.type||(r=this._createController(e,s)),r&&r.setProps(s),r}return null}_rebuildViewports(){let{views:e}=this,{oldControllers:t,oldViewEventManagers:i}=this._startViewportRebuild(),r=!1;for(let n=e.length;n--;){let s=e[n],{width:o,height:a}=this._getCanvasDimensions(s),l=this._getViewEventManager(s);this._viewEventManagers[s.id]=l;let u=this.getViewState(s),c=s.makeViewport({viewState:u,width:o,height:a}),h=this._getReusableController(t[s.id],i[s.id],l),d=!!s.controller;d&&!h&&(r=!0),(r||!d)&&h&&(h.finalize(),h=null),this.controllers[s.id]=this._updateController(s,u,c,h),c&&this._viewports.unshift(c)}for(let e in t){let i=t[e];i&&!this.controllers[e]&&i.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length!==t.length||e.some((i,r)=>!e[r].equals(t[r]))}}let E=/^(?:\d+\.?\d*|\.\d+)$/;function L(e){switch(typeof e){case"number":if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:"literal",value:e};case"string":try{let t=function(e){let t=[],i=0;for(;i<e.length;){let r=e[i];if(/\s/.test(r)){i++;continue}if("+"===r||"-"===r||"("===r||")"===r||"%"===r){t.push({type:"symbol",value:r}),i++;continue}if(M(r)||"."===r){let n=i,s="."===r;for(i++;i<e.length;){let t=e[i];if(M(t)){i++;continue}if("."===t&&!s){s=!0,i++;continue}break}let o=e.slice(n,i);if(!E.test(o))throw Error("Invalid number token");t.push({type:"number",value:parseFloat(o)});continue}if(I(r)){let r=i;for(;i<e.length&&I(e[i]);)i++;let n=e.slice(r,i).toLowerCase();t.push({type:"word",value:n});continue}throw Error("Invalid token in position string")}return t}(e);return new T(t).parseExpression()}catch(i){let t=i instanceof Error?i.message:String(i);throw Error(`Could not parse position string ${e}: ${t}`)}default:throw Error(`Could not parse position string ${e}`)}}function A(e,t){return function e(t,i){switch(t.type){case"literal":return t.value;case"percentage":return Math.round(t.value*i);case"binary":let r=e(t.left,i),n=e(t.right,i);return"+"===t.operator?r+n:r-n;default:throw Error("Unknown layout expression type")}}(e,t)}class T{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error("Unexpected token at end of expression");return e}parseBinaryExpression(){var e;let t=this.parseFactor(),i=this.peek();for(;(e=i)&&"symbol"===e.type&&("+"===e.value||"-"===e.value);){this.index++;let e=this.parseFactor();t={type:"binary",operator:i.value,left:t,right:e},i=this.peek()}return t}parseFactor(){let e=this.peek();if(!e)throw Error("Unexpected end of expression");if("symbol"===e.type&&"+"===e.value)return this.index++,this.parseFactor();if("symbol"===e.type&&"-"===e.value)return this.index++,{type:"binary",operator:"-",left:{type:"literal",value:0},right:this.parseFactor()};if("symbol"===e.type&&"("===e.value){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("word"===e.type&&"calc"===e.value){if(this.index++,!this.consumeSymbol("("))throw Error("Missing opening parenthesis after calc");let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("number"===e.type){this.index++;let t=e.value,i=this.peek();return i&&"symbol"===i.type&&"%"===i.value?(this.index++,{type:"percentage",value:t/100}):(i&&"word"===i.type&&"px"===i.value&&this.index++,{type:"literal",value:t})}throw Error("Unexpected token in expression")}consumeSymbol(e){let t=this.peek();return!!t&&"symbol"===t.type&&t.value===e&&(this.index++,!0)}peek(){return this.tokens[this.index]||null}}function M(e){return e>="0"&&e<="9"}function I(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"}class R{constructor(e){let{id:t,x:i=0,y:r=0,width:n="100%",height:s="100%",padding:o=null}=e;this.id=t||this.constructor.displayName||"view",this.props={...e,id:this.id},this._x=L(i),this._y=L(r),this._width=L(n),this._height=L(s),this._padding=o&&{left:L(o.left||0),right:L(o.right||0),top:L(o.top||0),bottom:L(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e||this.constructor===e.constructor&&(0,P.b)(this.props,e.props,2)}clone(e){return new this.constructor({...this.props,...e})}makeViewport({width:e,height:t,viewState:i}){i=this.filterViewState(i);let r=this.getDimensions({width:e,height:t});return r.height&&r.width?new(this.getViewportType(i))({...i,...this.props,...r}):null}getViewStateId(){let{viewState:e}=this.props;return"string"==typeof e?e:e?.id||this.id}filterViewState(e){if(this.props.viewState&&"object"==typeof this.props.viewState){if(!this.props.viewState.id)return this.props.viewState;var t=this.props.viewState;let i={...e};for(let e in t)"id"!==e&&(Array.isArray(i[e])&&Array.isArray(t[e])?i[e]=function(e,t){e=e.slice();for(let i=0;i<t.length;i++){let r=t[i];Number.isFinite(r)&&(e[i]=r)}return e}(i[e],t[e]):i[e]=t[e]);return i}return e}getDimensions({width:e,height:t}){let i={x:A(this._x,e),y:A(this._y,t),width:A(this._width,e),height:A(this._height,t)};return this._padding&&(i.padding={left:A(this._padding.left,e),top:A(this._padding.top,t),right:A(this._padding.right,e),bottom:A(this._padding.bottom,t)}),i}get controller(){let e=this.props.controller;return e?!0===e?{type:this.ControllerType}:"function"==typeof e?{type:e}:{type:this.ControllerType,...e}:null}}var O=i(7276),k=i(94878),B=i(99585);let z=()=>{},D={mode:"preserve"},F={mode:"hard"},N={BREAK:1,SNAP_TO_END:2,IGNORE:3},$=e=>e,j=N.BREAK;class U{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:i,startProps:r,endProps:n,duration:s,easing:o}}=e,a=o(t/s),l=i.interpolateProps(r,n,a);this.propsInTransition=this.getControllerState({...this.props,...l},D).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new B.A(e.timeline),this.onViewStateChange=e.onViewStateChange||z,this.onStateChange=e.onStateChange||z}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,i=this.props;if(this.props=e,!i||this._shouldIgnoreViewportChange(i,e))return!1;if(this._isTransitionEnabled(e)){let r=i;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;r={...i,...e===N.SNAP_TO_END?t:this.propsInTransition||i}}this._triggerTransition(r,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:i}=e;return(t>0||"auto"===t)&&!!i}_isUpdateDueToCurrentTransition(e){return!!this.transition.inProgress&&!!this.propsInTransition&&this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition)}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?this.transition.settings.interruption===N.IGNORE||this._isUpdateDueToCurrentTransition(t):!this._isTransitionEnabled(t)||t.transitionInterpolator.arePropsEqual(e,t)}_triggerTransition(e,t){let i=this.getControllerState(e,D),r=this.getControllerState(t,F).shortestPathFrom(i),n=t.transitionInterpolator,s=n.getDuration?n.getDuration(e,t):t.transitionDuration;if(0===s)return;let o=n.initializeProps(e,r);this.propsInTransition={};let a={duration:s,easing:t.transitionEasing||$,interpolator:n,interruption:t.transitionInterruption||j,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(a),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}}var V=i(40323);class G{constructor(e){let{compare:t,extract:i,required:r}=e;this._propsToCompare=t,this._propsToExtract=i||t,this._requiredProps=r}arePropsEqual(e,t){for(let i of this._propsToCompare)if(!(i in e)||!(i in t)||!(0,k.aI)(e[i],t[i]))return!1;return!0}initializeProps(e,t){let i={},r={};for(let n of this._propsToExtract)(n in e||n in t)&&(i[n]=e[n],r[n]=t[n]);return this._checkRequiredProps(i),this._checkRequiredProps(r),{start:i,end:r}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let i=e[t];(0,V.A)(Number.isFinite(i)||Array.isArray(i),`${t} is required for transition`)})}}let W=["longitude","latitude","zoom","bearing","pitch"],H=["longitude","latitude","zoom"];class q extends G{constructor(e={}){let t=Array.isArray(e)?e:e.transitionProps,i=Array.isArray(e)?{}:e;i.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:W,required:H},super(i.transitionProps),this.opts=i}initializeProps(e,t){let i=super.initializeProps(e,t),{makeViewport:r,around:n}=this.opts;if(r&&n){let s=r(e),o=r(t),a=s.unproject(n);i.start.around=n,Object.assign(i.end,{around:o.project(a),aroundPosition:a,width:t.width,height:t.height})}return i}interpolateProps(e,t,i){let r={};for(let n of this._propsToExtract)r[n]=(0,k.Cc)(e[n]||0,t[n]||0,i);if(t.aroundPosition&&this.opts.makeViewport){let n=this.opts.makeViewport({...t,...r});Object.assign(r,n.panByPosition(t.aroundPosition,(0,k.Cc)(e.around,t.around,i)))}return r}}var Y=i(18086);let Z={transitionDuration:0},K=e=>1-(1-e)*(1-e),X=e=>1===e?1:1-Math.pow(2,-10*e),Q={WHEEL:["wheel"],PAN:["panstart","panmove","panend"],PINCH:["pinchstart","pinchmove","pinchend"],MULTI_PAN:["multipanstart","multipanmove","multipanend"],DOUBLE_CLICK:["dblclick"],DOUBLE_CLICK_DRAG:["dblclickdragstart","dblclickdragmove","dblclickdragend","dblclickdragcancel"],KEYBOARD:["keydown"]},J={};class ee{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this._multiPanMode=null,this._multiPanStartCenter=null,this._doubleClickDragAnchor=null,this._suppressDoubleClickUntil=0,this.invertPan=!1,this.dragMode="rotate",this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.doubleClickDragZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.multiTouchDrag=null,this.trackpadGesture=!1,this.zoomAround="pointer",this.keyboard=!0,this.transitionManager=new U({...e,getControllerState:(t,i)=>new this.ControllerState({...t,constraintContext:i,makeViewport:e.makeViewport}),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case"panstart":return!t&&this._onPanStart(e);case"panmove":return this._onPan(e);case"panend":return this._onPanEnd(e);case"pinchstart":return!t&&!!this._isTrackpadGestureAllowed(e)&&this._onPinchStart(e);case"pinchmove":return!!this._isTrackpadGestureAllowed(e)&&this._onPinch(e);case"pinchend":return!!this._isTrackpadGestureAllowed(e)&&this._onPinchEnd(e);case"multipanstart":return!t&&this._onMultiPanStart(e);case"multipanmove":return this._onMultiPan(e);case"multipanend":return this._onMultiPanEnd(e);case"dblclick":return this._onDoubleClick(e);case"dblclickdragstart":return!t&&this._onDoubleClickDragStart(e);case"dblclickdragmove":return this._onDoubleClickDrag(e);case"dblclickdragend":case"dblclickdragcancel":return this._onDoubleClickDragEnd(e);case"wheel":return this._onWheel(e);case"keydown":return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:i}=this.props,{offsetCenter:r}=e;return[r.x-t,r.y-i]}getZoomPosition(e){if("pointer"===this.zoomAround)return e;let t=this.makeViewport(this.controllerState.getViewportProps()),[i,r]=(0,Y.VJ)(t.center,t.pixelProjectionMatrix);return[i,r]}isPointInBounds(e,t){let{width:i,height:r}=this.props;if(t&&t.handled)return!1;let n=e[0]>=0&&e[0]<=i&&e[1]>=0&&e[1]<=r;return n&&t&&t.stopPropagation(),n}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){void 0===e.maxBoundsPadding&&(e.maxBoundsPadding=null),e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,"transitionInterpolator"in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:i}=e;this.inertia=Number.isFinite(i)?i:300*(!0===i);let{scrollZoom:r=!0,dragPan:n=!0,dragRotate:s=!0,doubleClickZoom:o=!0,doubleClickDragZoom:a=!1,touchZoom:l=!0,touchRotate:u=!1,multiTouchDrag:c=u?"rotate":null,trackpadGesture:h=!1,zoomAround:d="pointer",keyboard:f=!0}=e,p=!!this.onViewStateChange;if(this.toggleEvents(Q.WHEEL,p&&r),this.toggleEvents(Q.PAN,p),this.toggleEvents(Q.PINCH,p&&(l||"rotate"===c)),this.toggleEvents(Q.MULTI_PAN,p&&!!c),this.toggleEvents(Q.DOUBLE_CLICK,p&&o),this.toggleEvents(Q.DOUBLE_CLICK_DRAG,p&&a),this.toggleEvents(Q.KEYBOARD,p&&f),this.scrollZoom=r,this.dragPan=n,this.dragRotate=s,this.doubleClickZoom=o,this.doubleClickDragZoom=a,this.touchZoom=l,this.touchRotate="rotate"===c,this.multiTouchDrag=c,this.trackpadGesture=h,this.zoomAround=d,this.keyboard=f,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds||t.maxBoundsPadding!==e.maxBoundsPadding)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),i=t.getViewportProps();Object.keys(i).some(t=>!(0,P.b)(i[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,i={}){let r={...e.getViewportProps(),...t},n=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(i),n){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:r,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_getConstraintContext(e,t){return this.props.rubberBand?{mode:"update"===t?"elastic":"end"===t?"rebound":"hard"}:{mode:"hard"}}_getReboundTransition(e,t){if("rebound"!==e.mode)return null;let i=t.getViewportProps();return Object.keys(i).some(e=>!(0,P.b)(this.props[e],i[e],1))?{...this._getTransitionProps(),transitionDuration:300,transitionEasing:X}:null}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||"pan"===this.dragMode)&&(i=!i);let r=i?"pan":"rotate",n=this._getConstraintContext(r,"start"),s=i?this.controllerState.panStart({pos:t},n):this.controllerState.rotateStart({pos:t},n);return this._panMove=i,this.updateViewport(s,Z,{isDragging:!0}),!0}_onPan(e){return!!this.isDragging()&&(this._panMove?this._onPanMove(e):this._onPanRotate(e))}_onPanEnd(e){return!!this.isDragging()&&(this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e))}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),i=this.controllerState.pan({pos:t},this._getConstraintContext("pan","update"));return this.updateViewport(i,Z,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let i=this.getCenter(e),r=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],n=this.controllerState.pan({pos:r}).panEnd();this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:K},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState,t=this._getConstraintContext("pan","end"),i=e.panEnd(t),r=this._getReboundTransition(t,i);this.updateViewport(i,r,{isDragging:!1,isPanning:!!r})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),i=this.controllerState.rotate({pos:t},this._getConstraintContext("rotate","update"));return this.updateViewport(i,Z,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let i=this.getCenter(e),r=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],n=this.controllerState.rotate({pos:r}).rotateEnd();this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:K},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState,t=this._getConstraintContext("rotate","end"),i=e.rotateEnd(t),r=this._getReboundTransition(t,i);this.updateViewport(i,r,{isDragging:!1,isRotating:!!r})}return!0}_onWheel(e){if(!this.scrollZoom||this.trackpadGesture&&"mouse"!==e.device)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:i=.01,smooth:r=!1}=!0===this.scrollZoom?{}:this.scrollZoom,{delta:n}=e,s=2/(1+Math.exp(-Math.abs(n*i)));n<0&&0!==s&&(s=1/s);let o=this.getZoomPosition(t),a=r?{...this._getTransitionProps({around:o}),transitionDuration:250}:Z,l=this.controllerState.zoom({pos:o,scale:s});return this.updateViewport(l,a,{isZooming:!0,isPanning:!0}),r||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let{multiTouchDrag:t}=this;if(!t||!this._isMultiPanEventAllowed(e,t))return!1;let i=e.offsetCenter;if(!this.isPointInBounds(this.getCenter(e),e))return!1;let r="trackpad"===e.pointerType,n={x:i.x-(r?0:e.deltaX),y:i.y-(r?0:e.deltaY)},s={...e,offsetCenter:n},o=this.getCenter(s),a="pan"===t?this.controllerState.panStart({pos:o},this._getConstraintContext("pan","start")):this.controllerState.rotateStart({pos:o},this._getConstraintContext("rotate","start"));return this._multiPanMode=t,this._multiPanStartCenter=n,this.updateViewport(a,Z,{isDragging:!0}),!0}_onMultiPan(e){let{mode:t,event:i}=this._getMultiPanEvent(e);return!!t&&!!i&&!!this.isDragging()&&("pan"===t?this._onPanMove(i):this._onPanRotate(i))}_onMultiPanEnd(e){let{mode:t,event:i}=this._getMultiPanEvent(e);if(!t||!i||!this.isDragging())return this._resetMultiPan(),!1;let r="pan"===t?this._onPanMoveEnd(i):this._onPanRotateEnd(i);return this._resetMultiPan(),r}_isTrackpadGestureAllowed(e){return"trackpad"!==e.pointerType||this.trackpadGesture}_isMultiPanEventAllowed(e,t){return"trackpad"===e.pointerType?this.trackpadGesture&&("pan"===t?this.dragPan:this.dragRotate):"touch"===e.pointerType&&("pan"===t?this.dragPan:this.dragRotate)}_getMultiPanEvent(e){let t=this._multiPanMode,i=this._multiPanStartCenter;return t&&i?{mode:t,event:{...e,offsetCenter:{x:i.x+e.deltaX,y:i.y+e.deltaY}}}:{mode:null,event:null}}_resetMultiPan(){this._multiPanMode=null,this._multiPanStartCenter=null}_onPinchStart(e){this._doubleClickDragAnchor=null;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.controllerState.zoomStart({pos:this.getZoomPosition(t)},this._getConstraintContext("zoom","start")).rotateStart({pos:t},this._getConstraintContext("rotate","start"));return J._startPinchRotation=e.rotation,J._lastPinchEvent=e,this.updateViewport(i,Z,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:i}=e,r=this.getCenter(e);t=t.zoom({pos:this.getZoomPosition(r),scale:i},this._getConstraintContext("zoom","update"))}if(this.touchRotate){let{rotation:i}=e;t=t.rotate({deltaAngleX:J._startPinchRotation-i},this._getConstraintContext("rotate","update"))}return this.updateViewport(t,Z,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),J._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:i}=J;if(this.touchZoom&&t&&i&&e.scale!==i.scale){let r=this.getCenter(e),n=this.getZoomPosition(r),s=this.controllerState.rotateEnd(),o=Math.log2(e.scale),a=(o-Math.log2(i.scale))/(e.deltaTime-i.deltaTime),l=Math.pow(2,o+a*t/2);s=s.zoom({pos:n,scale:l}).zoomEnd(),this.updateViewport(s,{...this._getTransitionProps({around:n}),transitionDuration:t,transitionEasing:K},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState,t=this._getConstraintContext("zoom","end"),i=this._getConstraintContext("rotate","end"),r=e.zoomEnd(t).rotateEnd(i),n=this._getReboundTransition(this.touchZoom?t:i,r);this.updateViewport(r,n,{isDragging:!1,isPanning:!!n&&this.touchZoom,isZooming:!!n&&this.touchZoom,isRotating:!!n&&this.touchRotate})}return J._startPinchRotation=null,J._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom||Date.now()<this._suppressDoubleClickUntil)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e),r=this.getZoomPosition(t),n=this.controllerState.zoom({pos:r,scale:i?.5:2});return this.updateViewport(n,this._getTransitionProps({around:r}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onDoubleClickDragStart(e){if(!this.doubleClickDragZoom)return this._doubleClickDragAnchor=null,!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return this._doubleClickDragAnchor=null,!1;this._doubleClickDragAnchor=this.getZoomPosition(t);let i=this.controllerState.zoomStart({pos:this._doubleClickDragAnchor},this._getConstraintContext("zoom","start"));return 1!==e.scale&&(i=i.zoom({pos:this._doubleClickDragAnchor,scale:e.scale},this._getConstraintContext("zoom","update"))),this.updateViewport(i,Z,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDrag(e){let t=this._doubleClickDragAnchor;if(!t)return!1;let i=this.controllerState.zoom({pos:t,scale:e.scale},this._getConstraintContext("zoom","update"));return this.updateViewport(i,Z,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDragEnd(e){if(!this._doubleClickDragAnchor)return!1;this._doubleClickDragAnchor=null;let t=this.controllerState,i=this._getConstraintContext("zoom","end"),r=t.zoomEnd(i),n=this._getReboundTransition(i,r);return this.updateViewport(r,n,{isDragging:!1,isPanning:!!n,isZooming:!!n}),this._suppressDoubleClickUntil=Date.now()+100,this.blockEvents(100),!0}_onKeyDown(e){let t;if(!this.keyboard)return!1;let i=this.isFunctionKeyPressed(e),{zoomSpeed:r,moveSpeed:n,rotateSpeedX:s,rotateSpeedY:o}=!0===this.keyboard?{}:this.keyboard,{controllerState:a}=this,l={};switch(e.srcEvent.code){case"Minus":t=i?a.zoomOut(r).zoomOut(r):a.zoomOut(r),l.isZooming=!0;break;case"Equal":t=i?a.zoomIn(r).zoomIn(r):a.zoomIn(r),l.isZooming=!0;break;case"ArrowLeft":i?(t=a.rotateLeft(s),l.isRotating=!0):(t=a.moveLeft(n),l.isPanning=!0);break;case"ArrowRight":i?(t=a.rotateRight(s),l.isRotating=!0):(t=a.moveRight(n),l.isPanning=!0);break;case"ArrowUp":i?(t=a.rotateUp(o),l.isRotating=!0):(t=a.moveUp(n),l.isPanning=!0);break;case"ArrowDown":i?(t=a.rotateDown(o),l.isRotating=!0):(t=a.moveDown(n),l.isPanning=!0);break;default:return!1}return this.updateViewport(t,this._getTransitionProps(),l),!0}_getTransitionProps(e){let{transition:t}=this;return t&&t.transitionInterpolator?e?{...t,transitionInterpolator:new q({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t:Z}}let et=Symbol("constraintAround");class ei{constructor(e,t,i,r){this.makeViewport=i,this._viewportProps=this.applyConstraints(e,r),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}}function er(e,t,i){let r=e-t;return r&&Number.isFinite(r)?t+r*i/(i+Math.abs(r)):t}function en(e,t,i){let r=A(L(i?.left??0),e),n=A(L(i?.right??0),e),s=A(L(i?.top??0),t),o=A(L(i?.bottom??0),t);return{x:r,y:s,width:e-r-n,height:t-s-o}}var es=i(80931);let eo=[[-1/0,-90],[1/0,90]];function ea([e,t]){if(Math.abs(t)>90&&(t=90*Math.sign(t)),Number.isFinite(e)){let[i,r]=(0,Y.Gw)([e,t]);return[i,(0,k.qE)(r,0,512)]}let[,i]=(0,Y.Gw)([0,t]);return[e,(0,k.qE)(i,0,512)]}class el extends ei{constructor(e){let{width:t,height:i,latitude:r,longitude:n,zoom:s,bearing:o=0,pitch:a=0,altitude:l=1.5,position:u=[0,0,0],maxZoom:c=20,minZoom:h=0,maxPitch:d=60,minPitch:f=0,startPanLngLat:p,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:v,startBearing:y,startPitch:b,startZoom:_,normalize:x=!0,rubberBand:w=!1}=e,{[et]:P}=e;(0,V.A)(Number.isFinite(n)),(0,V.A)(Number.isFinite(r)),(0,V.A)(Number.isFinite(s)),super({width:t,height:i,latitude:r,longitude:n,zoom:s,bearing:o,pitch:a,altitude:l,maxZoom:c,minZoom:h,maxPitch:d,minPitch:f,normalize:x,position:u,maxBounds:e.maxBounds||(x?eo:null),maxBoundsPadding:e.maxBoundsPadding||null,rubberBand:w,...{[et]:P}},{startPanLngLat:p,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:v,startBearing:y,startPitch:b,startZoom:_},e.makeViewport,e.constraintContext),this.getAltitude=e.getAltitude}panStart({pos:e},t){return this._getUpdatedState({startPanLngLat:this._unproject(e)},t)}pan({pos:e,startPos:t},i){let r=this.getState().startPanLngLat||this._unproject(t);if(!r)return this;let n=this.makeViewport(this.getViewportProps()).panByPosition(r,e);return this._getUpdatedState(n,i)}panEnd(e){return this._getUpdatedState({startPanLngLat:null},e)}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:void 0!==t?this._unproject3D(e,t):void 0,startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:i=0}){let r,{startRotatePos:n,startRotateLngLat:s,startBearing:o,startPitch:a}=this.getState();if(!n||void 0===o||void 0===a)return this;if(r=e?this._getNewRotation(e,n,a,o):{bearing:o+t,pitch:a+i},s){let e=this.makeViewport({...this.getViewportProps(),...r}),t="panByPosition3D"in e?"panByPosition3D":"panByPosition";return this._getUpdatedState({...r,...e[t](s,n)})}return this._getUpdatedState(r)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e},t){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom},t)}zoom({pos:e,startPos:t,scale:i},r){let{startZoom:n,startZoomLngLat:s}=this.getState();return(s||(n=this.getViewportProps().zoom,s=this._unproject(t)||this._unproject(e)),s)?this._getUpdatedState({zoom:n+Math.log2(i),[et]:{position:s,screenPosition:e}},r):this}zoomEnd(e){return this._getUpdatedState({startZoomLngLat:null,startZoom:null},e)}zoomIn(e=2,t){return this._zoomFromCenter(e,t)}zoomOut(e=2,t){return this._zoomFromCenter(1/e,t)}moveLeft(e=100,t){return this._panFromCenter([e,0],t)}moveRight(e=100,t){return this._panFromCenter([-e,0],t)}moveUp(e=100,t){return this._panFromCenter([0,e],t)}moveDown(e=100,t){return this._panFromCenter([0,-e],t)}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),i={...this.getViewportProps()},{bearing:r,longitude:n}=i;return Math.abs(r-t.bearing)>180&&(i.bearing=r<0?r+360:r-360),Math.abs(n-t.longitude)>180&&(i.longitude=n<0?n+360:n-360),i}applyConstraints(e,t){let i=e[et];delete e[et];let{maxPitch:r,minPitch:n,pitch:s,bearing:o,normalize:a,maxBounds:l,rubberBand:u}=e;a&&(o<-180||o>180)&&(e.bearing=(0,es.zi)(o+180,360)-180),e.pitch=(0,k.qE)(s,n,r);let c=this._constrainZoom(e.zoom,e),h=u&&t?.mode==="elastic";if(e.zoom=t?.mode==="preserve"?e.zoom:h?er(e.zoom,c,1):c,i){let t=this.makeViewport(e);Object.assign(e,t.panByPosition(i.position,i.screenPosition))}if(a&&(e.longitude<-180||e.longitude>180)&&(e.longitude=(0,es.zi)(e.longitude+180,360)-180),l){let i=en(e.width,e.height,e.maxBoundsPadding),r=function(e,t,i){let[r,n]=e.project(t);return r=Number.isFinite(r)?r:e.width/2,n=Number.isFinite(n)?n:e.height/2,{left:r-i.x,right:i.x+i.width-r,top:n-i.y,bottom:i.y+i.height-n}}(this.makeViewport({...e,bearing:0,pitch:0}),[e.longitude,e.latitude],i),n=ea(l[0]),s=ea(l[1]),o=2**e.zoom,a=[n[0]+r.left/o,n[1]+r.bottom/o],u=[s[0]-r.right/o,s[1]-r.top/o],c=ea([e.longitude,e.latitude]),d=[(0,k.qE)(c[0],a[0],u[0]),(0,k.qE)(c[1],a[1],u[1])],f=c.slice();if(i.width>=0&&(f[0]=t?.mode==="preserve"?c[0]:h?er(c[0],d[0],i.width/2/o):d[0]),i.height>=0&&(f[1]=t?.mode==="preserve"?c[1]:h?er(c[1],d[1],i.height/2/o):d[1]),f[0]!==c[0]||f[1]!==c[1]){let[t,i]=(0,Y.iV)(f);f[0]!==c[0]&&(e.longitude=t),f[1]!==c[1]&&(e.latitude=i)}}return e}_constrainZoom(e,t){t||(t=this.getViewportProps());let{maxZoom:i,maxBounds:r}=t,n=null!==r&&t.width>0&&t.height>0,{minZoom:s}=t;if(n){let e=en(t.width,t.height,t.maxBoundsPadding),n=ea(r[0]),o=ea(r[1]),a=o[0]-n[0],l=o[1]-n[1];e.width>0&&Number.isFinite(a)&&a>0&&(s=Math.max(s,Math.log2(e.width/a))),e.height>0&&Number.isFinite(l)&&l>0&&(s=Math.max(s,Math.log2(e.height/l))),s>i&&(s=i)}return(0,k.qE)(e,s,i)}_zoomFromCenter(e,t){let{width:i,height:r}=this.getViewportProps();return this.zoom({pos:[i/2,r/2],scale:e},t)}_panFromCenter(e,t){let{width:i,height:r}=this.getViewportProps();return this.pan({startPos:[i/2,r/2],pos:[i/2+e[0],r/2+e[1]]},t)}_getUpdatedState(e,t){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e,constraintContext:t})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,i,r){let n=e[0]-t[0],s=e[1]-t[1],o=e[1],a=t[1],{width:l,height:u}=this.getViewportProps(),c=0;s>0?Math.abs(u-a)>5&&(c=s/(a-u)*1.2):s<0&&a>5&&(c=1-o/a),c=(0,k.qE)(c,-1,1);let{minPitch:h,maxPitch:d}=this.getViewportProps(),f=i;return c>0?f=i+c*(d-i):c<0&&(f=i-c*(h-i)),{pitch:f,bearing:r+n/l*180}}}class eu extends ee{constructor(){super(...arguments),this.ControllerState=el,this.transition={transitionDuration:300,transitionInterpolator:new q({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch","position"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this.rotationPivot="center",this._getAltitude=e=>{if("2d"===this.rotationPivot)return 0;if("3d"===this.rotationPivot&&this.pickPosition){let{x:t,y:i}=this.props,r=this.pickPosition(t+e[0],i+e[1]);if(r&&r.coordinate&&r.coordinate.length>=3)return r.coordinate[2]}}}setProps(e){"rotationPivot"in e&&(this.rotationPivot=e.rotationPivot||"center"),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(!1===e.normalize?null:eo),super.setProps(e)}updateViewport(e,t=null,i={}){let r=e.getState();i.isDragging&&r.startRotateLngLat?i={...i,rotationPivotPosition:r.startRotateLngLat}:!1===i.isDragging&&(i={...i,rotationPivotPosition:void 0}),super.updateViewport(e,t,i)}}class ec extends R{constructor(e={}){super(e)}getViewportType(){return O.A}get ControllerType(){return eu}}ec.displayName="MapView";let eh=[255,255,255],ed=0;class ef{constructor(e={}){this.type="ambient";let{color:t=eh}=e,{intensity:i=1}=e;this.id=e.id||`ambient-${ed++}`,this.color=t,this.intensity=i}}var ep=i(23778);let eg=[255,255,255],em=[0,0,-1],ev=0;class ey{constructor(e={}){this.type="directional";let{color:t=eg}=e,{intensity:i=1}=e,{direction:r=em}=e,{_shadow:n=!1}=e;this.id=e.id||`directional-${ev++}`,this.color=t,this.intensity=i,this.type="directional",this.direction=new ep.P(r).normalize().toArray(),this.shadow=n}getProjectedLight(e){return this}}var eb=i(58038);class e_{constructor(e,t={id:"pass"}){let{id:i}=t;this.id=i,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}}let ex={depthWriteEnabled:!0,depthCompare:"less-equal",blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha"};class ew extends e_{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let{canvasContext:t=this.device.canvasContext}=e,i=e.target??t.getCurrentFramebuffer(),[r,n]=t.getDrawingBufferSize(),s=e.clearCanvas??!0,o=e.clearColor??(!!s&&[0,0,0,0]),a=!!s&&1,l=!!s&&0,u=e.colorMask??15,c={viewport:[0,0,r,n]};e.colorMask&&(c.colorMask=u),e.scissorRect&&(c.scissorRect=e.scissorRect);let{shaderModuleProps:h,viewports:d,views:f,onViewportActive:p,clearStack:g=!0}=e,m=e.pass||"unknown",v="webgpu"===this.device.type;g&&(this._lastRenderIndex=-1);let y=[];if(!d.length)return this.device.beginRenderPass({framebuffer:i,parameters:c,clearColor:o,clearDepth:a,clearStencil:l}).end(),this.device.submit(),y;try{for(let r of d){p?.(r);let n=this._getDrawLayerParams(r,e),s=f&&f[r.id],u=r.subViewports||[r];for(let r of v?u.map(e=>[e]):[u]){let u=this.device.beginRenderPass({framebuffer:i,parameters:c,clearColor:o,clearDepth:a,clearStencil:l});try{for(let o of r){let r=this._drawLayersInViewport(u,{target:i,canvasContext:t,shaderModuleProps:h,viewport:o,view:s,pass:m,layers:e.layers,isPicking:e.isPicking},n);y.push(r)}}finally{u.end(),v&&this.device.submit()}o=!1,a=!1,l=!1}}return y}finally{v||this.device.submit()}}_getDrawLayerParams(e,{layers:t,pass:i,isPicking:r=!1,layerFilter:n,cullRect:s,views:o,effects:a,canvasContext:l=this.device.canvasContext,shaderModuleProps:u},c=!1){let h=[],d=function e(t=0,i={}){let r={},n=(s,o)=>{let a,l=s.props._offset,u=s.id,c=s.parent&&s.parent.id;if(!c||c in i||n(s.parent,!1),c in r){let t=r[c]=r[c]||e(i[c],i);a=t(s,o),r[u]=t}else Number.isFinite(l)?(a=l+(i[c]||0),r[u]=null):a=t;return o&&a>=t&&(t=a+1),i[u]=a,a};return n}(this._lastRenderIndex+1),f={layer:t[0],viewport:e,isPicking:r,renderPass:i,cullRect:s},p={};for(let r=0;r<t.length;r++){let s=t[r],g=this._shouldDrawLayer(s,f,n,p),m={shouldDrawLayer:g};g&&!c&&(m.shouldDrawLayer=!0,m.layerRenderIndex=d(s,g),m.shaderModuleProps=this._getShaderModuleProps(s,a,i,l,u),m.layerParameters={..."webgpu"===s.context.device.type?ex:null,...s.context.deck?.props.parameters,...o?.[e.id]?.props.parameters,...this.getLayerParameters(s,r,e)}),h[r]=m}return h}_drawLayersInViewport(e,{layers:t,shaderModuleProps:i,pass:r,target:n,canvasContext:s,viewport:o,view:a,isPicking:l},u){let c=function(e,{canvasContext:t=e.canvasContext,shaderModuleProps:i,target:r,viewport:n}){let s=i?.project?.devicePixelRatio??t.cssToDeviceRatio(),[,o]=t.getDrawingBufferSize(),a=r?r.height:o;return[n.x*s,a-(n.y+n.height)*s,n.width*s,n.height*s]}(this.device,{canvasContext:s,shaderModuleProps:i,target:n,viewport:o});if(a){let{clear:e,clearColor:t,clearDepth:i,clearStencil:r}=a.props;if(e){let e=[0,0,0,0],s=1,o=0;Array.isArray(t)&&!l?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):!1===t&&(e=!1),void 0!==i&&(s=i),void 0!==r&&(o=r),this.device.beginRenderPass({framebuffer:n,parameters:{viewport:c,scissorRect:c},clearColor:e,clearDepth:s,clearStencil:o}).end()}}let h={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:c});for(let i=0;i<t.length;i++){let n=t[i],s=u[i],{shouldDrawLayer:a}=s;if(a&&n.props.pickable&&h.pickableCount++,n.isComposite&&h.compositeCount++,n.isDrawable&&s.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:i,layerParameters:a}=s;h.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),i.project&&(i.project.viewport=o),n.context.renderPass=e;try{n._drawLayer({renderPass:e,shaderModuleProps:i,uniforms:{layerIndex:t},parameters:a})}catch(e){n.raiseError(e,`drawing ${n} to ${r}`)}}}return h}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,i){return null}getLayerParameters(e,t,i){return e.props.parameters}_shouldDrawLayer(e,t,i,r){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let n=e.parent;for(;n;){if(!n.props.visible||!n.filterSubLayer(t))return!1;t.layer=n,n=n.parent}if(i){let e=t.layer.id;if(e in r||(r[e]=i(t)),!r[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,i,r,n){let s=r.cssToDeviceRatio(),o=e.internalState?.propsInTransition||e.props,a={layer:o,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:s,modelMatrix:o.modelMatrix,coordinateSystem:o.coordinateSystem,coordinateOrigin:o.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let i of t)eP(a,i.getShaderModuleProps?.(e,a));for(let t of e.context.defaultShaderModules)t.name in a||(a[t.name]={});return eP(a,this.getShaderModuleProps(e,t,a),n)}}function eP(e,...t){for(let i of t)if(i)for(let t in i)e[t]?Object.assign(e[t],i[t]):e[t]=i[t];return e}class eS extends ew{constructor(e,t){super(e,t);let i=e.createTexture({format:"rgba8unorm",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}}),r=e.createTexture({format:"depth16unorm",width:1,height:1});this.fbo=e.createFramebuffer({id:"shadowmap",width:1,height:1,colorAttachments:[i],depthStencilAttachment:r})}delete(){this.fbo&&(this.fbo.destroy(),this.fbo=null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,i=this.device.canvasContext.cssToDeviceRatio(),r=e.viewports[0],n=r.width*i,s=r.height*i;(n!==t.width||s!==t.height)&&t.resize({width:n,height:s}),super.render({...e,clearColor:[1,1,1,1],target:t,pass:"shadow"})}getLayerParameters(e,t,i){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:"less-equal"}}shouldDrawLayer(e){return!1!==e.props.shadowEnabled}getShaderModuleProps(e,t,i){return{shadow:{project:i.project,drawToShadowMap:!0}}}}var eC=i(90460),eE=i(78120),eL=i(82611),eA=i(62988);let eT=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,eM=`
const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}
`,eI=`
${eT}
${eM}
`,eR=`
const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}
`,eO=`
${eT}
${eR}
`,ek=(0,eL.A)(function({viewport:e,center:t}){return new eb.k(e.viewProjectionMatrix).invert().transform(t)}),eB=(0,eL.A)(function({viewport:e,shadowMatrices:t}){let i=[],r=e.pixelUnprojectionMatrix,n=e.isGeospatial?void 0:1,s=[[0,0,n],[e.width,0,n],[0,e.height,n],[e.width,e.height,n],[0,0,-1],[e.width,0,-1],[0,e.height,-1],[e.width,e.height,-1]].map(e=>(function(e,t){let[i,r,n]=e,s=(0,Y.xJ)([i,r,n],t);return Number.isFinite(n)?s:[s[0],s[1],0]})(e,r));for(let r of t){let t=r.clone().translate(new ep.P(e.center).negate()),n=s.map(e=>t.transform(e)),o=new eb.k().ortho({left:Math.min(...n.map(e=>e[0])),right:Math.max(...n.map(e=>e[0])),bottom:Math.min(...n.map(e=>e[1])),top:Math.max(...n.map(e=>e[1])),near:Math.min(...n.map(e=>-e[2])),far:Math.max(...n.map(e=>-e[2]))});i.push(o.multiplyRight(r))}return i}),ez=[0,0,0,1],eD=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],eF={name:"shadow",dependencies:[eE.A],vs:eI,fs:eO,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:function(e){let{shadowEnabled:t=!0,project:i}=e;if(!t||!i||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let r=eE.A.getUniforms(i),n=ek({viewport:i.viewport,center:r.center}),s=[],o=eB({shadowMatrices:e.shadowMatrices,viewport:i.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],a=e.clone().translate(new ep.P(i.viewport.center).negate());r.coordinateSystem===(0,eA.LB)("lnglat")&&r.projectionMode===eC.Kx.WEB_MERCATOR?(o[t]=a,s[t]=n):(o[t]=e.clone().multiplyRight(eD),s[t]=a.transform(n))}let a={drawShadowMap:!!e.drawToShadowMap,useShadowMap:!!e.shadowMaps&&e.shadowMaps.length>0,color:e.shadowColor||ez,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)a[`viewProjectionMatrix${e}`]=o[e],a[`projectCenter${e}`]=s[e];for(let t=0;t<2;t++)a[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return a},uniformTypes:{drawShadowMap:"f32",useShadowMap:"f32",color:"vec4<f32>",lightId:"i32",lightCount:"f32",viewProjectionMatrix0:"mat4x4<f32>",viewProjectionMatrix1:"mat4x4<f32>",projectCenter0:"vec4<f32>",projectCenter1:"vec4<f32>"}},eN={color:[255,255,255],intensity:1},e$=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],ej=[0,0,0,200/255];class eU{constructor(e={}){this.id="lighting-effect",this.shadowColor=ej,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:i}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),i._addDefaultShaderModule(eF),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){for(let t in this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[],e){let i=e[t];switch(i.type){case"ambient":this.ambientLight=i;break;case"directional":this.directionalLights.push(i);break;case"point":this.pointLights.push(i)}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:t,viewports:i,onViewportActive:r,views:n}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let s=0;s<this.shadowPasses.length;s++)this.shadowPasses[s].render({layers:e,layerFilter:t,viewports:i,onViewportActive:r,views:n,shaderModuleProps:{shadow:{shadowLightId:s,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let i=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},r={enabled:!0,lights:this._getLights(e)},n=e.props.material;return{shadow:i,lighting:r,phongMaterial:n,gouraudMaterial:n}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(eF))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let i=new eb.k().lookAt({eye:new ep.P(t.direction).negate()});e.push(i)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let i=new eS(e);this.shadowPasses[t]=i}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:i}=this;e||0!==t.length||0!==i.length||(this.ambientLight=new ef(eN),this.directionalLights.push(new ey(e$[0]),new ey(e$[1])))}_getLights(e){let t=[];for(let i of(this.ambientLight&&t.push(this.ambientLight),this.pointLights))t.push(i.getProjectedLight({layer:e}));for(let i of this.directionalLights)t.push(i.getProjectedLight({layer:e}));return t}}let eV=new eU;class eG{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw="Initial render",this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let i=t.findIndex(t=>{var i,r;return i=t,r=e,(i.order??1/0)-(r.order??1/0)>0});i<0?t.push(e):t.splice(i,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){"effects"in e&&!(0,P.b)(e.effects,this.effects,1)&&this._setEffects(e.effects)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let i=[];for(let r of e){let e=t[r.id],n=r;e&&e!==r?e.setProps?(e.setProps(r.props),n=e):e.cleanup(this._context):e||r.setup(this._context),i.push(n),delete t[r.id]}for(let e in t)t[e].cleanup(this._context);this.effects=i,this._resolvedEffects=i.concat(this._defaultEffects),e.some(e=>e instanceof eU)||this._resolvedEffects.push(eV),this._needsRedraw="effects changed"}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}}class eW extends ew{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes("draw")||t.includes("terrain")}render(e){return this._render(e)}}let eH={blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"zero",blendAlphaOperation:"add",blendAlphaSrcFactor:"constant",blendAlphaDstFactor:"zero"};class eq extends ew{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return"pickingFBO"in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:i,viewports:r,onViewportActive:n,pickingFBO:s,deviceRect:{x:o,y:a,width:l,height:u},cullRect:c,effects:h,pass:d="picking",pickZ:f,canvasContext:p,shaderModuleProps:g,clearColor:m}){this.pickZ=f;let v=this._resetColorEncoder(f),y=super._render({target:s,layers:e,layerFilter:t,views:i,viewports:r,onViewportActive:n,cullRect:c,effects:h?.filter(e=>e.useInPicking),pass:d,canvasContext:p,isPicking:!0,shaderModuleProps:g,clearColor:m??[0,0,0,0],colorMask:15,scissorRect:[o,a,l,u]});return this._colorEncoderState=null,{decodePickingColor:v&&eZ.bind(null,v),stats:y}}shouldDrawLayer(e){let{pickable:t,operation:i}=e.props;return t&&i.includes("draw")||i.includes("terrain")||i.includes("mask")}getShaderModuleProps(e,t,i){return{picking:{isActive:1,isAttribute:this.pickZ,disabledPickingIndices:e.internalState?.disabledPickingIndices},lighting:{enabled:!1}}}getLayerParameters(e,t,i){let r={...e.props.parameters},{pickable:n,operation:s}=e.props;return this._colorEncoderState?n&&s.includes("draw")?(Object.assign(r,eH),r.blend=!0,"webgpu"===this.device.type?r.blendConstant=eY(this._colorEncoderState,e,i):r.blendColor=eY(this._colorEncoderState,e,i),s.includes("terrain")&&e.state?._hasPickingCover&&(r.blendAlphaSrcFactor="one")):s.includes("terrain")&&(r.blend=!1):r.blend=!1,r}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}}function eY(e,t,i){let r,{byLayer:n,byAlpha:s}=e,o=n.get(t);return o?(o.viewports.push(i),r=o.a):(r=n.size+1)<=255?(o={a:r,layer:t,viewports:[i]},n.set(t,o),s[r]=o):(p.A.warn("Too many pickable layers, only picking the first 255")(),r=0),[0,0,0,r/255]}function eZ(e,t){let i=e.byAlpha[t[3]];return i&&{pickedLayer:i.layer,pickedViewports:i.viewports,pickedObjectIndex:i.layer.decodePickingColor(t)}}class eK{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new eW(e),this.pickLayersPass=new eq(e),this.renderCount=0,this._needsRedraw="Initial render",this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw="layerFilter changed"),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw="drawPickingColors changed")}renderLayers(e){let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,i={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};if(!e.viewports.length){let e=t.render(i),r="stats"in e?e.stats:e;this._updateStats(r);return}i.effects&&this._preRender(i.effects,i);let r=this.lastPostProcessEffect?this.renderBuffers[0]:i.target;this.lastPostProcessEffect&&(i.clearColor=[0,0,0,0],i.clearCanvas=!0);let n=t.render({...i,target:r}),s="stats"in n?n.stats:n;i.effects&&(this.lastPostProcessEffect&&(i.clearCanvas=void 0===e.clearCanvas||e.clearCanvas),this._postRender(i.effects,i)),this.renderCount++,(0,g.A)("deckRenderer.renderLayers",this,s,e),this._updateStats(s)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers rendered").addCount(t)}_preRender(e,t){for(let i of(this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{},e))t.preRenderStats[i.id]=i.preRender(t),i.postRender&&(this.lastPostProcessEffect=i.id);this.lastPostProcessEffect&&this._resizeRenderBuffers(t.canvasContext)}_resizeRenderBuffers(e=this.device.canvasContext){let{renderBuffers:t}=this,i=e.getDrawingBufferSize(),[r,n]=i;for(let e of(0===t.length&&[0,1].map(e=>{let i=this.device.createTexture({sampler:{minFilter:"linear",magFilter:"linear"},width:r,height:n});t.push(this.device.createFramebuffer({id:`deck-renderbuffer-${e}`,colorAttachments:[i]}))}),t))e.resize(i)}_postRender(e,t){let{renderBuffers:i}=this,r=t.target??t.canvasContext?.getCurrentFramebuffer()??t.target,n={...t,inputBuffer:i[0],swapBuffer:i[1]};for(let t of e)if(t.postRender){n.target=t.id===this.lastPostProcessEffect?r:void 0;let e=t.postRender(n);n.inputBuffer=e,n.swapBuffer=e===i[0]?i[1]:i[0]}}}var eX=i(712),eQ=i(22839);let eJ={pickedColor:null,pickedObjectIndex:-1};function e0({pickedColors:e,decodePickingColor:t,deviceX:i,deviceY:r,deviceRadius:n,deviceRect:s}){let{x:o,y:a,width:l,height:u}=s,c=n*n,h=-1,d=0;for(let t=0;t<u;t++){let n=t+a-r,s=n*n;if(s>c)d+=4*l;else for(let t=0;t<l;t++){if(e[d+3]-1>=0){let e=t+o-i,r=e*e+s;r<=c&&(c=r,h=d)}d+=4}}if(h>=0){let i=e.slice(h,h+4),r=t(i);if(r){let e=Math.floor(h/4/l),t=h/4-e*l;return{...r,pickedColor:i,pickedX:o+t,pickedY:a+e}}p.A.error("Picked non-existent layer. Is picking buffer corrupt?")()}return eJ}function e2({pickedColors:e,decodePickingColor:t}){let i=new Map;if(e){for(let r=0;r<e.length;r+=4)if(e[r+3]-1>=0){let n=e.slice(r,r+4),s=n.join(",");if(!i.has(s)){let e=t(n);e?i.set(s,{...e,color:n}):p.A.error("Picked non-existent layer. Is picking buffer corrupt?")()}}}return Array.from(i.values())}function e3({pickInfo:e,viewports:t,pixelRatio:i,x:r,y:n,z:s}){let o,a=t[0];if(t.length>1&&(a=function(e,t){for(let i=e.length-1;i>=0;i--){let r=e[i];if(r.containsPixel(t))return r}return e[0]}(e?.pickedViewports||t,{x:r,y:n})),a){let e=[r-a.x,n-a.y];void 0!==s&&(e[2]=s),o=a.unproject(e)}return{color:null,layer:null,viewport:a,index:-1,picked:!1,x:r,y:n,pixel:[r,n],coordinate:o,devicePixel:e&&"pickedX"in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:i}}function e1(e){let{pickInfo:t,lastPickedInfo:i,mode:r,layers:n}=e,{pickedColor:s,pickedLayer:o,pickedObjectIndex:a}=t,l=o?[o]:[];if("hover"===r){let e=i.index,t=i.layerId,r=o?o.props.id:null;if(r!==t||a!==e){if(r!==t){let e=n.find(e=>e.props.id===t);e&&l.unshift(e)}i.layerId=r,i.index=a,i.info=null}}let u=e3(e),c=new Map;return c.set(null,u),l.forEach(e=>{let t={...u};e===o&&(t.color=s,t.index=a,t.picked=!0);let n=(t=e4({layer:e,info:t,mode:r})).layer;e===o&&"hover"===r&&(i.info=t),c.set(n.id,t),"hover"===r&&n.updateAutoHighlight(t)}),c}function e4({layer:e,info:t,mode:i}){for(;e&&t;){let r=t.layer||null;t.sourceLayer=r,t.layer=e,t=e.getPickingInfo({info:t,mode:i,sourceLayer:r}),e=e.parent}return t}class e6{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new eq(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){"layerFilter"in e&&(this.layerFilter=e.layerFilter),"_pickable"in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:i,viewports:r},n=this.lastPickedInfo.info){let s=n&&n.layer&&n.layer.id,o=n&&n.viewport&&n.viewport.id,a=s?i.find(e=>e.id===s):null,l=o&&r.find(e=>e.id===o)||r[0],u=l&&l.unproject([e-l.x,t-l.y]);return{...n,x:e,y:t,viewport:l,coordinate:u,layer:a}}_resizeBuffer(e=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){let e=this.device.createTexture({format:"rgba8unorm",width:1,height:1,usage:eX.g.RENDER_ATTACHMENT|eX.g.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"}),this.device.isTextureFormatRenderable("rgba32float")){let e=this.device.createTexture({format:"rgba32float",width:1,height:1,usage:eX.g.RENDER_ATTACHMENT|eX.g.COPY_SRC}),t=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"});this.depthFBO=t}}let[t,i]=e.getDrawingBufferSize();this.pickingFBO?.resize({width:t,height:i}),this.depthFBO?.resize({width:t,height:i})}_getPickable(e){if(!1===this._pickable)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:i,x:r,y:n,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:u=this.device.getDefaultCanvasContext(),onViewportActive:c,effects:h}){let d,f=u.cssToDeviceRatio(),p=this._getPickable(e);if(!p||0===i.length)return{result:[],emptyInfo:e3({viewports:i,x:r,y:n,pixelRatio:f})};this._resizeBuffer(u);let g=u.cssToDevicePixels([r,n],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],v=Math.round(s*f),{width:y,height:b}=this.pickingFBO,_=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceWidth:y,deviceHeight:b}),x={x:r-s,y:n-s,width:2*s+1,height:2*s+1},w=[],P=new Set;for(let e=0;e<o;e++){let s,g;if(_){let e=await this._drawAndSampleAsync({layers:p,views:t,viewports:i,onViewportActive:c,deviceRect:_,cullRect:x,effects:h,pass:`picking:${a}`,canvasContext:u});s=e0({...e,deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceRect:_})}else s={pickedColor:null,pickedObjectIndex:-1};let y=this._getDepthLayers(s,p,l);if(y.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:y,views:t,viewports:i,onViewportActive:c,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:x,effects:h,pass:`picking:${a}:z`,canvasContext:u},!0);e[3]&&(g=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=e1({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:p,viewports:i,x:r,y:n,z:g,pixelRatio:f})).values()))t.layer&&w.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:w,emptyInfo:d.get(null)}}_pickClosestObject({layers:e,views:t,viewports:i,x:r,y:n,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:u=this.device.getDefaultCanvasContext(),onViewportActive:c,effects:h}){let d,f=u.cssToDeviceRatio(),p=this._getPickable(e);if(!p||0===i.length)return{result:[],emptyInfo:e3({viewports:i,x:r,y:n,pixelRatio:f})};this._resizeBuffer(u);let g=u.cssToDevicePixels([r,n],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],v=Math.round(s*f),{width:y,height:b}=this.pickingFBO,_=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceWidth:y,deviceHeight:b}),x={x:r-s,y:n-s,width:2*s+1,height:2*s+1},w=[],P=new Set;for(let e=0;e<o;e++){let s,g;if(_){let e=this._drawAndSample({layers:p,views:t,viewports:i,onViewportActive:c,deviceRect:_,cullRect:x,effects:h,pass:`picking:${a}`,canvasContext:u});s=e0({...e,deviceX:m[0],deviceY:m[1],deviceRadius:v,deviceRect:_})}else s={pickedColor:null,pickedObjectIndex:-1};let y=this._getDepthLayers(s,p,l);if(y.length>0){let{pickedColors:e}=this._drawAndSample({layers:y,views:t,viewports:i,onViewportActive:c,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:x,effects:h,pass:`picking:${a}:z`,canvasContext:u},!0);e[3]&&(g=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=e1({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:p,viewports:i,x:r,y:n,z:g,pixelRatio:f})).values()))t.layer&&w.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:w,emptyInfo:d.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:i,x:r,y:n,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:u=this.device.getDefaultCanvasContext(),onViewportActive:c,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(u);let f=u.cssToDeviceRatio(),p=u.cssToDevicePixels([r,n],!0),g=p.x,m=p.y+p.height,v=u.cssToDevicePixels([r+s,n+o],!0),y=v.x+v.width,b=v.y,_=await this._drawAndSampleAsync({layers:d,views:t,viewports:i,onViewportActive:c,deviceRect:{x:g,y:b,width:y-g,height:m-b},cullRect:{x:r,y:n,width:s,height:o},effects:h,pass:`picking:${a}`,canvasContext:u}),x=e2(_),w=new Map,P=[],S=Number.isFinite(l);for(let e=0;e<x.length&&(!S||!(P.length>=l));e++){let t=x[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:n,pixelRatio:f},s=(i=e4({layer:t.pickedLayer,info:i,mode:a})).layer.id;w.has(s)||w.set(s,new Set);let o=w.get(s),l=i.object??i.index;o.has(l)||(o.add(l),P.push(i))}return P}_pickVisibleObjects({layers:e,views:t,viewports:i,x:r,y:n,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:u=this.device.getDefaultCanvasContext(),onViewportActive:c,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(u);let f=u.cssToDeviceRatio(),p=u.cssToDevicePixels([r,n],!0),g=p.x,m=p.y+p.height,v=u.cssToDevicePixels([r+s,n+o],!0),y=v.x+v.width,b=v.y,_=this._drawAndSample({layers:d,views:t,viewports:i,onViewportActive:c,deviceRect:{x:g,y:b,width:y-g,height:m-b},cullRect:{x:r,y:n,width:s,height:o},effects:h,pass:`picking:${a}`,canvasContext:u}),x=e2(_),w=new Map,P=[],S=Number.isFinite(l);for(let e=0;e<x.length&&(!S||!(P.length>=l));e++){let t=x[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:n,pixelRatio:f},s=(i=e4({layer:t.pickedLayer,info:i,mode:a})).layer.id;w.has(s)||w.set(s,new Set);let o=w.get(s),l=i.object??i.index;o.has(l)||(o.add(l),P.push(i))}return P}async _drawAndSampleAsync({layers:e,views:t,viewports:i,onViewportActive:r,deviceRect:n,cullRect:s,effects:o,pass:a,canvasContext:l},u=!1){let c=u?this.depthFBO:this.pickingFBO,h={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:r,pickingFBO:c,deviceRect:n,cullRect:s,effects:o,pass:a,canvasContext:l,pickZ:u,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(h.preRenderStats[e.id]=e.preRender(h));let{decodePickingColor:d,stats:f}=this.pickLayersPass.render(h);this._updateStats(f);let{x:g,y:m,width:v,height:y}=n,b=c.colorAttachments[0]?.texture;if(!b)throw Error("Picking framebuffer color attachment is missing");let _=await this._readTextureDataAsync(b,{x:g,y:m,width:v,height:y},u?Float32Array:Uint8Array);if(!u){let e=!1;for(let t=3;t<_.length;t+=4)if(0!==_[t]){e=!0;break}!e&&_.length>0&&p.A.warn("Async pick readback returned only zero alpha values",{deviceRect:n,bytes:Array.from(_.subarray(0,Math.min(_.length,16)))})()}return{pickedColors:_,decodePickingColor:d}}async _readTextureDataAsync(e,t,i){let{width:r,height:n}=t,s=e.computeMemoryLayout(t),o=this.device.createBuffer({byteLength:s.byteLength,usage:eQ.h.COPY_DST|eQ.h.MAP_READ});try{e.readBuffer(t,o);let a=await o.readAsync(0,s.byteLength),l=i.BYTES_PER_ELEMENT;if(s.bytesPerRow%l!=0)throw Error(`Texture readback row stride ${s.bytesPerRow} is not aligned to ${l}-byte elements.`);let u=new i(a.buffer,a.byteOffset,s.byteLength/l),c=4*r,h=s.bytesPerRow/l;if(h<c)throw Error(`Texture readback row stride ${h} is smaller than packed row length ${c}.`);let d=new i(r*n*4);for(let e=0;e<n;e++){let t=e*h;d.set(u.subarray(t,t+c),e*c)}return d}finally{o.destroy()}}_drawAndSample({layers:e,views:t,viewports:i,onViewportActive:r,deviceRect:n,cullRect:s,effects:o,pass:a,canvasContext:l},u=!1){let c=u?this.depthFBO:this.pickingFBO,h={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:r,pickingFBO:c,deviceRect:n,cullRect:s,effects:o,pass:a,canvasContext:l,pickZ:u,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(h.preRenderStats[e.id]=e.preRender(h));let{decodePickingColor:d,stats:f}=this.pickLayersPass.render(h);this._updateStats(f);let{x:p,y:g,width:m,height:v}=n,y=new(u?Float32Array:Uint8Array)(m*v*4);return this.device.readPixelsToArrayWebGL(c,{sourceX:p,sourceY:g,sourceWidth:m,sourceHeight:v,target:y}),{pickedColors:y,decodePickingColor:d}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers picked").addCount(t)}_getDepthLayers(e,t,i){if(!i||!this.depthFBO)return[];let{pickedLayer:r}=e,n=r?.state?.terrainDrawMode==="drape";return r&&!n?[r]:t.filter(e=>e.props.operation.includes("terrain"))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:i,deviceWidth:r,deviceHeight:n}){let s=Math.max(0,e-i),o=Math.max(0,t-i),a=Math.min(r,e+i+1)-s,l=Math.min(n,t+i+1)-o;return a<=0||l<=0?null:{x:s,y:o,width:a,height:l}}}let e5={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},e8="root";class e9{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add("deck-widget-container"),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!(0,P.b)(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);for(let e in this.defaultWidgets.length=0,this.resolvedWidgets.length=0,this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let i=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let r of this.getWidgets()){let{viewId:n}=r;if(n){let e=i[n];e&&(r.onViewportChange&&r.onViewportChange(e),r.onRedraw?.({viewports:[e],layers:t}))}else{if(r.onViewportChange)for(let t of e)r.onViewportChange(t);r.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=i,this._updateContainers()}onHover(e,t){for(let i of this.getWidgets()){let{viewId:r}=i;r&&r!==e.viewport?.id||i.onHover?.(e,t)}}getCanvasBounds(e){let t=this.deck?.getCanvas?.(),i=t?.getBoundingClientRect(),r=this.parentElement?.getBoundingClientRect(),n=this.deck?.getCanvasContext?.(e?.id);if(n&&r){n.updatePosition();let[e,t]=n.getPosition(),[i,s]=n.getCSSSize();return{x:e-r.left,y:t-r.top,width:i,height:s}}return{x:i&&r?i.left-r.left:0,y:i&&r?i.top-r.top:0,width:i?.width||this.deck?.width||0,height:i?.height||this.deck?.height||0}}onEvent(e,t){let i=eC.tg[t.type];if(i)for(let r of this.getWidgets()){let{viewId:n}=r;n&&n!==e.viewport?.id||r[i]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;for(let e of(this.resolvedWidgets.length=0,this.defaultWidgets))t[e.id]=null,this.resolvedWidgets.push(e);for(let i of e){let e=t[i.id];e?e.viewId!==i.viewId||e.placement!==i.placement?(this._removeWidget(e),this._addWidget(i)):i!==e&&(e.setProps(i.props),i=e):this._addWidget(i),t[i.id]=null,this.resolvedWidgets.push(i)}for(let e in t){let i=t[e];i&&this._removeWidget(i)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:i="top-left"}=e,r=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(r,i).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&"string"!=typeof e)return e;let i=e||e8,r=this.containers[i];r||((r=document.createElement("div")).style.pointerEvents="none",r.style.position="absolute",r.style.overflow="hidden",this.parentElement?.append(r),this.containers[i]=r);let n=r.querySelector(`.${t}`);return n||((n=globalThis.document.createElement("div")).className=t,n.style.position="absolute",n.style.zIndex="2",Object.assign(n.style,e5[t]),r.append(n)),n}_updateContainers(){for(let e in this.containers){let t=this.lastViewports[e]||null,i=e===e8||t,r=this.containers[e];if(i){let e=this._getContainerBounds(t);r.style.display="block",r.style.left=`${e.x}px`,r.style.top=`${e.y}px`,r.style.width=`${e.width}px`,r.style.height=`${e.height}px`}else r.style.display="none"}}_getContainerBounds(e){if(!e)return{x:0,y:0,width:this.parentElement?.clientWidth||this.deck.width,height:this.parentElement?.clientHeight||this.deck.height};let t=this.getCanvasBounds(e);return{x:t.x+e.x,y:t.y+e.y,width:e.width,height:e.height}}}function e7(e,t){t&&Object.entries(t).map(([t,i])=>{t.startsWith("--")?e.style.setProperty(t,i):e.style[t]=i})}class te{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,i=this.rootElement;if(i&&t.className!==e.className&&(t.className&&i.classList.remove(t.className),e.className&&i.classList.add(e.className)),i&&!(0,P.b)(t.style,e.style,1)){var r;(r=t.style)&&Object.keys(r).map(e=>{e.startsWith("--")?i.style.removeProperty(e):i.style[e]=""}),e7(i,e.style)}Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=["deck-widget",this.className,this.props.className],t=document.createElement("div");return e.filter(e=>"string"==typeof e&&e.length>0).forEach(e=>t.classList.add(e)),e7(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}}te.defaultProps={id:"widget",style:{},_container:null,className:""};let tt={zIndex:"1",position:"absolute",pointerEvents:"none",color:"#a0a7b4",backgroundColor:"#29323c",padding:"10px",top:"0",left:"0",display:"none"};class ti extends te{constructor(e={}){super(e),this.id="default-tooltip",this.placement="fill",this.className="deck-tooltip",this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement("div");return e.className=this.className,Object.assign(e.style,tt),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,i=t&&t.props.getTooltip;if(!i)return;let r=i(e),n=this.widgetManager?.getCanvasBounds(e.viewport),s=e.x+(n?.x||0),o=e.y+(n?.y||0);this.setTooltip(r,s,o)}setTooltip(e,t,i){let r=this.rootElement;if(r){if("string"==typeof e)r.innerText=e;else if(e)e.text&&(r.innerText=e.text),e.html&&(r.innerHTML=e.html),e.className&&(r.className=e.className);else{this.isVisible=!1,r.style.display="none";return}this.isVisible=!0,r.style.display="block",r.style.transform=`translate(${t}px, ${i}px)`,e&&"object"==typeof e&&"style"in e&&Object.assign(r.style,e.style)}}}ti.defaultProps={...te.defaultProps};class tr{constructor(e){this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap,this._createEventManager=e.createEventManager,this._getEventRoot=e.getEventRoot}finalize(){for(let e of Object.values(this.targets))e.eventManager.destroy(),e.presentationContext.destroy();this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap}syncCanvasEntries(e){let t=this._normalizeCanvasList(e.canvases),i={},r=[],n=new Map;for(let{canvas:e}of t){let t=this._getEventRoot(e);n.set(t,(n.get(t)||0)+1)}for(let{id:s,canvas:o}of t){let t=this._getEventRoot(o),a=1===n.get(t)?t:o,l=this.targets[s];if(!l||l.device!==e.device||l.canvas!==o||l.eventRoot!==a){l?.eventManager.destroy(),l?.presentationContext.destroy();let t=e.device.createPresentationContext({id:s,canvas:o,useDevicePixels:e.useDevicePixels,autoResize:!0});l={id:s,device:e.device,canvas:o,eventRoot:a,presentationContext:t,eventManager:this._createEventManager(a)}}this._eventRootToCanvasId.set(a,s),this._eventRootToCanvasId.set(o,s),i[s]=l,r.push(s)}for(let[e,t]of Object.entries(this.targets))i[e]||(t.eventManager.destroy(),t.presentationContext.destroy());this.targets=i,this.order=r;let s=Object.fromEntries(Object.entries(i).map(([e,t])=>[e,t.eventManager]));this._haveSameEventManagers(s)||(this.eventManagers=s)}getCanvasIdFromEvent(e){return e?this._eventRootToCanvasId.get(e):void 0}getTarget(e){return this.targets[e||this.order[0]||S]||null}_normalizeCanvasList(e=[]){let t=new Set;return e.map((e,i)=>{let r,n;return"string"==typeof e?(r=document.getElementById(e),(0,V.A)(r,`Canvas with id ${e} not found`),n=e):n=(r=e).id||`deckgl-canvas-${i}`,(0,V.A)(!t.has(n),`Duplicate canvas id ${n}`),t.add(n),{id:n,canvas:r}})}_haveSameEventManagers(e){let t=Object.keys(e),i=Object.keys(this.eventManagers);return t.length===i.length&&t.every(t=>e[t]===this.eventManagers[t])}}var tn=i(68169),ts=i(28784),to=i(76894),ta=i(21652);let tl=globalThis.loaders?.parseImageNode,tu="undefined"!=typeof Image,tc="undefined"!=typeof ImageBitmap,th=!!ta.Bd||!!tl,td=/^data:image\/svg\+xml/,tf=/\.svg((\?|#).*)?$/;function tp(e){return e&&(td.test(e)||tf.test(e))}function tg(e,t){if(tp(t))throw Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(e)])}async function tm(e,t,i){let r=function(e,t){if(tp(t)){let t=new TextDecoder().decode(e);try{"function"==typeof unescape&&"function"==typeof encodeURIComponent&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return tg(e,t)}(e,i),n=self.URL||self.webkitURL,s="string"!=typeof r&&n.createObjectURL(r);try{return await tv(s||r,t)}finally{s&&n.revokeObjectURL(s)}}async function tv(e,t){let i=new Image;return(i.src=e,t.image&&t.image.decode&&i.decode)?(await i.decode(),i):await new Promise((e,t)=>{try{i.onload=()=>e(i),i.onerror=e=>{let i=e instanceof Error?e.message:"error";t(Error(i))}}catch(e){t(e)}})}let ty=!0;async function tb(e,t,i){let r;r=tp(i)?await tm(e,t,i):tg(e,i);let n=t&&t.imagebitmap;return await t_(r,n)}async function t_(e,t=null){if((function(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t)||!ty)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),ty=!1}return await createImageBitmap(e)}function tx(e){let t=tw(e);return function(e){let t=tw(e);return t.byteLength>=24&&0x89504e47===t.getUint32(0,!1)?{mimeType:"image/png",width:t.getUint32(16,!1),height:t.getUint32(20,!1)}:null}(t)||function(e){let t=tw(e);if(!(t.byteLength>=3&&65496===t.getUint16(0,!1)&&255===t.getUint8(2)))return null;let{tableMarkers:i,sofMarkers:r}=function(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}(),n=2;for(;n+9<t.byteLength;){let e=t.getUint16(n,!1);if(r.has(e))return{mimeType:"image/jpeg",height:t.getUint16(n+5,!1),width:t.getUint16(n+7,!1)};if(!i.has(e))break;n+=2,n+=t.getUint16(n,!1)}return null}(t)||function(e){let t=tw(e);return t.byteLength>=10&&0x47494638===t.getUint32(0,!1)?{mimeType:"image/gif",width:t.getUint16(6,!0),height:t.getUint16(8,!0)}:null}(t)||function(e){let t=tw(e);return t.byteLength>=14&&16973===t.getUint16(0,!1)&&t.getUint32(2,!0)===t.byteLength?{mimeType:"image/bmp",width:t.getUint32(18,!0),height:t.getUint32(22,!0)}:null}(t)||function(e){var t;let i=!function(e,t,i=0){let r=[...t].map(e=>e.charCodeAt(0));for(let t=0;t<r.length;++t)if(r[t]!==e[t+i])return!1;return!0}(t=new Uint8Array(e instanceof DataView?e.buffer:e),"ftyp",4)||(96&t[8])==0?null:function(e){switch(String.fromCharCode(...e.slice(8,12)).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}(t);return i?{mimeType:i.mimeType,width:0,height:0}:null}(t)}function tw(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error("toDataView")}async function tP(e,t){let{mimeType:i}=tx(e)||{},r=globalThis.loaders?.parseImageNode;return(0,to.v)(r),await r(e,i)}let tS={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:"4.5.2",mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],extensions:["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],parse:async function e(e,t,i){let r,n=((t=t||{}).image||{}).type||"auto",{url:s}=i||{};switch(function(e){switch(e){case"auto":case"data":if(tc)return"imagebitmap";if(tu)return"image";if(th)return"data";throw Error("Install '@loaders.gl/polyfills' to parse images under Node.js");default:return!function(e){switch(e){case"auto":return tc;case"imagebitmap":case"image":case"data":return;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}(e),e}}(n)){case"imagebitmap":r=await tb(e,t,s);break;case"image":r=await tm(e,t,s);break;case"data":r=await tP(e,t);break;default:(0,to.v)(!1)}return"data"===n&&(r=function(e){switch(function(e){var t;let i=(t=e,"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?"imagebitmap":"undefined"!=typeof Image&&t instanceof Image?"image":t&&"object"==typeof t&&t.data&&t.width&&t.height?"data":null);if(!i)throw Error("Not an image");return i}(e)){case"data":return e;case"image":case"imagebitmap":let t=document.createElement("canvas"),i=t.getContext("2d");if(!i)throw Error("getImageData");return t.width=e.width,t.height=e.height,i.drawImage(e,0,0),i.getImageData(0,0,e.width,e.height);default:throw Error("getImageData")}}(r)),r},tests:[e=>!!tx(new DataView(e))],options:{image:{type:"auto",decode:!0}}},tC={dataType:null,batchType:null,id:"JSON",name:"JSON",module:"",version:"",options:{},extensions:["json","geojson"],mimeTypes:["application/json","application/geo+json"],testText:function(e){let t=e[0],i=e[e.length-1];return"{"===t&&"}"===i||"["===t&&"]"===i},parseTextSync:JSON.parse},tE=function(){let e="9.4.0",t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);return t||(p.A.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:p.A,_registerLoggers:g.k},(0,ts.mk)([tC,[tS,{imagebitmap:{premultiplyAlpha:"none"}}]])),e}();var tL=i(85002),tA=i(69978),tT=i(29101);let tM="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.";class tI{static defaultProps={...tL.M,type:"best-available",adapters:void 0,waitForPageLoad:!0};stats=tA.d;log=tT.R;VERSION="9.4.2";spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw tT.R.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),tT.R.error("'yarn why @luma.gl/core' can help identify the source of the conflict")(),Error("luma.gl - multiple versions detected: see console log");tT.R.error("This version of luma.gl has already been initialized")()}tT.R.log(1,`${this.VERSION} - set luma.log.level=1 (or higher) to trace rendering`)(),globalThis.luma=this}async createDevice(e={}){let t={...tI.defaultProps,...e},i=this.selectAdapter(t.type,t.adapters);if(!i)throw Error(tM);return t.waitForPageLoad&&await i.pageLoaded,await i.create(t)}async attachDevice(e,t){let i=this._getTypeFromHandle(e,t.adapters),r=i&&this.selectAdapter(i,t.adapters);if(!r)throw Error(tM);return await r?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){return Array.from(this._getAdapterMap(e)).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=this._getAdapterMap(e);for(let e of["webgpu","webgl","null"])if(t.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let i=e;"best-available"===e&&(i=this.getBestAvailableAdapterType(t));let r=this._getAdapterMap(t);return i&&r.get(i)||null}enforceWebGL2(e=!0,t=[]){let i=this._getAdapterMap(t).get("webgl");i||tT.R.warn("enforceWebGL2: webgl adapter not found")(),i?.enforceWebGL2?.(e)}setDefaultDeviceProps(e){Object.assign(tI.defaultProps,e)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let i of e)t.set(i.type,i);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?"webgl":"undefined"!=typeof GPUDevice&&e instanceof GPUDevice||e?.queue?"webgpu":null===e?"null":(e instanceof WebGLRenderingContext?tT.R.warn("WebGL1 is not supported",e)():tT.R.warn("Unknown handle type",e)(),null)}}let tR=new tI;var tO=i(28804);class tk{get pageLoaded(){return tz||(tz=tB&&"complete"===document.readyState||"undefined"==typeof window?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e()))),tz}}let tB=(0,tO.B)()&&"undefined"!=typeof document,tz=null;var tD=i(87765);let tF={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}};var tN=i(85175);class t$ extends tk{type="webgl";enforceWebGL2(e){!function(e=!0){let t=HTMLCanvasElement.prototype;if(!e&&t.originalGetContext){t.getContext=t.originalGetContext,t.originalGetContext=void 0;return}t.originalGetContext=t.getContext,t.getContext=function(e,t){if("webgl"===e||"experimental-webgl"===e){let e=this.originalGetContext("webgl2",t);return e instanceof HTMLElement&&function(e){e.getExtension("EXT_color_buffer_float");let t={...tF,WEBGL_disjoint_timer_query:e.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:{drawBuffersWEBGL:t=>e.drawBuffers(t),COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067},OES_vertex_array_object:{VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES:()=>e.createVertexArray(),deleteVertexArrayOES:t=>e.deleteVertexArray(t),isVertexArrayOES:t=>e.isVertexArray(t),bindVertexArrayOES:t=>e.bindVertexArray(t)},ANGLE_instanced_arrays:{VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE:(...t)=>e.drawArraysInstanced(...t),drawElementsInstancedANGLE:(...t)=>e.drawElementsInstanced(...t),vertexAttribDivisorANGLE:(...t)=>e.vertexAttribDivisor(...t)}},i=e.getExtension.bind(e);e.getExtension=function(e){let r=i(e);return r||(e in t?t[e]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){let i=r.apply(e)||[];return i?.concat(Object.keys(t))}}(e),e}return this.originalGetContext(e,t)}}(e)}isSupported(){return"undefined"!=typeof WebGL2RenderingContext}isDeviceHandle(e){return!!("undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext)||("undefined"!=typeof WebGLRenderingContext&&e instanceof WebGLRenderingContext&&tT.R.warn("WebGL1 is not supported",e)(),!1)}async attach(e,t={}){var r;let{WebGLDevice:n}=await Promise.resolve().then(i.bind(i,42899));if(e instanceof n)return e;let s=n.getDeviceFromContext(e);if(s)return s;if(r=e,!("undefined"!=typeof WebGL2RenderingContext&&r instanceof WebGL2RenderingContext)&&(!r||"function"!=typeof r.createVertexArray))throw Error("Invalid WebGL2RenderingContext");t=tU(t),await tV(t);let o=!0===t.createCanvasContext?{}:t.createCanvasContext;return new n({...t,_handle:e,createCanvasContext:{canvas:e.canvas,autoResize:!1,...o}})}async create(e={}){let{WebGLDevice:t}=await Promise.resolve().then(i.bind(i,42899));e=tU(e),await tV(e);try{let i=new t(e);tT.R.groupCollapsed(1,`WebGLDevice ${i.id} created`)();let r=`\
${i._reused?"Reusing":"Created"} device with WebGL2 ${i.props.debug?"debug ":""}context: \
${i.info.vendor}, ${i.info.renderer} for canvas: ${i.canvasContext.id}`;return tT.R.probe(1,r)(),tT.R.table(1,i.info)(),i}finally{tT.R.groupEnd(1)(),tT.R.info(1,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}}let tj=new t$;function tU(e){return{...e,debug:e.debug??tD.pF.defaultProps.debug,debugWebGL:e.debugWebGL??tD.pF.defaultProps.debugWebGL,debugSpectorJS:e.debugSpectorJS??!!tT.R.get("debug-spectorjs")}}async function tV(e){let t=[];for(let i of((e.debugWebGL||e.debug)&&t.push((0,tN.z2)()),e.debugSpectorJS&&t.push((0,tN.Oy)(e)),await Promise.allSettled(t)))"rejected"===i.status&&tT.R.error(`Failed to initialize debug libraries ${i.reason}`)()}let tG=0,tW={requestAnimationFrame:e=>(function(e){let t="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null;return t?t.call(window,e):setTimeout(()=>e("undefined"!=typeof performance?performance.now():Date.now()),1e3/60)})(e),cancelAnimationFrame:e=>(function(e){let t="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null;if(t)return void t.call(window,e);clearTimeout(e)})(e)};class tH{static defaultAnimationLoopProps={device:null,onAddHTML:()=>"",onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>{console.error(e)},stats:void 0,autoResizeViewport:!1,animationFrameProvider:tW};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw="initialized";_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(e){if(this.props={...tH.defaultAnimationLoopProps,...e},!(e=this.props).device)throw Error("No device provided");this.stats=e.stats||new v.Uz({id:`animation-loop-${tG++}`}),this.sharedStats=tR.stats.get("Animation Loop"),this.frameRate=this.stats.get("Frame Rate"),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get("CPU Time"),this.gpuTime=this.stats.get("GPU Time"),this.setProps({autoResizeViewport:e.autoResizeViewport,animationFrameProvider:e.animationFrameProvider}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(e){this._error=e,this.props.onError(e),this.props.onError===tH.defaultAnimationLoopProps.onError&&"undefined"!=typeof window&&"undefined"!=typeof ErrorEvent&&window.dispatchEvent(new ErrorEvent("error",{error:e,message:e.message}))}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){if("autoResizeViewport"in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),"animationFrameProvider"in e){let t=e.animationFrameProvider||tW;if(t!==this.props.animationFrameProvider){let e=null!==this._animationFrameId;e&&this._cancelAnimationFrame(),this.props.animationFrameProvider=t,e&&this._requestAnimationFrame()}}return this}async start(){if(this._running)return this;this._running=!0;try{let e;if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}if(!this._running)return null;return!1!==e&&(this._cancelAnimationFrame(),this._requestAnimationFrame()),this}catch(t){let e=t instanceof Error?t:Error("Unknown error");throw this.props.onError(e),e}}stop(){if(this._running){let e=this.animationProps;this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0,e&&this.props.onFinalize(e)}return this}redraw(e,t=null){return this.device?.isLost||this._error||(this._beginFrameTimers(e),this._setupFrame(),this.animationProps&&(this.animationProps.animationFrame=t),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&(this._resolveNextFrame(this),this._nextFramePromise=null,this._resolveNextFrame=null),this._endFrameTimers()),this}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw("waitForRender"),this._nextFramePromise||(this._nextFramePromise=new Promise(e=>{this._resolveNextFrame=e})),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw("toDataURL"),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error("OffscreenCanvas")}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){this._running&&(this._animationFrameId=this.props.animationFrameProvider.requestAnimationFrame(this._animationFrame.bind(this)))}_cancelAnimationFrame(){null!==this._animationFrameId&&(this.props.animationFrameProvider.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_animationFrame(e,t){if(this._running)try{this.redraw(e,t??null),this._requestAnimationFrame()}catch(t){let e=t instanceof Error?t:Error(String(t));this.reportError(e),this.stop()}}_renderFrame(e){if(this.display)return void this.display._renderFrame(e);let t=this.props.onRender(this._getAnimationProps());this.device&&!1!==t&&this.device.submit()}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error("loop");let t=e?.canvas,i=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:i,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,animationFrame:null,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error("animationProps");return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:i}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw("drawing buffer resized"),i!==this.animationProps.aspect&&this.setNeedsRedraw("drawing buffer aspect changed"),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=i,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error("No device provided");this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement("div");document.body.appendChild(e),e.style.position="relative";let t=document.createElement("div");t.style.position="absolute",t.style.left="10px",t.style.bottom="10px",t.style.width="300px",t.style.background="white",this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let i=this.props.onAddHTML(t);i&&(t.innerHTML=i)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??("undefined"!=typeof performance?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;void 0!==e&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener("mousemove",this._onMousemove.bind(this)),this.canvas.addEventListener("mouseleave",this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}}var tq=i(12187);function tY(){}let tZ={id:"",width:"100%",height:"100%",style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:"auto",layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,_canvases:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:"none",eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:tY,onWebGLInitialized:tY,onResize:tY,onViewStateChange:tY,onInteractionStateChange:tY,onBeforeRender:tY,onAfterRender:tY,onLoad:tY,onError:e=>p.A.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:({isDragging:e})=>e?"grabbing":"grab",getTooltip:null,debug:!1,drawPickingColors:!1};class tK{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.eventManagers={},this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new v.Uz({id:"deck.gl"}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw="Initial render",this._canvasManager=new tr({createEventManager:e=>this._createEventManager(e),getEventRoot:e=>this._getEventRoot(e)}),this._ownedCanvas=null,this._pickRequest={mode:"hover",x:-1,y:-1,radius:0,canvasId:void 0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this,i=this._getCanvasIdFromEvent(e);if("pointerleave"===e.type)t.x=-1,t.y=-1,t.radius=0,t.canvasId=i;else{if(e.leftButton||e.rightButton)return;let r=e.offsetCenter;if(!r)return;t.x=r.x,t.y=r.y,t.radius=this.props.pickingRadius,t.canvasId=i}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=eC.tg[e.type],i=e.offsetCenter,r=this._getCanvasIdFromEvent(e);if(!t||!i||!this.layerManager)return;let n=this.layerManager.getLayers(),s=this._getInternalPickingMode();if(s){if("sync"===s){let t="click"===e.type&&this._shouldUnproject3D(n)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(i.x,i.y,{unproject3D:!0,canvasId:r},n))):this._getLastPointerDownPickingInfo(i.x,i.y,r,n);this._dispatchPickingEvent(t,e);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(i.x,i.y,r,n))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter,i=this._getCanvasIdFromEvent(e);if(!t)return;let r=this._getInternalPickingMode();if(!r)return;let n=this.layerManager?.getLayers()||[],s=++this._pointerDownPickSequence;if("sync"===r){let e=this._pickPointSync({x:t.x,y:t.y,canvasId:i,radius:this.props.pickingRadius}),r=this._getFirstPickedInfo(e);this._lastPointerDownInfo=r,this._lastPointerDownInfoPromise=Promise.resolve(r);return}let o=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{canvasId:i},n)).then(e=>this._getFirstPickedInfo(e)).then(e=>(s===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let r=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,i,n):{};return s===this._pointerDownPickSequence&&(this._lastPointerDownInfo=r),r});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=o};let t=e;this.props={...tZ,...e},e=this.props,this._validateCanvasConfiguration(e),e.viewState&&e.initialViewState&&p.A.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device,this._setDeviceCanvasContext(e.device));let i=this.device;!i&&e.gl&&(e.gl instanceof WebGLRenderingContext&&p.A.error("WebGL1 context not supported.")(),i=tj.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps})),i||(i=this._createDevice(e)),this.animationLoop=this._createAnimationLoop(i,e),this.setProps(t),e._typedArrayManagerProps&&tn.A.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,Object.keys(this._canvasManager.targets).length||this.eventManager?.destroy(),this.eventManager=null,this.eventManagers={},this.widgetManager?.finalize(),this.widgetManager=null,this._canvasManager.finalize(),this._isMultiCanvasMode()?this.canvas=null:this.canvas&&this.canvas===this._ownedCanvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null,this._ownedCanvas=null),this._canvasContext=null}setProps(e){this.stats.get("setProps Time").timeStart(),"onLayerHover"in e&&p.A.removed("onLayerHover","onHover")(),"onLayerClick"in e&&p.A.removed("onLayerClick","onClick")(),e.initialViewState&&!(0,P.b)(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),(0,V.A)(!("_canvases"in e)||Array.isArray(e._canvases)===this._isMultiCanvasMode()),Object.assign(this.props,e),this._validateCanvasConfiguration(this.props),this._validateInternalPickingMode(),this.device&&this._isMultiCanvasMode()&&this._syncCanvasTargets(),this._setCanvasSize(this.props);let t=Object.create(this.props);if(Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState(),eventManagers:this.eventManagers}),e.device&&e.device.id!==this.device?.id){let t=e.device.getDefaultCanvasContext();this.animationLoop?.stop(),this._isMultiCanvasMode()||this.canvas===t.canvas||(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(e.device),p.A.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()}if(this.animationLoop?.setProps(t),void 0!==e.useDevicePixels&&this._canvasContext?.setProps)for(let t of(this._canvasContext.setProps({useDevicePixels:e.useDevicePixels}),Object.values(this._canvasManager.targets)))t.presentationContext.setProps({useDevicePixels:e.useDevicePixels});this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get("setProps Time").timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return"Deck._animate";let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let i=this.viewManager.needsRedraw(e),r=this.layerManager.needsRedraw(e),n=this.effectManager.needsRedraw(e),s=this.deckRenderer.needsRedraw(e);return t||i||r||n||s}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});(t=e||t)&&(this.stats.get("Redraw Count").incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return null!==this.viewManager}getViews(){return(0,V.A)(this.viewManager),this.viewManager.views}getView(e){return(0,V.A)(this.viewManager),this.viewManager.getView(e)}getViewports(e){return(0,V.A)(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}getCanvasContext(e){let t=e?this.viewManager?.getView(e)?.props.canvasId:void 0;return this._getCanvasContext(t)}getEventManager(e){if(!e||!this.viewManager)return this.eventManager;let t=this.viewManager.getCanvasId(e)||S;return this.eventManagers[t]||this.eventManager}async pickObjectAsync(e){let t=(await this._pickAsync("pickObjectAsync","pickObject Time",e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync("pickObjectsAsync","pickObjects Time",e)}pickObject(e){let t=this._pick("pickObject","pickObject Time",e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick("pickObject","pickMultipleObjects Time",e).result}pickObjects(e){return this._pick("pickObjects","pickObjects Time",e)}_pickPositionForController(e,t,i){return"sync"!==this._getInternalPickingMode()?null:this.pickObject({x:e,y:t,radius:0,unproject3D:!0,canvasId:i?this.viewManager?.getCanvasId(i):void 0})}_addResources(e,t=!1){for(let i in e)this.layerManager.resourceManager.add({resourceId:i,data:e[i],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if("auto"===e)return"webgpu"===t?"async":"sync";if("sync"===e&&"webgpu"===t)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>"3d"===e.props.pickable)}_getPointPickOptions(e,t,i={},r=this.layerManager?.getLayers()||[]){return{x:e,y:t,canvasId:i.canvasId,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(r),...i}}_pickPointSync(e){return this._pick("pickObject","pickObject Time",e)}_pickPointAsync(e){return this._pickAsync("pickObjectAsync","pickObject Time",e)}_getLastPointerDownPickingInfo(e,t,i,r=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:r,viewports:this.getViewports({x:e,y:t,canvasId:i})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},i){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let r=t,n=!1;for(let t of e)r=t,n=t.layer?.onHover(t,i)||n;n||(this.props.onHover?.(r,i),this.widgetManager.onHover(r,i))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let i=eC.tg[t.type];if(!i)return;let{layer:r}=e,n=r&&(r[i]||r.props[i]),s=this.props[i],o=!1;n&&(o=n.call(r,e,t)),o||(s?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,i){(0,V.A)(this.deckPicker);let{stats:r}=this,n=this._isMultiCanvasMode()?i.canvasId||this._getDefaultCanvasId():i.canvasId,s=this._getCanvasContext(n)||void 0;r.get("Pick Count").incrementCount(),r.get(t).timeStart(),this._resizeForCanvasTarget(n);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports({...i,canvasId:n}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasId:n,canvasContext:s});return r.get(t).timeEnd(),o}_pick(e,t,i){(0,V.A)(this.deckPicker);let{stats:r}=this,n=this._isMultiCanvasMode()?i.canvasId||this._getDefaultCanvasId():i.canvasId,s=this._getCanvasContext(n)||void 0;r.get("Pick Count").incrementCount(),r.get(t).timeStart(),this._resizeForCanvasTarget(n);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports({...i,canvasId:n}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasId:n,canvasContext:s});return r.get(t).timeEnd(),o}_createCanvas(e){let t=e.canvas;return"string"==typeof t&&(t=document.getElementById(t),(0,V.A)(t)),t?this._ownedCanvas=null:((t=document.createElement("canvas")).id=e.id||"deckgl-overlay",e.width&&"number"==typeof e.width&&(t.width=e.width),e.height&&"number"==typeof e.height&&(t.height=e.height),(e.parent||document.body).appendChild(t),this._ownedCanvas=t),Object.assign(t.style,e.style),t}_isMultiCanvasMode(){return Array.isArray(this.props._canvases)}_getDefaultCanvasId(){return this._canvasManager.order[0]||S}_validateCanvasConfiguration(e){Array.isArray(e._canvases)&&((0,V.A)(!e.canvas),(0,V.A)(!e.gl),(0,V.A)(!e.device?.canvasContext||e.device.getDefaultCanvasContext().offscreenCanvas))}_createEventManager(e){let t=new tq.EU(e,{touchAction:this.props.touchAction,recognizers:Object.keys(eC.We).map(e=>{let[t,i,r,n]=eC.We[e],s=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...i,...s,event:e}),recognizeWith:r,requireFailure:n}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(let e in eC.tg)"dblclick"===e?t.watch(e,this._onEvent):t.on(e,this._onEvent);return t}_getEventRoot(e){return e.closest(".deck-events-root")||this.props.parent?.querySelector(".deck-events-root")||e}_syncCanvasTargets(){if(!this.device||!this._isMultiCanvasMode())return;this._canvasManager.syncCanvasEntries({device:this.device,canvases:this.props._canvases||[],useDevicePixels:this.props.useDevicePixels}),this.eventManagers=this._canvasManager.eventManagers;let e=this._getDefaultCanvasId();this.eventManager=this.eventManagers[e]||null,this.canvas=this._canvasManager.targets[e]?.canvas||null}_setCanvasContext(e){this._canvasContext=e,"style"in e.canvas&&(this.canvas=e.canvas)}_setDeviceCanvasContext(e,t={}){let i=e.getDefaultCanvasContext();this._setCanvasContext(i),this._setDeviceResizeHandler(e,t)}_setDeviceResizeHandler(e,t={}){let i=!!t.syncDrawingBuffer;if(this._deviceResizeHandler?.device===e){this._deviceResizeHandler.syncDrawingBuffer=i;return}this._restoreDeviceResizeHandler();let r=e=>{this._isMultiCanvasMode()?this._updateMultiCanvasDimensions():e===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};e.props.onResize=r,this._deviceResizeHandler={device:e,onResize:r,syncDrawingBuffer:i}}_restoreDeviceResizeHandler(){let e=this._deviceResizeHandler;e&&e.device.props?.onResize===e.onResize&&(e.device.props.onResize=tY),this._deviceResizeHandler=null}_setCanvasSize(e){if(this._isMultiCanvasMode()||!this.canvas)return;let{width:t,height:i}=e;if(t||0===t){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(i||0===i){let t=Number.isFinite(i)?`${i}px`:i;this.canvas.style.position=e.style?.position||"absolute",this.canvas.style.height=t}}_getCanvasIdFromEvent(e){return this._canvasManager.getCanvasIdFromEvent(e?.rootElement)}_getCanvasContext(e){return this._canvasManager.getTarget(e)?.presentationContext||this._canvasContext}_resizeForCanvasTarget(e){let t=this._canvasManager.getTarget(e);if(!t||!this.device?.canvasContext)return;let[i,r]=t.presentationContext.getDrawingBufferSize();this.device.canvasContext.setDrawingBufferSize(i,r)}_createDeviceCanvas(e){if(this._isMultiCanvasMode()){let t=globalThis.OffscreenCanvas;if(!t)throw Error("`_canvases` requires OffscreenCanvas support.");return new t("number"==typeof e.width&&Number.isFinite(e.width)?e.width:1,"number"==typeof e.height&&Number.isFinite(e.height)?e.height:1)}return this._createCanvas(e)}_updateCanvasSize(e=this._canvasContext){if(this._isMultiCanvasMode())return void this._updateMultiCanvasDimensions();let{canvas:t}=this,[i,r]=e?e.getCSSSize():[t?.clientWidth??t?.width??0,t?.clientHeight??t?.height??0];(i!==this.width||r!==this.height)&&(this.width=i,this.height=r,this.viewManager?.setProps({width:i,height:r}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:i,height:r},e||void 0))}_onCanvasContextResize(e,t={}){if(t.syncDrawingBuffer){let{width:t,height:i}=e.canvas;e.setDrawingBufferSize(t,i)}this._needsRedraw="Canvas resized",this._updateCanvasSize(e)}_updateMultiCanvasDimensions(){let[e,t]=this._getCanvasContext()?.getCSSSize()||[0,0];(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.props.onResize({width:e,height:t})),this._needsRedraw="Canvas resized",this.viewManager?.setNeedsUpdate("Canvas resized"),this.viewManager?.setProps({width:this.width,height:this.height})}_createAnimationLoop(e,t){let{gl:i,onError:r}=t;return new tH({device:e,autoResizeDrawingBuffer:!i&&!Array.isArray(t._canvases),autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:r})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,i={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};i.adapters.includes(tj)||i.adapters.push(tj);let r={alphaMode:this.props.deviceProps?.type==="webgpu"?"premultiplied":void 0};return tR.createDevice({_reuseDevices:!0,type:"webgl",...i,createCanvasContext:{...r,..."object"==typeof t?t:void 0,canvas:this._createDeviceCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new ec({id:"default-view"})];return t.length&&this.props.controller&&(t[0]=t[0].clone({controller:this.props.controller})),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error("WebGL context is lost"))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,i=this.layerManager?.getLayers()||[],r=this._getPointPickOptions(e.x,e.y,{canvasId:e.canvasId,radius:e.radius,mode:e.mode},i),n=this._getInternalPickingMode(),s=++this._hoverPickSequence;if(e.event=null,e.canvasId=void 0,!n)return;if("sync"===n)return void this._applyHoverCallbacks(this._pickPointSync(r),t);this._pickPointAsync(r).then(({result:e,emptyInfo:i})=>{s===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:i},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.getCursor(this.cursorState);if(this._isMultiCanvasMode()){for(let t of Object.values(this._canvasManager.targets))t.canvas.style.cursor=e;return}let t=this.props.parent||this.canvas;t&&(t.style.cursor=e)}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(e,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==e)}),this._isMultiCanvasMode()?this._syncCanvasTargets():this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),"webgl"===this.device.type&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),"webgl"===this.device.type&&this.props.onWebGLInitialized(this.device.gl);let t=new o;if(t.play(),this.animationLoop.attachTimeline(t),!this._isMultiCanvasMode()){let e=this.canvas&&this._getEventRoot(this.canvas);(0,V.A)(e),this.eventManager=this._createEventManager(e),this.eventManagers={[S]:this.eventManager}}this.viewManager=new C({timeline:t,eventManager:this.eventManager,eventManagers:this.eventManagers,getCanvasContext:this._isMultiCanvasMode()?this.getCanvasContext.bind(this):void 0,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let i=this.viewManager.getViewports()[0];this.layerManager=new w(this.device,{deck:this,stats:this.stats,viewport:i,timeline:t}),this.effectManager=new eG({deck:this,device:this.device}),this.deckRenderer=new eK(this.device,{stats:this.stats}),this.deckPicker=new e6(this.device,{stats:this.stats});let r=this.props.parent?.querySelector(".deck-widgets-root")||(this._isMultiCanvasMode()?this.props.parent||this.canvas?.parentElement:null)||this.canvas?.parentElement;this.widgetManager=new e9({deck:this,parentElement:r}),this.widgetManager.addDefault(new ti),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(e,t){let{device:i,gl:r}=this.layerManager.context;this.props.onBeforeRender({device:i,gl:r});let n={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:"screen",effects:this.effectManager.getEffects(),...t};if(this._isMultiCanvasMode()&&"screen"===n.pass&&!n.target&&this._canvasManager.order.length)for(let e of this._canvasManager.order){let t=n.viewports.filter(t=>this.viewManager.getCanvasId(t.id)===e);if(!t.length){let t=this._canvasManager.targets[e];this._resizeForCanvasTarget(e),this.deckRenderer?.renderLayers({...n,canvasContext:t.presentationContext,target:t.presentationContext.getCurrentFramebuffer(),viewports:[],clearCanvas:!0}),t.presentationContext.present();continue}let i=this._canvasManager.targets[e];this._resizeForCanvasTarget(e);let r=i.presentationContext.getCurrentFramebuffer();this.deckRenderer?.renderLayers({...n,canvasContext:i.presentationContext,target:r,viewports:t}),i.presentationContext.present()}else this.deckRenderer?.renderLayers(n);"screen"===n.pass&&this.widgetManager.onRedraw({viewports:n.viewports,layers:n.layers}),this.props.onAfterRender({device:i,gl:r})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),p.A.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},!this.props.viewState&&this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get("frameRate").timeEnd(),e.get("frameRate").timeStart();let t=this.animationLoop.stats;e.get("GPU Time").addTime(t.get("GPU Time").lastTiming),e.get("CPU Time").addTime(t.get("CPU Time").lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get("frameRate").getHz(),e.setPropsTime=t.get("setProps Time").time,e.updateAttributesTime=t.get("Update Attributes").time,e.framesRedrawn=t.get("Redraw Count").count,e.pickTime=t.get("pickObject Time").time+t.get("pickMultipleObjects Time").time+t.get("pickObjects Time").time,e.pickCount=t.get("Pick Count").count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get("Layers rendered").lastSampleCount,e.pickLayersCount=t.get("Layers picked").lastSampleCount,e.updateLayersCount=t.get("Layer updates").count,e.updateAttributesCount=t.get("Attributes updated").count,e.gpuTime=t.get("GPU Time").time,e.cpuTime=t.get("CPU Time").time,e.gpuTimePerFrame=t.get("GPU Time").getAverageTime(),e.cpuTimePerFrame=t.get("CPU Time").getAverageTime();let i=tR.stats.get("GPU Time and Memory");e.bufferMemory=i.get("Buffer Memory").count,e.textureMemory=i.get("Texture Memory").count,e.renderbufferMemory=i.get("Renderbuffer Memory").count,e.gpuMemory=i.get("GPU Memory").count}}tK.defaultProps=tZ,tK.VERSION=tE;let tX="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function tQ(e,t){for(;e;){if(e===t)return!0;e=Object.getPrototypeOf(e)}return!1}var tJ=i(65302);let t0={position:"absolute",zIndex:-1};function t2(e){return r.isValidElement(e)}let t3=(0,r.createContext)(),t1={mixBlendMode:null};function t4(e){e.redrawReason&&(e.deck._drawLayers(e.redrawReason),e.redrawReason=null)}let t6=r.forwardRef(function(e,t){let[i,n]=(0,r.useState)(0),s=(0,r.useRef)({control:null,version:i,forceUpdate:()=>n(e=>e+1)}).current,o=(0,r.useRef)(null),a=(0,r.useRef)(null),l=(0,r.useMemo)(()=>(function({children:e,layers:t=[],views:i}){let n=[],s=[],o={};return r.Children.forEach(function e(t){if("function"==typeof t)return(0,r.createElement)(R,{},t);if(Array.isArray(t))return t.map(e);if(t2(t)){if(t.type===r.Fragment)return e(t.props.children);tQ(t.type,R)}return t}(e),e=>{if(t2(e)){let t=e.type;if(tQ(t,tJ.A)){let i=function(e,t){let i={},r=e.defaultProps||{};for(let e in t)r[e]!==t[e]&&(i[e]=t[e]);return new e(i)}(t,e.props);s.push(i)}else n.push(e);if(tQ(t,R)&&t!==R&&e.props.id){let i=new t(e.props);o[i.id]=i}}else e&&n.push(e)}),Object.keys(o).length>0&&(Array.isArray(i)?i.forEach(e=>{o[e.id]=e}):i&&(o[i.id]=i),i=Object.values(o)),{layers:t=s.length>0?[s,t]:t,children:n,views:i}})(e),[e.layers,e.views,e.children]),u=!0,c=t=>u&&e.viewState?(s.viewStateUpdateRequested=t,null):(s.viewStateUpdateRequested=null,e.onViewStateChange?.(t)),h=t=>{u?s.interactionStateUpdateRequested=t:(s.interactionStateUpdateRequested=null,e.onInteractionStateChange?.(t))},d=(0,r.useMemo)(()=>{let t={widgets:[],...e,style:null,width:"100%",height:"100%",parent:o.current,canvas:a.current,layers:l.layers,onViewStateChange:c,onInteractionStateChange:h};return l.views&&(t.views=l.views),delete t._customRender,s.deck&&(s.deck.setProps(t),s.deck.isInitialized&&(s.lastRenderedViewports=s.deck.getViewports())),t},[e]);(0,r.useEffect)(()=>(s.deck=function(e,t,i){let r=new t({...i,_customRender:t=>{e.redrawReason=t;let n=r.device?.type==="webgpu",s=r.getViewports();(e.lastRenderedViewports===s||((!n||function(e,t){let i=e.deck;return!!(i&&t&&i.width===t.clientWidth&&i.height===t.clientHeight)}(e,i.parent||null))&&e.forceUpdate(),n))&&t4(e)}});return r}(s,e.Deck||tK,{...d,parent:o.current,canvas:a.current}),()=>s.deck?.finalize()),[]),tX(()=>{t4(s);let{viewStateUpdateRequested:e,interactionStateUpdateRequested:t}=s;e&&c(e),t&&h(t)}),(0,r.useImperativeHandle)(t,()=>({get deck(){return s.deck},pickObjectAsync:e=>s.deck.pickObjectAsync(e),pickObjectsAsync:e=>s.deck.pickObjectsAsync(e),pickObject:e=>s.deck.pickObject(e),pickMultipleObjects:e=>s.deck.pickMultipleObjects(e),pickObjects:e=>s.deck.pickObjects(e)}),[]);let f=s.deck&&s.deck.isInitialized?s.deck.getViewports():void 0,{ContextProvider:p,width:g="100%",height:m="100%",id:v,style:y}=e,{containerStyle:b,canvasStyle:_}=(0,r.useMemo)(()=>(function({width:e,height:t,style:i}){let r={position:"absolute",zIndex:0,left:0,top:0,width:e,height:t},n={left:0,top:0};if(i)for(let e in i)e in t1?n[e]=i[e]:r[e]=i[e];return{containerStyle:r,canvasStyle:n}})({width:g,height:m,style:y}),[g,m,y]);if(!s.viewStateUpdateRequested&&s.lastRenderedViewports===f||s.version!==i){s.lastRenderedViewports=f,s.version=i;let e=function({children:e,deck:t,ContextProvider:i=t3.Provider}){let{viewManager:n}=t||{};if(!n||!n.views.length)return[];let s={},o=n.views[0].id;for(let t of e){let e=o,i=t;t2(t)&&tQ(t.type,R)&&(e=t.props.id||o,i=t.props.children);let a=n.getViewport(e),l=n.getViewState(e);if(a){l.padding=a.padding;let{x:t,y:n,width:o,height:u}=a;i=function e(t,i){if("function"==typeof t)return t(i);if(Array.isArray(t))return t.map(t=>e(t,i));if(t2(t)){var n;if(n=t,n.props?.mapStyle)return i.style=t0,(0,r.cloneElement)(t,i);if(function(e){let t=e.type;return t&&t.deckGLViewProps}(t))return(0,r.cloneElement)(t,i)}return t}(i,{x:t,y:n,width:o,height:u,viewport:a,viewState:l}),s[e]||(s[e]={viewport:a,children:[]}),s[e].children.push(i)}}return Object.keys(s).map(e=>{let{viewport:n,children:o}=s[e],{x:a,y:l,width:u,height:c}=n,h=`view-${e}`,d=(0,r.createElement)("div",{key:h,id:h,style:{position:"absolute",left:a,top:l,width:u,height:c}},...o),f={deck:t,viewport:n,container:t.canvas.offsetParent,eventManager:t.eventManager,onViewStateChange:i=>{i.viewId=e,t._onViewStateChange(i)},widgets:[]},p=`view-${e}-context`;return(0,r.createElement)(i,{key:p,value:f},d)})}({children:l.children,deck:s.deck,ContextProvider:p}),t=(0,r.createElement)("canvas",{key:"canvas",id:v||"deckgl-overlay",ref:a,style:_}),n=(0,r.createElement)("div",{key:"deck-events-root",className:"deck-events-root",style:{width:g,height:m}},[t,e]),u=(0,r.createElement)("div",{key:"deck-widgets-root",className:"deck-widgets-root"});s.control=(0,r.createElement)("div",{id:`${v||"deckgl"}-wrapper`,ref:o,style:b},[n,u])}return u=!1,s.control})},18001:(e,t,i)=>{"use strict";i.d(t,{Z0:()=>s,hs:()=>n});var r=i(55218);function n(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e}function s(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3];return e[0]=i[0]*r+i[4]*n+i[8]*s+i[12]*o,e[1]=i[1]*r+i[5]*n+i[9]*s+i[13]*o,e[2]=i[2]*r+i[6]*n+i[10]*s+i[14]*o,e[3]=i[3]*r+i[7]*n+i[11]*s+i[15]*o,e}!function(){let e=new r.tb(4);r.tb!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0)}()},18075:(e,t,i)=>{"use strict";i.d(t,{X:()=>r,l:()=>n});let r=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,n=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`},18086:(e,t,i)=>{"use strict";i.d(t,{dT:()=>_,Os:()=>P,Fe:()=>L,wZ:()=>S,gW:()=>T,nI:()=>b,fO:()=>v,om:()=>w,rY:()=>x,Gw:()=>g,xJ:()=>E,mY:()=>y,iV:()=>m,VJ:()=>C});var r=i(18001);function n(e,t){let i=r.Z0([],t,e);return r.hs(i,i,1/i[3]),i}function s(e,t,i){return e<t?t:e>i?i:e}let o=Math.log2||function(e){return Math.log(e)*Math.LOG2E};var a=i(6953),l=i(796),u=i(71343);function c(e,t){if(!e)throw Error(t||"@math.gl/web-mercator: assertion failed.")}let h=Math.PI,d=h/4,f=h/180,p=180/h;function g(e){let[t,i]=e;c(Number.isFinite(t)),c(Number.isFinite(i)&&i>=-90&&i<=90,"invalid latitude");let r=512*(h+Math.log(Math.tan(d+i*f*.5)))/(2*h);return[512*(t*f+h)/(2*h),r]}function m(e){let[t,i]=e,r=2*(Math.atan(Math.exp(i/512*(2*h)-h))-d);return[(t/512*(2*h)-h)*p,r*p]}function v(e){let{latitude:t}=e;return c(Number.isFinite(t)),o(4003e4*Math.cos(t*f))-9}function y(e){return 512/4003e4/Math.cos(e*f)}function b(e){let{latitude:t,longitude:i,highPrecision:r=!1}=e;c(Number.isFinite(t)&&Number.isFinite(i));let n=Math.cos(t*f),s=512/360/n,o=512/4003e4/n,a={unitsPerMeter:[o,o,o],metersPerUnit:[1/o,1/o,1/o],unitsPerDegree:[512/360,s,o],degreesPerUnit:[1/(512/360),1/s,1/o]};if(r){let e=f*Math.tan(t*f)/n,i=512/4003e4*e,r=i/s*o;a.unitsPerDegree2=[0,512/360*e/2,i],a.unitsPerMeter2=[r,0,r]}return a}function _(e,t){let[i,r,n]=e,[s,o,a]=t,{unitsPerMeter:l,unitsPerMeter2:u}=b({longitude:i,latitude:r,highPrecision:!0}),c=g(e);c[0]+=s*(l[0]+u[0]*o),c[1]+=o*(l[1]+u[1]*o);let h=m(c);return Number.isFinite(n)||Number.isFinite(a)?[h[0],h[1],(n||0)+(a||0)]:h}function x(e){let{height:t,pitch:i,bearing:r,altitude:n,scale:s,center:o}=e,u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];a.Tl(u,u,[0,0,-n]),a.eL(u,u,-i*f),a.Qr(u,u,r*f);let c=s/t;return a.hs(u,u,[c,c,c]),o&&a.Tl(u,u,l.ze([],o)),u}function w(e){let{width:t,height:i,altitude:r,pitch:n=0,offset:o,center:a,scale:l,nearZMultiplier:u=1,farZMultiplier:c=1}=e,{fovy:h=P(1.5)}=e;void 0!==r&&(h=P(r));let d=h*f,p=n*f,g=S(h),m=g;a&&(m+=a[2]*l/Math.cos(p)/i);let v=d*(.5+(o?o[1]:0)/i),y=Math.sin(v)*m/Math.sin(s(Math.PI/2-p-v,.01,Math.PI-.01));return{fov:d,aspect:t/i,focalDistance:g,near:u,far:Math.min((Math.sin(p)*y+m)*c,10*m)}}function P(e){return 2*Math.atan(.5/e)*p}function S(e){return .5/Math.tan(.5*e*f)}function C(e,t){let[i,r,s=0]=e;return c(Number.isFinite(i)&&Number.isFinite(r)&&Number.isFinite(s)),n(t,[i,r,s,1])}function E(e,t,i=0){let[r,s,o]=e;if(c(Number.isFinite(r)&&Number.isFinite(s),"invalid pixel coordinate"),Number.isFinite(o))return n(t,[r,s,o,1]);let a=n(t,[r,s,0,1]),l=n(t,[r,s,1,1]),h=a[2],d=l[2];return u.Cc([],a,l,h===d?0:((i||0)-h)/(d-h))}function L(e){let{width:t,height:i,bounds:r,minExtent:n=0,maxZoom:a=24,offset:l=[0,0]}=e,[[u,h],[d,f]]=r,p=function(e=0){return"number"==typeof e?{top:e,bottom:e,left:e,right:e}:(c(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}(e.padding),v=g([u,s(f,-85.051129,85.051129)]),y=g([d,s(h,-85.051129,85.051129)]),b=[Math.max(Math.abs(y[0]-v[0]),n),Math.max(Math.abs(y[1]-v[1]),n)],_=[t-p.left-p.right-2*Math.abs(l[0]),i-p.top-p.bottom-2*Math.abs(l[1])];c(_[0]>0&&_[1]>0);let x=_[0]/b[0],w=_[1]/b[1],P=(p.right-p.left)/2/x,S=(p.top-p.bottom)/2/w,C=m([(y[0]+v[0])/2+P,(y[1]+v[1])/2+S]),E=Math.min(a,o(Math.abs(Math.min(x,w))));return c(Number.isFinite(E)),{longitude:C[0],latitude:C[1],zoom:E}}let A=Math.PI/180;function T(e,t=0){let i,r,{width:n,height:s,unproject:o}=e,a={targetZ:t},l=o([0,s],a),u=o([n,s],a);return(e.fovy?.5*e.fovy*A:Math.atan(.5/e.altitude))>(90-e.pitch)*A-.01?(i=M(e,0,t),r=M(e,n,t)):(i=o([0,0],a),r=o([n,0],a)),[l,u,r,i]}function M(e,t,i){let{pixelUnprojectionMatrix:r}=e,s=n(r,[t,0,1,1]),o=n(r,[t,e.height,1,1]),a=(i*e.distanceScales.unitsPerMeter[2]-s[2])/(o[2]-s[2]),l=m(u.Cc([],s,o,a));return l.push(i),l}},18567:(e,t,i)=>{"use strict";i.d(t,{Uz:()=>o});var r=i(99225);function n(){let e;if("undefined"!=typeof window&&window.performance)e=window.performance.now();else if(void 0!==r&&r.hrtime){let t=r.hrtime();e=1e3*t[0]+t[1]/1e6}else e=Date.now();return e}class s{constructor(e,t){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=e,this.type=t,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(e){return this.sampleSize=e,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(e){return this._count+=e,this._samples++,this._checkSampling(),this}subtractCount(e){return this._count-=e,this._samples++,this._checkSampling(),this}addTime(e){return this._time+=e,this.lastTiming=e,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=n(),this._timerPending=!0,this}timeEnd(){return this._timerPending&&(this.addTime(n()-this._startTime),this._timerPending=!1,this._checkSampling()),this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}}class o{constructor(e){this.stats={},this.id=e.id,this.stats={},this._initializeStats(e.stats),Object.seal(this)}get(e,t="count"){return this._getOrCreate({name:e,type:t})}get size(){return Object.keys(this.stats).length}reset(){for(let e of Object.values(this.stats))e.reset();return this}forEach(e){for(let t of Object.values(this.stats))e(t)}getTable(){let e={};return this.forEach(t=>{e[t.name]={time:t.time||0,count:t.count||0,average:t.getAverageTime()||0,hz:t.getHz()||0}}),e}_initializeStats(e=[]){e.forEach(e=>this._getOrCreate(e))}_getOrCreate(e){let{name:t,type:i}=e,r=this.stats[t];return r||(r=e instanceof s?e:new s(t,i),this.stats[t]=r),r}}},18908:(e,t,i)=>{"use strict";i.d(t,{ZG:()=>o,$g:()=>function e(t){t.map(t=>(function(t){var i;if(t.instance)return;e(t.dependencies||[]);let{propTypes:o={},deprecations:a=[],inject:l={}}=t,u={normalizedInjections:(0,s.Uu)(l),parsedDeprecations:((i=a).forEach(e=>{"function"===e.type?e.regex=RegExp(`\\b${e.old}\\(`):e.regex=RegExp(`${e.type} ${e.old};`)}),i)};o&&(u.propValidators=function(e){let t={};for(let[i,s]of Object.entries(e))t[i]=function(e){let t=n(e);if("object"!==t)return{value:e,...r[t],type:t};if("object"==typeof e)return e?void 0!==e.type?{...e,...r[e.type],type:e.type}:void 0===e.value?{type:"object",value:e}:(t=n(e.value),{...e,...r[t],type:t}):{type:"object",value:null};throw Error("props")}(s);return t}(o)),t.instance=u;let c={};o&&(c=Object.entries(o).reduce((e,[t,i])=>{let r=i?.value;return r&&(e[t]=r),e},{})),t.defaultUniforms={...t.defaultUniforms,...c}})(t))}});let r={number:{type:"number",validate:(e,t)=>Number.isFinite(e)&&"object"==typeof t&&(void 0===t.max||e<=t.max)&&(void 0===t.min||e>=t.min)},array:{type:"array",validate:(e,t)=>Array.isArray(e)||ArrayBuffer.isView(e)}};function n(e){return Array.isArray(e)||ArrayBuffer.isView(e)?"array":typeof e}var s=i(81274);function o(e,t,i){e.deprecations?.forEach(e=>{e.regex?.test(t)&&(e.deprecated?i.deprecated(e.old,e.new)():i.removed(e.old,e.new)())})}},19365:(e,t,i)=>{"use strict";i.d(t,{E:()=>r});let r={add:{arity:2,symbol:"arithmetic_add"},subtract:{arity:2,symbol:"arithmetic_subtract"},multiply:{arity:2,symbol:"arithmetic_multiply"},divide:{arity:2,symbol:"arithmetic_divide"},pow:{arity:2,symbol:"pow"},sqrt:{arity:1,symbol:"sqrt"},abs:{arity:1,symbol:"abs"},sin:{arity:1,symbol:"sin"},cos:{arity:1,symbol:"cos"},tan:{arity:1,symbol:"arithmetic_tan"},exp:{arity:1,symbol:"exp"},log:{arity:1,symbol:"log"}}},19523:(e,t,i)=>{"use strict";i.d(t,{pp:()=>p,K2:()=>f,Rf:()=>m,a5:()=>g});var r=i(29239),n=i(60311);let s=new(i(94061)).hW({id:"loaders.gl"});class o{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}class a{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}}var l=i(21652);let u={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new a,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:l.Bd,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]}},c={baseUri:"core.baseUrl",fetch:"core.fetch",mimeType:"core.mimeType",fallbackMimeType:"core.fallbackMimeType",ignoreRegisteredLoaders:"core.ignoreRegisteredLoaders",nothrow:"core.nothrow",log:"core.log",useLocalLibraries:"core.useLocalLibraries",CDN:"core.CDN",worker:"core.worker",maxConcurrency:"core.maxConcurrency",maxMobileConcurrency:"core.maxMobileConcurrency",reuseWorkers:"core.reuseWorkers",_nodeWorkers:"core.nodeWorkers",_workerType:"core._workerType",_worker:"core._workerType",limit:"core.limit",_limitMB:"core._limitMB",batchSize:"core.batchSize",batchDebounceMs:"core.batchDebounceMs",metadata:"core.metadata",transforms:"core.transforms",throws:"nothrow",dataType:"(no longer used)",uri:"core.baseUrl",method:"core.fetch.method",headers:"core.fetch.headers",body:"core.fetch.body",mode:"core.fetch.mode",credentials:"core.fetch.credentials",cache:"core.fetch.cache",redirect:"core.fetch.redirect",referrer:"core.fetch.referrer",referrerPolicy:"core.fetch.referrerPolicy",integrity:"core.fetch.integrity",keepalive:"core.fetch.keepalive",signal:"core.fetch.signal"};var h=i(62764);let d=["baseUrl","fetch","mimeType","fallbackMimeType","ignoreRegisteredLoaders","nothrow","log","useLocalLibraries","CDN","worker","maxConcurrency","maxMobileConcurrency","reuseWorkers","_nodeWorkers","_workerType","limit","_limitMB","batchSize","batchDebounceMs","metadata","transforms"];function f(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||(e._state={}),e._state}function p(){let e=f();return e.globalOptions=e.globalOptions||{...u,core:{...u.core}},m(e.globalOptions)}function g(e,t,i,r){return function(e,t){for(let i of(v(e,null,u,c,t),t)){let r=e&&e[i.id]||{},n=i.options&&i.options[i.id]||{},s=i.deprecatedOptions&&i.deprecatedOptions[i.id]||{};v(r,i.id,n,s,t)}}(e,i=Array.isArray(i=i||[])?i:[i]),m(function(e,t,i){var r,s;let a=e.options||{},l={...a};return a.core&&(l.core={...a.core}),b(l),l.core?.log===null&&(l.core={...l.core,log:new o}),y(l,m(p())),y(l,m(t)),r=l,(s=i)&&r.core?.baseUrl===void 0&&(r.core||={},r.core.baseUrl=n.pD((0,h.S3)(s))),function(e){let t=e.core;if(t)for(let i of d)void 0!==t[i]&&(e[i]=t[i])}(l),l}(t,e,r))}function m(e){let t=function(e){let t={...e};return e.core&&(t.core={...e.core}),t}(e);for(let e of(b(t),d))t.core&&void 0!==t.core[e]&&delete t[e];return t.core&&void 0!==t.core._workerType&&delete t._worker,t}function v(e,t,i,n,o){let a=t||"Top level",l=t?`${t}.`:"";for(let u in e){let c=!t&&(0,r.Gv)(e[u]),h="baseUri"===u&&!t,d="workerUrl"===u&&t;if(!(u in i)&&!h&&!d){if(u in n)s.level>0&&s.warn(`${a} loader option '${l}${u}' no longer supported, use '${n[u]}'`)();else if(!c&&s.level>0){let e=function(e,t){let i=e.toLowerCase(),r="";for(let n of t)for(let t in n.options){if(e===t)return`Did you mean '${n.id}.${t}'?`;let s=t.toLowerCase();(i.startsWith(s)||s.startsWith(i))&&(r=r||`Did you mean '${n.id}.${t}'?`)}return r}(u,o);s.warn(`${a} loader option '${l}${u}' not recognized. ${e}`)()}}}}function y(e,t){for(let i in t)if(i in t){let n=t[i];(0,r.aC)(n)&&(0,r.aC)(e[i])?e[i]={...e[i],...t[i]}:e[i]=t[i]}}function b(e){for(let t of(void 0!==e.baseUri&&(e.core||={},void 0===e.core.baseUrl&&(e.core.baseUrl=e.baseUri)),d))if(void 0!==e[t]){let i=e.core=e.core||{};void 0===i[t]&&(i[t]=e[t])}let t=e._worker;void 0!==t&&(e.core||={},void 0===e.core._workerType&&(e.core._workerType=t))}},19612:(e,t,i)=>{"use strict";i.d(t,{C:()=>v});var r=i(1955),n=i(74225),s=i(46446),o=i(88459),a=i(40308),l=i(29101),u=i(15821),c=i(22839),h=i(79241),d=i(37114),f=i(76807),p=i(7617),g=i(43863),m=i(3905);class v{static defaultProps={...r.C.defaultProps,id:"unnamed",handle:void 0,userData:{},source:"",modules:[],defines:{},plugins:[],bindings:void 0,shaderInputs:void 0,pipelineFactory:void 0,shaderFactory:void 0,shaderAssembler:h._P.getDefaultShaderAssembler("wgsl"),debugShaders:void 0};device;id;pipelineFactory;shaderFactory;userData={};bindings={};pipeline;source;shader;shaderInputs;_uniformStore;_pipelineNeedsUpdate="newly created";_getModuleUniforms;props;_destroyed=!1;constructor(e,t){if("webgpu"!==e.type)throw Error("Computation is only supported in WebGPU");this.props={...v.defaultProps,...t},t=this.props,this.id=t.id||(0,m.L)("model"),this.device=e,Object.assign(this.userData,t.userData);let i=function(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,limits:e.limits,features:e.features}}(e),r=(0,d.r)(this.props.plugins,i.shaderLanguage);if(Object.keys(r.vertexInputs).length>0||Object.keys(r.varyings).length>0)throw Error("Computation does not support ShaderPlugin vertex inputs or varyings");let a=Object.fromEntries((0,d.K)(this.props.modules,r.modules).map(e=>[e.name,e]));this.shaderInputs=t.shaderInputs||new p.l(a),t.shaderInputs&&r.modules.length>0&&this.shaderInputs.addModules(r.modules),this.setShaderInputs(this.shaderInputs);let l=(0,g.jY)(this.props.modules,this.shaderInputs?.getModules()),u={...r.defines,...this.props.defines};this.props.shaderLayout=(0,g.Y$)(this.props.shaderLayout,l)||null,this.pipelineFactory=t.pipelineFactory||n.N.getDefaultPipelineFactory(this.device),this.shaderFactory=t.shaderFactory||s.g.getDefaultShaderFactory(this.device);let c=this.props.shaderAssembler;(0,o.v)(c instanceof h.Ry);let{source:f,getUniforms:y,shaderLayout:b}=c.assembleWGSLShader({platformInfo:i,...this.props,modules:l,defines:u,scanVertexAttributes:!1,pluginInjections:r.injections});this.source=f,this._getModuleUniforms=y;let _=b??e.getShaderLayout?.(this.source,{scanVertexAttributes:!1});this.props.shaderLayout=(0,g.Y$)(this.props.shaderLayout||_||null,l)||null,this.pipeline=this._updatePipeline(),t.bindings&&this.setBindings(t.bindings)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.shader),this._uniformStore.destroy(),this._destroyed=!0)}predraw(e){this.updateShaderInputs(e)}dispatch(e,t,i,r){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatch(t,i,r)}finally{this._logDrawCallEnd()}}dispatchIndirect(e,t,i=0){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatchIndirect(t,i)}finally{this._logDrawCallEnd()}}_setPipeline(e){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),e.setPipeline(this.pipeline),e.setBindings({})}setVertexCount(e){}setInstanceCount(e){}setShaderInputs(e){for(let[t,i]of(this.shaderInputs=e,this._uniformStore=new a.K(this.device,this.shaderInputs.modules),Object.entries(this.shaderInputs.modules)))if((0,g.fX)(i)){let e=this._uniformStore.getManagedUniformBuffer(t);this.bindings[`${t}Uniforms`]=e}}setShaderModuleProps(e){let t=this._getModuleUniforms(e),i=Object.keys(t).filter(e=>{let i=t[e];return!(0,f.H9)(i)&&"number"!=typeof i&&"boolean"!=typeof i}),r={};for(let e of i)r[e]=t[e],delete t[e]}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e)}setBindings(e){Object.assign(this.bindings,e)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||e}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null;this.pipeline&&(l.R.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.shader),this._pipelineNeedsUpdate=!1,this.shader=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"compute",source:this.source,debugShaders:this.props.debugShaders}),this.pipeline=this.pipelineFactory.createComputePipeline({...this.props,shader:this.shader}),e&&this.shaderFactory.release(e)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=l.R.level>3?0:1e4;l.R.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,l.R.group(2,`>>> DRAWING MODEL ${this.id}`,{collapsed:l.R.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=this.shaderInputs.getDebugTable();l.R.table(2,e)(),l.R.groupEnd(2)(),this._logOpen=!1}}_drawCount=0;_getBufferOrConstantValues(e,t){let i=u.r.getTypedArrayConstructor(t);return(e instanceof c.h?new i(e.debugData):e).toString()}}},20996:(e,t,i)=>{"use strict";i.d(t,{PU:()=>y,qG:()=>v});let r="texture-compression-bc",n="texture-compression-astc",s="texture-compression-etc2",o="texture-compression-pvrtc-webgl",a="texture-compression-atc-webgl",l="float32-renderable-webgl",u="float16-renderable-webgl",c="snorm8-renderable-webgl",h="norm16-webgl",d="norm16-renderable-webgl",f="snorm16-renderable-webgl",p="float32-filterable",g="float16-filterable-webgl",m=992;function v(e){let t=b[e];if(!t)throw Error(`Unsupported texture format ${e}`);return t}function y(){return b}let b={r8unorm:{webgpu:527},rg8unorm:{webgpu:527},"rgb8unorm-webgl":{},rgba8unorm:{webgpu:31},"rgba8unorm-srgb":{webgpu:15},r8snorm:{render:c,webgpu:837},rg8snorm:{render:c,webgpu:837},"rgb8snorm-webgl":{},rgba8snorm:{render:c,webgpu:341},r8uint:{webgpu:515},rg8uint:{webgpu:515},rgba8uint:{webgpu:19},r8sint:{webgpu:515},rg8sint:{webgpu:515},rgba8sint:{webgpu:19},bgra8unorm:{webgpu:15},"bgra8unorm-srgb":{webgpu:15360},r16unorm:{f:h,render:d,webgpu:992},rg16unorm:{f:h,render:d,webgpu:992},"rgb16unorm-webgl":{f:h,render:!1},rgba16unorm:{f:h,render:d,webgpu:992},r16snorm:{f:h,render:f,webgpu:992},rg16snorm:{f:h,render:f,webgpu:992},"rgb16snorm-webgl":{f:h,render:!1},rgba16snorm:{f:h,render:f,webgpu:992},r16uint:{webgpu:515},rg16uint:{webgpu:515},rgba16uint:{webgpu:19},r16sint:{webgpu:515},rg16sint:{webgpu:515},rgba16sint:{webgpu:19},r16float:{render:u,filter:"float16-filterable-webgl",webgpu:527},rg16float:{render:u,filter:g,webgpu:527},rgba16float:{render:u,filter:g,webgpu:31},r32uint:{webgpu:19},rg32uint:{webgpu:16387},rgba32uint:{webgpu:19},r32sint:{webgpu:19},rg32sint:{webgpu:16387},rgba32sint:{webgpu:19},r32float:{render:l,filter:p,webgpu:19},rg32float:{render:!1,filter:p,webgpu:16387},"rgb32float-webgl":{render:l,filter:p},rgba32float:{render:l,filter:p,webgpu:19},"rgba4unorm-webgl":{channels:"rgba",bitsPerChannel:[4,4,4,4],packed:!0},"rgb565unorm-webgl":{channels:"rgb",bitsPerChannel:[5,6,5,0],packed:!0},"rgb5a1unorm-webgl":{channels:"rgba",bitsPerChannel:[5,5,5,1],packed:!0},rgb9e5ufloat:{channels:"rgb",packed:!0,render:"rgb9e5ufloat-renderable-webgl",webgpu:5},rg11b10ufloat:{channels:"rgb",bitsPerChannel:[11,11,10,0],packed:!0,p:1,render:l,webgpu:517},rgb10a2unorm:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1,webgpu:527},rgb10a2uint:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1,webgpu:515},stencil8:{attachment:"stencil",bitsPerChannel:[8,0,0,0],dataType:"uint8",webgpu:3},depth16unorm:{attachment:"depth",bitsPerChannel:[16,0,0,0],dataType:"uint16",webgpu:3},depth24plus:{attachment:"depth",bitsPerChannel:[24,0,0,0],dataType:"uint32",webgpu:3},depth32float:{attachment:"depth",bitsPerChannel:[32,0,0,0],dataType:"float32",webgpu:3},"depth24plus-stencil8":{attachment:"depth-stencil",bitsPerChannel:[24,8,0,0],packed:!0,webgpu:3},"depth32float-stencil8":{attachment:"depth-stencil",bitsPerChannel:[32,8,0,0],packed:!0,f:"depth32float-stencil8",webgpu:3},"bc1-rgb-unorm-webgl":{f:r},"bc1-rgb-unorm-srgb-webgl":{f:r},"bc1-rgba-unorm":{f:r},"bc1-rgba-unorm-srgb":{f:r},"bc2-rgba-unorm":{f:r},"bc2-rgba-unorm-srgb":{f:r},"bc3-rgba-unorm":{f:r},"bc3-rgba-unorm-srgb":{f:r},"bc4-r-unorm":{f:r},"bc4-r-snorm":{f:r},"bc5-rg-unorm":{f:r},"bc5-rg-snorm":{f:r},"bc6h-rgb-ufloat":{f:r},"bc6h-rgb-float":{f:r},"bc7-rgba-unorm":{f:r},"bc7-rgba-unorm-srgb":{f:r},"etc2-rgb8unorm":{f:s},"etc2-rgb8unorm-srgb":{f:s},"etc2-rgb8a1unorm":{f:s},"etc2-rgb8a1unorm-srgb":{f:s},"etc2-rgba8unorm":{f:s},"etc2-rgba8unorm-srgb":{f:s},"eac-r11unorm":{f:s},"eac-r11snorm":{f:s},"eac-rg11unorm":{f:s},"eac-rg11snorm":{f:s},"astc-4x4-unorm":{f:n},"astc-4x4-unorm-srgb":{f:n},"astc-5x4-unorm":{f:n},"astc-5x4-unorm-srgb":{f:n},"astc-5x5-unorm":{f:n},"astc-5x5-unorm-srgb":{f:n},"astc-6x5-unorm":{f:n},"astc-6x5-unorm-srgb":{f:n},"astc-6x6-unorm":{f:n},"astc-6x6-unorm-srgb":{f:n},"astc-8x5-unorm":{f:n},"astc-8x5-unorm-srgb":{f:n},"astc-8x6-unorm":{f:n},"astc-8x6-unorm-srgb":{f:n},"astc-8x8-unorm":{f:n},"astc-8x8-unorm-srgb":{f:n},"astc-10x5-unorm":{f:n},"astc-10x5-unorm-srgb":{f:n},"astc-10x6-unorm":{f:n},"astc-10x6-unorm-srgb":{f:n},"astc-10x8-unorm":{f:n},"astc-10x8-unorm-srgb":{f:n},"astc-10x10-unorm":{f:n},"astc-10x10-unorm-srgb":{f:n},"astc-12x10-unorm":{f:n},"astc-12x10-unorm-srgb":{f:n},"astc-12x12-unorm":{f:n},"astc-12x12-unorm-srgb":{f:n},"pvrtc-rgb4unorm-webgl":{f:o},"pvrtc-rgba4unorm-webgl":{f:o},"pvrtc-rgb2unorm-webgl":{f:o},"pvrtc-rgba2unorm-webgl":{f:o},"etc1-rbg-unorm-webgl":{f:"texture-compression-etc1-webgl"},"atc-rgb-unorm-webgl":{f:a},"atc-rgba-unorm-webgl":{f:a},"atc-rgbai-unorm-webgl":{f:a}}},21370:(e,t,i)=>{"use strict";i.d(t,{r:()=>n});var r=i(51153);class n extends r.F{get[Symbol.toStringTag](){return"RenderPipeline"}shaderLayout;bufferLayout;linkStatus="pending";hash="";sharedRenderPipeline=null;get isPending(){return"pending"===this.linkStatus||"pending"===this.vs.compilationStatus||this.fs?.compilationStatus==="pending"}get isErrored(){return"error"===this.linkStatus||"error"===this.vs.compilationStatus||this.fs?.compilationStatus==="error"}constructor(e,t){super(e,t,n.defaultProps),this.shaderLayout=this.props.shaderLayout,this.bufferLayout=this.props.bufferLayout||[],this.sharedRenderPipeline=this.props._sharedRenderPipeline||null}static defaultProps={...r.F.defaultProps,vs:null,vertexEntryPoint:"vertexMain",vsConstants:{},fs:null,fragmentEntryPoint:"fragmentMain",fsConstants:{},shaderLayout:null,bufferLayout:[],topology:"triangle-list",colorAttachmentFormats:void 0,depthStencilAttachmentFormat:void 0,parameters:{},varyings:void 0,bufferMode:void 0,disableWarnings:!1,_sharedRenderPipeline:void 0,_uniformBlockLayouts:[],bindings:void 0,bindGroups:void 0}}},21652:(e,t,i)=>{"use strict";i.d(t,{Bd:()=>s});var r=i(99225);let n={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:"undefined"!=typeof global&&global,document:"undefined"!=typeof document&&document};n.self||n.window||n.global,n.window||n.self||n.global,n.global||n.self||n.window,n.document;let s=("object"!=typeof r||"[object process]"!==String(r),!0),o=void 0!==r&&r.version&&/v([0-9]*)/.exec(r.version);o&&parseFloat(o[1])},22063:(e,t,i)=>{"use strict";i.d(t,{M:()=>s});var r=i(35454),n=i(9241);class s{name;dataType;format;length;valueLength;stride;byteOffset;byteStride;rowByteLength;bufferLayout;data=[];device;bufferProps;isAppendable=!1;ownsDataChunks=!0;ownedVectors=[];appendableByteLength=0;constructor(e){switch(e.type){case"buffer":{let{name:t,buffer:i,format:n,length:s,valueLength:a=s,byteOffset:l=0,ownsBuffer:u=!1}=e,{stride:c,byteStride:h,rowByteLength:d}=o(e);this.name=t,this.dataType=e.dataType,this.format=n,this.length=s,this.valueLength=a,this.stride=c,this.byteOffset=l,this.byteStride=h,this.rowByteLength=d,this.data.push(new r.L({buffer:i,format:n,length:s,valueLength:a,stride:c,byteOffset:l,byteStride:h,rowByteLength:d,ownsBuffer:u,dataType:e.dataType}));return}case"interleaved":{let{name:t,buffer:i,format:n,length:s,valueLength:o=s,byteOffset:a=0,byteStride:l,attributes:u,ownsBuffer:c=!1}=e;this.name=t,this.dataType=e.dataType,this.format=n,this.length=s,this.valueLength=o,this.stride=l,this.byteOffset=a,this.byteStride=l,this.rowByteLength=l,this.bufferLayout={name:t,byteStride:l,attributes:u},this.data.push(new r.L({buffer:i,format:n,length:s,valueLength:o,stride:l,byteOffset:a,byteStride:l,rowByteLength:l,ownsBuffer:c,dataType:e.dataType}));return}case"data":{var t;let i=e.format??(t=e.data,t[0]?.format),r=i?(0,n.Ft)(i):void 0,{name:s,data:o,stride:a=o[0]?.stride??r?.components??1,valueLength:l=o.reduce((e,t)=>e+t.valueLength,0),byteStride:u=o[0]?.byteStride??r?.byteLength,rowByteLength:c=o[0]?.rowByteLength??r?.byteLength,bufferLayout:h,ownsData:d=!1}=e;if(void 0===u||void 0===c)throw Error("GPUVector requires format or explicit byte layout metadata");i&&function(e,t){if(e.find(e=>e.format!==t))throw Error("GPUVector data chunks must share the declared format")}(o,i),this.name=s,this.dataType=e.dataType,this.format=i,this.length=o.reduce((e,t)=>e+t.length,0),this.valueLength=l,this.stride=a,this.byteOffset=1===o.length?o[0].byteOffset:0,this.byteStride=u,this.rowByteLength=c,this.bufferLayout=h,this.ownsDataChunks=d,this.data.push(...o);return}case"appendable":{let{name:t,device:i,format:r,valueLength:n=0,bufferProps:s}=e,{stride:a,byteStride:l,rowByteLength:u}=o(e);this.name=t,this.dataType=e.dataType,this.format=r,this.length=0,this.valueLength=n,this.stride=a,this.byteOffset=0,this.byteStride=l,this.rowByteLength=u,this.device=i,this.bufferProps=s,this.isAppendable=!0;return}}}get ownsBuffer(){return this.ownsDataChunks&&this.data.some(e=>e.ownsBuffer)||this.ownedVectors.some(e=>e.ownsBuffer)}get capacityRows(){return this.isAppendable?this.length:void 0}get appendedByteLength(){return this.appendableByteLength}addData(e){if(this.format&&e.format!==this.format)throw Error("GPUVector.addData() requires matching formats");if(e.byteStride!==this.byteStride)throw Error("GPUVector.addData() requires matching byteStride");if(e.rowByteLength!==this.rowByteLength)throw Error("GPUVector.addData() requires matching rowByteLength");return this.data.push(e),this.length+=e.length,this.valueLength+=e.valueLength,this}appendDataChunk(e,t=this.appendableByteLength+e.buffer.byteLength){if(!this.isAppendable)throw Error("GPUVector.appendDataChunk() requires appendable vector storage");if(this.format&&e.format!==this.format)throw Error("GPUVector.appendDataChunk() requires matching formats");if(e.byteStride!==this.byteStride||e.rowByteLength!==this.rowByteLength)throw Error("GPUVector.appendDataChunk() requires matching byte layout metadata");return this.data.push(e),this.length+=e.length,this.valueLength+=e.valueLength,this.appendableByteLength=t,this}resetLastBatch(){if(!this.isAppendable)throw Error("GPUVector.resetLastBatch() requires appendable vector storage");for(let e of this.data.splice(0))e.destroy();return this.length=0,this.valueLength=0,this.appendableByteLength=0,this}retainOwnedVectors(e){return this.ownedVectors.push(...e),this}transferBufferOwnership(e){let t=this.data[0],i=e.data[0];if(!t||!i||t.buffer!==i.buffer)throw Error("GPUVector ownership can only be transferred to the same buffer");t.transferBufferOwnership(i)}destroy(){if(this.ownsDataChunks)for(let e of this.data)e.destroy();for(let e of this.ownedVectors.splice(0))e.destroy()}}function o(e){let t=e.format?(0,n.Ft)(e.format):void 0,i=e.rowByteLength??e.byteStride??t?.byteLength;if(void 0===i)throw Error("GPUVector requires format or explicit rowByteLength");return{stride:e.stride??t?.components??1,byteStride:e.byteStride??i,rowByteLength:i}}},22839:(e,t,i)=>{"use strict";i.d(t,{h:()=>n});var r=i(51153);class n extends r.F{static INDEX=16;static VERTEX=32;static UNIFORM=64;static STORAGE=128;static INDIRECT=256;static QUERY_RESOLVE=512;static MAP_READ=1;static MAP_WRITE=2;static COPY_SRC=4;static COPY_DST=8;get[Symbol.toStringTag](){return"Buffer"}usage;indexType;updateTimestamp;constructor(e,t){let i={...t};(t.usage||0)&n.INDEX&&!t.indexType&&(t.data instanceof Uint32Array?i.indexType="uint32":t.data instanceof Uint16Array?i.indexType="uint16":t.data instanceof Uint8Array&&(i.indexType="uint8")),delete i.data,super(e,i,n.defaultProps),this.usage=i.usage||0,this.indexType=i.indexType,this.updateTimestamp=e.incrementTimestamp()}clone(e){return this.device.createBuffer({...this.props,...e})}static DEBUG_DATA_MAX_LENGTH=32;debugData=new ArrayBuffer(0);_setDebugData(e,t,i){let r;if(!this.device.props.debug)return;let s=null;ArrayBuffer.isView(e)?(s=e,r=e.buffer):r=e;let o=Math.min(e?e.byteLength:i,n.DEBUG_DATA_MAX_LENGTH);if(null===r)this.debugData=new ArrayBuffer(o);else{let e=Math.min(s?.byteOffset||0,r.byteLength),t=Math.min(o,Math.max(0,r.byteLength-e));this.debugData=new Uint8Array(r,e,t).slice().buffer}}static defaultProps={...r.F.defaultProps,handle:void 0,usage:0,byteLength:0,byteOffset:0,data:null,indexType:"uint16",onMapped:void 0}}},23098:(e,t,i)=>{"use strict";let r;function n(e){return(!r||r.byteLength<e)&&(r=new ArrayBuffer(e)),r}function s(e,t){let i=n(e.BYTES_PER_ELEMENT*t);return new e(i,0,t)}i.d(t,{X:()=>s,o:()=>n})},23778:(e,t,i)=>{"use strict";let r;i.d(t,{P:()=>d});var n=i(1142),s=i(76756);function o(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}class a extends n.a{get x(){return this[0]}set x(e){this[0]=(0,s.ws)(e)}get y(){return this[1]}set y(e){this[1]=(0,s.ws)(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let i=0;i<this.ELEMENTS;++i){let r=this[i]-e[i];t+=r*r}return(0,s.ws)(t)}dot(e){let t=0;for(let i=0;i<this.ELEMENTS;++i)t+=this[i]*e[i];return(0,s.ws)(t)}normalize(){let e=this.magnitude();if(0!==e)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return o(e>=0&&e<this.ELEMENTS,"index is out of range"),(0,s.ws)(this[e])}setComponent(e,t){return o(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}}var l=i(94878),u=i(796),c=i(6994);let h=[0,0,0];class d extends a{static get ZERO(){return r||Object.freeze(r=new d(0,0,0)),r}constructor(e=0,t=0,i=0){super(-0,-0,-0),1==arguments.length&&(0,l.cy)(e)?this.copy(e):(l.$W.debug&&((0,s.ws)(e),(0,s.ws)(t),(0,s.ws)(i)),this[0]=e,this[1]=t,this[2]=i)}set(e,t,i){return this[0]=e,this[1]=t,this[2]=i,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return l.$W.debug&&((0,s.ws)(e.x),(0,s.ws)(e.y),(0,s.ws)(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=(0,s.ws)(e)}angle(e){return(0,u.g7)(this,e)}cross(e){return(0,u.$A)(this,this,e),this.check()}rotateX({radians:e,origin:t=h}){return(0,u.eL)(this,this,t,e),this.check()}rotateY({radians:e,origin:t=h}){return(0,u.Z8)(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=h}){return(0,u.x6)(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return(0,u.Z0)(this,this,e),this.check()}transformAsVector(e){return(0,c.cL)(this,this,e),this.check()}transformByMatrix3(e){return(0,u.ei)(this,this,e),this.check()}transformByMatrix2(e){return(0,c.J4)(this,this,e),this.check()}transformByQuaternion(e){return(0,u.gL)(this,this,e),this.check()}}},24387:(e,t,i)=>{"use strict";function r(e,t){var i;let r=Number.isFinite(i=t)&&i>0?Math.floor(i):65535,n=Math.max(1,Math.ceil(e)),s=Math.min(n,r),o=Math.min(Math.ceil(n/s),r),a=Math.ceil(n/s/o);if(a>r)throw Error(`WebGPU dispatch requires ${n} workgroups, exceeding the 3D dispatch limit of ${r} per dimension`);return{x:s,y:o,z:a}}function n(e,t="workgroupId"){return`((${t}.z * ${e.y}u + ${t}.y) * ${e.x}u + ${t}.x)`}function s(e,t,i="workgroupId",r="localId"){return`(${n(e,i)} * ${t}u + ${r}.x)`}i.d(t,{B:()=>n,BB:()=>r,vL:()=>s})},25837:(e,t,i)=>{"use strict";i.d(t,{P:()=>a});var r=i(29101),n=i(56823),s=i(11094),o=i(12522);function a(e,t){let i={};for(let a of(0,o.JO)(e,t,{warnOnMissingBufferLayout:!0})){let t=function(e,t){let i=function(e,t){let i=e.attributes.find(e=>e.name===t);return i||r.R.warn(`shader layout attribute "${t}" not present in shader`)(),i||null}(e,t.attributeName),o=n.Co.getAttributeShaderTypeInfo(i.type),a=t.vertexFormat,l=s.E.getVertexFormatInfo(a);return{attributeName:t.attributeName,bufferName:t.bufferName,location:i.location,shaderType:i.type,primitiveType:o.primitiveType,shaderComponents:o.components,vertexFormat:a,bufferDataType:l.type,bufferComponents:l.components,normalized:l.normalized,integer:o.integer,stepMode:t.stepMode,byteOffset:t.byteOffset,byteStride:t.byteStride}}(e,a);i[a.attributeName]=t}return i}},27832:(e,t,i)=>{"use strict";i.d(t,{vz:()=>c});var r=i(15821),n=i(20996);let s=/^(r|rg|rgb|rgba|bgra)([0-9]*)([a-z]*)(-srgb)?(-webgl)?$/,o=["rgb","rgba","bgra"],a=["depth","stencil"],l=["bc1","bc2","bc3","bc4","bc5","bc6","bc7","etc1","etc2","eac","atc","astc","pvrtc"];class u{isColor(e){return o.some(t=>e.startsWith(t))}isDepthStencil(e){return a.some(t=>e.startsWith(t))}isCompressed(e){return l.some(t=>e.startsWith(t))}getInfo(e){return h(e)}getCapabilities(e){return function(e){let t=(0,n.qG)(e),i={format:e,create:t.f??!0,render:t.render??!0,filter:t.filter??!0,blend:t.blend??!0,store:t.store??!0},r=h(e),s=e.startsWith("depth")||e.startsWith("stencil"),o=r?.signed,a=r?.integer,l=r?.webgl,u=!!r?.compressed;return i.render&&=!s&&!u,i.filter&&=!s&&!o&&!a&&!l,i}(e)}getWebGPUCapabilities(e){let t=(0,n.qG)(e);return void 0!==t.webgpu?t.webgpu:this.isCompressed(e)&&!e.endsWith("-webgl")?5:0}computeMemoryLayout(e){return function({format:e,width:t,height:i,depth:r,byteAlignment:n}){let{bytesPerPixel:s,bytesPerBlock:o=s,blockWidth:a=1,blockHeight:l=1,compressed:u=!1}=c.getInfo(e),h=u?Math.ceil(t/a):t,d=u?Math.ceil(i/l):i,f=Math.ceil(h*o/n)*n;return{bytesPerPixel:s,bytesPerRow:f,rowsPerImage:d,depthOrArrayLayers:r,bytesPerImage:f*d,byteLength:f*d*r}}(e)}}let c=new u;function h(e){let t=function(e){let t={...(0,n.qG)(e)},i=t.bytesPerPixel||1,r=t.bitsPerChannel||[8,8,8,8];return delete t.bitsPerChannel,delete t.bytesPerPixel,delete t.f,delete t.render,delete t.filter,delete t.blend,delete t.store,delete t.webgpu,{...t,format:e,attachment:t.attachment||"color",channels:t.channels||"r",components:t.components||t.channels?.length||1,bytesPerPixel:i,bitsPerChannel:r,dataType:t.dataType||"uint8",srgb:t.srgb??!1,packed:t.packed??!1,webgl:t.webgl??!1,integer:t.integer??!1,signed:t.signed??!1,normalized:t.normalized??!1,compressed:t.compressed??!1}}(e);if(c.isCompressed(e)){var i;t.channels="rgb",t.components=3,t.bytesPerPixel=1,t.srgb=!1,t.compressed=!0,t.bytesPerBlock=(i=e).startsWith("bc1")||i.startsWith("bc4")||i.startsWith("etc1")||i.startsWith("etc2-rgb8")||i.startsWith("etc2-rgb8a1")||i.startsWith("eac-r11")||"atc-rgb-unorm-webgl"===i?8:i.startsWith("bc2")||i.startsWith("bc3")||i.startsWith("bc5")||i.startsWith("bc6h")||i.startsWith("bc7")||i.startsWith("etc2-rgba8")||i.startsWith("eac-rg11")||i.startsWith("astc")||"atc-rgba-unorm-webgl"===i||"atc-rgbai-unorm-webgl"===i?16:i.startsWith("pvrtc")?8:16;let r=function(e){let t=/.*-(\d+)x(\d+)-.*/.exec(e);if(t){let[,e,i]=t;return{blockWidth:Number(e),blockHeight:Number(i)}}return e.startsWith("bc")||e.startsWith("etc1")||e.startsWith("etc2")||e.startsWith("eac")||e.startsWith("atc")||e.startsWith("pvrtc-rgb4")||e.startsWith("pvrtc-rgba4")?{blockWidth:4,blockHeight:4}:e.startsWith("pvrtc-rgb2")||e.startsWith("pvrtc-rgba2")?{blockWidth:8,blockHeight:4}:null}(e);r&&(t.blockWidth=r.blockWidth,t.blockHeight=r.blockHeight)}let o=t.packed?null:s.exec(e);if(o){let[,i,n,s,a,l]=o,u=`${s}${n}`,c=r.r.getDataTypeInfo(u),h=8*c.byteLength,d=i?.length??1;t={format:e,attachment:t.attachment,dataType:c.signedType,components:d,channels:i,integer:c.integer,signed:c.signed,normalized:c.normalized,bitsPerChannel:[h,d>=2?h:0,d>=3?h:0,d>=4?h:0],bytesPerPixel:c.byteLength*d,packed:t.packed,srgb:t.srgb},"-webgl"===l&&(t.webgl=!0),"-srgb"===a&&(t.srgb=!0)}return e.endsWith("-webgl")&&(t.webgl=!0),e.endsWith("-srgb")&&(t.srgb=!0),t}},28784:(e,t,i)=>{"use strict";i.d(t,{Ph:()=>a,mk:()=>o});var r=i(11986),n=i(19523);let s=()=>{let e=(0,n.K2)();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry};function o(e){let t=s();for(let i of e=Array.isArray(e)?e:[e]){let e=(0,r.D)(i);t.find(t=>e===t)||t.unshift(e)}}function a(){return s()}},28804:(e,t,i)=>{"use strict";i.d(t,{B:()=>n}),i(74010);var r=i(99225);function n(){return"object"==typeof r&&"[object process]"===String(r),!0}},29101:(e,t,i)=>{"use strict";i.d(t,{R:()=>r});let r=new(i(94061)).hW({id:"luma.gl"})},29239:(e,t,i)=>{"use strict";i.d(t,{B1:()=>o,Gv:()=>r,H1:()=>h,L8:()=>s,Sv:()=>u,Td:()=>l,aC:()=>n,qf:()=>c,xZ:()=>a});let r=e=>null!==e&&"object"==typeof e,n=e=>r(e)&&e.constructor===({}).constructor,s=e=>"undefined"!=typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer,o=e=>r(e)&&"number"==typeof e.byteLength&&"function"==typeof e.slice,a=e=>!!e&&"function"==typeof e[Symbol.iterator],l=e=>!!e&&"function"==typeof e[Symbol.asyncIterator],u=e=>"undefined"!=typeof Response&&e instanceof Response||r(e)&&"function"==typeof e.arrayBuffer&&"function"==typeof e.text&&"function"==typeof e.json,c=e=>"undefined"!=typeof Blob&&e instanceof Blob,h=e=>(e=>"undefined"!=typeof ReadableStream&&e instanceof ReadableStream||r(e)&&"function"==typeof e.tee&&"function"==typeof e.cancel&&"function"==typeof e.getReader)(e)||(e=>r(e)&&"function"==typeof e.read&&"function"==typeof e.pipe&&"boolean"==typeof e.readable)(e)},32420:(e,t,i)=>{"use strict";i.d(t,{Hd:()=>a,j8:()=>l,kL:()=>o});var r=i(22839),n=i(3905);let s=r.h.DEBUG_DATA_MAX_LENGTH;class o{device;id;ready;usage;props;isReady=!0;destroyed=!1;generation=0;updateTimestamp;debugData=new ArrayBuffer(0);_debugDataEnabled;_maxDebugDataByteLength;_ownsBuffer;_buffer;get buffer(){return this._buffer}get byteLength(){return this._buffer.byteLength}get[Symbol.toStringTag](){return"DynamicBuffer"}toString(){return`DynamicBuffer:"${this.id}":${this.byteLength}B`}toJSON(){return this.toString()}constructor(e,t){let{debugData:i=!1,buffer:o,ownsBuffer:a=!0,...l}=t;if(o&&o.device!==e)throw Error("DynamicBuffer adopted buffers must belong to the supplied device");if(o&&(void 0!==l.byteLength||void 0!==l.data))throw Error("DynamicBuffer cannot combine an adopted buffer with byteLength or data");let u=t.id||o?.id||(0,n.L)("dynamic-buffer"),c={...l,id:u,usage:l.usage??o?.usage,indexType:l.indexType??o?.indexType};(c.usage||0)&r.h.INDEX&&!c.indexType&&(l.data instanceof Uint32Array?c.indexType="uint32":l.data instanceof Uint16Array?c.indexType="uint16":l.data instanceof Uint8Array&&(c.indexType="uint8")),delete c.data,delete c.byteOffset,this.device=e,this.id=u,this.props=c,this.usage=c.usage||0,this._debugDataEnabled=!!i,this._maxDebugDataByteLength="object"==typeof i&&void 0!==i.maxByteLength?i.maxByteLength:s,this._ownsBuffer=a,this._buffer=o??this.device.createBuffer({...l,id:u}),this.ready=Promise.resolve(this._buffer),this.updateTimestamp=this._buffer.updateTimestamp,this._resetDebugData(this._buffer.byteLength),l.data&&this._writeDebugData(l.data,l.byteOffset||0)}write(e,t=0){this._buffer.write(e,t),this._touch(),this._writeDebugData(e,t)}async mapAndWriteAsync(e,t=0,i=this.byteLength-t){let r=null;await this._buffer.mapAndWriteAsync(async(t,n)=>{await e(t,n),r=new Uint8Array(t.slice(0,i))},t,i),this._touch(),r&&this._writeDebugData(r,t)}async readAsync(e=0,t=this.byteLength-e){let i=await this._buffer.readAsync(e,t);return this._writeDebugData(i,e)&&this._touch(),i}async mapAndReadAsync(e,t=0,i=this.byteLength-t){let r=null,n=await this._buffer.mapAndReadAsync(async(t,i)=>(r=new Uint8Array(t.slice(0)),await e(t,i)),t,i);return r&&this._writeDebugData(r,t)&&this._touch(),n}resize(e){let{byteLength:t,preserveData:i=!1}=e;if(t===this.byteLength)return!1;let r=Math.min(e.copyByteLength??Math.min(this.byteLength,t),this.byteLength,t),n=this._buffer,s=this.debugData.slice(0),{data:o,byteOffset:a,...l}=this.props,u=this.device.createBuffer({...l,byteLength:t});return i&&r>0&&this._copyBufferContents(n,u,r),this._buffer=u,this._resetDebugData(t),i&&s.byteLength>0&&this._writeDebugData(s,0),this._ownsBuffer&&n.destroy(),this._ownsBuffer=!0,this.generation++,this._touch(),!0}ensureSize(e,t){return!(e<=this.byteLength)&&this.resize({byteLength:e,preserveData:t?.preserveData})}getBinding(e){return e?.offset===void 0&&e?.size===void 0?this._buffer:{buffer:this._buffer,offset:e?.offset,size:e?.size}}destroy(){this.destroyed||(this._ownsBuffer&&this._buffer.destroy(),this.destroyed=!0,this.debugData=new ArrayBuffer(0))}_copyBufferContents(e,t,i){let r="webgpu"===this.device.type?4*Math.ceil(i/4):i,n=this.device.createCommandEncoder();n.copyBufferToBuffer({sourceBuffer:e,destinationBuffer:t,size:r}),this.device.submit(n.finish())}_touch(){this.updateTimestamp=this.device.incrementTimestamp()}_resetDebugData(e){if(!this._debugDataEnabled){this.debugData=new ArrayBuffer(0);return}this.debugData=new ArrayBuffer(Math.min(e,this._maxDebugDataByteLength))}_writeDebugData(e,t){if(!this._debugDataEnabled||0===this.debugData.byteLength||t>=this.debugData.byteLength)return!1;let i=ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e),r=new Uint8Array(this.debugData),n=Math.min(i.byteLength,r.byteLength-t);return r.set(i.subarray(0,n),t),n>0}}function a(e){return null!==e&&"object"==typeof e&&"buffer"in e}function l(e){var t;return{buffer:(t=e.buffer)instanceof o?t.buffer:t,offset:e.offset,size:e.size}}},32646:(e,t,i)=>{"use strict";i.d(t,{L:()=>n});let r={};function n(e="id"){r[e]=r[e]||1;let t=r[e]++;return`${e}-${t}`}},33696:(e,t,i)=>{"use strict";i.d(t,{Pr:()=>s,WC:()=>a,jV:()=>o});var r=i(7724),n=i(56823);function s(e,t={}){let i={...e},n=t.layout??"std140",u={},h=0;for(let[e,t]of Object.entries(i))h=function e(t,i,n,s,u){if("string"==typeof n){let e=o(n,u),a=(0,r.JP)(s,e.alignment);return t[i]={offset:a,...e},a+e.size}if(Array.isArray(n)){if(Array.isArray(n[0]))throw Error(`Nested arrays are not supported for ${i}`);let a=n[0],h=n[1],d=function e(t,i){var n,s,a;return n=function t(i,n){if("string"==typeof i)return o(i,n).size;if(Array.isArray(i)){let t=i[0],r=i[1];if(Array.isArray(t))throw Error("Nested arrays are not supported");return e(t,n)*r}let s=0;for(let e of Object.values(i))s=(0,r.JP)(s,l(e,n))+t(e,n);return(0,r.JP)(s,l(i,n))}(t,i),s=l(t,i),a=i,(0,r.JP)(n,c(a)?4:s)}(a,u),f=(0,r.JP)(s,l(n,u));for(let r=0;r<h;r++)e(t,`${i}[${r}]`,a,f+r*d,u);return f+d*h}if(a(n)){let o=l(n,u),a=(0,r.JP)(s,o);for(let[r,s]of Object.entries(n))a=e(t,`${i}.${r}`,s,a,u);return(0,r.JP)(a,o)}throw Error(`Unsupported CompositeShaderType for ${i}`)}(u,e,t,h,n);return h=(0,r.JP)(h,l(i,n)),{layout:n,byteLength:4*h,uniformTypes:i,fields:u}}function o(e,t){let i=(0,n.si)(e),s=(0,n.k0)(i),o=/^mat(\d)x(\d)<.+>$/.exec(i);if(o){var a,l;let e=Number(o[1]),n=Number(o[2]),c=u(n,i,s.type,t),h=(a=c.size,l=c.alignment,"std140"===t?4:(0,r.JP)(a,l));return{alignment:c.alignment,size:e*h,components:e*n,columns:e,rows:n,columnStride:h,shaderType:i,type:s.type}}let c=/^vec(\d)<.+>$/.exec(i);return c?u(Number(c[1]),i,s.type,t):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:i,type:s.type}}function a(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function l(e,t){var i;if("string"==typeof e)return o(e,t).alignment;if(Array.isArray(e)){let i=l(e[0],t);return c(t)?Math.max(i,4):i}let r=1;for(let i of Object.values(e))r=Math.max(r,l(i,t));return"std140"===(i=t)||"wgsl-uniform"===i?Math.max(r,4):r}function u(e,t,i,r){return{alignment:2===e?2:4,size:3===e?3:e,components:e,columns:1,rows:e,columnStride:3===e?3:e,shaderType:t,type:i}}function c(e){return"std140"===e||"wgsl-uniform"===e}},34537:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var r=i(78120);let n=`\
// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,s=`\
vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`,o={name:"project32",dependencies:[r.A],source:n,vs:s}},35454:(e,t,i)=>{"use strict";i.d(t,{L:()=>d});var r=i(42466),n=i(11094),s=i(33696);function o(e){return!!(e&&"object"==typeof e&&"struct"===e.type)}function a(e,t){return 1===t?e:`vec${t}<${e}>`}function l(e,t){return Math.ceil(e/t)*t}var u=i(9241);class c{buffer;ownsDataBuffer;constructor(e,t){this.buffer=e,this.ownsDataBuffer=t}get ownsBuffer(){return this.ownsDataBuffer}transferBufferOwnership(e){if(e.buffer!==this.buffer)throw Error("GPUData ownership can only be transferred to the same buffer");e.ownsDataBuffer=this.ownsDataBuffer,this.ownsDataBuffer=!1}destroy(){this.ownsDataBuffer&&(this.buffer.destroy(),this.ownsDataBuffer=!1)}}class h extends c{dataType;format;length;valueLength;stride;byteOffset;byteStride;rowByteLength;readbackMetadata;valueOffsets;nullBitmap;valueByteLength;constructor(e){let t,{buffer:i,format:r,length:c,valueLength:h,stride:d,byteOffset:f=0,byteStride:p,rowByteLength:g,ownsBuffer:m=!1,readbackMetadata:v,valueOffsets:y,nullBitmap:b,valueByteLength:_,dataType:x}=e;super(i,m);let w=o(t=r?"string"==typeof r?r:function(e,t){let i=Object.entries(e);if(0===i.length)throw Error("GPUData struct format must declare at least one field");return"packed"===t?function(e){let t=[],i=0,r=0;for(let[s,o]of e){let e=n.E.getVertexFormatInfo(o);if(e.webglOnly)throw Error(`Packed GPUData struct field "${s}" uses WebGL-only format ${o}`);i=l(i,Math.min(4,e.byteLength)),t.push([s,Object.freeze({format:o,byteOffset:i,byteLength:e.byteLength})]),i+=e.byteLength,r+=e.components}return Object.freeze({type:"struct",layout:"packed",fields:Object.freeze(Object.fromEntries(t)),components:r,byteStride:l(i,4),rowByteLength:i})}(i):function(e){let t=Object.fromEntries(e.map(([e,t])=>[e,function(e){let t=n.E.getVertexFormatInfo(e);switch(t.type){case"float32":return a("f32",t.components);case"sint32":return a("i32",t.components);case"uint32":return a("u32",t.components);default:return a("u32",Math.ceil(t.byteLength/4))}}(t)])),i=(0,s.Pr)(t,{layout:"wgsl-storage"}),r=[],o=0,l=0;for(let[t,s]of e){let e=n.E.getVertexFormatInfo(s),a=4*i.fields[t].offset;r.push([t,Object.freeze({format:s,byteOffset:a,byteLength:e.byteLength})]),o=Math.max(o,a+e.byteLength),l+=e.components}return Object.freeze({type:"struct",layout:"wgsl-storage",fields:Object.freeze(Object.fromEntries(r)),components:l,byteStride:i.byteLength,rowByteLength:o})}(i)}(r,e.layout??"wgsl-storage"):void 0)?t:void 0,P="string"==typeof t?(0,u.Ft)(t):void 0;if(this.dataType=x,this.format=t,this.length=c,this.valueLength=h??c,this.stride=d??P?.components??w?.components??p??g??1,this.byteOffset=f,this.rowByteLength=g??w?.rowByteLength??P?.byteLength??p??this.stride,this.byteStride=p??w?.byteStride??this.rowByteLength,w){if(this.rowByteLength<w.rowByteLength)throw Error(`GPUData rowByteLength ${this.rowByteLength} is smaller than struct format row byte length ${w.rowByteLength}`);if(this.byteStride<Math.max(w.byteStride,this.rowByteLength))throw Error(`GPUData byteStride ${this.byteStride} is smaller than its struct row layout`)}this.readbackMetadata=v,this.valueOffsets=y,this.nullBitmap=b,this.valueByteLength=_}getChild(e){if(!o(this.format))return null;let t=this.format.fields[e];return t?new r.I({buffer:this.buffer,format:t.format,length:this.length,byteOffset:this.byteOffset+t.byteOffset,byteStride:this.byteStride}):null}getChildAt(e){if(!o(this.format))return null;let t=Object.values(this.format.fields)[e];return t?new r.I({buffer:this.buffer,format:t.format,length:this.length,byteOffset:this.byteOffset+t.byteOffset,byteStride:this.byteStride}):null}}let d=h},35540:()=>{},37114:(e,t,i)=>{"use strict";i.d(t,{K:()=>o,r:()=>s});var r=i(56823);let n=/^(vs|fs):(?:#(?:decl|main-start|main-end)|[A-Za-z_][\w-]*)$/;function s(e=[],t){let i=[],r={},n={},o={},l={};for(let s of e)a({modules:i,defines:r,injections:n,vertexInputs:o,varyings:l},s),a({modules:i,defines:r,injections:n,vertexInputs:o,varyings:l},s[t]);for(let e of Object.keys(l))if(o[e])throw Error(`ShaderPlugin name "${e}" cannot be both a vertex input and a varying`);return{modules:i,defines:r,injections:n,vertexInputs:o,varyings:l}}function o(e=[],t=[]){let i=[...e],r=new Set(i.map(e=>e.name));for(let e of t)r.has(e.name)||(i.push(e),r.add(e.name));return i}function a(e,t){if(t){for(let[i,r]of(t.modules?.length&&e.modules.push(...t.modules),t.defines&&Object.assign(e.defines,t.defines),Object.entries(t.vertexInputs||{}))){l(i,"vertex input");let t=e.vertexInputs[i];if(t&&t!==r)throw Error(`ShaderPlugin vertex input "${i}" has conflicting types "${t}" and "${r}"`);e.vertexInputs[i]=r}for(let[i,n]of Object.entries(t.varyings||{})){l(i,"varying");let t=function(e,t){let{primitiveType:i}=r.Co.getAttributeShaderTypeInfo(t.type),n="i32"===i||"u32"===i,s=t.interpolation||(n?"flat":"smooth");if(n&&"smooth"===s)throw Error(`ShaderPlugin integer varying "${e}" must use flat interpolation`);return{type:t.type,interpolation:s}}(i,n),s=e.varyings[i];if(s&&(s.type!==t.type||s.interpolation!==t.interpolation))throw Error(`ShaderPlugin varying "${i}" has conflicting declarations "${s.type}/${s.interpolation}" and "${t.type}/${t.interpolation}"`);e.varyings[i]=t}for(let i of t.injections||[])(function(e){if(!n.test(e))throw Error(`ShaderPlugin injection target "${e}" must be a named shader anchor or hook`)})(i.target),e.injections[i.target]||(e.injections[i.target]=[]),e.injections[i.target].push({injection:i.injection,order:i.order??0})}}function l(e,t){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e)||e.startsWith("_luma_"))throw Error(`ShaderPlugin ${t} "${e}" must be a valid non-reserved identifier`)}},37808:(e,t,i)=>{"use strict";i.d(t,{C:()=>s});var r=i(11094),n=i(46740);function s(e,t={}){var i,a;let l=t.bufferName||"geometry";if(function(e,t){if(1!==e.bufferLayout.length)return!1;let i=e.bufferLayout[0];return i.name===t&&!!i.attributes?.length&&!!e.attributes[t]}(e,l))return e;let u=t.minAttributeAlignment||4,c=(i=e,(a=t.attributes)?a.map(e=>[e,i.attributes[e]]):Object.entries(i.attributes)),h=[],d=0,f=1/0;for(let[e,t]of c){if(!t)continue;if(t.constant)throw Error(`Attribute ${e} is constant`);let{value:i,size:s,normalized:a}=t;if(!ArrayBuffer.isView(i))throw Error(`Attribute ${e} is missing typed array data`);if(void 0===s)throw Error(`Attribute ${e} is missing a size`);let l=r.E.getVertexFormatFromAttribute(i,s,a),c=r.E.getVertexFormatInfo(l);d=o(d,u),h.push({sourceName:e,attributeName:(0,n.l)(e),value:i,size:s,format:l,byteOffset:d,byteLength:c.byteLength}),d+=c.byteLength;let p=i.length/s;if(!Number.isInteger(p))throw Error(`Attribute ${e} length is not divisible by size`);f=Math.min(f,p)}if(0===h.length||!Number.isFinite(f))throw Error(`Geometry ${e.id} has no interleavable attributes`);let p=o(d,u),g=new ArrayBuffer(f*p);for(let e of h)!function(e,t,i,r){let n=r.value.constructor,s=n.BYTES_PER_ELEMENT;if(r.byteOffset%s!=0||i%s!=0)throw Error(`Attribute ${r.sourceName} is not aligned to its component type`);let o=new n(e),a=r.value,l=r.byteOffset/s,u=i/s;for(let e=0;e<t;e++){let t=e*r.size,i=e*u+l;for(let e=0;e<r.size;e++)o[i+e]=a[t+e]}}(g,f,p,e);return new n.V({id:e.id,topology:e.topology||"triangle-list",vertexCount:e.vertexCount,indices:e.indices,attributes:{[l]:{value:new Uint8Array(g),size:p,byteStride:p}},bufferLayout:[{name:l,stepMode:"vertex",byteStride:p,attributes:h.map(e=>({attribute:e.attributeName,format:e.format,byteOffset:e.byteOffset}))}]})}function o(e,t){return Math.ceil(e/t)*t}},37999:(e,t,i)=>{"use strict";i.d(t,{I:()=>a,Td:()=>o,X:()=>s});let r=[],n=[];function s(e,t=0,i=1/0){let o=r,a={index:-1,data:e,target:[]};return e?"function"==typeof e[Symbol.iterator]?o=e:e.length>0&&(n.length=e.length,o=n):o=r,(t>0||Number.isFinite(i))&&(o=(Array.isArray(o)?o:Array.from(o)).slice(t,i),a.index=t-1),{iterable:o,objectInfo:a}}function o(e){return e&&e[Symbol.asyncIterator]}function a(e,t){let{size:i,stride:r,offset:n,startIndices:s,nested:o}=t,a=e.BYTES_PER_ELEMENT,l=r?r/a:i,u=n?n/a:0,c=Math.floor((e.length-u)/l);return(t,{index:r,target:n})=>{let a;if(!s){let t=r*l+u;for(let r=0;r<i;r++)n[r]=e[t+r];return n}let h=s[r],d=s[r+1]||c;if(o){a=Array(d-h);for(let t=h;t<d;t++){let r=t*l+u;n=Array(i);for(let t=0;t<i;t++)n[t]=e[r+t];a[t-h]=n}}else if(l===i)a=e.subarray(h*i+u,d*i+u);else{a=new e.constructor((d-h)*i);let t=0;for(let r=h;r<d;r++){let n=r*l+u;for(let r=0;r<i;r++)a[t++]=e[n+r]}}return a}}},38380:(e,t,i)=>{"use strict";i.d(t,{$Q:()=>n});var r=i(18908);function n(e){(0,r.$g)(e);let t={},i={};!function e(t){let{modules:i,level:r,moduleMap:n,moduleDepth:s}=t;if(r>=5)throw Error("Possible loop in shader dependency graph");for(let e of i)n[e.name]=e,(void 0===s[e.name]||s[e.name]<r)&&(s[e.name]=r);for(let t of i)t.dependencies&&e({modules:t.dependencies,level:r+1,moduleMap:n,moduleDepth:s})}({modules:e,level:0,moduleMap:t,moduleDepth:i});let n=Object.keys(i).sort((e,t)=>i[t]-i[e]).map(e=>t[e]);return(0,r.$g)(n),n}},40308:(e,t,i)=>{"use strict";i.d(t,{K:()=>c});var r=i(22839),n=i(29101),s=i(33696);function o(e){return Array.isArray(e)?0===e.length||"number"==typeof e[0]:ArrayBuffer.isView(e)&&!(e instanceof DataView)}class a{name;uniforms={};modifiedUniforms={};modified=!0;bindingLayout={};needsRedraw="initialized";constructor(e){if(this.name=e?.name||"unnamed",e?.name&&e?.shaderLayout){let t=e?.shaderLayout.bindings?.find(t=>"uniform"===t.type&&t.name===e?.name);if(!t)throw Error(e?.name);for(let e of t.uniforms||[])this.bindingLayout[e.name]=e}}setUniforms(e){for(let[t,i]of Object.entries(e))this._setUniform(t,i)&&!this.needsRedraw&&this.setNeedsRedraw(`${this.name}.${t}=${i}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,t){return!function(e,t,i=16){if(e===t)return!0;if(!o(e)||!o(t)||e.length!==t.length)return!1;let r=Math.min(i,128);if(e.length>r)return!1;for(let i=0;i<e.length;++i)if(t[i]!==e[i])return!1;return!0}(this.uniforms[e],t)&&(this.uniforms[e]=o(t)?t.slice():t,this.modifiedUniforms[e]=!0,this.modified=!0,!0)}}var l=i(23098);class u{layout;constructor(e){this.layout=e}has(e){return!!this.layout.fields[e]}get(e){let t=this.layout.fields[e];return t?{offset:t.offset,size:t.size}:void 0}getFlatUniformValues(e){let t={};for(let[i,r]of Object.entries(e)){let e=this.layout.uniformTypes[i];e?this._flattenCompositeValue(t,i,e,r):this.layout.fields[i]&&(t[i]=r)}return t}getData(e){let t=(0,l.o)(this.layout.byteLength);new Uint8Array(t,0,this.layout.byteLength).fill(0);let i={i32:new Int32Array(t),u32:new Uint32Array(t),f32:new Float32Array(t),f16:new Uint16Array(t)};for(let[t,r]of Object.entries(this.getFlatUniformValues(e)))this._writeLeafValue(i,t,r);return new Uint8Array(t,0,this.layout.byteLength)}_flattenCompositeValue(e,t,i,r){if(void 0!==r){var a;if("string"==typeof i||this.layout.fields[t]){e[t]=r;return}if(Array.isArray(i)){let s=i[0],a=i[1];if(Array.isArray(s))throw Error(`Nested arrays are not supported for ${t}`);if("string"==typeof s&&o(r))return void this._flattenPackedArray(e,t,s,a,r);if(!Array.isArray(r))return void n.R.warn(`Unsupported uniform array value for ${t}:`,r)();for(let i=0;i<Math.min(r.length,a);i++){let n=r[i];void 0!==n&&this._flattenCompositeValue(e,`${t}[${i}]`,s,n)}return}if((0,s.WC)(i)&&(a=r)&&"object"==typeof a&&!Array.isArray(a)&&!ArrayBuffer.isView(a)){for(let[n,s]of Object.entries(r)){if(void 0===s)continue;let r=`${t}.${n}`;this._flattenCompositeValue(e,r,i[n],s)}return}n.R.warn(`Unsupported uniform value for ${t}:`,r)()}}_flattenPackedArray(e,t,i,r,n){let o=(0,s.jV)(i,this.layout.layout).components;for(let i=0;i<r;i++){var a,l,u;let r=i*o;if(r>=n.length)break;1===o?e[`${t}[${i}]`]=Number(n[r]):e[`${t}[${i}]`]=(a=n,l=r,u=r+o,Array.prototype.slice.call(a,l,u))}}_writeLeafValue(e,t,i){let r=this.layout.fields[t];if(!r)return void n.R.warn(`Uniform ${t} not found in layout`)();let{type:s,components:o,columns:a,rows:l,offset:u,columnStride:c}=r,h=e[s];if(1===o){h[u]=Number(i);return}if(1===a){for(let e=0;e<o;e++)h[u+e]=Number(i[e]??0);return}let d=0;for(let e=0;e<a;e++){let t=u+e*c;for(let e=0;e<l;e++)h[t+e]=Number(i[d++]??0)}}}class c{device;uniformBlocks=new Map;shaderBlockLayouts=new Map;shaderBlockWriters=new Map;uniformBuffers=new Map;constructor(e,t){for(let[i,r]of(this.device=e,Object.entries(t))){let t=(0,s.Pr)(r.uniformTypes??{},{layout:r.layout??("webgpu"===e.type?"wgsl-uniform":"std140")}),n=new u(t);this.shaderBlockLayouts.set(i,t),this.shaderBlockWriters.set(i,n);let o=new a({name:i});o.setUniforms(n.getFlatUniformValues(r.defaultUniforms||{})),this.uniformBlocks.set(i,o)}}destroy(){for(let e of this.uniformBuffers.values())e.destroy()}setUniforms(e,t){for(let[t,i]of Object.entries(e)){let e=this.shaderBlockWriters.get(t),r=e?.getFlatUniformValues(i||{});this.uniformBlocks.get(t)?.setUniforms(r||{})}this.updateUniformBuffers(t)}getUniformBufferByteLength(e){return Math.max(this.shaderBlockLayouts.get(e)?.byteLength||0,1024)}getUniformBufferData(e){let t=this.uniformBlocks.get(e)?.getAllUniforms()||{},i=this.shaderBlockWriters.get(e);return i?.getData(t)||new Uint8Array(0)}createUniformBuffer(e,t){t&&this.setUniforms(t);let i=this.getUniformBufferByteLength(e),n=this.device.createBuffer({usage:r.h.UNIFORM|r.h.COPY_DST,byteLength:i}),s=this.getUniformBufferData(e);return n.write(s),n}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){let t=this.getUniformBufferByteLength(e),i=this.device.createBuffer({usage:r.h.UNIFORM|r.h.COPY_DST,byteLength:t});this.uniformBuffers.set(e,i)}return this.uniformBuffers.get(e)}updateUniformBuffers(e){let t=!1;for(let i of this.uniformBlocks.keys()){let r=this.updateUniformBuffer(i,e);t||=r}return t&&n.R.log(3,`UniformStore.updateUniformBuffers(): ${t}`)(),t}updateUniformBuffer(e,t){let i=this.uniformBlocks.get(e),r=this.uniformBuffers.get(e),s=!1;if(r&&i?.needsRedraw){s||=i.needsRedraw;let o=this.getUniformBufferData(e);if((r=this.uniformBuffers.get(e))&&(t?this.device.writeBufferViaCommandEncoder(t,r,o):r.write(o)),n.R.level>=4){let t=this.uniformBlocks.get(e)?.getAllUniforms();n.R.log(4,`Writing to uniform buffer ${String(e)}`,o,t)()}}return s}}},40323:(e,t,i)=>{"use strict";function r(e,t){if(!e)throw Error(t||"deck.gl: assertion failed.")}i.d(t,{A:()=>r})},40978:(e,t,i)=>{"use strict";i.d(t,{K:()=>k});var r=i(21370),n=i(88459),s=i(74225),o=i(46446),a=i(29101),l=i(40308),u=i(91963),c=i(47882),h=i(22839),d=i(712),f=i(51153);class p extends f.F{width;height;updateTimestamp;get[Symbol.toStringTag](){return"ExternalTexture"}constructor(e,t){super(e,t,p.defaultProps);let i=this.props.source?e.getExternalImageSize(this.props.source):null;this.width=this.props.width||i?.width||0,this.height=this.props.height||i?.height||0,this.updateTimestamp=e.incrementTimestamp()}static defaultProps={...f.F.defaultProps,source:void 0,width:0,height:0,colorSpace:"srgb",sampler:{}}}var g=i(25837),m=i(15821),v=i(79241),y=i(37114),b=i(46740),_=i(37808),x=i(3905);class w{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||(0,x.L)("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&h.h.INDEX))throw Error("Index buffer must have INDEX usage")}destroy(){for(let e of(this.indices?.destroy(),Object.values(this.attributes)))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}}let P="__debugFramebufferState";function S(e,t){if(!e)return t;let i=Number.parseInt(e,10);return Number.isFinite(i)?i:t}function C(e,t,i){if(e===t)return!0;if(!i||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!C(e[r],t[r],i-1))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n of r)if(!t.hasOwnProperty(n)||!C(e[n],t[n],i-1))return!1;return!0}return!1}var E=i(12522);class L{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return(0,E.TC)(e)}mergeBufferLayouts(e,t){let i=[...e];for(let e of t){let t=i.findIndex(t=>t.name===e.name);t<0?i.push(e):i[t]=e}return i}}var A=i(43863),T=i(7617),M=i(32420);function I(e){return null!==e&&"object"==typeof e&&"resolveTextureBinding"in e&&"function"==typeof e.resolveTextureBinding}let R="render pipeline initialization failed",O=["stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8"];class k{static defaultProps={...r.r.defaultProps,source:void 0,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],plugins:[],geometry:null,indexBuffer:null,indexCount:void 0,firstVertex:0,firstIndex:0,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:v._P.getDefaultShaderAssembler("glsl"),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexCount;firstVertex;firstIndex;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_dynamicIndexBufferSource=null;_dynamicAttributeBufferSources={};_colorAttachmentFormats;_depthStencilAttachmentFormat;_pipelineNeedsUpdate="newly created";_needsRedraw="initializing";_drawBlockedReason=!1;_destroyed=!1;_vertexCountSet=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return"Model"}toString(){return`Model(${this.id})`}constructor(e,t){let i=k.defaultProps.shaderAssembler,r=void 0!==t.vertexCount;this.props={...k.defaultProps,...t,shaderAssembler:t.shaderAssembler??(B(i,e.info.shadingLanguage)?i:v._P.getDefaultShaderAssembler(e.info.shadingLanguage))},this._vertexCountSet=r,t=this.props,this.id=t.id||(0,x.L)("model"),this.device=e,Object.assign(this.userData,t.userData),this.material=t.material||null;let a=function(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,limits:e.limits,features:e.features}}(e),l=(0,y.r)(this.props.plugins,a.shaderLanguage),u=Object.fromEntries((0,y.K)(this.props.modules,l.modules).map(e=>[e.name,e])),c=t.shaderInputs||new T.l(u,{disableWarnings:this.props.disableWarnings});t.shaderInputs&&l.modules.length>0&&c.addModules(l.modules),this.setShaderInputs(c);let h=(0,A.jY)(this.props.modules,c.getModules()),d={...l.defines,...this.props.defines};if("webgl"===this.device.type&&(this.props._uniformBlockLayouts=(0,A._R)(h)),this.props.shaderLayout=(0,A.Y$)(this.props.shaderLayout,h)||null,"webgpu"===this.device.type&&this.props.source){let t=this.props.shaderAssembler;(0,n.v)(B(t,"wgsl"));let{source:i,getUniforms:r,bindingTable:s,shaderLayout:o}=t.assembleWGSLShader({platformInfo:a,...this.props,modules:h,defines:d,pluginInjections:l.injections,pluginVertexInputs:l.vertexInputs,pluginVaryings:l.varyings});this.source=i,this._getModuleUniforms=r,this._bindingTable=s;let u=function(e,t){return e&&0!==Object.keys(t).length?{...e,attributes:e.attributes.map(e=>{let i=e.name.startsWith("_luma_")?e.name.slice(6):null;return i&&t[i]?{...e,name:i}:e})}:e}(o??e.getShaderLayout?.(this.source),l.vertexInputs),c=(0,A.He)(this.props.shaderLayout,u,Object.keys(l.vertexInputs));this.props.shaderLayout=(0,A.Y$)(c||null,h)||null}else{let e=this.props.shaderAssembler;(0,n.v)(B(e,"glsl"));let{vs:t,fs:i,getUniforms:r}=e.assembleGLSLShaderPair({platformInfo:a,...this.props,modules:h,defines:d,pluginInjections:l.injections,pluginVertexInputs:l.vertexInputs,pluginVaryings:l.varyings});this.vs=t,this.fs=i,this._getModuleUniforms=r,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.indexCount=this.props.indexCount,this.firstVertex=this.props.firstVertex,this.firstIndex=this.props.firstIndex,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,this._colorAttachmentFormats=this.props.colorAttachmentFormats,this._depthStencilAttachmentFormat=this.props.depthStencilAttachmentFormat,t.geometry&&this.setGeometry(t.geometry),this.pipelineFactory=t.pipelineFactory||s.N.getDefaultPipelineFactory(this.device),this.shaderFactory=t.shaderFactory||o.g.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),"isInstanced"in t&&(this.isInstanced=t.isInstanced),t.instanceCount&&this.setInstanceCount(t.instanceCount),t.vertexCount&&this.setVertexCount(t.vertexCount),t.indexBuffer&&this.setIndexBuffer(t.indexBuffer),t.attributes&&this.setAttributes(t.attributes),t.constantAttributes&&this.setConstantAttributes(t.constantAttributes),t.bindings&&this.setBindings(t.bindings),t.transformFeedback&&(this.transformFeedback=t.transformFeedback)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),this._destroyed=!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw("contents of bound textures or buffers updated");let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(e){this._syncDynamicBuffers(),this.updateShaderInputs(e),this.material?.updateShaderInputs(e),this.pipeline=this._updatePipeline()}draw(e){let t;if(this._drawBlockedReason&&!this._pipelineNeedsUpdate)return a.R.info(2,`>>> DRAWING ABORTED ${this.id}: ${this._drawBlockedReason}`)(),!1;let i=this._areBindingsLoading();if(i)return a.R.info(2,`>>> DRAWING ABORTED ${this.id}: ${i} not loaded`)(),!1;this._syncAttachmentFormats(e);try{e.pushDebugGroup(`${this}.predraw(${e})`),"webgpu"===this.device.type?(this.updateShaderInputs(),this.material?.updateShaderInputs(),this._syncDynamicBuffers(),this.pipeline=this._updatePipeline()):this.predraw(this.device.commandEncoder)}finally{e.popDebugGroup()}let r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored)a.R.info(2,`>>> DRAWING ABORTED ${this.id}: ${R}`)(),t=!1;else{let i=this.vertexArray.getDrawValidationError();if(i)a.R.info(2,`>>> DRAWING ABORTED ${this.id}: ${i}`)(),this._drawBlockedReason=i,t=!1;else{let i=this._getCurrentShaderLayout(),r=this._getBindings(i),n=this._getBindGroups(i,r),{indexBuffer:s}=this.vertexArray,o=s?this.indexCount??(this._vertexCountSet?this.vertexCount:s.byteLength/("uint32"===s.indexType?4:2)):void 0;e.setPipeline(this.pipeline),e.setBindings(n,{_bindGroupCacheKeys:this._getBindGroupCacheKeys()}),e.setVertexArray(this.vertexArray),t=!0===this.isInstanced&&0===this.instanceCount||e.draw({isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.isInstanced?this.instanceCount:void 0,indexCount:o,firstVertex:this.firstVertex,firstIndex:this.firstIndex,transformFeedback:this.transformFeedback||void 0,uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),t?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):r?(this._needsRedraw=R,this._drawBlockedReason=R):this._drawBlockedReason?this._needsRedraw=this._drawBlockedReason:this._needsRedraw="waiting for resource initialization",t}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&function(e,t){if(t instanceof w)return t;let i=(0,_.C)(t),r=function(e,t){if(!t.indices)return;let i=t.indices.value;return e.createBuffer({usage:h.h.INDEX,data:i})}(e,i),{attributes:n,bufferLayout:s}=function(e,t){let i={};for(let[r,n]of Object.entries(t.attributes)){let s=t.bufferLayout.find(e=>e.name===r)?.name||(0,b.l)(r);n&&(i[s]=e.createBuffer({data:n.value,id:`${r}-buffer`}))}return{attributes:i,bufferLayout:t.bufferLayout,vertexCount:t.vertexCount}}(e,i);return new w({topology:i.topology||"triangle-list",bufferLayout:s,vertexCount:i.vertexCount,indices:r,attributes:n})}(this.device,e);if(t){this.setTopology(t.topology||"triangle-list");let e=new L(this.bufferLayout);this.bufferLayout=e.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){let t=new L(this.bufferLayout),i=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e;!C(i,this.bufferLayout,-1)&&(this.bufferLayout=i,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry))}setParameters(e){C(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setInstanceCount(e){this.instanceCount=e,void 0===this.isInstanced&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw("instanceCount")}setVertexCount(e){this.vertexCount=e,this._vertexCountSet=!0,this.setNeedsRedraw("vertexCount")}setIndexCount(e){this.indexCount=e,this.setNeedsRedraw("indexCount")}setDrawOffsets({firstVertex:e,firstIndex:t}){this.firstVertex=e,this.firstIndex=t,this.setNeedsRedraw("drawOffsets")}setShaderInputs(e){for(let[t,i]of(this.shaderInputs=e,this._uniformStore=new l.K(this.device,this.shaderInputs.modules),Object.entries(this.shaderInputs.modules)))if((0,A.fX)(i)&&!this.material?.ownsModule(t)){let e=this._uniformStore.getManagedUniformBuffer(t);this.bindings[`${t}Uniforms`]=e}this.setNeedsRedraw("shaderInputs")}setMaterial(e){this.material=e,this.setNeedsRedraw("material")}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw("shaderInputs")}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw("bindings")}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw("transformFeedback")}setIndexBuffer(e){let t=e instanceof M.kL?e.buffer:e;this.indexBuffer=t,this._dynamicIndexBufferSource=e instanceof M.kL?{source:e,generation:e.generation}:null,this.vertexArray.setIndexBuffer(t),this.setNeedsRedraw("indexBuffer")}setAttributes(e,t){this._drawBlockedReason=!1;let i=t?.disableWarnings??this.props.disableWarnings;e.indices&&a.R.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=function(e,t){let i=(0,E.Lv)(e),r=t.slice();return r.sort((e,t)=>(0,E.Ef)((0,E.TC)(e).map(e=>i[e]))-(0,E.Ef)((0,E.TC)(t).map(e=>i[e]))),r}(this.pipeline.shaderLayout,this.bufferLayout);let r=new L(this.bufferLayout);for(let[t,n]of Object.entries(e)){let e=n instanceof M.kL?n.buffer:n,s=r.getBufferLayout(t);if(!s){i||a.R.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let o=r.getAttributeNamesForBuffer(s),l=!1;for(let t of o){let r=this._attributeInfos[t];if(r){let t="webgpu"===this.device.type?this.vertexArray.getBufferSlot(r.bufferName):r.location;if(null===t){i||a.R.warn(`Model(${this.id}): Missing vertex array slot for buffer "${r.bufferName}".`)();continue}this.vertexArray.setBuffer(t,e),n instanceof M.kL?this._dynamicAttributeBufferSources[t]={source:n,generation:n.generation}:delete this._dynamicAttributeBufferSources[t],l=!0}}l||i||a.R.warn(`Model(${this.id}): Ignoring buffer "${e.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw("attributes")}setConstantAttributes(e,t){for(let[i,r]of Object.entries(e)){let e=this._attributeInfos[i];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||a.R.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${i}"`)()}this.setNeedsRedraw("constants")}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(I(e)&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(I(e)&&!e.isReady)return e.id;return!1}_getBindings(e=this._getCurrentShaderLayout()){let t={};for(let[i,r]of Object.entries(this.bindings)){let n=function(e,t,i){if(I(t)){let r=function(e,t,i){let r=(0,u.Jc)(e,t,{ignoreWarnings:!0});return r?.type==="texture"||r?.type==="external-texture"?r:0===e.bindings.length&&i?.fallbackGroup!==void 0?{type:"texture",name:t,group:i.fallbackGroup,location:0}:null}(i,e,{fallbackGroup:0});return r?t.resolveTextureBinding(r):null}return t instanceof M.kL?t.buffer:(0,M.Hd)(t)?(0,M.j8)(t):t}(i,r,e);n&&(t[i]=n)}return t}_getBindGroups(e=this._getCurrentShaderLayout(),t=this._getBindings(e)){let i=e.bindings.length?(0,u.gO)(e,t):{0:t};if(!this.material)return i;for(let[t,r]of Object.entries(this.material.getBindingsByGroup(e))){let e=Number(t);i[e]={...i[e]||{},...r}}return i}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let t of(this._dynamicIndexBufferSource&&(e=Math.max(e,this._dynamicIndexBufferSource.source.updateTimestamp)),Object.values(this._dynamicAttributeBufferSources)))e=Math.max(e,t.source.updateTimestamp);for(let t of Object.values(this.bindings))t instanceof c.X?e=Math.max(e,t.texture.updateTimestamp):t instanceof h.h||t instanceof d.g||t instanceof p||t instanceof M.kL?e=Math.max(e,t.updateTimestamp):I(t)?e=t.isReady?Math.max(e,t.updateTimestamp):1/0:(0,M.Hd)(t)&&(e=Math.max(e,(t.buffer instanceof M.kL,t.buffer.updateTimestamp)));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))this.pipeline.shaderLayout.attributes.find(t=>t.name===e)||"positions"===e||delete t[e];this.vertexCount=e.vertexCount,this._vertexCountSet=!0,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw("geometry attributes")}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this._drawBlockedReason=!1,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(a.R.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let i=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:"vertex",source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=i:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"fragment",source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,colorAttachmentFormats:this._colorAttachmentFormats,depthStencilAttachmentFormat:this._depthStencilAttachmentFormat,topology:this.topology,parameters:this.parameters,bindGroups:void 0,vs:i,fs:r}),this._attributeInfos=(0,g.P)(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=a.R.level>3?0:1e4;a.R.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,a.R.group(2,`>>> DRAWING MODEL ${this.id}`,{collapsed:a.R.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=function(e,t){let i={},r="Values";if(0===e.attributes.length&&!e.varyings?.length)return{"No attributes or varyings":{[r]:"N/A"}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;i[`in ${e}`]={[r]:t.stepMode||"vertex"}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;i[`out ${e}`]={[r]:JSON.stringify(t)}}return i}(this.pipeline.shaderLayout,this.id);a.R.table(2,e)();let t=this.shaderInputs.getDebugTable();a.R.table(2,t)();let i=this._getAttributeDebugTable();a.R.table(2,this._attributeInfos)(),a.R.table(2,i)(),a.R.groupEnd(2)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let i=e.props.framebuffer;!function(e,t,i){var r;if("webgl"!==e.device.type)return;let n=(r=e.device,r.userData[P]||={flushing:!1,queuedFramebuffers:[]},r.userData[P]);if(!n.flushing){if(function(e){let t=e.props.framebuffer;return!t||null===t.handle}(e))return function(e,t,i){if(0===i.queuedFramebuffers.length)return;let{gl:r}=e.device,n=r.getParameter(36010),s=r.getParameter(36006),[o,a]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),l=S(t.top,8),u=S(t.left,8);i.flushing=!0;try{for(let e of i.queuedFramebuffers){let[i,n,s,c,h]=function(e){let{framebuffer:t,targetWidth:i,targetHeight:r,topPx:n,leftPx:s,minimap:o}=e,a=o?Math.max(Math.floor(i/4),1):i,l=o?Math.max(Math.floor(r/4),1):r,u=Math.min(a/t.width,l/t.height),c=Math.max(Math.floor(t.width*u),1),h=Math.max(Math.floor(t.height*u),1),d=Math.max(r-n-h,0);return[s,d,s+c,d+h,h]}({framebuffer:e,targetWidth:o,targetHeight:a,topPx:l,leftPx:u,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,i,n,s,c,16384,9728),l+=h+8}}finally{r.bindFramebuffer(36008,n),r.bindFramebuffer(36009,s),i.flushing=!1}}(e,i,n);t&&"colorAttachments"in t&&null!==t.handle&&!n.queuedFramebuffers.includes(t)&&n.queuedFramebuffers.push(t)}}(e,i,{id:i?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,i]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[i.location];e[i.location]={name:t,type:i.shaderType,values:r?this._getBufferOrConstantValues(r,i.bufferDataType):"null"}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,i="uint32"===t.indexType?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:"indices",type:t.indexType,values:i.toString()}}return e}_getBufferOrConstantValues(e,t){let i=m.r.getTypedArrayConstructor(t);return(e instanceof h.h?new i(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[i,r]of Object.entries(e))this.material.ownsBinding(i)||(t[i]=r);return t}_getCurrentShaderLayout(){return this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]}}_syncDynamicBuffers(){if(this._dynamicIndexBufferSource&&this._dynamicIndexBufferSource.generation!==this._dynamicIndexBufferSource.source.generation){let e=this._dynamicIndexBufferSource.source.buffer;this.indexBuffer=e,this.vertexArray.setIndexBuffer(e),this._dynamicIndexBufferSource.generation=this._dynamicIndexBufferSource.source.generation,this.setNeedsRedraw("dynamic index buffer")}for(let[e,t]of Object.entries(this._dynamicAttributeBufferSources))t.generation!==t.source.generation&&(this.vertexArray.setBuffer(Number(e),t.source.buffer),t.generation=t.source.generation,this.setNeedsRedraw("dynamic attribute buffer"))}_syncAttachmentFormats(e){var t;if("webgpu"!==this.device.type)return;let i=e.framebuffer||e.props.framebuffer,r=e.props,n=r.colorAttachmentFormats??i?.colorAttachments?.map(e=>{var t;return(t=e?.texture?.format)&&!z(t)?t:null}),s=!1===r.depthStencilAttachmentFormat?void 0:r.depthStencilAttachmentFormat??((t=i?.depthStencilAttachment?.texture?.format)&&z(t)?t:void 0);C(this._colorAttachmentFormats,n,1)&&this._depthStencilAttachmentFormat===s||(this._colorAttachmentFormats=n,this._depthStencilAttachmentFormat=s,this._setPipelineNeedsUpdate("attachment formats"))}}function B(e,t){return(void 0===e.shaderLanguage||e.shaderLanguage===t)&&("glsl"===t?"assembleGLSLShaderPair"in e&&"function"==typeof e.assembleGLSLShaderPair:"assembleWGSLShader"in e&&"function"==typeof e.assembleWGSLShader)}function z(e){return O.includes(e)}},41098:(e,t,i)=>{"use strict";i.d(t,{X:()=>r});let r=`\
struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`},41694:(e,t,i)=>{"use strict";i.d(t,{A:()=>I});var r=i(65302),n=i(34537),s=i(66801),o=i(49500),a=i(2389),l=i(41098),u=i(18075);let c={name:"phongMaterial",firstBindingSlot:0,bindingLayout:[{name:"phongMaterial",group:3}],dependencies:[a.x,o.$n],source:l.X,vs:u.X,fs:u.l,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...c.defaultUniforms,...e})};var h=i(97789),d=i(6431),f=i(90460),p=i(40978),g=i(46740),m=i(37808),v=i(77397),y=i(58181);class b extends g.V{constructor(e){let{indices:t,attributes:i}=function(e){let{radius:t,height:i=1,nradial:r=10}=e,{vertices:n}=e;n&&(v.A.assert(n.length>=r),n=n.flatMap(e=>[e[0],e[1]]),(0,y.UD)(n,y.rJ.COUNTER_CLOCKWISE));let s=i>0,o=r+1,a=s?3*o+1:r,l=2*Math.PI/r,u=new Uint16Array(s?3*r*2:0),c=new Float32Array(3*a),h=new Float32Array(3*a),d=0;if(s){for(let e=0;e<o;e++){let s=e*l,o=e%r,a=Math.sin(s),u=Math.cos(s);for(let e=0;e<2;e++)c[d+0]=n?n[2*o]:u*t,c[d+1]=n?n[2*o+1]:a*t,c[d+2]=(.5-e)*i,h[d+0]=n?n[2*o]:u,h[d+1]=n?n[2*o+1]:a,d+=3}c[d+0]=c[d-3],c[d+1]=c[d-2],c[d+2]=c[d-1],d+=3}for(let e=+!s;e<o;e++){let s=Math.floor(e/2)*Math.sign(.5-e%2),o=s*l,a=(s+r)%r,u=Math.sin(o),f=Math.cos(o);c[d+0]=n?n[2*a]:f*t,c[d+1]=n?n[2*a+1]:u*t,c[d+2]=i/2,h[d+2]=1,d+=3}if(s){let e=0;for(let t=0;t<r;t++)u[e++]=2*t+0,u[e++]=2*t+2,u[e++]=2*t+0,u[e++]=2*t+1,u[e++]=2*t+1,u[e++]=2*t+3}return{indices:u,attributes:{POSITION:{size:3,value:c},NORMAL:{size:3,value:h}}}}(e);super({...e,topology:"line-list",indices:t,attributes:i})}}let _=`\
layout(std140) uniform columnUniforms {
  float radius;
  float angle;
  vec2 offset;
  bool extruded;
  bool stroked;
  bool isStroke;
  float coverage;
  float elevationScale;
  float edgeDistance;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int radiusUnits;
  highp int widthUnits;
} column;
`,x={name:"column",source:`\
struct ColumnUniforms {
  radius: f32,
  angle: f32,
  offset: vec2<f32>,
  extruded: f32,
  stroked: f32,
  isStroke: f32,
  coverage: f32,
  elevationScale: f32,
  edgeDistance: f32,
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  radiusUnits: i32,
  widthUnits: i32,
};

@group(0) @binding(auto) var<uniform> column: ColumnUniforms;
`,vs:_,fs:_,uniformTypes:{radius:"f32",angle:"f32",offset:"vec2<f32>",extruded:"f32",stroked:"f32",isStroke:"f32",coverage:"f32",elevationScale:"f32",edgeDistance:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",radiusUnits:"i32",widthUnits:"i32"}},w=`\
struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) instancePositions: vec3<f32>,
  @location(3) instancePositions64Low: vec3<f32>,
  @location(4) instanceElevations: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instanceStrokeWidths: f32
};

fn getRotationMatrix(angle: f32) -> mat2x2<f32> {
  let s = sin(angle);
  let c = cos(angle);
  return mat2x2<f32>(
    vec2<f32>(c, s),
    vec2<f32>(-s, c)
  );
}

fn getOffset(
  positions: vec3<f32>,
  strokeOffsetRatio: f32,
  dotRadius: f32,
  rotationMatrix: mat2x2<f32>
) -> vec3<f32> {
  var offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
  if (column.radiusUnits == UNIT_METERS) {
    offset = project_size_vec2(offset);
  } else if (column.radiusUnits == UNIT_PIXELS) {
    offset = project_pixel_size_vec2(offset);
  }
  return vec3<f32>(offset, 0.0);
}
`,P=`\
${w}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  let lightColor = lighting_getLightColor2(
    baseColor.rgb,
    project.cameraPosition,
    geometry.position.xyz,
    geometry.normal
  );

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(
    select(baseColor.rgb, lightColor, column.extruded > 0.5 && !isStroke),
    baseColor.a * layer.opacity
  );

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);
  return deckgl_premultiplied_alpha(varyings.color);
}
`,S=`\
${w}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) cameraPosition: vec3<f32>,
  @location(2) positionCommonspace: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(baseColor.rgb, baseColor.a * layer.opacity);
  varyings.cameraPosition = project.cameraPosition;
  varyings.positionCommonspace = projected.commonPosition;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);

  var fragColor = varyings.color;
  if (column.extruded > 0.5 && column.isStroke < 0.5) {
    // WebGPU's screen-space Y axis reverses the derivative orientation used by GLSL flat shading.
    let normal = normalize(cross(dpdy(varyings.positionCommonspace.xyz), dpdx(varyings.positionCommonspace.xyz)));
    fragColor = vec4<f32>(
      lighting_getLightColor2(
        varyings.color.rgb,
        varyings.cameraPosition,
        varyings.positionCommonspace.xyz,
        normal
      ),
      varyings.color.a
    );
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,C=`#version 300 es
#define SHADER_NAME column-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec3 instancePositions;
in float instanceElevations;
in vec3 instancePositions64Low;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in float instanceStrokeWidths;
out vec4 vColor;
#ifdef FLAT_SHADING
out vec3 cameraPosition;
out vec4 position_commonspace;
#endif
void main(void) {
geometry.worldPosition = instancePositions;
vec4 color = column.isStroke ? instanceLineColors : instanceFillColors;
mat2 rotationMatrix = mat2(cos(column.angle), sin(column.angle), -sin(column.angle), cos(column.angle));
float elevation = 0.0;
float strokeOffsetRatio = 1.0;
if (column.extruded) {
elevation = instanceElevations * (positions.z + 1.0) / 2.0 * column.elevationScale;
} else if (column.stroked) {
float widthPixels = clamp(
project_size_to_pixel(instanceStrokeWidths * column.widthScale, column.widthUnits),
column.widthMinPixels, column.widthMaxPixels) / 2.0;
float halfOffset = project_pixel_size(widthPixels) / project_size(column.edgeDistance * column.coverage * column.radius);
if (column.isStroke) {
strokeOffsetRatio -= sign(positions.z) * halfOffset;
} else {
strokeOffsetRatio -= halfOffset;
}
}
float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
float dotRadius = column.radius * column.coverage * shouldRender;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
vec3 centroidPosition64Low = instancePositions64Low;
vec2 offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
if (column.radiusUnits == UNIT_METERS) {
offset = project_size(offset);
} else if (column.radiusUnits == UNIT_PIXELS) {
offset = project_pixel_size(offset);
}
vec3 pos = vec3(offset, 0.);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);
geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (column.extruded && !column.isStroke) {
#ifdef FLAT_SHADING
cameraPosition = project.cameraPosition;
position_commonspace = geometry.position;
vColor = vec4(color.rgb, color.a * layer.opacity);
#else
vec3 lightColor = lighting_getLightColor(color.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, color.a * layer.opacity);
#endif
} else {
vColor = vec4(color.rgb, color.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,E=`#version 300 es
#define SHADER_NAME column-layer-fragment-shader
precision highp float;
out vec4 fragColor;
in vec4 vColor;
#ifdef FLAT_SHADING
in vec3 cameraPosition;
in vec4 position_commonspace;
#endif
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
#ifdef FLAT_SHADING
if (column.extruded && !column.isStroke && !bool(picking.isActive)) {
vec3 normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
fragColor.rgb = lighting_getLightColor(vColor.rgb, cameraPosition, position_commonspace.xyz, normal);
}
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,L=[0,0,0,255],A={name:"geometry",stepMode:"vertex",byteStride:24,attributes:[{attribute:"positions",format:"float32x3",byteOffset:0},{attribute:"normals",format:"float32x3",byteOffset:12}]},T={diskResolution:{type:"number",min:4,value:20},vertices:null,radius:{type:"number",min:0,value:1e3},angle:{type:"number",value:0},offset:{type:"array",value:[0,0]},coverage:{type:"number",min:0,max:1,value:1},elevationScale:{type:"number",min:0,value:1},radiusUnits:"meters",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,extruded:!0,wireframe:!1,filled:!0,stroked:!1,flatShading:!1,getPosition:{type:"accessor",value:e=>e.position},getFillColor:{type:"accessor",value:L},getLineColor:{type:"accessor",value:L},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0,getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class M extends r.A{getShaders(){let e={},{flatShading:t}=this.props;return t&&(e.FLAT_SHADING=1),super.getShaders({vs:C,fs:E,source:t?S:P,defines:e,modules:[n.A,s.A,t?c:h.J,d.Ay,x]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceElevations:{size:1,transition:!0,accessor:"getElevation"},instanceFillColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getFillColor",defaultValue:L},instanceLineColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getLineColor",defaultValue:L},instanceStrokeWidths:{size:1,accessor:"getLineWidth",transition:!0}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,n=r.extensionsChanged||t.flatShading!==i.flatShading;n&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),this.getAttributeManager().invalidateAll());let s=this.getNumInstances();this.state.fillModel.setInstanceCount(s),this.state.strokeModel.setInstanceCount(s),this.state.wireframeModel.setInstanceCount(s),(n||t.diskResolution!==i.diskResolution||t.vertices!==i.vertices||t.extruded!==i.extruded||t.stroked!==i.stroked)&&this._updateGeometry(t)}getGeometry(e,t,i){let r=new b({radius:1,height:2*!!i,vertices:t,nradial:e}),n=0;if(t)for(let i=0;i<e;i++){let r=t[i];n+=Math.sqrt(r[0]*r[0]+r[1]*r[1])/e}else n=1;return this.setState({edgeDistance:Math.cos(Math.PI/e)*n}),r}_getModels(){let e=this.getShaders(),t=[...this.getAttributeManager().getBufferLayouts(),A],i=new p.K(this.context.device,{...e,id:`${this.props.id}-fill`,bufferLayout:t,isInstanced:!0}),r=new p.K(this.context.device,{...e,id:`${this.props.id}-stroke`,bufferLayout:t,isInstanced:!0}),n=new p.K(this.context.device,{...e,id:`${this.props.id}-wireframe`,bufferLayout:t,isInstanced:!0});return{fillModel:i,strokeModel:r,wireframeModel:n,models:[n,i,r]}}_updateGeometry({diskResolution:e,vertices:t,extruded:i,stroked:r}){let n=this.getGeometry(e,t,i||r),s=n.attributes.POSITION,o=n.attributes.NORMAL;if(this._setFillGeometry(new g.V({topology:"triangle-strip",attributes:{POSITION:s,NORMAL:o}})),!i&&r){let t=s.value.length/3;this._setStrokeGeometry(new g.V({topology:"triangle-strip",vertexCount:t-e-1,attributes:{POSITION:s,NORMAL:o}}))}i&&this._setWireframeGeometry(n)}_setFillGeometry(e){let t=(0,m.C)(e,{attributes:["POSITION","NORMAL"]});this.state.fillModel.setGeometry(t)}_setStrokeGeometry(e){let t=(0,m.C)(e,{attributes:["POSITION","NORMAL"]});this.state.strokeModel.setGeometry(t)}_setWireframeGeometry(e){let t=(0,m.C)(e,{attributes:["POSITION","NORMAL"]}),i=this.state.wireframeModel;i.setGeometry(t),i.setTopology("line-list")}draw({uniforms:e}){let{lineWidthUnits:t,lineWidthScale:i,lineWidthMinPixels:r,lineWidthMaxPixels:n,radiusUnits:s,elevationScale:o,extruded:a,filled:l,stroked:u,wireframe:c,offset:h,coverage:d,radius:p,angle:g}=this.props,m=this.state.fillModel,v=this.state.strokeModel,y=this.state.wireframeModel,{edgeDistance:b}=this.state,_={radius:p,angle:g/180*Math.PI,offset:h,extruded:a,stroked:u,coverage:d,elevationScale:o,edgeDistance:b,radiusUnits:f.p5[s],widthUnits:f.p5[t],widthScale:i,widthMinPixels:r,widthMaxPixels:n};a&&c&&(y.shaderInputs.setProps({column:{..._,isStroke:!0}}),y.draw(this.context.renderPass)),l&&(m.shaderInputs.setProps({column:{..._,isStroke:!1}}),m.draw(this.context.renderPass)),!a&&u&&(v.shaderInputs.setProps({column:{..._,isStroke:!0}}),v.draw(this.context.renderPass))}}M.layerName="ColumnLayer",M.defaultProps=T;let I=M},42466:(e,t,i)=>{"use strict";i.d(t,{I:()=>n});var r=i(11094);class n{buffer;format;length;byteOffset;byteStride;constructor(e){let t=r.E.getVertexFormatInfo(e.format).byteLength,i=e.byteOffset??0,n=e.byteStride??t;if(s(e.length,"GPUDataView length"),s(i,"GPUDataView byteOffset"),s(n,"GPUDataView byteStride"),n<t)throw Error(`GPUDataView byteStride ${n} is smaller than ${e.format} byte length ${t}`);let o=0===e.length?0:(e.length-1)*n+t,a=i+o;if(!Number.isSafeInteger(o)||!Number.isSafeInteger(a))throw Error("GPUDataView byte range must use safe integers");if(a>e.buffer.byteLength)throw Error("GPUDataView exceeds its backing buffer byte length");this.buffer=e.buffer,this.format=e.format,this.length=e.length,this.byteOffset=i,this.byteStride=n}get elementByteLength(){return r.E.getVertexFormatInfo(this.format).byteLength}get byteLength(){return 0===this.length?0:(this.length-1)*this.byteStride+this.elementByteLength}}function s(e,t){if(!Number.isSafeInteger(e)||e<0)throw Error(`${t} must be a non-negative safe integer`)}},42899:(e,t,i)=>{"use strict";i.d(t,{WebGLDevice:()=>tl});var r=i(87765),n=i(29101);let s={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:0xffffffff,36005:0xffffffff,2962:519,2967:0,2963:0xffffffff,34816:519,36003:0,36004:0xffffffff,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},o=(e,t,i)=>t?e.enable(i):e.disable(i),a=(e,t,i)=>e.hint(i,t),l=(e,t,i)=>e.pixelStorei(i,t),u=(e,t,i)=>e.bindFramebuffer(36006===i?36009:36008,t),c=(e,t,i)=>{e.bindBuffer({34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[i],t)};function h(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}let d={3042:o,32773:(e,t)=>e.blendColor(...t),32777:"blendEquation",34877:"blendEquation",32969:"blendFunc",32968:"blendFunc",32971:"blendFunc",32970:"blendFunc",3106:(e,t)=>e.clearColor(...t),3107:(e,t)=>e.colorMask(...t),2884:o,2885:(e,t)=>e.cullFace(t),2929:o,2931:(e,t)=>e.clearDepth(t),2932:(e,t)=>e.depthFunc(t),2928:(e,t)=>e.depthRange(...t),2930:(e,t)=>e.depthMask(t),3024:o,35723:a,35725:(e,t)=>e.useProgram(t),36007:(e,t)=>e.bindRenderbuffer(36161,t),36389:(e,t)=>e.bindTransformFeedback?.(36386,t),34229:(e,t)=>e.bindVertexArray(t),36006:u,36010:u,34964:c,36662:c,36663:c,35053:c,35055:c,2886:(e,t)=>e.frontFace(t),33170:a,2849:(e,t)=>e.lineWidth(t),32823:o,32824:"polygonOffset",10752:"polygonOffset",35977:o,32926:o,32928:o,32938:"sampleCoverage",32939:"sampleCoverage",3089:o,3088:(e,t)=>e.scissor(...t),2960:o,2961:(e,t)=>e.clearStencil(t),2968:(e,t)=>e.stencilMaskSeparate(1028,t),36005:(e,t)=>e.stencilMaskSeparate(1029,t),2962:"stencilFuncFront",2967:"stencilFuncFront",2963:"stencilFuncFront",34816:"stencilFuncBack",36003:"stencilFuncBack",36004:"stencilFuncBack",2964:"stencilOpFront",2965:"stencilOpFront",2966:"stencilOpFront",34817:"stencilOpBack",34818:"stencilOpBack",34819:"stencilOpBack",2978:(e,t)=>e.viewport(...t),34383:o,10754:o,12288:o,12289:o,12290:o,12291:o,12292:o,12293:o,12294:o,12295:o,3333:l,3317:l,37440:l,37441:l,37443:l,3330:l,3332:l,3331:l,3314:l,32878:l,3316:l,3315:l,32877:l,framebuffer:(e,t)=>{let i=t&&"handle"in t?t.handle:t;return e.bindFramebuffer(36160,i)},blend:(e,t)=>t?e.enable(3042):e.disable(3042),blendColor:(e,t)=>e.blendColor(...t),blendEquation:(e,t)=>{e.blendEquationSeparate(..."number"==typeof t?[t,t]:t)},blendFunc:(e,t)=>{let i=t?.length===2?[...t,...t]:t;e.blendFuncSeparate(...i)},clearColor:(e,t)=>e.clearColor(...t),clearDepth:(e,t)=>e.clearDepth(t),clearStencil:(e,t)=>e.clearStencil(t),colorMask:(e,t)=>e.colorMask(...t),cull:(e,t)=>t?e.enable(2884):e.disable(2884),cullFace:(e,t)=>e.cullFace(t),depthTest:(e,t)=>t?e.enable(2929):e.disable(2929),depthFunc:(e,t)=>e.depthFunc(t),depthMask:(e,t)=>e.depthMask(t),depthRange:(e,t)=>e.depthRange(...t),dither:(e,t)=>t?e.enable(3024):e.disable(3024),derivativeHint:(e,t)=>{e.hint(35723,t)},frontFace:(e,t)=>e.frontFace(t),mipmapHint:(e,t)=>e.hint(33170,t),lineWidth:(e,t)=>e.lineWidth(t),polygonOffsetFill:(e,t)=>t?e.enable(32823):e.disable(32823),polygonOffset:(e,t)=>e.polygonOffset(...t),sampleCoverage:(e,t)=>e.sampleCoverage(t[0],t[1]||!1),scissorTest:(e,t)=>t?e.enable(3089):e.disable(3089),scissor:(e,t)=>e.scissor(...t),stencilTest:(e,t)=>t?e.enable(2960):e.disable(2960),stencilMask:(e,t)=>{let[i,r]=t=h(t)?t:[t,t];e.stencilMaskSeparate(1028,i),e.stencilMaskSeparate(1029,r)},stencilFunc:(e,t)=>{let[i,r,n,s,o,a]=t=h(t)&&3===t.length?[...t,...t]:t;e.stencilFuncSeparate(1028,i,r,n),e.stencilFuncSeparate(1029,s,o,a)},stencilOp:(e,t)=>{let[i,r,n,s,o,a]=t=h(t)&&3===t.length?[...t,...t]:t;e.stencilOpSeparate(1028,i,r,n),e.stencilOpSeparate(1029,s,o,a)},viewport:(e,t)=>e.viewport(...t)};function f(e,t,i){return void 0!==t[e]?t[e]:i[e]}let p={blendEquation:(e,t,i)=>e.blendEquationSeparate(f(32777,t,i),f(34877,t,i)),blendFunc:(e,t,i)=>e.blendFuncSeparate(f(32969,t,i),f(32968,t,i),f(32971,t,i),f(32970,t,i)),polygonOffset:(e,t,i)=>e.polygonOffset(f(32824,t,i),f(10752,t,i)),sampleCoverage:(e,t,i)=>e.sampleCoverage(f(32938,t,i),f(32939,t,i)),stencilFuncFront:(e,t,i)=>e.stencilFuncSeparate(1028,f(2962,t,i),f(2967,t,i),f(2963,t,i)),stencilFuncBack:(e,t,i)=>e.stencilFuncSeparate(1029,f(34816,t,i),f(36003,t,i),f(36004,t,i)),stencilOpFront:(e,t,i)=>e.stencilOpSeparate(1028,f(2964,t,i),f(2965,t,i),f(2966,t,i)),stencilOpBack:(e,t,i)=>e.stencilOpSeparate(1029,f(34817,t,i),f(34818,t,i),f(34819,t,i))},g={enable:(e,t)=>e({[t]:!0}),disable:(e,t)=>e({[t]:!1}),pixelStorei:(e,t,i)=>e({[t]:i}),hint:(e,t,i)=>e({[t]:i}),useProgram:(e,t)=>e({35725:t}),bindRenderbuffer:(e,t,i)=>e({36007:i}),bindTransformFeedback:(e,t,i)=>e({36389:i}),bindVertexArray:(e,t)=>e({34229:t}),bindFramebuffer:(e,t,i)=>{switch(t){case 36160:return e({36006:i,36010:i});case 36009:return e({36006:i});case 36008:return e({36010:i});default:return null}},bindBuffer:(e,t,i)=>{let r={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[t];return r?e({[r]:i}):{valueChanged:!0}},blendColor:(e,t,i,r,n)=>e({32773:new Float32Array([t,i,r,n])}),blendEquation:(e,t)=>e({32777:t,34877:t}),blendEquationSeparate:(e,t,i)=>e({32777:t,34877:i}),blendFunc:(e,t,i)=>e({32969:t,32968:i,32971:t,32970:i}),blendFuncSeparate:(e,t,i,r,n)=>e({32969:t,32968:i,32971:r,32970:n}),clearColor:(e,t,i,r,n)=>e({3106:new Float32Array([t,i,r,n])}),clearDepth:(e,t)=>e({2931:t}),clearStencil:(e,t)=>e({2961:t}),colorMask:(e,t,i,r,n)=>e({3107:[t,i,r,n]}),cullFace:(e,t)=>e({2885:t}),depthFunc:(e,t)=>e({2932:t}),depthRange:(e,t,i)=>e({2928:new Float32Array([t,i])}),depthMask:(e,t)=>e({2930:t}),frontFace:(e,t)=>e({2886:t}),lineWidth:(e,t)=>e({2849:t}),polygonOffset:(e,t,i)=>e({32824:t,10752:i}),sampleCoverage:(e,t,i)=>e({32938:t,32939:i}),scissor:(e,t,i,r,n)=>e({3088:new Int32Array([t,i,r,n])}),stencilMask:(e,t)=>e({2968:t,36005:t}),stencilMaskSeparate:(e,t,i)=>e({[1028===t?2968:36005]:i}),stencilFunc:(e,t,i,r)=>e({2962:t,2967:i,2963:r,34816:t,36003:i,36004:r}),stencilFuncSeparate:(e,t,i,r,n)=>e({[1028===t?2962:34816]:i,[1028===t?2967:36003]:r,[1028===t?2963:36004]:n}),stencilOp:(e,t,i,r)=>e({2964:t,2965:i,2966:r,34817:t,34818:i,34819:r}),stencilOpSeparate:(e,t,i,r,n)=>e({[1028===t?2964:34817]:i,[1028===t?2965:34818]:r,[1028===t?2966:34819]:n}),viewport:(e,t,i,r,n)=>e({2978:[t,i,r,n]})},m=(e,t)=>e.isEnabled(t),v={3042:m,2884:m,2929:m,3024:m,32823:m,32926:m,32928:m,3089:m,2960:m,35977:m},y=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068]);function b(e,t){if(function(e){for(let t in e)return!1;return!0}(t))return;let i={};for(let r in t){let n=Number(r),s=d[r];s&&("string"==typeof s?i[s]=!0:s(e,t[r],n))}let r=e.lumaState?.cache;if(r)for(let n in i)(0,p[n])(e,t,r)}function _(e,t=s){if("number"==typeof t){let i=v[t];return i?i(e,t):e.getParameter(t)}let i=Array.isArray(t)?t:Object.keys(t),r={};for(let t of i){let i=v[t];r[t]=i?i(e,Number(t)):e.getParameter(Number(t))}return r}function x(e){return Array.isArray(e)||ArrayBuffer.isView(e)}class w{static get(e){return e.lumaState}gl;program=null;stateStack=[];enable=!0;cache=null;log;initialized=!1;constructor(e,t){this.gl=e,this.log=t?.log||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}push(e={}){this.stateStack.push({})}pop(){let e=this.stateStack[this.stateStack.length-1];b(this.gl,e),this.stateStack.pop()}trackState(e,t){if(this.cache=t?.copyState?_(e):Object.assign({},s),this.initialized)throw Error("WebGLStateTracker");for(let t in this.initialized=!0,this.gl.lumaState=this,function(e){let t=e.useProgram.bind(e);e.useProgram=function(i){let r=w.get(e);r.program!==i&&(t(i),r.program=i)}}(e),g){let i=g[t];!function(e,t,i){if(!e[t])return;let r=e[t].bind(e);e[t]=function(...t){let{valueChanged:n,oldValue:s}=i(w.get(e)._updateCache,...t);return n&&r(...t),s},Object.defineProperty(e[t],"name",{value:`${t}-to-cache`,configurable:!1})}(e,t,i)}P(e,"getParameter"),P(e,"isEnabled")}_updateCache(e){let t,i=!1,r=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(let n in e){let s=e[n],o=this.cache[n];!function(e,t){if(e===t)return!0;if(x(e)&&x(t)&&e.length===t.length){for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}return!1}(s,o)&&(i=!0,t=o,!r||n in r||(r[n]=o),this.cache[n]=s)}return{valueChanged:i,oldValue:t}}}function P(e,t){let i=e[t].bind(e);e[t]=function(t){if(void 0===t||y.has(t))return i(t);let r=w.get(e);return t in r.cache||(r.cache[t]=i(t)),r.enable?r.cache[t]:i(t)},Object.defineProperty(e[t],"name",{value:`${t}-from-cache`,configurable:!1})}function S(e){let t=e.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return t._polyfilled??=!1,t.extensions||={},e.luma=t,t}function C(e,t,i){return void 0===i[t]&&(i[t]=e.getExtension(t)||null),i[t]}function E(e,t){return/NVIDIA/i.exec(e)||/NVIDIA/i.exec(t)?"nvidia":/INTEL/i.exec(e)||/INTEL/i.exec(t)?"intel":/Apple/i.exec(e)||/Apple/i.exec(t)?"apple":/AMD/i.exec(e)||/AMD/i.exec(t)||/ATI/i.exec(e)||/ATI/i.exec(t)?"amd":/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t)?"software":"unknown"}var L=i(27832);function A(e){switch(e){case"uint8":case"unorm8":return 5121;case"sint8":case"snorm8":return 5120;case"uint16":case"unorm16":return 5123;case"sint16":case"snorm16":return 5122;case"uint32":return 5125;case"sint32":return 5124;case"float16":return 5131;case"float32":return 5126}throw Error(String(e))}let T="WEBGL_compressed_texture_s3tc",M="WEBGL_compressed_texture_s3tc_srgb",I="EXT_texture_compression_rgtc",R="EXT_texture_compression_bptc",O="EXT_render_snorm",k="EXT_color_buffer_float",B="snorm8-renderable-webgl",z="norm16-renderable-webgl",D="snorm16-renderable-webgl",F="float16-renderable-webgl",N="float32-renderable-webgl",$={"float32-renderable-webgl":{extensions:[k]},"float16-renderable-webgl":{extensions:["EXT_color_buffer_half_float"]},"rgb9e5ufloat-renderable-webgl":{extensions:["WEBGL_render_shared_exponent"]},"snorm8-renderable-webgl":{extensions:[O]},"norm16-webgl":{extensions:["EXT_texture_norm16"]},"norm16-renderable-webgl":{features:["norm16-webgl"]},"snorm16-renderable-webgl":{features:["norm16-webgl"],extensions:[O]},"float32-filterable":{extensions:["OES_texture_float_linear"]},"float16-filterable-webgl":{extensions:["OES_texture_half_float_linear"]},"texture-filterable-anisotropic-webgl":{extensions:["EXT_texture_filter_anisotropic"]},"texture-blend-float-webgl":{extensions:["EXT_float_blend"]},"texture-compression-bc":{extensions:[T,M,I,R]},"texture-compression-bc5-webgl":{extensions:[I]},"texture-compression-bc7-webgl":{extensions:[R]},"texture-compression-etc2":{extensions:["WEBGL_compressed_texture_etc"]},"texture-compression-astc":{extensions:["WEBGL_compressed_texture_astc"]},"texture-compression-etc1-webgl":{extensions:["WEBGL_compressed_texture_etc1"]},"texture-compression-pvrtc-webgl":{extensions:["WEBGL_compressed_texture_pvrtc"]},"texture-compression-atc-webgl":{extensions:["WEBGL_compressed_texture_atc"]}};function j(e,t,i){return function e(t,i,r,n){let s=$[i];if(!s||n.has(i))return!1;n.add(i);let o=(s.features||[]).every(i=>e(t,i,r,n));return n.delete(i),!!o&&(s.extensions||[]).every(e=>!!C(t,e,r))}(e,t,i,new Set)}let U={r8unorm:{gl:33321,rb:!0},r8snorm:{gl:36756,r:B},r8uint:{gl:33330,rb:!0},r8sint:{gl:33329,rb:!0},rg8unorm:{gl:33323,rb:!0},rg8snorm:{gl:36757,r:B},rg8uint:{gl:33336,rb:!0},rg8sint:{gl:33335,rb:!0},r16uint:{gl:33332,rb:!0},r16sint:{gl:33331,rb:!0},r16float:{gl:33325,rb:!0,r:F},r16unorm:{gl:33322,rb:!0,r:z},r16snorm:{gl:36760,r:D},"rgba4unorm-webgl":{gl:32854,rb:!0},"rgb565unorm-webgl":{gl:36194,rb:!0},"rgb5a1unorm-webgl":{gl:32855,rb:!0},"rgb8unorm-webgl":{gl:32849},"rgb8snorm-webgl":{gl:36758},rgba8unorm:{gl:32856},"rgba8unorm-srgb":{gl:35907},rgba8snorm:{gl:36759,r:B},rgba8uint:{gl:36220},rgba8sint:{gl:36238},bgra8unorm:{},"bgra8unorm-srgb":{},rg16uint:{gl:33338},rg16sint:{gl:33337},rg16float:{gl:33327,rb:!0,r:F},rg16unorm:{gl:33324,r:z},rg16snorm:{gl:36761,r:D},r32uint:{gl:33334,rb:!0},r32sint:{gl:33333,rb:!0},r32float:{gl:33326,r:N},rgb9e5ufloat:{gl:35901,r:"rgb9e5ufloat-renderable-webgl"},rg11b10ufloat:{gl:35898,rb:!0},rgb10a2unorm:{gl:32857,rb:!0},rgb10a2uint:{gl:36975,rb:!0},"rgb16unorm-webgl":{gl:32852,r:!1},"rgb16snorm-webgl":{gl:36762,r:!1},rg32uint:{gl:33340,rb:!0},rg32sint:{gl:33339,rb:!0},rg32float:{gl:33328,rb:!0,r:N},rgba16uint:{gl:36214,rb:!0},rgba16sint:{gl:36232,rb:!0},rgba16float:{gl:34842,r:F},rgba16unorm:{gl:32859,rb:!0,r:z},rgba16snorm:{gl:36763,r:D},"rgb32float-webgl":{gl:34837,x:k,r:N,dataFormat:6407,types:[5126]},rgba32uint:{gl:36208,rb:!0},rgba32sint:{gl:36226,rb:!0},rgba32float:{gl:34836,rb:!0,r:N},stencil8:{gl:36168,rb:!0},depth16unorm:{gl:33189,dataFormat:6402,types:[5123],rb:!0},depth24plus:{gl:33190,dataFormat:6402,types:[5125]},depth32float:{gl:36012,dataFormat:6402,types:[5126],rb:!0},"depth24plus-stencil8":{gl:35056,rb:!0,depthTexture:!0,dataFormat:34041,types:[34042]},"depth32float-stencil8":{gl:36013,dataFormat:34041,types:[36269],rb:!0},"bc1-rgb-unorm-webgl":{gl:33776,x:T},"bc1-rgb-unorm-srgb-webgl":{gl:35916,x:M},"bc1-rgba-unorm":{gl:33777,x:T},"bc1-rgba-unorm-srgb":{gl:35916,x:M},"bc2-rgba-unorm":{gl:33778,x:T},"bc2-rgba-unorm-srgb":{gl:35918,x:M},"bc3-rgba-unorm":{gl:33779,x:T},"bc3-rgba-unorm-srgb":{gl:35919,x:M},"bc4-r-unorm":{gl:36283,x:I},"bc4-r-snorm":{gl:36284,x:I},"bc5-rg-unorm":{gl:36285,x:I},"bc5-rg-snorm":{gl:36286,x:I},"bc6h-rgb-ufloat":{gl:36495,x:R},"bc6h-rgb-float":{gl:36494,x:R},"bc7-rgba-unorm":{gl:36492,x:R},"bc7-rgba-unorm-srgb":{gl:36493,x:R},"etc2-rgb8unorm":{gl:37492},"etc2-rgb8unorm-srgb":{gl:37494},"etc2-rgb8a1unorm":{gl:37496},"etc2-rgb8a1unorm-srgb":{gl:37497},"etc2-rgba8unorm":{gl:37493},"etc2-rgba8unorm-srgb":{gl:37495},"eac-r11unorm":{gl:37488},"eac-r11snorm":{gl:37489},"eac-rg11unorm":{gl:37490},"eac-rg11snorm":{gl:37491},"astc-4x4-unorm":{gl:37808},"astc-4x4-unorm-srgb":{gl:37840},"astc-5x4-unorm":{gl:37809},"astc-5x4-unorm-srgb":{gl:37841},"astc-5x5-unorm":{gl:37810},"astc-5x5-unorm-srgb":{gl:37842},"astc-6x5-unorm":{gl:37811},"astc-6x5-unorm-srgb":{gl:37843},"astc-6x6-unorm":{gl:37812},"astc-6x6-unorm-srgb":{gl:37844},"astc-8x5-unorm":{gl:37813},"astc-8x5-unorm-srgb":{gl:37845},"astc-8x6-unorm":{gl:37814},"astc-8x6-unorm-srgb":{gl:37846},"astc-8x8-unorm":{gl:37815},"astc-8x8-unorm-srgb":{gl:37847},"astc-10x5-unorm":{gl:37816},"astc-10x5-unorm-srgb":{gl:37848},"astc-10x6-unorm":{gl:37817},"astc-10x6-unorm-srgb":{gl:37849},"astc-10x8-unorm":{gl:37818},"astc-10x8-unorm-srgb":{gl:37850},"astc-10x10-unorm":{gl:37819},"astc-10x10-unorm-srgb":{gl:37851},"astc-12x10-unorm":{gl:37820},"astc-12x10-unorm-srgb":{gl:37852},"astc-12x12-unorm":{gl:37821},"astc-12x12-unorm-srgb":{gl:37853},"pvrtc-rgb4unorm-webgl":{gl:35840},"pvrtc-rgba4unorm-webgl":{gl:35842},"pvrtc-rgb2unorm-webgl":{gl:35841},"pvrtc-rgba2unorm-webgl":{gl:35843},"etc1-rbg-unorm-webgl":{gl:36196},"atc-rgb-unorm-webgl":{gl:35986},"atc-rgba-unorm-webgl":{gl:35986},"atc-rgbai-unorm-webgl":{gl:34798}};function V(e){let t=U[e],i=function(e){let t=U[e],i=t?.gl;if(void 0===i)throw Error(`Unsupported texture format ${e}`);return i}(e),r=L.vz.getInfo(e);return r.compressed&&(t.dataFormat=i),{internalFormat:i,format:t?.dataFormat||function(e,t,i,r){if(6408===r||6407===r)return r;switch(e){case"r":return t&&!i?36244:6403;case"rg":return t&&!i?33320:33319;case"rgb":return t&&!i?36248:6407;case"rgba":return t&&!i?36249:6408;case"bgra":throw Error("bgra pixels not supported by WebGL");default:return 6408}}(r.channels,r.integer,r.normalized,i),type:r.dataType?A(r.dataType):t?.types?.[0]||5121,compressed:r.compressed||!1}}let G={"depth-clip-control":"EXT_depth_clamp","timestamp-query":"EXT_disjoint_timer_query_webgl2","compilation-status-async-webgl":"KHR_parallel_shader_compile","html-in-canvas":e=>(0,r.zc)()&&"function"==typeof e.texElementImage2D,"polygon-mode-webgl":"WEBGL_polygon_mode","provoking-vertex-webgl":"WEBGL_provoking_vertex","shader-clip-cull-distance-webgl":"WEBGL_clip_cull_distance","shader-noperspective-interpolation-webgl":"NV_shader_noperspective_interpolation","shader-conservative-depth-webgl":"EXT_conservative_depth"};class W extends r.I7{gl;extensions;testedFeatures=new Set;constructor(e,t,i){super([],i),this.gl=e,this.extensions=t,C(e,"EXT_color_buffer_float",t)}*[Symbol.iterator](){for(let e of this.getFeatures())this.has(e)&&(yield e);return[]}has(e){return!this.disabledFeatures?.[e]&&(!this.testedFeatures.has(e)&&(this.testedFeatures.add(e),e in $&&j(this.gl,e,this.extensions)&&this.features.add(e),this.getWebGLFeature(e)&&this.features.add(e)),this.features.has(e))}initializeFeatures(){for(let e of this.getFeatures().filter(e=>"polygon-mode-webgl"!==e))this.has(e)}getFeatures(){return[...Object.keys(G),...Object.keys($)]}getWebGLFeature(e){let t=G[e];return"string"==typeof t?!!C(this.gl,t,this.extensions):"function"==typeof t?t(this.gl):!!t}}class H extends r.PI{get maxTextureDimension1D(){return 0}get maxTextureDimension2D(){return this.getParameter(3379)}get maxTextureDimension3D(){return this.getParameter(32883)}get maxTextureArrayLayers(){return this.getParameter(35071)}get maxBindGroups(){return 0}get maxBindGroupsPlusVertexBuffers(){return 0}get maxBindingsPerBindGroup(){return 0}get maxDynamicUniformBuffersPerPipelineLayout(){return 0}get maxDynamicStorageBuffersPerPipelineLayout(){return 0}get maxSampledTexturesPerShaderStage(){return this.getParameter(35660)}get maxSamplersPerShaderStage(){return this.getParameter(35661)}get maxStorageBuffersPerShaderStage(){return 0}get maxStorageBuffersInVertexStage(){return 0}get maxStorageBuffersInFragmentStage(){return 0}get maxStorageTexturesPerShaderStage(){return 0}get maxStorageTexturesInVertexStage(){return 0}get maxStorageTexturesInFragmentStage(){return 0}get maxUniformBuffersPerShaderStage(){return this.getParameter(35375)}get maxUniformBufferBindingSize(){return this.getParameter(35376)}get maxStorageBufferBindingSize(){return 0}get maxBufferSize(){return Number.MAX_SAFE_INTEGER}get minUniformBufferOffsetAlignment(){return this.getParameter(35380)}get minStorageBufferOffsetAlignment(){return 0}get maxVertexBuffers(){return 16}get maxVertexAttributes(){return this.getParameter(34921)}get maxVertexBufferArrayStride(){return 2048}get maxInterStageShaderVariables(){return this.getParameter(35659)}get maxColorAttachments(){return this.getParameter(36063)}get maxColorAttachmentBytesPerSample(){return 0}get maxComputeWorkgroupStorageSize(){return 0}get maxComputeInvocationsPerWorkgroup(){return 0}get maxComputeWorkgroupSizeX(){return 0}get maxComputeWorkgroupSizeY(){return 0}get maxComputeWorkgroupSizeZ(){return 0}get maxComputeWorkgroupsPerDimension(){return 0}gl;limits={};constructor(e){super(),this.gl=e}getParameter(e){return void 0===this.limits[e]&&(this.limits[e]=this.gl.getParameter(e)),this.limits[e]||0}}var q=i(28804);class Y{props;_resizeObserver;_intersectionObserver;_observeDevicePixelRatioTimeout=null;_observeDevicePixelRatioMediaQuery=null;_handleDevicePixelRatioChange=()=>this._refreshDevicePixelRatio();_trackPositionInterval=null;_started=!1;get started(){return this._started}constructor(e){this.props=e}start(){if(this._started||!this.props.canvas)return;this._started=!0,this._intersectionObserver||=new IntersectionObserver(e=>this.props.onIntersection(e)),this._resizeObserver||=new ResizeObserver(e=>this.props.onResize(e)),this._intersectionObserver.observe(this.props.canvas);let e=this.props.resizeObserverBox;try{this._resizeObserver.observe(this.props.canvas,{box:e})}catch{this._resizeObserver.observe(this.props.canvas,{box:"content-box"})}this._observeDevicePixelRatioTimeout=setTimeout(()=>this._refreshDevicePixelRatio(),0),this.props.trackPosition&&this._trackPosition()}stop(){this._started&&(this._started=!1,this._observeDevicePixelRatioTimeout&&(clearTimeout(this._observeDevicePixelRatioTimeout),this._observeDevicePixelRatioTimeout=null),this._observeDevicePixelRatioMediaQuery&&(this._observeDevicePixelRatioMediaQuery.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=null),this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null),this._resizeObserver?.disconnect(),this._intersectionObserver?.disconnect())}_refreshDevicePixelRatio(){this._started&&(this.props.onDevicePixelRatioChange(),this._observeDevicePixelRatioMediaQuery?.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._observeDevicePixelRatioMediaQuery.addEventListener("change",this._handleDevicePixelRatioChange,{once:!0}))}_trackPosition(e=100){this._trackPositionInterval||(this._trackPositionInterval=setInterval(()=>{this._started?this.props.onPositionChange():this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null)},e))}}var Z=i(32646),K=i(88459);class X{static isHTMLCanvas(e){return"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement}static isOffscreenCanvas(e){return"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas}static defaultProps={id:void 0,canvas:null,width:800,height:600,useDevicePixels:!0,pixelSizeSource:"exact",autoResize:!0,container:null,visible:!0,alphaMode:"opaque",colorSpace:"srgb",colorFormat:void 0,toneMapping:"standard",trackPosition:!1};id;props;canvas;htmlCanvas;offscreenCanvas;type;initialized;isInitialized=!1;isVisible=!0;cssWidth;cssHeight;devicePixelRatio;devicePixelWidth;devicePixelHeight;drawingBufferWidth;drawingBufferHeight;_initializedResolvers=(function(){let e,t;return{promise:new Promise((i,r)=>{e=i,t=r}),resolve:e,reject:t}})();_canvasObserver;_position=[0,0];destroyed=!1;_needsDrawingBufferResize=!0;_configuredDrawingBufferSize=[0,0];toString(){return`${this[Symbol.toStringTag]}(${this.id})`}constructor(e){this.props={...X.defaultProps,...e},e=this.props,this.initialized=this._initializedResolvers.promise,(0,q.B)()?e.canvas?"string"==typeof e.canvas?this.canvas=function(e){let t=document.getElementById(e);if(!X.isHTMLCanvas(t))throw Error("Object is not a canvas element");return t}(e.canvas):this.canvas=e.canvas:this.canvas=function(e){let{width:t,height:i}=e,r=document.createElement("canvas");r.id=(0,Z.L)("lumagl-auto-created-canvas"),r.width=t||1,r.height=i||1,r.style.width=Number.isFinite(t)?`${t}px`:"100%",r.style.height=Number.isFinite(i)?`${i}px`:"100%",e?.visible||(r.style.visibility="hidden");let n=function(e){if("string"==typeof e){let t=document.getElementById(e);if(!t)throw Error(`${e} is not an HTML element`);return t}return e||document.body}(e?.container||null);return n.insertBefore(r,n.firstChild),r}(e):this.canvas={width:e.width||1,height:e.height||1},X.isHTMLCanvas(this.canvas)?(this.id=e.id||this.canvas.id,this.type="html-canvas",this.htmlCanvas=this.canvas):X.isOffscreenCanvas(this.canvas)?(this.id=e.id||"offscreen-canvas",this.type="offscreen-canvas",this.offscreenCanvas=this.canvas):(this.id=e.id||"node-canvas-context",this.type="node"),this.cssWidth=this.htmlCanvas?.clientWidth||this.canvas.width,this.cssHeight=this.htmlCanvas?.clientHeight||this.canvas.height,this.devicePixelWidth=this.canvas.width,this.devicePixelHeight=this.canvas.height,this.drawingBufferWidth=this.canvas.width,this.drawingBufferHeight=this.canvas.height,this._configuredDrawingBufferSize=[this.canvas.width,this.canvas.height],this.devicePixelRatio=globalThis.devicePixelRatio||1,this._position=[0,0],this._canvasObserver=new Y({canvas:this.htmlCanvas,trackPosition:this.props.trackPosition,resizeObserverBox:"css-dpr"===this.props.pixelSizeSource?"content-box":"device-pixel-content-box",onResize:e=>this._handleResize(e),onIntersection:e=>this._handleIntersection(e),onDevicePixelRatioChange:()=>this._observeDevicePixelRatio(),onPositionChange:()=>this.updatePosition()})}destroy(){this.destroyed||(this.destroyed=!0,this._stopObservers(),this.device=null)}setProps(e){return"useDevicePixels"in e&&(this.props.useDevicePixels=e.useDevicePixels||!1,this._updateDrawingBufferSize()),this}getCurrentFramebuffer(e){return this._resizeDrawingBufferIfNeeded(),this._getCurrentFramebuffer(e)}getCSSSize(){return[this.cssWidth,this.cssHeight]}getPosition(){return this._position}getDevicePixelSize(){return[this.devicePixelWidth,this.devicePixelHeight]}getDrawingBufferSize(){return[this.drawingBufferWidth,this.drawingBufferHeight]}getMaxDrawingBufferSize(){let e=this.device.limits.maxTextureDimension2D;return[e,e]}setDrawingBufferSize(e,t){e=Math.floor(e),t=Math.floor(t),(this.drawingBufferWidth!==e||this.drawingBufferHeight!==t)&&(this.drawingBufferWidth=e,this.drawingBufferHeight=t,this._needsDrawingBufferResize=!0)}getDevicePixelRatio(){return"undefined"!=typeof window&&window.devicePixelRatio||1}cssToDevicePixels(e,t=!0){let i=this.cssToDeviceRatio(),[r,n]=this.getDrawingBufferSize();return function(e,t,i,r,n){let s,o=Q(e[0],t,i),a=J(e[1],t,r,n),l=Q(e[0]+1,t,i),u=l===i-1?l:l-1;return l=J(e[1]+1,t,r,n),n?(l=0===l?l:l+1,s=a,a=l):s=l===r-1?l:l-1,{x:o,y:a,width:Math.max(u-o+1,1),height:Math.max(s-a+1,1)}}(e,i,r,n,t)}getPixelSize(){return this.getDevicePixelSize()}getAspect(){let[e,t]=this.getDrawingBufferSize();return e>0&&t>0?e/t:1}cssToDeviceRatio(){try{let[e]=this.getDrawingBufferSize(),[t]=this.getCSSSize();return t?e/t:1}catch{return 1}}resize(e){this.setDrawingBufferSize(e.width,e.height)}_setAutoCreatedCanvasId(e){this.htmlCanvas?.id==="lumagl-auto-created-canvas"&&(this.htmlCanvas.id=e)}_startObservers(){this.destroyed||this._canvasObserver.start()}_stopObservers(){this._canvasObserver.stop()}_handleIntersection(e){if(this.destroyed)return;let t=e.find(e=>e.target===this.canvas);if(!t)return;let i=t.isIntersecting;this.isVisible!==i&&(this.isVisible=i,this.device.props.onVisibilityChange(this))}_handleResize(e){if(this.destroyed)return;let t=e.find(e=>e.target===this.canvas);if(!t)return;let i=(0,K.i)(t.contentBoxSize?.[0]);this.cssWidth=i.inlineSize,this.cssHeight=i.blockSize;let r=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromResizeEntry(t)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:r})}_updateDrawingBufferSize(){if(this.props.autoResize)if("number"==typeof this.props.useDevicePixels){let e=this.props.useDevicePixels;this.setDrawingBufferSize(this.cssWidth*e,this.cssHeight*e)}else this.props.useDevicePixels?this.setDrawingBufferSize(this.devicePixelWidth,this.devicePixelHeight):this.setDrawingBufferSize(this.cssWidth,this.cssHeight);this._initializedResolvers.resolve(),this.isInitialized=!0,this.updatePosition()}_getDevicePixelSizeFromResizeEntry(e){let t=(0,K.i)(e.contentBoxSize?.[0]);return"css-dpr"===this.props.pixelSizeSource?this._getDevicePixelSizeFromCSSSize(t.inlineSize,t.blockSize):{devicePixelWidth:e.devicePixelContentBoxSize?.[0]?.inlineSize||t.inlineSize*devicePixelRatio,devicePixelHeight:e.devicePixelContentBoxSize?.[0]?.blockSize||t.blockSize*devicePixelRatio}}_getDevicePixelSizeFromCSSSize(e,t){let i=this.getDevicePixelRatio();return{devicePixelWidth:Math.floor(e*i),devicePixelHeight:Math.floor(t*i)}}_setDevicePixelSize({devicePixelWidth:e,devicePixelHeight:t}){let[i,r]=this.getMaxDrawingBufferSize();this.devicePixelWidth=Math.max(1,Math.min(e,i)),this.devicePixelHeight=Math.max(1,Math.min(t,r))}_resizeDrawingBufferIfNeeded(){if(this._needsDrawingBufferResize){this._needsDrawingBufferResize=!1,(this.drawingBufferWidth!==this.canvas.width||this.drawingBufferHeight!==this.canvas.height)&&(this.canvas.width=this.drawingBufferWidth,this.canvas.height=this.drawingBufferHeight);let[e,t]=this._configuredDrawingBufferSize;(this.drawingBufferWidth!==e||this.drawingBufferHeight!==t)&&(this._configureDevice(),this._configuredDrawingBufferSize=[this.drawingBufferWidth,this.drawingBufferHeight])}}_observeDevicePixelRatio(){if(this.destroyed||!this._canvasObserver.started)return;let e=this.devicePixelRatio;if(this.devicePixelRatio=window.devicePixelRatio,"css-dpr"===this.props.pixelSizeSource){let e=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromCSSSize(this.cssWidth,this.cssHeight)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:e})}this.updatePosition(),this.device.props.onDevicePixelRatioChange?.(this,{oldRatio:e})}updatePosition(){if(this.destroyed)return;let e=this.htmlCanvas?.getBoundingClientRect();if(e){let t=[e.left,e.top];if(this._position??=t,t[0]!==this._position[0]||t[1]!==this._position[1]){let e=this._position;this._position=t,this.device.props.onPositionChange?.(this,{oldPosition:e})}}}}function Q(e,t,i){return Math.min(Math.round(e*t),i-1)}function J(e,t,i,r){return r?Math.max(0,i-1-Math.round(e*t)):Math.min(Math.round(e*t),i-1)}class ee extends X{static defaultProps=X.defaultProps}var et=i(51153),ei=i(712);class er extends et.F{get[Symbol.toStringTag](){return"Framebuffer"}width;height;constructor(e,t={}){super(e,t,er.defaultProps),this.width=this.props.width,this.height=this.props.height}clone(e){let t=this.colorAttachments.map(t=>t.texture.clone(e)),i=this.depthStencilAttachment&&this.depthStencilAttachment.texture.clone(e);return this.device.createFramebuffer({...this.props,...e,colorAttachments:t,depthStencilAttachment:i})}resize(e){let t=!e;if(e){let[i,r]=Array.isArray(e)?e:[e.width,e.height];t=t||r!==this.height||i!==this.width,this.width=i,this.height=r}t&&(n.R.log(2,`Resizing framebuffer ${this.id} to ${this.width}x${this.height}`)(),this.resizeAttachments(this.width,this.height))}autoCreateAttachmentTextures(){if(0===this.props.colorAttachments.length&&!this.props.depthStencilAttachment)throw Error("Framebuffer has noattachments");this.colorAttachments=this.props.colorAttachments.map((e,t)=>{if("string"==typeof e){let i=this.createColorTexture(e,t);return this.attachResource(i),i.view}return e instanceof ei.g?e.view:e});let e=this.props.depthStencilAttachment;if(e)if("string"==typeof e){let t=this.createDepthStencilTexture(e);this.attachResource(t),this.depthStencilAttachment=t.view}else e instanceof ei.g?this.depthStencilAttachment=e.view:this.depthStencilAttachment=e}createColorTexture(e,t){return this.device.createTexture({id:`${this.id}-color-attachment-${t}`,usage:ei.g.RENDER_ATTACHMENT,format:e,width:this.width,height:this.height,sampler:{magFilter:"linear",minFilter:"linear"}})}createDepthStencilTexture(e){return this.device.createTexture({id:`${this.id}-depth-stencil-attachment`,usage:ei.g.RENDER_ATTACHMENT|ei.g.SAMPLE,format:e,width:this.width,height:this.height})}resizeAttachments(e,t){if(this.colorAttachments.forEach((i,r)=>{let n=i.texture.clone({width:e,height:t});this.destroyAttachedResource(i),this.colorAttachments[r]=n.view,this.attachResource(n.view)}),this.depthStencilAttachment){let i=this.depthStencilAttachment.texture.clone({width:e,height:t});this.destroyAttachedResource(this.depthStencilAttachment),this.depthStencilAttachment=i.view,this.attachResource(i)}this.updateAttachments()}static defaultProps={...et.F.defaultProps,width:1,height:1,colorAttachments:[],depthStencilAttachment:null}}class en extends er{device;gl;handle;colorAttachments=[];depthStencilAttachment=null;constructor(e,t){super(e,t);let i=t.handle,r=null===i;this.device=e,this.gl=e.gl,this.handle=i||r?i:this.gl.createFramebuffer(),!r&&(e._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),t.handle||(this.autoCreateAttachmentTextures(),this.updateAttachments()))}destroy(){super.destroy(),this.destroyed||null===this.handle||this.props.handle||this.gl.deleteFramebuffer(this.handle)}updateAttachments(){let e=this.gl.bindFramebuffer(36160,this.handle);for(let e=0;e<this.colorAttachments.length;++e){let t=this.colorAttachments[e];if(t){let i=36064+e;this._attachTextureView(i,t)}}if(this.depthStencilAttachment){let e=function(e){switch(L.vz.getInfo(e).attachment){case"depth":return 36096;case"stencil":return 36128;case"depth-stencil":return 33306;default:throw Error(`Not a depth stencil format: ${e}`)}}(this.depthStencilAttachment.props.format);this._attachTextureView(e,this.depthStencilAttachment)}if(this.device.props.debug){let e=this.gl.checkFramebufferStatus(36160);if(36053!==e)throw Error(`Framebuffer ${function(e){switch(e){case 36053:return"success";case 36054:return"Mismatched attachments";case 36055:return"No attachments";case 36057:return"Height/width mismatch";case 36061:return"Unsupported or split attachments";case 36182:return"Samples mismatch";default:return`${e}`}}(e)}`)}this.gl.bindFramebuffer(36160,e)}_attachTextureView(e,t){let{gl:i}=this.device,{texture:r}=t,n=t.props.baseMipLevel,s=t.props.baseArrayLayer;switch(i.bindTexture(r.glTarget,r.handle),r.glTarget){case 35866:case 32879:i.framebufferTextureLayer(36160,e,r.handle,n,s);break;case 34067:var o;let a=(o=s)<34069?o+34069:o;i.framebufferTexture2D(36160,e,a,r.handle,n);break;case 3553:i.framebufferTexture2D(36160,e,3553,r.handle,n);break;default:throw Error("Illegal texture type")}i.bindTexture(r.glTarget,null)}resizeAttachments(e,t){if(null===this.handle){this.width=e,this.height=t;return}super.resizeAttachments(e,t)}}class es extends ee{device;handle=null;_framebuffer=null;get[Symbol.toStringTag](){return"WebGLCanvasContext"}constructor(e,t){super(t),this.device=e,this._setAutoCreatedCanvasId(`${this.device.id}-canvas`),this._configureDevice()}_configureDevice(){(this.drawingBufferWidth!==this._framebuffer?.width||this.drawingBufferHeight!==this._framebuffer?.height)&&this._framebuffer?.resize([this.drawingBufferWidth,this.drawingBufferHeight])}_getCurrentFramebuffer(){return this._framebuffer||=new en(this.device,{id:"canvas-context-framebuffer",handle:null,width:this.drawingBufferWidth,height:this.drawingBufferHeight}),this._framebuffer}}class eo extends X{}class ea extends eo{device;handle=null;context2d;get[Symbol.toStringTag](){return"WebGLPresentationContext"}constructor(e,t={}){super(t),this.device=e;let i=`${this[Symbol.toStringTag]}(${this.id})`;if(!this.device.getDefaultCanvasContext().offscreenCanvas)throw Error(`${i}: WebGL PresentationContext requires the default CanvasContext canvas to be an OffscreenCanvas`);let r=this.canvas.getContext("2d");if(!r)throw Error(`${i}: Failed to create 2d presentation context`);this.context2d=r,this._setAutoCreatedCanvasId(`${this.device.id}-presentation-canvas`),this._configureDevice(),this._startObservers()}present(){this._resizeDrawingBufferIfNeeded(),this.device.submit();let e=this.device.getDefaultCanvasContext(),[t,i]=e.getDrawingBufferSize();if(0!==this.drawingBufferWidth&&0!==this.drawingBufferHeight&&0!==t&&0!==i&&0!==e.canvas.width&&0!==e.canvas.height){if(t!==this.drawingBufferWidth||i!==this.drawingBufferHeight||e.canvas.width!==this.drawingBufferWidth||e.canvas.height!==this.drawingBufferHeight)throw Error(`${this[Symbol.toStringTag]}(${this.id}): Default canvas context size ${t}x${i} does not match presentation size ${this.drawingBufferWidth}x${this.drawingBufferHeight}`);this.context2d.clearRect(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.context2d.drawImage(e.canvas,0,0)}}_configureDevice(){}_getCurrentFramebuffer(e){let t=this.device.getDefaultCanvasContext();return t.setDrawingBufferSize(this.drawingBufferWidth,this.drawingBufferHeight),t.getCurrentFramebuffer(e)}}var el=i(85175);let eu={};var ec=i(22839);class eh extends ec.h{device;gl;handle;glTarget;glUsage;glIndexType=5123;byteLength=0;bytesUsed=0;constructor(e,t={}){super(e,t),this.device=e,this.gl=this.device.gl;let i="object"==typeof t?t.handle:void 0;this.handle=i||this.gl.createBuffer(),e._setWebGLDebugMetadata(this.handle,this,{spector:{...this.props,data:typeof this.props.data}}),this.glTarget=function(e){return e&ec.h.INDEX?34963:e&ec.h.VERTEX?34962:e&ec.h.UNIFORM?35345:34962}(this.props.usage),this.glUsage=function(e){return e&ec.h.INDEX||e&ec.h.VERTEX?35044:e&ec.h.UNIFORM?35048:35044}(this.props.usage),this.glIndexType="uint32"===this.props.indexType?5125:5123,t.data?this._initWithData(t.data,t.byteOffset,t.byteLength):this._initWithByteLength(t.byteLength||0)}destroy(){!this.destroyed&&this.handle&&(this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Buffer"):(this.trackDeallocatedMemory(),this.gl.deleteBuffer(this.handle)),this.destroyed=!0,this.handle=null)}_initWithData(e,t=0,i=e.byteLength+t){let r=this.glTarget;this.gl.bindBuffer(r,this.handle),this.gl.bufferData(r,i,this.glUsage),this.gl.bufferSubData(r,t,e),this.gl.bindBuffer(r,null),this.bytesUsed=i,this.byteLength=i,this._setDebugData(e,t,i),this.props.handle?this.trackReferencedMemory(i,"Buffer"):this.trackAllocatedMemory(i)}_initWithByteLength(e){let t=e;0===e&&(t=new Float32Array(0));let i=this.glTarget;return this.gl.bindBuffer(i,this.handle),this.gl.bufferData(i,t,this.glUsage),this.gl.bindBuffer(i,null),this.bytesUsed=e,this.byteLength=e,this._setDebugData(null,0,e),this.props.handle?this.trackReferencedMemory(e,"Buffer"):this.trackAllocatedMemory(e),this}write(e,t=0){let i=ArrayBuffer.isView(e)?e:new Uint8Array(e),r=void 0;this.gl.bindBuffer(36663,this.handle),void 0!==r?this.gl.bufferSubData(36663,t,i,0,r):this.gl.bufferSubData(36663,t,i),this.gl.bindBuffer(36663,null),this._setDebugData(e,t,e.byteLength)}async mapAndWriteAsync(e,t=0,i=this.byteLength-t){let r=new ArrayBuffer(i);await e(r,"copied"),this.write(r,t)}async readAsync(e=0,t){return this.readSyncWebGL(e,t)}async mapAndReadAsync(e,t=0,i){let r=await this.readAsync(t,i);return await e(r.buffer,"copied")}readSyncWebGL(e=0,t){let i=new Uint8Array(t=t??this.byteLength-e);return this.gl.bindBuffer(36662,this.handle),this.gl.getBufferSubData(36662,e,i,0,t),this.gl.bindBuffer(36662,null),this._setDebugData(i,e,t),i}}var ed=i(97693);function ef(e){let t=e.toLowerCase();return["warning","error","info"].includes(t)?t:"info"}class ep extends ed.M{device;handle;_compilationInfoLog="";constructor(e,t){super(e,t),this.device=e;let i=this.props.handle;switch(this.props.stage){case"vertex":this.handle=i||this.device.gl.createShader(35633);break;case"fragment":this.handle=i||this.device.gl.createShader(35632);break;default:throw Error(this.props.stage)}e._setWebGLDebugMetadata(this.handle,this,{spector:this.props});let r=this._compile(this.source);r&&"function"==typeof r.catch&&r.catch(()=>{this.compilationStatus="error"})}destroy(){this.handle&&(this.removeStats(),this.device.gl.deleteShader(this.handle),this.destroyed=!0,this.handle.destroyed=!0)}get asyncCompilationStatus(){return this._waitForCompilationComplete().then(()=>(this._getCompilationStatus(),this.compilationStatus))}async getCompilationInfo(){return await this._waitForCompilationComplete(),this.getCompilationInfoSync()}getCompilationInfoSync(){let e=this._getCompilationInfoLog();return e?function(e){let t=e.split(/\r?\n/),i=[];for(let e of t){if(e.length<=1)continue;let t=e.trim(),r=e.split(":"),n=r[0]?.trim();if(2===r.length){let[e,s]=r;if(!e||!s){i.push({message:t,type:ef(n||"info"),lineNum:0,linePos:0});continue}i.push({message:s.trim(),type:ef(e),lineNum:0,linePos:0});continue}let[s,o,a,...l]=r;if(!s||!o||!a){i.push({message:r.slice(1).join(":").trim()||t,type:ef(n||"info"),lineNum:0,linePos:0});continue}let u=parseInt(a,10);Number.isNaN(u)&&(u=0);let c=parseInt(o,10);Number.isNaN(c)&&(c=0),i.push({message:l.join(":").trim(),type:ef(s),lineNum:u,linePos:c})}return i}(e):[]}getTranslatedSource(){let e=this.device.getExtension("WEBGL_debug_shaders").WEBGL_debug_shaders;return e?.getTranslatedShaderSource(this.handle)||null}_compile(e){e=e.startsWith("#version ")?e:`#version 300 es
${e}`;let{gl:t}=this.device;if(t.shaderSource(this.handle,e),t.compileShader(this.handle),!this.device.props.debug){this.compilationStatus="pending";return}if(!this.device.features.has("compilation-status-async-webgl")){if(this._getCompilationStatus(),this.debugShader(),"error"===this.compilationStatus)throw Error(this._getCompilationErrorMessage(e));return}return n.R.once(1,"Shader compilation is asynchronous")(),this._waitForCompilationComplete().then(()=>{n.R.info(2,`Shader ${this.id} - async compilation complete: ${this.compilationStatus}`)(),this._getCompilationStatus(),this.debugShader()})}async _waitForCompilationComplete(){let e=async e=>await new Promise(t=>setTimeout(t,e));if(!this.device.features.has("compilation-status-async-webgl"))return void await e(10);let{gl:t}=this.device;for(;;){if(t.getShaderParameter(this.handle,37297))return;await e(10)}}_getCompilationStatus(){this.compilationStatus=this.device.gl.getShaderParameter(this.handle,35713)?"success":"error","error"===this.compilationStatus&&this._getCompilationInfoLog()}_getCompilationErrorMessage(e){var t;let i=`${this.props.stage} shader ${this.props.id}`,r=(t=this._getCompilationInfoLog(),t.split(/\r?\n/).find(e=>e.trim())?.trim()),n=this.getCompilationInfoSync(),s=n.find(e=>"error"===e.type&&e.message.trim())||n.find(e=>e.message.trim())||n.find(e=>"error"===e.type)||n[0];if(!s)return r?`GLSL compilation errors in ${i}: ${r}`:`GLSL compilation errors in ${i}: WebGL did not provide a shader compiler log`;let o=s.lineNum?e.split(/\r?\n/)[s.lineNum-1]?.trim():void 0,a=s.lineNum?` line ${s.lineNum}`:"",l=o?`
Source: ${o}`:"",u=s.message.trim()||r||"WebGL did not provide a shader compiler log";return`GLSL compilation errors in ${i}:${a}: ${u}${l}`}_getCompilationInfoLog(){let e=this.device.gl.getShaderInfoLog(this.handle)?.trim();return e&&(this._compilationInfoLog=e),this._compilationInfoLog}}var eg=i(50319);function em(e,t){return e_(e,t,{never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519})}function ev(e,t){return e_(e,t,{keep:7680,zero:0,replace:7681,invert:5386,"increment-clamp":7682,"decrement-clamp":7683,"increment-wrap":34055,"decrement-wrap":34056})}function ey(e,t){return e_(e,t,{add:32774,subtract:32778,"reverse-subtract":32779,min:32775,max:32776})}function eb(e,t,i="color"){return e_(e,t,{one:1,zero:0,src:768,"one-minus-src":769,dst:774,"one-minus-dst":775,"src-alpha":770,"one-minus-src-alpha":771,"dst-alpha":772,"one-minus-dst-alpha":773,"src-alpha-saturated":776,constant:"color"===i?32769:32771,"one-minus-constant":"color"===i?32770:32772,src1:768,"one-minus-src1":769,"src1-alpha":770,"one-minus-src1-alpha":771})}function e_(e,t,i){if(!(t in i))throw Error(`Illegal parameter ${t} for ${e}`);return i[t]}function ex(e){let t={};return e.addressModeU&&(t[10242]=ew(e.addressModeU)),e.addressModeV&&(t[10243]=ew(e.addressModeV)),e.addressModeW&&(t[32882]=ew(e.addressModeW)),e.magFilter&&(t[10240]=eP(e.magFilter)),(e.minFilter||e.mipmapFilter)&&(t[10241]=function(e,t="none"){if(!t)return eP(e);switch(t){case"none":return eP(e);case"nearest":switch(e){case"nearest":return 9984;case"linear":return 9985}break;case"linear":switch(e){case"nearest":return 9986;case"linear":return 9987}}}(e.minFilter||"linear",e.mipmapFilter)),void 0!==e.lodMinClamp&&(t[33082]=e.lodMinClamp),void 0!==e.lodMaxClamp&&(t[33083]=e.lodMaxClamp),"comparison-sampler"===e.type&&(t[34892]=34894),e.compare&&(t[34893]=em("compare",e.compare)),e.maxAnisotropy&&(t[34046]=e.maxAnisotropy),t}function ew(e){switch(e){case"clamp-to-edge":return 33071;case"repeat":return 10497;case"mirror-repeat":return 33648}}function eP(e){switch(e){case"nearest":return 9728;case"linear":return 9729}}class eS extends eg.L{device;handle;parameters;constructor(e,t){super(e,t),this.device=e,this.parameters=ex(t),this.handle=t.handle||this.device.gl.createSampler(),this._setSamplerParameters(this.parameters)}destroy(){this.handle&&(this.device.gl.deleteSampler(this.handle),this.handle=void 0)}toString(){return`Sampler(${this.id},${JSON.stringify(this.props)})`}_setSamplerParameters(e){for(let[t,i]of Object.entries(e)){let e=Number(t);switch(e){case 33082:case 33083:this.device.gl.samplerParameterf(this.handle,e,i);break;default:this.device.gl.samplerParameteri(this.handle,e,i)}}}}var eC=i(7724);function eE(e,t,i){let r;if(function(e){for(let t in e)return!1;return!0}(t))return i(e);let{nocatch:n=!0}=t,s=w.get(e);if(s.push(),b(e,t),n)r=i(e),s.pop();else try{r=i(e)}finally{s.pop()}return r}var eL=i(47882);class eA extends eL.X{device;gl;handle;texture;constructor(e,t){super(e,{...ei.g.defaultProps,...t}),this.device=e,this.gl=this.device.gl,this.handle=null,this.texture=t.texture}}let eT={5124:"sint32",5125:"uint32",5122:"sint16",5123:"uint16",5120:"sint8",5121:"uint8",5126:"float32",5131:"float16",33635:"uint16",32819:"uint16",32820:"uint16",33640:"uint32",35899:"uint32",35902:"uint32",34042:"uint32",36269:"uint32"};class eM extends ei.g{device;gl;handle;sampler=void 0;view;glTarget;glFormat;glType;glInternalFormat;compressed;_textureUnit=0;_framebuffer=null;_framebufferAttachmentKey=null;constructor(e,t){super(e,t,{byteAlignment:1}),this.device=e,this.gl=this.device.gl;let i=V(this.props.format);if(this.glTarget=function(e){switch(e){case"1d":break;case"2d":return 3553;case"3d":return 32879;case"cube":return 34067;case"2d-array":return 35866}throw Error(e)}(this.props.dimension),this.glInternalFormat=i.internalFormat,this.glFormat=i.format,this.glType=i.type,this.compressed=i.compressed,this.isHandleBorrowed&&void 0===this.props.handle)throw Error("Borrowed WebGL textures require a texture handle");if(this.handle=this.props.handle||this.gl.createTexture(),this.device._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),!this.isHandleBorrowed){this.gl.bindTexture(this.glTarget,this.handle);let{dimension:e,width:i,height:r,depth:n,mipLevels:s,glTarget:o,glInternalFormat:a}=this;if(!this.compressed)switch(e){case"2d":case"cube":this.gl.texStorage2D(o,s,a,i,r);break;case"2d-array":case"3d":this.gl.texStorage3D(o,s,a,i,r,n);break;default:throw Error(e)}this.gl.bindTexture(this.glTarget,null),this._initializeData(t.data)}this.ownsHandle?this.trackAllocatedMemory(this.getAllocatedByteLength(),"Texture"):this.trackReferencedMemory(this.getAllocatedByteLength(),"Texture"),this.isHandleBorrowed||this.setSampler(this.props.sampler),this.view=new eA(this.device,{...this.props,texture:this}),Object.seal(this)}destroy(){this.handle&&(this._framebuffer?.destroy(),this._framebuffer=null,this._framebufferAttachmentKey=null,this.removeStats(),this.ownsHandle?(this.gl.deleteTexture(this.handle),this.trackDeallocatedMemory("Texture")):this.trackDeallocatedReferencedMemory("Texture"),this.destroyed=!0)}createView(e){return new eA(this.device,{...e,texture:this})}clone(e){if(this.isHandleBorrowed&&e&&(e.width!==this.width||e.height!==this.height))throw Error(`Cannot resize borrowed read-only ${this}`);return super.clone(e)}setSampler(e={}){this._assertWritable("set sampler parameters on"),super.setSampler(e);let t=ex(this.sampler.props);this._setSamplerParameters(t)}copyExternalImage(e){this._assertWritable("copy external image data into");let t=this._normalizeCopyExternalImageOptions(e);if(t.sourceX||t.sourceY)throw Error("WebGL does not support sourceX/sourceY)");let{glFormat:i,glType:r}=this,{image:n,depth:s,mipLevel:o,x:a,y:l,z:u,width:c,height:h}=t,d=eI(this.glTarget,this.dimension,u),f=t.flipY?{37440:!0}:{};return this.gl.bindTexture(this.glTarget,this.handle),eE(this.gl,f,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(d,o,a,l,c,h,i,r,n);break;case"2d-array":case"3d":this.gl.texSubImage3D(d,o,a,l,u,c,h,s,i,r,n)}}),this.gl.bindTexture(this.glTarget,null),{width:t.width,height:t.height}}copyElementImage(e){this._assertWritable("copy element image data into");let t=this._normalizeCopyElementImageOptions(e),{glFormat:i}=this,{element:r,depth:n,mipLevel:s,sourceX:o,sourceY:a,sourceWidth:l,sourceHeight:u,x:c,y:h,z:d,width:f,height:p}=t,g=eI(this.glTarget,this.dimension,d),m=t.flipY?{37440:!0}:{},v=this.gl;if(1!==n||"2d"!==this.dimension&&"cube"!==this.dimension)throw Error(`${this} copyElementImage only supports 2d and cube textures on WebGL`);if(0!==s||0!==c||0!==h)throw Error(`${this} copyElementImage only supports full base-level uploads on WebGL`);if("function"!=typeof v.texElementImage2D)throw Error(`${this} copyElementImage is not supported by this WebGL implementation`);return this.gl.bindTexture(this.glTarget,this.handle),eE(this.gl,m,()=>{v.texElementImage2D?.(g,i,r,{sx:o,sy:a,swidth:l??f,sheight:u??p,width:f,height:p})}),this.gl.bindTexture(this.glTarget,null),{width:t.width,height:t.height}}copyImageData(e){super.copyImageData(e)}readBuffer(e={},t){if(!t)throw Error(`${this} readBuffer requires a destination buffer`);let i=this._getSupportedColorReadOptions(e),r=e.byteOffset??0,n=this.computeMemoryLayout(i);if(t.byteLength<r+n.byteLength)throw Error(`${this} readBuffer target is too small (${t.byteLength} < ${r+n.byteLength})`);this.gl.bindBuffer(35051,t.handle);try{this._readColorTextureLayers(i,n,e=>{this.gl.readPixels(i.x,i.y,i.width,i.height,this.glFormat,this.glType,r+e)})}finally{this.gl.bindBuffer(35051,null)}return t}async readDataAsync(e={}){throw Error(`${this} readDataAsync is deprecated; use readBuffer() with an explicit destination buffer or DynamicTexture.readAsync()`)}writeBuffer(e,t={}){this._assertWritable("write buffer data into");let i=this._normalizeTextureWriteOptions(t),{width:r,height:n,depthOrArrayLayers:s,mipLevel:o,byteOffset:a,x:l,y:u,z:c}=i,{glFormat:h,glType:d,compressed:f}=this,p=eI(this.glTarget,this.dimension,c);if(f)throw Error("writeBuffer for compressed textures is not implemented in WebGL");let{bytesPerPixel:g}=this.device.getTextureFormatInfo(this.format),m=g?i.bytesPerRow/g:void 0,v={3317:this.byteAlignment,...void 0!==m?{3314:m}:{},32878:i.rowsPerImage};this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,e.handle),eE(this.gl,v,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(p,o,l,u,r,n,h,d,a);break;case"2d-array":case"3d":this.gl.texSubImage3D(p,o,l,u,c,r,n,s,h,d,a)}}),this.gl.bindBuffer(35052,null),this.gl.bindTexture(this.glTarget,null)}writeData(e,t={}){let i;this._assertWritable("write data into");let r=this._normalizeTextureWriteOptions(t),n=ArrayBuffer.isView(e)?e:new Uint8Array(e),{width:s,height:o,depthOrArrayLayers:a,mipLevel:l,x:u,y:c,z:h,byteOffset:d}=r,{glFormat:f,glType:p,compressed:g}=this,m=eI(this.glTarget,this.dimension,h);if(!g){let{bytesPerPixel:e}=this.device.getTextureFormatInfo(this.format);e&&(i=r.bytesPerRow/e)}let v=this.compressed?{}:{3317:this.byteAlignment,...void 0!==i?{3314:i}:{},32878:r.rowsPerImage},y=function(e,t){if(t%e.BYTES_PER_ELEMENT!=0)throw Error(`Texture byteOffset ${t} must align to typed array element size ${e.BYTES_PER_ELEMENT}`);return t/e.BYTES_PER_ELEMENT}(n,d),b=g?function(e,t=0){return t?new e.constructor(e.buffer,e.byteOffset+t,(e.byteLength-t)/e.BYTES_PER_ELEMENT):e}(n,d):n,_=this._getMipLevelSize(l),x=0===u&&0===c&&0===h&&s===_.width&&o===_.height&&a===_.depthOrArrayLayers;this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,null),eE(this.gl,v,()=>{switch(this.dimension){case"2d":case"cube":g?x?this.gl.compressedTexImage2D(m,l,f,s,o,0,b):this.gl.compressedTexSubImage2D(m,l,u,c,s,o,f,b):this.gl.texSubImage2D(m,l,u,c,s,o,f,p,n,y);break;case"2d-array":case"3d":g?x?this.gl.compressedTexImage3D(m,l,f,s,o,a,0,b):this.gl.compressedTexSubImage3D(m,l,u,c,h,s,o,a,f,b):this.gl.texSubImage3D(m,l,u,c,h,s,o,a,f,p,n,y)}}),this.gl.bindTexture(this.glTarget,null)}_getRowByteAlignment(e,t){return 1}_getFramebuffer(){return this._framebuffer||=this.device.createFramebuffer({id:`framebuffer-for-${this.id}`,width:this.width,height:this.height,colorAttachments:[this]}),this._framebuffer}readDataSyncWebGL(e={}){let t=this._getSupportedColorReadOptions(e),i=this.computeMemoryLayout(t),r=eT[this.glType],n=(0,eC.Ak)(r),s=new n(i.byteLength/n.BYTES_PER_ELEMENT);return this._readColorTextureLayers(t,i,e=>{let r=new n(s.buffer,s.byteOffset+e,i.bytesPerImage/n.BYTES_PER_ELEMENT);this.gl.readPixels(t.x,t.y,t.width,t.height,this.glFormat,this.glType,r)}),s.buffer}_readColorTextureLayers(e,t,i){let r=this._getFramebuffer(),n=t.bytesPerRow/t.bytesPerPixel,s={3333:this.byteAlignment,...n!==e.width?{3330:n}:{}},o=this.gl.getParameter(3074),a=this.gl.bindFramebuffer(36160,r.handle);try{this.gl.readBuffer(36064),eE(this.gl,s,()=>{for(let n=0;n<e.depthOrArrayLayers;n++)this._attachReadSubresource(r,e.mipLevel,e.z+n),i(n*t.bytesPerImage)})}finally{this.gl.bindFramebuffer(36160,a||null),this.gl.readBuffer(o)}}_attachReadSubresource(e,t,i){let r=`${t}:${i}`;if(this._framebufferAttachmentKey!==r){switch(this.dimension){case"2d":this.gl.framebufferTexture2D(36160,36064,3553,this.handle,t);break;case"cube":this.gl.framebufferTexture2D(36160,36064,eI(this.glTarget,this.dimension,i),this.handle,t);break;case"2d-array":case"3d":this.gl.framebufferTextureLayer(36160,36064,this.handle,t,i);break;default:throw Error(`${this} color readback does not support ${this.dimension} textures`)}if(this.device.props.debug){let t=Number(this.gl.checkFramebufferStatus(36160));if(t!==Number(36053))throw Error(`${e} incomplete for ${this} readback (${t})`)}this._framebufferAttachmentKey=r}}generateMipmapsWebGL(e){if(this._assertWritable("generate mipmaps for"),this.device.isTextureFormatRenderable(this.props.format)&&this.device.isTextureFormatFilterable(this.props.format)||(n.R.warn(`${this} is not renderable or filterable, may not be able to generate mipmaps`)(),e?.force))try{this.gl.bindTexture(this.glTarget,this.handle),this.gl.generateMipmap(this.glTarget)}catch(e){n.R.warn(`Error generating mipmap for ${this}: ${e.message}`)()}finally{this.gl.bindTexture(this.glTarget,null)}}_setSamplerParameters(e){for(let[t,i]of(n.R.level>=2&&n.R.log(2,`${this.id} sampler parameters`,this.device.getGLKeys(e))(),this.gl.bindTexture(this.glTarget,this.handle),Object.entries(e))){let e=Number(t);switch(e){case 33082:case 33083:this.gl.texParameterf(this.glTarget,e,i);break;case 10240:case 10241:case 10242:case 10243:case 32882:case 34892:case 34893:this.gl.texParameteri(this.glTarget,e,i);break;case 34046:this.device.features.has("texture-filterable-anisotropic-webgl")&&this.gl.texParameteri(this.glTarget,e,i)}}this.gl.bindTexture(this.glTarget,null)}_getActiveUnit(){return this.gl.getParameter(34016)-33984}_bind(e){let{gl:t}=this;return void 0!==e&&(this._textureUnit=e,t.activeTexture(33984+e)),t.bindTexture(this.glTarget,this.handle),e}_unbind(e){let{gl:t}=this;return void 0!==e&&(this._textureUnit=e,t.activeTexture(33984+e)),t.bindTexture(this.glTarget,null),e}_assertWritable(e){if(this.isHandleBorrowed)throw Error(`Cannot ${e} borrowed read-only ${this}`)}}function eI(e,t,i){return"cube"===t?34069+i:e}var eR=i(21370),eO=i(91963),ek=i(56823),eB=i(33696);let ez={5126:"f32",35664:"vec2<f32>",35665:"vec3<f32>",35666:"vec4<f32>",5124:"i32",35667:"vec2<i32>",35668:"vec3<i32>",35669:"vec4<i32>",5125:"u32",36294:"vec2<u32>",36295:"vec3<u32>",36296:"vec4<u32>",35670:"f32",35671:"vec2<f32>",35672:"vec3<f32>",35673:"vec4<f32>",35674:"mat2x2<f32>",35685:"mat2x3<f32>",35686:"mat2x4<f32>",35687:"mat3x2<f32>",35675:"mat3x3<f32>",35688:"mat3x4<f32>",35689:"mat4x2<f32>",35690:"mat4x3<f32>",35676:"mat4x4<f32>"},eD={35678:{viewDimension:"2d",sampleType:"float"},35680:{viewDimension:"cube",sampleType:"float"},35679:{viewDimension:"3d",sampleType:"float"},35682:{viewDimension:"3d",sampleType:"depth"},36289:{viewDimension:"2d-array",sampleType:"float"},36292:{viewDimension:"2d-array",sampleType:"depth"},36293:{viewDimension:"cube",sampleType:"float"},36298:{viewDimension:"2d",sampleType:"sint"},36299:{viewDimension:"3d",sampleType:"sint"},36300:{viewDimension:"cube",sampleType:"sint"},36303:{viewDimension:"2d-array",sampleType:"uint"},36306:{viewDimension:"2d",sampleType:"uint"},36307:{viewDimension:"3d",sampleType:"uint"},36308:{viewDimension:"cube",sampleType:"uint"},36311:{viewDimension:"2d-array",sampleType:"uint"}},eF={uint8:5121,sint8:5120,unorm8:5121,snorm8:5120,uint16:5123,sint16:5122,unorm16:5123,snorm16:5122,uint32:5125,sint32:5124,float16:5131,float32:5126};function eN(e,t,i,r){let s=r||e.getActiveUniformBlockName(t,i);if(!s)throw Error(`Failed to reflect WebGL uniform block at index ${i}: missing block name`);let o=(r,n)=>{let o=e.getActiveUniformBlockParameter(t,i,r);if(null==o)throw Error(`Failed to reflect WebGL uniform block "${s}": ${n} returned null`);return o},a=eU(o(35391,"UNIFORM_BLOCK_BINDING"),s,"UNIFORM_BLOCK_BINDING",0),l=eU(o(35392,"UNIFORM_BLOCK_DATA_SIZE"),s,"UNIFORM_BLOCK_DATA_SIZE",0),u=eU(o(35394,"UNIFORM_BLOCK_ACTIVE_UNIFORMS"),s,"UNIFORM_BLOCK_ACTIVE_UNIFORMS",0),c=ej(o(35395,"UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES"),s,"UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",u),h=e$(e,t,c,35383,"UNIFORM_TYPE",s,u),d=e$(e,t,c,35384,"UNIFORM_SIZE",s,u),f=e$(e,t,c,35386,"UNIFORM_BLOCK_INDEX",s,u),p=e$(e,t,c,35387,"UNIFORM_OFFSET",s,u),g=e$(e,t,c,35388,"UNIFORM_ARRAY_STRIDE",s,u),m=[];for(let r=0;r<u;r++){if(f[r]!==i)throw Error(`Failed to reflect WebGL uniform block "${s}": active uniform index ${c[r]} belongs to block ${f[r]}, expected ${i}`);let n=c[r],o=e.getActiveUniform(t,n);if(!o)throw Error(`Failed to reflect WebGL uniform block "${s}": getActiveUniform(${n}) returned null`);let a=eU(h[r],s,`UNIFORM_TYPE[${r}]`,1),l=eU(d[r],s,`UNIFORM_SIZE[${r}]`,1),u=eU(p[r],s,`UNIFORM_OFFSET[${r}]`,0),v=eU(g[r],s,`UNIFORM_ARRAY_STRIDE[${r}]`,0);if(o.type!==a||o.size!==l)throw Error(`Failed to reflect WebGL uniform block "${s}": getActiveUniform(${n}) disagrees with getActiveUniforms`);m.push({name:o.name,format:ez[a],arrayLength:l,byteOffset:u,byteStride:v})}let v={name:s,location:a,byteLength:l,vertex:!!o(35396,"UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER"),fragment:!!o(35398,"UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER"),uniformCount:u,uniforms:m},y=new Set(v.uniforms.map(e=>e.name.split(".")[0]).filter(e=>!!e)),b=v.name.replace(/Uniforms$/,"");if(1===y.size&&!y.has(v.name)&&!y.has(b)){let[e]=y;n.R.warn(`Uniform block "${v.name}" uses GLSL instance "${e}". luma.gl binds uniform buffers by block name ("${v.name}") and alias ("${b}"). Prefer matching the instance name to one of those to avoid confusing silent mismatches.`)()}return v}function e$(e,t,i,r,n,s,o){let a=e.getActiveUniforms(t,i,r);if(null===a)throw Error(`Failed to reflect WebGL uniform block "${s}": ${n} returned null`);return ej(a,s,n,o)}function ej(e,t,i,r){if(!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`Failed to reflect WebGL uniform block "${t}": ${i} returned a non-array value`);let n=Array.from(e);if(n.length!==r||n.some(e=>!Number.isInteger(e)))throw Error(`Failed to reflect WebGL uniform block "${t}": ${i} returned ${n.length} invalid values, expected ${r}`);return n}function eU(e,t,i,r){if(!Number.isInteger(e)||e<r)throw Error(`Failed to reflect WebGL uniform block "${t}": ${i} returned ${String(e)}`);return e}class eV extends eR.r{device;handle;vs;fs;introspectedLayout;bindings={};uniforms={};varyings=null;_uniformCount=0;_uniformSetters={};get[Symbol.toStringTag](){return"WEBGLRenderPipeline"}constructor(e,t){super(e,t),this.device=e;let i=this.sharedRenderPipeline||this.device._createSharedRenderPipelineWebGL(t);this.sharedRenderPipeline=i,this.handle=i.handle,this.vs=i.vs,this.fs=i.fs,this.linkStatus=i.linkStatus,this.introspectedLayout=function(e,t,i={}){let r={attributes:[],bindings:[]};for(let s of(r.attributes=function(e,t){let i=[],r=e.getProgramParameter(t,35721);for(let n=0;n<r;n++){let r=e.getActiveAttrib(t,n);if(!r)throw Error("activeInfo");let{name:s,type:o}=r,a=e.getAttribLocation(t,s);if(a>=0){let e=ez[o],t=/instance/i.test(s)?"instance":"vertex";i.push({name:s,location:a,stepMode:t,type:e})}}return i.sort((e,t)=>e.location-t.location),i}(e,t),function(e,t,i){let r=[],s=function(e,t,i){let r=new Map;for(let e of i.uniformBlockLayouts||[])r.set(e.name,function(e){let t=(0,eB.Pr)(e.uniformTypes,{layout:"std140"}),i=function(e,t){let i=[],r=(e,s)=>{if("string"==typeof s){let r=t[e];if(!r)throw Error(`Missing std140 layout field ${e}`);i.push({name:e,format:r.shaderType,arrayLength:1,byteOffset:4*r.offset,byteStride:0});return}if(Array.isArray(s))return void n(e,s[0],s[1]);for(let[t,i]of Object.entries(s))r(`${e}.${t}`,i)},n=(e,r,n)=>{if("string"==typeof r){let r=t[`${e}[0]`],s=n>1?t[`${e}[1]`]:void 0;if(!r)throw Error(`Missing std140 array layout field ${e}[0]`);i.push({name:`${e}[0]`,format:r.shaderType,arrayLength:n,byteOffset:4*r.offset,byteStride:s?(s.offset-r.offset)*4:0});return}if(Array.isArray(r))throw Error(`Nested uniform arrays are not supported for ${e}`);for(let[s,o]of Object.entries(r)){if("string"!=typeof o)throw Error(`Composite uniform array members are not supported for ${e}`);let r=`${e}[0].${s}`,a=`${e}[1].${s}`,l=t[r],u=n>1?t[a]:void 0;if(!l)throw Error(`Missing std140 array layout field ${r}`);i.push({name:r,format:l.shaderType,arrayLength:n,byteOffset:4*l.offset,byteStride:u?(u.offset-l.offset)*4:0})}};for(let[t,i]of Object.entries(e))r(t,i);return i}(e.uniformTypes,t.fields);return{type:"uniform",name:e.name,group:0,location:0,minBindingSize:t.byteLength,uniforms:i}}(e));for(let e of i.shaderLayout?.bindings||[]){var n;"uniform"===(n=e).type&&Number.isInteger(n.minBindingSize)&&n.minBindingSize>=0&&Array.isArray(n.uniforms)&&n.uniforms.every(e=>"string"==typeof e.name&&"string"==typeof e.format&&Number.isInteger(e.arrayLength)&&e.arrayLength>0&&Number.isInteger(e.byteOffset)&&e.byteOffset>=0&&Number.isInteger(e.byteStride)&&e.byteStride>=0)&&r.set(e.name,e)}let s=new Map;for(let i of r.values()){let r=function(e,t,i){for(let r of i.endsWith("Uniforms")?[i,i.slice(0,-8)]:[i,`${i}Uniforms`]){let i=e.getUniformBlockIndex(t,r);if(0xffffffff!==i){if(!Number.isInteger(i)||i<0)throw Error(`Failed to resolve WebGL uniform block "${r}": getUniformBlockIndex returned ${String(i)}`);return{blockIndex:i,blockName:r}}}return null}(e,t,i.name);if(!r)continue;let{blockIndex:n,blockName:o}=r;if(s.has(n))throw Error(`Multiple supplied uniform block layouts resolve to active WebGL block "${o}"`);s.set(n,{name:o,location:n,byteLength:i.minBindingSize,vertex:!!(i.visibility&&1&i.visibility),fragment:!!(i.visibility&&2&i.visibility),uniformCount:i.uniforms.length,uniforms:i.uniforms.map(e=>({...e}))})}return s}(e,t,i);for(let[i,l]of s){r.push(l);try{var o=eN(e,t,i,l.name),a=l;for(let e of o.uniforms){let t=a.uniforms.find(t=>e.name===t.name||e.name.endsWith(`.${t.name}`));if(!t)throw Error(`Failed to validate WebGL uniform block "${a.name}": reflected unexpected member "${e.name}"`);if(e.format!==t.format||e.arrayLength!==t.arrayLength||e.byteOffset!==t.byteOffset||e.byteStride!==t.byteStride)throw Error(`Failed to validate WebGL uniform block "${a.name}": reflected layout for "${e.name}" does not match supplied std140 metadata`)}}catch(t){let e=t instanceof Error?t.message:String(t);n.R.once(0,`WebGL uniform block reflection failed for "${l.name}"; using supplied std140 metadata. ${e}`)()}}let l=e.getProgramParameter(t,35382);if(!Number.isInteger(l)||l<0)throw Error(`Failed to reflect WebGL uniform blocks: ACTIVE_UNIFORM_BLOCKS returned ${String(l)}`);for(let i=0;i<l;i++)s.has(i)||r.push(eN(e,t,i));return r.sort((e,t)=>e.location-t.location),r}(e,t,i))){let e=s.uniforms.map(e=>({name:e.name,format:e.format,byteOffset:e.byteOffset,byteStride:e.byteStride,arrayLength:e.arrayLength}));r.bindings.push({type:"uniform",name:s.name,group:0,location:s.location,visibility:!!s.vertex|2*!!s.fragment,minBindingSize:s.byteLength,uniforms:e})}let s=function(e,t){let i=[],r=e.getProgramParameter(t,35718);for(let n=0;n<r;n++){let r=e.getActiveUniform(t,n);if(!r)throw Error("activeInfo");let{name:s,size:o,type:a}=r,{name:l,isArray:u}=function(e){if("]"!==e[e.length-1])return{name:e,length:1,isArray:!1};let t=/([^[]*)(\[[0-9]+\])?/.exec(e);return{name:(0,K.i)(t?.[1],`Failed to parse GLSL uniform name ${e}`),length:+!!t?.[2],isArray:!!t?.[2]}}(s),c=e.getUniformLocation(t,l),h={location:c,name:l,size:o,type:a,isArray:u};if(i.push(h),h.size>1)for(let r=0;r<h.size;r++){let n=`${l}[${r}]`;c=e.getUniformLocation(t,n);let s={...h,name:n,location:c};i.push(s)}}return i}(e,t),o=0;for(let e of s)if(eD[e.type]){let{viewDimension:t,sampleType:i}=eD[e.type];r.bindings.push({type:"texture",name:e.name,group:0,location:o,viewDimension:t,sampleType:i}),e.textureUnit=o,o+=1}s.length&&(r.uniforms=s);let a=function(e,t){let i=[],r=e.getProgramParameter(t,35971);for(let n=0;n<r;n++){let r=e.getTransformFeedbackVarying(t,n);if(!r)throw Error("activeInfo");let{name:s,type:o,size:a}=r,l=ez[o],{type:u,components:c}=(0,ek.k0)(l);i.push({location:n,name:s,type:u,size:a*c})}return i.sort((e,t)=>e.location-t.location),i}(e,t);return a?.length&&(r.varyings=a),r}(this.device.gl,this.handle,{uniformBlockLayouts:t._uniformBlockLayouts,shaderLayout:t.shaderLayout}),this.device._setWebGLDebugMetadata(this.handle,this,{spector:{id:this.props.id}}),this.shaderLayout=t.shaderLayout?function(e,t){let i={...e,attributes:e.attributes.map(e=>({...e})),bindings:e.bindings.map(e=>({...e}))};for(let e of t?.attributes||[]){let t=i.attributes.find(t=>t.name===e.name);t?(t.type=e.type||t.type,t.stepMode=e.stepMode||t.stepMode):n.R.warn(`shader layout attribute ${e.name} not present in shader`)}for(let e of t?.bindings||[]){let t=eG(i,e.name);if(!t){n.R.warn(`shader layout binding ${e.name} not present in shader`);continue}Object.assign(t,e)}return i}(this.introspectedLayout,t.shaderLayout):this.introspectedLayout}destroy(){this.destroyed||(this.sharedRenderPipeline&&!this.props._sharedRenderPipeline&&this.sharedRenderPipeline.destroy(),this.destroyResource())}setBindings(e,t){for(let[i,r]of Object.entries((0,eO.h0)((0,eO.gO)(this.shaderLayout,e)))){let e=eG(this.shaderLayout,i);if(e){switch(!r&&n.R.warn(`Unsetting binding "${i}" in render pipeline "${this.id}"`)(),e.type){case"uniform":if(!(r instanceof eh)&&!(r.buffer instanceof eh))throw Error("buffer value");break;case"texture":if(!(r instanceof eA||r instanceof eM||r instanceof en))throw Error(`${this} Bad texture binding for ${i}`);break;case"sampler":n.R.warn(`Ignoring sampler ${i}`)();break;default:throw Error(e.type)}this.bindings[i]=r}else{let e=this.shaderLayout.bindings.map(e=>`"${e.name}"`).join(", ");t?.disableWarnings||n.R.warn(`No binding "${i}" in render pipeline "${this.id}", expected one of ${e}`,r)()}}}draw(e){let t=e.renderPass,i=e.bindGroups?(0,eO.h0)(e.bindGroups):e.bindings||this.bindings;return t.setPipeline(this),t.setBindings(i),t.setVertexArray(e.vertexArray),t.draw({parameters:e.parameters,topology:e.topology,isInstanced:e.isInstanced,vertexCount:e.vertexCount,indexCount:e.indexCount,instanceCount:e.instanceCount,firstVertex:e.firstVertex,firstIndex:e.firstIndex,firstInstance:e.firstInstance,baseVertex:e.baseVertex,transformFeedback:e.transformFeedback,uniforms:e.uniforms})}_areTexturesRenderable(e){let t=!0;for(let i of this.shaderLayout.bindings)eW(e,i.name)||(n.R.warn(`Binding ${i.name} not found in ${this.id}`)(),t=!1);return t}_applyBindings(e,t){if(this._syncLinkStatus(),"success"!==this.linkStatus)return;let{gl:i}=this.device;i.useProgram(this.handle);let r=0,s=0;for(let t of this.shaderLayout.bindings){let o=eW(e,t.name);if(!o)throw Error(`No value for binding ${t.name} in ${this.id}`);switch(t.type){case"uniform":let{name:a}=t,l=i.getUniformBlockIndex(this.handle,a);if(0xffffffff===l)throw Error(`Invalid uniform block name ${a}`);i.uniformBlockBinding(this.handle,l,s),o instanceof eh?i.bindBufferBase(35345,s,o.handle):i.bindBufferRange(35345,s,o.buffer.handle,o.offset||0,o.size||o.buffer.byteLength-(o.offset||0)),s+=1;break;case"texture":let u;if(!(o instanceof eA||o instanceof eM||o instanceof en))throw Error("texture");if(o instanceof eA)u=o.texture;else if(o instanceof eM)u=o;else if(o instanceof en&&o.colorAttachments[0]instanceof eA)n.R.warn("Passing framebuffer in texture binding may be deprecated. Use fbo.colorAttachments[0] instead")(),u=o.colorAttachments[0].texture;else throw Error("No texture");i.activeTexture(33984+r),i.bindTexture(u.glTarget,u.handle),r+=1;break;case"sampler":break;case"storage":case"read-only-storage":throw Error(`binding type '${t.type}' not supported in WebGL`)}}}_applyUniforms(e){for(let t of this.shaderLayout.uniforms||[]){let{name:i,location:r,type:n,textureUnit:s}=t,o=e[i]??s;void 0!==o&&function(e,t,i,r){let n=r;!0===n&&(n=1),!1===n&&(n=0);let s="number"==typeof n?[n]:n;switch(i){case 35678:case 35680:case 35679:case 35682:case 36289:case 36292:case 36293:case 36298:case 36299:case 36300:case 36303:case 36306:case 36307:case 36308:case 36311:if("number"!=typeof r)throw Error("samplers must be set to integers");return e.uniform1i(t,r);case 5126:return e.uniform1fv(t,s);case 35664:return e.uniform2fv(t,s);case 35665:return e.uniform3fv(t,s);case 35666:return e.uniform4fv(t,s);case 5124:case 35670:return e.uniform1iv(t,s);case 35667:case 35671:return e.uniform2iv(t,s);case 35668:case 35672:return e.uniform3iv(t,s);case 35669:case 35673:return e.uniform4iv(t,s);case 5125:return e.uniform1uiv(t,s,1);case 36294:return e.uniform2uiv(t,s,2);case 36295:return e.uniform3uiv(t,s,3);case 36296:return e.uniform4uiv(t,s,4);case 35674:return e.uniformMatrix2fv(t,!1,s);case 35675:return e.uniformMatrix3fv(t,!1,s);case 35676:return e.uniformMatrix4fv(t,!1,s);case 35685:return e.uniformMatrix2x3fv(t,!1,s);case 35686:return e.uniformMatrix2x4fv(t,!1,s);case 35687:return e.uniformMatrix3x2fv(t,!1,s);case 35688:return e.uniformMatrix3x4fv(t,!1,s);case 35689:return e.uniformMatrix4x2fv(t,!1,s);case 35690:return e.uniformMatrix4x3fv(t,!1,s)}throw Error("Illegal uniform")}(this.device.gl,r,n,o)}}_syncLinkStatus(){this.linkStatus=this.sharedRenderPipeline.linkStatus}}function eG(e,t){return e.bindings.find(e=>e.name===t||e.name===`${t}Uniforms`||`${e.name}Uniforms`===t)}function eW(e,t){return e[t]||e[`${t}Uniforms`]||e[t.replace(/Uniforms$/,"")]}class eH extends et.F{get[Symbol.toStringTag](){return"SharedRenderPipeline"}constructor(e,t){super(e,t,{...et.F.defaultProps,handle:void 0,vs:void 0,fs:void 0,varyings:void 0,bufferMode:void 0})}}class eq extends eH{device;handle;vs;fs;linkStatus="pending";constructor(e,t){super(e,t),this.device=e,this.handle=t.handle||this.device.gl.createProgram(),this.vs=t.vs,this.fs=t.fs,t.varyings&&t.varyings.length>0&&this.device.gl.transformFeedbackVaryings(this.handle,t.varyings,t.bufferMode||35981),this._linkShaders()}destroy(){this.destroyed||(this.device.gl.useProgram(null),this.device.gl.deleteProgram(this.handle),this.handle.destroyed=!0,this.destroyResource())}async _linkShaders(){let{gl:e}=this.device;if(e.attachShader(this.handle,this.vs.handle),e.attachShader(this.handle,this.fs.handle),n.R.time(4,`linkProgram for ${this.id}`)(),e.linkProgram(this.handle),n.R.timeEnd(4,`linkProgram for ${this.id}`)(),!this.device.features.has("compilation-status-async-webgl")){let e=this._getLinkStatus();this._reportLinkStatus(e);return}n.R.once(1,"RenderPipeline linking is asynchronous")(),await this._waitForLinkComplete(),n.R.info(2,`RenderPipeline ${this.id} - async linking complete: ${this.linkStatus}`)();let t=this._getLinkStatus();this._reportLinkStatus(t)}async _reportLinkStatus(e){if("success"!==e){let t="link-error"===e?"Link error":"Validation error";switch(this.vs.compilationStatus){case"error":throw this.vs.debugShader(),Error(`${this} ${t} during compilation of ${this.vs}`);case"pending":await this.vs.asyncCompilationStatus,this.vs.debugShader()}switch(this.fs?.compilationStatus){case"error":throw this.fs.debugShader(),Error(`${this} ${t} during compilation of ${this.fs}`);case"pending":await this.fs.asyncCompilationStatus,this.fs.debugShader()}let i=this.device.gl.getProgramInfoLog(this.handle);this.device.reportError(Error(`${t} during ${e}: ${i}`),this)(),this.device.debug()}}_getLinkStatus(){let{gl:e}=this.device;return e.getProgramParameter(this.handle,35714)?(this._initializeSamplerUniforms(),e.validateProgram(this.handle),e.getProgramParameter(this.handle,35715))?(this.linkStatus="success","success"):(this.linkStatus="error","validation-error"):(this.linkStatus="error","link-error")}_initializeSamplerUniforms(){let{gl:e}=this.device;e.useProgram(this.handle);let t=0,i=e.getProgramParameter(this.handle,35718);for(let r=0;r<i;r++){let i=e.getActiveUniform(this.handle,r);if(i&&eD[i.type]){let r=i.name.endsWith("[0]"),n=r?i.name.slice(0,-3):i.name,s=e.getUniformLocation(this.handle,n);null!==s&&(t=this._assignSamplerUniform(s,i,r,t))}}}_assignSamplerUniform(e,t,i,r){let{gl:n}=this.device;if(i&&t.size>1){let i=Int32Array.from({length:t.size},(e,t)=>r+t);return n.uniform1iv(e,i),r+t.size}return n.uniform1i(e,r),r+1}async _waitForLinkComplete(){let e=async e=>await new Promise(t=>setTimeout(t,e));if(!this.device.features.has("compilation-status-async-webgl"))return void await e(10);let{gl:t}=this.device;for(;;){if(t.getProgramParameter(this.handle,37297))return;await e(10)}}}class eY extends et.F{get[Symbol.toStringTag](){return"CommandEncoder"}_timeProfilingQuerySet=null;_timeProfilingSlotCount=0;_gpuTimeMs;constructor(e,t){super(e,t,eY.defaultProps),this._timeProfilingQuerySet=t.timeProfilingQuerySet??null,this._timeProfilingSlotCount=0,this._gpuTimeMs=void 0}async resolveTimeProfilingQuerySet(){if(this._gpuTimeMs=void 0,!this._timeProfilingQuerySet)return;let e=Math.floor(this._timeProfilingSlotCount/2);if(e<=0)return;let t=2*e,i=await this._timeProfilingQuerySet.readResults({firstQuery:0,queryCount:t}),r=0n;for(let e=0;e<t;e+=2)r+=i[e+1]-i[e];this._gpuTimeMs=Number(r)/1e6}getTimeProfilingSlotCount(){return this._timeProfilingSlotCount}getTimeProfilingQuerySet(){return this._timeProfilingQuerySet}_applyTimeProfilingToPassProps(e){let t=e||{};if(!this._supportsTimestampQueries()||!this._timeProfilingQuerySet||void 0!==t.timestampQuerySet||void 0!==t.beginTimestampIndex||void 0!==t.endTimestampIndex)return t;let i=this._timeProfilingSlotCount;return i+1>=this._timeProfilingQuerySet.props.count?t:(this._timeProfilingSlotCount+=2,{...t,timestampQuerySet:this._timeProfilingQuerySet,beginTimestampIndex:i,endTimestampIndex:i+1})}_supportsTimestampQueries(){return this.device.features.has("timestamp-query")}static defaultProps={...et.F.defaultProps,measureExecutionTime:void 0,timeProfilingQuerySet:void 0}}class eZ extends et.F{get[Symbol.toStringTag](){return"CommandBuffer"}constructor(e,t){super(e,t,eZ.defaultProps)}static defaultProps={...et.F.defaultProps}}class eK extends eZ{device;handle=null;commands=[];constructor(e,t={}){super(e,t),this.device=e}_executeCommands(e=this.commands){for(let t of e)switch(t.name){case"copy-buffer-to-buffer":!function(e,t){let i=t.sourceBuffer,r=t.destinationBuffer;e.gl.bindBuffer(36662,i.handle),e.gl.bindBuffer(36663,r.handle),e.gl.copyBufferSubData(36662,36663,t.sourceOffset??0,t.destinationOffset??0,t.size),e.gl.bindBuffer(36662,null),e.gl.bindBuffer(36663,null)}(this.device,t.options);break;case"copy-buffer-to-texture":!function(e,t){let{sourceBuffer:i,byteOffset:r=0,destinationTexture:n,mipLevel:s=0,origin:o=[0,0,0],aspect:a="all",bytesPerRow:l,rowsPerImage:u,size:c}=t;if("all"!==a)throw Error("copyBufferToTexture aspect is not supported in WebGL");n.writeBuffer(i,{byteOffset:r,bytesPerRow:l,rowsPerImage:u,mipLevel:s,x:o[0]??0,y:o[1]??0,z:o[2]??0,width:c[0],height:c[1],depthOrArrayLayers:c[2]})}(this.device,t.options);break;case"copy-texture-to-buffer":!function(e,t){let i,{sourceTexture:r,mipLevel:n=0,aspect:s="all",width:o=t.sourceTexture.width,height:a=t.sourceTexture.height,depthOrArrayLayers:l,origin:u=[0,0,0],destinationBuffer:c,byteOffset:h=0,bytesPerRow:d,rowsPerImage:f}=t;if(r instanceof ei.g)return r.readBuffer({x:u[0]??0,y:u[1]??0,z:u[2]??0,width:o,height:a,depthOrArrayLayers:l,mipLevel:n,aspect:s,byteOffset:h},c);if("all"!==s)throw Error("aspect not supported in WebGL");if(0!==n||void 0!==l||d||f)throw Error("not implemented");let{framebuffer:p,destroyFramebuffer:g}=eX(r);try{let t=o||p.width,r=a||p.height,n=(0,K.i)(p.colorAttachments[0]),s=V(n.texture.props.format),l=s.format,d=s.type;e.gl.bindBuffer(35051,c.handle),i=e.gl.bindFramebuffer(36160,p.handle),e.gl.readPixels(u[0],u[1],t,r,l,d,h)}finally{e.gl.bindBuffer(35051,null),void 0!==i&&e.gl.bindFramebuffer(36160,i),g&&p.destroy()}}(this.device,t.options);break;case"copy-texture-to-texture":!function(e,t){let i,r,{sourceTexture:n,destinationMipLevel:s=0,origin:o=[0,0],destinationOrigin:a=[0,0,0],destinationTexture:l}=t,{width:u=t.destinationTexture.width,height:c=t.destinationTexture.height}=t,{framebuffer:h,destroyFramebuffer:d}=eX(n),[f=0,p=0]=o,[g,m,v]=a,y=e.gl.bindFramebuffer(36160,h.handle);if(l instanceof eM)i=l,u=Number.isFinite(u)?u:i.width,c=Number.isFinite(c)?c:i.height,i._bind(0),r=i.glTarget;else throw Error("invalid destination");switch(r){case 3553:case 34067:e.gl.copyTexSubImage2D(r,s,g,m,f,p,u,c);break;case 35866:case 32879:e.gl.copyTexSubImage3D(r,s,g,m,v,f,p,u,c)}i&&i._unbind(),e.gl.bindFramebuffer(36160,y),d&&h.destroy()}(this.device,t.options);break;default:throw Error(t.name)}}}function eX(e){if(e instanceof ei.g){let{width:t,height:i,id:r}=e;return{framebuffer:e.device.createFramebuffer({id:`framebuffer-for-${r}`,width:t,height:i,colorAttachments:[e]}),destroyFramebuffer:!0}}return{framebuffer:e,destroyFramebuffer:!1}}class eQ extends et.F{static defaultClearColor=[0,0,0,1];static defaultClearDepth=1;static defaultClearStencil=0;get[Symbol.toStringTag](){return"RenderPass"}constructor(e,t,i=eQ.defaultProps){super(e,t=eQ.normalizeProps(e,t),i)}static normalizeProps(e,t){return t}static defaultProps={...et.F.defaultProps,framebuffer:null,resolveTargets:void 0,parameters:void 0,clearColor:eQ.defaultClearColor,clearColors:void 0,clearDepth:eQ.defaultClearDepth,clearStencil:eQ.defaultClearStencil,depthReadOnly:!1,stencilReadOnly:!1,discard:!1,occlusionQuerySet:void 0,timestampQuerySet:void 0,beginTimestampIndex:void 0,endTimestampIndex:void 0}}let eJ=[1,2,4,8];class e0 extends eQ{device;handle=null;glParameters={};pipeline=null;bindings={};bindingsPipeline=null;vertexArray=null;constructor(e,t){let i;super(e,t),this.device=e;let r=this.props.framebuffer,n=!r||null===r.handle;if(n&&e.getDefaultCanvasContext()._resizeDrawingBufferIfNeeded(),!t?.parameters?.viewport)if(!n&&r){let{width:e,height:t}=r;i=[0,0,e,t]}else{let[t,r]=e.getDefaultCanvasContext().getDrawingBufferSize();i=[0,0,t,r]}if(this.device.pushState(),this.setParameters({viewport:i,...this.props.parameters}),!n&&r?.colorAttachments.length){let e=r.colorAttachments.map((e,t)=>36064+t);this.device.gl.drawBuffers(e)}else n&&this.device.gl.drawBuffers([1029]);this.clear(),this.props.timestampQuerySet&&void 0!==this.props.beginTimestampIndex&&this.props.timestampQuerySet.writeTimestamp(this.props.beginTimestampIndex)}end(){this.destroyed||(this.props.timestampQuerySet&&void 0!==this.props.endTimestampIndex&&this.props.timestampQuerySet.writeTimestamp(this.props.endTimestampIndex),this.device.popState(),this.destroy())}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}executeBundles(e){throw Error("Render bundles are only supported in WebGPU")}setParameters(e={}){let t={...this.glParameters};t.framebuffer=this.props.framebuffer||null,this.props.depthReadOnly&&(t.depthMask=!this.props.depthReadOnly),t.stencilMask=+!this.props.stencilReadOnly,t[35977]=this.props.discard,e.viewport&&(e.viewport.length>=6?(t.viewport=e.viewport.slice(0,4),t.depthRange=[e.viewport[4],e.viewport[5]]):t.viewport=e.viewport),e.scissorRect&&(t.scissorTest=!0,t.scissor=e.scissorRect),e.blendConstant&&(t.blendColor=e.blendConstant),void 0!==e.stencilReference&&(t[2967]=e.stencilReference,t[36003]=e.stencilReference),"colorMask"in e&&(t.colorMask=eJ.map(t=>!!(t&e.colorMask))),this.glParameters=t,b(this.device.gl,t)}setPipeline(e){this.pipeline=e}setBindings(e,t){if(!this.pipeline)throw Error("RenderPass.setPipeline() must be called before setBindings()");this.bindings=(0,eO.h0)((0,eO.gO)(this.pipeline.shaderLayout,e)),this.bindingsPipeline=this.pipeline}setVertexArray(e){this.vertexArray=e}draw(e){let t=this.pipeline,i=this.vertexArray;if(!t)throw Error("RenderPass.setPipeline() must be called before draw()");if(!i)throw Error("RenderPass.setVertexArray() must be called before draw()");if(t.shaderLayout.bindings.length>0&&this.bindingsPipeline!==t)throw Error("RenderPass.setBindings() must be called after setPipeline() before draw()");t._syncLinkStatus();let{parameters:r=t.props.parameters,topology:s=t.props.topology,vertexCount:o,indexCount:a,instanceCount:l,isInstanced:u=!1,firstVertex:c=0,transformFeedback:h,uniforms:d=t.uniforms}=e,f=function(e){switch(e){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 3;case"triangle-list":return 4;case"triangle-strip":return 5;default:throw Error(e)}}(s),p=!!i.indexBuffer,g=i.indexBuffer?.glIndexType,m=a??o??0;return"success"!==t.linkStatus?(n.R.info(2,`RenderPipeline:${t.id}.draw() aborted - waiting for shader linking`)(),!1):t._areTexturesRenderable(this.bindings)?(this.device.gl.useProgram(t.handle),i.bindBeforeRender(this),h&&h.begin(t.props.topology),t._applyBindings(this.bindings,{disableWarnings:t.props.disableWarnings}),t._applyUniforms(d),!function(e,t,i,r){if(function(e){let t=!0;for(let i in e){t=!1;break}return t}(t))return r(e);e.pushState();try{return function(e,t){let{gl:i}=e;if(t.cullMode)switch(t.cullMode){case"none":i.disable(2884);break;case"front":i.enable(2884),i.cullFace(1028);break;case"back":i.enable(2884),i.cullFace(1029)}if(t.frontFace&&i.frontFace(e_("frontFace",t.frontFace,{ccw:2305,cw:2304})),t.unclippedDepth&&e.features.has("depth-clip-control")&&i.enable(34383),void 0!==t.depthBias&&(i.enable(32823),i.polygonOffset(t.depthBias,t.depthBiasSlopeScale||0)),t.provokingVertex&&e.features.has("provoking-vertex-webgl")){let i=e.getExtension("WEBGL_provoking_vertex").WEBGL_provoking_vertex,r=e_("provokingVertex",t.provokingVertex,{first:36429,last:36430});i?.provokingVertexWEBGL(r)}if((t.polygonMode||t.polygonOffsetLine)&&e.features.has("polygon-mode-webgl")){if(t.polygonMode){let i=e.getExtension("WEBGL_polygon_mode").WEBGL_polygon_mode,r=e_("polygonMode",t.polygonMode,{fill:6914,line:6913});i?.polygonModeWEBGL(1028,r),i?.polygonModeWEBGL(1029,r)}t.polygonOffsetLine&&i.enable(10754)}if(e.features.has("shader-clip-cull-distance-webgl")&&(t.clipDistance0&&i.enable(12288),t.clipDistance1&&i.enable(12289),t.clipDistance2&&i.enable(12290),t.clipDistance3&&i.enable(12291),t.clipDistance4&&i.enable(12292),t.clipDistance5&&i.enable(12293),t.clipDistance6&&i.enable(12294),t.clipDistance7&&i.enable(12295)),void 0!==t.depthWriteEnabled&&i.depthMask(t.depthWriteEnabled),t.depthCompare&&("always"!==t.depthCompare?i.enable(2929):i.disable(2929),i.depthFunc(em("depthCompare",t.depthCompare))),void 0!==t.clearDepth&&i.clearDepth(t.clearDepth),t.stencilWriteMask){let e=t.stencilWriteMask;i.stencilMaskSeparate(1028,e),i.stencilMaskSeparate(1029,e)}if(t.stencilReadMask&&n.R.warn("stencilReadMask not supported under WebGL"),t.stencilCompare){let e=t.stencilReadMask||0xffffffff,r=em("depthCompare",t.stencilCompare);"always"!==t.stencilCompare?i.enable(2960):i.disable(2960),i.stencilFuncSeparate(1028,r,0,e),i.stencilFuncSeparate(1029,r,0,e)}if(t.stencilPassOperation&&t.stencilFailOperation&&t.stencilDepthFailOperation){let e=ev("stencilPassOperation",t.stencilPassOperation),r=ev("stencilFailOperation",t.stencilFailOperation),n=ev("stencilDepthFailOperation",t.stencilDepthFailOperation);i.stencilOpSeparate(1028,r,n,e),i.stencilOpSeparate(1029,r,n,e)}switch(t.blend){case!0:i.enable(3042);break;case!1:i.disable(3042)}if(t.blendColorOperation||t.blendAlphaOperation){let e=ey("blendColorOperation",t.blendColorOperation||"add"),r=ey("blendAlphaOperation",t.blendAlphaOperation||"add");i.blendEquationSeparate(e,r);let n=eb("blendColorSrcFactor",t.blendColorSrcFactor||"one"),s=eb("blendColorDstFactor",t.blendColorDstFactor||"zero"),o=eb("blendAlphaSrcFactor",t.blendAlphaSrcFactor||"one"),a=eb("blendAlphaDstFactor",t.blendAlphaDstFactor||"zero");i.blendFuncSeparate(n,s,o,a)}}(e,t),b(e.gl,i),r(e)}finally{e.popState()}}(this.device,r,this.glParameters,()=>{p&&u?this.device.gl.drawElementsInstanced(f,m,g,c,l||0):p?this.device.gl.drawElements(f,m,g,c):u?this.device.gl.drawArraysInstanced(f,c,o||0,l||0):this.device.gl.drawArrays(f,c,o||0),h&&h.end()}),i.unbindAfterRender(this),!0):(n.R.info(2,`RenderPipeline:${t.id}.draw() aborted - textures not yet loaded`)(),!1)}drawIndirect(e,t=0){throw Error("Indirect drawing is only supported in WebGPU")}drawIndexedIndirect(e,t=0){throw Error("Indirect drawing is only supported in WebGPU")}beginOcclusionQuery(e){let t=this.props.occlusionQuerySet;t?.beginOcclusionQuery()}endOcclusionQuery(){let e=this.props.occlusionQuerySet;e?.endOcclusionQuery()}clear(){let e={...this.glParameters},t=0;this.props.clearColors&&this.props.clearColors.forEach((e,t)=>{e&&this.clearColorBuffer(t,e)}),!1!==this.props.clearColor&&void 0===this.props.clearColors&&(t|=16384,e.clearColor=this.props.clearColor),!1!==this.props.clearDepth&&(t|=256,e.clearDepth=this.props.clearDepth),!1!==this.props.clearStencil&&(t|=1024,e.clearStencil=this.props.clearStencil),0!==t&&eE(this.device.gl,e,()=>{this.device.gl.clear(t)})}clearColorBuffer(e=0,t=[0,0,0,0]){eE(this.device.gl,{framebuffer:this.props.framebuffer},()=>{switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:this.device.gl.clearBufferiv(6144,e,t);break;case Uint8Array:case Uint8ClampedArray:case Uint16Array:case Uint32Array:this.device.gl.clearBufferuiv(6144,e,t);break;case Float32Array:this.device.gl.clearBufferfv(6144,e,t);break;default:throw Error("clearColorBuffer: color must be typed array")}})}}class e2 extends eY{device;handle=null;commandBuffer;constructor(e,t){super(e,t),this.device=e,this.commandBuffer=new eK(e,{id:this.id,userData:this.userData})}destroy(){this.destroyResource()}finish(){return this.destroy(),this.commandBuffer}beginRenderPass(e={}){return new e0(this.device,this._applyTimeProfilingToPassProps(e))}beginComputePass(e={}){throw Error("ComputePass not supported in WebGL")}copyBufferToBuffer(e){this.commandBuffer.commands.push({name:"copy-buffer-to-buffer",options:e})}copyBufferToTexture(e){this.commandBuffer.commands.push({name:"copy-buffer-to-texture",options:e})}copyTextureToBuffer(e){this.commandBuffer.commands.push({name:"copy-texture-to-buffer",options:e})}copyTextureToTexture(e){this.commandBuffer.commands.push({name:"copy-texture-to-texture",options:e})}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}resolveQuerySet(e,t,i){throw Error("resolveQuerySet is not supported in WebGL")}writeTimestamp(e,t){e.writeTimestamp(t)}}class e3 extends et.F{static defaultProps={...et.F.defaultProps,shaderLayout:void 0,bufferLayout:[]};get[Symbol.toStringTag](){return"VertexArray"}maxVertexAttributes;indexBuffer=null;attributes;constructor(e,t){super(e,t,e3.defaultProps),this.maxVertexAttributes=e.limits.maxVertexAttributes,this.attributes=Array(this.maxVertexAttributes).fill(null)}getBufferSlot(e){return null}getDrawValidationError(){return null}setConstantWebGL(e,t){this.device.reportError(Error("constant attributes not supported"),this)()}}var e1=i(25837),e4=i(23098),e6=i(74010),e5=i(77227);class e8 extends e3{get[Symbol.toStringTag](){return"VertexArray"}device;handle;attributeInfosByLocation;buffer=null;bufferValue=null;static isConstantAttributeZeroSupported(e){var t;return"Chrome"===((0,q.B)()?(0,e6.b)(t)?"Electron":(t||e5.gM.userAgent||"").indexOf("Edge")>-1?"Edge":globalThis.chrome?"Chrome":globalThis.safari?"Safari":globalThis.mozInnerScreenX?"Firefox":"Unknown":"Node")}constructor(e,t){for(let i of(super(e,t),this.device=e,this.handle=this.device.gl.createVertexArray(),this.attributeInfosByLocation=Array(this.maxVertexAttributes).fill(null),Object.values((0,e1.P)(t.shaderLayout,t.bufferLayout))))this.attributeInfosByLocation[i.location]=i}destroy(){super.destroy(),this.buffer&&this.buffer?.destroy(),this.handle&&(this.device.gl.deleteVertexArray(this.handle),this.handle=void 0)}setIndexBuffer(e){if(e&&34963!==e.glTarget)throw Error("Use .setBuffer()");this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34963,e?e.handle:null),this.indexBuffer=e,this.device.gl.bindVertexArray(null)}setBuffer(e,t){if(34963===t.glTarget)throw Error("Use .setIndexBuffer()");let{size:i,type:r,stride:n,offset:s,normalized:o,integer:a,divisor:l}=this._getAccessor(e);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34962,t.handle),a?this.device.gl.vertexAttribIPointer(e,i,r,n,s):this.device.gl.vertexAttribPointer(e,i,r,o,n,s),this.device.gl.bindBuffer(34962,null),this.device.gl.enableVertexAttribArray(e),this.device.gl.vertexAttribDivisor(e,l||0),this.attributes[e]=t,this.device.gl.bindVertexArray(null)}setConstantWebGL(e,t){this._enable(e,!1),this.attributes[e]=t}bindBeforeRender(){this.device.gl.bindVertexArray(this.handle),this._applyConstantAttributes()}unbindAfterRender(){this.device.gl.bindVertexArray(null)}_applyConstantAttributes(){for(let e=0;e<this.maxVertexAttributes;++e){let t=this.attributes[e];ArrayBuffer.isView(t)&&this.device.setConstantAttributeWebGL(e,t)}}_getAccessor(e){let t=this.attributeInfosByLocation[e];if(!t)throw Error(`Unknown attribute location ${e}`);let i=A(t.bufferDataType);return{size:t.bufferComponents,type:i,stride:t.byteStride,offset:t.byteOffset,normalized:t.normalized,integer:t.integer,divisor:+("instance"===t.stepMode)}}_enable(e,t=!0){let i=e8.isConstantAttributeZeroSupported(this.device)||0!==e;(t||i)&&(e=Number(e),this.device.gl.bindVertexArray(this.handle),t?this.device.gl.enableVertexAttribArray(e):this.device.gl.disableVertexAttribArray(e),this.device.gl.bindVertexArray(null))}getConstantBuffer(e,t){var i;let r=Array.isArray(i=t)?new Float32Array(i):i,n=r.byteLength*e,s=r.length*e;if(this.buffer&&n!==this.buffer.byteLength)throw Error(`Buffer size is immutable, byte length ${n} !== ${this.buffer.byteLength}.`);let o=!this.buffer;if(this.buffer=this.buffer||this.device.createBuffer({byteLength:n}),o||=!function(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}(r,this.bufferValue)){let e=(0,e4.X)(t.constructor,s);!function(e){let{target:t,source:i,start:r=0,count:n=1}=e,s=i.length,o=n*s,a=0;for(let e=r;a<s;a++)t[e++]=i[a]??0;for(;a<o;)a<o-a?(t.copyWithin(r+a,r,r+a),a*=2):(t.copyWithin(r+a,r,r+o-a),a=o);e.target}({target:e,source:r,start:0,count:s}),this.buffer.write(e),this.bufferValue=t}return this.buffer}}class e9 extends et.F{static defaultProps={...et.F.defaultProps,layout:void 0,buffers:{}};get[Symbol.toStringTag](){return"TransformFeedback"}constructor(e,t){super(e,t,e9.defaultProps)}}class e7 extends e9{device;gl;handle;layout;buffers={};unusedBuffers={};bindOnUse=!0;_bound=!1;constructor(e,t){super(e,t),this.device=e,this.gl=e.gl,this.handle=this.props.handle||this.gl.createTransformFeedback(),this.layout=this.props.layout,t.buffers&&this.setBuffers(t.buffers),Object.seal(this)}destroy(){this.gl.deleteTransformFeedback(this.handle),super.destroy()}begin(e="point-list"){this.gl.bindTransformFeedback(36386,this.handle),this.bindOnUse&&this._bindBuffers(),this.gl.beginTransformFeedback(function(e){switch(e){case"point-list":return 0;case"line-list":case"line-strip":return 1;case"triangle-list":case"triangle-strip":return 4;default:throw Error(e)}}(e))}end(){this.gl.endTransformFeedback(),this.bindOnUse&&this._unbindBuffers(),this.gl.bindTransformFeedback(36386,null)}setBuffers(e){this.buffers={},this.unusedBuffers={},this.bind(()=>{for(let[t,i]of Object.entries(e))this.setBuffer(t,i)})}setBuffer(e,t){let i=this._getVaryingIndex(e),{buffer:r,byteLength:s,byteOffset:o}=this._getBufferRange(t);if(i<0){this.unusedBuffers[e]=r,n.R.warn(`${this.id} unusedBuffers varying buffer ${e}`)();return}this.buffers[i]={buffer:r,byteLength:s,byteOffset:o},this.bindOnUse||this._bindBuffer(i,r,o,s)}getBuffer(e){if(te(e))return this.buffers[e]||null;let t=this._getVaryingIndex(e);return this.buffers[t]??null}bind(e=this.handle){let t;return"function"!=typeof e?(this.gl.bindTransformFeedback(36386,e),this):(this._bound?t=e():(this.gl.bindTransformFeedback(36386,this.handle),this._bound=!0,t=e(),this._bound=!1,this.gl.bindTransformFeedback(36386,null)),t)}unbind(){this.bind(null)}_getBufferRange(e){if(e instanceof eh)return{buffer:e,byteOffset:0,byteLength:e.byteLength};let{buffer:t,byteOffset:i=0,byteLength:r=e.buffer.byteLength}=e;return{buffer:t,byteOffset:i,byteLength:r}}_getVaryingIndex(e){if(te(e))return Number(e);for(let t of this.layout.varyings||[])if(e===t.name)return t.location;return -1}_bindBuffers(){for(let[e,t]of Object.entries(this.buffers)){let{buffer:i,byteLength:r,byteOffset:n}=this._getBufferRange(t);this._bindBuffer(Number(e),i,n,r)}}_unbindBuffers(){for(let e in this.buffers)this.gl.bindBufferBase(35982,Number(e),null)}_bindBuffer(e,t,i=0,r){let n=t&&t.handle;n&&void 0!==r?this.gl.bindBufferRange(35982,e,n,i,r):this.gl.bindBufferBase(35982,e,n)}}function te(e){return"number"==typeof e?Number.isInteger(e):/^\d+$/.test(e)}class tt extends et.F{get[Symbol.toStringTag](){return"QuerySet"}constructor(e,t){super(e,t,tt.defaultProps)}static defaultProps={...et.F.defaultProps,type:void 0,count:void 0}}class ti extends tt{device;handle;_timestampPairs=[];_pendingReads=new Set;_occlusionQuery=null;_occlusionActive=!1;get[Symbol.toStringTag](){return"QuerySet"}constructor(e,t){if(super(e,t),this.device=e,"timestamp"===t.type){if(t.count<2)throw Error("Timestamp QuerySet requires at least two query slots");this._timestampPairs=Array(Math.ceil(t.count/2)).fill(null).map(()=>({activeQuery:null,completedQueries:[]})),this.handle=null}else{if(t.count>1)throw Error("WebGL occlusion QuerySet can only have one value");let e=this.device.gl.createQuery();if(!e)throw Error("WebGL query not supported");this.handle=e}Object.seal(this)}destroy(){if(!this.destroyed){for(let e of(this.handle&&this.device.gl.deleteQuery(this.handle),this._timestampPairs))for(let t of(e.activeQuery&&(this._cancelPendingQuery(e.activeQuery),this.device.gl.deleteQuery(e.activeQuery.handle)),e.completedQueries))this._cancelPendingQuery(t),this.device.gl.deleteQuery(t.handle);for(let e of(this._occlusionQuery&&(this._cancelPendingQuery(this._occlusionQuery),this.device.gl.deleteQuery(this._occlusionQuery.handle)),Array.from(this._pendingReads)))this._cancelPendingQuery(e);this.destroyResource()}}isResultAvailable(e){return"timestamp"===this.props.type?void 0===e?this._timestampPairs.some((e,t)=>this._isTimestampPairAvailable(t)):this._isTimestampPairAvailable(this._getTimestampPairIndex(e)):!!this._occlusionQuery&&this._pollQueryAvailability(this._occlusionQuery)}async readResults(e){let t=e?.firstQuery||0,i=e?.queryCount||this.props.count-t;if(this._validateRange(t,i),"timestamp"===this.props.type){let e=Array(i).fill(0n),r=Math.floor(t/2),n=Math.floor((t+i-1)/2);for(let s=r;s<=n;s++){let r=await this._consumeTimestampPairResult(s),n=2*s,o=n+1;n>=t&&n<t+i&&(e[n-t]=0n),o>=t&&o<t+i&&(e[o-t]=r)}return e}if(!this._occlusionQuery)throw Error("Occlusion query has not been started");return[await this._consumeQueryResult(this._occlusionQuery)]}async readTimestampDuration(e,t){if("timestamp"!==this.props.type)throw Error("Timestamp durations require a timestamp QuerySet");if(e<0||t>=this.props.count||t<=e)throw Error("Timestamp duration range is out of bounds");if(e%2!=0||t!==e+1)throw Error("WebGL timestamp durations require adjacent even/odd query indices");return Number(await this._consumeTimestampPairResult(this._getTimestampPairIndex(e)))/1e6}beginOcclusionQuery(){if("occlusion"!==this.props.type)throw Error("Occlusion queries require an occlusion QuerySet");if(!this.handle)throw Error("WebGL occlusion query is not available");if(this._occlusionActive)throw Error("Occlusion query is already active");this.device.gl.beginQuery(35887,this.handle),this._occlusionQuery={handle:this.handle,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null},this._occlusionActive=!0}endOcclusionQuery(){if(!this._occlusionActive)throw Error("Occlusion query is not active");this.device.gl.endQuery(35887),this._occlusionActive=!1}writeTimestamp(e){if("timestamp"!==this.props.type)throw Error("Timestamp writes require a timestamp QuerySet");let t=this._getTimestampPairIndex(e),i=this._timestampPairs[t];if(e%2==0){if(i.activeQuery)throw Error("Timestamp query pair is already active");let e=this.device.gl.createQuery();if(!e)throw Error("WebGL query not supported");this.device.gl.beginQuery(35007,e),i.activeQuery={handle:e,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null};return}if(!i.activeQuery)throw Error("Timestamp query pair was ended before it was started");this.device.gl.endQuery(35007),i.completedQueries.push(i.activeQuery),i.activeQuery=null}_validateRange(e,t){if(e<0||t<0||e+t>this.props.count)throw Error("Query read range is out of bounds")}_getTimestampPairIndex(e){if(e<0||e>=this.props.count)throw Error("Query index is out of bounds");return Math.floor(e/2)}_isTimestampPairAvailable(e){let t=this._timestampPairs[e];return!!t&&0!==t.completedQueries.length&&this._pollQueryAvailability(t.completedQueries[0])}_pollQueryAvailability(e){if(e.cancelled||this.destroyed)return e.result=0n,!0;if(null!==e.result||e.disjoint)return!0;if(!this.device.gl.getQueryParameter(e.handle,34919))return!1;let t=!!this.device.gl.getParameter(36795);return e.disjoint=t,e.result=t?0n:BigInt(this.device.gl.getQueryParameter(e.handle,34918)),!0}async _consumeTimestampPairResult(e){let t=this._timestampPairs[e];if(!t||0===t.completedQueries.length)throw Error("Timestamp query pair has no completed result");let i=t.completedQueries.shift();try{return await this._consumeQueryResult(i)}finally{this.device.gl.deleteQuery(i.handle)}}_consumeQueryResult(e){return e.promise||(this._pendingReads.add(e),e.promise=new Promise((t,i)=>{e.resolve=t,e.reject=i;let r=()=>{if(e.pollRequestId=null,e.cancelled||this.destroyed){this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,t(0n);return}if(!this._pollQueryAvailability(e)){e.pollRequestId=this._requestAnimationFrame(r);return}this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,e.disjoint?i(Error("GPU timestamp query was invalidated by a disjoint event")):t(e.result||0n)};r()})),e.promise}_cancelPendingQuery(e){if(this._pendingReads.delete(e),e.cancelled=!0,null!==e.pollRequestId&&(this._cancelAnimationFrame(e.pollRequestId),e.pollRequestId=null),e.resolve){let t=e.resolve;e.promise=null,e.resolve=null,e.reject=null,t(0n)}}_requestAnimationFrame(e){return requestAnimationFrame(e)}_cancelAnimationFrame(e){cancelAnimationFrame(e)}}class tr extends et.F{static defaultProps={...et.F.defaultProps};get[Symbol.toStringTag](){return"Fence"}constructor(e,t={}){super(e,t,tr.defaultProps)}}class tn extends tr{device;gl;handle;signaled;_signaled=!1;constructor(e,t={}){super(e,{}),this.device=e,this.gl=e.gl;let i=this.props.handle||this.gl.fenceSync(this.gl.SYNC_GPU_COMMANDS_COMPLETE,0);if(!i)throw Error("Failed to create WebGL fence");this.handle=i,this.signaled=new Promise(e=>{let t=()=>{let i=this.gl.clientWaitSync(this.handle,0,0);i===this.gl.ALREADY_SIGNALED||i===this.gl.CONDITION_SATISFIED?(this._signaled=!0,e()):setTimeout(t,1)};t()})}isSignaled(){if(this._signaled)return!0;let e=this.gl.getSyncParameter(this.handle,this.gl.SYNC_STATUS);return this._signaled=e===this.gl.SIGNALED,this._signaled}destroy(){this.destroyed||this.gl.deleteSync(this.handle)}}var ts=i(15821);function to(e){switch(e){case 6406:case 33326:case 6403:case 36244:return 1;case 33339:case 33340:case 33328:case 33320:case 33319:return 2;case 6407:case 36248:case 34837:return 3;case 6408:case 36249:case 34836:return 4;default:return 0}}function ta(e){return e instanceof er?{framebuffer:e,deleteFramebuffer:!1}:{framebuffer:function(e,t){let{device:i,width:r,height:n,id:s}=e;return i.createFramebuffer({...void 0,id:`framebuffer-for-${s}`,width:r,height:n,colorAttachments:[e]})}(e),deleteFramebuffer:!0}}class tl extends r.pF{static getDeviceFromContext(e){return e?e.luma?.device??null:null}type="webgl";handle;features;limits;info;canvasContext;preferredColorFormat="rgba8unorm";preferredDepthFormat="depth24plus";commandEncoder;lost;_resolveContextLost;_isLost=!1;gl;_glKeyByValue=null;_constants;extensions;_polyfilled=!1;spectorJS;get[Symbol.toStringTag](){return"WebGLDevice"}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}isVertexFormatSupported(e){return"unorm8x4-bgra"!==e}constructor(e){super({...e,id:e.id||function(e="id"){eu[e]=eu[e]||1;let t=eu[e]++;return`${e}-${t}`}("webgl-device")});let t=r.pF._getCanvasContextProps(e);if(!t)throw Error("WebGLDevice requires props.createCanvasContext to be set");let i=t.canvas?.gl??null,s=tl.getDeviceFromContext(i);if(s)throw Error(`WebGL context already attached to device ${s.id}`);this.canvasContext=new es(this,t),this.lost=new Promise(e=>{this._resolveContextLost=e});let o={...e.webgl};"premultiplied"===t.alphaMode&&(o.premultipliedAlpha=!0),void 0!==e.powerPreference&&(o.powerPreference=e.powerPreference),void 0!==e.failIfMajorPerformanceCaveat&&(o.failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat);let a=this.props._handle||function(e,t,i){let r="",n=e=>{let t=e.statusMessage;t&&(r||=t)};e.addEventListener("webglcontextcreationerror",n,!1);let s=!0!==i.failIfMajorPerformanceCaveat,o={preserveDrawingBuffer:!0,...i,failIfMajorPerformanceCaveat:!0},a=null;try{(a||=e.getContext("webgl2",o))||!o.failIfMajorPerformanceCaveat||(r||="Only software GPU is available. Set `failIfMajorPerformanceCaveat: false` to allow.");let i=!1;if(!a&&s&&(o.failIfMajorPerformanceCaveat=!1,a=e.getContext("webgl2",o),i=!0),!a&&(a=e.getContext("webgl",{}))&&(a=null,r||="Your browser only supports WebGL1"),!a)throw r||="Your browser does not support WebGL",Error(`Failed to create WebGL context: ${r}`);S(a).softwareRenderer=i;let{onContextLost:n,onContextRestored:l}=t;return e.addEventListener("webglcontextlost",e=>n(e),!1),e.addEventListener("webglcontextrestored",e=>l(e),!1),a}finally{e.removeEventListener("webglcontextcreationerror",n,!1)}}(this.canvasContext.canvas,{onContextLost:e=>this._resolveContextLost?.({reason:"destroyed",message:"Entered sleep mode, or too many apps or browser tabs are using the GPU."}),onContextRestored:e=>{console.log("WebGL context restored")}},o);if(!a)throw Error("WebGL context creation failed");if(s=tl.getDeviceFromContext(a)){if(e._reuseDevices)return n.R.log(1,`Not creating a new Device, instead returning a reference to Device ${s.id} already attached to WebGL context`,s)(),this.canvasContext.destroy(),s._reused=!0,s;throw Error(`WebGL context already attached to device ${s.id}`)}this.handle=a,this.gl=a,this.spectorJS=(0,el.c0)({...this.props,gl:this.handle});let l=S(this.handle);l.device=this,l.extensions||(l.extensions={}),this.extensions=l.extensions,this.info=function(e,t){var i,r;let n=e.getParameter(7936),s=e.getParameter(7937);C(e,"WEBGL_debug_renderer_info",t);let o=t.WEBGL_debug_renderer_info,a=e.getParameter(o?o.UNMASKED_VENDOR_WEBGL:7936),l=e.getParameter(o?o.UNMASKED_RENDERER_WEBGL:7937),u=a||n,c=l||s,h=e.getParameter(7938),d=E(u,c),f=(i=u,r=c,/Metal/i.exec(i)||/Metal/i.exec(r)?"metal":/ANGLE/i.exec(i)||/ANGLE/i.exec(r)?"opengl":"unknown");return{type:"webgl",gpu:d,gpuType:function(e,t){if(/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t))return"cpu";switch(E(e,t)){case"apple":var i,r;return(i=e,r=t,/Apple (M\d|A\d|GPU)/i.test(`${i} ${r}`))?"integrated":"unknown";case"intel":return"integrated";case"software":return"cpu";case"unknown":return"unknown";default:return"discrete"}}(u,c),gpuBackend:f,vendor:u,renderer:c,version:h,shadingLanguage:"glsl",shadingLanguageVersion:300}}(this.gl,this.extensions),this.limits=new H(this.gl),this.features=new W(this.gl,this.extensions,this.props._disabledFeatures),this.props._initializeFeatures&&this.features.initializeFeatures(),new w(this.gl,{log:(...e)=>n.R.log(1,...e)()}).trackState(this.gl,{copyState:!1}),(e.debug||e.debugWebGL)&&(this.gl=(0,el.Pz)(this.gl,{debugWebGL:!0,traceWebGL:e.debugWebGL}),n.R.warn("WebGL debug mode activated. Performance reduced.")()),e.debugWebGL&&(n.R.level=Math.max(n.R.level,1)),this.commandEncoder=new e2(this,{id:`${this}-command-encoder`}),this.canvasContext._startObservers()}destroy(){this.props._reuseDevices||this._reused||(this._isLost=!0,this.commandEncoder?.destroy(),S(this.handle).device=null)}get isLost(){return this._isLost||this.gl.isContextLost()}createCanvasContext(e){throw Error("WebGL only supports a single canvas")}createPresentationContext(e){return new ea(this,e||{})}createBuffer(e){return new eh(this,this._normalizeBufferProps(e))}createTexture(e){return new eM(this,e)}createExternalTexture(e){throw Error("ExternalTexture is not available on WebGL")}createSampler(e){return new eS(this,e)}createShader(e){return new ep(this,e)}createFramebuffer(e){return new en(this,e)}createVertexArray(e){return new e8(this,e)}createTransformFeedback(e){return new e7(this,e)}createQuerySet(e){return new ti(this,e)}createFence(){return new tn(this)}createRenderPipeline(e){return new eV(this,e)}_createSharedRenderPipelineWebGL(e){return new eq(this,e)}createComputePipeline(e){throw Error("ComputePipeline not supported in WebGL")}createRenderBundleEncoder(e){throw Error("Render bundles are only supported in WebGPU")}createCommandEncoder(e={}){return new e2(this,e)}submit(e){let t=null;e||({submittedCommandEncoder:t,commandBuffer:e}=this._finalizeDefaultCommandEncoderForSubmit());try{e._executeCommands(),t&&t.resolveTimeProfilingQuerySet().then(()=>{this.commandEncoder._gpuTimeMs=t._gpuTimeMs}).catch(()=>{})}finally{e.destroy()}}writeBufferViaCommandEncoder(e,t,i,r=0){t.write(i,r)}_finalizeDefaultCommandEncoderForSubmit(){let e=this.commandEncoder,t=e.finish();return this.commandEncoder.destroy(),this.commandEncoder=this.createCommandEncoder({id:e.props.id,timeProfilingQuerySet:e.getTimeProfilingQuerySet()}),{submittedCommandEncoder:e,commandBuffer:t}}readPixelsToArrayWebGL(e,t){return function(e,t){let{sourceX:i=0,sourceY:r=0,sourceAttachment:n=0}=t||{},{target:s=null,sourceWidth:o,sourceHeight:a,sourceDepth:l,sourceFormat:u,sourceType:c}=t||{},{framebuffer:h,deleteFramebuffer:d}=ta(e),{gl:f,handle:p}=h;o||=h.width,a||=h.height;let g=h.colorAttachments[n]?.texture;if(!g)throw Error(`Invalid framebuffer attachment ${n}`);l=g?.depth||1,u||=g?.glFormat||6408,c||=g?.glType||5121,s=function(e,t,i,r,n,s){if(e)return e;let o=eT[t||=5121];return new(ts.r.getTypedArrayConstructor(o))(r*n*to(i))}(s,c,u,o,a,0);let m=ts.r.getDataType(s);c=c||eF[m];let v=f.bindFramebuffer(36160,p);return f.readBuffer(36064+n),f.readPixels(i,r,o,a,u,c,s),f.readBuffer(36064),f.bindFramebuffer(36160,v||null),d&&h.destroy(),s}(e,t)}readPixelsToBufferWebGL(e,t){return function(e,t){let{target:i,sourceX:r=0,sourceY:n=0,sourceFormat:s=6408,targetByteOffset:o=0}=t||{},{sourceWidth:a,sourceHeight:l,sourceType:u}=t||{},{framebuffer:c,deleteFramebuffer:h}=ta(e);a=a||c.width,l=l||c.height,u=u||5121;let d=i;if(!d){let e=o+a*l*to(s)*function(e){switch(e){case 5121:return 1;case 33635:case 32819:case 32820:return 2;case 5126:return 4;default:return 0}}(u);d=c.device.createBuffer({byteLength:e})}let f=e.device.createCommandEncoder();return f.copyTextureToBuffer({sourceTexture:e,width:a,height:l,origin:[r,n],destinationBuffer:d,byteOffset:o}),f.destroy(),h&&c.destroy(),d}(e,t)}setParametersWebGL(e){b(this.gl,e)}getParametersWebGL(e){return _(this.gl,e)}withParametersWebGL(e,t){return eE(this.gl,e,t)}resetWebGL(){n.R.warn("WebGLDevice.resetWebGL is deprecated, use only for debugging")(),b(this.gl,s)}_getDeviceSpecificTextureFormatCapabilities(e){return function(e,t,i){let r=t.create,n=U[t.format];n?.gl===void 0&&(r=!1),n?.x&&(r=r&&!!C(e,n.x,i)),"stencil8"===t.format&&(r=!1);let s=n?.r!==!1&&(n?.r===void 0||j(e,n.r,i)),o=r&&t.render&&s&&function(e,t,i){let r=U[t],n=r?.gl;if(void 0===n||r?.x&&!C(e,r.x,i))return!1;let s=e.getParameter(32873),o=e.getParameter(36006),a=e.createTexture(),l=e.createFramebuffer();if(!a||!l)return!1;let u=Number(0),c=Number(e.getError());for(;c!==u;)c=e.getError();let h=!1;try{if(e.bindTexture(3553,a),e.texStorage2D(3553,1,n,1,1),Number(e.getError())!==u)return!1;e.bindFramebuffer(36160,l),e.framebufferTexture2D(36160,36064,3553,a,0),h=Number(e.checkFramebufferStatus(36160))===Number(36053)&&Number(e.getError())===u}finally{e.bindFramebuffer(36160,o),e.deleteFramebuffer(l),e.bindTexture(3553,s),e.deleteTexture(a)}return h}(e,t.format,i);return{format:t.format,create:r&&t.create,render:o,filter:r&&t.filter,blend:r&&t.blend,store:r&&t.store}}(this.gl,e,this.extensions)}loseDevice(){let e=!1,t=this.getExtension("WEBGL_lose_context").WEBGL_lose_context;return t&&(e=!0,t.loseContext()),this._resolveContextLost?.({reason:"destroyed",message:"Application triggered context loss"}),e}pushState(){w.get(this.gl).push()}popState(){w.get(this.gl).pop()}getGLKey(e,t){let i=this._getGLKeyByValue().get(Number(e));return i||(t?.emptyIfUnknown?"":String(e))}getGLKeys(e){let t={emptyIfUnknown:!0};return Object.entries(e).reduce((e,[i,r])=>(e[`${i}:${this.getGLKey(i,t)}`]=`${r}:${this.getGLKey(r,t)}`,e),{})}_getGLKeyByValue(){return this._glKeyByValue??=function(e){let t=new Map;for(let i in e){let r=e[i];if(i<"a"){let e=t.get(r);t.set(r,e?`${e}, GL.${i}`:`GL.${i}`)}}return t}(this.gl),this._glKeyByValue}setConstantAttributeWebGL(e,t){let i=this.limits.maxVertexAttributes;this._constants=this._constants||Array(i).fill(null);let r=this._constants[e];switch(r&&function(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}(r,t)&&n.R.info(1,`setConstantAttributeWebGL(${e}) could have been skipped, value unchanged`)(),this._constants[e]=t,t.constructor){case Float32Array:var s,o,a,l,u,c,h=this,d=e,f=t;switch(f.length){case 1:h.gl.vertexAttrib1fv(d,f);break;case 2:h.gl.vertexAttrib2fv(d,f);break;case 3:h.gl.vertexAttrib3fv(d,f);break;case 4:h.gl.vertexAttrib4fv(d,f)}break;case Int32Array:s=this,o=e,a=t,s.gl.vertexAttribI4iv(o,a);break;case Uint32Array:l=this,u=e,c=t,l.gl.vertexAttribI4uiv(u,c);break;default:throw Error("constant")}}getExtension(e){return C(this.gl,e,this.extensions),this.extensions}_setWebGLDebugMetadata(e,t,i){e.luma=t,e.__SPECTOR_Metadata={props:i.spector,id:i.spector.id}}}},43626:(e,t,i)=>{"use strict";i.d(t,{b:()=>function e(t,i,r){if(t===i)return!0;if(!r||!t||!i)return!1;if(Array.isArray(t)){if(!Array.isArray(i)||t.length!==i.length)return!1;for(let n=0;n<t.length;n++)if(!e(t[n],i[n],r-1))return!1;return!0}if(Array.isArray(i))return!1;if("object"==typeof t&&"object"==typeof i){let n=Object.keys(t),s=Object.keys(i);if(n.length!==s.length)return!1;for(let s of n)if(!i.hasOwnProperty(s)||!e(t[s],i[s],r-1))return!1;return!0}return!1}})},43863:(e,t,i)=>{"use strict";i.d(t,{He:()=>s,Y$:()=>n,_R:()=>a,fX:()=>o,jY:()=>l});var r=i(96356);function n(e,t){if(!e||!t.some(e=>e.bindingLayout?.length))return e;let i={...e,bindings:e.bindings.map(e=>({...e}))};for(let r of("attributes"in(e||{})&&(i.attributes=e?.attributes||[]),t))for(let e of r.bindingLayout||[])for(let t of function(e){let t=new Set([e,`${e}Uniforms`]);return e.endsWith("Uniforms")||t.add(`${e}Sampler`),[...t]}(e.name)){let r=i.bindings.find(e=>e.name===t);r?.group===0&&(r.group=e.group),r&&void 0!==e.visibility&&(r.visibility=e.visibility)}return i}function s(e,t,i=[]){return e?t?{...e,attributes:e.attributes.length?function(e,t){let i=e.map(e=>({...e})),r=new Map(e.map(e=>[e.name,e])),n=new Map(e.map(e=>[e.location,e]));for(let e of t){let t=r.get(e.name);if(t){if(t.type!==e.type||t.location!==e.location)throw Error(`Shader attribute "${e.name}" conflicts with its inferred type or location`);continue}let s=n.get(e.location);if(s)throw Error(`Shader attributes "${s.name}" and "${e.name}" both use location ${e.location}`);i.push({...e})}return i}(e.attributes,t.attributes.filter(e=>i.includes(e.name))):t.attributes,bindings:function(e,t){let i=e.map(e=>({...e})),r=new Set(e.map(e=>e.name)),n=new Set(e.map(e=>`${e.group}:${e.location}`));for(let e of t){let t=`${e.group}:${e.location}`;r.has(e.name)||n.has(t)||i.push({...e})}return i}(e.bindings,t.bindings)}:e:t}function o(e){return!!(e.uniformTypes&&!function(e){for(let t in e)return!1;return!0}(e.uniformTypes))}function a(e){let t=[];for(let i of e){let e=(0,r.Uj)(i),n=new Set([i.vs,i.fs].flatMap(e=>e?(0,r.V$)(e).filter(e=>e.isStd140).map(e=>e.blockName):[])),s=n.has(e)?e:1===n.size?n.values().next().value:void 0;o(i)&&s&&t.push({name:s,uniformTypes:i.uniformTypes})}return t}function l(e,t){let i=[],r=new Set;for(let n of[...e||[],...t||[]])r.has(n.name)||(r.add(n.name),i.push(n));return i}},44293:(e,t,i)=>{"use strict";function r(e,t){switch(e){case"u32":return`${t}u`;case"f32":return Number.isInteger(t)?`${t}.0`:`${t}`;default:return`${t}`}}function n(e,t){switch(e){case"uint32":return r("u32",Math.trunc(t));case"sint32":return`${Math.trunc(t)}`;case"float32":return r("f32",t);default:throw Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function s(e){switch(e){case"uint32":return"0u";case"sint32":return"0";case"float32":return"0.0";default:throw Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function o(e){switch(e){case"uint32":return"u32";case"sint32":return"i32";case"float32":return"f32";default:throw Error(`WebGPU operations only support 32-bit storage types, got ${e}`)}}i.d(t,{C1:()=>n,Lm:()=>r,_1:()=>s,iP:()=>o})},46043:(e,t,i)=>{"use strict";i.d(t,{H:()=>ev});var r=i(29239),n=i(11986);let s={};class o extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response}let a=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,l=/^([-\w.]+\/[-\w.+]+)/;function u(e,t){return e.toLowerCase()===t.toLowerCase()}function c(e){let t=a.exec(e);return t?t[1]:""}var h=i(62764);function d(e){return(0,r.Sv)(e)?e.url:(0,r.qf)(e)?("name"in e?e.name:"")||"":"string"==typeof e?e:""}function f(e){if((0,r.Sv)(e)){let t=e.headers.get("content-type")||"",i=(0,h.S3)(e.url);return function(e){let t=l.exec(e);return t?t[1]:e}(t)||c(i)}return(0,r.qf)(e)?e.type||"":"string"==typeof e?c(e):""}async function p(e){var t;if((0,r.Sv)(e))return e;let i={},n=(t=e,(0,r.Sv)(t)?t.headers["content-length"]||-1:(0,r.qf)(t)?t.size:"string"==typeof t?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1);n>=0&&(i["content-length"]=String(n));let s=d(e),o=f(e);o&&(i["content-type"]=o);let a=await v(e);a&&(i["x-first-bytes"]=a),"string"==typeof e&&(e=new TextEncoder().encode(e));let l=new Response(e,{headers:i});return Object.defineProperty(l,"url",{value:s}),l}async function g(e){if(!e.ok)throw await m(e)}async function m(e){let t=(0,h.E1)(e.url),i=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;i=i.length>100?`${i.slice(0,100)}...`:i;let r={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get("Content-Type");r.reason=!e.bodyUsed&&t?.includes("application/json")?await e.json():await e.text()}catch(e){}return new o(i,r)}async function v(e){if("string"==typeof e)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let i=new FileReader;i.onload=t=>e(t?.target?.result),i.readAsDataURL(t)})}if(e instanceof ArrayBuffer){let t=function(e){let t="",i=new Uint8Array(e);for(let e=0;e<i.byteLength;e++)t+=String.fromCharCode(i[e]);return btoa(t)}(e.slice(0,5));return`data:base64,${t}`}return null}async function y(e,t){if("string"==typeof e){var i;let r=function(e){for(let t in s)if(e.startsWith(t)){let i=s[t];e=e.replace(t,i)}return e.startsWith("http://")||e.startsWith("https://")||(e=`${e}`),e}(e);return!((i=r).startsWith("http:")||i.startsWith("https:"))&&!r.startsWith("data:")&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(r,t):await fetch(r,t)}return await p(e)}var b=i(19523);function _(e,t){let i=(0,b.pp)(),n=e||i,s=n.fetch??n.core?.fetch;return"function"==typeof s?s:(0,r.Gv)(s)?e=>y(e,s):t?.fetch?t?.fetch:y}var x=i(99225);let w={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:"undefined"!=typeof global&&global,document:"undefined"!=typeof document&&document};w.self||w.window||w.global,w.window||w.self||w.global,w.global||w.self||w.window,w.document;let P="object"!=typeof x||"[object process]"!==String(x)||!0,S="undefined"!=typeof window&&void 0!==window.orientation,C=void 0!==x&&x.version&&/v([0-9]*)/.exec(x.version);C&&parseFloat(C[1]);class E{terminate(){}}function L(e,t){if(!e)throw Error(t||"loaders.gl assertion failed.")}let A=new Map;function T(e){let t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}function M(e){return!!e&&!!(e instanceof ArrayBuffer||"undefined"!=typeof MessagePort&&e instanceof MessagePort||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas)}let I=()=>{};class R{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return"undefined"!=typeof Worker&&P||!P}constructor(e){let{name:t,source:i,url:r}=e;L(i||r),this.name=t,this.source=i,this.url=r,this.onMessage=I,this.onError=e=>console.log(e),this.worker=P?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=I,this.onError=I,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t=t||function e(t,i=!0,r){let n=r||new Set;if(t){if(M(t))n.add(t);else if(M(t.buffer))n.add(t.buffer);else if(ArrayBuffer.isView(t));else if(i&&"object"==typeof t)for(let r in t)e(t[r],i,n)}return void 0===r?Array.from(n):[]}(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t="Failed to load ";return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){var e,t,i;let r;this._loadableURL=(L((e={source:this.source,url:this.url}).source&&!e.url||!e.source&&e.url),(r=A.get(e.source||e.url))||(e.url&&(r=(t=e.url).startsWith("http")?T((i=t,`\
try {
  importScripts('${i}');
} catch (error) {
  console.error(error);
  throw error;
}`)):t,A.set(e.url,r)),e.source&&(r=T(e.source),A.set(e.source,r))),L(r),r);let n=new Worker(this._loadableURL,{name:this.name});return n.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error("No data received"))},n.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},n.onmessageerror=e=>console.error(e),n}_createNodeWorker(){let e;if(this.url)e=new E(this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(".ts")||this.url.endsWith(".mjs")?"module":"commonjs"});else if(this.source)e=new E(this.source,{eval:!0});else throw Error("no worker");return e.on("message",e=>{this.onMessage(e)}),e.on("error",e=>{this.onError(e)}),e.on("exit",e=>{}),e}}class O{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:t})}done(e){L(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){L(this.isRunning),this.isRunning=!1,this._reject(e)}}class k{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return R.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},void 0!==e.name&&(this.name=e.name),void 0!==e.maxConcurrency&&(this.maxConcurrency=e.maxConcurrency),void 0!==e.maxMobileConcurrency&&(this.maxMobileConcurrency=e.maxMobileConcurrency),void 0!==e.reuseWorkers&&(this.reuseWorkers=e.reuseWorkers),void 0!==e.onDebug&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,i)=>e.done(i),i=(e,t)=>e.error(t)){let r=new Promise(r=>(this.jobQueue.push({name:e,onMessage:t,onError:i,onStart:r}),this));return this._startQueuedJob(),await r}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:"Starting job",name:t.name,workerThread:e,backlog:this.jobQueue.length});let i=new O(t.name,e);e.onMessage=e=>t.onMessage(i,e.type,e.payload),e.onError=e=>t.onError(i,e),t.onStart(i);try{await i.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!P||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new R({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return S?this.maxMobileConcurrency:this.maxConcurrency}}let B={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}};class z{props;workerPools=new Map;static _workerFarm;static isSupported(){return R.isSupported()}static getWorkerFarm(e={}){return z._workerFarm=z._workerFarm||new z({}),z._workerFarm.setProps(e),z._workerFarm}constructor(e){this.props={...B},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){for(let t of(this.props={...this.props,...e},this.workerPools.values()))t.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:i,url:r}=e,n=this.workerPools.get(t);return n||((n=new k({name:t,source:i,url:r})).setProps(this._getWorkerPoolProps()),this.workerPools.set(t,n)),n}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}async function D(e,t,i,r,n){let s=e.id,o=function(e,t={}){let i=t[e.id]||{},r=P?e.workerFile||`${e.id}-worker.js`:`${e.id}-worker-node.js`,n=i.workerUrl;if(n||"compression"!==e.id||(n=t.workerUrl),"test"===(t._workerType||t?.core?._workerType)&&(n=P?`modules/${e.module}/dist/${r}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!n){let t=e.version;"latest"===t&&(t="latest");let i=t?`@${t}`:"";n=`https://unpkg.com/@loaders.gl/${e.module}${i}/dist/${r}`}return L(n),n}(e,i),a=z.getWorkerFarm(i?.core).getWorkerPool({name:s,url:o});(i=JSON.parse(JSON.stringify(i||{})))._workerLoaderId=e.id,r=JSON.parse(JSON.stringify(r||{}));let l=await a.startJob("process-on-worker",F.bind(null,n));l.postMessage("process",{input:t,options:i,context:r});let u=await l.result;return await u.result}async function F(e,t,i,r){switch(i){case"done":t.done(r);break;case"error":t.error(Error(r.error));break;case"process":let{id:n,input:s,options:o}=r;try{let i=await e(s,o);t.postMessage("done",{id:n,result:i})}catch(i){let e=i instanceof Error?i.message:"unknown error";t.postMessage("error",{id:n,error:e})}break;default:console.warn(`parse-with-worker unknown message ${i}`)}}let N=(globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.5.2"),globalThis._loadersgl_.version);function $(e){return e&&"object"==typeof e&&e.isBuffer}function j(e){if($(e)||e instanceof ArrayBuffer)return e;if((0,r.L8)(e))return V(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return 0===e.byteOffset&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if("string"==typeof e)return new TextEncoder().encode(e).buffer;if(e&&"object"==typeof e&&e._toArrayBuffer)return e._toArrayBuffer();throw Error("toArrayBuffer")}function U(e){if(e instanceof ArrayBuffer)return e;if((0,r.L8)(e))return V(e);let{buffer:t,byteOffset:i,byteLength:n}=e;return t instanceof ArrayBuffer&&0===i&&n===t.byteLength?t:V(t,i,n)}function V(e,t=0,i=e.byteLength-t){let r=new Uint8Array(e,t,i),n=new Uint8Array(r.length);return n.set(r),n.buffer}async function G(e){let t=[];for await(let i of e)t.push(function(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:i,byteLength:r}=e;return W(t,i,r)}return W(e)}(i));return function(...e){var t=e;let i=t.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),r=new Uint8Array(i.reduce((e,t)=>e+t.byteLength,0)),n=0;for(let e of i)r.set(e,n),n+=e.byteLength;return r.buffer}(...t)}function W(e,t=0,i=e.byteLength-t){let r=new Uint8Array(e,t,i),n=new Uint8Array(r.length);return n.set(r),n.buffer}async function*H(e,t){let i=t?.chunkSize||1048576,r=0;for(;r<e.size;){let t=r+i,n=await e.slice(r,t).arrayBuffer();r=t,yield n}}var q=i(21652);function Y(e,t){return q.Bd?Z(e,t):K(e,t)}async function*Z(e,t){let i,r=e.getReader();try{for(;;){let e=i||r.read();t?._streamReadAhead&&(i=r.read());let{done:n,value:s}=await e;if(n)return;yield j(s)}}catch(e){r.releaseLock()}}async function*K(e,t){for await(let t of e)yield j(t)}let X="Cannot convert supplied data type";async function Q(e,t,i){if("string"==typeof e||(0,r.B1)(e)){var n,s=e;if(t.text&&"string"==typeof s)return s;if($(s)&&(s=s.buffer),(0,r.B1)(s)){let e=ArrayBuffer.isView(n=s)?n:new Uint8Array(n);return t.text&&!t.binary?new TextDecoder("utf8").decode(e):j(e)}throw Error(X)}if((0,r.qf)(e)&&(e=await p(e)),(0,r.Sv)(e))return await g(e),t.binary?await e.arrayBuffer():await e.text();if((0,r.H1)(e)&&(e=function(e,t){if("string"==typeof e)return function*(e,t){let i=t?.chunkSize||262144,r=0,n=new TextEncoder;for(;r<e.length;){let t=Math.min(e.length-r,i),s=e.slice(r,r+t);r+=t,yield U(n.encode(s))}}(e,t);if(e instanceof ArrayBuffer)return function*(e,t={}){let{chunkSize:i=262144}=t,r=0;for(;r<e.byteLength;){let t=Math.min(e.byteLength-r,i),n=new ArrayBuffer(t),s=new Uint8Array(e,r,t);new Uint8Array(n).set(s),r+=t,yield n}}(e,t);if((0,r.qf)(e))return H(e,t);if((0,r.H1)(e))return Y(e,t);if((0,r.Sv)(e)){let i=e.body;if(!i)throw Error("Readable stream not available on Response");return Y(i,t)}throw Error("makeIterator")}(e,i)),(0,r.xZ)(e)||(0,r.Td)(e))return G(e);throw Error(X)}var J=i(60311),ee=i(94061);let et="4.5.2",ei=et[0]>="0"&&et[0]<="9"?`v${et}`:"",er=function(){let e=new ee.hW({id:"loaders.gl"});return globalThis.loaders||={},globalThis.loaders.log=e,globalThis.loaders.version=ei,globalThis.probe||={},globalThis.probe.loaders=e,e}();var en=i(28784);let es=/\.([^.]+)$/;async function eo(e,t=[],i,n){if(!eu(e))return null;let s=(0,b.Rf)(i||{});if(s.core||={},e instanceof Response&&ea(e)){let i=el(await e.clone().text(),t,{...s,core:{...s.core,nothrow:!0}},n);if(i)return i}let o=el(e,t,{...s,core:{...s.core,nothrow:!0}},n);if(o)return o;if((0,r.qf)(e)&&(o=el(e=await e.slice(0,10).arrayBuffer(),t,s,n)),!o&&e instanceof Response&&ea(e)&&(o=el(await e.clone().text(),t,s,n)),!o&&!s.core.nothrow)throw Error(ec(e));return o}function ea(e){let t=f(e);return!!(t&&(t.startsWith("text/")||"application/json"===t||t.endsWith("+json")))}function el(e,t=[],i,r){if(!eu(e))return null;let s=(0,b.Rf)(i||{});if(s.core||={},t&&!Array.isArray(t))return(0,n.D)(t);let o=[];t&&(o=o.concat(t)),s.core.ignoreRegisteredLoaders||o.push(...(0,en.Ph)()),function(e){for(let t of e)(0,n.D)(t)}(o);let a=function(e,t,i,r){let n=d(e),s=f(e),o=(0,h.S3)(n)||r?.url,a=null,l="";return i?.core?.mimeType&&(a=eh(t,i?.core?.mimeType),l=`match forced by supplied MIME type ${i?.core?.mimeType}`),a=a||function(e,t){let i=t&&es.exec(t),r=i&&i[1];return r?function(e,t){for(let i of(t=t.toLowerCase(),e))for(let e of i.extensions)if(e.toLowerCase()===t)return i;return null}(e,r):null}(t,o),l=l||(a?`matched url ${o}`:""),a=a||eh(t,s),l=l||(a?`matched MIME type ${s}`:""),a=a||function(e,t){if(!t)return null;for(let i of e)if("string"==typeof t){if(function(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}(t,i))return i}else if(ArrayBuffer.isView(t)){if(ed(t.buffer,t.byteOffset,i))return i}else if(t instanceof ArrayBuffer&&ed(t,0,i))return i;return null}(t,e),l=l||(a?`matched initial data ${ef(e)}`:""),i?.core?.fallbackMimeType&&(a=a||eh(t,i?.core?.fallbackMimeType),l=l||(a?`matched fallback MIME type ${s}`:"")),l&&er.log(1,`selectLoader selected ${a?.name}: ${l}.`),a}(e,o,s,r);if(!a&&!s.core.nothrow)throw Error(ec(e));return a}function eu(e){return!(e instanceof Response)||204!==e.status}function ec(e){let t=d(e),i=f(e),r="No valid loader found (";r+=(t?`${J.iW(t)}, `:"no url provided, ")+`MIME type: ${i?`"${i}"`:"not provided"}, `;let n=e?ef(e):"";return r+((n?` first bytes: "${n}"`:"first bytes: not available")+")")}function eh(e,t){for(let i of e)if(i.mimeTypes?.some(e=>u(t,e))||u(t,`application/x.${i.id}`))return i;return null}function ed(e,t,i){return(Array.isArray(i.tests)?i.tests:[i.tests]).some(i=>(function(e,t,i,n){if((0,r.B1)(n))return function(e,t,i){if(i=i||e.byteLength,e.byteLength<i||t.byteLength<i)return!1;let r=new Uint8Array(e),n=new Uint8Array(t);for(let e=0;e<r.length;++e)if(r[e]!==n[e])return!1;return!0}(n,e,n.byteLength);switch(typeof n){case"function":return n(U(e));case"string":let s=ep(e,t,n.length);return n===s;default:return!1}})(e,t,0,i))}function ef(e,t=5){return"string"==typeof e?e.slice(0,t):ArrayBuffer.isView(e)?ep(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?ep(e,0,t):""}function ep(e,t,i){if(e.byteLength<t+i)return"";let r=new DataView(e),n="";for(let e=0;e<i;e++)n+=String.fromCharCode(r.getUint8(t+e));return n}async function eg(e,t,i,r){!t||Array.isArray(t)||(0,n.l)(t)||(r=void 0,i=t,t=void 0),e=await e,i=i||{};let s=d(e),o=function(e,t){let i;if(e&&!Array.isArray(e))return e;if(e&&(i=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];i=i?[...i,...e]:e}return i&&i.length?i:void 0}(t,r),a=await eo(e,o,i);if(!a)return null;let l=(0,b.a5)(i,a,o,s);return r=function(e,t,i){if(i)return i;let r={fetch:_(t,e),...e};if(r.url){let e=(0,h.S3)(r.url);r.baseUrl=e,r.queryString=(0,h.by)(r.url),r.filename=J.iW(e),r.baseUrl=J.pD(e)}return Array.isArray(r.loaders)||(r.loaders=null),r}({url:s,_parse:eg,loaders:o},l,r||null),await em(a,e,l,r)}async function em(e,t,i,n){if(!function(e,t=N){L(e,"no worker provided");e.version}(e),i=function e(t,i,r=0){if(r>3)return i;let n={...t};for(let[t,s]of Object.entries(i))s&&"object"==typeof s&&!Array.isArray(s)?n[t]=e(n[t]||{},i[t],r+1):n[t]=i[t];return n}(e.options||{},i),(0,r.Sv)(t)){let{ok:e,redirected:i,status:r,statusText:s,type:o,url:a}=t;n.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:i,status:r,statusText:s,type:o,url:a}}if(t=await Q(t,e,i),e.parseTextSync&&"string"==typeof t)return e.parseTextSync(t,i,n);if(function(e,t){if(!z.isSupported())return!1;let i=t?._nodeWorkers??t?.core?._nodeWorkers;if(!P&&!i)return!1;let r=t?.worker??t?.core?.worker;return!!(e.worker&&r)}(e,i))return await D(e,t,i,n,eg);if(e.parseText&&"string"==typeof t)return await e.parseText(t,i,n);if(e.parse)return await e.parse(t,i,n);throw L(!e.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}async function ev(e,t,i,s){let o,a;Array.isArray(t)||(0,n.l)(t)?(o=t,a=i):(o=[],a=t);let l=_(a),u=e;if("string"==typeof e&&(u=await l(e)),(0,r.qf)(e)&&(u=await l(e)),"string"==typeof e){let t=(0,b.Rf)(a||{});t.core?.baseUrl||(a={...a,core:{...a?.core,baseUrl:e}})}return Array.isArray(o),await eg(u,o,a)}},46446:(e,t,i)=>{"use strict";i.d(t,{g:()=>s});var r=i(97693),n=i(29101);class s{static defaultProps={...r.M.defaultProps};static getDefaultShaderFactory(e){let t=e.getModuleData("@luma.gl/core");return t.defaultShaderFactory||=new s(e),t.defaultShaderFactory}device;_cache={};get[Symbol.toStringTag](){return"ShaderFactory"}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}constructor(e){this.device=e}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);let t=this._hashShader(e),i=this._cache[t];if(i)i.useCount++,this.device.props.debugFactories&&n.R.log(3,`${this}: Reusing shader ${i.resource.id} count=${i.useCount}`)();else{let r=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[t]=i={resource:r,useCount:1},this.device.props.debugFactories&&n.R.log(3,`${this}: Created new shader ${r.id}`)()}return i.resource}release(e){if(!this.device.props._cacheShaders)return void e.destroy();let t=this._hashShader(e),i=this._cache[t];if(i)if(i.useCount--,0===i.useCount)this.device.props._destroyShaders&&(delete this._cache[t],i.resource.destroy(),this.device.props.debugFactories&&n.R.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else if(i.useCount<0)throw Error(`ShaderFactory: Shader ${e.id} released too many times`);else this.device.props.debugFactories&&n.R.log(3,`${this}: Releasing shader ${e.id} count=${i.useCount}`)()}_hashShader(e){return`${e.stage}:${e.source}`}}},46740:(e,t,i)=>{"use strict";i.d(t,{V:()=>s,l:()=>o});var r=i(11094),n=i(3905);class s{id;topology;vertexCount;indices;attributes;bufferLayout;userData={};constructor(e){let{attributes:t={},indices:i=null,vertexCount:s=null}=e;for(let[r,s]of(this.id=e.id||(0,n.L)("geometry"),this.topology=e.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={},Object.entries(t))){let e=ArrayBuffer.isView(s)?{value:s}:s;if(!ArrayBuffer.isView(e.value))throw Error(`${this._print(r)}: must be typed array or object with value as typed array`);if("POSITION"!==r&&"positions"!==r||e.size||(e.size=3),"indices"===r){if(this.indices)throw Error("Multiple indices detected");this.indices=e}else{let t=o(r),i=Object.keys(this.attributes).find(e=>o(e)===t);i&&delete this.attributes[i],this.attributes[r]=e}}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=s||this._calculateVertexCount(this.attributes,this.indices),this.bufferLayout=e.bufferLayout||function(e){let t=[];for(let[i,n]of Object.entries(e)){if(!n)continue;let{value:e,size:s,normalized:a}=n;if(void 0===s)throw Error(`Attribute ${i} is missing a size`);t.push({name:o(i),format:r.E.getVertexFormatFromAttribute(e,s,a)})}return t}(this.attributes)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let i=1/0;for(let t of Object.values(e)){if(!t)continue;let{value:e,size:r,constant:n}=t;!n&&e&&void 0!==r&&r>=1&&(i=Math.min(i,e.length/r))}return i}}function o(e){switch(e){case"POSITION":return"positions";case"NORMAL":return"normals";case"TEXCOORD_0":return"texCoords";case"TEXCOORD_1":return"texCoords1";case"COLOR_0":return"colors";default:return e}}},47882:(e,t,i)=>{"use strict";i.d(t,{X:()=>n});var r=i(51153);class n extends r.F{get[Symbol.toStringTag](){return"TextureView"}constructor(e,t){super(e,t,n.defaultProps)}static defaultProps={...r.F.defaultProps,format:void 0,dimension:void 0,aspect:"all",baseMipLevel:0,mipLevelCount:void 0,baseArrayLayer:0,arrayLayerCount:void 0}}},49500:(e,t,i)=>{"use strict";i.d(t,{$n:()=>u});let r={RGBA8UNORM:0,RGBA16FLOAT:1,RGBA32FLOAT:2},n={rgba8unorm:4,rgba16float:8,rgba32float:16};r.RGBA8UNORM,r.RGBA16FLOAT,r.RGBA32FLOAT,r.RGBA8UNORM,r.RGBA16FLOAT,r.RGBA32FLOAT,r.RGBA8UNORM,n.rgba8unorm,Uint32Array.BYTES_PER_ELEMENT,a("colors");let s=a("floatColors");l("colors");let o=l("floatColors");function a(e){return`\
layout(std140) uniform ${e}Uniforms {
  float useByteColors;
} ${e};

vec3 ${e}_normalize(vec3 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_normalize(vec4 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 ${e}_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 ${e}_premultiply_alpha(vec4 inputColor) {
  return ${e}_premultiplyAlpha(inputColor);
}

vec4 ${e}_unpremultiply_alpha(vec4 inputColor) {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}function l(e){return`\
struct ${e}Uniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> ${e} : ${e}Uniforms;

fn ${e}_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn ${e}_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn ${e}_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_premultiplyAlpha(inputColor);
}

fn ${e}_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}r.RGBA8UNORM,r.RGBA16FLOAT;let u={name:"floatColors",props:{},uniforms:{},vs:s,fs:s,source:o,uniformTypes:{useByteColors:"f32"},defaultUniforms:{useByteColors:!0}}},50319:(e,t,i)=>{"use strict";i.d(t,{L:()=>n});var r=i(51153);class n extends r.F{static defaultProps={...r.F.defaultProps,type:"color-sampler",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"nearest",minFilter:"nearest",mipmapFilter:"none",lodMinClamp:0,lodMaxClamp:32,compare:"less-equal",maxAnisotropy:1};get[Symbol.toStringTag](){return"Sampler"}constructor(e,t){super(e,t=n.normalizeProps(e,t),n.defaultProps)}static normalizeProps(e,t){return t}}},51153:(e,t,i)=>{"use strict";i.d(t,{F:()=>h});var r=i(32646);let n="GPU Resource Counts",s="Resource Counts",o="GPU Time and Memory",a=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","RenderBundleEncoders","RenderBundles","ComputePasss","CommandEncoders","CommandBuffers"].flatMap(e=>[`${e} Created`,`${e} Active`]),l=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","SharedRenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","RenderBundleEncoders","RenderBundles","ComputePasss","CommandEncoders","CommandBuffers"].flatMap(e=>[`${e} Created`,`${e} Active`]),u=new WeakMap,c=new WeakMap;class h{static defaultProps={id:"undefined",handle:void 0,_isHandleBorrowed:!1,userData:void 0};toString(){return`${this[Symbol.toStringTag]||this.constructor.name}:"${this.id}"`}toJSON(){return this.toString()}id;props;userData={};_device;destroyed=!1;allocatedBytes=0;allocatedBytesName=null;_attachedResources=new Set;get ownsHandle(){return(void 0===this.props.handle||null===this.props.handle)&&!this.isHandleBorrowed}get isHandleBorrowed(){return!!this.props._isHandleBorrowed}constructor(e,t,i){if(!e)throw Error("no device");this._device=e,this.props=function(e,t){let i={...t};for(let t in e)void 0!==e[t]&&(i[t]=e[t]);return i}(t,i);let n="undefined"!==this.props.id?this.props.id:(0,r.L)(this[Symbol.toStringTag]);this.props.id=n,this.id=n,this.userData=this.props.userData||{},this.addStats()}destroy(){this.destroyed||this.destroyResource()}delete(){return this.destroy(),this}getProps(){return this.props}attachResource(e){this._attachedResources.add(e)}detachResource(e){this._attachedResources.delete(e)}destroyAttachedResource(e){this._attachedResources.delete(e)&&e.destroy()}destroyAttachedResources(){for(let e of this._attachedResources)e.destroy();this._attachedResources=new Set}destroyResource(){this.destroyed||(this.destroyAttachedResources(),this.removeStats(),this.destroyed=!0)}removeStats(){let e=p(this._device),t=e?g():0,i=[this._device.statsManager.getStats(n),this._device.statsManager.getStats(s)],r=f(this._device);for(let e of i)d(e,r);let o=this.getStatsName();for(let e of i)e.get("Resources Active").decrementCount(),e.get(`${o}s Active`).decrementCount();e&&(e.statsBookkeepingCalls=(e.statsBookkeepingCalls||0)+1,e.statsBookkeepingTimeMs=(e.statsBookkeepingTimeMs||0)+(g()-t))}trackAllocatedMemory(e,t=this.getStatsName()){let i=p(this._device),r=i?g():0,n=this._device.statsManager.getStats(o);this.allocatedBytes>0&&this.allocatedBytesName&&(n.get("GPU Memory").subtractCount(this.allocatedBytes),n.get(`${this.allocatedBytesName} Memory`).subtractCount(this.allocatedBytes)),n.get("GPU Memory").addCount(e),n.get(`${t} Memory`).addCount(e),i&&(i.statsBookkeepingCalls=(i.statsBookkeepingCalls||0)+1,i.statsBookkeepingTimeMs=(i.statsBookkeepingTimeMs||0)+(g()-r)),this.allocatedBytes=e,this.allocatedBytesName=t}trackReferencedMemory(e,t=this.getStatsName()){this.trackAllocatedMemory(e,`External ${t}`)}trackDeallocatedMemory(e=this.getStatsName()){if(0===this.allocatedBytes){this.allocatedBytesName=null;return}let t=p(this._device),i=t?g():0,r=this._device.statsManager.getStats(o);r.get("GPU Memory").subtractCount(this.allocatedBytes),r.get(`${this.allocatedBytesName||e} Memory`).subtractCount(this.allocatedBytes),t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(g()-i)),this.allocatedBytes=0,this.allocatedBytesName=null}trackDeallocatedReferencedMemory(e=this.getStatsName()){this.trackDeallocatedMemory(`Referenced ${e}`)}addStats(){let e=this.getStatsName(),t=p(this._device),i=t?g():0,r=[this._device.statsManager.getStats(n),this._device.statsManager.getStats(s)],o=f(this._device);for(let e of r)d(e,o);for(let t of r)t.get("Resources Created").incrementCount(),t.get("Resources Active").incrementCount(),t.get(`${e}s Created`).incrementCount(),t.get(`${e}s Active`).incrementCount();t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(g()-i)),function(e,t){let i=p(e);if(i&&i.activeDefaultFramebufferAcquireDepth)switch(i.transientCanvasResourceCreates=(i.transientCanvasResourceCreates||0)+1,t){case"Texture":i.transientCanvasTextureCreates=(i.transientCanvasTextureCreates||0)+1;break;case"TextureView":i.transientCanvasTextureViewCreates=(i.transientCanvasTextureViewCreates||0)+1;break;case"Sampler":i.transientCanvasSamplerCreates=(i.transientCanvasSamplerCreates||0)+1;break;case"Framebuffer":i.transientCanvasFramebufferCreates=(i.transientCanvasFramebufferCreates||0)+1}}(this._device,e)}getStatsName(){var e=this;let t=Object.getPrototypeOf(e);for(;t;){let i=Object.getPrototypeOf(t);if(!i||i===h.prototype)return function(e){let t=Object.getOwnPropertyDescriptor(e,Symbol.toStringTag);return"function"==typeof t?.get?t.get.call(e):"string"==typeof t?.value?t.value:null}(t)||e[Symbol.toStringTag]||e.constructor.name;t=i}return e[Symbol.toStringTag]||e.constructor.name}}function d(e,t){let i=e.stats,r=!1;for(let n of t)i[n]||(e.get(n),r=!0);let n=Object.keys(i).length,s=u.get(e);if(!r&&s?.orderedStatNames===t&&s.statCount===n)return;let o={},a=c.get(t);for(let e of(a||(a=new Set(t),c.set(t,a)),t))i[e]&&(o[e]=i[e]);for(let[e,t]of Object.entries(i))a.has(e)||(o[e]=t);for(let e of Object.keys(i))delete i[e];Object.assign(i,o),u.set(e,{orderedStatNames:t,statCount:n})}function f(e){return"webgl"===e.type?l:a}function p(e){let t=e.userData["cpu-hotspot-profiler"];return t?.enabled?t:null}function g(){return globalThis.performance?.now?.()??Date.now()}},53340:(e,t,i)=>{"use strict";i.d(t,{C:()=>n});var r=i(13750);let n=({inputs:e,output:t,target:i})=>{let n=e.map((e,t)=>[`x${t}`,e]);!function(e,t){let i=t.filter(([,e])=>!e.isConstant).length+1;if(i>e.maxStorageBuffersPerShaderStage)throw Error(`interleave() requires ${i} storage buffers, exceeding device limit ${e.maxStorageBuffersPerShaderStage}`);if(i>e.maxBindingsPerBindGroup)throw Error(`interleave() requires ${i} bindings, exceeding bind group limit ${e.maxBindingsPerBindGroup}`)}(i.device.limits,n);let s=n.map(([e,t])=>`${e}: array<{TYPE}, ${t.size}>`).join(", "),o=0,a=n.map(([e,t])=>{let i=Array.from({length:t.size},(t,i)=>`  out[${o+i}] = ${e}[${i}];`).join("\n");return o+=t.size,i}).join("\n"),l=`\
fn interleave(${s}) -> array<{TYPE}, {RESULT_LEN}> {
  var out: array<{TYPE}, {RESULT_LEN}>;
${a}
  return out;
}
`;return(0,r.P)({module:{name:"interleave",source:l},inputs:e,output:t,outputBuffer:i}),{success:!0}}},55218:(e,t,i)=>{"use strict";i.d(t,{p8:()=>r,tb:()=>n});let r=1e-6,n="undefined"!=typeof Float32Array?Float32Array:Array},56082:(e,t,i)=>{"use strict";i.d(t,{GL:()=>c,uy:()=>h});var r=i(7724),n=i(32420),s=i(42466),o=i(22063),a=i(35454),l=i(9241),u=i(2682);class c{static get bufferPoolSize(){return u.R.poolSize}static set bufferPoolSize(e){if(!Number.isSafeInteger(e)||e<0)throw Error("GPUDataEvaluator.bufferPoolSize must be a non-negative safe integer");u.R.poolSize=e,u.R.purge()}type;size;get offset(){return this._offset}get stride(){return this._stride}normalized;isConstant;length;get byteLength(){return this._byteLength}ValueType;source=null;format;_id;_destroyed=!1;_value;_offset;_stride;_byteLength;_gpuVector;_bufferOwnership="owned";_targetBuffer;static fromArray(e,{type:t,size:i=1,offset:n=0,stride:s=0,normalized:o=!1}){let a,l=t;return Array.isArray(e)?(l=l||"float32",a=new((0,r.Y0)(l))(e)):e instanceof Float64Array?(l="uint32",i*=2,n*=2,s*=2,a=new Uint32Array(e.buffer,e.byteOffset,e.byteLength/4)):(l=l||(0,r.UE)(e),a=e),new c({id:`<${l} * ${i}>`,type:l,size:i,offset:n,stride:s,normalized:o,value:a})}static fromConstant(e,t="float32"){let i,n=(0,r.Y0)(t);return Array.isArray(e)?i=`[${e.join(",")}]`:(i=String(e),e=[e]),new c({id:i,isConstant:!0,type:t,size:e.length,value:new n(e)})}static fromGPUData(e,t={}){return function(e){if(!e.format)throw Error("GPUDataEvaluator.fromGPUData() requires GPUData format metadata");if((0,l.Tm)(e.format)||(0,l.u4)(e.format))throw Error("GPUDataEvaluator.fromGPUData() does not support variable-length input");let t=(0,l.Ft)(e.format).byteLength;if(e.rowByteLength!==t)throw Error(`GPUDataEvaluator.fromGPUData() requires rowByteLength ${t} for GPUData`)}(e),new c({...d(new s.I({buffer:e.buffer,format:e.format,length:e.length,byteOffset:e.byteOffset,byteStride:e.byteStride})),id:t.id,gpuData:e})}static fromGPUDataView(e,t={}){return new c({...d(e),id:t.id,buffer:e.buffer})}constructor(e){let{id:t,value:i,buffer:n,gpuData:s,format:a,source:l=null,isConstant:u=!1}=e;if(!l&&!i&&!n&&!s)throw Error("GPUDataEvaluator must have a value source");let{type:h,size:d,offset:f,stride:p,normalized:g,length:m}=e;if(l instanceof c?(h=h??l.type,d=d??l.size,f=f??l.offset,p=p??l.stride,g=g??l.normalized,m=m??l.length):(d=d??1,f=f??0,g=g??!1,m=u?1:m),!h)throw Error("GPUDataEvaluator: type not defined");if(this._id=t,this.type=h,this.size=d,this.ValueType=(0,r.Y0)(this.type),this._offset=f,this._stride=p||this.ValueType.BYTES_PER_ELEMENT*d,this.normalized=g,this.source=l,this.format=a,void 0===m)if(u)m=1;else{if(!i)throw Error("GPUDataEvaluator: length not defined");m=Math.ceil(i.byteLength/this.stride)}this.isConstant=u,this.length=m;let v=this.ValueType.BYTES_PER_ELEMENT*this.size;this._byteLength=0===m?0:(m-1)*this.stride+v,this._value=i,this._bufferOwnership=l instanceof c||n||s?"borrowed":"owned",s?this._gpuVector=new o.M({type:"data",name:this._id??"data",format:s.format,data:[s],stride:s.stride,byteStride:s.byteStride,rowByteLength:s.rowByteLength}):n&&(this._gpuVector=this.createGPUVectorView({buffer:n,name:this._id,format:this.format}))}get value(){return this._value||(this.source instanceof c?this.source.value:void 0)}get evaluated(){return!!this._gpuVector}get id(){return this._id}get gpuVector(){if(!this._gpuVector)throw Error(`${this} not evaluated`);return this._gpuVector}get buffer(){return f(this.gpuVector)}setTargetBuffer({buffer:e,byteOffset:t=0,byteStride:i=this.stride}){if(this._destroyed)throw Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)throw Error(`GPUDataEvaluator ${this} already evaluated`);if(!this.source||this.source instanceof c)throw Error("GPUDataEvaluator target buffers require a deferred operation source");this._targetBuffer={buffer:e,byteOffset:t,byteStride:i}}async evaluate(e,t={}){let i;if(this._destroyed)throw Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;if(this.source instanceof c){let i=await this.source.evaluate(e);return this._gpuVector=this.createGPUVectorView({...t,buffer:f(i)}),this._gpuVector}if(i=this._getEvaluationBuffer(e),this._value)i.write(this._value);else{let t=await this.source.execute(e,i);if(!t.success)throw t.error||Error(`${this.source} evaluation failed`);t.value&&(this._value=t.value)}return this._gpuVector=this.createGPUVectorView({...t,buffer:i}),this._gpuVector}evaluateSync(e,t={}){let i;if(this._destroyed)throw Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;if(this.source instanceof c){let i=this.source.evaluateSync(e);return this._gpuVector=this.createGPUVectorView({...t,buffer:f(i)}),this._gpuVector}if(i=this._getEvaluationBuffer(e),this._value)i.write(this._value);else{let t=this.source.executeSync(e,i);if(!t.success)throw t.error||Error(`${this.source} evaluation failed`);t.value&&(this._value=t.value)}return this._gpuVector=this.createGPUVectorView({...t,buffer:i}),this._gpuVector}createGPUVectorView(e){let t=e.name??this._id??"vector",i=e.format??this.format??function(e,t,i=!1){return t>=1&&t<=4?p(e,t,i):void 0}(this.type,this.size,this.normalized);if(e.interleaved){let i="object"==typeof e.interleaved&&e.interleaved.attributes?e.interleaved.attributes:function(e){let t=[];return function e(t,i,r){let n=t.source;if(n&&!(n instanceof c)&&"interleave"===n.name){for(let t of Object.values(n.inputs))t instanceof c&&e(t,i,r);return}i.push({attribute:t.id??t.toString(),format:p(t.type,t.size,t.normalized),byteOffset:r.byteOffset}),r.byteOffset+=t.ValueType.BYTES_PER_ELEMENT*t.size}(e,t,{byteOffset:0}),t}(this);return new o.M({type:"interleaved",name:t,buffer:e.buffer,format:e.format??this.format,length:this.length,byteOffset:this.offset,byteStride:this.stride,attributes:i,ownsBuffer:!1})}return new o.M({type:"buffer",name:t,buffer:e.buffer,format:i,length:this.length,stride:this.size,byteOffset:this.offset,byteStride:this.stride,rowByteLength:this.ValueType.BYTES_PER_ELEMENT*this.size,ownsBuffer:!1})}_getEvaluationBuffer(e){let t=this._targetBuffer;if(!t)return u.R.createOrReuse(e,this.byteLength);if(t.buffer.device!==e)throw Error("GPUDataEvaluator target buffer belongs to a different device");let i=this.ValueType.BYTES_PER_ELEMENT*this.size,r=0===this.length?0:(this.length-1)*t.byteStride+i;if(t.byteOffset+r>t.buffer.byteLength)throw Error("GPUDataEvaluator target buffer is too small for the output layout");return this._offset=t.byteOffset,this._stride=t.byteStride,this._byteLength=r,this._bufferOwnership="borrowed",this._targetBuffer=void 0,t.buffer}async readValue(e=0,t){let{ValueType:i}=this,{size:r,offset:n,stride:s,length:o}=this,a=i.BYTES_PER_ELEMENT*r;if(t=t??o,t=Math.max(e=Math.max(0,Math.min(o,e)),Math.min(o,t)),this._value)return function(e,t,i,r){let{ValueType:n,size:s,offset:o,stride:a}=e,l=a/n.BYTES_PER_ELEMENT,u=o/n.BYTES_PER_ELEMENT,c=r-i;if(l===s){let e=u+i*l;return t.subarray(e,e+c*s)}let h=new n(c*s);for(let e=0;e<c;e++){let r=u+(i+e)*l;h.set(t.subarray(r,r+s),e*s)}return h}(this,this._value,e,t);let l=t-e;if(0===l)return new i(0);let u=n+e*s,c=await this.buffer.readAsync(u,s===a?l*a:(l-1)*s+a),h=new i(c.buffer,c.byteOffset,c.byteLength/i.BYTES_PER_ELEMENT);if(s===a)return h;let d=new Uint8Array(a*l);for(let e=0;e<l;e++){let t=e*s;d.set(c.subarray(t,t+a),e*a)}return new i(d.buffer)}async ensureCPUValue(){let e=this.value;if(e)return e;let t=await this.buffer.readAsync(0,this.offset+this.byteLength);if(t.byteLength%this.ValueType.BYTES_PER_ELEMENT!=0)throw Error(`${this} backing buffer byte length is not aligned to its scalar type`);let i=t.slice();return this._value=new this.ValueType(i.buffer,i.byteOffset,i.byteLength/this.ValueType.BYTES_PER_ELEMENT),this._value}ensureCPUValueSync(){let e=this.value;if(e)return e;throw Error(`${this} CPU value is not available for synchronous evaluation`)}toString(){return this._id??this.source?.toString()??this.constructor.name}destroy(){this._gpuVector&&("owned"===this._bufferOwnership&&u.R.recycle(f(this._gpuVector)),this._gpuVector=void 0),this._targetBuffer=void 0,this._destroyed=!0}}function h(e){if(e instanceof c)return e;if("number"==typeof e||Array.isArray(e))return c.fromConstant(e);if(e instanceof a.L)return c.fromGPUData(e);if(e instanceof s.I)return c.fromGPUDataView(e);throw Error("getGPUDataEvaluator() requires GPUDataEvaluator, GPUData, GPUDataView, number, or number[]")}function d(e){let t=(0,l.Ft)(e.format),i=(0,r.Y0)(t.signedDataType),n=i.BYTES_PER_ELEMENT*t.components;if(t.byteLength!==n)throw Error(`GPUDataEvaluator does not support packed vertex format ${e.format}: ${t.byteLength} physical bytes cannot expose ${t.components} ${t.signedDataType} components`);if(e.byteOffset%i.BYTES_PER_ELEMENT!=0||e.byteStride%i.BYTES_PER_ELEMENT!=0)throw Error(`GPUDataEvaluator requires ${e.format} offset and stride aligned to ${i.BYTES_PER_ELEMENT} bytes`);return{type:t.signedDataType,size:t.components,offset:e.byteOffset,stride:e.byteStride,normalized:t.normalized,length:e.length,format:e.format}}function f(e){let t=function(e){let[t,...i]=e.data;if(!t||i.length>0)throw Error(`GPUDataEvaluator requires exactly one GPUData chunk for "${e.name}"`);return t}(e).buffer;return t instanceof n.kL?t.buffer:t}function p(e,t,i=!1){if(t<1||t>4)throw Error(`Cannot synthesize a GPUVector vertex format with ${t} components`);let r=e;if(i)switch(e){case"uint8":r="unorm8";break;case"sint8":r="snorm8";break;case"uint16":r="unorm16";break;case"sint16":r="snorm16";break;case"float32":r="float32";break;default:throw Error(`Unsupported normalized vertex format for ${e}`)}return("uint8"===r||"sint8"===r||"uint16"===r||"sint16"===r||"unorm8"===r||"snorm8"===r||"unorm16"===r||"snorm16"===r)&&3===t?`${r}x3-webgl`:`${r}${1===t?"":`x${t}`}`}},56823:(e,t,i)=>{"use strict";function r(e){let t=u[s(e)];if(!t)throw Error(`Unsupported variable shader type: ${e}`);return t}i.d(t,{Co:()=>o,k0:()=>r,si:()=>s});class n{getVariableShaderTypeInfo(e){return r(e)}getAttributeShaderTypeInfo(e){let t=l[function(e){return c[e]||e}(e)];if(!t)throw Error(`Unsupported attribute shader type: ${e}`);let[i,r]=t,n=a[i]*r;return{primitiveType:i,components:r,byteLength:n,integer:"i32"===i||"u32"===i,signed:"u32"!==i}}makeShaderAttributeType(e,t){var i,r;return i=e,1===(r=t)?i:`vec${r}<${i}>`}resolveAttributeShaderTypeAlias(e){var t;return c[t=e]||t}resolveVariableShaderTypeAlias(e){return s(e)}}function s(e){return h[e]||e}let o=new n,a={f32:4,f16:2,i32:4,u32:4},l={f32:["f32",1],"vec2<f32>":["f32",2],"vec3<f32>":["f32",3],"vec4<f32>":["f32",4],f16:["f16",1],"vec2<f16>":["f16",2],"vec3<f16>":["f16",3],"vec4<f16>":["f16",4],i32:["i32",1],"vec2<i32>":["i32",2],"vec3<i32>":["i32",3],"vec4<i32>":["i32",4],u32:["u32",1],"vec2<u32>":["u32",2],"vec3<u32>":["u32",3],"vec4<u32>":["u32",4]},u={f32:{type:"f32",components:1},f16:{type:"f16",components:1},i32:{type:"i32",components:1},u32:{type:"u32",components:1},"vec2<f32>":{type:"f32",components:2},"vec3<f32>":{type:"f32",components:3},"vec4<f32>":{type:"f32",components:4},"vec2<f16>":{type:"f16",components:2},"vec3<f16>":{type:"f16",components:3},"vec4<f16>":{type:"f16",components:4},"vec2<i32>":{type:"i32",components:2},"vec3<i32>":{type:"i32",components:3},"vec4<i32>":{type:"i32",components:4},"vec2<u32>":{type:"u32",components:2},"vec3<u32>":{type:"u32",components:3},"vec4<u32>":{type:"u32",components:4},"mat2x2<f32>":{type:"f32",components:4},"mat2x3<f32>":{type:"f32",components:6},"mat2x4<f32>":{type:"f32",components:8},"mat3x2<f32>":{type:"f32",components:6},"mat3x3<f32>":{type:"f32",components:9},"mat3x4<f32>":{type:"f32",components:12},"mat4x2<f32>":{type:"f32",components:8},"mat4x3<f32>":{type:"f32",components:12},"mat4x4<f32>":{type:"f32",components:16},"mat2x2<f16>":{type:"f16",components:4},"mat2x3<f16>":{type:"f16",components:6},"mat2x4<f16>":{type:"f16",components:8},"mat3x2<f16>":{type:"f16",components:6},"mat3x3<f16>":{type:"f16",components:9},"mat3x4<f16>":{type:"f16",components:12},"mat4x2<f16>":{type:"f16",components:8},"mat4x3<f16>":{type:"f16",components:12},"mat4x4<f16>":{type:"f16",components:16},"mat2x2<i32>":{type:"i32",components:4},"mat2x3<i32>":{type:"i32",components:6},"mat2x4<i32>":{type:"i32",components:8},"mat3x2<i32>":{type:"i32",components:6},"mat3x3<i32>":{type:"i32",components:9},"mat3x4<i32>":{type:"i32",components:12},"mat4x2<i32>":{type:"i32",components:8},"mat4x3<i32>":{type:"i32",components:12},"mat4x4<i32>":{type:"i32",components:16},"mat2x2<u32>":{type:"u32",components:4},"mat2x3<u32>":{type:"u32",components:6},"mat2x4<u32>":{type:"u32",components:8},"mat3x2<u32>":{type:"u32",components:6},"mat3x3<u32>":{type:"u32",components:9},"mat3x4<u32>":{type:"u32",components:12},"mat4x2<u32>":{type:"u32",components:8},"mat4x3<u32>":{type:"u32",components:12},"mat4x4<u32>":{type:"u32",components:16}},c={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>"},h={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>",mat2x2f:"mat2x2<f32>",mat2x3f:"mat2x3<f32>",mat2x4f:"mat2x4<f32>",mat3x2f:"mat3x2<f32>",mat3x3f:"mat3x3<f32>",mat3x4f:"mat3x4<f32>",mat4x2f:"mat4x2<f32>",mat4x3f:"mat4x3<f32>",mat4x4f:"mat4x4<f32>",mat2x2i:"mat2x2<i32>",mat2x3i:"mat2x3<i32>",mat2x4i:"mat2x4<i32>",mat3x2i:"mat3x2<i32>",mat3x3i:"mat3x3<i32>",mat3x4i:"mat3x4<i32>",mat4x2i:"mat4x2<i32>",mat4x3i:"mat4x3<i32>",mat4x4i:"mat4x4<i32>",mat2x2u:"mat2x2<u32>",mat2x3u:"mat2x3<u32>",mat2x4u:"mat2x4<u32>",mat3x2u:"mat3x2<u32>",mat3x3u:"mat3x3<u32>",mat3x4u:"mat3x4<u32>",mat4x2u:"mat4x2<u32>",mat4x3u:"mat4x3<u32>",mat4x4u:"mat4x4<u32>",mat2x2h:"mat2x2<f16>",mat2x3h:"mat2x3<f16>",mat2x4h:"mat2x4<f16>",mat3x2h:"mat3x2<f16>",mat3x3h:"mat3x3<f16>",mat3x4h:"mat3x4<f16>",mat4x2h:"mat4x2<f16>",mat4x3h:"mat4x3<f16>",mat4x4h:"mat4x4<f16>"}},58038:(e,t,i)=>{"use strict";let r,n;i.d(t,{k:()=>v});var s,o=i(1142),a=i(76756),l=i(94878);class u extends o.a{toString(){let e="[";if(l.$W.printRowMajor){e+="row-major:";for(let t=0;t<this.RANK;++t)for(let i=0;i<this.RANK;++i)e+=` ${this[i*this.RANK+t]}`}else{e+="column-major:";for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+"]"}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,i){return this[t*this.RANK+e]=(0,a.ws)(i),this}getColumn(e,t=Array(this.RANK).fill(-0)){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[i+e];return t}setColumn(e,t){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)this[i+e]=t[e];return this}}var c=i(6994),h=i(6953),d=i(71343),f=i(796),p=i(18001);!function(e){e[e.COL0ROW0=0]="COL0ROW0",e[e.COL0ROW1=1]="COL0ROW1",e[e.COL0ROW2=2]="COL0ROW2",e[e.COL0ROW3=3]="COL0ROW3",e[e.COL1ROW0=4]="COL1ROW0",e[e.COL1ROW1=5]="COL1ROW1",e[e.COL1ROW2=6]="COL1ROW2",e[e.COL1ROW3=7]="COL1ROW3",e[e.COL2ROW0=8]="COL2ROW0",e[e.COL2ROW1=9]="COL2ROW1",e[e.COL2ROW2=10]="COL2ROW2",e[e.COL2ROW3=11]="COL2ROW3",e[e.COL3ROW0=12]="COL3ROW0",e[e.COL3ROW1=13]="COL3ROW1",e[e.COL3ROW2=14]="COL3ROW2",e[e.COL3ROW3=15]="COL3ROW3"}(s||(s={}));let g=45*Math.PI/180,m=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);class v extends u{static get IDENTITY(){return n||Object.freeze(n=new v),n}static get ZERO(){return r||Object.freeze(r=new v([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),r}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return s}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),1==arguments.length&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,i,r,n,s,o,a,l,u,c,h,d,f,p,g){return this[0]=e,this[1]=t,this[2]=i,this[3]=r,this[4]=n,this[5]=s,this[6]=o,this[7]=a,this[8]=l,this[9]=u,this[10]=c,this[11]=h,this[12]=d,this[13]=f,this[14]=p,this[15]=g,this.check()}setRowMajor(e,t,i,r,n,s,o,a,l,u,c,h,d,f,p,g){return this[0]=e,this[1]=n,this[2]=l,this[3]=d,this[4]=t,this[5]=s,this[6]=u,this[7]=f,this[8]=i,this[9]=o,this[10]=c,this[11]=p,this[12]=r,this[13]=a,this[14]=h,this[15]=g,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(m)}fromObject(e){return this.check()}fromQuaternion(e){return(0,h.I0)(this,e),this.check()}frustum(e){var t,i,r,n,s,o;let{left:a,right:l,bottom:u,top:c,near:d=.1,far:f=500}=e;return f===1/0?(t=this,i=a,r=l,n=u,s=c,o=d,t[0]=2*o/(r-i),t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o/(s-n),t[6]=0,t[7]=0,t[8]=(r+i)/(r-i),t[9]=(s+n)/(s-n),t[10]=-1,t[11]=-1,t[12]=0,t[13]=0,t[14]=-2*o,t[15]=0):(0,h.$h)(this,a,l,u,c,d,f),this.check()}lookAt(e){let{eye:t,center:i=[0,0,0],up:r=[0,1,0]}=e;return(0,h.t5)(this,t,i,r),this.check()}ortho(e){let{left:t,right:i,bottom:r,top:n,near:s=.1,far:o=500}=e;return(0,h.v3)(this,t,i,r,n,s,o),this.check()}orthographic(e){let{fovy:t=g,aspect:i=1,focalDistance:r=1,near:n=.1,far:s=500}=e;y(t);let o=r*Math.tan(t/2),a=o*i;return this.ortho({left:-a,right:a,bottom:-o,top:o,near:n,far:s})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:i=1,near:r=.1,far:n=500}=e;return y(t),(0,h.fN)(this,t,i,r,n),this.check()}determinant(){return(0,h.a4)(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),r=1/i[0],n=1/i[1],s=1/i[2];return e[0]=this[0]*r,e[1]=this[1]*n,e[2]=this[2]*s,e[3]=0,e[4]=this[4]*r,e[5]=this[5]*n,e[6]=this[6]*s,e[7]=0,e[8]=this[8]*r,e[9]=this[9]*n,e[10]=this[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),r=1/i[0],n=1/i[1],s=1/i[2];return e[0]=this[0]*r,e[1]=this[1]*n,e[2]=this[2]*s,e[3]=this[4]*r,e[4]=this[5]*n,e[5]=this[6]*s,e[6]=this[8]*r,e[7]=this[9]*n,e[8]=this[10]*s,e}transpose(){return(0,h.mg)(this,this),this.check()}invert(){return(0,h.B8)(this,this),this.check()}multiplyLeft(e){return(0,h.lw)(this,e,this),this.check()}multiplyRight(e){return(0,h.lw)(this,this,e),this.check()}rotateX(e){return(0,h.eL)(this,this,e),this.check()}rotateY(e){return(0,h.Z8)(this,this,e),this.check()}rotateZ(e){return(0,h.Qr)(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return(0,h.e$)(this,this,e,t),this.check()}scale(e){return(0,h.hs)(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return(0,h.Tl)(this,this,e),this.check()}transform(e,t){return 4===e.length?(t=(0,p.Z0)(t||[-0,-0,-0,-0],e,this),(0,a.qk)(t,4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let i,{length:r}=e;switch(r){case 2:i=(0,d.Z0)(t||[-0,-0],e,this);break;case 3:i=(0,f.Z0)(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return(0,a.qk)(i,e.length),i}transformAsVector(e,t){let i;switch(e.length){case 2:i=(0,c.B$)(t||[-0,-0],e,this);break;case 3:i=(0,c.cL)(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return(0,a.qk)(i,e.length),i}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,i){return this.identity().translate([e,t,i])}}function y(e){if(e>2*Math.PI)throw Error("expected radians")}},58181:(e,t,i)=>{"use strict";i.d(t,{rJ:()=>r,wk:()=>d,Eg:()=>v,Mk:()=>h,Iy:()=>m,UD:()=>n});let r={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function n(e,t,i={}){return function(e,t={}){return Math.sign(function(e,t={}){let{start:i=0,end:r=e.length,plane:n="xy"}=t,o=t.size||2,a=0,l=s[n[0]],u=s[n[1]];for(let t=i,n=r-o;t<r;t+=o)a+=(e[t+l]-e[n+l])*(e[t+u]+e[n+u]),n=t;return a/2}(e,t))}(e,i)!==t&&(function(e,t){let{start:i=0,end:r=e.length,size:n=2}=t,s=(r-i)/n,o=Math.floor(s/2);for(let t=0;t<o;++t){let r=i+t*n,o=i+(s-1-t)*n;for(let t=0;t<n;++t){let i=e[r+t];e[r+t]=e[o+t],e[o+t]=i}}}(e,i),!0)}let s={x:0,y:1,z:2};function o(e,t,i,r,n=[]){let s,a;if(8&i)s=(r[3]-e[1])/(t[1]-e[1]),a=3;else if(4&i)s=(r[1]-e[1])/(t[1]-e[1]),a=1;else if(2&i)s=(r[2]-e[0])/(t[0]-e[0]),a=2;else{if(!(1&i))return null;s=(r[0]-e[0])/(t[0]-e[0]),a=0}for(let i=0;i<e.length;i++)n[i]=(1&a)===i?r[a]:s*(t[i]-e[i])+e[i];return n}function a(e,t){let i=0;return e[0]<t[0]?i|=1:e[0]>t[2]&&(i|=2),e[1]<t[1]?i|=4:e[1]>t[3]&&(i|=8),i}function l(e,t){let i=t.length,r=e.length;if(r>0){let n=!0;for(let s=0;s<i;s++)if(e[r-i+s]!==t[s]){n=!1;break}if(n)return!1}for(let n=0;n<i;n++)e[r+n]=t[n];return!0}function u(e,t){let i=t.length;for(let r=0;r<i;r++)e[r]=t[r]}function c(e,t,i,r,n=[]){let s=r+t*i;for(let t=0;t<i;t++)n[t]=e[s+t];return n}function h(e,t){let i,r,{size:n=2,broken:s=!1,gridResolution:h=10,gridOffset:d=[0,0],startIndex:f=0,endIndex:g=e.length}=t||{},m=(g-f)/n,v=[],y=[v],b=c(e,0,n,f),_=p(b,h,d,[]),x=[];l(v,b);for(let t=1;t<m;t++){for(r=a(i=c(e,t,n,f,i),_);r;){var w,P,S;o(b,i,r,_,x);let e=a(x,_);e&&(o(b,x,e,_,x),r=e),l(v,x),u(b,x),w=_,P=h,8&(S=r)?(w[1]+=P,w[3]+=P):4&S?(w[1]-=P,w[3]-=P):2&S?(w[0]+=P,w[2]+=P):1&S&&(w[0]-=P,w[2]-=P),s&&v.length>n&&(v=[],y.push(v),l(v,b)),r=a(i,_)}l(v,i),u(b,i)}return s?y:y[0]}function d(e,t=null,i){if(!e.length)return[];let{size:r=2,gridResolution:n=10,gridOffset:s=[0,0],edgeTypes:o=!1}=i||{},l=[],u=[{pos:e,types:o?Array(e.length/r).fill(1):null,holes:t||[]}],c=[[],[]],h=[];for(;u.length;){let{pos:e,types:t,holes:i}=u.shift();(function(e,t,i,r){let n=1/0,s=-1/0,o=1/0,a=-1/0;for(let r=0;r<i;r+=t){let t=e[r],i=e[r+1];n=t<n?t:n,s=t>s?t:s,o=i<o?i:o,a=i>a?i:a}r[0][0]=n,r[0][1]=o,r[1][0]=s,r[1][1]=a})(e,r,i[0]||e.length,c),h=p(c[0],n,s,h);let d=a(c[1],h);if(d){let n=f(e,t,r,0,i[0]||e.length,h,d),s={pos:n[0].pos,types:n[0].types,holes:[]},a={pos:n[1].pos,types:n[1].types,holes:[]};u.push(s,a);for(let l=0;l<i.length;l++)(n=f(e,t,r,i[l],i[l+1]||e.length,h,d))[0]&&(s.holes.push(s.pos.length),s.pos=g(s.pos,n[0].pos),o&&(s.types=g(s.types,n[0].types))),n[1]&&(a.holes.push(a.pos.length),a.pos=g(a.pos,n[1].pos),o&&(a.types=g(a.types,n[1].types)))}else{let r={positions:e};o&&(r.edgeTypes=t),i.length&&(r.holeIndices=i),l.push(r)}}return l}function f(e,t,i,r,n,s,a){let h,d,f,p=(n-r)/i,g=[],m=[],v=[],y=[],b=[],_=c(e,p-1,i,r),x=Math.sign(8&a?_[1]-s[3]:_[0]-s[2]),w=t&&t[p-1],P=0,S=0;for(let n=0;n<p;n++)h=c(e,n,i,r,h),d=Math.sign(8&a?h[1]-s[3]:h[0]-s[2]),f=t&&t[r/i+n],d&&x&&x!==d&&(o(_,h,a,s,b),l(g,b)&&v.push(w),l(m,b)&&y.push(w)),d<=0?(l(g,h)&&v.push(f),P-=d):v.length&&(v[v.length-1]=0),d>=0?(l(m,h)&&y.push(f),S+=d):y.length&&(y[y.length-1]=0),u(_,h),x=d,w=f;return[P?{pos:g,types:t&&v}:null,S?{pos:m,types:t&&y}:null]}function p(e,t,i,r){let n=Math.floor((e[0]-i[0])/t)*t+i[0],s=Math.floor((e[1]-i[1])/t)*t+i[1];return r[0]=n,r[1]=s,r[2]=n+t,r[3]=s+t,r}function g(e,t){for(let i=0;i<t.length;i++)e.push(t[i]);return e}function m(e,t){let{size:i=2,startIndex:r=0,endIndex:n=e.length,normalize:s=!0}=t||{},o=e.slice(r,n);y(o,i,0,n-r);let a=h(o,{size:i,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(s)for(let e of a)b(e,i);return a}function v(e,t=null,i){let{size:r=2,normalize:n=!0,edgeTypes:s=!1}=i||{};t=t||[];let o=[],a=[],u=0,h=0;for(let n=0;n<=t.length;n++){let s=t[n]||e.length,d=h,f=function(e,t,i,r){let n=-1,s=-1;for(let o=i+1;o<r;o+=t){let t=Math.abs(e[o]);t>n&&(n=t,s=o-1)}return s}(e,r,u,s);for(let t=f;t<s;t++)o[h++]=e[t];for(let t=u;t<f;t++)o[h++]=e[t];y(o,r,d,h),function(e,t,i,r,n=85.051129){let s=e[i],o=e[r-t];if(Math.abs(s-o)>180){let r=c(e,0,t,i);r[0]+=360*Math.round((o-s)/360),l(e,r),r[1]=Math.sign(r[1])*n,l(e,r),r[0]=s,l(e,r)}}(o,r,d,h,i?.maxLatitude),u=s,a[n]=h}a.pop();let f=d(o,a,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:s});if(n)for(let e of f)b(e.positions,r);return f}function y(e,t,i,r){let n,s=e[0];for(let o=i;o<r;o+=t){let t=(n=e[o])-s;(t>180||t<-180)&&(n-=360*Math.round(t/360)),e[o]=s=n}}function b(e,t){let i,r=e.length/t;for(let n=0;n<r&&((i=e[n*t])+180)%360==0;n++);let n=-(360*Math.round(i/360));if(0!==n)for(let i=0;i<r;i++)e[i*t]+=n}},58263:(e,t,i)=>{"use strict";i.d(t,{i:()=>r});let r={name:"fp32",source:`\
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
const FP32_TWO_PI: f32 = 6.2831854820251465;
const FP32_PI_2: f32 = 1.5707963705062866;
const FP32_PI_16: f32 = 0.1963495463132858;

const FP32_SIN_TABLE_0: f32 = 0.19509032368659973;
const FP32_SIN_TABLE_1: f32 = 0.3826834261417389;
const FP32_SIN_TABLE_2: f32 = 0.5555702447891235;
const FP32_SIN_TABLE_3: f32 = 0.7071067690849304;

const FP32_COS_TABLE_0: f32 = 0.9807852506637573;
const FP32_COS_TABLE_1: f32 = 0.9238795042037964;
const FP32_COS_TABLE_2: f32 = 0.8314695954322815;
const FP32_COS_TABLE_3: f32 = 0.7071067690849304;

const FP32_INVERSE_FACTORIAL_3: f32 = 1.666666716337204e-01;
const FP32_INVERSE_FACTORIAL_5: f32 = 8.333333767950535e-03;
const FP32_INVERSE_FACTORIAL_7: f32 = 1.9841270113829523e-04;
const FP32_INVERSE_FACTORIAL_9: f32 = 2.75573188446287533e-06;
const FP32_OVERFLOW: f32 = 3.402823466e+38;

fn sin_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let x = -a * a;
  var sum = a;
  var term = a;

  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_3;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_5;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_7;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_9;

  return sum;
}

fn tan_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let z = floor(a / FP32_TWO_PI);
  let reduced = a - FP32_TWO_PI * z;

  var quadrantValue = floor(reduced / FP32_PI_2 + 0.5);
  let quadrant = i32(quadrantValue);
  if (quadrant < -2 || quadrant > 2) {
    return FP32_OVERFLOW;
  }

  var angle = reduced - FP32_PI_2 * quadrantValue;
  quadrantValue = floor(angle / FP32_PI_16 + 0.5);
  let tableIndex = i32(quadrantValue);
  let absoluteTableIndex = abs(tableIndex);
  if (absoluteTableIndex > 4) {
    return FP32_OVERFLOW;
  }

  angle = angle - FP32_PI_16 * quadrantValue;
  let sinAngle = sin_taylor_fp32(angle);
  let cosAngle = sqrt(1.0 - sinAngle * sinAngle);

  var tableCos = 0.0;
  var tableSin = 0.0;
  if (absoluteTableIndex == 1) {
    tableCos = FP32_COS_TABLE_0;
    tableSin = FP32_SIN_TABLE_0;
  } else if (absoluteTableIndex == 2) {
    tableCos = FP32_COS_TABLE_1;
    tableSin = FP32_SIN_TABLE_1;
  } else if (absoluteTableIndex == 3) {
    tableCos = FP32_COS_TABLE_2;
    tableSin = FP32_SIN_TABLE_2;
  } else if (absoluteTableIndex == 4) {
    tableCos = FP32_COS_TABLE_3;
    tableSin = FP32_SIN_TABLE_3;
  }

  var sinReduced = sinAngle;
  var cosReduced = cosAngle;
  if (tableIndex > 0) {
    sinReduced = tableCos * sinAngle + tableSin * cosAngle;
    cosReduced = tableCos * cosAngle - tableSin * sinAngle;
  } else if (tableIndex < 0) {
    sinReduced = tableCos * sinAngle - tableSin * cosAngle;
    cosReduced = tableCos * cosAngle + tableSin * sinAngle;
  }

  var sinValue = 0.0;
  var cosValue = 0.0;
  if (quadrant == 0) {
    sinValue = sinReduced;
    cosValue = cosReduced;
  } else if (quadrant == 1) {
    sinValue = cosReduced;
    cosValue = -sinReduced;
  } else if (quadrant == -1) {
    sinValue = -cosReduced;
    cosValue = sinReduced;
  } else {
    sinValue = -sinReduced;
    cosValue = -cosReduced;
  }

  return sinValue / cosValue;
}

fn tan_fp32(a: f32) -> f32 {
  return tan_taylor_fp32(a);
}
#else
fn tan_fp32(a: f32) -> f32 {
  return tan(a);
}
#endif
`,vs:`\
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`}},60311:(e,t,i)=>{"use strict";function r(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(t+1):e}function n(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(0,t):""}i.d(t,{iW:()=>r,pD:()=>n})},61142:e=>{"use strict";function t(e,t,c){c=c||2;var h,p,m,v,y,b,_,x=t&&t.length,w=x?t[0]*c:e.length,P=i(e,0,w,c,!0),S=[];if(!P||P.next===P.prev)return S;if(x&&(P=function(e,t,s,l){var u,c,h,p,g,m=[];for(u=0,c=t.length;u<c;u++)h=t[u]*l,p=u<c-1?t[u+1]*l:e.length,(g=i(e,h,p,l,!1))===g.next&&(g.steiner=!0),m.push(function(e){var t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}(g));for(m.sort(n),u=0;u<m.length;u++)s=function(e,t){var i=function(e,t){var i,r,n,s=t,l=e.x,u=e.y,c=-1/0;do{if(u<=s.y&&u>=s.next.y&&s.next.y!==s.y){var h=s.x+(u-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(h<=l&&h>c&&(c=h,n=s.x<s.next.x?s:s.next,h===l))return n}s=s.next}while(s!==t);if(!n)return null;var f,p=n,g=n.x,m=n.y,v=1/0;s=n;do{l>=s.x&&s.x>=g&&l!==s.x&&o(u<m?l:c,u,g,m,u<m?c:l,u,s.x,s.y)&&(f=Math.abs(u-s.y)/(l-s.x),d(s,e)&&(f<v||f===v&&(s.x>n.x||s.x===n.x&&(i=n,r=s,0>a(i.prev,i,r.prev)&&0>a(r.next,i,i.next))))&&(n=s,v=f)),s=s.next}while(s!==p);return n}(e,t);if(!i)return t;var n=f(i,e);return r(n,n.next),r(i,i.next)}(m[u],s);return s}(e,t,P,c)),e.length>80*c){h=m=e[0],p=v=e[1];for(var C=c;C<w;C+=c)y=e[C],b=e[C+1],y<h&&(h=y),b<p&&(p=b),y>m&&(m=y),b>v&&(v=b);_=0!==(_=Math.max(m-h,v-p))?32767/_:0}return function e(t,i,n,c,h,p,m){if(t){!m&&p&&function(e,t,i,r){var n=e;do 0===n.z&&(n.z=s(n.x,n.y,t,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,function(e){var t,i,r,n,s,o,a,l,u=1;do{for(i=e,e=null,s=null,o=0;i;){for(o++,r=i,a=0,t=0;t<u&&(a++,r=r.nextZ);t++);for(l=u;a>0||l>0&&r;)0!==a&&(0===l||!r||i.z<=r.z)?(n=i,i=i.nextZ,a--):(n=r,r=r.nextZ,l--),s?s.nextZ=n:e=n,n.prevZ=s,s=n;i=r}s.nextZ=null,u*=2}while(o>1)}(n)}(t,c,h,p);for(var v,y,b=t;t.prev!==t.next;){if(v=t.prev,y=t.next,p?function(e,t,i,r){var n=e.prev,l=e.next;if(a(n,e,l)>=0)return!1;for(var u=n.x,c=e.x,h=l.x,d=n.y,f=e.y,p=l.y,g=u<c?u<h?u:h:c<h?c:h,m=d<f?d<p?d:p:f<p?f:p,v=u>c?u>h?u:h:c>h?c:h,y=d>f?d>p?d:p:f>p?f:p,b=s(g,m,t,i,r),_=s(v,y,t,i,r),x=e.prevZ,w=e.nextZ;x&&x.z>=b&&w&&w.z<=_;){if(x.x>=g&&x.x<=v&&x.y>=m&&x.y<=y&&x!==n&&x!==l&&o(u,d,c,f,h,p,x.x,x.y)&&a(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=g&&w.x<=v&&w.y>=m&&w.y<=y&&w!==n&&w!==l&&o(u,d,c,f,h,p,w.x,w.y)&&a(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=b;){if(x.x>=g&&x.x<=v&&x.y>=m&&x.y<=y&&x!==n&&x!==l&&o(u,d,c,f,h,p,x.x,x.y)&&a(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=_;){if(w.x>=g&&w.x<=v&&w.y>=m&&w.y<=y&&w!==n&&w!==l&&o(u,d,c,f,h,p,w.x,w.y)&&a(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}(t,c,h,p):function(e){var t=e.prev,i=e.next;if(a(t,e,i)>=0)return!1;for(var r=t.x,n=e.x,s=i.x,l=t.y,u=e.y,c=i.y,h=r<n?r<s?r:s:n<s?n:s,d=l<u?l<c?l:c:u<c?u:c,f=r>n?r>s?r:s:n>s?n:s,p=l>u?l>c?l:c:u>c?u:c,g=i.next;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=p&&o(r,l,n,u,s,c,g.x,g.y)&&a(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}(t)){i.push(v.i/n|0),i.push(t.i/n|0),i.push(y.i/n|0),g(t),t=y.next,b=y.next;continue}if((t=y)===b){m?1===m?e(t=function(e,t,i){var n=e;do{var s=n.prev,o=n.next.next;!l(s,o)&&u(s,n,n.next,o)&&d(s,o)&&d(o,s)&&(t.push(s.i/i|0),t.push(n.i/i|0),t.push(o.i/i|0),g(n),g(n.next),n=e=o),n=n.next}while(n!==e);return r(n)}(r(t),i,n),i,n,c,h,p,2):2===m&&function(t,i,n,s,o,c){var h=t;do{for(var p,g,m=h.next.next;m!==h.prev;){if(h.i!==m.i&&(p=h,g=m,p.next.i!==g.i&&p.prev.i!==g.i&&!function(e,t){var i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&u(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}(p,g)&&(d(p,g)&&d(g,p)&&function(e,t){var i=e,r=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}(p,g)&&(a(p.prev,p,g.prev)||a(p,g.prev,g))||l(p,g)&&a(p.prev,p,p.next)>0&&a(g.prev,g,g.next)>0))){var v=f(h,m);h=r(h,h.next),v=r(v,v.next),e(h,i,n,s,o,c,0),e(v,i,n,s,o,c,0);return}m=m.next}h=h.next}while(h!==t)}(t,i,n,c,h,p):e(r(t),i,n,c,h,p,1);break}}}}(P,S,c,h,p,_,0),S}function i(e,t,i,r,n){var s,o;if(n===v(e,t,i,r)>0)for(s=t;s<i;s+=r)o=p(s,e[s],e[s+1],o);else for(s=i-r;s>=t;s-=r)o=p(s,e[s],e[s+1],o);return o&&l(o,o.next)&&(g(o),o=o.next),o}function r(e,t){if(!e)return e;t||(t=e);var i,r=e;do if(i=!1,!r.steiner&&(l(r,r.next)||0===a(r.prev,r,r.next))){if(g(r),(r=t=r.prev)===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function n(e,t){return e.x-t.x}function s(e,t,i,r,n){return(e=((e=((e=((e=((e=(e-i)*n|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-r)*n|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function o(e,t,i,r,n,s,o,a){return(n-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(r-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(n-o)*(r-a)}function a(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function l(e,t){return e.x===t.x&&e.y===t.y}function u(e,t,i,r){var n=h(a(e,t,i)),s=h(a(e,t,r)),o=h(a(i,r,e)),l=h(a(i,r,t));return!!(n!==s&&o!==l||0===n&&c(e,i,t)||0===s&&c(e,r,t)||0===o&&c(i,e,r)||0===l&&c(i,t,r))}function c(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function h(e){return e>0?1:e<0?-1:0}function d(e,t){return 0>a(e.prev,e,e.next)?a(e,t,e.next)>=0&&a(e,e.prev,t)>=0:0>a(e,t,e.prev)||0>a(e,e.next,t)}function f(e,t){var i=new m(e.i,e.x,e.y),r=new m(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function p(e,t,i,r){var n=new m(e,t,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function g(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function m(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function v(e,t,i,r){for(var n=0,s=t,o=i-r;s<i;s+=r)n+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return n}e.exports=t,e.exports.default=t,t.deviation=function(e,t,i,r){var n=t&&t.length,s=n?t[0]*i:e.length,o=Math.abs(v(e,0,s,i));if(n)for(var a=0,l=t.length;a<l;a++){var u=t[a]*i,c=a<l-1?t[a+1]*i:e.length;o-=Math.abs(v(e,u,c,i))}var h=0;for(a=0;a<r.length;a+=3){var d=r[a]*i,f=r[a+1]*i,p=r[a+2]*i;h+=Math.abs((e[d]-e[p])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[p+1]-e[d+1]))}return 0===o&&0===h?0:Math.abs((h-o)/o)},t.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},r=0,n=0;n<e.length;n++){for(var s=0;s<e[n].length;s++)for(var o=0;o<t;o++)i.vertices.push(e[n][s][o]);n>0&&(r+=e[n-1].length,i.holes.push(r))}return i}},62605:(e,t,i)=>{"use strict";function r(e,t=()=>!0){return Array.isArray(e)?function e(t,i,r){let n=-1;for(;++n<t.length;){let s=t[n];Array.isArray(s)?e(s,i,r):i(s)&&r.push(s)}return r}(e,t,[]):t(e)?[e]:[]}function n({target:e,source:t,start:i=0,count:r=1}){let n=t.length,s=r*n,o=0;for(let r=i;o<n;o++)e[r++]=t[o];for(;o<s;)o<s-o?(e.copyWithin(i+o,i,i+o),o*=2):(e.copyWithin(i+o,i,i+s-o),o=s);return e}i.d(t,{B:()=>r,R:()=>n})},62764:(e,t,i)=>{"use strict";i.d(t,{E1:()=>o,S3:()=>s,by:()=>n});let r=/\?.*/;function n(e){let t=e.match(r);return t&&t[0]}function s(e){return e.replace(r,"")}function o(e){if(e.length<50)return e;let t=e.slice(e.length-15),i=e.substr(0,32);return`${i}...${t}`}},62988:(e,t,i)=>{"use strict";i.d(t,{LB:()=>f,aY:()=>m,ow:()=>g});var r=i(18001),n=i(6953),s=i(90460),o=i(82611);let a=[0,0,0,0],l=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],c=[0,0,0],h=[0,0,0],d={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function f(e){let t=d[e];if(void 0===t)throw Error(`Invalid coordinateSystem: ${e}`);return t}let p=(0,o.A)(function({viewport:e,devicePixelRatio:t,coordinateSystem:i,coordinateOrigin:o}){let{projectionCenter:h,viewProjectionMatrix:d,originCommon:p,cameraPosCommon:m,shaderCoordinateOrigin:v,geospatialOrigin:y}=function(e,t,i){let{viewMatrixUncentered:s,projectionMatrix:o}=e,{viewMatrix:u,viewProjectionMatrix:c}=e,h=a,d=a,f=e.cameraPosition,{geospatialOrigin:p,shaderCoordinateOrigin:m,offsetMode:v}=g(e,t,i);return v&&(d=e.projectPosition(p||m),f=[f[0]-d[0],f[1]-d[1],f[2]-d[2]],d[3]=1,h=r.Z0([],d,c),u=s||u,c=n.lw([],o,u),c=n.lw([],c,l)),{viewMatrix:u,viewProjectionMatrix:c,projectionCenter:h,originCommon:d,cameraPosCommon:f,shaderCoordinateOrigin:m,geospatialOrigin:p}}(e,i,o),b=e.getDistanceScales(),_=[e.width*t,e.height*t],x=r.Z0([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,w={coordinateSystem:f(i),projectionMode:e.projectionMode,coordinateOrigin:v,commonOrigin:p.slice(0,3),center:h,pseudoMeters:!!e._pseudoMeters,viewportSize:_,devicePixelRatio:t,focalDistance:x,commonUnitsPerMeter:b.unitsPerMeter,commonUnitsPerWorldUnit:b.unitsPerMeter,commonUnitsPerWorldUnit2:c,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:d,modelMatrix:u,cameraPosition:m};if(y){let t=e.getDistanceScales(y);switch(i){case"meter-offsets":w.commonUnitsPerWorldUnit=t.unitsPerMeter,w.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case"lnglat":case"lnglat-offsets":e._pseudoMeters||(w.commonUnitsPerMeter=t.unitsPerMeter),w.commonUnitsPerWorldUnit=t.unitsPerDegree,w.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case"cartesian":w.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],w.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]]}}if(e.projectionMode===s.Kx.GLOBE&&"meter-offsets"===i){let e=o[0]*Math.PI/180,t=o[1]*Math.PI/180,i=Math.cos(t),r=((o[2]||0)/6370972+1)*256;w.commonOrigin=[Math.sin(e)*i*r,-Math.cos(e)*i*r,Math.sin(t)*r]}return w});function g(e,t,i=h){let r;i.length<3&&(i=[i[0],i[1],0]);let n=i,o=!0;switch(r="lnglat-offsets"===t||"meter-offsets"===t?i:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case s.Kx.WEB_MERCATOR:("lnglat"===t||"cartesian"===t)&&(r=[0,0,0],o=!1);break;case s.Kx.WEB_MERCATOR_AUTO_OFFSET:"lnglat"===t?n=r:"cartesian"===t&&(n=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],r=e.unprojectPosition(n),n[0]-=i[0],n[1]-=i[1],n[2]-=i[2]);break;case s.Kx.IDENTITY:(n=e.position.map(Math.fround))[2]=n[2]||0;break;case s.Kx.GLOBE:o=!1,r=null;break;default:o=!1}return{geospatialOrigin:r,shaderCoordinateOrigin:n,offsetMode:o}}function m({viewport:e,devicePixelRatio:t=1,modelMatrix:i=null,coordinateSystem:r="default",coordinateOrigin:n=h,autoWrapLongitude:s=!1}){"default"===r&&(r=e.isGeospatial?"lnglat":"cartesian");let o=p({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:n});return o.wrapLongitude=s,o.modelMatrix=i||u,o}},63097:(e,t,i)=>{"use strict";i.d(t,{A:()=>tf});var r=i(65302),n=i(97253),s=i(62605),o=i(79155);class a extends r.A{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:i}=this.props;return i&&i[e]&&i[e].type||t}getSubLayerRow(e,t,i){return e.__source={parent:this,object:t,index:i},e}getSubLayerAccessor(e){if("function"==typeof e){let t={index:-1,data:this.props.data,target:[]};return(i,r)=>i&&i.__source?(t.index=i.__source.index,e(i.__source.object,t)):e(i,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:i,visible:r,parameters:n,getPolygonOffset:s,highlightedObjectIndex:a,autoHighlight:l,highlightColor:u,coordinateSystem:c,coordinateOrigin:h,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:g,fetch:m,operation:v,_subLayerProps:y}=this.props,b={id:"",updateTriggers:{},opacity:t,pickable:i,visible:r,parameters:n,getPolygonOffset:s,highlightedObjectIndex:a,autoHighlight:l,highlightColor:u,coordinateSystem:c,coordinateOrigin:h,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:g,fetch:m,operation:v},_=y&&e.id&&y[e.id],x=_&&_.updateTriggers,w=e.id||"sublayer";if(_){let t=this.props[o.fW],i=e.type?e.type._propTypes:{};for(let e in _){let r=i[e]||t[e];r&&"accessor"===r.type&&(_[e]=this.getSubLayerAccessor(_[e]))}}for(let t of(Object.assign(b,e,_),b.id=`${this.props.id}-${w}`,b.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...x},g)){let e=t.getSubLayerProps.call(this,t);e&&Object.assign(b,e,{updateTriggers:Object.assign(b.updateTriggers,e.updateTriggers)})}return b}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let i=this.internalState.subLayers,r=!i||this.needsUpdate();if(r){let e=this.renderLayers();i=(0,s.B)(e,Boolean),this.internalState.subLayers=i}for(let e of((0,n.A)("compositeLayer.renderLayers",this,r,i),i))e.parent=this}}a.layerName="CompositeLayer";let l=a;var u=i(34537),c=i(66801),h=i(6431),d=i(90460),f=i(77397),p=i(40978),g=i(46740);let m=`\
layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,v={name:"icon",vs:m,fs:m,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},y=`\
#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,b=`\
#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,_=`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = geometry.pickingColor;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`;var x=i(46043),w=i(37999);let P=()=>{},S={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},C={x:0,y:0,width:0,height:0};function E(e){return e&&(e.id||e.url)}function L(e){let{device:t}=e;"webgl"===t.type?e.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(e)}function A(e,t,i){for(let r=0;r<t.length;r++){let{icon:n,xOffset:s}=t[r];e[E(n)]={...n,x:s,y:i}}}class T{constructor(e,{onUpdate:t=P,onError:i=P}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=4,this._canvasWidth=1024,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=i}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?E(e):e;return this._mapping[t]||C}setProps({loadOptions:e,autoPacking:t,iconAtlas:i,iconMapping:r,textureParameters:n}){e&&(this._loadOptions=e),void 0!==t&&(this._autoPacking=t),r&&(this._mapping=r),i&&(this._texture?.delete(),this._texture=null,this._externalTexture=i),n&&(this._samplerParameters=n)}get isLoaded(){return 0===this._pendingCount}packIcons(e,t){if(!this._autoPacking||"undefined"==typeof document)return;let i=Object.values(function(e,t,i){if(!e||!t)return null;i=i||{};let r={},{iterable:n,objectInfo:s}=(0,w.X)(e);for(let e of n){s.index++;let n=t(e,s),o=E(n);if(!n)throw Error("Icon is missing.");if(!n.url)throw Error("Icon url is missing.");r[o]||i[o]&&n.url===i[o].url||(r[o]={...n,source:e,sourceIndex:s.index})}return r}(e,t,this._mapping)||{});if(i.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:n,canvasHeight:s}=function({icons:e,buffer:t,mapping:i={},xOffset:r=0,yOffset:n=0,rowHeight:s=0,canvasWidth:o}){let a=[];for(let l=0;l<e.length;l++){let u=e[l];if(!i[E(u)]){let{height:e,width:l}=u;r+l+t>o&&(A(i,a,n),r=0,n=s+n+t,s=0,a=[]),a.push({icon:u,xOffset:r}),r=r+l+t,s=Math.max(s,e)}}return a.length>0&&A(i,a,n),{mapping:i,rowHeight:s,xOffset:r,yOffset:n,canvasWidth:o,canvasHeight:Math.pow(2,Math.ceil(Math.log2(s+n+t)))}}({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=n,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=s,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||S,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=function(e,t,i,r){let{width:n,height:s,device:o}=e,a=o.createTexture({format:"rgba8unorm",width:t,height:i,sampler:r,mipLevels:o.getMipLevelCount(t,i)}),l=o.createCommandEncoder();l.copyTextureToTexture({sourceTexture:e,destinationTexture:a,width:n,height:s});let u=l.finish();return o.submit(u),L(a),e.destroy(),a}(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||S)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){let t=this._canvas.getContext("2d",{willReadFrequently:!0});for(let i of e)this._pendingCount++,(0,x.H)(i.url,this._loadOptions).then(e=>{let r=E(i),n=this._mapping[r],{x:s,y:o,width:a,height:l}=n,{image:u,width:c,height:h}=function(e,t,i,r){let n=Math.min(i/t.width,r/t.height),s=Math.floor(t.width*n),o=Math.floor(t.height*n);return 1===n?{image:t,width:s,height:o}:(e.canvas.height=o,e.canvas.width=s,e.clearRect(0,0,s,o),e.drawImage(t,0,0,t.width,t.height,0,0,s,o),{image:e.canvas,width:s,height:o})}(t,e,a,l),d=s+(a-c)/2,f=o+(l-h)/2;this._texture?.copyExternalImage({image:u,x:d,y:f,width:c,height:h}),n.x=d,n.y=f,n.width=c,n.height=h,this._texture&&L(this._texture),this.onUpdate(c!==a||h!==l)}).catch(e=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}}let M=[0,0,0,255],I={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:e=>e.position},getIcon:{type:"accessor",value:e=>e.icon},getColor:{type:"accessor",value:M},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}};class R extends r.A{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:y,fs:b,source:_.replace("PICKING_COLOR_ATTRIBUTE",e?"@location(10) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",e?"picking_getPickingColorFromIndex(inp.rowIndexes)":"picking_getPickingColorFromIndex(inp.instanceIndex)"),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[u.A,c.A,h.Ay,v]})}initializeState(){this.state={iconManager:new T(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getSize",defaultValue:1},instanceIconDefs:{size:7,bufferGroup:"icon-instance-data",accessor:"getIcon",transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,bufferGroup:"icon-instance-data",accessor:"getColor",defaultValue:M},instanceAngles:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,bufferGroup:"icon-instance-data",accessor:"getPixelOffset"},...this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,n=this.getAttributeManager(),{iconAtlas:s,iconMapping:o,data:a,getIcon:l,textureParameters:u}=t,{iconManager:c}=this.state;if("string"==typeof s)return;let h=s||this.internalState.isAsyncPropLoading("iconAtlas");c.setProps({loadOptions:t.loadOptions,autoPacking:!h,iconAtlas:s,iconMapping:h?o:null,textureParameters:u}),h?i.iconMapping!==t.iconMapping&&n.invalidate("getIcon"):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&c.packIcons(a,l),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),n.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){this._drawModel(this.state.model)}_drawModel(e){let{sizeScale:t,sizeBasis:i,sizeMinPixels:r,sizeMaxPixels:n,sizeUnits:s,billboard:o,alphaCutoff:a}=this.props,{iconManager:l}=this.state,u=l.getTexture();if(u){let l={iconsTexture:u,iconsTextureDim:[u.width,u.height],sizeUnits:d.p5[s],sizeScale:t,sizeBasis:+("height"===i),sizeMinPixels:r,sizeMaxPixels:n,billboard:o,alphaCutoff:a};e.shaderInputs.setProps({icon:l}),e.draw(this.context.renderPass)}}_getModel(e=this.props.id){return new p.K(this.context.device,{...this.getShaders(),id:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new g.V({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([-1,-1,1,-1,-1,1,1,1])}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):f.A.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:i,width:r,height:n,mask:s,anchorX:o=r/2,anchorY:a=n/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,n/2-a,t,i,r,n,+!!s]}}R.defaultProps=I,R.layerName="IconLayer";let O=R,k=`\
layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,B={name:"scatterplot",vs:k,fs:k,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},z=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,D=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,F=`\
// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
  @location(6) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  // WGSL selects the second value when the condition is true, so keep the antialiased path second.
  let edgePadding = select(
    1.0,
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
    geometry.position = vec4<f32>(
      geometry.position.xy + project_pixel_size_vec2(offset.xy),
      geometry.position.zw
    );
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offset
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    step(distToCenter, varyings.outerRadiusPixels),
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  clip_filterColor(varyings.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`,N={name:"clip",source:`\
struct ClipUniforms {
  enabled: i32,
  mode: i32,
  bounds: vec4<f32>,
};

@group(2) @binding(auto) var<uniform> clipUniforms: ClipUniforms;

fn clip_isInBounds(coordinates: vec2<f32>) -> bool {
  return coordinates.x >= clipUniforms.bounds.x &&
    coordinates.y >= clipUniforms.bounds.y &&
    coordinates.x < clipUniforms.bounds.z &&
    coordinates.y < clipUniforms.bounds.w;
}

fn clip_filterPosition(position: ptr<function, vec4<f32>>, instanceCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == 1 &&
    !clip_isInBounds(instanceCoordinates)
  ) {
    *position = vec4<f32>(2.0, 2.0, 2.0, 1.0);
  }
}

fn clip_filterColor(geometryCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == 0 &&
    !clip_isInBounds(geometryCoordinates)
  ) {
    discard;
  }
}
`,props:{},uniforms:{},bindingLayout:[{name:"clip",group:2}],uniformTypes:{enabled:"i32",mode:"i32",bounds:"vec4<f32>"},defaultUniforms:{enabled:0,mode:0,bounds:[0,0,1,1]},getUniforms(e={}){let t={};return void 0!==e.enabled&&(t.enabled=+!!e.enabled),void 0!==e.mode&&(t.mode=+("instance"===e.mode)),void 0!==e.bounds&&(t.bounds=e.bounds),t}},$=[0,0,0,255],j={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:e=>e.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:$},getLineColor:{type:"accessor",value:$},getLineWidth:{type:"accessor",value:1},getPixelOffset:{type:"accessor",value:[0,0]},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class U extends r.A{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:z,fs:D,source:F.replace("PICKING_COLOR_ATTRIBUTE",e?"@location(8) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",e?"picking_getPickingColorFromIndex(attributes.rowIndexes)":"picking_getPickingColorFromIndex(attributes.instanceIndex)"),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[u.A,c.A,h.Ay,B,..."webgpu"===this.context.device.type?[N]:[]]})}initializeState(){let e=this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{};this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset",bufferGroup:"scatterplot-instance-data"},...e})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:i,radiusMinPixels:r,radiusMaxPixels:n,stroked:s,filled:o,billboard:a,antialiasing:l,lineWidthUnits:u,lineWidthScale:c,lineWidthMinPixels:h,lineWidthMaxPixels:f}=this.props,p={stroked:s,filled:o,billboard:a,antialiasing:l,radiusUnits:d.p5[t],radiusScale:i,radiusMinPixels:r,radiusMaxPixels:n,lineWidthUnits:d.p5[u],lineWidthScale:c,lineWidthMinPixels:h,lineWidthMaxPixels:f},g=this.state.model;g.shaderInputs.setProps({scatterplot:p}),g.draw(this.context.renderPass)}_getModel(){return new p.K(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new g.V({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0])}}}),isInstanced:!0})}}U.defaultProps=j,U.layerName="ScatterplotLayer";let V=`\
layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,G={name:"sdf",vs:V,fs:V,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}},W={none:0,start:1,center:2,end:3},H={name:"text",vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${W.start}
#define ALIGN_MODE_CENTER ${W.center}
#define ALIGN_MODE_END ${W.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t="none",contentAlignVertical:i="none",fontSize:r,viewport:n})=>({cutoffPixels:e,align:[W[t],W[i]],fontSize:r,flipY:n?.flipY??!1}),uniformTypes:{cutoffPixels:"vec2<f32>",align:"vec2<i32>",fontSize:"f32",flipY:"f32"}},q=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in float rowIndexes;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,Y=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Z=function({collision:e=!1}={}){return`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32
};

struct SdfUniforms {
  gamma: f32,
  enabled: f32,
  buffer: f32,
  outlineBuffer: f32,
  outlineColor: vec4<f32>
};

${e?`\
struct CollisionUniforms {
  sort: i32,
  enabled: i32
};
`:""}

const ALIGN_MODE_START: i32 = 1;
const ALIGN_MODE_CENTER: i32 = 2;
const ALIGN_MODE_END: i32 = 3;

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var<uniform> text: TextUniforms;
@group(0) @binding(auto) var<uniform> sdf: SdfUniforms;
${e?"@group(0) @binding(auto) var<uniform> collision: CollisionUniforms;":""}
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;
${e?`\
@group(0) @binding(auto) var collision_texture : texture_2d<f32>;
`:""}

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  return rotation * vertex;
}

fn get_pixel_offset_from_alignment(
  anchor: f32,
  extent: f32,
  clipStart: f32,
  clipEnd: f32,
  mode: i32
) -> f32 {
  if (clipEnd < clipStart) {
    return 0.0;
  }
  if (mode == ALIGN_MODE_START) {
    return max(-(anchor + clipStart), 0.0);
  }
  if (mode == ALIGN_MODE_CENTER) {
    let minValue = max(0.0, anchor + clipStart);
    let maxValue = min(extent, anchor + clipEnd);
    if (minValue < maxValue) {
      return (minValue + maxValue) / 2.0 - anchor;
    }
    return 0.0;
  }
  if (mode == ALIGN_MODE_END) {
    return min(extent - (anchor + clipEnd), 0.0);
  }
  return 0.0;
}

${e?`\
fn collision_match(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  let textureSize = vec2<i32>(textureDimensions(collision_texture));
  let pixelCoords = clamp(
    vec2<i32>(texCoords * vec2<f32>(textureSize)),
    vec2<i32>(0),
    textureSize - vec2<i32>(1)
  );
  let collisionPickingColor = textureLoad(collision_texture, pixelCoords, 0);
  let delta = dot(abs(collisionPickingColor.rgb - pickingColor), vec3<f32>(1.0));
  return step(delta, 0.001);
}

fn collision_is_visible(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  if (collision.enabled == 0) {
    return 1.0;
  }

  var accumulator = 0.0;
  let stepSize = vec2<f32>(1.0) / project.viewportSize;

  for (var i: i32 = -2; i <= 2; i = i + 1) {
    for (var j: i32 = -2; j <= 2; j = j + 1) {
      let delta = vec2<f32>(f32(j), f32(i)) * stepSize;
      accumulator = accumulator + collision_match(texCoords + delta, pickingColor);
    }
  }

  return pow(accumulator / 25.0, 2.2);
}
`:""}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  @location(10) rowIndexes: u32,
  @location(11) instanceClipRect: vec4<f32>,
  ${e?"@location(12) collisionPriorities: f32,":""}
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  var pos: vec4<f32>;
  var anchorPosScreen: vec2<f32>;
  if (icon.billboard != 0) {
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = pos.xy / pos.w;

    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    let anchorPos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = anchorPos.xy / anchorPos.w;
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offsetCommon);
  }

  anchorPosScreen = vec2<f32>(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 *
    project.viewportSize / project.devicePixelRatio;
  var xy = project_size_vec2(inp.instanceClipRect.xy) * project.scale;
  var wh = project_size_vec2(inp.instanceClipRect.zw) * project.scale;

  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (text.align.x > 0 || text.align.y > 0) {
    let viewportPixels = project.viewportSize / project.devicePixelRatio;
    let scrollPixels = vec2<f32>(
      get_pixel_offset_from_alignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
      -get_pixel_offset_from_alignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
    );
    pixelOffset = pixelOffset + scrollPixels;
    let scrollClipOffset = project_pixel_size_to_clipspace(scrollPixels);
    pos.x = pos.x + scrollClipOffset.x;
    pos.y = pos.y + scrollClipOffset.y;
  }

  if (inp.instanceClipRect.z >= 0.0) {
    if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.x > 0.0) {
      let viewportWidth = project.viewportSize.x / project.devicePixelRatio;
      let left = max(anchorPosScreen.x + xy.x, 0.0);
      let right = min(anchorPosScreen.x + xy.x + wh.x, viewportWidth);
      if (right - left < text.cutoffPixels.x) {
        pos = vec4<f32>(0.0);
      }
    }
  }
  if (inp.instanceClipRect.w >= 0.0) {
    if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.y > 0.0) {
      let viewportHeight = project.viewportSize.y / project.devicePixelRatio;
      let top = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
      let bottom = min(anchorPosScreen.y - xy.y, viewportHeight);
      if (bottom - top < text.cutoffPixels.y) {
        pos = vec4<f32>(0.0);
      }
    }
  }

  ${e?`\
  if (collision.sort != 0) {
    pos.z = -0.001 * inp.collisionPriorities * pos.w;
  }
  `:""}

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.position = pos;
  outp.vColor = inp.instanceColors;
  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);
  var alpha = texColor.a;
  var color = inp.vColor;

  if (sdf.enabled > 0.5) {
    let distance = alpha;
    alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);

    if (sdf.outlineBuffer > 0.0) {
      let inFill = alpha;
      let inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
      color = mix(sdf.outlineColor, inp.vColor, inFill);
      alpha = inBorder;
    }
  } else if (inp.vColorMode == 0.0) {
    color = texColor;
  }

  var a = alpha * color.a * layer.opacity;
  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  ${e?`\
  let collisionFade = collision_is_visible(inp.position.xy / project.viewportSize, inp.pickingColor);
  a = a * collisionFade;
  if (a <= 0.0001) {
    discard;
  }
  `:""}

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(color.rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}();class K extends O{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,H,G],vs:q,fs:Y,source:Z}}initializeState(){super.initializeState();let e=this.getAttributeManager();e.attributes.instanceIconDefs.settings.update=this.calculateInstanceIconDefs,e.addInstanced({rowIndexes:{type:"uint32",size:1,bufferGroup:"icon-instance-data",accessor:(e,{index:t})=>t},instanceClipRect:{size:4,bufferGroup:"icon-instance-data",accessor:"getContentBox",defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,{outlineColor:n}=t;if(r.extensionsChanged){this.state.fillModel?.destroy();let e="webgpu"===this.context.device.type?this._getModel(`${this.props.id}-fill`):void 0;this.setState({fillModel:e,models:e?[this.state.model,e]:[this.state.model]})}if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate("instanceIconDefs"),n!==i.outlineColor){let e=[n[0]/255,n[1]/255,n[2]/255,(n[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&f.A.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:i,fontSize:r,outlineWidth:n,contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a}=this.props,{outlineColor:l}=this.state,u=n?Math.max(i,.75*(1-n)):-1,c=this.state.model,h={buffer:.75,outlineBuffer:u,gamma:i,enabled:!!t,outlineColor:l},d={contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a,fontSize:r,viewport:this.context.viewport};if(c.shaderInputs.setProps({sdf:h,text:d}),super.draw(e),t&&n){let{iconManager:e}=this.state;if(e.getTexture()){let e=this.state.fillModel||c;e.shaderInputs.setProps({sdf:{...h,outlineBuffer:.75},text:d}),this._drawModel(e)}}}calculateInstanceIconDefs(e,{startRow:t,endRow:i}){let{data:r,getIcon:n,getIconOffsets:s}=this.props,o=e.getVertexOffset(t),a=e.value,{iterable:l,objectInfo:u}=(0,w.X)(r,t,i);for(let t of l){u.index++;let i=n(t,u),r=s(t,u);if(i){let t=0;for(let n of Array.from(i)){let i=super.getInstanceIconDef(n);i[0]=r[2*t],i[1]+=r[2*t+1],i[6]=1,a.set(i,o),o+=e.size,t++}}}}}K.defaultProps={getIconOffsets:{type:"accessor",value:e=>e.offsets},getContentBox:{type:"accessor",value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none"},K.layerName="MultiIconLayer";let X=new Float64Array(256);for(let e=0;e<256;e++){let t=.5-Math.pow(e/255,1/2.2);X[e]=t*Math.abs(t)}X[255]=-1e20;class Q{constructor({fontSize:e=24,buffer:t=3,radius:i=8,cutoff:r=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:o="normal",lang:a=null}={}){this.buffer=t,this.radius=i,this.cutoff=r,this.lang=a;let l=this.size=e+4*t,u=this._createCanvas(l),c=this.ctx=u.getContext("2d",{willReadFrequently:!0});c.font=`${o} ${s} ${e}px ${n}`,c.textBaseline="alphabetic",c.textAlign="left",c.fillStyle="black",this.gridOuter=new Float64Array(l*l),this.gridInner=new Float64Array(l*l),this.f=new Float64Array(l),this.z=new Float64Array(l+1),this.v=new Uint16Array(l)}_createCanvas(e){if("undefined"!=typeof OffscreenCanvas)return new OffscreenCanvas(e,e);let t=document.createElement("canvas");return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:i,actualBoundingBoxDescent:r,actualBoundingBoxLeft:n,actualBoundingBoxRight:s}=this.ctx.measureText(e),o=Math.ceil(i),a=Math.floor(-n),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s)-a)),u=Math.max(0,Math.min(this.size-this.buffer,o+Math.ceil(r))),c=l+2*this.buffer,h=u+2*this.buffer,d=Math.max(c*h,0),f=new Uint8ClampedArray(d),p={data:f,width:c,height:h,glyphWidth:l,glyphHeight:u,glyphTop:o,glyphLeft:a,glyphAdvance:t};if(0===l||0===u)return p;let{ctx:g,buffer:m,gridInner:v,gridOuter:y}=this;this.lang&&(g.lang=this.lang),g.clearRect(m,m,l,u),g.fillText(e,m-a,m+o);let b=g.getImageData(m,m,l,u);y.fill(1e20,0,d),v.fill(0,0,d);let _=3;for(let e=0;e<u;e++){let t=(e+m)*c+m;for(let e=0;e<l;e++,_+=4,t++){let e=b.data[_];if(0===e)continue;let i=X[e];y[t]=Math.max(0,i),v[t]=Math.max(0,-i)}}J(y,0,0,c,h,c,this.f,this.v,this.z);let x=Math.min(m,1);J(v,m-x,m-x,l+2*x,u+2*x,c,this.f,this.v,this.z);let w=255/this.radius,P=255*(1-this.cutoff);for(let e=0;e<d;e++){let t=Math.sqrt(y[e])-Math.sqrt(v[e]);f[e]=Math.round(P-w*t)}return p}}function J(e,t,i,r,n,s,o,a,l){for(let u=t;u<t+r;u++)ee(e,i*s+u,s,n,o,a,l);for(let u=i;u<i+n;u++)ee(e,u*s+t,1,r,o,a,l)}function ee(e,t,i,r,n,s,o){s[0]=0,o[0]=-1e20,o[1]=1e20,n[0]=e[t];for(let a=1,l=0,u=0;a<r;a++){n[a]=e[t+a*i];let r=a*a;do{let e=s[l];u=(n[a]-n[e]+r-e*e)/(a-e)/2}while(u<=o[l]&&--l>-1);s[++l]=a,o[l]=u,o[l+1]=1e20}for(let a=0,l=0;a<r;a++){for(;o[l+1]<a;)l++;let r=s[l],u=a-r;e[t+a*i]=n[r]+u*u}}let et=[];function ei(e,t,i,r){let n=0;for(let s=t;s<i;s++){let t=e[s];n+=r[t]?.advance||0}return n}function er(e,t,i,r,n,s){let o=t,a=0;for(let l=t;l<i;l++){let t=ei(e,l,l+1,n);a+t>r&&(o<l&&s.push(l),o=l,a=0),a+=t}return a}class en{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?this.delete(e):Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e)}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}}let es={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:function(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},eo=new en(3);function ea(e,t,i,r){e.font=`${r} ${i}px ${t}`,e.fillStyle="#000",e.textBaseline="alphabetic",e.textAlign="left"}class el{constructor(){this.props={...es}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=function(e,t){let i;i=new Set("string"==typeof t?Array.from(t):t);let r=eo.get(e);if(!r)return i;for(let e in r.mapping)i.has(e)&&i.delete(e);return i}(this._key,this.props.characterSet),i=eo.get(this._key);if(i&&0===t.size){this._atlas!==i&&(this._atlas=i);return}let r=this._generateFontAtlas(t,i);this._atlas=r,eo.set(this._key,r)}_generateFontAtlas(e,t){let i,{fontFamily:r,fontWeight:n,fontSize:s,buffer:o,sdf:a,radius:l,cutoff:u}=this.props,c=t&&t.data;c||((c=document.createElement("canvas")).width=1024);let h=c.getContext("2d",{willReadFrequently:!0});ea(h,r,s,n);let d=e=>(function(e,t,i){if(void 0===i){let i=e.measureText("A");return i.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(i.fontBoundingBoxAscent),descent:Math.ceil(i.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:.9*t,descent:.3*t}}let r=e.measureText(i);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:.9*t,descent:.3*t}})(h,s,e);this._getFontRenderer?i=this._getFontRenderer(this.props):a&&(i={measure:d,draw:function({fontSize:e,buffer:t,radius:i,cutoff:r,fontFamily:n,fontWeight:s}){let o=new Q({fontSize:e,buffer:t,radius:i,cutoff:r,fontFamily:n,fontWeight:`${s}`});return e=>{let{data:i,width:r,height:n}=o.draw(e),s=new ImageData(r,n);for(let e=0;e<i.length;e++)s.data[4*e+3]=i[e];return{data:s,left:t,top:t}}}(this.props)});let{mapping:f,canvasHeight:p,xOffset:g,yOffsetMin:m,yOffsetMax:v}=function({characterSet:e,measureText:t,buffer:i,maxCanvasWidth:r,mapping:n={},xOffset:s=0,yOffsetMin:o=0,yOffsetMax:a=0}){let l=s,u=o,c=a;for(let s of e)if(!n[s]){let{advance:e,width:o,ascent:a,descent:h}=t(s),d=a+h;l+o+2*i>r&&(l=0,u=c),n[s]={x:l+i,y:u+i,width:o,height:d,advance:e,anchorX:o/2,anchorY:a},l+=o+2*i,c=Math.max(c,u+d+2*i)}return{mapping:n,xOffset:l,yOffsetMin:u,yOffsetMax:c,canvasHeight:Math.pow(2,Math.ceil(Math.log2(c)))}}({measureText:e=>i?i.measure(e):d(e),buffer:o,characterSet:e,maxCanvasWidth:1024,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(c.height!==p){let e=c.height>0?h.getImageData(0,0,c.width,c.height):null;c.height=p,e&&h.putImageData(e,0,0)}if(ea(h,r,s,n),i)for(let t of e){let e=f[t],r=e.width,{data:n,left:s=0,top:o=0}=i.draw(t),a=e.x-s,l=e.y-o,u=Math.max(0,Math.round(a)),d=Math.max(0,Math.round(l)),p=Math.min(n.width,c.width-u),g=Math.min(n.height,c.height-d);h.putImageData(n,u,d,0,0,p,g),e.x=u,e.y=d,e.width=p,e.height=g,e.anchorX+=p/2-s-r/2,e.anchorY+=o}else for(let t of e){let e=f[t];h.fillText(t,e.x,e.y+e.anchorY)}let y=i?i.measure():d();return{baselineOffset:(y.ascent-y.descent)/2,xOffset:g,yOffsetMin:m,yOffsetMax:v,mapping:f,data:c,width:c.width,height:c.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:i,buffer:r,sdf:n,radius:s,cutoff:o}=this.props;return n?`${e} ${t} ${i} ${r} ${s} ${o}`:`${e} ${t} ${i} ${r}`}}let eu=`\
layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,ec={name:"textBackground",source:`\
struct TextBackgroundUniforms {
  billboard: f32,
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  borderRadius: vec4<f32>,
  padding: vec4<f32>,
  sizeUnits: i32,
  stroked: f32,
};

@group(0) @binding(auto) var<uniform> textBackground: TextBackgroundUniforms;
`,vs:eu,fs:eu,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}},eh=`\
#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,ed=`\
#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,ef=`\
struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32,
};

@group(0) @binding(auto) var<uniform> text: TextUniforms;

fn rotate_by_angle(vertex: vec2<f32>, angle: f32) -> vec2<f32> {
  let angleRadian = radians(angle);
  let cosine = cos(angleRadian);
  let sine = sin(angleRadian);
  let rotationMatrix = mat2x2<f32>(
    vec2<f32>(cosine, -sine),
    vec2<f32>(sine, cosine)
  );
  return rotationMatrix * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec2<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceRects: vec4<f32>,
  @location(6) instanceClipRect: vec4<f32>,
  @location(7) instancePixelOffsets: vec2<f32>,
  @location(8) instanceFillColors: vec4<f32>,
  @location(9) instanceLineColors: vec4<f32>,
  @location(10) instanceLineWidths: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) vLineWidth: f32,
  @location(3) uv: vec2<f32>,
  @location(4) dimensions: vec2<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  var varyings: Varyings;
  varyings.uv = attributes.positions;
  varyings.vLineWidth = attributes.instanceLineWidths;

  let sizePixels = clamp(
    project_unit_size_to_pixel(
      attributes.instanceSizes * textBackground.sizeScale,
      textBackground.sizeUnits
    ),
    textBackground.sizeMinPixels,
    textBackground.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  varyings.dimensions = attributes.instanceRects.zw * instanceScale +
    textBackground.padding.xy + textBackground.padding.zw;

  var pixelOffset =
    (attributes.positions * attributes.instanceRects.zw + attributes.instanceRects.xy) *
      instanceScale +
    mix(-textBackground.padding.xy, textBackground.padding.zw, attributes.positions);
  pixelOffset = rotate_by_angle(pixelOffset, attributes.instanceAngles);
  pixelOffset = pixelOffset + attributes.instancePixelOffsets;
  pixelOffset.y = pixelOffset.y * -1.0;

  var xy = project_size_vec2(attributes.instanceClipRect.xy) * project.scale;
  let wh = project_size_vec2(attributes.instanceClipRect.zw) * project.scale;
  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (attributes.instanceClipRect.z >= 0.0) {
    varyings.dimensions.x = wh.x;
    pixelOffset.x = xy.x + varyings.uv.x * wh.x + mix(
      -textBackground.padding.x,
      textBackground.padding.z,
      varyings.uv.x
    );
  }
  if (attributes.instanceClipRect.w >= 0.0) {
    varyings.dimensions.y = wh.y;
    pixelOffset.y = xy.y + varyings.uv.y * wh.y + mix(
      -textBackground.padding.y,
      textBackground.padding.w,
      varyings.uv.y
    );
  }

  if (textBackground.billboard > 0.5) {
    var position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    position = vec4<f32>(
      position.x + clipOffset.x,
      position.y + clipOffset.y,
      position.z,
      position.w
    );
    varyings.position = position;
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    varyings.position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offsetCommon
    );
  }

  varyings.vFillColor = vec4<f32>(
    attributes.instanceFillColors.rgb,
    attributes.instanceFillColors.a * layer.opacity
  );
  varyings.vLineColor = vec4<f32>(
    attributes.instanceLineColors.rgb,
    attributes.instanceLineColors.a * layer.opacity
  );
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

fn round_rect(point: vec2<f32>, size: vec2<f32>, radii: vec4<f32>) -> f32 {
  let pixelPosition = (point - 0.5) * size;
  let halfSize = size * 0.5;
  let maxBorderRadius = min(size.x, size.y) * 0.5;
  var borderRadius = min(radii, vec4<f32>(maxBorderRadius));

  borderRadius = select(borderRadius.zwxy, borderRadius, pixelPosition.x > 0.0);
  let radius = select(borderRadius.y, borderRadius.x, pixelPosition.y > 0.0);
  let q = abs(pixelPosition) - halfSize + radius;
  return -(min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius);
}

fn rect(point: vec2<f32>, size: vec2<f32>) -> f32 {
  let pixelPosition = point * size;
  return min(
    min(pixelPosition.x, size.x - pixelPosition.x),
    min(pixelPosition.y, size.y - pixelPosition.y)
  );
}

fn get_stroked_frag_color(
  distanceToEdge: f32,
  lineWidth: f32,
  fillColor: vec4<f32>,
  lineColor: vec4<f32>
) -> vec4<f32> {
  let isBorder = smoothedge(distanceToEdge, lineWidth);
  return mix(fillColor, lineColor, isBorder);
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.uv;
  var fragColor: vec4<f32>;

  if (any(textBackground.borderRadius != vec4<f32>(0.0))) {
    let distanceToEdge = round_rect(
      varyings.uv,
      varyings.dimensions,
      textBackground.borderRadius
    );
    let shapeAlpha = smoothedge(-distanceToEdge, 0.0);
    if (shapeAlpha == 0.0) {
      discard;
    }
    if (textBackground.stroked > 0.5) {
      fragColor = get_stroked_frag_color(
        distanceToEdge,
        varyings.vLineWidth,
        varyings.vFillColor,
        varyings.vLineColor
      );
    } else {
      fragColor = varyings.vFillColor;
    }
    fragColor.a = fragColor.a * shapeAlpha;
  } else if (textBackground.stroked > 0.5) {
    let distanceToEdge = rect(varyings.uv, varyings.dimensions);
    fragColor = get_stroked_frag_color(
      distanceToEdge,
      varyings.vLineWidth,
      varyings.vFillColor,
      varyings.vLineColor
    );
  } else {
    fragColor = varyings.vFillColor;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,ep={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,fontSize:1,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:e=>e.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getClipRect:{type:"accessor",value:[0,0,-1,-1]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}};class eg extends r.A{getShaders(){return super.getShaders({vs:eh,fs:ed,source:ef,modules:[u.A,c.A,h.Ay,ec,H]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getAngle"},instanceRects:{size:4,bufferGroup:"text-background-instance-data",accessor:"getBoundingRect"},instanceClipRect:{size:4,bufferGroup:"text-background-instance-data",accessor:"getClipRect",defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getLineWidth",defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:i,sizeUnits:r,sizeMinPixels:n,sizeMaxPixels:s,getLineWidth:o,fontSize:a}=this.props,{padding:l,borderRadius:u}=this.props;l.length<4&&(l=[l[0],l[1],l[0],l[1]]),Array.isArray(u)||(u=[u,u,u,u]);let c=this.state.model,h={billboard:t,stroked:!!o,borderRadius:u,padding:l,sizeUnits:d.p5[r],sizeScale:i,sizeMinPixels:n,sizeMaxPixels:s},f={fontSize:a,viewport:this.context.viewport};c.shaderInputs.setProps({textBackground:h,text:f}),c.draw(this.context.renderPass)}_getModel(){return new p.K(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new g.V({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array([0,0,1,0,0,1,1,1])}}}),isInstanced:!0})}}eg.defaultProps=ep,eg.layerName="TextBackgroundLayer";let em={start:1,middle:0,end:-1},ev={top:1,center:0,bottom:-1},ey=[0,0,0,255],eb={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:ey},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:es.characterSet},fontFamily:es.fontFamily,fontWeight:es.fontWeight,lineHeight:1,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:ey},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none",getText:{type:"accessor",value:e=>e.text},getPosition:{type:"accessor",value:e=>e.position},getColor:{type:"accessor",value:ey},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},getContentBox:{type:"accessor",value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}};class e_ extends l{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[i,r]}=this.transformParagraph(e,t),{getTextAnchor:n,getAlignmentBaseline:s}=this.props;return[(em["function"==typeof n?n(e,t):n]-1)*i/2,(ev["function"==typeof s?s(e,t):s]-1)*r/2,i,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:i,getAlignmentBaseline:r}=this.props,{x:n,y:s,rowWidth:o,size:[,a]}=this.transformParagraph(e,t),l=em["function"==typeof i?i(e,t):i],u=ev["function"==typeof r?r(e,t):r],c=n.length,h=Array(2*c),d=0;for(let e=0;e<c;e++)h[d++]=(l-1)*o[e]/2+n[e],h[d++]=(u-1)*a/2+s[e];return h}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new el},this.props.maxWidth>0&&f.A.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(e){let{props:t,oldProps:i,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==i.lineHeight||t.wordBreak!==i.wordBreak||t.maxWidth!==i.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:i,_getFontRenderer:r}=this.props,{fontAtlasManager:n,characterSet:s}=this.state,o={...e,characterSet:s,fontFamily:t,fontWeight:i,_getFontRenderer:r};if(!n.mapping)return n.setProps(o),!0;for(let e in o)if(o[e]!==n.props[e])return n.setProps(o),!0;return!1}_updateText(){let e,{data:t,characterSet:i}=this.props,r=t.attributes?.getText,{getText:n}=this.props,s=t.startIndices,o="auto"===i&&new Set;if(r&&s){let{texts:i,characterCount:a}=function({value:e,length:t,stride:i,offset:r,startIndices:n,characterSet:s}){let o=e.BYTES_PER_ELEMENT,a=i?i/o:1,l=r?r/o:0,u=n[t]||Math.ceil((e.length-l)/a),c=s&&new Set,h=Array(t),d=e;if(a>1||l>0){d=new e.constructor(u);for(let t=0;t<u;t++)d[t]=e[t*a+l]}for(let e=0;e<t;e++){let t=n[e],i=n[e+1]||u,r=d.subarray(t,i);h[e]=String.fromCodePoint.apply(null,r),c&&r.forEach(c.add,c)}if(c)for(let e of c)s.add(String.fromCodePoint(e));return{texts:h,characterCount:u}}({...ArrayBuffer.isView(r)?{value:r}:r,length:t.length,startIndices:s,characterSet:o});e=a,n=(e,{index:t})=>i[t]}else{let{iterable:i,objectInfo:r}=(0,w.X)(t);for(let t of(s=[0],e=0,i)){r.index++;let i=Array.from(n(t,r)||"");o&&i.forEach(o.add,o),e+=i.length,s.push(e)}}this.setState({getText:n,startIndices:s,numInstances:e,characterSet:o||i})}transformParagraph(e,t){let{fontAtlasManager:i}=this.state,r=i.mapping,{baselineOffset:n}=i.atlas,{fontSize:s}=i.props,o=this.state.getText,{wordBreak:a,lineHeight:l,maxWidth:u}=this.props;return function(e,t,i,r,n,s){let o=Array.from(e),a=o.length,l=Array(a),u=Array(a),c=Array(a),h=("break-word"===r||"break-all"===r)&&isFinite(n)&&n>0,d=[0,0],p=[0,0],g=0,m=t+i/2,v=0,y=0;for(let e=0;e<=a;e++){let t=o[e];if(("\n"===t||e===a)&&(y=e),y>v){let e=h?function(e,t,i,r,n=0,s){void 0===s&&(s=e.length);let o=[];return"break-all"===t?er(e,n,s,i,r,o):!function(e,t,i,r,n,s){let o=t,a=t,l=t,u=0;for(let c=t;c<i;c++)if(" "===e[c]?l=c+1:(" "===e[c+1]||c+1===i)&&(l=c+1),l>a){let t=ei(e,a,l,n);u+t>r&&(o<a&&(s.push(a),o=a,u=0),t>r&&(t=er(e,a,l,r,n,s),o=s[s.length-1])),a=l,u+=t}}(e,n,s,i,r,o),o}(o,r,n,s,v,y):et;for(let t=0;t<=e.length;t++){let r=0===t?v:e[t-1],n=t<e.length?e[t]:y;!function(e,t,i,r,n,s){let o=0,a=0;for(let n=t;n<i;n++){let t=r[e[n]];t&&(a=Math.max(a,t.height))}for(let s=t;s<i;s++){let t=e[s],i=r[t];i?(n[s]=o+i.anchorX,o+=i.advance):(f.A.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),n[s]=o,o+=32)}s[0]=o,s[1]=a}(o,r,n,s,l,p);for(let e=r;e<n;e++)u[e]=m,c[e]=p[0];g++,m+=i,d[0]=Math.max(d[0],p[0])}v=y}"\n"===t&&(l[v]=0,u[v]=0,c[v]=0,v++)}return d[1]=g*i,{x:l,y:u,rowWidth:c,size:d}}(o(e,t)||"",n,l*s,a,u*s,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:i,fontAtlasManager:{atlas:r,mapping:n},styleVersion:s}=this.state,{data:o,_dataDiff:a,getPosition:l,getColor:u,getSize:c,getAngle:h,getPixelOffset:d,getBackgroundColor:f,getBorderColor:p,getBorderWidth:g,getContentBox:m,backgroundBorderRadius:v,backgroundPadding:y,background:b,billboard:_,fontSettings:x,outlineWidth:w,outlineColor:P,sizeScale:S,sizeUnits:C,sizeMinPixels:E,sizeMaxPixels:L,contentCutoffPixels:A,contentAlignHorizontal:T,contentAlignVertical:M,transitions:I,updateTriggers:R}=this.props,O=this.getSubLayerClass("characters",K),k=this.getSubLayerClass("background",eg),{fontSize:B}=this.state.fontAtlasManager.props;return[b&&new k({getFillColor:f,getLineColor:p,getLineWidth:g,borderRadius:v,padding:y,getPosition:l,getSize:c,getAngle:h,getPixelOffset:d,getClipRect:m,billboard:_,sizeScale:S,sizeUnits:C,sizeMinPixels:E,sizeMaxPixels:L,fontSize:B,transitions:I&&{getPosition:I.getPosition,getAngle:I.getAngle,getSize:I.getSize,getFillColor:I.getBackgroundColor,getLineColor:I.getBorderColor,getLineWidth:I.getBorderWidth,getPixelOffset:I.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:R.getPosition,getAngle:R.getAngle,getSize:R.getSize,getFillColor:R.getBackgroundColor,getLineColor:R.getBorderColor,getLineWidth:R.getBorderWidth,getPixelOffset:R.getPixelOffset,getBoundingRect:{getText:R.getText,getTextAnchor:R.getTextAnchor,getAlignmentBaseline:R.getAlignmentBaseline,styleVersion:s}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:a,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new O({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:es.smoothing,outlineWidth:w/(x.radius||es.radius),outlineColor:P,iconAtlas:r,iconMapping:n,getPosition:l,getColor:u,getSize:c,getAngle:h,getPixelOffset:d,getContentBox:m,billboard:_,sizeScale:S,sizeUnits:C,sizeMinPixels:E,sizeMaxPixels:L,fontSize:B,contentCutoffPixels:A,contentAlignHorizontal:T,contentAlignVertical:M,transitions:I&&{getPosition:I.getPosition,getAngle:I.getAngle,getColor:I.getColor,getSize:I.getSize,getPixelOffset:I.getPixelOffset,getContentBox:I.getContentBox}},this.getSubLayerProps({id:"characters",updateTriggers:{all:R.getText,getPosition:R.getPosition,getAngle:R.getAngle,getColor:R.getColor,getSize:R.getSize,getPixelOffset:R.getPixelOffset,getContentBox:R.getContentBox,getIconOffsets:{getTextAnchor:R.getTextAnchor,getAlignmentBaseline:R.getAlignmentBaseline,styleVersion:s}}}),{data:o,_dataDiff:a,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:i})]}static set fontAtlasCacheLimit(e){f.A.assert(Number.isFinite(e)&&e>=3,"Invalid cache limit"),eo=new en(e)}}e_.defaultProps=eb,e_.layerName="TextLayer";var ex=i(7276),ew=i(78120),eP=i(68169),eS=i(40323),eC=i(22839);class eE{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;let{attributes:t={}}=e;this.typedArrayManager=eP.A,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:i={},getGeometry:r,geometryBuffer:n,positionFormat:s,dataChanged:o,normalize:a=!0}=this.opts;if(this.data=t,this.getGeometry=r,this.positionSize=n&&n.size||("XY"===s?2:3),this.buffers=i,this.normalize=a,n&&((0,eS.A)(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(n),a||(i.vertexPositions=n)),this.geometryBuffer=i.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?(0,w.I)(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:i,buffers:r,_attributeDefs:n,typedArrayManager:s}=this;for(let o in n)if(o in r)s.release(i[o]),i[o]=null;else{let r=n[o];r.copy=t,i[o]=s.allocate(i[o],e,r)}}_forEachGeometry(e,t,i){let{data:r,getGeometry:n}=this,{iterable:s,objectInfo:o}=(0,w.X)(r,t,i);for(let t of s)o.index++,e(n?n(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:i,instanceCount:r}=this,{data:n,geometryBuffer:s}=this,{startRow:o=0,endRow:a=1/0}=e||{},l={};if(e||(t=[0],i=[0]),this.normalize||!s)this._forEachGeometry((e,t)=>{let r=e&&this.normalizeGeometry(e);l[t]=r,i[t+1]=i[t]+(r?this.getGeometrySize(r):0)},o,a),r=i[i.length-1];else if(r=(i=n.startIndices)[n.length]||0,ArrayBuffer.isView(s))r=r||s.length/this.positionSize;else if(s instanceof eC.h){let e=4*this.positionSize;r=r||s.byteLength/e}else if(s.buffer){let e=s.stride||4*this.positionSize;r=r||s.buffer.byteLength/e}else if(s.value){let e=s.value,t=s.stride/e.BYTES_PER_ELEMENT||this.positionSize;r=r||e.length/t}this._allocate(r,!!e),this.indexStarts=t,this.vertexStarts=i,this.instanceCount=r;let u={};this._forEachGeometry((e,n)=>{let s=l[n]||e;u.vertexStart=i[n],u.indexStart=t[n],u.geometrySize=(n<i.length-1?i[n+1]:r)-i[n],u.geometryIndex=n,this.updateGeometryAttributes(s,u)},o,a),this.vertexCount=t[t.length-1]}}var eL=i(58181);class eA extends eE{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:e.isWebGPU?Float32Array:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getPathSegmentIndices(e){let t=this.attributes.segmentTypes,i=this.vertexStarts[e],r=Math.min(this.vertexStarts[e+1]??this.instanceCount,this.instanceCount),n=[];for(let e=i;e<r-1;e++)(4&t[e])==0&&n.push(e);return n.length&&(4&t[i])!=0&&n.unshift(n.pop()),n}getGeometryFromBuffer(e){return this.normalize||this.opts.isWebGPU?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?function(e,t,i,r){let n;if(Array.isArray(e[0])){n=Array(e.length*t);for(let i=0;i<e.length;i++)for(let r=0;r<t;r++)n[i*t+r]=e[i][r]||0}else n=e;return i?(0,eL.Mk)(n,{size:t,gridResolution:i}):r?(0,eL.Iy)(n,{size:t}):n}(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(eT(e)){let t=0;for(let i of e)t+=this.getGeometrySize(i);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(0!==t.geometrySize)if(e&&eT(e))for(let i of e){let e=this.getGeometrySize(i);t.geometrySize=e,this.updateGeometryAttributes(i,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}_updateSegmentTypes(e,t){let i=this.attributes.segmentTypes,r=!!e&&this.isClosed(e),{vertexStart:n,geometrySize:s}=t;i.fill(0,n,n+s),r?(i[n]=4,i[n+s-2]=4):(i[n]+=1,i[n+s-2]+=2),i[n+s-1]=4}_updatePositions(e,t){let{positions:i}=this.attributes;if(!i||!e)return;let{vertexStart:r,geometrySize:n}=t,s=[,,,];for(let t=r,o=0;o<n;t++,o++)this.getPointOnPath(e,o,s),i[3*t]=s[0],i[3*t+1]=s[1],i[3*t+2]=s[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,i=[]){let{positionSize:r}=this;t*r>=e.length&&(t+=1-e.length/r);let n=t*r;return i[0]=e[n],i[1]=e[n+1],i[2]=3===r&&e[n+2]||0,i}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,i=e.length-t;return e[0]===e[i]&&e[1]===e[i+1]&&(2===t||e[2]===e[i+2])}}function eT(e){return Array.isArray(e[0])}let eM=`\
layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,eI={name:"path",source:`\
struct PathUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  jointType: f32,
  capType: f32,
  miterLimit: f32,
  billboard: f32,
  widthUnits: i32,
};

@group(0) @binding(auto)
var<uniform> path: PathUniforms;
`,vs:eM,fs:eM,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},eR=`\
const EPSILON: f32 = 0.001;
const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct JoinResult {
  offset: vec3<f32>,
  cornerOffset: vec2<f32>,
  miterLength: f32,
  pathPosition: vec2<f32>,
  pathLength: f32,
  jointType: f32,
};

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) instanceTypes: f32,
  @location(2) instanceLeftPositions: vec3<f32>,
  @location(3) instanceStartPositions: vec3<f32>,
  @location(4) instanceEndPositions: vec3<f32>,
  @location(5) instanceRightPositions: vec3<f32>,
  @location(6) instanceLeftPositions64Low: vec3<f32>,
  @location(7) instanceStartPositions64Low: vec3<f32>,
  @location(8) instanceEndPositions64Low: vec3<f32>,
  @location(9) instanceRightPositions64Low: vec3<f32>,
  @location(10) instanceStrokeWidths: f32,
  @location(11) instanceColors: vec4<f32>,
  @location(12) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vCornerOffset: vec2<f32>,
  @location(2) vMiterLength: f32,
  @location(3) vPathPosition: vec2<f32>,
  @location(4) vPathLength: f32,
  @location(5) vJointType: f32,
  // Location 6 is reserved for TripsLayer's injected vTime varying.
  @location(7) clipCoordinates: vec2<f32>,
#ifdef DASH_ENABLED
  @location(8) vPathBounds: vec2<f32>,
#endif
};

fn flipIfTrue(flag: bool) -> f32 {
  return select(1.0, -1.0, flag);
}

fn clipLine(position: vec4<f32>, refPosition: vec4<f32>) -> vec4<f32> {
  if (position.w < EPSILON) {
    let r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    return refPosition + (position - refPosition) * r;
  }
  return position;
}

#ifdef DASH_ENABLED
// Return the visible interval of the original segment before clipLine moves either endpoint.
fn getClippedPathRange(startW: f32, endW: f32) -> vec2<f32> {
  let startClipped = startW < EPSILON;
  let endClipped = endW < EPSILON;
  if (startClipped && endClipped) {
    return vec2<f32>(0.0, 0.0);
  }
  if (startClipped || endClipped) {
    let intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
    if (startClipped) {
      return vec2<f32>(intersection, 1.0);
    }
    return vec2<f32>(0.0, intersection);
  }
  return vec2<f32>(0.0, 1.0);
}
#endif

fn getLineJoinOffset(
  prevPoint: vec3<f32>,
  currPoint: vec3<f32>,
  nextPoint: vec3<f32>,
  width: vec2<f32>,
#ifdef DASH_ENABLED
  sourcePathLength: f32,
  sourcePathRange: vec2<f32>,
#endif
#ifdef ANTIALIASING
  coverageScale: f32,
#endif
  positions: vec2<f32>,
  instanceTypes: f32
) -> JoinResult {
  let isEnd = positions.x > 0.0;
  let sideOfPath = positions.y;
  let isJoint = select(0.0, 1.0, sideOfPath == 0.0);

  var deltaA3 = currPoint - prevPoint;
  var deltaB3 = nextPoint - currPoint;

  let rotationResult = project_needs_rotation(currPoint);
  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    deltaA3 = rotationResult.transform * deltaA3;
    deltaB3 = rotationResult.transform * deltaB3;
  }

  let deltaA = deltaA3.xy / width;
  let deltaB = deltaB3.xy / width;

  let lenA = length(deltaA);
  let lenB = length(deltaB);

  let dirA = select(vec2<f32>(0.0, 0.0), normalize(deltaA), lenA > 0.0);
  let dirB = select(vec2<f32>(0.0, 0.0), normalize(deltaB), lenB > 0.0);

  let perpA = vec2<f32>(-dirA.y, dirA.x);
  let perpB = vec2<f32>(-dirB.y, dirB.x);

  var tangent = dirA + dirB;
  tangent = select(perpA, normalize(tangent), length(tangent) > 0.0);
  let miterVec = vec2<f32>(-tangent.y, tangent.x);
  let dir = select(dirB, dirA, isEnd);
  let perp = select(perpB, perpA, isEnd);
#ifdef DASH_ENABLED
  let segmentLength2D = select(lenB, lenA, isEnd);

  // Extrusion happens in the XY plane, so segmentLength2D is a 2D length and pathPosition.y
  // below measures 2D distance along the segment. For a path that also moves in Z the true
  // arc length is longer by this ratio. Scaling pathLength and pathPosition.y by it makes
  // the coordinate measure real 3D distance while leaving the joint tests unchanged, since
  // they compare the two against each other and both are scaled alike. Billboard mode
  // extrudes in clip space, where the perspective divide has already reduced the segment to
  // its screen projection, so its complete common-space length is supplied by the caller.
  // Mirrors path-layer-vertex.glsl.ts.
  let currDelta3 = select(deltaB3, deltaA3, isEnd);
  let currLength2D = length(currDelta3.xy);
  // Do not clamp a valid denominator to EPSILON: high-zoom Web Mercator deltas are often
  // smaller than that in common space, and changing their scale corrupts even flat paths.
  let safeLength2D = select(1.0, currLength2D, currLength2D > 0.0);
  var arcLengthRatio = 1.0;
  var pathPositionOffset = 0.0;
  var pathLength = segmentLength2D;
  if (path.billboard != 0.0) {
    // clipLine may shorten the visible screen-space segment. Preserve the corresponding interval
    // of the complete common-space arclength instead of compressing the full dash period into the
    // visible span. Keep pathLength complete so justification is stable as the camera clips it.
    let visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
    arcLengthRatio = 0.0;
    if (segmentLength2D > 0.0) {
      arcLengthRatio = visiblePathLength / segmentLength2D;
    }
    pathPositionOffset = sourcePathLength * sourcePathRange.x;
    pathLength = sourcePathLength;
  } else if (currLength2D > 0.0) {
    arcLengthRatio = length(currDelta3) / safeLength2D;
    pathLength = segmentLength2D * arcLengthRatio;
  }
#else
  let pathLength = select(lenB, lenA, isEnd);
#endif

  let sinHalfA = abs(dot(miterVec, perp));
  let cosHalfA = abs(dot(dirA, miterVec));
  let turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  let cornerPosition = sideOfPath * turnDirection;

  var miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  var offsetVec =
    mix(miterVec * miterSize, perp, step(0.5, cornerPosition)) *
    (sideOfPath + isJoint * turnDirection);

  let isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  let isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  let isCap = isStartCap || isEndCap;

  var jointType = path.jointType;
  if (isCap) {
    offsetVec = mix(
      perp * sideOfPath,
      dir * path.capType * 4.0 * flipIfTrue(isStartCap),
      isJoint
    );
    jointType = path.capType;
  }

#ifdef ANTIALIASING
  let coverageOffsetVec = offsetVec * coverageScale;
  var miterLength = dot(coverageOffsetVec, miterVec * turnDirection);
#else
  var miterLength = dot(offsetVec, miterVec * turnDirection);
#endif
  miterLength = select(miterLength, isJoint, isCap);

#ifdef ANTIALIASING
  let offsetFromStartOfPath = coverageOffsetVec + deltaA * select(0.0, 1.0, isEnd);
#else
  let offsetFromStartOfPath = offsetVec + deltaA * select(0.0, 1.0, isEnd);
#endif
  let pathPosition = vec2<f32>(
    dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
    pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
    dot(offsetFromStartOfPath, dir)
#endif
  );
  let isValid = step(f32(instanceTypes), 3.5);
#ifdef ANTIALIASING
  var offset = vec3<f32>(coverageOffsetVec * width * isValid, 0.0);
#else
  var offset = vec3<f32>(offsetVec * width * isValid, 0.0);
#endif

  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    offset = rotationResult.transform * offset;
  }

#ifdef ANTIALIASING
  return JoinResult(
    offset, coverageOffsetVec, miterLength, pathPosition, pathLength, jointType
  );
#else
  return JoinResult(offset, offsetVec, miterLength, pathPosition, pathLength, jointType);
#endif
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let isEnd = attributes.positions.x;

  let prevPosition = mix(attributes.instanceLeftPositions, attributes.instanceStartPositions, isEnd);
  let prevPosition64Low = mix(
    attributes.instanceLeftPositions64Low,
    attributes.instanceStartPositions64Low,
    isEnd
  );
  let currPosition = mix(attributes.instanceStartPositions, attributes.instanceEndPositions, isEnd);
  let currPosition64Low = mix(
    attributes.instanceStartPositions64Low,
    attributes.instanceEndPositions64Low,
    isEnd
  );
  let nextPosition = mix(attributes.instanceEndPositions, attributes.instanceRightPositions, isEnd);
  let nextPosition64Low = mix(
    attributes.instanceEndPositions64Low,
    attributes.instanceRightPositions64Low,
    isEnd
  );

  geometry.worldPosition = currPosition;

  let widthPixels =
    clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * path.widthScale, path.widthUnits),
      path.widthMinPixels,
      path.widthMaxPixels
    ) / 2.0;

  if (path.billboard != 0.0) {
#ifdef DASH_ENABLED
    let prevProjection = project_position_to_clipspace_and_commonspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    let nextProjection = project_position_to_clipspace_and_commonspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
    let prevPositionCommon = prevProjection.commonPosition.xyz;
    let nextPositionCommon = nextProjection.commonPosition.xyz;
    var prevPositionScreen = prevProjection.clipPosition;
    var nextPositionScreen = nextProjection.clipPosition;
#else
    var prevPositionScreen = project_position_to_clipspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    var nextPositionScreen = project_position_to_clipspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
#endif
    let currProjection = project_position_to_clipspace_and_commonspace(
      currPosition, currPosition64Low, ZERO_OFFSET
    );
    geometry.position = currProjection.commonPosition;
    var currPositionScreen = currProjection.clipPosition;
#ifdef DASH_ENABLED
    let currPositionCommon = currProjection.commonPosition.xyz;
    let sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
    let sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
    let billboardPathRange = getClippedPathRange(
      sourcePathStartScreen.w, sourcePathEndScreen.w
    );
#endif

    prevPositionScreen = clipLine(prevPositionScreen, currPositionScreen);
    nextPositionScreen = clipLine(nextPositionScreen, currPositionScreen);
    currPositionScreen = clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
#ifdef DASH_ENABLED
    let currentDeltaCommon = select(
      nextPositionCommon - currPositionCommon,
      currPositionCommon - prevPositionCommon,
      isEnd > 0.0
    );
    let billboardPathLength = select(
      0.0,
      length(currentDeltaCommon) * project.scale / (widthPixels * project.focalDistance),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(vec2<f32>(widthPixels, widthPixels)),
#ifdef DASH_ENABLED
      billboardPathLength,
      billboardPathRange,
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    // Phase and justification use the complete source segment, while cap and joint coverage
    // must still recognize the endpoints moved by clipLine.
    varyings.vPathBounds = billboardPathLength * billboardPathRange;
#endif

    geometry.uv = join.pathPosition;
    varyings.position = vec4<f32>(
      currPositionScreen.xyz + join.offset * currPositionScreen.w,
      currPositionScreen.w
    );
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  } else {
    let prevPositionCommon = project_position_vec3_f64(prevPosition, prevPosition64Low);
    let currPositionCommon = project_position_vec3_f64(currPosition, currPosition64Low);
    let nextPositionCommon = project_position_vec3_f64(nextPosition, nextPosition64Low);

    let width = vec2<f32>(
      project_pixel_size_float(widthPixels),
      project_pixel_size_float(widthPixels)
    );
#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionCommon,
      currPositionCommon,
      nextPositionCommon,
      width,
#ifdef DASH_ENABLED
      1.0,
      vec2<f32>(0.0, 1.0),
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    varyings.vPathBounds = vec2<f32>(0.0, join.pathLength);
#endif

    geometry.position = vec4<f32>(currPositionCommon + join.offset, 1.0);
    geometry.uv = join.pathPosition;
    varyings.position = project_common_position_to_clipspace(geometry.position);
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  varyings.vColor = vec4<f32>(
    attributes.instanceColors.rgb,
    attributes.instanceColors.a * layer.opacity
  );
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.vPathPosition;

#ifdef ANTIALIASING
  // Coordinates of the outer silhouette, in units of half-width: rounded joints and caps are
  // bounded by the corner offset, everywhere else by the edge of the stroke. Dividing by the
  // screen-space derivative converts the distance to the boundary into device pixels, which stays
  // correct under perspective foreshortening and under extensions that rescale the stroke.
#ifdef DASH_ENABLED
  let isCorner =
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y;
#else
  let isCorner = varyings.vPathPosition.y < 0.0 || varyings.vPathPosition.y > varyings.vPathLength;
#endif
  let isRound = varyings.vJointType > 0.5;

  // Distance to the silhouette in device pixels, from the derivative of the coordinate that
  // bounds it. Computed before the discards below: derivatives need uniform control flow and are
  // undefined after a discard in the quad. See dev-docs/RFCs/v9.4/analytic-antialiasing-rfc.md
  let bodyCoord = abs(varyings.vPathPosition.x);
  let cornerCoord = length(varyings.vCornerOffset);
  // Both evaluated so each derivative stays on one field across the corner/body boundary
  let bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
  let cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
  // Rounded corners still intersect the stroke-width envelope. Extensions may remap
  // vPathPosition.x independently of vCornerOffset, as PathStyleExtension does for offsets.
  let edgePixels = select(bodyPixels, min(cornerPixels, bodyPixels), isRound && isCorner);
#else
  let edgePixels = select(bodyPixels, cornerPixels, isRound && isCorner);
#endif

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  if (isCorner) {
    if (!isRound && varyings.vMiterLength > path.miterLimit + 1.0) {
      discard;
    }
  }

  var color = varyings.vColor;

  // Feather one device pixel across the width only, before premultiplication. edgePixels is a
  // signed device-pixel distance and SMOOTH_EDGE_RADIUS is 0.5, so this ramps across one pixel.
  color.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
  if (
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y
  ) {
#else
  if (
    varyings.vPathPosition.y < 0.0 ||
    varyings.vPathPosition.y > varyings.vPathLength
  ) {
#endif
    if (varyings.vJointType > 0.5 && length(varyings.vCornerOffset) > 1.0) {
      discard;
    }
    if (
      varyings.vJointType < 0.5 &&
      varyings.vMiterLength > path.miterLimit + 1.0
    ) {
      discard;
    }
  }
#endif

  // Fragment-layer injections that discard pixels must run after analytic coverage derivatives.
  // See TripsLayer, which rejects fragments outside of the active time window at this anchor.
  // DECKGL_FILTER_COLOR
  clip_filterColor(varyings.clipCoordinates);
#ifdef ANTIALIASING
  return deckgl_premultiplied_alpha(color);
#else
  return deckgl_premultiplied_alpha(varyings.vColor);
#endif
}
`,eO=`\
#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in float rowIndexes;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
#ifdef DASH_ENABLED
out vec2 vPathBounds;
#endif
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
#ifdef DASH_ENABLED
, float sourcePathLength, vec2 sourcePathRange
#endif
#ifdef ANTIALIASING
, float coverageScale
#endif
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
#ifdef DASH_ENABLED
vec3 currDelta3 = isEnd ? deltaA3 : deltaB3;
float currLength2D = length(currDelta3.xy);
float arcLengthRatio = 1.0;
float pathPositionOffset = 0.0;
float pathLength = L;
if (path.billboard) {
float visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
arcLengthRatio = L > 0.0 ? visiblePathLength / L : 0.0;
pathPositionOffset = sourcePathLength * sourcePathRange.x;
pathLength = sourcePathLength;
} else if (currLength2D > 0.0) {
arcLengthRatio = length(currDelta3) / currLength2D;
pathLength = L * arcLengthRatio;
}
#endif
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
#ifdef ANTIALIASING
vec2 coverageOffsetVec = offsetVec * coverageScale;
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = coverageOffsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = coverageOffsetVec + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(coverageOffsetVec * width * isValid, 0.0);
#else
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
#endif
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
#ifdef DASH_ENABLED
vec2 getClippedPathRange(float startW, float endW) {
bool startClipped = startW < EPSILON;
bool endClipped = endW < EPSILON;
if (startClipped && endClipped) {
return vec2(0.0);
}
if (startClipped || endClipped) {
float intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
return startClipped ? vec2(intersection, 1.0) : vec2(0.0, intersection);
}
return vec2(0.0, 1.0);
}
#endif
void main() {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
#ifdef DASH_ENABLED
vec4 prevPositionCommon;
vec4 nextPositionCommon;
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET, prevPositionCommon
);
#else
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET
);
#endif
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
#ifdef DASH_ENABLED
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET, nextPositionCommon
);
#else
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET
);
#endif
#ifdef DASH_ENABLED
vec4 sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
vec4 sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
vec2 billboardPathRange = getClippedPathRange(
sourcePathStartScreen.w, sourcePathEndScreen.w
);
#endif
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = vec2(0.5 / project.devicePixelRatio);
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
#ifdef DASH_ENABLED
vec3 currentDeltaCommon = isEnd > 0.0
? geometry.position.xyz - prevPositionCommon.xyz
: nextPositionCommon.xyz - geometry.position.xyz;
float billboardPathLength = width.x > 0.0
? length(currentDeltaCommon) * project.scale / (width.x * project.focalDistance)
: 0.0;
#endif
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
#ifdef DASH_ENABLED
,
billboardPathLength, billboardPathRange
#endif
#ifdef ANTIALIASING
,
coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = billboardPathLength * billboardPathRange;
#endif
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = project_pixel_size(vec2(0.5 / project.devicePixelRatio));
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
vec3 offset = getLineJoinOffset(
prevPosition, currPosition, nextPosition, width.xy
#ifdef DASH_ENABLED
, 1.0, vec2(0.0, 1.0)
#endif
#ifdef ANTIALIASING
, coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = vec2(0.0, vPathLength);
#endif
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,ek=`\
#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
#ifdef DASH_ENABLED
in vec2 vPathBounds;
#endif
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
#ifdef ANTIALIASING
#ifdef DASH_ENABLED
bool isCorner = vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y;
#else
bool isCorner = vPathPosition.y < 0.0 || vPathPosition.y > vPathLength;
#endif
bool isRound = vJointType > 0.5;
float bodyCoord = abs(vPathPosition.x);
float cornerCoord = length(vCornerOffset);
float bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
float cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
float edgePixels = isRound && isCorner ? min(cornerPixels, bodyPixels) : bodyPixels;
#else
float edgePixels = isRound && isCorner ? cornerPixels : bodyPixels;
#endif
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
if (isCorner) {
if (!isRound && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
fragColor.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
if (vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y) {
#else
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
#endif
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,eB=[0,0,0,255],ez={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},antialiasing:!1,billboard:!1,_pathType:null,getPath:{type:"accessor",value:e=>e.path},getColor:{type:"accessor",value:eB},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},eD={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};function eF(e,t){return e===t||!!(e&&t&&e.length===t.length&&e.every((e,i)=>e===t[i]))}class eN extends r.A{getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:eO,fs:ek,source:eR,defines:e?{ANTIALIASING:1}:{},modules:[u.A,c.A,h.Ay,eI,..."webgpu"===this.context.device.type?[N]:[]]})}get wrapLongitude(){return!1}getBounds(){return"webgpu"===this.context.device.type?null:this.getAttributeManager()?.getBounds(["vertexPositions"])}getPathProjectionScale(e){let t=this.props.coordinateSystem;if(!this.getAttributeManager()?.getAttributes().instanceDashOffsets)return null;if(e instanceof ex.A&&e.zoom>=12&&("default"===t||"lnglat"===t||"cartesian"===t)){let i=ew.A.getUniforms({viewport:e,coordinateSystem:t,coordinateOrigin:this.props.coordinateOrigin,autoWrapLongitude:this.wrapLongitude});return[e.projectionMode,i.coordinateOrigin[1],i.commonOrigin[1],...i.commonUnitsPerWorldUnit,...i.commonUnitsPerWorldUnit2,i.commonUnitsPerMeter[2]]}let i=function(e){if(e.isGeospatial)return null;let{unitsPerMeter:t}=e.distanceScales;return[t[0],t[1],t[2]]}(e);return i?[e.projectionMode,...i]:[e.projectionMode]}shouldUpdateState(e){let{viewport:t}=this.context;return super.shouldUpdateState(e)||this.state?.tessellationResolution!==t.resolution||!eF(this.state?.pathProjectionScale,this.getPathProjectionScale(t))}initializeState(){let e="webgpu"===this.context.device.type;this.getAttributeManager().addInstanced({...e?{pathPositions:{size:24,type:"float32",transition:!1,accessor:"getPath",update:this.calculateWebGPUPositions,shaderAttributes:{instanceLeftPositions:{size:3,elementOffset:0},instanceStartPositions:{size:3,elementOffset:3},instanceEndPositions:{size:3,elementOffset:6},instanceRightPositions:{size:3,elementOffset:9},instanceLeftPositions64Low:{size:3,elementOffset:12},instanceStartPositions64Low:{size:3,elementOffset:15},instanceEndPositions64Low:{size:3,elementOffset:18},instanceRightPositions64Low:{size:3,elementOffset:21}},noAlloc:!0}}:{vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:eD,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}}},instanceTypes:{size:1,type:e?"float32":"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:!e&&eD,defaultValue:1,bufferGroup:"path-instance-data"},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:!e&&eD,defaultValue:eB,bufferGroup:"path-instance-data"},rowIndexes:{size:1,type:"uint32",accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:"path-instance-data"}}),this.setState({pathTesselator:new eA({fp64:this.use64bitPositions(),isWebGPU:e}),tessellationResolution:this.context.viewport.resolution,pathProjectionScale:this.getPathProjectionScale(this.context.viewport)})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,n=this.getAttributeManager(),{viewport:s}=this.context,o=this.state.tessellationResolution!==s.resolution,a=this.getPathProjectionScale(s),l=!eF(this.state.pathProjectionScale,a),u=r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPath)||t._pathType!==i._pathType||t.positionFormat!==i.positionFormat||t.wrapLongitude!==i.wrapLongitude||o;if(r.dataChanged||u){let{pathTesselator:e}=this.state,i=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:i.getPath,buffers:i,normalize:!t._pathType,loop:"loop"===t._pathType,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:s.resolution,dataChanged:u?void 0:r.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts,tessellationResolution:s.resolution,pathProjectionScale:a}),!r.dataChanged||u?n.invalidateAll():l&&n.invalidate("instanceDashOffsets")}else l&&(this.setState({pathProjectionScale:a}),n.invalidate("instanceDashOffsets"));(r.extensionsChanged||t.antialiasing!==i.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),n.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===i)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:i,billboard:r,miterLimit:n,widthUnits:s,widthScale:o,widthMinPixels:a,widthMaxPixels:l}=this.props,u=this.state.model,c={jointType:Number(t),capType:Number(i),billboard:r,widthUnits:d.p5[s],widthScale:o,miterLimit:n,widthMinPixels:a,widthMaxPixels:l};u.shaderInputs.setProps({path:c}),u.draw(this.context.renderPass)}_getModel(){return new p.K(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new g.V({topology:"triangle-list",attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("segmentTypes")}calculateWebGPUPositions(e){let{pathTesselator:t}=this.state,i=t.get("positions");if(!i){e.value=null;return}let r=t.instanceCount,n=new Float32Array(24*r),s=[-1,0,1,2];for(let e=0;e<r;e++){let t=24*e;for(let o=0;o<4;o++){let a=e+s[o],l=t+3*o;for(let e=0;e<3;e++){let t=a>=0&&a<r?i[3*a+e]:0,s=Math.fround(t);n[l+e]=s,n[l+e+12]=t-s}}}e.startIndices=t.vertexStarts,e.value=n}}eN.defaultProps=ez,eN.layerName="PathLayer";var e$=i(97789),ej=i(61142);let eU=eL.rJ.CLOCKWISE,eV=eL.rJ.COUNTER_CLOCKWISE,eG={isClosed:!0};function eW(e){return"positions"in e?e.positions:e}function eH(e){return"holeIndices"in e?e.holeIndices:null}function eq(e,t,i,r,n){let s=t,o=i.length;for(let t=0;t<o;t++)for(let n=0;n<r;n++)e[s++]=i[t][n]||0;if(!function(e){let t=e[0],i=e[e.length-1];return t[0]===i[0]&&t[1]===i[1]&&t[2]===i[2]}(i))for(let t=0;t<r;t++)e[s++]=i[0][t]||0;return eG.start=t,eG.end=s,eG.size=r,(0,eL.UD)(e,n,eG),s}function eY(e,t,i,r,n=0,s,o){let a=(s=s||i.length)-n;if(a<=0)return t;let l=t;for(let t=0;t<a;t++)e[l++]=i[n+t];if(!function(e,t,i,r){for(let n=0;n<t;n++)if(e[i+n]!==e[r-t+n])return!1;return!0}(i,r,n,s))for(let t=0;t<r;t++)e[l++]=i[n+t];return eG.start=t,eG.end=l,eG.size=r,(0,eL.UD)(e,o,eG),l}function eZ(e,t,i){let r=e.length/3,n=0;for(let s=0;s<r;s++){let o=(s+1)%r;n+=e[3*s+t]*e[3*o+i],n-=e[3*o+t]*e[3*s+i]}return Math.abs(n/2)}function eK(e,t,i,r){let n=e.length/3;for(let s=0;s<n;s++){let n=3*s,o=e[n+0],a=e[n+1],l=e[n+2];e[n+t]=o,e[n+i]=a,e[n+r]=l}}class eX extends eE{constructor(e){let{fp64:t,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:i,size:1}}})}get(e){let{attributes:t}=this;return"indices"===e?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){let t=function(e,t){var i,r=e;if(!Array.isArray(r=r&&r.positions||r)&&!ArrayBuffer.isView(r))throw Error("invalid polygon");let n=[],s=[];if("positions"in e){let{positions:i,holeIndices:r}=e;if(r){let e=0;for(let o=0;o<=r.length;o++)e=eY(n,e,i,t,r[o-1],r[o],0===o?eU:eV),s.push(e);return s.pop(),{positions:n,holeIndices:s}}e=i}if(!Array.isArray(e[0]))return eY(n,0,e,t,0,n.length,eU),n;if(!((i=e).length>=1&&i[0].length>=2&&Number.isFinite(i[0][0]))){let i=0;for(let[r,o]of e.entries())i=eq(n,i,o,t,0===r?eU:eV),s.push(i);return s.pop(),{positions:n,holeIndices:s}}return eq(n,0,e,t,eU),n}(e,this.positionSize);return this.opts.resolution?(0,eL.wk)(eW(t),eH(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?(0,eL.Eg)(eW(t),eH(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(eQ(e)){let t=0;for(let i of e)t+=this.getGeometrySize(i);return t}return eW(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&eQ(e))for(let i of e){let e=this.getGeometrySize(i);t.geometrySize=e,this.updateGeometryAttributes(i,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else this._updateIndices(e,t),this._updatePositions(e,t),this._updateVertexValid(e,t)}_updateIndices(e,{geometryIndex:t,vertexStart:i,indexStart:r}){let{attributes:n,indexStarts:s,typedArrayManager:o}=this,a=n.indices;if(!a||!e)return;let l=r,u=function(e,t,i,r){let n=eH(e);n&&(n=n.map(e=>e/t));let s=eW(e),o=r&&3===t;if(i){let e=s.length;s=s.slice();let r=[];for(let n=0;n<e;n+=t){r[0]=s[n],r[1]=s[n+1],o&&(r[2]=s[n+2]);let e=i(r);s[n]=e[0],s[n+1]=e[1],o&&(s[n+2]=e[2])}}if(o){let e=eZ(s,0,1),t=eZ(s,0,2),r=eZ(s,1,2);if(!e&&!t&&!r)return[];e>t&&e>r||(t>r?(i||(s=s.slice()),eK(s,0,2,1)):(i||(s=s.slice()),eK(s,2,0,1)))}return ej(s,n,t)}(e,this.positionSize,this.opts.preproject,this.opts.full3d);a=o.allocate(a,r+u.length,{copy:!0});for(let e=0;e<u.length;e++)a[l++]=u[e]+i;s[t+1]=r+u.length,n.indices=a}_updatePositions(e,{vertexStart:t,geometrySize:i}){let{attributes:{positions:r},positionSize:n}=this;if(!r||!e)return;let s=eW(e);for(let e=t,o=0;o<i;e++,o++){let t=s[o*n],i=s[o*n+1],a=n>2?s[o*n+2]:0;r[3*e]=t,r[3*e+1]=i,r[3*e+2]=a}}_updateVertexValid(e,{vertexStart:t,geometrySize:i}){let{positionSize:r}=this,n=this.attributes.vertexValid,s=e&&eH(e);if(e&&e.edgeTypes?n.set(e.edgeTypes,t):n.fill(1,t,t+i),s)for(let e=0;e<s.length;e++)n[t+s[e]/r-1]=0;n[t+i-1]=0}}function eQ(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}let eJ=`\
layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,e0={name:"solidPolygon",source:`\
struct SolidPolygonUniforms {
  extruded: f32,
  isWireframe: f32,
  elevationScale: f32,
};

@group(0) @binding(auto) var<uniform> solidPolygon: SolidPolygonUniforms;
`,vs:eJ,fs:eJ,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},e2=`\
in vec4 fillColors;
in vec4 lineColors;
in float rowIndexes;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,e3=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${e2}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,e1=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${e2}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,e4=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function e6(){return`\
fn project_offset_normal(vector: vec3<f32>) -> vec3<f32> {
  if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project.commonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

fn apply_polygon_color(
  colors: vec4<f32>,
  normal: vec3<f32>,
  position: vec4<f32>
) -> vec4<f32> {
  if (solidPolygon.extruded > 0.5) {
    let lightColor = lighting_getLightColor2(
      colors.rgb,
      project.cameraPosition,
      position.xyz,
      normal
    );
    return vec4<f32>(lightColor, colors.a * layer.opacity);
  }
  return vec4<f32>(colors.rgb, colors.a * layer.opacity);
}
`}function e5(){return`\
@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0, 0.0);

  clip_filterColor(inp.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = inp.vColor;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`}let e8=[0,0,0,255],e9={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class e7 extends r.A{getShaders(e){var t;let i=this.props._normalize||"CCW"!==this.props._windingOrder?1:0;return super.getShaders({vs:"top"===e?e3:e1,fs:e4,source:(t=!!i,"top"===e?`\
${e6()}

struct Attributes {
  @location(0) vertexPositions: vec3<f32>,
  @location(1) vertexPositions64Low: vec3<f32>,
  @location(2) elevations: f32,
  @location(3) fillColors: vec4<f32>,
  @location(4) lineColors: vec4<f32>,
  @location(5) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;

  var pos = attributes.vertexPositions;
  if (solidPolygon.extruded > 0.5) {
    pos.z += attributes.elevations * solidPolygon.elevationScale;
  }

  geometry.worldPosition = attributes.vertexPositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    pos,
    attributes.vertexPositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_normal(vec3<f32>(0.0, 0.0, 1.0));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${e5()}
`:`\
const RING_WINDING_ORDER_CW: bool = ${t?"true":"false"};

${e6()}

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) vertexPositions: vec3<f32>,
  @location(2) vertexPositions64Low: vec3<f32>,
  @location(3) nextVertexPositions: vec3<f32>,
  @location(4) nextVertexPositions64Low: vec3<f32>,
  @location(5) vertexValid: f32,
  @location(6) elevations: f32,
  @location(7) fillColors: vec4<f32>,
  @location(8) lineColors: vec4<f32>,
  @location(9) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;
  outp.position = vec4<f32>(0.0);
  outp.vColor = vec4<f32>(0.0);
  outp.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);
  outp.clipCoordinates = vec2<f32>(0.0);

  if (attributes.vertexValid < 0.5) {
    return outp;
  }

  let pos = select(attributes.nextVertexPositions, attributes.vertexPositions, RING_WINDING_ORDER_CW);
  let pos64Low = select(
    attributes.nextVertexPositions64Low,
    attributes.vertexPositions64Low,
    RING_WINDING_ORDER_CW
  );
  let nextPos = select(attributes.vertexPositions, attributes.nextVertexPositions, RING_WINDING_ORDER_CW);
  let nextPos64Low = select(
    attributes.vertexPositions64Low,
    attributes.nextVertexPositions64Low,
    RING_WINDING_ORDER_CW
  );

  let position = mix(pos, nextPos, attributes.positions.x);
  let position64Low = mix(pos64Low, nextPos64Low, attributes.positions.x);

  var worldPosition = position;
  if (solidPolygon.extruded > 0.5) {
    worldPosition.z += attributes.elevations * attributes.positions.y * solidPolygon.elevationScale;
  }

  geometry.worldPosition = position;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    worldPosition,
    position64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_offset_normal(vec3<f32>(
    pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
    nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
    0.0
  ));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${e5()}
`),defines:{RING_WINDING_ORDER_CW:i},modules:[u.A,c.A,e$.J,h.Ay,e0,..."webgpu"===this.context.device.type?[N]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){let e,{viewport:t}=this.context,{coordinateSystem:i}=this.props,{_full3d:r}=this.props;t.isGeospatial&&"default"===i&&(i="lnglat"),"lnglat"===i&&(e=r?t.projectPosition.bind(t):t.projectFlat.bind(t)),this.setState({numInstances:0,polygonTesselator:new eX({preproject:e,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let n=this.getAttributeManager(),s="webgpu"===this.context.device.type;n.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:e9,accessor:"getPolygon",update:this.calculatePositions,noAlloc:!0,...s?{}:{shaderAttributes:{nextVertexPositions:{vertexOffset:1}}}},...s?{nextVertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:!1,update:this.calculateNextPositions,noAlloc:!0}}:{},[s?"vertexValid":"instanceVertexValid"]:{size:1,type:s?"float32":"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:"dynamic",transition:e9,accessor:"getElevation",bufferGroup:"solid-polygon-instance-data"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:e9,accessor:"getFillColor",defaultValue:e8,bufferGroup:"solid-polygon-instance-data"},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:e9,accessor:"getLineColor",defaultValue:e8,bufferGroup:"solid-polygon-instance-data"},rowIndexes:{size:1,type:"uint32",stepMode:"dynamic",accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:"solid-polygon-instance-data"}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===i)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:i,wireframe:r,elevationScale:n}=this.props,{topModel:s,sideModel:o,wireframeModel:a,polygonTesselator:l}=this.state,u={extruded:!!t,elevationScale:n,isWireframe:!1};a&&r&&(a.setInstanceCount(l.instanceCount-1),a.shaderInputs.setProps({solidPolygon:{...u,isWireframe:!0}}),a.draw(this.context.renderPass)),o&&i&&(o.setInstanceCount(l.instanceCount-1),o.shaderInputs.setProps({solidPolygon:u}),o.draw(this.context.renderPass)),s&&i&&(s.setVertexCount(l.vertexCount),s.shaderInputs.setProps({solidPolygon:u}),s.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:i,changeFlags:r}=e,n=this.getAttributeManager();(r.extensionsChanged||t.filled!==i.filled||t.extruded!==i.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),n.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,r=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:"webgpu"===this.context.device.type?{...r}:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let e,t,i,{id:r,filled:n,extruded:s}=this.props;if(n){let t=this.getShaders("top");t.defines={...t.defines,NON_INSTANCED_MODEL:1};let i=this.getAttributeManager().getBufferLayouts({isInstanced:!1});"webgpu"===this.context.device.type&&(i=i.filter(e=>"indices"!==e.name&&"vertexValid"!==e.name&&"instanceVertexValid"!==e.name&&"nextVertexPositions"!==e.name)),e=new p.K(this.context.device,{...t,id:`${r}-top`,topology:"triangle-list",bufferLayout:i,isIndexed:!0,userData:{excludeAttributes:{vertexValid:!0,instanceVertexValid:!0,nextVertexPositions:!0}}})}if(s){let e=this.getAttributeManager().getBufferLayouts({isInstanced:!0});"webgpu"===this.context.device.type&&(e=e.filter(e=>"indices"!==e.name)),t=new p.K(this.context.device,{...this.getShaders("side"),id:`${r}-side`,bufferLayout:e,geometry:new g.V({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),i=new p.K(this.context.device,{...this.getShaders("side"),id:`${r}-wireframe`,bufferLayout:e,geometry:new g.V({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[t,i,e].filter(Boolean),topModel:e,sideModel:t,wireframeModel:i}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get("indices")}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts;let i=this.props.data.attributes?.getPolygon;if("webgpu"===this.context.device.type&&ArrayBuffer.isView(i?.value)){let{value:r,size:n=3,offset:s=0,stride:o}=i,a=s/r.BYTES_PER_ELEMENT,l=o?o/r.BYTES_PER_ELEMENT:n,u=new Float64Array(3*t.instanceCount);for(let e=0;e<t.instanceCount;e++){let t=a+e*l,i=3*e;u[i]=r[t],u[i+1]=r[t+1],u[i+2]=n>2?r[t+2]:0}e.value=u;return}e.value=t.get("positions")}calculateVertexValid(e){let t=this.props.data.attributes?.instanceVertexValid?.value,i="webgpu"===this.context.device.type&&t?t:this.state.polygonTesselator.get("vertexValid");e.value="webgpu"===this.context.device.type&&i?Float32Array.from(i):i}calculateNextPositions(e){let{polygonTesselator:t}=this.state,i=this.getAttributeManager().getAttributes(),r=i.vertexPositions.value,n=this.props.data.attributes?.instanceVertexValid?.value||i.vertexValid?.value||t.get("vertexValid");if(e.startIndices=t.vertexStarts,!r){e.value=r;return}let s=r.length/3,o=new r.constructor(r.length);for(let e=0;e<s;e++){let t=3*e,i=n?.[e]&&e+1<s?t+3:t;for(let e=0;e<3;e++)o[t+e]=r[i+e]}e.value=o}}e7.defaultProps={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:e=>e.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:e8},getLineColor:{type:"accessor",value:e8},material:!0},e7.layerName="SolidPolygonLayer";let te={circle:{type:U,props:{filled:"filled",stroked:"stroked",lineWidthMaxPixels:"lineWidthMaxPixels",lineWidthMinPixels:"lineWidthMinPixels",lineWidthScale:"lineWidthScale",lineWidthUnits:"lineWidthUnits",pointRadiusMaxPixels:"radiusMaxPixels",pointRadiusMinPixels:"radiusMinPixels",pointRadiusScale:"radiusScale",pointRadiusUnits:"radiusUnits",pointAntialiasing:"antialiasing",pointBillboard:"billboard",getFillColor:"getFillColor",getLineColor:"getLineColor",getLineWidth:"getLineWidth",getPointRadius:"getRadius"}},icon:{type:O,props:{iconAtlas:"iconAtlas",iconMapping:"iconMapping",iconSizeMaxPixels:"sizeMaxPixels",iconSizeMinPixels:"sizeMinPixels",iconSizeScale:"sizeScale",iconSizeUnits:"sizeUnits",iconAlphaCutoff:"alphaCutoff",iconBillboard:"billboard",getIcon:"getIcon",getIconAngle:"getAngle",getIconColor:"getColor",getIconPixelOffset:"getPixelOffset",getIconSize:"getSize"}},text:{type:e_,props:{textSizeMaxPixels:"sizeMaxPixels",textSizeMinPixels:"sizeMinPixels",textSizeScale:"sizeScale",textSizeUnits:"sizeUnits",textBackground:"background",textBackgroundPadding:"backgroundPadding",textFontFamily:"fontFamily",textFontWeight:"fontWeight",textLineHeight:"lineHeight",textMaxWidth:"maxWidth",textOutlineColor:"outlineColor",textOutlineWidth:"outlineWidth",textWordBreak:"wordBreak",textCharacterSet:"characterSet",textBillboard:"billboard",textFontSettings:"fontSettings",getText:"getText",getTextAngle:"getAngle",getTextColor:"getColor",getTextPixelOffset:"getPixelOffset",getTextSize:"getSize",getTextAnchor:"getTextAnchor",getTextAlignmentBaseline:"getAlignmentBaseline",getTextBackgroundColor:"getBackgroundColor",getTextBorderColor:"getBorderColor",getTextBorderWidth:"getBorderWidth"}}},tt={type:eN,props:{lineWidthUnits:"widthUnits",lineWidthScale:"widthScale",lineWidthMinPixels:"widthMinPixels",lineWidthMaxPixels:"widthMaxPixels",lineJointRounded:"jointRounded",lineCapRounded:"capRounded",lineMiterLimit:"miterLimit",lineBillboard:"billboard",lineAntialiasing:"antialiasing",getLineColor:"getColor",getLineWidth:"getWidth"}},ti={type:e7,props:{extruded:"extruded",filled:"filled",wireframe:"wireframe",elevationScale:"elevationScale",material:"material",_full3d:"_full3d",getElevation:"getElevation",getFillColor:"getFillColor",getLineColor:"getLineColor"}};function tr({type:e,props:t}){let i={};for(let r in t)i[r]=e.defaultProps[t[r]];return i}function tn(e,t){let{transitions:i,updateTriggers:r}=e.props,n={updateTriggers:{},transitions:i&&{getPosition:i.geometry}};for(let s in t){let o=t[s],a=e.props[s];s.startsWith("get")&&(a=e.getSubLayerAccessor(a),n.updateTriggers[o]=r[s],i&&(n.transitions[o]=i[s])),n[o]=a}return n}function ts(e,t,i={}){let r={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:n=0,endRow:s=e.length}=i;for(let i=n;i<s;i++){let n=e[i],{geometry:s}=n;if(s)if("GeometryCollection"===s.type){f.A.assert(Array.isArray(s.geometries),"GeoJSON does not have geometries array");let{geometries:e}=s;for(let s=0;s<e.length;s++)to(e[s],r,t,n,i)}else to(s,r,t,n,i)}return r}function to(e,t,i,r,n){let{type:s,coordinates:o}=e,{pointFeatures:a,lineFeatures:l,polygonFeatures:u,polygonOutlineFeatures:c}=t;if(!function(e,t){let i=ta[e];for(f.A.assert(i,`Unknown GeoJSON type ${e}`);t&&--i>0;)t=t[0];return t&&Number.isFinite(t[0])}(s,o))return void f.A.warn(`${s} coordinates are malformed`)();switch(s){case"Point":a.push(i({geometry:e},r,n));break;case"MultiPoint":o.forEach(e=>{a.push(i({geometry:{type:"Point",coordinates:e}},r,n))});break;case"LineString":l.push(i({geometry:e},r,n));break;case"MultiLineString":o.forEach(e=>{l.push(i({geometry:{type:"LineString",coordinates:e}},r,n))});break;case"Polygon":u.push(i({geometry:e},r,n)),o.forEach(e=>{c.push(i({geometry:{type:"LineString",coordinates:e}},r,n))});break;case"MultiPolygon":o.forEach(e=>{u.push(i({geometry:{type:"Polygon",coordinates:e}},r,n)),e.forEach(e=>{c.push(i({geometry:{type:"LineString",coordinates:e}},r,n))})})}}let ta={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function tl(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function tu(e){return e.geometry.coordinates}let tc=["points","linestrings","polygons"],th={...tr(te.circle),...tr(te.icon),...tr(te.text),...tr(tt),...tr(ti),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:"object",value:null},iconMapping:{type:"object",value:{}},getIcon:{type:"accessor",value:e=>e.properties.icon},getText:{type:"accessor",value:e=>e.properties.text},pointType:"circle",getRadius:{deprecatedFor:"getPointRadius"}};class td extends l{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;let{data:i}=this.props,r=i&&"points"in i&&"polygons"in i&&"lines"in i;this.setState({binary:r}),r?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){let i=function(e){let t=tl(),{points:i,lines:r,polygons:n}=e,s=function(e){let t={points:null,lines:null,polygons:null};for(let i in t){let r=e[i].globalFeatureIds.value;t[i]=new Uint32Array(r)}return t}(e);t.points.data={length:i.positions.value.length/i.positions.size,attributes:{...i.attributes,getPosition:i.positions,rowIndexes:{size:1,type:"uint32",value:s.points}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},t.lines.data={length:r.pathIndices.value.length-1,startIndices:r.pathIndices.value,attributes:{...r.attributes,getPath:r.positions,rowIndexes:{size:1,type:"uint32",value:s.lines}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},t.lines._pathType="open";let o=Array(n.positions.value.length/n.positions.size).fill(1);for(let e of n.primitivePolygonIndices.value)o[e-1]=0;return t.polygons.data={length:n.polygonIndices.value.length-1,startIndices:n.polygonIndices.value,attributes:{...n.attributes,getPolygon:n.positions,instanceVertexValid:{size:1,value:new Uint16Array(o)},rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},t.polygons._normalize=!1,n.triangles&&(t.polygons.data.attributes.indices=n.triangles.value),t.polygonsOutline.data={length:n.primitivePolygonIndices.value.length-1,startIndices:n.primitivePolygonIndices.value,attributes:{...n.attributes,getPath:n.positions,rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},t.polygonsOutline._pathType="open",t}(e.data);this.setState({layerProps:i})}_updateStateJSON({props:e,changeFlags:t}){let i=function(e){if(Array.isArray(e))return e;switch(f.A.assert(e.type,"GeoJSON does not have type"),e.type){case"Feature":return[e];case"FeatureCollection":return f.A.assert(Array.isArray(e.features),"GeoJSON does not have features array"),e.features;default:return[{geometry:e}]}}(e.data),r=this.getSubLayerRow.bind(this),n={},s={};if(Array.isArray(t.dataChanged)){let e=this.state.features;for(let t in e)n[t]=e[t].slice(),s[t]=[];for(let o of t.dataChanged){let t=ts(i,r,o);for(let i in e)s[i].push(function({data:e,getIndex:t,dataRange:i,replace:r}){let{startRow:n=0,endRow:s=1/0}=i,o=e.length,a=o,l=o;for(let i=0;i<o;i++){let r=t(e[i]);if(a>i&&r>=n&&(a=i),r>=s){l=i;break}}let u=a,c=l-a!==r.length?e.slice(l):void 0;for(let t=0;t<r.length;t++)e[u++]=r[t];if(c){for(let t=0;t<c.length;t++)e[u++]=c[t];e.length=u}return{startRow:a,endRow:a+r.length}}({data:n[i],getIndex:e=>e.__source.index,dataRange:o,replace:t[i]}))}}else n=ts(i,r);let o=function(e,t){let i=tl(),{pointFeatures:r,lineFeatures:n,polygonFeatures:s,polygonOutlineFeatures:o}=e;return i.points.data=r,i.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),i.points.getPosition=tu,i.lines.data=n,i.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),i.lines.getPath=tu,i.polygons.data=s,i.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),i.polygons.getPolygon=tu,i.polygonsOutline.data=o,i.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),i.polygonsOutline.getPath=tu,i}(n,s);this.setState({features:n,featuresDiff:s,layerProps:o})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i,sourceLayer:r}=t;return t.featureType=tc.find(e=>r.id.startsWith(`${this.id}-${e}-`)),i>=0&&r.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[i]),t}_updateAutoHighlight(e){let t=`${this.id}-points-`,i="points"===e.featureType;for(let r of this.getSubLayers())r.id.startsWith(t)===i&&r.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:t}=this.props,{layerProps:i}=this.state,r="polygons-fill",n=this.shouldRenderSubLayer(r,i.polygons?.data)&&this.getSubLayerClass(r,ti.type);if(n){let s=tn(this,ti.props),o=e&&t;return o||delete s.getLineColor,s.updateTriggers.lineColors=o,new n(s,this.getSubLayerProps({id:r,updateTriggers:s.updateTriggers}),i.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:t}=this.props,{layerProps:i}=this.state,r="polygons-stroke",n="linestrings",s=!e&&t&&this.shouldRenderSubLayer(r,i.polygonsOutline?.data)&&this.getSubLayerClass(r,tt.type),o=this.shouldRenderSubLayer(n,i.lines?.data)&&this.getSubLayerClass(n,tt.type);if(s||o){let e=tn(this,tt.props);return[s&&new s(e,this.getSubLayerProps({id:r,updateTriggers:e.updateTriggers}),i.polygonsOutline),o&&new o(e,this.getSubLayerProps({id:n,updateTriggers:e.updateTriggers}),i.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:t,binary:i}=this.state,{highlightedObjectIndex:r}=this.props;!i&&Number.isFinite(r)&&(r=t.points.data.findIndex(e=>e.__source.index===r));let n=new Set(e.split("+")),s=[];for(let e of n){let n=`points-${e}`,o=te[e],a=o&&this.shouldRenderSubLayer(n,t.points?.data)&&this.getSubLayerClass(n,o.type);if(a){let l=tn(this,o.props),u=t.points;if("text"===e&&i){let{rowIndexes:e,...t}=u.data.attributes;u={...u,data:{...u.data,attributes:t}}}s.push(new a(l,this.getSubLayerProps({id:n,updateTriggers:l.updateTriggers,highlightedObjectIndex:r}),u))}}return s}renderLayers(){let{extruded:e}=this.props,t=this._renderPolygonLayer();return[!e&&t,this._renderLineLayers(),this._renderPointLayers(),e&&t]}getSubLayerAccessor(e){let{binary:t}=this.state;return t&&"function"==typeof e?(t,i)=>{let{data:r,index:n}=i;return e(function(e,t){if(!e)return null;let i="startIndices"in e?e.startIndices[t]:t,r=e.featureIds.value[i];return -1!==i?function(e,t,i){let r={properties:{...e.properties[t]}};for(let t in e.numericProps)r.properties[t]=e.numericProps[t].value[i];return r}(e,r,i):null}(r,n),i)}:super.getSubLayerAccessor(e)}}td.layerName="GeoJsonLayer",td.defaultProps=th;let tf=td},65302:(e,t,i)=>{"use strict";i.d(t,{A:()=>th});var r={};i.r(r),i.d(r,{arithmetic:()=>A,dot:()=>O,equalAll:()=>k,extent:()=>T,fround:()=>M,gather:()=>I,interleave:()=>R,length:()=>B,segmentedMap:()=>z,select:()=>F,sequence:()=>$,swizzle:()=>j});var n=i(22839),s=i(42899),o=i(7724),a=i(15821);let l=a.r.getDataType.bind(a.r);function u(e,t,i){if(t.size>4)return null;let r="webgpu"===i&&"uint8"===t.type?"unorm8":t.type,n=t.size,s=!!("webgpu"!==i&&3===n&&r&&["uint8","sint8","unorm8","snorm8","uint16","sint16","unorm16","snorm16"].includes(r));return{attribute:e,format:n>1?`${r}x${n}${s?"-webgl":""}`:t.type,byteOffset:t.offset||0}}function c(e){return e.stride||e.size*e.bytesPerElement}var h=i(68169),d=i(80931),f=i(77397);function p(e,t){t.offset&&f.A.removed("shaderAttribute.offset","vertexOffset, elementOffset")();let i=c(e),r=(void 0!==t.vertexOffset?t.vertexOffset:e.vertexOffset||0)*i+(t.elementOffset||0)*e.bytesPerElement+(e.offset||0);return{...t,offset:r,stride:i}}class g{constructor(e,t,i){let r;this._buffer=null,this.device=e,this.id=t.id||"",this.size=t.size||1;let n=t.logicalType||t.type,s="float64"===n,{defaultValue:a}=t;a=Number.isFinite(a)?[a]:a||Array(this.size).fill(0),r=s?"float32":!n&&t.isIndexed?"uint32":n||"float32";let l=function(e){switch(e){case"float64":return Float64Array;case"uint8":case"unorm8":return Uint8ClampedArray;default:return(0,o.Ak)(e)}}(n||r);this.doublePrecision=s,s&&!1===t.fp64&&(l=Float32Array),this.value=null,this.settings={...t,defaultType:l,defaultValue:a,logicalType:n,type:r,normalized:r.includes("norm"),size:this.size,bytesPerElement:l.BYTES_PER_ELEMENT},this.state={...i,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*c(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}get isDoublePrecisionBuffer(){return this._shouldSplitDoublePrecisionValue(this.value)}delete(){this._buffer&&(this._buffer.delete(),this._buffer=null),h.A.release(this.state.allocatedValue),this.state.allocatedValue=null}getBuffer(){return this.state.constant&&"webgpu"!==this.device.type?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let i={};if(this.state.constant){let r=this.value;if("webgpu"===this.device.type&&this._buffer)i[e]=this._buffer;else if(t){let n=p(this.getAccessor(),t),s=n.offset/r.BYTES_PER_ELEMENT,o=n.size||this.size;i[e]=r.subarray(s,s+o)}else i[e]=r}else i[e]=this.getBuffer();return this.doublePrecision&&(this.isDoublePrecisionBuffer?i[`${e}64Low`]=i[e]:i[`${e}64Low`]=new Float32Array(this.size)),i}_getBufferLayout(e=this.id,t=null){let i=this.getAccessor(),r=[],n={name:this.id,byteStride:"webgpu"===this.device.type&&this.state.constant?0:c(i)};if(this.doublePrecision){let n=function(e,t){let i=p(e,t);return{high:i,low:{...i,offset:i.offset+4*e.size}}}(i,t||{});r.push(u(e,{...i,...n.high},this.device.type),u(`${e}64Low`,{...i,...n.low},this.device.type))}else if(t){let n=p(i,t);r.push(u(e,{...i,...n},this.device.type))}else r.push(u(e,i,this.device.type));return n.attributes=r.filter(Boolean),n}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:i,size:r}=this,n=i*r;if(t&&n&&t.length>=n){let i=Array(r).fill(1/0),s=Array(r).fill(-1/0);for(let e=0;e<n;)for(let n=0;n<r;n++){let r=t[e++];r<i[n]&&(i[n]=r),r>s[n]&&(s[n]=r)}e=[i,s]}}return this.state.bounds=e,e}setData(e){let t,{state:i}=this;t=ArrayBuffer.isView(e)?{value:e}:e instanceof n.h?{buffer:e}:e;let r={...this.settings,...t};if(ArrayBuffer.isView(t.value)){if(!t.type)if(this.doublePrecision&&t.value instanceof Float64Array)r.type="float32";else{let e=l(t.value);r.type=r.normalized?e.replace("int","norm"):e}r.bytesPerElement=t.value.BYTES_PER_ELEMENT,r.stride=c(r)}if(i.bounds=null,t.constant){let e=t.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),!(!i.constant||!this._areValuesEqual(e,this.value)))return!1;i.externalBuffer=null,i.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(t.buffer)i.externalBuffer=t.buffer,i.constant=!1,this.value=t.value||null;else if(t.value){this._checkExternalBuffer(t);let e=t.value,n=e;i.externalBuffer=null,i.constant=!1,this.value=e,this._shouldSplitDoublePrecisionValue(n)&&(n=(0,d.cT)(n,r),e instanceof Float32Array&&(r.stride=2*r.size*Float32Array.BYTES_PER_ELEMENT));let{buffer:s}=this,o=c(r),a=(r.vertexOffset||0)*o;if(this.settings.isIndexed){let e=this.settings.defaultType;n.constructor!==e&&(n=new e(n))}let l=n.byteLength+a+2*o;(!s||s.byteLength<l)&&(s=this._createBuffer(l)),s.write(n,a)}return this.setAccessor(r),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:i=0,endOffset:r}=e,n=this._shouldSplitDoublePrecisionValue(t);this.buffer.write(n?(0,d.cT)(t,{size:this.size,startIndex:i,endIndex:r}):t.subarray(i,r),i*(n?8:t.BYTES_PER_ELEMENT)+this.byteOffset)}allocate(e,t=!1){let{state:i}=this,r=i.allocatedValue,n=h.A.allocate(r,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=n;let s=this._shouldSplitDoublePrecisionValue(n),o=s&&n instanceof Float32Array?{...this.settings,stride:2*this.size*Float32Array.BYTES_PER_ELEMENT}:this.settings;this.setAccessor(o);let{byteOffset:a}=this,{buffer:l}=this,u=n.byteLength*(s&&n instanceof Float32Array?2:1);return(!l||l.byteLength<u+a)&&(l=this._createBuffer(u+a),t&&r&&l.write(this._shouldSplitDoublePrecisionValue(r)?(0,d.cT)(r,this):r,a)),i.allocatedValue=n,i.constant=!1,i.externalBuffer=null,!0}_shouldSplitDoublePrecisionValue(e){return!!(this.doublePrecision&&(e instanceof Float64Array||"webgpu"===this.device.type&&e instanceof Float32Array))}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let i=this.settings.defaultType,r=!1;if(this.doublePrecision&&(r=t.BYTES_PER_ELEMENT<4),r)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);t instanceof i||!this.settings.normalized||"normalized"in e||f.A.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case"snorm8":return new Float32Array(e).map(e=>(e+128)/255*2-1);case"snorm16":return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case"unorm8":return new Float32Array(e).map(e=>e/255);case"unorm16":return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,i){let{defaultValue:r,size:n}=this.settings;if(Number.isFinite(e))return t[i]=e,t;if(!e){let e=n;for(;--e>=0;)t[i+e]=r[e];return t}switch(n){case 4:t[i+3]=Number.isFinite(e[3])?e[3]:r[3];case 3:t[i+2]=Number.isFinite(e[2])?e[2]:r[2];case 2:t[i+1]=Number.isFinite(e[1])?e[1]:r[1];case 1:t[i+0]=Number.isFinite(e[0])?e[0]:r[0];break;default:let s=n;for(;--s>=0;)t[i+s]=Number.isFinite(e[s])?e[s]:r[s]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:i}=this;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:i}=this.settings,r="webgpu"!==this.device.type||t?(t?n.h.INDEX:n.h.VERTEX)|n.h.COPY_DST:n.h.VERTEX|n.h.STORAGE|n.h.COPY_DST|n.h.COPY_SRC;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:r,indexType:t?i:void 0,byteLength:e}),this._buffer}}var m=i(40323),v=i(37999),y=i(62605);let b=[],_=[[0,1/0]],x={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}};function w(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:"interpolation",duration:e});let i=e.type||"interpolation";return{...x[i],...t,...e,type:i}}class P extends g{constructor(e,t){super(e,t,{startIndices:null,constantValue:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:_}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t,i;(t=this.state).layoutChanged||(i=this.getAccessor(),t.layoutChanged=e.type!==i.type||e.size!==i.size||c(e)!==c(i)||(e.offset||0)!==(i.offset||0)),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat("function"!=typeof e&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,i=this.settings.transition;return w(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],i)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:i=1/0}=t;this.state.updateRanges=function(e,t){if(e===_||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let i=[],r=e.length,n=0;for(let s=0;s<r;s++){let r=e[s];r[1]<t[0]?(i.push(r),n=s+1):r[0]>t[1]?i.push(r):t=[Math.min(r[0],t[0]),Math.max(r[1],t[1])]}return i.splice(n,0,t),i}(this.state.updateRanges,[e,i])}else this.state.updateRanges=_}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=b}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:i}=this;if(i.noAlloc)return!1;if(i.update){let i=this.isConstant;return super.allocate(e,t.updateRanges!==_),t.layoutChanged||(t.layoutChanged=i&&"webgpu"===this.device.type),!0}return!1}updateBuffer({numInstances:e,data:t,props:i,context:r}){if(!this.needsUpdate())return!1;let{state:{updateRanges:n},settings:{update:s,noAlloc:o}}=this,a=!0;if(s){for(let[o,a]of n)s.call(r,this,{data:t,startRow:o,endRow:a,props:i,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset){if(this.constant){let e=this.value;this.value=null,this.setConstantValue(r,e)}else this.setData({value:this.value,constant:this.constant});this.constant=!1}else for(let[t,i]of n){let r=Number.isFinite(t)?this.getVertexOffset(t):0,n=Number.isFinite(i)?this.getVertexOffset(i):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:r,endOffset:n})}this._checkAttributeArray()}else a=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),a}setConstantValue(e,t){var i;if(void 0===t||"function"==typeof t)return!1;let r=this.isConstant,n=this.settings.transform&&e?this.settings.transform.call(e,t):t,s=this.settings.defaultType;this.state.constantValue=this._normalizeValue(n,new s(this.size),0);let o=this.setData({constant:!0,value:n});if("webgpu"===this.device.type){let e=this.state.constantValue;this.doublePrecision&&(e instanceof Float32Array||e instanceof Float64Array)&&(e=(0,d.cT)(e,{size:this.size}),this.setAccessor({...this.getAccessor(),stride:2*this.size*Float32Array.BYTES_PER_ELEMENT}));let t=this._buffer;(!t||t.byteLength<e.byteLength)&&(t=this._createBuffer(e.byteLength)),t.write(e),(i=this.state).layoutChanged||(i.layoutChanged=!r),this.constant=!1}return o&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0}getConstantValue(){return this.isConstant?this.state.constantValue:null}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e||(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e),!0)):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:i,settings:r}=this;if(!e)return i.binaryValue=null,i.binaryAccessor=null,!1;if(r.noAlloc)return!1;if(i.binaryValue===e)return this.clearNeedsUpdate(),!0;if(i.binaryValue=e,this.setNeedsRedraw(),r.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let n=e;(0,m.A)(ArrayBuffer.isView(n.value),`invalid ${r.accessor}`);let s=!!n.size&&n.size!==this.size;return i.binaryAccessor=(0,v.I)(n.value,{size:n.size||this.size,stride:n.stride,offset:n.offset,startIndices:t,nested:s}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let i in e)Object.assign(t,super.getValue(i,e[i]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,i=super._getBufferLayout(),{stepMode:r}=this.settings;if("dynamic"===r?i.stepMode=e?e.isInstanced?"instance":"vertex":"instance":i.stepMode=r??"vertex",!t)return i;for(let e in t){let r=super._getBufferLayout(e,t[e]);i.attributes.push(...r.attributes)}return i}_autoUpdater(e,{data:t,startRow:i,endRow:r,props:n,numInstances:s}){let{settings:o,state:a,value:l,size:u,startIndices:c}=e,{accessor:h,transform:d}=o,f=a.binaryAccessor||("function"==typeof h?h:n[h]);(0,m.A)("function"==typeof f,`accessor "${h}" is not a function`);let p=e.getVertexOffset(i),{iterable:g,objectInfo:b}=(0,v.X)(t,i,r);for(let t of g){b.index++;let i=f(t,b);if(d&&(i=d.call(this,i)),c){let t=(b.index<c.length-1?c[b.index+1]:s)-c[b.index];if(i&&Array.isArray(i[0])){let t=p;for(let r of i)e._normalizeValue(r,l,t),t+=u}else i&&i.length>u?l.set(i,p):(e._normalizeValue(i,b.target,0),(0,y.R)({target:l,source:b.target,start:p,count:t}));p+=t*u}else e._normalizeValue(i,l,p),p+=u}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||"function"==typeof e.update))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let i=!0;switch(t){case 4:i=i&&Number.isFinite(e[3]);case 3:i=i&&Number.isFinite(e[2]);case 2:i=i&&Number.isFinite(e[1]);case 1:i=i&&Number.isFinite(e[0]);break;default:i=!1}if(!i)throw Error(`Illegal attribute generated for ${this.id}`)}}}var S=i(29101),C=i(19365);function E({elementWise:e,func:t,inputs:i,output:r,outputBuffer:n}){let s=Array.isArray(i)?i:Object.values(i);for(let e of s)if(!e.value)throw Error(`${e} does not have CPU value`);let o=r.length,a=r.size,l=new r.ValueType(o*a);for(let i=0;i<o;i++){let r=s.map(e=>L(e,i));if(e)for(let e=0;e<a;e++)l[i*a+e]=t.apply(null,r.map(t=>t[e]));else t.call(null,l.subarray(i*a,i*a+a),...r)}let u=r.ValueType.BYTES_PER_ELEMENT,c=r.offset/u,h=r.stride/u,d=l;if(0!==c||h!==a){d=new r.ValueType(c+r.byteLength/u);for(let e=0;e<o;e++){let t=e*a,i=c+e*h,r=l.subarray(t,t+a);d.set(r,i),n.write(r,i*u)}}else n.write(l);return{success:!0,value:d}}function L(e,t){let i=e.value,r=e.size,n=e.offset/e.ValueType.BYTES_PER_ELEMENT,s=e.stride/e.ValueType.BYTES_PER_ELEMENT,o=n+(e.isConstant?0:t)*s,a=i.slice(o,o+r);if(!e.normalized)return a;let l=new Float32Array(r);for(let t=0;t<r;t++)l[t]=function(e,t){switch(t){case"uint8":return e/255;case"uint16":return e/65535;case"uint32":return e/0xffffffff;case"sint8":return Math.max(e/127,-1);case"sint16":return Math.max(e/32767,-1);case"sint32":return Math.max(e/0x7fffffff,-1);case"float32":return e;default:throw Error(`Unsupported normalized source type ${t}`)}}(a[t],e.type);return l}let A=({inputs:e,output:t,target:i})=>{for(let t of Object.values(e.namedInputs))if(!t.value)throw Error(`${t} does not have CPU value`);let r=new t.ValueType(t.length*t.size);for(let i=0;i<t.length;i++){let n=Object.fromEntries(Object.entries(e.namedInputs).map(([e,t])=>[e,L(t,i)]));for(let s=0;s<t.size;s++)r[i*t.size+s]=function e(t,i,r){switch(t.kind){case"input":{let e=i[t.name];if(r<e.length)return e[r];return 1===e.length?e[0]:0}case"literal":if(Array.isArray(t.value))return t.value[r]??0;return t.value;case"call":{!function(e,t){let i=C.E[e].arity;if(t!==i)throw Error(`Arithmetic op '${e}' expects ${i} args, got ${t}`)}(t.op,t.args.length);let n=t.args.map(t=>e(t,i,r));switch(t.op){case"add":return n[0]+n[1];case"subtract":return n[0]-n[1];case"multiply":return n[0]*n[1];case"divide":return n[0]/n[1];case"pow":return Math.pow(n[0],n[1]);case"sqrt":return Math.sqrt(n[0]);case"abs":return Math.abs(n[0]);case"sin":return Math.sin(n[0]);case"cos":return Math.cos(n[0]);case"tan":return Math.tan(n[0]);case"exp":return Math.exp(n[0]);case"log":return Math.log(n[0]);default:{let e=t.op;throw Error(`Unsupported arithmetic op ${e}`)}}}default:throw Error(`Unsupported expression node ${t.kind}`)}}(e.expression,n,s)}return i.write(r),{success:!0,value:r}},T=({inputs:e,output:t,target:i})=>{let{sourceValues:r}=e;if(!r.value)throw Error(`${r} does not have CPU value`);let n=new t.ValueType(t.length*t.size);if(0===r.length)return{success:!1,error:Error(`${r} is empty`)};for(let e=0;e<r.size;e++){let i=L(r,0)[e],s=e*t.size,o=s+1;n[s]=i,n[o]=i;for(let t=1;t<r.length;t++){let i=L(r,t)[e];i<n[s]&&(n[s]=i),i>n[o]&&(n[o]=i)}}return i.write(n),{success:!0,value:n}},M=({inputs:e,output:t,target:i})=>E({func:(e,t)=>{let i=e.length/2,r=new Float64Array(t.buffer);for(let t=0;t<i;t++){let n=r[t];e[t]=Math.fround(n),e[t+i]=n-e[t]}return e},inputs:e,output:t,outputBuffer:i}),I=async({inputs:e,output:t,target:i})=>{let{ids:r,sourceValues:n}=e,s=r.value,o=n.value;if(!s)throw Error(`${r} does not have CPU value`);if(!o)throw Error(`${n} does not have CPU value`);let a=new t.ValueType(t.length*t.size),l=Array(t.size).fill(0);for(let e=0;e<t.length;e++){let i=Number(L(r,e)[0]),s=!function(e,t){return Number.isInteger(e)&&e>=0&&e<t}(i,n.length)?l:L(n,i);a.set(s,e*t.size)}return i.write(a),{success:!0,value:a}},R=({inputs:e,output:t,target:i})=>E({func:(e,...t)=>{let i=0;for(let r of t)e.set(r,i),i+=r.length},inputs:e,output:t,outputBuffer:i}),O=({inputs:e,output:t,target:i})=>{let{x:r,y:n}=e,s=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=L(r,e),i=L(n,e),o=0;for(let e=0;e<r.size;e++)o+=t[e]*i[e];s[e]=o}return i.write(s),{success:!0,value:s}},k=({inputs:e,output:t,target:i})=>{let{x:r,y:n}=e,s=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=L(r,e),i=L(n,e),o=1;for(let e=0;e<r.size;e++)if(t[e]!==i[e]){o=0;break}s[e]=o}return i.write(s),{success:!0,value:s}},B=({inputs:e,output:t,target:i})=>{let{x:r}=e,n=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=L(r,e),i=0;for(let e=0;e<r.size;e++)i+=t[e]*t[e];n[e]=Math.sqrt(i)}return i.write(n),{success:!0,value:n}},z=async({inputs:e,output:t,target:i})=>{let{segments:r,vertexCount:n}=e,s=r.value;if(!s)throw Error(`${r} does not have CPU value`);!function(e,t,i){if(t.length<1)throw Error("segmentedMap segments must contain at least one segment start");let r=0;for(let i=0;i<t.length;i++){let n=e[D(t,i)];if(0===i&&0!==n)throw Error(`segmentedMap segments must start at 0, got ${n}`);if(i>0&&n<r)throw Error(`segmentedMap segments must be non-decreasing, got ${n} after ${r}`);r=n}if(r>i)throw Error(`segmentedMap last segment start must be <= vertexCount, got ${r} > ${i}`)}(s,r,n);let o=new t.ValueType(t.length*t.size),a=0;for(let e=0;e<n;e++){for(;a+1<r.length&&s[D(r,a+1)]<=e;)a++;let i=s[D(r,a)],n=e*t.size;o[n]=a,o[n+1]=e-i}return i.write(o),{success:!0,value:o}};function D(e,t){return e.offset/e.ValueType.BYTES_PER_ELEMENT+t*(e.stride/e.ValueType.BYTES_PER_ELEMENT)}let F=async({inputs:e,output:t,target:i})=>{let{condition:r,whenTrue:n,whenFalse:s}=e,o=new t.ValueType(t.length*t.size);for(let e=0;e<t.length;e++){let i=L(r,e),a=L(n,e),l=L(s,e);for(let u=0;u<t.size;u++){let c=N(i,r.size,u);o[e*t.size+u]=0!==c?N(a,n.size,u):N(l,s.size,u)}}return i.write(o),{success:!0,value:o}};function N(e,t,i){return i<t?e[i]:1===t?e[0]:0}let $=({inputs:e,output:t,target:i})=>{let r=new t.ValueType(t.length);for(let i=0;i<t.length;i++)r[i]=e.start+i*e.step;return i.write(r),{success:!0,value:r}},j=({inputs:e,output:t,target:i})=>{let{columns:r}=e;return E({func:(e,t)=>{for(let i=0;i<r.length;i++)e[i]=t[r[i]]},inputs:{x:e.x},output:t,outputBuffer:i})};class U{_modules={cpu:r};add(e,t){let i=this._modules[e];if("function"==typeof t.then){let r=Promise.all([Promise.resolve(i||{}),t]).then(([e,t])=>({...e,...t}));return this._modules[e]=r,r.then(t=>{this._modules[e]=t}).catch(t=>{S.R.error(`Failed to register ${e} backend: ${t}`)()}),r}if(i&&"function"==typeof i.then){let r=Promise.resolve(i).then(e=>({...e,...t})).then(t=>(this._modules[e]=t,t)).catch(t=>{throw S.R.error(`Failed to register ${e} backend: ${t}`)(),t});return this._modules[e]=r,r}let r={...i||{},...t};return this._modules[e]=r,Promise.resolve(r)}async get(e,t){let r=this._modules[e];if(!r)if("webgl"===e)r=this.add("webgl",i.e(9729).then(i.bind(i,69729)));else if("webgpu"===e)r=this.add("webgpu",i.e(8321).then(i.bind(i,98321)));else throw Error(`${e} backend not registered`);let n=(await r)[t];if("function"!=typeof n)throw Error(`${e} backend does not implement ${t}`);return n}getSync(e,t){let i=this._modules[e];if(!i)throw Error(`${e} backend not registered`);if("function"==typeof i.then)throw Error(`${e} backend is not loaded yet`);let r=i[t];if("function"!=typeof r)throw Error(`${e} backend does not implement ${t}`);return r}clear(){this._modules={}}}let V=new U;var G=i(56082);class W{inputs;dependencies;constructor(e){this.inputs=e,this.dependencies=Array.from(e instanceof Array?e:Object.values(e)).filter(e=>e instanceof G.GL)}async execute(e,t){return await this._resolveDependencies(e),await this._executeWithHandler(await V.get(this._getHandlerRegistry(e),this.name),t)}executeSync(e,t){var i;this._resolveDependenciesSync(e);let r=this._executeWithHandler(V.getSync(this._getHandlerRegistry(e),this.name),t);if(i=r,"function"==typeof i?.then)throw Error(`${this.name} returned a Promise in executeSync()`);return r}shouldExecuteOnCPU(){return this.output.length<=1&&Array.from(this.dependencies).every(e=>!!e.value)}_getHandlerRegistry(e){return this.shouldExecuteOnCPU()?"cpu":e.type}async _resolveDependencies(e){for(let t of this.dependencies)await t.evaluate(e);if("cpu"===this._getHandlerRegistry(e)||"null"===e.type)for(let e of this.dependencies)await e.ensureCPUValue()}_resolveDependenciesSync(e){for(let t of this.dependencies)t.evaluateSync(e);if("cpu"===this._getHandlerRegistry(e)||"null"===e.type)for(let e of this.dependencies)e.ensureCPUValueSync()}_executeWithHandler(e,t){return e({device:t.device,inputs:this.inputs,output:this.output,target:t})}}class H extends W{name="interleave";output;constructor(e){super(e);let{isConstant:t,type:i,length:r}=function(...e){let t=function(e){let t=0,i=0;for(let r of e){if("f"===r[0])return"float32";let e=r.endsWith("8")?8:r.endsWith("6")?16:32;"u"===r[0]?t=Math.max(t,e):i=Math.max(i,e)}return t&&!i?`uint${t}`:i&&t<32?`sint${Math.max(i,2*t)}`:"float32"}(e.map(e=>e.type));return"f"!==t[0]&&e.some(e=>e.normalized)&&(t="float32"),{isConstant:e.every(e=>e.isConstant),type:t,size:e.reduce((e,t)=>Math.max(e,t.size),0),length:e.reduce((e,t)=>Math.max(e,t.length),0)}}(...e);this.output=new G.GL({isConstant:t,type:i,size:e.reduce((e,t)=>e+t.size,0),length:r,source:this})}toString(){return`_${this.inputs.join("_")}_`}}var q=i(32420),Y=i(22063);class Z{gpuDataEvaluators;format;length;id;_gpuVector;_ownsGPUDataEvaluators;_destroyed=!1;static fromGPUVector(e){if(e.bufferLayout)throw Error(`GPUVectorEvaluator.fromGPUVector() does not accept interleaved vector "${e.name}"`);if(0===e.data.length)throw Error(`GPUVectorEvaluator.fromGPUVector() requires GPUData for "${e.name}"`);return new Z({id:e.name,gpuDataEvaluators:e.data.map(t=>G.GL.fromGPUData(t,{id:e.name})),gpuVector:e,format:e.format})}static fromGPUDataEvaluators(e,t={}){return new Z({id:t.id,gpuDataEvaluators:e,format:t.format})}constructor({id:e,gpuDataEvaluators:t,gpuVector:i,format:r}){if(0===t.length)throw Error("GPUVectorEvaluator requires at least one GPUData evaluator");(function(e){let t=e[0];for(let i of e.slice(1))if(i.type!==t.type||i.size!==t.size||i.normalized!==t.normalized||i.format!==t.format)throw Error("GPUVectorEvaluator requires matching GPUData evaluator layouts")})(t),this.id=e,this.gpuDataEvaluators=t,this.format=r??t[0].format,this.length=t.reduce((e,t)=>e+t.length,0),this._gpuVector=i,this._ownsGPUDataEvaluators=!i}get evaluated(){return!!this._gpuVector}get gpuVector(){if(!this._gpuVector)throw Error(`${this} not evaluated`);return this._gpuVector}mapGPUData(e){return Z.fromGPUDataEvaluators(this.gpuDataEvaluators.map((t,i)=>e(t,i)),{id:this.id})}async evaluate(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let i=await Promise.all(this.gpuDataEvaluators.map(i=>i.evaluate(e,t))),r=i[0],n=i.map(K),s=t.format??this.format??r.format;return this._gpuVector=new Y.M({type:"data",name:t.name??this.id??"vector",format:s,data:n,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}evaluateSync(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let i=this.gpuDataEvaluators.map(i=>i.evaluateSync(e,t)),r=i[0],n=i.map(K),s=t.format??this.format??r.format;return this._gpuVector=new Y.M({type:"data",name:t.name??this.id??"vector",format:s,data:n,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}destroy(){if(this._ownsGPUDataEvaluators)for(let e of this.gpuDataEvaluators)e.destroy();this._gpuVector=void 0,this._destroyed=!0}toString(){return this.id??this.constructor.name}}function K(e){let[t,...i]=e.data;if(!t||i.length>0)throw Error(`GPUVectorEvaluator requires one GPUData chunk for "${e.name}"`);return t}function X(e){return e instanceof G.GL?[e.buffer]:e.gpuVector.data.map(e=>e.buffer instanceof q.kL?e.buffer.buffer:e.buffer)}var Q=i(53340);class J{constructor(e,{id:t,isTransitionAttribute:i}){this.packedBuffers={},this.device=e,this.id=t,this.isTransitionAttribute=i,"webgpu"===this.device.type&&V.add("webgpu",{interleave:Q.C})}hasGroups(e){return"webgpu"===this.device.type&&Object.values(e).some(e=>!!e.settings.bufferGroup)}finalize(){for(let e of Object.values(this.packedBuffers))e.packed.destroy();this.packedBuffers={}}getBufferLayouts(e,t){let i=this._getPackedGroups(e,t,{requireValues:!1,excludeAttributes:{}});return this._getBufferLayouts(e,i,t)}getBindings(e,t,i,r){let n=this._getPackedGroups(e,i,{requireValues:!0,excludeAttributes:r}),s={},o=new Set;for(let e of n.values()){let i=!this.packedBuffers[e.id]||e.attributes.some(e=>!!t[e.id]);for(let t of(s[e.id]=this._getPackedBuffer(e,i),e.attributes))o.add(t.id)}return{bufferLayouts:this._getBufferLayouts(e,n,i).filter(t=>!r[t.name]&&!e[t.name]?.settings.isIndexed),buffers:s,groupedAttributeIds:o}}_getPackedGroups(e,t,{requireValues:i,excludeAttributes:r}){let n=new Map;for(let t of Object.values(e)){let e=t.settings.bufferGroup;if(!e)continue;let i=n.get(e)||[];i.push(t),n.set(e,i)}let s=new Map;for(let[e,o]of n){let n=this._getPackedGroup(e,o,t,i,r);n&&s.set(e,n)}return s}_getPackedGroup(e,t,i,r,n){if(t.length<2)return null;let s=t.map(e=>e.getBufferLayout(i)),o=s[0].stepMode,a=Math.max(1,t[0].numInstances),l=r&&t.every(e=>e.isConstant);for(let e=0;e<t.length;e++){let i=t[e],l=i.getAccessor(),u=l.size*l.bytesPerElement;if(n[i.id]||i.settings.isIndexed||i.settings.noAlloc||i.doublePrecision||this.isTransitionAttribute(i.id)||s[e].stepMode!==o||i.numInstances!==t[0].numInstances||0!==(l.offset||0)||0!==(l.vertexOffset||0)||c(l)!==u||r&&(i.isConstant?!i.getConstantValue()||i.getConstantValue().byteLength<u:!ArrayBuffer.isView(i.value)||i.value.byteLength<a*u))return null}let u={},h=[],d=0;for(let e=0;e<t.length;e++){let i=t[e];for(let t of(d=ee(d),u[i.id]=d,s[e].attributes||[]))h.push({...t,byteOffset:d+(t.byteOffset||0)});d+=c(i.getAccessor())}return{id:e,attributes:t,byteStride:d=ee(d),byteOffsets:u,rowCount:a,layout:{name:e,byteStride:l?0:d,stepMode:o,attributes:h}}}_getBufferLayouts(e,t,i){let r=[],n=new Set,s=new Set;for(let e of t.values())for(let t of e.attributes)s.add(t.id);for(let o of Object.values(e)){let e=o.settings.bufferGroup,a=e&&t.get(e);a&&s.has(o.id)?n.has(a.id)||(r.push(a.layout),n.add(a.id)):r.push(o.getBufferLayout(i))}return r}_getPackedBuffer(e,t){let i=JSON.stringify({byteStride:e.layout.byteStride,attributes:e.layout.attributes}),r=this.packedBuffers[e.id];if(r&&r.layoutKey===i||(t=!0),t){r&&(r.packed.destroy(),delete this.packedBuffers[e.id]);let t=this._interleavePackedGroup(e);return this.packedBuffers[e.id]={packed:t,layoutKey:i},t.buffer}if(!r)throw Error(`Attribute buffer group ${e.id} has no packed buffer`);return r.packed.buffer}_interleavePackedGroup(e){let t=function(...e){if(0===e.length)throw Error("interleave() requires at least one input");return 1===e.length?(0,G.uy)(e[0]):new H(e.map(G.uy)).output}(...e.attributes.map(t=>this._getInterleaveInput(e,t)));return!function(e,t){let i=function(e){let t=new Set;return function e(t,i,r){var n;if((n=t)instanceof G.GL||n instanceof Z)return void i.add(t);if(!(!t||"object"!=typeof t||r.has(t))){if(r.add(t),Array.isArray(t)){for(let n of t)e(n,i,r);return}if(function(e){let t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}(t))for(let n of Object.values(t))e(n,i,r)}}(e,t,new Set),Array.from(t)}(t);for(let t of i)t.evaluateSync(e);var r=i;let n=new Set(r.flatMap(X)),s=new Set;for(let e of r)!function e(t,i){if(t instanceof Z){for(let r of t.gpuDataEvaluators)e(r,i);return}let r=t.source;if(r){if(r instanceof G.GL){i.has(r)||(i.add(r),e(r,i));return}for(let t of r.dependencies)i.has(t)||(i.add(t),e(t,i))}}(e,s);for(let e of s)e.evaluated&&!n.has(e.buffer)&&e.destroy()}(this.device,t),t}_getInterleaveInput(e,t){let i=c(t.getAccessor()),r=e.byteOffsets[t.id];if(et(`${e.id}.${t.id} rowByteLength`,i),et(`${e.id}.${t.id} groupByteOffset`,r),t.isConstant){let r=t.getConstantValue();if(!r)throw Error(`Attribute group ${e.id} is missing constant value ${t.id}`);return et(`${e.id}.${t.id} constant byteOffset`,r.byteOffset),new G.GL({id:t.id,type:"uint32",size:i/4,isConstant:!0,value:new Uint32Array(r.buffer,r.byteOffset,i/Uint32Array.BYTES_PER_ELEMENT)})}let n=t.getBuffer(),s=t.byteOffset,o=t.getAccessor().stride||i;if(et(`${e.id}.${t.id} byteOffset`,s),et(`${e.id}.${t.id} stride`,o),!n)throw Error(`Attribute group ${e.id} cannot interleave missing buffer ${t.id}`);return new G.GL({id:t.id,type:"uint32",size:i/4,offset:s,stride:o,length:e.rowCount,buffer:n})}}function ee(e){return 4*Math.ceil(e/4)}function et(e,t){if(t%4!=0)throw Error(`Attribute buffer groups require 32-bit alignment: ${e}=${t}`)}var ei=i(82611),er=i(97253),en=i(8926);function es(e,t=[],i=0){let r=Math.fround(e),n=e-r;return t[i]=r,t[i+1]=n,t}let eo=`\

layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,ea=`\
struct Fp64F32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent.
fn fp64_decode_f32_bits(bits: u32) -> Fp64F32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64F32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64F32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64F32Bits(sign, i32(exponentBits) - 150, 0x800000u | fraction, false, false, false);
}

fn fp64_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return exactSign << 31u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;

  // A normal two-sum/two-product residual never needs a shift this large.
  // This guard gives deterministic underflow behavior outside that contract.
  if (exactShift >= 64 || highShift >= 64) {
    return exactSign << 31u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let lowBits = fp64_make_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  return vec2u(highBits, lowBits);
}

fn fp64_two_sum_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u((a.sign & b.sign) << 31u, 0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = select(
    b.baseExponent - a.baseExponent,
    a.baseExponent - b.baseExponent,
    a.baseExponent >= b.baseExponent
  );

  // Beyond half an ulp, rounding cannot change the larger operand. Returning
  // the smaller operand intact also avoids an unbounded integer alignment.
  // At a power-of-two boundary the spacing below the larger operand is half
  // the spacing above it, so an opposite-sign gap-25 operand can still change
  // the rounded high limb. Gap 26 is the first universally safe early-out.
  if (exponentDifference > 25) {
    if (fp64_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u, 0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_accumulator_bits(resultSign, resultMagnitude, commonBaseExponent);
}

fn fp64_two_sum_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_multiply_significands(a: u32, b: u32) -> vec2u {
  let aLow = a & 0xffffu;
  let aHigh = a >> 16u;
  let bLow = b & 0xffffu;
  let bHigh = b >> 16u;
  let lowProduct = aLow * bLow;
  let crossProduct = aLow * bHigh + aHigh * bLow;
  let highProduct = aHigh * bHigh;

  var result = vec2u(0u, lowProduct);
  result = fp64_u64_add(
    result,
    fp64_u64_shift_left(vec2u(0u, crossProduct), 16u)
  );
  result = fp64_u64_add(result, vec2u(highProduct, 0u));
  return result;
}

fn fp64_two_prod_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);
  let resultSign = a.sign ^ b.sign;

  if (a.isNan || b.isNan || ((a.isZero || b.isZero) && (a.isInf || b.isInf))) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    return vec2u((resultSign << 31u) | 0x7f800000u, resultSign << 31u);
  }
  if (a.isZero || b.isZero) {
    return vec2u(resultSign << 31u, resultSign << 31u);
  }

  let magnitude = fp64_multiply_significands(a.significand, b.significand);
  return fp64_split_accumulator_bits(
    resultSign,
    magnitude,
    a.baseExponent + b.baseExponent
  );
}

fn fp64_two_prod_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_prod_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_round_add_integer(a: f32, b: f32) -> f32 {
  return fp64_two_sum_integer(a, b).x;
}

fn fp64_round_mul_integer(a: f32, b: f32) -> f32 {
  return fp64_two_prod_integer(a, b).x;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_finite_exponent(value: Fp64F32Bits) -> i32 {
  let mostSignificantBit = 31u - countLeadingZeros(value.significand);
  return value.baseExponent + i32(mostSignificantBit);
}

fn fp64_scale_f32_integer(value: f32, exponent: i32) -> f32 {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(value));
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return value;
  }
  let resultBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent + exponent
  );
  return bitcast<f32>(resultBits);
}

// Divide normalized significands so the hardware operation cannot overflow,
// underflow, or flush a subnormal result. Reapply the exponent with integer
// packing, which also produces subnormal correction limbs without relying on
// floating-point arithmetic to preserve them.
fn fp64_divide_f32_integer(aValue: f32, bValue: f32) -> f32 {
  let a = fp64_decode_f32_bits(bitcast<u32>(aValue));
  let b = fp64_decode_f32_bits(bitcast<u32>(bValue));
  if (a.isZero || b.isZero || a.isInf || b.isInf || a.isNan || b.isNan) {
    return aValue / bValue;
  }

  let aMostSignificantBit = 31u - countLeadingZeros(a.significand);
  let bMostSignificantBit = 31u - countLeadingZeros(b.significand);
  let normalizedABits = fp64_make_f32_bits_from_u64(
    a.sign,
    vec2u(0u, a.significand),
    -i32(aMostSignificantBit)
  );
  let normalizedBBits = fp64_make_f32_bits_from_u64(
    b.sign,
    vec2u(0u, b.significand),
    -i32(bMostSignificantBit)
  );
  let normalizedQuotient = bitcast<f32>(normalizedABits) / bitcast<f32>(normalizedBBits);
  let quotient = fp64_decode_f32_bits(bitcast<u32>(normalizedQuotient));
  let exponentShift =
    a.baseExponent + i32(aMostSignificantBit) -
    b.baseExponent - i32(bMostSignificantBit);
  let quotientBits = fp64_make_f32_bits_from_u64(
    quotient.sign,
    vec2u(0u, quotient.significand),
    quotient.baseExponent + exponentShift
  );
  return bitcast<f32>(quotientBits);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn split(a: f32) -> vec2f {
  let aBits = bitcast<u32>(a);
  let decoded = fp64_decode_f32_bits(aBits);
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return vec2f(a, 0.0);
  }

  var roundedHigh = decoded.significand >> 12u;
  let remainder = decoded.significand & 0xfffu;
  if (remainder > 0x800u || (remainder == 0x800u && (roundedHigh & 1u) == 1u)) {
    roundedHigh = roundedHigh + 1u;
  }
  var highMagnitude = vec2u(0u, roundedHigh << 12u);
  var highBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    highMagnitude,
    decoded.baseExponent
  );
  // Rounding the high limb of a maximum-exponent value can overflow even
  // though the original value is finite. Truncate only in that boundary case
  // so split remains an exact finite decomposition.
  if (fp64_decode_f32_bits(highBits).isInf) {
    roundedHigh = decoded.significand >> 12u;
    highMagnitude = vec2u(0u, roundedHigh << 12u);
    highBits = fp64_make_f32_bits_from_u64(
      decoded.sign,
      highMagnitude,
      decoded.baseExponent
    );
  }
  let lowBits = fp64_make_residual_f32_bits(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent,
    highBits
  );
  return vec2f(bitcast<f32>(highBits), bitcast<f32>(lowBits));
}

fn split2(a: vec2f) -> vec2f {
  var result = split(a.x);
  result.y = fp64_round_add_integer(result.y, a.y);
  return result;
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn quickTwoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}
#endif

fn twoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let bBits = bitcast<u32>(b) ^ 0x80000000u;
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn twoSqr(a: f32) -> vec2f {
  return fp64_two_prod_integer(a, a);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  return fp64_two_prod_integer(a, b);
}
#endif

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var sum = fp64_two_sum_integer(a.x, b.x);
  let lowSum = fp64_two_sum_integer(a.y, b.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.x);
  sum = fp64_two_sum_integer(sum.x, sum.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.y);
  return fp64_two_sum_integer(sum.x, sum.y);
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  let negatedB = vec2f(
    bitcast<f32>(bitcast<u32>(b.x) ^ 0x80000000u),
    bitcast<f32>(bitcast<u32>(b.y) ^ 0x80000000u)
  );
  return sum_fp64(a, negatedB);
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var product = fp64_two_prod_integer(a.x, b.x);
  let crossProduct1 = fp64_round_mul_integer(a.x, b.y);
  product.y = fp64_round_add_integer(product.y, crossProduct1);
  product = fp64_two_sum_integer(product.x, product.y);
  let crossProduct2 = fp64_round_mul_integer(a.y, b.x);
  product.y = fp64_round_add_integer(product.y, crossProduct2);
  return fp64_two_sum_integer(product.x, product.y);
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_scale_fp64_integer(value: vec2f, exponent: i32) -> vec2f {
  let high = fp64_scale_f32_integer(value.x, exponent);
  let low = fp64_scale_f32_integer(value.y, exponent);
  return sum_fp64(vec2f(high, 0.0), vec2f(low, 0.0));
}

fn fp64_div_fp64_normalized(a: vec2f, b: vec2f) -> vec2f {
  let quotientHigh = fp64_divide_f32_integer(a.x, b.x);
  var quotient = vec2f(quotientHigh, 0.0);

  let remainder = sub_fp64(a, mul_fp64(b, quotient));
  let quotientLow = fp64_divide_f32_integer(remainder.x, b.x);
  quotient = sum_fp64(quotient, vec2f(quotientLow, 0.0));

  let secondRemainder = sub_fp64(a, mul_fp64(b, quotient));
  let correction = fp64_divide_f32_integer(secondRemainder.x, b.x);
  return sum_fp64(quotient, vec2f(correction, 0.0));
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let decodedA = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedB = fp64_decode_f32_bits(bitcast<u32>(b.x));
  if (
    decodedA.isZero || decodedB.isZero ||
    decodedA.isInf || decodedB.isInf ||
    decodedA.isNan || decodedB.isNan
  ) {
    return fp64_div_fp64_normalized(a, b);
  }

  let exponentA = fp64_f32_finite_exponent(decodedA);
  let exponentB = fp64_f32_finite_exponent(decodedB);
  // Correct the quotient near unity so b * q and the remainder stay clear of
  // both f32 underflow and overflow. The exponent difference is applied once.
  let normalizedA = fp64_scale_fp64_integer(a, -exponentA);
  let normalizedB = fp64_scale_fp64_integer(b, -exponentB);
  let normalizedQuotient = fp64_div_fp64_normalized(normalizedA, normalizedB);
  return fp64_scale_fp64_integer(normalizedQuotient, exponentA - exponentB);
}

fn fp64_sqrt_fp64_normalized(a: vec2f) -> vec2f {
  let estimate = sqrt(a.x);
  let difference = sub_fp64(a, fp64_two_prod_integer(estimate, estimate)).x;
  let denominator = fp64_round_add_integer(estimate, estimate);
  let correction = fp64_divide_f32_integer(difference, denominator);
  return sum_fp64(vec2f(estimate, 0.0), vec2f(correction, 0.0));
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedLow = fp64_decode_f32_bits(bitcast<u32>(a.y));
  if (decoded.isZero && decodedLow.isZero) {
    return vec2f(0.0, 0.0);
  }
  if (decoded.sign == 1u) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  if (decoded.isInf || decoded.isNan) {
    return fp64_sqrt_fp64_normalized(a);
  }
  let exponent = fp64_f32_finite_exponent(decoded);
  // An even scale lets the final square-root rescale use an integer exponent.
  let evenExponent = exponent - (exponent & 1);
  let normalizedA = fp64_scale_fp64_integer(a, -evenExponent);
  let normalizedRoot = fp64_sqrt_fp64_normalized(normalizedA);
  return fp64_scale_fp64_integer(normalizedRoot, evenExponent / 2);
}
#endif
`,el={name:"fp64arithmetic",source:`\
struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64Bits {
  sign: u32,
  exponent: i32,
  significand: vec2u,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}
#endif

fn fp64_u64_is_zero(value: vec2u) -> bool {
  return value.x == 0u && value.y == 0u;
}

fn fp64_u64_compare(a: vec2u, b: vec2u) -> i32 {
  if (a.x != b.x) {
    return select(-1, 1, a.x > b.x);
  }
  if (a.y != b.y) {
    return select(-1, 1, a.y > b.y);
  }
  return 0;
}

fn fp64_u64_add(a: vec2u, b: vec2u) -> vec2u {
  let low = a.y + b.y;
  let carry = select(0u, 1u, low < a.y);
  return vec2u(a.x + b.x + carry, low);
}

fn fp64_u64_sub(a: vec2u, b: vec2u) -> vec2u {
  let borrow = select(0u, 1u, a.y < b.y);
  return vec2u(a.x - b.x - borrow, a.y - b.y);
}

fn fp64_u64_shift_left(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u((value.x << shift) | (value.y >> (32u - shift)), value.y << shift);
  }
  if (shift == 32u) {
    return vec2u(value.y, 0u);
  }
  if (shift < 64u) {
    return vec2u(value.y << (shift - 32u), 0u);
  }
  return vec2u(0u);
}

fn fp64_u64_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u(value.x >> shift, (value.y >> shift) | (value.x << (32u - shift)));
  }
  if (shift == 32u) {
    return vec2u(0u, value.x);
  }
  if (shift < 64u) {
    return vec2u(0u, value.x >> (shift - 32u));
  }
  return vec2u(0u);
}

fn fp64_u64_get_bit(value: vec2u, bitIndex: u32) -> bool {
  if (bitIndex >= 64u) {
    return false;
  }
  if (bitIndex >= 32u) {
    return ((value.x >> (bitIndex - 32u)) & 1u) != 0u;
  }
  return ((value.y >> bitIndex) & 1u) != 0u;
}

fn fp64_u64_has_bits_below(value: vec2u, bitCount: u32) -> bool {
  if (bitCount == 0u) {
    return false;
  }
  if (bitCount >= 64u) {
    return !fp64_u64_is_zero(value);
  }
  if (bitCount > 32u) {
    let highBitCount = bitCount - 32u;
    let highMask = (1u << highBitCount) - 1u;
    return value.y != 0u || (value.x & highMask) != 0u;
  }
  if (bitCount == 32u) {
    return value.y != 0u;
  }
  let lowMask = (1u << bitCount) - 1u;
  return (value.y & lowMask) != 0u;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_u64_shift_right_sticky(value: vec2u, shift: u32) -> vec2u {
  var shifted = fp64_u64_shift_right(value, shift);
  if (fp64_u64_has_bits_below(value, shift)) {
    shifted.y = shifted.y | 1u;
  }
  return shifted;
}
#endif

fn fp64_u64_count_leading_zeros(value: vec2u) -> u32 {
  if (value.x != 0u) {
    return countLeadingZeros(value.x);
  }
  return 32u + countLeadingZeros(value.y);
}

fn fp64_round_shift_right_to_u32(value: vec2u, shift: u32) -> u32 {
  if (shift == 0u) {
    return value.y;
  }

  let truncated = fp64_u64_shift_right(value, shift);
  var rounded = truncated.y;
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded & 1u) == 1u)) {
    rounded = rounded + 1u;
  }
  return rounded;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_round_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }

  var rounded = fp64_u64_shift_right(value, shift);
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded.y & 1u) == 1u)) {
    rounded = fp64_u64_add(rounded, vec2u(0u, 1u));
  }
  return rounded;
}
#endif

fn fp64_make_f32_bits_from_u64(sign: u32, significand: vec2u, baseExponent: i32) -> u32 {
  if (fp64_u64_is_zero(significand)) {
    return sign << 31u;
  }

  let leadingZeros = fp64_u64_count_leading_zeros(significand);
  let mostSignificantBit = 63u - leadingZeros;
  var exponent = baseExponent + i32(mostSignificantBit);

  if (exponent > 127) {
    return (sign << 31u) | 0x7f800000u;
  }

  if (exponent >= -126) {
    let shift = i32(mostSignificantBit) - 23;
    var significand24: u32;
    if (shift > 0) {
      significand24 = fp64_round_shift_right_to_u32(significand, u32(shift));
    } else {
      significand24 = fp64_u64_shift_left(significand, u32(-shift)).y;
    }

    if (significand24 >= 0x1000000u) {
      significand24 = significand24 >> 1u;
      exponent = exponent + 1;
      if (exponent > 127) {
        return (sign << 31u) | 0x7f800000u;
      }
    }

    return (sign << 31u) | (u32(exponent + 127) << 23u) | (significand24 & 0x7fffffu);
  }

  let scaleExponent = baseExponent + 149;
  var mantissa: u32;
  if (scaleExponent >= 0) {
    mantissa = fp64_u64_shift_left(significand, u32(scaleExponent)).y;
  } else {
    mantissa = fp64_round_shift_right_to_u32(significand, u32(-scaleExponent));
  }

  if (mantissa >= 0x800000u) {
    return (sign << 31u) | 0x00800000u;
  }
  return (sign << 31u) | mantissa;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_decode_bits(bits: vec2u) -> Fp64Bits {
  let sign = bits.x >> 31u;
  let exponentBits = (bits.x >> 20u) & 0x7ffu;
  let fractionHigh = bits.x & 0xfffffu;
  let fractionLow = bits.y;
  let fraction = vec2u(fractionHigh, fractionLow);

  if (exponentBits == 0x7ffu) {
    let isInf = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, 0, vec2u(0u), false, isInf, !isInf);
  }

  if (exponentBits == 0u) {
    let isZero = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, -1022, fraction, isZero, false, false);
  }

  return Fp64Bits(sign, i32(exponentBits) - 1023, vec2u((1u << 20u) | fractionHigh, fractionLow), false, false, false);
}

fn fp64_finite_magnitude_compare(a: Fp64Bits, b: Fp64Bits) -> i32 {
  if (a.exponent != b.exponent) {
    return select(-1, 1, a.exponent > b.exponent);
  }
  return fp64_u64_compare(a.significand, b.significand);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64RawF32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent. This shared
// integer representation lets normalization remain independent of the
// selected double-single arithmetic implementation.
fn fp64_decode_raw_f32_bits(bits: u32) -> Fp64RawF32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64RawF32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64RawF32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64RawF32Bits(
    sign,
    i32(exponentBits) - 150,
    0x800000u | fraction,
    false,
    false,
    false
  );
}

fn fp64_raw_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_raw_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_raw_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return 0u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;
  if (exactShift >= 64 || highShift >= 64) {
    return 0u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_raw_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let rawLowBits = fp64_make_raw_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  let lowBits = select(rawLowBits, 0u, (rawLowBits & 0x7fffffffu) == 0u);
  if ((highBits & 0x7fffffffu) == 0u && (lowBits & 0x7fffffffu) == 0u) {
    return vec2u(0u);
  }
  return vec2u(highBits, lowBits);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
// Round an arithmetic accumulator to binary64 before splitting it. The
// aligned add/subtract paths retain three guard bits plus a sticky bit, which
// is sufficient for round-to-nearest-even at the binary64 boundary.
fn fp64_split_binary64_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }

  let mostSignificantBit = 63u - fp64_u64_count_leading_zeros(magnitude);
  let exponent = baseExponent + i32(mostSignificantBit);
  if (exponent > 1023) {
    return vec2u((sign << 31u) | 0x7f800000u, 0u);
  }

  var roundedMagnitude = magnitude;
  var roundedBaseExponent = baseExponent;
  if (exponent >= -1022) {
    if (mostSignificantBit > 52u) {
      let shift = mostSignificantBit - 52u;
      roundedMagnitude = fp64_round_shift_right(magnitude, shift);
      roundedBaseExponent = baseExponent + i32(shift);
    }
  } else {
    let shift = -1074 - baseExponent;
    if (shift > 0) {
      roundedMagnitude = fp64_round_shift_right(magnitude, u32(shift));
      roundedBaseExponent = -1074;
    }
  }

  if (fp64_u64_is_zero(roundedMagnitude)) {
    return vec2u(0u);
  }
  return fp64_split_raw_accumulator_bits(sign, roundedMagnitude, roundedBaseExponent);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_add_raw_f32_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_raw_f32_bits(aBits);
  let b = fp64_decode_raw_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = abs(a.baseExponent - b.baseExponent);
  if (exponentDifference > 25) {
    if (fp64_raw_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_raw_accumulator_bits(
    resultSign,
    resultMagnitude,
    commonBaseExponent
  );
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_add_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_sub_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_add_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

fn fp64_sub_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

// Subtract two raw binary64 values and round the exact result once to f32.
// The input words are canonical high/low words: .x contains sign/exponent/high
// fraction bits, and .y contains the low 32 fraction bits.
fn sub_fp64u32_to_f32_bits(aBits: vec2u, bBits: vec2u) -> u32 {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return 0x7fc00000u;
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return (a.sign << 31u) | 0x7f800000u;
    }
    return 0x7fc00000u;
  }
  if (a.isInf) {
    return (a.sign << 31u) | 0x7f800000u;
  }
  if (b.isInf) {
    return (bSubtractionSign << 31u) | 0x7f800000u;
  }
  if (a.isZero && b.isZero) {
    return select(0u, 0x80000000u, a.sign == 1u && b.sign == 0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return 0u;
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_f32_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_f32_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_f32(aBits: vec2u, bBits: vec2u) -> f32 {
  return bitcast<f32>(sub_fp64u32_to_f32_bits(aBits, bBits));
}

// Subtract two raw binary64 values, round once to binary64, then split the
// result into normalized f32 limbs. Finite results must fit within the f32
// exponent range; larger magnitudes map to infinity and smaller magnitudes
// map to zero. The input words use canonical high/low word order.
fn sub_fp64u32_to_fp64_bits(aBits: vec2u, bBits: vec2u) -> vec2u {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
    }
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf) {
    return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
  }
  if (b.isInf) {
    return vec2u((bSubtractionSign << 31u) | 0x7f800000u, 0u);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return vec2u(0u);
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_fp64_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_fp64(aBits: vec2u, bBits: vec2u) -> vec2f {
  let resultBits = sub_fp64u32_to_fp64_bits(aBits, bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}
#endif

#ifdef LUMA_FP64_INTEGER_ARITHMETIC
${ea}
#else
fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
#endif
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_bits_is_nan(bits: u32) -> bool {
  return (bits & 0x7fffffffu) > 0x7f800000u;
}

fn fp64_f32_bits_is_inf(bits: u32) -> bool {
  return (bits & 0x7fffffffu) == 0x7f800000u;
}

fn fp64_compare_f32_bits(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == 0u && bMagnitude == 0u) {
    return 0;
  }
  let aSign = aBits >> 31u;
  let bSign = bBits >> 31u;
  if (aSign != bSign) {
    return select(1, -1, aSign == 1u);
  }
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  let magnitudeComparison = select(-1, 1, aMagnitude > bMagnitude);
  return select(magnitudeComparison, -magnitudeComparison, aSign == 1u);
}

// Normalize an arbitrary pair of finite f32 limbs with integer accumulation.
// This is independent of LUMA_FP64_INTEGER_ARITHMETIC and canonicalizes every
// representation of zero to vec2f(+0.0, +0.0).
fn normalize_fp64(value: vec2f) -> vec2f {
  let resultBits = fp64_add_raw_f32_bits(bitcast<u32>(value.x), bitcast<u32>(value.y));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn is_nan_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  return fp64_f32_bits_is_nan(bitcast<u32>(normalized.x)) ||
    fp64_f32_bits_is_nan(bitcast<u32>(normalized.y));
}

fn is_finite_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  return !fp64_f32_bits_is_nan(highBits) && !fp64_f32_bits_is_nan(lowBits) &&
    !fp64_f32_bits_is_inf(highBits) && !fp64_f32_bits_is_inf(lowBits);
}

// Returns -1, 0, or 1. NaN is unordered and returns 0; call is_nan_fp64 or
// is_finite_fp64 first when 0 must mean a finite zero.
fn sign_fp64(value: vec2f) -> i32 {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  if (fp64_f32_bits_is_nan(highBits) || fp64_f32_bits_is_nan(lowBits)) {
    return 0;
  }
  if ((highBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (highBits >> 31u) == 1u);
  }
  if ((lowBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (lowBits >> 31u) == 1u);
  }
  return 0;
}

// Compares double-single values and returns -1, 0, or 1. NaN is unordered
// and returns 0; callers that require equality semantics must first check
// is_nan_fp64 or is_finite_fp64.
fn compare_fp64(a: vec2f, b: vec2f) -> i32 {
  let normalizedA = normalize_fp64(a);
  let normalizedB = normalize_fp64(b);
  let aHighBits = bitcast<u32>(normalizedA.x);
  let aLowBits = bitcast<u32>(normalizedA.y);
  let bHighBits = bitcast<u32>(normalizedB.x);
  let bLowBits = bitcast<u32>(normalizedB.y);
  if (fp64_f32_bits_is_nan(aHighBits) || fp64_f32_bits_is_nan(aLowBits) ||
      fp64_f32_bits_is_nan(bHighBits) || fp64_f32_bits_is_nan(bLowBits)) {
    return 0;
  }
  let highComparison = fp64_compare_f32_bits(aHighBits, bHighBits);
  if (highComparison != 0) {
    return highComparison;
  }
  return fp64_compare_f32_bits(aLowBits, bLowBits);
}
#endif
`,fs:eo,vs:eo,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:"f32",SPLIT:"f32"},fp64ify:es,fp64LowPart:function(e){return e-Math.fround(e)},fp64ifyMatrix4:function(e){let t=new Float32Array(32);for(let i=0;i<4;++i)for(let r=0;r<4;++r){let n=4*i+r;es(e[4*r+i],t,2*n)}return t}};function eu(e){let{source:t,target:i,start:r=0,size:n,getData:s}=e,o=e.end||i.length,a=t.length,l=o-r;if(a>l)return void i.set(t.subarray(0,l),r);if(i.set(t,r),!s)return;let u=a;for(;u<l;){let e=s(u,t);for(let t=0;t<n;t++)i[r+u]=e[t]||0,u++}}function ec(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw Error(`No defined attribute type for size "${e}"`)}}function eh(e){switch(e){case 1:return"float32";case 2:return"float32x2";case 3:return"float32x3";case 4:return"float32x4";default:throw Error("invalid type size")}}function ed(e){e.push(e.shift())}function ef({device:e,source:t,target:i}){return(!i||i.byteLength<t.byteLength)&&(i?.destroy(),i=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),i}function ep({device:e,buffer:t,attribute:i,fromLength:r,toLength:n,fromStartIndices:s,getData:o=e=>e}){let a=i.isDoublePrecisionBuffer?2:1,l=i.size*a,u=i.byteOffset,c=i.settings.bytesPerElement<4?u/i.settings.bytesPerElement*4:u,h=i.startIndices,d=s&&h,f=i.isConstant;if(!d&&t&&r>=n)return t;let p=i.value instanceof Float64Array?Float32Array:i.value.constructor,g=f?i.value:new p(i.getBuffer().readSyncWebGL(u,n*p.BYTES_PER_ELEMENT).buffer);if(i.settings.normalized&&!f){let e=o;o=(t,r)=>i.normalizeConstant(e(t,r))}let m=f?(e,t)=>o(g,t):(e,t)=>o(g.subarray(e+u,e+u+l),t),v=new Float32Array(t?t.readSyncWebGL(c,4*r).buffer:0),y=new Float32Array(n);return!function({source:e,target:t,size:i,getData:r,sourceStartIndices:n,targetStartIndices:s}){if(!n||!s)return eu({source:e,target:t,size:i,getData:r});let o=0,a=0,l=r&&((e,t)=>r(e+a,t)),u=Math.min(n.length,s.length);for(let r=1;r<u;r++){let u=n[r]*i,c=s[r]*i;eu({source:e.subarray(o,u),target:t,start:a,end:c,size:i,getData:l}),o=u,a=c}a<t.length&&eu({source:[],target:t,start:a,size:i,getData:l})}({source:v,target:y,sourceStartIndices:s,targetStartIndices:h,size:l,getData:m}),(!t||t.byteLength<y.byteLength+c)&&(t?.destroy(),t=e.createBuffer({byteLength:y.byteLength+c,usage:35050})),t.write(y,c),t}var eg=i(99585);class em{constructor({device:e,attribute:t,timeline:i}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new eg.A(i),this.attribute=t,this.attributeInTransition=function(e){let{device:t,settings:i,value:r}=e,n=new P(t,i);return n.setData({value:r instanceof Float64Array?new Float64Array(0):new Float32Array(0),normalized:i.normalized}),n}(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,i=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=function(e,t){let{settings:i,value:r,size:n}=e,s=e.isDoublePrecisionBuffer?2:1,o=0,{shaderAttributes:a}=e.settings;if(a)for(let e of Object.values(a))o=Math.max(o,e.vertexOffset??0);return(i.noAlloc?r.length:(t+o)*n)*s}(this.attribute,t),this.transition.start({...e,duration:i})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){let{stride:t}=this.attributeInTransition.getAccessor();this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value,stride:t})}cancel(){this.transition.cancel()}delete(){for(let e of(this.cancel(),this.buffers))e.destroy();this.buffers.length=0}}class ev extends em{constructor({device:e,attribute:t,timeline:i}){super({device:e,attribute:t,timeline:i}),this.type="interpolation",this.transform=function(e,t){let i=t.size,r=ec(i),n=eh(i),s=t.getBufferLayout();return ex(t)?new en.p(e,{vs:e_,bufferLayout:[{name:"aFrom",byteStride:8*i,attributes:[{attribute:"aFrom",format:n,byteOffset:0},{attribute:"aFrom64Low",format:n,byteOffset:4*i}]},{name:"aTo",byteStride:8*i,attributes:[{attribute:"aTo",format:n,byteOffset:0},{attribute:"aTo64Low",format:n,byteOffset:4*i}]}],modules:[el,ey],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:i},moduleSettings:{},varyings:["vCurrent","vCurrent64Low"],bufferMode:35980,disableWarnings:!0}):new en.p(e,{vs:eb,bufferLayout:[{name:"aFrom",format:n},{name:"aTo",format:s.attributes[0].format}],modules:[ey],defines:{ATTRIBUTE_TYPE:r},varyings:["vCurrent"],disableWarnings:!0})}(e,t)}start(e,t){let i=this.currentLength,r=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0)return void this.transition.cancel();let{buffers:n,attribute:s}=this;ed(n),n[0]=ep({device:this.device,buffer:n[0],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:r,getData:e.enter}),n[1]=ef({device:this.device,source:n[0],target:n[1]}),this.setBuffer(n[1]);let{transform:o}=this,a=o.model,l=Math.floor(this.currentLength/s.size);ex(s)&&(l/=2),a.setVertexCount(l),s.isConstant?(a.setAttributes({aFrom:n[0]}),a.setConstantAttributes({aTo:s.value})):a.setAttributes({aFrom:n[0],aTo:s.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:n[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:i}=this.transition,r=i/e;t&&(r=t(r));let{model:n}=this.transform,s={time:r};n.shaderInputs.setProps({interpolation:s}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}}let ey={name:"interpolation",vs:`\
layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:"f32"}},eb=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,e_=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function ex(e){return e.isDoublePrecisionBuffer}class ew extends em{constructor({device:e,attribute:t,timeline:i}){var r,n;super({device:e,attribute:t,timeline:i}),this.type="spring",this.texture=e.createTexture({data:new Uint8Array(4),format:"rgba8unorm",width:1,height:1}),this.framebuffer=(r=e,n=this.texture,r.createFramebuffer({id:"spring-transition-is-transitioning-framebuffer",width:1,height:1,colorAttachments:[n]})),this.transform=function(e,t){let i=ec(t.size),r=eh(t.size);return new en.p(e,{vs:eS,fs:eC,bufferLayout:[{name:"aPrev",format:r},{name:"aCur",format:r},{name:"aTo",format:t.getBufferLayout().attributes[0].format}],varyings:["vNext"],modules:[eP],defines:{ATTRIBUTE_TYPE:i},parameters:{depthCompare:"always",blendColorOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}})}(e,t)}start(e,t){let i=this.currentLength,r=this.currentStartIndices;super.start(e,t);let{buffers:n,attribute:s}=this;for(let t=0;t<2;t++)n[t]=ep({device:this.device,buffer:n[t],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:r,getData:e.enter});n[2]=ef({device:this.device,source:n[0],target:n[2]}),this.setBuffer(n[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/s.size)),s.isConstant?o.setConstantAttributes({aTo:s.value}):o.setAttributes({aTo:s.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:i,transition:r}=this,n=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let s={stiffness:n.stiffness,damping:n.damping};t.model.shaderInputs.setProps({spring:s}),t.run({framebuffer:i,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),ed(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(i)[0]>0||r.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}}let eP={name:"spring",vs:`\
layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:"f32",stiffness:"f32"}},eS=`\
#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,eC=`\
#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`,eE={interpolation:ev,spring:ew};class eL{constructor(e,{id:t,timeline:i}){if(!e)throw Error("AttributeTransitionManager is constructed without device");this.id=t,this.device=e,this.timeline=i,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:i}){for(let r in this.numInstances=i||1,e){let i=e[r],n=i.getTransitionSetting(t);n&&this._updateAttribute(r,i,n)}for(let i in this.transitions){let r=e[i];r&&r.getTransitionSetting(t)||this._removeTransition(i)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let i=this.transitions[t];i.inProgress&&(e[t]=i.attributeInTransition)}return e}run(){if(0===this.numInstances)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,i){let r=this.transitions[e],n=!r||r.type!==i.type;if(n){r&&this._removeTransition(e);let s=eE[i.type];s?this.transitions[e]=new s({attribute:t,timeline:this.timeline,device:this.device}):(f.A.error(`unsupported transition type '${i.type}'`)(),n=!1)}(n||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(i,this.numInstances))}}let eA="attributeManager.invalidate";class eT{constructor(e,{id:t="attribute-manager",stats:i,timeline:r}={}){this.mergeBoundsMemoized=(0,ei.A)(d._Z),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=i,this.attributeTransitionManager=new eL(e,{id:`${t}-transitions`,timeline:r}),this.attributeBufferGroups="webgpu"===e.type?new J(e,{id:t,isTransitionAttribute:e=>this.attributeTransitionManager.hasAttribute(e)}):null,Object.seal(this)}finalize(){for(let e in this.attributeBufferGroups?.finalize(),this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:"instance"})}remove(e){for(let t of e)void 0!==this.attributes[t]&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let i=this._invalidateTrigger(e,t);(0,er.A)(eA,this,e,i)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);(0,er.A)(eA,this,"all")}update({data:e,numInstances:t,startIndices:i=null,transitions:r,props:n={},buffers:s={},context:o={}}){let a=!1;for(let r in(0,er.A)("attributeManager.updateStart",this),this.stats&&this.stats.get("Update Attributes").timeStart(),this.attributes){let l=this.attributes[r],u=l.settings.accessor;l.startIndices=i,l.numInstances=t,n[r]&&f.A.removed(`props.${r}`,`data.attributes.${r}`)(),l.setExternalBuffer(s[r])||l.setBinaryValue("string"==typeof u?s[u]:void 0,e.startIndices)||"string"==typeof u&&!s[u]&&l.setConstantValue(o,n[u])||l.needsUpdate()&&(a=!0,this._updateAttribute({attribute:l,numInstances:t,data:e,props:n,context:o})),this.needsRedraw=this.needsRedraw||l.needsRedraw()}a&&(0,er.A)("attributeManager.updateEnd",this,t),this.stats&&(this.stats.get("Update Attributes").timeEnd(),a&&this.stats.get("Attributes updated").incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:r})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:i}=this,r={...i.getAttributes()};for(let n in t){let s=t[n];s.needsRedraw(e)&&!i.hasAttribute(n)&&(r[n]=s)}return r}getBufferLayouts(e){return this.hasBufferGroups()?this.attributeBufferGroups.getBufferLayouts(this.getAttributes(),e):Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}hasBufferGroups(){return!!this.attributeBufferGroups?.hasGroups(this.attributes)}getBufferGroupBindings(e,t,i={}){return this.attributeBufferGroups?this.attributeBufferGroups.getBindings(this.getAttributes(),e,t,i):{bufferLayouts:this.getBufferLayouts(t),buffers:{},groupedAttributeIds:new Set}}_add(e,t){for(let i in e){let r=e[i],n={...r,id:i,size:r.isIndexed&&1||r.size||1,...t};this.attributes[i]=new P(this.device,n)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(i=>{e[i]||(e[i]=[]),e[i].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:i,updateTriggers:r}=this,n=r[e];return n&&n.forEach(e=>{let r=i[e];r&&r.setNeedsUpdate(r.id,t)}),n}_updateAttribute(e){let{attribute:t,numInstances:i}=e;if((0,er.A)("attribute.updateStart",t),t.constant)return void t.setConstantValue(e.context,t.value);t.allocate(i)&&(0,er.A)("attribute.allocate",t,i),t.updateBuffer(e)&&(this.needsRedraw=!0,(0,er.A)("attribute.updateEnd",t,i))}}var eM=i(94878);class eI extends eg.A{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:i,duration:r,easing:n}}=this,s=n(e/r);this._value=(0,eM.Cc)(t,i,s)}}function eR(e,t,i,r,n){let s=t-e;return(i-t)*n+-s*r+s+t}function eO(e,t){if(Array.isArray(e)){let i=0;for(let r=0;r<e.length;r++){let n=e[r]-t[r];i+=n*n}return Math.sqrt(i)}return Math.abs(e-t)}class ek extends eg.A{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:i,stiffness:r}=this.settings,{_prevValue:n=e,_currValue:s=e}=this,o=function(e,t,i,r,n){if(Array.isArray(i)){let s=[];for(let o=0;o<i.length;o++)s[o]=eR(e[o],t[o],i[o],r,n);return s}return eR(e,t,i,r,n)}(n,s,t,i,r),a=eO(o,t),l=eO(o,s);a<1e-5&&l<1e-5&&(o=t,this.end()),this._prevValue=s,this._currValue=o}}let eB={interpolation:eI,spring:ek};class ez{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,i,r){let{transitions:n}=this;if(n.has(e)){let i=n.get(e),{value:r=i.settings.fromValue}=i;t=r,this.remove(e)}if(!(r=w(r)))return;let s=eB[r.type];if(!s)return void f.A.error(`unsupported transition type '${r.type}'`)();let o=new s(this.timeline);o.start({...r,fromValue:t,toValue:i}),n.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,i]of this.transitions)i.update(),e[t]=i.value,i.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}}var eD=i(79155);function eF({newProps:e,oldProps:t,ignoreProps:i={},propTypes:r={},triggerName:n="props"}){if(t===e)return!1;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return`${n} changed shallowly`;for(let s of Object.keys(e))if(!(s in i)){if(!(s in t))return`${n}.${s} added`;let i=eN(e[s],t[s],r[s]);if(i)return`${n}.${s} ${i}`}for(let s of Object.keys(t))if(!(s in i)){if(!(s in e))return`${n}.${s} dropped`;if(!Object.hasOwnProperty.call(e,s)){let i=eN(e[s],t[s],r[s]);if(i)return`${n}.${s} ${i}`}}return!1}function eN(e,t,i){let r=i&&i.equal;return r&&!r(e,t,i)||!r&&(r=e&&t&&e.equals)&&!r.call(e,t)?"changed deeply":r||t===e?null:"changed shallowly"}function e$(e,t,i){let r=e.updateTriggers[i];r=null==r?{}:r;let n=t.updateTriggers[i];return eF({oldProps:n=null==n?{}:n,newProps:r,triggerName:i})}function ej(e,t){if(!t)return e;let i={...e,...t};if("defines"in t&&(i.defines={...e.defines,...t.defines}),"modules"in t&&(i.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>"project64"===e.name))){let e=i.modules.findIndex(e=>"project32"===e.name);e>=0&&i.modules.splice(e,1)}if("inject"in t)if(e.inject){let r={...e.inject};for(let e in t.inject)r[e]=(r[e]||"")+t.inject[e];i.inject=r}else i.inject=t.inject;return i}var eU=i(62988),eV=i(7276),eG=i(18001),eW=i(796),eH=i(18086);let eq=[0,0,0];function eY(e,t,i=!1){let r=t.projectPosition(e);if(i&&t instanceof eV.A){let[i,n,s=0]=e,o=t.getDistanceScales([i,n]);r[2]=s*o.unitsPerMeter[2]}return r}function eZ(e,{viewport:t,modelMatrix:i,coordinateSystem:r,coordinateOrigin:n,offsetMode:s}){let[o,a,l=0]=e;switch(i&&([o,a,l]=eG.Z0([],[o,a,l,1],i)),r){case"default":return eZ(e,{viewport:t,modelMatrix:i,coordinateSystem:t.isGeospatial?"lnglat":"cartesian",coordinateOrigin:n,offsetMode:s});case"lnglat":return eY([o,a,l],t,s);case"lnglat-offsets":return eY([o+n[0],a+n[1],l+(n[2]||0)],t,s);case"meter-offsets":return eY((0,eH.dT)(n,[o,a,l]),t,s);case"cartesian":return t.isGeospatial?[o+n[0],a+n[1],l+n[2]]:t.projectPosition([o,a,l]);default:throw Error(`Invalid coordinateSystem: ${r}`)}}var eK=i(6431),eX=i(712);let eQ={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},eJ={};var e0=i(43626);let e2={boolean:{validate:(e,t)=>!0,equal:(e,t,i)=>!!e==!!t},number:{validate:(e,t)=>Number.isFinite(e)&&(!("max"in t)||e<=t.max)&&(!("min"in t)||e>=t.min)},color:{validate:(e,t)=>t.optional&&!e||e1(e)&&(3===e.length||4===e.length),equal:(e,t,i)=>(0,e0.b)(e,t,1)},accessor:{validate(e,t){let i=e4(e);return"function"===i||i===e4(t.value)},equal:(e,t,i)=>"function"==typeof t||(0,e0.b)(e,t,1)},array:{validate:(e,t)=>t.optional&&!e||e1(e),equal(e,t,i){let{compare:r}=i,n=Number.isInteger(r)?r:+!!r;return r?(0,e0.b)(e,t,n):e===t}},object:{equal(e,t,i){if(i.ignore)return!0;let{compare:r}=i,n=Number.isInteger(r)?r:+!!r;return r?(0,e0.b)(e,t,n):e===t}},function:{validate:(e,t)=>t.optional&&!e||"function"==typeof e,equal:(e,t,i)=>!i.compare&&!1!==i.ignore||e===t},data:{transform:(e,t,i)=>{if(!e)return e;let{dataTransform:r}=i.props;return r?r(e):"string"==typeof e.shape&&e.shape.endsWith("-table")&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,i)=>{let r=i.context;return r&&r.device?function(e,t,i,r){if(i instanceof eX.g)return i;i.constructor&&"Object"!==i.constructor.name&&(i={data:i});let n=null;i.compressed&&(n={minFilter:"linear",mipmapFilter:i.data.length>1?"nearest":"linear"});let{width:s,height:o}=i.data,a=t.createTexture({...i,sampler:{...eQ,...n,...r},mipLevels:t.getMipLevelCount(s,o)});return"webgl"===t.type?a.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(a),eJ[a.id]=e,a}(i.id,r.device,e,{...t.parameters,...i.props.textureParameters}):null},release:(e,t,i)=>{!function(e,t){t&&t instanceof eX.g&&eJ[t.id]===e&&(t.delete(),delete eJ[t.id])}(i.id,e)}}};function e3(e,t){return"type"in t?{name:e,...e2[t.type],...t}:"value"in t?{name:e,type:e4(t.value),...t}:{name:e,type:"object",value:t}}function e1(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function e4(e){return e1(e)?"array":null===e?"null":typeof e}function e6(e,t){return Object.prototype.hasOwnProperty.call(e,t)}let e5=0;class e8{constructor(...e){this.props=function(e,t){let i;for(let e=t.length-1;e>=0;e--){let r=t[e];"extensions"in r&&(i=r.extensions)}let r=Object.create(function e(t,i){var r,n;if(!(t instanceof e9.constructor))return{};let s="_mergedDefaultProps";if(i)for(let e of i){let t=e.constructor;t&&(s+=`:${t.extensionName||t.name}`)}let o=e6(r=t,n=s)&&r[n];return o||(t[s]=function(t,i){if(!t.prototype)return null;let r=e(Object.getPrototypeOf(t)),n=function(e){let t={},i={},r={};for(let[n,s]of Object.entries(e)){let e=s?.deprecatedFor;if(e)r[n]=Array.isArray(e)?e:[e];else{let e=function(e,t){switch(e4(t)){case"object":return e3(e,t);case"array":return e3(e,{type:"array",value:t,compare:!1});case"boolean":return e3(e,{type:"boolean",value:t});case"number":return e3(e,{type:"number",value:t});case"function":return e3(e,{type:"function",value:t,compare:!0});default:return{name:e,type:"unknown",value:t}}}(n,s);t[n]=e,i[n]=e.value}}return{propTypes:t,defaultProps:i,deprecatedProps:r}}(function(e,t){return e6(e,t)&&e[t]}(t,"defaultProps")||{}),s=Object.assign(Object.create(null),r,n.defaultProps),o=Object.assign(Object.create(null),r?.[eD.fW],n.propTypes),a=Object.assign(Object.create(null),r?.[eD.uH],n.deprecatedProps);for(let t of i){let i=e(t.constructor);i&&(Object.assign(s,i),Object.assign(o,i[eD.fW]),Object.assign(a,i[eD.uH]))}return Object.defineProperties(s,{id:{writable:!0,value:function(e){let t=e.componentName;return t||f.A.warn(`${e.name}.componentName not specified`)(),t||e.name}(t)}}),function(e,t){let i={},r={};for(let e in t){let n=t[e],{name:s,value:o}=n;n.async&&(i[s]=o,r[s]=function(e){return{enumerable:!0,set(t){"string"==typeof t||t instanceof Promise||(0,v.Td)(t)?this[eD.YN][e]=t:this[eD.vf][e]=t},get(){if(this[eD.vf]){if(e in this[eD.vf])return this[eD.vf][e]||this[eD.jA][e];if(e in this[eD.YN]){let t=this[eD.r3]&&this[eD.r3].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[eD.jA][e]}}return this[eD.jA][e]}}}(s))}e[eD.jA]=i,e[eD.YN]={},Object.defineProperties(e,r)}(s,o),function(e,t){for(let i in t)Object.defineProperty(e,i,{enumerable:!1,set(e){let r=`${this.id}: ${i}`;for(let r of t[i])e6(this,r)||(this[r]=e);f.A.deprecated(r,t[i].join("/"))()}})}(s,a),s[eD.fW]=o,s[eD.uH]=a,0!==i.length||e6(t,"_propTypes")||(t._propTypes=o),s}(t,i||[]))}(e.constructor,i));r[eD.r3]=e,r[eD.YN]={},r[eD.vf]={};for(let e=0;e<t.length;++e){let i=t[e];for(let e in i)r[e]=i[e]}return Object.freeze(r),r}(this,e),this.id=this.props.id,this.count=e5++}clone(e){let{props:t}=this,i={};for(let e in t[eD.jA])e in t[eD.vf]?i[e]=t[eD.vf][e]:e in t[eD.YN]&&(i[e]=t[eD.YN][e]);return new this.constructor({...t,...i,...e})}}e8.componentName="Component",e8.defaultProps={};let e9=e8,e7=Object.freeze({});class te{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||e7}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[eD.r3]||this.component;let t=e[eD.vf]||{},i=e[eD.YN]||e,r=e[eD.jA]||{};for(let e in t){let i=t[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,i),t[e]=this.getAsyncProp(e)}for(let e in i){let t=i[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if("string"==typeof t&&(t=this._fetch(e,t)),t instanceof Promise)return void this._watchPromise(e,t);if((0,v.Td)(t))return void this._resolveAsyncIterable(e,t);this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps)for(let e in this.oldAsyncProps=Object.create(this.oldProps),this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}_didAsyncInputValueChange(e,t){let i=this.asyncProps[e];return t!==i.resolvedValue&&t!==i.lastValue&&(i.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let i=this.asyncProps[e];i&&(t=this._postProcessValue(i,t),i.resolvedValue=t,i.pendingLoadCount++,i.resolvedLoadCount=i.pendingLoadCount)}_setAsyncPropValue(e,t,i){let r=this.asyncProps[e];r&&i>=r.resolvedLoadCount&&void 0!==t&&(this._freezeAsyncOldProps(),r.resolvedValue=t,r.resolvedLoadCount=i,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let i=this.asyncProps[e];if(i){i.pendingLoadCount++;let r=i.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(i,t),this._setAsyncPropValue(e,t,r),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if("data"!==e)return void this._setPropValue(e,t);let i=this.asyncProps[e];if(!i)return;i.pendingLoadCount++;let r=i.pendingLoadCount,n=[],s=0;for await(let i of t){if(!this.component)return;let{dataTransform:t}=this.component.props;Object.defineProperty(n=t?t(i,n):n.concat(i),"__diff",{enumerable:!1,value:[{startRow:s,endRow:n.length}]}),s=n.length,this._setAsyncPropValue(e,n,r)}this._onResolve(e,n)}_postProcessValue(e,t){let i=e.type;return i&&this.component&&(i.release&&i.release(e.resolvedValue,i,this.component),i.transform)?i.transform(t,i,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let i=this.component&&this.component.props[eD.fW];this.asyncProps[e]={type:i&&i[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}}class tt extends te{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1,this.disabledPickingIndices=[]}get layer(){return this.component}_fetch(e,t){let i=this.layer,r=i?.props.fetch;return r?r(t,{propName:e,layer:i}):super._fetch(e,t)}_onResolve(e,t){let i=this.layer;if(i){let r=i.props.onDataLoad;"data"===e&&r&&r(t,{propName:e,layer:i})}}_onError(e,t){let i=this.layer;i&&i.raiseError(t,`loading ${e} of ${this.layer}`)}}var ti=i(46043);let tr=Object.freeze([]),tn=(0,ei.A)(({oldViewport:e,viewport:t})=>e.equals(t)),ts=new Uint8ClampedArray(0);function to(e){return e.rowIndexes||e.pickingColors||e.instancePickingColors}function ta(e){return e.rowIndexes}function tl(e){return e.pickingColors||e.instancePickingColors}let tu={data:{type:"data",value:tr,async:!0},dataComparator:{type:"function",value:null,optional:!0},_dataDiff:{type:"function",value:e=>e&&e.__diff,optional:!0},dataTransform:{type:"function",value:null,optional:!0},onDataLoad:{type:"function",value:null,optional:!0},onError:{type:"function",value:null,optional:!0},fetch:{type:"function",value:(e,{propName:t,layer:i,loaders:r,loadOptions:n,signal:s})=>{let{resourceManager:o}=i.context;n=n||i.getLoadOptions(),r=r||i.props.loaders,s&&(n={...n,core:{...n?.core,fetch:{...n?.core?.fetch,signal:s}}});let a=o.contains(e);return(a||n||(o.add({resourceId:e,data:(0,ti.H)(e,r),persistent:!1}),a=!0),a)?o.subscribe({resourceId:e,onChange:e=>i.internalState?.reloadAsyncProp(t,e),consumerId:i.id,requestId:t}):(0,ti.H)(e,r,n)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:"number",min:0,max:1,value:1},operation:"draw",onHover:{type:"function",value:null,optional:!0},onClick:{type:"function",value:null,optional:!0},onDragStart:{type:"function",value:null,optional:!0},onDrag:{type:"function",value:null,optional:!0},onDragEnd:{type:"function",value:null,optional:!0},coordinateSystem:"default",coordinateOrigin:{type:"array",value:[0,0,0],compare:!0},modelMatrix:{type:"array",value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:"XYZ",colorFormat:"RGBA",parameters:{type:"object",value:{},optional:!0,compare:2},loadOptions:{type:"object",value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:"array",value:[],optional:!0,ignore:!0},getPolygonOffset:{type:"function",value:({layerIndex:e})=>[0,-(100*e)]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:"accessor",value:[0,0,128,128]}};class tc extends e9{constructor(){super(...arguments),this.internalState=null,this.lifecycle=eD.VD.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,"layerName")?this.layerName:""}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){let e=this.constructor.layerName||this.constructor.name;return`${e}({id: '${this.props.id}'})`}project(e){(0,m.A)(this.internalState);let t=this.internalState.viewport||this.context.viewport,i=eZ(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),[r,n,s]=(0,eH.VJ)(i,t.pixelProjectionMatrix);return 2===e.length?[r,n]:[r,n,s]}unproject(e){return(0,m.A)(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return(0,m.A)(this.internalState),function(e,t){let{viewport:i,coordinateSystem:r,coordinateOrigin:n,modelMatrix:s,fromCoordinateSystem:o,fromCoordinateOrigin:a}=function(e){let{viewport:t,modelMatrix:i,coordinateOrigin:r}=e,{coordinateSystem:n,fromCoordinateSystem:s,fromCoordinateOrigin:o}=e;return"default"===n&&(n=t.isGeospatial?"lnglat":"cartesian"),void 0===s?s=n:"default"===s&&(s=t.isGeospatial?"lnglat":"cartesian"),void 0===o&&(o=r),{viewport:t,coordinateSystem:n,coordinateOrigin:r,modelMatrix:i,fromCoordinateSystem:s,fromCoordinateOrigin:o}}(t),{autoOffset:l=!0}=t,{geospatialOrigin:u=eq,shaderCoordinateOrigin:c=eq,offsetMode:h=!1}=l?(0,eU.ow)(i,r,n):{},d=eZ(e,{viewport:i,modelMatrix:s,coordinateSystem:o,coordinateOrigin:a,offsetMode:h});if(h){let e=i.projectPosition(u||c);eW.jb(d,d,e)}return d}(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return!!this.internalState&&!this.internalState.isAsyncPropLoading()}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return"default"===e||"lnglat"===e||"cartesian"===e}onHover(e,t){return!!this.props.onHover&&(this.props.onHover(e,t)||!1)}onClick(e,t){return!!this.props.onClick&&(this.props.onClick(e,t)||!1)}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){(0,m.A)(e instanceof Uint8Array);let[t,i,r]=e;return t+256*i+65536*r-1}getNumInstances(){if(Number.isFinite(this.props.numInstances))return this.props.numInstances;if(this.state&&void 0!==this.state.numInstances)return this.state.numInstances;var e,t,i=this.props.data;if(null===(e=i)||"object"!=typeof e)throw Error("count(): argument not an object");if("function"==typeof i.count)return i.count();if(Number.isFinite(i.size))return i.size;if(Number.isFinite(i.length))return i.length;if(null!==(t=i)&&"object"==typeof t&&t.constructor===Object)return Object.keys(i).length;throw Error("count(): argument not a container")}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds(["positions","instancePositions"])}getShaders(e){for(let t of(e=ej(e,{disableWarnings:!0,modules:this.context.defaultShaderModules}),this.props.extensions))e=ej(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:i}=e.changeFlags;if(i&&t)if(Array.isArray(i))for(let e of i)t.invalidateAll(e);else t.invalidateAll();if(t){let{props:i}=e,r=this.internalState.hasPickingBuffer,n=Number.isInteger(i.highlightedObjectIndex)||!!i.pickable||i.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(r!==n){this.internalState.hasPickingBuffer=n;let e=to(t.attributes);e&&(n&&e.constant&&(e.constant=!1,t.invalidate(e.id)),e.value||n||(e.constant=!0,e.value=ta(t.attributes)?[eK.Z1]:[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:i}){let{index:r}=e;return r>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[r]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return!!this.internalState&&(this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()))}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,t&&tn({oldViewport:t,viewport:e})||(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e="all"){let t=this.getAttributeManager();t&&("all"===e?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let i in e)e[i].layoutChanged()&&(t=!0);for(let i of this.getModels())this._setModelAttributes(i,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,i=this.getNumInstances(),r=this.getStartIndices();e.update({data:t.data,numInstances:i,startIndices:r,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let n=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(n)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),i=Object.create(this.props);for(let e in t)Object.defineProperty(i,e,{value:t[e]});return i}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let i=Math.floor(ts.length/4);this.internalState.usesPickingColorCache=!0;let r=t>0&&0===ts[0];if(i<t||r){t>0xffffff&&f.A.warn("Layer has too many data objects. Picking might not be able to distinguish all objects.")();let e=Math.floor((ts=h.A.allocate(ts,t,{size:4,copy:!0,maxCount:Math.max(t,0xffffff)})).length/4),n=[0,0,0],s=r?0:i;for(let t=s;t<e;t++)this.encodePickingColor(t,n),ts[4*t+0]=n[0],ts[4*t+1]=n[1],ts[4*t+2]=n[2],ts[4*t+3]=0}e.value=ts.subarray(0,4*t)}_setModelAttributes(e,t,i=!1){if(!Object.keys(t).length)return;let r=this.getAttributeManager();if(r?.hasBufferGroups())return void this._setGroupedModelAttributes(e,r,t);if(i){let i=this.getAttributeManager();e.setBufferLayout(i.getBufferLayouts(e)),t=i.getAttributes()}let s=e.userData?.excludeAttributes||{},o={},a={};for(let i in t){if(s[i])continue;let r=t[i].getValue();for(let s in r){let l=r[s];l instanceof n.h?t[i].settings.isIndexed?e.setIndexBuffer(l):o[s]=l:l&&(a[s]=l)}}e.setAttributes(o),e.setConstantAttributes(a)}_setGroupedModelAttributes(e,t,i){let r=e.userData?.excludeAttributes||{},s=t.getBufferGroupBindings(i,e,r);e.setBufferLayout(s.bufferLayouts);let o={...s.buffers},a={},l=t.getAttributes();for(let t in l){if(r[t]||s.groupedAttributeIds.has(t))continue;let i=l[t],u=i.getValue();for(let t in u){let r=u[t];r instanceof n.h?i.settings.isIndexed?e.setIndexBuffer(r):o[t]=r:r&&(a[t]=r)}}e.setAttributes(o),e.setConstantAttributes(a)}disablePickingIndex(e){let t=this.props.data;if(!("attributes"in t))return void this._disablePickingIndex(e);let i=this.getAttributeManager().attributes,r=ta(i),n=tl(i),s=r&&t.attributes&&t.attributes[r.id];if(s&&s.value){let i=s.value;for(let n=0;n<t.length;n++)i[r.getVertexOffset(n)]===e&&this._disablePickingIndex(n);return}let o=n&&t.attributes&&t.attributes[n.id];if(o&&o.value){let i=o.value,r=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=n.getVertexOffset(e);i[t]===r[0]&&i[t+1]===r[1]&&i[t+2]===r[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let t=this.getAttributeManager().attributes,i=ta(t);if(i){let t=i.getVertexOffset(e),r=new Uint32Array(i.getVertexOffset(e+1)-t);r.fill(eK.Z1),i.buffer.write(r,t*r.BYTES_PER_ELEMENT);return}let r=tl(t);if(!r){this.internalState&&(0,eK.uz)(this.internalState.disabledPickingIndices,e);return}let n=r.getVertexOffset(e),s=r.getVertexOffset(e+1);r.buffer.write(new Uint8Array(s-n),n)}restorePickingColors(){let e=this.getAttributeManager().attributes,t=to(e);if(!t){this.internalState&&(this.internalState.disabledPickingIndices.length=0);return}let i=tl(e);this.internalState.usesPickingColorCache&&i&&i.value.buffer!==ts.buffer&&(i.value=ts.subarray(0,i.value.length)),t.updateSubBuffer({startOffset:0})}_initialize(){(0,m.A)(!this.internalState),(0,er.A)("layer.initialize",this);let e=this._getAttributeManager();for(let t of(this.internalState=new tt({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(f.A.deprecated("layer.state.attributeManager","layer.getAttributeManager()")(),e)}),this.internalState.uniformTransitions=new ez(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context),this.props.extensions))t.initializeState.call(this,this.context,t);this.setChangeFlags({dataChanged:"init",propsChanged:"init",viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){(0,er.A)("layer.matched",this,this===e);let{state:t,internalState:i}=e;this!==e&&(this.internalState=i,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if((0,er.A)("layer.update",this,e),!e)return;this.context.stats.get("Layer updates").incrementCount();let t=this.props,i=this.context,r=this.internalState,n=i.viewport,s=this._updateUniformTransition();r.propsInTransition=s,i.viewport=r.viewport||n,this.props=s;try{let e=this._getUpdateParams(),t=this.getModels();if(i.device)this.updateState(e);else try{this.updateState(e)}catch(e){}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let r=this.getModels()[0]!==t[0];this._postUpdate(e,r)}finally{i.viewport=n,this.props=t,this._clearChangeFlags(),r.needsUpdate=!1,r.resetOldProps()}}_finalize(){for(let e of((0,er.A)("layer.finalize",this),this.finalizeState(this.context),this.props.extensions))e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:i={},parameters:r={}}){this._updateAttributeTransition();let n=this.props,o=this.context;this.props=this.internalState.propsInTransition||n;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:n}=this.props,a=n&&n(i)||[0,0];o.device instanceof s.WebGLDevice&&o.device.setParametersWebGL({polygonOffset:a});let l=o.device instanceof s.WebGLDevice?null:function(e){let{blendConstant:t,...i}=e;return t?{pipelineParameters:i,renderPassParameters:{blendConstant:t}}:{pipelineParameters:i}}(r);if(function(e,t,i,r){for(let n of e)"webgpu"===n.device.type?(function(e,t){let i=t.props.framebuffer||(t.framebuffer??null);if(!i)return;let r=i.colorAttachments.map(e=>e?.texture?.format??null),n=i.depthStencilAttachment?.texture?.format;(!function(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(e.props.colorAttachmentFormats,r)||e.props.depthStencilAttachmentFormat!==n)&&(e.props.colorAttachmentFormats=r,e.props.depthStencilAttachmentFormat=n,e._setPipelineNeedsUpdate("attachment formats"))}(n,t),n.setParameters({...n.parameters,...r?.pipelineParameters})):n.setParameters(i)}(this.getModels(),e,r,l),o.device instanceof s.WebGLDevice)o.device.withParametersWebGL(r,()=>{let n={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:r,context:o};for(let e of this.props.extensions)e.draw.call(this,n,e);this.draw(n)});else{l?.renderPassParameters&&e.setParameters(l.renderPassParameters);let n={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:r,context:o};for(let e of this.props.extensions)e.draw.call(this,n,e);this.draw(n)}}finally{this.props=n}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let i in e)if(e[i]){let r=!1;if("dataChanged"===i){let n=e[i],s=t[i];n&&Array.isArray(s)&&(t.dataChanged=Array.isArray(n)?s.concat(n):n,r=!0)}t[i]||(t[i]=e[i],r=!0),r&&(0,er.A)("layer.changeFlag",this,i,e)}let i=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=i,t.somethingChanged=i||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let i=function(e,t){let i=eF({newProps:e,oldProps:t,propTypes:e[eD.fW],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=function(e,t){if(null===t)return"oldProps is null, initial diff";let i=!1,{dataComparator:r,_dataDiff:n}=e;return r?r(e.data,t.data)||(i="Data comparator detected a change"):e.data!==t.data&&(i="A new data container was supplied"),i&&n&&(i=n(e.data,t.data)||i),i}(e,t),n=!1;return r||(n=function(e,t){if(null===t||"all"in e.updateTriggers&&e$(e,t,"all"))return{all:!0};let i={},r=!1;for(let n in e.updateTriggers)"all"!==n&&e$(e,t,n)&&(i[n]=!0,r=!0);return!!r&&i}(e,t)),{dataChanged:r,propsChanged:i,updateTriggersChanged:n,extensionsChanged:function(e,t){if(null===t)return!0;let i=t.extensions,{extensions:r}=e;if(r===i)return!1;if(!i||!r||r.length!==i.length)return!0;for(let e=0;e<r.length;e++)if(!r[e].equals(i[e]))return!0;return!1}(e,t),transitionsChanged:function(e,t){if(!e.transitions)return!1;let i={},r=e[eD.fW],n=!1;for(let s in e.transitions){let o=r[s],a=o&&o.type;("number"===a||"color"===a||"array"===a)&&eN(e[s],t[s],o)&&(i[s]=!0,n=!0)}return!!n&&i}(e,t)}}(e,t);if(i.updateTriggersChanged)for(let e in i.updateTriggersChanged)i.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(i.transitionsChanged)for(let r in i.transitionsChanged)this.internalState.uniformTransitions.add(r,t[r],e[r],e.transitions?.[r]);return this.setChangeFlags(i)}validateProps(){!function(e){let t=e[eD.fW];for(let i in t){let r=t[i],{validate:n}=r;if(n&&!n(e[i],r))throw Error(`Invalid prop ${i}: ${e[i]}`)}}(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:i}=this.props;e.picked&&"function"==typeof i&&(t.highlightColor=i(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new eT(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:i,oldProps:r}=e,n=this.state.model;n?.isInstanced&&n.setInstanceCount(this.getNumInstances());let{autoHighlight:s,highlightedObjectIndex:o,highlightColor:a}=i;if(t||r.autoHighlight!==s||r.highlightedObjectIndex!==o||r.highlightColor!==a){let e={};Array.isArray(a)&&(e.highlightColor=a),(t||r.autoHighlight!==s||o!==r.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t=this.internalState.needsRedraw&&this.id;let i=this.getAttributeManager(),r=!!i&&i.getNeedsRedraw(e);if(t=t||r)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}}tc.defaultProps=tu,tc.layerName="Layer";let th=tc},66801:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});let r={name:"color",dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:e=>({})}},68169:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});class r{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:i=1,type:r,padding:n=0,copy:s=!1,initialize:o=!1,maxCount:a}){let l=r||e&&e.constructor||Float32Array,u=t*i+n;if(ArrayBuffer.isView(e)){if(u<=e.length)return e;if(u*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new l(e.buffer,0,u)}let c=1/0;a&&(c=a*i+n);let h=this._allocate(l,u,o,c);return e&&s?h.set(e):o||h.fill(0,0,4),this._release(e),h}release(e){this._release(e)}_allocate(e,t,i,r){let n=Math.max(Math.ceil(t*this.opts.overAlloc),1);n>r&&(n=r);let s=this._pool,o=e.BYTES_PER_ELEMENT*n,a=s.findIndex(e=>e.byteLength>=o);if(a>=0){let t=new e(s.splice(a,1)[0],0,n);return i&&t.fill(0),t}return new e(n)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:i}=e,{byteLength:r}=i,n=t.findIndex(e=>e.byteLength>=r);n<0?t.push(i):(n>0||t.length<this.opts.poolSize)&&t.splice(n,0,i),t.length>this.opts.poolSize&&t.shift()}}let n=new r},68711:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});let r="#define SMOOTH_EDGE_RADIUS 0.5",n={name:"geometry",source:`\
const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,vs:`\
${r}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${r}

struct FragmentGeometry {
  vec2 uv;
};
FragmentGeometry geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`}},69978:(e,t,i)=>{"use strict";i.d(t,{d:()=>l});var r=i(18567);let n=["Adapter","GPU","GPU Type","GPU Backend","Frame Rate","CPU Time","GPU Time","GPU Memory","Buffer Memory","Texture Memory","External Buffer Memory","External Texture Memory","Swap Chain Texture"],s=new WeakMap,o=new WeakMap;class a{stats=new Map;getStats(e){return this.get(e)}get(e){this.stats.has(e)||this.stats.set(e,new r.Uz({id:e}));let t=this.stats.get(e);return"GPU Time and Memory"===e&&function(e,t){let i=e.stats,r=!1;for(let n of t)i[n]||(e.get(n),r=!0);let n=Object.keys(i).length,a=s.get(e);if(!r&&a?.orderedStatNames===t&&a.statCount===n)return;let l={},u=o.get(t);for(let e of(u||(u=new Set(t),o.set(t,u)),t))i[e]&&(l[e]=i[e]);for(let[e,t]of Object.entries(i))u.has(e)||(l[e]=t);for(let e of Object.keys(i))delete i[e];Object.assign(i,l),s.set(e,{orderedStatNames:t,statCount:n})}(t,n),t}}let l=new a},71190:(e,t,i)=>{"use strict";function r(e,t=!0){return e??t}function n(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}function s(e,t=!0){let i=n(e.slice(0,3),t),r=Number.isFinite(e[3]),o=r?e[3]:1;return[i[0],i[1],i[2],t&&r?o/255:o]}i.d(t,{eS:()=>r,jI:()=>s,sC:()=>n})},71343:(e,t,i)=>{"use strict";i.d(t,{Cc:()=>o,WQ:()=>n,Z0:()=>a,jb:()=>l,ze:()=>s});var r=i(55218);function n(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e}function s(e,t){return e[0]=-t[0],e[1]=-t[1],e}function o(e,t,i,r){let n=t[0],s=t[1];return e[0]=n+r*(i[0]-n),e[1]=s+r*(i[1]-s),e}function a(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[4]*n+i[12],e[1]=i[1]*r+i[5]*n+i[13],e}let l=function(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e};!function(){let e=new r.tb(2);r.tb!=Float32Array&&(e[0]=0,e[1]=0)}()},74010:(e,t,i)=>{"use strict";i.d(t,{b:()=>n});var r=i(99225);function n(e){if("undefined"!=typeof window&&window.process?.type==="renderer"||void 0!==r&&r.versions?.electron)return!0;let t="undefined"!=typeof navigator&&navigator.userAgent,i=e||t;return!!(i&&i.indexOf("Electron")>=0)}},74225:(e,t,i)=>{"use strict";i.d(t,{N:()=>a});var r=i(1955),n=i(21370),s=i(29101),o=i(32646);class a{static defaultProps={...n.r.defaultProps};static getDefaultPipelineFactory(e){let t=e.getModuleData("@luma.gl/core");return t.defaultPipelineFactory||=new a(e),t.defaultPipelineFactory}device;_hashCounter=0;_hashes={};_renderPipelineCache={};_computePipelineCache={};_sharedRenderPipelineCache={};get[Symbol.toStringTag](){return"PipelineFactory"}toString(){return`PipelineFactory(${this.device.id})`}constructor(e){this.device=e}createRenderPipeline(e){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);let t={...n.r.defaultProps,...e},i=this._renderPipelineCache,r=this._hashRenderPipeline(t),a=i[r]?.resource;if(a)i[r].useCount++,this.device.props.debugFactories&&s.R.log(3,`${this}: ${i[r].resource} reused, count=${i[r].useCount}, (id=${e.id})`)();else{let e="webgl"===this.device.type&&this.device.props._sharePipelines?this.createSharedRenderPipeline(t):void 0;(a=this.device.createRenderPipeline({...t,id:t.id?`${t.id}-cached`:(0,o.L)("unnamed-cached"),_sharedRenderPipeline:e})).hash=r,i[r]={resource:a,useCount:1},this.device.props.debugFactories&&s.R.log(3,`${this}: ${a} created, count=${i[r].useCount}`)()}return a}createComputePipeline(e){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);let t={...r.C.defaultProps,...e},i=this._computePipelineCache,n=this._hashComputePipeline(t),o=i[n]?.resource;return o?(i[n].useCount++,this.device.props.debugFactories&&s.R.log(3,`${this}: ${i[n].resource} reused, count=${i[n].useCount}, (id=${e.id})`)()):((o=this.device.createComputePipeline({...t,id:t.id?`${t.id}-cached`:void 0})).hash=n,i[n]={resource:o,useCount:1},this.device.props.debugFactories&&s.R.log(3,`${this}: ${o} created, count=${i[n].useCount}`)()),o}release(e){if(!this.device.props._cachePipelines)return void e.destroy();let t=this._getCache(e),i=e.hash;t[i].useCount--,0===t[i].useCount?(this._destroyPipeline(e),this.device.props.debugFactories&&s.R.log(3,`${this}: ${e} released and destroyed`)()):t[i].useCount<0?(s.R.error(`${this}: ${e} released, useCount < 0, resetting`)(),t[i].useCount=0):this.device.props.debugFactories&&s.R.log(3,`${this}: ${e} released, count=${t[i].useCount}`)()}createSharedRenderPipeline(e){let t=this._hashSharedRenderPipeline(e),i=this._sharedRenderPipelineCache[t];return i||(i={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[t]=i),i.useCount++,i.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;let t=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),i=this._sharedRenderPipelineCache[t];i&&(i.useCount--,0===i.useCount&&(i.resource.destroy(),delete this._sharedRenderPipelineCache[t]))}_destroyPipeline(e){let t=this._getCache(e);return!!this.device.props._destroyPipelines&&(delete t[e.hash],e.destroy(),e instanceof n.r&&this.releaseSharedRenderPipeline(e),!0)}_getCache(e){let t;if(e instanceof r.C&&(t=this._computePipelineCache),e instanceof n.r&&(t=this._renderPipelineCache),!t)throw Error(`${this}`);if(!t[e.hash])throw Error(`${this}: ${e} matched incorrect entry`);return t}_hashComputePipeline(e){let{type:t}=this.device,i=this._getHash(e.shader.source),r=this._getHash(JSON.stringify(e.shaderLayout));return`${t}/C/${i}SL${r}`}_hashRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e),n=this._getHash(JSON.stringify(e.shaderLayout)),s=this._getHash(JSON.stringify(e._uniformBlockLayouts)),o=this._getHash(JSON.stringify(e.bufferLayout)),{type:a}=this.device;if("webgl"===a){let l=this._getHash(JSON.stringify(e.parameters));return`${a}/R/${t}/${i}V${r}T${e.topology}P${l}SL${n}UBL${s}BL${o}`}{let s=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),l=this._getHash(JSON.stringify(e.parameters)),u=this._getWebGPUAttachmentHash(e);return`${a}/R/${t}/${i}V${r}T${e.topology}EP${s}P${l}SL${n}BL${o}A${u}`}}_hashSharedRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e);return`webgl/S/${t}/${i}V${r}`}_getHash(e){return void 0===this._hashes[e]&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){let{varyings:t=[],bufferMode:i=null}=e;return this._getHash(JSON.stringify({varyings:t,bufferMode:i}))}_getWebGPUAttachmentHash(e){let t=e.colorAttachmentFormats??[this.device.preferredColorFormat],i=e.depthStencilAttachmentFormat??(e.parameters?.depthWriteEnabled?this.device.preferredDepthFormat:null);return this._getHash(JSON.stringify({colorAttachmentFormats:t,depthStencilAttachmentFormat:i}))}}},76741:(e,t,i)=>{"use strict";i.d(t,{A:()=>m});var r=i(77397),n=i(80931),s=i(58038),o=i(94878),a=i(23778),l=i(6953),u=i(18086),c=i(90460);let h=Math.PI/180,d=(0,n.$M)(),f=[0,0,0],p={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};class g{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||"viewport",this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||p,this.focalDistance=e.focalDistance||1,this.position=e.position||f,this.modelMatrix=e.modelMatrix||null;let{longitude:t,latitude:i}=e;this.isGeospatial=Number.isFinite(i)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?c.Kx.WEB_MERCATOR:c.Kx.WEB_MERCATOR_AUTO_OFFSET:c.Kx.IDENTITY}equals(e){return e instanceof g&&(this===e||e.width===this.width&&e.height===this.height&&e.scale===this.scale&&e.projectionMode===this.projectionMode&&e.resolution===this.resolution&&(0,o.aI)(e.distanceScales.unitsPerMeter,this.distanceScales.unitsPerMeter)&&(0,o.aI)(e.projectionMatrix,this.projectionMatrix)&&(0,o.aI)(e.viewMatrix,this.viewMatrix))}project(e,{topLeft:t=!0}={}){let i=this.projectPosition(e),r=(0,u.VJ)(i,this.pixelProjectionMatrix),[n,s]=r,o=t?s:this.height-s;return 2===e.length?[n,o]:[n,o,r[2]]}unproject(e,{topLeft:t=!0,targetZ:i}={}){let[r,n,s]=e,o=t?n:this.height-n,a=i&&i*this.distanceScales.unitsPerMeter[2],l=(0,u.xJ)([r,o,s],this.pixelUnprojectionMatrix,a),[c,h,d]=this.unprojectPosition(l);return Number.isFinite(s)?[c,h,d]:Number.isFinite(i)?[c,h,i]:[c,h]}projectPosition(e){let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,i]=this.unprojectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=(0,u.Gw)(e);return t[1]=(0,o.qE)(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?(0,u.iV)(e):e}getBounds(e={}){let t={targetZ:e.z||0},i=this.unproject([0,0],t),r=this.unproject([this.width,0],t),n=this.unproject([0,this.height],t),s=this.unproject([this.width,this.height],t);return[Math.min(i[0],r[0],n[0],s[0]),Math.min(i[1],r[1],n[1],s[1]),Math.max(i[0],r[0],n[0],s[0]),Math.max(i[1],r[1],n[1],s[1])]}getDistanceScales(e){return e&&this.isGeospatial?(0,u.nI)({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:i=1,height:r=1}){return e<this.x+this.width&&this.x<e+i&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){return this._frustumPlanes.near||Object.assign(this._frustumPlanes,(0,n.on)(this.viewProjectionMatrix)),this._frustumPlanes}panByPosition(e,t,i){return null}_initProps(e){let t=e.longitude,i=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=(0,u.fO)({latitude:i})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||(0,u.nI)({latitude:i,longitude:t}));let r=Math.pow(2,this.zoom);this.scale=r;let{position:n,modelMatrix:o}=e,l=f;if(n&&(l=o?new s.k(o).transformAsVector(n,[]):n),this.isGeospatial){let e=this.projectPosition([t,i,0]);this.center=new a.P(l).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(l)}_initMatrices(e){let{viewMatrix:t=d,projectionMatrix:i=null,orthographic:u=!1,fovyRadians:c,fovy:f=75,near:p=.1,far:g=1e3,padding:m=null,focalDistance:v=1}=e;this.viewMatrixUncentered=t,this.viewMatrix=new s.k().multiplyRight(t).translate(new a.P(this.center).negate()),this.projectionMatrix=i||function({width:e,height:t,orthographic:i,fovyRadians:r,focalDistance:n,padding:a,near:l,far:u}){let c=e/t,h=i?new s.k().orthographic({fovy:r,aspect:c,focalDistance:n,near:l,far:u}):new s.k().perspective({fovy:r,aspect:c,near:l,far:u});if(a){let{left:i=0,right:r=0,top:n=0,bottom:s=0}=a,l=(0,o.qE)((i+e-r)/2,0,e)-e/2,u=(0,o.qE)((n+t-s)/2,0,t)-t/2;h[8]-=2*l/e,h[9]+=2*u/t}return h}({width:this.width,height:this.height,orthographic:u,fovyRadians:c||f*h,focalDistance:v,padding:m,near:p,far:g});let y=(0,n.$M)();l.lw(y,y,this.projectionMatrix),l.lw(y,y,this.viewMatrix),this.viewProjectionMatrix=y,this.viewMatrixInverse=l.B8([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=(0,n.Vl)(this.viewMatrixInverse);let b=(0,n.$M)(),_=(0,n.$M)();l.hs(b,b,[this.width/2,-this.height/2,1]),l.Tl(b,b,[1,-1,0]),l.lw(_,b,this.viewProjectionMatrix),this.pixelProjectionMatrix=_,this.pixelUnprojectionMatrix=l.B8((0,n.$M)(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||r.A.warn("Pixel project matrix not invertible")()}}g.displayName="Viewport";let m=g},76756:(e,t,i)=>{"use strict";i.d(t,{qk:()=>s,ws:()=>n});var r=i(94878);function n(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function s(e,t,i=""){if(r.$W.debug&&!function(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}(e,t))throw Error(`math.gl: ${i} some fields set to invalid numbers'`);return e}},76807:(e,t,i)=>{"use strict";function r(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)||!!Array.isArray(e)&&(0===e.length||"number"==typeof e[0])}i.d(t,{H9:()=>r})},76894:(e,t,i)=>{"use strict";function r(e,t){if(!e)throw Error(t||"loader assertion failed.")}i.d(t,{v:()=>r})},77227:(e,t,i)=>{"use strict";i.d(t,{eh:()=>n,gM:()=>s,x:()=>r});let r=globalThis;globalThis.document;let n=globalThis.process||{};globalThis.console;let s=globalThis.navigator||{}},77397:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});let r=new(i(94061)).hW({id:"deck"})},78120:(e,t,i)=>{"use strict";i.d(t,{A:()=>v});var r=i(58263),n=i(68711),s=i(62988),o=i(90460);let a=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")}: i32 = ${(0,s.LB)(e)};`).join(""),l=Object.keys(o.Kx).map(e=>`const PROJECTION_MODE_${e}: i32 = ${o.Kx[e]};`).join(""),u=Object.keys(o.p5).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${o.p5[e]};`).join(""),c=`\
${a}
${l}
${u}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`,h=`\
${c}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
      let enuMatrix = project_get_orientation_matrix(project.commonOrigin);
      let metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
      let offsetCommon = (enuMatrix * vec3<f32>(-position_world.x, -position_world.y, position_world.z)) * metersToCommon;
      return vec4<f32>(project.commonOrigin + offsetCommon, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  var clipPosition = viewProjectionMatrix * position + center;
  // deck.gl projection matrices use WebGL's [-w, w] depth range; WebGPU clips z to [0, w].
  clipPosition.z = (clipPosition.z + clipPosition.w) * 0.5;
  return clipPosition;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,d=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")} = ${(0,s.LB)(e)};`).join(""),f=Object.keys(o.Kx).map(e=>`const int PROJECTION_MODE_${e} = ${o.Kx[e]};`).join(""),p=Object.keys(o.p5).map(e=>`const int UNIT_${e.toUpperCase()} = ${o.p5[e]};`).join(""),g=`\
${d}
${f}
${p}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
mat3 enuMatrix = project_get_orientation_matrix(project.commonOrigin);
float metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
vec3 offsetCommon = (enuMatrix * vec3(-position_world.xy, position_world.z)) * metersToCommon;
return vec4(project.commonOrigin + offsetCommon, position_world.w);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,m={},v={name:"project",dependencies:[r.i,n.A],source:h,vs:g,getUniforms:function(e=m){return"viewport"in e?(0,s.aY)(e):{}},uniformTypes:{wrapLongitude:"f32",coordinateSystem:"i32",commonUnitsPerMeter:"vec3<f32>",projectionMode:"i32",scale:"f32",commonUnitsPerWorldUnit:"vec3<f32>",commonUnitsPerWorldUnit2:"vec3<f32>",center:"vec4<f32>",modelMatrix:"mat4x4<f32>",viewProjectionMatrix:"mat4x4<f32>",viewportSize:"vec2<f32>",devicePixelRatio:"f32",focalDistance:"f32",cameraPosition:"vec3<f32>",coordinateOrigin:"vec3<f32>",commonOrigin:"vec3<f32>",pseudoMeters:"f32"}}},79155:(e,t,i)=>{"use strict";i.d(t,{VD:()=>r,YN:()=>l,fW:()=>s,jA:()=>a,r3:()=>n,uH:()=>o,vf:()=>u});let r={NO_STATE:"Awaiting state",MATCHED:"Matched. State transferred from previous layer",INITIALIZED:"Initialized",AWAITING_GC:"Discarded. Awaiting garbage collection",AWAITING_FINALIZATION:"No longer matched. Awaiting garbage collection",FINALIZED:"Finalized! Awaiting garbage collection"},n=Symbol.for("component"),s=Symbol.for("propTypes"),o=Symbol.for("deprecatedProps"),a=Symbol.for("asyncPropDefaults"),l=Symbol.for("asyncPropOriginal"),u=Symbol.for("asyncPropResolved")},79241:(e,t,i)=>{"use strict";i.d(t,{U0:()=>e_,_P:()=>eb,Ry:()=>ex});var r=i(18908),n=i(38380),s=i(81274);let o=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,"#version 300 es\n"],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],a=[...o,[c("attribute"),"in $1"],[c("varying"),"out $1"]],l=[...o,[c("varying"),"in $1"]];function u(e,t){for(let[i,r]of t)e=e.replace(i,r);return e}function c(e){return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,"g")}var h=i(96356);function d(e,t,i="glsl"){let r="";for(let n in e){let s=e[n],o="wgsl"===i?"fn":"void";if(r+=`${o} ${s.signature} {
`,s.header&&(r+=`  ${s.header}`),t[n]){let e=t[n];for(let t of(e.sort((e,t)=>e.order-t.order),e))r+=`  ${t.injection}
`}s.footer&&(r+=`  ${s.footer}`),r+="}\n"}return r}function f(e){let t={vertex:{},fragment:{}};for(let i of e){let e,r;"string"!=typeof i?r=(e=i).hook:(e={},r=i);let n=(r=r.trim()).indexOf(":"),s=r.slice(0,n),o=r.slice(n+1),a=r.replace(/\(.+/,""),l=Object.assign(e,{signature:o});switch(s){case"vs":t.vertex[a]=l;break;case"fs":t.fragment[a]=l;break;default:throw Error(s)}}return t}var p=i(80839);let g="(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)",m=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${g}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${g}`,"g")],v=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${g}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${g}`,"g")],y=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${g}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${g}`,"g")],b=[RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${g}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${g}`,"g"),RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${g}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${g}`,"g")];function _(e){let t=e.split(""),i=0,r=0,n=!1,s=!1,o=!1;for(;i<e.length;){let a=e[i],l=e[i+1];if(s){o?o=!1:"\\"===a?o=!0:'"'===a&&(s=!1),i++;continue}if(n){"\n"===a||"\r"===a?n=!1:t[i]=" ",i++;continue}if(r>0){if("/"===a&&"*"===l){t[i]=" ",t[i+1]=" ",r++,i+=2;continue}if("*"===a&&"/"===l){t[i]=" ",t[i+1]=" ",r--,i+=2;continue}"\n"!==a&&"\r"!==a&&(t[i]=" "),i++;continue}if('"'===a){s=!0,i++;continue}if("/"===a&&"/"===l){t[i]=" ",t[i+1]=" ",n=!0,i+=2;continue}if("/"===a&&"*"===l){t[i]=" ",t[i+1]=" ",r=1,i+=2;continue}i++}return t.join("")}function x(e,t){let i=_(e),r=[];for(let n of t){let s;for(n.lastIndex=0,s=n.exec(i);s;){let o=n===t[0],a=s.index,l=s[0].length;r.push({match:e.slice(a,a+l),index:a,length:l,bindingToken:s[o?1:2],groupToken:s[o?2:1],accessDeclaration:s[3]?.trim(),name:s[4]}),s=n.exec(i)}}return r.sort((e,t)=>e.index-t.index)}function w(e,t,i){let r=x(e,t);if(!r.length)return e;let n="",s=0;for(let t of r)n+=e.slice(s,t.index),n+=i(t),s=t.index+t.length;return n+e.slice(s)}function P(e){return/@binding\(\s*auto\s*\)/.test(_(e))}let S=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${g}\\s*:\\s*([^;]+);`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${g}\\s*:\\s*([^;]+);`,"g")];function C(e,t=[]){let i=_(e),r=new Map;for(let e of t)r.set(E(e.name,e.group,e.location),e.moduleName);let n=[];for(let e of S){let t;for(e.lastIndex=0,t=e.exec(i);t;){let s=e===S[0],o=Number(t[s?1:2]),a=Number(t[s?2:1]),l=t[3]?.trim(),u=t[4],c=t[5].trim(),h=r.get(E(u,a,o));n.push(function(e){var t;let i={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:"unknown",moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let t=e.accessDeclaration.split(",").map(e=>e.trim());if("uniform"===t[0])return{...i,kind:"uniform",access:"uniform"};if("storage"===t[0]){let e=t[1]||"read_write";return{...i,kind:"read"===e?"read-only-storage":"storage",access:e}}}return"sampler"===e.resourceType||"sampler_comparison"===e.resourceType?{...i,kind:"sampler",samplerKind:"sampler_comparison"===e.resourceType?"comparison":"filtering"}:e.resourceType.startsWith("texture_storage_")?{...i,kind:"storage-texture",access:function(e){let t=/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e);return t?.[1]}(e.resourceType),viewDimension:L(e.resourceType)}:e.resourceType.startsWith("texture_")?{...i,kind:"texture",viewDimension:L(e.resourceType),sampleType:(t=e.resourceType).startsWith("texture_depth_")?"depth":t.includes("<i32>")?"sint":t.includes("<u32>")?"uint":t.includes("<f32>")?"float":void 0,multisampled:e.resourceType.startsWith("texture_multisampled_")}:i}({name:u,group:a,binding:o,owner:h?"module":"application",moduleName:h,accessDeclaration:l,resourceType:c})),t=e.exec(i)}}return n.sort((e,t)=>e.group!==t.group?e.group-t.group:e.binding!==t.binding?e.binding-t.binding:e.name.localeCompare(t.name))}function E(e,t,i){return`${t}:${i}:${e}`}function L(e){return e.includes("cube_array")?"cube-array":e.includes("2d_array")?"2d-array":e.includes("cube")?"cube":e.includes("3d")?"3d":e.includes("2d")?"2d":e.includes("1d")?"1d":void 0}function A(e,t={}){let i=T(e),r=function(e){let t=[],i=0;for(let r of e){if("}"===r.value&&0===i)return null;t.push(i),"{"===r.value?i++:"}"===r.value&&i--}return 0===i?t:null}(i);if(!r)return null;let n=function(e,t){let i=new Map;for(let r=0;r<e.length;r++){if(0!==t[r]||"alias"!==e[r].value)continue;let n=e[r+1]?.value;if(!N(n)||e[r+2]?.value!=="="||i.has(n))return null;let s=z(e,t,r+3,";");if(s<0||s===r+3)return null;i.set(n,F(e.slice(r+3,s))),r=s}return i}(i,r);if(!n)return null;let s=function(e,t,i){let r=[],n=new Set,s=new Set;for(let o=0;o<e.length;o++){if(0!==t[o]||"var"!==e[o].value)continue;let a=D(e,t,o),l=e.slice(a,o),u=I(l,"group"),c=I(l,"binding");if(null===u||null===c||void 0===u!=(void 0===c))return null;if(void 0===u||void 0===c)continue;let h=o+1,d=[];if(e[h]?.value==="<"){let t=k(e,h,"<",">");if(t<0)return null;let i=B(e.slice(h+1,t),",");if(!i)return null;d=i.map(F),h=t+1}let f=e[h]?.value;if(!N(f)||e[h+1]?.value!==":")return null;let p=z(e,t,h+2,";");if(p<0||p===h+2)return null;let g=M(F(e.slice(h+2,p)),i);if(!g)return null;let m=function(e){let{name:t,group:i,location:r,addressSpace:n,resourceType:s}=e,o={name:t,group:i,location:r};if("uniform"===n[0]&&1===n.length)return{...o,type:"uniform"};if("storage"===n[0]&&n.length<=2){let e=n[1]||"read";return"read"===e?{...o,type:"read-only-storage"}:"read_write"===e?{...o,type:"storage"}:null}return n.length>0?null:"sampler"===s||"sampler_comparison"===s?{...o,type:"sampler",..."sampler_comparison"===s?{samplerType:"comparison"}:{}}:"texture_external"===s?{...o,type:"external-texture"}:function(e,t){let i=/^texture_storage_(1d|2d|2d_array|3d)<([A-Za-z0-9_]+),(read|write|read_write)>$/.exec(t);if(!i)return null;let r={read:"read-only",write:"write-only",read_write:"read-write"}[i[3]];return{...e,type:"storage",format:i[2],access:r,viewDimension:O(i[1])}}(o,s)||function(e,t){let i=/^texture_(multisampled_)?(1d|2d|2d_array|cube|cube_array|3d)<(f32|i32|u32)>$/.exec(t);if(i){if(i[1]&&"2d"!==i[2])return null;let t={f32:"float",i32:"sint",u32:"uint"}[i[3]];return{...e,type:"texture",viewDimension:O(i[2]),sampleType:t,multisampled:!!i[1]}}let r=/^texture_depth_(multisampled_)?(2d|2d_array|cube|cube_array)$/.exec(t);return!r||r[1]&&"2d"!==r[2]?null:{...e,type:"texture",viewDimension:O(r[2]),sampleType:"depth",multisampled:!!r[1]}}(o,s)}({name:f,group:u,location:c,addressSpace:d,resourceType:g}),v=`${u}:${c}`;if(!m||n.has(v)||s.has(f))return null;r.push(m),n.add(v),s.add(f),o=p}return function(e){for(let t of e){if("sampler"!==t.type||t.samplerType||!t.name.endsWith("Sampler"))continue;let i=t.name.slice(0,-7),r=e.find(e=>"texture"===e.type&&e.name===i&&e.group===t.group);r?.sampleType==="depth"&&(t.samplerType="non-filtering")}}(r),r.sort((e,t)=>e.group-t.group||e.location-t.location||e.name.localeCompare(t.name))}(i,r,n);if(!s)return null;if(!1===t.scanVertexAttributes)return{attributes:[],bindings:s};let o=function(e,t){let i=new Map;for(let r=0;r<e.length;r++){if(0!==t[r]||"struct"!==e[r].value)continue;let n=e[r+1]?.value,s=r+2;if(!N(n)||i.has(n)||e[s]?.value!=="{")return null;let o=k(e,s,"{","}");if(o<0)return null;i.set(n,e.slice(s+1,o)),r=o}return i}(i,r);if(!o)return null;let a=function(e,t,i,r,n){let s=function(e,t){let i=[],r=new Set;for(let n=0;n<e.length;n++){if(0!==t[n]||"fn"!==e[n].value)continue;let s=e[n+1]?.value,o=n+2;if(!N(s)||r.has(s)||e[o]?.value!=="(")return null;let a=k(e,o,"(",")");if(a<0)return null;let l=D(e,t,n);i.push({name:s,vertex:R(e.slice(l,n),"vertex"),parameters:e.slice(o+1,a)}),r.add(s),n=a}return i}(e,t);if(!s)return null;let o=s.filter(e=>e.vertex),a=n?o.find(e=>e.name===n):1===o.length?o[0]:void 0;if(!a)return 0!==o.length||n?null:[];let l=B(a.parameters,",");if(!l)return null;let u=[],c=new Set,h=new Set,d=new Set;for(let e of l)if(e.length>0&&!function e(t){let{declaration:i,aliases:r,structures:n,attributes:s,attributeLocations:o,attributeNames:a,visitedStructures:l}=t,u=function(e,t){let i=B(e,":");return i&&2===i.length?i[0].length:-1}(i,":");if(u<1||u===i.length-1)return!1;let c=function(e){for(let t=e.length-1;t>=0;t--)if(N(e[t].value))return e[t].value;return null}(i.slice(0,u)),h=I(i.slice(0,u),"location"),d=R(i.slice(0,u),"builtin"),f=M(F(i.slice(u+1)),r);if(!c||null===h||!f||void 0!==h&&d)return!1;if(void 0!==h){var p;let e=(p=f,/^(?:i32|u32|f32|f16|vec[234]<(?:i32|u32|f32|f16)>)$/.test(p)?p:null);return!(!e||o.has(h)||a.has(c))&&(s.push({name:c,location:h,type:e}),o.add(h),a.add(c),!0)}if(d)return!0;let g=n.get(f);if(!g||l.has(f))return!1;let m=B(g,",");if(!m)return!1;for(let i of(l.add(f),m))if(i.length>0&&!e({...t,declaration:i}))return!1;return l.delete(f),!0}({declaration:e,aliases:i,structures:r,attributes:u,attributeLocations:c,attributeNames:h,visitedStructures:d}))return null;return u.sort((e,t)=>e.location-t.location||e.name.localeCompare(t.name))}(i,r,n,o,t.vertexEntryPoint);return a?{attributes:a,bindings:s}:null}function T(e){let t=_(e),i=/[A-Za-z_][A-Za-z0-9_]*|(?:0[xX][0-9A-Fa-f]+|\d+)|[@(){}<>\[\]:,;=]/g,r=[],n=i.exec(t);for(;n;)r.push({value:n[0],index:n.index}),n=i.exec(t);return r}function M(e,t,i=new Set){let r=T(e),n="";for(let e of r){let r=t.get(e.value);if(!r){n+=function(e){let t=/^(vec[234]|mat[234]x[234])([fiuh])$/.exec(e);if(!t)return e;let i={f:"f32",i:"i32",u:"u32",h:"f16"}[t[2]];return`${t[1]}<${i}>`}(e.value);continue}if(i.has(e.value))return null;let s=new Set(i);s.add(e.value);let o=M(r,t,s);if(!o)return null;n+=o}return n}function I(e,t){let i;for(let r=0;r<e.length;r++)if("@"===e[r].value&&e[r+1]?.value===t){if(void 0!==i||e[r+2]?.value!=="("||!/^\d+$/.test(e[r+3]?.value||"")||e[r+4]?.value!==")")return null;i=Number(e[r+3].value)}return i}function R(e,t){return e.some((i,r)=>"@"===i.value&&e[r+1]?.value===t)}function O(e){return e.replace("_","-")}function k(e,t,i,r){let n=0;for(let s=t;s<e.length;s++)if(e[s].value===i)n++;else if(e[s].value===r&&0==--n)return s;return -1}function B(e,t){let i=[],r=0,n={"(":0,"<":0,"[":0,"{":0},s=Object.keys(n),o={")":"(",">":"<","]":"[","}":"{"};for(let a=0;a<e.length;a++){let l=e[a].value;if(l===t&&s.every(e=>0===n[e])){i.push(e.slice(r,a)),r=a+1;continue}if(l in n)n[l]++;else if(l in o){let e=o[l];if(n[e]--,n[e]<0)return null}}return s.every(e=>0===n[e])?(i.push(e.slice(r)),i):null}function z(e,t,i,r){for(let n=i;n<e.length;n++)if(0===t[n]&&e[n].value===r)return n;return -1}function D(e,t,i){for(let r=i-1;r>=0;r--)if(";"===e[r].value&&0===t[r]||"}"===e[r].value&&1===t[r])return r+1;return 0}function F(e){return e.map(e=>e.value).join("")}function N(e){return!!(e&&/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))}let $="([a-zA-Z_][a-zA-Z0-9_]*)",j=/^\s*\#\s*if\s+(.+?)\s*(?:\/\/.*)?$/,U=RegExp(`^\\s*\\#\\s*ifdef\\s*${$}\\s*$`),V=RegExp(`^\\s*\\#\\s*ifndef\\s*${$}\\s*(?:\\/\\/.*)?$`),G=/^\s*\#\s*else\s*(?:\/\/.*)?$/,W=/^\s*\#\s*endif\s*$/,H=RegExp(`^\\s*\\#\\s*ifdef\\s*${$}\\s*(?:\\/\\/.*)?$`),q=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function Y(e,t){let i=e.split("\n"),r=[],n=[],s=!0;for(let e of i){let i=e.match(j),o=e.match(H)||e.match(U),a=e.match(V),l=e.match(G),u=e.match(q)||e.match(W);if(i){let e=function(e,t){let i=e.trim();if(/^[+-]?\d+(?:\.\d+)?$/.test(i))return 0!==Number(i);if("true"===i)return!0;if("false"===i)return!1;let r=i.match(RegExp(`^!\\s*${$}$`));if(r)return!t[r[1]];let n=i.match(RegExp(`^${$}$`));if(n)return!!t[n[1]];let s=i.match(RegExp(`^defined\\s*\\(\\s*${$}\\s*\\)$`));if(s)return void 0!==t[s[1]];let o=i.match(RegExp(`^!\\s*defined\\s*\\(\\s*${$}\\s*\\)$`));if(o)return void 0===t[o[1]];throw Error(`Unsupported #if expression "${e}"`)}(i[1],t?.defines||{}),r=s&&e;n.push({parentActive:s,branchTaken:e,active:r}),s=r}else if(o||a){let e=(o||a)?.[1],i=!!t?.defines?.[e],r=o?i:!i,l=s&&r;n.push({parentActive:s,branchTaken:r,active:l}),s=l}else if(l){let e=n[n.length-1];if(!e)throw Error("Encountered #else without matching #if, #ifdef or #ifndef");e.active=e.parentActive&&!e.branchTaken,e.branchTaken=!0,s=e.active}else u?(n.pop(),s=!n.length||n[n.length-1].active):s&&r.push(e)}if(n.length>0)throw Error("Unterminated conditional block in shader source");return r.join("\n")}var Z=i(56823);function K(e){let{primitiveType:t,components:i}=Z.Co.getAttributeShaderTypeInfo(e),r="i32"===t?"int":"u32"===t?"uint":"float";return 1===i?r:`${"int"===r?"i":"uint"===r?"u":""}vec${i}`}function X(e){let t=[],i=/@location\s*\(\s*(\d+)\s*\)/g,r=i.exec(e);for(;r;)t.push(Number(r[1])),r=i.exec(e);return t}function Q(e){let t=[],i=/(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm,r=i.exec(e);for(;r;)t.push(r[1]),r=i.exec(e);return t}function J(e,t,i,r){let n=0,s=0,o=!1;for(let a=t;a<e.length;a++){let t=e[a],l=e[a+1];if(o){"\n"===t&&(o=!1);continue}if(s>0){"/"===t&&"*"===l?(s++,a++):"*"===t&&"/"===l&&(s--,a++);continue}if("/"===t&&"/"===l){o=!0,a++;continue}if("/"===t&&"*"===l){s=1,a++;continue}if(t===i&&n++,t===r&&0==--n)return a}return -1}function ee(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function et(e,t,i){let r=RegExp(`\\bfn\\s+${el(t)}\\s*\\(`,"g").exec(e);if(!r)throw Error(`ShaderPlugin varyings require WGSL ${i} entry point "${t}"`);let n=e.indexOf("(",r.index),s=ea(e,n,"(",")"),o=e.indexOf("{",s),a=ea(e,o,"{","}");if(s<0||o<0||a<0)throw Error(`Unable to parse WGSL ${i} entry point "${t}"`);return{openParenthesis:n,closeParenthesis:s,openBrace:o,closeBrace:a,parameters:e.slice(n+1,s)}}function ei(e,t){let i=er(e,t);if(!i)throw Error(`Unable to find WGSL stage I/O struct "${t}"`);return i}function er(e,t){let i=RegExp(`\\bstruct\\s+${el(t)}\\s*\\{`,"g").exec(e);if(!i)return null;let r=e.indexOf("{",i.index),n=ea(e,r,"{","}");return n<0?null:{openBrace:r,closeBrace:n,body:e.slice(r+1,n)}}function en(e,t,i){let r=t;if("/"===e[r]&&"/"===e[r+1]){let t=e.indexOf("\n",r+2);return t<0||t>i?i:t+1}if("/"===e[r]&&"*"===e[r+1]){let t=1;for(r+=2;r<i&&t>0;)"/"===e[r]&&"*"===e[r+1]?(t++,r+=2):"*"===e[r]&&"/"===e[r+1]?(t--,r+=2):r++}return r}function es(e){let t=[],i=/@location\s*\(\s*(\d+)\s*\)/g,r=i.exec(e);for(;r;)t.push(Number(r[1])),r=i.exec(e);return t}function eo(e){let t=[],i=/(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm,r=i.exec(e);for(;r;)t.push(r[1]),r=i.exec(e);return t}function ea(e,t,i,r){let n=0,s=0,o=!1;for(let a=t;a<e.length;a++){let t=e[a],l=e[a+1];if(o){"\n"===t&&(o=!1);continue}if(s>0){"/"===t&&"*"===l?(s++,a++):"*"===t&&"/"===l&&(s--,a++);continue}if("/"===t&&"/"===l){o=!0,a++;continue}if("/"===t&&"*"===l){s=1,a++;continue}if(t===i&&n++,t===r&&0==--n)return a}return -1}function el(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}let eu=`

${s.O_}
`,ec=`\
precision highp float;
`;function eh(e,t){let{source:i,stage:n,language:o="glsl",modules:c,defines:g={},hookFunctions:m=[],inject:v={},pluginInjections:y={},pluginVertexInputs:b={},pluginVaryings:_={},prologue:x=!0,log:w}=t;(0,p.v)("string"==typeof i,"shader source must be a string");let P="glsl"===o?({name:function(e,t="unnamed"){let i=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return i?i[1]:t}(i,void 0),language:"glsl",version:function(e){let t=100,i=e.match(/[^\s]+/g);if(i&&i.length>=2&&"#version"===i[0]){let e=parseInt(i[1],10);Number.isFinite(e)&&(t=e)}if(100!==t&&300!==t)throw Error(`Invalid GLSL version ${t}`);return t}(i)}).version:-1,S=e.shaderLanguageVersion,C=100===P?"#version 100":"#version 300 es",E=i.split("\n").slice(1).join("\n"),L={};c.forEach(e=>{Object.assign(L,e.defines)}),Object.assign(L,g);let A="";switch(o){case"wgsl":break;case"glsl":A=x?`\
${C}

// ----- PROLOGUE -------------------------
#define SHADER_TYPE_${n.toUpperCase()}

${function(e){switch(e?.gpu.toLowerCase()){case"apple":return`\
#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"nvidia":return`\
#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case"intel":return`\
#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"amd":return`\
#define AMD_GPU
`;default:return`\
#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}(e)}
${"fragment"===n?ec:""}

// ----- APPLICATION DEFINES -------------------------

${function(e={}){let t="";for(let i in e){let r=e[i];(r||Number.isFinite(r))&&(t+=`#define ${i.toUpperCase()} ${e[i]}
`)}return t}(L)}

`:`${C}
`}let T=f(m),M={},I={},R={};for(let e in ef(y,M,I,R),v){let t="string"==typeof v[e]?{injection:v[e],order:0}:v[e],i=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(i){let r=i[2],n=i[3];r?"decl"===n?I[e]=[t]:R[e]=[t]:M[e]=[t]}else R[e]=[t]}if("vertex"===n){let e=function(e,t){let i=[];for(let[r,n]of Object.entries(t))(function(e,t){let i=ee(t);if(RegExp(`\\b(?:in|attribute)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${i}\\s*(?:\\[|;)`).test(e))throw Error(`ShaderPlugin vertex input "${t}" conflicts with an existing GLSL input`)})(e,r),i.push(`in ${K(n)} ${r};`);return i.join("\n")}(E,b);e&&(I["vs:#decl"]=I["vs:#decl"]||[],I["vs:#decl"].push({injection:e,order:Number.MIN_SAFE_INTEGER}))}let O=function(e,t,i){let r=[],n=[];for(let[a,l]of Object.entries(i)){var s=e,o=a;if(RegExp(`\\b(?:flat\\s+|smooth\\s+)?(?:in|out|varying)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${el(o)}\\s*(?:\\[|;)`).test(s))throw Error(`ShaderPlugin varying "${o}" conflicts with existing GLSL stage I/O`);let i="flat"===l.interpolation?"flat ":"",u="vertex"===t?"out":"in";r.push(`${i}${u} ${K(l.type)} ${a};`),"vertex"===t&&n.push(`${a} = ${function(e){let{primitiveType:t,components:i}=Z.Co.getAttributeShaderTypeInfo(e),r="u32"===t?"0u":"i32"===t?"0":"0.0";return 1===i?r:`${K(e)}(${r})`}(l.type)};`)}return{declarations:r.join("\n"),initialization:n.join("\n")}}(E,n,_);if(O.declarations){let e="vertex"===n?"vs:#decl":"fs:#decl";I[e]=I[e]||[],I[e].push({injection:O.declarations,order:Number.MIN_SAFE_INTEGER})}for(let e of(O.initialization&&(R["vs:#main-start"]=R["vs:#main-start"]||[],R["vs:#main-start"].push({injection:O.initialization,order:Number.MIN_SAFE_INTEGER})),c)){w&&(0,r.ZG)(e,E,w),A+=ep(e,n,w);let t=e.instance?.normalizedInjections[n]||{};for(let e in t){let i=/^(v|f)s:#([\w-]+)$/.exec(e);if(i){let r="decl"===i[2]?I:R;r[e]=r[e]||[],r[e].push(t[e])}else M[e]=M[e]||[],M[e].push(t[e])}}return A+="// ----- MAIN SHADER SOURCE -------------------------",A+=eu,A=(0,s.bv)(A,n,I)+d(T[n],M)+E,A=(0,s.bv)(A,n,R),"glsl"===o&&P!==S&&(A=function(e,t){if(300!==Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100))throw Error("luma.gl v9 only supports GLSL 3.00 shader sources");switch(t){case"vertex":return u(e,a);case"fragment":return u(e,l);default:throw Error(t)}}(A,n)),"glsl"===o&&(0,h.N1)(A,n,w),A.trim()}function ed(e){return function(t){let i={};for(let r of e){let e=r.getUniforms?.(t,i);Object.assign(i,e)}return i}}function ef(e,t,i,r){for(let n in e){let s=/^(v|f)s:(#)?([\w-]+)$/.exec(n);if(s){let o=s[2],a=s[3],l=o?"decl"===a?i:r:t;l[n]=l[n]||[],l[n].push(...e[n])}else r[n]=r[n]||[],r[n].push(...e[n])}}function ep(e,t,i){let r;switch(t){case"vertex":r=e.vs||"";break;case"fragment":r=e.fs||"";break;case"wgsl":r=e.source||"";break;default:(0,p.v)(!1)}if(!e.name)throw Error("Shader module must have a name");(0,h.mY)(e,t,{log:i});let n=e.name.toUpperCase().replace(/[^0-9a-z]/gi,"_"),s=`\
// ----- MODULE ${e.name} ---------------

`;return"wgsl"!==t&&(s+=`#define MODULE_${n}
`),s+=`${r}
`}function eg(e,t,i){if(0===e&&t>=100)throw Error(`Application binding "${i}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below 100.`)}function em(e,t,i,r){if(0===t&&i<100)throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${i}. Module-owned explicit group-0 bindings must be 100 or higher.`)}function ev(e,t,i,r){let n=e.get(t)||new Set;if(n.has(i))throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${i}.`);n.add(i),e.set(t,n)}function ey(e,t,i){return`${e}:${t}:${i}`}class eb{static defaultShaderAssemblers={};_hookFunctions=[];_defaultModules=[];static getDefaultShaderAssembler(e){return((0,p.v)("glsl"===e||"wgsl"===e),"wgsl"===e)?(eb.defaultShaderAssemblers.wgsl=eb.defaultShaderAssemblers.wgsl||new ex,eb.defaultShaderAssemblers.wgsl):(eb.defaultShaderAssemblers.glsl=eb.defaultShaderAssemblers.glsl||new e_,eb.defaultShaderAssemblers.glsl)}addDefaultModule(e){this._defaultModules.find(t=>t.name===("string"==typeof e?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let t="string"==typeof e?e:e.name;this._defaultModules=this._defaultModules.filter(e=>e.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}_getModuleList(e=[]){let t=Array(this._defaultModules.length+e.length),i={},n=0;for(let e=0,r=this._defaultModules.length;e<r;++e){let r=this._defaultModules[e],s=r.name;t[n++]=r,i[s]=!0}for(let r=0,s=e.length;r<s;++r){let s=e[r],o=s.name;i[o]||(t[n++]=s,i[o]=!0)}return t.length=n,(0,r.$g)(t),t}}class e_ extends eb{shaderLanguage="glsl";assembleGLSLShaderPair(e){let t=this._getModuleList(e.modules),i=this._hookFunctions;return{...function(e){let{vs:t,fs:i}=e,r=(0,n.$Q)(e.modules||[]);return{vs:eh(e.platformInfo,{...e,source:t,stage:"vertex",modules:r}),fs:eh(e.platformInfo,{...e,source:i,stage:"fragment",modules:r}),getUniforms:ed(r)}}({...e,vs:e.vs,fs:e.fs,modules:t,hookFunctions:i}),modules:t}}}class ex extends eb{shaderLanguage="wgsl";_wgslBindingRegistry=new Map;assembleWGSLShader(e){let t=this._getModuleList(e.modules),i=this._hookFunctions,o=ex.getShaderPreprocessorDefines(e,t),a="wgsl"===e.platformInfo.shaderLanguage&&e.source?Y(e.source,{defines:o}):e.source,{source:l,getUniforms:u,bindingAssignments:c}=function(e){let t=(0,n.$Q)(e.modules||[]),{source:i,bindingAssignments:o}=function(e,t){var i,n,o,a,l,u,c,h,g,_;let{source:S,stage:C,modules:E,defines:L={},hookFunctions:A=[],inject:T={},pluginInjections:M={},pluginVertexInputs:I={},pluginVaryings:R={},vertexEntryPoint:O="vertexMain",fragmentEntryPoint:k="fragmentMain",log:B}=t;(0,p.v)("string"==typeof S,"shader source must be a string");let z=function(e,t,i){let r=Object.entries(i);if(0===r.length)return{source:e,declarations:"",initialization:""};let n=function(e,t){let i=RegExp(`\\bfn\\s+${ee(t)}\\s*\\(`,"g").exec(e);if(!i)throw Error(`ShaderPlugin vertex inputs require WGSL vertex entry point "${t}"`);let r=e.indexOf("(",i.index),n=J(e,r,"(",")");if(n<0)throw Error(`Unable to parse WGSL vertex entry point "${t}" parameters`);return{openParenthesis:r,closeParenthesis:n}}(e,t),s=e.slice(n.openParenthesis+1,n.closeParenthesis),o=function(e,t){let i=X(t),r=new Set(Q(t));for(let n of function(e){let t=[],i=/:\s*([A-Za-z_][\w]*)\b/g,r=i.exec(e);for(;r;)t.push(r[1]),r=i.exec(e);return t}(t)){let t=function(e,t){let i=RegExp(`\\bstruct\\s+${ee(t)}\\s*\\{`,"g").exec(e);if(!i)return null;let r=e.indexOf("{",i.index),n=J(e,r,"{","}");return n<0?null:e.slice(r+1,n)}(e,n);if(null!==t)for(let e of(i.push(...X(t)),Q(t)))r.add(e)}return{locations:i,names:r}}(e,s),a=new Set(o.locations),l=[],u=[],c=[];for(let[t,i]of r){if(o.names.has(t)||function(e,t){let i=ee(t),r=RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${i}\\b`,"g"),n=r.exec(e);for(;n;){if(0===function(e,t){let i=0,r=0,n=!1;for(let s=0;s<t;s++){let t=e[s],o=e[s+1];if(n){"\n"===t&&(n=!1);continue}if(r>0){"/"===t&&"*"===o?(r++,s++):"*"===t&&"/"===o&&(r--,s++);continue}"/"===t&&"/"===o?(n=!0,s++):"/"===t&&"*"===o?(r=1,s++):"{"===t?i++:"}"===t&&i--}return i}(e,n.index))return!0;n=r.exec(e)}return!1}(e,t))throw Error(`ShaderPlugin vertex input "${t}" conflicts with an existing WGSL shader input or variable`);let r=function(e){let t=0;for(;e.has(t);)t++;return t}(a);a.add(r);let n=`_luma_${t}`;l.push(`@location(${r}) ${n}: ${i}`),u.push(`var<private> ${t}: ${i};`),c.push(`${t} = ${n};`)}let h=s.trim()?",\n  ":"\n  ",d=s.trim()?"":"\n",f=`${s}${h}${l.join(",\n  ")}${d}`;return{source:e.slice(0,n.openParenthesis+1)+f+e.slice(n.closeParenthesis),declarations:u.join("\n"),initialization:c.join("\n")}}(Y(S,{defines:L}),O,I),D=function(e,t,i,r){let n=Object.entries(r);if(0===n.length)return{source:e,declarations:"",vertexInitialization:"",fragmentInitialization:""};let s=e,o=et(s,t,"vertex"),a=function(e,t){let i=e.slice(t.closeParenthesis+1,t.openBrace),r=/->\s*([A-Za-z_][\w]*)\s*$/.exec(i.trim());if(!r||null===er(e,r[1]))throw Error("ShaderPlugin varyings require the WGSL vertex entry point to return a named struct");return r[1]}(s,o),l=et(s,i,"fragment"),u=function(e,t){let i=[];for(let r of function(e,t){let i=[],r=0,n=0,s=0;for(let t=0;t<e.length;t++){let o=e[t];"("===o&&n++,")"===o&&n--,"<"===o&&s++,">"===o&&s--,","===o&&0===n&&0===s&&(i.push(e.slice(r,t)),r=t+1)}return i.push(e.slice(r)),i}(t.parameters,",")){let t=/(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:\s*([A-Za-z_][\w]*)\s*$/.exec(r.trim());t&&er(e,t[2])&&i.push({name:t[1],type:t[2]})}if(1!==i.length)throw Error(`ShaderPlugin varyings require exactly one named WGSL fragment input struct; found ${i.length}`);return i[0]}(s,l),c=ei(s,a),h=ei(s,u.type),d=new Set([...eo(o.parameters),...eo(c.body),...eo(l.parameters),...eo(h.body)]),f=new Set([...es(c.body),...es(h.body)]),p=[],g=[],m=[],v=[];for(let[e,t]of n){if(d.has(e)||function(e,t){let i=RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${el(t)}\\b`,"g"),r=i.exec(e);for(;r;){if(0===function(e,t){let i=0;for(let r=0;r<t;r++){let n=en(e,r,t);if(n!==r){r=n-1;continue}"{"===e[r]&&i++,"}"===e[r]&&i--}return i}(e,r.index))return!0;r=i.exec(e)}return!1}(s,e))throw Error(`ShaderPlugin varying "${e}" conflicts with existing WGSL stage I/O or a module variable`);let i=function(e){let t=0;for(;e.has(t);)t++;return t}(f);f.add(i);let r="flat"===t.interpolation?" @interpolate(flat)":"";p.push(`  @location(${i})${r} ${e}: ${t.type},`),g.push(`var<private> ${e}: ${t.type};`),m.push(`${e} = ${function(e){let{primitiveType:t,components:i}=Z.Co.getAttributeShaderTypeInfo(e),r=`${t}(0)`;return 1===i?r:`${e}(${r})`}(t.type)};`),v.push(`${e} = ${u.name}.${e};`)}for(let e of(function(e,t,i,r){let n=RegExp(`\\b${el(t)}\\s*\\(`,"g"),s=n.exec(e);for(;s;){if(s.index<i||s.index>r)throw Error(`ShaderPlugin varying output struct "${t}" is constructed outside the selected vertex entry point`);s=n.exec(e)}}(s,a,o.openBrace,o.closeBrace),o=et(s=function(e,t,i,r){let n=RegExp(`\\b${el(t)}\\s*\\(`,"g"),s=[],o=n.exec(e);for(;o;){if(o.index>i.openBrace&&o.index<i.closeBrace){let r=e.indexOf("(",o.index),n=ea(e,r,"(",")");if(n<0||n>i.closeBrace)throw Error(`Unable to parse WGSL output constructor "${t}"`);s.push({openParenthesis:r,closeParenthesis:n})}o=n.exec(e)}for(let t of s.sort((e,t)=>t.closeParenthesis-e.closeParenthesis)){let i=e.slice(t.openParenthesis+1,t.closeParenthesis).trim()?", ":"";e=e.slice(0,t.closeParenthesis)+i+r.join(", ")+e.slice(t.closeParenthesis)}return e}(s,a,o,n.map(([e])=>e)),t,"vertex"),s=function(e,t,i){let r=function(e,t,i){let r=[],n=t;for(;n<i;)if(n=en(e,n,i),"return"!==e.slice(n,n+6)||/[A-Za-z0-9_]/.test(e[n+6]||""))n++;else{let t=n+6,s=function(e,t,i){let r=0,n=0;for(let s=t;s<i;s++){let t=en(e,s,i);if(t!==s){s=t-1;continue}let o=e[s];if("("===o&&r++,")"===o&&r--,"["===o&&n++,"]"===o&&n--,";"===o&&0===r&&0===n)return s}return -1}(e,t,i);if(s<0)throw Error("Unable to parse WGSL return statement in selected vertex entry point");r.push({start:n,expressionStart:t,semicolon:s}),n=s+1}return r}(e,t.openBrace+1,t.closeBrace);for(let t=r.length-1;t>=0;t--){let n=r[t],s=e.slice(n.expressionStart,n.semicolon).trim();if(!s)throw Error("ShaderPlugin varying vertex entry point cannot use an empty return");let o=`_luma_vertexOutput${t}`,a=i.map(e=>`${o}.${e} = ${e};`).join("\n"),l=`{
var ${o} = ${s};
${a}
return ${o};
}`;e=e.slice(0,n.start)+l+e.slice(n.semicolon+1)}return e}(s,o,n.map(([e])=>e)),(a===u.type?[a]:[a,u.type]).map(e=>ei(s,e).closeBrace).sort((e,t)=>t-e)))s=s.slice(0,e)+`${p.join("\n")}
`+s.slice(e);if(l=et(s,i,"fragment"),!RegExp(`\\b${el(u.name)}\\s*:`).test(l.parameters))throw Error(`Unable to preserve WGSL fragment input "${u.name}"`);return{source:s,declarations:g.join("\n"),vertexInitialization:m.join("\n"),fragmentInitialization:v.join("\n")}}(z.source,O,k,R),F=D.source,N="",$=f(A),j={},U={},V={};for(let e in ef(M,j,U,V),T){let t="string"==typeof T[e]?{injection:T[e],order:0}:T[e],i=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(i){let r=i[2],n=i[3];r?"decl"===n?U[e]=[t]:V[e]=[t]:j[e]=[t]}else V[e]=[t]}i=z.declarations,n=z.initialization,o=U,a=V,i&&(o["vs:#decl"]=o["vs:#decl"]||[],o["vs:#decl"].push({injection:i,order:Number.MIN_SAFE_INTEGER})),n&&(a["vs:#main-start"]=a["vs:#main-start"]||[],a["vs:#main-start"].push({injection:n,order:Number.MIN_SAFE_INTEGER})),l=D,u=U,c=V,l.declarations&&(u["vs:#decl"]=u["vs:#decl"]||[],u["vs:#decl"].push({injection:l.declarations,order:Number.MIN_SAFE_INTEGER})),l.vertexInitialization&&(c["vs:#main-start"]=c["vs:#main-start"]||[],c["vs:#main-start"].push({injection:l.vertexInitialization,order:Number.MIN_SAFE_INTEGER})),l.fragmentInitialization&&(c["fs:#main-start"]=c["fs:#main-start"]||[],c["fs:#main-start"].push({injection:l.fragmentInitialization,order:Number.MIN_SAFE_INTEGER}));let G=function(e){let t=x(e,v),i=new Map;for(let e of t){if("auto"===e.bindingToken)continue;let t=Number(e.bindingToken),r=Number(e.groupToken);eg(r,t,e.name),ev(i,r,t,`application binding "${e.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},n=w(e,v,e=>(function(e,t,i){let{match:r,bindingToken:n,groupToken:s,name:o}=e,a=Number(s);if("auto"===n){let e=function(e,t){let i=t.get(e)||new Set,r=0;for(;i.has(r);)r++;return r}(a,t);return eg(a,e,o),ev(t,a,e,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${e})`)}return i.sawSupportedBindingDeclaration=!0,r})(e,i,r));if(P(e)&&!r.sawSupportedBindingDeclaration)throw Error('Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.');return{source:n}}(F),W=function(e){let t=new Map;for(let i of x(e,y)){let e=Number(i.bindingToken),r=Number(i.groupToken);eg(r,e,i.name),ev(t,r,e,`application binding "${i.name}"`)}return t}(G.source),H=function(e,t,i,r){let n=new Map;if(!t)return n;for(let s of e)for(let e of function(e,t){let i=[];for(let r of x(Y(e.source||"",{defines:t}),m))i.push({name:r.name,group:Number(r.groupToken)});return i}(s,r)){let r=ey(e.group,s.name,e.name),o=t.get(r);if(void 0!==o){let t=n.get(e.group)||new Map,s=t.get(o);if(s&&s!==r)throw Error(`Duplicate WGSL binding reservation for modules "${s}" and "${r}": group ${e.group}, binding ${o}.`);ev(i,e.group,o,`registered module binding "${r}"`),t.set(o,r),n.set(e.group,t)}}return n}(E,t._bindingRegistry,W,L),q=[];for(let e of E){B&&(0,r.ZG)(e,F,B);let i=function(e,t,i){let r=[],n={sawSupportedBindingDeclaration:x(e,m).length>0,nextHintedBindingLocation:"number"==typeof t.firstBindingSlot?t.firstBindingSlot:null},s=w(e,m,e=>(function(e,t){let{module:i,context:r,bindingAssignments:n,relocationState:s}=t,{match:o,bindingToken:a,groupToken:l,name:u}=e,c=Number(l);if("auto"===a){let e=ey(c,i.name,u),t=r.bindingRegistry?.get(e),a=void 0!==t?t:function(e,t,i,r,n){let s=t.get(e)||new Set,o=new Set,a=`${e}:`,l=`${a}${i}:`;for(let[e,t]of n||[])e.startsWith(l)&&o.add(t);let u=r??(0===e?100:s.size>0?Math.max(...s)+1:0);for(;s.has(u)||o.has(u);)u++;for(let[e,t]of n||[])t===u&&e.startsWith(a)&&n?.delete(e);return u}(c,r.usedBindingsByGroup,i.name,s.nextHintedBindingLocation??void 0,r.bindingRegistry);return(em(i.name,c,a,u),void 0!==t&&function(e,t,i,r){let n=e.get(t);if(!n)return!1;let s=n.get(i);if(!s)return!1;if(s!==r)throw Error(`Registered module binding "${r}" collided with "${s}": group ${t}, binding ${i}.`);return!0}(r.reservedBindingKeysByGroup,c,a,e))?n.push({moduleName:i.name,name:u,group:c,location:a}):(ev(r.usedBindingsByGroup,c,a,`module "${i.name}" binding "${u}"`),r.bindingRegistry?.set(e,a),n.push({moduleName:i.name,name:u,group:c,location:a}),null!==s.nextHintedBindingLocation&&void 0===t&&(s.nextHintedBindingLocation=a+1)),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${a})`)}let h=Number(a);return em(i.name,c,h,u),ev(r.usedBindingsByGroup,c,h,`module "${i.name}" binding "${u}"`),n.push({moduleName:i.name,name:u,group:c,location:h}),o})(e,{module:t,context:i,bindingAssignments:r,relocationState:n}));if(P(e)&&!n.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:s,bindingAssignments:r}}(Y(ep(e,"wgsl",B),{defines:L}),e,{usedBindingsByGroup:W,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:H});q.push(...i.bindingAssignments),N+=i.source;let n=(h=e,{...h.instance?.normalizedInjections.vertex||{},...h.instance?.normalizedInjections.fragment||{}});for(let e in n){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let i="decl"===t[2]?U:V;i[e]=i[e]||[],i[e].push(n[e])}else j[e]=j[e]||[],j[e].push(n[e])}}return N+=eu,N=(0,s.bv)(N,C,function(e){let t=[...e["vs:#decl"]||[],...e["fs:#decl"]||[]];return t.length?{"vs:#decl":t}:{}}(U),!1,"wgsl",{vertex:O,fragment:k})+(g=$,_=j,d(g.vertex,_,"wgsl")+d(g.fragment,_,"wgsl"))+function(e){if(0===e.length)return"";let t="// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------\n";for(let i of e)t+=`// ${i.moduleName}.${i.name} -> @group(${i.group}) @binding(${i.location})
`;return t+"\n"}(q)+G.source,function(e){let t=x(e,m==m||m===v?b:m).find(e=>"auto"===e.bindingToken);if(!t)return;let i=function(e,t){let i,r,n=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm;for(r=n.exec(e);r&&r.index<=t;)i=r[1],r=n.exec(e);return i}(e,t.index);if(i)throw Error(`Unresolved @binding(auto) for module "${i}" binding "${t.name}" remained in assembled WGSL source.`);if(function(e,t){let i=e.indexOf(eu);return!(i>=0)||t>i}(e,t.index))throw Error(`Unresolved @binding(auto) for application binding "${t.name}" remained in assembled WGSL source.`);throw Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${t.match.replace(/\s+/g," ").trim()}".`)}(N=(0,s.bv)(N,C,V,!1,"wgsl",{vertex:O,fragment:k})),{source:N,bindingAssignments:q}}(e.platformInfo,{...e,source:e.source,stage:"vertex",modules:t});return{source:i,getUniforms:ed(t),bindingAssignments:o,bindingTable:C(i,o),shaderLayout:A(i,{vertexEntryPoint:e.vertexEntryPoint,scanVertexAttributes:e.scanVertexAttributes})}}({...e,source:a,defines:o,_bindingRegistry:this._wgslBindingRegistry,modules:t,hookFunctions:i}),h="wgsl"===e.platformInfo.shaderLanguage?Y(l,{defines:o}):l;return{source:h,getUniforms:u,modules:t,bindingAssignments:c,bindingTable:C(h,c),shaderLayout:A(h,{vertexEntryPoint:e.vertexEntryPoint,scanVertexAttributes:e.scanVertexAttributes})}}static getShaderPreprocessorDefines(e,t){return{...ex.getPlatformPreprocessorDefines(e.platformInfo),...t.reduce((e,t)=>(Object.assign(e,t.defines),e),{}),...e.defines}}static getPlatformPreprocessorDefines(e){let t=e.limits||{};return{LUMA_SUPPORTS_VERTEX_STORAGE_BUFFERS:"webgpu"===e.type&&(t.maxStorageBuffersInVertexStage||0)>0,LUMA_FP32_TAN_PRECISION_WORKAROUND:"webgpu"===e.type&&"nvidia"!==e.gpu.toLowerCase()&&"amd"!==e.gpu.toLowerCase(),LUMA_FP64_INTEGER_ARITHMETIC:"webgpu"===e.type&&"apple"===e.gpu.toLowerCase()}}}},80839:(e,t,i)=>{"use strict";function r(e,t){if(!e){let e=Error(t||"shadertools: assertion failed.");throw Error.captureStackTrace?.(e,r),e}}i.d(t,{v:()=>r})},80931:(e,t,i)=>{"use strict";let r;i.d(t,{$M:()=>o,Vl:()=>l,_Z:()=>f,cT:()=>d,on:()=>u,zi:()=>a});var n=i(68169),s=i(23778);function o(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function a(e,t){let i=e%t;return i<0?t+i:i}function l(e){return[e[12],e[13],e[14]]}function u(e){return{left:h(e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:h(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:h(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:h(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:h(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:h(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}}let c=new s.P;function h(e,t,i,r){c.set(e,t,i);let n=c.len();return{distance:r/n,normal:new s.P(-e/n,-t/n,-i/n)}}function d(e,t){let{size:i=1,startIndex:s=0}=t,o=void 0!==t.endIndex?t.endIndex:e.length,a=(o-s)/i;r=n.A.allocate(r,a,{type:Float32Array,size:2*i});let l=s,u=0;for(;l<o;){for(let t=0;t<i;t++){let n=e[l++];r[u+t]=n,r[u+t+i]=n-Math.fround(n)}u+=2*i}return r.subarray(0,a*i*2)}function f(e){let t=null,i=!1;for(let r of e)r&&(t?(i||(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],i=!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}},81274:(e,t,i)=>{"use strict";i.d(t,{O_:()=>a,bv:()=>u,Uu:()=>l});let r={vertex:`\
#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,fragment:`\
#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`},n=/void\s+main\s*\([^)]*\)\s*\{\n?/,s=/}\n?[^{}]*$/,o=[],a="__LUMA_INJECT_DECLARATIONS__";function l(e){let t={vertex:{},fragment:{}};for(let i in e){let r=e[i];"string"==typeof r&&(r={order:0,injection:r}),t[function(e){let t=e.slice(0,2);switch(t){case"vs":return"vertex";case"fs":return"fragment";default:throw Error(t)}}(i)][i]=r}return t}function u(e,t,i,l=!1,h="glsl",d={}){let f="vertex"===t;for(let t in i){let r=i[t];r.sort((e,t)=>e.order-t.order),o.length=r.length;for(let e=0,t=r.length;e<t;++e)o[e]=r[e].injection;let l=`${o.join("\n")}
`;switch(t){case"vs:#decl":("wgsl"===h||f)&&(e=e.replace(a,l));break;case"vs:#main-start":("wgsl"===h||f)&&(e="wgsl"===h?c(e,"vertex",l,"start",d.vertex):e.replace(n,e=>e+l));break;case"vs:#main-end":("wgsl"===h||f)&&(e="wgsl"===h?c(e,"vertex",l,"end",d.vertex):e.replace(s,e=>l+e));break;case"fs:#decl":"wgsl"!==h&&f||(e=e.replace(a,l));break;case"fs:#main-start":"wgsl"!==h&&f||(e="wgsl"===h?c(e,"fragment",l,"start",d.fragment):e.replace(n,e=>e+l));break;case"fs:#main-end":"wgsl"!==h&&f||(e="wgsl"===h?c(e,"fragment",l,"end",d.fragment):e.replace(s,e=>l+e));break;default:e=e.replace(t,e=>e+l)}}return e=e.replace(a,""),l&&(e=e.replace(/\}\s*$/,e=>e+r[t])),e}function c(e,t,i,r,n){let s=function(e,t,i){let r="vertex"===t?"@vertex":"@fragment",n=e.indexOf(r);if(n<0)return null;let s=i?e.search(RegExp(`\\bfn\\s+${i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\s*\\(`)):e.indexOf("fn",n);if(s<0)return null;let o=e.indexOf("{",s);if(o<0)return null;let a=0;for(let t=o;t<e.length;t++){let i=e[t];if("{"===i)a++;else if("}"===i&&0==--a)return{openBraceIndex:o,closeBraceIndex:t}}return null}(e,t,n);if(!s)return e;if("start"===r){let t=s.openBraceIndex+1;return`${e.slice(0,t)}
${i}${e.slice(t)}`}return`${e.slice(0,s.closeBraceIndex)}${i}${e.slice(s.closeBraceIndex)}`}},82611:(e,t,i)=>{"use strict";function r(e){let t,i={};return r=>{for(let n in r)if(!function(e,t){if(e===t)return!0;if(Array.isArray(e)){let i=e.length;if(!t||t.length!==i)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}return!1}(r[n],i[n])){t=e(r),i=r;break}return t}}i.d(t,{A:()=>r})},85002:(e,t,i)=>{"use strict";i.d(t,{M:()=>n});var r=i(29101);let n={id:null,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,featureLevel:void 0,optionalFeatures:[],xrCompatible:!1,createCanvasContext:void 0,webgl:{},onError:(e,t)=>{},onResize:(e,t)=>{let[i,n]=e.getDevicePixelSize();r.R.log(1,`${e} resized => ${i}x${n}px`)()},onPositionChange:(e,t)=>{let[i,n]=e.getPosition();r.R.log(1,`${e} repositioned => ${i},${n}`)()},onVisibilityChange:e=>r.R.log(1,`${e} Visibility changed ${e.isVisible}`)(),onDevicePixelRatioChange:(e,t)=>r.R.log(1,`${e} DPR changed ${t.oldRatio} => ${e.devicePixelRatio}`)(),debug:function(){var e,t;return e=r.R.get("debug"),t=function(){let e=globalThis.process;if(e?.env)return e.env.NODE_ENV}(),null!=e?!!e:void 0!==t&&"production"!==t}(),debugGPUTime:!1,debugShaders:r.R.get("debug-shaders")||void 0,debugFramebuffers:!!r.R.get("debug-framebuffers"),debugFactories:!!r.R.get("debug-factories"),debugWebGL:!!r.R.get("debug-webgl"),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0}},85175:(e,t,i)=>{"use strict";i.d(t,{Oy:()=>a,Pz:()=>o,c0:()=>l,z2:()=>s});var r=i(29101);let n=!1;async function s(){u()}function o(e,t){return u(),e}async function a(e){u()}function l(e){return null}function u(){n||(n=!0,r.R.warn("Import @luma.gl/webgl/debug before enabling WebGL debugging.")())}},87765:(e,t,i)=>{"use strict";i.d(t,{pF:()=>g,I7:()=>f,PI:()=>h,zc:()=>p});var r=i(69978),n=i(29101),s=i(32646),o=i(22839),a=i(11094),l=i(27832),u=i(20996),c=i(85002);class h{}function d(e){if(void 0!==e){if(null===e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e)return e;if(e instanceof Error)return e.message;if(Array.isArray(e))return e.map(d);if("object"==typeof e){var t,i;if("toString"in(t=e)&&"function"==typeof t.toString&&t.toString!==Object.prototype.toString){let t=String(e);if("[object Object]"!==t)return t}return"message"in(i=e)&&"type"in i?function(e){let t="string"==typeof e.type?e.type:"message",i="string"==typeof e.message?e.message:"",r="number"==typeof e.lineNum?e.lineNum:null,n="number"==typeof e.linePos?e.linePos:null,s=null!==r&&null!==n?` @ ${r}:${n}`:null!==r?` @ ${r}`:"";return`${t}${s}: ${i}`.trim()}(e):e.constructor?.name||"Object"}return String(e)}}class f{features;disabledFeatures;constructor(e=[],t){this.features=new Set(e),this.disabledFeatures=t||{}}*[Symbol.iterator](){yield*this.features}has(e){return!this.disabledFeatures?.[e]&&this.features.has(e)}}function p(){if("undefined"==typeof HTMLCanvasElement)return!1;let e=HTMLCanvasElement.prototype;return"layoutSubtree"in e&&"function"==typeof e.requestPaint}class g{static defaultProps={...c.M};get[Symbol.toStringTag](){return"Device"}toString(){return`Device(${this.id})`}toJSON(){return this.toString()}id;props;userData={};statsManager=r.d;_factories={};timestamp=0;_reused=!1;_moduleData={};wgslLanguageFeatures=new Set;_textureCaps={};_debugGPUTimeQuery=null;constructor(e){this.props={...g.defaultProps,...e},this.id=this.props.id||(0,s.L)(this[Symbol.toStringTag].toLowerCase())}getVertexFormatInfo(e){return a.E.getVertexFormatInfo(e)}isVertexFormatSupported(e){return!0}getTextureFormatInfo(e){return l.vz.getInfo(e)}getTextureFormatCapabilities(e){let t=this._textureCaps[e];if(!t){let i=this._getDeviceTextureFormatCapabilities(e);t=this._getDeviceSpecificTextureFormatCapabilities(i),this._textureCaps[e]=t}return t}getMipLevelCount(e,t,i=1){return 1+Math.floor(Math.log2(Math.max(e,t,i)))}isExternalImage(e){return"undefined"!=typeof ImageData&&e instanceof ImageData||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"undefined"!=typeof VideoFrame&&e instanceof VideoFrame||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas}getExternalImageSize(e){if("undefined"!=typeof ImageData&&e instanceof ImageData||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height};if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)return{width:e.naturalWidth,height:e.naturalHeight};if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)return{width:e.videoWidth,height:e.videoHeight};if("undefined"!=typeof VideoFrame&&e instanceof VideoFrame)return{width:e.displayWidth,height:e.displayHeight};throw Error("Unknown image type")}isTextureFormatSupported(e){return this.getTextureFormatCapabilities(e).create}isTextureFormatFilterable(e){return this.getTextureFormatCapabilities(e).filter}isTextureFormatRenderable(e){return this.getTextureFormatCapabilities(e).render}isTextureFormatCompressed(e){return l.vz.isCompressed(e)}getSupportedCompressedTextureFormats(){let e=[];for(let t of Object.keys((0,u.PU)()))this.isTextureFormatCompressed(t)&&this.isTextureFormatSupported(t)&&e.push(t);return e}pushDebugGroup(e){this.commandEncoder.pushDebugGroup(e)}popDebugGroup(){this.commandEncoder?.popDebugGroup()}insertDebugMarker(e){this.commandEncoder?.insertDebugMarker(e)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(e,t,...i){if(!this.props.onError(e,t)){var r,s;let o=(r=t,s=i,[d(r),...s.map(d).filter(e=>void 0!==e)].filter(e=>void 0!==e));return n.R.error("webgl"===this.type?"%cWebGL":"%cWebGPU","color: white; background: red; padding: 2px 6px; border-radius: 3px;",e.message,...o)}return()=>{}}debug(){if(this.props.debug);else{let e=`\
'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`;n.R.once(0,e)()}}getDefaultCanvasContext(){if(!this.canvasContext)throw Error("Device has no default CanvasContext. See props.createCanvasContext");return this.canvasContext}createFence(){throw Error("createFence() not implemented")}beginRenderPass(e){return this.commandEncoder.beginRenderPass(e)}beginComputePass(e){return this.commandEncoder.beginComputePass(e)}writeBufferViaCommandEncoder(e,t,i,r=0){throw Error("writeBufferViaCommandEncoder() not implemented")}generateMipmapsWebGPU(e){throw Error("not implemented")}_createSharedRenderPipelineWebGL(e){throw Error("_createSharedRenderPipelineWebGL() not implemented")}_createBindGroupLayoutWebGPU(e,t){throw Error("_createBindGroupLayoutWebGPU() not implemented")}_createBindGroupWebGPU(e,t,i,r,n){throw Error("_createBindGroupWebGPU() not implemented")}_supportsDebugGPUTime(){return this.features.has("timestamp-query")&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(e=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:"timestamp",count:e}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),this._debugGPUTimeQuery=null)}_isDebugGPUTimeEnabled(){return null!==this._debugGPUTimeQuery}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(e,t){throw Error("not implemented")}readPixelsToBufferWebGL(e,t){throw Error("not implemented")}setParametersWebGL(e){throw Error("not implemented")}getParametersWebGL(e){throw Error("not implemented")}withParametersWebGL(e,t){throw Error("not implemented")}clearWebGL(e){throw Error("not implemented")}resetWebGL(){throw Error("not implemented")}getModuleData(e){return this._moduleData[e]||={},this._moduleData[e]}static _getCanvasContextProps(e){return!0===e.createCanvasContext?{}:e.createCanvasContext}_getDeviceTextureFormatCapabilities(e){let t=l.vz.getCapabilities(e),i=e=>("string"==typeof e?this.features.has(e):e)??!0,r=i(t.create);return{format:e,create:r,render:r&&i(t.render),filter:r&&i(t.filter),blend:r&&i(t.blend),store:r&&i(t.store)}}_normalizeBufferProps(e){(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e={data:e});let t={...e};if((e.usage||0)&o.h.INDEX&&(!e.indexType&&(e.data instanceof Uint32Array?t.indexType="uint32":e.data instanceof Uint16Array?t.indexType="uint16":e.data instanceof Uint8Array&&(t.data=new Uint16Array(e.data),t.indexType="uint16")),!t.indexType))throw Error("indices buffer content must be of type uint16 or uint32");return t}}},88459:(e,t,i)=>{"use strict";function r(e,t){if(!e){let e=Error(t??"luma.gl assertion failed.");throw Error.captureStackTrace?.(e,r),e}}function n(e,t){return r(e,t),e}i.d(t,{i:()=>n,v:()=>r})},90460:(e,t,i)=>{"use strict";i.d(t,{Kx:()=>o,We:()=>u,p5:()=>a,tg:()=>l});var r=i(77397),n=i(12187);let s={DEFAULT:"default",LNGLAT:"lnglat",METER_OFFSETS:"meter-offsets",LNGLAT_OFFSETS:"lnglat-offsets",CARTESIAN:"cartesian"};Object.defineProperty(s,"IDENTITY",{get:()=>(r.A.deprecated("COORDINATE_SYSTEM.IDENTITY","COORDINATE_SYSTEM.CARTESIAN")(),s.CARTESIAN)});let o={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},a={common:0,meters:1,pixels:2},l={click:"onClick",dblclick:"onClick",panstart:"onDragStart",panmove:"onDrag",panend:"onDragEnd"},u={multipan:[n.uq,{threshold:10,pointers:2,trackpad:!0}],pinch:[n.h1,{trackpad:!0},null,["multipan"]],pan:[n.uq,{threshold:1},["pinch"],["multipan"]],dblclick:[n.Cx,{event:"dblclick",taps:2,enable:!1}],dblclickdrag:[n.Cp,{event:"dblclickdrag",enable:!1},["dblclick"],null],click:[n.Cx,{event:"click"},["dblclickdrag"],["dblclick","dblclickdrag"]]}},91963:(e,t,i)=>{"use strict";i.d(t,{Jc:()=>n,gO:()=>s,h0:()=>o});var r=i(29101);function n(e,t,i){let n=e.bindings.find(e=>e.name===t||`${e.name.toLocaleLowerCase()}uniforms`===t.toLocaleLowerCase());return n||i?.ignoreWarnings||r.R.warn(`Binding ${t} not set: Not found in shader layout.`)(),n||null}function s(e,t){if(!t)return{};if(function(e){let t=Object.keys(e);return t.length>0&&t.every(e=>/^\d+$/.test(e))}(t))return Object.fromEntries(Object.entries(t).map(([e,t])=>[Number(e),{...t}]));let i={};for(let[r,s]of Object.entries(t)){let t=n(e,r),o=t?.group??0;i[o]||={},i[o][r]=s}return i}function o(e){let t={};for(let i of Object.values(e))Object.assign(t,i);return t}},94061:(e,t,i)=>{"use strict";i.d(t,{hW:()=>v});var r,n=i(28804);let s="4.1.2";function o(e,t){if(!e)throw Error(t||"Assertion failed")}function a(e){let t;if(!e)return 0;switch(typeof e){case"number":t=e;break;case"object":t=e.logLevel||e.priority||0;break;default:return 0}return o(Number.isFinite(t)&&t>=0),t}let l=()=>{};class u{constructor({level:e=0}={}){this.userData={},this._onceCache=new Set,this._level=e}set level(e){this.setLevel(e)}get level(){return this.getLevel()}setLevel(e){return this._level=e,this}getLevel(){return this._level}warn(e,...t){return this._log("warn",0,e,t,{once:!0})}error(e,...t){return this._log("error",0,e,t)}log(e,t,...i){return this._log("log",e,t,i)}info(e,t,...i){return this._log("info",e,t,i)}once(e,t,...i){return this._log("once",e,t,i,{once:!0})}_log(e,t,i,r,n={}){let s=function(e){let{logLevel:t,message:i}=e;e.logLevel=a(t);let r=e.args?Array.from(e.args):[];for(;r.length&&r.shift()!==i;);switch(typeof t){case"string":case"function":void 0!==i&&r.unshift(i),e.message=t;break;case"object":Object.assign(e,t)}"function"==typeof e.message&&(e.message=e.message());let n=typeof e.message;return o("string"===n||"object"===n),Object.assign(e,{args:r},e.opts)}({logLevel:t,message:i,args:this._buildArgs(t,i,r),opts:n});return this._createLogFunction(e,s,n)}_buildArgs(e,t,i){return[e,t,...i]}_createLogFunction(e,t,i){if(!this._shouldLog(t.logLevel))return l;let r=this._getOnceTag(i.tag??t.tag??t.message);if((i.once||t.once)&&void 0!==r){if(this._onceCache.has(r))return l;this._onceCache.add(r)}return this._emit(e,t)}_shouldLog(e){return this.getLevel()>=a(e)}_getOnceTag(e){if(void 0!==e)try{return"string"==typeof e?e:String(e)}catch{return}}}class c{constructor(e,t,i="sessionStorage"){this.storage=function(e){try{let t=window[e],i="__storage_test__";return t.setItem(i,i),t.removeItem(i),t}catch(e){return null}}(i),this.id=e,this.config=t,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(e){if(Object.assign(this.config,e),this.storage){let e=JSON.stringify(this.config);this.storage.setItem(this.id,e)}}_loadConfiguration(){let e={};if(this.storage){let t=this.storage.getItem(this.id);e=t?JSON.parse(t):{}}return Object.assign(this.config,e),this}}function h(e){return"string"!=typeof e?e:r[e=e.toUpperCase()]||r.WHITE}!function(e){e[e.BLACK=30]="BLACK",e[e.RED=31]="RED",e[e.GREEN=32]="GREEN",e[e.YELLOW=33]="YELLOW",e[e.BLUE=34]="BLUE",e[e.MAGENTA=35]="MAGENTA",e[e.CYAN=36]="CYAN",e[e.WHITE=37]="WHITE",e[e.BRIGHT_BLACK=90]="BRIGHT_BLACK",e[e.BRIGHT_RED=91]="BRIGHT_RED",e[e.BRIGHT_GREEN=92]="BRIGHT_GREEN",e[e.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",e[e.BRIGHT_BLUE=94]="BRIGHT_BLUE",e[e.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",e[e.BRIGHT_CYAN=96]="BRIGHT_CYAN",e[e.BRIGHT_WHITE=97]="BRIGHT_WHITE"}(r||(r={}));var d=i(77227);class f{getHighResolutionTimer(){let e;if((0,n.B)()&&d.x.performance)e=d.x?.performance?.now?.();else if("hrtime"in d.eh){let t=d.eh?.hrtime?.();e=1e3*t[0]+t[1]/1e6}else e=Date.now();return e}getMemoryUsageMB(){let e=d.x?.performance,t=e?.memory?.usedJSHeapSize;return null==t?null:Math.trunc(t/1024/1024)}}let p=new f;globalThis.Probe=f,globalThis.probe=p;let g={debug:(0,n.B)()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},m={enabled:!0,level:0};class v extends u{constructor({id:e}={id:""}){super({level:0}),this.VERSION=s,this._startTs=p.getHighResolutionTimer(),this._deltaTs=p.getHighResolutionTimer(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=e,this.userData={},this._storage=new c(`__probe-${this.id}__`,{[this.id]:m}),this.timeStamp(`${this.id} started`),function(e,t=["constructor"]){for(let i of Object.getOwnPropertyNames(Object.getPrototypeOf(e))){let r=e[i];"function"!=typeof r||t.find(e=>i===e)||(e[i]=r.bind(e))}}(this),Object.seal(this)}isEnabled(){return this._getConfiguration().enabled}getLevel(){return this._getConfiguration().level}getTotal(){return Number((p.getHighResolutionTimer()-this._startTs).toPrecision(10))}getDelta(){return Number((p.getHighResolutionTimer()-this._deltaTs).toPrecision(10))}set priority(e){this.level=e}get priority(){return this.level}getPriority(){return this.level}enable(e=!0){return this._updateConfiguration({enabled:e}),this}setLevel(e){return this._updateConfiguration({level:e}),this}get(e){return this._getConfiguration()[e]}set(e,t){this._updateConfiguration({[e]:t})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(e,t){if(!e)throw Error(t||"Assertion failed")}warn(e,...t){return this._log("warn",0,e,t,{method:g.warn,once:!0})}error(e,...t){return this._log("error",0,e,t,{method:g.error})}deprecated(e,t){return this.warn(`\`${e}\` is deprecated and will be removed \
in a later version. Use \`${t}\` instead`)}removed(e,t){return this.error(`\`${e}\` has been removed. Use \`${t}\` instead`)}probe(e,t,...i){let r=p.getMemoryUsageMB();if(null!==r){let e=`${r}MB `;"function"==typeof t?t=()=>`${e}${t()}`:"string"==typeof t&&(t=`${e}${t}`)}return this._log("log",e,t,i,{method:g.log,time:!0,once:!0})}log(e,t,...i){return this._log("log",e,t,i,{method:g.debug})}info(e,t,...i){return this._log("info",e,t,i,{method:console.info})}once(e,t,...i){return this._log("once",e,t,i,{method:g.debug||g.info,once:!0})}table(e,t,i){return t?this._log("table",e,t,i&&[i]||[],{method:console.table||l,tag:function(e){for(let t in e)for(let i in e[t])return i||"untitled";return"empty"}(t)}):l}time(e,t){return this._log("time",e,t,[],{method:console.time?console.time:console.info})}timeEnd(e,t){return this._log("time",e,t,[],{method:console.timeEnd?console.timeEnd:console.info})}timeStamp(e,t){return this._log("time",e,t,[],{method:console.timeStamp||l})}group(e,t,i={collapsed:!1}){let r=(i.collapsed?console.groupCollapsed:console.group)||console.info;return this._log("group",e,t,[],{method:r})}groupCollapsed(e,t,i={}){return this.group(e,t,Object.assign({},i,{collapsed:!0}))}groupEnd(e){return this._log("groupEnd",e,"",[],{method:console.groupEnd||l})}withGroup(e,t,i){this.group(e,t)();try{i()}finally{this.groupEnd(e)()}}trace(){console.trace&&console.trace()}_shouldLog(e){return this.isEnabled()&&super._shouldLog(e)}_emit(e,t){let i=t.method;o(i),t.total=this.getTotal(),t.delta=this.getDelta(),this._deltaTs=p.getHighResolutionTimer();let r=function(e,t,i){if("string"==typeof t){var r;let s=i.time?function(e,t=8){let i=Math.max(t-e.length,0);return`${" ".repeat(i)}${e}`}((r=i.total)<10?`${r.toFixed(2)}ms`:r<100?`${r.toFixed(1)}ms`:r<1e3?`${r.toFixed(0)}ms`:`${(r/1e3).toFixed(2)}s`):"";t=function(e,t,i){if(!n.B&&"string"==typeof e){if(t){let i=h(t);e=`\u001b[${i}m${e}\u001b[39m`}if(i){let t=h(i);e=`\u001b[${t+10}m${e}\u001b[49m`}}return e}(t=i.time?`${e}: ${s}  ${t}`:`${e}: ${t}`,i.color,i.background)}return t}(this.id,t.message,t);return i.bind(console,r,...t.args)}_getConfiguration(){return this._storage.config[this.id]||this._updateConfiguration(m),this._storage.config[this.id]}_updateConfiguration(e){let t=this._storage.config[this.id]||{...m};this._storage.setConfiguration({[this.id]:{...t,...e}})}}v.VERSION=s},94878:(e,t,i)=>{"use strict";i.d(t,{$W:()=>r,Cc:()=>function e(t,i,r){return s(t)?t.map((t,n)=>e(t,i[n],r)):r*i+(1-r)*t},Fl:()=>n,aI:()=>function e(t,i,n){let o=r.EPSILON;n&&(r.EPSILON=n);try{if(t===i)return!0;if(s(t)&&s(i)){if(t.length!==i.length)return!1;for(let r=0;r<t.length;++r)if(!e(t[r],i[r]))return!1;return!0}if(t&&t.equals)return t.equals(i);if(i&&i.equals)return i.equals(t);if("number"==typeof t&&"number"==typeof i)return Math.abs(t-i)<=r.EPSILON*Math.max(1,Math.abs(t),Math.abs(i));return!1}finally{r.EPSILON=o}},cy:()=>s,qE:()=>o}),globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}};let r=globalThis.mathgl.config;function n(e,{precision:t=r.precision}={}){return e=Math.round(e/r.EPSILON)*r.EPSILON,`${parseFloat(e.toPrecision(t))}`}function s(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function o(e,t,i){return function(e,t,i){if(s(e)){i=i||(e.clone?e.clone():Array(e.length));for(let r=0;r<i.length&&r<e.length;++r){let n="number"==typeof e?e:e[r];i[r]=t(n,r,i)}return i}return t(e)}(e,e=>Math.max(t,Math.min(i,e)))}},96356:(e,t,i)=>{"use strict";i.d(t,{N1:()=>u,Uj:()=>o,V$:()=>l,mY:()=>a});var r=i(80839);let n=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,s=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function o(e){return`${e.name}Uniforms`}function a(e,t,i={}){let s=function(e,t){let i=Object.keys(e.uniformTypes||{});if(!i.length)return null;let r=function(e,t){let i="wgsl"===t?e.source:"vertex"===t?e.vs:e.fs;return i?function(e,t,i){let r="wgsl"===t?function(e,t){let i=RegExp(`\\bstruct\\s+${t}\\b`,"m").exec(e);if(!i)return null;let r=e.indexOf("{",i.index);if(r<0)return null;let n=0;for(let t=r;t<e.length;t++){let i=e[t];if("{"===i){n++;continue}if("}"===i&&0==--n)return e.slice(r+1,t)}return null}(e,i):function(e,t){let i=l(e).find(e=>e.blockName===t);return i?.body||null}(e,i);if(!r)return null;let s=[];for(let e of r.split("\n")){let i=e.replace(/\/\/.*$/,"").trim();if(!i||i.startsWith("#"))continue;let r="wgsl"===t?i.match(/^([A-Za-z0-9_]+)\s*:/):i.match(n);r&&s.push(r[1])}return s}(i,"wgsl"===t?"wgsl":"glsl",o(e)):null}(e,t);return r?{moduleName:e.name,uniformBlockName:o(e),stage:t,expectedUniformNames:i,actualUniformNames:r,matches:function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(i,r)}:null}(e,t);if(!s||s.matches)return s;let u=function(e){let{expectedUniformNames:t,actualUniformNames:i}=e,r=t.filter(e=>!i.includes(e)),n=i.filter(e=>!t.includes(e)),s=[`Expected ${t.length} fields, found ${i.length}.`],o=function(e,t){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}(t,i);return o&&s.push(o),r.length&&s.push(`Missing from shader block (${r.length}): ${c(r)}.`),n.length&&s.push(`Unexpected in shader block (${n.length}): ${c(n)}.`),t.length<=12&&i.length<=12&&(r.length||n.length)&&(s.push(`Expected: ${t.join(", ")}.`),s.push(`Actual: ${i.join(", ")}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${s.join(" ")}`}(s);return i.log?.error?.(u,s)(),!1!==i.throwOnError&&(0,r.v)(!1,u),s}function l(e){let t=[];for(let i of e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"").matchAll(s)){let e=i[1]?.trim()||null;t.push({blockName:i[2],body:i[3],instanceName:i[4]||null,layoutQualifier:e,hasLayoutQualifier:!!e,isStd140:!!(e&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(e))})}return t}function u(e,t,i,r){let n=l(e).filter(e=>!e.isStd140),s=new Set;for(let e of n){if(s.has(e.blockName))continue;s.add(e.blockName);let n=r?.label?`${r.label} `:"",o=e.hasLayoutQualifier?`declares ${e.layoutQualifier.replace(/\s+/g," ").trim()} instead of layout(std140)`:"does not declare layout(std140)",a=`${n}${t} shader uniform block ${e.blockName} ${o}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;i?.warn?.(a,e)()}return n}function c(e,t=8){if(e.length<=t)return e.join(", ");let i=e.length-t;return`${e.slice(0,t).join(", ")}, ... (${i} more)`}},97253:(e,t,i)=>{"use strict";i.d(t,{A:()=>o,k:()=>s});var r=i(77397);let n={};function s(e){n=e}function o(e,t,i,s){r.A.level>0&&n[e]&&n[e].call(null,t,i,s)}},97693:(e,t,i)=>{"use strict";i.d(t,{M:()=>l});var r=i(51153),n=i(29101),s=i(32646);function o(e,t,i,r){if(r?.inlineSource){let r=function(e,t,i){let r="";for(let i=t-2;i<=t;i++){let n=e[i-1];void 0!==n&&(r+=a(n,t,void 0))}return r}(t,i),n=e.linePos>0?`${" ".repeat(e.linePos+5)}^^^
`:"";return`
${r}${n}${e.type.toUpperCase()}: ${e.message}

`}let n="error"===e.type?"red":"orange";return r?.html?`<div class='luma-compiler-log-${e.type}' style="color:${n};"><b> ${e.type.toUpperCase()}: ${e.message}</b></div>`:`${e.type.toUpperCase()}: ${e.message}`}function a(e,t,i){let r=i?.html?e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"):e;return`${function(e,t){let i="";for(let t=e.length;t<4;++t)i+=" ";return i+e}(String(t),4)}: ${r}${i?.html?"<br/>":"\n"}`}class l extends r.F{get[Symbol.toStringTag](){return"Shader"}stage;source;compilationStatus="pending";constructor(e,t){t={...t,debugShaders:t.debugShaders||e.props.debugShaders||"errors"},super(e,{id:function(e){return function(e,t="unnamed"){let i=/#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/.exec(e);return i?.[1]??t}(e.source)||e.id||(0,s.L)(`unnamed ${e.stage}-shader`)}(t),...t},l.defaultProps),this.stage=this.props.stage,this.source=this.props.source}getCompilationInfoSync(){return null}getTranslatedSource(){return null}async debugShader(){let e=this.props.debugShaders;switch(e){case"never":return;case"errors":if("success"===this.compilationStatus)return}try{let t=await this.getCompilationInfo();if("warnings"===e&&t?.length===0)return;this._displayShaderLog(t,this.id)}catch(e){n.R.warn(`Shader ${this.id}: failed to fetch compilation info during debug logging`,e)()}}_displayShaderLog(e,t){if("undefined"==typeof document||!document?.createElement)return;let i=`${this.stage} shader "${t}"`,r=function(e,t,i){let r="",n=t.split(/\r?\n/),s=e.slice().sort((e,t)=>e.lineNum-t.lineNum);switch(i?.showSourceCode||"no"){case"all":let l=0;for(let e=1;e<=n.length;e++){let t=n[e-1],u=s[l];for(t&&u&&(r+=a(t,e,i));s.length>l&&u.lineNum===e;){let e=s[l++];e&&(r+=o(e,n,e.lineNum,{...i,inlineSource:!1}))}}for(;s.length>l;){let e=s[l++];e&&(r+=o(e,[],0,{...i,inlineSource:!1}))}return r;case"issues":case"no":for(let t of e)r+=o(t,n,t.lineNum,{inlineSource:i?.showSourceCode!=="no"});return r}}(e,this.source,{showSourceCode:"all",html:!0}),n=this.getTranslatedSource(),s=document.createElement("div");s.innerHTML=`\
<h1>Compilation error in ${i}</h1>
<div style="display:flex;position:fixed;top:10px;right:20px;gap:2px;">
<button id="copy">Copy source</button><br/>
<button id="close">Close</button>
</div>
<code><pre>${r}</pre></code>`,n&&(s.innerHTML+=`<br /><h1>Translated Source</h1><br /><br /><code><pre>${n}</pre></code>`),s.style.top="0",s.style.left="0",s.style.background="white",s.style.position="fixed",s.style.zIndex="9999",s.style.maxWidth="100vw",s.style.maxHeight="100vh",s.style.overflowY="auto",document.body.appendChild(s);let l=s.querySelector(".luma-compiler-log-error");l?.scrollIntoView(),s.querySelector("button#close").onclick=()=>{s.remove()},s.querySelector("button#copy").onclick=()=>{navigator.clipboard.writeText(this.source)}}static defaultProps={...r.F.defaultProps,language:"auto",stage:void 0,source:"",sourceMap:null,entryPoint:"main",debugShaders:void 0}}},97789:(e,t,i)=>{"use strict";i.d(t,{J:()=>a});var r=i(49500),n=i(2389),s=i(18075),o=i(41098);let a={props:{},name:"gouraudMaterial",bindingLayout:[{name:"gouraudMaterial",group:3}],vs:s.l.replace("phongMaterial","gouraudMaterial"),fs:s.X.replace("phongMaterial","gouraudMaterial"),source:o.X.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[n.x,r.$n],uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...a.defaultUniforms,...e})}},99585:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});class r{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1)}update(){if(!this._inProgress)return!1;if(null===this._handle){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}}}}]);