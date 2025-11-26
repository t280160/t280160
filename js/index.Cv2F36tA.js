import{d as Bi,u as Cr,o as Lr,a as Xs,w as fi,c as mn,b as Ht,v as Ls,l as cl,h as Kt,r as un,n as sa,j as _r,F as hl,m as ul,g as Sr,q as fl,t as Rs,k as fn,e as dl,s as bc,x as Sc}from"./index.OvUy6Y8w.js";import{j as wc,M as Ec}from"./index.oSeDNUzI.js";function zi(i){let e=i[0],t=i[1],n=i[2];return Math.sqrt(e*e+t*t+n*n)}function Ps(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i}function Tc(i,e,t,n){return i[0]=e,i[1]=t,i[2]=n,i}function aa(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i}function oa(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i}function Ac(i,e,t){return i[0]=e[0]*t[0],i[1]=e[1]*t[1],i[2]=e[2]*t[2],i}function Cc(i,e,t){return i[0]=e[0]/t[0],i[1]=e[1]/t[1],i[2]=e[2]/t[2],i}function Vr(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i}function Lc(i,e){let t=e[0]-i[0],n=e[1]-i[1],r=e[2]-i[2];return Math.sqrt(t*t+n*n+r*r)}function Rc(i,e){let t=e[0]-i[0],n=e[1]-i[1],r=e[2]-i[2];return t*t+n*n+r*r}function la(i){let e=i[0],t=i[1],n=i[2];return e*e+t*t+n*n}function Pc(i,e){return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i}function Dc(i,e){return i[0]=1/e[0],i[1]=1/e[1],i[2]=1/e[2],i}function Ds(i,e){let t=e[0],n=e[1],r=e[2],s=t*t+n*n+r*r;return s>0&&(s=1/Math.sqrt(s)),i[0]=e[0]*s,i[1]=e[1]*s,i[2]=e[2]*s,i}function pl(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function ca(i,e,t){let n=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2];return i[0]=r*l-s*o,i[1]=s*a-n*l,i[2]=n*o-r*a,i}function Ic(i,e,t,n){let r=e[0],s=e[1],a=e[2];return i[0]=r+n*(t[0]-r),i[1]=s+n*(t[1]-s),i[2]=a+n*(t[2]-a),i}function Fc(i,e,t,n,r){const s=Math.exp(-n*r);let a=e[0],o=e[1],l=e[2];return i[0]=t[0]+(a-t[0])*s,i[1]=t[1]+(o-t[1])*s,i[2]=t[2]+(l-t[2])*s,i}function Oc(i,e,t){let n=e[0],r=e[1],s=e[2],a=t[3]*n+t[7]*r+t[11]*s+t[15];return a=a||1,i[0]=(t[0]*n+t[4]*r+t[8]*s+t[12])/a,i[1]=(t[1]*n+t[5]*r+t[9]*s+t[13])/a,i[2]=(t[2]*n+t[6]*r+t[10]*s+t[14])/a,i}function Nc(i,e,t){let n=e[0],r=e[1],s=e[2],a=t[3]*n+t[7]*r+t[11]*s+t[15];return a=a||1,i[0]=(t[0]*n+t[4]*r+t[8]*s)/a,i[1]=(t[1]*n+t[5]*r+t[9]*s)/a,i[2]=(t[2]*n+t[6]*r+t[10]*s)/a,i}function zc(i,e,t){let n=e[0],r=e[1],s=e[2];return i[0]=n*t[0]+r*t[3]+s*t[6],i[1]=n*t[1]+r*t[4]+s*t[7],i[2]=n*t[2]+r*t[5]+s*t[8],i}function Uc(i,e,t){let n=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2],c=t[3],h=o*s-l*r,f=l*n-a*s,d=a*r-o*n,g=o*d-l*f,m=l*h-a*d,p=a*f-o*h,u=c*2;return h*=u,f*=u,d*=u,g*=2,m*=2,p*=2,i[0]=n+h+g,i[1]=r+f+m,i[2]=s+d+p,i}const Bc=(function(){const i=[0,0,0],e=[0,0,0];return function(t,n){Ps(i,t),Ps(e,n),Ds(i,i),Ds(e,e);let r=pl(i,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}})();function kc(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}class Ft extends Array{constructor(e=0,t=e,n=e){return super(e,t,n),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,n=e){return e.length?this.copy(e):(Tc(this,e,t,n),this)}copy(e){return Ps(this,e),this}add(e,t){return t?aa(this,e,t):aa(this,this,e),this}sub(e,t){return t?oa(this,e,t):oa(this,this,e),this}multiply(e){return e.length?Ac(this,this,e):Vr(this,this,e),this}divide(e){return e.length?Cc(this,this,e):Vr(this,this,1/e),this}inverse(e=this){return Dc(this,e),this}len(){return zi(this)}distance(e){return e?Lc(this,e):zi(this)}squaredLen(){return la(this)}squaredDistance(e){return e?Rc(this,e):la(this)}negate(e=this){return Pc(this,e),this}cross(e,t){return t?ca(this,e,t):ca(this,this,e),this}scale(e){return Vr(this,this,e),this}normalize(){return Ds(this,this),this}dot(e){return pl(this,e)}equals(e){return kc(this,e)}applyMatrix3(e){return zc(this,this,e),this}applyMatrix4(e){return Oc(this,this,e),this}scaleRotateMatrix4(e){return Nc(this,this,e),this}applyQuaternion(e){return Uc(this,this,e),this}angle(e){return Bc(this,e)}lerp(e,t){return Ic(this,this,e,t),this}smoothLerp(e,t,n){return Fc(this,this,e,t,n),this}clone(){return new Ft(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],n=this[1],r=this[2];return this[0]=e[0]*t+e[4]*n+e[8]*r,this[1]=e[1]*t+e[5]*n+e[9]*r,this[2]=e[2]*t+e[6]*n+e[10]*r,this.normalize()}}const ha=new Ft;let Vc=1,Gc=1,ua=!1;class Hc{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=Vc++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let n in t)this.addAttribute(n,t[n])}addAttribute(e,t){if(this.attributes[e]=t,t.id=Gc++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:n,type:r})=>{if(!this.attributes[n]){console.warn(`active attribute ${n} not being supplied`);return}const s=this.attributes[n];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const o=s.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(t+h,o,s.type,s.normalized,s.stride+l,s.offset+h*c),this.gl.enableVertexAttribArray(t+h),this.gl.renderer.vertexAttribDivisor(t+h,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((r,{name:s})=>{const a=this.attributes[s];a.needsUpdate&&this.updateAttribute(a)});let n=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(n=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!ua)return console.warn("No position buffer data found to compute bounds"),ua=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,n=e.size;this.bounds||(this.bounds={min:new Ft,max:new Ft,center:new Ft,scale:new Ft,radius:1/0});const r=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=t.length;l<c;l+=n){const h=t[l],f=t[l+1],d=t[l+2];r.x=Math.min(h,r.x),r.y=Math.min(f,r.y),r.z=Math.min(d,r.z),s.x=Math.max(h,s.x),s.y=Math.max(f,s.y),s.z=Math.max(d,s.z)}o.sub(s,r),a.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,n=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,a=t.length;s<a;s+=n)ha.fromArray(t,s),r=Math.max(r,this.bounds.center.squaredDistance(ha));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Wc=1;const fa={};class qc{constructor(e,{vertex:t,fragment:n,uniforms:r={},transparent:s=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=Wc++,t||console.warn("vertex shader not supplied"),n||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:n})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${da(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${da(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<n;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,t,n,r){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=n,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,n){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=n}setStencilOp(e,t,n){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=n}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let a=this.uniforms[s.uniformName];for(const o of s.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return pa(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return pa(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return t=t+1,a.value.update(t),Gr(this.gl,s.type,r,t);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{t=t+1,l.update(t),o.push(t)}),Gr(this.gl,s.type,r,o)}Gr(this.gl,s.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Gr(i,e,t,n){n=n.length?Xc(n):n;const r=i.renderer.state.uniformLocations.get(t);if(n.length)if(r===void 0||r.length!==n.length)i.renderer.state.uniformLocations.set(t,n.slice(0));else{if(jc(r,n))return;r.set?r.set(n):Yc(r,n),i.renderer.state.uniformLocations.set(t,r)}else{if(r===n)return;i.renderer.state.uniformLocations.set(t,n)}switch(e){case 5126:return n.length?i.uniform1fv(t,n):i.uniform1f(t,n);case 35664:return i.uniform2fv(t,n);case 35665:return i.uniform3fv(t,n);case 35666:return i.uniform4fv(t,n);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return n.length?i.uniform1iv(t,n):i.uniform1i(t,n);case 35671:case 35667:return i.uniform2iv(t,n);case 35672:case 35668:return i.uniform3iv(t,n);case 35673:case 35669:return i.uniform4iv(t,n);case 35674:return i.uniformMatrix2fv(t,!1,n);case 35675:return i.uniformMatrix3fv(t,!1,n);case 35676:return i.uniformMatrix4fv(t,!1,n)}}function da(i){let e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Xc(i){const e=i.length,t=i[0].length;if(t===void 0)return i;const n=e*t;let r=fa[n];r||(fa[n]=r=new Float32Array(n));for(let s=0;s<e;s++)r.set(i[s],s*t);return r}function jc(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yc(i,e){for(let t=0,n=i.length;t<n;t++)i[t]=e[t]}let Hr=0;function pa(i){Hr>100||(console.warn(i),Hr++,Hr>100&&console.warn("More than 100 program warnings - stopping logs."))}const Wr=new Ft;let $c=1;class Zc{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:n=150,dpr:r=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:h=!1,powerPreference:f="default",autoClear:d=!0,webgl:g=2}={}){const m={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f};this.dpr=r,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=d,this.id=$c++,g===2&&(this.gl=e.getContext("webgl2",m)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",m)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,n),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,n=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=n,this.state.viewport.y=r,this.gl.viewport(n,r,e,t))}setScissor(e,t,n=0,r=0){this.gl.scissor(n,r,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,n,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===n&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=n,this.state.blendFunc.dstAlpha=r,n!==void 0?this.gl.blendFuncSeparate(e,t,n,r):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,n){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===n||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=n||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,n||0))}setStencilOp(e,t,n){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===n||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=n,this.gl.stencilOp(e,t,n))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,n){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][n].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:n,sort:r}){let s=[];if(t&&n&&t.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(n&&a.frustumCulled&&t&&!t.frustumIntersectsMesh(a)||s.push(a))}),r){const a=[],o=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!t)&&(c.worldMatrix.getTranslation(Wr),Wr.applyMatrix4(t.projectionViewMatrix),c.zDepth=Wr.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:e,camera:t,target:n=null,update:r=!0,sort:s=!0,frustumCull:a=!0,clear:o}){n===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(n),this.setViewport(n.width,n.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!n||n.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!n||n.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:t})})}}function Kc(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i}function Jc(i,e,t,n,r){return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function Qc(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=t*t+n*n+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),i[0]=t*a,i[1]=n*a,i[2]=r*a,i[3]=s*a,i}function eh(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]*e[3]}function th(i){return i[0]=0,i[1]=0,i[2]=0,i[3]=1,i}function nh(i,e,t){t=t*.5;let n=Math.sin(t);return i[0]=n*e[0],i[1]=n*e[1],i[2]=n*e[2],i[3]=Math.cos(t),i}function ma(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=t[0],l=t[1],c=t[2],h=t[3];return i[0]=n*h+a*o+r*c-s*l,i[1]=r*h+a*l+s*o-n*c,i[2]=s*h+a*c+n*l-r*o,i[3]=a*h-n*o-r*l-s*c,i}function ih(i,e,t){t*=.5;let n=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return i[0]=n*l+a*o,i[1]=r*l+s*o,i[2]=s*l-r*o,i[3]=a*l-n*o,i}function rh(i,e,t){t*=.5;let n=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return i[0]=n*l-s*o,i[1]=r*l+a*o,i[2]=s*l+n*o,i[3]=a*l-r*o,i}function sh(i,e,t){t*=.5;let n=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return i[0]=n*l+r*o,i[1]=r*l-n*o,i[2]=s*l+a*o,i[3]=a*l-s*o,i}function ah(i,e,t,n){let r=e[0],s=e[1],a=e[2],o=e[3],l=t[0],c=t[1],h=t[2],f=t[3],d,g,m,p,u;return g=r*l+s*c+a*h+o*f,g<0&&(g=-g,l=-l,c=-c,h=-h,f=-f),1-g>1e-6?(d=Math.acos(g),m=Math.sin(d),p=Math.sin((1-n)*d)/m,u=Math.sin(n*d)/m):(p=1-n,u=n),i[0]=p*r+u*l,i[1]=p*s+u*c,i[2]=p*a+u*h,i[3]=p*o+u*f,i}function oh(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=t*t+n*n+r*r+s*s,o=a?1/a:0;return i[0]=-t*o,i[1]=-n*o,i[2]=-r*o,i[3]=s*o,i}function lh(i,e){return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=e[3],i}function ch(i,e){let t=e[0]+e[4]+e[8],n;if(t>0)n=Math.sqrt(t+1),i[3]=.5*n,n=.5/n,i[0]=(e[5]-e[7])*n,i[1]=(e[6]-e[2])*n,i[2]=(e[1]-e[3])*n;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;n=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),i[r]=.5*n,n=.5/n,i[3]=(e[s*3+a]-e[a*3+s])*n,i[s]=(e[s*3+r]+e[r*3+s])*n,i[a]=(e[a*3+r]+e[r*3+a])*n}return i}function hh(i,e,t="YXZ"){let n=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return t==="XYZ"?(i[0]=n*a*l+r*s*o,i[1]=r*s*l-n*a*o,i[2]=r*a*o+n*s*l,i[3]=r*a*l-n*s*o):t==="YXZ"?(i[0]=n*a*l+r*s*o,i[1]=r*s*l-n*a*o,i[2]=r*a*o-n*s*l,i[3]=r*a*l+n*s*o):t==="ZXY"?(i[0]=n*a*l-r*s*o,i[1]=r*s*l+n*a*o,i[2]=r*a*o+n*s*l,i[3]=r*a*l-n*s*o):t==="ZYX"?(i[0]=n*a*l-r*s*o,i[1]=r*s*l+n*a*o,i[2]=r*a*o-n*s*l,i[3]=r*a*l+n*s*o):t==="YZX"?(i[0]=n*a*l+r*s*o,i[1]=r*s*l+n*a*o,i[2]=r*a*o-n*s*l,i[3]=r*a*l-n*s*o):t==="XZY"&&(i[0]=n*a*l-r*s*o,i[1]=r*s*l-n*a*o,i[2]=r*a*o+n*s*l,i[3]=r*a*l+n*s*o),i}const uh=Kc,fh=Jc,dh=eh,ph=Qc;class mh extends Array{constructor(e=0,t=0,n=0,r=1){super(e,t,n,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return th(this._target),this.onChange(),this}set(e,t,n,r){return e.length?this.copy(e):(fh(this._target,e,t,n,r),this.onChange(),this)}rotateX(e){return ih(this._target,this._target,e),this.onChange(),this}rotateY(e){return rh(this._target,this._target,e),this.onChange(),this}rotateZ(e){return sh(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return oh(this._target,e),this.onChange(),this}conjugate(e=this._target){return lh(this._target,e),this.onChange(),this}copy(e){return uh(this._target,e),this.onChange(),this}normalize(e=this._target){return ph(this._target,e),this.onChange(),this}multiply(e,t){return t?ma(this._target,e,t):ma(this._target,this._target,e),this.onChange(),this}dot(e){return dh(this._target,e)}fromMatrix3(e){return ch(this._target,e),this.onChange(),this}fromEuler(e,t){return hh(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return nh(this._target,e,t),this.onChange(),this}slerp(e,t){return ah(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const gh=1e-6;function _h(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}function xh(i,e,t,n,r,s,a,o,l,c,h,f,d,g,m,p,u){return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i[4]=s,i[5]=a,i[6]=o,i[7]=l,i[8]=c,i[9]=h,i[10]=f,i[11]=d,i[12]=g,i[13]=m,i[14]=p,i[15]=u,i}function vh(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function yh(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],g=e[11],m=e[12],p=e[13],u=e[14],_=e[15],M=t*o-n*a,b=t*l-r*a,x=t*c-s*a,v=n*l-r*o,E=n*c-s*o,L=r*c-s*l,y=h*p-f*m,T=h*u-d*m,P=h*_-g*m,V=f*u-d*p,X=f*_-g*p,N=d*_-g*u,R=M*N-b*X+x*V+v*P-E*T+L*y;return R?(R=1/R,i[0]=(o*N-l*X+c*V)*R,i[1]=(r*X-n*N-s*V)*R,i[2]=(p*L-u*E+_*v)*R,i[3]=(d*E-f*L-g*v)*R,i[4]=(l*P-a*N-c*T)*R,i[5]=(t*N-r*P+s*T)*R,i[6]=(u*x-m*L-_*b)*R,i[7]=(h*L-d*x+g*b)*R,i[8]=(a*X-o*P+c*y)*R,i[9]=(n*P-t*X-s*y)*R,i[10]=(m*E-p*x+_*M)*R,i[11]=(f*x-h*E-g*M)*R,i[12]=(o*T-a*V-l*y)*R,i[13]=(t*V-n*T+r*y)*R,i[14]=(p*b-m*v-u*M)*R,i[15]=(h*v-f*b+d*M)*R,i):null}function ml(i){let e=i[0],t=i[1],n=i[2],r=i[3],s=i[4],a=i[5],o=i[6],l=i[7],c=i[8],h=i[9],f=i[10],d=i[11],g=i[12],m=i[13],p=i[14],u=i[15],_=e*a-t*s,M=e*o-n*s,b=e*l-r*s,x=t*o-n*a,v=t*l-r*a,E=n*l-r*o,L=c*m-h*g,y=c*p-f*g,T=c*u-d*g,P=h*p-f*m,V=h*u-d*m,X=f*u-d*p;return _*X-M*V+b*P+x*T-v*y+E*L}function ga(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],f=e[8],d=e[9],g=e[10],m=e[11],p=e[12],u=e[13],_=e[14],M=e[15],b=t[0],x=t[1],v=t[2],E=t[3];return i[0]=b*n+x*o+v*f+E*p,i[1]=b*r+x*l+v*d+E*u,i[2]=b*s+x*c+v*g+E*_,i[3]=b*a+x*h+v*m+E*M,b=t[4],x=t[5],v=t[6],E=t[7],i[4]=b*n+x*o+v*f+E*p,i[5]=b*r+x*l+v*d+E*u,i[6]=b*s+x*c+v*g+E*_,i[7]=b*a+x*h+v*m+E*M,b=t[8],x=t[9],v=t[10],E=t[11],i[8]=b*n+x*o+v*f+E*p,i[9]=b*r+x*l+v*d+E*u,i[10]=b*s+x*c+v*g+E*_,i[11]=b*a+x*h+v*m+E*M,b=t[12],x=t[13],v=t[14],E=t[15],i[12]=b*n+x*o+v*f+E*p,i[13]=b*r+x*l+v*d+E*u,i[14]=b*s+x*c+v*g+E*_,i[15]=b*a+x*h+v*m+E*M,i}function Mh(i,e,t){let n=t[0],r=t[1],s=t[2],a,o,l,c,h,f,d,g,m,p,u,_;return e===i?(i[12]=e[0]*n+e[4]*r+e[8]*s+e[12],i[13]=e[1]*n+e[5]*r+e[9]*s+e[13],i[14]=e[2]*n+e[6]*r+e[10]*s+e[14],i[15]=e[3]*n+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],h=e[4],f=e[5],d=e[6],g=e[7],m=e[8],p=e[9],u=e[10],_=e[11],i[0]=a,i[1]=o,i[2]=l,i[3]=c,i[4]=h,i[5]=f,i[6]=d,i[7]=g,i[8]=m,i[9]=p,i[10]=u,i[11]=_,i[12]=a*n+h*r+m*s+e[12],i[13]=o*n+f*r+p*s+e[13],i[14]=l*n+d*r+u*s+e[14],i[15]=c*n+g*r+_*s+e[15]),i}function bh(i,e,t){let n=t[0],r=t[1],s=t[2];return i[0]=e[0]*n,i[1]=e[1]*n,i[2]=e[2]*n,i[3]=e[3]*n,i[4]=e[4]*r,i[5]=e[5]*r,i[6]=e[6]*r,i[7]=e[7]*r,i[8]=e[8]*s,i[9]=e[9]*s,i[10]=e[10]*s,i[11]=e[11]*s,i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}function Sh(i,e,t,n){let r=n[0],s=n[1],a=n[2],o=Math.hypot(r,s,a),l,c,h,f,d,g,m,p,u,_,M,b,x,v,E,L,y,T,P,V,X,N,R,G;return Math.abs(o)<gh?null:(o=1/o,r*=o,s*=o,a*=o,l=Math.sin(t),c=Math.cos(t),h=1-c,f=e[0],d=e[1],g=e[2],m=e[3],p=e[4],u=e[5],_=e[6],M=e[7],b=e[8],x=e[9],v=e[10],E=e[11],L=r*r*h+c,y=s*r*h+a*l,T=a*r*h-s*l,P=r*s*h-a*l,V=s*s*h+c,X=a*s*h+r*l,N=r*a*h+s*l,R=s*a*h-r*l,G=a*a*h+c,i[0]=f*L+p*y+b*T,i[1]=d*L+u*y+x*T,i[2]=g*L+_*y+v*T,i[3]=m*L+M*y+E*T,i[4]=f*P+p*V+b*X,i[5]=d*P+u*V+x*X,i[6]=g*P+_*V+v*X,i[7]=m*P+M*V+E*X,i[8]=f*N+p*R+b*G,i[9]=d*N+u*R+x*G,i[10]=g*N+_*R+v*G,i[11]=m*N+M*R+E*G,e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i)}function wh(i,e){return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function gl(i,e){let t=e[0],n=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],h=e[10];return i[0]=Math.hypot(t,n,r),i[1]=Math.hypot(s,a,o),i[2]=Math.hypot(l,c,h),i}function Eh(i){let e=i[0],t=i[1],n=i[2],r=i[4],s=i[5],a=i[6],o=i[8],l=i[9],c=i[10];const h=e*e+t*t+n*n,f=r*r+s*s+a*a,d=o*o+l*l+c*c;return Math.sqrt(Math.max(h,f,d))}const _l=(function(){const i=[1,1,1];return function(e,t){let n=i;gl(n,t);let r=1/n[0],s=1/n[1],a=1/n[2],o=t[0]*r,l=t[1]*s,c=t[2]*a,h=t[4]*r,f=t[5]*s,d=t[6]*a,g=t[8]*r,m=t[9]*s,p=t[10]*a,u=o+f+p,_=0;return u>0?(_=Math.sqrt(u+1)*2,e[3]=.25*_,e[0]=(d-m)/_,e[1]=(g-c)/_,e[2]=(l-h)/_):o>f&&o>p?(_=Math.sqrt(1+o-f-p)*2,e[3]=(d-m)/_,e[0]=.25*_,e[1]=(l+h)/_,e[2]=(g+c)/_):f>p?(_=Math.sqrt(1+f-o-p)*2,e[3]=(g-c)/_,e[0]=(l+h)/_,e[1]=.25*_,e[2]=(d+m)/_):(_=Math.sqrt(1+p-o-f)*2,e[3]=(l-h)/_,e[0]=(g+c)/_,e[1]=(d+m)/_,e[2]=.25*_),e}})();function Th(i,e,t,n){let r=zi([i[0],i[1],i[2]]);const s=zi([i[4],i[5],i[6]]),a=zi([i[8],i[9],i[10]]);ml(i)<0&&(r=-r),t[0]=i[12],t[1]=i[13],t[2]=i[14];const l=i.slice(),c=1/r,h=1/s,f=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=h,l[5]*=h,l[6]*=h,l[8]*=f,l[9]*=f,l[10]*=f,_l(e,l),n[0]=r,n[1]=s,n[2]=a}function Ah(i,e,t,n){const r=i,s=e[0],a=e[1],o=e[2],l=e[3],c=s+s,h=a+a,f=o+o,d=s*c,g=s*h,m=s*f,p=a*h,u=a*f,_=o*f,M=l*c,b=l*h,x=l*f,v=n[0],E=n[1],L=n[2];return r[0]=(1-(p+_))*v,r[1]=(g+x)*v,r[2]=(m-b)*v,r[3]=0,r[4]=(g-x)*E,r[5]=(1-(d+_))*E,r[6]=(u+M)*E,r[7]=0,r[8]=(m+b)*L,r[9]=(u-M)*L,r[10]=(1-(d+p))*L,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function Ch(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=t+t,o=n+n,l=r+r,c=t*a,h=n*a,f=n*o,d=r*a,g=r*o,m=r*l,p=s*a,u=s*o,_=s*l;return i[0]=1-f-m,i[1]=h+_,i[2]=d-u,i[3]=0,i[4]=h-_,i[5]=1-c-m,i[6]=g+p,i[7]=0,i[8]=d+u,i[9]=g-p,i[10]=1-c-f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function Lh(i,e,t,n,r){let s=1/Math.tan(e/2),a=1/(n-r);return i[0]=s/t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=(r+n)*a,i[11]=-1,i[12]=0,i[13]=0,i[14]=2*r*n*a,i[15]=0,i}function Rh(i,e,t,n,r,s,a){let o=1/(e-t),l=1/(n-r),c=1/(s-a);return i[0]=-2*o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=-2*l,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2*c,i[11]=0,i[12]=(e+t)*o,i[13]=(r+n)*l,i[14]=(a+s)*c,i[15]=1,i}function Ph(i,e,t,n){let r=e[0],s=e[1],a=e[2],o=n[0],l=n[1],c=n[2],h=r-t[0],f=s-t[1],d=a-t[2],g=h*h+f*f+d*d;g===0?d=1:(g=1/Math.sqrt(g),h*=g,f*=g,d*=g);let m=l*d-c*f,p=c*h-o*d,u=o*f-l*h;return g=m*m+p*p+u*u,g===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,m=l*d-c*f,p=c*h-o*d,u=o*f-l*h,g=m*m+p*p+u*u),g=1/Math.sqrt(g),m*=g,p*=g,u*=g,i[0]=m,i[1]=p,i[2]=u,i[3]=0,i[4]=f*u-d*p,i[5]=d*m-h*u,i[6]=h*p-f*m,i[7]=0,i[8]=h,i[9]=f,i[10]=d,i[11]=0,i[12]=r,i[13]=s,i[14]=a,i[15]=1,i}function _a(i,e,t){return i[0]=e[0]+t[0],i[1]=e[1]+t[1],i[2]=e[2]+t[2],i[3]=e[3]+t[3],i[4]=e[4]+t[4],i[5]=e[5]+t[5],i[6]=e[6]+t[6],i[7]=e[7]+t[7],i[8]=e[8]+t[8],i[9]=e[9]+t[9],i[10]=e[10]+t[10],i[11]=e[11]+t[11],i[12]=e[12]+t[12],i[13]=e[13]+t[13],i[14]=e[14]+t[14],i[15]=e[15]+t[15],i}function xa(i,e,t){return i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i[3]=e[3]-t[3],i[4]=e[4]-t[4],i[5]=e[5]-t[5],i[6]=e[6]-t[6],i[7]=e[7]-t[7],i[8]=e[8]-t[8],i[9]=e[9]-t[9],i[10]=e[10]-t[10],i[11]=e[11]-t[11],i[12]=e[12]-t[12],i[13]=e[13]-t[13],i[14]=e[14]-t[14],i[15]=e[15]-t[15],i}function Dh(i,e,t){return i[0]=e[0]*t,i[1]=e[1]*t,i[2]=e[2]*t,i[3]=e[3]*t,i[4]=e[4]*t,i[5]=e[5]*t,i[6]=e[6]*t,i[7]=e[7]*t,i[8]=e[8]*t,i[9]=e[9]*t,i[10]=e[10]*t,i[11]=e[11]*t,i[12]=e[12]*t,i[13]=e[13]*t,i[14]=e[14]*t,i[15]=e[15]*t,i}class wr extends Array{constructor(e=1,t=0,n=0,r=0,s=0,a=1,o=0,l=0,c=0,h=0,f=1,d=0,g=0,m=0,p=0,u=1){return super(e,t,n,r,s,a,o,l,c,h,f,d,g,m,p,u),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,n,r,s,a,o,l,c,h,f,d,g,m,p,u){return e.length?this.copy(e):(xh(this,e,t,n,r,s,a,o,l,c,h,f,d,g,m,p,u),this)}translate(e,t=this){return Mh(this,t,e),this}rotate(e,t,n=this){return Sh(this,n,e,t),this}scale(e,t=this){return bh(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?_a(this,e,t):_a(this,this,e),this}sub(e,t){return t?xa(this,e,t):xa(this,this,e),this}multiply(e,t){return e.length?t?ga(this,e,t):ga(this,this,e):Dh(this,this,e),this}identity(){return vh(this),this}copy(e){return _h(this,e),this}fromPerspective({fov:e,aspect:t,near:n,far:r}={}){return Lh(this,e,t,n,r),this}fromOrthogonal({left:e,right:t,bottom:n,top:r,near:s,far:a}){return Rh(this,e,t,n,r,s,a),this}fromQuaternion(e){return Ch(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return yh(this,e),this}compose(e,t,n){return Ah(this,e,t,n),this}decompose(e,t,n){return Th(this,e,t,n),this}getRotation(e){return _l(e,this),this}getTranslation(e){return wh(e,this),this}getScaling(e){return gl(e,this),this}getMaxScaleOnAxis(){return Eh(this)}lookAt(e,t,n){return Ph(this,e,t,n),this}determinant(){return ml(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function Ih(i,e,t="YXZ"){return t==="XYZ"?(i[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(i[0]=Math.atan2(-e[9],e[10]),i[2]=Math.atan2(-e[4],e[0])):(i[0]=Math.atan2(e[6],e[5]),i[2]=0)):t==="YXZ"?(i[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(i[1]=Math.atan2(e[8],e[10]),i[2]=Math.atan2(e[1],e[5])):(i[1]=Math.atan2(-e[2],e[0]),i[2]=0)):t==="ZXY"?(i[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(i[1]=Math.atan2(-e[2],e[10]),i[2]=Math.atan2(-e[4],e[5])):(i[1]=0,i[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(i[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(i[0]=Math.atan2(e[6],e[10]),i[2]=Math.atan2(e[1],e[0])):(i[0]=0,i[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(i[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(i[0]=Math.atan2(-e[9],e[5]),i[1]=Math.atan2(-e[2],e[0])):(i[0]=0,i[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(i[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(i[0]=Math.atan2(e[6],e[5]),i[1]=Math.atan2(e[8],e[0])):(i[0]=Math.atan2(-e[9],e[10]),i[1]=0)),i}const va=new wr;let Fh=class extends Array{constructor(e=0,t=e,n=e,r="YXZ"){super(e,t,n),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,n=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=n,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return Ih(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,n){return va.fromQuaternion(e),this._target.fromRotationMatrix(va,t),n||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}};class Oh{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new wr,this.worldMatrix=new wr,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Ft,this.quaternion=new mh,this.scale=new Ft(1),this.rotation=new Fh,this.up=new Ft(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,n=this.children.length;t<n;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,n=this.children.length;t<n;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function Nh(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[4],i[4]=e[5],i[5]=e[6],i[6]=e[8],i[7]=e[9],i[8]=e[10],i}function zh(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=t+t,o=n+n,l=r+r,c=t*a,h=n*a,f=n*o,d=r*a,g=r*o,m=r*l,p=s*a,u=s*o,_=s*l;return i[0]=1-f-m,i[3]=h-_,i[6]=d+u,i[1]=h+_,i[4]=1-c-m,i[7]=g-p,i[2]=d-u,i[5]=g+p,i[8]=1-c-f,i}function Uh(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i}function Bh(i,e,t,n,r,s,a,o,l,c){return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i[4]=s,i[5]=a,i[6]=o,i[7]=l,i[8]=c,i}function kh(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=1,i[5]=0,i[6]=0,i[7]=0,i[8]=1,i}function Vh(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=-h*s+o*l,g=c*s-a*l,m=t*f+n*d+r*g;return m?(m=1/m,i[0]=f*m,i[1]=(-h*n+r*c)*m,i[2]=(o*n-r*a)*m,i[3]=d*m,i[4]=(h*t-r*l)*m,i[5]=(-o*t+r*s)*m,i[6]=g*m,i[7]=(-c*t+n*l)*m,i[8]=(a*t-n*s)*m,i):null}function ya(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],f=e[8],d=t[0],g=t[1],m=t[2],p=t[3],u=t[4],_=t[5],M=t[6],b=t[7],x=t[8];return i[0]=d*n+g*a+m*c,i[1]=d*r+g*o+m*h,i[2]=d*s+g*l+m*f,i[3]=p*n+u*a+_*c,i[4]=p*r+u*o+_*h,i[5]=p*s+u*l+_*f,i[6]=M*n+b*a+x*c,i[7]=M*r+b*o+x*h,i[8]=M*s+b*l+x*f,i}function Gh(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],f=e[8],d=t[0],g=t[1];return i[0]=n,i[1]=r,i[2]=s,i[3]=a,i[4]=o,i[5]=l,i[6]=d*n+g*a+c,i[7]=d*r+g*o+h,i[8]=d*s+g*l+f,i}function Hh(i,e,t){let n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],f=e[8],d=Math.sin(t),g=Math.cos(t);return i[0]=g*n+d*a,i[1]=g*r+d*o,i[2]=g*s+d*l,i[3]=g*a-d*n,i[4]=g*o-d*r,i[5]=g*l-d*s,i[6]=c,i[7]=h,i[8]=f,i}function Wh(i,e,t){let n=t[0],r=t[1];return i[0]=n*e[0],i[1]=n*e[1],i[2]=n*e[2],i[3]=r*e[3],i[4]=r*e[4],i[5]=r*e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i}function qh(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],g=e[11],m=e[12],p=e[13],u=e[14],_=e[15],M=t*o-n*a,b=t*l-r*a,x=t*c-s*a,v=n*l-r*o,E=n*c-s*o,L=r*c-s*l,y=h*p-f*m,T=h*u-d*m,P=h*_-g*m,V=f*u-d*p,X=f*_-g*p,N=d*_-g*u,R=M*N-b*X+x*V+v*P-E*T+L*y;return R?(R=1/R,i[0]=(o*N-l*X+c*V)*R,i[1]=(l*P-a*N-c*T)*R,i[2]=(a*X-o*P+c*y)*R,i[3]=(r*X-n*N-s*V)*R,i[4]=(t*N-r*P+s*T)*R,i[5]=(n*P-t*X-s*y)*R,i[6]=(p*L-u*E+_*v)*R,i[7]=(u*x-m*L-_*b)*R,i[8]=(m*E-p*x+_*M)*R,i):null}class Xh extends Array{constructor(e=1,t=0,n=0,r=0,s=1,a=0,o=0,l=0,c=1){return super(e,t,n,r,s,a,o,l,c),this}set(e,t,n,r,s,a,o,l,c){return e.length?this.copy(e):(Bh(this,e,t,n,r,s,a,o,l,c),this)}translate(e,t=this){return Gh(this,t,e),this}rotate(e,t=this){return Hh(this,t,e),this}scale(e,t=this){return Wh(this,t,e),this}multiply(e,t){return t?ya(this,e,t):ya(this,this,e),this}identity(){return kh(this),this}copy(e){return Uh(this,e),this}fromMatrix4(e){return Nh(this,e),this}fromQuaternion(e){return zh(this,e),this}fromBasis(e,t,n){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this}inverse(e=this){return Vh(this,e),this}getNormalMatrix(e){return qh(this,e),this}}let jh=0,Yh=class extends Oh{constructor(e,{geometry:t,program:n,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=jh++,this.geometry=t,this.program=n,this.mode=r,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new wr,this.normalMatrix=new Xh,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(n=>n&&n({mesh:this,camera:e}))}};const Ma={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function ba(i){i.length===4&&(i=i[0]+i[1]+i[1]+i[2]+i[2]+i[3]+i[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return e||console.warn(`Unable to convert hex string ${i} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function $h(i){return i=parseInt(i),[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function Sa(i){return i===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(i)?i[0]==="#"?ba(i):Ma[i.toLowerCase()]?ba(Ma[i.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):$h(i)}let wa=class extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...Sa(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(Sa(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}},Zh=class extends Hc{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}};const Kh=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Jh=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uIntensity;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = rampColor;

  float finalAlpha = auroraAlpha * smoothstep(0.0, 0.5, intensity) * uIntensity;

  fragColor = vec4(auroraColor * finalAlpha, finalAlpha);
}
`,Qh=Bi({__name:"index",props:{colorStops:{default:()=>["#7cff67","#171D22","#7cff67"]},amplitude:{default:1},blend:{default:.5},time:{},speed:{default:1},intensity:{default:1},className:{default:""},style:{default:()=>({})}},setup(i){const e=i,t=Cr("containerRef");let n=null,r=0;const s=()=>{const o=t.value;if(!o)return;n=new Zc({alpha:!0,premultipliedAlpha:!0,antialias:!0});const l=n.gl;l.clearColor(0,0,0,0),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.canvas.style.backgroundColor="transparent";let c;const h=()=>{if(!o)return;const p=o.parentElement?.offsetWidth||o.offsetWidth||window.innerWidth,u=o.parentElement?.offsetHeight||o.offsetHeight||window.innerHeight,_=Math.max(p,300),M=Math.max(u,300);n.setSize(_,M),c&&(c.uniforms.uResolution.value=[_,M])};window.addEventListener("resize",h);const f=new Zh(l);f.attributes.uv&&delete f.attributes.uv;const d=e.colorStops.map(p=>{const u=new wa(p);return[u.r,u.g,u.b]});c=new qc(l,{vertex:Kh,fragment:Jh,uniforms:{uTime:{value:0},uAmplitude:{value:e.amplitude},uColorStops:{value:d},uResolution:{value:[Math.max(o.parentElement?.offsetWidth||o.offsetWidth||window.innerWidth,300),Math.max(o.parentElement?.offsetHeight||o.offsetHeight||window.innerHeight,300)]},uBlend:{value:e.blend},uIntensity:{value:e.intensity}}});const g=new Yh(l,{geometry:f,program:c});o.appendChild(l.canvas),l.canvas.style.width="100%",l.canvas.style.height="100%",l.canvas.style.display="block",l.canvas.style.position="absolute",l.canvas.style.top="0",l.canvas.style.left="0";const m=p=>{r=requestAnimationFrame(m);const u=e.time??p*.01,_=e.speed??1;if(c){c.uniforms.uTime.value=u*_*.1,c.uniforms.uAmplitude.value=e.amplitude??1,c.uniforms.uBlend.value=e.blend??.5,c.uniforms.uIntensity.value=e.intensity??1;const M=e.colorStops??["#27FF64","#7cff67","#27FF64"];c.uniforms.uColorStops.value=M.map(b=>{const x=new wa(b);return[x.r,x.g,x.b]}),n.render({scene:g})}};return r=requestAnimationFrame(m),h(),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",h),o&&l.canvas.parentNode===o&&o.removeChild(l.canvas),l.getExtension("WEBGL_lose_context")?.loseContext()}},a=()=>{if(r&&cancelAnimationFrame(r),n){const o=n.gl,l=t.value;l&&o.canvas.parentNode===l&&l.removeChild(o.canvas),o.getExtension("WEBGL_lose_context")?.loseContext()}n=null};return Lr(()=>{s()}),Xs(()=>{a()}),fi(()=>[e.amplitude,e.intensity],()=>{a(),s()}),(o,l)=>(Ht(),mn("div",{ref_key:"containerRef",ref:t,class:cl([i.className,"relative"]),style:Ls(i.style)},null,6))}}),eu=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},tu=eu(Qh,[["__scopeId","data-v-6aafd340"]]),nu=["onMouseenter"],iu=Bi({__name:"index",props:{sentence:{default:"True Focus"},manualMode:{type:Boolean,default:!1},blurAmount:{default:5},borderColor:{default:"green"},glowColor:{default:"rgba(0, 255, 0, 0.6)"},animationDuration:{default:.5},pauseBetweenAnimations:{default:1}},setup(i){const e=i,t=Kt(()=>e.sentence.split(" ")),n=un(0),r=un(null),s=Cr("containerRef"),a=un([]),o=un({x:0,y:0,width:0,height:0});let l=null;fi([n,()=>t.value.length],async()=>{if(n.value===null||n.value===-1||!a.value[n.value]||!s.value)return;await sa();const d=s.value.getBoundingClientRect(),g=a.value[n.value].getBoundingClientRect();o.value={x:g.left-d.left,y:g.top-d.top,width:g.width,height:g.height}},{immediate:!0});const c=d=>{e.manualMode&&(r.value=d,n.value=d)},h=()=>{e.manualMode&&(n.value=r.value||0)},f=(d,g)=>{d&&(a.value[g]=d)};return Lr(async()=>{if(await sa(),a.value[0]&&s.value){const d=s.value.getBoundingClientRect(),g=a.value[0].getBoundingClientRect();o.value={x:g.left-d.left,y:g.top-d.top,width:g.width,height:g.height}}fi([()=>e.manualMode,()=>e.animationDuration,()=>e.pauseBetweenAnimations,()=>t.value],()=>{l&&(clearInterval(l),l=null),e.manualMode||(l=setInterval(()=>{n.value=(n.value+1)%t.value.length},(e.animationDuration+e.pauseBetweenAnimations)*1e3))},{immediate:!0})}),Xs(()=>{l&&clearInterval(l)}),(d,g)=>(Ht(),mn("div",{ref_key:"containerRef",ref:s,class:"relative flex flex-wrap justify-center items-center gap-[1em]"},[(Ht(!0),mn(hl,null,ul(t.value,(m,p)=>(Ht(),mn("span",{key:p,ref_for:!0,ref:u=>f(u,p),class:"relative font-black text-2xl text-cyan-400 transition-[filter,color] duration-300 ease-in-out cursor-pointer",style:Ls({filter:p===n.value?"blur(0px)":`blur(${i.blurAmount}px)`,"--border-color":i.borderColor,"--glow-color":i.glowColor,transition:`filter ${i.animationDuration}s ease`}),onMouseenter:u=>c(p),onMouseleave:h},Rs(m),45,nu))),128)),_r(Sr(wc).div,{class:"top-0 left-0 box-content absolute border-none pointer-events-none",animate:{x:o.value.x,y:o.value.y,width:o.value.width,height:o.value.height,opacity:n.value>=0?1:0},transition:{duration:i.animationDuration},style:Ls({"--border-color":i.borderColor,"--glow-color":i.glowColor})},{default:fl(()=>[...g[0]||(g[0]=[fn("span",{class:"top-[-10px] left-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-r-0 border-b-0 rounded-[3px] w-4 h-4 transition-none"},null,-1),fn("span",{class:"top-[-10px] right-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-b-0 border-l-0 rounded-[3px] w-4 h-4 transition-none"},null,-1),fn("span",{class:"bottom-[-10px] left-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-t-0 border-r-0 rounded-[3px] w-4 h-4 transition-none"},null,-1),fn("span",{class:"right-[-10px] bottom-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-t-0 border-l-0 rounded-[3px] w-4 h-4 transition-none"},null,-1)])]),_:1},8,["animate","transition","style"])],512))}}),ru=Bi({__name:"index",props:{text:{default:""},delay:{default:200},className:{default:""},animateBy:{default:"words"},direction:{default:"top"},threshold:{default:.1},rootMargin:{default:"0px"},animationFrom:{},animationTo:{},easing:{type:Function,default:i=>i},onAnimationComplete:{},stepDuration:{default:.35}},setup(i){const e=i,t=(x,v)=>{const E=new Set([...Object.keys(x),...v.flatMap(y=>Object.keys(y))]),L={};for(const y of E)L[y]=[x[y],...v.map(T=>T[y])];return L},n=Kt(()=>e.animateBy==="words"?e.text.split(" "):e.text.split("")),r=Kt(()=>e.direction==="top"?{filter:"blur(10px)",opacity:0,y:-50}:{filter:"blur(10px)",opacity:0,y:50}),s=Kt(()=>[{filter:"blur(5px)",opacity:.5,y:e.direction==="top"?5:-5},{filter:"blur(0px)",opacity:1,y:0}]),a=Kt(()=>e.animationFrom??r.value),o=Kt(()=>e.animationTo??s.value),l=Kt(()=>o.value.length+1),c=Kt(()=>e.stepDuration*(l.value-1)),h=Kt(()=>Array.from({length:l.value},(x,v)=>l.value===1?0:v/(l.value-1))),f=un(!1),d=un(0),g=un(!1),m=Cr("rootRef");let p=null;const u=()=>{m.value&&(p=new IntersectionObserver(([x])=>{x.isIntersecting&&(f.value=!0,p?.unobserve(m.value))},{threshold:e.threshold,rootMargin:e.rootMargin}),p.observe(m.value))},_=()=>t(a.value,o.value),M=x=>({duration:c.value,times:h.value,delay:x*e.delay/1e3,ease:e.easing}),b=x=>{x===n.value.length-1&&!g.value&&e.onAnimationComplete&&(g.value=!0,e.onAnimationComplete())};return Lr(()=>{u()}),Xs(()=>{p?.disconnect()}),fi([()=>e.threshold,()=>e.rootMargin],()=>{p?.disconnect(),u()}),fi([()=>e.delay,()=>e.stepDuration,()=>e.animateBy,()=>e.direction],()=>{d.value++,g.value=!1}),(x,v)=>(Ht(),mn("p",{ref_key:"rootRef",ref:m,class:cl(["blur-text",i.className,"flex","flex-wrap"])},[(Ht(!0),mn(hl,null,ul(n.value,(E,L)=>(Ht(),dl(Sr(Ec),{key:`${d.value}-${L}`,tag:"span",initial:a.value,animate:f.value?_():a.value,transition:M(L),style:{display:"inline-block",willChange:"transform, filter, opacity"},onAnimationComplete:()=>b(L)},{default:fl(()=>[bc(Rs(E===" "?" ":E)+Rs(i.animateBy==="words"&&L<n.value.length-1?" ":""),1)]),_:2},1032,["initial","animate","transition","onAnimationComplete"]))),128))],2))}});const js="145",Hn={ROTATE:0,DOLLY:1,PAN:2},hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},su=0,Ea=1,au=2,xl=1,ou=2,Fi=3,di=0,Tt=1,dn=2,gn=0,hi=1,Ta=2,Aa=3,Ca=4,lu=5,li=100,cu=101,hu=102,La=103,Ra=104,uu=200,fu=201,du=202,pu=203,vl=204,yl=205,mu=206,gu=207,_u=208,xu=209,vu=210,yu=0,Mu=1,bu=2,Is=3,Su=4,wu=5,Eu=6,Tu=7,Ml=0,Au=1,Cu=2,Jt=0,Lu=1,Ru=2,Pu=3,Du=4,Iu=5,bl=300,pi=301,mi=302,Fs=303,Os=304,Rr=306,Ns=1e3,It=1001,zs=1002,ct=1003,Pa=1004,Da=1005,St=1006,Fu=1007,Pr=1008,In=1009,Ou=1010,Nu=1011,Sl=1012,zu=1013,Tn=1014,An=1015,Ui=1016,Uu=1017,Bu=1018,ui=1020,ku=1021,Vu=1022,Vt=1023,Gu=1024,Hu=1025,Rn=1026,gi=1027,Wu=1028,qu=1029,Xu=1030,ju=1031,Yu=1033,qr=33776,Xr=33777,jr=33778,Yr=33779,Ia=35840,Fa=35841,Oa=35842,Na=35843,$u=36196,za=37492,Ua=37496,Ba=37808,ka=37809,Va=37810,Ga=37811,Ha=37812,Wa=37813,qa=37814,Xa=37815,ja=37816,Ya=37817,$a=37818,Za=37819,Ka=37820,Ja=37821,Qa=36492,Fn=3e3,Ge=3001,Zu=3200,Ku=3201,wl=0,Ju=1,Dt="srgb",Cn="srgb-linear",$r=7680,Qu=519,Us=35044,eo="300 es",Bs=1035;class Bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,to=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rt[i&255]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]+"-"+rt[e&255]+rt[e>>8&255]+"-"+rt[e>>16&15|64]+rt[e>>24&255]+"-"+rt[t&63|128]+rt[t>>8&255]+"-"+rt[t>>16&255]+rt[t>>24&255]+rt[n&255]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function ef(i,e){return(i%e+e)%e}function Kr(i,e,t){return(1-t)*i+t*e}function no(i){return(i&i-1)===0&&i!==0}function ks(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],g=n[5],m=n[8],p=r[0],u=r[3],_=r[6],M=r[1],b=r[4],x=r[7],v=r[2],E=r[5],L=r[8];return s[0]=a*p+o*M+l*v,s[3]=a*u+o*b+l*E,s[6]=a*_+o*x+l*L,s[1]=c*p+h*M+f*v,s[4]=c*u+h*b+f*E,s[7]=c*_+h*x+f*L,s[2]=d*p+g*M+m*v,s[5]=d*u+g*b+m*E,s[8]=d*_+g*x+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,g=c*s-a*l,m=t*f+n*d+r*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/m;return e[0]=f*p,e[1]=(r*c-h*n)*p,e[2]=(o*n-r*a)*p,e[3]=d*p,e[4]=(h*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=g*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],h=r[7];return r[0]=t*s+n*l,r[3]=t*a+n*c,r[6]=t*o+n*h,r[1]=-n*s+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function El(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jr={[Dt]:{[Cn]:Pn},[Cn]:{[Dt]:xr}},Ct={legacyMode:!0,get workingColorSpace(){return Cn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Jr[e]&&Jr[e][t]!==void 0){const n=Jr[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Lt={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function Qr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ji(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Cn){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Cn){if(e=ef(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qr(a,s,e+1/3),this.g=Qr(a,s,e),this.b=Qr(a,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ct.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ct.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ct.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ct.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Dt){const n=Tl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ct.fromWorkingColorSpace(ji(this,Ke),e),ht(Ke.r*255,0,255)<<16^ht(Ke.g*255,0,255)<<8^ht(Ke.b*255,0,255)<<0}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Cn){Ct.fromWorkingColorSpace(ji(this,Ke),t);const n=Ke.r,r=Ke.g,s=Ke.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Cn){return Ct.fromWorkingColorSpace(ji(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=Dt){return Ct.fromWorkingColorSpace(ji(this,Ke),e),e!==Dt?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Lt),Lt.h+=e,Lt.s+=t,Lt.l+=n,this.setHSL(Lt.h,Lt.s,Lt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(Xi);const n=Kr(Lt.h,Xi.h,t),r=Kr(Lt.s,Xi.s,t),s=Kr(Lt.l,Xi.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=Tl;let Wn;class Al{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Er("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Cl{constructor(e=null){this.isSource=!0,this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(es(r[a].image)):s.push(es(r[a]))}else s=es(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function es(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;class At extends Bn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=It,r=It,s=St,a=Pr,o=Vt,l=In,c=1,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=_n(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=bl;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],g=l[5],m=l[9],p=l[2],u=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-p)<.01&&Math.abs(m-u)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+p)<.1&&Math.abs(m+u)<.1&&Math.abs(c+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(g+1)/2,v=(_+1)/2,E=(h+d)/4,L=(f+p)/4,y=(m+u)/4;return b>x&&b>v?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=E/n,s=L/n):x>v?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=y/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=L/s,r=y/s),this.set(n,r,s,t),this}let M=Math.sqrt((u-m)*(u-m)+(f-p)*(f-p)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(u-m)/M,this.y=(f-p)/M,this.z=(d-h)/M,this.w=Math.acos((c+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends Bn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new At(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:St,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ll extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nf extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],g=s[a+1],m=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=m,e[t+3]=p;return}if(f!==p||l!==d||c!==g||h!==m){let u=1-o;const _=l*d+c*g+h*m+f*p,M=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const v=Math.sqrt(b),E=Math.atan2(v,_*M);u=Math.sin(u*E)/v,o=Math.sin(o*E)/v}const x=o*M;if(l=l*u+d*x,c=c*u+g*x,h=h*u+m*x,f=f*u+p*x,u===1-o){const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],d=s[a+1],g=s[a+2],m=s[a+3];return e[t]=o*m+h*f+l*g-c*d,e[t+1]=l*m+h*d+c*f-o*g,e[t+2]=c*m+h*g+o*d-l*f,e[t+3]=h*m-o*f-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),d=l(n/2),g=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*g*m,this._y=c*g*f-d*h*m,this._z=c*h*m+d*g*f,this._w=c*h*f-d*g*m;break;case"YXZ":this._x=d*h*f+c*g*m,this._y=c*g*f-d*h*m,this._z=c*h*m-d*g*f,this._w=c*h*f+d*g*m;break;case"ZXY":this._x=d*h*f-c*g*m,this._y=c*g*f+d*h*m,this._z=c*h*m+d*g*f,this._w=c*h*f-d*g*m;break;case"ZYX":this._x=d*h*f-c*g*m,this._y=c*g*f+d*h*m,this._z=c*h*m-d*g*f,this._w=c*h*f+d*g*m;break;case"YZX":this._x=d*h*f+c*g*m,this._y=c*g*f+d*h*m,this._z=c*h*m-d*g*f,this._w=c*h*f-d*g*m;break;case"XZY":this._x=d*h*f-c*g*m,this._y=c*g*f-d*h*m,this._z=c*h*m+d*g*f,this._w=c*h*f+d*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(n>o&&n>f){const g=2*Math.sqrt(1+n-o-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-n-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-n-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,h=l*n+o*t-s*r,f=l*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=c*l+d*-s+h*-o-f*-a,this.y=h*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ts=new I,io=new Nn;class vi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],f=e[l+1],d=e[l+2];h<t&&(t=h),f<n&&(n=f),d<r&&(r=d),h>s&&(s=h),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),f=e.getY(l),d=e.getZ(l);h<t&&(t=h),f<n&&(n=f),d<r&&(r=d),h>s&&(s=h),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)yn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Yi.subVectors(this.max,Ti),qn.subVectors(e.a,Ti),Xn.subVectors(e.b,Ti),jn.subVectors(e.c,Ti),nn.subVectors(Xn,qn),rn.subVectors(jn,Xn),Mn.subVectors(qn,jn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-Mn.z,Mn.y,nn.z,0,-nn.x,rn.z,0,-rn.x,Mn.z,0,-Mn.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-Mn.y,Mn.x,0];return!is(t,qn,Xn,jn,Yi)||(t=[1,0,0,0,1,0,0,0,1],!is(t,qn,Xn,jn,Yi))?!1:($i.crossVectors(nn,rn),t=[$i.x,$i.y,$i.z],is(t,qn,Xn,jn,Yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xt=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,ns=new vi,qn=new I,Xn=new I,jn=new I,nn=new I,rn=new I,Mn=new I,Ti=new I,Yi=new I,$i=new I,bn=new I;function is(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){bn.fromArray(i,s);const o=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),h=n.dot(bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rf=new vi,ro=new I,Zi=new I,rs=new I;class Ys{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const t=rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(rs.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Zi.set(0,0,1).multiplyScalar(e.radius):Zi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ro.copy(e.center).add(Zi)),this.expandByPoint(ro.copy(e.center).sub(Zi)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new I,ss=new I,Ki=new I,sn=new I,as=new I,Ji=new I,os=new I;class sf{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ss.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(ss);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ki),o=sn.dot(this.direction),l=-sn.dot(Ki),c=sn.lengthSq(),h=Math.abs(1-a*a);let f,d,g,m;if(h>0)if(f=a*l-o,d=a*o-l,m=s*h,f>=0)if(d>=-m)if(d<=m){const p=1/h;f*=p,d*=p,g=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Ki).multiplyScalar(d).add(ss),g}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),r=jt.dot(jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||n!==n)&&(n=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,r,s){as.subVectors(t,e),Ji.subVectors(n,e),os.crossVectors(as,Ji);let a=this.direction.dot(os),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sn.subVectors(this.origin,e);const l=o*this.direction.dot(Ji.crossVectors(sn,Ji));if(l<0)return null;const c=o*this.direction.dot(as.cross(sn));if(c<0||l+c>a)return null;const h=-o*sn.dot(os);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,h,f,d,g,m,p,u){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=f,_[14]=d,_[3]=g,_[7]=m,_[11]=p,_[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Yn.setFromMatrixColumn(e,0).length(),s=1/Yn.setFromMatrixColumn(e,1).length(),a=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,g=a*f,m=o*h,p=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=g+m*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=m+g*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,g=l*f,m=c*h,p=c*f;t[0]=d+p*o,t[4]=m*o-g,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=g*o-m,t[6]=p+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,g=l*f,m=c*h,p=c*f;t[0]=d-p*o,t[4]=-a*f,t[8]=m+g*o,t[1]=g+m*o,t[5]=a*h,t[9]=p-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,g=a*f,m=o*h,p=o*f;t[0]=l*h,t[4]=m*c-g,t[8]=d*c+p,t[1]=l*f,t[5]=p*c+d,t[9]=g*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,m=o*l,p=o*c;t[0]=l*h,t[4]=p-d*f,t[8]=m*f+g,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*f+m,t[10]=d-p*f}else if(e.order==="XZY"){const d=a*l,g=a*c,m=o*l,p=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+p,t[5]=a*h,t[9]=g*f-m,t[2]=m*f-g,t[6]=o*h,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,of)}lookAt(e,t,n){const r=this.elements;return mt.subVectors(e,t),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),an.crossVectors(n,mt),an.lengthSq()===0&&(Math.abs(n.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),an.crossVectors(n,mt)),an.normalize(),Qi.crossVectors(mt,an),r[0]=an.x,r[4]=Qi.x,r[8]=mt.x,r[1]=an.y,r[5]=Qi.y,r[9]=mt.y,r[2]=an.z,r[6]=Qi.z,r[10]=mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],g=n[13],m=n[2],p=n[6],u=n[10],_=n[14],M=n[3],b=n[7],x=n[11],v=n[15],E=r[0],L=r[4],y=r[8],T=r[12],P=r[1],V=r[5],X=r[9],N=r[13],R=r[2],G=r[6],Y=r[10],J=r[14],W=r[3],z=r[7],B=r[11],ee=r[15];return s[0]=a*E+o*P+l*R+c*W,s[4]=a*L+o*V+l*G+c*z,s[8]=a*y+o*X+l*Y+c*B,s[12]=a*T+o*N+l*J+c*ee,s[1]=h*E+f*P+d*R+g*W,s[5]=h*L+f*V+d*G+g*z,s[9]=h*y+f*X+d*Y+g*B,s[13]=h*T+f*N+d*J+g*ee,s[2]=m*E+p*P+u*R+_*W,s[6]=m*L+p*V+u*G+_*z,s[10]=m*y+p*X+u*Y+_*B,s[14]=m*T+p*N+u*J+_*ee,s[3]=M*E+b*P+x*R+v*W,s[7]=M*L+b*V+x*G+v*z,s[11]=M*y+b*X+x*Y+v*B,s[15]=M*T+b*N+x*J+v*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],g=e[14],m=e[3],p=e[7],u=e[11],_=e[15];return m*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*g-n*l*g)+p*(+t*l*g-t*c*d+s*a*d-r*a*g+r*c*h-s*l*h)+u*(+t*c*f-t*o*g-s*a*f+n*a*g+s*o*h-n*c*h)+_*(-r*o*h-t*l*f+t*o*d+r*a*f-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],g=e[11],m=e[12],p=e[13],u=e[14],_=e[15],M=f*u*c-p*d*c+p*l*g-o*u*g-f*l*_+o*d*_,b=m*d*c-h*u*c-m*l*g+a*u*g+h*l*_-a*d*_,x=h*p*c-m*f*c+m*o*g-a*p*g-h*o*_+a*f*_,v=m*f*l-h*p*l-m*o*d+a*p*d+h*o*u-a*f*u,E=t*M+n*b+r*x+s*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=M*L,e[1]=(p*d*s-f*u*s-p*r*g+n*u*g+f*r*_-n*d*_)*L,e[2]=(o*u*s-p*l*s+p*r*c-n*u*c-o*r*_+n*l*_)*L,e[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*g-n*l*g)*L,e[4]=b*L,e[5]=(h*u*s-m*d*s+m*r*g-t*u*g-h*r*_+t*d*_)*L,e[6]=(m*l*s-a*u*s-m*r*c+t*u*c+a*r*_-t*l*_)*L,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*g+t*l*g)*L,e[8]=x*L,e[9]=(m*f*s-h*p*s-m*n*g+t*p*g+h*n*_-t*f*_)*L,e[10]=(a*p*s-m*o*s+m*n*c-t*p*c-a*n*_+t*o*_)*L,e[11]=(h*o*s-a*f*s-h*n*c+t*f*c+a*n*g-t*o*g)*L,e[12]=v*L,e[13]=(h*p*r-m*f*r+m*n*d-t*p*d-h*n*u+t*f*u)*L,e[14]=(m*o*r-a*p*r-m*n*l+t*p*l+a*n*u-t*o*u)*L,e[15]=(a*f*r-h*o*r+h*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,d=s*c,g=s*h,m=s*f,p=a*h,u=a*f,_=o*f,M=l*c,b=l*h,x=l*f,v=n.x,E=n.y,L=n.z;return r[0]=(1-(p+_))*v,r[1]=(g+x)*v,r[2]=(m-b)*v,r[3]=0,r[4]=(g-x)*E,r[5]=(1-(d+_))*E,r[6]=(u+M)*E,r[7]=0,r[8]=(m+b)*L,r[9]=(u-M)*L,r[10]=(1-(d+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const a=Yn.set(r[4],r[5],r[6]).length(),o=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rt.copy(this);const c=1/s,h=1/a,f=1/o;return Rt.elements[0]*=c,Rt.elements[1]*=c,Rt.elements[2]*=c,Rt.elements[4]*=h,Rt.elements[5]*=h,Rt.elements[6]*=h,Rt.elements[8]*=f,Rt.elements[9]*=f,Rt.elements[10]*=f,t.setFromRotationMatrix(Rt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),d=-(a+s)/(a-s),g=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),h=1/(a-s),f=(t+e)*l,d=(n+r)*c,g=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yn=new I,Rt=new Ye,af=new I(0,0,0),of=new I(1,1,1),an=new I,Qi=new I,mt=new I,so=new Ye,ao=new Nn;class ki{constructor(e=0,t=0,n=0,r=ki.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return so.makeRotationFromQuaternion(e),this.setFromRotationMatrix(so,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ki.DefaultOrder="XYZ";ki.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lf=0;const oo=new I,$n=new Nn,Yt=new Ye,er=new I,Ai=new I,cf=new I,hf=new Nn,lo=new I(1,0,0),co=new I(0,1,0),ho=new I(0,0,1),uf={type:"added"},uo={type:"removed"};class it extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DefaultUp.clone();const e=new I,t=new ki,n=new Nn,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Et}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=it.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=it.DefaultMatrixWorldAutoUpdate,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(lo,e)}rotateY(e){return this.rotateOnAxis(co,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lo,e)}translateY(e){return this.translateOnAxis(co,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(Ai,er,this.up):Yt.lookAt(er,Ai,this.up),this.quaternion.setFromRotationMatrix(Yt),r&&(Yt.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(Yt),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}it.DefaultUp=new I(0,1,0);it.DefaultMatrixAutoUpdate=!0;it.DefaultMatrixWorldAutoUpdate=!0;const Pt=new I,$t=new I,ls=new I,Zt=new I,Zn=new I,Kn=new I,fo=new I,cs=new I,hs=new I,us=new I;class kt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pt.subVectors(e,t),r.cross(Pt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pt.subVectors(r,t),$t.subVectors(n,t),ls.subVectors(e,t);const a=Pt.dot(Pt),o=Pt.dot($t),l=Pt.dot(ls),c=$t.dot($t),h=$t.dot(ls),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-g-m,m,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Zt),l.set(0,0),l.addScaledVector(s,Zt.x),l.addScaledVector(a,Zt.y),l.addScaledVector(o,Zt.z),l}static isFrontFacing(e,t,n,r){return Pt.subVectors(n,t),$t.subVectors(e,t),Pt.cross($t).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Pt.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return kt.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Zn.subVectors(r,n),Kn.subVectors(s,n),cs.subVectors(e,n);const l=Zn.dot(cs),c=Kn.dot(cs);if(l<=0&&c<=0)return t.copy(n);hs.subVectors(e,r);const h=Zn.dot(hs),f=Kn.dot(hs);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Zn,a);us.subVectors(e,s);const g=Zn.dot(us),m=Kn.dot(us);if(m>=0&&g<=m)return t.copy(s);const p=g*c-l*m;if(p<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Kn,o);const u=h*m-g*f;if(u<=0&&f-h>=0&&g-m>=0)return fo.subVectors(s,r),o=(f-h)/(f-h+(g-m)),t.copy(r).addScaledVector(fo,o);const _=1/(u+p+d);return a=p*_,o=d*_,t.copy(n).addScaledVector(Zn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ff=0;class yi extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=hi,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pl extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=new I,tr=new xe;class Ot{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Us,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Us&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dl extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Il extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let df=0;const Mt=new Ye,fs=new it,Jn=new I,gt=new vi,Ci=new vi,et=new I;class Qt extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Il:Dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,n){return Mt.makeTranslation(e,t,n),this.applyMatrix4(Mt),this}scale(e,t,n){return Mt.makeScale(e,t,n),this.applyMatrix4(Mt),this}lookAt(e){return fs.lookAt(e),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];gt.setFromBufferAttribute(s),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,gt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,gt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(gt.min),this.boundingBox.expandByPoint(gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(et.addVectors(gt.min,Ci.min),gt.expandByPoint(et),et.addVectors(gt.max,Ci.max),gt.expandByPoint(et)):(gt.expandByPoint(Ci.min),gt.expandByPoint(Ci.max))}gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)et.fromBufferAttribute(o,c),l&&(Jn.fromBufferAttribute(e,c),et.add(Jn)),r=Math.max(r,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<o;P++)c[P]=new I,h[P]=new I;const f=new I,d=new I,g=new I,m=new xe,p=new xe,u=new xe,_=new I,M=new I;function b(P,V,X){f.fromArray(r,P*3),d.fromArray(r,V*3),g.fromArray(r,X*3),m.fromArray(a,P*2),p.fromArray(a,V*2),u.fromArray(a,X*2),d.sub(f),g.sub(f),p.sub(m),u.sub(m);const N=1/(p.x*u.y-u.x*p.y);isFinite(N)&&(_.copy(d).multiplyScalar(u.y).addScaledVector(g,-p.y).multiplyScalar(N),M.copy(g).multiplyScalar(p.x).addScaledVector(d,-u.x).multiplyScalar(N),c[P].add(_),c[V].add(_),c[X].add(_),h[P].add(M),h[V].add(M),h[X].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let P=0,V=x.length;P<V;++P){const X=x[P],N=X.start,R=X.count;for(let G=N,Y=N+R;G<Y;G+=3)b(n[G+0],n[G+1],n[G+2])}const v=new I,E=new I,L=new I,y=new I;function T(P){L.fromArray(s,P*3),y.copy(L);const V=c[P];v.copy(V),v.sub(L.multiplyScalar(L.dot(V))).normalize(),E.crossVectors(y,V);const N=E.dot(h[P])<0?-1:1;l[P*4]=v.x,l[P*4+1]=v.y,l[P*4+2]=v.z,l[P*4+3]=N}for(let P=0,V=x.length;P<V;++P){const X=x[P],N=X.start,R=X.count;for(let G=N,Y=N+R;G<Y;G+=3)T(n[G+0]),T(n[G+1]),T(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,f=new I;if(e)for(let d=0,g=e.count;d<g;d+=3){const m=e.getX(d+0),p=e.getX(d+1),u=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,u),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,u),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let g=0,m=0;for(let p=0,u=l.length;p<u;p++){o.isInterleavedBufferAttribute?g=l[p]*o.data.stride+o.offset:g=l[p]*h;for(let _=0;_<h;_++)d[m++]=c[g++]}return new Ot(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],g=e(d,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new Ye,Qn=new sf,ds=new Ys,on=new I,ln=new I,cn=new I,ps=new I,ms=new I,gs=new I,nr=new I,ir=new I,rr=new I,sr=new xe,ar=new xe,or=new xe,_s=new I,lr=new I;class Gt extends it{constructor(e=new Qt,t=new Pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),e.ray.intersectsSphere(ds)===!1)||(po.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(po),n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,g=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,u=g.length;p<u;p++){const _=g[p],M=r[_.materialIndex],b=Math.max(_.start,m.start),x=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let v=b,E=x;v<E;v+=3){const L=o.getX(v),y=o.getX(v+1),T=o.getX(v+2);a=cr(this,M,e,Qn,l,c,h,f,d,L,y,T),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,m.start),u=Math.min(o.count,m.start+m.count);for(let _=p,M=u;_<M;_+=3){const b=o.getX(_),x=o.getX(_+1),v=o.getX(_+2);a=cr(this,r,e,Qn,l,c,h,f,d,b,x,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,u=g.length;p<u;p++){const _=g[p],M=r[_.materialIndex],b=Math.max(_.start,m.start),x=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let v=b,E=x;v<E;v+=3){const L=v,y=v+1,T=v+2;a=cr(this,M,e,Qn,l,c,h,f,d,L,y,T),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,m.start),u=Math.min(l.count,m.start+m.count);for(let _=p,M=u;_<M;_+=3){const b=_,x=_+1,v=_+2;a=cr(this,r,e,Qn,l,c,h,f,d,b,x,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function pf(i,e,t,n,r,s,a,o){let l;if(e.side===Tt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side!==dn,o),l===null)return null;lr.copy(o),lr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(lr);return c<t.near||c>t.far?null:{distance:c,point:lr.clone(),object:i}}function cr(i,e,t,n,r,s,a,o,l,c,h,f){on.fromBufferAttribute(r,c),ln.fromBufferAttribute(r,h),cn.fromBufferAttribute(r,f);const d=i.morphTargetInfluences;if(s&&d){nr.set(0,0,0),ir.set(0,0,0),rr.set(0,0,0);for(let m=0,p=s.length;m<p;m++){const u=d[m],_=s[m];u!==0&&(ps.fromBufferAttribute(_,c),ms.fromBufferAttribute(_,h),gs.fromBufferAttribute(_,f),a?(nr.addScaledVector(ps,u),ir.addScaledVector(ms,u),rr.addScaledVector(gs,u)):(nr.addScaledVector(ps.sub(on),u),ir.addScaledVector(ms.sub(ln),u),rr.addScaledVector(gs.sub(cn),u)))}on.add(nr),ln.add(ir),cn.add(rr)}i.isSkinnedMesh&&(i.boneTransform(c,on),i.boneTransform(h,ln),i.boneTransform(f,cn));const g=pf(i,e,t,n,on,ln,cn,_s);if(g){o&&(sr.fromBufferAttribute(o,c),ar.fromBufferAttribute(o,h),or.fromBufferAttribute(o,f),g.uv=kt.getUV(_s,on,ln,cn,sr,ar,or,new xe)),l&&(sr.fromBufferAttribute(l,c),ar.fromBufferAttribute(l,h),or.fromBufferAttribute(l,f),g.uv2=kt.getUV(_s,on,ln,cn,sr,ar,or,new xe));const m={a:c,b:h,c:f,normal:new I,materialIndex:0};kt.getNormal(on,ln,cn,m.normal),g.face=m}return g}class Mi extends Qt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,g=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function m(p,u,_,M,b,x,v,E,L,y,T){const P=x/L,V=v/y,X=x/2,N=v/2,R=E/2,G=L+1,Y=y+1;let J=0,W=0;const z=new I;for(let B=0;B<Y;B++){const ee=B*V-N;for(let K=0;K<G;K++){const te=K*P-X;z[p]=te*M,z[u]=ee*b,z[_]=R,c.push(z.x,z.y,z.z),z[p]=0,z[u]=0,z[_]=E>0?1:-1,h.push(z.x,z.y,z.z),f.push(K/L),f.push(1-B/y),J+=1}}for(let B=0;B<y;B++)for(let ee=0;ee<L;ee++){const K=d+ee+G*B,te=d+ee+G*(B+1),he=d+(ee+1)+G*(B+1),ge=d+(ee+1)+G*B;l.push(K,te,ge),l.push(te,he,ge),W+=6}o.addGroup(g,W,T),g+=W,d+=J}}static fromJSON(e){return new Mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function st(i){const e={};for(let t=0;t<i.length;t++){const n=_i(i[t]);for(const r in n)e[r]=n[r]}return e}function mf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const gf={clone:_i,merge:st};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fl extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends Fl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=90,ti=1;class vf extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new wt(ei,ti,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new wt(ei,ti,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new wt(ei,ti,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new wt(ei,ti,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new wt(ei,ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new wt(ei,ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Jt,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ol extends At{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yf extends On{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ol(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mi(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:gn});s.uniforms.tEquirect.value=t;const a=new Gt(r,s),o=t.minFilter;return t.minFilter===Pr&&(t.minFilter=St),new vf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const xs=new I,Mf=new I,bf=new Et;class Sn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xs.subVectors(n,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(xs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bf.getNormalMatrix(e),r=this.coplanarPoint(xs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Ys,hr=new I;class $s{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,a=new Sn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],f=n[7],d=n[8],g=n[9],m=n[10],p=n[11],u=n[12],_=n[13],M=n[14],b=n[15];return t[0].setComponents(o-r,f-l,p-d,b-u).normalize(),t[1].setComponents(o+r,f+l,p+d,b+u).normalize(),t[2].setComponents(o+s,f+c,p+g,b+_).normalize(),t[3].setComponents(o-s,f-c,p-g,b-_).normalize(),t[4].setComponents(o-a,f-h,p-m,b-M).normalize(),t[5].setComponents(o+a,f+h,p+m,b+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(hr.x=r.normal.x>0?e.max.x:e.min.x,hr.y=r.normal.y>0?e.max.y:e.min.y,hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Sf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const f=c.array,d=c.usage,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,d),c.onUploadCallback();let m;if(f instanceof Float32Array)m=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(f instanceof Int16Array)m=5122;else if(f instanceof Uint32Array)m=5125;else if(f instanceof Int32Array)m=5124;else if(f instanceof Int8Array)m=5120;else if(f instanceof Uint8Array)m=5121;else if(f instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,f){const d=h.array,g=h.updateRange;i.bindBuffer(f,c),g.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,h)):f.version<c.version&&(s(f.buffer,c,h),f.version=c.version)}return{get:a,remove:o,update:l}}class Zs extends Qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=t/l,g=[],m=[],p=[],u=[];for(let _=0;_<h;_++){const M=_*d-a;for(let b=0;b<c;b++){const x=b*f-s;m.push(x,-M,0),p.push(0,0,1),u.push(b/o),u.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const b=M+c*_,x=M+c*(_+1),v=M+1+c*(_+1),E=M+1+c*_;g.push(b,x,E),g.push(x,v,E)}this.setIndex(g),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(u,2))}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf="vec3 transformed = vec3( position );",Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ld=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ud=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ip=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,mp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,gp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_p=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:wf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:Af,aomap_fragment:Cf,aomap_pars_fragment:Lf,begin_vertex:Rf,beginnormal_vertex:Pf,bsdfs:Df,iridescence_fragment:If,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:Uf,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:Vf,color_vertex:Gf,common:Hf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Xf,displacementmap_vertex:jf,emissivemap_fragment:Yf,emissivemap_pars_fragment:$f,encodings_fragment:Zf,encodings_pars_fragment:Kf,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:ed,envmap_pars_vertex:td,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:rd,fog_fragment:sd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_fragment:ld,lightmap_pars_fragment:cd,lights_lambert_fragment:hd,lights_lambert_pars_fragment:ud,lights_pars_begin:fd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:_d,lights_physical_fragment:xd,lights_physical_pars_fragment:vd,lights_fragment_begin:yd,lights_fragment_maps:Md,lights_fragment_end:bd,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:Ad,map_pars_fragment:Cd,map_particle_fragment:Ld,map_particle_pars_fragment:Rd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Dd,morphcolor_vertex:Id,morphnormal_vertex:Fd,morphtarget_pars_vertex:Od,morphtarget_vertex:Nd,normal_fragment_begin:zd,normal_fragment_maps:Ud,normal_pars_fragment:Bd,normal_pars_vertex:kd,normal_vertex:Vd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:qd,iridescence_pars_fragment:Xd,output_fragment:jd,packing:Yd,premultiplied_alpha_fragment:$d,project_vertex:Zd,dithering_fragment:Kd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:rp,skinbase_vertex:sp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:fp,transmission_fragment:dp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,uv2_pars_fragment:xp,uv2_pars_vertex:vp,uv2_vertex:yp,worldpos_vertex:Mp,background_vert:bp,background_frag:Sp,cube_vert:wp,cube_frag:Ep,depth_vert:Tp,depth_frag:Ap,distanceRGBA_vert:Cp,distanceRGBA_frag:Lp,equirect_vert:Rp,equirect_frag:Pp,linedashed_vert:Dp,linedashed_frag:Ip,meshbasic_vert:Fp,meshbasic_frag:Op,meshlambert_vert:Np,meshlambert_frag:zp,meshmatcap_vert:Up,meshmatcap_frag:Bp,meshnormal_vert:kp,meshnormal_frag:Vp,meshphong_vert:Gp,meshphong_frag:Hp,meshphysical_vert:Wp,meshphysical_frag:qp,meshtoon_vert:Xp,meshtoon_frag:jp,points_vert:Yp,points_frag:$p,shadow_vert:Zp,shadow_frag:Kp,sprite_vert:Jp,sprite_frag:Qp},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},Bt={basic:{uniforms:st([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:st([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:st([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:st([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:st([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:st([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:st([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:st([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:st([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:st([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:st([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:st([re.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:st([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:st([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Bt.physical={uniforms:st([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function em(i,e,t,n,r,s){const a=new ze(0);let o=r===!0?0:1,l,c,h=null,f=0,d=null;function g(p,u){let _=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=e.get(M));const b=i.xr,x=b.getSession&&b.getSession();x&&x.environmentBlendMode==="additive"&&(M=null),M===null?m(a,o):M&&M.isColor&&(m(M,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Rr)?(c===void 0&&(c=new Gt(new Mi(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:_i(Bt.cube.uniforms),vertexShader:Bt.cube.vertexShader,fragmentShader:Bt.cube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Gt(new Zs(2,2),new zn({name:"BackgroundMaterial",uniforms:_i(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,u){t.buffers.color.setClear(p.r,p.g,p.b,u,s)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),o=u,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,m(a,o)},render:g}}function tm(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=u(null);let c=l,h=!1;function f(R,G,Y,J,W){let z=!1;if(a){const B=p(J,Y,G);c!==B&&(c=B,g(c.object)),z=_(R,J,Y,W),z&&M(R,J,Y,W)}else{const B=G.wireframe===!0;(c.geometry!==J.id||c.program!==Y.id||c.wireframe!==B)&&(c.geometry=J.id,c.program=Y.id,c.wireframe=B,z=!0)}W!==null&&t.update(W,34963),(z||h)&&(h=!1,y(R,G,Y,J),W!==null&&i.bindBuffer(34963,t.get(W).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function m(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,G,Y){const J=Y.wireframe===!0;let W=o[R.id];W===void 0&&(W={},o[R.id]=W);let z=W[G.id];z===void 0&&(z={},W[G.id]=z);let B=z[J];return B===void 0&&(B=u(d()),z[J]=B),B}function u(R){const G=[],Y=[],J=[];for(let W=0;W<r;W++)G[W]=0,Y[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:J,object:R,attributes:{},index:null}}function _(R,G,Y,J){const W=c.attributes,z=G.attributes;let B=0;const ee=Y.getAttributes();for(const K in ee)if(ee[K].location>=0){const he=W[K];let ge=z[K];if(ge===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;B++}return c.attributesNum!==B||c.index!==J}function M(R,G,Y,J){const W={},z=G.attributes;let B=0;const ee=Y.getAttributes();for(const K in ee)if(ee[K].location>=0){let he=z[K];he===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(he=R.instanceColor));const ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),W[K]=ge,B++}c.attributes=W,c.attributesNum=B,c.index=J}function b(){const R=c.newAttributes;for(let G=0,Y=R.length;G<Y;G++)R[G]=0}function x(R){v(R,0)}function v(R,G){const Y=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;Y[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),W[R]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),W[R]=G)}function E(){const R=c.newAttributes,G=c.enabledAttributes;for(let Y=0,J=G.length;Y<J;Y++)G[Y]!==R[Y]&&(i.disableVertexAttribArray(Y),G[Y]=0)}function L(R,G,Y,J,W,z){n.isWebGL2===!0&&(Y===5124||Y===5125)?i.vertexAttribIPointer(R,G,Y,W,z):i.vertexAttribPointer(R,G,Y,J,W,z)}function y(R,G,Y,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const W=J.attributes,z=Y.getAttributes(),B=G.defaultAttributeValues;for(const ee in z){const K=z[ee];if(K.location>=0){let te=W[ee];if(te===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const he=te.normalized,ge=te.itemSize,$=t.get(te);if($===void 0)continue;const De=$.buffer,ve=$.type,Me=$.bytesPerElement;if(te.isInterleavedBufferAttribute){const ue=te.data,Fe=ue.stride,Te=te.offset;if(ue.isInstancedInterleavedBuffer){for(let me=0;me<K.locationSize;me++)v(K.location+me,ue.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<K.locationSize;me++)x(K.location+me);i.bindBuffer(34962,De);for(let me=0;me<K.locationSize;me++)L(K.location+me,ge/K.locationSize,ve,he,Fe*Me,(Te+ge/K.locationSize*me)*Me)}else{if(te.isInstancedBufferAttribute){for(let ue=0;ue<K.locationSize;ue++)v(K.location+ue,te.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<K.locationSize;ue++)x(K.location+ue);i.bindBuffer(34962,De);for(let ue=0;ue<K.locationSize;ue++)L(K.location+ue,ge/K.locationSize,ve,he,ge*Me,ge/K.locationSize*ue*Me)}}else if(B!==void 0){const he=B[ee];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(K.location,he);break;case 3:i.vertexAttrib3fv(K.location,he);break;case 4:i.vertexAttrib4fv(K.location,he);break;default:i.vertexAttrib1fv(K.location,he)}}}}E()}function T(){X();for(const R in o){const G=o[R];for(const Y in G){const J=G[Y];for(const W in J)m(J[W].object),delete J[W];delete G[Y]}delete o[R]}}function P(R){if(o[R.id]===void 0)return;const G=o[R.id];for(const Y in G){const J=G[Y];for(const W in J)m(J[W].object),delete J[W];delete G[Y]}delete o[R.id]}function V(R){for(const G in o){const Y=o[G];if(Y[R.id]===void 0)continue;const J=Y[R.id];for(const W in J)m(J[W].object),delete J[W];delete Y[R.id]}}function X(){N(),h=!0,c!==l&&(c=l,g(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:V,initAttributes:b,enableAttribute:x,disableUnusedAttributes:E}}function nm(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,f){if(f===0)return;let d,g;if(r)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,c,h,f),t.update(h,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function im(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),d=i.getParameter(35660),g=i.getParameter(3379),m=i.getParameter(34076),p=i.getParameter(34921),u=i.getParameter(36347),_=i.getParameter(36348),M=i.getParameter(36349),b=d>0,x=a||e.has("OES_texture_float"),v=b&&x,E=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:x,floatVertexTextures:v,maxSamples:E}}function rm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Sn,o=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const m=f.length!==0||d||n!==0||r;return r=d,t=h(f,g,0),n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,g){const m=f.clippingPlanes,p=f.clipIntersection,u=f.clipShadows,_=i.get(f);if(!r||m===null||m.length===0||s&&!u)s?h(null):c();else{const M=s?0:n,b=M*4;let x=_.clippingState||null;l.value=x,x=h(m,d,b,g);for(let v=0;v!==b;++v)x[v]=t[v];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,g,m){const p=f!==null?f.length:0;let u=null;if(p!==0){if(u=l.value,m!==!0||u===null){const _=g+p*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(u===null||u.length<_)&&(u=new Float32Array(_));for(let b=0,x=g;b!==p;++b,x+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(u,x),u[x+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,u}}function sm(i){let e=new WeakMap;function t(a,o){return o===Fs?a.mapping=pi:o===Os&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fs||o===Os)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yf(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class zl extends Fl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,mo=[.125,.215,.35,.446,.526,.582],En=20,vs=new zl,go=new ze;let ys=null;const wn=(1+Math.sqrt(5))/2,ii=1/wn,_o=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,wn,ii),new I(0,wn,-ii),new I(ii,0,wn),new I(-ii,0,wn),new I(wn,ii,0),new I(-wn,ii,0)];class xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ys=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ys),e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ys=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ui,format:Vt,encoding:Fn,depthBuffer:!1},r=vo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(s)),this._blurMaterial=om(s,e,t)}return r}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,r){const o=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(go),h.toneMapping=Jt,h.autoClear=!1;const g=new Pl({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),m=new Gt(new Mi,g);let p=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,p=!0):(g.color.copy(go),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const b=this._cubeSize;ur(r,M*b,_>2?b:0,b,b),h.setRenderTarget(r),p&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pi||e.mapping===mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_o[(r-1)%_o.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Gt(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*En-1),p=s/m,u=isFinite(s)?1+Math.floor(h*p):En;u>En&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${En}`);const _=[];let M=0;for(let L=0;L<En;++L){const y=L/p,T=Math.exp(-y*y/2);_.push(T),L===0?M+=T:L<u&&(M+=2*T)}for(let L=0;L<_.length;L++)_[L]=_[L]/M;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const x=this._sizeLods[r],v=3*x*(r>b-ci?r-b+ci:0),E=4*(this._cubeSize-x);ur(t,v,E,3*x,2*x),l.setRenderTarget(t),l.render(f,vs)}}function am(i){const e=[],t=[],n=[];let r=i;const s=i-ci+1+mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ci?l=mo[a-i+ci-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,m=6,p=3,u=2,_=1,M=new Float32Array(p*m*g),b=new Float32Array(u*m*g),x=new Float32Array(_*m*g);for(let E=0;E<g;E++){const L=E%3*2/3-1,y=E>2?0:-1,T=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];M.set(T,p*m*E),b.set(d,u*m*E);const P=[E,E,E,E,E,E];x.set(P,_*m*E)}const v=new Qt;v.setAttribute("position",new Ot(M,p)),v.setAttribute("uv",new Ot(b,u)),v.setAttribute("faceIndex",new Ot(x,_)),e.push(v),r>ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vo(i,e,t){const n=new On(i,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function om(i,e,t){const n=new Float32Array(En),r=new I(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function yo(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Mo(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fs||l===Os,h=l===pi||l===mi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new xo(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new xo(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hm(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],34962);const g=f.morphAttributes;for(const m in g){const p=g[m];for(let u=0,_=p.length;u<_;u++)e.update(p[u],34962)}}function c(f){const d=[],g=f.index,m=f.attributes.position;let p=0;if(g!==null){const M=g.array;p=g.version;for(let b=0,x=M.length;b<x;b+=3){const v=M[b+0],E=M[b+1],L=M[b+2];d.push(v,E,E,L,L,v)}}else{const M=m.array;p=m.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const v=b+0,E=b+1,L=b+2;d.push(v,E,E,L,L,v)}}const u=new(El(d)?Il:Dl)(d,1);u.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,u)}function h(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function um(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(s,g,o,d*l),t.update(g,s,1)}function f(d,g,m){if(m===0)return;let p,u;if(r)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,o,d*l,m),t.update(g,s,m)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f}function fm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dm(i,e){return i[0]-e[0]}function pm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function mm(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new tt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f,d){const g=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let u=s.get(h);if(u===void 0||u.count!==p){let G=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",G)};u!==void 0&&u.texture.dispose();const b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],y=h.morphAttributes.color||[];let T=0;b===!0&&(T=1),x===!0&&(T=2),v===!0&&(T=3);let P=h.attributes.position.count*T,V=1;P>e.maxTextureSize&&(V=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const X=new Float32Array(P*V*4*p),N=new Ll(X,P,V,p);N.type=An,N.needsUpdate=!0;const R=T*4;for(let Y=0;Y<p;Y++){const J=E[Y],W=L[Y],z=y[Y],B=P*V*4*Y;for(let ee=0;ee<J.count;ee++){const K=ee*R;b===!0&&(a.fromBufferAttribute(J,ee),X[B+K+0]=a.x,X[B+K+1]=a.y,X[B+K+2]=a.z,X[B+K+3]=0),x===!0&&(a.fromBufferAttribute(W,ee),X[B+K+4]=a.x,X[B+K+5]=a.y,X[B+K+6]=a.z,X[B+K+7]=0),v===!0&&(a.fromBufferAttribute(z,ee),X[B+K+8]=a.x,X[B+K+9]=a.y,X[B+K+10]=a.z,X[B+K+11]=z.itemSize===4?a.w:1)}}u={count:p,texture:N,size:new xe(P,V)},s.set(h,u),h.addEventListener("dispose",G)}let _=0;for(let b=0;b<g.length;b++)_+=g[b];const M=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",g),d.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}else{const m=g===void 0?0:g.length;let p=n[h.id];if(p===void 0||p.length!==m){p=[];for(let x=0;x<m;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<m;x++){const v=p[x];v[0]=x,v[1]=g[x]}p.sort(pm);for(let x=0;x<8;x++)x<m&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(dm);const u=h.morphAttributes.position,_=h.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const v=o[x],E=v[0],L=v[1];E!==Number.MAX_SAFE_INTEGER&&L?(u&&h.getAttribute("morphTarget"+x)!==u[E]&&h.setAttribute("morphTarget"+x,u[E]),_&&h.getAttribute("morphNormal"+x)!==_[E]&&h.setAttribute("morphNormal"+x,_[E]),r[x]=L,M+=L):(u&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),_&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const b=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function gm(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ul=new At,Bl=new Ll,kl=new nf,Vl=new Ol,bo=[],So=[],wo=new Float32Array(16),Eo=new Float32Array(9),To=new Float32Array(4);function bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bo[r];if(s===void 0&&(s=new Float32Array(r),bo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Je(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qe(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dr(i,e){let t=So[e];t===void 0&&(t=new Int32Array(e),So[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;i.uniform2fv(this.addr,e),Qe(t,e)}}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Je(t,e))return;i.uniform3fv(this.addr,e),Qe(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;i.uniform4fv(this.addr,e),Qe(t,e)}}function Mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;To.set(n),i.uniformMatrix2fv(this.addr,!1,To),Qe(t,n)}}function bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;Eo.set(n),i.uniformMatrix3fv(this.addr,!1,Eo),Qe(t,n)}}function Sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;wo.set(n),i.uniformMatrix4fv(this.addr,!1,wo),Qe(t,n)}}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Em(i,e){const t=this.cache;Je(t,e)||(i.uniform2iv(this.addr,e),Qe(t,e))}function Tm(i,e){const t=this.cache;Je(t,e)||(i.uniform3iv(this.addr,e),Qe(t,e))}function Am(i,e){const t=this.cache;Je(t,e)||(i.uniform4iv(this.addr,e),Qe(t,e))}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lm(i,e){const t=this.cache;Je(t,e)||(i.uniform2uiv(this.addr,e),Qe(t,e))}function Rm(i,e){const t=this.cache;Je(t,e)||(i.uniform3uiv(this.addr,e),Qe(t,e))}function Pm(i,e){const t=this.cache;Je(t,e)||(i.uniform4uiv(this.addr,e),Qe(t,e))}function Dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ul,r)}function Im(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kl,r)}function Fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vl,r)}function Om(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bl,r)}function Nm(i){switch(i){case 5126:return _m;case 35664:return xm;case 35665:return vm;case 35666:return ym;case 35674:return Mm;case 35675:return bm;case 35676:return Sm;case 5124:case 35670:return wm;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Cm;case 36294:return Lm;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function zm(i,e){i.uniform1fv(this.addr,e)}function Um(i,e){const t=bi(e,this.size,2);i.uniform2fv(this.addr,t)}function Bm(i,e){const t=bi(e,this.size,3);i.uniform3fv(this.addr,t)}function km(i,e){const t=bi(e,this.size,4);i.uniform4fv(this.addr,t)}function Vm(i,e){const t=bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gm(i,e){const t=bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hm(i,e){const t=bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wm(i,e){i.uniform1iv(this.addr,e)}function qm(i,e){i.uniform2iv(this.addr,e)}function Xm(i,e){i.uniform3iv(this.addr,e)}function jm(i,e){i.uniform4iv(this.addr,e)}function Ym(i,e){i.uniform1uiv(this.addr,e)}function $m(i,e){i.uniform2uiv(this.addr,e)}function Zm(i,e){i.uniform3uiv(this.addr,e)}function Km(i,e){i.uniform4uiv(this.addr,e)}function Jm(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ul,s[a])}function Qm(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||kl,s[a])}function eg(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vl,s[a])}function tg(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bl,s[a])}function ng(i){switch(i){case 5126:return zm;case 35664:return Um;case 35665:return Bm;case 35666:return km;case 35674:return Vm;case 35675:return Gm;case 35676:return Hm;case 5124:case 35670:return Wm;case 35667:case 35671:return qm;case 35668:case 35672:return Xm;case 35669:case 35673:return jm;case 5125:return Ym;case 36294:return $m;case 36295:return Zm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}class ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Nm(t.type)}}class rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ng(t.type)}}class sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ms=/(\w+)(\])?(\[|\.)?/g;function Ao(i,e){i.seq.push(e),i.map[e.id]=e}function ag(i,e,t){const n=i.name,r=n.length;for(Ms.lastIndex=0;;){const s=Ms.exec(n),a=Ms.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ao(t,c===void 0?new ig(o,i,e):new rg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new sg(o),Ao(t,f)),t=f}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ag(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Co(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let og=0;function lg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cg(i){switch(i){case Fn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Lo(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lg(i.getShaderSource(e),a)}else return r}function hg(i,e){const t=cg(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ug(i,e){let t;switch(e){case Lu:t="Linear";break;case Ru:t="Reinhard";break;case Pu:t="OptimizedCineon";break;case Du:t="ACESFilmic";break;case Iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function dg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pg(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Oi(i){return i!==""}function Ro(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Po(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vs(i){return i.replace(mg,gg)}function gg(i,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Vs(t)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Do(i){return i.replace(_g,xg)}function xg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Io(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function yg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function bg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Au:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function Sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vg(t),c=yg(t),h=Mg(t),f=bg(t),d=Sg(t),g=t.isWebGL2?"":fg(t),m=dg(s),p=r.createProgram();let u,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[m].filter(Oi).join(`
`),u.length>0&&(u+=`
`),_=[g,m].filter(Oi).join(`
`),_.length>0&&(_+=`
`)):(u=[Io(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),_=[g,Io(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Jt?ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,hg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),a=Vs(a),a=Ro(a,t),a=Po(a,t),o=Vs(o),o=Ro(o,t),o=Po(o,t),a=Do(a),o=Do(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=M+u+a,x=M+_+o,v=Co(r,35633,b),E=Co(r,35632,x);if(r.attachShader(p,v),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(v).trim(),V=r.getShaderInfoLog(E).trim();let X=!0,N=!0;if(r.getProgramParameter(p,35714)===!1){X=!1;const R=Lo(r,v,"vertex"),G=Lo(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+G)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||V==="")&&(N=!1);N&&(this.diagnostics={runnable:X,programLog:T,vertexShader:{log:P,prefix:u},fragmentShader:{log:V,prefix:_}})}r.deleteShader(v),r.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new vr(r,p)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=pg(r,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=og++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}let Eg=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ag(e),t.set(e,n)),n}}class Ag{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}}function Cg(i,e,t,n,r,s,a){const o=new Rl,l=new Tg,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,T,P,V,X){const N=V.fog,R=X.geometry,G=y.isMeshStandardMaterial?V.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),J=Y&&Y.mapping===Rr?Y.image.height:null,W=m[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,B=z!==void 0?z.length:0;let ee=0;R.morphAttributes.position!==void 0&&(ee=1),R.morphAttributes.normal!==void 0&&(ee=2),R.morphAttributes.color!==void 0&&(ee=3);let K,te,he,ge;if(W){const Fe=Bt[W];K=Fe.vertexShader,te=Fe.fragmentShader}else K=y.vertexShader,te=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const $=i.getRenderTarget(),De=y.alphaTest>0,ve=y.clearcoat>0,Me=y.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:y.type,vertexShader:K,fragmentShader:te,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:d,outputEncoding:$===null?i.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Fn,map:!!y.map,matcap:!!y.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ju,tangentSpaceNormalMap:y.normalMapType===wl,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ge,clearcoat:ve,clearcoatMap:ve&&!!y.clearcoatMap,clearcoatRoughnessMap:ve&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!y.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!y.iridescenceMap,iridescenceThicknessMap:Me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===hi,alphaMap:!!y.alphaMap,alphaTest:De,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:Jt,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dn,flipSided:y.side===Tt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(_(T,y),M(T,y),T.push(i.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.physicallyCorrectLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),y.push(o.mask)}function b(y){const T=m[y.type];let P;if(T){const V=Bt[T];P=gf.clone(V.uniforms)}else P=y.uniforms;return P}function x(y,T){let P;for(let V=0,X=c.length;V<X;V++){const N=c[V];if(N.cacheKey===T){P=N,++P.usedTimes;break}}return P===void 0&&(P=new wg(i,T,y,s),c.push(P)),P}function v(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:x,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:L}}function Lg(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,g,m,p,u){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:g,groupOrder:m,renderOrder:f.renderOrder,z:p,group:u},i[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=g,_.groupOrder=m,_.renderOrder=f.renderOrder,_.z=p,_.group=u),e++,_}function o(f,d,g,m,p,u){const _=a(f,d,g,m,p,u);g.transmission>0?n.push(_):g.transparent===!0?r.push(_):t.push(_)}function l(f,d,g,m,p,u){const _=a(f,d,g,m,p,u);g.transmission>0?n.unshift(_):g.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||Rg),n.length>1&&n.sort(d||Fo),r.length>1&&r.sort(d||Fo)}function h(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Pg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Oo,i.set(n,[a])):r>=s.length?(a=new Oo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fg=0;function Og(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ng(i,e){const t=new Dg,n=Ig(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new I);const s=new I,a=new Ye,o=new Ye;function l(h,f){let d=0,g=0,m=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let p=0,u=0,_=0,M=0,b=0,x=0,v=0,E=0,L=0,y=0;h.sort(Og);const T=f!==!0?Math.PI:1;for(let V=0,X=h.length;V<X;V++){const N=h[V],R=N.color,G=N.intensity,Y=N.distance,J=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=R.r*G*T,g+=R.g*G*T,m+=R.b*G*T;else if(N.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(N.sh.coefficients[W],G);else if(N.isDirectionalLight){const W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const z=N.shadow,B=n.get(N);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,r.directionalShadow[p]=B,r.directionalShadowMap[p]=J,r.directionalShadowMatrix[p]=N.shadow.matrix,x++}r.directional[p]=W,p++}else if(N.isSpotLight){const W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(R).multiplyScalar(G*T),W.distance=Y,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,r.spot[_]=W;const z=N.shadow;if(N.map&&(r.spotLightMap[L]=N.map,L++,z.updateMatrices(N),N.castShadow&&y++),r.spotLightMatrix[_]=z.matrix,N.castShadow){const B=n.get(N);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,r.spotShadow[_]=B,r.spotShadowMap[_]=J,E++}_++}else if(N.isRectAreaLight){const W=t.get(N);W.color.copy(R).multiplyScalar(G),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),r.rectArea[M]=W,M++}else if(N.isPointLight){const W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*T),W.distance=N.distance,W.decay=N.decay,N.castShadow){const z=N.shadow,B=n.get(N);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,r.pointShadow[u]=B,r.pointShadowMap[u]=J,r.pointShadowMatrix[u]=N.shadow.matrix,v++}r.point[u]=W,u++}else if(N.isHemisphereLight){const W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(G*T),W.groundColor.copy(N.groundColor).multiplyScalar(G*T),r.hemi[b]=W,b++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=m;const P=r.hash;(P.directionalLength!==p||P.pointLength!==u||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==b||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==E||P.numSpotMaps!==L)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=M,r.point.length=u,r.hemi.length=b,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=E+L-y,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=y,P.directionalLength=p,P.pointLength=u,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=b,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=E,P.numSpotMaps=L,r.version=Fg++)}function c(h,f){let d=0,g=0,m=0,p=0,u=0;const _=f.matrixWorldInverse;for(let M=0,b=h.length;M<b;M++){const x=h[M];if(x.isDirectionalLight){const v=r.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),d++}else if(x.isSpotLight){const v=r.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),m++}else if(x.isRectAreaLight){const v=r.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),o.identity(),a.copy(x.matrixWorld),a.premultiply(_),o.extractRotation(a),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const v=r.point[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),g++}else if(x.isHemisphereLight){const v=r.hemi[u];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(_),u++}}}return{setup:l,setupView:c,state:r}}function No(i,e){const t=new Ng(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zg(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new No(i,e),t.set(s,[l])):a>=o.length?(l=new No(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ug extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bg extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gg(i,e,t){let n=new $s;const r=new xe,s=new xe,a=new tt,o=new Ug({depthPacking:Ku}),l=new Bg,c={},h=t.maxTextureSize,f={0:Tt,1:di,2:dn},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:kg,fragmentShader:Vg}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const m=new Qt;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Gt(m,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl,this.render=function(x,v,E){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||x.length===0)return;const L=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(gn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let V=0,X=x.length;V<X;V++){const N=x[V],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const G=R.getFrameExtents();if(r.multiply(G),s.copy(R.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,R.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,R.mapSize.y=s.y)),R.map===null){const J=this.type!==Fi?{minFilter:ct,magFilter:ct}:{};R.map=new On(r.x,r.y,J),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();const Y=R.getViewportCount();for(let J=0;J<Y;J++){const W=R.getViewport(J);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),P.viewport(a),R.updateMatrices(N,J),n=R.getFrustum(),b(v,E,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===Fi&&_(R,E),R.needsUpdate=!1}u.needsUpdate=!1,i.setRenderTarget(L,y,T)};function _(x,v){const E=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new On(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(v,null,E,d,p,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(v,null,E,g,p,null)}function M(x,v,E,L,y,T){let P=null;const V=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(V!==void 0?P=V:P=E.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const X=P.uuid,N=v.uuid;let R=c[X];R===void 0&&(R={},c[X]=R);let G=R[N];G===void 0&&(G=P.clone(),R[N]=G),P=G}return P.visible=v.visible,P.wireframe=v.wireframe,T===Fi?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:f[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaTest,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=L,P.farDistance=y),P}function b(x,v,E,L,y){if(x.visible===!1)return;if(x.layers.test(v.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===Fi)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const V=e.update(x),X=x.material;if(Array.isArray(X)){const N=V.groups;for(let R=0,G=N.length;R<G;R++){const Y=N[R],J=X[Y.materialIndex];if(J&&J.visible){const W=M(x,J,L,E.near,E.far,y);i.renderBufferDirect(E,null,V,W,x,Y)}}}else if(X.visible){const N=M(x,X,L,E.near,E.far,y);i.renderBufferDirect(E,null,V,N,x,null)}}const P=x.children;for(let V=0,X=P.length;V<X;V++)b(P[V],v,E,L,y)}}function Hg(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const oe=new tt;let ie=null;const Z=new tt(0,0,0,0);return{setMask:function(se){ie!==se&&!D&&(i.colorMask(se,se,se,se),ie=se)},setLocked:function(se){D=se},setClear:function(se,ye,Be,He,en){en===!0&&(se*=He,ye*=He,Be*=He),oe.set(se,ye,Be,He),Z.equals(oe)===!1&&(i.clearColor(se,ye,Be,He),Z.copy(oe))},reset:function(){D=!1,ie=null,Z.set(-1,0,0,0)}}}function s(){let D=!1,oe=null,ie=null,Z=null;return{setTest:function(se){se?De(2929):ve(2929)},setMask:function(se){oe!==se&&!D&&(i.depthMask(se),oe=se)},setFunc:function(se){if(ie!==se){switch(se){case yu:i.depthFunc(512);break;case Mu:i.depthFunc(519);break;case bu:i.depthFunc(513);break;case Is:i.depthFunc(515);break;case Su:i.depthFunc(514);break;case wu:i.depthFunc(518);break;case Eu:i.depthFunc(516);break;case Tu:i.depthFunc(517);break;default:i.depthFunc(515)}ie=se}},setLocked:function(se){D=se},setClear:function(se){Z!==se&&(i.clearDepth(se),Z=se)},reset:function(){D=!1,oe=null,ie=null,Z=null}}}function a(){let D=!1,oe=null,ie=null,Z=null,se=null,ye=null,Be=null,He=null,en=null;return{setTest:function(ke){D||(ke?De(2960):ve(2960))},setMask:function(ke){oe!==ke&&!D&&(i.stencilMask(ke),oe=ke)},setFunc:function(ke,qt,vt){(ie!==ke||Z!==qt||se!==vt)&&(i.stencilFunc(ke,qt,vt),ie=ke,Z=qt,se=vt)},setOp:function(ke,qt,vt){(ye!==ke||Be!==qt||He!==vt)&&(i.stencilOp(ke,qt,vt),ye=ke,Be=qt,He=vt)},setLocked:function(ke){D=ke},setClear:function(ke){en!==ke&&(i.clearStencil(ke),en=ke)},reset:function(){D=!1,oe=null,ie=null,Z=null,se=null,ye=null,Be=null,He=null,en=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,f=new WeakMap;let d={},g={},m=new WeakMap,p=[],u=null,_=!1,M=null,b=null,x=null,v=null,E=null,L=null,y=null,T=!1,P=null,V=null,X=null,N=null,R=null;const G=i.getParameter(35661);let Y=!1,J=0;const W=i.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=J>=2);let z=null,B={};const ee=i.getParameter(3088),K=i.getParameter(2978),te=new tt().fromArray(ee),he=new tt().fromArray(K);function ge(D,oe,ie){const Z=new Uint8Array(4),se=i.createTexture();i.bindTexture(D,se),i.texParameteri(D,10241,9728),i.texParameteri(D,10240,9728);for(let ye=0;ye<ie;ye++)i.texImage2D(oe+ye,0,6408,1,1,0,6408,5121,Z);return se}const $={};$[3553]=ge(3553,3553,1),$[34067]=ge(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(Is),$e(!1),dt(Ea),De(2884),qe(gn);function De(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function ve(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Me(D,oe){return g[D]!==oe?(i.bindFramebuffer(D,oe),g[D]=oe,n&&(D===36009&&(g[36160]=oe),D===36160&&(g[36009]=oe)),!0):!1}function ue(D,oe){let ie=p,Z=!1;if(D)if(ie=m.get(oe),ie===void 0&&(ie=[],m.set(oe,ie)),D.isWebGLMultipleRenderTargets){const se=D.texture;if(ie.length!==se.length||ie[0]!==36064){for(let ye=0,Be=se.length;ye<Be;ye++)ie[ye]=36064+ye;ie.length=se.length,Z=!0}}else ie[0]!==36064&&(ie[0]=36064,Z=!0);else ie[0]!==1029&&(ie[0]=1029,Z=!0);Z&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Fe(D){return u!==D?(i.useProgram(D),u=D,!0):!1}const Te={[li]:32774,[cu]:32778,[hu]:32779};if(n)Te[La]=32775,Te[Ra]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Te[La]=D.MIN_EXT,Te[Ra]=D.MAX_EXT)}const me={[uu]:0,[fu]:1,[du]:768,[vl]:770,[vu]:776,[_u]:774,[mu]:772,[pu]:769,[yl]:771,[xu]:775,[gu]:773};function qe(D,oe,ie,Z,se,ye,Be,He){if(D===gn){_===!0&&(ve(3042),_=!1);return}if(_===!1&&(De(3042),_=!0),D!==lu){if(D!==M||He!==T){if((b!==li||E!==li)&&(i.blendEquation(32774),b=li,E=li),He)switch(D){case hi:i.blendFuncSeparate(1,771,1,771);break;case Ta:i.blendFunc(1,1);break;case Aa:i.blendFuncSeparate(0,769,0,1);break;case Ca:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hi:i.blendFuncSeparate(770,771,1,771);break;case Ta:i.blendFunc(770,1);break;case Aa:i.blendFuncSeparate(0,769,0,1);break;case Ca:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,v=null,L=null,y=null,M=D,T=He}return}se=se||oe,ye=ye||ie,Be=Be||Z,(oe!==b||se!==E)&&(i.blendEquationSeparate(Te[oe],Te[se]),b=oe,E=se),(ie!==x||Z!==v||ye!==L||Be!==y)&&(i.blendFuncSeparate(me[ie],me[Z],me[ye],me[Be]),x=ie,v=Z,L=ye,y=Be),M=D,T=null}function nt(D,oe){D.side===dn?ve(2884):De(2884);let ie=D.side===Tt;oe&&(ie=!ie),$e(ie),D.blending===hi&&D.transparent===!1?qe(gn):qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Z=D.stencilWrite;c.setTest(Z),Z&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?De(32926):ve(32926)}function $e(D){P!==D&&(D?i.frontFace(2304):i.frontFace(2305),P=D)}function dt(D){D!==su?(De(2884),D!==V&&(D===Ea?i.cullFace(1029):D===au?i.cullFace(1028):i.cullFace(1032))):ve(2884),V=D}function Ze(D){D!==X&&(Y&&i.lineWidth(D),X=D)}function Oe(D,oe,ie){D?(De(32823),(N!==oe||R!==ie)&&(i.polygonOffset(oe,ie),N=oe,R=ie)):ve(32823)}function _t(D){D?De(3089):ve(3089)}function xt(D){D===void 0&&(D=33984+G-1),z!==D&&(i.activeTexture(D),z=D)}function A(D,oe,ie){ie===void 0&&(z===null?ie=33984+G-1:ie=z);let Z=B[ie];Z===void 0&&(Z={type:void 0,texture:void 0},B[ie]=Z),(Z.type!==D||Z.texture!==oe)&&(z!==ie&&(i.activeTexture(ie),z=ie),i.bindTexture(D,oe||$[D]),Z.type=D,Z.texture=oe)}function S(){const D=B[z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function ce(D){he.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function de(D,oe){let ie=f.get(oe);ie===void 0&&(ie=new WeakMap,f.set(oe,ie));let Z=ie.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(oe,D.name),ie.set(D,Z))}function be(D,oe){const Z=f.get(oe).get(D);h.get(D)!==Z&&(i.uniformBlockBinding(oe,Z,D.__bindingPointIndex),h.set(D,Z))}function Pe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},z=null,B={},g={},m=new WeakMap,p=[],u=null,_=!1,M=null,b=null,x=null,v=null,E=null,L=null,y=null,T=!1,P=null,V=null,X=null,N=null,R=null,te.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:De,disable:ve,bindFramebuffer:Me,drawBuffers:ue,useProgram:Fe,setBlending:qe,setMaterial:nt,setFlipSided:$e,setCullFace:dt,setLineWidth:Ze,setPolygonOffset:Oe,setScissorTest:_t,activeTexture:xt,bindTexture:A,unbindTexture:S,compressedTexImage2D:H,texImage2D:O,texImage3D:le,updateUBOMapping:de,uniformBlockBinding:be,texStorage2D:_e,texStorage3D:C,texSubImage2D:Q,texSubImage3D:ne,compressedTexSubImage2D:ae,scissor:fe,viewport:ce,reset:Pe}}function Wg(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let p;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return _?new OffscreenCanvas(A,S):Er("canvas")}function b(A,S,H,Q){let ne=1;if((A.width>Q||A.height>Q)&&(ne=Q/Math.max(A.width,A.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=S?ks:Math.floor,_e=ae(ne*A.width),C=ae(ne*A.height);p===void 0&&(p=M(_e,C));const O=H?M(_e,C):p;return O.width=_e,O.height=C,O.getContext("2d").drawImage(A,0,0,_e,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+C+")."),O}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return no(A.width)&&no(A.height)}function v(A){return o?!1:A.wrapS!==It||A.wrapT!==It||A.minFilter!==ct&&A.minFilter!==St}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==ct&&A.minFilter!==St}function L(A){i.generateMipmap(A)}function y(A,S,H,Q,ne=!1){if(o===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=S;return S===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),S===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),S===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=Q===Ge&&ne===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function T(A,S,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==ct&&A.minFilter!==St?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){return A===ct||A===Pa||A===Da?9728:9729}function V(A){const S=A.target;S.removeEventListener("dispose",V),N(S),S.isVideoTexture&&m.delete(S)}function X(A){const S=A.target;S.removeEventListener("dispose",X),G(S)}function N(A){const S=n.get(A);if(S.__webglInit===void 0)return;const H=A.source,Q=u.get(H);if(Q){const ne=Q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(A),Object.keys(Q).length===0&&u.delete(H)}n.remove(A)}function R(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const H=A.source,Q=u.get(H);delete Q[S.__cacheKey],a.memory.textures--}function G(A){const S=A.texture,H=n.get(A),Q=n.get(S);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ae=S.length;ne<ae;ne++){const _e=n.get(S[ne]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(A)}let Y=0;function J(){Y=0}function W(){const A=Y;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Y+=1,A}function z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function B(A,S){const H=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,A,S);return}}t.bindTexture(3553,H.__webglTexture,33984+S)}function ee(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ve(H,A,S);return}t.bindTexture(35866,H.__webglTexture,33984+S)}function K(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ve(H,A,S);return}t.bindTexture(32879,H.__webglTexture,33984+S)}function te(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Me(H,A,S);return}t.bindTexture(34067,H.__webglTexture,33984+S)}const he={[Ns]:10497,[It]:33071,[zs]:33648},ge={[ct]:9728,[Pa]:9984,[Da]:9986,[St]:9729,[Fu]:9985,[Pr]:9987};function $(A,S,H){if(H?(i.texParameteri(A,10242,he[S.wrapS]),i.texParameteri(A,10243,he[S.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,he[S.wrapR]),i.texParameteri(A,10240,ge[S.magFilter]),i.texParameteri(A,10241,ge[S.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(S.wrapS!==It||S.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,P(S.magFilter)),i.texParameteri(A,10241,P(S.minFilter)),S.minFilter!==ct&&S.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.type===An&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function De(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",V));const Q=S.source;let ne=u.get(Q);ne===void 0&&(ne={},u.set(Q,ne));const ae=z(S);if(ae!==A.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[ae].usedTimes++;const _e=ne[A.__cacheKey];_e!==void 0&&(ne[A.__cacheKey].usedTimes--,_e.usedTimes===0&&R(S)),A.__cacheKey=ae,A.__webglTexture=ne[ae].texture}return H}function ve(A,S,H){let Q=3553;S.isDataArrayTexture&&(Q=35866),S.isData3DTexture&&(Q=32879);const ne=De(A,S),ae=S.source;t.bindTexture(Q,A.__webglTexture,33984+H);const _e=n.get(ae);if(ae.version!==_e.__version||ne===!0){t.activeTexture(33984+H),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const C=v(S)&&x(S.image)===!1;let O=b(S.image,C,!1,h);O=xt(S,O);const le=x(O)||o,fe=s.convert(S.format,S.encoding);let ce=s.convert(S.type),de=y(S.internalFormat,fe,ce,S.encoding,S.isVideoTexture);$(Q,S,le);let be;const Pe=S.mipmaps,D=o&&S.isVideoTexture!==!0,oe=_e.__version===void 0||ne===!0,ie=T(S,O,le);if(S.isDepthTexture)de=6402,o?S.type===An?de=36012:S.type===Tn?de=33190:S.type===ui?de=35056:de=33189:S.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Rn&&de===6402&&S.type!==Sl&&S.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Tn,ce=s.convert(S.type)),S.format===gi&&de===6402&&(de=34041,S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ui,ce=s.convert(S.type))),oe&&(D?t.texStorage2D(3553,1,de,O.width,O.height):t.texImage2D(3553,0,de,O.width,O.height,0,fe,ce,null));else if(S.isDataTexture)if(Pe.length>0&&le){D&&oe&&t.texStorage2D(3553,ie,de,Pe[0].width,Pe[0].height);for(let Z=0,se=Pe.length;Z<se;Z++)be=Pe[Z],D?t.texSubImage2D(3553,Z,0,0,be.width,be.height,fe,ce,be.data):t.texImage2D(3553,Z,de,be.width,be.height,0,fe,ce,be.data);S.generateMipmaps=!1}else D?(oe&&t.texStorage2D(3553,ie,de,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,fe,ce,O.data)):t.texImage2D(3553,0,de,O.width,O.height,0,fe,ce,O.data);else if(S.isCompressedTexture){D&&oe&&t.texStorage2D(3553,ie,de,Pe[0].width,Pe[0].height);for(let Z=0,se=Pe.length;Z<se;Z++)be=Pe[Z],S.format!==Vt?fe!==null?D?t.compressedTexSubImage2D(3553,Z,0,0,be.width,be.height,fe,be.data):t.compressedTexImage2D(3553,Z,de,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(3553,Z,0,0,be.width,be.height,fe,ce,be.data):t.texImage2D(3553,Z,de,be.width,be.height,0,fe,ce,be.data)}else if(S.isDataArrayTexture)D?(oe&&t.texStorage3D(35866,ie,de,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,fe,ce,O.data)):t.texImage3D(35866,0,de,O.width,O.height,O.depth,0,fe,ce,O.data);else if(S.isData3DTexture)D?(oe&&t.texStorage3D(32879,ie,de,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,fe,ce,O.data)):t.texImage3D(32879,0,de,O.width,O.height,O.depth,0,fe,ce,O.data);else if(S.isFramebufferTexture){if(oe)if(D)t.texStorage2D(3553,ie,de,O.width,O.height);else{let Z=O.width,se=O.height;for(let ye=0;ye<ie;ye++)t.texImage2D(3553,ye,de,Z,se,0,fe,ce,null),Z>>=1,se>>=1}}else if(Pe.length>0&&le){D&&oe&&t.texStorage2D(3553,ie,de,Pe[0].width,Pe[0].height);for(let Z=0,se=Pe.length;Z<se;Z++)be=Pe[Z],D?t.texSubImage2D(3553,Z,0,0,fe,ce,be):t.texImage2D(3553,Z,de,fe,ce,be);S.generateMipmaps=!1}else D?(oe&&t.texStorage2D(3553,ie,de,O.width,O.height),t.texSubImage2D(3553,0,0,0,fe,ce,O)):t.texImage2D(3553,0,de,fe,ce,O);E(S,le)&&L(Q),_e.__version=ae.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Me(A,S,H){if(S.image.length!==6)return;const Q=De(A,S),ne=S.source;t.bindTexture(34067,A.__webglTexture,33984+H);const ae=n.get(ne);if(ne.version!==ae.__version||Q===!0){t.activeTexture(33984+H),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,O=[];for(let Z=0;Z<6;Z++)!_e&&!C?O[Z]=b(S.image[Z],!1,!0,c):O[Z]=C?S.image[Z].image:S.image[Z],O[Z]=xt(S,O[Z]);const le=O[0],fe=x(le)||o,ce=s.convert(S.format,S.encoding),de=s.convert(S.type),be=y(S.internalFormat,ce,de,S.encoding),Pe=o&&S.isVideoTexture!==!0,D=ae.__version===void 0||Q===!0;let oe=T(S,le,fe);$(34067,S,fe);let ie;if(_e){Pe&&D&&t.texStorage2D(34067,oe,be,le.width,le.height);for(let Z=0;Z<6;Z++){ie=O[Z].mipmaps;for(let se=0;se<ie.length;se++){const ye=ie[se];S.format!==Vt?ce!==null?Pe?t.compressedTexSubImage2D(34069+Z,se,0,0,ye.width,ye.height,ce,ye.data):t.compressedTexImage2D(34069+Z,se,be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+Z,se,0,0,ye.width,ye.height,ce,de,ye.data):t.texImage2D(34069+Z,se,be,ye.width,ye.height,0,ce,de,ye.data)}}}else{ie=S.mipmaps,Pe&&D&&(ie.length>0&&oe++,t.texStorage2D(34067,oe,be,O[0].width,O[0].height));for(let Z=0;Z<6;Z++)if(C){Pe?t.texSubImage2D(34069+Z,0,0,0,O[Z].width,O[Z].height,ce,de,O[Z].data):t.texImage2D(34069+Z,0,be,O[Z].width,O[Z].height,0,ce,de,O[Z].data);for(let se=0;se<ie.length;se++){const Be=ie[se].image[Z].image;Pe?t.texSubImage2D(34069+Z,se+1,0,0,Be.width,Be.height,ce,de,Be.data):t.texImage2D(34069+Z,se+1,be,Be.width,Be.height,0,ce,de,Be.data)}}else{Pe?t.texSubImage2D(34069+Z,0,0,0,ce,de,O[Z]):t.texImage2D(34069+Z,0,be,ce,de,O[Z]);for(let se=0;se<ie.length;se++){const ye=ie[se];Pe?t.texSubImage2D(34069+Z,se+1,0,0,ce,de,ye.image[Z]):t.texImage2D(34069+Z,se+1,be,ce,de,ye.image[Z])}}}E(S,fe)&&L(34067),ae.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,H,Q,ne){const ae=s.convert(H.format,H.encoding),_e=s.convert(H.type),C=y(H.internalFormat,ae,_e,H.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,C,S.width,S.height,S.depth,0,ae,_e,null):t.texImage2D(ne,0,C,S.width,S.height,0,ae,_e,null)),t.bindFramebuffer(36160,A),Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,Q,ne,n.get(H).__webglTexture,0,Ze(S)):i.framebufferTexture2D(36160,Q,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(A,S,H){if(i.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if(H||Oe(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===An?Q=36012:ne.type===Tn&&(Q=33190));const ae=Ze(S);Oe(S)?d.renderbufferStorageMultisampleEXT(36161,ae,Q,S.width,S.height):i.renderbufferStorageMultisample(36161,ae,Q,S.width,S.height)}else i.renderbufferStorage(36161,Q,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const Q=Ze(S);H&&Oe(S)===!1?i.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):Oe(S)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):i.renderbufferStorage(36161,34041,S.width,S.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<Q.length;ne++){const ae=Q[ne],_e=s.convert(ae.format,ae.encoding),C=s.convert(ae.type),O=y(ae.internalFormat,_e,C,ae.encoding),le=Ze(S);H&&Oe(S)===!1?i.renderbufferStorageMultisample(36161,le,O,S.width,S.height):Oe(S)?d.renderbufferStorageMultisampleEXT(36161,le,O,S.width,S.height):i.renderbufferStorage(36161,O,S.width,S.height)}}i.bindRenderbuffer(36161,null)}function Te(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,ne=Ze(S);if(S.depthTexture.format===Rn)Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ne):i.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===gi)Oe(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ne):i.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function me(A){const S=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=i.createRenderbuffer(),Fe(S.__webglDepthbuffer[Q],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Fe(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function qe(A,S,H){const Q=n.get(A);S!==void 0&&ue(Q.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&me(A)}function nt(A){const S=A.texture,H=n.get(A),Q=n.get(S);A.addEventListener("dispose",X),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,a.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,_e=x(A)||o;if(ne){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),ae)if(r.drawBuffers){const C=A.texture;for(let O=0,le=C.length;O<le;O++){const fe=n.get(C[O]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Oe(A)===!1){const C=ae?S:[S];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const le=C[O];H.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(36161,H.__webglColorRenderbuffer[O]);const fe=s.convert(le.format,le.encoding),ce=s.convert(le.type),de=y(le.internalFormat,fe,ce,le.encoding,A.isXRRenderTarget===!0),be=Ze(A);i.renderbufferStorageMultisample(36161,be,de,A.width,A.height),i.framebufferRenderbuffer(36160,36064+O,36161,H.__webglColorRenderbuffer[O])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Q.__webglTexture),$(34067,S,_e);for(let C=0;C<6;C++)ue(H.__webglFramebuffer[C],A,S,36064,34069+C);E(S,_e)&&L(34067),t.unbindTexture()}else if(ae){const C=A.texture;for(let O=0,le=C.length;O<le;O++){const fe=C[O],ce=n.get(fe);t.bindTexture(3553,ce.__webglTexture),$(3553,fe,_e),ue(H.__webglFramebuffer,A,fe,36064+O,3553),E(fe,_e)&&L(3553)}t.unbindTexture()}else{let C=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?C=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,Q.__webglTexture),$(C,S,_e),ue(H.__webglFramebuffer,A,S,36064,C),E(S,_e)&&L(C),t.unbindTexture()}A.depthBuffer&&me(A)}function $e(A){const S=x(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,ne=H.length;Q<ne;Q++){const ae=H[Q];if(E(ae,S)){const _e=A.isWebGLCubeRenderTarget?34067:3553,C=n.get(ae).__webglTexture;t.bindTexture(_e,C),L(_e),t.unbindTexture()}}}function dt(A){if(o&&A.samples>0&&Oe(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,Q=A.height;let ne=16384;const ae=[],_e=A.stencilBuffer?33306:36096,C=n.get(A),O=A.isWebGLMultipleRenderTargets===!0;if(O)for(let le=0;le<S.length;le++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let le=0;le<S.length;le++){ae.push(36064+le),A.depthBuffer&&ae.push(_e);const fe=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(fe===!1&&(A.depthBuffer&&(ne|=256),A.stencilBuffer&&(ne|=1024)),O&&i.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[le]),fe===!0&&(i.invalidateFramebuffer(36008,[_e]),i.invalidateFramebuffer(36009,[_e])),O){const ce=n.get(S[le]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ce,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,ne,9728),g&&i.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let le=0;le<S.length;le++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,C.__webglColorRenderbuffer[le]);const fe=n.get(S[le]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function Ze(A){return Math.min(f,A.samples)}function Oe(A){const S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(A){const S=a.render.frame;m.get(A)!==S&&(m.set(A,S),A.update())}function xt(A,S){const H=A.encoding,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Bs||H!==Fn&&(H===Ge?o===!1?e.has("EXT_sRGB")===!0&&Q===Vt?(A.format=Bs,A.minFilter=St,A.generateMipmaps=!1):S=Al.sRGBToLinear(S):(Q!==Vt||ne!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=B,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=te,this.rebindTextures=qe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Oe}function qg(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===In)return 5121;if(s===Uu)return 32819;if(s===Bu)return 32820;if(s===Ou)return 5120;if(s===Nu)return 5122;if(s===Sl)return 5123;if(s===zu)return 5124;if(s===Tn)return 5125;if(s===An)return 5126;if(s===Ui)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ku)return 6406;if(s===Vt)return 6408;if(s===Gu)return 6409;if(s===Hu)return 6410;if(s===Rn)return 6402;if(s===gi)return 34041;if(s===Wu)return 6403;if(s===Vu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Bs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===qu)return 36244;if(s===Xu)return 33319;if(s===ju)return 33320;if(s===Yu)return 36249;if(s===qr||s===Xr||s===jr||s===Yr)if(a===Ge)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ia||s===Fa||s===Oa||s===Na)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ia)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Na)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$u)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===za||s===Ua)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===za)return a===Ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ua)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ba||s===ka||s===Va||s===Ga||s===Ha||s===Wa||s===qa||s===Xa||s===ja||s===Ya||s===$a||s===Za||s===Ka||s===Ja)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ba)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ka)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Va)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ga)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ha)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ja)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ya)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$a)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Za)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ka)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ja)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Qa)return a===Ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ui?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Xg extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ni extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jg={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const u=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const M=new Ni;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[p.jointName]=M,c.add(M)}const _=c.joints[p.jointName];u!==null&&(_.matrix.fromArray(u.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=u.radius),_.visible=u!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,m=.005;c.inputState.pinching&&d>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Yg extends At{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:Rn,h!==Rn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rn&&(n=Tn),n===void 0&&h===gi&&(n=ui),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ct,this.minFilter=l!==void 0?l:ct,this.flipY=!1,this.generateMipmaps=!1}}class $g extends Bn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,h=null,f=null,d=null,g=null;const m=t.getContextAttributes();let p=null,u=null;const _=[],M=[],b=new wt;b.layers.enable(1),b.viewport=new tt;const x=new wt;x.layers.enable(2),x.viewport=new tt;const v=[b,x],E=new Xg;E.layers.enable(1),E.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let B=_[z];return B===void 0&&(B=new bs,_[z]=B),B.getTargetRaySpace()},this.getControllerGrip=function(z){let B=_[z];return B===void 0&&(B=new bs,_[z]=B),B.getGripSpace()},this.getHand=function(z){let B=_[z];return B===void 0&&(B=new bs,_[z]=B),B.getHandSpace()};function T(z){const B=M.indexOf(z.inputSource);if(B===-1)return;const ee=_[B];ee!==void 0&&ee.dispatchEvent({type:z.type,data:z.inputSource})}function P(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",V);for(let z=0;z<_.length;z++){const B=M[z];B!==null&&(M[z]=null,_[z].disconnect(B))}L=null,y=null,e.setRenderTarget(p),d=null,f=null,h=null,r=null,u=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",P),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:d}),u=new On(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:In,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let B=null,ee=null,K=null;m.depth&&(K=m.stencil?35056:33190,B=m.stencil?gi:Rn,ee=m.stencil?ui:Tn);const te={colorFormat:32856,depthFormat:K,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(te),r.updateRenderState({layers:[f]}),u=new On(f.textureWidth,f.textureHeight,{format:Vt,type:In,depthTexture:new Yg(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const he=e.properties.get(u);he.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),W.setContext(r),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(z){for(let B=0;B<z.removed.length;B++){const ee=z.removed[B],K=M.indexOf(ee);K>=0&&(M[K]=null,_[K].dispatchEvent({type:"disconnected",data:ee}))}for(let B=0;B<z.added.length;B++){const ee=z.added[B];let K=M.indexOf(ee);if(K===-1){for(let he=0;he<_.length;he++)if(he>=M.length){M.push(ee),K=he;break}else if(M[he]===null){M[he]=ee,K=he;break}if(K===-1)break}const te=_[K];te&&te.dispatchEvent({type:"connected",data:ee})}}const X=new I,N=new I;function R(z,B,ee){X.setFromMatrixPosition(B.matrixWorld),N.setFromMatrixPosition(ee.matrixWorld);const K=X.distanceTo(N),te=B.projectionMatrix.elements,he=ee.projectionMatrix.elements,ge=te[14]/(te[10]-1),$=te[14]/(te[10]+1),De=(te[9]+1)/te[5],ve=(te[9]-1)/te[5],Me=(te[8]-1)/te[0],ue=(he[8]+1)/he[0],Fe=ge*Me,Te=ge*ue,me=K/(-Me+ue),qe=me*-Me;B.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(qe),z.translateZ(me),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const nt=ge+me,$e=$+me,dt=Fe-qe,Ze=Te+(K-qe),Oe=De*$/$e*nt,_t=ve*$/$e*nt;z.projectionMatrix.makePerspective(dt,Ze,Oe,_t,nt,$e)}function G(z,B){B===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(B.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;E.near=x.near=b.near=z.near,E.far=x.far=b.far=z.far,(L!==E.near||y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,y=E.far);const B=z.parent,ee=E.cameras;G(E,B);for(let te=0;te<ee.length;te++)G(ee[te],B);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),z.matrix.copy(E.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const K=z.children;for(let te=0,he=K.length;te<he;te++)K[te].updateMatrixWorld(!0);ee.length===2?R(E,b,x):E.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let Y=null;function J(z,B){if(c=B.getViewerPose(l||a),g=B,c!==null){const ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(u,d.framebuffer),e.setRenderTarget(u));let K=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,K=!0);for(let te=0;te<ee.length;te++){const he=ee[te];let ge=null;if(d!==null)ge=d.getViewport(he);else{const De=h.getViewSubImage(f,he);ge=De.viewport,te===0&&(e.setRenderTargetTextures(u,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(u))}let $=v[te];$===void 0&&($=new wt,$.layers.enable(te),$.viewport=new tt,v[te]=$),$.matrix.fromArray(he.transform.matrix),$.projectionMatrix.fromArray(he.projectionMatrix),$.viewport.set(ge.x,ge.y,ge.width,ge.height),te===0&&E.matrix.copy($.matrix),K===!0&&E.cameras.push($)}}for(let ee=0;ee<_.length;ee++){const K=M[ee],te=_[ee];K!==null&&te!==void 0&&te.update(K,B,l||a)}Y&&Y(z,B),g=null}const W=new Nl;W.setAnimationLoop(J),this.setAnimationLoop=function(z){Y=z},this.dispose=function(){}}}function Zg(i,e){function t(p,u){p.fogColor.value.copy(u.color),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,_,M,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),c(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&d(p,u,b)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),m(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?o(p,u,_,M):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===Tt&&(p.bumpScale.value*=-1)),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===Tt&&p.normalScale.value.negate()),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let M;u.map?M=u.map:u.specularMap?M=u.specularMap:u.displacementMap?M=u.displacementMap:u.normalMap?M=u.normalMap:u.bumpMap?M=u.bumpMap:u.roughnessMap?M=u.roughnessMap:u.metalnessMap?M=u.metalnessMap:u.alphaMap?M=u.alphaMap:u.emissiveMap?M=u.emissiveMap:u.clearcoatMap?M=u.clearcoatMap:u.clearcoatNormalMap?M=u.clearcoatNormalMap:u.clearcoatRoughnessMap?M=u.clearcoatRoughnessMap:u.iridescenceMap?M=u.iridescenceMap:u.iridescenceThicknessMap?M=u.iridescenceThicknessMap:u.specularIntensityMap?M=u.specularIntensityMap:u.specularColorMap?M=u.specularColorMap:u.transmissionMap?M=u.transmissionMap:u.thicknessMap?M=u.thicknessMap:u.sheenColorMap?M=u.sheenColorMap:u.sheenRoughnessMap&&(M=u.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let b;u.aoMap?b=u.aoMap:u.lightMap&&(b=u.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function o(p,u,_,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=M*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b;u.map?b=u.map:u.alphaMap&&(b=u.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _;u.map?_=u.map:u.alphaMap&&(_=u.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function d(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===Tt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap)}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function m(p,u){p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Kg(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(M,b){const x=b.program;n.uniformBlockBinding(M,x)}function c(M,b){let x=r[M.id];x===void 0&&(m(M),x=h(M),r[M.id]=x,M.addEventListener("dispose",u));const v=b.program;n.updateUBOMapping(M,v);const E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function h(M){const b=f();M.__bindingPointIndex=b;const x=i.createBuffer(),v=M.__size,E=M.usage;return i.bindBuffer(35345,x),i.bufferData(35345,v,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,x),x}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=r[M.id],x=M.uniforms,v=M.__cache;i.bindBuffer(35345,b);for(let E=0,L=x.length;E<L;E++){const y=x[E];if(g(y,E,v)===!0){const T=y.value,P=y.__offset;typeof T=="number"?(y.__data[0]=T,i.bufferSubData(35345,P,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):T.toArray(y.__data),i.bufferSubData(35345,P,y.__data))}}i.bindBuffer(35345,null)}function g(M,b,x){const v=M.value;if(x[b]===void 0)return typeof v=="number"?x[b]=v:x[b]=v.clone(),!0;if(typeof v=="number"){if(x[b]!==v)return x[b]=v,!0}else{const E=x[b];if(E.equals(v)===!1)return E.copy(v),!0}return!1}function m(M){const b=M.uniforms;let x=0;const v=16;let E=0;for(let L=0,y=b.length;L<y;L++){const T=b[L],P=p(T);if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,L>0){E=x%v;const V=v-E;E!==0&&V-P.boundary<0&&(x+=v-E,T.__offset=x)}x+=P.storage}return E=x%v,E>0&&(x+=v-E),M.__size=x,M.__cache={},this}function p(M){const b=M.value,x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function u(M){const b=M.target;b.removeEventListener("dispose",u);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function _(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function Jg(){const i=Er("canvas");return i.style.display="block",i}function Gl(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Jg(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let f=null,d=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fn,this.physicallyCorrectLights=!1,this.toneMapping=Jt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let u=!1,_=0,M=0,b=null,x=-1,v=null;const E=new tt,L=new tt;let y=null,T=e.width,P=e.height,V=1,X=null,N=null;const R=new tt(0,0,T,P),G=new tt(0,0,T,P);let Y=!1;const J=new $s;let W=!1,z=!1,B=null;const ee=new Ye,K=new xe,te=new I,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return b===null?V:1}let $=t;function De(w,U){for(let q=0;q<w.length;q++){const F=w[q],j=e.getContext(F,U);if(j!==null)return j}return null}try{const w={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${js}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),$===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),$=De(U,w),$===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,Me,ue,Fe,Te,me,qe,nt,$e,dt,Ze,Oe,_t,xt,A,S,H,Q,ne,ae,_e,C,O,le;function fe(){ve=new cm($),Me=new im($,ve,i),ve.init(Me),C=new qg($,ve,Me),ue=new Hg($,ve,Me),Fe=new fm,Te=new Lg,me=new Wg($,ve,ue,Te,Me,C,Fe),qe=new sm(p),nt=new lm(p),$e=new Sf($,Me),O=new tm($,ve,$e,Me),dt=new hm($,$e,Fe,O),Ze=new gm($,dt,$e,Fe),ne=new mm($,Me,me),S=new rm(Te),Oe=new Cg(p,qe,nt,ve,Me,O,S),_t=new Zg(p,Te),xt=new Pg,A=new zg(ve,Me),Q=new em(p,qe,ue,Ze,h,a),H=new Gg(p,Ze,Me),le=new Kg($,Fe,Me,ue),ae=new nm($,ve,Fe,Me),_e=new um($,ve,Fe,Me),Fe.programs=Oe.programs,p.capabilities=Me,p.extensions=ve,p.properties=Te,p.renderLists=xt,p.shadowMap=H,p.state=ue,p.info=Fe}fe();const ce=new $g(p,$);this.xr=ce,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(T,P,!1))},this.getSize=function(w){return w.set(T,P)},this.setSize=function(w,U,q){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=w,P=U,e.width=Math.floor(w*V),e.height=Math.floor(U*V),q!==!1&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(T*V,P*V).floor()},this.setDrawingBufferSize=function(w,U,q){T=w,P=U,V=q,e.width=Math.floor(w*q),e.height=Math.floor(U*q),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,U,q,F){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,U,q,F),ue.viewport(E.copy(R).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(G)},this.setScissor=function(w,U,q,F){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,U,q,F),ue.scissor(L.copy(G).multiplyScalar(V).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){ue.setScissorTest(Y=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(w=!0,U=!0,q=!0){let F=0;w&&(F|=16384),U&&(F|=256),q&&(F|=1024),$.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),xt.dispose(),A.dispose(),Te.dispose(),qe.dispose(),nt.dispose(),Ze.dispose(),O.dispose(),le.dispose(),Oe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ye),ce.removeEventListener("sessionend",Be),B&&(B.dispose(),B=null),He.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const w=Fe.autoReset,U=H.enabled,q=H.autoUpdate,F=H.needsUpdate,j=H.type;fe(),Fe.autoReset=w,H.enabled=U,H.autoUpdate=q,H.needsUpdate=F,H.type=j}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function D(w){const U=w.target;U.removeEventListener("dispose",D),oe(U)}function oe(w){ie(w),Te.remove(w)}function ie(w){const U=Te.get(w).programs;U!==void 0&&(U.forEach(function(q){Oe.releaseProgram(q)}),w.isShaderMaterial&&Oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,q,F,j,pe){U===null&&(U=he);const Se=j.isMesh&&j.matrixWorld.determinant()<0,Ae=xc(w,U,q,F,j);ue.setMaterial(F,Se);let we=q.index;const Ne=q.attributes.position;if(we===null){if(Ne===void 0||Ne.count===0)return}else if(we.count===0)return;let Le=1;F.wireframe===!0&&(we=dt.getWireframeAttribute(q),Le=2),O.setup(j,F,Ae,q,we);let Re,Ve=ae;we!==null&&(Re=$e.get(we),Ve=_e,Ve.setIndex(Re));const xn=we!==null?we.count:Ne.count,kn=q.drawRange.start*Le,Vn=q.drawRange.count*Le,zt=pe!==null?pe.start*Le:0,Ie=pe!==null?pe.count*Le:1/0,Gn=Math.max(kn,zt),Xe=Math.min(xn,kn+Vn,zt+Ie)-1,yt=Math.max(0,Xe-Gn+1);if(yt!==0){if(j.isMesh)F.wireframe===!0?(ue.setLineWidth(F.wireframeLinewidth*ge()),Ve.setMode(1)):Ve.setMode(4);else if(j.isLine){let tn=F.linewidth;tn===void 0&&(tn=1),ue.setLineWidth(tn*ge()),j.isLineSegments?Ve.setMode(1):j.isLineLoop?Ve.setMode(2):Ve.setMode(3)}else j.isPoints?Ve.setMode(0):j.isSprite&&Ve.setMode(4);if(j.isInstancedMesh)Ve.renderInstances(Gn,yt,j.count);else if(q.isInstancedBufferGeometry){const tn=Math.min(q.instanceCount,q._maxInstanceCount);Ve.renderInstances(Gn,yt,tn)}else Ve.render(Gn,yt)}},this.compile=function(w,U){function q(F,j,pe){F.transparent===!0&&F.side===dn?(F.side=Tt,F.needsUpdate=!0,qi(F,j,pe),F.side=di,F.needsUpdate=!0,qi(F,j,pe),F.side=dn):qi(F,j,pe)}d=A.get(w),d.init(),m.push(d),w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(p.physicallyCorrectLights),w.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let pe=0;pe<j.length;pe++){const Se=j[pe];q(Se,w,F)}else q(j,w,F)}),m.pop(),d=null};let Z=null;function se(w){Z&&Z(w)}function ye(){He.stop()}function Be(){He.start()}const He=new Nl;He.setAnimationLoop(se),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(w){Z=w,ce.setAnimationLoop(w),w===null?He.stop():He.start()},ce.addEventListener("sessionstart",ye),ce.addEventListener("sessionend",Be),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,U,b),d=A.get(w,m.length),d.init(),m.push(d),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(ee),z=this.localClippingEnabled,W=S.init(this.clippingPlanes,z,U),f=xt.get(w,g.length),f.init(),g.push(f),en(w,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(X,N),W===!0&&S.beginShadows();const q=d.state.shadowsArray;if(H.render(q,w,U),W===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(f,w),d.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let j=0,pe=F.length;j<pe;j++){const Se=F[j];ke(f,w,Se,Se.viewport)}}else ke(f,w,U);b!==null&&(me.updateMultisampleRenderTarget(b),me.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(p,w,U),O.resetDefaultState(),x=-1,v=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function en(w,U,q,F){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){F&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const Se=Ze.update(w),Ae=w.material;Ae.visible&&f.push(w,Se,Ae,q,te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Fe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Fe.render.frame),!w.frustumCulled||J.intersectsObject(w))){F&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const Se=Ze.update(w),Ae=w.material;if(Array.isArray(Ae)){const we=Se.groups;for(let Ne=0,Le=we.length;Ne<Le;Ne++){const Re=we[Ne],Ve=Ae[Re.materialIndex];Ve&&Ve.visible&&f.push(w,Se,Ve,q,te.z,Re)}}else Ae.visible&&f.push(w,Se,Ae,q,te.z,null)}}const pe=w.children;for(let Se=0,Ae=pe.length;Se<Ae;Se++)en(pe[Se],U,q,F)}function ke(w,U,q,F){const j=w.opaque,pe=w.transmissive,Se=w.transparent;d.setupLightsView(q),pe.length>0&&qt(j,U,q),F&&ue.viewport(E.copy(F)),j.length>0&&vt(j,U,q),pe.length>0&&vt(pe,U,q),Se.length>0&&vt(Se,U,q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function qt(w,U,q){const F=Me.isWebGL2;B===null&&(B=new On(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ui:In,minFilter:Pr,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(K),F?B.setSize(K.x,K.y):B.setSize(ks(K.x),ks(K.y));const j=p.getRenderTarget();p.setRenderTarget(B),p.clear();const pe=p.toneMapping;p.toneMapping=Jt,vt(w,U,q),p.toneMapping=pe,me.updateMultisampleRenderTarget(B),me.updateRenderTargetMipmap(B),p.setRenderTarget(j)}function vt(w,U,q){const F=U.isScene===!0?U.overrideMaterial:null;for(let j=0,pe=w.length;j<pe;j++){const Se=w[j],Ae=Se.object,we=Se.geometry,Ne=F===null?Se.material:F,Le=Se.group;Ae.layers.test(q.layers)&&_c(Ae,U,q,we,Ne,Le)}}function _c(w,U,q,F,j,pe){w.onBeforeRender(p,U,q,F,j,pe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(p,U,q,F,w,pe),j.transparent===!0&&j.side===dn?(j.side=Tt,j.needsUpdate=!0,p.renderBufferDirect(q,U,F,j,w,pe),j.side=di,j.needsUpdate=!0,p.renderBufferDirect(q,U,F,j,w,pe),j.side=dn):p.renderBufferDirect(q,U,F,j,w,pe),w.onAfterRender(p,U,q,F,j,pe)}function qi(w,U,q){U.isScene!==!0&&(U=he);const F=Te.get(w),j=d.state.lights,pe=d.state.shadowsArray,Se=j.state.version,Ae=Oe.getParameters(w,j.state,pe,U,q),we=Oe.getProgramCacheKey(Ae);let Ne=F.programs;F.environment=w.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(w.isMeshStandardMaterial?nt:qe).get(w.envMap||F.environment),Ne===void 0&&(w.addEventListener("dispose",D),Ne=new Map,F.programs=Ne);let Le=Ne.get(we);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===Se)return ia(w,Ae),Le}else Ae.uniforms=Oe.getUniforms(w),w.onBuild(q,Ae,p),w.onBeforeCompile(Ae,p),Le=Oe.acquireProgram(Ae,we),Ne.set(we,Le),F.uniforms=Ae.uniforms;const Re=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=S.uniform),ia(w,Ae),F.needsLights=yc(w),F.lightsStateVersion=Se,F.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMap.value=j.state.directionalShadowMap,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotShadowMap.value=j.state.spotShadowMap,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMap.value=j.state.pointShadowMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ve=Le.getUniforms(),xn=vr.seqWithValue(Ve.seq,Re);return F.currentProgram=Le,F.uniformsList=xn,Le}function ia(w,U){const q=Te.get(w);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function xc(w,U,q,F,j){U.isScene!==!0&&(U=he),me.resetTextureUnits();const pe=U.fog,Se=F.isMeshStandardMaterial?U.environment:null,Ae=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Fn,we=(F.isMeshStandardMaterial?nt:qe).get(F.envMap||Se),Ne=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!F.normalMap&&!!q.attributes.tangent,Re=!!q.morphAttributes.position,Ve=!!q.morphAttributes.normal,xn=!!q.morphAttributes.color,kn=F.toneMapped?p.toneMapping:Jt,Vn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,zt=Vn!==void 0?Vn.length:0,Ie=Te.get(F),Gn=d.state.lights;if(W===!0&&(z===!0||w!==v)){const pt=w===v&&F.id===x;S.setState(F,w,pt)}let Xe=!1;F.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Gn.state.version||Ie.outputEncoding!==Ae||j.isInstancedMesh&&Ie.instancing===!1||!j.isInstancedMesh&&Ie.instancing===!0||j.isSkinnedMesh&&Ie.skinning===!1||!j.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==we||F.fog===!0&&Ie.fog!==pe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==S.numPlanes||Ie.numIntersection!==S.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Le||Ie.morphTargets!==Re||Ie.morphNormals!==Ve||Ie.morphColors!==xn||Ie.toneMapping!==kn||Me.isWebGL2===!0&&Ie.morphTargetsCount!==zt)&&(Xe=!0):(Xe=!0,Ie.__version=F.version);let yt=Ie.currentProgram;Xe===!0&&(yt=qi(F,U,j));let tn=!1,Ei=!1,Ur=!1;const ot=yt.getUniforms(),vn=Ie.uniforms;if(ue.useProgram(yt.program)&&(tn=!0,Ei=!0,Ur=!0),F.id!==x&&(x=F.id,Ei=!0),tn||v!==w){if(ot.setValue($,"projectionMatrix",w.projectionMatrix),Me.logarithmicDepthBuffer&&ot.setValue($,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),v!==w&&(v=w,Ei=!0,Ur=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const pt=ot.map.cameraPosition;pt!==void 0&&pt.setValue($,te.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ot.setValue($,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&ot.setValue($,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){ot.setOptional($,j,"bindMatrix"),ot.setOptional($,j,"bindMatrixInverse");const pt=j.skeleton;pt&&(Me.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),ot.setValue($,"boneTexture",pt.boneTexture,me),ot.setValue($,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Br=q.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0&&Me.isWebGL2===!0)&&ne.update(j,q,F,yt),(Ei||Ie.receiveShadow!==j.receiveShadow)&&(Ie.receiveShadow=j.receiveShadow,ot.setValue($,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(vn.envMap.value=we,vn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Ei&&(ot.setValue($,"toneMappingExposure",p.toneMappingExposure),Ie.needsLights&&vc(vn,Ur),pe&&F.fog===!0&&_t.refreshFogUniforms(vn,pe),_t.refreshMaterialUniforms(vn,F,V,P,B),vr.upload($,Ie.uniformsList,vn,me)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(vr.upload($,Ie.uniformsList,vn,me),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ot.setValue($,"center",j.center),ot.setValue($,"modelViewMatrix",j.modelViewMatrix),ot.setValue($,"normalMatrix",j.normalMatrix),ot.setValue($,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const pt=F.uniformsGroups;for(let kr=0,Mc=pt.length;kr<Mc;kr++)if(Me.isWebGL2){const ra=pt[kr];le.update(ra,yt),le.bind(ra,yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yt}function vc(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function yc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,U,q){Te.get(w.texture).__webglTexture=U,Te.get(w.depthTexture).__webglTexture=q;const F=Te.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const q=Te.get(w);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,q=0){b=w,_=U,M=q;let F=!0;if(w){const we=Te.get(w);we.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),F=!1):we.__webglFramebuffer===void 0?me.setupRenderTarget(w):we.__hasExternalTextures&&me.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture)}let j=null,pe=!1,Se=!1;if(w){const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(Se=!0);const Ne=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Ne[U],pe=!0):Me.isWebGL2&&w.samples>0&&me.useMultisampledRTT(w)===!1?j=Te.get(w).__webglMultisampledFramebuffer:j=Ne,E.copy(w.viewport),L.copy(w.scissor),y=w.scissorTest}else E.copy(R).multiplyScalar(V).floor(),L.copy(G).multiplyScalar(V).floor(),y=Y;if(ue.bindFramebuffer(36160,j)&&Me.drawBuffers&&F&&ue.drawBuffers(w,j),ue.viewport(E),ue.scissor(L),ue.setScissorTest(y),pe){const we=Te.get(w.texture);$.framebufferTexture2D(36160,36064,34069+U,we.__webglTexture,q)}else if(Se){const we=Te.get(w.texture),Ne=U||0;$.framebufferTextureLayer(36160,36064,we.__webglTexture,q||0,Ne)}x=-1},this.readRenderTargetPixels=function(w,U,q,F,j,pe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){ue.bindFramebuffer(36160,Ae);try{const we=w.texture,Ne=we.format,Le=we.type;if(Ne!==Vt&&C.convert(Ne)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===Ui&&(ve.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Le!==In&&C.convert(Le)!==$.getParameter(35738)&&!(Le===An&&(Me.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-F&&q>=0&&q<=w.height-j&&$.readPixels(U,q,F,j,C.convert(Ne),C.convert(Le),pe)}finally{const we=b!==null?Te.get(b).__webglFramebuffer:null;ue.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(w,U,q=0){const F=Math.pow(2,-q),j=Math.floor(U.image.width*F),pe=Math.floor(U.image.height*F);me.setTexture2D(U,0),$.copyTexSubImage2D(3553,q,0,0,w.x,w.y,j,pe),ue.unbindTexture()},this.copyTextureToTexture=function(w,U,q,F=0){const j=U.image.width,pe=U.image.height,Se=C.convert(q.format),Ae=C.convert(q.type);me.setTexture2D(q,0),$.pixelStorei(37440,q.flipY),$.pixelStorei(37441,q.premultiplyAlpha),$.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?$.texSubImage2D(3553,F,w.x,w.y,j,pe,Se,Ae,U.image.data):U.isCompressedTexture?$.compressedTexSubImage2D(3553,F,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Se,U.mipmaps[0].data):$.texSubImage2D(3553,F,w.x,w.y,Se,Ae,U.image),F===0&&q.generateMipmaps&&$.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,U,q,F,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Ae=w.max.z-w.min.z+1,we=C.convert(F.format),Ne=C.convert(F.type);let Le;if(F.isData3DTexture)me.setTexture3D(F,0),Le=32879;else if(F.isDataArrayTexture)me.setTexture2DArray(F,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,F.flipY),$.pixelStorei(37441,F.premultiplyAlpha),$.pixelStorei(3317,F.unpackAlignment);const Re=$.getParameter(3314),Ve=$.getParameter(32878),xn=$.getParameter(3316),kn=$.getParameter(3315),Vn=$.getParameter(32877),zt=q.isCompressedTexture?q.mipmaps[0]:q.image;$.pixelStorei(3314,zt.width),$.pixelStorei(32878,zt.height),$.pixelStorei(3316,w.min.x),$.pixelStorei(3315,w.min.y),$.pixelStorei(32877,w.min.z),q.isDataTexture||q.isData3DTexture?$.texSubImage3D(Le,j,U.x,U.y,U.z,pe,Se,Ae,we,Ne,zt.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Le,j,U.x,U.y,U.z,pe,Se,Ae,we,zt.data)):$.texSubImage3D(Le,j,U.x,U.y,U.z,pe,Se,Ae,we,Ne,zt),$.pixelStorei(3314,Re),$.pixelStorei(32878,Ve),$.pixelStorei(3316,xn),$.pixelStorei(3315,kn),$.pixelStorei(32877,Vn),j===0&&F.generateMipmaps&&$.generateMipmap(Le),ue.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?me.setTextureCube(w,0):w.isData3DTexture?me.setTexture3D(w,0):w.isDataArrayTexture?me.setTexture2DArray(w,0):me.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){_=0,M=0,b=null,ue.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Qg extends Gl{}Qg.prototype.isWebGL1Renderer=!0;class e0 extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class t0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Us,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const lt=new I;class Tr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}setX(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hl extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ri;const Li=new I,si=new I,ai=new I,oi=new xe,Ri=new xe,Wl=new Ye,fr=new I,Pi=new I,dr=new I,zo=new xe,Ss=new xe,Uo=new xe;class n0 extends it{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new t0(t,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new Tr(n,3,0,!1)),ri.setAttribute("uv",new Tr(n,2,3,!1))}this.geometry=ri,this.material=e!==void 0?e:new Hl,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),si.setFromMatrixScale(this.matrixWorld),Wl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&si.multiplyScalar(-ai.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;pr(fr.set(-.5,-.5,0),ai,a,si,r,s),pr(Pi.set(.5,-.5,0),ai,a,si,r,s),pr(dr.set(.5,.5,0),ai,a,si,r,s),zo.set(0,0),Ss.set(1,0),Uo.set(1,1);let o=e.ray.intersectTriangle(fr,Pi,dr,!1,Li);if(o===null&&(pr(Pi.set(-.5,.5,0),ai,a,si,r,s),Ss.set(0,1),o=e.ray.intersectTriangle(fr,dr,Pi,!1,Li),o===null))return;const l=e.ray.origin.distanceTo(Li);l<e.near||l>e.far||t.push({distance:l,point:Li.clone(),uv:kt.getUV(Li,fr,Pi,dr,zo,Ss,Uo,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pr(i,e,t,n,r,s){oi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ri.x=s*oi.x-r*oi.y,Ri.y=r*oi.x+s*oi.y):Ri.copy(oi),i.copy(e),i.x+=Ri.x,i.y+=Ri.y,i.applyMatrix4(Wl)}class Bo extends At{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Qt{constructor(e=1,t=1,n=1,r=8,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],g=[];let m=0;const p=[],u=n/2;let _=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(g,2));function M(){const x=new I,v=new I;let E=0;const L=(t-e)/n;for(let y=0;y<=s;y++){const T=[],P=y/s,V=P*(t-e)+e;for(let X=0;X<=r;X++){const N=X/r,R=N*l+o,G=Math.sin(R),Y=Math.cos(R);v.x=V*G,v.y=-P*n+u,v.z=V*Y,f.push(v.x,v.y,v.z),x.set(G,L,Y).normalize(),d.push(x.x,x.y,x.z),g.push(N,1-P),T.push(m++)}p.push(T)}for(let y=0;y<r;y++)for(let T=0;T<s;T++){const P=p[T][y],V=p[T+1][y],X=p[T+1][y+1],N=p[T][y+1];h.push(P,V,N),h.push(V,X,N),E+=6}c.addGroup(_,E,0),_+=E}function b(x){const v=m,E=new xe,L=new I;let y=0;const T=x===!0?e:t,P=x===!0?1:-1;for(let X=1;X<=r;X++)f.push(0,u*P,0),d.push(0,P,0),g.push(.5,.5),m++;const V=m;for(let X=0;X<=r;X++){const R=X/r*l+o,G=Math.cos(R),Y=Math.sin(R);L.x=T*Y,L.y=u*P,L.z=T*G,f.push(L.x,L.y,L.z),d.push(0,P,0),E.x=G*.5+.5,E.y=Y*.5*P+.5,g.push(E.x,E.y),m++}for(let X=0;X<r;X++){const N=v+X,R=V+X;x===!0?h.push(R,R+1,N):h.push(R+1,R,N),y+=3}c.addGroup(_,y,x===!0?1:2),_+=y}}static fromJSON(e){return new Js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ql extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ws=new Ye,ko=new I,Vo=new I;class i0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),ws.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ws),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ws)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r0 extends i0{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Go extends ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DefaultUp),this.updateMatrix(),this.target=new it,this.shadow=new r0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ho extends ql{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);const qo={type:"change"},Es={type:"start"},Xo={type:"end"};class s0 extends Bn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:hn.ROTATE,TWO:hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",xt),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qo),n.update(),s=r.NONE},this.update=(function(){const C=new I,O=new Nn().setFromUnitVectors(e.up,new I(0,1,0)),le=O.clone().invert(),fe=new I,ce=new Nn,de=2*Math.PI;return function(){const Pe=n.object.position;C.copy(Pe).sub(n.target),C.applyQuaternion(O),o.setFromVector3(C),n.autoRotate&&s===r.NONE&&T(L()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let D=n.minAzimuthAngle,oe=n.maxAzimuthAngle;return isFinite(D)&&isFinite(oe)&&(D<-Math.PI?D+=de:D>Math.PI&&(D-=de),oe<-Math.PI?oe+=de:oe>Math.PI&&(oe-=de),D<=oe?o.theta=Math.max(D,Math.min(oe,o.theta)):o.theta=o.theta>(D+oe)/2?Math.max(D,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),C.setFromSpherical(o),C.applyQuaternion(le),Pe.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,f||fe.distanceToSquared(n.object.position)>a||8*(1-ce.dot(n.object.quaternion))>a?(n.dispatchEvent(qo),fe.copy(n.object.position),ce.copy(n.object.quaternion),f=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",qe),n.domElement.removeEventListener("pointercancel",dt),n.domElement.removeEventListener("wheel",_t),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",$e),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",xt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Wo,l=new Wo;let c=1;const h=new I;let f=!1;const d=new xe,g=new xe,m=new xe,p=new xe,u=new xe,_=new xe,M=new xe,b=new xe,x=new xe,v=[],E={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function T(C){l.theta-=C}function P(C){l.phi-=C}const V=(function(){const C=new I;return function(le,fe){C.setFromMatrixColumn(fe,0),C.multiplyScalar(-le),h.add(C)}})(),X=(function(){const C=new I;return function(le,fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(fe,1):(C.setFromMatrixColumn(fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(le),h.add(C)}})(),N=(function(){const C=new I;return function(le,fe){const ce=n.domElement;if(n.object.isPerspectiveCamera){const de=n.object.position;C.copy(de).sub(n.target);let be=C.length();be*=Math.tan(n.object.fov/2*Math.PI/180),V(2*le*be/ce.clientHeight,n.object.matrix),X(2*fe*be/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(le*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),X(fe*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){d.set(C.clientX,C.clientY)}function J(C){M.set(C.clientX,C.clientY)}function W(C){p.set(C.clientX,C.clientY)}function z(C){g.set(C.clientX,C.clientY),m.subVectors(g,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;T(2*Math.PI*m.x/O.clientHeight),P(2*Math.PI*m.y/O.clientHeight),d.copy(g),n.update()}function B(C){b.set(C.clientX,C.clientY),x.subVectors(b,M),x.y>0?R(y()):x.y<0&&G(y()),M.copy(b),n.update()}function ee(C){u.set(C.clientX,C.clientY),_.subVectors(u,p).multiplyScalar(n.panSpeed),N(_.x,_.y),p.copy(u),n.update()}function K(C){C.deltaY<0?G(y()):C.deltaY>0&&R(y()),n.update()}function te(C){let O=!1;switch(C.code){case n.keys.UP:N(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),n.update())}function he(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),O=.5*(v[0].pageY+v[1].pageY);d.set(C,O)}}function ge(){if(v.length===1)p.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),O=.5*(v[0].pageY+v[1].pageY);p.set(C,O)}}function $(){const C=v[0].pageX-v[1].pageX,O=v[0].pageY-v[1].pageY,le=Math.sqrt(C*C+O*O);M.set(0,le)}function De(){n.enableZoom&&$(),n.enablePan&&ge()}function ve(){n.enableZoom&&$(),n.enableRotate&&he()}function Me(C){if(v.length==1)g.set(C.pageX,C.pageY);else{const le=_e(C),fe=.5*(C.pageX+le.x),ce=.5*(C.pageY+le.y);g.set(fe,ce)}m.subVectors(g,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;T(2*Math.PI*m.x/O.clientHeight),P(2*Math.PI*m.y/O.clientHeight),d.copy(g)}function ue(C){if(v.length===1)u.set(C.pageX,C.pageY);else{const O=_e(C),le=.5*(C.pageX+O.x),fe=.5*(C.pageY+O.y);u.set(le,fe)}_.subVectors(u,p).multiplyScalar(n.panSpeed),N(_.x,_.y),p.copy(u)}function Fe(C){const O=_e(C),le=C.pageX-O.x,fe=C.pageY-O.y,ce=Math.sqrt(le*le+fe*fe);b.set(0,ce),x.set(0,Math.pow(b.y/M.y,n.zoomSpeed)),R(x.y),M.copy(b)}function Te(C){n.enableZoom&&Fe(C),n.enablePan&&ue(C)}function me(C){n.enableZoom&&Fe(C),n.enableRotate&&Me(C)}function qe(C){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",nt),n.domElement.addEventListener("pointerup",$e)),Q(C),C.pointerType==="touch"?A(C):Ze(C))}function nt(C){n.enabled!==!1&&(C.pointerType==="touch"?S(C):Oe(C))}function $e(C){ne(C),v.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",$e)),n.dispatchEvent(Xo),s=r.NONE}function dt(C){ne(C)}function Ze(C){let O;switch(C.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Hn.DOLLY:if(n.enableZoom===!1)return;J(C),s=r.DOLLY;break;case Hn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;W(C),s=r.PAN}else{if(n.enableRotate===!1)return;Y(C),s=r.ROTATE}break;case Hn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Y(C),s=r.ROTATE}else{if(n.enablePan===!1)return;W(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Es)}function Oe(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;z(C);break;case r.DOLLY:if(n.enableZoom===!1)return;B(C);break;case r.PAN:if(n.enablePan===!1)return;ee(C);break}}function _t(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Es),K(C),n.dispatchEvent(Xo))}function xt(C){n.enabled===!1||n.enablePan===!1||te(C)}function A(C){switch(ae(C),v.length){case 1:switch(n.touches.ONE){case hn.ROTATE:if(n.enableRotate===!1)return;he(),s=r.TOUCH_ROTATE;break;case hn.PAN:if(n.enablePan===!1)return;ge(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case hn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(),s=r.TOUCH_DOLLY_PAN;break;case hn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Es)}function S(C){switch(ae(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ue(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(C),n.update();break;default:s=r.NONE}}function H(C){n.enabled!==!1&&C.preventDefault()}function Q(C){v.push(C)}function ne(C){delete E[C.pointerId];for(let O=0;O<v.length;O++)if(v[O].pointerId==C.pointerId){v.splice(O,1);return}}function ae(C){let O=E[C.pointerId];O===void 0&&(O=new xe,E[C.pointerId]=O),O.set(C.pageX,C.pageY)}function _e(C){const O=C.pointerId===v[0].pointerId?v[1]:v[0];return E[O.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",qe),n.domElement.addEventListener("pointercancel",dt),n.domElement.addEventListener("wheel",_t,{passive:!1}),this.update()}}const Di=new I;function bt(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Di.copy(e),Di[n]=0,Di.normalize();const c=.5*a/(a+o),h=1-Di.angleTo(i)/l;return Math.sign(Di[t])===1?h*c:o/(a+o)+c+c*(1-h)}class a0 extends Mi{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,m=new I,p=.5/r;for(let u=0,_=0;u<h.length;u+=3,_+=2)switch(o.fromArray(h,u),l.copy(o),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),h[u+0]=c.x*Math.sign(o.x)+l.x*s,h[u+1]=c.y*Math.sign(o.y)+l.y*s,h[u+2]=c.z*Math.sign(o.z)+l.z*s,f[u+0]=l.x,f[u+1]=l.y,f[u+2]=l.z,Math.floor(u/g)){case 0:m.set(1,0,0),d[_+0]=bt(m,l,"z","y",s,n),d[_+1]=1-bt(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[_+0]=1-bt(m,l,"z","y",s,n),d[_+1]=1-bt(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[_+0]=1-bt(m,l,"x","z",s,e),d[_+1]=bt(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[_+0]=1-bt(m,l,"x","z",s,e),d[_+1]=1-bt(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[_+0]=1-bt(m,l,"x","y",s,e),d[_+1]=1-bt(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[_+0]=bt(m,l,"x","y",s,e),d[_+1]=1-bt(m,l,"y","x",s,t);break}}}const o0=Bi({__name:"index",setup(i){const e=Cr("containerRef");let t=null,n=null,r=null,s=null;function a(){o();const _=e.value;if(!_)return;const{width:M,height:b}=e.value.getBoundingClientRect(),x=new Gl({antialias:!0});x.setPixelRatio(window.devicePixelRatio),x.setSize(M,b),_.appendChild(x.domElement),t=new e0,n=new wt(40,M/b,1,100),n.position.set(5,2,8),r=new s0(n,x.domElement),r.target.set(0,.5,0),r.update(),r.enablePan=!1,r.enableDamping=!0,r.enableZoom=!1,r.touches.ONE=hn.ROTATE,r.touches.TWO=hn.DOLLY_ROTATE,d(),u();function v(){s=requestAnimationFrame(v),!(!t||!n||!x)&&(performance.now()*.001,r?.update(),x.render(t,n))}v()}function o(){s&&(cancelAnimationFrame(s),s=null),t&&(t.traverse(_=>{_ instanceof Gt&&(_.geometry.dispose(),Array.isArray(_.material)?_.material.forEach(M=>M.dispose()):_.material.dispose())}),t=null),n=null,r=null}const l=[{name:"巽",name_cn:"巽",num:"4",dir:"东南",x:-1,z:-1},{name:"离",name_cn:"离",num:"9",dir:"正南",x:0,z:-1},{name:"坤",name_cn:"坤",num:"2",dir:"西南",x:1,z:-1},{name:"震",name_cn:"震",num:"3",dir:"正东",x:-1,z:0},{name:"Taiji",name_cn:"太极",type:"center",x:0,z:0},{name:"兑",name_cn:"兑",num:"7",dir:"正西",x:1,z:0},{name:"艮",name_cn:"艮",num:"8",dir:"东北",x:-1,z:1},{name:"坎",name_cn:"坎",num:"1",dir:"正北",x:0,z:1},{name:"乾",name_cn:"乾",num:"6",dir:"西北",x:1,z:1}],c=[{text:"南",x:0,z:-4.5},{text:"北",x:0,z:4.5},{text:"东",x:-4.5,z:0},{text:"西",x:4.5,z:0}],h=[{name:"jade",label:"温润白玉",bg:"transparent",fog:4016687,fogDensity:.01,floorColor:328965,floorMetal:.8,floorRough:.1,textColor:"#d4af37",textSubColor:"#d4af37",labelColor:"#d4af37",lights:()=>{const _=new Ho(16777215,.5),M=new Go(16777215,.8);return M.position.set(-5,10,5),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,M.shadow.camera.near=.5,M.shadow.camera.far=50,M.shadow.camera.left=-10,M.shadow.camera.right=10,M.shadow.camera.top=10,M.shadow.camera.bottom=-10,[_,M]},geo:new a0(2,.15,2,4,.15)},{name:"ink",label:"水墨太虚",bg:15790320,fog:15790320,fogDensity:.015,floorColor:16777215,floorMetal:0,floorRough:1,textColor:"#000000",textSubColor:"#333333",labelColor:"#000000",lights:()=>{const _=new Ho(16777215,.9),M=new Go(16777215,.8);return M.position.set(5,10,5),M.castShadow=!0,[_,M]},geo:new Js(1.2,1.2,.1,32)}];let f="jade";function d(){if(t){const _=new Ni,M=h.find(x=>x.name===f);console.log(M),M.lights().forEach(x=>t.add(x)),l.forEach(x=>{const v=g(x,f),E=x.type!=="center"?g(x,f,"#000000"):v;let L;if(x.type==="center"){const P=new mr({color:16119285,roughness:.3,metalness:0}),V=new mr({map:v,roughness:.2,metalness:0});L=[P,P,V,P,P,P]}else{const P=new mr({color:16777215,roughness:.3,metalness:0}),V=new mr({map:v,roughness:.2,metalness:0});L=[P,P,V,P,P,P]}const y=new Gt(M.geo,L),T=2.4;y.position.set(x.x*T,.1,x.z*T),y.castShadow=!0,y.receiveShadow=!1,y.userData={initialY:0,floatSpeed:1.5+Math.random(),floatOffset:Math.random()*Math.PI*2,baguaX:x.x,baguaZ:x.z,normalTexture:v,hoverTexture:E,isHovered:!1},y.name=x.name,_.add(y)}),t.add(_),c.forEach(x=>{const v=m(x.text,f,M.labelColor),E=new Hl({map:v,transparent:!0,opacity:.8}),L=new n0(E);L.scale.set(2.5,2.5,1),L.position.set(x.x,.3,x.z),t&&t.add(L)})}}function g(_,M,b){const x=document.createElement("canvas");x.width=512,x.height=512;const v=x.getContext("2d"),E=h.find(P=>P.name===M),L=b||E.textColor,y=b||E.textSubColor;_.type==="center"?v.fillStyle="#f5f5f5":v.fillStyle="#ffffff",v.fillRect(0,0,512,512),_.type==="center"?p(v,256,256,180):(v.textAlign="center",v.textBaseline="middle",v.font='bold 180px "KaiTi", serif',v.fillStyle=L,v.fillText(_.name_cn,256,240),v.shadowBlur=0,v.font='bold 60px "Times New Roman"',v.fillStyle=y,v.font='bold 50px "KaiTi", serif',v.fillStyle=y,v.fillText(_.dir||"",256,380));const T=new Bo(x);return T.colorSpace!==void 0&&(T.colorSpace=Dt),T}function m(_,M,b){const x=document.createElement("canvas");x.width=256,x.height=256;const v=x.getContext("2d");v.textAlign="center",v.textBaseline="middle",v.font='bold 160px "KaiTi", serif',v.fillStyle=b,v.fillText(_,128,128);const E=new Bo(x);return E.colorSpace!==void 0&&(E.colorSpace=Dt),E}function p(_,M,b,x,v){const E="#000000",L="#ffffff";_.beginPath(),_.arc(M,b,x,-Math.PI/2,Math.PI/2,!0),_.fillStyle=E,_.fill(),_.beginPath(),_.arc(M,b,x,-Math.PI/2,Math.PI/2,!1),_.fillStyle=L,_.fill(),_.beginPath(),_.arc(M,b-x/2,x/2,0,Math.PI*2),_.fillStyle=E,_.fill(),_.beginPath(),_.arc(M,b+x/2,x/2,0,Math.PI*2),_.fillStyle=L,_.fill(),_.beginPath(),_.arc(M,b-x/2,30,0,Math.PI*2),_.fillStyle=L,_.fill(),_.beginPath(),_.arc(M,b+x/2,30,0,Math.PI*2),_.fillStyle=E,_.fill()}function u(){if(t&&n){const _=new vi().setFromObject(t),M=_.getSize(new I).length(),b=_.getCenter(new I);let x=1;window.innerWidth>=1200?x=.7:window.innerWidth<=768&&(x=2),n.position.copy(b),n.position.z+=M*x,n.position.y=16,n.lookAt(b)}}return fi(()=>e.value,_=>{_&&a()},{deep:!0,immediate:!0}),(_,M)=>(Ht(),mn("div",{ref_key:"containerRef",ref:e,class:"w-10/12 h-screen bg-transparent"},null,512))}});function Xl(i,e){return function(){return i.apply(e,arguments)}}const{toString:l0}=Object.prototype,{getPrototypeOf:Qs}=Object,{iterator:Ir,toStringTag:jl}=Symbol,Fr=(i=>e=>{const t=l0.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Nt=i=>(i=i.toLowerCase(),e=>Fr(e)===i),Or=i=>e=>typeof e===i,{isArray:Si}=Array,xi=Or("undefined");function Vi(i){return i!==null&&!xi(i)&&i.constructor!==null&&!xi(i.constructor)&&ut(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Yl=Nt("ArrayBuffer");function c0(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Yl(i.buffer),e}const h0=Or("string"),ut=Or("function"),$l=Or("number"),Gi=i=>i!==null&&typeof i=="object",u0=i=>i===!0||i===!1,yr=i=>{if(Fr(i)!=="object")return!1;const e=Qs(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(jl in i)&&!(Ir in i)},f0=i=>{if(!Gi(i)||Vi(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},d0=Nt("Date"),p0=Nt("File"),m0=Nt("Blob"),g0=Nt("FileList"),_0=i=>Gi(i)&&ut(i.pipe),x0=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||ut(i.append)&&((e=Fr(i))==="formdata"||e==="object"&&ut(i.toString)&&i.toString()==="[object FormData]"))},v0=Nt("URLSearchParams"),[y0,M0,b0,S0]=["ReadableStream","Request","Response","Headers"].map(Nt),w0=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let n,r;if(typeof i!="object"&&(i=[i]),Si(i))for(n=0,r=i.length;n<r;n++)e.call(null,i[n],n,i);else{if(Vi(i))return;const s=t?Object.getOwnPropertyNames(i):Object.keys(i),a=s.length;let o;for(n=0;n<a;n++)o=s[n],e.call(null,i[o],o,i)}}function Zl(i,e){if(Vi(i))return null;e=e.toLowerCase();const t=Object.keys(i);let n=t.length,r;for(;n-- >0;)if(r=t[n],e===r.toLowerCase())return r;return null}const Ln=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Kl=i=>!xi(i)&&i!==Ln;function Gs(){const{caseless:i,skipUndefined:e}=Kl(this)&&this||{},t={},n=(r,s)=>{const a=i&&Zl(t,s)||s;yr(t[a])&&yr(r)?t[a]=Gs(t[a],r):yr(r)?t[a]=Gs({},r):Si(r)?t[a]=r.slice():(!e||!xi(r))&&(t[a]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Hi(arguments[r],n);return t}const E0=(i,e,t,{allOwnKeys:n}={})=>(Hi(e,(r,s)=>{t&&ut(r)?i[s]=Xl(r,t):i[s]=r},{allOwnKeys:n}),i),T0=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),A0=(i,e,t,n)=>{i.prototype=Object.create(e.prototype,n),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},C0=(i,e,t,n)=>{let r,s,a;const o={};if(e=e||{},i==null)return e;do{for(r=Object.getOwnPropertyNames(i),s=r.length;s-- >0;)a=r[s],(!n||n(a,i,e))&&!o[a]&&(e[a]=i[a],o[a]=!0);i=t!==!1&&Qs(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},L0=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const n=i.indexOf(e,t);return n!==-1&&n===t},R0=i=>{if(!i)return null;if(Si(i))return i;let e=i.length;if(!$l(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},P0=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Qs(Uint8Array)),D0=(i,e)=>{const n=(i&&i[Ir]).call(i);let r;for(;(r=n.next())&&!r.done;){const s=r.value;e.call(i,s[0],s[1])}},I0=(i,e)=>{let t;const n=[];for(;(t=i.exec(e))!==null;)n.push(t);return n},F0=Nt("HTMLFormElement"),O0=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,r){return n.toUpperCase()+r}),jo=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),N0=Nt("RegExp"),Jl=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),n={};Hi(t,(r,s)=>{let a;(a=e(r,s,i))!==!1&&(n[s]=a||r)}),Object.defineProperties(i,n)},z0=i=>{Jl(i,(e,t)=>{if(ut(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=i[t];if(ut(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},U0=(i,e)=>{const t={},n=r=>{r.forEach(s=>{t[s]=!0})};return Si(i)?n(i):n(String(i).split(e)),t},B0=()=>{},k0=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function V0(i){return!!(i&&ut(i.append)&&i[jl]==="FormData"&&i[Ir])}const G0=i=>{const e=new Array(10),t=(n,r)=>{if(Gi(n)){if(e.indexOf(n)>=0)return;if(Vi(n))return n;if(!("toJSON"in n)){e[r]=n;const s=Si(n)?[]:{};return Hi(n,(a,o)=>{const l=t(a,r+1);!xi(l)&&(s[o]=l)}),e[r]=void 0,s}}return n};return t(i,0)},H0=Nt("AsyncFunction"),W0=i=>i&&(Gi(i)||ut(i))&&ut(i.then)&&ut(i.catch),Ql=((i,e)=>i?setImmediate:e?((t,n)=>(Ln.addEventListener("message",({source:r,data:s})=>{r===Ln&&s===t&&n.length&&n.shift()()},!1),r=>{n.push(r),Ln.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ut(Ln.postMessage)),q0=typeof queueMicrotask<"u"?queueMicrotask.bind(Ln):typeof process<"u"&&process.nextTick||Ql,X0=i=>i!=null&&ut(i[Ir]),k={isArray:Si,isArrayBuffer:Yl,isBuffer:Vi,isFormData:x0,isArrayBufferView:c0,isString:h0,isNumber:$l,isBoolean:u0,isObject:Gi,isPlainObject:yr,isEmptyObject:f0,isReadableStream:y0,isRequest:M0,isResponse:b0,isHeaders:S0,isUndefined:xi,isDate:d0,isFile:p0,isBlob:m0,isRegExp:N0,isFunction:ut,isStream:_0,isURLSearchParams:v0,isTypedArray:P0,isFileList:g0,forEach:Hi,merge:Gs,extend:E0,trim:w0,stripBOM:T0,inherits:A0,toFlatObject:C0,kindOf:Fr,kindOfTest:Nt,endsWith:L0,toArray:R0,forEachEntry:D0,matchAll:I0,isHTMLForm:F0,hasOwnProperty:jo,hasOwnProp:jo,reduceDescriptors:Jl,freezeMethods:z0,toObjectSet:U0,toCamelCase:O0,noop:B0,toFiniteNumber:k0,findKey:Zl,global:Ln,isContextDefined:Kl,isSpecCompliantForm:V0,toJSONObject:G0,isAsyncFn:H0,isThenable:W0,setImmediate:Ql,asap:q0,isIterable:X0};function Ee(i,e,t,n,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),r&&(this.response=r,this.status=r.status?r.status:null)}k.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const ec=Ee.prototype,tc={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{tc[i]={value:i}});Object.defineProperties(Ee,tc);Object.defineProperty(ec,"isAxiosError",{value:!0});Ee.from=(i,e,t,n,r,s)=>{const a=Object.create(ec);k.toFlatObject(i,a,function(h){return h!==Error.prototype},c=>c!=="isAxiosError");const o=i&&i.message?i.message:"Error",l=e==null&&i?i.code:e;return Ee.call(a,o,l,t,n,r),i&&a.cause==null&&Object.defineProperty(a,"cause",{value:i,configurable:!0}),a.name=i&&i.name||"Error",s&&Object.assign(a,s),a};const j0=null;function Hs(i){return k.isPlainObject(i)||k.isArray(i)}function nc(i){return k.endsWith(i,"[]")?i.slice(0,-2):i}function Yo(i,e,t){return i?i.concat(e).map(function(r,s){return r=nc(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function Y0(i){return k.isArray(i)&&!i.some(Hs)}const $0=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function Nr(i,e,t){if(!k.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,u){return!k.isUndefined(u[p])});const n=t.metaTokens,r=t.visitor||h,s=t.dots,a=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(e);if(!k.isFunction(r))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(k.isDate(m))return m.toISOString();if(k.isBoolean(m))return m.toString();if(!l&&k.isBlob(m))throw new Ee("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(m)||k.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function h(m,p,u){let _=m;if(m&&!u&&typeof m=="object"){if(k.endsWith(p,"{}"))p=n?p:p.slice(0,-2),m=JSON.stringify(m);else if(k.isArray(m)&&Y0(m)||(k.isFileList(m)||k.endsWith(p,"[]"))&&(_=k.toArray(m)))return p=nc(p),_.forEach(function(b,x){!(k.isUndefined(b)||b===null)&&e.append(a===!0?Yo([p],x,s):a===null?p:p+"[]",c(b))}),!1}return Hs(m)?!0:(e.append(Yo(u,p,s),c(m)),!1)}const f=[],d=Object.assign($0,{defaultVisitor:h,convertValue:c,isVisitable:Hs});function g(m,p){if(!k.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+p.join("."));f.push(m),k.forEach(m,function(_,M){(!(k.isUndefined(_)||_===null)&&r.call(e,_,k.isString(M)?M.trim():M,p,d))===!0&&g(_,p?p.concat(M):[M])}),f.pop()}}if(!k.isObject(i))throw new TypeError("data must be an object");return g(i),e}function $o(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function ea(i,e){this._pairs=[],i&&Nr(i,this,e)}const ic=ea.prototype;ic.append=function(e,t){this._pairs.push([e,t])};ic.toString=function(e){const t=e?function(n){return e.call(this,n,$o)}:$o;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Z0(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function rc(i,e,t){if(!e)return i;const n=t&&t.encode||Z0;k.isFunction(t)&&(t={serialize:t});const r=t&&t.serialize;let s;if(r?s=r(e,t):s=k.isURLSearchParams(e)?e.toString():new ea(e,t).toString(n),s){const a=i.indexOf("#");a!==-1&&(i=i.slice(0,a)),i+=(i.indexOf("?")===-1?"?":"&")+s}return i}class Zo{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,function(n){n!==null&&e(n)})}}const sc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},K0=typeof URLSearchParams<"u"?URLSearchParams:ea,J0=typeof FormData<"u"?FormData:null,Q0=typeof Blob<"u"?Blob:null,e_={isBrowser:!0,classes:{URLSearchParams:K0,FormData:J0,Blob:Q0},protocols:["http","https","file","blob","url","data"]},ta=typeof window<"u"&&typeof document<"u",Ws=typeof navigator=="object"&&navigator||void 0,t_=ta&&(!Ws||["ReactNative","NativeScript","NS"].indexOf(Ws.product)<0),n_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",i_=ta&&window.location.href||"http://localhost",r_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ta,hasStandardBrowserEnv:t_,hasStandardBrowserWebWorkerEnv:n_,navigator:Ws,origin:i_},Symbol.toStringTag,{value:"Module"})),at={...r_,...e_};function s_(i,e){return Nr(i,new at.classes.URLSearchParams,{visitor:function(t,n,r,s){return at.isNode&&k.isBuffer(t)?(this.append(n,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function a_(i){return k.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function o_(i){const e={},t=Object.keys(i);let n;const r=t.length;let s;for(n=0;n<r;n++)s=t[n],e[s]=i[s];return e}function ac(i){function e(t,n,r,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=t.length;return a=!a&&k.isArray(r)?r.length:a,l?(k.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!k.isObject(r[a]))&&(r[a]=[]),e(t,n,r[a],s)&&k.isArray(r[a])&&(r[a]=o_(r[a])),!o)}if(k.isFormData(i)&&k.isFunction(i.entries)){const t={};return k.forEachEntry(i,(n,r)=>{e(a_(n),r,t,0)}),t}return null}function l_(i,e,t){if(k.isString(i))try{return(e||JSON.parse)(i),k.trim(i)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(i)}const Wi={transitional:sc,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=k.isObject(e);if(s&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return r?JSON.stringify(ac(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return s_(e,this.formSerializer).toString();if((o=k.isFileList(e))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Nr(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),l_(e)):e}],transformResponse:[function(e){const t=this.transitional||Wi.transitional,n=t&&t.forcedJSONParsing,r=this.responseType==="json";if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(n&&!this.responseType||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(o){if(a)throw o.name==="SyntaxError"?Ee.from(o,Ee.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:at.classes.FormData,Blob:at.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],i=>{Wi.headers[i]={}});const c_=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),h_=i=>{const e={};let t,n,r;return i&&i.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),n=a.substring(r+1).trim(),!(!t||e[t]&&c_[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},Ko=Symbol("internals");function Ii(i){return i&&String(i).trim().toLowerCase()}function Mr(i){return i===!1||i==null?i:k.isArray(i)?i.map(Mr):String(i)}function u_(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(i);)e[n[1]]=n[2];return e}const f_=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Ts(i,e,t,n,r){if(k.isFunction(n))return n.call(this,e,t);if(r&&(e=t),!!k.isString(e)){if(k.isString(n))return e.indexOf(n)!==-1;if(k.isRegExp(n))return n.test(e)}}function d_(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function p_(i,e){const t=k.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(i,n+t,{value:function(r,s,a){return this[n].call(this,e,r,s,a)},configurable:!0})})}let ft=class{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function s(o,l,c){const h=Ii(l);if(!h)throw new Error("header name must be a non-empty string");const f=k.findKey(r,h);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Mr(o))}const a=(o,l)=>k.forEach(o,(c,h)=>s(c,h,l));if(k.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(k.isString(e)&&(e=e.trim())&&!f_(e))a(h_(e),t);else if(k.isObject(e)&&k.isIterable(e)){let o={},l,c;for(const h of e){if(!k.isArray(h))throw TypeError("Object iterator must return a key-value pair");o[c=h[0]]=(l=o[c])?k.isArray(l)?[...l,h[1]]:[l,h[1]]:h[1]}a(o,t)}else e!=null&&s(t,e,n);return this}get(e,t){if(e=Ii(e),e){const n=k.findKey(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return u_(r);if(k.isFunction(t))return t.call(this,r,n);if(k.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ii(e),e){const n=k.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Ts(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let r=!1;function s(a){if(a=Ii(a),a){const o=k.findKey(n,a);o&&(!t||Ts(n,n[o],o,t))&&(delete n[o],r=!0)}}return k.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const s=t[n];(!e||Ts(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,n={};return k.forEach(this,(r,s)=>{const a=k.findKey(n,s);if(a){t[a]=Mr(r),delete t[s];return}const o=e?d_(s):String(s).trim();o!==s&&delete t[s],t[o]=Mr(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return k.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&k.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(r=>n.set(r)),n}static accessor(e){const n=(this[Ko]=this[Ko]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Ii(a);n[o]||(p_(r,a),n[o]=!0)}return k.isArray(e)?e.forEach(s):s(e),this}};ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(ft.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(n){this[t]=n}}});k.freezeMethods(ft);function As(i,e){const t=this||Wi,n=e||t,r=ft.from(n.headers);let s=n.data;return k.forEach(i,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function oc(i){return!!(i&&i.__CANCEL__)}function wi(i,e,t){Ee.call(this,i??"canceled",Ee.ERR_CANCELED,e,t),this.name="CanceledError"}k.inherits(wi,Ee,{__CANCEL__:!0});function lc(i,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?i(t):e(new Ee("Request failed with status code "+t.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function m_(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function g_(i,e){i=i||10;const t=new Array(i),n=new Array(i);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),h=n[s];a||(a=c),t[r]=l,n[r]=c;let f=s,d=0;for(;f!==r;)d+=t[f++],f=f%i;if(r=(r+1)%i,r===s&&(s=(s+1)%i),c-a<e)return;const g=h&&c-h;return g?Math.round(d*1e3/g):void 0}}function __(i,e){let t=0,n=1e3/e,r,s;const a=(c,h=Date.now())=>{t=h,r=null,s&&(clearTimeout(s),s=null),i(...c)};return[(...c)=>{const h=Date.now(),f=h-t;f>=n?a(c,h):(r=c,s||(s=setTimeout(()=>{s=null,a(r)},n-f)))},()=>r&&a(r)]}const Ar=(i,e,t=3)=>{let n=0;const r=g_(50,250);return __(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=a-n,c=r(l),h=a<=o;n=a;const f={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:c||void 0,estimated:c&&o&&h?(o-a)/c:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};i(f)},t)},Jo=(i,e)=>{const t=i!=null;return[n=>e[0]({lengthComputable:t,total:i,loaded:n}),e[1]]},Qo=i=>(...e)=>k.asap(()=>i(...e)),x_=at.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,at.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(at.origin),at.navigator&&/(msie|trident)/i.test(at.navigator.userAgent)):()=>!0,v_=at.hasStandardBrowserEnv?{write(i,e,t,n,r,s,a){if(typeof document>"u")return;const o=[`${i}=${encodeURIComponent(e)}`];k.isNumber(t)&&o.push(`expires=${new Date(t).toUTCString()}`),k.isString(n)&&o.push(`path=${n}`),k.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),k.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+i+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function y_(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function M_(i,e){return e?i.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):i}function cc(i,e,t){let n=!y_(e);return i&&(n||t==!1)?M_(i,e):e}const el=i=>i instanceof ft?{...i}:i;function Un(i,e){e=e||{};const t={};function n(c,h,f,d){return k.isPlainObject(c)&&k.isPlainObject(h)?k.merge.call({caseless:d},c,h):k.isPlainObject(h)?k.merge({},h):k.isArray(h)?h.slice():h}function r(c,h,f,d){if(k.isUndefined(h)){if(!k.isUndefined(c))return n(void 0,c,f,d)}else return n(c,h,f,d)}function s(c,h){if(!k.isUndefined(h))return n(void 0,h)}function a(c,h){if(k.isUndefined(h)){if(!k.isUndefined(c))return n(void 0,c)}else return n(void 0,h)}function o(c,h,f){if(f in e)return n(c,h);if(f in i)return n(void 0,c)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(c,h,f)=>r(el(c),el(h),f,!0)};return k.forEach(Object.keys({...i,...e}),function(h){const f=l[h]||r,d=f(i[h],e[h],h);k.isUndefined(d)&&f!==o||(t[h]=d)}),t}const hc=i=>{const e=Un({},i);let{data:t,withXSRFToken:n,xsrfHeaderName:r,xsrfCookieName:s,headers:a,auth:o}=e;if(e.headers=a=ft.from(a),e.url=rc(cc(e.baseURL,e.url,e.allowAbsoluteUrls),i.params,i.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),k.isFormData(t)){if(at.hasStandardBrowserEnv||at.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(k.isFunction(t.getHeaders)){const l=t.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([h,f])=>{c.includes(h.toLowerCase())&&a.set(h,f)})}}if(at.hasStandardBrowserEnv&&(n&&k.isFunction(n)&&(n=n(e)),n||n!==!1&&x_(e.url))){const l=r&&s&&v_.read(s);l&&a.set(r,l)}return e},b_=typeof XMLHttpRequest<"u",S_=b_&&function(i){return new Promise(function(t,n){const r=hc(i);let s=r.data;const a=ft.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,h,f,d,g,m;function p(){g&&g(),m&&m(),r.cancelToken&&r.cancelToken.unsubscribe(h),r.signal&&r.signal.removeEventListener("abort",h)}let u=new XMLHttpRequest;u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout;function _(){if(!u)return;const b=ft.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:b,config:i,request:u};lc(function(L){t(L),p()},function(L){n(L),p()},v),u=null}"onloadend"in u?u.onloadend=_:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(_)},u.onabort=function(){u&&(n(new Ee("Request aborted",Ee.ECONNABORTED,i,u)),u=null)},u.onerror=function(x){const v=x&&x.message?x.message:"Network Error",E=new Ee(v,Ee.ERR_NETWORK,i,u);E.event=x||null,n(E),u=null},u.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const v=r.transitional||sc;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),n(new Ee(x,v.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,i,u)),u=null},s===void 0&&a.setContentType(null),"setRequestHeader"in u&&k.forEach(a.toJSON(),function(x,v){u.setRequestHeader(v,x)}),k.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),o&&o!=="json"&&(u.responseType=r.responseType),c&&([d,m]=Ar(c,!0),u.addEventListener("progress",d)),l&&u.upload&&([f,g]=Ar(l),u.upload.addEventListener("progress",f),u.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(h=b=>{u&&(n(!b||b.type?new wi(null,i,u):b),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(h),r.signal&&(r.signal.aborted?h():r.signal.addEventListener("abort",h)));const M=m_(r.url);if(M&&at.protocols.indexOf(M)===-1){n(new Ee("Unsupported protocol "+M+":",Ee.ERR_BAD_REQUEST,i));return}u.send(s||null)})},w_=(i,e)=>{const{length:t}=i=i?i.filter(Boolean):[];if(e||t){let n=new AbortController,r;const s=function(c){if(!r){r=!0,o();const h=c instanceof Error?c:this.reason;n.abort(h instanceof Ee?h:new wi(h instanceof Error?h.message:h))}};let a=e&&setTimeout(()=>{a=null,s(new Ee(`timeout ${e} of ms exceeded`,Ee.ETIMEDOUT))},e);const o=()=>{i&&(a&&clearTimeout(a),a=null,i.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),i=null)};i.forEach(c=>c.addEventListener("abort",s));const{signal:l}=n;return l.unsubscribe=()=>k.asap(o),l}},E_=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let n=0,r;for(;n<t;)r=n+e,yield i.slice(n,r),n=r},T_=async function*(i,e){for await(const t of A_(i))yield*E_(t,e)},A_=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},tl=(i,e,t,n)=>{const r=T_(i,e);let s=0,a,o=l=>{a||(a=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:c,value:h}=await r.next();if(c){o(),l.close();return}let f=h.byteLength;if(t){let d=s+=f;t(d)}l.enqueue(new Uint8Array(h))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},nl=64*1024,{isFunction:gr}=k,C_=(({Request:i,Response:e})=>({Request:i,Response:e}))(k.global),{ReadableStream:il,TextEncoder:rl}=k.global,sl=(i,...e)=>{try{return!!i(...e)}catch{return!1}},L_=i=>{i=k.merge.call({skipUndefined:!0},C_,i);const{fetch:e,Request:t,Response:n}=i,r=e?gr(e):typeof fetch=="function",s=gr(t),a=gr(n);if(!r)return!1;const o=r&&gr(il),l=r&&(typeof rl=="function"?(m=>p=>m.encode(p))(new rl):async m=>new Uint8Array(await new t(m).arrayBuffer())),c=s&&o&&sl(()=>{let m=!1;const p=new t(at.origin,{body:new il,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!p}),h=a&&o&&sl(()=>k.isReadableStream(new n("").body)),f={stream:h&&(m=>m.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!f[m]&&(f[m]=(p,u)=>{let _=p&&p[m];if(_)return _.call(p);throw new Ee(`Response type '${m}' is not supported`,Ee.ERR_NOT_SUPPORT,u)})});const d=async m=>{if(m==null)return 0;if(k.isBlob(m))return m.size;if(k.isSpecCompliantForm(m))return(await new t(at.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(k.isArrayBufferView(m)||k.isArrayBuffer(m))return m.byteLength;if(k.isURLSearchParams(m)&&(m=m+""),k.isString(m))return(await l(m)).byteLength},g=async(m,p)=>{const u=k.toFiniteNumber(m.getContentLength());return u??d(p)};return async m=>{let{url:p,method:u,data:_,signal:M,cancelToken:b,timeout:x,onDownloadProgress:v,onUploadProgress:E,responseType:L,headers:y,withCredentials:T="same-origin",fetchOptions:P}=hc(m),V=e||fetch;L=L?(L+"").toLowerCase():"text";let X=w_([M,b&&b.toAbortSignal()],x),N=null;const R=X&&X.unsubscribe&&(()=>{X.unsubscribe()});let G;try{if(E&&c&&u!=="get"&&u!=="head"&&(G=await g(y,_))!==0){let ee=new t(p,{method:"POST",body:_,duplex:"half"}),K;if(k.isFormData(_)&&(K=ee.headers.get("content-type"))&&y.setContentType(K),ee.body){const[te,he]=Jo(G,Ar(Qo(E)));_=tl(ee.body,nl,te,he)}}k.isString(T)||(T=T?"include":"omit");const Y=s&&"credentials"in t.prototype,J={...P,signal:X,method:u.toUpperCase(),headers:y.normalize().toJSON(),body:_,duplex:"half",credentials:Y?T:void 0};N=s&&new t(p,J);let W=await(s?V(N,P):V(p,J));const z=h&&(L==="stream"||L==="response");if(h&&(v||z&&R)){const ee={};["status","statusText","headers"].forEach(ge=>{ee[ge]=W[ge]});const K=k.toFiniteNumber(W.headers.get("content-length")),[te,he]=v&&Jo(K,Ar(Qo(v),!0))||[];W=new n(tl(W.body,nl,te,()=>{he&&he(),R&&R()}),ee)}L=L||"text";let B=await f[k.findKey(f,L)||"text"](W,m);return!z&&R&&R(),await new Promise((ee,K)=>{lc(ee,K,{data:B,headers:ft.from(W.headers),status:W.status,statusText:W.statusText,config:m,request:N})})}catch(Y){throw R&&R(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,m,N),{cause:Y.cause||Y}):Ee.from(Y,Y&&Y.code,m,N)}}},R_=new Map,uc=i=>{let e=i&&i.env||{};const{fetch:t,Request:n,Response:r}=e,s=[n,r,t];let a=s.length,o=a,l,c,h=R_;for(;o--;)l=s[o],c=h.get(l),c===void 0&&h.set(l,c=o?new Map:L_(e)),h=c;return c};uc();const na={http:j0,xhr:S_,fetch:{get:uc}};k.forEach(na,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const al=i=>`- ${i}`,P_=i=>k.isFunction(i)||i===null||i===!1;function D_(i,e){i=k.isArray(i)?i:[i];const{length:t}=i;let n,r;const s={};for(let a=0;a<t;a++){n=i[a];let o;if(r=n,!P_(n)&&(r=na[(o=String(n)).toLowerCase()],r===void 0))throw new Ee(`Unknown adapter '${o}'`);if(r&&(k.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(al).join(`
`):" "+al(a[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r}const fc={getAdapter:D_,adapters:na};function Cs(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new wi(null,i)}function ol(i){return Cs(i),i.headers=ft.from(i.headers),i.data=As.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),fc.getAdapter(i.adapter||Wi.adapter,i)(i).then(function(n){return Cs(i),n.data=As.call(i,i.transformResponse,n),n.headers=ft.from(n.headers),n},function(n){return oc(n)||(Cs(i),n&&n.response&&(n.response.data=As.call(i,i.transformResponse,n.response),n.response.headers=ft.from(n.response.headers))),Promise.reject(n)})}const dc="1.13.2",zr={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{zr[i]=function(n){return typeof n===i||"a"+(e<1?"n ":" ")+i}});const ll={};zr.transitional=function(e,t,n){function r(s,a){return"[Axios v"+dc+"] Transitional option '"+s+"'"+a+(n?". "+n:"")}return(s,a,o)=>{if(e===!1)throw new Ee(r(a," has been removed"+(t?" in "+t:"")),Ee.ERR_DEPRECATED);return t&&!ll[a]&&(ll[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};zr.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function I_(i,e,t){if(typeof i!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const n=Object.keys(i);let r=n.length;for(;r-- >0;){const s=n[r],a=e[s];if(a){const o=i[s],l=o===void 0||a(o,s,i);if(l!==!0)throw new Ee("option "+s+" must be "+l,Ee.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ee("Unknown option "+s,Ee.ERR_BAD_OPTION)}}const br={assertOptions:I_,validators:zr},Ut=br.validators;let Dn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Zo,response:new Zo}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Un(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:s}=t;n!==void 0&&br.assertOptions(n,{silentJSONParsing:Ut.transitional(Ut.boolean),forcedJSONParsing:Ut.transitional(Ut.boolean),clarifyTimeoutError:Ut.transitional(Ut.boolean)},!1),r!=null&&(k.isFunction(r)?t.paramsSerializer={serialize:r}:br.assertOptions(r,{encode:Ut.function,serialize:Ut.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),br.assertOptions(t,{baseUrl:Ut.spelling("baseURL"),withXsrfToken:Ut.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&k.merge(s.common,s[t.method]);s&&k.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),t.headers=ft.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(l=l&&p.synchronous,o.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let h,f=0,d;if(!l){const m=[ol.bind(this),void 0];for(m.unshift(...o),m.push(...c),d=m.length,h=Promise.resolve(t);f<d;)h=h.then(m[f++],m[f++]);return h}d=o.length;let g=t;for(;f<d;){const m=o[f++],p=o[f++];try{g=m(g)}catch(u){p.call(this,u);break}}try{h=ol.call(this,g)}catch(m){return Promise.reject(m)}for(f=0,d=c.length;f<d;)h=h.then(c[f++],c[f++]);return h}getUri(e){e=Un(this.defaults,e);const t=cc(e.baseURL,e.url,e.allowAbsoluteUrls);return rc(t,e.params,e.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(e){Dn.prototype[e]=function(t,n){return this.request(Un(n||{},{method:e,url:t,data:(n||{}).data}))}});k.forEach(["post","put","patch"],function(e){function t(n){return function(s,a,o){return this.request(Un(o||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Dn.prototype[e]=t(),Dn.prototype[e+"Form"]=t(!0)});let F_=class pc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const n=this;this.promise.then(r=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](r);n._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{n.subscribe(o),s=o}).then(r);return a.cancel=function(){n.unsubscribe(s)},a},e(function(s,a,o){n.reason||(n.reason=new wi(s,a,o),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new pc(function(r){e=r}),cancel:e}}};function O_(i){return function(t){return i.apply(null,t)}}function N_(i){return k.isObject(i)&&i.isAxiosError===!0}const qs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(qs).forEach(([i,e])=>{qs[e]=i});function mc(i){const e=new Dn(i),t=Xl(Dn.prototype.request,e);return k.extend(t,Dn.prototype,e,{allOwnKeys:!0}),k.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return mc(Un(i,r))},t}const We=mc(Wi);We.Axios=Dn;We.CanceledError=wi;We.CancelToken=F_;We.isCancel=oc;We.VERSION=dc;We.toFormData=Nr;We.AxiosError=Ee;We.Cancel=We.CanceledError;We.all=function(e){return Promise.all(e)};We.spread=O_;We.isAxiosError=N_;We.mergeConfig=Un;We.AxiosHeaders=ft;We.formToJSON=i=>ac(k.isHTMLForm(i)?new FormData(i):i);We.getAdapter=fc.getAdapter;We.HttpStatusCode=qs;We.default=We;const{Axios:K_,AxiosError:J_,CanceledError:Q_,isCancel:ex,CancelToken:tx,VERSION:nx,all:ix,Cancel:rx,isAxiosError:sx,spread:ax,toFormData:ox,AxiosHeaders:lx,HttpStatusCode:cx,formToJSON:hx,getAdapter:ux,mergeConfig:fx}=We,gc=We.create({withCredentials:!0,baseURL:"/"});gc.interceptors.response.use(i=>{if(i.config.responseType==="blob")return i;const e=i.data;return e.msg&&(e.message=e.msg),e},i=>{if(i.message!=="cancel")return Promise.reject(i.message)});const z_=()=>gc({url:"https://v2.jinrishici.com/one.json",method:"get"}),U_={class:"w-full bg-black pb-10"},B_={class:"relative w-full h-screen overflow-hidden"},k_={class:"text-center whitespace-normal break-words px-4 sm:px-0 h-full flex items-center justify-center"},V_={class:"min-h-screen bg-black flex justify-center"},G_={class:"w-[90%] md:w-[60%] mx-auto grid place-items-center min-h-16"},dx=Bi({__name:"index",setup(i){const e=un("");return Lr(()=>{z_().then(t=>{e.value=t.data.content})}),(t,n)=>(Ht(),mn("div",U_,[fn("div",B_,[_r(tu,{"color-stops":["#7cff67","#171D22","#7cff67"],amplitude:1,blend:.5,speed:.5,intensity:1.5}),fn("div",k_,[Sr(e)?(Ht(),dl(ru,{key:0,text:Sr(e),delay:200,"class-name":"text-sm sm:text-base lg:text-5xl font-semibold text-white mx-auto","animate-by":"letters",direction:"top",threshold:.1,"root-margin":"0px","step-duration":.35},null,8,["text"])):Sc("",!0)])]),fn("div",V_,[_r(o0)]),fn("div",G_,[_r(iu,{sentence:"VueBits Vue Vite TypeScript Tailwindcss Three Gasp Motion-v Ogl",manualMode:!1,blurAmount:2,borderColor:"#27FF64",animationDuration:.5,pauseBetweenAnimations:1})])]))}});export{dx as default};
