import{j as ml,M as gl}from"./index.qobDv5Ls.js";import{d as hr,h as Wt,r as sn,u as vs,w as sr,o as fr,n as Is,a as Ms,c as yn,b as jt,j as ss,F as ho,m as fo,g as ar,v as Fs,q as po,t as as,k as an,l as _l,e as mo,s as xl,x as vl}from"./index.BycUjeE8.js";const Ml=["onMouseenter"],yl=hr({__name:"index",props:{sentence:{default:"True Focus"},manualMode:{type:Boolean,default:!1},blurAmount:{default:5},borderColor:{default:"green"},glowColor:{default:"rgba(0, 255, 0, 0.6)"},animationDuration:{default:.5},pauseBetweenAnimations:{default:1}},setup(r){const e=r,t=Wt(()=>e.sentence.split(" ")),n=sn(0),i=sn(null),s=vs("containerRef"),o=sn([]),a=sn({x:0,y:0,width:0,height:0});let c=null;sr([n,()=>t.value.length],async()=>{if(n.value===null||n.value===-1||!o.value[n.value]||!s.value)return;await Is();const d=s.value.getBoundingClientRect(),g=o.value[n.value].getBoundingClientRect();a.value={x:g.left-d.left,y:g.top-d.top,width:g.width,height:g.height}},{immediate:!0});const l=d=>{e.manualMode&&(i.value=d,n.value=d)},u=()=>{e.manualMode&&(n.value=i.value||0)},f=(d,g)=>{d&&(o.value[g]=d)};return fr(async()=>{if(await Is(),o.value[0]&&s.value){const d=s.value.getBoundingClientRect(),g=o.value[0].getBoundingClientRect();a.value={x:g.left-d.left,y:g.top-d.top,width:g.width,height:g.height}}sr([()=>e.manualMode,()=>e.animationDuration,()=>e.pauseBetweenAnimations,()=>t.value],()=>{c&&(clearInterval(c),c=null),e.manualMode||(c=setInterval(()=>{n.value=(n.value+1)%t.value.length},(e.animationDuration+e.pauseBetweenAnimations)*1e3))},{immediate:!0})}),Ms(()=>{c&&clearInterval(c)}),(d,g)=>(jt(),yn("div",{ref_key:"containerRef",ref:s,class:"relative flex flex-wrap justify-center items-center gap-[1em]"},[(jt(!0),yn(ho,null,fo(t.value,(m,p)=>(jt(),yn("span",{key:p,ref_for:!0,ref:h=>f(h,p),class:"relative font-black text-2xl text-cyan-400 transition-[filter,color] duration-300 ease-in-out cursor-pointer",style:Fs({filter:p===n.value?"blur(0px)":`blur(${r.blurAmount}px)`,"--border-color":r.borderColor,"--glow-color":r.glowColor,transition:`filter ${r.animationDuration}s ease`}),onMouseenter:h=>l(p),onMouseleave:u},as(m),45,Ml))),128)),ss(ar(ml).div,{class:"top-0 left-0 box-content absolute border-none pointer-events-none",animate:{x:a.value.x,y:a.value.y,width:a.value.width,height:a.value.height,opacity:n.value>=0?1:0},transition:{duration:r.animationDuration},style:Fs({"--border-color":r.borderColor,"--glow-color":r.glowColor})},{default:po(()=>[...g[0]||(g[0]=[an("span",{class:"top-[-10px] left-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-r-0 border-b-0 rounded-[3px] w-4 h-4 transition-none"},null,-1),an("span",{class:"top-[-10px] right-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-b-0 border-l-0 rounded-[3px] w-4 h-4 transition-none"},null,-1),an("span",{class:"bottom-[-10px] left-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-t-0 border-r-0 rounded-[3px] w-4 h-4 transition-none"},null,-1),an("span",{class:"right-[-10px] bottom-[-10px] absolute [filter:drop-shadow(0_0_4px_var(--border-color,#fff))] border-[3px] border-[var(--border-color,#fff)] border-t-0 border-l-0 rounded-[3px] w-4 h-4 transition-none"},null,-1)])]),_:1},8,["animate","transition","style"])],512))}}),bl=hr({__name:"index",props:{text:{default:""},delay:{default:200},className:{default:""},animateBy:{default:"words"},direction:{default:"top"},threshold:{default:.1},rootMargin:{default:"0px"},animationFrom:{},animationTo:{},easing:{type:Function,default:r=>r},onAnimationComplete:{},stepDuration:{default:.35}},setup(r){const e=r,t=(v,S)=>{const C=new Set([...Object.keys(v),...S.flatMap(x=>Object.keys(x))]),R={};for(const x of C)R[x]=[v[x],...S.map(A=>A[x])];return R},n=Wt(()=>e.animateBy==="words"?e.text.split(" "):e.text.split("")),i=Wt(()=>e.direction==="top"?{filter:"blur(10px)",opacity:0,y:-50}:{filter:"blur(10px)",opacity:0,y:50}),s=Wt(()=>[{filter:"blur(5px)",opacity:.5,y:e.direction==="top"?5:-5},{filter:"blur(0px)",opacity:1,y:0}]),o=Wt(()=>e.animationFrom??i.value),a=Wt(()=>e.animationTo??s.value),c=Wt(()=>a.value.length+1),l=Wt(()=>e.stepDuration*(c.value-1)),u=Wt(()=>Array.from({length:c.value},(v,S)=>c.value===1?0:S/(c.value-1))),f=sn(!1),d=sn(0),g=sn(!1),m=vs("rootRef");let p=null;const h=()=>{m.value&&(p=new IntersectionObserver(([v])=>{v.isIntersecting&&(f.value=!0,p?.unobserve(m.value))},{threshold:e.threshold,rootMargin:e.rootMargin}),p.observe(m.value))},_=()=>t(o.value,a.value),b=v=>({duration:l.value,times:u.value,delay:v*e.delay/1e3,ease:e.easing}),E=v=>{v===n.value.length-1&&!g.value&&e.onAnimationComplete&&(g.value=!0,e.onAnimationComplete())};return fr(()=>{h()}),Ms(()=>{p?.disconnect()}),sr([()=>e.threshold,()=>e.rootMargin],()=>{p?.disconnect(),h()}),sr([()=>e.delay,()=>e.stepDuration,()=>e.animateBy,()=>e.direction],()=>{d.value++,g.value=!1}),(v,S)=>(jt(),yn("p",{ref_key:"rootRef",ref:m,class:_l(["blur-text",r.className,"flex","flex-wrap"])},[(jt(!0),yn(ho,null,fo(n.value,(C,R)=>(jt(),mo(ar(gl),{key:`${d.value}-${R}`,tag:"span",initial:o.value,animate:f.value?_():o.value,transition:b(R),style:{display:"inline-block",willChange:"transform, filter, opacity"},onAnimationComplete:()=>E(R)},{default:po(()=>[xl(as(C===" "?" ":C)+as(r.animateBy==="words"&&R<n.value.length-1?" ":""),1)]),_:2},1032,["initial","animate","transition","onAnimationComplete"]))),128))],2))}});const ys="145",Un={ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sl=0,Ns=1,wl=2,go=1,El=2,vi=3,ii=0,wt=1,on=2,ln=0,ti=1,Os=2,Us=3,zs=4,Tl=5,Qn=100,Al=101,Cl=102,Bs=103,ks=104,Ll=200,Rl=201,Dl=202,Pl=203,_o=204,xo=205,Il=206,Fl=207,Nl=208,Ol=209,Ul=210,zl=0,Bl=1,kl=2,os=3,Gl=4,Vl=5,Hl=6,Wl=7,vo=0,ql=1,Xl=2,Yt=0,jl=1,Yl=2,Zl=3,$l=4,Kl=5,Mo=300,ri=301,si=302,ls=303,cs=304,dr=306,us=1e3,Lt=1001,hs=1002,lt=1003,Gs=1004,Vs=1005,yt=1006,Jl=1007,pr=1008,Tn=1009,Ql=1010,ec=1011,yo=1012,tc=1013,_n=1014,xn=1015,wi=1016,nc=1017,ic=1018,ni=1020,rc=1021,sc=1022,Nt=1023,ac=1024,oc=1025,bn=1026,ai=1027,lc=1028,cc=1029,uc=1030,hc=1031,fc=1033,Er=33776,Tr=33777,Ar=33778,Cr=33779,Hs=35840,Ws=35841,qs=35842,Xs=35843,dc=36196,js=37492,Ys=37496,Zs=37808,$s=37809,Ks=37810,Js=37811,Qs=37812,ea=37813,ta=37814,na=37815,ia=37816,ra=37817,sa=37818,aa=37819,oa=37820,la=37821,ca=36492,An=3e3,Ge=3001,pc=3200,mc=3201,gc=0,_c=1,qt="srgb",vn="srgb-linear",Lr=7680,xc=519,ua=35044,ha="300 es",fs=1035;class Pn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fa=1234567;const bi=Math.PI/180,or=180/Math.PI;function ci(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]+"-"+nt[e&255]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[t&63|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[n&255]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function bs(r,e){return(r%e+e)%e}function vc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Mc(r,e,t){return r!==e?(t-r)/(e-r):0}function Si(r,e,t){return(1-t)*r+t*e}function yc(r,e,t,n){return Si(r,e,1-Math.exp(-t*n))}function bc(r,e=1){return e-Math.abs(bs(r,e*2)-e)}function Sc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function wc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ec(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Tc(r,e){return r+Math.random()*(e-r)}function Ac(r){return r*(.5-Math.random())}function Cc(r){r!==void 0&&(fa=r);let e=fa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lc(r){return r*bi}function Rc(r){return r*or}function ds(r){return(r&r-1)===0&&r!==0}function Dc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pc(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),g=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*f,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*f,a*l);break;case"ZXZ":r.set(c*f,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*m,c*g,a*l);break;case"YXY":r.set(c*g,a*u,c*m,a*l);break;case"ZYZ":r.set(c*m,c*g,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ic=Object.freeze({__proto__:null,DEG2RAD:bi,RAD2DEG:or,generateUUID:ci,clamp:at,euclideanModulo:bs,mapLinear:vc,inverseLerp:Mc,lerp:Si,damp:yc,pingpong:bc,smoothstep:Sc,smootherstep:wc,randInt:Ec,randFloat:Tc,randFloatSpread:Ac,seededRandom:Cc,degToRad:Lc,radToDeg:Rc,isPowerOfTwo:ds,ceilPowerOfTwo:Dc,floorPowerOfTwo:lr,setQuaternionFromProperEuler:Pc,normalize:ot,denormalize:Mi});class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],g=n[5],m=n[8],p=i[0],h=i[3],_=i[6],b=i[1],E=i[4],v=i[7],S=i[2],C=i[5],R=i[8];return s[0]=o*p+a*b+c*S,s[3]=o*h+a*E+c*C,s[6]=o*_+a*v+c*R,s[1]=l*p+u*b+f*S,s[4]=l*h+u*E+f*C,s[7]=l*_+u*v+f*R,s[2]=d*p+g*b+m*S,s[5]=d*h+g*E+m*C,s[8]=d*_+g*v+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,g=l*s-o*c,m=t*f+n*d+i*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/m;return e[0]=f*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=g*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],u=i[7];return i[0]=t*s+n*c,i[3]=t*o+n*l,i[6]=t*a+n*u,i[1]=-n*s+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function bo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function er(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Rr={[qt]:{[vn]:Sn},[vn]:{[qt]:er}},Et={legacyMode:!0,get workingColorSpace(){return vn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Rr[e]&&Rr[e][t]!==void 0){const n=Rr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},So={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ze={r:0,g:0,b:0},Tt={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Dr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ii(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vn){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vn){if(e=bs(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Dr(o,s,e+1/3),this.g=Dr(o,s,e),this.b=Dr(o,s,e-1/3)}return Et.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Et.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Et.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Et.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Et.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=qt){const n=So[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Et.fromWorkingColorSpace(Ii(this,Ze),e),at(Ze.r*255,0,255)<<16^at(Ze.g*255,0,255)<<8^at(Ze.b*255,0,255)<<0}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vn){Et.fromWorkingColorSpace(Ii(this,Ze),t);const n=Ze.r,i=Ze.g,s=Ze.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vn){return Et.fromWorkingColorSpace(Ii(this,Ze),t),e.r=Ze.r,e.g=Ze.g,e.b=Ze.b,e}getStyle(e=qt){return Et.fromWorkingColorSpace(Ii(this,Ze),e),e!==qt?`color(${e} ${Ze.r} ${Ze.g} ${Ze.b})`:`rgb(${Ze.r*255|0},${Ze.g*255|0},${Ze.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tt),Tt.h+=e,Tt.s+=t,Tt.l+=n,this.setHSL(Tt.h,Tt.s,Tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(Pi);const n=Si(Tt.h,Pi.h,t),i=Si(Tt.s,Pi.s,t),s=Si(Tt.l,Pi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=So;let Bn;class wo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=cr("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Sn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Eo{constructor(e=null){this.isSource=!0,this.uuid=ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Pr(i[o].image)):s.push(Pr(i[o]))}else s=Pr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fc=0;class Rt extends Pn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Lt,i=Lt,s=yt,o=pr,a=Nt,c=Tn,l=1,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=ci(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Mo;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],g=c[5],m=c[9],p=c[2],h=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-p)<.01&&Math.abs(m-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+p)<.1&&Math.abs(m+h)<.1&&Math.abs(l+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(g+1)/2,S=(_+1)/2,C=(u+d)/4,R=(f+p)/4,x=(m+h)/4;return E>v&&E>S?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=C/n,s=R/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((h-m)*(h-m)+(f-p)*(f-p)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(h-m)/b,this.y=(f-p)/b,this.z=(d-u)/b,this.w=Math.acos((l+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cn extends Pn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class To extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nc extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],g=s[o+1],m=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=m,e[t+3]=p;return}if(f!==p||c!==d||l!==g||u!==m){let h=1-a;const _=c*d+l*g+u*m+f*p,b=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const S=Math.sqrt(E),C=Math.atan2(S,_*b);h=Math.sin(h*C)/S,a=Math.sin(a*C)/S}const v=a*b;if(c=c*h+d*v,l=l*h+g*v,u=u*h+m*v,f=f*h+p*v,h===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],d=s[o+1],g=s[o+2],m=s[o+3];return e[t]=a*m+u*f+c*g-l*d,e[t+1]=c*m+u*d+l*f-a*g,e[t+2]=l*m+u*g+a*d-c*f,e[t+3]=u*m-a*f-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),d=c(n/2),g=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*g*m,this._y=l*g*f-d*u*m,this._z=l*u*m+d*g*f,this._w=l*u*f-d*g*m;break;case"YXZ":this._x=d*u*f+l*g*m,this._y=l*g*f-d*u*m,this._z=l*u*m-d*g*f,this._w=l*u*f+d*g*m;break;case"ZXY":this._x=d*u*f-l*g*m,this._y=l*g*f+d*u*m,this._z=l*u*m+d*g*f,this._w=l*u*f-d*g*m;break;case"ZYX":this._x=d*u*f-l*g*m,this._y=l*g*f+d*u*m,this._z=l*u*m-d*g*f,this._w=l*u*f+d*g*m;break;case"YZX":this._x=d*u*f+l*g*m,this._y=l*g*f+d*u*m,this._z=l*u*m-d*g*f,this._w=l*u*f-d*g*m;break;case"XZY":this._x=d*u*f-l*g*m,this._y=l*g*f-d*u*m,this._z=l*u*m+d*g*f,this._w=l*u*f+d*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(o-i)*g}else if(n>a&&n>f){const g=2*Math.sqrt(1+n-a-f);this._w=(u-c)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+l)/g}else if(a>f){const g=2*Math.sqrt(1+a-n-f);this._w=(s-l)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-n-a);this._w=(o-i)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,f=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+u*-a-f*-o,this.y=u*c+d*-o+f*-s-l*-a,this.z=f*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new N,da=new Ln;class Ei{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],d=e[c+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),d=e.getZ(c);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)hn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox),Fr.applyMatrix4(e.matrixWorld),this.union(Fr);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Fi.subVectors(this.max,mi),kn.subVectors(e.a,mi),Gn.subVectors(e.b,mi),Vn.subVectors(e.c,mi),Kt.subVectors(Gn,kn),Jt.subVectors(Vn,Gn),fn.subVectors(kn,Vn);let t=[0,-Kt.z,Kt.y,0,-Jt.z,Jt.y,0,-fn.z,fn.y,Kt.z,0,-Kt.x,Jt.z,0,-Jt.x,fn.z,0,-fn.x,-Kt.y,Kt.x,0,-Jt.y,Jt.x,0,-fn.y,fn.x,0];return!Nr(t,kn,Gn,Vn,Fi)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,kn,Gn,Vn,Fi))?!1:(Ni.crossVectors(Kt,Jt),t=[Ni.x,Ni.y,Ni.z],Nr(t,kn,Gn,Vn,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return hn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bt=[new N,new N,new N,new N,new N,new N,new N,new N],hn=new N,Fr=new Ei,kn=new N,Gn=new N,Vn=new N,Kt=new N,Jt=new N,fn=new N,mi=new N,Fi=new N,Ni=new N,dn=new N;function Nr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){dn.fromArray(r,s);const a=i.x*Math.abs(dn.x)+i.y*Math.abs(dn.y)+i.z*Math.abs(dn.z),c=e.dot(dn),l=t.dot(dn),u=n.dot(dn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Oc=new Ei,pa=new N,Oi=new N,Or=new N;class Ss{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Or.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Oi.set(0,0,1).multiplyScalar(e.radius):Oi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(pa.copy(e.center).add(Oi)),this.expandByPoint(pa.copy(e.center).sub(Oi)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new N,Ur=new N,Ui=new N,Qt=new N,zr=new N,zi=new N,Br=new N;class Uc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.direction).multiplyScalar(t).add(this.origin),kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ur.copy(e).add(t).multiplyScalar(.5),Ui.copy(t).sub(e).normalize(),Qt.copy(this.origin).sub(Ur);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ui),a=Qt.dot(this.direction),c=-Qt.dot(Ui),l=Qt.lengthSq(),u=Math.abs(1-o*o);let f,d,g,m;if(u>0)if(f=o*c-a,d=o*a-c,m=s*u,f>=0)if(d>=-m)if(d<=m){const p=1/u;f*=p,d*=p,g=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+d*(d+2*c)+l):d<=m?(f=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ui).multiplyScalar(d).add(Ur),g}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const n=kt.dot(this.direction),i=kt.dot(kt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,n,i,s){zr.subVectors(t,e),zi.subVectors(n,e),Br.crossVectors(zr,zi);let o=this.direction.dot(Br),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qt.subVectors(this.origin,e);const c=a*this.direction.dot(zi.crossVectors(Qt,zi));if(c<0)return null;const l=a*this.direction.dot(zr.cross(Qt));if(l<0||c+l>o)return null;const u=-a*Qt.dot(Br);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,f,d,g,m,p,h){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=d,_[3]=g,_[7]=m,_[11]=p,_[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hn.setFromMatrixColumn(e,0).length(),s=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,g=o*f,m=a*u,p=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=g+m*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=m+g*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,g=c*f,m=l*u,p=l*f;t[0]=d+p*a,t[4]=m*a-g,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=g*a-m,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,g=c*f,m=l*u,p=l*f;t[0]=d-p*a,t[4]=-o*f,t[8]=m+g*a,t[1]=g+m*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,g=o*f,m=a*u,p=a*f;t[0]=c*u,t[4]=m*l-g,t[8]=d*l+p,t[1]=c*f,t[5]=p*l+d,t[9]=g*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,g=o*l,m=a*c,p=a*l;t[0]=c*u,t[4]=p-d*f,t[8]=m*f+g,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=g*f+m,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*c,g=o*l,m=a*c,p=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+p,t[5]=o*u,t[9]=g*f-m,t[2]=m*f-g,t[6]=a*u,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zc,e,Bc)}lookAt(e,t,n){const i=this.elements;return dt.subVectors(e,t),dt.lengthSq()===0&&(dt.z=1),dt.normalize(),en.crossVectors(n,dt),en.lengthSq()===0&&(Math.abs(n.z)===1?dt.x+=1e-4:dt.z+=1e-4,dt.normalize(),en.crossVectors(n,dt)),en.normalize(),Bi.crossVectors(dt,en),i[0]=en.x,i[4]=Bi.x,i[8]=dt.x,i[1]=en.y,i[5]=Bi.y,i[9]=dt.y,i[2]=en.z,i[6]=Bi.z,i[10]=dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],g=n[13],m=n[2],p=n[6],h=n[10],_=n[14],b=n[3],E=n[7],v=n[11],S=n[15],C=i[0],R=i[4],x=i[8],A=i[12],O=i[1],$=i[5],ee=i[9],k=i[13],P=i[2],q=i[6],Y=i[10],K=i[14],V=i[3],F=i[7],z=i[11],Q=i[15];return s[0]=o*C+a*O+c*P+l*V,s[4]=o*R+a*$+c*q+l*F,s[8]=o*x+a*ee+c*Y+l*z,s[12]=o*A+a*k+c*K+l*Q,s[1]=u*C+f*O+d*P+g*V,s[5]=u*R+f*$+d*q+g*F,s[9]=u*x+f*ee+d*Y+g*z,s[13]=u*A+f*k+d*K+g*Q,s[2]=m*C+p*O+h*P+_*V,s[6]=m*R+p*$+h*q+_*F,s[10]=m*x+p*ee+h*Y+_*z,s[14]=m*A+p*k+h*K+_*Q,s[3]=b*C+E*O+v*P+S*V,s[7]=b*R+E*$+v*q+S*F,s[11]=b*x+E*ee+v*Y+S*z,s[15]=b*A+E*k+v*K+S*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],g=e[14],m=e[3],p=e[7],h=e[11],_=e[15];return m*(+s*c*f-i*l*f-s*a*d+n*l*d+i*a*g-n*c*g)+p*(+t*c*g-t*l*d+s*o*d-i*o*g+i*l*u-s*c*u)+h*(+t*l*f-t*a*g-s*o*f+n*o*g+s*a*u-n*l*u)+_*(-i*a*u-t*c*f+t*a*d+i*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],g=e[11],m=e[12],p=e[13],h=e[14],_=e[15],b=f*h*l-p*d*l+p*c*g-a*h*g-f*c*_+a*d*_,E=m*d*l-u*h*l-m*c*g+o*h*g+u*c*_-o*d*_,v=u*p*l-m*f*l+m*a*g-o*p*g-u*a*_+o*f*_,S=m*f*c-u*p*c-m*a*d+o*p*d+u*a*h-o*f*h,C=t*b+n*E+i*v+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(p*d*s-f*h*s-p*i*g+n*h*g+f*i*_-n*d*_)*R,e[2]=(a*h*s-p*c*s+p*i*l-n*h*l-a*i*_+n*c*_)*R,e[3]=(f*c*s-a*d*s-f*i*l+n*d*l+a*i*g-n*c*g)*R,e[4]=E*R,e[5]=(u*h*s-m*d*s+m*i*g-t*h*g-u*i*_+t*d*_)*R,e[6]=(m*c*s-o*h*s-m*i*l+t*h*l+o*i*_-t*c*_)*R,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*g+t*c*g)*R,e[8]=v*R,e[9]=(m*f*s-u*p*s-m*n*g+t*p*g+u*n*_-t*f*_)*R,e[10]=(o*p*s-m*a*s+m*n*l-t*p*l-o*n*_+t*a*_)*R,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*g-t*a*g)*R,e[12]=S*R,e[13]=(u*p*i-m*f*i+m*n*d-t*p*d-u*n*h+t*f*h)*R,e[14]=(m*a*i-o*p*i-m*n*c+t*p*c+o*n*h-t*a*h)*R,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,g=s*u,m=s*f,p=o*u,h=o*f,_=a*f,b=c*l,E=c*u,v=c*f,S=n.x,C=n.y,R=n.z;return i[0]=(1-(p+_))*S,i[1]=(g+v)*S,i[2]=(m-E)*S,i[3]=0,i[4]=(g-v)*C,i[5]=(1-(d+_))*C,i[6]=(h+b)*C,i[7]=0,i[8]=(m+E)*R,i[9]=(h-b)*R,i[10]=(1-(d+p))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hn.set(i[0],i[1],i[2]).length();const o=Hn.set(i[4],i[5],i[6]).length(),a=Hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],At.copy(this);const l=1/s,u=1/o,f=1/a;return At.elements[0]*=l,At.elements[1]*=l,At.elements[2]*=l,At.elements[4]*=u,At.elements[5]*=u,At.elements[6]*=u,At.elements[8]*=f,At.elements[9]*=f,At.elements[10]*=f,t.setFromRotationMatrix(At),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),f=(t+e)*c,d=(n+i)*l,g=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new N,At=new tt,zc=new N(0,0,0),Bc=new N(1,1,1),en=new N,Bi=new N,dt=new N,ma=new tt,ga=new Ln;class Ti{constructor(e=0,t=0,n=0,i=Ti.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ga.setFromEuler(this),this.setFromQuaternion(ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ti.DefaultOrder="XYZ";Ti.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kc=0;const _a=new N,Wn=new Ln,Gt=new tt,ki=new N,gi=new N,Gc=new N,Vc=new Ln,xa=new N(1,0,0),va=new N(0,1,0),Ma=new N(0,0,1),Hc={type:"added"},ya={type:"removed"};class mt extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new N,t=new Ti,n=new Ln,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new St}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DefaultMatrixWorldAutoUpdate,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return _a.copy(e).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Gt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ki.copy(e):ki.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gt.lookAt(gi,ki,this.up):Gt.lookAt(ki,gi,this.up),this.quaternion.setFromRotationMatrix(Gt),i&&(Gt.extractRotation(i.matrixWorld),Wn.setFromRotationMatrix(Gt),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ya)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ya)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,Gc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DefaultUp=new N(0,1,0);mt.DefaultMatrixAutoUpdate=!0;mt.DefaultMatrixWorldAutoUpdate=!0;const Ct=new N,Vt=new N,kr=new N,Ht=new N,qn=new N,Xn=new N,ba=new N,Gr=new N,Vr=new N,Hr=new N;class Xt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ct.subVectors(e,t),i.cross(Ct);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ct.subVectors(i,t),Vt.subVectors(n,t),kr.subVectors(e,t);const o=Ct.dot(Ct),a=Ct.dot(Vt),c=Ct.dot(kr),l=Vt.dot(Vt),u=Vt.dot(kr),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(l*c-a*u)*d,m=(o*u-a*c)*d;return s.set(1-g-m,m,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ht),Ht.x>=0&&Ht.y>=0&&Ht.x+Ht.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Ht),c.set(0,0),c.addScaledVector(s,Ht.x),c.addScaledVector(o,Ht.y),c.addScaledVector(a,Ht.z),c}static isFrontFacing(e,t,n,i){return Ct.subVectors(n,t),Vt.subVectors(e,t),Ct.cross(Vt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),Vt.subVectors(this.a,this.b),Ct.cross(Vt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Xt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;qn.subVectors(i,n),Xn.subVectors(s,n),Gr.subVectors(e,n);const c=qn.dot(Gr),l=Xn.dot(Gr);if(c<=0&&l<=0)return t.copy(n);Vr.subVectors(e,i);const u=qn.dot(Vr),f=Xn.dot(Vr);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(qn,o);Hr.subVectors(e,s);const g=qn.dot(Hr),m=Xn.dot(Hr);if(m>=0&&g<=m)return t.copy(s);const p=g*l-c*m;if(p<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Xn,a);const h=u*m-g*f;if(h<=0&&f-u>=0&&g-m>=0)return ba.subVectors(s,i),a=(f-u)/(f-u+(g-m)),t.copy(i).addScaledVector(ba,a);const _=1/(h+p+d);return o=p*_,a=d*_,t.copy(n).addScaledVector(qn,o).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Wc=0;class mr extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=ti,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_o,this.blendDst=xo,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ws extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new N,Gi=new Ce;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ua,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Co extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lo extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wn extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qc=0;const Mt=new tt,Wr=new mt,jn=new N,pt=new Ei,_i=new Ei,Je=new N;class In extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bo(e)?Lo:Co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new St().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,n){return Mt.makeTranslation(e,t,n),this.applyMatrix4(Mt),this}scale(e,t,n){return Mt.makeScale(e,t,n),this.applyMatrix4(Mt),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];pt.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,pt.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,pt.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(pt.min),this.boundingBox.expandByPoint(pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(pt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_i.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(pt.min,_i.min),pt.expandByPoint(Je),Je.addVectors(pt.max,_i.max),pt.expandByPoint(Je)):(pt.expandByPoint(_i.min),pt.expandByPoint(_i.max))}pt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Je.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Je));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Je.fromBufferAttribute(a,l),c&&(jn.fromBufferAttribute(e,l),Je.add(jn)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let O=0;O<a;O++)l[O]=new N,u[O]=new N;const f=new N,d=new N,g=new N,m=new Ce,p=new Ce,h=new Ce,_=new N,b=new N;function E(O,$,ee){f.fromArray(i,O*3),d.fromArray(i,$*3),g.fromArray(i,ee*3),m.fromArray(o,O*2),p.fromArray(o,$*2),h.fromArray(o,ee*2),d.sub(f),g.sub(f),p.sub(m),h.sub(m);const k=1/(p.x*h.y-h.x*p.y);isFinite(k)&&(_.copy(d).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(k),b.copy(g).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(k),l[O].add(_),l[$].add(_),l[ee].add(_),u[O].add(b),u[$].add(b),u[ee].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let O=0,$=v.length;O<$;++O){const ee=v[O],k=ee.start,P=ee.count;for(let q=k,Y=k+P;q<Y;q+=3)E(n[q+0],n[q+1],n[q+2])}const S=new N,C=new N,R=new N,x=new N;function A(O){R.fromArray(s,O*3),x.copy(R);const $=l[O];S.copy($),S.sub(R.multiplyScalar(R.dot($))).normalize(),C.crossVectors(x,$);const k=C.dot(u[O])<0?-1:1;c[O*4]=S.x,c[O*4+1]=S.y,c[O*4+2]=S.z,c[O*4+3]=k}for(let O=0,$=v.length;O<$;++O){const ee=v[O],k=ee.start,P=ee.count;for(let q=k,Y=k+P;q<Y;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let d=0,g=e.count;d<g;d+=3){const m=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,h),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let g=0,m=0;for(let p=0,h=c.length;p<h;p++){a.isInterleavedBufferAttribute?g=c[p]*a.data.stride+a.offset:g=c[p]*u;for(let _=0;_<u;_++)d[m++]=l[g++]}return new Ut(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],g=e(d,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const g=l[f];u.push(g.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sa=new tt,Yn=new Uc,qr=new Ss,tn=new N,nn=new N,rn=new N,Xr=new N,jr=new N,Yr=new N,Vi=new N,Hi=new N,Wi=new N,qi=new Ce,Xi=new Ce,ji=new Ce,Zr=new N,Yi=new N;class Ot extends mt{constructor(e=new In,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),e.ray.intersectsSphere(qr)===!1)||(Sa.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(Sa),n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,g=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=g.length;p<h;p++){const _=g[p],b=i[_.materialIndex],E=Math.max(_.start,m.start),v=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let S=E,C=v;S<C;S+=3){const R=a.getX(S),x=a.getX(S+1),A=a.getX(S+2);o=Zi(this,b,e,Yn,c,l,u,f,d,R,x,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,m.start),h=Math.min(a.count,m.start+m.count);for(let _=p,b=h;_<b;_+=3){const E=a.getX(_),v=a.getX(_+1),S=a.getX(_+2);o=Zi(this,i,e,Yn,c,l,u,f,d,E,v,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,h=g.length;p<h;p++){const _=g[p],b=i[_.materialIndex],E=Math.max(_.start,m.start),v=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let S=E,C=v;S<C;S+=3){const R=S,x=S+1,A=S+2;o=Zi(this,b,e,Yn,c,l,u,f,d,R,x,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,m.start),h=Math.min(c.count,m.start+m.count);for(let _=p,b=h;_<b;_+=3){const E=_,v=_+1,S=_+2;o=Zi(this,i,e,Yn,c,l,u,f,d,E,v,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Xc(r,e,t,n,i,s,o,a){let c;if(e.side===wt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==on,a),c===null)return null;Yi.copy(a),Yi.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Yi);return l<t.near||l>t.far?null:{distance:l,point:Yi.clone(),object:r}}function Zi(r,e,t,n,i,s,o,a,c,l,u,f){tn.fromBufferAttribute(i,l),nn.fromBufferAttribute(i,u),rn.fromBufferAttribute(i,f);const d=r.morphTargetInfluences;if(s&&d){Vi.set(0,0,0),Hi.set(0,0,0),Wi.set(0,0,0);for(let m=0,p=s.length;m<p;m++){const h=d[m],_=s[m];h!==0&&(Xr.fromBufferAttribute(_,l),jr.fromBufferAttribute(_,u),Yr.fromBufferAttribute(_,f),o?(Vi.addScaledVector(Xr,h),Hi.addScaledVector(jr,h),Wi.addScaledVector(Yr,h)):(Vi.addScaledVector(Xr.sub(tn),h),Hi.addScaledVector(jr.sub(nn),h),Wi.addScaledVector(Yr.sub(rn),h)))}tn.add(Vi),nn.add(Hi),rn.add(Wi)}r.isSkinnedMesh&&(r.boneTransform(l,tn),r.boneTransform(u,nn),r.boneTransform(f,rn));const g=Xc(r,e,t,n,tn,nn,rn,Zr);if(g){a&&(qi.fromBufferAttribute(a,l),Xi.fromBufferAttribute(a,u),ji.fromBufferAttribute(a,f),g.uv=Xt.getUV(Zr,tn,nn,rn,qi,Xi,ji,new Ce)),c&&(qi.fromBufferAttribute(c,l),Xi.fromBufferAttribute(c,u),ji.fromBufferAttribute(c,f),g.uv2=Xt.getUV(Zr,tn,nn,rn,qi,Xi,ji,new Ce));const m={a:l,b:u,c:f,normal:new N,materialIndex:0};Xt.getNormal(tn,nn,rn,m.normal),g.face=m}return g}class ui extends In{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,g=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new wn(l,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(f,2));function m(p,h,_,b,E,v,S,C,R,x,A){const O=v/R,$=S/x,ee=v/2,k=S/2,P=C/2,q=R+1,Y=x+1;let K=0,V=0;const F=new N;for(let z=0;z<Y;z++){const Q=z*$-k;for(let Z=0;Z<q;Z++){const te=Z*O-ee;F[p]=te*b,F[h]=Q*E,F[_]=P,l.push(F.x,F.y,F.z),F[p]=0,F[h]=0,F[_]=C>0?1:-1,u.push(F.x,F.y,F.z),f.push(Z/R),f.push(1-z/x),K+=1}}for(let z=0;z<x;z++)for(let Q=0;Q<R;Q++){const Z=d+Q+q*z,te=d+Q+q*(z+1),ue=d+(Q+1)+q*(z+1),ge=d+(Q+1)+q*z;c.push(Z,te,ge),c.push(te,ue,ge),V+=6}a.addGroup(g,V,A),g+=V,d+=K}}static fromJSON(e){return new ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function it(r){const e={};for(let t=0;t<r.length;t++){const n=oi(r[t]);for(const i in n)e[i]=n[i]}return e}function jc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Yc={clone:oi,merge:it};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=$c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=jc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ro extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends Ro{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=90,$n=1;class Kc extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new bt(Zn,$n,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new N(1,0,0)),this.add(i);const s=new bt(Zn,$n,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const o=new bt(Zn,$n,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const a=new bt(Zn,$n,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new N(0,-1,0)),this.add(a);const c=new bt(Zn,$n,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,1)),this.add(c);const l=new bt(Zn,$n,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Yt,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Do extends Rt{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jc extends Cn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Do(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ui(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:ln});s.uniforms.tEquirect.value=t;const o=new Ot(i,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=yt),new Kc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const $r=new N,Qc=new N,eu=new St;class pn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$r.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta($r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eu.getNormalMatrix(e),i=this.coplanarPoint($r).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Ss,$i=new N;class Po{constructor(e=new pn,t=new pn,n=new pn,i=new pn,s=new pn,o=new pn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],d=n[8],g=n[9],m=n[10],p=n[11],h=n[12],_=n[13],b=n[14],E=n[15];return t[0].setComponents(a-i,f-c,p-d,E-h).normalize(),t[1].setComponents(a+i,f+c,p+d,E+h).normalize(),t[2].setComponents(a+s,f+l,p+g,E+_).normalize(),t[3].setComponents(a-s,f-l,p-g,E-_).normalize(),t[4].setComponents(a-o,f-u,p-m,E-b).normalize(),t[5].setComponents(a+o,f+u,p+m,E+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($i.x=i.normal.x>0?e.max.x:e.min.x,$i.y=i.normal.y>0?e.max.y:e.min.y,$i.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Io(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,d=l.usage,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,f,d),l.onUploadCallback();let m;if(f instanceof Float32Array)m=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(f instanceof Int16Array)m=5122;else if(f instanceof Uint32Array)m=5125;else if(f instanceof Int32Array)m=5124;else if(f instanceof Int8Array)m=5120;else if(f instanceof Uint8Array)m=5121;else if(f instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const d=u.array,g=u.updateRange;r.bindBuffer(f,l),g.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):r.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Es extends In{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,d=t/c,g=[],m=[],p=[],h=[];for(let _=0;_<u;_++){const b=_*d-o;for(let E=0;E<l;E++){const v=E*f-s;m.push(v,-b,0),p.push(0,0,1),h.push(E/a),h.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<a;b++){const E=b+l*_,v=b+l*(_+1),S=b+1+l*(_+1),C=b+1+l*_;g.push(E,v,C),g.push(v,S,C)}this.setIndex(g),this.setAttribute("position",new wn(m,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(h,2))}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}var nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu="vec3 transformed = vec3( position );",cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,hu=`#ifdef USE_IRIDESCENCE
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yu=`#define PI 3.141592653589793
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
}`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Su=`vec3 transformedNormal = objectNormal;
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
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
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
}`,ku=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Wu=`uniform bool receiveShadow;
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
#endif`,qu=`#if defined( USE_ENVMAP )
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
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,$u=`PhysicalMaterial material;
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
#endif`,Ku=`struct PhysicalMaterial {
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
}`,Ju=`
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ah=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fh=`#ifdef USE_MORPHNORMALS
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
#endif`,dh=`#ifdef USE_MORPHTARGETS
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
#endif`,ph=`#ifdef USE_MORPHTARGETS
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
#endif`,mh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mh=`#ifdef USE_NORMALMAP
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
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Th=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ch=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oh=`float getShadowMask() {
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
}`,Uh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zh=`#ifdef USE_SKINNING
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
#endif`,Bh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kh=`#ifdef USE_SKINNING
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
#endif`,Gh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qh=`#ifdef USE_TRANSMISSION
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
#endif`,Xh=`#ifdef USE_TRANSMISSION
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
#endif`,jh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$h=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`#include <envmap_common_pars_fragment>
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
}`,sf=`#include <common>
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
}`,af=`#if DEPTH_PACKING == 3200
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
}`,of=`#define DISTANCE
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
}`,lf=`#define DISTANCE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hf=`uniform float scale;
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
}`,ff=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#define LAMBERT
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
}`,gf=`#define LAMBERT
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
}`,_f=`#define MATCAP
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
}`,xf=`#define MATCAP
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
}`,vf=`#define NORMAL
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
}`,Mf=`#define NORMAL
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
}`,yf=`#define PHONG
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
}`,bf=`#define PHONG
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
}`,Sf=`#define STANDARD
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
}`,wf=`#define STANDARD
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
}`,Ef=`#define TOON
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
}`,Tf=`#define TOON
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
}`,Af=`uniform float size;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Rf=`uniform vec3 color;
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
}`,Df=`uniform float rotation;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Ae={alphamap_fragment:nu,alphamap_pars_fragment:iu,alphatest_fragment:ru,alphatest_pars_fragment:su,aomap_fragment:au,aomap_pars_fragment:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:uu,iridescence_fragment:hu,bumpmap_pars_fragment:fu,clipping_planes_fragment:du,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:_u,color_pars_fragment:xu,color_pars_vertex:vu,color_vertex:Mu,common:yu,cube_uv_reflection_fragment:bu,defaultnormal_vertex:Su,displacementmap_pars_vertex:wu,displacementmap_vertex:Eu,emissivemap_fragment:Tu,emissivemap_pars_fragment:Au,encodings_fragment:Cu,encodings_pars_fragment:Lu,envmap_fragment:Ru,envmap_common_pars_fragment:Du,envmap_pars_fragment:Pu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:qu,envmap_vertex:Fu,fog_vertex:Nu,fog_pars_vertex:Ou,fog_fragment:Uu,fog_pars_fragment:zu,gradientmap_pars_fragment:Bu,lightmap_fragment:ku,lightmap_pars_fragment:Gu,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Wu,lights_toon_fragment:Xu,lights_toon_pars_fragment:ju,lights_phong_fragment:Yu,lights_phong_pars_fragment:Zu,lights_physical_fragment:$u,lights_physical_pars_fragment:Ku,lights_fragment_begin:Ju,lights_fragment_maps:Qu,lights_fragment_end:eh,logdepthbuf_fragment:th,logdepthbuf_pars_fragment:nh,logdepthbuf_pars_vertex:ih,logdepthbuf_vertex:rh,map_fragment:sh,map_pars_fragment:ah,map_particle_fragment:oh,map_particle_pars_fragment:lh,metalnessmap_fragment:ch,metalnessmap_pars_fragment:uh,morphcolor_vertex:hh,morphnormal_vertex:fh,morphtarget_pars_vertex:dh,morphtarget_vertex:ph,normal_fragment_begin:mh,normal_fragment_maps:gh,normal_pars_fragment:_h,normal_pars_vertex:xh,normal_vertex:vh,normalmap_pars_fragment:Mh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:bh,clearcoat_pars_fragment:Sh,iridescence_pars_fragment:wh,output_fragment:Eh,packing:Th,premultiplied_alpha_fragment:Ah,project_vertex:Ch,dithering_fragment:Lh,dithering_pars_fragment:Rh,roughnessmap_fragment:Dh,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Ih,shadowmap_pars_vertex:Fh,shadowmap_vertex:Nh,shadowmask_pars_fragment:Oh,skinbase_vertex:Uh,skinning_pars_vertex:zh,skinning_vertex:Bh,skinnormal_vertex:kh,specularmap_fragment:Gh,specularmap_pars_fragment:Vh,tonemapping_fragment:Hh,tonemapping_pars_fragment:Wh,transmission_fragment:qh,transmission_pars_fragment:Xh,uv_pars_fragment:jh,uv_pars_vertex:Yh,uv_vertex:Zh,uv2_pars_fragment:$h,uv2_pars_vertex:Kh,uv2_vertex:Jh,worldpos_vertex:Qh,background_vert:ef,background_frag:tf,cube_vert:nf,cube_frag:rf,depth_vert:sf,depth_frag:af,distanceRGBA_vert:of,distanceRGBA_frag:lf,equirect_vert:cf,equirect_frag:uf,linedashed_vert:hf,linedashed_frag:ff,meshbasic_vert:df,meshbasic_frag:pf,meshlambert_vert:mf,meshlambert_frag:gf,meshmatcap_vert:_f,meshmatcap_frag:xf,meshnormal_vert:vf,meshnormal_frag:Mf,meshphong_vert:yf,meshphong_frag:bf,meshphysical_vert:Sf,meshphysical_frag:wf,meshtoon_vert:Ef,meshtoon_frag:Tf,points_vert:Af,points_frag:Cf,shadow_vert:Lf,shadow_frag:Rf,sprite_vert:Df,sprite_frag:Pf},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new St},uv2Transform:{value:new St},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}}},Ft={basic:{uniforms:it([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:it([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:it([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:it([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:it([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:it([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:it([re.points,re.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:it([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:it([re.common,re.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:it([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:it([re.sprite,re.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:it([re.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:it([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:it([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Ft.physical={uniforms:it([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function If(r,e,t,n,i,s){const o=new ze(0);let a=i===!0?0:1,c,l,u=null,f=0,d=null;function g(p,h){let _=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=e.get(b));const E=r.xr,v=E.getSession&&E.getSession();v&&v.environmentBlendMode==="additive"&&(b=null),b===null?m(o,a):b&&b.isColor&&(m(b,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===dr)?(l===void 0&&(l=new Ot(new ui(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:oi(Ft.cube.uniforms),vertexShader:Ft.cube.vertexShader,fragmentShader:Ft.cube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||f!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ot(new Es(2,2),new Rn({name:"BackgroundMaterial",uniforms:oi(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,m(o,a)},render:g}}function Ff(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=h(null);let l=c,u=!1;function f(P,q,Y,K,V){let F=!1;if(o){const z=p(K,Y,q);l!==z&&(l=z,g(l.object)),F=_(P,K,Y,V),F&&b(P,K,Y,V)}else{const z=q.wireframe===!0;(l.geometry!==K.id||l.program!==Y.id||l.wireframe!==z)&&(l.geometry=K.id,l.program=Y.id,l.wireframe=z,F=!0)}V!==null&&t.update(V,34963),(F||u)&&(u=!1,x(P,q,Y,K),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function g(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function m(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,q,Y){const K=Y.wireframe===!0;let V=a[P.id];V===void 0&&(V={},a[P.id]=V);let F=V[q.id];F===void 0&&(F={},V[q.id]=F);let z=F[K];return z===void 0&&(z=h(d()),F[K]=z),z}function h(P){const q=[],Y=[],K=[];for(let V=0;V<i;V++)q[V]=0,Y[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:K,object:P,attributes:{},index:null}}function _(P,q,Y,K){const V=l.attributes,F=q.attributes;let z=0;const Q=Y.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const ue=V[Z];let ge=F[Z];if(ge===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;z++}return l.attributesNum!==z||l.index!==K}function b(P,q,Y,K){const V={},F=q.attributes;let z=0;const Q=Y.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let ue=F[Z];ue===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),V[Z]=ge,z++}l.attributes=V,l.attributesNum=z,l.index=K}function E(){const P=l.newAttributes;for(let q=0,Y=P.length;q<Y;q++)P[q]=0}function v(P){S(P,0)}function S(P,q){const Y=l.newAttributes,K=l.enabledAttributes,V=l.attributeDivisors;Y[P]=1,K[P]===0&&(r.enableVertexAttribArray(P),K[P]=1),V[P]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,q),V[P]=q)}function C(){const P=l.newAttributes,q=l.enabledAttributes;for(let Y=0,K=q.length;Y<K;Y++)q[Y]!==P[Y]&&(r.disableVertexAttribArray(Y),q[Y]=0)}function R(P,q,Y,K,V,F){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(P,q,Y,V,F):r.vertexAttribPointer(P,q,Y,K,V,F)}function x(P,q,Y,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const V=K.attributes,F=Y.getAttributes(),z=q.defaultAttributeValues;for(const Q in F){const Z=F[Q];if(Z.location>=0){let te=V[Q];if(te===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){const ue=te.normalized,ge=te.itemSize,X=t.get(te);if(X===void 0)continue;const Pe=X.buffer,xe=X.type,Me=X.bytesPerElement;if(te.isInterleavedBufferAttribute){const he=te.data,Fe=he.stride,Ee=te.offset;if(he.isInstancedInterleavedBuffer){for(let me=0;me<Z.locationSize;me++)S(Z.location+me,he.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<Z.locationSize;me++)v(Z.location+me);r.bindBuffer(34962,Pe);for(let me=0;me<Z.locationSize;me++)R(Z.location+me,ge/Z.locationSize,xe,ue,Fe*Me,(Ee+ge/Z.locationSize*me)*Me)}else{if(te.isInstancedBufferAttribute){for(let he=0;he<Z.locationSize;he++)S(Z.location+he,te.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<Z.locationSize;he++)v(Z.location+he);r.bindBuffer(34962,Pe);for(let he=0;he<Z.locationSize;he++)R(Z.location+he,ge/Z.locationSize,xe,ue,ge*Me,ge/Z.locationSize*he*Me)}}else if(z!==void 0){const ue=z[Q];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(Z.location,ue);break;case 3:r.vertexAttrib3fv(Z.location,ue);break;case 4:r.vertexAttrib4fv(Z.location,ue);break;default:r.vertexAttrib1fv(Z.location,ue)}}}}C()}function A(){ee();for(const P in a){const q=a[P];for(const Y in q){const K=q[Y];for(const V in K)m(K[V].object),delete K[V];delete q[Y]}delete a[P]}}function O(P){if(a[P.id]===void 0)return;const q=a[P.id];for(const Y in q){const K=q[Y];for(const V in K)m(K[V].object),delete K[V];delete q[Y]}delete a[P.id]}function $(P){for(const q in a){const Y=a[q];if(Y[P.id]===void 0)continue;const K=Y[P.id];for(const V in K)m(K[V].object),delete K[V];delete Y[P.id]}}function ee(){k(),u=!0,l!==c&&(l=c,g(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:O,releaseStatesOfProgram:$,initAttributes:E,enableAttribute:v,disableUnusedAttributes:C}}function Nf(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Of(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),g=r.getParameter(3379),m=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),_=r.getParameter(36348),b=r.getParameter(36349),E=d>0,v=o||e.has("OES_texture_float"),S=E&&v,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:C}}function Uf(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pn,a=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const m=f.length!==0||d||n!==0||i;return i=d,t=u(f,g,0),n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,d,g){const m=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,_=r.get(f);if(!i||m===null||m.length===0||s&&!h)s?u(null):l();else{const b=s?0:n,E=b*4;let v=_.clippingState||null;c.value=v,v=u(m,d,E,g);for(let S=0;S!==E;++S)v[S]=t[S];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,g,m){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=c.value,m!==!0||h===null){const _=g+p*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<_)&&(h=new Float32Array(_));for(let E=0,v=g;E!==p;++E,v+=4)o.copy(f[E]).applyMatrix4(b,a),o.normal.toArray(h,v),h[v+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function zf(r){let e=new WeakMap;function t(o,a){return a===ls?o.mapping=ri:a===cs&&(o.mapping=si),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ls||a===cs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jc(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bf extends Ro{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ei=4,wa=[.125,.215,.35,.446,.526,.582],gn=20,Kr=new Bf,Ea=new ze;let Jr=null;const mn=(1+Math.sqrt(5))/2,Jn=1/mn,Ta=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,mn,Jn),new N(0,mn,-Jn),new N(Jn,0,mn),new N(-Jn,0,mn),new N(mn,Jn,0),new N(-mn,Jn,0)];class Aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=La(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr),e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:wi,format:Nt,encoding:An,depthBuffer:!1},i=Ca(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ca(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kf(s)),this._blurMaterial=Gf(s,e,t)}return i}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,i){const a=new bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ea),u.toneMapping=Yt,u.autoClear=!1;const g=new ws({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),m=new Ot(new ui,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(Ea),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):b===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const E=this._cubeSize;Ki(i,b*E,_>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=La());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ki(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ta[(i-1)%Ta.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ot(this._lodPlanes[i],l),d=l.uniforms,g=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*gn-1),p=s/m,h=isFinite(s)?1+Math.floor(u*p):gn;h>gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${gn}`);const _=[];let b=0;for(let R=0;R<gn;++R){const x=R/p,A=Math.exp(-x*x/2);_.push(A),R===0?b+=A:R<h&&(b+=2*A)}for(let R=0;R<_.length;R++)_[R]=_[R]/b;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;const v=this._sizeLods[i],S=3*v*(i>E-ei?i-E+ei:0),C=4*(this._cubeSize-v);Ki(t,S,C,3*v,2*v),c.setRenderTarget(t),c.render(f,Kr)}}function kf(r){const e=[],t=[],n=[];let i=r;const s=r-ei+1+wa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ei?c=wa[o-r+ei-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,m=6,p=3,h=2,_=1,b=new Float32Array(p*m*g),E=new Float32Array(h*m*g),v=new Float32Array(_*m*g);for(let C=0;C<g;C++){const R=C%3*2/3-1,x=C>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];b.set(A,p*m*C),E.set(d,h*m*C);const O=[C,C,C,C,C,C];v.set(O,_*m*C)}const S=new In;S.setAttribute("position",new Ut(b,p)),S.setAttribute("uv",new Ut(E,h)),S.setAttribute("faceIndex",new Ut(v,_)),e.push(S),i>ei&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ca(r,e,t){const n=new Cn(r,e,t);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Gf(r,e,t){const n=new Float32Array(gn),i=new N(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function La(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ra(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ts(){return`

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
	`}function Vf(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ls||c===cs,u=c===ri||c===si;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Aa(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Aa(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wf(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],34962);const g=f.morphAttributes;for(const m in g){const p=g[m];for(let h=0,_=p.length;h<_;h++)e.update(p[h],34962)}}function l(f){const d=[],g=f.index,m=f.attributes.position;let p=0;if(g!==null){const b=g.array;p=g.version;for(let E=0,v=b.length;E<v;E+=3){const S=b[E+0],C=b[E+1],R=b[E+2];d.push(S,C,C,R,R,S)}}else{const b=m.array;p=m.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const S=E+0,C=E+1,R=E+2;d.push(S,C,C,R,R,S)}}const h=new(bo(d)?Lo:Co)(d,1);h.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,h)}function u(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function qf(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,g){r.drawElements(s,g,a,d*c),t.update(g,s,1)}function f(d,g,m){if(m===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,d*c,m),t.update(g,s,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Xf(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jf(r,e){return r[0]-e[0]}function Yf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Zf(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new et,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,d){const g=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let h=s.get(u);if(h===void 0||h.count!==p){let q=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",q)};h!==void 0&&h.texture.dispose();const E=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let A=0;E===!0&&(A=1),v===!0&&(A=2),S===!0&&(A=3);let O=u.attributes.position.count*A,$=1;O>e.maxTextureSize&&($=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ee=new Float32Array(O*$*4*p),k=new To(ee,O,$,p);k.type=xn,k.needsUpdate=!0;const P=A*4;for(let Y=0;Y<p;Y++){const K=C[Y],V=R[Y],F=x[Y],z=O*$*4*Y;for(let Q=0;Q<K.count;Q++){const Z=Q*P;E===!0&&(o.fromBufferAttribute(K,Q),ee[z+Z+0]=o.x,ee[z+Z+1]=o.y,ee[z+Z+2]=o.z,ee[z+Z+3]=0),v===!0&&(o.fromBufferAttribute(V,Q),ee[z+Z+4]=o.x,ee[z+Z+5]=o.y,ee[z+Z+6]=o.z,ee[z+Z+7]=0),S===!0&&(o.fromBufferAttribute(F,Q),ee[z+Z+8]=o.x,ee[z+Z+9]=o.y,ee[z+Z+10]=o.z,ee[z+Z+11]=F.itemSize===4?o.w:1)}}h={count:p,texture:k,size:new Ce(O,$)},s.set(u,h),u.addEventListener("dispose",q)}let _=0;for(let E=0;E<g.length;E++)_+=g[E];const b=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",g),d.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const m=g===void 0?0:g.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let v=0;v<m;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<m;v++){const S=p[v];S[0]=v,S[1]=g[v]}p.sort(Yf);for(let v=0;v<8;v++)v<m&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(jf);const h=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const S=a[v],C=S[0],R=S[1];C!==Number.MAX_SAFE_INTEGER&&R?(h&&u.getAttribute("morphTarget"+v)!==h[C]&&u.setAttribute("morphTarget"+v,h[C]),_&&u.getAttribute("morphNormal"+v)!==_[C]&&u.setAttribute("morphNormal"+v,_[C]),i[v]=R,b+=R):(h&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const E=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function $f(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Fo=new Rt,No=new To,Oo=new Nc,Uo=new Do,Da=[],Pa=[],Ia=new Float32Array(16),Fa=new Float32Array(9),Na=new Float32Array(4);function hi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Da[i];if(s===void 0&&(s=new Float32Array(i),Da[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function $e(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ke(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gr(r,e){let t=Pa[e];t===void 0&&(t=new Int32Array(e),Pa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Kf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;r.uniform2fv(this.addr,e),Ke(t,e)}}function Qf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($e(t,e))return;r.uniform3fv(this.addr,e),Ke(t,e)}}function ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;r.uniform4fv(this.addr,e),Ke(t,e)}}function td(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ke(t,e)}else{if($e(t,n))return;Na.set(n),r.uniformMatrix2fv(this.addr,!1,Na),Ke(t,n)}}function nd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ke(t,e)}else{if($e(t,n))return;Fa.set(n),r.uniformMatrix3fv(this.addr,!1,Fa),Ke(t,n)}}function id(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ke(t,e)}else{if($e(t,n))return;Ia.set(n),r.uniformMatrix4fv(this.addr,!1,Ia),Ke(t,n)}}function rd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sd(r,e){const t=this.cache;$e(t,e)||(r.uniform2iv(this.addr,e),Ke(t,e))}function ad(r,e){const t=this.cache;$e(t,e)||(r.uniform3iv(this.addr,e),Ke(t,e))}function od(r,e){const t=this.cache;$e(t,e)||(r.uniform4iv(this.addr,e),Ke(t,e))}function ld(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cd(r,e){const t=this.cache;$e(t,e)||(r.uniform2uiv(this.addr,e),Ke(t,e))}function ud(r,e){const t=this.cache;$e(t,e)||(r.uniform3uiv(this.addr,e),Ke(t,e))}function hd(r,e){const t=this.cache;$e(t,e)||(r.uniform4uiv(this.addr,e),Ke(t,e))}function fd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Fo,i)}function dd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Oo,i)}function pd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uo,i)}function md(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||No,i)}function gd(r){switch(r){case 5126:return Kf;case 35664:return Jf;case 35665:return Qf;case 35666:return ed;case 35674:return td;case 35675:return nd;case 35676:return id;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return ud;case 36296:return hd;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return dd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(r,e){r.uniform1fv(this.addr,e)}function xd(r,e){const t=hi(e,this.size,2);r.uniform2fv(this.addr,t)}function vd(r,e){const t=hi(e,this.size,3);r.uniform3fv(this.addr,t)}function Md(r,e){const t=hi(e,this.size,4);r.uniform4fv(this.addr,t)}function yd(r,e){const t=hi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bd(r,e){const t=hi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Sd(r,e){const t=hi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wd(r,e){r.uniform1iv(this.addr,e)}function Ed(r,e){r.uniform2iv(this.addr,e)}function Td(r,e){r.uniform3iv(this.addr,e)}function Ad(r,e){r.uniform4iv(this.addr,e)}function Cd(r,e){r.uniform1uiv(this.addr,e)}function Ld(r,e){r.uniform2uiv(this.addr,e)}function Rd(r,e){r.uniform3uiv(this.addr,e)}function Dd(r,e){r.uniform4uiv(this.addr,e)}function Pd(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Fo,s[o])}function Id(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Oo,s[o])}function Fd(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Uo,s[o])}function Nd(r,e,t){const n=this.cache,i=e.length,s=gr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||No,s[o])}function Od(r){switch(r){case 5126:return _d;case 35664:return xd;case 35665:return vd;case 35666:return Md;case 35674:return yd;case 35675:return bd;case 35676:return Sd;case 5124:case 35670:return wd;case 35667:case 35671:return Ed;case 35668:case 35672:return Td;case 35669:case 35673:return Ad;case 5125:return Cd;case 36294:return Ld;case 36295:return Rd;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Pd;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Nd}}class Ud{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gd(t.type)}}class zd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Od(t.type)}}class Bd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function Oa(r,e){r.seq.push(e),r.map[e.id]=e}function kd(r,e,t){const n=r.name,i=n.length;for(Qr.lastIndex=0;;){const s=Qr.exec(n),o=Qr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Oa(t,l===void 0?new Ud(a,r,e):new zd(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Bd(a),Oa(t,f)),t=f}}}class tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);kd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ua(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Gd=0;function Vd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hd(r){switch(r){case An:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function za(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Vd(r.getShaderSource(e),o)}else return i}function Wd(r,e){const t=Hd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qd(r,e){let t;switch(e){case jl:t="Linear";break;case Yl:t="Reinhard";break;case Zl:t="OptimizedCineon";break;case $l:t="ACESFilmic";break;case Kl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yi).join(`
`)}function jd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function yi(r){return r!==""}function Ba(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ka(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ps(r){return r.replace(Zd,$d)}function $d(r,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ps(t)}const Kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ga(r){return r.replace(Kd,Jd)}function Jd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Va(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qd(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===go?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===El?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function ep(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ri:case si:e="ENVMAP_TYPE_CUBE";break;case dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function np(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vo:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function ip(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qd(t),l=ep(t),u=tp(t),f=np(t),d=ip(t),g=t.isWebGL2?"":Xd(t),m=jd(s),p=i.createProgram();let h,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[m].filter(yi).join(`
`),h.length>0&&(h+=`
`),_=[g,m].filter(yi).join(`
`),_.length>0&&(_+=`
`)):(h=[Va(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),_=[g,Va(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yt?"#define TONE_MAPPING":"",t.toneMapping!==Yt?Ae.tonemapping_pars_fragment:"",t.toneMapping!==Yt?qd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Wd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),o=ps(o),o=Ba(o,t),o=ka(o,t),a=ps(a),a=Ba(a,t),a=ka(a,t),o=Ga(o),a=Ga(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["#define varying in",t.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=b+h+o,v=b+_+a,S=Ua(i,35633,E),C=Ua(i,35632,v);if(i.attachShader(p,S),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),O=i.getShaderInfoLog(S).trim(),$=i.getShaderInfoLog(C).trim();let ee=!0,k=!0;if(i.getProgramParameter(p,35714)===!1){ee=!1;const P=za(i,S,"vertex"),q=za(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+P+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(O===""||$==="")&&(k=!1);k&&(this.diagnostics={runnable:ee,programLog:A,vertexShader:{log:O,prefix:h},fragmentShader:{log:$,prefix:_}})}i.deleteShader(S),i.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new tr(i,p)),R};let x;return this.getAttributes=function(){return x===void 0&&(x=Yd(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Gd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let sp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new op(e),t.set(e,n)),n}}class op{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function lp(r,e,t,n,i,s,o){const a=new Ao,c=new ap,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let g=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,O,$,ee){const k=$.fog,P=ee.geometry,q=x.isMeshStandardMaterial?$.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),K=Y&&Y.mapping===dr?Y.image.height:null,V=m[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const F=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,z=F!==void 0?F.length:0;let Q=0;P.morphAttributes.position!==void 0&&(Q=1),P.morphAttributes.normal!==void 0&&(Q=2),P.morphAttributes.color!==void 0&&(Q=3);let Z,te,ue,ge;if(V){const Fe=Ft[V];Z=Fe.vertexShader,te=Fe.fragmentShader}else Z=x.vertexShader,te=x.fragmentShader,c.update(x),ue=c.getVertexShaderID(x),ge=c.getFragmentShaderID(x);const X=r.getRenderTarget(),Pe=x.alphaTest>0,xe=x.clearcoat>0,Me=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:Z,fragmentShader:te,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?r.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:An,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===_c,tangentSpaceNormalMap:x.normalMapType===gc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ge,clearcoat:xe,clearcoatMap:xe&&!!x.clearcoatMap,clearcoatRoughnessMap:xe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!x.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!x.iridescenceMap,iridescenceThicknessMap:Me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ti,alphaMap:!!x.alphaMap,alphaTest:Pe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!k,useFog:x.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Yt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===wt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)A.push(O),A.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(_(A,x),b(A,x),A.push(r.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function E(x){const A=m[x.type];let O;if(A){const $=Ft[A];O=Yc.clone($.uniforms)}else O=x.uniforms;return O}function v(x,A){let O;for(let $=0,ee=l.length;$<ee;$++){const k=l[$];if(k.cacheKey===A){O=k,++O.usedTimes;break}}return O===void 0&&(O=new rp(r,A,x,s),l.push(O)),O}function S(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:R}}function cp(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function up(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ha(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wa(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,g,m,p,h){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:g,groupOrder:m,renderOrder:f.renderOrder,z:p,group:h},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=g,_.groupOrder=m,_.renderOrder=f.renderOrder,_.z=p,_.group=h),e++,_}function a(f,d,g,m,p,h){const _=o(f,d,g,m,p,h);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function c(f,d,g,m,p,h){const _=o(f,d,g,m,p,h);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,d){t.length>1&&t.sort(f||up),n.length>1&&n.sort(d||Ha),i.length>1&&i.sort(d||Ha)}function u(){for(let f=e,d=r.length;f<d;f++){const g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function hp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Wa,r.set(n,[o])):i>=s.length?(o=new Wa,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function fp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function dp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pp=0;function mp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gp(r,e){const t=new fp,n=dp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new tt,a=new tt;function c(u,f){let d=0,g=0,m=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let p=0,h=0,_=0,b=0,E=0,v=0,S=0,C=0,R=0,x=0;u.sort(mp);const A=f!==!0?Math.PI:1;for(let $=0,ee=u.length;$<ee;$++){const k=u[$],P=k.color,q=k.intensity,Y=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=P.r*q*A,g+=P.g*q*A,m+=P.b*q*A;else if(k.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(k.sh.coefficients[V],q);else if(k.isDirectionalLight){const V=t.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const F=k.shadow,z=n.get(k);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=k.shadow.matrix,v++}i.directional[p]=V,p++}else if(k.isSpotLight){const V=t.get(k);V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(P).multiplyScalar(q*A),V.distance=Y,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,i.spot[_]=V;const F=k.shadow;if(k.map&&(i.spotLightMap[R]=k.map,R++,F.updateMatrices(k),k.castShadow&&x++),i.spotLightMatrix[_]=F.matrix,k.castShadow){const z=n.get(k);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=K,C++}_++}else if(k.isRectAreaLight){const V=t.get(k);V.color.copy(P).multiplyScalar(q),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),i.rectArea[b]=V,b++}else if(k.isPointLight){const V=t.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*A),V.distance=k.distance,V.decay=k.decay,k.castShadow){const F=k.shadow,z=n.get(k);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,z.shadowCameraNear=F.camera.near,z.shadowCameraFar=F.camera.far,i.pointShadow[h]=z,i.pointShadowMap[h]=K,i.pointShadowMatrix[h]=k.shadow.matrix,S++}i.point[h]=V,h++}else if(k.isHemisphereLight){const V=t.get(k);V.skyColor.copy(k.color).multiplyScalar(q*A),V.groundColor.copy(k.groundColor).multiplyScalar(q*A),i.hemi[E]=V,E++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=m;const O=i.hash;(O.directionalLength!==p||O.pointLength!==h||O.spotLength!==_||O.rectAreaLength!==b||O.hemiLength!==E||O.numDirectionalShadows!==v||O.numPointShadows!==S||O.numSpotShadows!==C||O.numSpotMaps!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=h,i.hemi.length=E,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+R-x,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=x,O.directionalLength=p,O.pointLength=h,O.spotLength=_,O.rectAreaLength=b,O.hemiLength=E,O.numDirectionalShadows=v,O.numPointShadows=S,O.numSpotShadows=C,O.numSpotMaps=R,i.version=pp++)}function l(u,f){let d=0,g=0,m=0,p=0,h=0;const _=f.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){const v=u[b];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),d++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),m++}else if(v.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const S=i.point[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),g++}else if(v.isHemisphereLight){const S=i.hemi[h];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(_),h++}}}return{setup:c,setupView:l,state:i}}function qa(r,e){const t=new gp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _p(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new qa(r,e),t.set(s,[c])):o>=a.length?(c=new qa(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class xp extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
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
}`;function bp(r,e,t){let n=new Po;const i=new Ce,s=new Ce,o=new et,a=new xp({depthPacking:mc}),c=new vp,l={},u=t.maxTextureSize,f={0:wt,1:ii,2:on},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Mp,fragmentShader:yp}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const m=new In;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ot(m,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go,this.render=function(v,S,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||v.length===0)return;const R=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ln),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let $=0,ee=v.length;$<ee;$++){const k=v[$],P=k.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const q=P.getFrameExtents();if(i.multiply(q),s.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,P.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,P.mapSize.y=s.y)),P.map===null){const K=this.type!==vi?{minFilter:lt,magFilter:lt}:{};P.map=new Cn(i.x,i.y,K),P.map.texture.name=k.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const Y=P.getViewportCount();for(let K=0;K<Y;K++){const V=P.getViewport(K);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),O.viewport(o),P.updateMatrices(k,K),n=P.getFrustum(),E(S,C,P.camera,k,this.type)}P.isPointLightShadow!==!0&&this.type===vi&&_(P,C),P.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(R,x,A)};function _(v,S){const C=e.update(p);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,g.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Cn(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(S,null,C,d,p,null),g.uniforms.shadow_pass.value=v.mapPass.texture,g.uniforms.resolution.value=v.mapSize,g.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(S,null,C,g,p,null)}function b(v,S,C,R,x,A){let O=null;const $=C.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if($!==void 0?O=$:O=C.isPointLight===!0?c:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ee=O.uuid,k=S.uuid;let P=l[ee];P===void 0&&(P={},l[ee]=P);let q=P[k];q===void 0&&(q=O.clone(),P[k]=q),O=q}return O.visible=S.visible,O.wireframe=S.wireframe,A===vi?O.side=S.shadowSide!==null?S.shadowSide:S.side:O.side=S.shadowSide!==null?S.shadowSide:f[S.side],O.alphaMap=S.alphaMap,O.alphaTest=S.alphaTest,O.clipShadows=S.clipShadows,O.clippingPlanes=S.clippingPlanes,O.clipIntersection=S.clipIntersection,O.displacementMap=S.displacementMap,O.displacementScale=S.displacementScale,O.displacementBias=S.displacementBias,O.wireframeLinewidth=S.wireframeLinewidth,O.linewidth=S.linewidth,C.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(C.matrixWorld),O.nearDistance=R,O.farDistance=x),O}function E(v,S,C,R,x){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===vi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld);const $=e.update(v),ee=v.material;if(Array.isArray(ee)){const k=$.groups;for(let P=0,q=k.length;P<q;P++){const Y=k[P],K=ee[Y.materialIndex];if(K&&K.visible){const V=b(v,K,R,C.near,C.far,x);r.renderBufferDirect(C,null,$,V,v,Y)}}}else if(ee.visible){const k=b(v,ee,R,C.near,C.far,x);r.renderBufferDirect(C,null,$,k,v,null)}}const O=v.children;for(let $=0,ee=O.length;$<ee;$++)E(O[$],S,C,R,x)}}function Sp(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const oe=new et;let ie=null;const j=new et(0,0,0,0);return{setMask:function(se){ie!==se&&!L&&(r.colorMask(se,se,se,se),ie=se)},setLocked:function(se){L=se},setClear:function(se,ve,Ue,Ve,Zt){Zt===!0&&(se*=Ve,ve*=Ve,Ue*=Ve),oe.set(se,ve,Ue,Ve),j.equals(oe)===!1&&(r.clearColor(se,ve,Ue,Ve),j.copy(oe))},reset:function(){L=!1,ie=null,j.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,ie=null,j=null;return{setTest:function(se){se?Pe(2929):xe(2929)},setMask:function(se){oe!==se&&!L&&(r.depthMask(se),oe=se)},setFunc:function(se){if(ie!==se){switch(se){case zl:r.depthFunc(512);break;case Bl:r.depthFunc(519);break;case kl:r.depthFunc(513);break;case os:r.depthFunc(515);break;case Gl:r.depthFunc(514);break;case Vl:r.depthFunc(518);break;case Hl:r.depthFunc(516);break;case Wl:r.depthFunc(517);break;default:r.depthFunc(515)}ie=se}},setLocked:function(se){L=se},setClear:function(se){j!==se&&(r.clearDepth(se),j=se)},reset:function(){L=!1,oe=null,ie=null,j=null}}}function o(){let L=!1,oe=null,ie=null,j=null,se=null,ve=null,Ue=null,Ve=null,Zt=null;return{setTest:function(Be){L||(Be?Pe(2960):xe(2960))},setMask:function(Be){oe!==Be&&!L&&(r.stencilMask(Be),oe=Be)},setFunc:function(Be,zt,xt){(ie!==Be||j!==zt||se!==xt)&&(r.stencilFunc(Be,zt,xt),ie=Be,j=zt,se=xt)},setOp:function(Be,zt,xt){(ve!==Be||Ue!==zt||Ve!==xt)&&(r.stencilOp(Be,zt,xt),ve=Be,Ue=zt,Ve=xt)},setLocked:function(Be){L=Be},setClear:function(Be){Zt!==Be&&(r.clearStencil(Be),Zt=Be)},reset:function(){L=!1,oe=null,ie=null,j=null,se=null,ve=null,Ue=null,Ve=null,Zt=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let d={},g={},m=new WeakMap,p=[],h=null,_=!1,b=null,E=null,v=null,S=null,C=null,R=null,x=null,A=!1,O=null,$=null,ee=null,k=null,P=null;const q=r.getParameter(35661);let Y=!1,K=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=K>=2);let F=null,z={};const Q=r.getParameter(3088),Z=r.getParameter(2978),te=new et().fromArray(Q),ue=new et().fromArray(Z);function ge(L,oe,ie){const j=new Uint8Array(4),se=r.createTexture();r.bindTexture(L,se),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let ve=0;ve<ie;ve++)r.texImage2D(oe+ve,0,6408,1,1,0,6408,5121,j);return se}const X={};X[3553]=ge(3553,3553,1),X[34067]=ge(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(2929),c.setFunc(os),je(!1),ht(Ns),Pe(2884),We(ln);function Pe(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function xe(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Me(L,oe){return g[L]!==oe?(r.bindFramebuffer(L,oe),g[L]=oe,n&&(L===36009&&(g[36160]=oe),L===36160&&(g[36009]=oe)),!0):!1}function he(L,oe){let ie=p,j=!1;if(L)if(ie=m.get(oe),ie===void 0&&(ie=[],m.set(oe,ie)),L.isWebGLMultipleRenderTargets){const se=L.texture;if(ie.length!==se.length||ie[0]!==36064){for(let ve=0,Ue=se.length;ve<Ue;ve++)ie[ve]=36064+ve;ie.length=se.length,j=!0}}else ie[0]!==36064&&(ie[0]=36064,j=!0);else ie[0]!==1029&&(ie[0]=1029,j=!0);j&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Fe(L){return h!==L?(r.useProgram(L),h=L,!0):!1}const Ee={[Qn]:32774,[Al]:32778,[Cl]:32779};if(n)Ee[Bs]=32775,Ee[ks]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[Bs]=L.MIN_EXT,Ee[ks]=L.MAX_EXT)}const me={[Ll]:0,[Rl]:1,[Dl]:768,[_o]:770,[Ul]:776,[Nl]:774,[Il]:772,[Pl]:769,[xo]:771,[Ol]:775,[Fl]:773};function We(L,oe,ie,j,se,ve,Ue,Ve){if(L===ln){_===!0&&(xe(3042),_=!1);return}if(_===!1&&(Pe(3042),_=!0),L!==Tl){if(L!==b||Ve!==A){if((E!==Qn||C!==Qn)&&(r.blendEquation(32774),E=Qn,C=Qn),Ve)switch(L){case ti:r.blendFuncSeparate(1,771,1,771);break;case Os:r.blendFunc(1,1);break;case Us:r.blendFuncSeparate(0,769,0,1);break;case zs:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ti:r.blendFuncSeparate(770,771,1,771);break;case Os:r.blendFunc(770,1);break;case Us:r.blendFuncSeparate(0,769,0,1);break;case zs:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,S=null,R=null,x=null,b=L,A=Ve}return}se=se||oe,ve=ve||ie,Ue=Ue||j,(oe!==E||se!==C)&&(r.blendEquationSeparate(Ee[oe],Ee[se]),E=oe,C=se),(ie!==v||j!==S||ve!==R||Ue!==x)&&(r.blendFuncSeparate(me[ie],me[j],me[ve],me[Ue]),v=ie,S=j,R=ve,x=Ue),b=L,A=null}function Qe(L,oe){L.side===on?xe(2884):Pe(2884);let ie=L.side===wt;oe&&(ie=!ie),je(ie),L.blending===ti&&L.transparent===!1?We(ln):We(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const j=L.stencilWrite;l.setTest(j),j&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(32926):xe(32926)}function je(L){O!==L&&(L?r.frontFace(2304):r.frontFace(2305),O=L)}function ht(L){L!==Sl?(Pe(2884),L!==$&&(L===Ns?r.cullFace(1029):L===wl?r.cullFace(1028):r.cullFace(1032))):xe(2884),$=L}function Ye(L){L!==ee&&(Y&&r.lineWidth(L),ee=L)}function Ne(L,oe,ie){L?(Pe(32823),(k!==oe||P!==ie)&&(r.polygonOffset(oe,ie),k=oe,P=ie)):xe(32823)}function gt(L){L?Pe(3089):xe(3089)}function _t(L){L===void 0&&(L=33984+q-1),F!==L&&(r.activeTexture(L),F=L)}function w(L,oe,ie){ie===void 0&&(F===null?ie=33984+q-1:ie=F);let j=z[ie];j===void 0&&(j={type:void 0,texture:void 0},z[ie]=j),(j.type!==L||j.texture!==oe)&&(F!==ie&&(r.activeTexture(ie),F=ie),r.bindTexture(L,oe||X[L]),j.type=L,j.texture=oe)}function M(){const L=z[F];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function T(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){te.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function ce(L){ue.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function de(L,oe){let ie=f.get(oe);ie===void 0&&(ie=new WeakMap,f.set(oe,ie));let j=ie.get(L);j===void 0&&(j=r.getUniformBlockIndex(oe,L.name),ie.set(L,j))}function ye(L,oe){const j=f.get(oe).get(L);u.get(L)!==j&&(r.uniformBlockBinding(oe,j,L.__bindingPointIndex),u.set(L,j))}function De(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},F=null,z={},g={},m=new WeakMap,p=[],h=null,_=!1,b=null,E=null,v=null,S=null,C=null,R=null,x=null,A=!1,O=null,$=null,ee=null,k=null,P=null,te.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pe,disable:xe,bindFramebuffer:Me,drawBuffers:he,useProgram:Fe,setBlending:We,setMaterial:Qe,setFlipSided:je,setCullFace:ht,setLineWidth:Ye,setPolygonOffset:Ne,setScissorTest:gt,activeTexture:_t,bindTexture:w,unbindTexture:M,compressedTexImage2D:G,texImage2D:I,texImage3D:le,updateUBOMapping:de,uniformBlockBinding:ye,texStorage2D:_e,texStorage3D:T,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:ae,scissor:fe,viewport:ce,reset:De}}function wp(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let p;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,M){return _?new OffscreenCanvas(w,M):cr("canvas")}function E(w,M,G,J){let ne=1;if((w.width>J||w.height>J)&&(ne=J/Math.max(w.width,w.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ae=M?lr:Math.floor,_e=ae(ne*w.width),T=ae(ne*w.height);p===void 0&&(p=b(_e,T));const I=G?b(_e,T):p;return I.width=_e,I.height=T,I.getContext("2d").drawImage(w,0,0,_e,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+T+")."),I}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return ds(w.width)&&ds(w.height)}function S(w){return a?!1:w.wrapS!==Lt||w.wrapT!==Lt||w.minFilter!==lt&&w.minFilter!==yt}function C(w,M){return w.generateMipmaps&&M&&w.minFilter!==lt&&w.minFilter!==yt}function R(w){r.generateMipmap(w)}function x(w,M,G,J,ne=!1){if(a===!1)return M;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae=M;return M===6403&&(G===5126&&(ae=33326),G===5131&&(ae=33325),G===5121&&(ae=33321)),M===33319&&(G===5126&&(ae=33328),G===5131&&(ae=33327),G===5121&&(ae=33323)),M===6408&&(G===5126&&(ae=34836),G===5131&&(ae=34842),G===5121&&(ae=J===Ge&&ne===!1?35907:32856),G===32819&&(ae=32854),G===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(w,M,G){return C(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==lt&&w.minFilter!==yt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function O(w){return w===lt||w===Gs||w===Vs?9728:9729}function $(w){const M=w.target;M.removeEventListener("dispose",$),k(M),M.isVideoTexture&&m.delete(M)}function ee(w){const M=w.target;M.removeEventListener("dispose",ee),q(M)}function k(w){const M=n.get(w);if(M.__webglInit===void 0)return;const G=w.source,J=h.get(G);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(w),Object.keys(J).length===0&&h.delete(G)}n.remove(w)}function P(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const G=w.source,J=h.get(G);delete J[M.__cacheKey],o.memory.textures--}function q(w){const M=w.texture,G=n.get(w),J=n.get(M);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(G.__webglFramebuffer[ne]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ne=0,ae=M.length;ne<ae;ne++){const _e=n.get(M[ne]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(w)}let Y=0;function K(){Y=0}function V(){const w=Y;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),Y+=1,w}function F(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function z(w,M){const G=n.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,w,M);return}}t.bindTexture(3553,G.__webglTexture,33984+M)}function Q(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xe(G,w,M);return}t.bindTexture(35866,G.__webglTexture,33984+M)}function Z(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xe(G,w,M);return}t.bindTexture(32879,G.__webglTexture,33984+M)}function te(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Me(G,w,M);return}t.bindTexture(34067,G.__webglTexture,33984+M)}const ue={[us]:10497,[Lt]:33071,[hs]:33648},ge={[lt]:9728,[Gs]:9984,[Vs]:9986,[yt]:9729,[Jl]:9985,[pr]:9987};function X(w,M,G){if(G?(r.texParameteri(w,10242,ue[M.wrapS]),r.texParameteri(w,10243,ue[M.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,ue[M.wrapR]),r.texParameteri(w,10240,ge[M.magFilter]),r.texParameteri(w,10241,ge[M.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(M.wrapS!==Lt||M.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,O(M.magFilter)),r.texParameteri(w,10241,O(M.minFilter)),M.minFilter!==lt&&M.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.type===xn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Pe(w,M){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",$));const J=M.source;let ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));const ae=F(M);if(ae!==w.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[ae].usedTimes++;const _e=ne[w.__cacheKey];_e!==void 0&&(ne[w.__cacheKey].usedTimes--,_e.usedTimes===0&&P(M)),w.__cacheKey=ae,w.__webglTexture=ne[ae].texture}return G}function xe(w,M,G){let J=3553;M.isDataArrayTexture&&(J=35866),M.isData3DTexture&&(J=32879);const ne=Pe(w,M),ae=M.source;t.bindTexture(J,w.__webglTexture,33984+G);const _e=n.get(ae);if(ae.version!==_e.__version||ne===!0){t.activeTexture(33984+G),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const T=S(M)&&v(M.image)===!1;let I=E(M.image,T,!1,u);I=_t(M,I);const le=v(I)||a,fe=s.convert(M.format,M.encoding);let ce=s.convert(M.type),de=x(M.internalFormat,fe,ce,M.encoding,M.isVideoTexture);X(J,M,le);let ye;const De=M.mipmaps,L=a&&M.isVideoTexture!==!0,oe=_e.__version===void 0||ne===!0,ie=A(M,I,le);if(M.isDepthTexture)de=6402,a?M.type===xn?de=36012:M.type===_n?de=33190:M.type===ni?de=35056:de=33189:M.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===bn&&de===6402&&M.type!==yo&&M.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=_n,ce=s.convert(M.type)),M.format===ai&&de===6402&&(de=34041,M.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ni,ce=s.convert(M.type))),oe&&(L?t.texStorage2D(3553,1,de,I.width,I.height):t.texImage2D(3553,0,de,I.width,I.height,0,fe,ce,null));else if(M.isDataTexture)if(De.length>0&&le){L&&oe&&t.texStorage2D(3553,ie,de,De[0].width,De[0].height);for(let j=0,se=De.length;j<se;j++)ye=De[j],L?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,fe,ce,ye.data):t.texImage2D(3553,j,de,ye.width,ye.height,0,fe,ce,ye.data);M.generateMipmaps=!1}else L?(oe&&t.texStorage2D(3553,ie,de,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,fe,ce,I.data)):t.texImage2D(3553,0,de,I.width,I.height,0,fe,ce,I.data);else if(M.isCompressedTexture){L&&oe&&t.texStorage2D(3553,ie,de,De[0].width,De[0].height);for(let j=0,se=De.length;j<se;j++)ye=De[j],M.format!==Nt?fe!==null?L?t.compressedTexSubImage2D(3553,j,0,0,ye.width,ye.height,fe,ye.data):t.compressedTexImage2D(3553,j,de,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,fe,ce,ye.data):t.texImage2D(3553,j,de,ye.width,ye.height,0,fe,ce,ye.data)}else if(M.isDataArrayTexture)L?(oe&&t.texStorage3D(35866,ie,de,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,fe,ce,I.data)):t.texImage3D(35866,0,de,I.width,I.height,I.depth,0,fe,ce,I.data);else if(M.isData3DTexture)L?(oe&&t.texStorage3D(32879,ie,de,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,fe,ce,I.data)):t.texImage3D(32879,0,de,I.width,I.height,I.depth,0,fe,ce,I.data);else if(M.isFramebufferTexture){if(oe)if(L)t.texStorage2D(3553,ie,de,I.width,I.height);else{let j=I.width,se=I.height;for(let ve=0;ve<ie;ve++)t.texImage2D(3553,ve,de,j,se,0,fe,ce,null),j>>=1,se>>=1}}else if(De.length>0&&le){L&&oe&&t.texStorage2D(3553,ie,de,De[0].width,De[0].height);for(let j=0,se=De.length;j<se;j++)ye=De[j],L?t.texSubImage2D(3553,j,0,0,fe,ce,ye):t.texImage2D(3553,j,de,fe,ce,ye);M.generateMipmaps=!1}else L?(oe&&t.texStorage2D(3553,ie,de,I.width,I.height),t.texSubImage2D(3553,0,0,0,fe,ce,I)):t.texImage2D(3553,0,de,fe,ce,I);C(M,le)&&R(J),_e.__version=ae.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Me(w,M,G){if(M.image.length!==6)return;const J=Pe(w,M),ne=M.source;t.bindTexture(34067,w.__webglTexture,33984+G);const ae=n.get(ne);if(ne.version!==ae.__version||J===!0){t.activeTexture(33984+G),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,T=M.image[0]&&M.image[0].isDataTexture,I=[];for(let j=0;j<6;j++)!_e&&!T?I[j]=E(M.image[j],!1,!0,l):I[j]=T?M.image[j].image:M.image[j],I[j]=_t(M,I[j]);const le=I[0],fe=v(le)||a,ce=s.convert(M.format,M.encoding),de=s.convert(M.type),ye=x(M.internalFormat,ce,de,M.encoding),De=a&&M.isVideoTexture!==!0,L=ae.__version===void 0||J===!0;let oe=A(M,le,fe);X(34067,M,fe);let ie;if(_e){De&&L&&t.texStorage2D(34067,oe,ye,le.width,le.height);for(let j=0;j<6;j++){ie=I[j].mipmaps;for(let se=0;se<ie.length;se++){const ve=ie[se];M.format!==Nt?ce!==null?De?t.compressedTexSubImage2D(34069+j,se,0,0,ve.width,ve.height,ce,ve.data):t.compressedTexImage2D(34069+j,se,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+j,se,0,0,ve.width,ve.height,ce,de,ve.data):t.texImage2D(34069+j,se,ye,ve.width,ve.height,0,ce,de,ve.data)}}}else{ie=M.mipmaps,De&&L&&(ie.length>0&&oe++,t.texStorage2D(34067,oe,ye,I[0].width,I[0].height));for(let j=0;j<6;j++)if(T){De?t.texSubImage2D(34069+j,0,0,0,I[j].width,I[j].height,ce,de,I[j].data):t.texImage2D(34069+j,0,ye,I[j].width,I[j].height,0,ce,de,I[j].data);for(let se=0;se<ie.length;se++){const Ue=ie[se].image[j].image;De?t.texSubImage2D(34069+j,se+1,0,0,Ue.width,Ue.height,ce,de,Ue.data):t.texImage2D(34069+j,se+1,ye,Ue.width,Ue.height,0,ce,de,Ue.data)}}else{De?t.texSubImage2D(34069+j,0,0,0,ce,de,I[j]):t.texImage2D(34069+j,0,ye,ce,de,I[j]);for(let se=0;se<ie.length;se++){const ve=ie[se];De?t.texSubImage2D(34069+j,se+1,0,0,ce,de,ve.image[j]):t.texImage2D(34069+j,se+1,ye,ce,de,ve.image[j])}}}C(M,fe)&&R(34067),ae.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function he(w,M,G,J,ne){const ae=s.convert(G.format,G.encoding),_e=s.convert(G.type),T=x(G.internalFormat,ae,_e,G.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,T,M.width,M.height,M.depth,0,ae,_e,null):t.texImage2D(ne,0,T,M.width,M.height,0,ae,_e,null)),t.bindFramebuffer(36160,w),Ne(M)?d.framebufferTexture2DMultisampleEXT(36160,J,ne,n.get(G).__webglTexture,0,Ye(M)):r.framebufferTexture2D(36160,J,ne,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(w,M,G){if(r.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(G||Ne(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===xn?J=36012:ne.type===_n&&(J=33190));const ae=Ye(M);Ne(M)?d.renderbufferStorageMultisampleEXT(36161,ae,J,M.width,M.height):r.renderbufferStorageMultisample(36161,ae,J,M.width,M.height)}else r.renderbufferStorage(36161,J,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const J=Ye(M);G&&Ne(M)===!1?r.renderbufferStorageMultisample(36161,J,35056,M.width,M.height):Ne(M)?d.renderbufferStorageMultisampleEXT(36161,J,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<J.length;ne++){const ae=J[ne],_e=s.convert(ae.format,ae.encoding),T=s.convert(ae.type),I=x(ae.internalFormat,_e,T,ae.encoding),le=Ye(M);G&&Ne(M)===!1?r.renderbufferStorageMultisample(36161,le,I,M.width,M.height):Ne(M)?d.renderbufferStorageMultisampleEXT(36161,le,I,M.width,M.height):r.renderbufferStorage(36161,I,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function Ee(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,ne=Ye(M);if(M.depthTexture.format===bn)Ne(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ne):r.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===ai)Ne(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ne):r.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function me(w){const M=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ee(M.__webglFramebuffer,w)}else if(G){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=r.createRenderbuffer(),Fe(M.__webglDepthbuffer[J],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Fe(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function We(w,M,G){const J=n.get(w);M!==void 0&&he(J.__webglFramebuffer,w,w.texture,36064,3553),G!==void 0&&me(w)}function Qe(w){const M=w.texture,G=n.get(w),J=n.get(M);w.addEventListener("dispose",ee),w.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=M.version,o.memory.textures++);const ne=w.isWebGLCubeRenderTarget===!0,ae=w.isWebGLMultipleRenderTargets===!0,_e=v(w)||a;if(ne){G.__webglFramebuffer=[];for(let T=0;T<6;T++)G.__webglFramebuffer[T]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const T=w.texture;for(let I=0,le=T.length;I<le;I++){const fe=n.get(T[I]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ne(w)===!1){const T=ae?M:[M];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let I=0;I<T.length;I++){const le=T[I];G.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[I]);const fe=s.convert(le.format,le.encoding),ce=s.convert(le.type),de=x(le.internalFormat,fe,ce,le.encoding,w.isXRRenderTarget===!0),ye=Ye(w);r.renderbufferStorageMultisample(36161,ye,de,w.width,w.height),r.framebufferRenderbuffer(36160,36064+I,36161,G.__webglColorRenderbuffer[I])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,J.__webglTexture),X(34067,M,_e);for(let T=0;T<6;T++)he(G.__webglFramebuffer[T],w,M,36064,34069+T);C(M,_e)&&R(34067),t.unbindTexture()}else if(ae){const T=w.texture;for(let I=0,le=T.length;I<le;I++){const fe=T[I],ce=n.get(fe);t.bindTexture(3553,ce.__webglTexture),X(3553,fe,_e),he(G.__webglFramebuffer,w,fe,36064+I,3553),C(fe,_e)&&R(3553)}t.unbindTexture()}else{let T=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?T=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,J.__webglTexture),X(T,M,_e),he(G.__webglFramebuffer,w,M,36064,T),C(M,_e)&&R(T),t.unbindTexture()}w.depthBuffer&&me(w)}function je(w){const M=v(w)||a,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0,ne=G.length;J<ne;J++){const ae=G[J];if(C(ae,M)){const _e=w.isWebGLCubeRenderTarget?34067:3553,T=n.get(ae).__webglTexture;t.bindTexture(_e,T),R(_e),t.unbindTexture()}}}function ht(w){if(a&&w.samples>0&&Ne(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,J=w.height;let ne=16384;const ae=[],_e=w.stencilBuffer?33306:36096,T=n.get(w),I=w.isWebGLMultipleRenderTargets===!0;if(I)for(let le=0;le<M.length;le++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let le=0;le<M.length;le++){ae.push(36064+le),w.depthBuffer&&ae.push(_e);const fe=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(fe===!1&&(w.depthBuffer&&(ne|=256),w.stencilBuffer&&(ne|=1024)),I&&r.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[le]),fe===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),I){const ce=n.get(M[le]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ce,0)}r.blitFramebuffer(0,0,G,J,0,0,G,J,ne,9728),g&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let le=0;le<M.length;le++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,T.__webglColorRenderbuffer[le]);const fe=n.get(M[le]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Ye(w){return Math.min(f,w.samples)}function Ne(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(w){const M=o.render.frame;m.get(w)!==M&&(m.set(w,M),w.update())}function _t(w,M){const G=w.encoding,J=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===fs||G!==An&&(G===Ge?a===!1?e.has("EXT_sRGB")===!0&&J===Nt?(w.format=fs,w.minFilter=yt,w.generateMipmaps=!1):M=wo.sRGBToLinear(M):(J!==Nt||ne!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),M}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=We,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ne}function Ep(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Tn)return 5121;if(s===nc)return 32819;if(s===ic)return 32820;if(s===Ql)return 5120;if(s===ec)return 5122;if(s===yo)return 5123;if(s===tc)return 5124;if(s===_n)return 5125;if(s===xn)return 5126;if(s===wi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rc)return 6406;if(s===Nt)return 6408;if(s===ac)return 6409;if(s===oc)return 6410;if(s===bn)return 6402;if(s===ai)return 34041;if(s===lc)return 6403;if(s===sc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===fs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===cc)return 36244;if(s===uc)return 33319;if(s===hc)return 33320;if(s===fc)return 36249;if(s===Er||s===Tr||s===Ar||s===Cr)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hs||s===Ws||s===qs||s===Xs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ws)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===js||s===Ys)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===js)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ys)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zs||s===$s||s===Ks||s===Js||s===Qs||s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===aa||s===oa||s===la)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$s)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ks)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Js)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ea)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ta)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===na)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ia)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ra)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===aa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===la)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ca)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ca)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ni?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Tp extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ji extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const b=new Ji;b.matrixAutoUpdate=!1,b.visible=!1,l.joints[p.jointName]=b,l.add(b)}const _=l.joints[p.jointName];h!==null&&(_.matrix.fromArray(h.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=h.radius),_.visible=h!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,m=.005;l.inputState.pinching&&d>g+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class Cp extends Rt{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:bn,u!==bn&&u!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bn&&(n=_n),n===void 0&&u===ai&&(n=ni),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:lt,this.minFilter=c!==void 0?c:lt,this.flipY=!1,this.generateMipmaps=!1}}class Lp extends Pn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,f=null,d=null,g=null;const m=t.getContextAttributes();let p=null,h=null;const _=[],b=[],E=new bt;E.layers.enable(1),E.viewport=new et;const v=new bt;v.layers.enable(2),v.viewport=new et;const S=[E,v],C=new Tp;C.layers.enable(1),C.layers.enable(2);let R=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let z=_[F];return z===void 0&&(z=new es,_[F]=z),z.getTargetRaySpace()},this.getControllerGrip=function(F){let z=_[F];return z===void 0&&(z=new es,_[F]=z),z.getGripSpace()},this.getHand=function(F){let z=_[F];return z===void 0&&(z=new es,_[F]=z),z.getHandSpace()};function A(F){const z=b.indexOf(F.inputSource);if(z===-1)return;const Q=_[z];Q!==void 0&&Q.dispatchEvent({type:F.type,data:F.inputSource})}function O(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",$);for(let F=0;F<_.length;F++){const z=b[F];z!==null&&(b[F]=null,_[F].disconnect(z))}R=null,x=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,h=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",O),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:d}),h=new Cn(d.framebufferWidth,d.framebufferHeight,{format:Nt,type:Tn,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let z=null,Q=null,Z=null;m.depth&&(Z=m.stencil?35056:33190,z=m.stencil?ai:bn,Q=m.stencil?ni:_n);const te={colorFormat:32856,depthFormat:Z,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(te),i.updateRenderState({layers:[f]}),h=new Cn(f.textureWidth,f.textureHeight,{format:Nt,type:Tn,depthTexture:new Cp(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const ue=e.properties.get(h);ue.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function $(F){for(let z=0;z<F.removed.length;z++){const Q=F.removed[z],Z=b.indexOf(Q);Z>=0&&(b[Z]=null,_[Z].dispatchEvent({type:"disconnected",data:Q}))}for(let z=0;z<F.added.length;z++){const Q=F.added[z];let Z=b.indexOf(Q);if(Z===-1){for(let ue=0;ue<_.length;ue++)if(ue>=b.length){b.push(Q),Z=ue;break}else if(b[ue]===null){b[ue]=Q,Z=ue;break}if(Z===-1)break}const te=_[Z];te&&te.dispatchEvent({type:"connected",data:Q})}}const ee=new N,k=new N;function P(F,z,Q){ee.setFromMatrixPosition(z.matrixWorld),k.setFromMatrixPosition(Q.matrixWorld);const Z=ee.distanceTo(k),te=z.projectionMatrix.elements,ue=Q.projectionMatrix.elements,ge=te[14]/(te[10]-1),X=te[14]/(te[10]+1),Pe=(te[9]+1)/te[5],xe=(te[9]-1)/te[5],Me=(te[8]-1)/te[0],he=(ue[8]+1)/ue[0],Fe=ge*Me,Ee=ge*he,me=Z/(-Me+he),We=me*-Me;z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(We),F.translateZ(me),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Qe=ge+me,je=X+me,ht=Fe-We,Ye=Ee+(Z-We),Ne=Pe*X/je*Qe,gt=xe*X/je*Qe;F.projectionMatrix.makePerspective(ht,Ye,Ne,gt,Qe,je)}function q(F,z){z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;C.near=v.near=E.near=F.near,C.far=v.far=E.far=F.far,(R!==C.near||x!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,x=C.far);const z=F.parent,Q=C.cameras;q(C,z);for(let te=0;te<Q.length;te++)q(Q[te],z);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),F.matrix.copy(C.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const Z=F.children;for(let te=0,ue=Z.length;te<ue;te++)Z[te].updateMatrixWorld(!0);Q.length===2?P(C,E,v):C.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(F){f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)};let Y=null;function K(F,z){if(l=z.getViewerPose(c||o),g=z,l!==null){const Q=l.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let Z=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,Z=!0);for(let te=0;te<Q.length;te++){const ue=Q[te];let ge=null;if(d!==null)ge=d.getViewport(ue);else{const Pe=u.getViewSubImage(f,ue);ge=Pe.viewport,te===0&&(e.setRenderTargetTextures(h,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(h))}let X=S[te];X===void 0&&(X=new bt,X.layers.enable(te),X.viewport=new et,S[te]=X),X.matrix.fromArray(ue.transform.matrix),X.projectionMatrix.fromArray(ue.projectionMatrix),X.viewport.set(ge.x,ge.y,ge.width,ge.height),te===0&&C.matrix.copy(X.matrix),Z===!0&&C.cameras.push(X)}}for(let Q=0;Q<_.length;Q++){const Z=b[Q],te=_[Q];Z!==null&&te!==void 0&&te.update(Z,z,c||o)}Y&&Y(F,z),g=null}const V=new Io;V.setAnimationLoop(K),this.setAnimationLoop=function(F){Y=F},this.dispose=function(){}}}function Rp(r,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,_,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),l(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,E)):h.isMeshMatcapMaterial?(i(p,h),g(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),m(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,_,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===wt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===wt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const v=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*v}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let E;h.aoMap?E=h.aoMap:h.lightMap&&(E=h.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,_,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let E;h.map?E=h.map:h.alphaMap&&(E=h.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===wt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function m(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Dp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(b,E){const v=E.program;n.uniformBlockBinding(b,v)}function l(b,E){let v=i[b.id];v===void 0&&(m(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",h));const S=E.program;n.updateUBOMapping(b,S);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function u(b){const E=f();b.__bindingPointIndex=E;const v=r.createBuffer(),S=b.__size,C=b.usage;return r.bindBuffer(35345,v),r.bufferData(35345,S,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,E,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=i[b.id],v=b.uniforms,S=b.__cache;r.bindBuffer(35345,E);for(let C=0,R=v.length;C<R;C++){const x=v[C];if(g(x,C,S)===!0){const A=x.value,O=x.__offset;typeof A=="number"?(x.__data[0]=A,r.bufferSubData(35345,O,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):A.toArray(x.__data),r.bufferSubData(35345,O,x.__data))}}r.bindBuffer(35345,null)}function g(b,E,v){const S=b.value;if(v[E]===void 0)return typeof S=="number"?v[E]=S:v[E]=S.clone(),!0;if(typeof S=="number"){if(v[E]!==S)return v[E]=S,!0}else{const C=v[E];if(C.equals(S)===!1)return C.copy(S),!0}return!1}function m(b){const E=b.uniforms;let v=0;const S=16;let C=0;for(let R=0,x=E.length;R<x;R++){const A=E[R],O=p(A);if(A.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,R>0){C=v%S;const $=S-C;C!==0&&$-O.boundary<0&&(v+=S-C,A.__offset=v)}v+=O.storage}return C=v%S,C>0&&(v+=S-C),b.__size=v,b.__cache={},this}function p(b){const E=b.value,v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function h(b){const E=b.target;E.removeEventListener("dispose",h);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function _(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}function Pp(){const r=cr("canvas");return r.style.display="block",r}function zo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Pp(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=An,this.physicallyCorrectLights=!1,this.toneMapping=Yt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,_=0,b=0,E=null,v=-1,S=null;const C=new et,R=new et;let x=null,A=e.width,O=e.height,$=1,ee=null,k=null;const P=new et(0,0,A,O),q=new et(0,0,A,O);let Y=!1;const K=new Po;let V=!1,F=!1,z=null;const Q=new tt,Z=new Ce,te=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return E===null?$:1}let X=t;function Pe(y,U){for(let H=0;H<y.length;H++){const D=y[H],W=e.getContext(D,U);if(W!==null)return W}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ys}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",De,!1),X===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),X=Pe(U,y),X===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let xe,Me,he,Fe,Ee,me,We,Qe,je,ht,Ye,Ne,gt,_t,w,M,G,J,ne,ae,_e,T,I,le;function fe(){xe=new Hf(X),Me=new Of(X,xe,r),xe.init(Me),T=new Ep(X,xe,Me),he=new Sp(X,xe,Me),Fe=new Xf,Ee=new cp,me=new wp(X,xe,he,Ee,Me,T,Fe),We=new zf(p),Qe=new Vf(p),je=new tu(X,Me),I=new Ff(X,xe,je,Me),ht=new Wf(X,je,Fe,I),Ye=new $f(X,ht,je,Fe),ne=new Zf(X,Me,me),M=new Uf(Ee),Ne=new lp(p,We,Qe,xe,Me,I,M),gt=new Rp(p,Ee),_t=new hp,w=new _p(xe,Me),J=new If(p,We,he,Ye,u,o),G=new bp(p,Ye,Me),le=new Dp(X,Fe,Me,he),ae=new Nf(X,xe,Fe,Me),_e=new qf(X,xe,Fe,Me),Fe.programs=Ne.programs,p.capabilities=Me,p.extensions=xe,p.properties=Ee,p.renderLists=_t,p.shadowMap=G,p.state=he,p.info=Fe}fe();const ce=new Lp(p,X);this.xr=ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const y=xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(A,O,!1))},this.getSize=function(y){return y.set(A,O)},this.setSize=function(y,U,H){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=y,O=U,e.width=Math.floor(y*$),e.height=Math.floor(U*$),H!==!1&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(A*$,O*$).floor()},this.setDrawingBufferSize=function(y,U,H){A=y,O=U,$=H,e.width=Math.floor(y*H),e.height=Math.floor(U*H),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(P)},this.setViewport=function(y,U,H,D){y.isVector4?P.set(y.x,y.y,y.z,y.w):P.set(y,U,H,D),he.viewport(C.copy(P).multiplyScalar($).floor())},this.getScissor=function(y){return y.copy(q)},this.setScissor=function(y,U,H,D){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,U,H,D),he.scissor(R.copy(q).multiplyScalar($).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(y){he.setScissorTest(Y=y)},this.setOpaqueSort=function(y){ee=y},this.setTransparentSort=function(y){k=y},this.getClearColor=function(y){return y.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(y=!0,U=!0,H=!0){let D=0;y&&(D|=16384),U&&(D|=256),H&&(D|=1024),X.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",De,!1),_t.dispose(),w.dispose(),Ee.dispose(),We.dispose(),Qe.dispose(),Ye.dispose(),I.dispose(),le.dispose(),Ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ve),ce.removeEventListener("sessionend",Ue),z&&(z.dispose(),z=null),Ve.stop()};function de(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const y=Fe.autoReset,U=G.enabled,H=G.autoUpdate,D=G.needsUpdate,W=G.type;fe(),Fe.autoReset=y,G.enabled=U,G.autoUpdate=H,G.needsUpdate=D,G.type=W}function De(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function L(y){const U=y.target;U.removeEventListener("dispose",L),oe(U)}function oe(y){ie(y),Ee.remove(y)}function ie(y){const U=Ee.get(y).programs;U!==void 0&&(U.forEach(function(H){Ne.releaseProgram(H)}),y.isShaderMaterial&&Ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,H,D,W,pe){U===null&&(U=ue);const be=W.isMesh&&W.matrixWorld.determinant()<0,Te=hl(y,U,H,D,W);he.setMaterial(D,be);let Se=H.index;const Oe=H.attributes.position;if(Se===null){if(Oe===void 0||Oe.count===0)return}else if(Se.count===0)return;let Le=1;D.wireframe===!0&&(Se=ht.getWireframeAttribute(H),Le=2),I.setup(W,D,Te,H,Se);let Re,ke=ae;Se!==null&&(Re=je.get(Se),ke=_e,ke.setIndex(Re));const cn=Se!==null?Se.count:Oe.count,Fn=H.drawRange.start*Le,Nn=H.drawRange.count*Le,Pt=pe!==null?pe.start*Le:0,Ie=pe!==null?pe.count*Le:1/0,On=Math.max(Fn,Pt),qe=Math.min(cn,Fn+Nn,Pt+Ie)-1,vt=Math.max(0,qe-On+1);if(vt!==0){if(W.isMesh)D.wireframe===!0?(he.setLineWidth(D.wireframeLinewidth*ge()),ke.setMode(1)):ke.setMode(4);else if(W.isLine){let $t=D.linewidth;$t===void 0&&($t=1),he.setLineWidth($t*ge()),W.isLineSegments?ke.setMode(1):W.isLineLoop?ke.setMode(2):ke.setMode(3)}else W.isPoints?ke.setMode(0):W.isSprite&&ke.setMode(4);if(W.isInstancedMesh)ke.renderInstances(On,vt,W.count);else if(H.isInstancedBufferGeometry){const $t=Math.min(H.instanceCount,H._maxInstanceCount);ke.renderInstances(On,vt,$t)}else ke.render(On,vt)}},this.compile=function(y,U){function H(D,W,pe){D.transparent===!0&&D.side===on?(D.side=wt,D.needsUpdate=!0,Di(D,W,pe),D.side=ii,D.needsUpdate=!0,Di(D,W,pe),D.side=on):Di(D,W,pe)}d=w.get(y),d.init(),m.push(d),y.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(D){const W=D.material;if(W)if(Array.isArray(W))for(let pe=0;pe<W.length;pe++){const be=W[pe];H(be,y,D)}else H(W,y,D)}),m.pop(),d=null};let j=null;function se(y){j&&j(y)}function ve(){Ve.stop()}function Ue(){Ve.start()}const Ve=new Io;Ve.setAnimationLoop(se),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(y){j=y,ce.setAnimationLoop(y),y===null?Ve.stop():Ve.start()},ce.addEventListener("sessionstart",ve),ce.addEventListener("sessionend",Ue),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,U,E),d=w.get(y,m.length),d.init(),m.push(d),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Q),F=this.localClippingEnabled,V=M.init(this.clippingPlanes,F,U),f=_t.get(y,g.length),f.init(),g.push(f),Zt(y,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ee,k),V===!0&&M.beginShadows();const H=d.state.shadowsArray;if(G.render(H,y,U),V===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(f,y),d.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const D=U.cameras;for(let W=0,pe=D.length;W<pe;W++){const be=D[W];Be(f,y,be,be.viewport)}}else Be(f,y,U);E!==null&&(me.updateMultisampleRenderTarget(E),me.updateRenderTargetMipmap(E)),y.isScene===!0&&y.onAfterRender(p,y,U),I.resetDefaultState(),v=-1,S=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function Zt(y,U,H,D){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){D&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const be=Ye.update(y),Te=y.material;Te.visible&&f.push(y,be,Te,H,te.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Fe.render.frame&&(y.skeleton.update(),y.skeleton.frame=Fe.render.frame),!y.frustumCulled||K.intersectsObject(y))){D&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const be=Ye.update(y),Te=y.material;if(Array.isArray(Te)){const Se=be.groups;for(let Oe=0,Le=Se.length;Oe<Le;Oe++){const Re=Se[Oe],ke=Te[Re.materialIndex];ke&&ke.visible&&f.push(y,be,ke,H,te.z,Re)}}else Te.visible&&f.push(y,be,Te,H,te.z,null)}}const pe=y.children;for(let be=0,Te=pe.length;be<Te;be++)Zt(pe[be],U,H,D)}function Be(y,U,H,D){const W=y.opaque,pe=y.transmissive,be=y.transparent;d.setupLightsView(H),pe.length>0&&zt(W,U,H),D&&he.viewport(C.copy(D)),W.length>0&&xt(W,U,H),pe.length>0&&xt(pe,U,H),be.length>0&&xt(be,U,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function zt(y,U,H){const D=Me.isWebGL2;z===null&&(z=new Cn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?wi:Tn,minFilter:pr,samples:D&&s===!0?4:0})),p.getDrawingBufferSize(Z),D?z.setSize(Z.x,Z.y):z.setSize(lr(Z.x),lr(Z.y));const W=p.getRenderTarget();p.setRenderTarget(z),p.clear();const pe=p.toneMapping;p.toneMapping=Yt,xt(y,U,H),p.toneMapping=pe,me.updateMultisampleRenderTarget(z),me.updateRenderTargetMipmap(z),p.setRenderTarget(W)}function xt(y,U,H){const D=U.isScene===!0?U.overrideMaterial:null;for(let W=0,pe=y.length;W<pe;W++){const be=y[W],Te=be.object,Se=be.geometry,Oe=D===null?be.material:D,Le=be.group;Te.layers.test(H.layers)&&ul(Te,U,H,Se,Oe,Le)}}function ul(y,U,H,D,W,pe){y.onBeforeRender(p,U,H,D,W,pe),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(p,U,H,D,y,pe),W.transparent===!0&&W.side===on?(W.side=wt,W.needsUpdate=!0,p.renderBufferDirect(H,U,D,W,y,pe),W.side=ii,W.needsUpdate=!0,p.renderBufferDirect(H,U,D,W,y,pe),W.side=on):p.renderBufferDirect(H,U,D,W,y,pe),y.onAfterRender(p,U,H,D,W,pe)}function Di(y,U,H){U.isScene!==!0&&(U=ue);const D=Ee.get(y),W=d.state.lights,pe=d.state.shadowsArray,be=W.state.version,Te=Ne.getParameters(y,W.state,pe,U,H),Se=Ne.getProgramCacheKey(Te);let Oe=D.programs;D.environment=y.isMeshStandardMaterial?U.environment:null,D.fog=U.fog,D.envMap=(y.isMeshStandardMaterial?Qe:We).get(y.envMap||D.environment),Oe===void 0&&(y.addEventListener("dispose",L),Oe=new Map,D.programs=Oe);let Le=Oe.get(Se);if(Le!==void 0){if(D.currentProgram===Le&&D.lightsStateVersion===be)return Ds(y,Te),Le}else Te.uniforms=Ne.getUniforms(y),y.onBuild(H,Te,p),y.onBeforeCompile(Te,p),Le=Ne.acquireProgram(Te,Se),Oe.set(Se,Le),D.uniforms=Te.uniforms;const Re=D.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=M.uniform),Ds(y,Te),D.needsLights=dl(y),D.lightsStateVersion=be,D.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMap.value=W.state.directionalShadowMap,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotShadowMap.value=W.state.spotShadowMap,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMap.value=W.state.pointShadowMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix);const ke=Le.getUniforms(),cn=tr.seqWithValue(ke.seq,Re);return D.currentProgram=Le,D.uniformsList=cn,Le}function Ds(y,U){const H=Ee.get(y);H.outputEncoding=U.outputEncoding,H.instancing=U.instancing,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function hl(y,U,H,D,W){U.isScene!==!0&&(U=ue),me.resetTextureUnits();const pe=U.fog,be=D.isMeshStandardMaterial?U.environment:null,Te=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:An,Se=(D.isMeshStandardMaterial?Qe:We).get(D.envMap||be),Oe=D.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Le=!!D.normalMap&&!!H.attributes.tangent,Re=!!H.morphAttributes.position,ke=!!H.morphAttributes.normal,cn=!!H.morphAttributes.color,Fn=D.toneMapped?p.toneMapping:Yt,Nn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=Nn!==void 0?Nn.length:0,Ie=Ee.get(D),On=d.state.lights;if(V===!0&&(F===!0||y!==S)){const ft=y===S&&D.id===v;M.setState(D,y,ft)}let qe=!1;D.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==On.state.version||Ie.outputEncoding!==Te||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Se||D.fog===!0&&Ie.fog!==pe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==M.numPlanes||Ie.numIntersection!==M.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Le||Ie.morphTargets!==Re||Ie.morphNormals!==ke||Ie.morphColors!==cn||Ie.toneMapping!==Fn||Me.isWebGL2===!0&&Ie.morphTargetsCount!==Pt)&&(qe=!0):(qe=!0,Ie.__version=D.version);let vt=Ie.currentProgram;qe===!0&&(vt=Di(D,U,W));let $t=!1,pi=!1,br=!1;const st=vt.getUniforms(),un=Ie.uniforms;if(he.useProgram(vt.program)&&($t=!0,pi=!0,br=!0),D.id!==v&&(v=D.id,pi=!0),$t||S!==y){if(st.setValue(X,"projectionMatrix",y.projectionMatrix),Me.logarithmicDepthBuffer&&st.setValue(X,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),S!==y&&(S=y,pi=!0,br=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const ft=st.map.cameraPosition;ft!==void 0&&ft.setValue(X,te.setFromMatrixPosition(y.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&st.setValue(X,"isOrthographic",y.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||W.isSkinnedMesh)&&st.setValue(X,"viewMatrix",y.matrixWorldInverse)}if(W.isSkinnedMesh){st.setOptional(X,W,"bindMatrix"),st.setOptional(X,W,"bindMatrixInverse");const ft=W.skeleton;ft&&(Me.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),st.setValue(X,"boneTexture",ft.boneTexture,me),st.setValue(X,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sr=H.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0&&Me.isWebGL2===!0)&&ne.update(W,H,D,vt),(pi||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,st.setValue(X,"receiveShadow",W.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(un.envMap.value=Se,un.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),pi&&(st.setValue(X,"toneMappingExposure",p.toneMappingExposure),Ie.needsLights&&fl(un,br),pe&&D.fog===!0&&gt.refreshFogUniforms(un,pe),gt.refreshMaterialUniforms(un,D,$,O,z),tr.upload(X,Ie.uniformsList,un,me)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(tr.upload(X,Ie.uniformsList,un,me),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&st.setValue(X,"center",W.center),st.setValue(X,"modelViewMatrix",W.modelViewMatrix),st.setValue(X,"normalMatrix",W.normalMatrix),st.setValue(X,"modelMatrix",W.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const ft=D.uniformsGroups;for(let wr=0,pl=ft.length;wr<pl;wr++)if(Me.isWebGL2){const Ps=ft[wr];le.update(Ps,vt),le.bind(Ps,vt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vt}function fl(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function dl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(y,U,H){Ee.get(y.texture).__webglTexture=U,Ee.get(y.depthTexture).__webglTexture=H;const D=Ee.get(y);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=H===void 0,D.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const H=Ee.get(y);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,H=0){E=y,_=U,b=H;let D=!0;if(y){const Se=Ee.get(y);Se.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),D=!1):Se.__webglFramebuffer===void 0?me.setupRenderTarget(y):Se.__hasExternalTextures&&me.rebindTextures(y,Ee.get(y.texture).__webglTexture,Ee.get(y.depthTexture).__webglTexture)}let W=null,pe=!1,be=!1;if(y){const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture)&&(be=!0);const Oe=Ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(W=Oe[U],pe=!0):Me.isWebGL2&&y.samples>0&&me.useMultisampledRTT(y)===!1?W=Ee.get(y).__webglMultisampledFramebuffer:W=Oe,C.copy(y.viewport),R.copy(y.scissor),x=y.scissorTest}else C.copy(P).multiplyScalar($).floor(),R.copy(q).multiplyScalar($).floor(),x=Y;if(he.bindFramebuffer(36160,W)&&Me.drawBuffers&&D&&he.drawBuffers(y,W),he.viewport(C),he.scissor(R),he.setScissorTest(x),pe){const Se=Ee.get(y.texture);X.framebufferTexture2D(36160,36064,34069+U,Se.__webglTexture,H)}else if(be){const Se=Ee.get(y.texture),Oe=U||0;X.framebufferTextureLayer(36160,36064,Se.__webglTexture,H||0,Oe)}v=-1},this.readRenderTargetPixels=function(y,U,H,D,W,pe,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){he.bindFramebuffer(36160,Te);try{const Se=y.texture,Oe=Se.format,Le=Se.type;if(Oe!==Nt&&T.convert(Oe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===wi&&(xe.has("EXT_color_buffer_half_float")||Me.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==Tn&&T.convert(Le)!==X.getParameter(35738)&&!(Le===xn&&(Me.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-D&&H>=0&&H<=y.height-W&&X.readPixels(U,H,D,W,T.convert(Oe),T.convert(Le),pe)}finally{const Se=E!==null?Ee.get(E).__webglFramebuffer:null;he.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(y,U,H=0){const D=Math.pow(2,-H),W=Math.floor(U.image.width*D),pe=Math.floor(U.image.height*D);me.setTexture2D(U,0),X.copyTexSubImage2D(3553,H,0,0,y.x,y.y,W,pe),he.unbindTexture()},this.copyTextureToTexture=function(y,U,H,D=0){const W=U.image.width,pe=U.image.height,be=T.convert(H.format),Te=T.convert(H.type);me.setTexture2D(H,0),X.pixelStorei(37440,H.flipY),X.pixelStorei(37441,H.premultiplyAlpha),X.pixelStorei(3317,H.unpackAlignment),U.isDataTexture?X.texSubImage2D(3553,D,y.x,y.y,W,pe,be,Te,U.image.data):U.isCompressedTexture?X.compressedTexSubImage2D(3553,D,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,be,U.mipmaps[0].data):X.texSubImage2D(3553,D,y.x,y.y,be,Te,U.image),D===0&&H.generateMipmaps&&X.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(y,U,H,D,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=y.max.x-y.min.x+1,be=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Se=T.convert(D.format),Oe=T.convert(D.type);let Le;if(D.isData3DTexture)me.setTexture3D(D,0),Le=32879;else if(D.isDataArrayTexture)me.setTexture2DArray(D,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,D.flipY),X.pixelStorei(37441,D.premultiplyAlpha),X.pixelStorei(3317,D.unpackAlignment);const Re=X.getParameter(3314),ke=X.getParameter(32878),cn=X.getParameter(3316),Fn=X.getParameter(3315),Nn=X.getParameter(32877),Pt=H.isCompressedTexture?H.mipmaps[0]:H.image;X.pixelStorei(3314,Pt.width),X.pixelStorei(32878,Pt.height),X.pixelStorei(3316,y.min.x),X.pixelStorei(3315,y.min.y),X.pixelStorei(32877,y.min.z),H.isDataTexture||H.isData3DTexture?X.texSubImage3D(Le,W,U.x,U.y,U.z,pe,be,Te,Se,Oe,Pt.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Le,W,U.x,U.y,U.z,pe,be,Te,Se,Pt.data)):X.texSubImage3D(Le,W,U.x,U.y,U.z,pe,be,Te,Se,Oe,Pt),X.pixelStorei(3314,Re),X.pixelStorei(32878,ke),X.pixelStorei(3316,cn),X.pixelStorei(3315,Fn),X.pixelStorei(32877,Nn),W===0&&D.generateMipmaps&&X.generateMipmap(Le),he.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?me.setTextureCube(y,0):y.isData3DTexture?me.setTexture3D(y,0):y.isDataArrayTexture?me.setTexture2DArray(y,0):me.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){_=0,b=0,E=null,he.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ip extends zo{}Ip.prototype.isWebGL1Renderer=!0;class Fp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Xa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ys);const ja={type:"change"},ts={type:"start"},Ya={type:"end"};class Np extends Pn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",_t),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ja),n.update(),s=i.NONE},this.update=(function(){const T=new N,I=new Ln().setFromUnitVectors(e.up,new N(0,1,0)),le=I.clone().invert(),fe=new N,ce=new Ln,de=2*Math.PI;return function(){const De=n.object.position;T.copy(De).sub(n.target),T.applyQuaternion(I),a.setFromVector3(T),n.autoRotate&&s===i.NONE&&A(R()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let L=n.minAzimuthAngle,oe=n.maxAzimuthAngle;return isFinite(L)&&isFinite(oe)&&(L<-Math.PI?L+=de:L>Math.PI&&(L-=de),oe<-Math.PI?oe+=de:oe>Math.PI&&(oe-=de),L<=oe?a.theta=Math.max(L,Math.min(oe,a.theta)):a.theta=a.theta>(L+oe)/2?Math.max(L,a.theta):Math.min(oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(le),De.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||fe.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(ja),fe.copy(n.object.position),ce.copy(n.object.quaternion),f=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",We),n.domElement.removeEventListener("pointercancel",ht),n.domElement.removeEventListener("wheel",gt),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",_t)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Xa,c=new Xa;let l=1;const u=new N;let f=!1;const d=new Ce,g=new Ce,m=new Ce,p=new Ce,h=new Ce,_=new Ce,b=new Ce,E=new Ce,v=new Ce,S=[],C={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(T){c.theta-=T}function O(T){c.phi-=T}const $=(function(){const T=new N;return function(le,fe){T.setFromMatrixColumn(fe,0),T.multiplyScalar(-le),u.add(T)}})(),ee=(function(){const T=new N;return function(le,fe){n.screenSpacePanning===!0?T.setFromMatrixColumn(fe,1):(T.setFromMatrixColumn(fe,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(le),u.add(T)}})(),k=(function(){const T=new N;return function(le,fe){const ce=n.domElement;if(n.object.isPerspectiveCamera){const de=n.object.position;T.copy(de).sub(n.target);let ye=T.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),$(2*le*ye/ce.clientHeight,n.object.matrix),ee(2*fe*ye/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(le*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),ee(fe*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function P(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){d.set(T.clientX,T.clientY)}function K(T){b.set(T.clientX,T.clientY)}function V(T){p.set(T.clientX,T.clientY)}function F(T){g.set(T.clientX,T.clientY),m.subVectors(g,d).multiplyScalar(n.rotateSpeed);const I=n.domElement;A(2*Math.PI*m.x/I.clientHeight),O(2*Math.PI*m.y/I.clientHeight),d.copy(g),n.update()}function z(T){E.set(T.clientX,T.clientY),v.subVectors(E,b),v.y>0?P(x()):v.y<0&&q(x()),b.copy(E),n.update()}function Q(T){h.set(T.clientX,T.clientY),_.subVectors(h,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(h),n.update()}function Z(T){T.deltaY<0?q(x()):T.deltaY>0&&P(x()),n.update()}function te(T){let I=!1;switch(T.code){case n.keys.UP:k(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),I=!0;break}I&&(T.preventDefault(),n.update())}function ue(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);d.set(T,I)}}function ge(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);p.set(T,I)}}function X(){const T=S[0].pageX-S[1].pageX,I=S[0].pageY-S[1].pageY,le=Math.sqrt(T*T+I*I);b.set(0,le)}function Pe(){n.enableZoom&&X(),n.enablePan&&ge()}function xe(){n.enableZoom&&X(),n.enableRotate&&ue()}function Me(T){if(S.length==1)g.set(T.pageX,T.pageY);else{const le=_e(T),fe=.5*(T.pageX+le.x),ce=.5*(T.pageY+le.y);g.set(fe,ce)}m.subVectors(g,d).multiplyScalar(n.rotateSpeed);const I=n.domElement;A(2*Math.PI*m.x/I.clientHeight),O(2*Math.PI*m.y/I.clientHeight),d.copy(g)}function he(T){if(S.length===1)h.set(T.pageX,T.pageY);else{const I=_e(T),le=.5*(T.pageX+I.x),fe=.5*(T.pageY+I.y);h.set(le,fe)}_.subVectors(h,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(h)}function Fe(T){const I=_e(T),le=T.pageX-I.x,fe=T.pageY-I.y,ce=Math.sqrt(le*le+fe*fe);E.set(0,ce),v.set(0,Math.pow(E.y/b.y,n.zoomSpeed)),P(v.y),b.copy(E)}function Ee(T){n.enableZoom&&Fe(T),n.enablePan&&he(T)}function me(T){n.enableZoom&&Fe(T),n.enableRotate&&Me(T)}function We(T){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",Qe),n.domElement.addEventListener("pointerup",je)),J(T),T.pointerType==="touch"?w(T):Ye(T))}function Qe(T){n.enabled!==!1&&(T.pointerType==="touch"?M(T):Ne(T))}function je(T){ne(T),S.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(Ya),s=i.NONE}function ht(T){ne(T)}function Ye(T){let I;switch(T.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Un.DOLLY:if(n.enableZoom===!1)return;K(T),s=i.DOLLY;break;case Un.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;V(T),s=i.PAN}else{if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}break;case Un.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}else{if(n.enablePan===!1)return;V(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ts)}function Ne(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;F(T);break;case i.DOLLY:if(n.enableZoom===!1)return;z(T);break;case i.PAN:if(n.enablePan===!1)return;Q(T);break}}function gt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(ts),Z(T),n.dispatchEvent(Ya))}function _t(T){n.enabled===!1||n.enablePan===!1||te(T)}function w(T){switch(ae(T),S.length){case 1:switch(n.touches.ONE){case zn.ROTATE:if(n.enableRotate===!1)return;ue(),s=i.TOUCH_ROTATE;break;case zn.PAN:if(n.enablePan===!1)return;ge(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),s=i.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ts)}function M(T){switch(ae(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(T),n.update();break;default:s=i.NONE}}function G(T){n.enabled!==!1&&T.preventDefault()}function J(T){S.push(T)}function ne(T){delete C[T.pointerId];for(let I=0;I<S.length;I++)if(S[I].pointerId==T.pointerId){S.splice(I,1);return}}function ae(T){let I=C[T.pointerId];I===void 0&&(I=new Ce,C[T.pointerId]=I),I.set(T.pageX,T.pageY)}function _e(T){const I=T.pointerId===S[0].pointerId?S[1]:S[0];return C[I.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",We),n.domElement.addEventListener("pointercancel",ht),n.domElement.addEventListener("wheel",gt,{passive:!1}),this.update()}}const Op=hr({__name:"index",setup(r){const e=vs("containerRef");let t=null,n=null,i=null,s=null;function o(l){a();const u=e.value;if(!u)return;const f=new zo({antialias:!0});f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),u.appendChild(f.domElement),t=new Fp,n=new bt(40,window.innerWidth/window.innerHeight,1,100),n.position.set(5,2,8),i=new Np(n,f.domElement),i.target.set(0,.5,0),i.update(),i.enablePan=!1,i.enableDamping=!0;const d=new ui(1,1,1),g=new ws({color:65280}),m=new Ot(d,g);t.add(m);function p(){s=requestAnimationFrame(p),!(!t||!n||!f)&&(performance.now()*.001,i?.update(),f.render(t,n))}p()}function a(){s&&(cancelAnimationFrame(s),s=null),t&&(t.traverse(l=>{l instanceof Ot&&(l.geometry.dispose(),Array.isArray(l.material)?l.material.forEach(u=>u.dispose()):l.material.dispose())}),t=null),n=null,i=null}function c(l){const u=l.alpha??0;Ic.degToRad(u),o()}return fr(()=>{window.addEventListener("deviceorientation",c)}),Ms(()=>{window.removeEventListener("deviceorientation",c),a()}),(l,u)=>(jt(),yn("div",{ref_key:"containerRef",ref:e,class:"w-10/12 h-screen bg-transparent overflow-hidden"},null,512))}});function Bo(r,e){return function(){return r.apply(e,arguments)}}const{toString:Up}=Object.prototype,{getPrototypeOf:As}=Object,{iterator:_r,toStringTag:ko}=Symbol,xr=(r=>e=>{const t=Up.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Dt=r=>(r=r.toLowerCase(),e=>xr(e)===r),vr=r=>e=>typeof e===r,{isArray:fi}=Array,li=vr("undefined");function Ai(r){return r!==null&&!li(r)&&r.constructor!==null&&!li(r.constructor)&&ct(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Go=Dt("ArrayBuffer");function zp(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Go(r.buffer),e}const Bp=vr("string"),ct=vr("function"),Vo=vr("number"),Ci=r=>r!==null&&typeof r=="object",kp=r=>r===!0||r===!1,nr=r=>{if(xr(r)!=="object")return!1;const e=As(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(ko in r)&&!(_r in r)},Gp=r=>{if(!Ci(r)||Ai(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},Vp=Dt("Date"),Hp=Dt("File"),Wp=Dt("Blob"),qp=Dt("FileList"),Xp=r=>Ci(r)&&ct(r.pipe),jp=r=>{let e;return r&&(typeof FormData=="function"&&r instanceof FormData||ct(r.append)&&((e=xr(r))==="formdata"||e==="object"&&ct(r.toString)&&r.toString()==="[object FormData]"))},Yp=Dt("URLSearchParams"),[Zp,$p,Kp,Jp]=["ReadableStream","Request","Response","Headers"].map(Dt),Qp=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Li(r,e,{allOwnKeys:t=!1}={}){if(r===null||typeof r>"u")return;let n,i;if(typeof r!="object"&&(r=[r]),fi(r))for(n=0,i=r.length;n<i;n++)e.call(null,r[n],n,r);else{if(Ai(r))return;const s=t?Object.getOwnPropertyNames(r):Object.keys(r),o=s.length;let a;for(n=0;n<o;n++)a=s[n],e.call(null,r[a],a,r)}}function Ho(r,e){if(Ai(r))return null;e=e.toLowerCase();const t=Object.keys(r);let n=t.length,i;for(;n-- >0;)if(i=t[n],e===i.toLowerCase())return i;return null}const Mn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Wo=r=>!li(r)&&r!==Mn;function ms(){const{caseless:r,skipUndefined:e}=Wo(this)&&this||{},t={},n=(i,s)=>{const o=r&&Ho(t,s)||s;nr(t[o])&&nr(i)?t[o]=ms(t[o],i):nr(i)?t[o]=ms({},i):fi(i)?t[o]=i.slice():(!e||!li(i))&&(t[o]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Li(arguments[i],n);return t}const em=(r,e,t,{allOwnKeys:n}={})=>(Li(e,(i,s)=>{t&&ct(i)?r[s]=Bo(i,t):r[s]=i},{allOwnKeys:n}),r),tm=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),nm=(r,e,t,n)=>{r.prototype=Object.create(e.prototype,n),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:e.prototype}),t&&Object.assign(r.prototype,t)},im=(r,e,t,n)=>{let i,s,o;const a={};if(e=e||{},r==null)return e;do{for(i=Object.getOwnPropertyNames(r),s=i.length;s-- >0;)o=i[s],(!n||n(o,r,e))&&!a[o]&&(e[o]=r[o],a[o]=!0);r=t!==!1&&As(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e},rm=(r,e,t)=>{r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;const n=r.indexOf(e,t);return n!==-1&&n===t},sm=r=>{if(!r)return null;if(fi(r))return r;let e=r.length;if(!Vo(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=r[e];return t},am=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&As(Uint8Array)),om=(r,e)=>{const n=(r&&r[_r]).call(r);let i;for(;(i=n.next())&&!i.done;){const s=i.value;e.call(r,s[0],s[1])}},lm=(r,e)=>{let t;const n=[];for(;(t=r.exec(e))!==null;)n.push(t);return n},cm=Dt("HTMLFormElement"),um=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,i){return n.toUpperCase()+i}),Za=(({hasOwnProperty:r})=>(e,t)=>r.call(e,t))(Object.prototype),hm=Dt("RegExp"),qo=(r,e)=>{const t=Object.getOwnPropertyDescriptors(r),n={};Li(t,(i,s)=>{let o;(o=e(i,s,r))!==!1&&(n[s]=o||i)}),Object.defineProperties(r,n)},fm=r=>{qo(r,(e,t)=>{if(ct(r)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=r[t];if(ct(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},dm=(r,e)=>{const t={},n=i=>{i.forEach(s=>{t[s]=!0})};return fi(r)?n(r):n(String(r).split(e)),t},pm=()=>{},mm=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e;function gm(r){return!!(r&&ct(r.append)&&r[ko]==="FormData"&&r[_r])}const _m=r=>{const e=new Array(10),t=(n,i)=>{if(Ci(n)){if(e.indexOf(n)>=0)return;if(Ai(n))return n;if(!("toJSON"in n)){e[i]=n;const s=fi(n)?[]:{};return Li(n,(o,a)=>{const c=t(o,i+1);!li(c)&&(s[a]=c)}),e[i]=void 0,s}}return n};return t(r,0)},xm=Dt("AsyncFunction"),vm=r=>r&&(Ci(r)||ct(r))&&ct(r.then)&&ct(r.catch),Xo=((r,e)=>r?setImmediate:e?((t,n)=>(Mn.addEventListener("message",({source:i,data:s})=>{i===Mn&&s===t&&n.length&&n.shift()()},!1),i=>{n.push(i),Mn.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ct(Mn.postMessage)),Mm=typeof queueMicrotask<"u"?queueMicrotask.bind(Mn):typeof process<"u"&&process.nextTick||Xo,ym=r=>r!=null&&ct(r[_r]),B={isArray:fi,isArrayBuffer:Go,isBuffer:Ai,isFormData:jp,isArrayBufferView:zp,isString:Bp,isNumber:Vo,isBoolean:kp,isObject:Ci,isPlainObject:nr,isEmptyObject:Gp,isReadableStream:Zp,isRequest:$p,isResponse:Kp,isHeaders:Jp,isUndefined:li,isDate:Vp,isFile:Hp,isBlob:Wp,isRegExp:hm,isFunction:ct,isStream:Xp,isURLSearchParams:Yp,isTypedArray:am,isFileList:qp,forEach:Li,merge:ms,extend:em,trim:Qp,stripBOM:tm,inherits:nm,toFlatObject:im,kindOf:xr,kindOfTest:Dt,endsWith:rm,toArray:sm,forEachEntry:om,matchAll:lm,isHTMLForm:cm,hasOwnProperty:Za,hasOwnProp:Za,reduceDescriptors:qo,freezeMethods:fm,toObjectSet:dm,toCamelCase:um,noop:pm,toFiniteNumber:mm,findKey:Ho,global:Mn,isContextDefined:Wo,isSpecCompliantForm:gm,toJSONObject:_m,isAsyncFn:xm,isThenable:vm,setImmediate:Xo,asap:Mm,isIterable:ym};function we(r,e,t,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}B.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const jo=we.prototype,Yo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Yo[r]={value:r}});Object.defineProperties(we,Yo);Object.defineProperty(jo,"isAxiosError",{value:!0});we.from=(r,e,t,n,i,s)=>{const o=Object.create(jo);B.toFlatObject(r,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError");const a=r&&r.message?r.message:"Error",c=e==null&&r?r.code:e;return we.call(o,a,c,t,n,i),r&&o.cause==null&&Object.defineProperty(o,"cause",{value:r,configurable:!0}),o.name=r&&r.name||"Error",s&&Object.assign(o,s),o};const bm=null;function gs(r){return B.isPlainObject(r)||B.isArray(r)}function Zo(r){return B.endsWith(r,"[]")?r.slice(0,-2):r}function $a(r,e,t){return r?r.concat(e).map(function(i,s){return i=Zo(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function Sm(r){return B.isArray(r)&&!r.some(gs)}const wm=B.toFlatObject(B,{},null,function(e){return/^is[A-Z]/.test(e)});function Mr(r,e,t){if(!B.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,t=B.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,h){return!B.isUndefined(h[p])});const n=t.metaTokens,i=t.visitor||u,s=t.dots,o=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(e);if(!B.isFunction(i))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(B.isDate(m))return m.toISOString();if(B.isBoolean(m))return m.toString();if(!c&&B.isBlob(m))throw new we("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(m)||B.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,p,h){let _=m;if(m&&!h&&typeof m=="object"){if(B.endsWith(p,"{}"))p=n?p:p.slice(0,-2),m=JSON.stringify(m);else if(B.isArray(m)&&Sm(m)||(B.isFileList(m)||B.endsWith(p,"[]"))&&(_=B.toArray(m)))return p=Zo(p),_.forEach(function(E,v){!(B.isUndefined(E)||E===null)&&e.append(o===!0?$a([p],v,s):o===null?p:p+"[]",l(E))}),!1}return gs(m)?!0:(e.append($a(h,p,s),l(m)),!1)}const f=[],d=Object.assign(wm,{defaultVisitor:u,convertValue:l,isVisitable:gs});function g(m,p){if(!B.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+p.join("."));f.push(m),B.forEach(m,function(_,b){(!(B.isUndefined(_)||_===null)&&i.call(e,_,B.isString(b)?b.trim():b,p,d))===!0&&g(_,p?p.concat(b):[b])}),f.pop()}}if(!B.isObject(r))throw new TypeError("data must be an object");return g(r),e}function Ka(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Cs(r,e){this._pairs=[],r&&Mr(r,this,e)}const $o=Cs.prototype;$o.append=function(e,t){this._pairs.push([e,t])};$o.toString=function(e){const t=e?function(n){return e.call(this,n,Ka)}:Ka;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Em(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ko(r,e,t){if(!e)return r;const n=t&&t.encode||Em;B.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let s;if(i?s=i(e,t):s=B.isURLSearchParams(e)?e.toString():new Cs(e,t).toString(n),s){const o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+s}return r}class Ja{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){B.forEach(this.handlers,function(n){n!==null&&e(n)})}}const Jo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tm=typeof URLSearchParams<"u"?URLSearchParams:Cs,Am=typeof FormData<"u"?FormData:null,Cm=typeof Blob<"u"?Blob:null,Lm={isBrowser:!0,classes:{URLSearchParams:Tm,FormData:Am,Blob:Cm},protocols:["http","https","file","blob","url","data"]},Ls=typeof window<"u"&&typeof document<"u",_s=typeof navigator=="object"&&navigator||void 0,Rm=Ls&&(!_s||["ReactNative","NativeScript","NS"].indexOf(_s.product)<0),Dm=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Pm=Ls&&window.location.href||"http://localhost",Im=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ls,hasStandardBrowserEnv:Rm,hasStandardBrowserWebWorkerEnv:Dm,navigator:_s,origin:Pm},Symbol.toStringTag,{value:"Module"})),rt={...Im,...Lm};function Fm(r,e){return Mr(r,new rt.classes.URLSearchParams,{visitor:function(t,n,i,s){return rt.isNode&&B.isBuffer(t)?(this.append(n,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function Nm(r){return B.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Om(r){const e={},t=Object.keys(r);let n;const i=t.length;let s;for(n=0;n<i;n++)s=t[n],e[s]=r[s];return e}function Qo(r){function e(t,n,i,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=s>=t.length;return o=!o&&B.isArray(i)?i.length:o,c?(B.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a):((!i[o]||!B.isObject(i[o]))&&(i[o]=[]),e(t,n,i[o],s)&&B.isArray(i[o])&&(i[o]=Om(i[o])),!a)}if(B.isFormData(r)&&B.isFunction(r.entries)){const t={};return B.forEachEntry(r,(n,i)=>{e(Nm(n),i,t,0)}),t}return null}function Um(r,e,t){if(B.isString(r))try{return(e||JSON.parse)(r),B.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}const Ri={transitional:Jo,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,s=B.isObject(e);if(s&&B.isHTMLForm(e)&&(e=new FormData(e)),B.isFormData(e))return i?JSON.stringify(Qo(e)):e;if(B.isArrayBuffer(e)||B.isBuffer(e)||B.isStream(e)||B.isFile(e)||B.isBlob(e)||B.isReadableStream(e))return e;if(B.isArrayBufferView(e))return e.buffer;if(B.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Fm(e,this.formSerializer).toString();if((a=B.isFileList(e))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Mr(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),Um(e)):e}],transformResponse:[function(e){const t=this.transitional||Ri.transitional,n=t&&t.forcedJSONParsing,i=this.responseType==="json";if(B.isResponse(e)||B.isReadableStream(e))return e;if(e&&B.isString(e)&&(n&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?we.from(a,we.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt.classes.FormData,Blob:rt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],r=>{Ri.headers[r]={}});const zm=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bm=r=>{const e={};let t,n,i;return r&&r.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!t||e[t]&&zm[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},Qa=Symbol("internals");function xi(r){return r&&String(r).trim().toLowerCase()}function ir(r){return r===!1||r==null?r:B.isArray(r)?r.map(ir):String(r)}function km(r){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(r);)e[n[1]]=n[2];return e}const Gm=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function ns(r,e,t,n,i){if(B.isFunction(n))return n.call(this,e,t);if(i&&(e=t),!!B.isString(e)){if(B.isString(n))return e.indexOf(n)!==-1;if(B.isRegExp(n))return n.test(e)}}function Vm(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Hm(r,e){const t=B.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+t,{value:function(i,s,o){return this[n].call(this,e,i,s,o)},configurable:!0})})}let ut=class{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function s(a,c,l){const u=xi(c);if(!u)throw new Error("header name must be a non-empty string");const f=B.findKey(i,u);(!f||i[f]===void 0||l===!0||l===void 0&&i[f]!==!1)&&(i[f||c]=ir(a))}const o=(a,c)=>B.forEach(a,(l,u)=>s(l,u,c));if(B.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(B.isString(e)&&(e=e.trim())&&!Gm(e))o(Bm(e),t);else if(B.isObject(e)&&B.isIterable(e)){let a={},c,l;for(const u of e){if(!B.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?B.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,t)}else e!=null&&s(t,e,n);return this}get(e,t){if(e=xi(e),e){const n=B.findKey(this,e);if(n){const i=this[n];if(!t)return i;if(t===!0)return km(i);if(B.isFunction(t))return t.call(this,i,n);if(B.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xi(e),e){const n=B.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||ns(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let i=!1;function s(o){if(o=xi(o),o){const a=B.findKey(n,o);a&&(!t||ns(n,n[a],a,t))&&(delete n[a],i=!0)}}return B.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const s=t[n];(!e||ns(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,n={};return B.forEach(this,(i,s)=>{const o=B.findKey(n,s);if(o){t[o]=ir(i),delete t[s];return}const a=e?Vm(s):String(s).trim();a!==s&&delete t[s],t[a]=ir(i),n[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return B.forEach(this,(n,i)=>{n!=null&&n!==!1&&(t[i]=e&&B.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(i=>n.set(i)),n}static accessor(e){const n=(this[Qa]=this[Qa]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=xi(o);n[a]||(Hm(i,o),n[a]=!0)}return B.isArray(e)?e.forEach(s):s(e),this}};ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(ut.prototype,({value:r},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(n){this[t]=n}}});B.freezeMethods(ut);function is(r,e){const t=this||Ri,n=e||t,i=ut.from(n.headers);let s=n.data;return B.forEach(r,function(a){s=a.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function el(r){return!!(r&&r.__CANCEL__)}function di(r,e,t){we.call(this,r??"canceled",we.ERR_CANCELED,e,t),this.name="CanceledError"}B.inherits(di,we,{__CANCEL__:!0});function tl(r,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?r(t):e(new we("Request failed with status code "+t.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Wm(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function qm(r,e){r=r||10;const t=new Array(r),n=new Array(r);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=n[s];o||(o=l),t[i]=c,n[i]=l;let f=s,d=0;for(;f!==i;)d+=t[f++],f=f%r;if(i=(i+1)%r,i===s&&(s=(s+1)%r),l-o<e)return;const g=u&&l-u;return g?Math.round(d*1e3/g):void 0}}function Xm(r,e){let t=0,n=1e3/e,i,s;const o=(l,u=Date.now())=>{t=u,i=null,s&&(clearTimeout(s),s=null),r(...l)};return[(...l)=>{const u=Date.now(),f=u-t;f>=n?o(l,u):(i=l,s||(s=setTimeout(()=>{s=null,o(i)},n-f)))},()=>i&&o(i)]}const ur=(r,e,t=3)=>{let n=0;const i=qm(50,250);return Xm(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,c=o-n,l=i(c),u=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};r(f)},t)},eo=(r,e)=>{const t=r!=null;return[n=>e[0]({lengthComputable:t,total:r,loaded:n}),e[1]]},to=r=>(...e)=>B.asap(()=>r(...e)),jm=rt.hasStandardBrowserEnv?((r,e)=>t=>(t=new URL(t,rt.origin),r.protocol===t.protocol&&r.host===t.host&&(e||r.port===t.port)))(new URL(rt.origin),rt.navigator&&/(msie|trident)/i.test(rt.navigator.userAgent)):()=>!0,Ym=rt.hasStandardBrowserEnv?{write(r,e,t,n,i,s,o){if(typeof document>"u")return;const a=[`${r}=${encodeURIComponent(e)}`];B.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),B.isString(n)&&a.push(`path=${n}`),B.isString(i)&&a.push(`domain=${i}`),s===!0&&a.push("secure"),B.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(r){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Zm(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function $m(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function nl(r,e,t){let n=!Zm(e);return r&&(n||t==!1)?$m(r,e):e}const no=r=>r instanceof ut?{...r}:r;function Dn(r,e){e=e||{};const t={};function n(l,u,f,d){return B.isPlainObject(l)&&B.isPlainObject(u)?B.merge.call({caseless:d},l,u):B.isPlainObject(u)?B.merge({},u):B.isArray(u)?u.slice():u}function i(l,u,f,d){if(B.isUndefined(u)){if(!B.isUndefined(l))return n(void 0,l,f,d)}else return n(l,u,f,d)}function s(l,u){if(!B.isUndefined(u))return n(void 0,u)}function o(l,u){if(B.isUndefined(u)){if(!B.isUndefined(l))return n(void 0,l)}else return n(void 0,u)}function a(l,u,f){if(f in e)return n(l,u);if(f in r)return n(void 0,l)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>i(no(l),no(u),f,!0)};return B.forEach(Object.keys({...r,...e}),function(u){const f=c[u]||i,d=f(r[u],e[u],u);B.isUndefined(d)&&f!==a||(t[u]=d)}),t}const il=r=>{const e=Dn({},r);let{data:t,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=ut.from(o),e.url=Ko(nl(e.baseURL,e.url,e.allowAbsoluteUrls),r.params,r.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),B.isFormData(t)){if(rt.hasStandardBrowserEnv||rt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(B.isFunction(t.getHeaders)){const c=t.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,f])=>{l.includes(u.toLowerCase())&&o.set(u,f)})}}if(rt.hasStandardBrowserEnv&&(n&&B.isFunction(n)&&(n=n(e)),n||n!==!1&&jm(e.url))){const c=i&&s&&Ym.read(s);c&&o.set(i,c)}return e},Km=typeof XMLHttpRequest<"u",Jm=Km&&function(r){return new Promise(function(t,n){const i=il(r);let s=i.data;const o=ut.from(i.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=i,u,f,d,g,m;function p(){g&&g(),m&&m(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(i.method.toUpperCase(),i.url,!0),h.timeout=i.timeout;function _(){if(!h)return;const E=ut.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),S={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:E,config:r,request:h};tl(function(R){t(R),p()},function(R){n(R),p()},S),h=null}"onloadend"in h?h.onloadend=_:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(_)},h.onabort=function(){h&&(n(new we("Request aborted",we.ECONNABORTED,r,h)),h=null)},h.onerror=function(v){const S=v&&v.message?v.message:"Network Error",C=new we(S,we.ERR_NETWORK,r,h);C.event=v||null,n(C),h=null},h.ontimeout=function(){let v=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const S=i.transitional||Jo;i.timeoutErrorMessage&&(v=i.timeoutErrorMessage),n(new we(v,S.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,r,h)),h=null},s===void 0&&o.setContentType(null),"setRequestHeader"in h&&B.forEach(o.toJSON(),function(v,S){h.setRequestHeader(S,v)}),B.isUndefined(i.withCredentials)||(h.withCredentials=!!i.withCredentials),a&&a!=="json"&&(h.responseType=i.responseType),l&&([d,m]=ur(l,!0),h.addEventListener("progress",d)),c&&h.upload&&([f,g]=ur(c),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",g)),(i.cancelToken||i.signal)&&(u=E=>{h&&(n(!E||E.type?new di(null,r,h):E),h.abort(),h=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const b=Wm(i.url);if(b&&rt.protocols.indexOf(b)===-1){n(new we("Unsupported protocol "+b+":",we.ERR_BAD_REQUEST,r));return}h.send(s||null)})},Qm=(r,e)=>{const{length:t}=r=r?r.filter(Boolean):[];if(e||t){let n=new AbortController,i;const s=function(l){if(!i){i=!0,a();const u=l instanceof Error?l:this.reason;n.abort(u instanceof we?u:new di(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new we(`timeout ${e} of ms exceeded`,we.ETIMEDOUT))},e);const a=()=>{r&&(o&&clearTimeout(o),o=null,r.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),r=null)};r.forEach(l=>l.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=()=>B.asap(a),c}},eg=function*(r,e){let t=r.byteLength;if(t<e){yield r;return}let n=0,i;for(;n<t;)i=n+e,yield r.slice(n,i),n=i},tg=async function*(r,e){for await(const t of ng(r))yield*eg(t,e)},ng=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},io=(r,e,t,n)=>{const i=tg(r,e);let s=0,o,a=c=>{o||(o=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await i.next();if(l){a(),c.close();return}let f=u.byteLength;if(t){let d=s+=f;t(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),i.return()}},{highWaterMark:2})},ro=64*1024,{isFunction:Qi}=B,ig=(({Request:r,Response:e})=>({Request:r,Response:e}))(B.global),{ReadableStream:so,TextEncoder:ao}=B.global,oo=(r,...e)=>{try{return!!r(...e)}catch{return!1}},rg=r=>{r=B.merge.call({skipUndefined:!0},ig,r);const{fetch:e,Request:t,Response:n}=r,i=e?Qi(e):typeof fetch=="function",s=Qi(t),o=Qi(n);if(!i)return!1;const a=i&&Qi(so),c=i&&(typeof ao=="function"?(m=>p=>m.encode(p))(new ao):async m=>new Uint8Array(await new t(m).arrayBuffer())),l=s&&a&&oo(()=>{let m=!1;const p=new t(rt.origin,{body:new so,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!p}),u=o&&a&&oo(()=>B.isReadableStream(new n("").body)),f={stream:u&&(m=>m.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!f[m]&&(f[m]=(p,h)=>{let _=p&&p[m];if(_)return _.call(p);throw new we(`Response type '${m}' is not supported`,we.ERR_NOT_SUPPORT,h)})});const d=async m=>{if(m==null)return 0;if(B.isBlob(m))return m.size;if(B.isSpecCompliantForm(m))return(await new t(rt.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(B.isArrayBufferView(m)||B.isArrayBuffer(m))return m.byteLength;if(B.isURLSearchParams(m)&&(m=m+""),B.isString(m))return(await c(m)).byteLength},g=async(m,p)=>{const h=B.toFiniteNumber(m.getContentLength());return h??d(p)};return async m=>{let{url:p,method:h,data:_,signal:b,cancelToken:E,timeout:v,onDownloadProgress:S,onUploadProgress:C,responseType:R,headers:x,withCredentials:A="same-origin",fetchOptions:O}=il(m),$=e||fetch;R=R?(R+"").toLowerCase():"text";let ee=Qm([b,E&&E.toAbortSignal()],v),k=null;const P=ee&&ee.unsubscribe&&(()=>{ee.unsubscribe()});let q;try{if(C&&l&&h!=="get"&&h!=="head"&&(q=await g(x,_))!==0){let Q=new t(p,{method:"POST",body:_,duplex:"half"}),Z;if(B.isFormData(_)&&(Z=Q.headers.get("content-type"))&&x.setContentType(Z),Q.body){const[te,ue]=eo(q,ur(to(C)));_=io(Q.body,ro,te,ue)}}B.isString(A)||(A=A?"include":"omit");const Y=s&&"credentials"in t.prototype,K={...O,signal:ee,method:h.toUpperCase(),headers:x.normalize().toJSON(),body:_,duplex:"half",credentials:Y?A:void 0};k=s&&new t(p,K);let V=await(s?$(k,O):$(p,K));const F=u&&(R==="stream"||R==="response");if(u&&(S||F&&P)){const Q={};["status","statusText","headers"].forEach(ge=>{Q[ge]=V[ge]});const Z=B.toFiniteNumber(V.headers.get("content-length")),[te,ue]=S&&eo(Z,ur(to(S),!0))||[];V=new n(io(V.body,ro,te,()=>{ue&&ue(),P&&P()}),Q)}R=R||"text";let z=await f[B.findKey(f,R)||"text"](V,m);return!F&&P&&P(),await new Promise((Q,Z)=>{tl(Q,Z,{data:z,headers:ut.from(V.headers),status:V.status,statusText:V.statusText,config:m,request:k})})}catch(Y){throw P&&P(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new we("Network Error",we.ERR_NETWORK,m,k),{cause:Y.cause||Y}):we.from(Y,Y&&Y.code,m,k)}}},sg=new Map,rl=r=>{let e=r&&r.env||{};const{fetch:t,Request:n,Response:i}=e,s=[n,i,t];let o=s.length,a=o,c,l,u=sg;for(;a--;)c=s[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:rg(e)),u=l;return l};rl();const Rs={http:bm,xhr:Jm,fetch:{get:rl}};B.forEach(Rs,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const lo=r=>`- ${r}`,ag=r=>B.isFunction(r)||r===null||r===!1;function og(r,e){r=B.isArray(r)?r:[r];const{length:t}=r;let n,i;const s={};for(let o=0;o<t;o++){n=r[o];let a;if(i=n,!ag(n)&&(i=Rs[(a=String(n)).toLowerCase()],i===void 0))throw new we(`Unknown adapter '${a}'`);if(i&&(B.isFunction(i)||(i=i.get(e))))break;s[a||"#"+o]=i}if(!i){const o=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(lo).join(`
`):" "+lo(o[0]):"as no adapter specified";throw new we("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return i}const sl={getAdapter:og,adapters:Rs};function rs(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new di(null,r)}function co(r){return rs(r),r.headers=ut.from(r.headers),r.data=is.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),sl.getAdapter(r.adapter||Ri.adapter,r)(r).then(function(n){return rs(r),n.data=is.call(r,r.transformResponse,n),n.headers=ut.from(n.headers),n},function(n){return el(n)||(rs(r),n&&n.response&&(n.response.data=is.call(r,r.transformResponse,n.response),n.response.headers=ut.from(n.response.headers))),Promise.reject(n)})}const al="1.13.2",yr={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{yr[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});const uo={};yr.transitional=function(e,t,n){function i(s,o){return"[Axios v"+al+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return(s,o,a)=>{if(e===!1)throw new we(i(o," has been removed"+(t?" in "+t:"")),we.ERR_DEPRECATED);return t&&!uo[o]&&(uo[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};yr.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function lg(r,e,t){if(typeof r!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const n=Object.keys(r);let i=n.length;for(;i-- >0;){const s=n[i],o=e[s];if(o){const a=r[s],c=a===void 0||o(a,s,r);if(c!==!0)throw new we("option "+s+" must be "+c,we.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new we("Unknown option "+s,we.ERR_BAD_OPTION)}}const rr={assertOptions:lg,validators:yr},It=rr.validators;let En=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ja,response:new Ja}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Dn(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:s}=t;n!==void 0&&rr.assertOptions(n,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),i!=null&&(B.isFunction(i)?t.paramsSerializer={serialize:i}:rr.assertOptions(i,{encode:It.function,serialize:It.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),rr.assertOptions(t,{baseUrl:It.spelling("baseURL"),withXsrfToken:It.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&B.merge(s.common,s[t.method]);s&&B.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),t.headers=ut.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(c=c&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});const l=[];this.interceptors.response.forEach(function(p){l.push(p.fulfilled,p.rejected)});let u,f=0,d;if(!c){const m=[co.bind(this),void 0];for(m.unshift(...a),m.push(...l),d=m.length,u=Promise.resolve(t);f<d;)u=u.then(m[f++],m[f++]);return u}d=a.length;let g=t;for(;f<d;){const m=a[f++],p=a[f++];try{g=m(g)}catch(h){p.call(this,h);break}}try{u=co.call(this,g)}catch(m){return Promise.reject(m)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=Dn(this.defaults,e);const t=nl(e.baseURL,e.url,e.allowAbsoluteUrls);return Ko(t,e.params,e.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(e){En.prototype[e]=function(t,n){return this.request(Dn(n||{},{method:e,url:t,data:(n||{}).data}))}});B.forEach(["post","put","patch"],function(e){function t(n){return function(s,o,a){return this.request(Dn(a||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}En.prototype[e]=t(),En.prototype[e+"Form"]=t(!0)});let cg=class ol{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{n.subscribe(a),s=a}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},e(function(s,o,a){n.reason||(n.reason=new di(s,o,a),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new ol(function(i){e=i}),cancel:e}}};function ug(r){return function(t){return r.apply(null,t)}}function hg(r){return B.isObject(r)&&r.isAxiosError===!0}const xs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(xs).forEach(([r,e])=>{xs[e]=r});function ll(r){const e=new En(r),t=Bo(En.prototype.request,e);return B.extend(t,En.prototype,e,{allOwnKeys:!0}),B.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return ll(Dn(r,i))},t}const He=ll(Ri);He.Axios=En;He.CanceledError=di;He.CancelToken=cg;He.isCancel=el;He.VERSION=al;He.toFormData=Mr;He.AxiosError=we;He.Cancel=He.CanceledError;He.all=function(e){return Promise.all(e)};He.spread=ug;He.isAxiosError=hg;He.mergeConfig=Dn;He.AxiosHeaders=ut;He.formToJSON=r=>Qo(B.isHTMLForm(r)?new FormData(r):r);He.getAdapter=sl.getAdapter;He.HttpStatusCode=xs;He.default=He;const{Axios:bg,AxiosError:Sg,CanceledError:wg,isCancel:Eg,CancelToken:Tg,VERSION:Ag,all:Cg,Cancel:Lg,isAxiosError:Rg,spread:Dg,toFormData:Pg,AxiosHeaders:Ig,HttpStatusCode:Fg,formToJSON:Ng,getAdapter:Og,mergeConfig:Ug}=He,cl=He.create({withCredentials:!0,baseURL:"/"});cl.interceptors.response.use(r=>{if(r.config.responseType==="blob")return r;const e=r.data;return e.msg&&(e.message=e.msg),e},r=>{if(r.message!=="cancel")return Promise.reject(r.message)});const fg=()=>cl({url:"https://v2.jinrishici.com/one.json",method:"get"}),dg={class:"w-full bg-black pb-10"},pg={class:"relative w-full h-screen overflow-hidden"},mg={class:"text-center whitespace-normal break-words px-4 sm:px-0 h-full flex items-center justify-center"},gg={class:"min-h-screen bg-black flex justify-center"},_g={class:"w-[90%] md:w-[60%] mx-auto grid place-items-center min-h-16"},zg=hr({__name:"index",setup(r){const e=sn("");return fr(()=>{fg().then(t=>{e.value=t.data.content})}),(t,n)=>(jt(),yn("div",dg,[an("div",pg,[an("div",mg,[ar(e)?(jt(),mo(bl,{key:0,text:ar(e),delay:200,"class-name":"text-sm sm:text-base lg:text-5xl font-semibold text-white mx-auto","animate-by":"letters",direction:"top",threshold:.1,"root-margin":"0px","step-duration":.35},null,8,["text"])):vl("",!0)])]),an("div",gg,[ss(Op)]),an("div",_g,[ss(yl,{sentence:"VueBits Vue Vite TypeScript Tailwindcss Three Gasp Motion-v Ogl",manualMode:!1,blurAmount:2,borderColor:"#27FF64",animationDuration:.5,pauseBetweenAnimations:1})])]))}});export{zg as default};
