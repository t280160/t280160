import{d as j,u as me,r as L,o as K,n as ve,a as ie,w as Z,c as Y,b as G,e as ge,f as he,g as A,h as pe,i as _e,j as H,k as B,l as W,F as xe,m as we,p as J,q as be,s as ye,t as Ee}from"./index.CFpTDCqL.js";import{p as Te,v as Re,i as Le,a as Se,d as Ae,c as Ce,r as Ie,b as Pe,n as se,f as O,e as le,g as De,s as Be,m as N,h as Q,j as Ue}from"./index.DQH3hHHI.js";const ze=`#version 300 es
precision mediump float;

in vec2 a_position;
out vec2 vUv;

void main() {
    vUv = .5 * (a_position + 1.);
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,Fe=`#version 300 es
precision mediump float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_image_texture;
uniform float u_time;
uniform float u_ratio;
uniform float u_img_ratio;
uniform float u_patternScale;
uniform float u_refraction;
uniform float u_edge;
uniform float u_patternBlur;
uniform float u_liquid;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec3 mod289(vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 permute(vec3 x) { return mod289(((x*34.)+1.)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1., 0.) : vec2(0., 1.);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.);
    m = m*m;
    m = m*m;
    vec3 x = 2. * fract(p * C.www) - 1.;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130. * dot(m, g);
}

vec2 get_img_uv() {
    vec2 img_uv = vUv;
    img_uv -= .5;
    if (u_ratio > u_img_ratio) {
        img_uv.x = img_uv.x * u_ratio / u_img_ratio;
    } else {
        img_uv.y = img_uv.y * u_img_ratio / u_ratio;
    }
    float scale_factor = 1.;
    img_uv *= scale_factor;
    img_uv += .5;
    img_uv.y = 1. - img_uv.y;
    return img_uv;
}
vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
float get_color_channel(float c1, float c2, float stripe_p, vec3 w, float extra_blur, float b) {
    float ch = c2;
    float border = 0.;
    float blur = u_patternBlur + extra_blur;
    ch = mix(ch, c1, smoothstep(.0, blur, stripe_p));
    border = w[0];
    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe_p));
    b = smoothstep(.2, .8, b);
    border = w[0] + .4 * (1. - b) * w[1];
    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe_p));
    border = w[0] + .5 * (1. - b) * w[1];
    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe_p));
    border = w[0] + w[1];
    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe_p));
    float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
    float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
    ch = mix(ch, gradient, smoothstep(border - blur, border + blur, stripe_p));
    return ch;
}
float get_img_frame_alpha(vec2 uv, float img_frame_width) {
    float img_frame_alpha = smoothstep(0., img_frame_width, uv.x) * smoothstep(1., 1. - img_frame_width, uv.x);
    img_frame_alpha *= smoothstep(0., img_frame_width, uv.y) * smoothstep(1., 1. - img_frame_width, uv.y);
    return img_frame_alpha;
}
void main() {
    vec2 uv = vUv;
    uv.y = 1. - uv.y;
    uv.x *= u_ratio;
    float diagonal = uv.x - uv.y;
    float t = .001 * u_time;
    vec2 img_uv = get_img_uv();
    vec4 img = texture(u_image_texture, img_uv);
    vec3 color = vec3(0.);
    float opacity = 1.;
    vec3 color1 = vec3(.98, 0.98, 1.);
    vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, uv.x + uv.y));
    float edge = img.r;
    vec2 grad_uv = uv;
    grad_uv -= .5;
    float dist = length(grad_uv + vec2(0., .2 * diagonal));
    grad_uv = rotate(grad_uv, (.25 - .2 * diagonal) * PI);
    float bulge = pow(1.8 * dist, 1.2);
    bulge = 1. - bulge;
    bulge *= pow(uv.y, .3);
    float cycle_width = u_patternScale;
    float thin_strip_1_ratio = .12 / cycle_width * (1. - .4 * bulge);
    float thin_strip_2_ratio = .07 / cycle_width * (1. + .4 * bulge);
    float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);
    float thin_strip_1_width = cycle_width * thin_strip_1_ratio;
    float thin_strip_2_width = cycle_width * thin_strip_2_ratio;
    opacity = 1. - smoothstep(.9 - .5 * u_edge, 1. - .5 * u_edge, edge);
    opacity *= get_img_frame_alpha(img_uv, 0.01);
    float noise = snoise(uv - t);
    edge += (1. - edge) * u_liquid * noise;
    float refr = 0.;
    refr += (1. - bulge);
    refr = clamp(refr, 0., 1.);
    float dir = grad_uv.x;
    dir += diagonal;
    dir -= 2. * noise * diagonal * (smoothstep(0., 1., edge) * smoothstep(1., 0., edge));
    bulge *= clamp(pow(uv.y, .1), .3, 1.);
    dir *= (.1 + (1.1 - edge) * bulge);
    dir *= smoothstep(1., .7, edge);
    dir += .18 * (smoothstep(.1, .2, uv.y) * smoothstep(.4, .2, uv.y));
    dir += .03 * (smoothstep(.1, .2, 1. - uv.y) * smoothstep(.4, .2, 1. - uv.y));
    dir *= (.5 + .5 * pow(uv.y, 2.));
    dir *= cycle_width;
    dir -= t;
    float refr_r = refr;
    refr_r += .03 * bulge * noise;
    float refr_b = 1.3 * refr;
    refr_r += 5. * (smoothstep(-.1, .2, uv.y) * smoothstep(.5, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(1., .4, bulge));
    refr_r -= diagonal;
    refr_b += (smoothstep(0., .4, uv.y) * smoothstep(.8, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(.8, .4, bulge));
    refr_b -= .2 * edge;
    refr_r *= u_refraction;
    refr_b *= u_refraction;
    vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
    w[1] -= .02 * smoothstep(.0, 1., edge + bulge);
    float stripe_r = mod(dir + refr_r, 1.);
    float r = get_color_channel(color1.r, color2.r, stripe_r, w, 0.02 + .03 * u_refraction * bulge, bulge);
    float stripe_g = mod(dir, 1.);
    float g = get_color_channel(color1.g, color2.g, stripe_g, w, 0.01 / (1. - diagonal), bulge);
    float stripe_b = mod(dir - refr_b, 1.);
    float b = get_color_channel(color1.b, color2.b, stripe_b, w, .01, bulge);
    color = vec3(r, g, b);
    color *= opacity;
    fragColor = vec4(color, opacity);
}
`,Me=j({__name:"index",props:{imageData:{},params:{default:()=>({patternScale:2,refraction:.015,edge:1,patternBlur:.005,liquid:.07,speed:.3})}},setup(t){const r=t,a=me("canvasRef"),e=L(null),o=L({}),s=L(0),c=L(0),f=L();function n(){!e.value||!o.value||(e.value.uniform1f(o.value.u_edge,r.params.edge),e.value.uniform1f(o.value.u_patternBlur,r.params.patternBlur),e.value.uniform1f(o.value.u_time,0),e.value.uniform1f(o.value.u_patternScale,r.params.patternScale),e.value.uniform1f(o.value.u_refraction,r.params.refraction),e.value.uniform1f(o.value.u_liquid,r.params.liquid))}function i(v,l,h){const _=v.createShader(h);return _?(v.shaderSource(_,l),v.compileShader(_),v.getShaderParameter(_,v.COMPILE_STATUS)?_:(console.error("An error occurred compiling the shaders: "+v.getShaderInfoLog(_)),v.deleteShader(_),null)):null}function b(v,l){const h={},_=l.getProgramParameter(v,l.ACTIVE_UNIFORMS);for(let w=0;w<_;w++){const S=l.getActiveUniform(v,w)?.name;S&&(h[S]=l.getUniformLocation(v,S))}return h}function x(){const v=a.value,l=v?.getContext("webgl2",{antialias:!0,alpha:!0});if(!v||!l)return;const h=i(l,ze,l.VERTEX_SHADER),_=i(l,Fe,l.FRAGMENT_SHADER),w=l.createProgram();if(!w||!h||!_)return;if(l.attachShader(w,h),l.attachShader(w,_),l.linkProgram(w),!l.getProgramParameter(w,l.LINK_STATUS))return console.error("Unable to initialize the shader program: "+l.getProgramInfoLog(w)),null;const S=b(w,l);o.value=S;const C=new Float32Array([-1,-1,1,-1,-1,1,1,1]),I=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,I),l.bufferData(l.ARRAY_BUFFER,C,l.STATIC_DRAW),l.useProgram(w);const M=l.getAttribLocation(w,"a_position");l.enableVertexAttribArray(M),l.bindBuffer(l.ARRAY_BUFFER,I),l.vertexAttribPointer(M,2,l.FLOAT,!1,0,0),e.value=l}function E(){if(!a.value||!e.value||!o.value||!r.imageData)return;const v=r.imageData.width/r.imageData.height;e.value.uniform1f(o.value.u_img_ratio,v);const l=1e3;a.value.width=l*devicePixelRatio,a.value.height=l*devicePixelRatio,e.value.viewport(0,0,a.value.height,a.value.height),e.value.uniform1f(o.value.u_ratio,1),e.value.uniform1f(o.value.u_img_ratio,v)}function p(){if(!e.value||!o.value)return;const v=e.value.getParameter(e.value.TEXTURE_BINDING_2D);v&&e.value.deleteTexture(v);const l=e.value.createTexture();e.value.activeTexture(e.value.TEXTURE0),e.value.bindTexture(e.value.TEXTURE_2D,l),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_MIN_FILTER,e.value.LINEAR),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_MAG_FILTER,e.value.LINEAR),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_WRAP_S,e.value.CLAMP_TO_EDGE),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_WRAP_T,e.value.CLAMP_TO_EDGE),e.value.pixelStorei(e.value.UNPACK_ALIGNMENT,1);try{e.value.texImage2D(e.value.TEXTURE_2D,0,e.value.RGBA,r.imageData?.width,r.imageData?.height,0,e.value.RGBA,e.value.UNSIGNED_BYTE,r.imageData?.data),e.value.uniform1i(o.value.u_image_texture,0)}catch(h){console.error("Error uploading texture:",h)}}function y(v){if(!e.value||!o.value)return;const l=v-c.value;c.value=v,s.value+=l*r.params.speed,e.value.uniform1f(o.value.u_time,s.value),e.value.drawArrays(e.value.TRIANGLE_STRIP,0,4),f.value=requestAnimationFrame(y)}function V(){f.value&&cancelAnimationFrame(f.value),c.value=performance.now(),f.value=requestAnimationFrame(y)}return K(async()=>{await ve(),x(),n(),E(),p(),V(),window.addEventListener("resize",E)}),ie(()=>{f.value&&cancelAnimationFrame(f.value),window.removeEventListener("resize",E)}),Z(()=>r.params,()=>{n()},{deep:!0}),Z(()=>r.imageData,()=>{p(),E()},{deep:!0}),(v,l)=>(G(),Y("canvas",{ref_key:"canvasRef",ref:a,class:"block w-10 h-10 object-contain"},null,512))}}),He="data:image/svg+xml,%3csvg%20width='67'%20height='58'%20viewBox='0%200%2067%2058'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.948242%200.144043H22.837C22.837%200.144043%2032.0299%2017.1763%2038.658%2027.6444C38.9372%2028.0853%2039.0747%2028.3453%2039.3749%2028.7722C39.6552%2029.1709%2039.813%2029.3963%2040.1365%2029.7609C40.4407%2030.1038%2040.3868%2030.0701%2040.7353%2030.4551C40.9256%2030.6654%2041.0901%2030.8243%2041.4999%2031.0893C41.8709%2031.3291%2042.5065%2031.4903%2042.9886%2031.3276C43.3618%2031.2017%2043.4628%2031.1547%2043.7801%2030.9768C44.8913%2030.354%2046.0324%2028.0858%2046.0324%2028.0858L58.7905%204.81785H47.6028V0.144994L66.7607%200.144043L51.406%2026.7942C51.406%2026.7942%2049.8437%2029.2994%2048.7246%2031.2443C48.5422%2031.5613%2047.7633%2032.7078%2047.46%2033.0943C46.8867%2033.825%2046.5664%2034.2616%2046.0324%2034.7887C45.5209%2035.2936%2045.0161%2035.5409%2044.6578%2035.6848C44.1037%2035.9073%2043.511%2036.0194%2042.9158%2036.068C42.4088%2036.1093%2042.0672%2036.1359%2041.563%2036.068C40.9342%2035.9833%2040.8891%2035.9616%2040.1365%2035.6848C39.82%2035.5684%2039.2914%2035.2543%2038.7932%2034.8951C38.2398%2034.496%2037.8624%2034.1401%2037.2402%2033.482C36.6925%2032.9026%2036.4509%2032.5591%2036.008%2031.8962C35.543%2031.2003%2035.1813%2030.8154%2034.7421%2030.103C28.7742%2020.4232%2020.2999%204.81785%2020.2999%204.81785H9.0302L33.8982%2048.0406L38.658%2039.8352C38.658%2039.8352%2039.3105%2040.7251%2041.6%2040.6509C43.7041%2040.5826%2044.2102%2039.8352%2044.2102%2039.8352L33.8982%2057.384L5.50866%208.16941L3.60187%204.81785L0.948242%200.144043Z'%20fill='%230b0b0b'/%3e%3ccircle%20cx='42.4365'%20cy='14.686'%20r='4.78514'%20fill='%230b0b0b'/%3e%3c/svg%3e";function We(t){const r=document.createElement("canvas"),a=r.getContext("2d");return new Promise((e,o)=>{if(!t||!a){o(new Error("Invalid file or context"));return}const s=new Image;s.crossOrigin="anonymous",s.onload=function(){t.type==="image/svg+xml"&&(s.width=1e3,s.height=1e3);const c=1e3,f=500;let n=s.naturalWidth,i=s.naturalHeight;(n>c||i>c||n<f||i<f)&&(n>i?n>c?(i=Math.round(i*c/n),n=c):n<f&&(i=Math.round(i*f/n),n=f):i>c?(n=Math.round(n*c/i),i=c):i<f&&(n=Math.round(n*f/i),i=f)),r.width=n,r.height=i;const b=document.createElement("canvas");b.width=n,b.height=i;const x=b.getContext("2d");if(!x){o(new Error("Failed to acquire 2D context for shape canvas"));return}x.drawImage(s,0,0,n,i);const p=x.getImageData(0,0,n,i).data,y=new Array(n*i).fill(!1);for(let u=0;u<i;u++)for(let d=0;d<n;d++){const m=(u*n+d)*4,g=p[m],R=p[m+1],P=p[m+2],D=p[m+3];y[u*n+d]=!(g===255&&R===255&&P===255&&D===255||D===0)}function V(u,d){return u<0||u>=n||d<0||d>=i?!1:y[d*n+u]}const v=new Array(n*i).fill(!1);for(let u=0;u<i;u++)for(let d=0;d<n;d++){const m=u*n+d;if(!y[m])continue;let g=!1;for(let R=u-1;R<=u+1&&!g;R++)for(let P=d-1;P<=d+1&&!g;P++)V(P,R)||(g=!0);g&&(v[m]=!0)}const l=new Array(n*i).fill(!1);for(let u=1;u<i-1;u++)for(let d=1;d<n-1;d++){const m=u*n+d;y[m]&&y[m-1]&&y[m+1]&&y[m-n]&&y[m+n]&&(l[m]=!0)}const h=new Float32Array(n*i).fill(0),_=new Float32Array(n*i).fill(0),w=.01,S=300;function C(u,d,m){return u<0||u>=n||d<0||d>=i||!y[d*n+u]?0:m[d*n+u]}for(let u=0;u<S;u++){for(let d=0;d<i;d++)for(let m=0;m<n;m++){const g=d*n+m;if(!y[g]||v[g]){_[g]=0;continue}const R=C(m+1,d,h)+C(m-1,d,h)+C(m,d+1,h)+C(m,d-1,h);_[g]=(w+R)/4}h.set(_)}let I=0;for(let u=0;u<n*i;u++)h[u]>I&&(I=h[u]);const M=2,T=a.createImageData(n,i);for(let u=0;u<i;u++)for(let d=0;d<n;d++){const m=u*n+d,g=m*4;if(!y[m])T.data[g]=255,T.data[g+1]=255,T.data[g+2]=255,T.data[g+3]=255;else{const R=h[m]/I,D=255*(1-Math.pow(R,M));T.data[g]=D,T.data[g+1]=D,T.data[g+2]=D,T.data[g+3]=255}}a.putImageData(T,0,0),r.toBlob(u=>{if(!u){o(new Error("Failed to create PNG blob"));return}e({imageData:T,pngBlob:u})},"image/png")},s.onerror=()=>o(new Error("Failed to load image")),s.src=URL.createObjectURL(t)})}const Ne=j({__name:"index",setup(t){const r=L(null);return K(async()=>{try{const e=await(await fetch(He)).blob(),o=new File([e],"logo.svg",{type:"image/svg+xml"}),{imageData:s}=await We(o);r.value=s}catch(a){console.error("Error loading image:",a)}}),(a,e)=>(G(),ge(Me,{"image-data":r.value,params:{patternScale:5,refraction:.1,edge:1,patternBlur:.1,liquid:.1,speed:.3}},null,8,["image-data"]))}}),Oe=50,ee=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ke=()=>({time:0,x:ee(),y:ee()}),Xe={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function te(t,r,a,e){const o=a[r],{length:s,position:c}=Xe[r],f=o.current,n=a.time;o.current=t[`scroll${c}`],o.scrollLength=t[`scroll${s}`]-t[`client${s}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Te(0,o.scrollLength,o.current);const i=e-n;o.velocity=i>Oe?0:Re(o.current-f,i)}function Ge(t,r,a){te(t,"x",r,a),te(t,"y",r,a),r.time=a}function Ve(t,r){const a={x:0,y:0};let e=t;for(;e&&e!==r;)if(Le(e))a.x+=e.offsetLeft,a.y+=e.offsetTop,e=e.offsetParent;else if(e.tagName==="svg"){const o=e.getBoundingClientRect();e=e.parentElement;const s=e.getBoundingClientRect();a.x+=o.left-s.left,a.y+=o.top-s.top}else if(e instanceof SVGGraphicsElement){const{x:o,y:s}=e.getBBox();a.x+=o,a.y+=s;let c=null,f=e.parentNode;for(;!c;)f.tagName==="svg"&&(c=f),f=e.parentNode;e=c}else break;return a}const $={start:0,center:.5,end:1};function re(t,r,a=0){let e=0;if(t in $&&(t=$[t]),typeof t=="string"){const o=parseFloat(t);t.endsWith("px")?e=o:t.endsWith("%")?t=o/100:t.endsWith("vw")?e=o/100*document.documentElement.clientWidth:t.endsWith("vh")?e=o/100*document.documentElement.clientHeight:t=o}return typeof t=="number"&&(e=r*t),a+e}const qe=[0,0];function Ye(t,r,a,e){let o=Array.isArray(t)?t:qe,s=0,c=0;return typeof t=="number"?o=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?o=t.split(" "):o=[t,$[t]?t:"0"]),s=re(o[0],a,e),c=re(o[1],r),s-c}const $e={All:[[0,0],[1,1]]},je={x:0,y:0};function Ke(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function Ze(t,r,a){const{offset:e=$e.All}=a,{target:o=t,axis:s="y"}=a,c=s==="y"?"height":"width",f=o!==t?Ve(o,t):je,n=o===t?{width:t.scrollWidth,height:t.scrollHeight}:Ke(o),i={width:t.clientWidth,height:t.clientHeight};r[s].offset.length=0;let b=!r[s].interpolate;const x=e.length;for(let E=0;E<x;E++){const p=Ye(e[E],i[c],n[c],f[s]);!b&&p!==r[s].interpolatorOffsets[E]&&(b=!0),r[s].offset[E]=p}b&&(r[s].interpolate=Se(r[s].offset,Ae(e),{clamp:!1}),r[s].interpolatorOffsets=[...r[s].offset]),r[s].progress=Ce(0,1,r[s].interpolate(r[s].current))}function Je(t,r=t,a){if(a.x.targetOffset=0,a.y.targetOffset=0,r!==t){let e=r;for(;e&&e!==t;)a.x.targetOffset+=e.offsetLeft,a.y.targetOffset+=e.offsetTop,e=e.offsetParent}a.x.targetLength=r===t?r.scrollWidth:r.clientWidth,a.y.targetLength=r===t?r.scrollHeight:r.clientHeight,a.x.containerLength=t.clientWidth,a.y.containerLength=t.clientHeight}function Qe(t,r,a,e={}){return{measure:o=>{Je(t,e.target,a),Ge(t,a,o),(e.offset||e.target)&&Ze(t,a,e)},notify:()=>r(a)}}const k=new WeakMap;let U;const ce=(t,r,a)=>(e,o)=>o&&o[0]?o[0][t+"Size"]:Pe(e)&&"getBBox"in e?e.getBBox()[r]:e[a],et=ce("inline","width","offsetWidth"),tt=ce("block","height","offsetHeight");function rt({target:t,borderBoxSize:r}){var a;(a=k.get(t))==null||a.forEach(e=>{e(t,{get width(){return et(t,r)},get height(){return tt(t,r)}})})}function ot(t){t.forEach(rt)}function at(){typeof ResizeObserver>"u"||(U=new ResizeObserver(ot))}function nt(t,r){U||at();const a=Ie(t);return a.forEach(e=>{let o=k.get(e);o||(o=new Set,k.set(e,o)),o.add(r),U?.observe(e)}),()=>{a.forEach(e=>{const o=k.get(e);o?.delete(r),o?.size||U?.unobserve(e)})}}const X=new Set;let z;function it(){z=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};X.forEach(r=>r(t))},window.addEventListener("resize",z)}function st(t){return X.add(t),z||it(),()=>{X.delete(t),!X.size&&typeof z=="function"&&(window.removeEventListener("resize",z),z=void 0)}}function lt(t,r){return typeof t=="function"?st(t):nt(t,r)}const F=new WeakMap,oe=new WeakMap,q=new WeakMap,ae=t=>t===document.scrollingElement?window:t;function ue(t,{container:r=document.scrollingElement,...a}={}){if(!r)return se;let e=q.get(r);e||(e=new Set,q.set(r,e));const o=ke(),s=Qe(r,t,o,a);if(e.add(s),!F.has(r)){const f=()=>{for(const x of e)x.measure(De.timestamp);O.preUpdate(n)},n=()=>{for(const x of e)x.notify()},i=()=>O.read(f);F.set(r,i);const b=ae(r);window.addEventListener("resize",i,{passive:!0}),r!==document.documentElement&&oe.set(r,lt(r,i)),b.addEventListener("scroll",i,{passive:!0}),i()}const c=F.get(r);return O.read(c,!1,!0),()=>{var f;le(c);const n=q.get(r);if(!n||(n.delete(s),n.size))return;const i=F.get(r);F.delete(r),i&&(ae(r).removeEventListener("scroll",i),(f=oe.get(r))==null||f(),window.removeEventListener("resize",i))}}const ne=new Map;function ct(t){const r={value:0},a=ue(e=>{r.value=e[t.axis].progress*100},t);return{currentTime:r,cancel:a}}function fe({source:t,container:r,...a}){const{axis:e}=a;t&&(r=t);const o=ne.get(r)??new Map;ne.set(r,o);const s=a.target??"self",c=o.get(s)??{},f=e+(a.offset??[]).join(",");return c[f]||(c[f]=!a.target&&Be()?new ScrollTimeline({source:r,axis:e}):ct({container:r,...a})),c[f]}function de(t,r){let a;const e=()=>{const{currentTime:o}=r,c=(o===null?0:o.value)/100;a!==c&&t(c),a=c};return O.preUpdate(e,!0),()=>le(e)}function ut(t,r){const a=fe(r);return t.attachTimeline({timeline:r.target?void 0:a,observe:e=>(e.pause(),de(o=>{e.time=e.duration*o},a))})}function ft(t){return t.length===2}function dt(t,r){return ft(t)?ue(a=>{t(a[r.axis].progress,a)},r):de(t,fe(r))}function mt(t,{axis:r="y",container:a=document.scrollingElement,...e}={}){if(!a)return se;const o={axis:r,container:a,...e};return typeof t=="function"?dt(t,o):ut(t,o)}const vt=typeof window>"u";function gt(){return{scrollX:N(0),scrollY:N(0),scrollXProgress:N(0),scrollYProgress:N(0)}}function ht(t={}){const r=gt();return he(a=>{if(vt)return;const e=mt((o,{x:s,y:c})=>{r.scrollX.set(s.current),r.scrollXProgress.set(s.progress),r.scrollY.set(c.current),r.scrollYProgress.set(c.progress)},{offset:A(t.offset),axis:A(t.axis),container:Q(t.container),target:Q(t.target)});a(()=>{e()})},{flush:"post"}),r}const pt={class:"h-full w-full"},_t={class:"grid grid-cols-[1fr_38px_38px] gap-8 font-semibold h-full w-full items-center"},xt=20,yt=j({__name:"index",setup(t){const r=L(null),a=L(!1),{scrollYProgress:e}=ht(),o={scaleX:e,position:"fixed",top:"-1px",left:0,right:0,height:"4px",originX:0,backgroundColor:"#ff0088"},s=[{label:"主页",path:"/dashboard"},{label:"关于",path:"/about"}],c=_e(),f=pe(()=>c.path),n=()=>{const i=r.value?.scrollTop??0,b=window.scrollY||window.pageYOffset||0,x=Math.max(i,b);a.value=x>xt};return K(()=>{r.value&&r.value.addEventListener("scroll",n),window.addEventListener("scroll",n),n()}),ie(()=>{r.value&&r.value.removeEventListener("scroll",n),window.removeEventListener("scroll",n)}),(i,b)=>{const x=J("router-link"),E=J("router-view");return G(),Y("div",pt,[H(A(Ue).div,{id:"scroll-indicator",style:o}),B("div",{class:W(["grid place-items-center bg-transparent fixed z-10 w-full left-0 transition-all duration-500",A(a)?"top-0 translate-y-0 py-2":"top-[2em]"])},[B("div",{class:W(["flex items-center h-16 px-6  bg-[hsla(0,0%,100%,0.05)] backdrop-filter backdrop-blur-[10px] border border-[rgba(255,255,255,0.6)] w-[90%] md:w-[60%] transition-all duration-500 relative",A(a)?"rounded-[16px]":"rounded-[50px]"])},[B("nav",_t,[B("div",null,[H(Ne)]),(G(),Y(xe,null,we(s,p=>H(x,{key:p.path,to:p.path,class:W(["flex items-center text-[18px] transition-all duration-300 relative group",A(f)===p.path?"text-[var(--color-1)]":"text-white hover:text-[var(--color-1)]"])},{default:be(()=>[ye(Ee(p.label)+" ",1),B("span",{class:W(["absolute bottom-[-4px] left-0 h-1 bg-gradient-to-r from-[var(--color-1)] to-[var(--color-2)] transition-all duration-300",A(f)===p.path?"w-full":"w-0 group-hover:w-full"])},null,2)]),_:2},1032,["to","class"])),64))])],2)],2),B("div",{ref_key:"contentRef",ref:r,class:"h-full w-full overflow-y-auto"},[H(E)],512)])}}});export{yt as default};
