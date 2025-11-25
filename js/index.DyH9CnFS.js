import{d as X,u as H,r as y,o as O,n as Y,a as V,w as q,c as z,b as N,e as W,f as Z,g as U,h as B,i as F,j as k,F as j,k as K,l as $,m as G,p as J,q as Q,t as ee}from"./index.Df182CeH.js";const te=`#version 300 es
precision mediump float;

in vec2 a_position;
out vec2 vUv;

void main() {
    vUv = .5 * (a_position + 1.);
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,ae=`#version 300 es
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
`,re=X({__name:"index",props:{imageData:{},params:{default:()=>({patternScale:2,refraction:.015,edge:1,patternBlur:.005,liquid:.07,speed:.3})}},setup(E){const n=E,f=H("canvasRef"),e=y(null),s=y({}),_=y(0),v=y(0),m=y();function t(){!e.value||!s.value||(e.value.uniform1f(s.value.u_edge,n.params.edge),e.value.uniform1f(s.value.u_patternBlur,n.params.patternBlur),e.value.uniform1f(s.value.u_time,0),e.value.uniform1f(s.value.u_patternScale,n.params.patternScale),e.value.uniform1f(s.value.u_refraction,n.params.refraction),e.value.uniform1f(s.value.u_liquid,n.params.liquid))}function r(u,a,d){const g=u.createShader(d);return g?(u.shaderSource(g,a),u.compileShader(g),u.getShaderParameter(g,u.COMPILE_STATUS)?g:(console.error("An error occurred compiling the shaders: "+u.getShaderInfoLog(g)),u.deleteShader(g),null)):null}function T(u,a){const d={},g=a.getProgramParameter(u,a.ACTIVE_UNIFORMS);for(let p=0;p<g;p++){const A=a.getActiveUniform(u,p)?.name;A&&(d[A]=a.getUniformLocation(u,A))}return d}function x(){const u=f.value,a=u?.getContext("webgl2",{antialias:!0,alpha:!0});if(!u||!a)return;const d=r(a,te,a.VERTEX_SHADER),g=r(a,ae,a.FRAGMENT_SHADER),p=a.createProgram();if(!p||!d||!g)return;if(a.attachShader(p,d),a.attachShader(p,g),a.linkProgram(p),!a.getProgramParameter(p,a.LINK_STATUS))return console.error("Unable to initialize the shader program: "+a.getProgramInfoLog(p)),null;const A=T(p,a);s.value=A;const C=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,S),a.bufferData(a.ARRAY_BUFFER,C,a.STATIC_DRAW),a.useProgram(p);const P=a.getAttribLocation(p,"a_position");a.enableVertexAttribArray(P),a.bindBuffer(a.ARRAY_BUFFER,S),a.vertexAttribPointer(P,2,a.FLOAT,!1,0,0),e.value=a}function L(){if(!f.value||!e.value||!s.value||!n.imageData)return;const u=n.imageData.width/n.imageData.height;e.value.uniform1f(s.value.u_img_ratio,u);const a=1e3;f.value.width=a*devicePixelRatio,f.value.height=a*devicePixelRatio,e.value.viewport(0,0,f.value.height,f.value.height),e.value.uniform1f(s.value.u_ratio,1),e.value.uniform1f(s.value.u_img_ratio,u)}function R(){if(!e.value||!s.value)return;const u=e.value.getParameter(e.value.TEXTURE_BINDING_2D);u&&e.value.deleteTexture(u);const a=e.value.createTexture();e.value.activeTexture(e.value.TEXTURE0),e.value.bindTexture(e.value.TEXTURE_2D,a),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_MIN_FILTER,e.value.LINEAR),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_MAG_FILTER,e.value.LINEAR),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_WRAP_S,e.value.CLAMP_TO_EDGE),e.value.texParameteri(e.value.TEXTURE_2D,e.value.TEXTURE_WRAP_T,e.value.CLAMP_TO_EDGE),e.value.pixelStorei(e.value.UNPACK_ALIGNMENT,1);try{e.value.texImage2D(e.value.TEXTURE_2D,0,e.value.RGBA,n.imageData?.width,n.imageData?.height,0,e.value.RGBA,e.value.UNSIGNED_BYTE,n.imageData?.data),e.value.uniform1i(s.value.u_image_texture,0)}catch(d){console.error("Error uploading texture:",d)}}function h(u){if(!e.value||!s.value)return;const a=u-v.value;v.value=u,_.value+=a*n.params.speed,e.value.uniform1f(s.value.u_time,_.value),e.value.drawArrays(e.value.TRIANGLE_STRIP,0,4),m.value=requestAnimationFrame(h)}function M(){m.value&&cancelAnimationFrame(m.value),v.value=performance.now(),m.value=requestAnimationFrame(h)}return O(async()=>{await Y(),x(),t(),L(),R(),M(),window.addEventListener("resize",L)}),V(()=>{m.value&&cancelAnimationFrame(m.value),window.removeEventListener("resize",L)}),q(()=>n.params,()=>{t()},{deep:!0}),q(()=>n.imageData,()=>{R(),L()},{deep:!0}),(u,a)=>(N(),z("canvas",{ref_key:"canvasRef",ref:f,class:"block w-10 h-10 object-contain"},null,512))}}),oe="data:image/svg+xml,%3csvg%20width='67'%20height='58'%20viewBox='0%200%2067%2058'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.948242%200.144043H22.837C22.837%200.144043%2032.0299%2017.1763%2038.658%2027.6444C38.9372%2028.0853%2039.0747%2028.3453%2039.3749%2028.7722C39.6552%2029.1709%2039.813%2029.3963%2040.1365%2029.7609C40.4407%2030.1038%2040.3868%2030.0701%2040.7353%2030.4551C40.9256%2030.6654%2041.0901%2030.8243%2041.4999%2031.0893C41.8709%2031.3291%2042.5065%2031.4903%2042.9886%2031.3276C43.3618%2031.2017%2043.4628%2031.1547%2043.7801%2030.9768C44.8913%2030.354%2046.0324%2028.0858%2046.0324%2028.0858L58.7905%204.81785H47.6028V0.144994L66.7607%200.144043L51.406%2026.7942C51.406%2026.7942%2049.8437%2029.2994%2048.7246%2031.2443C48.5422%2031.5613%2047.7633%2032.7078%2047.46%2033.0943C46.8867%2033.825%2046.5664%2034.2616%2046.0324%2034.7887C45.5209%2035.2936%2045.0161%2035.5409%2044.6578%2035.6848C44.1037%2035.9073%2043.511%2036.0194%2042.9158%2036.068C42.4088%2036.1093%2042.0672%2036.1359%2041.563%2036.068C40.9342%2035.9833%2040.8891%2035.9616%2040.1365%2035.6848C39.82%2035.5684%2039.2914%2035.2543%2038.7932%2034.8951C38.2398%2034.496%2037.8624%2034.1401%2037.2402%2033.482C36.6925%2032.9026%2036.4509%2032.5591%2036.008%2031.8962C35.543%2031.2003%2035.1813%2030.8154%2034.7421%2030.103C28.7742%2020.4232%2020.2999%204.81785%2020.2999%204.81785H9.0302L33.8982%2048.0406L38.658%2039.8352C38.658%2039.8352%2039.3105%2040.7251%2041.6%2040.6509C43.7041%2040.5826%2044.2102%2039.8352%2044.2102%2039.8352L33.8982%2057.384L5.50866%208.16941L3.60187%204.81785L0.948242%200.144043Z'%20fill='%230b0b0b'/%3e%3ccircle%20cx='42.4365'%20cy='14.686'%20r='4.78514'%20fill='%230b0b0b'/%3e%3c/svg%3e";function ie(E){const n=document.createElement("canvas"),f=n.getContext("2d");return new Promise((e,s)=>{if(!E||!f){s(new Error("Invalid file or context"));return}const _=new Image;_.crossOrigin="anonymous",_.onload=function(){E.type==="image/svg+xml"&&(_.width=1e3,_.height=1e3);const v=1e3,m=500;let t=_.naturalWidth,r=_.naturalHeight;(t>v||r>v||t<m||r<m)&&(t>r?t>v?(r=Math.round(r*v/t),t=v):t<m&&(r=Math.round(r*m/t),t=m):r>v?(t=Math.round(t*v/r),r=v):r<m&&(t=Math.round(t*m/r),r=m)),n.width=t,n.height=r;const T=document.createElement("canvas");T.width=t,T.height=r;const x=T.getContext("2d");if(!x){s(new Error("Failed to acquire 2D context for shape canvas"));return}x.drawImage(_,0,0,t,r);const R=x.getImageData(0,0,t,r).data,h=new Array(t*r).fill(!1);for(let o=0;o<r;o++)for(let i=0;i<t;i++){const l=(o*t+i)*4,c=R[l],b=R[l+1],I=R[l+2],D=R[l+3];h[o*t+i]=!(c===255&&b===255&&I===255&&D===255||D===0)}function M(o,i){return o<0||o>=t||i<0||i>=r?!1:h[i*t+o]}const u=new Array(t*r).fill(!1);for(let o=0;o<r;o++)for(let i=0;i<t;i++){const l=o*t+i;if(!h[l])continue;let c=!1;for(let b=o-1;b<=o+1&&!c;b++)for(let I=i-1;I<=i+1&&!c;I++)M(I,b)||(c=!0);c&&(u[l]=!0)}const a=new Array(t*r).fill(!1);for(let o=1;o<r-1;o++)for(let i=1;i<t-1;i++){const l=o*t+i;h[l]&&h[l-1]&&h[l+1]&&h[l-t]&&h[l+t]&&(a[l]=!0)}const d=new Float32Array(t*r).fill(0),g=new Float32Array(t*r).fill(0),p=.01,A=300;function C(o,i,l){return o<0||o>=t||i<0||i>=r||!h[i*t+o]?0:l[i*t+o]}for(let o=0;o<A;o++){for(let i=0;i<r;i++)for(let l=0;l<t;l++){const c=i*t+l;if(!h[c]||u[c]){g[c]=0;continue}const b=C(l+1,i,d)+C(l-1,i,d)+C(l,i+1,d)+C(l,i-1,d);g[c]=(p+b)/4}d.set(g)}let S=0;for(let o=0;o<t*r;o++)d[o]>S&&(S=d[o]);const P=2,w=f.createImageData(t,r);for(let o=0;o<r;o++)for(let i=0;i<t;i++){const l=o*t+i,c=l*4;if(!h[l])w.data[c]=255,w.data[c+1]=255,w.data[c+2]=255,w.data[c+3]=255;else{const b=d[l]/S,D=255*(1-Math.pow(b,P));w.data[c]=D,w.data[c+1]=D,w.data[c+2]=D,w.data[c+3]=255}}f.putImageData(w,0,0),n.toBlob(o=>{if(!o){s(new Error("Failed to create PNG blob"));return}e({imageData:w,pngBlob:o})},"image/png")},_.onerror=()=>s(new Error("Failed to load image")),_.src=URL.createObjectURL(E)})}const ne=X({__name:"index",setup(E){const n=y(null);return O(async()=>{try{const e=await(await fetch(oe)).blob(),s=new File([e],"logo.svg",{type:"image/svg+xml"}),{imageData:_}=await ie(s);n.value=_}catch(f){console.error("Error loading image:",f)}}),(f,e)=>(N(),W(re,{"image-data":n.value,params:{patternScale:5,refraction:.1,edge:1,patternBlur:.005,liquid:.07,speed:.3}},null,8,["image-data"]))}}),le={class:"h-full w-full"},ue={class:"grid grid-cols-[1fr_50px_50px] gap-6 font-semibold h-full w-full items-center"},se={class:"text-white"},ce=20,ve=X({__name:"index",setup(E){const n=y(null),f=y(!1),e=[{label:"Home",path:"/"},{label:"About",path:"/about"}],s=$(),_=Z(()=>s.path),v=()=>{const m=n.value?.scrollTop??0,t=window.scrollY||window.pageYOffset||0,r=Math.max(m,t);f.value=r>ce};return O(()=>{n.value&&n.value.addEventListener("scroll",v),window.addEventListener("scroll",v),v()}),V(()=>{n.value&&n.value.removeEventListener("scroll",v),window.removeEventListener("scroll",v)}),(m,t)=>{const r=G("router-link"),T=G("router-view");return N(),z("div",le,[U("div",{class:B(["grid place-items-center bg-transparent fixed z-10 w-full left-0 transition-all duration-500",F(f)?"top-0 translate-y-0 py-2":"top-[2em]"])},[U("div",{class:B(["flex items-center h-16 px-6  bg-[hsla(0,0%,100%,0.05)] backdrop-filter backdrop-blur-[10px] border border-[rgba(255,255,255,0.6)] w-[90%] md:w-[60%] transition-all duration-500",F(f)?"rounded-[16px]":"rounded-[50px]"])},[U("nav",ue,[U("div",se,[k(ne)]),(N(),z(j,null,K(e,x=>k(r,{key:x.path,to:x.path,class:B(["flex items-center text-[14px] transition-all duration-300 relative group",F(_)===x.path?"text-[var(--color-1)]":"text-white hover:text-[var(--color-1)]"])},{default:J(()=>[Q(ee(x.label)+" ",1),U("span",{class:B(["absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--color-1)] to-[var(--color-2)] transition-all duration-300",F(_)===x.path?"w-full":"w-0 group-hover:w-full"])},null,2)]),_:2},1032,["to","class"])),64))])],2)],2),U("div",{ref_key:"contentRef",ref:n,class:"h-full w-full overflow-y-auto"},[k(T)],512)])}}});export{ve as default};
