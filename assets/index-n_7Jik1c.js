(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="160",Zn={ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ec=0,va=1,tc=2,al=1,ol=2,ln=3,bn=0,Lt=1,Bt=2,Sn=0,Mi=1,xa=2,Ma=3,ya=4,nc=5,Fn=100,ic=101,sc=102,Sa=103,Ea=104,rc=200,ac=201,oc=202,lc=203,Br=204,zr=205,cc=206,hc=207,uc=208,dc=209,fc=210,pc=211,mc=212,gc=213,_c=214,vc=0,xc=1,Mc=2,Is=3,yc=4,Sc=5,Ec=6,Tc=7,ll=0,bc=1,wc=2,En=0,Ac=1,Cc=2,Pc=3,cl=4,Rc=5,Lc=6,hl=300,Si=301,Ei=302,Gr=303,kr=304,ks=306,Wi=1e3,Et=1001,Hr=1002,Rt=1003,Ta=1004,er=1005,kt=1006,Dc=1007,Xi=1008,Tn=1009,Ic=1010,Uc=1011,Qr=1012,ul=1013,Mn=1014,yn=1015,qi=1016,dl=1017,fl=1018,zn=1020,Nc=1021,jt=1023,Fc=1024,Oc=1025,Gn=1026,Ti=1027,Bc=1028,pl=1029,zc=1030,ml=1031,gl=1033,tr=33776,nr=33777,ir=33778,sr=33779,ba=35840,wa=35841,Aa=35842,Ca=35843,_l=36196,Pa=37492,Ra=37496,La=37808,Da=37809,Ia=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,Ga=37817,ka=37818,Ha=37819,Va=37820,Wa=37821,rr=36492,Xa=36494,qa=36495,Gc=36283,Ya=36284,ja=36285,Za=36286,vl=3e3,kn=3001,kc=3200,Hc=3201,xl=0,Vc=1,Vt="",St="srgb",dn="srgb-linear",ea="display-p3",Hs="display-p3-linear",Us="linear",at="srgb",Ns="rec709",Fs="p3",$n=7680,Ka=519,Wc=512,Xc=513,qc=514,Ml=515,Yc=516,jc=517,Zc=518,Kc=519,Vr=35044,$a="300 es",Wr=1035,un=2e3,Os=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ja=1234567;const Bi=Math.PI/180,Yi=180/Math.PI;function Jt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function ta(i,e){return(i%e+e)%e}function $c(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jc(i,e,t){return i!==e?(t-i)/(e-i):0}function zi(i,e,t){return(1-t)*i+t*e}function Qc(i,e,t,n){return zi(i,e,1-Math.exp(-t*n))}function eh(i,e=1){return e-Math.abs(ta(i,e*2)-e)}function th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ih(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sh(i,e){return i+Math.random()*(e-i)}function rh(i){return i*(.5-Math.random())}function ah(i){i!==void 0&&(Ja=i);let e=Ja+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oh(i){return i*Bi}function lh(i){return i*Yi}function Xr(i){return(i&i-1)===0&&i!==0}function ch(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yl={DEG2RAD:Bi,RAD2DEG:Yi,generateUUID:Jt,clamp:yt,euclideanModulo:ta,mapLinear:$c,inverseLerp:Jc,lerp:zi,damp:Qc,pingpong:eh,smoothstep:th,smootherstep:nh,randInt:ih,randFloat:sh,randFloatSpread:rh,seededRandom:ah,degToRad:oh,radToDeg:lh,isPowerOfTwo:Xr,ceilPowerOfTwo:ch,floorPowerOfTwo:Bs,setQuaternionFromProperEuler:hh,normalize:it,denormalize:$t};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],v=s[4],S=s[7],U=s[2],C=s[5],P=s[8];return r[0]=a*_+o*M+l*U,r[3]=a*m+o*v+l*C,r[6]=a*f+o*S+l*P,r[1]=c*_+h*M+u*U,r[4]=c*m+h*v+u*C,r[7]=c*f+h*S+u*P,r[2]=d*_+p*M+g*U,r[5]=d*m+p*v+g*C,r[8]=d*f+p*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ar.makeScale(e,t)),this}rotate(e){return this.premultiply(ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new Je;function Sl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){const i=zs("canvas");return i.style.display="block",i}const Qa={};function Gi(i){i in Qa||(Qa[i]=!0,console.warn(i))}const eo=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),to=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[dn]:{transfer:Us,primaries:Ns,toReference:i=>i,fromReference:i=>i},[St]:{transfer:at,primaries:Ns,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Hs]:{transfer:Us,primaries:Fs,toReference:i=>i.applyMatrix3(to),fromReference:i=>i.applyMatrix3(eo)},[ea]:{transfer:at,primaries:Fs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(to),fromReference:i=>i.applyMatrix3(eo).convertLinearToSRGB()}},dh=new Set([dn,Hs]),st={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=es[e].toReference,s=es[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return es[i].primaries},getTransfer:function(i){return i===Vt?Us:es[i].transfer}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class El{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=zs("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fh=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lr(s[a].image)):r.push(lr(s[a]))}else r=lr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ph=0;class Dt extends qn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Et,s=Et,r=kt,a=Xi,o=jt,l=Tn,c=Dt.DEFAULT_ANISOTROPY,h=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Jt(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===kn?St:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case Et:e.x=e.x<0?0:1;break;case Hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case Et:e.y=e.y<0?0:1;break;case Hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?kn:vl}set encoding(e){Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kn?St:Vt}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=hl;Dt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,U=(f+1)/2,C=(h+d)/4,P=(u+_)/4,b=(g+m)/4;return v>S&&v>U?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=C/n,r=P/n):S>U?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=b/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=P/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kn?St:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bl extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gh extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const U=Math.sqrt(v),C=Math.atan2(U,f*M);m=Math.sin(m*C)/U,o=Math.sin(o*C)/U}const S=o*M;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new I,no=new Vn;class Ji{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(r,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),ns.subVectors(this.max,Ri),Qn.subVectors(e.a,Ri),ei.subVectors(e.b,Ri),ti.subVectors(e.c,Ri),mn.subVectors(ei,Qn),gn.subVectors(ti,ei),Ln.subVectors(Qn,ti);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Ln.y,Ln.x,0];return!hr(t,Qn,ei,ti,ns)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,Qn,ei,ti,ns))?!1:(is.crossVectors(mn,gn),t=[is.x,is.y,is.z],hr(t,Qn,ei,ti,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new I,new I,new I,new I,new I,new I,new I,new I],Wt=new I,ts=new Ji,Qn=new I,ei=new I,ti=new I,mn=new I,gn=new I,Ln=new I,Ri=new I,ns=new I,is=new I,Dn=new I;function hr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);const o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _h=new Ji,Li=new I,ur=new I;class Vs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(ur)),this.expandByPoint(Li.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new I,dr=new I,ss=new I,_n=new I,fr=new I,rs=new I,pr=new I;class Ws{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dr.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(dr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ss),o=_n.dot(this.direction),l=-_n.dot(ss),c=_n.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dr).addScaledVector(ss,d),p}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,s,r){fr.subVectors(t,e),rs.subVectors(n,e),pr.crossVectors(fr,rs);let a=this.direction.dot(pr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(_n,rs));if(l<0)return null;const c=o*this.direction.dot(fr.cross(_n));if(c<0||l+c>a)return null;const h=-o*_n.dot(pr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ni.setFromMatrixColumn(e,0).length(),r=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vh,e,xh)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),vn.crossVectors(n,Ut),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),vn.crossVectors(n,Ut)),vn.normalize(),as.crossVectors(Ut,vn),s[0]=vn.x,s[4]=as.x,s[8]=Ut.x,s[1]=vn.y,s[5]=as.y,s[9]=Ut.y,s[2]=vn.z,s[6]=as.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],v=n[7],S=n[11],U=n[15],C=s[0],P=s[4],b=s[8],y=s[12],T=s[1],z=s[5],Y=s[9],ne=s[13],F=s[2],G=s[6],V=s[10],ee=s[14],W=s[3],J=s[7],R=s[11],A=s[15];return r[0]=a*C+o*T+l*F+c*W,r[4]=a*P+o*z+l*G+c*J,r[8]=a*b+o*Y+l*V+c*R,r[12]=a*y+o*ne+l*ee+c*A,r[1]=h*C+u*T+d*F+p*W,r[5]=h*P+u*z+d*G+p*J,r[9]=h*b+u*Y+d*V+p*R,r[13]=h*y+u*ne+d*ee+p*A,r[2]=g*C+_*T+m*F+f*W,r[6]=g*P+_*z+m*G+f*J,r[10]=g*b+_*Y+m*V+f*R,r[14]=g*y+_*ne+m*ee+f*A,r[3]=M*C+v*T+S*F+U*W,r[7]=M*P+v*z+S*G+U*J,r[11]=M*b+v*Y+S*V+U*R,r[15]=M*y+v*ne+S*ee+U*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,v=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,U=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,C=t*M+n*v+s*S+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=M*P,e[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*P,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*P,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*P,e[4]=v*P,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*P,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*P,e[8]=S*P,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*P,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*P,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*P,e[12]=U*P,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*P,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,M=l*c,v=l*h,S=l*u,U=n.x,C=n.y,P=n.z;return s[0]=(1-(_+f))*U,s[1]=(p+S)*U,s[2]=(g-v)*U,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(d+f))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+v)*P,s[9]=(m-M)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ni.set(s[0],s[1],s[2]).length();const a=ni.set(s[4],s[5],s[6]).length(),o=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,h=1/a,u=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=un){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(o===un)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Os)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=un){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,p=(n+s)*h;let g,_;if(o===un)g=(a+r)*u,_=-2*u;else if(o===Os)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new I,Xt=new ht,vh=new I(0,0,0),xh=new I(1,1,1),vn=new I,as=new I,Ut=new I,io=new ht,so=new Vn;class Xs{constructor(e=0,t=0,n=0,s=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return so.setFromEuler(this),this.setFromQuaternion(so,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mh=0;const ro=new I,ii=new Vn,rn=new ht,os=new I,Di=new I,yh=new I,Sh=new Vn,ao=new I(1,0,0),oo=new I(0,1,0),lo=new I(0,0,1),Eh={type:"added"},Th={type:"removed"};class mt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new I,t=new Xs,n=new Vn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(ao,e)}rotateY(e){return this.rotateOnAxis(oo,e)}rotateZ(e){return this.rotateOnAxis(lo,e)}translateOnAxis(e,t){return ro.copy(e).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ao,e)}translateY(e){return this.translateOnAxis(oo,e)}translateZ(e){return this.translateOnAxis(lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Di,os,this.up):rn.lookAt(os,Di,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(rn),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Th)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new I(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new I,an=new I,mr=new I,on=new I,si=new I,ri=new I,co=new I,gr=new I,_r=new I,vr=new I;let ls=!1;class Ht{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qt.subVectors(s,t),an.subVectors(n,t),mr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(an),l=qt.dot(mr),c=an.dot(an),h=an.dot(mr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,s,r,a,o,l){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static isFrontFacing(e,t,n,s){return qt.subVectors(n,t),an.subVectors(e,t),qt.cross(an).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),qt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;si.subVectors(s,n),ri.subVectors(r,n),gr.subVectors(e,n);const l=si.dot(gr),c=ri.dot(gr);if(l<=0&&c<=0)return t.copy(n);_r.subVectors(e,s);const h=si.dot(_r),u=ri.dot(_r);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(si,a);vr.subVectors(e,r);const p=si.dot(vr),g=ri.dot(vr);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ri,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return co.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(co,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(si,a).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function xr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=ta(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xr(a,r,e+1/3),this.g=xr(a,r,e),this.b=xr(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return st.fromWorkingColorSpace(At.copy(this),e),Math.round(yt(At.r*255,0,255))*65536+Math.round(yt(At.g*255,0,255))*256+Math.round(yt(At.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=St){st.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(cs);const n=zi(xn.h,cs.h,t),s=zi(xn.s,cs.s,t),r=zi(xn.l,cs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ke;Ke.NAMES=wl;let bh=0;class Yn extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Jt(),this.name="",this.type="Material",this.blending=Mi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=zr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Br&&(n.blendSrc=this.blendSrc),this.blendDst!==zr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yt extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new I,hs=new ce;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vr&&(e.usage=this.usage),e}}class Al extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cl extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wh=0;const Gt=new ht,Mr=new mt,ai=new I,Nt=new Ji,Ii=new Ji,Mt=new I;class gt extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sl(e)?Cl:Al)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Nt.min,Ii.min),Nt.expandByPoint(Mt),Mt.addVectors(Nt.max,Ii.max),Nt.expandByPoint(Mt)):(Nt.expandByPoint(Ii.min),Nt.expandByPoint(Ii.max))}Nt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(e,c),Mt.add(ai)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new I,h[T]=new I;const u=new I,d=new I,p=new I,g=new ce,_=new ce,m=new ce,f=new I,M=new I;function v(T,z,Y){u.fromArray(s,T*3),d.fromArray(s,z*3),p.fromArray(s,Y*3),g.fromArray(a,T*2),_.fromArray(a,z*2),m.fromArray(a,Y*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const ne=1/(_.x*m.y-m.x*_.y);isFinite(ne)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(ne),M.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(ne),c[T].add(f),c[z].add(f),c[Y].add(f),h[T].add(M),h[z].add(M),h[Y].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,z=S.length;T<z;++T){const Y=S[T],ne=Y.start,F=Y.count;for(let G=ne,V=ne+F;G<V;G+=3)v(n[G+0],n[G+1],n[G+2])}const U=new I,C=new I,P=new I,b=new I;function y(T){P.fromArray(r,T*3),b.copy(P);const z=c[T];U.copy(z),U.sub(P.multiplyScalar(P.dot(z))).normalize(),C.crossVectors(b,z);const ne=C.dot(h[T])<0?-1:1;l[T*4]=U.x,l[T*4+1]=U.y,l[T*4+2]=U.z,l[T*4+3]=ne}for(let T=0,z=S.length;T<z;++T){const Y=S[T],ne=Y.start,F=Y.count;for(let G=ne,V=ne+F;G<V;G+=3)y(n[G+0]),y(n[G+1]),y(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Zt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new ht,In=new Ws,us=new Vs,uo=new I,oi=new I,li=new I,ci=new I,yr=new I,ds=new I,fs=new ce,ps=new ce,ms=new ce,fo=new I,po=new I,mo=new I,gs=new I,_s=new I;class pe extends mt{constructor(e=new gt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(yr.fromBufferAttribute(u,e),a?ds.addScaledVector(yr,h):ds.addScaledVector(yr.sub(t),h))}t.add(ds)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),In.copy(e.ray).recast(e.near),!(us.containsPoint(In.origin)===!1&&(In.intersectSphere(us,uo)===null||In.origin.distanceToSquared(uo)>(e.far-e.near)**2))&&(ho.copy(r).invert(),In.copy(e.ray).applyMatrix4(ho),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,U=v;S<U;S+=3){const C=o.getX(S),P=o.getX(S+1),b=o.getX(S+2);s=vs(this,f,e,n,c,h,u,C,P,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=vs(this,a,e,n,c,h,u,M,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,U=v;S<U;S+=3){const C=S,P=S+1,b=S+2;s=vs(this,f,e,n,c,h,u,C,P,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,v=m+1,S=m+2;s=vs(this,a,e,n,c,h,u,M,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ah(i,e,t,n,s,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===bn,o),l===null)return null;_s.copy(o),_s.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:i}}function vs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,oi),i.getVertexPosition(l,li),i.getVertexPosition(c,ci);const h=Ah(i,e,t,n,oi,li,ci,gs);if(h){s&&(fs.fromBufferAttribute(s,o),ps.fromBufferAttribute(s,l),ms.fromBufferAttribute(s,c),h.uv=Ht.getInterpolation(gs,oi,li,ci,fs,ps,ms,new ce)),r&&(fs.fromBufferAttribute(r,o),ps.fromBufferAttribute(r,l),ms.fromBufferAttribute(r,c),h.uv1=Ht.getInterpolation(gs,oi,li,ci,fs,ps,ms,new ce),h.uv2=h.uv1),a&&(fo.fromBufferAttribute(a,o),po.fromBufferAttribute(a,l),mo.fromBufferAttribute(a,c),h.normal=Ht.getInterpolation(gs,oi,li,ci,fo,po,mo,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};Ht.getNormal(oi,li,ci,u.normal),h.face=u}return h}class pt extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(_,m,f,M,v,S,U,C,P,b,y){const T=S/P,z=U/b,Y=S/2,ne=U/2,F=C/2,G=P+1,V=b+1;let ee=0,W=0;const J=new I;for(let R=0;R<V;R++){const A=R*z-ne;for(let X=0;X<G;X++){const O=X*T-Y;J[_]=O*M,J[m]=A*v,J[f]=F,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[f]=C>0?1:-1,h.push(J.x,J.y,J.z),u.push(X/P),u.push(1-R/b),ee+=1}}for(let R=0;R<b;R++)for(let A=0;A<P;A++){const X=d+A+G*R,O=d+A+G*(R+1),q=d+(A+1)+G*(R+1),te=d+(A+1)+G*R;l.push(X,O,te),l.push(O,q,te),W+=6}o.addGroup(p,W,y),p+=W,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=bi(i[t]);for(const s in n)e[s]=n[s]}return e}function Ch(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pl(i){return i.getRenderTarget()===null?i.outputColorSpace:st.workingColorSpace}const Ph={clone:bi,merge:Pt};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=Ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rl extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Rl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class Dh extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(hi,ui,e,t);s.layers=this.layers,this.add(s);const r=new Ot(hi,ui,e,t);r.layers=this.layers,this.add(r);const a=new Ot(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Ot(hi,ui,e,t);o.layers=this.layers,this.add(o);const l=new Ot(hi,ui,e,t);l.layers=this.layers,this.add(l);const c=new Ot(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ll extends Dt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ih extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===kn?St:Vt),this.texture=new Ll(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pt(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Sn});r.uniforms.tEquirect.value=t;const a=new pe(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=kt),new Dh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Sr=new I,Uh=new I,Nh=new Je;class cn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Sr.subVectors(n,t).cross(Uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nh.getNormalMatrix(e),s=this.coplanarPoint(Sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Vs,xs=new I;class ia{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+h,m+g,S+M).normalize(),n[3].setComponents(l-a,d-h,m-g,S-M).normalize(),n[4].setComponents(l-o,d-u,m-_,S-v).normalize(),t===un)n[5].setComponents(l+o,d+u,m+_,S+v).normalize();else if(t===Os)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xs.x=s.normal.x>0?e.max.x:e.min.x,xs.y=s.normal.y>0?e.max.y:e.min.y,xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fh(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class hn extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*d-a;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const v=M+c*f,S=M+c*(f+1),U=M+1+c*(f+1),C=M+1+c*f;p.push(v,S,C),p.push(S,U,C)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,au=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Ru=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fu=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ou=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
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
#endif`,Qu=`#ifdef USE_MORPHTARGETS
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
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,yd=`float getShadowMask() {
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
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Xd=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,tf=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,rf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,af=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mf=`uniform float rotation;
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
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Oh,alphahash_pars_fragment:Bh,alphamap_fragment:zh,alphamap_pars_fragment:Gh,alphatest_fragment:kh,alphatest_pars_fragment:Hh,aomap_fragment:Vh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:Yh,beginnormal_vertex:jh,bsdfs:Zh,iridescence_fragment:Kh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:eu,clipping_planes_vertex:tu,color_fragment:nu,color_pars_fragment:iu,color_pars_vertex:su,color_vertex:ru,common:au,cube_uv_reflection_fragment:ou,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:hu,emissivemap_fragment:uu,emissivemap_pars_fragment:du,colorspace_fragment:fu,colorspace_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:vu,envmap_physical_pars_fragment:Ru,envmap_vertex:xu,fog_vertex:Mu,fog_pars_vertex:yu,fog_fragment:Su,fog_pars_fragment:Eu,gradientmap_pars_fragment:Tu,lightmap_fragment:bu,lightmap_pars_fragment:wu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Du,lights_phong_fragment:Iu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:Bu,lights_fragment_end:zu,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Vu,map_fragment:Wu,map_pars_fragment:Xu,map_particle_fragment:qu,map_particle_pars_fragment:Yu,metalnessmap_fragment:ju,metalnessmap_pars_fragment:Zu,morphcolor_vertex:Ku,morphnormal_vertex:$u,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:sd,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:hd,packing:ud,premultiplied_alpha_fragment:dd,project_vertex:fd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:xd,shadowmap_vertex:Md,shadowmask_pars_fragment:yd,skinbase_vertex:Sd,skinning_pars_vertex:Ed,skinning_vertex:Td,skinnormal_vertex:bd,specularmap_fragment:wd,specularmap_pars_fragment:Ad,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Rd,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Id,uv_vertex:Ud,worldpos_vertex:Nd,background_vert:Fd,background_frag:Od,backgroundCube_vert:Bd,backgroundCube_frag:zd,cube_vert:Gd,cube_frag:kd,depth_vert:Hd,depth_frag:Vd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:qd,equirect_frag:Yd,linedashed_vert:jd,linedashed_frag:Zd,meshbasic_vert:Kd,meshbasic_frag:$d,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:ef,meshmatcap_frag:tf,meshnormal_vert:nf,meshnormal_frag:sf,meshphong_vert:rf,meshphong_frag:af,meshphysical_vert:of,meshphysical_frag:lf,meshtoon_vert:cf,meshtoon_frag:hf,points_vert:uf,points_frag:df,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:gf},xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Kt={basic:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Pt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Pt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Pt([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Pt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Pt([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Pt([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Pt([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Pt([xe.lights,xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Kt.physical={uniforms:Pt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ms={r:0,b:0,g:0};function _f(i,e,t,n,s,r,a){const o=new Ke(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ks)?(h===void 0&&(h=new pe(new pt(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:bi(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=st.getTransfer(v.colorSpace)!==at,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pe(new hn(2,2),new Wn({name:"BackgroundMaterial",uniforms:bi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ms,Pl(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function vf(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(F,G,V,ee,W){let J=!1;if(a){const R=_(ee,V,G);c!==R&&(c=R,p(c.object)),J=f(F,ee,V,W),J&&M(F,ee,V,W)}else{const R=G.wireframe===!0;(c.geometry!==ee.id||c.program!==V.id||c.wireframe!==R)&&(c.geometry=ee.id,c.program=V.id,c.wireframe=R,J=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,b(F,G,V,ee),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function _(F,G,V){const ee=V.wireframe===!0;let W=o[F.id];W===void 0&&(W={},o[F.id]=W);let J=W[G.id];J===void 0&&(J={},W[G.id]=J);let R=J[ee];return R===void 0&&(R=m(d()),J[ee]=R),R}function m(F){const G=[],V=[],ee=[];for(let W=0;W<s;W++)G[W]=0,V[W]=0,ee[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:ee,object:F,attributes:{},index:null}}function f(F,G,V,ee){const W=c.attributes,J=G.attributes;let R=0;const A=V.getAttributes();for(const X in A)if(A[X].location>=0){const q=W[X];let te=J[X];if(te===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),q===void 0||q.attribute!==te||te&&q.data!==te.data)return!0;R++}return c.attributesNum!==R||c.index!==ee}function M(F,G,V,ee){const W={},J=G.attributes;let R=0;const A=V.getAttributes();for(const X in A)if(A[X].location>=0){let q=J[X];q===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(q=F.instanceColor));const te={};te.attribute=q,q&&q.data&&(te.data=q.data),W[X]=te,R++}c.attributes=W,c.attributesNum=R,c.index=ee}function v(){const F=c.newAttributes;for(let G=0,V=F.length;G<V;G++)F[G]=0}function S(F){U(F,0)}function U(F,G){const V=c.newAttributes,ee=c.enabledAttributes,W=c.attributeDivisors;V[F]=1,ee[F]===0&&(i.enableVertexAttribArray(F),ee[F]=1),W[F]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),W[F]=G)}function C(){const F=c.newAttributes,G=c.enabledAttributes;for(let V=0,ee=G.length;V<ee;V++)G[V]!==F[V]&&(i.disableVertexAttribArray(V),G[V]=0)}function P(F,G,V,ee,W,J,R){R===!0?i.vertexAttribIPointer(F,G,V,W,J):i.vertexAttribPointer(F,G,V,ee,W,J)}function b(F,G,V,ee){if(n.isWebGL2===!1&&(F.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=ee.attributes,J=V.getAttributes(),R=G.defaultAttributeValues;for(const A in J){const X=J[A];if(X.location>=0){let O=W[A];if(O===void 0&&(A==="instanceMatrix"&&F.instanceMatrix&&(O=F.instanceMatrix),A==="instanceColor"&&F.instanceColor&&(O=F.instanceColor)),O!==void 0){const q=O.normalized,te=O.itemSize,ue=t.get(O);if(ue===void 0)continue;const Q=ue.buffer,me=ue.type,Se=ue.bytesPerElement,_e=n.isWebGL2===!0&&(me===i.INT||me===i.UNSIGNED_INT||O.gpuType===ul);if(O.isInterleavedBufferAttribute){const Me=O.data,D=Me.stride,le=O.offset;if(Me.isInstancedInterleavedBuffer){for(let H=0;H<X.locationSize;H++)U(X.location+H,Me.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let H=0;H<X.locationSize;H++)S(X.location+H);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let H=0;H<X.locationSize;H++)P(X.location+H,te/X.locationSize,me,q,D*Se,(le+te/X.locationSize*H)*Se,_e)}else{if(O.isInstancedBufferAttribute){for(let Me=0;Me<X.locationSize;Me++)U(X.location+Me,O.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Me=0;Me<X.locationSize;Me++)S(X.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Me=0;Me<X.locationSize;Me++)P(X.location+Me,te/X.locationSize,me,q,te*Se,te/X.locationSize*Me*Se,_e)}}else if(R!==void 0){const q=R[A];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(X.location,q);break;case 3:i.vertexAttrib3fv(X.location,q);break;case 4:i.vertexAttrib4fv(X.location,q);break;default:i.vertexAttrib1fv(X.location,q)}}}}C()}function y(){Y();for(const F in o){const G=o[F];for(const V in G){const ee=G[V];for(const W in ee)g(ee[W].object),delete ee[W];delete G[V]}delete o[F]}}function T(F){if(o[F.id]===void 0)return;const G=o[F.id];for(const V in G){const ee=G[V];for(const W in ee)g(ee[W].object),delete ee[W];delete G[V]}delete o[F.id]}function z(F){for(const G in o){const V=o[G];if(V[F.id]===void 0)continue;const ee=V[F.id];for(const W in ee)g(ee[W].object),delete ee[W];delete V[F.id]}}function Y(){ne(),h=!0,c!==l&&(c=l,p(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:ne,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function xf(i,e,t,n){const s=n.isWebGL2;let r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Mf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),U=v&&S,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:U,maxSamples:C}}function yf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new cn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,v=M*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let U=0;U!==v;++U)S[U]=t[U];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sf(i){let e=new WeakMap;function t(a,o){return o===Gr?a.mapping=Si:o===kr&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gr||o===kr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ih(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Il extends Rl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,go=[.125,.215,.35,.446,.526,.582],On=20,Er=new Il,_o=new Ke;let Tr=null,br=0,wr=0;const Nn=(1+Math.sqrt(5))/2,di=1/Nn,vo=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Nn,di),new I(0,Nn,-di),new I(di,0,Nn),new I(-di,0,Nn),new I(Nn,di,0),new I(-Nn,di,0)];class xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tr,br,wr),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:qi,format:jt,colorSpace:dn,depthBuffer:!1},s=Mo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ef(r)),this._blurMaterial=Tf(r,e,t)}return s}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,n,s){const o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_o),h.toneMapping=En,h.autoClear=!1;const p=new Yt({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new pe(new pt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(_o),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;ys(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Si||e.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vo[(s-1)%vo.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*On-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):On;m>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${On}`);const f=[];let M=0;for(let P=0;P<On;++P){const b=P/_,y=Math.exp(-b*b/2);f.push(y),P===0?M+=y:P<m&&(M+=2*y)}for(let P=0;P<f.length;P++)f[P]=f[P]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[s],U=3*S*(s>v-_i?s-v+_i:0),C=4*(this._cubeSize-S);ys(t,U,C,3*S,2*S),l.setRenderTarget(t),l.render(u,Er)}}function Ef(i){const e=[],t=[],n=[];let s=i;const r=i-_i+1+go.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-_i?l=go[a-i+_i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,b=C>2?0:-1,y=[P,b,0,P+2/3,b,0,P+2/3,b+1,0,P,b,0,P+2/3,b+1,0,P,b+1,0];M.set(y,_*g*C),v.set(d,m*g*C);const T=[C,C,C,C,C,C];S.set(T,f*g*C)}const U=new gt;U.setAttribute("position",new Zt(M,_)),U.setAttribute("uv",new Zt(v,m)),U.setAttribute("faceIndex",new Zt(S,f)),e.push(U),s>_i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mo(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tf(i,e,t){const n=new Float32Array(On),s=new I(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function yo(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function So(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function sa(){return`

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
	`}function bf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gr||l===kr,h=l===Si||l===Ei;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new xo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new xo(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Af(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,S=M.length;v<S;v+=3){const U=M[v+0],C=M[v+1],P=M[v+2];d.push(U,C,C,P,P,U)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const U=v+0,C=v+1,P=v+2;d.push(U,C,C,P,P,U)}}else return;const m=new(Sl(d)?Cl:Al)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cf(i,e,t,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,_),t.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let M=0;M<_;M++)f+=g[M];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Pf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rf(i,e){return i[0]-e[0]}function Lf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Df(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let G=function(){ne.dispose(),r.delete(h),h.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,U=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),U===!0&&(y=3);let T=h.attributes.position.count*y,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*z*4*_),ne=new bl(Y,T,z,_);ne.type=yn,ne.needsUpdate=!0;const F=y*4;for(let V=0;V<_;V++){const ee=C[V],W=P[V],J=b[V],R=T*z*4*V;for(let A=0;A<ee.count;A++){const X=A*F;v===!0&&(a.fromBufferAttribute(ee,A),Y[R+X+0]=a.x,Y[R+X+1]=a.y,Y[R+X+2]=a.z,Y[R+X+3]=0),S===!0&&(a.fromBufferAttribute(W,A),Y[R+X+4]=a.x,Y[R+X+5]=a.y,Y[R+X+6]=a.z,Y[R+X+7]=0),U===!0&&(a.fromBufferAttribute(J,A),Y[R+X+8]=a.x,Y[R+X+9]=a.y,Y[R+X+10]=a.z,Y[R+X+11]=J.itemSize===4?a.w:1)}}m={count:_,texture:ne,size:new ce(T,z)},r.set(h,m),h.addEventListener("dispose",G)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const U=_[S];U[0]=S,U[1]=d[S]}_.sort(Lf);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Rf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const U=o[S],C=U[0],P=U[1];C!==Number.MAX_SAFE_INTEGER&&P?(m&&h.getAttribute("morphTarget"+S)!==m[C]&&h.setAttribute("morphTarget"+S,m[C]),f&&h.getAttribute("morphNormal"+S)!==f[C]&&h.setAttribute("morphNormal"+S,f[C]),s[S]=P,M+=P):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),s[S]=0)}const v=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function If(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Ul extends Dt{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Gn,h!==Gn&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gn&&(n=Mn),n===void 0&&h===Ti&&(n=zn),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nl=new Dt,Fl=new Ul(1,1);Fl.compareFunction=Ml;const Ol=new bl,Bl=new gh,zl=new Ll,Eo=[],To=[],bo=new Float32Array(16),wo=new Float32Array(9),Ao=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Eo[s];if(r===void 0&&(r=new Float32Array(s),Eo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Uf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ao.set(n),i.uniformMatrix2fv(this.addr,!1,Ao),vt(t,n)}}function zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;wo.set(n),i.uniformMatrix3fv(this.addr,!1,wo),vt(t,n)}}function Gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;bo.set(n),i.uniformMatrix4fv(this.addr,!1,bo),vt(t,n)}}function kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Fl:Nl;t.setTexture2D(e||r,s)}function Kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bl,s)}function $f(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zl,s)}function Jf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ol,s)}function Qf(i){switch(i){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return zf;case 35676:return Gf;case 5124:case 35670:return kf;case 35667:case 35671:return Hf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Jf}}function ep(i,e){i.uniform1fv(this.addr,e)}function tp(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function np(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function ip(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function sp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rp(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ap(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function op(i,e){i.uniform1iv(this.addr,e)}function lp(i,e){i.uniform2iv(this.addr,e)}function cp(i,e){i.uniform3iv(this.addr,e)}function hp(i,e){i.uniform4iv(this.addr,e)}function up(i,e){i.uniform1uiv(this.addr,e)}function dp(i,e){i.uniform2uiv(this.addr,e)}function fp(i,e){i.uniform3uiv(this.addr,e)}function pp(i,e){i.uniform4uiv(this.addr,e)}function mp(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Nl,r[a])}function gp(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bl,r[a])}function _p(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zl,r[a])}function vp(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ol,r[a])}function xp(i){switch(i){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return vp}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qf(t.type)}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Co(i,e){i.seq.push(e),i.map[e.id]=e}function Ep(i,e,t){const n=i.name,s=n.length;for(Ar.lastIndex=0;;){const r=Ar.exec(n),a=Ar.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Co(t,c===void 0?new Mp(o,i,e):new yp(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Sp(o),Co(t,u)),t=u}}}class Ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ep(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Po(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tp=37297;let bp=0;function wp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ap(i){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(i);let n;switch(e===t?n="":e===Fs&&t===Ns?n="LinearDisplayP3ToLinearSRGB":e===Ns&&t===Fs&&(n="LinearSRGBToLinearDisplayP3"),i){case dn:case Hs:return[n,"LinearTransferOETF"];case St:case ea:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ro(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wp(i.getShaderSource(e),a)}else return s}function Cp(i,e){const t=Ap(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pp(i,e){let t;switch(e){case Ac:t="Linear";break;case Cc:t="Reinhard";break;case Pc:t="OptimizedCineon";break;case cl:t="ACESFilmic";break;case Lc:t="AgX";break;case Rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function Lp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function Dp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vi(i){return i!==""}function Lo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Do(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Up=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(i){return i.replace(Up,Fp)}const Np=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fp(i,e){let t=je[e];if(t===void 0){const n=Np.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qr(t)}const Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(i){return i.replace(Op,Bp)}function Bp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===al?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Gp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case Ei:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function Hp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ll:e="ENVMAP_BLENDING_MULTIPLY";break;case bc:e="ENVMAP_BLENDING_MIX";break;case wc:e="ENVMAP_BLENDING_ADD";break}return e}function Vp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zp(t),c=Gp(t),h=kp(t),u=Hp(t),d=Vp(t),p=t.isWebGL2?"":Rp(t),g=Lp(t),_=Dp(r),m=s.createProgram();let f,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vi).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vi).join(`
`),M.length>0&&(M+=`
`)):(f=[Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),M=[p,Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?je.tonemapping_pars_fragment:"",t.toneMapping!==En?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Cp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),a=qr(a),a=Lo(a,t),a=Do(a,t),o=qr(o),o=Lo(o,t),o=Do(o,t),a=Io(a),o=Io(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=v+f+a,U=v+M+o,C=Po(s,s.VERTEX_SHADER,S),P=Po(s,s.FRAGMENT_SHADER,U);s.attachShader(m,C),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(Y){if(i.debug.checkShaderErrors){const ne=s.getProgramInfoLog(m).trim(),F=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(P).trim();let V=!0,ee=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,C,P);else{const W=Ro(s,C,"vertex"),J=Ro(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+W+`
`+J)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(F===""||G==="")&&(ee=!1);ee&&(Y.diagnostics={runnable:V,programLog:ne,vertexShader:{log:F,prefix:f},fragmentShader:{log:G,prefix:M}})}s.deleteShader(C),s.deleteShader(P),y=new Ds(s,m),T=Ip(s,m)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,Tp)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=P,this}let Xp=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}}class Yp{constructor(e){this.id=Xp++,this.code=e,this.usedTimes=0}}function jp(i,e,t,n,s,r,a){const o=new na,l=new qp,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,T,z,Y,ne){const F=Y.fog,G=ne.geometry,V=y.isMeshStandardMaterial?Y.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),W=ee&&ee.mapping===ks?ee.image.height:null,J=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const R=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,A=R!==void 0?R.length:0;let X=0;G.morphAttributes.position!==void 0&&(X=1),G.morphAttributes.normal!==void 0&&(X=2),G.morphAttributes.color!==void 0&&(X=3);let O,q,te,ue;if(J){const Qe=Kt[J];O=Qe.vertexShader,q=Qe.fragmentShader}else O=y.vertexShader,q=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const Q=i.getRenderTarget(),me=ne.isInstancedMesh===!0,Se=ne.isBatchedMesh===!0,_e=!!y.map,Me=!!y.matcap,D=!!ee,le=!!y.aoMap,H=!!y.lightMap,ie=!!y.bumpMap,$=!!y.normalMap,Te=!!y.displacementMap,ve=!!y.emissiveMap,E=!!y.metalnessMap,x=!!y.roughnessMap,B=y.anisotropy>0,oe=y.clearcoat>0,re=y.iridescence>0,se=y.sheen>0,Ce=y.transmission>0,ge=B&&!!y.anisotropyMap,be=oe&&!!y.clearcoatMap,Le=oe&&!!y.clearcoatNormalMap,Be=oe&&!!y.clearcoatRoughnessMap,ae=re&&!!y.iridescenceMap,Xe=re&&!!y.iridescenceThicknessMap,Ge=se&&!!y.sheenColorMap,Fe=se&&!!y.sheenRoughnessMap,De=!!y.specularMap,Ee=!!y.specularColorMap,L=!!y.specularIntensityMap,de=Ce&&!!y.transmissionMap,Pe=Ce&&!!y.thicknessMap,we=!!y.gradientMap,he=!!y.alphaMap,N=y.alphaTest>0,fe=!!y.alphaHash,ye=!!y.extensions,Oe=!!G.attributes.uv1,Ue=!!G.attributes.uv2,Re=!!G.attributes.uv3;let Ne=En;return y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=i.toneMapping),{isWebGL2:h,shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:q,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Se,instancing:me,instancingColor:me&&ne.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:dn,map:_e,matcap:Me,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:W,aoMap:le,lightMap:H,bumpMap:ie,normalMap:$,displacementMap:d&&Te,emissiveMap:ve,normalMapObjectSpace:$&&y.normalMapType===Vc,normalMapTangentSpace:$&&y.normalMapType===xl,metalnessMap:E,roughnessMap:x,anisotropy:B,anisotropyMap:ge,clearcoat:oe,clearcoatMap:be,clearcoatNormalMap:Le,clearcoatRoughnessMap:Be,iridescence:re,iridescenceMap:ae,iridescenceThicknessMap:Xe,sheen:se,sheenColorMap:Ge,sheenRoughnessMap:Fe,specularMap:De,specularColorMap:Ee,specularIntensityMap:L,transmission:Ce,transmissionMap:de,thicknessMap:Pe,gradientMap:we,opaque:y.transparent===!1&&y.blending===Mi,alphaMap:he,alphaTest:N,alphaHash:fe,combine:y.combine,mapUv:_e&&_(y.map.channel),aoMapUv:le&&_(y.aoMap.channel),lightMapUv:H&&_(y.lightMap.channel),bumpMapUv:ie&&_(y.bumpMap.channel),normalMapUv:$&&_(y.normalMap.channel),displacementMapUv:Te&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:E&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:ge&&_(y.anisotropyMap.channel),clearcoatMapUv:be&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(y.sheenRoughnessMap.channel),specularMapUv:De&&_(y.specularMap.channel),specularColorMapUv:Ee&&_(y.specularColorMap.channel),specularIntensityMapUv:L&&_(y.specularIntensityMap.channel),transmissionMapUv:de&&_(y.transmissionMap.channel),thicknessMapUv:Pe&&_(y.thicknessMap.channel),alphaMapUv:he&&_(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ue,vertexUv3s:Re,pointsUvs:ne.isPoints===!0&&!!G.attributes.uv&&(_e||he),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ne.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:X,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:_e&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bt,flipSided:y.side===Lt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ye&&y.extensions.derivatives===!0,extensionFragDepth:ye&&y.extensions.fragDepth===!0,extensionDrawBuffers:ye&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)T.push(z),T.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(M(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function M(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function S(y){const T=g[y.type];let z;if(T){const Y=Kt[T];z=Ph.clone(Y.uniforms)}else z=y.uniforms;return z}function U(y,T){let z;for(let Y=0,ne=c.length;Y<ne;Y++){const F=c[Y];if(F.cacheKey===T){z=F,++z.usedTimes;break}}return z===void 0&&(z=new Wp(i,T,y,r),c.push(z)),z}function C(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:U,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:b}}function Zp(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function No(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Kp),n.length>1&&n.sort(d||No),s.length>1&&s.sort(d||No)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function $p(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fo,i.set(n,[a])):s>=r.length?(a=new Fo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let em=0;function tm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nm(i,e){const t=new Jp,n=Qp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);const r=new I,a=new ht,o=new ht;function l(h,u){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,m=0,f=0,M=0,v=0,S=0,U=0,C=0,P=0,b=0,y=0;h.sort(tm);const T=u===!0?Math.PI:1;for(let Y=0,ne=h.length;Y<ne;Y++){const F=h[Y],G=F.color,V=F.intensity,ee=F.distance,W=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=G.r*V*T,p+=G.g*V*T,g+=G.b*V*T;else if(F.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(F.sh.coefficients[J],V);y++}else if(F.isDirectionalLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const R=F.shadow,A=n.get(F);A.shadowBias=R.bias,A.shadowNormalBias=R.normalBias,A.shadowRadius=R.radius,A.shadowMapSize=R.mapSize,s.directionalShadow[_]=A,s.directionalShadowMap[_]=W,s.directionalShadowMatrix[_]=F.shadow.matrix,S++}s.directional[_]=J,_++}else if(F.isSpotLight){const J=t.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(G).multiplyScalar(V*T),J.distance=ee,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,s.spot[f]=J;const R=F.shadow;if(F.map&&(s.spotLightMap[P]=F.map,P++,R.updateMatrices(F),F.castShadow&&b++),s.spotLightMatrix[f]=R.matrix,F.castShadow){const A=n.get(F);A.shadowBias=R.bias,A.shadowNormalBias=R.normalBias,A.shadowRadius=R.radius,A.shadowMapSize=R.mapSize,s.spotShadow[f]=A,s.spotShadowMap[f]=W,C++}f++}else if(F.isRectAreaLight){const J=t.get(F);J.color.copy(G).multiplyScalar(V),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=J,M++}else if(F.isPointLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity*T),J.distance=F.distance,J.decay=F.decay,F.castShadow){const R=F.shadow,A=n.get(F);A.shadowBias=R.bias,A.shadowNormalBias=R.normalBias,A.shadowRadius=R.radius,A.shadowMapSize=R.mapSize,A.shadowCameraNear=R.camera.near,A.shadowCameraFar=R.camera.far,s.pointShadow[m]=A,s.pointShadowMap[m]=W,s.pointShadowMatrix[m]=F.shadow.matrix,U++}s.point[m]=J,m++}else if(F.isHemisphereLight){const J=t.get(F);J.skyColor.copy(F.color).multiplyScalar(V*T),J.groundColor.copy(F.groundColor).multiplyScalar(V*T),s.hemi[v]=J,v++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const z=s.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==M||z.hemiLength!==v||z.numDirectionalShadows!==S||z.numPointShadows!==U||z.numSpotShadows!==C||z.numSpotMaps!==P||z.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+P-b,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=b,s.numLightProbes=y,z.directionalLength=_,z.pointLength=m,z.spotLength=f,z.rectAreaLength=M,z.hemiLength=v,z.numDirectionalShadows=S,z.numPointShadows=U,z.numSpotShadows=C,z.numSpotMaps=P,z.numLightProbes=y,s.version=em++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const S=h[M];if(S.isDirectionalLight){const U=s.directional[d];U.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),d++}else if(S.isSpotLight){const U=s.spot[g];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(f),U.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const U=s.rectArea[_];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const U=s.point[p];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const U=s.hemi[m];U.direction.setFromMatrixPosition(S.matrixWorld),U.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Oo(i,e){const t=new nm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function im(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Oo(i,e),t.set(r,[l])):a>=o.length?(l=new Oo(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class sm extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rm extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
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
}`;function lm(i,e,t){let n=new ia;const s=new ce,r=new ce,a=new ot,o=new sm({depthPacking:Hc}),l=new rm,c={},h=t.maxTextureSize,u={[bn]:Lt,[Lt]:bn,[Bt]:Bt},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:am,fragmentShader:om}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let f=this.type;this.render=function(C,P,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),T=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Sn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ne=f!==ln&&this.type===ln,F=f===ln&&this.type!==ln;for(let G=0,V=C.length;G<V;G++){const ee=C[G],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const J=W.getFrameExtents();if(s.multiply(J),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,W.mapSize.y=r.y)),W.map===null||ne===!0||F===!0){const A=this.type!==ln?{minFilter:Rt,magFilter:Rt}:{};W.map!==null&&W.map.dispose(),W.map=new Hn(s.x,s.y,A),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const R=W.getViewportCount();for(let A=0;A<R;A++){const X=W.getViewport(A);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),Y.viewport(a),W.updateMatrices(ee,A),n=W.getFrustum(),S(P,b,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===ln&&M(W,b),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,T,z)};function M(C,P){const b=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Hn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,b,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,b,p,_,null)}function v(C,P,b,y){let T=null;const z=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)T=z;else if(T=b.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=T.uuid,ne=P.uuid;let F=c[Y];F===void 0&&(F={},c[Y]=F);let G=F[ne];G===void 0&&(G=T.clone(),F[ne]=G,P.addEventListener("dispose",U)),T=G}if(T.visible=P.visible,T.wireframe=P.wireframe,y===ln?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:u[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=i.properties.get(T);Y.light=b}return T}function S(C,P,b,y,T){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===ln)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),F=C.material;if(Array.isArray(F)){const G=ne.groups;for(let V=0,ee=G.length;V<ee;V++){const W=G[V],J=F[W.materialIndex];if(J&&J.visible){const R=v(C,J,y,T);C.onBeforeShadow(i,C,P,b,ne,R,W),i.renderBufferDirect(b,null,ne,R,C,W),C.onAfterShadow(i,C,P,b,ne,R,W)}}}else if(F.visible){const G=v(C,F,y,T);C.onBeforeShadow(i,C,P,b,ne,G,null),i.renderBufferDirect(b,null,ne,G,C,null),C.onAfterShadow(i,C,P,b,ne,G,null)}}const Y=C.children;for(let ne=0,F=Y.length;ne<F;ne++)S(Y[ne],P,b,y,T)}function U(C){C.target.removeEventListener("dispose",U);for(const b in c){const y=c[b],T=C.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function cm(i,e,t){const n=t.isWebGL2;function s(){let N=!1;const fe=new ot;let ye=null;const Oe=new ot(0,0,0,0);return{setMask:function(Ue){ye!==Ue&&!N&&(i.colorMask(Ue,Ue,Ue,Ue),ye=Ue)},setLocked:function(Ue){N=Ue},setClear:function(Ue,Re,Ne,qe,Qe){Qe===!0&&(Ue*=qe,Re*=qe,Ne*=qe),fe.set(Ue,Re,Ne,qe),Oe.equals(fe)===!1&&(i.clearColor(Ue,Re,Ne,qe),Oe.copy(fe))},reset:function(){N=!1,ye=null,Oe.set(-1,0,0,0)}}}function r(){let N=!1,fe=null,ye=null,Oe=null;return{setTest:function(Ue){Ue?Se(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!N&&(i.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(ye!==Ue){switch(Ue){case vc:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case yc:i.depthFunc(i.EQUAL);break;case Sc:i.depthFunc(i.GEQUAL);break;case Ec:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=Ue}},setLocked:function(Ue){N=Ue},setClear:function(Ue){Oe!==Ue&&(i.clearDepth(Ue),Oe=Ue)},reset:function(){N=!1,fe=null,ye=null,Oe=null}}}function a(){let N=!1,fe=null,ye=null,Oe=null,Ue=null,Re=null,Ne=null,qe=null,Qe=null;return{setTest:function(He){N||(He?Se(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(He){fe!==He&&!N&&(i.stencilMask(He),fe=He)},setFunc:function(He,rt,Tt){(ye!==He||Oe!==rt||Ue!==Tt)&&(i.stencilFunc(He,rt,Tt),ye=He,Oe=rt,Ue=Tt)},setOp:function(He,rt,Tt){(Re!==He||Ne!==rt||qe!==Tt)&&(i.stencilOp(He,rt,Tt),Re=He,Ne=rt,qe=Tt)},setLocked:function(He){N=He},setClear:function(He){Qe!==He&&(i.clearStencil(He),Qe=He)},reset:function(){N=!1,fe=null,ye=null,Oe=null,Ue=null,Re=null,Ne=null,qe=null,Qe=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,M=null,v=null,S=null,U=null,C=null,P=null,b=null,y=new Ke(0,0,0),T=0,z=!1,Y=null,ne=null,F=null,G=null,V=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(R)[1]),W=J>=1):R.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),W=J>=2);let A=null,X={};const O=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),te=new ot().fromArray(O),ue=new ot().fromArray(q);function Q(N,fe,ye,Oe){const Ue=new Uint8Array(4),Re=i.createTexture();i.bindTexture(N,Re),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ye;Ne++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(fe+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Re}const me={};me[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(i.DEPTH_TEST),l.setFunc(Is),ve(!1),E(va),Se(i.CULL_FACE),$(Sn);function Se(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function _e(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Me(N,fe){return p[N]!==fe?(i.bindFramebuffer(N,fe),p[N]=fe,n&&(N===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function D(N,fe){let ye=_,Oe=!1;if(N)if(ye=g.get(fe),ye===void 0&&(ye=[],g.set(fe,ye)),N.isWebGLMultipleRenderTargets){const Ue=N.texture;if(ye.length!==Ue.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Ne=Ue.length;Re<Ne;Re++)ye[Re]=i.COLOR_ATTACHMENT0+Re;ye.length=Ue.length,Oe=!0}}else ye[0]!==i.COLOR_ATTACHMENT0&&(ye[0]=i.COLOR_ATTACHMENT0,Oe=!0);else ye[0]!==i.BACK&&(ye[0]=i.BACK,Oe=!0);Oe&&(t.isWebGL2?i.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function le(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const H={[Fn]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};if(n)H[Sa]=i.MIN,H[Ea]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(H[Sa]=N.MIN_EXT,H[Ea]=N.MAX_EXT)}const ie={[rc]:i.ZERO,[ac]:i.ONE,[oc]:i.SRC_COLOR,[Br]:i.SRC_ALPHA,[fc]:i.SRC_ALPHA_SATURATE,[uc]:i.DST_COLOR,[cc]:i.DST_ALPHA,[lc]:i.ONE_MINUS_SRC_COLOR,[zr]:i.ONE_MINUS_SRC_ALPHA,[dc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[pc]:i.CONSTANT_COLOR,[mc]:i.ONE_MINUS_CONSTANT_COLOR,[gc]:i.CONSTANT_ALPHA,[_c]:i.ONE_MINUS_CONSTANT_ALPHA};function $(N,fe,ye,Oe,Ue,Re,Ne,qe,Qe,He){if(N===Sn){f===!0&&(_e(i.BLEND),f=!1);return}if(f===!1&&(Se(i.BLEND),f=!0),N!==nc){if(N!==M||He!==z){if((v!==Fn||C!==Fn)&&(i.blendEquation(i.FUNC_ADD),v=Fn,C=Fn),He)switch(N){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.ONE,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,U=null,P=null,b=null,y.set(0,0,0),T=0,M=N,z=He}return}Ue=Ue||fe,Re=Re||ye,Ne=Ne||Oe,(fe!==v||Ue!==C)&&(i.blendEquationSeparate(H[fe],H[Ue]),v=fe,C=Ue),(ye!==S||Oe!==U||Re!==P||Ne!==b)&&(i.blendFuncSeparate(ie[ye],ie[Oe],ie[Re],ie[Ne]),S=ye,U=Oe,P=Re,b=Ne),(qe.equals(y)===!1||Qe!==T)&&(i.blendColor(qe.r,qe.g,qe.b,Qe),y.copy(qe),T=Qe),M=N,z=!1}function Te(N,fe){N.side===Bt?_e(i.CULL_FACE):Se(i.CULL_FACE);let ye=N.side===Lt;fe&&(ye=!ye),ve(ye),N.blending===Mi&&N.transparent===!1?$(Sn):$(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Oe=N.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),B(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(N){Y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),Y=N)}function E(N){N!==ec?(Se(i.CULL_FACE),N!==ne&&(N===va?i.cullFace(i.BACK):N===tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),ne=N}function x(N){N!==F&&(W&&i.lineWidth(N),F=N)}function B(N,fe,ye){N?(Se(i.POLYGON_OFFSET_FILL),(G!==fe||V!==ye)&&(i.polygonOffset(fe,ye),G=fe,V=ye)):_e(i.POLYGON_OFFSET_FILL)}function oe(N){N?Se(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function re(N){N===void 0&&(N=i.TEXTURE0+ee-1),A!==N&&(i.activeTexture(N),A=N)}function se(N,fe,ye){ye===void 0&&(A===null?ye=i.TEXTURE0+ee-1:ye=A);let Oe=X[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},X[ye]=Oe),(Oe.type!==N||Oe.texture!==fe)&&(A!==ye&&(i.activeTexture(ye),A=ye),i.bindTexture(N,fe||me[N]),Oe.type=N,Oe.texture=fe)}function Ce(){const N=X[A];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(N){te.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),te.copy(N))}function de(N){ue.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function Pe(N,fe){let ye=u.get(fe);ye===void 0&&(ye=new WeakMap,u.set(fe,ye));let Oe=ye.get(N);Oe===void 0&&(Oe=i.getUniformBlockIndex(fe,N.name),ye.set(N,Oe))}function we(N,fe){const Oe=u.get(fe).get(N);h.get(fe)!==Oe&&(i.uniformBlockBinding(fe,Oe,N.__bindingPointIndex),h.set(fe,Oe))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},A=null,X={},p={},g=new WeakMap,_=[],m=null,f=!1,M=null,v=null,S=null,U=null,C=null,P=null,b=null,y=new Ke(0,0,0),T=0,z=!1,Y=null,ne=null,F=null,G=null,V=null,te.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Se,disable:_e,bindFramebuffer:Me,drawBuffers:D,useProgram:le,setBlending:$,setMaterial:Te,setFlipSided:ve,setCullFace:E,setLineWidth:x,setPolygonOffset:B,setScissorTest:oe,activeTexture:re,bindTexture:se,unbindTexture:Ce,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:De,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Ge,texStorage3D:Fe,texSubImage2D:Le,texSubImage3D:Be,compressedTexSubImage2D:ae,compressedTexSubImage3D:Xe,scissor:L,viewport:de,reset:he}}function hm(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):zs("canvas")}function _(E,x,B,oe){let re=1;if((E.width>oe||E.height>oe)&&(re=oe/Math.max(E.width,E.height)),re<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=x?Bs:Math.floor,Ce=se(re*E.width),ge=se(re*E.height);u===void 0&&(u=g(Ce,ge));const be=B?g(Ce,ge):u;return be.width=Ce,be.height=ge,be.getContext("2d").drawImage(E,0,0,Ce,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ce+"x"+ge+")."),be}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Xr(E.width)&&Xr(E.height)}function f(E){return o?!1:E.wrapS!==Et||E.wrapT!==Et||E.minFilter!==Rt&&E.minFilter!==kt}function M(E,x){return E.generateMipmaps&&x&&E.minFilter!==Rt&&E.minFilter!==kt}function v(E){i.generateMipmap(E)}function S(E,x,B,oe,re=!1){if(o===!1)return x;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=x;if(x===i.RED&&(B===i.FLOAT&&(se=i.R32F),B===i.HALF_FLOAT&&(se=i.R16F),B===i.UNSIGNED_BYTE&&(se=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(se=i.R8UI),B===i.UNSIGNED_SHORT&&(se=i.R16UI),B===i.UNSIGNED_INT&&(se=i.R32UI),B===i.BYTE&&(se=i.R8I),B===i.SHORT&&(se=i.R16I),B===i.INT&&(se=i.R32I)),x===i.RG&&(B===i.FLOAT&&(se=i.RG32F),B===i.HALF_FLOAT&&(se=i.RG16F),B===i.UNSIGNED_BYTE&&(se=i.RG8)),x===i.RGBA){const Ce=re?Us:st.getTransfer(oe);B===i.FLOAT&&(se=i.RGBA32F),B===i.HALF_FLOAT&&(se=i.RGBA16F),B===i.UNSIGNED_BYTE&&(se=Ce===at?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function U(E,x,B){return M(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==Rt&&E.minFilter!==kt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){return E===Rt||E===Ta||E===er?i.NEAREST:i.LINEAR}function P(E){const x=E.target;x.removeEventListener("dispose",P),y(x),x.isVideoTexture&&h.delete(x)}function b(E){const x=E.target;x.removeEventListener("dispose",b),z(x)}function y(E){const x=n.get(E);if(x.__webglInit===void 0)return;const B=E.source,oe=d.get(B);if(oe){const re=oe[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(E),Object.keys(oe).length===0&&d.delete(B)}n.remove(E)}function T(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const B=E.source,oe=d.get(B);delete oe[x.__cacheKey],a.memory.textures--}function z(E){const x=E.texture,B=n.get(E),oe=n.get(x);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(B.__webglFramebuffer[re]))for(let se=0;se<B.__webglFramebuffer[re].length;se++)i.deleteFramebuffer(B.__webglFramebuffer[re][se]);else i.deleteFramebuffer(B.__webglFramebuffer[re]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[re])}else{if(Array.isArray(B.__webglFramebuffer))for(let re=0;re<B.__webglFramebuffer.length;re++)i.deleteFramebuffer(B.__webglFramebuffer[re]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let re=0;re<B.__webglColorRenderbuffer.length;re++)B.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[re]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,se=x.length;re<se;re++){const Ce=n.get(x[re]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(x[re])}n.remove(x),n.remove(E)}let Y=0;function ne(){Y=0}function F(){const E=Y;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),Y+=1,E}function G(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){const B=n.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const oe=E.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,E,x);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function ee(E,x){const B=n.get(E);if(E.version>0&&B.__version!==E.version){te(B,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function W(E,x){const B=n.get(E);if(E.version>0&&B.__version!==E.version){te(B,E,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function J(E,x){const B=n.get(E);if(E.version>0&&B.__version!==E.version){ue(B,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const R={[Wi]:i.REPEAT,[Et]:i.CLAMP_TO_EDGE,[Hr]:i.MIRRORED_REPEAT},A={[Rt]:i.NEAREST,[Ta]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Dc]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},X={[Wc]:i.NEVER,[Kc]:i.ALWAYS,[Xc]:i.LESS,[Ml]:i.LEQUAL,[qc]:i.EQUAL,[Zc]:i.GEQUAL,[Yc]:i.GREATER,[jc]:i.NOTEQUAL};function O(E,x,B){if(B?(i.texParameteri(E,i.TEXTURE_WRAP_S,R[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,R[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,R[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A[x.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Et||x.wrapT!==Et)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,C(x.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==Rt&&x.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,X[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Rt||x.minFilter!==er&&x.minFilter!==Xi||x.type===yn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===qi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function q(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",P));const oe=x.source;let re=d.get(oe);re===void 0&&(re={},d.set(oe,re));const se=G(x);if(se!==E.__cacheKey){re[se]===void 0&&(re[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),re[se].usedTimes++;const Ce=re[E.__cacheKey];Ce!==void 0&&(re[E.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(x)),E.__cacheKey=se,E.__webglTexture=re[se].texture}return B}function te(E,x,B){let oe=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=i.TEXTURE_3D);const re=q(E,x),se=x.source;t.bindTexture(oe,E.__webglTexture,i.TEXTURE0+B);const Ce=n.get(se);if(se.version!==Ce.__version||re===!0){t.activeTexture(i.TEXTURE0+B);const ge=st.getPrimaries(st.workingColorSpace),be=x.colorSpace===Vt?null:st.getPrimaries(x.colorSpace),Le=x.colorSpace===Vt||ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=f(x)&&m(x.image)===!1;let ae=_(x.image,Be,!1,s.maxTextureSize);ae=ve(x,ae);const Xe=m(ae)||o,Ge=r.convert(x.format,x.colorSpace);let Fe=r.convert(x.type),De=S(x.internalFormat,Ge,Fe,x.colorSpace,x.isVideoTexture);O(oe,x,Xe);let Ee;const L=x.mipmaps,de=o&&x.isVideoTexture!==!0&&De!==_l,Pe=Ce.__version===void 0||re===!0,we=U(x,ae,Xe);if(x.isDepthTexture)De=i.DEPTH_COMPONENT,o?x.type===yn?De=i.DEPTH_COMPONENT32F:x.type===Mn?De=i.DEPTH_COMPONENT24:x.type===zn?De=i.DEPTH24_STENCIL8:De=i.DEPTH_COMPONENT16:x.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Gn&&De===i.DEPTH_COMPONENT&&x.type!==Qr&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,Fe=r.convert(x.type)),x.format===Ti&&De===i.DEPTH_COMPONENT&&(De=i.DEPTH_STENCIL,x.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=zn,Fe=r.convert(x.type))),Pe&&(de?t.texStorage2D(i.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,Ge,Fe,null));else if(x.isDataTexture)if(L.length>0&&Xe){de&&Pe&&t.texStorage2D(i.TEXTURE_2D,we,De,L[0].width,L[0].height);for(let he=0,N=L.length;he<N;he++)Ee=L[he],de?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Ge,Fe,Ee.data):t.texImage2D(i.TEXTURE_2D,he,De,Ee.width,Ee.height,0,Ge,Fe,Ee.data);x.generateMipmaps=!1}else de?(Pe&&t.texStorage2D(i.TEXTURE_2D,we,De,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Ge,Fe,ae.data)):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,Ge,Fe,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){de&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,De,L[0].width,L[0].height,ae.depth);for(let he=0,N=L.length;he<N;he++)Ee=L[he],x.format!==jt?Ge!==null?de?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,ae.depth,Ge,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,De,Ee.width,Ee.height,ae.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,ae.depth,Ge,Fe,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,De,Ee.width,Ee.height,ae.depth,0,Ge,Fe,Ee.data)}else{de&&Pe&&t.texStorage2D(i.TEXTURE_2D,we,De,L[0].width,L[0].height);for(let he=0,N=L.length;he<N;he++)Ee=L[he],x.format!==jt?Ge!==null?de?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Ge,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,he,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Ge,Fe,Ee.data):t.texImage2D(i.TEXTURE_2D,he,De,Ee.width,Ee.height,0,Ge,Fe,Ee.data)}else if(x.isDataArrayTexture)de?(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,De,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ge,Fe,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,Ge,Fe,ae.data);else if(x.isData3DTexture)de?(Pe&&t.texStorage3D(i.TEXTURE_3D,we,De,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ge,Fe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,Ge,Fe,ae.data);else if(x.isFramebufferTexture){if(Pe)if(de)t.texStorage2D(i.TEXTURE_2D,we,De,ae.width,ae.height);else{let he=ae.width,N=ae.height;for(let fe=0;fe<we;fe++)t.texImage2D(i.TEXTURE_2D,fe,De,he,N,0,Ge,Fe,null),he>>=1,N>>=1}}else if(L.length>0&&Xe){de&&Pe&&t.texStorage2D(i.TEXTURE_2D,we,De,L[0].width,L[0].height);for(let he=0,N=L.length;he<N;he++)Ee=L[he],de?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Ge,Fe,Ee):t.texImage2D(i.TEXTURE_2D,he,De,Ge,Fe,Ee);x.generateMipmaps=!1}else de?(Pe&&t.texStorage2D(i.TEXTURE_2D,we,De,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Fe,ae)):t.texImage2D(i.TEXTURE_2D,0,De,Ge,Fe,ae);M(x,Xe)&&v(oe),Ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ue(E,x,B){if(x.image.length!==6)return;const oe=q(E,x),re=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const se=n.get(re);if(re.version!==se.__version||oe===!0){t.activeTexture(i.TEXTURE0+B);const Ce=st.getPrimaries(st.workingColorSpace),ge=x.colorSpace===Vt?null:st.getPrimaries(x.colorSpace),be=x.colorSpace===Vt||Ce===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,Be=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let he=0;he<6;he++)!Le&&!Be?ae[he]=_(x.image[he],!1,!0,s.maxCubemapSize):ae[he]=Be?x.image[he].image:x.image[he],ae[he]=ve(x,ae[he]);const Xe=ae[0],Ge=m(Xe)||o,Fe=r.convert(x.format,x.colorSpace),De=r.convert(x.type),Ee=S(x.internalFormat,Fe,De,x.colorSpace),L=o&&x.isVideoTexture!==!0,de=se.__version===void 0||oe===!0;let Pe=U(x,Xe,Ge);O(i.TEXTURE_CUBE_MAP,x,Ge);let we;if(Le){L&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ee,Xe.width,Xe.height);for(let he=0;he<6;he++){we=ae[he].mipmaps;for(let N=0;N<we.length;N++){const fe=we[N];x.format!==jt?Fe!==null?L?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,0,0,fe.width,fe.height,Fe,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,0,0,fe.width,fe.height,Fe,De,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,Ee,fe.width,fe.height,0,Fe,De,fe.data)}}}else{we=x.mipmaps,L&&de&&(we.length>0&&Pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ee,ae[0].width,ae[0].height));for(let he=0;he<6;he++)if(Be){L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ae[he].width,ae[he].height,Fe,De,ae[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ee,ae[he].width,ae[he].height,0,Fe,De,ae[he].data);for(let N=0;N<we.length;N++){const ye=we[N].image[he].image;L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,0,0,ye.width,ye.height,Fe,De,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,Ee,ye.width,ye.height,0,Fe,De,ye.data)}}else{L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe,De,ae[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ee,Fe,De,ae[he]);for(let N=0;N<we.length;N++){const fe=we[N];L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,0,0,Fe,De,fe.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,Ee,Fe,De,fe.image[he])}}}M(x,Ge)&&v(i.TEXTURE_CUBE_MAP),se.__version=re.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Q(E,x,B,oe,re,se){const Ce=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),be=S(B.internalFormat,Ce,ge,B.colorSpace);if(!n.get(x).__hasExternalTextures){const Be=Math.max(1,x.width>>se),ae=Math.max(1,x.height>>se);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,se,be,Be,ae,x.depth,0,Ce,ge,null):t.texImage2D(re,se,be,Be,ae,0,Ce,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),$(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,n.get(B).__webglTexture,0,ie(x)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,n.get(B).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(E,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let oe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||$(x)){const re=x.depthTexture;re&&re.isDepthTexture&&(re.type===yn?oe=i.DEPTH_COMPONENT32F:re.type===Mn&&(oe=i.DEPTH_COMPONENT24));const se=ie(x);$(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,oe,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,oe,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const oe=ie(x);B&&$(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,x.width,x.height):$(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const oe=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let re=0;re<oe.length;re++){const se=oe[re],Ce=r.convert(se.format,se.colorSpace),ge=r.convert(se.type),be=S(se.internalFormat,Ce,ge,se.colorSpace),Le=ie(x);B&&$(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,be,x.width,x.height):$(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const oe=n.get(x.depthTexture).__webglTexture,re=ie(x);if(x.depthTexture.format===Gn)$(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(x.depthTexture.format===Ti)$(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function _e(E){const x=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Se(x.__webglFramebuffer,E)}else if(B){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]=i.createRenderbuffer(),me(x.__webglDepthbuffer[oe],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),me(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(E,x,B){const oe=n.get(E);x!==void 0&&Q(oe.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&_e(E)}function D(E){const x=E.texture,B=n.get(E),oe=n.get(x);E.addEventListener("dispose",b),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=x.version,a.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,Ce=m(E)||o;if(re){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let be=0;be<x.mipmaps.length;be++)B.__webglFramebuffer[ge][be]=i.createFramebuffer()}else B.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)B.__webglFramebuffer[ge]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){const ge=E.texture;for(let be=0,Le=ge.length;be<Le;be++){const Be=n.get(ge[be]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&$(E)===!1){const ge=se?x:[x];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const Le=ge[be];B.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[be]);const Be=r.convert(Le.format,Le.colorSpace),ae=r.convert(Le.type),Xe=S(Le.internalFormat,Be,ae,Le.colorSpace,E.isXRRenderTarget===!0),Ge=ie(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,B.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),me(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),O(i.TEXTURE_CUBE_MAP,x,Ce);for(let ge=0;ge<6;ge++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)Q(B.__webglFramebuffer[ge][be],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,be);else Q(B.__webglFramebuffer[ge],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);M(x,Ce)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ge=E.texture;for(let be=0,Le=ge.length;be<Le;be++){const Be=ge[be],ae=n.get(Be);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),O(i.TEXTURE_2D,Be,Ce),Q(B.__webglFramebuffer,E,Be,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),M(Be,Ce)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ge=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,oe.__webglTexture),O(ge,x,Ce),o&&x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)Q(B.__webglFramebuffer[be],E,x,i.COLOR_ATTACHMENT0,ge,be);else Q(B.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ge,0);M(x,Ce)&&v(ge),t.unbindTexture()}E.depthBuffer&&_e(E)}function le(E){const x=m(E)||o,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,re=B.length;oe<re;oe++){const se=B[oe];if(M(se,x)){const Ce=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(se).__webglTexture;t.bindTexture(Ce,ge),v(Ce),t.unbindTexture()}}}function H(E){if(o&&E.samples>0&&$(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,oe=E.height;let re=i.COLOR_BUFFER_BIT;const se=[],Ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(E),be=E.isWebGLMultipleRenderTargets===!0;if(be)for(let Le=0;Le<x.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){se.push(i.COLOR_ATTACHMENT0+Le),E.depthBuffer&&se.push(Ce);const Be=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Be===!1&&(E.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ce]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ce])),be){const ae=n.get(x[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,B,oe,0,0,B,oe,re,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Le=0;Le<x.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]);const Be=n.get(x[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ie(E){return Math.min(s.maxSamples,E.samples)}function $(E){const x=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function ve(E,x){const B=E.colorSpace,oe=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Wr||B!==dn&&B!==Vt&&(st.getTransfer(B)===at?o===!1?e.has("EXT_sRGB")===!0&&oe===jt?(E.format=Wr,E.minFilter=kt,E.generateMipmaps=!1):x=El.sRGBToLinear(x):(oe!==jt||re!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}this.allocateTextureUnit=F,this.resetTextureUnits=ne,this.setTexture2D=V,this.setTexture2DArray=ee,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Me,this.setupRenderTarget=D,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=$}function um(i,e,t){const n=t.isWebGL2;function s(r,a=Vt){let o;const l=st.getTransfer(a);if(r===Tn)return i.UNSIGNED_BYTE;if(r===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ic)return i.BYTE;if(r===Uc)return i.SHORT;if(r===Qr)return i.UNSIGNED_SHORT;if(r===ul)return i.INT;if(r===Mn)return i.UNSIGNED_INT;if(r===yn)return i.FLOAT;if(r===qi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nc)return i.ALPHA;if(r===jt)return i.RGBA;if(r===Fc)return i.LUMINANCE;if(r===Oc)return i.LUMINANCE_ALPHA;if(r===Gn)return i.DEPTH_COMPONENT;if(r===Ti)return i.DEPTH_STENCIL;if(r===Wr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bc)return i.RED;if(r===pl)return i.RED_INTEGER;if(r===zc)return i.RG;if(r===ml)return i.RG_INTEGER;if(r===gl)return i.RGBA_INTEGER;if(r===tr||r===nr||r===ir||r===sr)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ir)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ba||r===wa||r===Aa||r===Ca)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Aa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ca)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_l)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Pa||r===Ra)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Pa)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ra)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===La||r===Da||r===Ia||r===Ua||r===Na||r===Fa||r===Oa||r===Ba||r===za||r===Ga||r===ka||r===Ha||r===Va||r===Wa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===La)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Da)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ia)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ua)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Na)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fa)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oa)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ba)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===za)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ga)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ka)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ha)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Va)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wa)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rr||r===Xa||r===qa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===rr)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gc||r===Ya||r===ja||r===Za)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===rr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ya)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ja)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Za)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class dm extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pm extends qn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const M=[],v=[],S=new ce;let U=null;const C=new Ot;C.layers.enable(1),C.viewport=new ot;const P=new Ot;P.layers.enable(2),P.viewport=new ot;const b=[C,P],y=new dm;y.layers.enable(1),y.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=M[O];return q===void 0&&(q=new Cr,M[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=M[O];return q===void 0&&(q=new Cr,M[O]=q),q.getGripSpace()},this.getHand=function(O){let q=M[O];return q===void 0&&(q=new Cr,M[O]=q),q.getHandSpace()};function Y(O){const q=v.indexOf(O.inputSource);if(q===-1)return;const te=M[q];te!==void 0&&(te.update(O.inputSource,O.frame,c||a),te.dispatchEvent({type:O.type,data:O.inputSource}))}function ne(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",F);for(let O=0;O<M.length;O++){const q=v[O];q!==null&&(v[O]=null,M[O].disconnect(q))}T=null,z=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,X.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Hn(p.framebufferWidth,p.framebufferHeight,{format:jt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,te=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?Ti:Gn,te=_.stencil?zn:Mn);const Q={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Hn(d.textureWidth,d.textureHeight,{format:jt,type:Tn,depthTexture:new Ul(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const me=e.properties.get(f);me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(O){for(let q=0;q<O.removed.length;q++){const te=O.removed[q],ue=v.indexOf(te);ue>=0&&(v[ue]=null,M[ue].disconnect(te))}for(let q=0;q<O.added.length;q++){const te=O.added[q];let ue=v.indexOf(te);if(ue===-1){for(let me=0;me<M.length;me++)if(me>=v.length){v.push(te),ue=me;break}else if(v[me]===null){v[me]=te,ue=me;break}if(ue===-1)break}const Q=M[ue];Q&&Q.connect(te)}}const G=new I,V=new I;function ee(O,q,te){G.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(te.matrixWorld);const ue=G.distanceTo(V),Q=q.projectionMatrix.elements,me=te.projectionMatrix.elements,Se=Q[14]/(Q[10]-1),_e=Q[14]/(Q[10]+1),Me=(Q[9]+1)/Q[5],D=(Q[9]-1)/Q[5],le=(Q[8]-1)/Q[0],H=(me[8]+1)/me[0],ie=Se*le,$=Se*H,Te=ue/(-le+H),ve=Te*-le;q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ve),O.translateZ(Te),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const E=Se+Te,x=_e+Te,B=ie-ve,oe=$+(ue-ve),re=Me*_e/x*E,se=D*_e/x*E;O.projectionMatrix.makePerspective(B,oe,re,se,E,x),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function W(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;y.near=P.near=C.near=O.near,y.far=P.far=C.far=O.far,(T!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,z=y.far);const q=O.parent,te=y.cameras;W(y,q);for(let ue=0;ue<te.length;ue++)W(te[ue],q);te.length===2?ee(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),J(O,y,q)};function J(O,q,te){te===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(te.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Yi*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let R=null;function A(O,q){if(h=q.getViewerPose(c||a),g=q,h!==null){const te=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ue=!1;te.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Q=0;Q<te.length;Q++){const me=te[Q];let Se=null;if(p!==null)Se=p.getViewport(me);else{const Me=u.getViewSubImage(d,me);Se=Me.viewport,Q===0&&(e.setRenderTargetTextures(f,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(f))}let _e=b[Q];_e===void 0&&(_e=new Ot,_e.layers.enable(Q),_e.viewport=new ot,b[Q]=_e),_e.matrix.fromArray(me.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(me.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Se.x,Se.y,Se.width,Se.height),Q===0&&(y.matrix.copy(_e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(_e)}}for(let te=0;te<M.length;te++){const ue=v[te],Q=M[te];ue!==null&&Q!==void 0&&Q.update(ue,q,c||a)}R&&R(O,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const X=new Dl;X.setAnimationLoop(A),this.setAnimationLoop=function(O){R=O},this.dispose=function(){}}}function mm(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Lt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Lt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gm(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=s[M.id];S===void 0&&(g(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",m));const U=v.program;n.updateUBOMapping(M,U);const C=e.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){const v=u();M.__bindingPointIndex=v;const S=i.createBuffer(),U=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],S=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,P=S.length;C<P;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,T=b.length;y<T;y++){const z=b[y];if(p(z,C,y,U)===!0){const Y=z.__offset,ne=Array.isArray(z.value)?z.value:[z.value];let F=0;for(let G=0;G<ne.length;G++){const V=ne[G],ee=_(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,Y+F,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,S,U){const C=M.value,P=v+"_"+S;if(U[P]===void 0)return typeof C=="number"||typeof C=="boolean"?U[P]=C:U[P]=C.clone(),!0;{const b=U[P];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return U[P]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function g(M){const v=M.uniforms;let S=0;const U=16;for(let P=0,b=v.length;P<b;P++){const y=Array.isArray(v[P])?v[P]:[v[P]];for(let T=0,z=y.length;T<z;T++){const Y=y[T],ne=Array.isArray(Y.value)?Y.value:[Y.value];for(let F=0,G=ne.length;F<G;F++){const V=ne[F],ee=_(V),W=S%U;W!==0&&U-W<ee.boundary&&(S+=U-W),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ee.storage}}}const C=S%U;return C>0&&(S+=U-C),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Gl{constructor(e={}){const{canvas:t=uh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const v=this;let S=!1,U=0,C=0,P=null,b=-1,y=null;const T=new ot,z=new ot;let Y=null;const ne=new Ke(0);let F=0,G=t.width,V=t.height,ee=1,W=null,J=null;const R=new ot(0,0,G,V),A=new ot(0,0,G,V);let X=!1;const O=new ia;let q=!1,te=!1,ue=null;const Q=new ht,me=new ce,Se=new I,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return P===null?ee:1}let D=n;function le(w,k){for(let Z=0;Z<w.length;Z++){const K=w[Z],j=t.getContext(K,k);if(j!==null)return j}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),D=le(k,w),D===null)throw le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let H,ie,$,Te,ve,E,x,B,oe,re,se,Ce,ge,be,Le,Be,ae,Xe,Ge,Fe,De,Ee,L,de;function Pe(){H=new wf(D),ie=new Mf(D,H,e),H.init(ie),Ee=new um(D,H,ie),$=new cm(D,H,ie),Te=new Pf(D),ve=new Zp,E=new hm(D,H,$,ve,ie,Ee,Te),x=new Sf(v),B=new bf(v),oe=new Fh(D,ie),L=new vf(D,H,oe,ie),re=new Af(D,oe,Te,L),se=new If(D,re,oe,Te),Ge=new Df(D,ie,E),Be=new yf(ve),Ce=new jp(v,x,B,H,ie,L,Be),ge=new mm(v,ve),be=new $p,Le=new im(H,ie),Xe=new _f(v,x,B,$,se,d,l),ae=new lm(v,se,ie),de=new gm(D,Te,ie,$),Fe=new xf(D,H,Te,ie),De=new Cf(D,H,Te,ie),Te.programs=Ce.programs,v.capabilities=ie,v.extensions=H,v.properties=ve,v.renderLists=be,v.shadowMap=ae,v.state=$,v.info=Te}Pe();const we=new pm(v,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=H.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=H.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(G,V,!1))},this.getSize=function(w){return w.set(G,V)},this.setSize=function(w,k,Z=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,V=k,t.width=Math.floor(w*ee),t.height=Math.floor(k*ee),Z===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(G*ee,V*ee).floor()},this.setDrawingBufferSize=function(w,k,Z){G=w,V=k,ee=Z,t.width=Math.floor(w*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,k,Z,K){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,k,Z,K),$.viewport(T.copy(R).multiplyScalar(ee).floor())},this.getScissor=function(w){return w.copy(A)},this.setScissor=function(w,k,Z,K){w.isVector4?A.set(w.x,w.y,w.z,w.w):A.set(w,k,Z,K),$.scissor(z.copy(A).multiplyScalar(ee).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(w){$.setScissorTest(X=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(w=!0,k=!0,Z=!0){let K=0;if(w){let j=!1;if(P!==null){const Ae=P.texture.format;j=Ae===gl||Ae===ml||Ae===pl}if(j){const Ae=P.texture.type,Ie=Ae===Tn||Ae===Mn||Ae===Qr||Ae===zn||Ae===dl||Ae===fl,ze=Xe.getClearColor(),ke=Xe.getClearAlpha(),Ze=ze.r,Ve=ze.g,Ye=ze.b;Ie?(p[0]=Ze,p[1]=Ve,p[2]=Ye,p[3]=ke,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ze,g[1]=Ve,g[2]=Ye,g[3]=ke,D.clearBufferiv(D.COLOR,0,g))}else K|=D.COLOR_BUFFER_BIT}k&&(K|=D.DEPTH_BUFFER_BIT),Z&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),be.dispose(),Le.dispose(),ve.dispose(),x.dispose(),B.dispose(),se.dispose(),L.dispose(),de.dispose(),Ce.dispose(),we.dispose(),we.removeEventListener("sessionstart",Qe),we.removeEventListener("sessionend",He),ue&&(ue.dispose(),ue=null),rt.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Te.autoReset,k=ae.enabled,Z=ae.autoUpdate,K=ae.needsUpdate,j=ae.type;Pe(),Te.autoReset=w,ae.enabled=k,ae.autoUpdate=Z,ae.needsUpdate=K,ae.type=j}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ye(w){const k=w.target;k.removeEventListener("dispose",ye),Oe(k)}function Oe(w){Ue(w),ve.remove(w)}function Ue(w){const k=ve.get(w).programs;k!==void 0&&(k.forEach(function(Z){Ce.releaseProgram(Z)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Z,K,j,Ae){k===null&&(k=_e);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,ze=Zs(w,k,Z,K,j);$.setMaterial(K,Ie);let ke=Z.index,Ze=1;if(K.wireframe===!0){if(ke=re.getWireframeAttribute(Z),ke===void 0)return;Ze=2}const Ve=Z.drawRange,Ye=Z.attributes.position;let dt=Ve.start*Ze,It=(Ve.start+Ve.count)*Ze;Ae!==null&&(dt=Math.max(dt,Ae.start*Ze),It=Math.min(It,(Ae.start+Ae.count)*Ze)),ke!==null?(dt=Math.max(dt,0),It=Math.min(It,ke.count)):Ye!=null&&(dt=Math.max(dt,0),It=Math.min(It,Ye.count));const xt=It-dt;if(xt<0||xt===1/0)return;L.setup(j,K,ze,Z,ke);let tn,lt=Fe;if(ke!==null&&(tn=oe.get(ke),lt=De,lt.setIndex(tn)),j.isMesh)K.wireframe===!0?($.setLineWidth(K.wireframeLinewidth*Me()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(j.isLine){let $e=K.linewidth;$e===void 0&&($e=1),$.setLineWidth($e*Me()),j.isLineSegments?lt.setMode(D.LINES):j.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else j.isPoints?lt.setMode(D.POINTS):j.isSprite&&lt.setMode(D.TRIANGLES);if(j.isBatchedMesh)lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)lt.renderInstances(dt,xt,j.count);else if(Z.isInstancedBufferGeometry){const $e=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ks=Math.min(Z.instanceCount,$e);lt.renderInstances(dt,xt,Ks)}else lt.render(dt,xt)};function Re(w,k,Z){w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=Lt,w.needsUpdate=!0,Cn(w,k,Z),w.side=bn,w.needsUpdate=!0,Cn(w,k,Z),w.side=Bt):Cn(w,k,Z)}this.compile=function(w,k,Z=null){Z===null&&(Z=w),m=Le.get(Z),m.init(),M.push(m),Z.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),w!==Z&&w.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(v._useLegacyLights);const K=new Set;return w.traverse(function(j){const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const ze=Ae[Ie];Re(ze,Z,j),K.add(ze)}else Re(Ae,Z,j),K.add(Ae)}),M.pop(),m=null,K},this.compileAsync=function(w,k,Z=null){const K=this.compile(w,k,Z);return new Promise(j=>{function Ae(){if(K.forEach(function(Ie){ve.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){j(w);return}setTimeout(Ae,10)}H.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ne=null;function qe(w){Ne&&Ne(w)}function Qe(){rt.stop()}function He(){rt.start()}const rt=new Dl;rt.setAnimationLoop(qe),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(w){Ne=w,we.setAnimationLoop(w),w===null?rt.stop():rt.start()},we.addEventListener("sessionstart",Qe),we.addEventListener("sessionend",He),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(k),k=we.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,P),m=Le.get(w,M.length),m.init(),M.push(m),Q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O.setFromProjectionMatrix(Q),te=this.localClippingEnabled,q=Be.init(this.clippingPlanes,te),_=be.get(w,f.length),_.init(),f.push(_),Tt(w,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,J),this.info.render.frame++,q===!0&&Be.beginShadows();const Z=m.state.shadowsArray;if(ae.render(Z,w,k),q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(_,w),m.setupLights(v._useLegacyLights),k.isArrayCamera){const K=k.cameras;for(let j=0,Ae=K.length;j<Ae;j++){const Ie=K[j];en(_,w,Ie,Ie.viewport)}}else en(_,w,k);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,k),L.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Tt(w,k,Z,K){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||O.intersectsSprite(w)){K&&Se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const Ie=se.update(w),ze=w.material;ze.visible&&_.push(w,Ie,ze,Z,Se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||O.intersectsObject(w))){const Ie=se.update(w),ze=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Se.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Se.copy(Ie.boundingSphere.center)),Se.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(ze)){const ke=Ie.groups;for(let Ze=0,Ve=ke.length;Ze<Ve;Ze++){const Ye=ke[Ze],dt=ze[Ye.materialIndex];dt&&dt.visible&&_.push(w,Ie,dt,Z,Se.z,Ye)}}else ze.visible&&_.push(w,Ie,ze,Z,Se.z,null)}}const Ae=w.children;for(let Ie=0,ze=Ae.length;Ie<ze;Ie++)Tt(Ae[Ie],k,Z,K)}function en(w,k,Z,K){const j=w.opaque,Ae=w.transmissive,Ie=w.transparent;m.setupLightsView(Z),q===!0&&Be.setGlobalState(v.clippingPlanes,Z),Ae.length>0&&wn(j,Ae,k,Z),K&&$.viewport(T.copy(K)),j.length>0&&An(j,k,Z),Ae.length>0&&An(Ae,k,Z),Ie.length>0&&An(Ie,k,Z),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function wn(w,k,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ae=ie.isWebGL2;ue===null&&(ue=new Hn(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?qi:Tn,minFilter:Xi,samples:Ae?4:0})),v.getDrawingBufferSize(me),Ae?ue.setSize(me.x,me.y):ue.setSize(Bs(me.x),Bs(me.y));const Ie=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(ne),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=En,An(w,Z,K),E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue);let ke=!1;for(let Ze=0,Ve=k.length;Ze<Ve;Ze++){const Ye=k[Ze],dt=Ye.object,It=Ye.geometry,xt=Ye.material,tn=Ye.group;if(xt.side===Bt&&dt.layers.test(K.layers)){const lt=xt.side;xt.side=Lt,xt.needsUpdate=!0,Qi(dt,Z,K,It,xt,tn),xt.side=lt,xt.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue)),v.setRenderTarget(Ie),v.setClearColor(ne,F),v.toneMapping=ze}function An(w,k,Z){const K=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Ae=w.length;j<Ae;j++){const Ie=w[j],ze=Ie.object,ke=Ie.geometry,Ze=K===null?Ie.material:K,Ve=Ie.group;ze.layers.test(Z.layers)&&Qi(ze,k,Z,ke,Ze,Ve)}}function Qi(w,k,Z,K,j,Ae){w.onBeforeRender(v,k,Z,K,j,Ae),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,k,Z,K,w,Ae),j.transparent===!0&&j.side===Bt&&j.forceSinglePass===!1?(j.side=Lt,j.needsUpdate=!0,v.renderBufferDirect(Z,k,K,j,w,Ae),j.side=bn,j.needsUpdate=!0,v.renderBufferDirect(Z,k,K,j,w,Ae),j.side=Bt):v.renderBufferDirect(Z,k,K,j,w,Ae),w.onAfterRender(v,k,Z,K,j,Ae)}function Cn(w,k,Z){k.isScene!==!0&&(k=_e);const K=ve.get(w),j=m.state.lights,Ae=m.state.shadowsArray,Ie=j.state.version,ze=Ce.getParameters(w,j.state,Ae,k,Z),ke=Ce.getProgramCacheKey(ze);let Ze=K.programs;K.environment=w.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(w.isMeshStandardMaterial?B:x).get(w.envMap||K.environment),Ze===void 0&&(w.addEventListener("dispose",ye),Ze=new Map,K.programs=Ze);let Ve=Ze.get(ke);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===Ie)return pn(w,ze),Ve}else ze.uniforms=Ce.getUniforms(w),w.onBuild(Z,ze,v),w.onBeforeCompile(ze,v),Ve=Ce.acquireProgram(ze,ke),Ze.set(ke,Ve),K.uniforms=ze.uniforms;const Ye=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=Be.uniform),pn(w,ze),K.needsLights=Jl(w),K.lightsStateVersion=Ie,K.needsLights&&(Ye.ambientLightColor.value=j.state.ambient,Ye.lightProbe.value=j.state.probe,Ye.directionalLights.value=j.state.directional,Ye.directionalLightShadows.value=j.state.directionalShadow,Ye.spotLights.value=j.state.spot,Ye.spotLightShadows.value=j.state.spotShadow,Ye.rectAreaLights.value=j.state.rectArea,Ye.ltc_1.value=j.state.rectAreaLTC1,Ye.ltc_2.value=j.state.rectAreaLTC2,Ye.pointLights.value=j.state.point,Ye.pointLightShadows.value=j.state.pointShadow,Ye.hemisphereLights.value=j.state.hemi,Ye.directionalShadowMap.value=j.state.directionalShadowMap,Ye.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ye.spotShadowMap.value=j.state.spotShadowMap,Ye.spotLightMatrix.value=j.state.spotLightMatrix,Ye.spotLightMap.value=j.state.spotLightMap,Ye.pointShadowMap.value=j.state.pointShadowMap,Ye.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function Ci(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Ds.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function pn(w,k){const Z=ve.get(w);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Zs(w,k,Z,K,j){k.isScene!==!0&&(k=_e),E.resetTextureUnits();const Ae=k.fog,Ie=K.isMeshStandardMaterial?k.environment:null,ze=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:dn,ke=(K.isMeshStandardMaterial?B:x).get(K.envMap||Ie),Ze=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,It=!!Z.morphAttributes.color;let xt=En;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xt=v.toneMapping);const tn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=tn!==void 0?tn.length:0,$e=ve.get(K),Ks=m.state.lights;if(q===!0&&(te===!0||w!==y)){const zt=w===y&&K.id===b;Be.setState(K,w,zt)}let ut=!1;K.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ks.state.version||$e.outputColorSpace!==ze||j.isBatchedMesh&&$e.batching===!1||!j.isBatchedMesh&&$e.batching===!0||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||j.isInstancedMesh&&$e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$e.instancingColor===!1&&j.instanceColor!==null||$e.envMap!==ke||K.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Be.numPlanes||$e.numIntersection!==Be.numIntersection)||$e.vertexAlphas!==Ze||$e.vertexTangents!==Ve||$e.morphTargets!==Ye||$e.morphNormals!==dt||$e.morphColors!==It||$e.toneMapping!==xt||ie.isWebGL2===!0&&$e.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,$e.__version=K.version);let Pn=$e.currentProgram;ut===!0&&(Pn=Cn(K,k,j));let ga=!1,Pi=!1,$s=!1;const bt=Pn.getUniforms(),Rn=$e.uniforms;if($.useProgram(Pn.program)&&(ga=!0,Pi=!0,$s=!0),K.id!==b&&(b=K.id,Pi=!0),ga||y!==w){bt.setValue(D,"projectionMatrix",w.projectionMatrix),bt.setValue(D,"viewMatrix",w.matrixWorldInverse);const zt=bt.map.cameraPosition;zt!==void 0&&zt.setValue(D,Se.setFromMatrixPosition(w.matrixWorld)),ie.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Pi=!0,$s=!0)}if(j.isSkinnedMesh){bt.setOptional(D,j,"bindMatrix"),bt.setOptional(D,j,"bindMatrixInverse");const zt=j.skeleton;zt&&(ie.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(D,"boneTexture",zt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(bt.setOptional(D,j,"batchingTexture"),bt.setValue(D,"batchingTexture",j._matricesTexture,E));const Js=Z.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0&&ie.isWebGL2===!0)&&Ge.update(j,Z,Pn),(Pi||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,bt.setValue(D,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Rn.envMap.value=ke,Rn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Pi&&(bt.setValue(D,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&jn(Rn,$s),Ae&&K.fog===!0&&ge.refreshFogUniforms(Rn,Ae),ge.refreshMaterialUniforms(Rn,K,ee,V,ue),Ds.upload(D,Ci($e),Rn,E)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ds.upload(D,Ci($e),Rn,E),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(D,"center",j.center),bt.setValue(D,"modelViewMatrix",j.modelViewMatrix),bt.setValue(D,"normalMatrix",j.normalMatrix),bt.setValue(D,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zt=K.uniformsGroups;for(let Qs=0,Ql=zt.length;Qs<Ql;Qs++)if(ie.isWebGL2){const _a=zt[Qs];de.update(_a,Pn),de.bind(_a,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function jn(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,Z){ve.get(w.texture).__webglTexture=k,ve.get(w.depthTexture).__webglTexture=Z;const K=ve.get(w);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const Z=ve.get(w);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Z=0){P=w,U=k,C=Z;let K=!0,j=null,Ae=!1,Ie=!1;if(w){const ke=ve.get(w);ke.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(D.FRAMEBUFFER,null),K=!1):ke.__webglFramebuffer===void 0?E.setupRenderTarget(w):ke.__hasExternalTextures&&E.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);const Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);const Ve=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?j=Ve[k][Z]:j=Ve[k],Ae=!0):ie.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?j=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[Z]:j=Ve,T.copy(w.viewport),z.copy(w.scissor),Y=w.scissorTest}else T.copy(R).multiplyScalar(ee).floor(),z.copy(A).multiplyScalar(ee).floor(),Y=X;if($.bindFramebuffer(D.FRAMEBUFFER,j)&&ie.drawBuffers&&K&&$.drawBuffers(w,j),$.viewport(T),$.scissor(z),$.setScissorTest(Y),Ae){const ke=ve.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,Z)}else if(Ie){const ke=ve.get(w.texture),Ze=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,Z||0,Ze)}b=-1},this.readRenderTargetPixels=function(w,k,Z,K,j,Ae,Ie){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){$.bindFramebuffer(D.FRAMEBUFFER,ze);try{const ke=w.texture,Ze=ke.format,Ve=ke.type;if(Ze!==jt&&Ee.convert(Ze)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Ve===qi&&(H.has("EXT_color_buffer_half_float")||ie.isWebGL2&&H.has("EXT_color_buffer_float"));if(Ve!==Tn&&Ee.convert(Ve)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===yn&&(ie.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-K&&Z>=0&&Z<=w.height-j&&D.readPixels(k,Z,K,j,Ee.convert(Ze),Ee.convert(Ve),Ae)}finally{const ke=P!==null?ve.get(P).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(w,k,Z=0){const K=Math.pow(2,-Z),j=Math.floor(k.image.width*K),Ae=Math.floor(k.image.height*K);E.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,w.x,w.y,j,Ae),$.unbindTexture()},this.copyTextureToTexture=function(w,k,Z,K=0){const j=k.image.width,Ae=k.image.height,Ie=Ee.convert(Z.format),ze=Ee.convert(Z.type);E.setTexture2D(Z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Z.unpackAlignment),k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,K,w.x,w.y,j,Ae,Ie,ze,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,K,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Ie,k.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,K,w.x,w.y,Ie,ze,k.image),K===0&&Z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Z,K,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=w.max.x-w.min.x+1,Ie=w.max.y-w.min.y+1,ze=w.max.z-w.min.z+1,ke=Ee.convert(K.format),Ze=Ee.convert(K.type);let Ve;if(K.isData3DTexture)E.setTexture3D(K,0),Ve=D.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)E.setTexture2DArray(K,0),Ve=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment);const Ye=D.getParameter(D.UNPACK_ROW_LENGTH),dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),It=D.getParameter(D.UNPACK_SKIP_PIXELS),xt=D.getParameter(D.UNPACK_SKIP_ROWS),tn=D.getParameter(D.UNPACK_SKIP_IMAGES),lt=Z.isCompressedTexture?Z.mipmaps[j]:Z.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,w.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,w.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?D.texSubImage3D(Ve,j,k.x,k.y,k.z,Ae,Ie,ze,ke,Ze,lt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ve,j,k.x,k.y,k.z,Ae,Ie,ze,ke,lt.data)):D.texSubImage3D(Ve,j,k.x,k.y,k.z,Ae,Ie,ze,ke,Ze,lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ye),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,tn),j===0&&K.generateMipmaps&&D.generateMipmap(Ve),$.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){U=0,C=0,P=null,$.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ea?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?kn:vl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kn?St:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _m extends Gl{}_m.prototype.isWebGL1Renderer=!0;class ra{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vm extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new I;class Gs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class aa extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fi;const Ui=new I,pi=new I,mi=new I,gi=new ce,Ni=new ce,kl=new ht,Ss=new I,Fi=new I,Es=new I,Bo=new ce,Pr=new ce,zo=new ce;class Hl extends mt{constructor(e=new aa){if(super(),this.isSprite=!0,this.type="Sprite",fi===void 0){fi=new gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xm(t,5);fi.setIndex([0,1,2,0,2,3]),fi.setAttribute("position",new Gs(n,3,0,!1)),fi.setAttribute("uv",new Gs(n,2,3,!1))}this.geometry=fi,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pi.setFromMatrixScale(this.matrixWorld),kl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pi.multiplyScalar(-mi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ts(Ss.set(-.5,-.5,0),mi,a,pi,s,r),Ts(Fi.set(.5,-.5,0),mi,a,pi,s,r),Ts(Es.set(.5,.5,0),mi,a,pi,s,r),Bo.set(0,0),Pr.set(1,0),zo.set(1,1);let o=e.ray.intersectTriangle(Ss,Fi,Es,!1,Ui);if(o===null&&(Ts(Fi.set(-.5,.5,0),mi,a,pi,s,r),Pr.set(0,1),o=e.ray.intersectTriangle(Ss,Es,Fi,!1,Ui),o===null))return;const l=e.ray.origin.distanceTo(Ui);l<e.near||l>e.far||t.push({distance:l,point:Ui.clone(),uv:Ht.getInterpolation(Ui,Ss,Fi,Es,Bo,Pr,zo,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ts(i,e,t,n,s,r){gi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ni.x=r*gi.x-s*gi.y,Ni.y=s*gi.x+r*gi.y):Ni.copy(gi),i.copy(e),i.x+=Ni.x,i.y+=Ni.y,i.applyMatrix4(kl)}class oa extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new I,ko=new I,Ho=new ht,Rr=new Ws,bs=new Vs;class Vo extends mt{constructor(e=new gt,t=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Go.fromBufferAttribute(t,s-1),ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Go.distanceTo(ko);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(s),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;Ho.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Ho);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let v=f,S=M-1;v<S;v+=p){const U=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(m,U),h.fromBufferAttribute(m,C),Rr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let v=f,S=M-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Rr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class fn extends Dt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],a=[],o=new I,l=new ht;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(yt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(yt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class la extends Qt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ce,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mm extends la{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ca(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const ws=new I,Lr=new ca,Dr=new ca,Ir=new ca;class ym extends Qt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ws.subVectors(s[0],s[1]).add(s[0]),c=ws);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ws.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Lr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Dr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ir.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ir.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Lr.calc(l),Dr.calc(l),Ir.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wo(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Sm(i,e){const t=1-i;return t*t*e}function Em(i,e){return 2*(1-i)*i*e}function Tm(i,e){return i*i*e}function ki(i,e,t,n){return Sm(i,e)+Em(i,t)+Tm(i,n)}function bm(i,e){const t=1-i;return t*t*t*e}function wm(i,e){const t=1-i;return 3*t*t*i*e}function Am(i,e){return 3*(1-i)*i*i*e}function Cm(i,e){return i*i*i*e}function Hi(i,e,t,n,s){return bm(i,e)+wm(i,t)+Am(i,n)+Cm(i,s)}class Vl extends Qt{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hi(e,s.x,r.x,a.x,o.x),Hi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pm extends Qt{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hi(e,s.x,r.x,a.x,o.x),Hi(e,s.y,r.y,a.y,o.y),Hi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wl extends Qt{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends Qt{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xl extends Qt{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ki(e,s.x,r.x,a.x),ki(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lm extends Qt{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ki(e,s.x,r.x,a.x),ki(e,s.y,r.y,a.y),ki(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ql extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Wo(o,l.x,c.x,h.x,u.x),Wo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var Yr=Object.freeze({__proto__:null,ArcCurve:Mm,CatmullRomCurve3:ym,CubicBezierCurve:Vl,CubicBezierCurve3:Pm,EllipseCurve:la,LineCurve:Wl,LineCurve3:Rm,QuadraticBezierCurve:Xl,QuadraticBezierCurve3:Lm,SplineCurve:ql});class Dm extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Yr[s.type]().fromJSON(s))}return this}}class Xo extends Dm{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wl(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Xl(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Vl(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ql(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new la(e,t,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bn extends gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nt extends gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function M(){const S=new I,U=new I;let C=0;const P=(t-e)/n;for(let b=0;b<=r;b++){const y=[],T=b/r,z=T*(t-e)+e;for(let Y=0;Y<=s;Y++){const ne=Y/s,F=ne*l+o,G=Math.sin(F),V=Math.cos(F);U.x=z*G,U.y=-T*n+m,U.z=z*V,u.push(U.x,U.y,U.z),S.set(G,P,V).normalize(),d.push(S.x,S.y,S.z),p.push(ne,1-T),y.push(g++)}_.push(y)}for(let b=0;b<s;b++)for(let y=0;y<r;y++){const T=_[y][b],z=_[y+1][b],Y=_[y+1][b+1],ne=_[y][b+1];h.push(T,z,ne),h.push(z,Y,ne),C+=6}c.addGroup(f,C,0),f+=C}function v(S){const U=g,C=new ce,P=new I;let b=0;const y=S===!0?e:t,T=S===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;const z=g;for(let Y=0;Y<=s;Y++){const F=Y/s*l+o,G=Math.cos(F),V=Math.sin(F);P.x=y*V,P.y=m*T,P.z=y*G,u.push(P.x,P.y,P.z),d.push(0,T,0),C.x=G*.5+.5,C.y=V*.5*T+.5,p.push(C.x,C.y),g++}for(let Y=0;Y<s;Y++){const ne=U+Y,F=z+Y;S===!0?h.push(F,F+1,ne):h.push(F+1,F,ne),b+=3}c.addGroup(f,b,S===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ji extends nt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ji(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new I,S=new I,U=new I;for(let C=0;C<t.length;C+=3)p(t[C+0],v),p(t[C+1],S),p(t[C+2],U),l(v,S,U,M)}function l(M,v,S,U){const C=U+1,P=[];for(let b=0;b<=C;b++){P[b]=[];const y=M.clone().lerp(S,b/C),T=v.clone().lerp(S,b/C),z=C-b;for(let Y=0;Y<=z;Y++)Y===0&&b===C?P[b][Y]=y:P[b][Y]=y.clone().lerp(T,Y/z)}for(let b=0;b<C;b++)for(let y=0;y<2*(C-b)-1;y++){const T=Math.floor(y/2);y%2===0?(d(P[b][T+1]),d(P[b+1][T]),d(P[b][T])):(d(P[b][T+1]),d(P[b+1][T+1]),d(P[b+1][T]))}}function c(M){const v=new I;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const M=new I;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const S=m(M)/2/Math.PI+.5,U=f(M)/Math.PI+.5;a.push(S,1-U)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const v=a[M+0],S=a[M+2],U=a[M+4],C=Math.max(v,S,U),P=Math.min(v,S,U);C>.9&&P<.1&&(v<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),U<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,v){const S=M*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const M=new I,v=new I,S=new I,U=new I,C=new ce,P=new ce,b=new ce;for(let y=0,T=0;y<r.length;y+=9,T+=6){M.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),C.set(a[T+0],a[T+1]),P.set(a[T+2],a[T+3]),b.set(a[T+4],a[T+5]),U.copy(M).add(v).add(S).divideScalar(3);const z=m(U);_(C,T+0,M,z),_(P,T+2,v,z),_(b,T+4,S,z)}}function _(M,v,S,U){U<0&&M.x===1&&(a[v]=M.x-1),S.x===0&&S.z===0&&(a[v]=U/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.vertices,e.indices,e.radius,e.details)}}class ua extends ha{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ua(e.radius,e.detail)}}class da extends Xo{constructor(e){super(e),this.uuid=Jt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Xo().fromJSON(s))}return this}}const Im={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Yl(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=Bm(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Zi(r,a,t,o,l,p,0),a}};function Yl(i,e,t,n,s){let r,a;if(s===Zm(i,e,t,n)>0)for(r=e;r<t;r+=n)a=qo(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=qo(r,i[r],i[r+1],a);return a&&Ys(a,a.next)&&($i(a),a=a.next),a}function Xn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ys(t,t.next)||ct(t.prev,t,t.next)===0)){if($i(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zi(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Vm(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Nm(i,n,s,r):Um(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),$i(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Fm(Xn(i),e,t),Zi(i,e,t,n,s,r,2)):a===2&&Om(i,e,t,n,s,r):Zi(Xn(i),e,t,n,s,r,1);break}}}function Um(i){const e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&xi(s,o,r,l,a,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nm(i,e,t,n){const s=i.prev,r=i,a=i.next;if(ct(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=jr(p,g,e,t,n),M=jr(_,m,e,t,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=M;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&xi(o,h,l,u,c,d,v.x,v.y)&&ct(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&xi(o,h,l,u,c,d,S.x,S.y)&&ct(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&xi(o,h,l,u,c,d,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&xi(o,h,l,u,c,d,S.x,S.y)&&ct(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Fm(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ys(s,r)&&jl(s,n,n.next,r)&&Ki(s,r)&&Ki(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$i(n),$i(n.next),n=i=r),n=n.next}while(n!==i);return Xn(n)}function Om(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qm(a,o)){let l=Zl(a,o);a=Xn(a,a.next),l=Xn(l,l.next),Zi(a,e,t,n,s,r,0),Zi(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Bm(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Yl(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Xm(c));for(s.sort(zm),r=0;r<s.length;r++)t=Gm(s[r],t);return t}function zm(i,e){return i.x-e.x}function Gm(i,e){const t=km(i,e);if(!t)return e;const n=Zl(t,i);return Xn(n,n.next),Xn(t,t.next)}function km(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&xi(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Ki(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Hm(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Hm(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function Vm(i,e,t,n){let s=i;do s.z===0&&(s.z=jr(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wm(s)}function Wm(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function jr(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Xm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xi(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function qm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ym(i,e)&&(Ki(i,e)&&Ki(e,i)&&jm(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||Ys(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ys(i,e){return i.x===e.x&&i.y===e.y}function jl(i,e,t,n){const s=Cs(ct(i,e,t)),r=Cs(ct(i,e,n)),a=Cs(ct(t,n,i)),o=Cs(ct(t,n,e));return!!(s!==r&&a!==o||s===0&&As(i,t,e)||r===0&&As(i,n,e)||a===0&&As(t,i,n)||o===0&&As(t,e,n))}function As(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cs(i){return i>0?1:i<0?-1:0}function Ym(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ki(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function jm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zl(i,e){const t=new Zr(i.i,i.x,i.y),n=new Zr(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qo(i,e,t,n){const s=new Zr(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $i(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zr(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Vi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Yo(e),jo(n,e);let a=e.length;t.forEach(Yo);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,jo(n,t[l]);const o=Im.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Yo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class js extends gt{constructor(e=new da([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Km;let v,S=!1,U,C,P,b;f&&(v=f.getSpacedPoints(h),S=!0,d=!1,U=f.computeFrenetFrames(h,!1),C=new I,P=new I,b=new I),d||(m=0,p=0,g=0,_=0);const y=o.extractPoints(c);let T=y.shape;const z=y.holes;if(!Vi.isClockWise(T)){T=T.reverse();for(let D=0,le=z.length;D<le;D++){const H=z[D];Vi.isClockWise(H)&&(z[D]=H.reverse())}}const ne=Vi.triangulateShape(T,z),F=T;for(let D=0,le=z.length;D<le;D++){const H=z[D];T=T.concat(H)}function G(D,le,H){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(le,H)}const V=T.length,ee=ne.length;function W(D,le,H){let ie,$,Te;const ve=D.x-le.x,E=D.y-le.y,x=H.x-D.x,B=H.y-D.y,oe=ve*ve+E*E,re=ve*B-E*x;if(Math.abs(re)>Number.EPSILON){const se=Math.sqrt(oe),Ce=Math.sqrt(x*x+B*B),ge=le.x-E/se,be=le.y+ve/se,Le=H.x-B/Ce,Be=H.y+x/Ce,ae=((Le-ge)*B-(Be-be)*x)/(ve*B-E*x);ie=ge+ve*ae-D.x,$=be+E*ae-D.y;const Xe=ie*ie+$*$;if(Xe<=2)return new ce(ie,$);Te=Math.sqrt(Xe/2)}else{let se=!1;ve>Number.EPSILON?x>Number.EPSILON&&(se=!0):ve<-Number.EPSILON?x<-Number.EPSILON&&(se=!0):Math.sign(E)===Math.sign(B)&&(se=!0),se?(ie=-E,$=ve,Te=Math.sqrt(oe)):(ie=ve,$=E,Te=Math.sqrt(oe/2))}return new ce(ie/Te,$/Te)}const J=[];for(let D=0,le=F.length,H=le-1,ie=D+1;D<le;D++,H++,ie++)H===le&&(H=0),ie===le&&(ie=0),J[D]=W(F[D],F[H],F[ie]);const R=[];let A,X=J.concat();for(let D=0,le=z.length;D<le;D++){const H=z[D];A=[];for(let ie=0,$=H.length,Te=$-1,ve=ie+1;ie<$;ie++,Te++,ve++)Te===$&&(Te=0),ve===$&&(ve=0),A[ie]=W(H[ie],H[Te],H[ve]);R.push(A),X=X.concat(A)}for(let D=0;D<m;D++){const le=D/m,H=p*Math.cos(le*Math.PI/2),ie=g*Math.sin(le*Math.PI/2)+_;for(let $=0,Te=F.length;$<Te;$++){const ve=G(F[$],J[$],ie);Q(ve.x,ve.y,-H)}for(let $=0,Te=z.length;$<Te;$++){const ve=z[$];A=R[$];for(let E=0,x=ve.length;E<x;E++){const B=G(ve[E],A[E],ie);Q(B.x,B.y,-H)}}}const O=g+_;for(let D=0;D<V;D++){const le=d?G(T[D],X[D],O):T[D];S?(P.copy(U.normals[0]).multiplyScalar(le.x),C.copy(U.binormals[0]).multiplyScalar(le.y),b.copy(v[0]).add(P).add(C),Q(b.x,b.y,b.z)):Q(le.x,le.y,0)}for(let D=1;D<=h;D++)for(let le=0;le<V;le++){const H=d?G(T[le],X[le],O):T[le];S?(P.copy(U.normals[D]).multiplyScalar(H.x),C.copy(U.binormals[D]).multiplyScalar(H.y),b.copy(v[D]).add(P).add(C),Q(b.x,b.y,b.z)):Q(H.x,H.y,u/h*D)}for(let D=m-1;D>=0;D--){const le=D/m,H=p*Math.cos(le*Math.PI/2),ie=g*Math.sin(le*Math.PI/2)+_;for(let $=0,Te=F.length;$<Te;$++){const ve=G(F[$],J[$],ie);Q(ve.x,ve.y,u+H)}for(let $=0,Te=z.length;$<Te;$++){const ve=z[$];A=R[$];for(let E=0,x=ve.length;E<x;E++){const B=G(ve[E],A[E],ie);S?Q(B.x,B.y+v[h-1].y,v[h-1].x+H):Q(B.x,B.y,u+H)}}}q(),te();function q(){const D=s.length/3;if(d){let le=0,H=V*le;for(let ie=0;ie<ee;ie++){const $=ne[ie];me($[2]+H,$[1]+H,$[0]+H)}le=h+m*2,H=V*le;for(let ie=0;ie<ee;ie++){const $=ne[ie];me($[0]+H,$[1]+H,$[2]+H)}}else{for(let le=0;le<ee;le++){const H=ne[le];me(H[2],H[1],H[0])}for(let le=0;le<ee;le++){const H=ne[le];me(H[0]+V*h,H[1]+V*h,H[2]+V*h)}}n.addGroup(D,s.length/3-D,0)}function te(){const D=s.length/3;let le=0;ue(F,le),le+=F.length;for(let H=0,ie=z.length;H<ie;H++){const $=z[H];ue($,le),le+=$.length}n.addGroup(D,s.length/3-D,1)}function ue(D,le){let H=D.length;for(;--H>=0;){const ie=H;let $=H-1;$<0&&($=D.length-1);for(let Te=0,ve=h+m*2;Te<ve;Te++){const E=V*Te,x=V*(Te+1),B=le+ie+E,oe=le+$+E,re=le+$+x,se=le+ie+x;Se(B,oe,re,se)}}}function Q(D,le,H){l.push(D),l.push(le),l.push(H)}function me(D,le,H){_e(D),_e(le),_e(H);const ie=s.length/3,$=M.generateTopUV(n,s,ie-3,ie-2,ie-1);Me($[0]),Me($[1]),Me($[2])}function Se(D,le,H,ie){_e(D),_e(le),_e(ie),_e(le),_e(H),_e(ie);const $=s.length/3,Te=M.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);Me(Te[0]),Me(Te[1]),Me(Te[3]),Me(Te[1]),Me(Te[2]),Me(Te[3])}function _e(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function Me(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $m(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yr[s.type]().fromJSON(s)),new js(n,e.options)}}const Km={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ce(r,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-u),new ce(d,1-g),new ce(_,1-f)]:[new ce(o,1-l),new ce(h,1-u),new ce(p,1-g),new ce(m,1-f)]}};function $m(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fa extends gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,p=new I,g=new ce;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,v=M,S=M+n+1,U=M+n+2,C=M+1;o.push(v,S,C),o.push(S,U,C)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ft extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],v=f/n;let S=0;f===0&&a===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let U=0;U<=t;U++){const C=U/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+S,1-v),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const v=h[f][M+1],S=h[f][M],U=h[f+1][M],C=h[f+1][M+1];(f!==0||a>0)&&p.push(v,S,C),(f!==n-1||l<Math.PI)&&p.push(S,U,C)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wi extends gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;a.push(_,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class We extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jm extends oa{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class pa extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Qm extends pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ur=new ht,Zo=new I,Ko=new I;class Kl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zo),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $o=new ht,Oi=new I,Nr=new I;class eg extends Kl{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),Nr.copy(n.position),Nr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nr),n.updateMatrixWorld(),s.makeTranslation(-Oi.x,-Oi.y,-Oi.z),$o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o)}}class tg extends pa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ng extends Kl{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jo extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new ng}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qo(){return(typeof performance>"u"?Date:performance).now()}class sg{constructor(e,t,n=0,s=1/0){this.ray=new Ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Kr(e,this,n,t),n.sort(el),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kr(e[s],this,n,t);return n.sort(el),n}}function el(i,e){return i.distance-e.distance}function Kr(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Kr(s[r],e,t,!0)}}class tl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);const nl={type:"change"},Fr={type:"start"},il={type:"end"},Ps=new Ws,sl=new cn,rg=Math.cos(70*yl.DEG2RAD);class ag extends qn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Le),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nl),n.update(),r=s.NONE},this.update=function(){const L=new I,de=new Vn().setFromUnitVectors(e.up,new I(0,1,0)),Pe=de.clone().invert(),we=new I,he=new Vn,N=new I,fe=2*Math.PI;return function(Oe=null){const Ue=n.object.position;L.copy(Ue).sub(n.target),L.applyQuaternion(de),o.setFromVector3(L),n.autoRotate&&r===s.NONE&&Y(T(Oe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Re=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;isFinite(Re)&&isFinite(Ne)&&(Re<-Math.PI?Re+=fe:Re>Math.PI&&(Re-=fe),Ne<-Math.PI?Ne+=fe:Ne>Math.PI&&(Ne-=fe),Re<=Ne?o.theta=Math.max(Re,Math.min(Ne,o.theta)):o.theta=o.theta>(Re+Ne)/2?Math.max(Re,o.theta):Math.min(Ne,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?o.radius=R(o.radius):o.radius=R(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Pe),Ue.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let qe=!1;if(n.zoomToCursor&&C){let Qe=null;if(n.object.isPerspectiveCamera){const He=L.length();Qe=R(He*c);const rt=He-Qe;n.object.position.addScaledVector(S,rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const He=new I(U.x,U.y,0);He.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),qe=!0;const rt=new I(U.x,U.y,0);rt.unproject(n.object),n.object.position.sub(rt).add(He),n.object.updateMatrixWorld(),Qe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Qe).add(n.object.position):(Ps.origin.copy(n.object.position),Ps.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ps.direction))<rg?e.lookAt(n.target):(sl.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ps.intersectPlane(sl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),qe=!0);return c=1,C=!1,qe||we.distanceToSquared(n.object.position)>a||8*(1-he.dot(n.object.quaternion))>a||N.distanceToSquared(n.target)>0?(n.dispatchEvent(nl),we.copy(n.object.position),he.copy(n.object.quaternion),N.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Xe),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Le),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new tl,l=new tl;let c=1;const h=new I,u=new ce,d=new ce,p=new ce,g=new ce,_=new ce,m=new ce,f=new ce,M=new ce,v=new ce,S=new I,U=new ce;let C=!1;const P=[],b={};let y=!1;function T(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function z(L){const de=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*de)}function Y(L){l.theta-=L}function ne(L){l.phi-=L}const F=function(){const L=new I;return function(Pe,we){L.setFromMatrixColumn(we,0),L.multiplyScalar(-Pe),h.add(L)}}(),G=function(){const L=new I;return function(Pe,we){n.screenSpacePanning===!0?L.setFromMatrixColumn(we,1):(L.setFromMatrixColumn(we,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Pe),h.add(L)}}(),V=function(){const L=new I;return function(Pe,we){const he=n.domElement;if(n.object.isPerspectiveCamera){const N=n.object.position;L.copy(N).sub(n.target);let fe=L.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),F(2*Pe*fe/he.clientHeight,n.object.matrix),G(2*we*fe/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(Pe*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),G(we*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ee(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L,de){if(!n.zoomToCursor)return;C=!0;const Pe=n.domElement.getBoundingClientRect(),we=L-Pe.left,he=de-Pe.top,N=Pe.width,fe=Pe.height;U.x=we/N*2-1,U.y=-(he/fe)*2+1,S.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function R(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function A(L){u.set(L.clientX,L.clientY)}function X(L){J(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function O(L){g.set(L.clientX,L.clientY)}function q(L){d.set(L.clientX,L.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const de=n.domElement;Y(2*Math.PI*p.x/de.clientHeight),ne(2*Math.PI*p.y/de.clientHeight),u.copy(d),n.update()}function te(L){M.set(L.clientX,L.clientY),v.subVectors(M,f),v.y>0?ee(z(v.y)):v.y<0&&W(z(v.y)),f.copy(M),n.update()}function ue(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(_),n.update()}function Q(L){J(L.clientX,L.clientY),L.deltaY<0?W(z(L.deltaY)):L.deltaY>0&&ee(z(L.deltaY)),n.update()}function me(L){let de=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),de=!0;break}de&&(L.preventDefault(),n.update())}function Se(L){if(P.length===1)u.set(L.pageX,L.pageY);else{const de=Ee(L),Pe=.5*(L.pageX+de.x),we=.5*(L.pageY+de.y);u.set(Pe,we)}}function _e(L){if(P.length===1)g.set(L.pageX,L.pageY);else{const de=Ee(L),Pe=.5*(L.pageX+de.x),we=.5*(L.pageY+de.y);g.set(Pe,we)}}function Me(L){const de=Ee(L),Pe=L.pageX-de.x,we=L.pageY-de.y,he=Math.sqrt(Pe*Pe+we*we);f.set(0,he)}function D(L){n.enableZoom&&Me(L),n.enablePan&&_e(L)}function le(L){n.enableZoom&&Me(L),n.enableRotate&&Se(L)}function H(L){if(P.length==1)d.set(L.pageX,L.pageY);else{const Pe=Ee(L),we=.5*(L.pageX+Pe.x),he=.5*(L.pageY+Pe.y);d.set(we,he)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const de=n.domElement;Y(2*Math.PI*p.x/de.clientHeight),ne(2*Math.PI*p.y/de.clientHeight),u.copy(d)}function ie(L){if(P.length===1)_.set(L.pageX,L.pageY);else{const de=Ee(L),Pe=.5*(L.pageX+de.x),we=.5*(L.pageY+de.y);_.set(Pe,we)}m.subVectors(_,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(_)}function $(L){const de=Ee(L),Pe=L.pageX-de.x,we=L.pageY-de.y,he=Math.sqrt(Pe*Pe+we*we);M.set(0,he),v.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),ee(v.y),f.copy(M);const N=(L.pageX+de.x)*.5,fe=(L.pageY+de.y)*.5;J(N,fe)}function Te(L){n.enableZoom&&$(L),n.enablePan&&ie(L)}function ve(L){n.enableZoom&&$(L),n.enableRotate&&H(L)}function E(L){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",B)),Ge(L),L.pointerType==="touch"?Be(L):oe(L))}function x(L){n.enabled!==!1&&(L.pointerType==="touch"?ae(L):re(L))}function B(L){Fe(L),P.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(il),r=s.NONE}function oe(L){let de;switch(L.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Zn.DOLLY:if(n.enableZoom===!1)return;X(L),r=s.DOLLY;break;case Zn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;O(L),r=s.PAN}else{if(n.enableRotate===!1)return;A(L),r=s.ROTATE}break;case Zn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;A(L),r=s.ROTATE}else{if(n.enablePan===!1)return;O(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Fr)}function re(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(L);break;case s.DOLLY:if(n.enableZoom===!1)return;te(L);break;case s.PAN:if(n.enablePan===!1)return;ue(L);break}}function se(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(Fr),Q(Ce(L)),n.dispatchEvent(il))}function Ce(L){const de=L.deltaMode,Pe={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(de){case 1:Pe.deltaY*=16;break;case 2:Pe.deltaY*=100;break}return L.ctrlKey&&!y&&(Pe.deltaY*=10),Pe}function ge(L){L.key==="Control"&&(y=!0,document.addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(L){L.key==="Control"&&(y=!1,document.removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Le(L){n.enabled===!1||n.enablePan===!1||me(L)}function Be(L){switch(De(L),P.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;Se(L),r=s.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;_e(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(L),r=s.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;le(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Fr)}function ae(L){switch(De(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;H(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ie(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(L),n.update();break;default:r=s.NONE}}function Xe(L){n.enabled!==!1&&L.preventDefault()}function Ge(L){P.push(L.pointerId)}function Fe(L){delete b[L.pointerId];for(let de=0;de<P.length;de++)if(P[de]==L.pointerId){P.splice(de,1);return}}function De(L){let de=b[L.pointerId];de===void 0&&(de=new ce,b[L.pointerId]=de),de.set(L.pageX,L.pageY)}function Ee(L){const de=L.pointerId===P[0]?P[1]:P[0];return b[de]}n.domElement.addEventListener("contextmenu",Xe),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",se,{passive:!1}),document.addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}class og{constructor(e){this.scene=e,this.characters={},this.targetFocus=new I(0,.12,0),this.initCharacters()}createStylizedCharacter({name:e,skinColor:t=15049583,clothesColor:n=16096779,clothesAccent:s=14251782,pantsColor:r=1981066,shoeColor:a=4528643,hairColor:o=1841431,eyeColor:l=3874832,gender:c="boy",scale:h=1,isChubby:u=!1}){const d=new tt;d.name=`character-${e}`;const p=new We({color:t,roughness:.55,metalness:.02}),g=new We({color:n,roughness:.7,metalness:.05}),_=new We({color:s,roughness:.65}),m=new We({color:r,roughness:.8}),f=new We({color:a,roughness:.6}),M=new We({color:o,roughness:.85}),v=new We({color:16645629,roughness:.2}),S=new We({color:l,roughness:.3}),U=new Yt({color:328965}),C=new Yt({color:16777215});new Yt({color:8591427});const P=new Yt({color:16777215}),b=h,y=u?.54*b:.44*b,T=.95*b,z=new tt;z.position.y=.85*b;const Y=new nt(y*.88,y*1.05,T,20),ne=new pe(Y,g);ne.castShadow=!0,ne.receiveShadow=!0,z.add(ne);const F=new pt(.08*b,T*.75,.03*b),G=new pe(F,_);G.position.set(0,.1*b,y*.95),z.add(G);for(let Re=0;Re<3;Re++){const Ne=new Ft(.025*b,8,8),qe=new pe(Ne,new We({color:16498468,metalness:.8,roughness:.2}));qe.position.set(0,(.25-Re*.18)*b,y*.98),z.add(qe)}const V=new nt(.24*b,.26*b,.14*b,16),ee=new pe(V,_);ee.position.y=T/2+.05*b,z.add(ee),d.add(z);const W=new tt;W.position.y=1.48*b;const J=new nt(.18*b,.2*b,.2*b,14),R=new pe(J,p);R.position.y=-.08*b,W.add(R);const A=new Ft(.48*b,28,24);A.scale(1,1.08,1.02);const X=new pe(A,p);X.castShadow=!0,W.add(X);const O=new Ft(.11*b,12,12);O.scale(.5,1.2,.8);const q=new pe(O,p);q.position.set(-.48*b,.02*b,0),q.rotation.z=.15;const te=q.clone();te.position.x=.48*b,te.rotation.z=-.15,W.add(q),W.add(te);const ue=new ji(.065*b,.14*b,12),Q=new pe(ue,p);Q.position.set(0,.02*b,.5*b),Q.rotation.x=Math.PI/2.3,W.add(Q);const me=.16*b,Se=.11*b,_e=.43*b,Me=new tt;Me.position.set(-me,Se,_e);const D=new tt;D.position.set(me,Se,_e),[Me,D].forEach((Re,Ne)=>{const qe=new Ft(.095*b,16,16);qe.scale(1.05,1.15,.6);const Qe=new pe(qe,v);Re.add(Qe);const He=new Bn(.055*b,16),rt=new pe(He,S);rt.position.set(0,0,.058*b),Re.add(rt);const Tt=new Bn(.03*b,12),en=new pe(Tt,U);en.position.set(0,0,.06*b),Re.add(en);const wn=new Bn(.016*b,8),An=new pe(wn,C);An.position.set(.015*b,.018*b,.062*b),Re.add(An);const Qi=new Bn(.008*b,8),Cn=new pe(Qi,C);Cn.position.set(-.015*b,-.015*b,.062*b),Re.add(Cn);const Ci=new Ft(.102*b,16,16,0,Math.PI*2,0,Math.PI/2);Ci.scale(1.1,1.2,.65);const pn=new pe(Ci,p);pn.rotation.x=-Math.PI/2,pn.position.y=.04*b,pn.visible=!1,Re.add(pn),Re.userData.eyelid=pn;const Zs=new pt(.14*b,.035*b,.03*b),jn=new pe(Zs,M);jn.position.set(0,.13*b,.02*b),jn.rotation.z=Ne===0?.08:-.08,Re.add(jn),Re.userData.brow=jn,W.add(Re)});const le=new Bn(.09*b,14),H=new Yt({color:16281969,transparent:!0,opacity:.55}),ie=new pe(le,H);ie.position.set(-.25*b,-.04*b,.44*b),ie.rotation.y=-.35;const $=ie.clone();$.position.x=.25*b,$.rotation.y=.35,W.add(ie),W.add($);const Te=new tt;Te.position.set(0,-.16*b,.45*b);const ve=new wi(.13*b,.025*b,10,16,Math.PI*.95),E=new pe(ve,new Yt({color:10033947}));E.rotation.x=Math.PI,Te.add(E);const x=new pt(.12*b,.035*b,.02*b),B=new pe(x,P);if(B.position.set(0,.02*b,0),Te.add(B),W.add(Te),c==="girl"){const Re=new Ft(.51*b,20,20,0,Math.PI*2,0,Math.PI/1.7),Ne=new pe(Re,M);Ne.position.y=.03*b,W.add(Ne);const qe=new Ft(.23*b,16,16),Qe=new wi(.18*b,.035*b,8,16),He=new We({color:16777215,roughness:.5}),rt=new pe(qe,M);rt.position.set(-.48*b,.32*b,-.05*b);const Tt=new pe(Qe,He);Tt.position.copy(rt.position),Tt.rotation.y=Math.PI/2,W.add(rt),W.add(Tt);const en=new pe(qe,M);en.position.set(.48*b,.32*b,-.05*b);const wn=new pe(Qe,He);wn.position.copy(en.position),wn.rotation.y=Math.PI/2,W.add(en),W.add(wn)}else if(u){const Re=new Ft(.52*b,20,16,0,Math.PI*2,0,Math.PI/2),Ne=new pe(Re,M);Ne.position.y=.04*b,W.add(Ne);const qe=new Ft(.14*b,10,10),Qe=new pe(qe,M);Qe.position.set(0,.48*b,.22*b),W.add(Qe)}else{const Re=new Ft(.51*b,20,16,0,Math.PI*2,0,Math.PI/1.8),Ne=new pe(Re,M);Ne.position.y=.05*b,W.add(Ne);for(let qe=-1;qe<=1;qe++){const Qe=new ji(.11*b,.28*b,8),He=new pe(Qe,M);He.position.set(qe*.12*b,.46*b,.34*b),He.rotation.x=-Math.PI/3,He.rotation.z=qe*-.25,W.add(He)}}d.add(W);const oe=y*.95+.12*b,re=new tt;re.position.set(-oe,1.25*b,0);const se=new nt(.1*b,.09*b,.42*b,12),Ce=new pe(se,g);Ce.position.y=-.21*b,Ce.castShadow=!0,re.add(Ce);const ge=new tt;ge.position.set(0,-.42*b,0);const be=new nt(.085*b,.075*b,.38*b,12),Le=new pe(be,p);Le.position.y=-.19*b,ge.add(Le);const Be=new pt(.12*b,.12*b,.06*b),ae=new pe(Be,p);ae.position.y=-.42*b,ge.add(ae);const Xe=new nt(.025*b,.025*b,.08*b,8),Ge=new pe(Xe,p);Ge.position.set(.06*b,-.4*b,.02*b),Ge.rotation.z=-Math.PI/4,ge.add(Ge),re.add(ge),d.add(re);const Fe=new tt;Fe.position.set(oe,1.25*b,0);const De=new pe(se,g);De.position.y=-.21*b,De.castShadow=!0,Fe.add(De);const Ee=new tt;Ee.position.set(0,-.42*b,0);const L=new pe(be,p);L.position.y=-.19*b,Ee.add(L);const de=new pe(Be,p);de.position.y=-.42*b,Ee.add(de);const Pe=new pe(Xe,p);Pe.position.set(-.06*b,-.4*b,.02*b),Pe.rotation.z=Math.PI/4,Ee.add(Pe),Fe.add(Ee),d.add(Fe);const we=.22*b,he=new nt(.12*b,.1*b,.65*b,12),N=new pe(he,m);N.position.set(-we,.35*b,0),N.castShadow=!0,d.add(N);const fe=new pe(he,m);fe.position.set(we,.35*b,0),fe.castShadow=!0,d.add(fe);const ye=new pt(.18*b,.12*b,.32*b),Oe=new pt(.19*b,.03*b,.34*b),Ue=new We({color:2042167,roughness:.9});return[-we,we].forEach(Re=>{const Ne=new tt;Ne.position.set(Re,.06*b,.06*b);const qe=new pe(ye,f);qe.castShadow=!0,Ne.add(qe);const Qe=new pe(Oe,Ue);Qe.position.y=-.055*b,Ne.add(Qe),d.add(Ne)}),{group:d,headPivot:W,mouthGroup:Te,leftArmGroup:re,rightArmGroup:Fe,forearmGroupL:ge,forearmGroupR:Ee,leftEyeGroup:Me,rightEyeGroup:D,scale:b,state:"idle",animTime:Math.random()*10,blinkTimer:2+Math.random()*3,isBlinking:!1}}initCharacters(){const e=this.createStylizedCharacter({name:"Chintu",skinColor:15247219,clothesColor:16096779,clothesAccent:14251782,pantsColor:1981066,hairColor:1579035,eyeColor:7877903,gender:"boy",scale:1.05});e.group.position.set(-2.8,-.15,.6),e.group.rotation.y=Math.PI/3,this.scene.add(e.group),this.characters.chintu=e;const t=this.createStylizedCharacter({name:"Meera",skinColor:15049069,clothesColor:440020,clothesAccent:8141549,pantsColor:7153881,hairColor:592139,eyeColor:1976635,gender:"girl",scale:1});t.group.position.set(2.8,-.15,.6),t.group.rotation.y=-Math.PI/3,this.scene.add(t.group),this.characters.meera=t;const n=this.createStylizedCharacter({name:"Golu",skinColor:14588003,clothesColor:15680580,clothesAccent:12131356,pantsColor:366185,hairColor:2565930,eyeColor:4528643,gender:"boy",scale:1.15,isChubby:!0});n.group.position.set(0,-.1,-2.5),n.group.rotation.y=0,this.scene.add(n.group),this.characters.golu=n}setFocusTarget(e){e&&this.targetFocus.copy(e)}setEmotion(e,t="idle"){const n=this.characters[e];n&&(n.state=t,t==="happy"?n.mouthGroup.scale.set(1.2,1.3,1):t==="confused"?n.mouthGroup.scale.set(.8,.7,1):n.mouthGroup.scale.set(1,1,1))}celebrateAll(){Object.keys(this.characters).forEach(e=>this.setEmotion(e,"happy"))}confuseAll(){Object.keys(this.characters).forEach(e=>this.setEmotion(e,"confused"))}resetAll(){Object.keys(this.characters).forEach(e=>this.setEmotion(e,"idle"))}update(e){Object.values(this.characters).forEach(t=>{t.animTime+=e;const n=t.animTime;t.blinkTimer-=e,t.blinkTimer<=0&&(t.isBlinking=!0,t.leftEyeGroup.userData.eyelid.visible=!0,t.rightEyeGroup.userData.eyelid.visible=!0,t.blinkTimer<=-.12&&(t.leftEyeGroup.userData.eyelid.visible=!1,t.rightEyeGroup.userData.eyelid.visible=!1,t.isBlinking=!1,t.blinkTimer=2.5+Math.random()*4)),t.state==="idle"?(t.headPivot.position.y=1.48*t.scale+Math.sin(n*1.8)*.025,t.headPivot.rotation.z=Math.sin(n*.9)*.035,t.headPivot.rotation.x=.08+Math.sin(n*1.4)*.025,t.leftArmGroup.rotation.z=.35+Math.sin(n*1.5)*.03,t.leftArmGroup.rotation.x=.3,t.forearmGroupL.rotation.x=-.55,t.rightArmGroup.rotation.z=-.35-Math.sin(n*1.5)*.03,t.rightArmGroup.rotation.x=.3,t.forearmGroupR.rotation.x=-.55,t.leftEyeGroup.userData.brow.rotation.z=.08,t.rightEyeGroup.userData.brow.rotation.z=-.08):t.state==="happy"?(t.group.position.y=-.15+Math.abs(Math.sin(n*8))*.22,t.headPivot.rotation.x=-.15+Math.sin(n*6)*.08,t.headPivot.rotation.z=Math.sin(n*8)*.12,t.leftArmGroup.rotation.z=2.4+Math.sin(n*9)*.3,t.leftArmGroup.rotation.x=.2,t.forearmGroupL.rotation.x=-.3,t.rightArmGroup.rotation.z=-2.4-Math.sin(n*9)*.3,t.rightArmGroup.rotation.x=.2,t.forearmGroupR.rotation.x=-.3,t.leftEyeGroup.userData.brow.rotation.z=.22,t.rightEyeGroup.userData.brow.rotation.z=-.22):t.state==="confused"?(t.headPivot.rotation.z=.32+Math.sin(n*2.5)*.08,t.headPivot.rotation.y=Math.sin(n*1.8)*.15,t.leftArmGroup.rotation.z=.2,t.leftArmGroup.rotation.x=.2,t.rightArmGroup.rotation.z=-2.1,t.rightArmGroup.rotation.x=.7,t.forearmGroupR.rotation.x=-1.2,t.leftEyeGroup.userData.brow.rotation.z=-.18,t.rightEyeGroup.userData.brow.rotation.z=-.3):t.state==="reaching"?(t.headPivot.rotation.x=.25,t.leftArmGroup.rotation.x=1.1+Math.sin(n*3)*.08,t.leftArmGroup.rotation.z=.15,t.forearmGroupL.rotation.x=-.35,t.rightArmGroup.rotation.x=1.1+Math.sin(n*3)*.08,t.rightArmGroup.rotation.z=-.15,t.forearmGroupR.rotation.x=-.35):t.state==="eating"&&(t.headPivot.rotation.x=.18+Math.sin(n*5)*.08,t.mouthGroup.scale.set(1.15,1.25,1),t.rightArmGroup.rotation.x=.95+Math.sin(n*4)*.1,t.rightArmGroup.rotation.z=-.4,t.forearmGroupR.rotation.x=-.85)})}}function lg(){const i=document.createElement("canvas");i.width=1024,i.height=1024;const e=i.getContext("2d"),t=e.createRadialGradient(512,512,60,512,512,512);t.addColorStop(0,"#fef0cf"),t.addColorStop(.4,"#f7dfa4"),t.addColorStop(.75,"#e5be73"),t.addColorStop(.92,"#ca9849"),t.addColorStop(1,"#a6722d"),e.fillStyle=t,e.fillRect(0,0,1024,1024);const n=e.getImageData(0,0,1024,1024),s=n.data;for(let o=0;o<s.length;o+=4){const l=(Math.random()-.5)*18;s[o]=Math.min(255,Math.max(0,s[o]+l)),s[o+1]=Math.min(255,Math.max(0,s[o+1]+l)),s[o+2]=Math.min(255,Math.max(0,s[o+2]+l))}e.putImageData(n,0,0);const r=85;for(let o=0;o<r;o++){const l=Math.random()*Math.PI*2,c=Math.pow(Math.random(),.65)*460,h=512+Math.cos(l)*c,u=512+Math.sin(l)*c,d=6+Math.random()*26,p=e.createRadialGradient(h,u,1,h,u,d),g=Math.random();g>.62?(p.addColorStop(0,"rgba(45, 18, 5, 0.92)"),p.addColorStop(.45,"rgba(110, 50, 15, 0.7)"),p.addColorStop(.8,"rgba(175, 100, 35, 0.35)"),p.addColorStop(1,"rgba(210, 150, 70, 0)")):g>.3?(p.addColorStop(0,"rgba(145, 75, 20, 0.85)"),p.addColorStop(.5,"rgba(195, 125, 45, 0.5)"),p.addColorStop(1,"rgba(235, 180, 90, 0)")):(p.addColorStop(0,"rgba(215, 150, 65, 0.7)"),p.addColorStop(.6,"rgba(240, 195, 115, 0.4)"),p.addColorStop(1,"rgba(255, 235, 175, 0)")),e.fillStyle=p,e.beginPath(),e.arc(h,u,d,0,Math.PI*2),e.fill()}for(let o=0;o<12;o++){const l=200+Math.random()*624,c=200+Math.random()*624,h=20+Math.random()*50,u=e.createRadialGradient(l,c,2,l,c,h);u.addColorStop(0,"rgba(255, 255, 245, 0.35)"),u.addColorStop(1,"rgba(255, 255, 245, 0)"),e.fillStyle=u,e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.fill()}const a=new fn(i);return a.wrapS=Et,a.wrapT=Et,a}function cg(){const i=document.createElement("canvas");i.width=512,i.height=512;const e=i.getContext("2d");e.fillStyle="#f59e0b",e.fillRect(0,0,512,512);for(let n=0;n<900;n++){const s=Math.random()*512,r=Math.random()*512,a=3+Math.random()*7,o=Math.random()>.93,l=Math.random()>.97;o?e.fillStyle="#22c55e":l?e.fillStyle="#fef3c7":e.fillStyle=Math.random()>.5?"#d97706":"#fbbf24",e.beginPath(),e.arc(s,r,a,0,Math.PI*2),e.fill()}return new fn(i)}function hg(i=1.35,e=.055,t=0,n=Math.PI,s=36){const r=[],a=[],o=[],l=[],c=e/2,h=Math.max(5,Math.ceil(s*(n/(2*Math.PI)))),u=0;r.push(0,c+.012,0),a.push(0,1,0),o.push(.5,.5);const d=1;r.push(0,-c,0),a.push(0,-1,0),o.push(.5,.5);let p=2;const g=[],_=[];for(let f=0;f<=h;f++){const M=f/h,v=t+M*n,S=i*(1+Math.sin(v*7)*.018+Math.cos(v*13)*.008),U=Math.cos(v)*S,C=Math.sin(v)*S,P=c+Math.sin(M*Math.PI)*.012+Math.sin(v*5)*.004;r.push(U,P,C),a.push(0,1,0);const b=.5+.5*(U/i),y=.5+.5*(C/i);o.push(b,y),g.push(p),p++,r.push(U,-c,C),a.push(0,-1,0),o.push(b,y),_.push(p),p++}for(let f=0;f<g.length-1;f++)l.push(u,g[f],g[f+1]);for(let f=0;f<_.length-1;f++)l.push(d,_[f+1],_[f]);if(n<Math.PI*2-.001){const f=g[0],M=_[0];l.push(u,d,f),l.push(d,M,f);const v=g[g.length-1],S=_[_.length-1];l.push(u,v,d),l.push(d,v,S)}for(let f=0;f<g.length-1;f++){const M=g[f],v=g[f+1],S=_[f],U=_[f+1];l.push(M,S,v),l.push(S,U,v)}const m=new gt;return m.setAttribute("position",new et(r,3)),m.setAttribute("normal",new et(a,3)),m.setAttribute("uv",new et(o,2)),m.setIndex(l),m.computeVertexNormals(),m}function $r(i,{radius:e=1.35,thickness:t=.055,startAngle:n=0,angleSpan:s=Math.PI,numerator:r=1,denominator:a=2,id:o=0}={}){const l=hg(e,t,n,s,40),c=new We({map:i,roughness:.82,metalness:.04,bumpMap:i,bumpScale:.02,side:Bt}),h=new pe(l,c);return h.castShadow=!0,h.receiveShadow=!0,h.userData={type:"roti-piece",id:o,startAngle:n,angleSpan:s,numerator:r,denominator:a,fractionValue:r/a,fractionString:`${r}/${a}`,originalPosition:new I(0,0,0),plateAssigned:null,isSelected:!1,radius:e,centerAngle:n+s/2},h}function ug(){const i=new tt;i.name="cutting-board";const e=1.7,t=.1,n=new nt(e,e*1.03,t,48),s=new We({color:9584654,roughness:.65,metalness:.08}),r=new pe(n,s);r.position.y=t/2,r.receiveShadow=!0,r.castShadow=!0,i.add(r);for(let u=0;u<3;u++){const d=u/3*Math.PI*2,p=new nt(.12,.08,.06,16),g=new We({color:14251782,metalness:.85,roughness:.25}),_=new pe(p,g);_.position.set(Math.cos(d)*1.25,.03,Math.sin(d)*1.25),_.castShadow=!0,i.add(_)}const a=new pt(.38,t*.75,.75),o=new pe(a,s);o.position.set(0,t/2,-e-.28),o.castShadow=!0,i.add(o);const l=new wi(1.52,.018,12,48),c=new We({color:5513992,roughness:.8}),h=new pe(l,c);return h.rotation.x=Math.PI/2,h.position.y=t+.002,i.add(h),i}function dg(i="Chintu's Plate",e=13751771){const t=new tt;t.name=`plate-${i}`;const n=.98,s=new nt(n,n*.9,.045,36),r=new We({color:e,metalness:.75,roughness:.25}),a=new pe(s,r);a.position.y=.022,a.receiveShadow=!0,t.add(a);const o=new wi(n*.98,.035,12,36),l=new pe(o,r);l.rotation.x=Math.PI/2,l.position.y=.045,l.receiveShadow=!0,t.add(l);const c=new nt(.18,.14,.42,16),h=new We({color:14251782,metalness:.85,roughness:.25}),u=new pe(c,h);return u.position.set(n+.28,.21,-.2),u.castShadow=!0,t.add(u),t.userData={type:"plate",label:i,allocatedPieces:[]},t}function fg(i=.35,e=null){const t=new ua(i,2),n=new We({color:16096779,roughness:.85,metalness:.05,map:e||null}),s=new pe(t,n);return s.castShadow=!0,s.receiveShadow=!0,s.userData={type:"laddoo",radius:i},s}function pg(){const i=document.createElement("canvas");i.width=1024,i.height=1024;const e=i.getContext("2d"),t=e.createRadialGradient(512,512,420,512,512,512);t.addColorStop(0,"#fde047"),t.addColorStop(.85,"#d97706"),t.addColorStop(1,"#92400e"),e.fillStyle=t,e.fillRect(0,0,1024,1024),e.fillStyle="#b91c1c",e.beginPath(),e.arc(512,512,450,0,Math.PI*2),e.fill();const n=e.createRadialGradient(512,512,50,512,512,440);n.addColorStop(0,"#fef08a"),n.addColorStop(.7,"#fde047"),n.addColorStop(.95,"#eab308"),n.addColorStop(1,"#ca8a04"),e.fillStyle=n,e.beginPath(),e.arc(512,512,435,0,Math.PI*2),e.fill();for(let r=0;r<40;r++){const a=Math.random()*Math.PI*2,o=Math.random()*380,l=512+Math.cos(a)*o,c=512+Math.sin(a)*o;e.fillStyle="rgba(161, 98, 7, 0.65)",e.beginPath(),e.arc(l,c,6+Math.random()*14,0,Math.PI*2),e.fill()}for(let r=0;r<28;r++){const a=Math.random()*Math.PI*2,o=60+Math.random()*340,l=512+Math.cos(a)*o,c=512+Math.sin(a)*o;e.fillStyle="#15803d",e.beginPath(),e.arc(l,c,14,.4,2.8),e.lineWidth=7,e.strokeStyle="#166534",e.stroke()}for(let r=0;r<22;r++){const a=Math.random()*Math.PI*2,o=50+Math.random()*350,l=512+Math.cos(a)*o,c=512+Math.sin(a)*o;e.fillStyle="#1e293b",e.beginPath(),e.arc(l,c,11,0,Math.PI*2),e.fill(),e.fillStyle="#fde047",e.beginPath(),e.arc(l,c,4,0,Math.PI*2),e.fill()}const s=new fn(i);return s.wrapS=Et,s.wrapT=Et,s}function mg(){const i=document.createElement("canvas");i.width=1024,i.height=1024;const e=i.getContext("2d"),t=e.createRadialGradient(512,512,80,512,512,512);t.addColorStop(0,"#fed7aa"),t.addColorStop(.5,"#fbbf24"),t.addColorStop(.85,"#d97706"),t.addColorStop(1,"#92400e"),e.fillStyle=t,e.fillRect(0,0,1024,1024);const n=e.createRadialGradient(512,512,20,512,512,320);n.addColorStop(0,"rgba(180, 83, 9, 0.85)"),n.addColorStop(.6,"rgba(217, 119, 6, 0.6)"),n.addColorStop(1,"rgba(245, 158, 11, 0)"),e.fillStyle=n,e.beginPath(),e.arc(512,512,320,0,Math.PI*2),e.fill(),e.fillStyle="#fde047",e.fillRect(440,440,144,144),e.fillStyle="rgba(254, 240, 138, 0.8)",e.fillRect(455,455,114,114);const s=new fn(i);return s.wrapS=Et,s.wrapT=Et,s}function Or(i,e,t){const n=$r(e,t);return n.userData.foodType=i,n}function gg(){const i=new tt;i.name="butterKnife";const e=new nt(.06,.08,.75,16),t=new We({color:9127187,roughness:.5,metalness:.1}),n=new pe(e,t);n.position.y=-.38,n.castShadow=!0,i.add(n);const s=new nt(.085,.085,.06,16),r=new We({color:13938487,roughness:.25,metalness:.8}),a=new pe(s,r);a.position.y=.01,a.castShadow=!0,i.add(a);const o=new da;o.moveTo(0,0),o.lineTo(.08,.1),o.lineTo(.08,.9),o.quadraticCurveTo(.06,1.05,0,1.05),o.quadraticCurveTo(-.06,1.05,-.06,.9),o.lineTo(-.06,.1),o.closePath();const l={steps:1,depth:.02,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3},c=new js(o,l);c.center();const h=new We({color:15857145,roughness:.2,metalness:.85}),u=new pe(c,h);return u.position.y=.55,u.castShadow=!0,i.add(u),i.scale.set(.9,.9,.9),i}function _g(){const i=new tt;i.name="servingSpatula";const e=new nt(.05,.07,.85,16),t=new We({color:10105874,roughness:.45,metalness:.1}),n=new pe(e,t);n.position.y=-.42,n.castShadow=!0,i.add(n);const s=new nt(.075,.075,.08,16),r=new We({color:16498468,roughness:.2,metalness:.85}),a=new pe(s,r);a.position.y=.02,i.add(a);const o=new nt(.035,.035,.35,12),l=new We({color:14870768,roughness:.25,metalness:.85}),c=new pe(o,l);c.position.set(0,.2,.06),c.rotation.x=.35,c.castShadow=!0,i.add(c);const h=new da;h.moveTo(-.24,0),h.lineTo(.24,0),h.lineTo(.26,.55),h.quadraticCurveTo(.24,.62,.18,.62),h.lineTo(-.18,.62),h.quadraticCurveTo(-.24,.62,-.26,.55),h.closePath();const u=new js(h,{depth:.015,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:2}),d=new pe(u,l);d.position.set(0,.32,.14),d.rotation.x=-.2,d.castShadow=!0,i.add(d);for(let p=-1;p<=1;p++){const g=new pt(.04,.25,.02),_=new We({color:9741240,roughness:.3}),m=new pe(g,_);m.position.set(p*.1,.55,.17),m.rotation.x=-.2,i.add(m)}return i.scale.set(.9,.9,.9),i}function vg(){const i=new tt;i.name="measuringTool";const e=new fa(1.2,1.48,48,1,0,Math.PI*2),t=new We({color:16096779,metalness:.7,roughness:.3,side:Bt}),n=new pe(e,t);n.rotation.x=-Math.PI/2,i.add(n),[{deg:45,label:"1/8 (45°)"},{deg:60,label:"1/6 (60°)"},{deg:90,label:"1/4 (90°)"},{deg:120,label:"1/3 (120°)"},{deg:180,label:"1/2 (180°)"}].forEach(({deg:h})=>{const u=h*Math.PI/180,d=new nt(.015,.015,.35,8),p=new We({color:15680580,roughness:.2}),g=new pe(d,p);g.position.set(Math.cos(u)*1.35,.02,Math.sin(u)*1.35),i.add(g)});const r=document.createElement("canvas");r.width=256,r.height=128;const a=r.getContext("2d");a.fillStyle="rgba(255, 255, 255, 0.95)",a.roundRect(4,4,248,120,18),a.fill(),a.strokeStyle="#f59e0b",a.lineWidth=6,a.stroke(),a.fillStyle="#78350f",a.font="bold 36px Fredoka, sans-serif",a.textAlign="center",a.fillText("Measure Tool",128,52),a.font="bold 28px Quicksand, sans-serif",a.fillStyle="#059669",a.fillText("Select any piece",128,95);const o=new fn(r),l=new aa({map:o}),c=new Hl(l);return c.scale.set(1.2,.6,1),c.position.set(0,.6,0),i.add(c),i.updateMeasurement=(h,u)=>{const d=Math.round(h*180/Math.PI);a.clearRect(0,0,256,128),a.fillStyle="rgba(255, 255, 255, 0.95)",a.roundRect(4,4,248,120,18),a.fill(),a.strokeStyle="#f59e0b",a.lineWidth=6,a.stroke(),a.fillStyle="#b45309",a.font="bold 44px Fredoka, sans-serif",a.textAlign="center",a.fillText(`${u}`,128,52),a.font="bold 30px Quicksand, sans-serif",a.fillStyle="#10b981",a.fillText(`${d}° Sector`,128,96),o.needsUpdate=!0},i}function xg(){const i=new tt;i.name="balanceScale";const e=new We({color:13938487,roughness:.25,metalness:.85}),t=new We({color:10052885,roughness:.35,metalness:.8}),n=new nt(.5,.65,.12,32),s=new pe(n,t);s.position.y=.06,s.castShadow=!0,s.receiveShadow=!0,i.add(s);const r=new nt(.06,.08,1.8,16),a=new pe(r,e);a.position.y=1,a.castShadow=!0,i.add(a);const o=new ji(.12,.25,16),l=new pe(o,e);l.position.y=1.95,i.add(l);const c=new tt;c.position.set(0,1.85,0),i.add(c);const h=new pt(2.4,.06,.06),u=new pe(h,e);u.castShadow=!0,c.add(u);const d=new nt(.015,.015,.5,8),p=new We({color:15680580,metalness:.5}),g=new pe(d,p);g.position.y=-.25,c.add(g);function _(C){const P=new tt;P.position.set(C,0,0);for(let T=0;T<3;T++){const z=T*Math.PI*2/3,Y=new nt(.008,.008,.75,6),ne=new pe(Y,e);ne.position.set(Math.cos(z)*.32,-.38,Math.sin(z)*.32),P.add(ne)}const b=new nt(.42,.34,.05,32),y=new pe(b,e);return y.position.y=-.75,y.castShadow=!0,y.receiveShadow=!0,P.add(y),P}const m=_(-1.1),f=_(1.1);c.add(m),c.add(f);let M=0,v=0,S=0,U=0;return i.setWeights=(C,P)=>{S=C,U=P;const b=C-P;v=yl.clamp(b*.6,-.32,.32)},i.updateAnimation=(C=.016)=>{M+=(v-M)*4.5*C,c.rotation.z=M,m.rotation.z=-M,f.rotation.z=-M},i.getTiltState=()=>Math.abs(S-U)<1e-4?"balanced":S>U?"left_heavy":"right_heavy",i.scale.set(.85,.85,.85),i}function Mg(){const i=new tt;i.name="fractionTilesRack";const e=new pt(2.8,.08,.7),t=new We({color:6041099,roughness:.6}),n=new pe(e,t);n.receiveShadow=!0,i.add(n);const s=[{fraction:"1/2",val:.5,color:"#0ea5e9"},{fraction:"1/3",val:1/3,color:"#10b981"},{fraction:"1/4",val:.25,color:"#f59e0b"},{fraction:"2/4",val:.5,color:"#8b5cf6"},{fraction:"3/4",val:.75,color:"#f97316"},{fraction:"1/8",val:.125,color:"#14b8a6"}],r=[];return s.forEach((a,o)=>{const l=new tt,c=-1.15+o*.46,h=new pt(.38,.48,.06),u=new We({color:a.color,roughness:.35,metalness:.15}),d=new pe(h,u);d.castShadow=!0,l.add(d);const p=document.createElement("canvas");p.width=128,p.height=128;const g=p.getContext("2d");g.fillStyle=a.color,g.fillRect(0,0,128,128),g.fillStyle="#ffffff",g.font="bold 58px Fredoka, sans-serif",g.textAlign="center",g.fillText(a.fraction,64,82);const _=new fn(p),m=new hn(.34,.34),f=new Yt({map:_}),M=new pe(m,f);M.position.z=.032,l.add(M),l.position.set(c,.28,0),l.rotation.x=-.15,l.userData={isFractionTile:!0,fraction:a.fraction,value:a.val},i.add(l),r.push(l)}),i.tiles=r,i.scale.set(.85,.85,.85),i}function yg(i,e="0"){const t=document.createElement("canvas");t.width=256,t.height=128;const n=t.getContext("2d");function s(l){if(n.clearRect(0,0,256,128),n.fillStyle="rgba(35, 18, 7, 0.88)",n.roundRect)n.beginPath(),n.roundRect(6,6,244,116,20),n.fill();else{n.beginPath();const c=6,h=6,u=244,d=116,p=20;n.moveTo(c+p,h),n.lineTo(c+u-p,h),n.quadraticCurveTo(c+u,h,c+u,h+p),n.lineTo(c+u,h+d-p),n.quadraticCurveTo(c+u,h+d,c+u-p,h+d),n.lineTo(c+p,h+d),n.quadraticCurveTo(c,h+d,c,h+d-p),n.lineTo(c,h+p),n.quadraticCurveTo(c,h,c+p,h),n.fill()}n.strokeStyle="#f59e0b",n.lineWidth=5,n.stroke(),n.fillStyle="#fde68a",n.font="bold 38px Fredoka, sans-serif",n.textAlign="center",n.fillText(i,128,52),n.fillStyle="#34d399",n.font="bold 36px Quicksand, sans-serif",n.fillText(`Share: ${l}`,128,96)}s(e);const r=new fn(t),a=new aa({map:r,transparent:!0,depthTest:!1}),o=new Hl(a);return o.scale.set(.9,.45,1),o.updateFraction=l=>{s(l),r.needsUpdate=!0},o}const Sg=[{id:1,title:"Two Friends",type:"sharing",foodType:"roti",friends:["Chintu","Meera"],targetPieces:2,targetFractionPerFriend:.5,targetFractionStr:"1/2",instruction:"Share one whole roti equally between Chintu and Meera. Divide it into two equal halves!",subInstruction:"Select 2 slices (1/2 each), then click 'Cut & Share Roti' to share equally.",hint:"Two friends need two equal pieces.",explanation:"1/2 + 1/2 = 1 Whole Roti! Both friends received exactly half.",difficultyFactor:{easy:{defaultSlices:2,showGuides:!0},normal:{defaultSlices:2,showGuides:!1},medium:{defaultSlices:null,showGuides:!1},hard:{defaultSlices:null,showGuides:!1}}},{id:2,title:"Three Friends",type:"sharing",foodType:"roti",friends:["Chintu","Meera","Golu"],targetPieces:3,targetFractionPerFriend:1/3,targetFractionStr:"1/3",instruction:"Hungry Golu joined! Share one roti equally among all three friends.",subInstruction:"Select 3 slices (1/3 each), then click 'Cut & Share Roti' to share equally.",hint:"Three friends need three equal shares.",explanation:"1/3 + 1/3 + 1/3 = 1 Whole Roti! Each friend gets one-third.",difficultyFactor:{easy:{defaultSlices:3,showGuides:!0},normal:{defaultSlices:3,showGuides:!1},medium:{defaultSlices:null,showGuides:!1},hard:{defaultSlices:null,showGuides:!1}}},{id:3,title:"Four Equal Pieces",type:"sharing",foodType:"roti",friends:["Chintu","Meera","Golu"],targetPieces:4,targetFractionPerFriend:.25,targetFractionStr:"1/4",instruction:"Divide one roti into four equal pieces. Each piece represents 1/4!",subInstruction:"Select 4 slices (1/4 each), then click 'Cut & Share Roti'. Each piece represents 1/4.",hint:"Four equal parts make 4 quarters. Each piece represents 1/4 of the whole roti!",explanation:"One whole roti contains four quarters (4 × 1/4 = 1). Each piece represents 1/4.",difficultyFactor:{easy:{defaultSlices:4,showGuides:!0},normal:{defaultSlices:4,showGuides:!1},medium:{defaultSlices:null,showGuides:!1},hard:{defaultSlices:null,showGuides:!1}}},{id:4,title:"Fraction Finder",type:"identify",foodType:"roti",initialPieces:4,highlightIndex:0,targetFractionStr:"1/4",question:"The roti is divided into 4 equal slices. What fraction is the highlighted piece?",options:["1/2","1/4","1/3","1/8"],correctOption:"1/4",instruction:"Look closely at the highlighted 3D piece. Which fraction does it represent?",subInstruction:"Count total equal slices: 4 slices means each slice is 1 out of 4.",hint:"The bottom number (denominator) is the total pieces (4). The top number (numerator) is 1.",explanation:"Correct! Since the roti is divided into 4 equal pieces, each single piece is 1/4 (one quarter)."},{id:5,title:"Three-Quarters Challenge",type:"serve_amount",foodType:"roti",friends:["Golu"],targetPieces:4,requiredFraction:.75,targetPiecesCount:3,targetFractionStr:"3/4",instruction:"Golu requests 3/4 of a roti! Divide into 4 pieces and share 3 pieces with Golu.",subInstruction:"Select 4 slices and click 'Cut & Share Roti'. 3 pieces go to Golu, leaving 1/4 on the board.",hint:"Three-quarters means three out of four equal pieces.",explanation:"Terrific! Golu has 3/4 of the roti, leaving exactly 1/4 on the cutting board."},{id:6,title:"Compare Fractions",type:"compare",foodType:"dual_roti",leftFraction:"1/2",leftVal:.5,leftPieces:2,rightFraction:"1/4",rightVal:.25,rightPieces:4,question:"Look at the two rotis. Which piece is GREATER in size: 1/2 or 1/4?",options:["1/2 > 1/4 (1/2 is Greater)","1/4 > 1/2 (1/4 is Greater)","1/2 = 1/4 (Both are Equal)"],correctOption:"1/2 > 1/4 (1/2 is Greater)",instruction:"Compare the highlighted piece of the left roti (1/2) with the right roti (1/4). Which is bigger?",subInstruction:"Observe the 3D surface area and the tilt on the Balance Scale.",hint:"When you share a roti among fewer people (2 vs 4), each person gets a BIGGER piece! So 1/2 > 1/4.",explanation:"Brilliant! 1/2 > 1/4. When the denominator is smaller, each equal piece is larger!"},{id:7,title:"Equivalent Fractions",type:"compare",foodType:"dual_roti",leftFraction:"1/2",leftVal:.5,leftPieces:2,rightFraction:"2/4",rightVal:.5,rightPieces:4,question:"Compare 1/2 of Roti A and 2/4 of Roti B. How do they compare?",options:["1/2 > 2/4 (1/2 is Greater)","2/4 > 1/2 (2/4 is Greater)","1/2 = 2/4 (They are Equal!)"],correctOption:"1/2 = 2/4 (They are Equal!)",instruction:"Notice how two 1/4 pieces cover the exact same area as one 1/2 piece!",subInstruction:"Notice the Balance Scale stays level: 1/2 = 2/4 = 4/8!",hint:"Compare the total area of one half and two quarters.",explanation:"1/2 = 2/4! These are Equivalent Fractions because they represent the exact same amount of food."},{id:8,title:"Adding Fractions",type:"addition",foodType:"roti",targetPieces:4,friends:["Meera"],stages:[{addPieces:2,formula:"1/4 + 1/4 = 2/4",prompt:"Move two 1/4 pieces to Meera's plate to find 1/4 + 1/4."}],instruction:"Meera is exploring fraction addition: 1/4 + 1/4 = ?",subInstruction:"Slice the roti into 4 quarters, then place 2 pieces onto Meera's plate.",hint:"When adding fractions with the same denominator, add the numerators: 1 + 1 = 2, so 2/4 (which is also 1/2)!",explanation:"Great math! 1/4 + 1/4 = 2/4 = 1/2 of the whole roti!"},{id:9,title:"Roti Shop",type:"shop_level",foodType:"roti",friends:["Chintu"],targetPieces:2,targetFractionPerFriend:.5,targetFractionStr:"1/2",customer:"Chintu",instruction:"Welcome to the Roti Shop! Chintu requests 1/2 of a roti.",subInstruction:"Select 2 slices (1/2 each) and click 'Cut & Share Roti' to serve the order!",hint:"Prepare and serve 1/2 of a fresh roti by slicing into 2 equal parts.",explanation:"Delicious! You prepared and served 1/2 of a roti to customer Chintu!"},{id:10,title:"Fraction Master",type:"sharing",foodType:"roti",friends:["Chintu","Meera","Golu"],targetPieces:6,targetFractionPerFriend:2/6,targetFractionStr:"2/6 (1/3)",instruction:"Grand Finale! Divide the roti into 6 equal slices. Give 2 slices (2/6 = 1/3) to each friend!",subInstruction:"Slice into 6 parts. Place 2 slices on Chintu's, 2 on Meera's, and 2 on Golu's plate.",hint:"6 pieces total. 2/6 simplifies to 1/3! Each friend gets 2 pieces.",explanation:"MASTER OF FRACTIONS! 2/6 + 2/6 + 2/6 = 6/6 = 1 Whole Roti! You are a Certified Fractions Hero!"}],Rs=[{id:"order-1",customer:"Chintu",requestedFractionStr:"1/2",requestedFractionVal:.5,coinsReward:30,message:"Namaste! I'd like 1/2 of a roti please!"},{id:"order-2",customer:"Meera",requestedFractionStr:"3/4",requestedFractionVal:.75,coinsReward:50,message:"Hello chef! Can I have 3/4 of a roti?"},{id:"order-3",customer:"Golu",requestedFractionStr:"2/4 (or 1/2)",requestedFractionVal:.5,coinsReward:40,message:"I am hungry! Serve me 2/4 of a roti please!"},{id:"order-4",customer:"Meera",requestedFractionStr:"2/3",requestedFractionVal:2/3,coinsReward:60,message:"Can you slice into 3 and serve me 2/3?"},{id:"order-5",customer:"Golu",requestedFractionStr:"4/8 (or 1/2)",requestedFractionVal:.5,coinsReward:60,message:"Give me 4 eighths (4/8) of a roti!"}],$l=[{id:"fair_share",title:"Fair Share Champion",description:"Complete 5 fair-sharing challenges with equal fractions.",icon:"🤝",target:5},{id:"fraction_finder",title:"Fraction Finder",description:"Identify 10 fractions correctly.",icon:"🔍",target:10},{id:"equivalent_expert",title:"Equivalent Expert",description:"Master equivalent fractions: 1/2 = 2/4 on the Balance Scale.",icon:"⚖️",target:1},{id:"roti_master",title:"Roti Master",description:"Complete all 10 beginner and advanced levels.",icon:"👑",target:10}];function Ls(i,e=2*Math.PI,t=0){const n=e/i,s=[];for(let r=0;r<i;r++){const a=t+r*n,o=a+n;s.push({index:r,startAngle:a,endAngle:o,angle:n,fractionNumerator:1,fractionDenominator:i,fractionString:`1/${i}`,fractionValue:1/i,centerAngle:a+n/2})}return s}var ma={};(function i(e,t,n,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),A=R.getContext("2d");A.fillRect(0,0,1,1);var X=R.transferToImageBitmap();A.createPattern(X,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var A=t.exports.Promise,X=A!==void 0?A:e.Promise;return typeof X=="function"?new X(R):(R(l,l),null)}var h=function(R,A){return{transform:function(X){if(R)return X;if(A.has(X))return A.get(X);var O=new OffscreenCanvas(X.width,X.height),q=O.getContext("2d");return q.drawImage(X,0,0),A.set(X,O),O},clear:function(){A.clear()}}}(o,new Map),u=function(){var R=Math.floor(16.666666666666668),A,X,O={},q=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(te){var ue=Math.random();return O[ue]=requestAnimationFrame(function Q(me){q===me||q+R-1<me?(q=me,delete O[ue],te()):O[ue]=requestAnimationFrame(Q)}),ue},X=function(te){O[te]&&cancelAnimationFrame(O[te])}):(A=function(te){return setTimeout(te,R)},X=function(te){return clearTimeout(te)}),{frame:A,cancel:X}}(),d=function(){var R,A,X={};function O(q){function te(ue,Q){q.postMessage({options:ue||{},callback:Q})}q.init=function(Q){var me=Q.transferControlToOffscreen();q.postMessage({canvas:me},[me])},q.fire=function(Q,me,Se){if(A)return te(Q,null),A;var _e=Math.random().toString(36).slice(2);return A=c(function(Me){function D(le){le.data.callback===_e&&(delete X[_e],q.removeEventListener("message",D),A=null,h.clear(),Se(),Me())}q.addEventListener("message",D),te(Q,_e),X[_e]=D.bind(null,{data:{callback:_e}})}),A},q.reset=function(){q.postMessage({reset:!0});for(var Q in X)X[Q](),delete X[Q]}}return function(){if(R)return R;if(!n&&r){var q=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([q])))}catch(te){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",te),null}O(R)}return R}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(R,A){return A?A(R):R}function _(R){return R!=null}function m(R,A,X){return g(R&&_(R[A])?R[A]:p[A],X)}function f(R){return R<0?0:Math.floor(R)}function M(R,A){return Math.floor(Math.random()*(A-R))+R}function v(R){return parseInt(R,16)}function S(R){return R.map(U)}function U(R){var A=String(R).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:v(A.substring(0,2)),g:v(A.substring(2,4)),b:v(A.substring(4,6))}}function C(R){var A=m(R,"origin",Object);return A.x=m(A,"x",Number),A.y=m(A,"y",Number),A}function P(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function b(R){var A=R.getBoundingClientRect();R.width=A.width,R.height=A.height}function y(R){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=R,A}function T(R,A,X,O,q,te,ue,Q,me){R.save(),R.translate(A,X),R.rotate(te),R.scale(O,q),R.arc(0,0,1,ue,Q,me),R.restore()}function z(R){var A=R.angle*(Math.PI/180),X=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-A+(.5*X-Math.random()*X),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function Y(R,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var X=A.tick++/A.totalTicks,O=A.x+A.random*A.tiltCos,q=A.y+A.random*A.tiltSin,te=A.wobbleX+A.random*A.tiltCos,ue=A.wobbleY+A.random*A.tiltSin;if(R.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-X)+")",R.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))R.fill(ee(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(te-O)*.1,Math.abs(ue-q)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var Q=Math.PI/10*A.wobble,me=Math.abs(te-O)*.1,Se=Math.abs(ue-q)*.1,_e=A.shape.bitmap.width*A.scalar,Me=A.shape.bitmap.height*A.scalar,D=new DOMMatrix([Math.cos(Q)*me,Math.sin(Q)*me,-Math.sin(Q)*Se,Math.cos(Q)*Se,A.x,A.y]);D.multiplySelf(new DOMMatrix(A.shape.matrix));var le=R.createPattern(h.transform(A.shape.bitmap),"no-repeat");le.setTransform(D),R.globalAlpha=1-X,R.fillStyle=le,R.fillRect(A.x-_e/2,A.y-Me/2,_e,Me),R.globalAlpha=1}else if(A.shape==="circle")R.ellipse?R.ellipse(A.x,A.y,Math.abs(te-O)*A.ovalScalar,Math.abs(ue-q)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):T(R,A.x,A.y,Math.abs(te-O)*A.ovalScalar,Math.abs(ue-q)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var H=Math.PI/2*3,ie=4*A.scalar,$=8*A.scalar,Te=A.x,ve=A.y,E=5,x=Math.PI/E;E--;)Te=A.x+Math.cos(H)*$,ve=A.y+Math.sin(H)*$,R.lineTo(Te,ve),H+=x,Te=A.x+Math.cos(H)*ie,ve=A.y+Math.sin(H)*ie,R.lineTo(Te,ve),H+=x;else R.moveTo(Math.floor(A.x),Math.floor(A.y)),R.lineTo(Math.floor(A.wobbleX),Math.floor(q)),R.lineTo(Math.floor(te),Math.floor(ue)),R.lineTo(Math.floor(O),Math.floor(A.wobbleY));return R.closePath(),R.fill(),A.tick<A.totalTicks}function ne(R,A,X,O,q){var te=A.slice(),ue=R.getContext("2d"),Q,me,Se=c(function(_e){function Me(){Q=me=null,ue.clearRect(0,0,O.width,O.height),h.clear(),q(),_e()}function D(){n&&!(O.width===s.width&&O.height===s.height)&&(O.width=R.width=s.width,O.height=R.height=s.height),!O.width&&!O.height&&(X(R),O.width=R.width,O.height=R.height),ue.clearRect(0,0,O.width,O.height),te=te.filter(function(le){return Y(ue,le)}),te.length?Q=u.frame(D):Me()}Q=u.frame(D),me=Me});return{addFettis:function(_e){return te=te.concat(_e),Se},canvas:R,promise:Se,reset:function(){Q&&u.cancel(Q),me&&me()}}}function F(R,A){var X=!R,O=!!m(A||{},"resize"),q=!1,te=m(A,"disableForReducedMotion",Boolean),ue=r&&!!m(A||{},"useWorker"),Q=ue?d():null,me=X?P:b,Se=R&&Q?!!R.__confetti_initialized:!1,_e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Me;function D(H,ie,$){for(var Te=m(H,"particleCount",f),ve=m(H,"angle",Number),E=m(H,"spread",Number),x=m(H,"startVelocity",Number),B=m(H,"decay",Number),oe=m(H,"gravity",Number),re=m(H,"drift",Number),se=m(H,"colors",S),Ce=m(H,"ticks",Number),ge=m(H,"shapes"),be=m(H,"scalar"),Le=!!m(H,"flat"),Be=C(H),ae=Te,Xe=[],Ge=R.width*Be.x,Fe=R.height*Be.y;ae--;)Xe.push(z({x:Ge,y:Fe,angle:ve,spread:E,startVelocity:x,color:se[ae%se.length],shape:ge[M(0,ge.length)],ticks:Ce,decay:B,gravity:oe,drift:re,scalar:be,flat:Le}));return Me?Me.addFettis(Xe):(Me=ne(R,Xe,me,ie,$),Me.promise)}function le(H){var ie=te||m(H,"disableForReducedMotion",Boolean),$=m(H,"zIndex",Number);if(ie&&_e)return c(function(x){x()});X&&Me?R=Me.canvas:X&&!R&&(R=y($),document.body.appendChild(R)),O&&!Se&&me(R);var Te={width:R.width,height:R.height};Q&&!Se&&Q.init(R),Se=!0,Q&&(R.__confetti_initialized=!0);function ve(){if(Q){var x={getBoundingClientRect:function(){if(!X)return R.getBoundingClientRect()}};me(x),Q.postMessage({resize:{width:x.width,height:x.height}});return}Te.width=Te.height=null}function E(){Me=null,O&&(q=!1,e.removeEventListener("resize",ve)),X&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,Se=!1)}return O&&!q&&(q=!0,e.addEventListener("resize",ve,!1)),Q?Q.fire(H,Te,E):D(H,Te,E)}return le.reset=function(){Q&&Q.reset(),Me&&Me.reset()},le}var G;function V(){return G||(G=F(null,{useWorker:!0,resize:!0})),G}function ee(R,A,X,O,q,te,ue){var Q=new Path2D(R),me=new Path2D;me.addPath(Q,new DOMMatrix(A));var Se=new Path2D;return Se.addPath(me,new DOMMatrix([Math.cos(ue)*q,Math.sin(ue)*q,-Math.sin(ue)*te,Math.cos(ue)*te,X,O])),Se}function W(R){if(!a)throw new Error("path confetti are not supported in this browser");var A,X;typeof R=="string"?A=R:(A=R.path,X=R.matrix);var O=new Path2D(A),q=document.createElement("canvas"),te=q.getContext("2d");if(!X){for(var ue=1e3,Q=ue,me=ue,Se=0,_e=0,Me,D,le=0;le<ue;le+=2)for(var H=0;H<ue;H+=2)te.isPointInPath(O,le,H,"nonzero")&&(Q=Math.min(Q,le),me=Math.min(me,H),Se=Math.max(Se,le),_e=Math.max(_e,H));Me=Se-Q,D=_e-me;var ie=10,$=Math.min(ie/Me,ie/D);X=[$,0,0,$,-Math.round(Me/2+Q)*$,-Math.round(D/2+me)*$]}return{type:"path",path:A,matrix:X}}function J(R){var A,X=1,O="#000000",q='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?A=R:(A=R.text,X="scalar"in R?R.scalar:X,q="fontFamily"in R?R.fontFamily:q,O="color"in R?R.color:O);var te=10*X,ue=""+te+"px "+q,Q=new OffscreenCanvas(te,te),me=Q.getContext("2d");me.font=ue;var Se=me.measureText(A),_e=Math.ceil(Se.actualBoundingBoxRight+Se.actualBoundingBoxLeft),Me=Math.ceil(Se.actualBoundingBoxAscent+Se.actualBoundingBoxDescent),D=2,le=Se.actualBoundingBoxLeft+D,H=Se.actualBoundingBoxAscent+D;_e+=D+D,Me+=D+D,Q=new OffscreenCanvas(_e,Me),me=Q.getContext("2d"),me.font=ue,me.fillStyle=O,me.fillText(A,le,H);var ie=1/X;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[ie,0,0,ie,-_e*ie/2,-Me*ie/2]}}t.exports=function(){return V().apply(this,arguments)},t.exports.reset=function(){V().reset()},t.exports.create=F,t.exports.shapeFromPath=W,t.exports.shapeFromText=J})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ma,!1);const Eg=ma.exports;ma.exports.create;class Tg{constructor(){this.enabled=!0,this.audioCtx=null}initAudio(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e)}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}toggle(){return this.enabled=!this.enabled,this.enabled}playClick(){if(!this.enabled||(this.initAudio(),!this.audioCtx))return;const e=this.audioCtx.createOscillator(),t=this.audioCtx.createGain();e.type="sine",e.frequency.setValueAtTime(600,this.audioCtx.currentTime),e.frequency.exponentialRampToValueAtTime(800,this.audioCtx.currentTime+.08),t.gain.setValueAtTime(.2,this.audioCtx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.audioCtx.currentTime+.08),e.connect(t),t.connect(this.audioCtx.destination),e.start(),e.stop(this.audioCtx.currentTime+.08)}playSlice(){if(!this.enabled||(this.initAudio(),!this.audioCtx))return;const e=this.audioCtx.sampleRate*.18,t=this.audioCtx.createBuffer(1,e,this.audioCtx.sampleRate),n=t.getChannelData(0);for(let o=0;o<e;o++)n[o]=Math.random()*2-1;const s=this.audioCtx.createBufferSource();s.buffer=t;const r=this.audioCtx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1800,this.audioCtx.currentTime),r.frequency.exponentialRampToValueAtTime(600,this.audioCtx.currentTime+.18),r.Q.value=3;const a=this.audioCtx.createGain();a.gain.setValueAtTime(.4,this.audioCtx.currentTime),a.gain.exponentialRampToValueAtTime(.01,this.audioCtx.currentTime+.18),s.connect(r),r.connect(a),a.connect(this.audioCtx.destination),s.start()}playDropPiece(){if(!this.enabled||(this.initAudio(),!this.audioCtx))return;const e=this.audioCtx.createOscillator(),t=this.audioCtx.createGain();e.type="triangle",e.frequency.setValueAtTime(520,this.audioCtx.currentTime),e.frequency.exponentialRampToValueAtTime(320,this.audioCtx.currentTime+.15),t.gain.setValueAtTime(.3,this.audioCtx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.audioCtx.currentTime+.15),e.connect(t),t.connect(this.audioCtx.destination),e.start(),e.stop(this.audioCtx.currentTime+.15)}playSuccess(){if(!this.enabled||(this.initAudio(),!this.audioCtx))return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const s=this.audioCtx.createOscillator(),r=this.audioCtx.createGain();s.type="sine",s.frequency.setValueAtTime(t,this.audioCtx.currentTime+n*.1),r.gain.setValueAtTime(.25,this.audioCtx.currentTime+n*.1),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+n*.1+.35),s.connect(r),r.connect(this.audioCtx.destination),s.start(this.audioCtx.currentTime+n*.1),s.stop(this.audioCtx.currentTime+n*.1+.35)})}playError(){if(!this.enabled||(this.initAudio(),!this.audioCtx))return;const e=this.audioCtx.createOscillator(),t=this.audioCtx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(220,this.audioCtx.currentTime),e.frequency.linearRampToValueAtTime(160,this.audioCtx.currentTime+.2),t.gain.setValueAtTime(.2,this.audioCtx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.audioCtx.currentTime+.2),e.connect(t),t.connect(this.audioCtx.destination),e.start(),e.stop(this.audioCtx.currentTime+.2)}}class bg{constructor(e){this.game=e,this.sound=new Tg,this.bindDomElements(),this.bindEvents()}bindDomElements(){this.elLevelNum=document.getElementById("level-num"),this.elLevelTitle=document.getElementById("level-title"),this.elDiffTag=document.getElementById("difficulty-tag"),this.elModeTag=document.getElementById("game-mode-tag"),this.elScore=document.getElementById("score-val"),this.elCoins=document.getElementById("coins-val"),this.elTimerBadge=document.getElementById("timer-badge"),this.elTimerVal=document.getElementById("timer-val"),this.elStarsDisplay=document.getElementById("stars-display"),this.btnSound=document.getElementById("btn-sound"),this.soundIcon=document.getElementById("sound-icon"),this.btnCameraReset=document.getElementById("btn-camera-reset"),this.btnHelp=document.getElementById("btn-help"),this.btnMenu=document.getElementById("btn-menu"),this.elInstruction=document.getElementById("objective-instruction"),this.elSubInstruction=document.getElementById("sub-instruction"),this.btnHint=document.getElementById("btn-hint"),this.toolButtons=document.querySelectorAll(".tool-btn"),this.modeButtons=document.querySelectorAll(".mode-btn"),this.sliceCountButtons=document.querySelectorAll(".slice-count-btn"),this.sliceSelector=document.getElementById("slice-selector"),this.btnExecuteCut=document.getElementById("btn-execute-cut"),this.btnResetLevel=document.getElementById("btn-reset-level"),this.btnCheckSolution=document.getElementById("btn-check-solution"),this.creativeFoodSelector=document.getElementById("creative-food-selector"),this.foodPickButtons=document.querySelectorAll(".food-pick-btn"),this.rotiShopPanel=document.getElementById("roti-shop-order-panel"),this.shopCustomerAvatar=document.getElementById("shop-customer-avatar"),this.shopCustomerName=document.getElementById("shop-customer-name"),this.shopOrderSpeech=document.getElementById("shop-order-speech"),this.shopRewardCoins=document.getElementById("shop-reward-coins"),this.btnShopServe=document.getElementById("btn-shop-serve"),this.quizPanel=document.getElementById("fraction-quiz-panel"),this.quizQuestion=document.getElementById("quiz-question"),this.quizOptions=document.getElementById("quiz-options"),this.fractionCallout=document.getElementById("fraction-math-callout"),this.mathNum=document.getElementById("math-num"),this.mathDen=document.getElementById("math-den"),this.mathDesc=document.getElementById("math-desc"),this.toast=document.getElementById("feedback-toast"),this.toastMessage=document.getElementById("toast-message"),this.toastIcon=document.getElementById("toast-icon"),this.hintModal=document.getElementById("hint-modal"),this.hintText=document.getElementById("hint-text"),this.btnCloseHint=document.getElementById("btn-close-hint"),this.successModal=document.getElementById("success-modal"),this.successTitle=document.getElementById("success-title"),this.successMessage=document.getElementById("success-message"),this.successMathBox=document.getElementById("success-math-box"),this.modalStars=document.getElementById("modal-stars"),this.btnReplay=document.getElementById("btn-replay-level"),this.btnNextLevel=document.getElementById("btn-next-level"),this.mainMenu=document.getElementById("main-menu"),this.btnPlay=document.getElementById("btn-play"),this.btnModeShop=document.getElementById("btn-mode-shop"),this.btnModeTimed=document.getElementById("btn-mode-timed"),this.btnModeCreative=document.getElementById("btn-mode-creative"),this.btnAchievements=document.getElementById("btn-achievements"),this.btnLevelSelect=document.getElementById("btn-level-select"),this.btnHowToPlay=document.getElementById("btn-how-to-play"),this.btnSoundMenu=document.getElementById("btn-sound-menu"),this.btnResetProgress=document.getElementById("btn-reset-progress"),this.diffButtons=document.querySelectorAll(".diff-btn"),this.achievementsModal=document.getElementById("achievements-modal"),this.btnCloseAchievements=document.getElementById("btn-close-achievements"),this.achievementsListContainer=document.getElementById("achievements-list-container"),this.levelSelectModal=document.getElementById("level-select-modal"),this.levelGridContainer=document.getElementById("level-grid-container"),this.btnCloseLevels=document.getElementById("btn-close-levels"),this.howToPlayModal=document.getElementById("how-to-play-modal"),this.btnCloseHelp=document.getElementById("btn-close-help"),this.btnHelpOk=document.getElementById("btn-help-ok")}bindEvents(){const e=()=>{const t=this.sound.toggle();this.soundIcon.textContent=t?"🔊":"🔇",this.btnSoundMenu&&(this.btnSoundMenu.textContent=t?"Sound: ON 🔊":"Sound: OFF 🔇"),t&&this.sound.playClick()};this.btnSound.addEventListener("click",e),this.btnSoundMenu&&this.btnSoundMenu.addEventListener("click",e),this.btnCameraReset.addEventListener("click",()=>{this.sound.playClick(),this.game.resetCamera()}),this.btnMenu.addEventListener("click",()=>{this.sound.playClick(),this.showMainMenu()}),this.btnPlay.addEventListener("click",()=>{this.sound.playClick(),this.hideMainMenu(),this.game.startLevel(this.game.currentLevelIndex)}),this.btnModeShop&&this.btnModeShop.addEventListener("click",()=>{this.sound.playClick(),this.hideMainMenu(),this.game.startRotiShopMode()}),this.btnModeTimed&&this.btnModeTimed.addEventListener("click",()=>{this.sound.playClick(),this.hideMainMenu(),this.game.startTimedChallenge()}),this.btnModeCreative&&this.btnModeCreative.addEventListener("click",()=>{this.sound.playClick(),this.hideMainMenu(),this.game.startCreativeKitchen()}),this.btnAchievements&&this.btnAchievements.addEventListener("click",()=>{this.sound.playClick(),this.showAchievements()}),this.btnCloseAchievements&&this.btnCloseAchievements.addEventListener("click",()=>{this.sound.playClick(),this.hideAchievements()}),this.btnHowToPlay.addEventListener("click",()=>{this.sound.playClick(),this.showHowToPlay()}),this.btnHelp&&this.btnHelp.addEventListener("click",()=>{this.sound.playClick(),this.showHowToPlay()}),this.btnCloseHelp.addEventListener("click",()=>{this.sound.playClick(),this.hideHowToPlay()}),this.btnHelpOk.addEventListener("click",()=>{this.sound.playClick(),this.hideHowToPlay()}),this.btnLevelSelect.addEventListener("click",()=>{this.sound.playClick(),this.showLevelSelect()}),this.btnCloseLevels.addEventListener("click",()=>{this.sound.playClick(),this.hideLevelSelect()}),this.toolButtons.forEach(t=>{t.addEventListener("click",()=>{this.toolButtons.forEach(s=>s.classList.remove("active")),t.classList.add("active");const n=t.dataset.tool;this.game.setEquipment(n),this.sound.playClick()})}),this.modeButtons.forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.mode;this.setMode(n),this.sound.playClick()})}),this.sliceCountButtons.forEach(t=>{t.addEventListener("click",()=>{this.sliceCountButtons.forEach(s=>s.classList.remove("active")),t.classList.add("active");const n=parseInt(t.dataset.pieces,10);this.game.setPreviewSliceCount(n),this.sound.playClick()})}),this.foodPickButtons.forEach(t=>{t.addEventListener("click",()=>{this.foodPickButtons.forEach(s=>s.classList.remove("active")),t.classList.add("active");const n=t.dataset.food;this.game.setCreativeFood(n),this.sound.playClick()})}),this.btnExecuteCut.addEventListener("click",()=>{this.game.executeSlicing()}),this.btnResetLevel.addEventListener("click",()=>{this.sound.playClick(),this.game.resetCurrentLevel()}),this.btnCheckSolution.addEventListener("click",()=>{this.sound.playClick(),this.game.validateCurrentLevelSolution()}),this.btnShopServe&&this.btnShopServe.addEventListener("click",()=>{this.game.validateCurrentLevelSolution()}),this.btnHint.addEventListener("click",()=>{this.sound.playClick(),this.showHint()}),this.btnCloseHint.addEventListener("click",()=>{this.sound.playClick(),this.hintModal.classList.add("hidden")}),this.btnReplay.addEventListener("click",()=>{this.sound.playClick(),this.successModal.classList.add("hidden"),this.game.resetCurrentLevel()}),this.btnNextLevel.addEventListener("click",()=>{this.sound.playClick(),this.successModal.classList.add("hidden"),this.game.nextLevel()}),this.diffButtons.forEach(t=>{t.addEventListener("click",()=>{this.sound.playClick(),this.diffButtons.forEach(s=>s.classList.remove("active")),t.classList.add("active");const n=t.dataset.diff;this.game.setDifficulty(n),this.elDiffTag.textContent=n.toUpperCase()})}),this.btnResetProgress.addEventListener("click",()=>{this.sound.playClick(),confirm("Are you sure you want to reset all stars, coins, and unlocked levels?")&&(this.game.resetAllProgress(),this.showToast("All progress has been reset."),this.populateLevelSelectGrid())})}setControlsDisabled(e){this.btnExecuteCut&&(this.btnExecuteCut.disabled=e,this.btnExecuteCut.style.opacity=e?"0.6":"1.0",this.btnExecuteCut.style.pointerEvents=e?"none":"auto"),this.btnResetLevel&&(this.btnResetLevel.disabled=e,this.btnResetLevel.style.opacity=e?"0.6":"1.0",this.btnResetLevel.style.pointerEvents=e?"none":"auto"),this.btnCheckSolution&&(this.btnCheckSolution.disabled=e,this.btnCheckSolution.style.opacity=e?"0.6":"1.0",this.btnCheckSolution.style.pointerEvents=e?"none":"auto"),this.sliceCountButtons.forEach(t=>{t.disabled=e,t.style.opacity=e?"0.6":"1.0",t.style.pointerEvents=e?"none":"auto"})}setMode(e){this.modeButtons.forEach(t=>{t.dataset.mode===e?t.classList.add("active"):t.classList.remove("active")}),this.game.setInteractionMode(e)}setGameMode(e){this.elModeTag&&(this.elModeTag.textContent=e),e==="CREATIVE"?(this.creativeFoodSelector.classList.remove("hidden"),this.rotiShopPanel.classList.add("hidden"),this.elTimerBadge.classList.add("hidden")):e==="ROTI SHOP"?(this.rotiShopPanel.classList.remove("hidden"),this.creativeFoodSelector.classList.add("hidden"),this.elTimerBadge.classList.add("hidden")):e==="TIMED RUSH"?(this.elTimerBadge.classList.remove("hidden"),this.creativeFoodSelector.classList.add("hidden"),this.rotiShopPanel.classList.add("hidden")):(this.creativeFoodSelector.classList.add("hidden"),this.rotiShopPanel.classList.add("hidden"),this.elTimerBadge.classList.add("hidden"))}showShopOrder(e){this.rotiShopPanel.classList.remove("hidden"),this.shopCustomerName.textContent=e.customer,this.shopOrderSpeech.textContent=e.message,this.shopRewardCoins.textContent=e.coinsReward;const t={Chintu:"👦",Meera:"👧",Golu:"🧒"};this.shopCustomerAvatar.textContent=t[e.customer]||"🧑"}showCreativeFoodPicker(){this.creativeFoodSelector.classList.remove("hidden")}showTimer(e){this.elTimerBadge.classList.remove("hidden"),this.updateTimer(e)}updateTimer(e){this.elTimerVal&&(this.elTimerVal.textContent=`${e}s`)}updateCoins(e){this.elCoins&&(this.elCoins.textContent=e)}showMainMenu(){this.mainMenu.classList.remove("hidden"),this.game.isMenuOpen=!0}hideMainMenu(){this.mainMenu.classList.add("hidden"),this.game.isMenuOpen=!1}showHowToPlay(e=!1){this.modalOpenedFromMenu=e||!this.mainMenu.classList.contains("hidden"),this.modalOpenedFromMenu&&this.mainMenu.classList.add("hidden"),this.howToPlayModal.classList.remove("hidden")}hideHowToPlay(){this.howToPlayModal.classList.add("hidden"),this.modalOpenedFromMenu&&(this.showMainMenu(),this.modalOpenedFromMenu=!1)}showLevelSelect(e=!1){this.modalOpenedFromMenu=e||!this.mainMenu.classList.contains("hidden"),this.modalOpenedFromMenu&&this.mainMenu.classList.add("hidden"),this.populateLevelSelectGrid(),this.levelSelectModal.classList.remove("hidden")}hideLevelSelect(){this.levelSelectModal.classList.add("hidden"),this.modalOpenedFromMenu&&(this.showMainMenu(),this.modalOpenedFromMenu=!1)}showAchievements(e=!1){this.modalOpenedFromMenu=e||!this.mainMenu.classList.contains("hidden"),this.modalOpenedFromMenu&&this.mainMenu.classList.add("hidden"),this.populateAchievements(),this.achievementsModal.classList.remove("hidden")}hideAchievements(){this.achievementsModal.classList.add("hidden"),this.modalOpenedFromMenu&&(this.showMainMenu(),this.modalOpenedFromMenu=!1)}populateAchievements(){if(!this.achievementsListContainer)return;this.achievementsListContainer.innerHTML="";const e=this.game.getProgress();$l.forEach(t=>{const n=!!e.achievements[t.id],s=document.createElement("div");s.className=`achievement-card ${n?"unlocked":"locked"}`,s.innerHTML=`
        <div class="ach-icon">${t.icon}</div>
        <div class="ach-info">
          <h4>${t.title}</h4>
          <p>${t.description}</p>
        </div>
        <div class="ach-badge-status">${n?"✅ UNLOCKED":"🔒 IN PROGRESS"}</div>
      `,this.achievementsListContainer.appendChild(s)})}populateLevelSelectGrid(){this.levelGridContainer.innerHTML="";const e=this.game.getProgress();this.game.levels.forEach((t,n)=>{const s=document.createElement("div");s.className="level-card";const r=n<=e.unlockedLevelIndex;r||s.classList.add("locked");const a=e.stars[t.id]||0;let o="";for(let l=1;l<=3;l++)o+=l<=a?"★":"☆";s.innerHTML=`
        <div class="card-num">${t.id}</div>
        <div class="card-title">${t.title}</div>
        <div class="card-stars">${r?o:"🔒"}</div>
      `,r&&s.addEventListener("click",()=>{this.sound.playClick(),this.hideLevelSelect(),this.hideMainMenu(),this.game.startLevel(n)}),this.levelGridContainer.appendChild(s)})}updateHUD(e,t,n,s=0){this.elLevelNum.textContent=e.id,this.elLevelTitle.textContent=e.title,this.elScore.textContent=t,this.elCoins&&(this.elCoins.textContent=s),this.elStarsDisplay.querySelectorAll(".star").forEach((a,o)=>{o<n?a.classList.add("active"):a.classList.remove("active")}),this.elInstruction.textContent=e.instruction,this.elSubInstruction.textContent=e.subInstruction||"",e.type==="identify"||e.type==="compare"?(this.sliceSelector.style.display="none",this.btnCheckSolution.style.display="none",this.renderQuizPanel(e)):(this.sliceSelector.style.display="flex",this.btnCheckSolution.style.display="inline-block",this.quizPanel.classList.add("hidden"))}renderQuizPanel(e){this.quizPanel.classList.remove("hidden"),this.quizQuestion.textContent=e.question,this.quizOptions.innerHTML="",e.options.forEach(t=>{const n=document.createElement("button");n.className="quiz-opt-card",n.textContent=t,n.addEventListener("click",()=>{this.game.handleQuizAnswer(t,e.correctOption)}),this.quizOptions.appendChild(n)})}showFractionCallout(e,t,n=""){this.mathNum.textContent=e,this.mathDen.textContent=t,this.mathDesc.textContent=n||`${e}/${t} Portion`,this.fractionCallout.classList.remove("hidden")}hideFractionCallout(){this.fractionCallout.classList.add("hidden")}showHint(){const e=this.game.getCurrentLevel();this.hintText.textContent=e.hint,this.hintModal.classList.remove("hidden")}showSuccessModal(e=3,t="",n="Level Complete! 🎉"){this.sound.playSuccess(),this.successModal.classList.remove("hidden"),this.successTitle&&(this.successTitle.textContent=n||"Level Complete! 🎉");let s="";for(let a=0;a<e;a++)s+="★ ";this.modalStars.textContent=s.trim();const r=this.game.getCurrentLevel();this.successMessage.textContent=t||r.explanation,this.successMathBox.innerHTML=`<span class="math-formula">${t||r.explanation||"Well Done!"}</span>`,Eg({particleCount:110,spread:75,origin:{y:.6}})}showToast(e,t="✨"){this.toastTimer&&(clearTimeout(this.toastTimer),this.toastTimer=null),this.toastMessage.textContent=e,this.toastIcon.textContent=t,this.toast.classList.remove("hidden"),this.toastTimer=setTimeout(()=>{this.toast.classList.add("hidden"),this.toastTimer=null},3200)}hideToast(){this.toastTimer&&(clearTimeout(this.toastTimer),this.toastTimer=null),this.toast&&this.toast.classList.add("hidden")}}class wg{constructor(){this.canvas=document.getElementById("webgl-canvas"),this.levels=Sg,this.currentLevelIndex=0,this.difficulty="easy",this.score=0,this.coins=0,this.isMenuOpen=!0,this.gameMode="campaign",this.interactionMode="cut",this.currentEquipment="knife",this.previewSliceCount=2,this.creativeFoodType="roti",this.timerSeconds=60,this.timerInterval=null,this.shopOrderIndex=0,this.raycaster=new sg,this.mouse=new ce,this.draggedObject=null,this.dragPlane=new cn(new I(0,1,0),0),this.planeIntersect=new I,this.isPointerDown=!1,this.pointerStartPos=new ce,this.isDraggingFood=!1,this.foodItemsGroup=new tt,this.rotiPieces=[],this.plates=[],this.laddoos=[],this.cuttingGuides=[],this.isAutoDistributing=!1,this.distributionCompleted=!1,this.levelSolved=!1,this.activeAnimationTimeouts=[],this.activeAnimationFrames=[],this.loadProgress(),this.initScene(),this.initLights(),this.initEnvironment(),this.initEquipment(),this.initCharacters(),this.initUI(),this.initEventListeners(),this.clock=new ig,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}loadProgress(){try{const e=localStorage.getItem("roti_share_progress");e?this.progress=JSON.parse(e):this.progress={unlockedLevelIndex:0,stars:{},score:0,coins:0,stats:{fairSharesCount:0,fractionsIdentified:0,equivalentMastered:!1},achievements:{}}}catch{this.progress={unlockedLevelIndex:0,stars:{},score:0,coins:0,stats:{fairSharesCount:0,fractionsIdentified:0,equivalentMastered:!1},achievements:{}}}this.score=this.progress.score||0,this.coins=this.progress.coins||0}saveProgress(){try{this.progress.score=this.score,this.progress.coins=this.coins,localStorage.setItem("roti_share_progress",JSON.stringify(this.progress))}catch(e){console.warn("Could not save progress:",e)}}getProgress(){return this.progress}resetAllProgress(){this.progress={unlockedLevelIndex:0,stars:{},score:0,coins:0,stats:{fairSharesCount:0,fractionsIdentified:0,equivalentMastered:!1},achievements:{}},this.score=0,this.coins=0,this.saveProgress(),this.ui.updateHUD(this.getCurrentLevel(),this.score,0,this.coins)}awardAchievement(e){if(this.progress.achievements[e])return;this.progress.achievements[e]=!0,this.saveProgress();const t=$l.find(n=>n.id===e);t&&this.ui.showToast(`🏆 Achievement Unlocked: ${t.title}!`,"🌟")}checkAchievements(){this.progress.stats.fairSharesCount>=5&&this.awardAchievement("fair_share"),this.progress.stats.fractionsIdentified>=10&&this.awardAchievement("fraction_finder"),this.progress.stats.equivalentMastered&&this.awardAchievement("equivalent_expert"),this.progress.unlockedLevelIndex>=9&&this.awardAchievement("roti_master")}initScene(){this.scene=new vm,this.scene.background=new Ke(16772565),this.scene.fog=new ra(16708551,.02);const e=window.innerWidth/window.innerHeight;this.camera=new Ot(42,e,.1,100),this.defaultCameraPos=new I(0,4.4,5.4),this.camera.position.copy(this.defaultCameraPos),this.renderer=new Gl({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ol,this.renderer.toneMapping=cl,this.renderer.toneMappingExposure=1.2,this.controls=new ag(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2.15,this.controls.minDistance=2.4,this.controls.maxDistance=10,this.controls.target.set(0,.45,0),this.scene.add(this.foodItemsGroup),this.rotiTexture=lg(),this.laddooTexture=cg(),this.pizzaTexture=pg(),this.pancakeTexture=mg(),this.cuttingLineGeo=new gt,this.cuttingLineGeo.setAttribute("position",new et([0,0,0,0,0,0],3)),this.cuttingLineMat=new oa({color:15680580,linewidth:4,depthTest:!1}),this.interactiveCutLine=new Vo(this.cuttingLineGeo,this.cuttingLineMat),this.interactiveCutLine.visible=!1,this.interactiveCutLine.renderOrder=999,this.scene.add(this.interactiveCutLine);const t=new hn(3.4,.45),n=new Yt({color:16096779,transparent:!0,opacity:.35,side:Bt,depthWrite:!1});this.bladePreview=new pe(t,n),this.bladePreview.position.y=.2,this.bladePreview.rotation.x=Math.PI/2,this.bladePreview.visible=!1,this.scene.add(this.bladePreview)}initLights(){const e=new Qm(16772565,7877903,.85);this.scene.add(e),this.sunLight=new Jo(16775149,2),this.sunLight.position.set(6,10,5),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=30,this.sunLight.shadow.camera.left=-6,this.sunLight.shadow.camera.right=6,this.sunLight.shadow.camera.top=6,this.sunLight.shadow.camera.bottom=-6,this.sunLight.shadow.bias=-4e-4,this.scene.add(this.sunLight);const t=new Jo(16707722,.65);t.position.set(-6,4,-4),this.scene.add(t);const n=new tg(16772565,1.2,10,1.8);n.position.set(0,3.4,0),this.scene.add(n)}initEnvironment(){const e=new hn(32,32),t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d");n.fillStyle="#b45309",n.fillRect(0,0,512,512),n.fillStyle="#92400e";for(let W=0;W<8;W++)for(let J=0;J<8;J++)(W+J)%2===0&&n.fillRect(J*64+4,W*64+4,56,56);const s=new fn(t);s.wrapS=Wi,s.wrapT=Wi,s.repeat.set(8,8);const r=new We({map:s,roughness:.7,metalness:.05}),a=new pe(e,r);a.rotation.x=-Math.PI/2,a.position.y=-1.2,a.receiveShadow=!0,this.scene.add(a);const o=new We({color:16708551,roughness:.95}),l=new pe(new hn(32,16),o);l.position.set(0,6.5,-6.5),l.receiveShadow=!0,this.scene.add(l);const c=new tt;c.position.set(0,4.2,-6.45);const h=new hn(5.2,3.6),u=new Yt({color:9684477}),d=new pe(h,u);d.position.z=-.05,c.add(d);const p=new pt(5.6,4,.25),g=new We({color:6041099,roughness:.6}),_=new pe(p,g);c.add(_);const m=new hn(1.6,3.8),f=new We({color:16772565,roughness:.8,side:Bt,transparent:!0,opacity:.88}),M=new pe(m,f);M.position.set(-2,0,.15),c.add(M);const v=new pe(m,f);v.position.set(2,0,.15),c.add(v),this.scene.add(c);const S=new pt(6.6,.24,4.6),U=document.createElement("canvas");U.width=512,U.height=512;const C=U.getContext("2d");C.fillStyle="#6e3107",C.fillRect(0,0,512,512),C.fillStyle="rgba(40, 16, 4, 0.15)";for(let W=0;W<40;W++)C.fillRect(0,W*13,512,5+Math.random()*4);const P=new fn(U),b=new We({map:P,roughness:.55,metalness:.08});this.table=new pe(S,b),this.table.position.set(0,-.12,0),this.table.receiveShadow=!0,this.scene.add(this.table);const y=new nt(.12,.1,1.2,16);[[-3,-.65,-2],[3,-.65,-2],[-3,-.65,2],[3,-.65,2]].forEach(([W,J,R])=>{const A=new pe(y,b);A.position.set(W,J,R),A.castShadow=!0,this.scene.add(A)}),this.cuttingBoard=ug(),this.cuttingBoard.position.set(0,.02,0),this.scene.add(this.cuttingBoard);const z=new pt(6.2,.18,.85),Y=new We({color:4528643,roughness:.7}),ne=new pe(z,Y);ne.position.set(-2.5,3.4,-6.1),ne.castShadow=!0,this.scene.add(ne);const F=[12730636,10105874,11817737];[-4.5,-3.2,-1.8].forEach((W,J)=>{const R=new tt,A=new pe(new Ft(.42,20,20),new We({color:F[J],roughness:.85}));A.position.y=.42,A.castShadow=!0,R.add(A);const X=new pe(new nt(.22,.3,.22,16),new We({color:F[J],roughness:.85}));X.position.y=.78,R.add(X),R.position.set(W,3.48,-5.9),this.scene.add(R)});const G=new tt,V=new pe(new nt(.065,.065,1.25,16),new We({color:11817737,roughness:.45}));V.rotation.z=Math.PI/2,G.add(V),G.position.set(2.4,.08,-1.4),G.rotation.y=-.45,G.castShadow=!0,this.scene.add(G);const ee=new pe(new nt(.44,.44,.22,28),new We({color:14251782,metalness:.85,roughness:.25}));ee.position.set(-2.5,.13,-1.5),ee.castShadow=!0,this.scene.add(ee)}initEquipment(){this.knife=gg(),this.knife.position.set(.8,.65,0),this.knife.rotation.z=Math.PI/4,this.knife.visible=!0,this.scene.add(this.knife),this.spatula=_g(),this.spatula.position.set(-2.2,.08,.5),this.spatula.rotation.y=Math.PI/6,this.spatula.visible=!0,this.scene.add(this.spatula),this.measuringTool=vg(),this.measuringTool.position.set(0,.15,0),this.measuringTool.visible=!1,this.scene.add(this.measuringTool),this.balanceScale=xg(),this.balanceScale.position.set(2.2,.04,-.4),this.balanceScale.visible=!0,this.scene.add(this.balanceScale),this.fractionTilesRack=Mg(),this.fractionTilesRack.position.set(0,.04,1.85),this.fractionTilesRack.visible=!0,this.scene.add(this.fractionTilesRack)}initCharacters(){this.characterSystem=new og(this.scene)}initUI(){this.ui=new bg(this),this.loadLevel(this.currentLevelIndex)}getCurrentLevel(){return this.levels[this.currentLevelIndex]}setEquipment(e){this.currentEquipment=e,e==="knife"?(this.knife.visible=!0,this.measuringTool.visible=!1,this.setInteractionMode("cut"),this.ui.showToast("Butter Knife selected. Choose slice count to cut!","🔪")):e==="spatula"?(this.measuringTool.visible=!1,this.setInteractionMode("move"),this.ui.showToast("Serving Spatula selected. Pick & place slices to plates!","🥄")):e==="measure"?(this.measuringTool.visible=!0,this.ui.showToast("Measuring Tool active. Click any piece to inspect degrees & fraction!","📏")):e==="scale"?(this.measuringTool.visible=!1,this.updateBalanceScaleWeights(),this.ui.showToast("Balance Scale active! Compare left and right portions.","⚖️")):e==="tiles"&&(this.measuringTool.visible=!1,this.ui.showToast("Fraction Tiles Rack active! Select tiles to explore fractions.","🧩"))}setInteractionMode(e){this.interactionMode=e,this.controls.enabled=!0}setDifficulty(e){this.difficulty=e}setPreviewSliceCount(e){this.previewSliceCount=e,this.renderCuttingGuides()}startLevel(e){this.gameMode="campaign",this.currentLevelIndex=e,this.loadLevel(e),this.ui.setGameMode("CAMPAIGN")}nextLevel(){this.currentLevelIndex<this.levels.length-1?(this.currentLevelIndex++,this.loadLevel(this.currentLevelIndex)):(this.awardAchievement("roti_master"),this.ui.showToast("Congratulations! You completed all 10 Fraction Levels!","🏆"),this.ui.showMainMenu())}resetCurrentLevel(){this.clearAnimationTimeouts(),this.isAutoDistributing=!1,this.distributionCompleted=!1,this.levelSolved=!1,this.ui.setControlsDisabled(!1),this.ui.hideToast(),this.spatula&&(this.spatula.position.set(-2.2,.08,.5),this.spatula.rotation.set(0,Math.PI/6,0)),this.loadLevel(this.currentLevelIndex),this.ui.showToast("Level reset! Ready to cut fresh roti.","↺")}loadLevel(e){const t=this.levels[e];this.clearAnimationTimeouts(),this.isAutoDistributing=!1,this.distributionCompleted=!1,this.levelSolved=!1,this.ui.setControlsDisabled(!1),this.ui.hideToast(),this.clearFoodScene(),this.characterSystem.resetAll(),this.resetCamera(),this.setupPlates(t.friends||[]),t.foodType==="laddoo"?this.setupLaddooFood(t):t.foodType==="dual_roti"?this.setupDualRotiFood(t):this.setupStandardRotiFood(t);const n=this.progress.stars[t.id]||0;this.ui.updateHUD(t,this.score,n,this.coins),t.id===6?this.balanceScale.setWeights(t.leftVal,t.rightVal):t.id===7?(this.balanceScale.setWeights(t.leftVal,t.rightVal),this.progress.stats.equivalentMastered=!0,this.checkAchievements()):this.balanceScale.setWeights(0,0),this.renderCuttingGuides(),this.updatePlateLabels()}clearFoodScene(){this.rotiPieces.forEach(e=>{this.foodItemsGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.rotiPieces=[],this.plates.forEach(e=>{this.scene.remove(e),e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}),this.plates=[],this.laddoos.forEach(e=>{this.foodItemsGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.laddoos=[],this.clearCuttingGuides(),this.ui.hideFractionCallout()}clearRotiPiecesOnly(){this.rotiPieces.forEach(e=>{this.foodItemsGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.rotiPieces=[],this.laddoos.forEach(e=>{this.foodItemsGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.laddoos=[],this.plates.forEach(e=>{e.labelSprite&&e.labelSprite.updateFraction("0")}),this.clearCuttingGuides(),this.ui.hideFractionCallout()}setupPlates(e){const t={Chintu:new I(-1.8,.03,.8),Meera:new I(1.8,.03,.8),Golu:new I(0,.03,-1.2)};e.forEach(n=>{const s=t[n]||new I(0,.03,1.2),r=dg(`${n}'s Plate`);r.position.copy(s),r.userData.friendName=n;const a=yg(n,"0");a.position.set(0,.48,-.65),r.add(a),r.labelSprite=a,this.scene.add(r),this.plates.push(r)})}updatePlateLabels(){this.plates.forEach(e=>{const t=this.rotiPieces.filter(s=>s.userData.plateAssigned===e),n=this.laddoos.filter(s=>s.userData.plateAssigned===e);if(n.length>0)e.labelSprite&&e.labelSprite.updateFraction(`${n.length} Items`);else if(t.length===0)e.labelSprite&&e.labelSprite.updateFraction("0");else{const s=t.reduce((a,o)=>a+(o.userData.fractionValue||0),0);let r="";Math.abs(s-.5)<.01?r="1/2":Math.abs(s-.25)<.01?r="1/4":Math.abs(s-.75)<.01?r="3/4":Math.abs(s-1/3)<.01?r="1/3":Math.abs(s-2/3)<.01?r="2/3":Math.abs(s-1)<.01?r="1 Whole":r=`${t.length}/${t[0].userData.denominator||4}`,e.labelSprite&&e.labelSprite.updateFraction(r)}})}getFoodTexture(){return this.creativeFoodType==="pizza"?this.pizzaTexture:this.creativeFoodType==="pancake"?this.pancakeTexture:this.rotiTexture}setupStandardRotiFood(e){const n=e.type==="identify"?e.initialPieces:1,s=this.getFoodTexture();if(n===1){const r=Or(this.creativeFoodType,s,{radius:1.35,thickness:.055,startAngle:0,angleSpan:Math.PI*2,numerator:1,denominator:1,id:0});r.position.set(0,.12,0),r.userData.originalPosition.copy(r.position),this.foodItemsGroup.add(r),this.rotiPieces.push(r)}else Ls(n).forEach((a,o)=>{const l=Or(this.creativeFoodType,s,{radius:1.35,thickness:.055,startAngle:a.startAngle,angleSpan:a.angle,numerator:a.fractionNumerator,denominator:a.fractionDenominator,id:o}),c=.05,h=Math.cos(a.centerAngle)*c,u=Math.sin(a.centerAngle)*c;l.position.set(h,.12,u),l.userData.originalPosition.copy(l.position),o===(e.highlightIndex||0)&&(l.material.color.setHex(16769126),l.material.emissive=new Ke(5583616)),this.foodItemsGroup.add(l),this.rotiPieces.push(l)})}setupDualRotiFood(e){Ls(e.leftPieces).forEach((s,r)=>{const a=$r(this.rotiTexture,{radius:1.08,thickness:.05,startAngle:s.startAngle,angleSpan:s.angle,numerator:s.fractionNumerator,denominator:s.fractionDenominator,id:`left-${r}`});a.position.set(-1.45,.12,0),r===0&&(a.material.color.setHex(16771701),a.material.emissive=new Ke(4469504)),this.foodItemsGroup.add(a),this.rotiPieces.push(a)}),Ls(e.rightPieces).forEach((s,r)=>{const a=$r(this.rotiTexture,{radius:1.08,thickness:.05,startAngle:s.startAngle,angleSpan:s.angle,numerator:s.fractionNumerator,denominator:s.fractionDenominator,id:`right-${r}`});a.position.set(1.45,.12,0),(e.id===7?r<2:r===0)&&(a.material.color.setHex(9684477),a.material.emissive=new Ke(8772)),this.foodItemsGroup.add(a),this.rotiPieces.push(a)})}setupLaddooFood(e){const t=e.totalItems||6,n=.65;for(let s=0;s<t;s++){const r=fg(.28,this.laddooTexture),a=s/t*Math.PI*2,o=Math.cos(a)*n,l=Math.sin(a)*n;r.position.set(o,.28,l),r.userData.id=s,r.userData.originalPosition=r.position.clone(),r.userData.plateAssigned=null,r.userData.fractionValue=1/t,this.foodItemsGroup.add(r),this.laddoos.push(r)}}clearCuttingGuides(){this.cuttingGuides.forEach(e=>this.scene.remove(e)),this.cuttingGuides=[],this.interactiveCutLine&&(this.interactiveCutLine.visible=!1),this.bladePreview&&(this.bladePreview.visible=!1)}renderCuttingGuides(){this.clearCuttingGuides();const e=this.getCurrentLevel();if(e.type==="identify"||e.type==="compare"||e.foodType==="laddoo"||this.rotiPieces.length>1)return;const t=this.previewSliceCount||2,n=2*Math.PI/t;for(let s=0;s<t;s++){const r=s*n,a=[];a.push(new I(0,.16,0)),a.push(new I(Math.cos(r)*1.55,.16,Math.sin(r)*1.55));const o=new gt().setFromPoints(a),l=new Jm({color:15680580,dashSize:.1,gapSize:.05,linewidth:3}),c=new Vo(o,l);c.computeLineDistances(),this.scene.add(c),this.cuttingGuides.push(c)}}clearAnimationTimeouts(){this.activeAnimationTimeouts&&this.activeAnimationTimeouts.forEach(e=>clearTimeout(e)),this.activeAnimationTimeouts=[]}executeSlicing(e=null){if(this.isAutoDistributing)return;const t=this.getCurrentLevel();if(t.type==="identify"||t.type==="compare"){this.ui.showToast("Slicing is not needed for this challenge.");return}if(t.foodType==="laddoo"){this.autoDistributeLaddoos();return}if(this.rotiPieces.length>1){this.ui.showToast("Roti is already cut! Click ↺ Reset to start fresh.","ℹ️");return}const n=e||this.previewSliceCount||2;this.isAutoDistributing=!0,this.distributionCompleted=!1,this.levelSolved=!1,this.ui.setControlsDisabled(!0),this.clearRotiPiecesOnly(),this.plates.length===0&&this.setupPlates(t.friends||[]);const s=this.getFoodTexture(),r=Ls(n);this.animateKnifeCut(()=>{r.forEach((a,o)=>{const l=Or(this.creativeFoodType,s,{radius:1.35,thickness:.055,startAngle:a.startAngle,angleSpan:a.angle,numerator:a.fractionNumerator,denominator:a.fractionDenominator,id:o}),c=.12,h=Math.cos(a.centerAngle)*c,u=Math.sin(a.centerAngle)*c;l.position.set(h,.12,u),l.userData.originalPosition.copy(l.position),l.userData.centerAngle=a.centerAngle,l.userData.plateAssigned=null,this.foodItemsGroup.add(l),this.rotiPieces.push(l)}),this.ui.sound.playSlice(),this.ui.showToast(`Cut into ${n} equal slices (1/${n} each)! Distributing to plates...`,"⚡"),this.ui.showFractionCallout(1,n,`1/${n} Portion`),this.updatePlateLabels(),this.autoDistributeFood(n)})}animateKnifeCut(e){if(!this.knife){e&&e();return}const t=.65,n=.14;let s=0;const r=setInterval(()=>{s+=.14,s<.5?this.knife.position.y=t-(t-n)*(s*2):s<=1?this.knife.position.y=n+(t-n)*((s-.5)*2):(clearInterval(r),this.knife.position.y=t,e&&e())},25)}determineDistributionPlan(e){const t=this.getCurrentLevel(),n=[];if(this.gameMode==="shop"){const s=Rs[this.shopOrderIndex],r=this.plates[0];if(r){const a=Math.min(Math.round(s.requestedFractionVal*e),this.rotiPieces.length);for(let o=0;o<a;o++)n.push({piece:this.rotiPieces[o],targetPlate:r})}return n}if(t.id===1){const s=this.plates.find(a=>a.userData.friendName==="Chintu"),r=this.plates.find(a=>a.userData.friendName==="Meera");this.rotiPieces[0]&&s&&n.push({piece:this.rotiPieces[0],targetPlate:s}),this.rotiPieces[1]&&r&&n.push({piece:this.rotiPieces[1],targetPlate:r})}else if(t.id===2){const s=this.plates.find(o=>o.userData.friendName==="Chintu"),r=this.plates.find(o=>o.userData.friendName==="Meera"),a=this.plates.find(o=>o.userData.friendName==="Golu");this.rotiPieces[0]&&s&&n.push({piece:this.rotiPieces[0],targetPlate:s}),this.rotiPieces[1]&&r&&n.push({piece:this.rotiPieces[1],targetPlate:r}),this.rotiPieces[2]&&a&&n.push({piece:this.rotiPieces[2],targetPlate:a})}else if(t.id===3){const s=this.plates.find(o=>o.userData.friendName==="Chintu"),r=this.plates.find(o=>o.userData.friendName==="Meera"),a=this.plates.find(o=>o.userData.friendName==="Golu");this.rotiPieces[0]&&s&&n.push({piece:this.rotiPieces[0],targetPlate:s}),this.rotiPieces[1]&&r&&n.push({piece:this.rotiPieces[1],targetPlate:r}),this.rotiPieces[2]&&a&&n.push({piece:this.rotiPieces[2],targetPlate:a})}else if(t.id===5){const s=this.plates.find(r=>r.userData.friendName==="Golu");if(s){const r=Math.min(3,this.rotiPieces.length);for(let a=0;a<r;a++)n.push({piece:this.rotiPieces[a],targetPlate:s})}}else if(t.id===8){const s=this.plates.find(r=>r.userData.friendName==="Meera");if(s){const r=Math.min(2,this.rotiPieces.length);for(let a=0;a<r;a++)n.push({piece:this.rotiPieces[a],targetPlate:s})}}else if(t.id===9&&t.type==="shop_level"){const s=this.plates[0];s&&this.rotiPieces[0]&&n.push({piece:this.rotiPieces[0],targetPlate:s})}else if(t.id===10){const s=this.plates.find(o=>o.userData.friendName==="Chintu"),r=this.plates.find(o=>o.userData.friendName==="Meera"),a=this.plates.find(o=>o.userData.friendName==="Golu");s&&(this.rotiPieces[0]&&n.push({piece:this.rotiPieces[0],targetPlate:s}),this.rotiPieces[1]&&n.push({piece:this.rotiPieces[1],targetPlate:s})),r&&(this.rotiPieces[2]&&n.push({piece:this.rotiPieces[2],targetPlate:r}),this.rotiPieces[3]&&n.push({piece:this.rotiPieces[3],targetPlate:r})),a&&(this.rotiPieces[4]&&n.push({piece:this.rotiPieces[4],targetPlate:a}),this.rotiPieces[5]&&n.push({piece:this.rotiPieces[5],targetPlate:a}))}else{let s=0;for(let r=0;r<this.rotiPieces.length&&this.plates.length>0;r++)n.push({piece:this.rotiPieces[r],targetPlate:this.plates[s%this.plates.length]}),s++}return n}animatePieceToPlate(e,t,n,s){const r=e.position.clone(),a=e.scale.clone(),o=new I(.58,.58,.58);let l=new I(0,0,0),c=e.rotation.y;if(n===0)l.set(0,0,0);else if(n===1)l.set(.18,0,-.1),c+=.35;else if(n===2)l.set(-.16,0,.12),c-=.35;else{const g=n*1.05;l.set(Math.cos(g)*.22,0,Math.sin(g)*.22),c+=n*.4}const h=new I(t.position.x+l.x,.065,t.position.z+l.z),u=650,d=performance.now();this.spatula&&(this.spatula.visible=!0,this.spatula.position.set(r.x,r.y-.08,r.z));const p=g=>{const _=g-d,m=Math.min(1,_/u),f=m<.5?2*m*m:1-Math.pow(-2*m+2,2)/2;if(e.position.x=r.x+(h.x-r.x)*f,e.position.z=r.z+(h.z-r.z)*f,e.position.y=r.y+(h.y-r.y)*f+Math.sin(m*Math.PI)*.45,e.rotation.x=Math.sin(m*Math.PI)*.2,e.rotation.y=e.rotation.y+(c-e.rotation.y)*.05,e.scale.lerpVectors(a,o,f),this.spatula&&(this.spatula.position.set(e.position.x,e.position.y-.08,e.position.z),this.spatula.rotation.y=Math.atan2(h.x-r.x,h.z-r.z)),m<1)requestAnimationFrame(p);else{e.position.copy(h),e.scale.copy(o),e.rotation.set(0,c,0),e.userData.plateAssigned=t,this.ui.sound.playDropPiece(),this.updatePlateLabels();const M=t.userData.friendName?t.userData.friendName.toLowerCase():null;M&&this.characterSystem&&(this.characterSystem.setEmotion(M,"reaching"),setTimeout(()=>this.characterSystem.setEmotion(M,"eating"),600)),s&&s()}};requestAnimationFrame(p)}autoDistributeFood(e){const t=this.determineDistributionPlan(e);if(t.length===0){this.isAutoDistributing=!1,this.distributionCompleted=!0,this.ui.setControlsDisabled(!1),this.ui.showToast("Cut complete! Click '✓ Check Sharing' to verify.","✨");return}let n=0;const s=new Map,r=()=>{if(n>=t.length){this.isAutoDistributing=!1,this.distributionCompleted=!0,this.ui.setControlsDisabled(!1),this.updateBalanceScaleWeights(),this.spatula&&(this.spatula.position.set(-2.2,.08,.5),this.spatula.rotation.set(0,Math.PI/6,0)),this.ui.showToast("Roti pieces shared! Click '✓ Check Sharing' to verify.","✨");return}const o=t[n],l=o.targetPlate.id,c=s.get(l)||0;s.set(l,c+1),this.animatePieceToPlate(o.piece,o.targetPlate,c,()=>{n++;const h=setTimeout(r,250);this.activeAnimationTimeouts.push(h)})},a=setTimeout(r,350);this.activeAnimationTimeouts.push(a)}autoDistributeLaddoos(){if(this.isAutoDistributing)return;this.isAutoDistributing=!0,this.distributionCompleted=!1,this.levelSolved=!1,this.ui.setControlsDisabled(!0);const e=this.plates.find(o=>o.userData.friendName==="Chintu"),t=this.plates.find(o=>o.userData.friendName==="Meera"),n=this.plates.find(o=>o.userData.friendName==="Golu"),s=[{piece:this.laddoos[0],targetPlate:e,idx:0},{piece:this.laddoos[1],targetPlate:e,idx:1},{piece:this.laddoos[2],targetPlate:t,idx:0},{piece:this.laddoos[3],targetPlate:t,idx:1},{piece:this.laddoos[4],targetPlate:n,idx:0},{piece:this.laddoos[5],targetPlate:n,idx:1}];let r=0;const a=()=>{if(r>=s.length){this.isAutoDistributing=!1,this.distributionCompleted=!0,this.ui.setControlsDisabled(!1),this.ui.showToast("Laddoos shared! Click '✓ Check Sharing' to verify.","✨");return}const o=s[r];this.animatePieceToPlate(o.piece,o.targetPlate,o.idx,()=>{r++;const l=setTimeout(a,220);this.activeAnimationTimeouts.push(l)})};a()}updateBalanceScaleWeights(){if(!this.balanceScale)return;const e=this.plates.find(r=>r.userData.friendName==="Chintu"),t=this.plates.find(r=>r.userData.friendName==="Meera");let n=0,s=0;e&&(n=this.rotiPieces.filter(r=>r.userData.plateAssigned===e).reduce((r,a)=>r+a.userData.fractionValue,0)),t&&(s=this.rotiPieces.filter(r=>r.userData.plateAssigned===t).reduce((r,a)=>r+a.userData.fractionValue,0)),this.balanceScale.setWeights(n,s)}validateCurrentLevelSolution(){if(this.isAutoDistributing){this.ui.showToast("Please wait! Food is still being distributed to the plates.","⏳");return}if(this.gameMode==="shop"){this.validateShopOrder();return}const e=this.getCurrentLevel();e.type==="sharing"?this.validateSharingLevel(e):e.type==="serve_amount"?this.validateServeAmountLevel(e):e.type==="addition"?this.validateAdditionLevel(e):e.type==="shop_level"?this.validateShopLevel(e):e.type==="laddoo_share"&&this.validateLaddooSharingLevel(e)}validateShopLevel(e){if(this.isAutoDistributing){this.ui.showToast("Please wait! Food is still being distributed to the plate.","⏳");return}if(this.rotiPieces.length<=1){this.ui.sound.playError(),this.ui.showToast("Prepare the roti first! Select 2 slices and click '⚡ Cut & Share Roti'.","⚠️"),this.characterSystem.confuseAll();return}const t=this.plates[0];if(!t)return;const s=this.rotiPieces.filter(r=>r.userData.plateAssigned===t).reduce((r,a)=>r+(a.userData.fractionValue||0),0);if(Math.abs(s-e.targetFractionPerFriend)<.05){const r=`Customer Chintu received 1/2 of the roti!
Order served accurately and happily.`;this.ui.showToast("Order Complete! Served 1/2 roti to Chintu! 🎉","🎉"),this.onSuccess(3,r,"Roti Shop Order Fulfilled!")}else this.ui.sound.playError(),this.ui.showToast(`Customer requested ${e.targetFractionStr}! Currently served ${s.toFixed(2)}.`,"❌"),this.characterSystem.confuseAll()}validateSharingLevel(e){if(this.isAutoDistributing){this.ui.showToast("Please wait! Food is still being distributed to the plates.","⏳");return}if(e.id===1){if(this.rotiPieces.length<=1){this.ui.sound.playError(),this.ui.showToast("Cut the roti first! Select 2 slices and click '⚡ Cut & Share Roti'.","⚠️"),this.characterSystem.confuseAll();return}if(this.rotiPieces.length!==2){this.ui.sound.playError(),this.ui.showToast(`Level 1 requires dividing into 2 equal halves (1/2 each)! Currently cut into ${this.rotiPieces.length} pieces.`,"❌"),this.characterSystem.confuseAll();return}const s=this.rotiPieces.filter(d=>!d.userData.plateAssigned);if(s.length>0){this.ui.sound.playError(),this.ui.showToast(`Share both pieces to the plates! (${s.length} piece${s.length>1?"s":""} left on the cutting board)`,"⚠️"),this.characterSystem.confuseAll();return}const r=this.plates.find(d=>d.userData.friendName==="Chintu"),a=this.plates.find(d=>d.userData.friendName==="Meera");if(!r||!a){this.ui.sound.playError(),this.ui.showToast("Missing plates for Chintu and Meera!","⚠️");return}const o=this.rotiPieces.filter(d=>d.userData.plateAssigned===r),l=this.rotiPieces.filter(d=>d.userData.plateAssigned===a);if(o.length+l.length!==2){this.ui.sound.playError(),this.ui.showToast("Both friends must each receive their share!","⚠️"),this.characterSystem.confuseAll();return}const c=o.reduce((d,p)=>d+(p.userData.fractionValue||0),0),h=l.reduce((d,p)=>d+(p.userData.fractionValue||0),0);if(Math.abs(c-.5)>.01){this.ui.sound.playError();const d=c===0?"0":c===1?"1 Whole":`${o.length}/${this.rotiPieces.length}`;this.ui.showToast(`Chintu received ${d}, but needs exactly 1/2 roti!`,"❌"),this.characterSystem.confuseAll();return}if(Math.abs(h-.5)>.01){this.ui.sound.playError();const d=h===0?"0":h===1?"1 Whole":`${l.length}/${this.rotiPieces.length}`;this.ui.showToast(`Meera received ${d}, but needs exactly 1/2 roti!`,"❌"),this.characterSystem.confuseAll();return}for(const d of this.rotiPieces){const p=d.userData.angleSpan;if(p!==void 0&&Math.abs(p-Math.PI)>.05){this.ui.sound.playError(),this.ui.showToast("The pieces are not equal! Both halves must have equal areas.","❌"),this.characterSystem.confuseAll();return}}if(Math.abs(c+h-1)>.01){this.ui.sound.playError(),this.ui.showToast("The complete roti must be accounted for!","❌"),this.characterSystem.confuseAll();return}const u=`Chintu received 1/2 • Meera received 1/2
1/2 + 1/2 = 1 Whole Roti! Both friends received exactly equal shares.`;this.progress.stats.fairSharesCount++,this.checkAchievements(),this.ui.showToast("Perfect! Both friends received 1/2 roti!","🎉"),this.onSuccess(3,u,"Perfect! Both friends received 1/2 roti!");return}if(e.id===2){if(this.rotiPieces.length<=1){this.ui.sound.playError(),this.ui.showToast("Cut the roti first! Select 3 slices and click '⚡ Cut & Share Roti'.","⚠️"),this.characterSystem.confuseAll();return}if(this.rotiPieces.length!==3){this.ui.sound.playError(),this.ui.showToast(`Level 2 requires dividing into 3 equal pieces (1/3 each)! Currently cut into ${this.rotiPieces.length} pieces.`,"❌"),this.characterSystem.confuseAll();return}const s=this.rotiPieces.filter(p=>!p.userData.plateAssigned);if(s.length>0){this.ui.sound.playError(),this.ui.showToast(`Share all 3 pieces to the plates! (${s.length} remaining on the cutting board)`,"⚠️"),this.characterSystem.confuseAll();return}const r=this.plates.find(p=>p.userData.friendName==="Chintu"),a=this.plates.find(p=>p.userData.friendName==="Meera"),o=this.plates.find(p=>p.userData.friendName==="Golu"),l=this.rotiPieces.filter(p=>p.userData.plateAssigned===r).reduce((p,g)=>p+(g.userData.fractionValue||0),0),c=this.rotiPieces.filter(p=>p.userData.plateAssigned===a).reduce((p,g)=>p+(g.userData.fractionValue||0),0),h=this.rotiPieces.filter(p=>p.userData.plateAssigned===o).reduce((p,g)=>p+(g.userData.fractionValue||0),0),u=1/3;if(Math.abs(l-u)>.02||Math.abs(c-u)>.02||Math.abs(h-u)>.02){this.ui.sound.playError(),this.ui.showToast("Unfair sharing! Each friend needs exactly 1/3 of the roti.","❌"),this.characterSystem.confuseAll();return}const d=`Chintu received 1/3 • Meera received 1/3 • Golu received 1/3
1/3 + 1/3 + 1/3 = 1 Whole Roti! All three friends received equal thirds.`;this.progress.stats.fairSharesCount++,this.checkAchievements(),this.ui.showToast("Perfect! All three friends received 1/3 roti!","🎉"),this.onSuccess(3,d,"Perfect! All three friends received 1/3 roti!");return}if(e.id===3){if(this.rotiPieces.length<=1){this.ui.sound.playError(),this.ui.showToast("Cut the roti first! Select 4 slices and click '⚡ Cut & Share Roti'.","⚠️"),this.characterSystem.confuseAll();return}if(this.rotiPieces.length!==4){this.ui.sound.playError(),this.ui.showToast(`Level 3 requires dividing into 4 equal quarters (1/4 each)! Currently cut into ${this.rotiPieces.length} pieces.`,"❌"),this.characterSystem.confuseAll();return}const s=this.plates.find(h=>h.userData.friendName==="Chintu"),r=this.plates.find(h=>h.userData.friendName==="Meera"),a=this.plates.find(h=>h.userData.friendName==="Golu"),o=this.rotiPieces.filter(h=>h.userData.plateAssigned===s),l=this.rotiPieces.filter(h=>h.userData.plateAssigned===r),c=this.rotiPieces.filter(h=>h.userData.plateAssigned===a);if(o.length===1&&l.length===1&&c.length===1){const h=`Chintu: 1/4 • Meera: 1/4 • Golu: 1/4 (1/4 remains on board)
Everyone received equal one-quarter shares!`;this.progress.stats.fairSharesCount++,this.checkAchievements(),this.ui.showToast("Perfect! Everyone received equal 1/4 shares!","🎉"),this.onSuccess(3,h,"Perfect! Everyone received 1/4 shares!");return}else{this.ui.sound.playError(),this.ui.showToast("Each of the 3 friends must receive exactly 1 quarter (1/4)!","❌"),this.characterSystem.confuseAll();return}}if(e.id===10){if(this.rotiPieces.length<=1){this.ui.sound.playError(),this.ui.showToast("Cut the roti first! Select 6 slices and click '⚡ Cut & Share Roti'.","⚠️"),this.characterSystem.confuseAll();return}if(this.rotiPieces.length!==6){this.ui.sound.playError(),this.ui.showToast(`Grand Finale requires dividing into 6 equal slices! Currently cut into ${this.rotiPieces.length} pieces.`,"❌"),this.characterSystem.confuseAll();return}const s=this.rotiPieces.filter(u=>!u.userData.plateAssigned);if(s.length>0){this.ui.sound.playError(),this.ui.showToast(`Share all 6 pieces to the plates! (${s.length} remaining on the cutting board)`,"⚠️"),this.characterSystem.confuseAll();return}const r=this.plates.find(u=>u.userData.friendName==="Chintu"),a=this.plates.find(u=>u.userData.friendName==="Meera"),o=this.plates.find(u=>u.userData.friendName==="Golu"),l=this.rotiPieces.filter(u=>u.userData.plateAssigned===r),c=this.rotiPieces.filter(u=>u.userData.plateAssigned===a),h=this.rotiPieces.filter(u=>u.userData.plateAssigned===o);if(l.length===2&&c.length===2&&h.length===2){const u=`Chintu: 2/6 (1/3) • Meera: 2/6 (1/3) • Golu: 2/6 (1/3)
2/6 + 2/6 + 2/6 = 6/6 = 1 Whole Roti! You are a Certified Fractions Hero!`;this.progress.stats.fairSharesCount++,this.checkAchievements(),this.awardAchievement("roti_master"),this.ui.showToast("MASTER OF FRACTIONS! Perfect sharing!","🏆"),this.onSuccess(3,u,"Certified Fractions Hero! 🏆");return}else{this.ui.sound.playError(),this.ui.showToast("Each of the 3 friends must receive exactly 2 slices (2/6 each)!","❌"),this.characterSystem.confuseAll();return}}if(this.rotiPieces.length<(e.targetPieces||2)){this.ui.sound.playError(),this.ui.showToast(`Divide into ${e.targetPieces} pieces first!`,"⚠️"),this.characterSystem.confuseAll();return}const t=this.plates.map(s=>this.rotiPieces.filter(r=>r.userData.plateAssigned===s));let n=!0;for(const s of t){const r=s.reduce((a,o)=>a+(o.userData.fractionValue||0),0);if(Math.abs(r-e.targetFractionPerFriend)>.05){n=!1;break}}n?(this.progress.stats.fairSharesCount++,this.checkAchievements(),this.onSuccess(3,e.explanation,"Fair Sharing Complete!")):(this.ui.sound.playError(),this.ui.showToast("Unfair sharing! Each friend needs an equal fraction.","❌"),this.characterSystem.confuseAll())}validateServeAmountLevel(e){if(this.isAutoDistributing){this.ui.showToast("Please wait! Food is still being distributed.","⏳");return}if(this.rotiPieces.length<=1){this.ui.sound.playError(),this.ui.showToast("Cut the roti first! Select 4 slices and click '⚡ Cut & Share Roti'.","⚠️"),this.characterSystem.confuseAll();return}const t=this.plates.find(r=>r.userData.friendName==="Golu");if(!t)return;const n=this.rotiPieces.filter(r=>r.userData.plateAssigned===t),s=n.reduce((r,a)=>r+(a.userData.fractionValue||0),0);if(Math.abs(s-e.requiredFraction)<.05){const r=`Golu received 3/4 of the roti. 1/4 remains on the cutting board!
3/4 + 1/4 = 1 Whole Roti.`;this.ui.showToast("Perfect! Golu received 3/4 roti!","🎉"),this.onSuccess(3,r,"Three-Quarters Challenge Complete!")}else this.ui.sound.playError(),this.ui.showToast(`Golu needs exactly ${e.targetFractionStr}! Currently has ${n.length}/4.`,"❌"),this.characterSystem.confuseAll()}validateAdditionLevel(e){if(this.isAutoDistributing){this.ui.showToast("Please wait! Food is still being distributed.","⏳");return}if(this.rotiPieces.length<=1){this.ui.sound.playError(),this.ui.showToast("Cut the roti into 4 slices first!","⚠️"),this.characterSystem.confuseAll();return}const t=this.plates.find(r=>r.userData.friendName==="Meera");if(!t)return;const s=this.rotiPieces.filter(r=>r.userData.plateAssigned===t).reduce((r,a)=>r+(a.userData.fractionValue||0),0);if(Math.abs(s-.5)<.05){const r="Meera received two quarter pieces: 1/4 + 1/4 = 2/4 = 1/2 of the roti!";this.ui.showToast("Perfect! 1/4 + 1/4 = 2/4 = 1/2 roti!","🎉"),this.onSuccess(3,r,"Fraction Addition Complete!")}else this.ui.sound.playError(),this.ui.showToast("Move two 1/4 pieces to Meera's plate to show 1/4 + 1/4 = 2/4!","❌"),this.characterSystem.confuseAll()}validateLaddooSharingLevel(e){if(this.isAutoDistributing){this.ui.showToast("Please wait! Laddoos are still being distributed.","⏳");return}let t=!0;for(const n of this.plates)if(this.laddoos.filter(r=>r.userData.plateAssigned===n).length!==e.itemsPerFriend){t=!1;break}if(t){const n=`Chintu: 2 laddoos • Meera: 2 laddoos • Golu: 2 laddoos
Each friend received 1/3 of the 6 laddoos (6 ÷ 3 = 2)!`;this.ui.showToast("Perfect! Each friend received 2 laddoos!","🎉"),this.onSuccess(3,n,"Fair Laddoo Sharing Complete!")}else this.ui.sound.playError(),this.ui.showToast(`Each friend needs exactly ${e.itemsPerFriend} laddoos (1/3 of 6)!`,"❌"),this.characterSystem.confuseAll()}handleQuizAnswer(e,t){e===t?(this.progress.stats.fractionsIdentified++,this.checkAchievements(),this.onSuccess(3)):(this.ui.sound.playError(),this.ui.showToast("Not quite! Try again or check the Teacher's Hint.","❌"),this.characterSystem.confuseAll())}onSuccess(e=3,t="",n="Level Complete! 🎉"){if(this.levelSolved){this.ui.showSuccessModal(e,t,n);return}this.levelSolved=!0,this.characterSystem.celebrateAll(),this.score+=100*e,this.coins+=25*e;const s=this.getCurrentLevel().id;this.progress.stars[s]=Math.max(this.progress.stars[s]||0,e),this.currentLevelIndex>=this.progress.unlockedLevelIndex&&(this.progress.unlockedLevelIndex=Math.min(this.levels.length-1,this.currentLevelIndex+1)),this.saveProgress(),this.ui.updateHUD(this.getCurrentLevel(),this.score,e,this.coins),this.ui.showSuccessModal(e,t,n)}startRotiShopMode(){this.gameMode="shop",this.shopOrderIndex=0,this.ui.setGameMode("ROTI SHOP"),this.clearFoodScene(),this.resetCamera(),this.loadShopOrder(0)}loadShopOrder(e){this.shopOrderIndex=e%Rs.length;const t=Rs[this.shopOrderIndex];this.clearFoodScene(),this.setupPlates([t.customer]),this.setupStandardRotiFood({type:"sharing",initialPieces:1}),this.ui.showShopOrder(t),this.ui.showToast(`New Order from ${t.customer}: ${t.requestedFractionStr}!`,"📋"),this.updatePlateLabels()}validateShopOrder(){const e=Rs[this.shopOrderIndex],t=this.plates[0];if(!t)return;const s=this.rotiPieces.filter(r=>r.userData.plateAssigned===t).reduce((r,a)=>r+a.userData.fractionValue,0);Math.abs(s-e.requestedFractionVal)<.05?(this.ui.sound.playSuccess(),this.coins+=e.coinsReward,this.score+=150,this.saveProgress(),this.characterSystem.celebrateAll(),this.ui.showToast(`Order Complete! Earned +${e.coinsReward} Coins 🪙`,"🎉"),this.ui.updateCoins(this.coins),setTimeout(()=>this.loadShopOrder(this.shopOrderIndex+1),2200)):(this.ui.sound.playError(),this.ui.showToast(`Order requested ${e.requestedFractionStr}! Check your slices.`,"❌"),this.characterSystem.confuseAll())}startTimedChallenge(){this.gameMode="timed",this.timerSeconds=60,this.ui.setGameMode("TIMED RUSH"),this.startLevel(0),this.ui.showTimer(this.timerSeconds),this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.timerSeconds--,this.ui.updateTimer(this.timerSeconds),this.timerSeconds<=0&&(clearInterval(this.timerInterval),this.ui.showToast("Time's Up! Great effort!","⏱️"),this.ui.showMainMenu())},1e3)}startCreativeKitchen(){this.gameMode="creative",this.ui.setGameMode("CREATIVE"),this.ui.showCreativeFoodPicker(),this.setCreativeFood("roti")}setCreativeFood(e){this.creativeFoodType=e,this.clearFoodScene(),this.setupPlates(["Chintu","Meera","Golu"]),e==="laddoo"?this.setupLaddooFood({totalItems:6}):this.setupStandardRotiFood({type:"sharing",initialPieces:1}),this.ui.showToast(`Creative Kitchen: Switched to ${e.toUpperCase()}!`,"✨"),this.renderCuttingGuides(),this.updatePlateLabels()}resetCamera(){this.camera.position.copy(this.defaultCameraPos),this.controls.target.set(0,.45,0),this.controls.update()}initEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});const e=this.renderer.domElement;e.addEventListener("pointerdown",t=>this.onPointerDown(t)),e.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerup",t=>this.onPointerUp(t))}getPointerCoords(e){const t=this.canvas.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*2-1,y:-((e.clientY-t.top)/t.height)*2+1}}onPointerDown(e){if(this.isMenuOpen||this.isAutoDistributing)return;const t=this.getPointerCoords(e);if(this.mouse.set(t.x,t.y),this.pointerStartPos.set(e.clientX,e.clientY),this.isPointerDown=!0,this.raycaster.setFromCamera(this.mouse,this.camera),this.fractionTilesRack&&this.fractionTilesRack.tiles){const r=this.raycaster.intersectObjects(this.fractionTilesRack.tiles,!0);if(r.length>0){let a=r[0].object;for(;a&&(!a.userData||!a.userData.isFractionTile);)a=a.parent;if(a&&a.userData){const o=a.userData.fraction,l=a.userData.value;this.ui.sound.playClick(),this.ui.showFractionCallout(a.userData.fraction.split("/")[0]||1,a.userData.fraction.split("/")[1]||2,`Fraction Tile: ${o} (${l})`),this.ui.showToast(`Selected Tile: ${o}`,"🧩");return}}}const n=[...this.rotiPieces,...this.laddoos],s=this.raycaster.intersectObjects(n,!0);if(s.length>0){let r=s[0].object;for(;r.parent&&r.parent!==this.foodItemsGroup&&r.parent!==this.scene&&!(r.userData&&(r.userData.type==="roti-piece"||r.userData.type==="laddoo"));)r=r.parent;r&&r.userData&&r.userData.fractionValue&&(this.ui.showFractionCallout(r.userData.numerator||1,r.userData.denominator||this.rotiPieces.length,`${r.userData.numerator||1}/${r.userData.denominator||this.rotiPieces.length} Portion`),this.measuringTool&&this.measuringTool.visible&&(this.measuringTool.position.copy(r.position),this.measuringTool.updateMeasurement(r.userData.angleSpan||Math.PI,r.userData.fractionString||"1/2"))),this.ui.sound.playClick()}}onPointerMove(e){if(!this.isPointerDown||this.isAutoDistributing)return;const t=this.getPointerCoords(e);this.mouse.set(t.x,t.y)}onPointerUp(e){this.isPointerDown=!1}checkFoodDropTarget(e){let t=null,n=1.35;if(this.plates.forEach(s=>{const r=e.position.distanceTo(s.position);r<n&&(n=r,t=s)}),t){const r=this.rotiPieces.filter(c=>c.userData.plateAssigned===t&&c!==e).length;let a=new I(0,0,0),o=e.rotation.y;if(r===0)a.set(0,0,0);else if(r===1)a.set(.18,0,-.1),o+=.35;else if(r===2)a.set(-.16,0,.12),o-=.35;else{const c=r*1.05;a.set(Math.cos(c)*.22,0,Math.sin(c)*.22),o+=r*.4}e.position.set(t.position.x+a.x,.065,t.position.z+a.z),e.scale.set(.58,.58,.58),e.rotation.set(0,o,0),e.userData.plateAssigned=t,this.ui.sound.playDropPiece(),this.ui.showToast(`Placed piece on ${t.userData.label}!`,"🍽️");const l=t.userData.friendName?t.userData.friendName.toLowerCase():null;l&&this.characterSystem&&(this.characterSystem.setEmotion(l,"reaching"),setTimeout(()=>this.characterSystem.setEmotion(l,"eating"),1200))}else e.position.distanceTo(this.cuttingBoard.position)<1.6?(e.userData.plateAssigned=null,e.scale.set(1,1,1),e.position.y=.12,this.ui.sound.playDropPiece()):(e.position.copy(e.userData.originalPosition||new I(0,.12,0)),e.scale.set(1,1,1),e.userData.plateAssigned=null);this.updatePlateLabels(),this.updateBalanceScaleWeights()}animate(){requestAnimationFrame(this.animate);const e=this.clock.getDelta();if(this.isMenuOpen){const t=this.clock.getElapsedTime()*.22;this.camera.position.x=Math.sin(t)*5.4,this.camera.position.z=Math.cos(t)*5.4,this.camera.position.y=3.9+Math.sin(t*.5)*.35,this.camera.lookAt(0,.45,0)}else this.controls.update();this.balanceScale&&this.balanceScale.updateAnimation(e),this.characterSystem&&this.characterSystem.update(e),this.renderer.render(this.scene,this.camera)}}function rl(){if(!window.rotiGame)try{const i=new wg;window.rotiGame=i}catch(i){console.error("Failed to initialize RotiShareGame:",i)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rl):rl();
//# sourceMappingURL=index-n_7Jik1c.js.map
