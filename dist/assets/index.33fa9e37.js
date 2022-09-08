(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function yr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const gc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_c=yr(gc);function _o(t){return!!t||t===""}function br(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=le(s)?bc(s):br(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(le(t))return t;if(re(t))return t}}const vc=/;(?![^(]*\))/g,yc=/:(.+)/;function bc(t){const e={};return t.split(vc).forEach(n=>{if(n){const s=n.split(yc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wr(t){let e="";if(le(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=wr(t[n]);s&&(e+=s+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cg=t=>le(t)?t:t==null?"":$(t)||re(t)&&(t.toString===wo||!H(t.toString))?JSON.stringify(t,vo,2):String(t),vo=(t,e)=>e&&e.__v_isRef?vo(t,e.value):qt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:yo(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!$(e)&&!Io(e)?String(e):e,Z={},Wt=[],Ae=()=>{},wc=()=>!1,Ic=/^on[^a-z]/,_s=t=>Ic.test(t),Ir=t=>t.startsWith("onUpdate:"),me=Object.assign,Er=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ec=Object.prototype.hasOwnProperty,W=(t,e)=>Ec.call(t,e),$=Array.isArray,qt=t=>vs(t)==="[object Map]",yo=t=>vs(t)==="[object Set]",H=t=>typeof t=="function",le=t=>typeof t=="string",Tr=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",bo=t=>re(t)&&H(t.then)&&H(t.catch),wo=Object.prototype.toString,vs=t=>wo.call(t),Tc=t=>vs(t).slice(8,-1),Io=t=>vs(t)==="[object Object]",Rr=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zn=yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ys=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rc=/-(\w)/g,We=ys(t=>t.replace(Rc,(e,n)=>n?n.toUpperCase():"")),Sc=/\B([A-Z])/g,sn=ys(t=>t.replace(Sc,"-$1").toLowerCase()),bs=ys(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ds=ys(t=>t?`on${bs(t)}`:""),yn=(t,e)=>!Object.is(t,e),Kn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},rs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qr;const Cc=()=>Qr||(Qr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class kc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ue&&(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Ac(t,e=Ue){e&&e.active&&e.effects.push(t)}const Sr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Eo=t=>(t.w&gt)>0,To=t=>(t.n&gt)>0,Oc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gt},Pc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Eo(r)&&!To(r)?r.delete(t):e[n++]=r,r.w&=~gt,r.n&=~gt}e.length=n}},Ys=new WeakMap;let dn=0,gt=1;const Xs=30;let Se;const St=Symbol(""),Qs=Symbol("");class Cr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ac(this,s)}run(){if(!this.active)return this.fn();let e=Se,n=ht;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Se,Se=this,ht=!0,gt=1<<++dn,dn<=Xs?Oc(this):Zr(this),this.fn()}finally{dn<=Xs&&Pc(this),gt=1<<--dn,Se=this.parent,ht=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(Zr(this),this.onStop&&this.onStop(),this.active=!1)}}function Zr(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ht=!0;const Ro=[];function rn(){Ro.push(ht),ht=!1}function on(){const t=Ro.pop();ht=t===void 0?!0:t}function be(t,e,n){if(ht&&Se){let s=Ys.get(t);s||Ys.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Sr()),So(r)}}function So(t,e){let n=!1;dn<=Xs?To(t)||(t.n|=gt,n=!Eo(t)):n=!t.has(Se),n&&(t.add(Se),Se.deps.push(t))}function Qe(t,e,n,s,r,i){const o=Ys.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Rr(n)&&a.push(o.get("length")):(a.push(o.get(St)),qt(t)&&a.push(o.get(Qs)));break;case"delete":$(t)||(a.push(o.get(St)),qt(t)&&a.push(o.get(Qs)));break;case"set":qt(t)&&a.push(o.get(St));break}if(a.length===1)a[0]&&Zs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Zs(Sr(c))}}function Zs(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&ei(s);for(const s of n)s.computed||ei(s)}function ei(t,e){(t!==Se||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Nc=yr("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),xc=kr(),Mc=kr(!1,!0),Dc=kr(!0),ti=Lc();function Lc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=K(this);for(let i=0,o=this.length;i<o;i++)be(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rn();const s=K(this)[e].apply(this,n);return on(),s}}),t}function kr(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Qc:No:e?Po:Oo).get(s))return s;const o=$(s);if(!t&&o&&W(ti,r))return Reflect.get(ti,r,i);const a=Reflect.get(s,r,i);return(Tr(r)?Co.has(r):Nc(r))||(t||be(s,"get",r),e)?a:fe(a)?o&&Rr(r)?a:a.value:re(a)?t?xo(a):On(a):a}}const Uc=ko(),Fc=ko(!0);function ko(t=!1){return function(n,s,r,i){let o=n[s];if(Xt(o)&&fe(o)&&!fe(r))return!1;if(!t&&(!is(r)&&!Xt(r)&&(o=K(o),r=K(r)),!$(n)&&fe(o)&&!fe(r)))return o.value=r,!0;const a=$(n)&&Rr(s)?Number(s)<n.length:W(n,s),c=Reflect.set(n,s,r,i);return n===K(i)&&(a?yn(r,o)&&Qe(n,"set",s,r):Qe(n,"add",s,r)),c}}function Bc(t,e){const n=W(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qe(t,"delete",e,void 0),s}function $c(t,e){const n=Reflect.has(t,e);return(!Tr(e)||!Co.has(e))&&be(t,"has",e),n}function Hc(t){return be(t,"iterate",$(t)?"length":St),Reflect.ownKeys(t)}const Ao={get:xc,set:Uc,deleteProperty:Bc,has:$c,ownKeys:Hc},jc={get:Dc,set(t,e){return!0},deleteProperty(t,e){return!0}},Vc=me({},Ao,{get:Mc,set:Fc}),Ar=t=>t,ws=t=>Reflect.getPrototypeOf(t);function $n(t,e,n=!1,s=!1){t=t.__v_raw;const r=K(t),i=K(e);n||(e!==i&&be(r,"get",e),be(r,"get",i));const{has:o}=ws(r),a=s?Ar:n?Nr:bn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Hn(t,e=!1){const n=this.__v_raw,s=K(n),r=K(t);return e||(t!==r&&be(s,"has",t),be(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function jn(t,e=!1){return t=t.__v_raw,!e&&be(K(t),"iterate",St),Reflect.get(t,"size",t)}function ni(t){t=K(t);const e=K(this);return ws(e).has.call(e,t)||(e.add(t),Qe(e,"add",t,t)),this}function si(t,e){e=K(e);const n=K(this),{has:s,get:r}=ws(n);let i=s.call(n,t);i||(t=K(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?yn(e,o)&&Qe(n,"set",t,e):Qe(n,"add",t,e),this}function ri(t){const e=K(this),{has:n,get:s}=ws(e);let r=n.call(e,t);r||(t=K(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Qe(e,"delete",t,void 0),i}function ii(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Qe(t,"clear",void 0,void 0),n}function Vn(t,e){return function(s,r){const i=this,o=i.__v_raw,a=K(o),c=e?Ar:t?Nr:bn;return!t&&be(a,"iterate",St),o.forEach((l,f)=>s.call(r,c(l),c(f),i))}}function Wn(t,e,n){return function(...s){const r=this.__v_raw,i=K(r),o=qt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),f=n?Ar:e?Nr:bn;return!e&&be(i,"iterate",c?Qs:St),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return t==="delete"?!1:this}}function Wc(){const t={get(i){return $n(this,i)},get size(){return jn(this)},has:Hn,add:ni,set:si,delete:ri,clear:ii,forEach:Vn(!1,!1)},e={get(i){return $n(this,i,!1,!0)},get size(){return jn(this)},has:Hn,add:ni,set:si,delete:ri,clear:ii,forEach:Vn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Vn(!0,!1)},s={get(i){return $n(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wn(i,!1,!1),n[i]=Wn(i,!0,!1),e[i]=Wn(i,!1,!0),s[i]=Wn(i,!0,!0)}),[t,n,e,s]}const[qc,zc,Kc,Gc]=Wc();function Or(t,e){const n=e?t?Gc:Kc:t?zc:qc;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(W(n,r)&&r in s?n:s,r,i)}const Jc={get:Or(!1,!1)},Yc={get:Or(!1,!0)},Xc={get:Or(!0,!1)},Oo=new WeakMap,Po=new WeakMap,No=new WeakMap,Qc=new WeakMap;function Zc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function el(t){return t.__v_skip||!Object.isExtensible(t)?0:Zc(Tc(t))}function On(t){return Xt(t)?t:Pr(t,!1,Ao,Jc,Oo)}function tl(t){return Pr(t,!1,Vc,Yc,Po)}function xo(t){return Pr(t,!0,jc,Xc,No)}function Pr(t,e,n,s,r){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=el(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function zt(t){return Xt(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function is(t){return!!(t&&t.__v_isShallow)}function Mo(t){return zt(t)||Xt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Do(t){return rs(t,"__v_skip",!0),t}const bn=t=>re(t)?On(t):t,Nr=t=>re(t)?xo(t):t;function Lo(t){ht&&Se&&(t=K(t),So(t.dep||(t.dep=Sr())))}function Uo(t,e){t=K(t),t.dep&&Zs(t.dep)}function fe(t){return!!(t&&t.__v_isRef===!0)}function Fo(t){return Bo(t,!1)}function nl(t){return Bo(t,!0)}function Bo(t,e){return fe(t)?t:new sl(t,e)}class sl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:bn(e)}get value(){return Lo(this),this._value}set value(e){const n=this.__v_isShallow||is(e)||Xt(e);e=n?e:K(e),yn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:bn(e),Uo(this))}}function Ct(t){return fe(t)?t.value:t}const rl={get:(t,e,n)=>Ct(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return fe(r)&&!fe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function $o(t){return zt(t)?t:new Proxy(t,rl)}var Ho;class il{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ho]=!1,this._dirty=!0,this.effect=new Cr(e,()=>{this._dirty||(this._dirty=!0,Uo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=K(this);return Lo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ho="__v_isReadonly";function ol(t,e,n=!1){let s,r;const i=H(t);return i?(s=t,r=Ae):(s=t.get,r=t.set),new il(s,r,i||!r,n)}function pt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Is(i,e,n)}return r}function Oe(t,e,n,s){if(H(t)){const i=pt(t,e,n,s);return i&&bo(i)&&i.catch(o=>{Is(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Oe(t[i],e,n,s));return r}function Is(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){pt(c,null,10,[t,o,a]);return}}al(t,n,r,s)}function al(t,e,n,s=!0){console.error(t)}let os=!1,er=!1;const ue=[];let He=0;const Kt=[];let Ge=null,Et=0;const jo=Promise.resolve();let xr=null;function Vo(t){const e=xr||jo;return t?e.then(this?t.bind(this):t):e}function cl(t){let e=He+1,n=ue.length;for(;e<n;){const s=e+n>>>1;wn(ue[s])<t?e=s+1:n=s}return e}function Mr(t){(!ue.length||!ue.includes(t,os&&t.allowRecurse?He+1:He))&&(t.id==null?ue.push(t):ue.splice(cl(t.id),0,t),Wo())}function Wo(){!os&&!er&&(er=!0,xr=jo.then(zo))}function ll(t){const e=ue.indexOf(t);e>He&&ue.splice(e,1)}function ul(t){$(t)?Kt.push(...t):(!Ge||!Ge.includes(t,t.allowRecurse?Et+1:Et))&&Kt.push(t),Wo()}function oi(t,e=He){for(;e<ue.length;e++){const n=ue[e];n&&n.pre&&(ue.splice(e,1),e--,n())}}function qo(t){if(Kt.length){const e=[...new Set(Kt)];if(Kt.length=0,Ge){Ge.push(...e);return}for(Ge=e,Ge.sort((n,s)=>wn(n)-wn(s)),Et=0;Et<Ge.length;Et++)Ge[Et]();Ge=null,Et=0}}const wn=t=>t.id==null?1/0:t.id,fl=(t,e)=>{const n=wn(t)-wn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zo(t){er=!1,os=!0,ue.sort(fl);const e=Ae;try{for(He=0;He<ue.length;He++){const n=ue[He];n&&n.active!==!1&&pt(n,null,14)}}finally{He=0,ue.length=0,qo(),os=!1,xr=null,(ue.length||Kt.length)&&zo()}}function dl(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Z;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[f]||Z;p&&(r=n.map(_=>_.trim())),h&&(r=n.map(Js))}let a,c=s[a=Ds(e)]||s[a=Ds(We(e))];!c&&i&&(c=s[a=Ds(sn(e))]),c&&Oe(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Oe(l,t,6,r)}}function Ko(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const f=Ko(l,e,!0);f&&(a=!0,me(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(re(t)&&s.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):me(o,i),re(t)&&s.set(t,o),o)}function Es(t,e){return!t||!_s(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,sn(e))||W(t,e))}let Ce=null,Ts=null;function as(t){const e=Ce;return Ce=t,Ts=t&&t.type.__scopeId||null,e}function lg(t){Ts=t}function ug(){Ts=null}function Go(t,e=Ce,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&_i(-1);const i=as(e),o=t(...r);return as(i),s._d&&_i(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ls(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:_,ctx:C,inheritAttrs:F}=t;let A,k;const L=as(t);try{if(n.shapeFlag&4){const z=r||s;A=$e(f.call(z,z,h,i,_,p,C)),k=c}else{const z=e;A=$e(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),k=e.props?c:hl(c)}}catch(z){mn.length=0,Is(z,t,1),A=pe(Ot)}let V=A;if(k&&F!==!1){const z=Object.keys(k),{shapeFlag:oe}=V;z.length&&oe&7&&(o&&z.some(Ir)&&(k=pl(k,o)),V=Qt(V,k))}return n.dirs&&(V=Qt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),A=V,as(L),A}const hl=t=>{let e;for(const n in t)(n==="class"||n==="style"||_s(n))&&((e||(e={}))[n]=t[n]);return e},pl=(t,e)=>{const n={};for(const s in t)(!Ir(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ml(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ai(s,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Es(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ai(s,o,l):!0:!!o;return!1}function ai(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Es(n,i))return!0}return!1}function gl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _l=t=>t.__isSuspense;function vl(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):ul(t)}function Gn(t,e){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[t]=e}}function Xe(t,e,n=!1){const s=ce||Ce;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const ci={};function Jn(t,e,n){return Jo(t,e,n)}function Jo(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Z){const a=ce;let c,l=!1,f=!1;if(fe(t)?(c=()=>t.value,l=is(t)):zt(t)?(c=()=>t,s=!0):$(t)?(f=!0,l=t.some(k=>zt(k)||is(k)),c=()=>t.map(k=>{if(fe(k))return k.value;if(zt(k))return Rt(k);if(H(k))return pt(k,a,2)})):H(t)?e?c=()=>pt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Oe(t,a,3,[p])}:c=Ae,e&&s){const k=c;c=()=>Rt(k())}let h,p=k=>{h=A.onStop=()=>{pt(k,a,4)}};if(En)return p=Ae,e?n&&Oe(e,a,3,[c(),f?[]:void 0,p]):c(),Ae;let _=f?[]:ci;const C=()=>{if(!!A.active)if(e){const k=A.run();(s||l||(f?k.some((L,V)=>yn(L,_[V])):yn(k,_)))&&(h&&h(),Oe(e,a,3,[k,_===ci?void 0:_,p]),_=k)}else A.run()};C.allowRecurse=!!e;let F;r==="sync"?F=C:r==="post"?F=()=>_e(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),F=()=>Mr(C));const A=new Cr(c,F);return e?n?C():_=A.run():r==="post"?_e(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Er(a.scope.effects,A)}}function yl(t,e,n){const s=this.proxy,r=le(t)?t.includes(".")?Yo(s,t):()=>s[t]:t.bind(s,s);let i;H(e)?i=e:(i=e.handler,n=e);const o=ce;Zt(this);const a=Jo(r,i.bind(s),n);return o?Zt(o):kt(),a}function Yo(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Rt(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),fe(t))Rt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Rt(t[n],e);else if(yo(t)||qt(t))t.forEach(n=>{Rt(n,e)});else if(Io(t))for(const n in t)Rt(t[n],e);return t}function Xo(t){return H(t)?{setup:t,name:t.name}:t}const Yn=t=>!!t.type.__asyncLoader,Qo=t=>t.type.__isKeepAlive;function bl(t,e){Zo(t,"a",e)}function wl(t,e){Zo(t,"da",e)}function Zo(t,e,n=ce){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Rs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Qo(r.parent.vnode)&&Il(s,e,n,r),r=r.parent}}function Il(t,e,n,s){const r=Rs(e,t,s,!0);ea(()=>{Er(s[e],r)},n)}function Rs(t,e,n=ce,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rn(),Zt(n);const a=Oe(e,n,t,o);return kt(),on(),a});return s?r.unshift(i):r.push(i),i}}const et=t=>(e,n=ce)=>(!En||t==="sp")&&Rs(t,e,n),El=et("bm"),Tl=et("m"),Rl=et("bu"),Sl=et("u"),Cl=et("bum"),ea=et("um"),kl=et("sp"),Al=et("rtg"),Ol=et("rtc");function Pl(t,e=ce){Rs("ec",t,e)}function li(t,e){const n=Ce;if(n===null)return t;const s=Cs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&Rt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function vt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(rn(),Oe(c,n,8,[t.el,a,t,e]),on())}}const ta="components";function Nl(t,e){return Ml(ta,t,!0,e)||t}const xl=Symbol();function Ml(t,e,n=!0,s=!1){const r=Ce||ce;if(r){const i=r.type;if(t===ta){const a=lu(i,!1);if(a&&(a===e||a===We(e)||a===bs(We(e))))return i}const o=ui(r[t]||i[t],e)||ui(r.appContext[t],e);return!o&&s?i:o}}function ui(t,e){return t&&(t[e]||t[We(e)]||t[bs(We(e))])}const tr=t=>t?ma(t)?Cs(t)||t.proxy:tr(t.parent):null,cs=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tr(t.parent),$root:t=>tr(t.root),$emit:t=>t.emit,$options:t=>sa(t),$forceUpdate:t=>t.f||(t.f=()=>Mr(t.update)),$nextTick:t=>t.n||(t.n=Vo.bind(t.proxy)),$watch:t=>yl.bind(t)}),Dl={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Z&&W(s,e))return o[e]=1,s[e];if(r!==Z&&W(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Z&&W(n,e))return o[e]=4,n[e];nr&&(o[e]=0)}}const f=cs[e];let h,p;if(f)return e==="$attrs"&&be(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Z&&W(r,e)?(r[e]=n,!0):s!==Z&&W(s,e)?(s[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&W(t,o)||e!==Z&&W(e,o)||(a=i[0])&&W(a,o)||W(s,o)||W(cs,o)||W(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let nr=!0;function Ll(t){const e=sa(t),n=t.proxy,s=t.ctx;nr=!1,e.beforeCreate&&fi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:C,activated:F,deactivated:A,beforeDestroy:k,beforeUnmount:L,destroyed:V,unmounted:z,render:oe,renderTracked:ae,renderTriggered:we,errorCaptured:nt,serverPrefetch:ge,expose:xe,inheritAttrs:qe,components:Te,directives:Dt,filters:Lt}=e;if(l&&Ul(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const Y=o[ee];H(Y)&&(s[ee]=Y.bind(n))}if(r){const ee=r.call(n,n);re(ee)&&(t.data=On(ee))}if(nr=!0,i)for(const ee in i){const Y=i[ee],ve=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):Ae,Ft=!H(Y)&&H(Y.set)?Y.set.bind(n):Ae,ze=Ee({get:ve,set:Ft});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Me=>ze.value=Me})}if(a)for(const ee in a)na(a[ee],s,n,ee);if(c){const ee=H(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(Y=>{Gn(Y,ee[Y])})}f&&fi(f,t,"c");function ie(ee,Y){$(Y)?Y.forEach(ve=>ee(ve.bind(n))):Y&&ee(Y.bind(n))}if(ie(El,h),ie(Tl,p),ie(Rl,_),ie(Sl,C),ie(bl,F),ie(wl,A),ie(Pl,nt),ie(Ol,ae),ie(Al,we),ie(Cl,L),ie(ea,z),ie(kl,ge),$(xe))if(xe.length){const ee=t.exposed||(t.exposed={});xe.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:ve=>n[Y]=ve})})}else t.exposed||(t.exposed={});oe&&t.render===Ae&&(t.render=oe),qe!=null&&(t.inheritAttrs=qe),Te&&(t.components=Te),Dt&&(t.directives=Dt)}function Ul(t,e,n=Ae,s=!1){$(t)&&(t=sr(t));for(const r in t){const i=t[r];let o;re(i)?"default"in i?o=Xe(i.from||r,i.default,!0):o=Xe(i.from||r):o=Xe(i),fe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function fi(t,e,n){Oe($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function na(t,e,n,s){const r=s.includes(".")?Yo(n,s):()=>n[s];if(le(t)){const i=e[t];H(i)&&Jn(r,i)}else if(H(t))Jn(r,t.bind(n));else if(re(t))if($(t))t.forEach(i=>na(i,e,n,s));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Jn(r,i,t)}}function sa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>ls(c,l,o,!0)),ls(c,e,o)),re(e)&&i.set(e,c),c}function ls(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ls(t,i,n,!0),r&&r.forEach(o=>ls(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Fl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fl={data:di,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:wt,directives:wt,watch:$l,provide:di,inject:Bl};function di(t,e){return e?t?function(){return me(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Bl(t,e){return wt(sr(t),sr(e))}function sr(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function wt(t,e){return t?me(me(Object.create(null),t),e):e}function $l(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const s in e)n[s]=he(t[s],e[s]);return n}function Hl(t,e,n,s=!1){const r={},i={};rs(i,Ss,1),t.propsDefaults=Object.create(null),ra(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:tl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function jl(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=K(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Es(t.emitsOptions,p))continue;const _=e[p];if(c)if(W(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const C=We(p);r[C]=rr(c,a,C,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{ra(t,e,r,i)&&(l=!0);let f;for(const h in a)(!e||!W(e,h)&&((f=sn(h))===h||!W(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=rr(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&Qe(t,"set","$attrs")}function ra(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(zn(c))continue;const l=e[c];let f;r&&W(r,f=We(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Es(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=K(n),l=a||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=rr(r,c,h,l[h],t,!W(l,h))}}return o}function rr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Zt(r),s=l[n]=c.call(null,e),kt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===sn(n))&&(s=!0))}return s}function ia(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const f=h=>{c=!0;const[p,_]=ia(h,e,!0);me(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return re(t)&&s.set(t,Wt),Wt;if($(i))for(let f=0;f<i.length;f++){const h=We(i[f]);hi(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=We(f);if(hi(h)){const p=i[f],_=o[h]=$(p)||H(p)?{type:p}:p;if(_){const C=gi(Boolean,_.type),F=gi(String,_.type);_[0]=C>-1,_[1]=F<0||C<F,(C>-1||W(_,"default"))&&a.push(h)}}}const l=[o,a];return re(t)&&s.set(t,l),l}function hi(t){return t[0]!=="$"}function pi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function mi(t,e){return pi(t)===pi(e)}function gi(t,e){return $(e)?e.findIndex(n=>mi(n,t)):H(e)&&mi(e,t)?0:-1}const oa=t=>t[0]==="_"||t==="$stable",Dr=t=>$(t)?t.map($e):[$e(t)],Vl=(t,e,n)=>{if(e._n)return e;const s=Go((...r)=>Dr(e(...r)),n);return s._c=!1,s},aa=(t,e,n)=>{const s=t._ctx;for(const r in t){if(oa(r))continue;const i=t[r];if(H(i))e[r]=Vl(r,i,s);else if(i!=null){const o=Dr(i);e[r]=()=>o}}},ca=(t,e)=>{const n=Dr(e);t.slots.default=()=>n},Wl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),rs(e,"_",n)):aa(e,t.slots={})}else t.slots={},e&&ca(t,e);rs(t.slots,Ss,1)},ql=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Z;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(me(r,e),!n&&a===1&&delete r._):(i=!e.$stable,aa(e,r)),o=e}else e&&(ca(t,e),o={default:1});if(i)for(const a in r)!oa(a)&&!(a in o)&&delete r[a]};function la(){return{app:null,config:{isNativeTag:wc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Kl(t,e){return function(s,r=null){H(s)||(s=Object.assign({},s)),r!=null&&!re(r)&&(r=null);const i=la(),o=new Set;let a=!1;const c=i.app={_uid:zl++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:fu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...f)):H(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=pe(s,r);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Cs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function ir(t,e,n,s,r=!1){if($(t)){t.forEach((p,_)=>ir(p,e&&($(e)?e[_]:e),n,s,r));return}if(Yn(s)&&!r)return;const i=s.shapeFlag&4?Cs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(le(l)?(f[l]=null,W(h,l)&&(h[l]=null)):fe(l)&&(l.value=null)),H(c))pt(c,a,12,[o,f]);else{const p=le(c),_=fe(c);if(p||_){const C=()=>{if(t.f){const F=p?f[c]:c.value;r?$(F)&&Er(F,i):$(F)?F.includes(i)||F.push(i):p?(f[c]=[i],W(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,W(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,_e(C,n)):C()}}}const _e=vl;function Gl(t){return Jl(t)}function Jl(t,e){const n=Cc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=Ae,cloneNode:C,insertStaticContent:F}=t,A=(u,d,m,y=null,v=null,I=null,S=!1,w=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!un(u,d)&&(y=N(u),Ie(u,v,I,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:x,shapeFlag:O}=d;switch(b){case Lr:k(u,d,m,y);break;case Ot:L(u,d,m,y);break;case Xn:u==null&&V(d,m,y,S);break;case Be:Dt(u,d,m,y,v,I,S,w,E);break;default:O&1?ae(u,d,m,y,v,I,S,w,E):O&6?Lt(u,d,m,y,v,I,S,w,E):(O&64||O&128)&&b.process(u,d,m,y,v,I,S,w,E,te)}x!=null&&v&&ir(x,u&&u.ref,I,d||u,!d)},k=(u,d,m,y)=>{if(u==null)s(d.el=a(d.children),m,y);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},L=(u,d,m,y)=>{u==null?s(d.el=c(d.children||""),m,y):d.el=u.el},V=(u,d,m,y)=>{[u.el,u.anchor]=F(u.children,d,m,y,u.el,u.anchor)},z=({el:u,anchor:d},m,y)=>{let v;for(;u&&u!==d;)v=p(u),s(u,m,y),u=v;s(d,m,y)},oe=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=p(u),r(u),u=m;r(d)},ae=(u,d,m,y,v,I,S,w,E)=>{S=S||d.type==="svg",u==null?we(d,m,y,v,I,S,w,E):xe(u,d,v,I,S,w,E)},we=(u,d,m,y,v,I,S,w)=>{let E,b;const{type:x,props:O,shapeFlag:M,transition:U,patchFlag:q,dirs:X}=u;if(u.el&&C!==void 0&&q===-1)E=u.el=C(u.el);else{if(E=u.el=o(u.type,I,O&&O.is,O),M&8?f(E,u.children):M&16&&ge(u.children,E,null,y,v,I&&x!=="foreignObject",S,w),X&&vt(u,null,y,"created"),O){for(const se in O)se!=="value"&&!zn(se)&&i(E,se,null,O[se],I,u.children,y,v,T);"value"in O&&i(E,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Le(b,y,u)}nt(E,u,u.scopeId,S,y)}X&&vt(u,null,y,"beforeMount");const Q=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;Q&&U.beforeEnter(E),s(E,d,m),((b=O&&O.onVnodeMounted)||Q||X)&&_e(()=>{b&&Le(b,y,u),Q&&U.enter(E),X&&vt(u,null,y,"mounted")},v)},nt=(u,d,m,y,v)=>{if(m&&_(u,m),y)for(let I=0;I<y.length;I++)_(u,y[I]);if(v){let I=v.subTree;if(d===I){const S=v.vnode;nt(u,S,S.scopeId,S.slotScopeIds,v.parent)}}},ge=(u,d,m,y,v,I,S,w,E=0)=>{for(let b=E;b<u.length;b++){const x=u[b]=w?at(u[b]):$e(u[b]);A(null,x,d,m,y,v,I,S,w)}},xe=(u,d,m,y,v,I,S)=>{const w=d.el=u.el;let{patchFlag:E,dynamicChildren:b,dirs:x}=d;E|=u.patchFlag&16;const O=u.props||Z,M=d.props||Z;let U;m&&yt(m,!1),(U=M.onVnodeBeforeUpdate)&&Le(U,m,d,u),x&&vt(d,u,m,"beforeUpdate"),m&&yt(m,!0);const q=v&&d.type!=="foreignObject";if(b?qe(u.dynamicChildren,b,w,m,y,q,I):S||ve(u,d,w,null,m,y,q,I,!1),E>0){if(E&16)Te(w,d,O,M,m,y,v);else if(E&2&&O.class!==M.class&&i(w,"class",null,M.class,v),E&4&&i(w,"style",O.style,M.style,v),E&8){const X=d.dynamicProps;for(let Q=0;Q<X.length;Q++){const se=X[Q],Re=O[se],Bt=M[se];(Bt!==Re||se==="value")&&i(w,se,Re,Bt,v,u.children,m,y,T)}}E&1&&u.children!==d.children&&f(w,d.children)}else!S&&b==null&&Te(w,d,O,M,m,y,v);((U=M.onVnodeUpdated)||x)&&_e(()=>{U&&Le(U,m,d,u),x&&vt(d,u,m,"updated")},y)},qe=(u,d,m,y,v,I,S)=>{for(let w=0;w<d.length;w++){const E=u[w],b=d[w],x=E.el&&(E.type===Be||!un(E,b)||E.shapeFlag&70)?h(E.el):m;A(E,b,x,null,y,v,I,S,!0)}},Te=(u,d,m,y,v,I,S)=>{if(m!==y){for(const w in y){if(zn(w))continue;const E=y[w],b=m[w];E!==b&&w!=="value"&&i(u,w,b,E,S,d.children,v,I,T)}if(m!==Z)for(const w in m)!zn(w)&&!(w in y)&&i(u,w,m[w],null,S,d.children,v,I,T);"value"in y&&i(u,"value",m.value,y.value)}},Dt=(u,d,m,y,v,I,S,w,E)=>{const b=d.el=u?u.el:a(""),x=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:U}=d;U&&(w=w?w.concat(U):U),u==null?(s(b,m,y),s(x,m,y),ge(d.children,m,x,v,I,S,w,E)):O>0&&O&64&&M&&u.dynamicChildren?(qe(u.dynamicChildren,M,m,v,I,S,w),(d.key!=null||v&&d===v.subTree)&&ua(u,d,!0)):ve(u,d,m,x,v,I,S,w,E)},Lt=(u,d,m,y,v,I,S,w,E)=>{d.slotScopeIds=w,u==null?d.shapeFlag&512?v.ctx.activate(d,m,y,S,E):Ut(d,m,y,v,I,S,E):ie(u,d,E)},Ut=(u,d,m,y,v,I,S)=>{const w=u.component=ru(u,y,v);if(Qo(u)&&(w.ctx.renderer=te),iu(w),w.asyncDep){if(v&&v.registerDep(w,ee),!u.el){const E=w.subTree=pe(Ot);L(null,E,d,m)}return}ee(w,u,d,m,v,I,S)},ie=(u,d,m)=>{const y=d.component=u.component;if(ml(u,d,m))if(y.asyncDep&&!y.asyncResolved){Y(y,d,m);return}else y.next=d,ll(y.update),y.update();else d.el=u.el,y.vnode=d},ee=(u,d,m,y,v,I,S)=>{const w=()=>{if(u.isMounted){let{next:x,bu:O,u:M,parent:U,vnode:q}=u,X=x,Q;yt(u,!1),x?(x.el=q.el,Y(u,x,S)):x=q,O&&Kn(O),(Q=x.props&&x.props.onVnodeBeforeUpdate)&&Le(Q,U,x,q),yt(u,!0);const se=Ls(u),Re=u.subTree;u.subTree=se,A(Re,se,h(Re.el),N(Re),u,v,I),x.el=se.el,X===null&&gl(u,se.el),M&&_e(M,v),(Q=x.props&&x.props.onVnodeUpdated)&&_e(()=>Le(Q,U,x,q),v)}else{let x;const{el:O,props:M}=d,{bm:U,m:q,parent:X}=u,Q=Yn(d);if(yt(u,!1),U&&Kn(U),!Q&&(x=M&&M.onVnodeBeforeMount)&&Le(x,X,d),yt(u,!0),O&&B){const se=()=>{u.subTree=Ls(u),B(O,u.subTree,u,v,null)};Q?d.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=Ls(u);A(null,se,m,y,u,v,I),d.el=se.el}if(q&&_e(q,v),!Q&&(x=M&&M.onVnodeMounted)){const se=d;_e(()=>Le(x,X,se),v)}(d.shapeFlag&256||X&&Yn(X.vnode)&&X.vnode.shapeFlag&256)&&u.a&&_e(u.a,v),u.isMounted=!0,d=m=y=null}},E=u.effect=new Cr(w,()=>Mr(b),u.scope),b=u.update=()=>E.run();b.id=u.uid,yt(u,!0),b()},Y=(u,d,m)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,jl(u,d.props,y,m),ql(u,d.children,m),rn(),oi(),on()},ve=(u,d,m,y,v,I,S,w,E=!1)=>{const b=u&&u.children,x=u?u.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){ze(b,O,m,y,v,I,S,w,E);return}else if(M&256){Ft(b,O,m,y,v,I,S,w,E);return}}U&8?(x&16&&T(b,v,I),O!==b&&f(m,O)):x&16?U&16?ze(b,O,m,y,v,I,S,w,E):T(b,v,I,!0):(x&8&&f(m,""),U&16&&ge(O,m,y,v,I,S,w,E))},Ft=(u,d,m,y,v,I,S,w,E)=>{u=u||Wt,d=d||Wt;const b=u.length,x=d.length,O=Math.min(b,x);let M;for(M=0;M<O;M++){const U=d[M]=E?at(d[M]):$e(d[M]);A(u[M],U,m,null,v,I,S,w,E)}b>x?T(u,v,I,!0,!1,O):ge(d,m,y,v,I,S,w,E,O)},ze=(u,d,m,y,v,I,S,w,E)=>{let b=0;const x=d.length;let O=u.length-1,M=x-1;for(;b<=O&&b<=M;){const U=u[b],q=d[b]=E?at(d[b]):$e(d[b]);if(un(U,q))A(U,q,m,null,v,I,S,w,E);else break;b++}for(;b<=O&&b<=M;){const U=u[O],q=d[M]=E?at(d[M]):$e(d[M]);if(un(U,q))A(U,q,m,null,v,I,S,w,E);else break;O--,M--}if(b>O){if(b<=M){const U=M+1,q=U<x?d[U].el:y;for(;b<=M;)A(null,d[b]=E?at(d[b]):$e(d[b]),m,q,v,I,S,w,E),b++}}else if(b>M)for(;b<=O;)Ie(u[b],v,I,!0),b++;else{const U=b,q=b,X=new Map;for(b=q;b<=M;b++){const ye=d[b]=E?at(d[b]):$e(d[b]);ye.key!=null&&X.set(ye.key,b)}let Q,se=0;const Re=M-q+1;let Bt=!1,Jr=0;const ln=new Array(Re);for(b=0;b<Re;b++)ln[b]=0;for(b=U;b<=O;b++){const ye=u[b];if(se>=Re){Ie(ye,v,I,!0);continue}let De;if(ye.key!=null)De=X.get(ye.key);else for(Q=q;Q<=M;Q++)if(ln[Q-q]===0&&un(ye,d[Q])){De=Q;break}De===void 0?Ie(ye,v,I,!0):(ln[De-q]=b+1,De>=Jr?Jr=De:Bt=!0,A(ye,d[De],m,null,v,I,S,w,E),se++)}const Yr=Bt?Yl(ln):Wt;for(Q=Yr.length-1,b=Re-1;b>=0;b--){const ye=q+b,De=d[ye],Xr=ye+1<x?d[ye+1].el:y;ln[b]===0?A(null,De,m,Xr,v,I,S,w,E):Bt&&(Q<0||b!==Yr[Q]?Me(De,m,Xr,2):Q--)}}},Me=(u,d,m,y,v=null)=>{const{el:I,type:S,transition:w,children:E,shapeFlag:b}=u;if(b&6){Me(u.component.subTree,d,m,y);return}if(b&128){u.suspense.move(d,m,y);return}if(b&64){S.move(u,d,m,te);return}if(S===Be){s(I,d,m);for(let O=0;O<E.length;O++)Me(E[O],d,m,y);s(u.anchor,d,m);return}if(S===Xn){z(u,d,m);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(I),s(I,d,m),_e(()=>w.enter(I),v);else{const{leave:O,delayLeave:M,afterLeave:U}=w,q=()=>s(I,d,m),X=()=>{O(I,()=>{q(),U&&U()})};M?M(I,q,X):X()}else s(I,d,m)},Ie=(u,d,m,y=!1,v=!1)=>{const{type:I,props:S,ref:w,children:E,dynamicChildren:b,shapeFlag:x,patchFlag:O,dirs:M}=u;if(w!=null&&ir(w,null,m,u,!0),x&256){d.ctx.deactivate(u);return}const U=x&1&&M,q=!Yn(u);let X;if(q&&(X=S&&S.onVnodeBeforeUnmount)&&Le(X,d,u),x&6)P(u.component,m,y);else{if(x&128){u.suspense.unmount(m,y);return}U&&vt(u,null,d,"beforeUnmount"),x&64?u.type.remove(u,d,m,v,te,y):b&&(I!==Be||O>0&&O&64)?T(b,d,m,!1,!0):(I===Be&&O&384||!v&&x&16)&&T(E,d,m),y&&cn(u)}(q&&(X=S&&S.onVnodeUnmounted)||U)&&_e(()=>{X&&Le(X,d,u),U&&vt(u,null,d,"unmounted")},m)},cn=u=>{const{type:d,el:m,anchor:y,transition:v}=u;if(d===Be){g(m,y);return}if(d===Xn){oe(u);return}const I=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:w}=v,E=()=>S(m,I);w?w(u.el,I,E):E()}else I()},g=(u,d)=>{let m;for(;u!==d;)m=p(u),r(u),u=m;r(d)},P=(u,d,m)=>{const{bum:y,scope:v,update:I,subTree:S,um:w}=u;y&&Kn(y),v.stop(),I&&(I.active=!1,Ie(S,u,d,m)),w&&_e(w,d),_e(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,m,y=!1,v=!1,I=0)=>{for(let S=I;S<u.length;S++)Ie(u[S],d,m,y,v)},N=u=>u.shapeFlag&6?N(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,d,m)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,m),oi(),qo(),d._vnode=u},te={p:A,um:Ie,m:Me,r:cn,mt:Ut,mc:ge,pc:ve,pbc:qe,n:N,o:t};let j,B;return e&&([j,B]=e(te)),{render:G,hydrate:j,createApp:Kl(G,j)}}function yt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ua(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=at(r[i]),a.el=o.el),n||ua(o,a))}}function Yl(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Xl=t=>t.__isTeleport,Be=Symbol(void 0),Lr=Symbol(void 0),Ot=Symbol(void 0),Xn=Symbol(void 0),mn=[];let ke=null;function Fe(t=!1){mn.push(ke=t?null:[])}function Ql(){mn.pop(),ke=mn[mn.length-1]||null}let In=1;function _i(t){In+=t}function fa(t){return t.dynamicChildren=In>0?ke||Wt:null,Ql(),In>0&&ke&&ke.push(t),t}function rt(t,e,n,s,r,i){return fa(R(t,e,n,s,r,i,!0))}function da(t,e,n,s,r){return fa(pe(t,e,n,s,r,!0))}function or(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const Ss="__vInternal",ha=({key:t})=>t!=null?t:null,Qn=({ref:t,ref_key:e,ref_for:n})=>t!=null?le(t)||fe(t)||H(t)?{i:Ce,r:t,k:e,f:!!n}:t:null;function R(t,e=null,n=null,s=0,r=null,i=t===Be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ha(e),ref:e&&Qn(e),scopeId:Ts,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ur(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),In>0&&!o&&ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ke.push(c),c}const pe=Zl;function Zl(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===xl)&&(t=Ot),or(t)){const a=Qt(t,e,!0);return n&&Ur(a,n),In>0&&!i&&ke&&(a.shapeFlag&6?ke[ke.indexOf(t)]=a:ke.push(a)),a.patchFlag|=-2,a}if(uu(t)&&(t=t.__vccOpts),e){e=eu(e);let{class:a,style:c}=e;a&&!le(a)&&(e.class=wr(a)),re(c)&&(Mo(c)&&!$(c)&&(c=me({},c)),e.style=br(c))}const o=le(t)?1:_l(t)?128:Xl(t)?64:re(t)?4:H(t)?2:0;return R(t,e,n,s,r,o,i,!0)}function eu(t){return t?Mo(t)||Ss in t?me({},t):t:null}function Qt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?tu(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ha(a),ref:e&&e.ref?n&&r?$(r)?r.concat(Qn(e)):[r,Qn(e)]:Qn(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor}}function tt(t=" ",e=0){return pe(Lr,null,t,e)}function pa(t,e){const n=pe(Xn,null,t);return n.staticCount=e,n}function bt(t="",e=!1){return e?(Fe(),da(Ot,null,t)):pe(Ot,null,t)}function $e(t){return t==null||typeof t=="boolean"?pe(Ot):$(t)?pe(Be,null,t.slice()):typeof t=="object"?at(t):pe(Lr,null,String(t))}function at(t){return t.el===null||t.memo?t:Qt(t)}function Ur(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ur(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ss in e)?e._ctx=Ce:r===3&&Ce&&(Ce.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ce},n=32):(e=String(e),s&64?(n=16,e=[tt(e)]):n=8);t.children=e,t.shapeFlag|=n}function tu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=wr([e.class,s.class]));else if(r==="style")e.style=br([e.style,s.style]);else if(_s(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Le(t,e,n,s=null){Oe(t,e,7,[n,s])}const nu=la();let su=0;function ru(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||nu,i={uid:su++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new kc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ia(s,r),emitsOptions:Ko(s,r),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dl.bind(null,i),t.ce&&t.ce(i),i}let ce=null;const Zt=t=>{ce=t,t.scope.on()},kt=()=>{ce&&ce.scope.off(),ce=null};function ma(t){return t.vnode.shapeFlag&4}let En=!1;function iu(t,e=!1){En=e;const{props:n,children:s}=t.vnode,r=ma(t);Hl(t,n,r,e),Wl(t,s);const i=r?ou(t,e):void 0;return En=!1,i}function ou(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Do(new Proxy(t.ctx,Dl));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?cu(t):null;Zt(t),rn();const i=pt(s,t,0,[t.props,r]);if(on(),kt(),bo(i)){if(i.then(kt,kt),e)return i.then(o=>{vi(t,o,e)}).catch(o=>{Is(o,t,0)});t.asyncDep=i}else vi(t,i,e)}else ga(t,e)}function vi(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=$o(e)),ga(t,n)}let yi;function ga(t,e,n){const s=t.type;if(!t.render){if(!e&&yi&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=me(me({isCustomElement:i,delimiters:a},o),c);s.render=yi(r,l)}}t.render=s.render||Ae}Zt(t),rn(),Ll(t),on(),kt()}function au(t){return new Proxy(t.attrs,{get(e,n){return be(t,"get","$attrs"),e[n]}})}function cu(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=au(t))},slots:t.slots,emit:t.emit,expose:e}}function Cs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($o(Do(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cs)return cs[n](t)}}))}function lu(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function uu(t){return H(t)&&"__vccOpts"in t}const Ee=(t,e)=>ol(t,e,En);function _a(t,e,n){const s=arguments.length;return s===2?re(e)&&!$(e)?or(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&or(n)&&(n=[n]),pe(t,e,n))}const fu="3.2.38",du="http://www.w3.org/2000/svg",Tt=typeof document<"u"?document:null,bi=Tt&&Tt.createElement("template"),hu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Tt.createElementNS(du,t):Tt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{bi.innerHTML=s?`<svg>${t}</svg>`:t;const a=bi.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pu(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mu(t,e,n){const s=t.style,r=le(n);if(n&&!r){for(const i in n)ar(s,i,n[i]);if(e&&!le(e))for(const i in e)n[i]==null&&ar(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const wi=/\s*!important$/;function ar(t,e,n){if($(n))n.forEach(s=>ar(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gu(t,e);wi.test(n)?t.setProperty(sn(s),n.replace(wi,""),"important"):t[s]=n}}const Ii=["Webkit","Moz","ms"],Us={};function gu(t,e){const n=Us[e];if(n)return n;let s=We(e);if(s!=="filter"&&s in t)return Us[e]=s;s=bs(s);for(let r=0;r<Ii.length;r++){const i=Ii[r]+s;if(i in t)return Us[e]=i}return e}const Ei="http://www.w3.org/1999/xlink";function _u(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ei,e.slice(6,e.length)):t.setAttributeNS(Ei,e,n);else{const i=_c(e);n==null||i&&!_o(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vu(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=_o(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[va,yu]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let cr=0;const bu=Promise.resolve(),wu=()=>{cr=0},Iu=()=>cr||(bu.then(wu),cr=va());function Ht(t,e,n,s){t.addEventListener(e,n,s)}function Eu(t,e,n,s){t.removeEventListener(e,n,s)}function Tu(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Ru(e);if(s){const l=i[e]=Su(s,r);Ht(t,a,l,c)}else o&&(Eu(t,a,o,c),i[e]=void 0)}}const Ti=/(?:Once|Passive|Capture)$/;function Ru(t){let e;if(Ti.test(t)){e={};let s;for(;s=t.match(Ti);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}function Su(t,e){const n=s=>{const r=s.timeStamp||va();(yu||r>=n.attached-1)&&Oe(Cu(s,n.value),e,5,[s])};return n.value=t,n.attached=Iu(),n}function Cu(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ri=/^on[a-z]/,ku=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?pu(t,s,r):e==="style"?mu(t,n,s):_s(e)?Ir(e)||Tu(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Au(t,e,s,r))?vu(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_u(t,e,s,r))};function Au(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ri.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ri.test(e)&&le(n)?!1:e in t}const Si=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Kn(e,n):e};function Ou(t){t.target.composing=!0}function Ci(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ki={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Si(r);const i=s||r.props&&r.props.type==="number";Ht(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Js(a)),t._assign(a)}),n&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",Ou),Ht(t,"compositionend",Ci),Ht(t,"change",Ci))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Si(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Js(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Pu=me({patchProp:ku},hu);let Ai;function Nu(){return Ai||(Ai=Gl(Pu))}const xu=(...t)=>{const e=Nu().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Mu(s);if(!r)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Mu(t){return le(t)?document.querySelector(t):t}const Du=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Lu={};function Uu(t,e){const n=Nl("RouterView");return Fe(),da(n)}const Fu=Du(Lu,[["render",Uu]]),Bu="modulepreload",$u=function(t){return"/netflix-clone/"+t},Oi={},Fs=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=$u(r),r in Oi)return;Oi[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Bu,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Hu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function Bs(t,e){const n={};for(const s in e){const r=e[s];n[s]=Pe(r)?r.map(t):t(r)}return n}const gn=()=>{},Pe=Array.isArray,ju=/\/$/,Vu=t=>t.replace(ju,"");function $s(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Ku(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Wu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qu(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&en(e.matched[s],n.matched[r])&&ya(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function en(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ya(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zu(t[n],e[n]))return!1;return!0}function zu(t,e){return Pe(t)?Ni(t,e):Pe(e)?Ni(e,t):t===e}function Ni(t,e){return Pe(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ku(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Tn;(function(t){t.pop="pop",t.push="push"})(Tn||(Tn={}));var _n;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_n||(_n={}));function Gu(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vu(t)}const Ju=/^[^#]+#/;function Yu(t,e){return t.replace(Ju,"#")+e}function Xu(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ks=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qu(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Xu(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xi(t,e){return(history.state?history.state.position-e:-1)+t}const lr=new Map;function Zu(t,e){lr.set(t,e)}function ef(t){const e=lr.get(t);return lr.delete(t),e}let tf=()=>location.protocol+"//"+location.host;function ba(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Pi(c,"")}return Pi(n,t)+s+r}function nf(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const _=ba(t,location),C=n.value,F=e.value;let A=0;if(p){if(n.value=_,e.value=p,o&&o===C){o=null;return}A=F?p.position-F.position:0}else s(_);r.forEach(k=>{k(n.value,C,{delta:A,type:Tn.pop,direction:A?A>0?_n.forward:_n.back:_n.unknown})})};function c(){o=n.value}function l(p){r.push(p);const _=()=>{const C=r.indexOf(p);C>-1&&r.splice(C,1)};return i.push(_),_}function f(){const{history:p}=window;!p.state||p.replaceState(J({},p.state,{scroll:ks()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Mi(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ks():null}}function sf(t){const{history:e,location:n}=window,s={value:ba(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:tf()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),r.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=J({},e.state,Mi(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,f,!0),s.value=c}function a(c,l){const f=J({},r.value,e.state,{forward:c,scroll:ks()});i(f.current,f,!0);const h=J({},Mi(s.value,c,null),{position:f.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function rf(t){t=Gu(t);const e=sf(t),n=nf(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=J({location:"",base:t,go:s,createHref:Yu.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function of(t){return typeof t=="string"||t&&typeof t=="object"}function wa(t){return typeof t=="string"||typeof t=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ia=Symbol("");var Di;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Di||(Di={}));function tn(t,e){return J(new Error,{type:t,[Ia]:!0},e)}function Ke(t,e){return t instanceof Error&&Ia in t&&(e==null||!!(t.type&e))}const Li="[^/]+?",af={sensitive:!1,strict:!1,start:!0,end:!0},cf=/[.+*?^${}()[\]/\\]/g;function lf(t,e){const n=J({},af,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(cf,"\\$&"),_+=40;else if(p.type===1){const{value:C,repeatable:F,optional:A,regexp:k}=p;i.push({name:C,repeatable:F,optional:A});const L=k||Li;if(L!==Li){_+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${L}): `+z.message)}}let V=F?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(V=A&&l.length<2?`(?:/${V})`:"/"+V),A&&(V+="?"),r+=V,_+=20,A&&(_+=-8),F&&(_+=-20),L===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",C=i[p-1];h[C.name]=_&&C.repeatable?_.split("/"):_}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:F,optional:A}=_,k=C in l?l[C]:"";if(Pe(k)&&!F)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const L=Pe(k)?k.join("/"):k;if(!L)if(A)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);f+=L}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function uf(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ff(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=uf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ui(s))return 1;if(Ui(r))return-1}return r.length-s.length}function Ui(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const df={type:0,value:""},hf=/[a-zA-Z0-9_]/;function pf(t){if(!t)return[[]];if(t==="/")return[[df]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:hf.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function mf(t,e,n){const s=lf(pf(t.path),n),r=J(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function gf(t,e){const n=[],s=new Map;e=$i({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,p){const _=!p,C=_f(f);C.aliasOf=p&&p.record;const F=$i(e,f),A=[C];if("alias"in f){const V=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of V)A.push(J({},C,{components:p?p.record.components:C.components,path:z,aliasOf:p?p.record:C}))}let k,L;for(const V of A){const{path:z}=V;if(h&&z[0]!=="/"){const oe=h.record.path,ae=oe[oe.length-1]==="/"?"":"/";V.path=h.record.path+(z&&ae+z)}if(k=mf(V,h,F),p?p.alias.push(k):(L=L||k,L!==k&&L.alias.push(k),_&&f.name&&!Bi(k)&&o(f.name)),C.children){const oe=C.children;for(let ae=0;ae<oe.length;ae++)i(oe[ae],k,p&&p.children[ae])}p=p||k,c(k)}return L?()=>{o(L)}:gn}function o(f){if(wa(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&ff(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Ea(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Bi(f)&&s.set(f.record.name,f)}function l(f,h){let p,_={},C,F;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw tn(1,{location:f});F=p.record.name,_=J(Fi(h.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),f.params&&Fi(f.params,p.keys.map(L=>L.name))),C=p.stringify(_)}else if("path"in f)C=f.path,p=n.find(L=>L.re.test(C)),p&&(_=p.parse(C),F=p.record.name);else{if(p=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw tn(1,{location:f,currentLocation:h});F=p.record.name,_=J({},h.params,f.params),C=p.stringify(_)}const A=[];let k=p;for(;k;)A.unshift(k.record),k=k.parent;return{name:F,path:C,params:_,matched:A,meta:yf(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Fi(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function _f(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:vf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function vf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Bi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yf(t){return t.reduce((e,n)=>J(e,n.meta),{})}function $i(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ea(t,e){return e.children.some(n=>n===t||Ea(t,n))}const Ta=/#/g,bf=/&/g,wf=/\//g,If=/=/g,Ef=/\?/g,Ra=/\+/g,Tf=/%5B/g,Rf=/%5D/g,Sa=/%5E/g,Sf=/%60/g,Ca=/%7B/g,Cf=/%7C/g,ka=/%7D/g,kf=/%20/g;function Fr(t){return encodeURI(""+t).replace(Cf,"|").replace(Tf,"[").replace(Rf,"]")}function Af(t){return Fr(t).replace(Ca,"{").replace(ka,"}").replace(Sa,"^")}function ur(t){return Fr(t).replace(Ra,"%2B").replace(kf,"+").replace(Ta,"%23").replace(bf,"%26").replace(Sf,"`").replace(Ca,"{").replace(ka,"}").replace(Sa,"^")}function Of(t){return ur(t).replace(If,"%3D")}function Pf(t){return Fr(t).replace(Ta,"%23").replace(Ef,"%3F")}function Nf(t){return t==null?"":Pf(t).replace(wf,"%2F")}function us(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xf(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ra," "),o=i.indexOf("="),a=us(o<0?i:i.slice(0,o)),c=o<0?null:us(i.slice(o+1));if(a in e){let l=e[a];Pe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Hi(t){let e="";for(let n in t){const s=t[n];if(n=Of(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pe(s)?s.map(i=>i&&ur(i)):[s&&ur(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mf(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Df=Symbol(""),ji=Symbol(""),As=Symbol(""),Aa=Symbol(""),fr=Symbol("");function fn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ct(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(tn(4,{from:n,to:e})):h instanceof Error?a(h):of(h)?a(tn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Hs(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Lf(a)){const l=(a.__vccOpts||a)[e];l&&r.push(ct(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Hu(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ct(p,n,s,i,o)()}))}}return r}function Lf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vi(t){const e=Xe(As),n=Xe(Aa),s=Ee(()=>e.resolve(Ct(t.to))),r=Ee(()=>{const{matched:c}=s.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(en.bind(null,f));if(p>-1)return p;const _=Wi(c[l-2]);return l>1&&Wi(f)===_&&h[h.length-1].path!==_?h.findIndex(en.bind(null,c[l-2])):p}),i=Ee(()=>r.value>-1&&Bf(n.params,s.value.params)),o=Ee(()=>r.value>-1&&r.value===n.matched.length-1&&ya(n.params,s.value.params));function a(c={}){return Ff(c)?e[Ct(t.replace)?"replace":"push"](Ct(t.to)).catch(gn):Promise.resolve()}return{route:s,href:Ee(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Uf=Xo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(t,{slots:e}){const n=On(Vi(t)),{options:s}=Xe(As),r=Ee(()=>({[qi(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qi(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:_a("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Oa=Uf;function Ff(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bf(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Pe(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Wi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qi=(t,e,n)=>t!=null?t:e!=null?e:n,$f=Xo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Xe(fr),r=Ee(()=>t.route||s.value),i=Xe(ji,0),o=Ee(()=>{let l=Ct(i);const{matched:f}=r.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=Ee(()=>r.value.matched[o.value]);Gn(ji,Ee(()=>o.value+1)),Gn(Df,a),Gn(fr,r);const c=Fo();return Jn(()=>[c.value,a.value,t.name],([l,f,h],[p,_,C])=>{f&&(f.instances[h]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!en(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(F=>F(l))},{flush:"post"}),()=>{const l=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return zi(n.default,{Component:p,route:l});const _=h.props[f],C=_?_===!0?l.params:typeof _=="function"?_(l):_:null,A=_a(p,J({},C,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return zi(n.default,{Component:A,route:l})||A}}});function zi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hf=$f;function jf(t){const e=gf(t.routes,t),n=t.parseQuery||xf,s=t.stringifyQuery||Hi,r=t.history,i=fn(),o=fn(),a=fn(),c=nl(it);let l=it;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bs.bind(null,g=>""+g),h=Bs.bind(null,Nf),p=Bs.bind(null,us);function _(g,P){let T,N;return wa(g)?(T=e.getRecordMatcher(g),N=P):N=g,e.addRoute(N,T)}function C(g){const P=e.getRecordMatcher(g);P&&e.removeRoute(P)}function F(){return e.getRoutes().map(g=>g.record)}function A(g){return!!e.getRecordMatcher(g)}function k(g,P){if(P=J({},P||c.value),typeof g=="string"){const B=$s(n,g,P.path),u=e.resolve({path:B.path},P),d=r.createHref(B.fullPath);return J(B,u,{params:p(u.params),hash:us(B.hash),redirectedFrom:void 0,href:d})}let T;if("path"in g)T=J({},g,{path:$s(n,g.path,P.path).path});else{const B=J({},g.params);for(const u in B)B[u]==null&&delete B[u];T=J({},g,{params:h(g.params)}),P.params=h(P.params)}const N=e.resolve(T,P),G=g.hash||"";N.params=f(p(N.params));const te=Wu(s,J({},g,{hash:Af(G),path:N.path})),j=r.createHref(te);return J({fullPath:te,hash:G,query:s===Hi?Mf(g.query):g.query||{}},N,{redirectedFrom:void 0,href:j})}function L(g){return typeof g=="string"?$s(n,g,c.value.path):J({},g)}function V(g,P){if(l!==g)return tn(8,{from:P,to:g})}function z(g){return we(g)}function oe(g){return z(J(L(g),{replace:!0}))}function ae(g){const P=g.matched[g.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let N=typeof T=="function"?T(g):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=L(N):{path:N},N.params={}),J({query:g.query,hash:g.hash,params:"path"in N?{}:g.params},N)}}function we(g,P){const T=l=k(g),N=c.value,G=g.state,te=g.force,j=g.replace===!0,B=ae(T);if(B)return we(J(L(B),{state:typeof B=="object"?J({},G,B.state):G,force:te,replace:j}),P||T);const u=T;u.redirectedFrom=P;let d;return!te&&qu(s,N,T)&&(d=tn(16,{to:u,from:N}),Ft(N,N,!0,!1)),(d?Promise.resolve(d):ge(u,N)).catch(m=>Ke(m)?Ke(m,2)?m:ve(m):ee(m,u,N)).then(m=>{if(m){if(Ke(m,2))return we(J({replace:j},L(m.to),{state:typeof m.to=="object"?J({},G,m.to.state):G,force:te}),P||u)}else m=qe(u,N,!0,j,G);return xe(u,N,m),m})}function nt(g,P){const T=V(g,P);return T?Promise.reject(T):Promise.resolve()}function ge(g,P){let T;const[N,G,te]=Vf(g,P);T=Hs(N.reverse(),"beforeRouteLeave",g,P);for(const B of N)B.leaveGuards.forEach(u=>{T.push(ct(u,g,P))});const j=nt.bind(null,g,P);return T.push(j),$t(T).then(()=>{T=[];for(const B of i.list())T.push(ct(B,g,P));return T.push(j),$t(T)}).then(()=>{T=Hs(G,"beforeRouteUpdate",g,P);for(const B of G)B.updateGuards.forEach(u=>{T.push(ct(u,g,P))});return T.push(j),$t(T)}).then(()=>{T=[];for(const B of g.matched)if(B.beforeEnter&&!P.matched.includes(B))if(Pe(B.beforeEnter))for(const u of B.beforeEnter)T.push(ct(u,g,P));else T.push(ct(B.beforeEnter,g,P));return T.push(j),$t(T)}).then(()=>(g.matched.forEach(B=>B.enterCallbacks={}),T=Hs(te,"beforeRouteEnter",g,P),T.push(j),$t(T))).then(()=>{T=[];for(const B of o.list())T.push(ct(B,g,P));return T.push(j),$t(T)}).catch(B=>Ke(B,8)?B:Promise.reject(B))}function xe(g,P,T){for(const N of a.list())N(g,P,T)}function qe(g,P,T,N,G){const te=V(g,P);if(te)return te;const j=P===it,B=jt?history.state:{};T&&(N||j?r.replace(g.fullPath,J({scroll:j&&B&&B.scroll},G)):r.push(g.fullPath,G)),c.value=g,Ft(g,P,T,j),ve()}let Te;function Dt(){Te||(Te=r.listen((g,P,T)=>{if(!cn.listening)return;const N=k(g),G=ae(N);if(G){we(J(G,{replace:!0}),N).catch(gn);return}l=N;const te=c.value;jt&&Zu(xi(te.fullPath,T.delta),ks()),ge(N,te).catch(j=>Ke(j,12)?j:Ke(j,2)?(we(j.to,N).then(B=>{Ke(B,20)&&!T.delta&&T.type===Tn.pop&&r.go(-1,!1)}).catch(gn),Promise.reject()):(T.delta&&r.go(-T.delta,!1),ee(j,N,te))).then(j=>{j=j||qe(N,te,!1),j&&(T.delta&&!Ke(j,8)?r.go(-T.delta,!1):T.type===Tn.pop&&Ke(j,20)&&r.go(-1,!1)),xe(N,te,j)}).catch(gn)}))}let Lt=fn(),Ut=fn(),ie;function ee(g,P,T){ve(g);const N=Ut.list();return N.length?N.forEach(G=>G(g,P,T)):console.error(g),Promise.reject(g)}function Y(){return ie&&c.value!==it?Promise.resolve():new Promise((g,P)=>{Lt.add([g,P])})}function ve(g){return ie||(ie=!g,Dt(),Lt.list().forEach(([P,T])=>g?T(g):P()),Lt.reset()),g}function Ft(g,P,T,N){const{scrollBehavior:G}=t;if(!jt||!G)return Promise.resolve();const te=!T&&ef(xi(g.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return Vo().then(()=>G(g,P,te)).then(j=>j&&Qu(j)).catch(j=>ee(j,g,P))}const ze=g=>r.go(g);let Me;const Ie=new Set,cn={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,hasRoute:A,getRoutes:F,resolve:k,options:t,push:z,replace:oe,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ut.add,isReady:Y,install(g){const P=this;g.component("RouterLink",Oa),g.component("RouterView",Hf),g.config.globalProperties.$router=P,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(c)}),jt&&!Me&&c.value===it&&(Me=!0,z(r.location).catch(G=>{}));const T={};for(const G in it)T[G]=Ee(()=>c.value[G]);g.provide(As,P),g.provide(Aa,On(T)),g.provide(fr,c);const N=g.unmount;Ie.add(g),g.unmount=function(){Ie.delete(g),Ie.size<1&&(l=it,Te&&Te(),Te=null,c.value=it,Me=!1,ie=!1),N()}}};return cn}function $t(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Vf(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>en(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>en(l,c))||r.push(c))}return[n,s,r]}function Wf(){return Xe(As)}const qf="/netflix-clone/assets/logo-netflix.94e277b7.png",zf="/netflix-clone/assets/tv.b68ea2c7.png",Kf="/netflix-clone/assets/device-pile.81cf6488.png",Gf="/netflix-clone/assets/kids.50803a48.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Jf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Na={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),s.push(n[f],n[h],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),h!==64){const C=l<<6&192|h;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yf=function(t){const e=Pa(t);return Na.encodeByteArray(e,!0)},xa=function(t){return Yf(t).replace(/\./g,"")},Xf=function(t){try{return Na.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function ed(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nd(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sd(){return typeof indexedDB=="object"}function rd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="FirebaseError";class _t extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=id,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?od(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new _t(r,a,s)}}function od(t,e){return t.replace(ad,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ad=/\{\$([^}]+)}/g;function cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ki(i)&&Ki(o)){if(!fs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ki(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function pn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ld(t,e){const n=new ud(t,e);return n.subscribe.bind(n)}class ud{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=js),r.error===void 0&&(r.error=js),r.complete===void 0&&(r.complete=js);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function js(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pd(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hd(t){return t===It?void 0:t}function pd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const gd={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},_d=ne.INFO,vd={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},yd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=vd[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=_d,this._logHandler=yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const bd=(t,e)=>e.some(n=>t instanceof n);let Gi,Ji;function wd(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Id(){return Ji||(Ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Da=new WeakMap,dr=new WeakMap,La=new WeakMap,Vs=new WeakMap,Br=new WeakMap;function Ed(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Da.set(n,t)}).catch(()=>{}),Br.set(e,t),e}function Td(t){if(dr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dr.set(t,e)}let hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||La.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rd(t){hr=t(hr)}function Sd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ws(this),e,...n);return La.set(s,e.sort?e.sort():[e]),mt(s)}:Id().includes(t)?function(...e){return t.apply(Ws(this),e),mt(Da.get(this))}:function(...e){return mt(t.apply(Ws(this),e))}}function Cd(t){return typeof t=="function"?Sd(t):(t instanceof IDBTransaction&&Td(t),bd(t,wd())?new Proxy(t,hr):t)}function mt(t){if(t instanceof IDBRequest)return Ed(t);if(Vs.has(t))return Vs.get(t);const e=Cd(t);return e!==t&&(Vs.set(t,e),Br.set(e,t)),e}const Ws=t=>Br.get(t);function kd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(mt(o.result),c.oldVersion,c.newVersion,mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ad=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],qs=new Map;function Yi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qs.get(e))return qs.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Od.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ad.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return qs.set(e,i),i}Rd(t=>({...t,get:(e,n,s)=>Yi(e,n)||t.get(e,n,s),has:(e,n)=>!!Yi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pr="@firebase/app",Xi="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Ma("@firebase/app"),xd="@firebase/app-compat",Md="@firebase/analytics-compat",Dd="@firebase/analytics",Ld="@firebase/app-check-compat",Ud="@firebase/app-check",Fd="@firebase/auth",Bd="@firebase/auth-compat",$d="@firebase/database",Hd="@firebase/database-compat",jd="@firebase/functions",Vd="@firebase/functions-compat",Wd="@firebase/installations",qd="@firebase/installations-compat",zd="@firebase/messaging",Kd="@firebase/messaging-compat",Gd="@firebase/performance",Jd="@firebase/performance-compat",Yd="@firebase/remote-config",Xd="@firebase/remote-config-compat",Qd="@firebase/storage",Zd="@firebase/storage-compat",eh="@firebase/firestore",th="@firebase/firestore-compat",nh="firebase",sh="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="[DEFAULT]",rh={[pr]:"fire-core",[xd]:"fire-core-compat",[Dd]:"fire-analytics",[Md]:"fire-analytics-compat",[Ud]:"fire-app-check",[Ld]:"fire-app-check-compat",[Fd]:"fire-auth",[Bd]:"fire-auth-compat",[$d]:"fire-rtdb",[Hd]:"fire-rtdb-compat",[jd]:"fire-fn",[Vd]:"fire-fn-compat",[Wd]:"fire-iid",[qd]:"fire-iid-compat",[zd]:"fire-fcm",[Kd]:"fire-fcm-compat",[Gd]:"fire-perf",[Jd]:"fire-perf-compat",[Yd]:"fire-rc",[Xd]:"fire-rc-compat",[Qd]:"fire-gcs",[Zd]:"fire-gcs-compat",[eh]:"fire-fst",[th]:"fire-fst-compat","fire-js":"fire-js",[nh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Map,mr=new Map;function ih(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(mr.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;mr.set(e,t);for(const n of ds.values())ih(n,t);return!0}function Fa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new Pn("app","Firebase",oh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=sh;function ch(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ua,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});const r=ds.get(s);if(r){if(fs(t,r.options)&&fs(n,r.config))return r;throw Nt.create("duplicate-app",{appName:s})}const i=new md(s);for(const a of mr.values())i.addComponent(a);const o=new ah(t,n,i);return ds.set(s,o),o}function lh(t=Ua){const e=ds.get(t);if(!e)throw Nt.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let r=(s=rh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}Rn(new nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="firebase-heartbeat-database",fh=1,Sn="firebase-heartbeat-store";let zs=null;function Ba(){return zs||(zs=kd(uh,fh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sn)}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),zs}async function dh(t){var e;try{return(await Ba()).transaction(Sn).objectStore(Sn).get($a(t))}catch(n){if(n instanceof _t)Pt.warn(n.message);else{const s=Nt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Pt.warn(s.message)}}}async function Qi(t,e){var n;try{const r=(await Ba()).transaction(Sn,"readwrite");return await r.objectStore(Sn).put(e,$a(t)),r.done}catch(s){if(s instanceof _t)Pt.warn(s.message);else{const r=Nt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Pt.warn(r.message)}}}function $a(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=1024,ph=30*24*60*60*1e3;class mh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _h(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ph}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zi(),{heartbeatsToSend:n,unsentEntries:s}=gh(this._heartbeatsCache.heartbeats),r=xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Zi(){return new Date().toISOString().substring(0,10)}function gh(t,e=hh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),eo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),eo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _h{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?rd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function eo(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t){Rn(new nn("platform-logger",e=>new Pd(e),"PRIVATE")),Rn(new nn("heartbeat",e=>new mh(e),"PRIVATE")),Gt(pr,Xi,t),Gt(pr,Xi,"esm2017"),Gt("fire-js","")}vh("");function $r(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ha(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yh=Ha,ja=new Pn("auth","Firebase",Ha());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Ma("@firebase/auth");function Zn(t,...e){to.logLevel<=ne.ERROR&&to.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,...e){throw Hr(t,...e)}function je(t,...e){return Hr(t,...e)}function bh(t,e,n){const s=Object.assign(Object.assign({},yh()),{[e]:n});return new Pn("auth","Firebase",s).create(e,{appName:t.name})}function Hr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ja.create(t,...e)}function D(t,e,...n){if(!t)throw Hr(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zn(e),new Error(e)}function Ze(t,e){t||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map;function Ye(t){Ze(t instanceof Function,"Expected a class definition");let e=no.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,no.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t,e){const n=Fa(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(fs(i,e!=null?e:{}))return r;Ne(r,"already-initialized")}return n.initialize({options:e})}function Ih(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Eh(){return so()==="http:"||so()==="https:"}function so(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eh()||ed()||"connection"in navigator)?navigator.onLine:!0}function Rh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ze(n>e,"Short delay should be less than long delay!"),this.isMobile=Zf()||td()}get(){return Th()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Mn(3e4,6e4);function Dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,s,r={}){return Wa(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Nn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Va.fetch()(qa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Wa(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Sh),e);try{const r=new kh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw qn(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bh(t,f,l);Ne(t,f)}}catch(r){if(r instanceof _t)throw r;Ne(t,"network-request-failed")}}async function Un(t,e,n,s,r={}){const i=await Ln(t,e,n,s,r);return"mfaPendingCredential"in i&&Ne(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qa(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?jr(t.config,r):`${t.config.apiScheme}://${r}`}class kh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(je(this.auth,"network-request-failed")),Ch.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=je(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function Oh(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ph(t,e=!1){const n=xn(t),s=await n.getIdToken(e),r=Vr(s);D(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:vn(Ks(r.auth_time)),issuedAtTime:vn(Ks(r.iat)),expirationTime:vn(Ks(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ks(t){return Number(t)*1e3}function Vr(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Zn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xf(s);return i?JSON.parse(i):(Zn("Failed to decode base64 JWT payload"),null)}catch(i){return Zn("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Nh(t){const e=Vr(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof _t&&xh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function xh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vn(this.lastLoginAt),this.creationTime=vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Cn(t,Oh(n,{idToken:s}));D(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Uh(i.providerUserInfo):[],a=Lh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new za(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Dh(t){const e=xn(t);await hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Uh(t){return t.map(e=>{var{providerId:n}=e,s=$r(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(t,e){const n=await Wa(t,{},async()=>{const s=Nn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=qa(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Va.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Fh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new kn;return s&&(D(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(D(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=$r(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new za(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Cn(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ph(this,e)}reload(){return Dh(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await hs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cn(this,Ah(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,F=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:z,isAnonymous:oe,providerData:ae,stsTokenManager:we}=n;D(V&&we,e,"internal-error");const nt=kn.fromJSON(this.name,we);D(typeof V=="string",e,"internal-error"),ot(h,e.name),ot(p,e.name),D(typeof z=="boolean",e,"internal-error"),D(typeof oe=="boolean",e,"internal-error"),ot(_,e.name),ot(C,e.name),ot(F,e.name),ot(A,e.name),ot(k,e.name),ot(L,e.name);const ge=new At({uid:V,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:oe,photoURL:C,phoneNumber:_,tenantId:F,stsTokenManager:nt,createdAt:k,lastLoginAt:L});return ae&&Array.isArray(ae)&&(ge.providerData=ae.map(xe=>Object.assign({},xe))),A&&(ge._redirectEventId=A),ge}static async _fromIdTokenResponse(e,n,s=!1){const r=new kn;r.updateFromServerResponse(n);const i=new At({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await hs(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ka.type="NONE";const ro=Ka;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=es(this.userKey,r.apiKey,i),this.fullPersistenceKey=es("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Jt(Ye(ro),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Ye(ro);const o=es(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=At._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Jt(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ya(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ga(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qa(e))return"Blackberry";if(Za(e))return"Webos";if(Wr(e))return"Safari";if((e.includes("chrome/")||Ja(e))&&!e.includes("edge/"))return"Chrome";if(Xa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ga(t=de()){return/firefox\//i.test(t)}function Wr(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ja(t=de()){return/crios\//i.test(t)}function Ya(t=de()){return/iemobile/i.test(t)}function Xa(t=de()){return/android/i.test(t)}function Qa(t=de()){return/blackberry/i.test(t)}function Za(t=de()){return/webos/i.test(t)}function Ps(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bh(t=de()){var e;return Ps(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $h(){return nd()&&document.documentMode===10}function ec(t=de()){return Ps(t)||Xa(t)||Za(t)||Qa(t)||/windows phone/i.test(t)||Ya(t)}function Hh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e=[]){let n;switch(t){case"Browser":n=io(de());break;case"Worker":n=`${io(de())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.beforeStateQueue=new jh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ja,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await hs(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xn(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ns(t){return xn(t)}class oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=ld(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function Wh(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(t,e){return Un(t,"POST","/v1/accounts:signInWithPassword",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}async function Kh(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends qr{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new An(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new An(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zh(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Wh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kh(e,{idToken:n,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e){return Un(t,"POST","/v1/accounts:signInWithIdp",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="http://localhost";class xt extends qr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=$r(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new xt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Yt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yt(e,n)}buildRequest(){const e={requestUri:Gh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yh(t){const e=hn(pn(t)).link,n=e?hn(pn(e)).deep_link_id:null,s=hn(pn(t)).deep_link_id;return(s?hn(pn(s)).link:null)||s||n||e||t}class zr{constructor(e){var n,s,r,i,o,a;const c=hn(pn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Jh((r=c.mode)!==null&&r!==void 0?r:null);D(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Yh(e);try{return new zr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,n){return An._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zr.parseLink(n);return D(s,"argument-error"),An._fromEmailAndCode(e,s.code,s.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends nc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Fn{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ut.credential(n,s)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Fn{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Fn{constructor(){super("twitter.com")}static credential(e,n){return xt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dt.credential(n,s)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e){return Un(t,"POST","/v1/accounts:signUp",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await At._fromIdTokenResponse(e,s,r),o=ao(s);return new Mt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ao(s);return new Mt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends _t{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ps.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ps(e,n,s,r)}}function sc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ps._fromErrorAndOperation(t,i,e,s):i})}async function Qh(t,e,n=!1){const s=await Cn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Cn(t,sc(r,i,e,t),n);D(o.idToken,r,"internal-error");const a=Vr(o.idToken);D(a,r,"internal-error");const{sub:c}=a;return D(t.uid===c,r,"user-mismatch"),Mt._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Ne(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t,e,n=!1){const s="signIn",r=await sc(t,s,e),i=await Mt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function ep(t,e){return rc(Ns(t),e)}async function tp(t,e,n){const s=Ns(t),r=await Xh(s,{returnSecureToken:!0,email:e,password:n}),i=await Mt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function fg(t,e,n){return ep(xn(t),an.credential(e,n))}const ms="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ms,"1"),this.storage.removeItem(ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){const t=de();return Wr(t)||Ps(t)}const sp=1e3,rp=10;class oc extends ic{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=np()&&Hh(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);$h()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,rp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},sp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oc.type="LOCAL";const ip=oc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ac.type="SESSION";const cc=ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new xs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await op(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Kr("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function cp(t){Ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function lp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function up(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fp(){return lc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="firebaseLocalStorageDb",dp=1,gs="firebaseLocalStorage",fc="fbase_key";class Bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ms(t,e){return t.transaction([gs],e?"readwrite":"readonly").objectStore(gs)}function hp(){const t=indexedDB.deleteDatabase(uc);return new Bn(t).toPromise()}function _r(){const t=indexedDB.open(uc,dp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(gs,{keyPath:fc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(gs)?e(s):(s.close(),await hp(),e(await _r()))})})}async function co(t,e,n){const s=Ms(t,!0).put({[fc]:e,value:n});return new Bn(s).toPromise()}async function pp(t,e){const n=Ms(t,!1).get(e),s=await new Bn(n).toPromise();return s===void 0?null:s.value}function lo(t,e){const n=Ms(t,!0).delete(e);return new Bn(n).toPromise()}const mp=800,gp=3;class dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _r(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>gp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xs._getInstance(fp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lp(),!this.activeServiceWorker)return;this.sender=new ap(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||up()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _r();return await co(e,ms,"1"),await lo(e,ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>co(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>pp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ms(r,!1).getAll();return new Bn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dc.type="LOCAL";const _p=dc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",vp().appendChild(s)})}function bp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t,e){return e?Ye(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends qr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ip(t){return rc(t.auth,new Gr(t),t.bypassAuthState)}function Ep(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Zh(n,new Gr(t),t.bypassAuthState)}async function Tp(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Qh(n,new Gr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ip;case"linkViaPopup":case"linkViaRedirect":return Tp;case"reauthViaPopup":case"reauthViaRedirect":return Ep;default:Ne(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Mn(2e3,1e4);class Vt extends hc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=Kr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Rp.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="pendingRedirect",ts=new Map;class Cp extends hc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ts.get(this.auth._key());if(!e){try{const s=await kp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ts.set(this.auth._key(),e)}return this.bypassAuthState||ts.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kp(t,e){const n=Pp(e),s=Op(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Ap(t,e){ts.set(t._key(),e)}function Op(t){return Ye(t._redirectPersistence)}function Pp(t){return es(Sp,t.config.apiKey,t.name)}async function Np(t,e,n=!1){const s=Ns(t),r=wp(s,e),o=await new Cp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=10*60*1e3;class Mp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!pc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(uo(e))}saveEventToCache(e){this.cachedEventUids.add(uo(e)),this.lastProcessedEventTime=Date.now()}}function uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fp=/^https?/;async function Bp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lp(t);for(const n of e)try{if($p(n))return}catch{}Ne(t,"unauthorized-domain")}function $p(t){const e=gr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Fp.test(n))return!1;if(Up.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new Mn(3e4,6e4);function fo(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jp(t){return new Promise((e,n)=>{var s,r,i;function o(){fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fo(),n(je(t,"network-request-failed"))},timeout:Hp.get()})}if(!((r=(s=Ve().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const a=bp("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},yp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ns=null,e})}let ns=null;function Vp(t){return ns=ns||jp(t),ns}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new Mn(5e3,15e3),qp="__/auth/iframe",zp="emulator/auth/iframe",Kp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jp(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jr(e,zp):`https://${t.config.authDomain}/${qp}`,s={apiKey:e.apiKey,appName:t.name,v:Os},r=Gp.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Nn(s).slice(1)}`}async function Yp(t){const e=await Vp(t),n=Ve().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Jp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kp,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},Wp.get());function c(){Ve().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qp=500,Zp=600,em="_blank",tm="http://localhost";class ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nm(t,e,n,s=Qp,r=Zp){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Xp),{width:s.toString(),height:r.toString(),top:i,left:o}),l=de().toLowerCase();n&&(a=Ja(l)?em:n),Ga(l)&&(e=e||tm,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,C])=>`${p}${_}=${C},`,"");if(Bh(l)&&a!=="_self")return sm(e||"",a),new ho(null);const h=window.open(e||"",a,f);D(h,t,"popup-blocked");try{h.focus()}catch{}return new ho(h)}function sm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="__/auth/handler",im="emulator/auth/handler";function po(t,e,n,s,r,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Os,eventId:r};if(e instanceof nc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Fn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${om(t)}?${Nn(a).slice(1)}`}function om({config:t}){return t.emulator?jr(t,im):`https://${t.authDomain}/${rm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="webStorageSupport";class am{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cc,this._completeRedirectFn=Np,this._overrideRedirectResult=Ap}async _openPopup(e,n,s,r){var i;Ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=po(e,n,s,gr(),r);return nm(e,o,Kr())}async _openRedirect(e,n,s,r){return await this._originValidation(e),cp(po(e,n,s,gr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Ze(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Yp(e),s=new Mp(e);return n.register("authEvent",r=>(D(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gs,{type:Gs},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Gs];o!==void 0&&n(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ec()||Wr()||Ps()}}const cm=am;var mo="@firebase/auth",go="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fm(t){Rn(new nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tc(t)},f=new Vh(a,c,l);return Ih(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Rn(new nn("auth-internal",e=>{const n=Ns(e.getProvider("auth").getImmediate());return(s=>new lm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(mo,go,um(t)),Gt(mo,go,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t=lh()){const e=Fa(t,"auth");return e.isInitialized()?e.getImmediate():wh(t,{popupRedirectResolver:cm,persistence:[_p,ip,cc]})}fm("Browser");const dm={class:"our-story-top-content"},hm={key:0,class:"cookies-notification"},pm={class:"cookies-text"},mm=tt(" Netflix and third parties use cookies and similar technologies on this website to collect information about your browsing activities which we use to analyse your use of the website, to personalise our services and to customise our online advertisements. When your consent is required, you can accept, refuse or personalise your choices. You can also change your preferences at any time by clicking on \u201CCookie Preferences\u201D in the footer of each page. Netflix supports the Digital Advertising Alliance Principles. Learn more about our use of cookies and information. "),gm={class:"cookies-buttons"},_m={class:"close-btn"},vm={class:"our-story-header-wrapper"},ym=R("div",{class:"our-story-header-logo"},[R("img",{src:qf,alt:"",srcset:"",id:"logo"})],-1),bm={class:"our-story-action-buttons"},wm=R("button",{id:"language-btn"},"English",-1),Im={id:"signIn-btn"},Em=tt("Sign in"),Tm={class:"our-story-cards"},Rm=pa('<div class="our-story-hero-card"><h1 id="our-story-title">Unlimited movies, TV</h1><h1 id="our-story-title-second">shows, and more.</h1><h3 id="our-story-subtitle">Watch anywhere. Cancel anytime.</h3><h4 id="email-form-title"> Ready to watch? Enter your email to create or restart your membership. </h4></div>',1),Sm={class:"our-story-registration-field"},Cm={class:"our-story-wrapper"},km=R("div",{class:"our-story-icons"},[R("div",{class:"our-story-icon"},[R("div",{class:"our-story-icon-left"},[R("h1",{id:"our-story-icon-heading"},"Enjoy on your TV."),R("h3",{id:"our-story-icon-subheading"}," Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more. ")]),R("div",{class:"our-story-icon-right"},[R("img",{src:zf,alt:"",id:"tv"}),R("div",{class:"our-story-card-animation","data-uia":"our-story-card-animation"},[R("video",{class:"our-story-card-video-tv","data-uia":"our-story-card-video",autoplay:"",playsinline:"",muted:"",loop:""},[R("source",{src:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",type:"video/mp4"})])])])]),R("div",{class:"our-story-icon"},[R("div",{class:"our-story-icon-left"},[R("h1",{id:"our-story-icon-heading"}," Download your shows to watch offline. "),R("h3",{id:"our-story-icon-subheading"}," Save your favorites easily and always have something to watch. ")]),R("div",{class:"our-story-icon-right"},[R("img",{alt:"",id:"eleven",src:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg","data-uia":""})])]),R("div",{class:"our-story-icon"},[R("div",{class:"our-story-icon-left"},[R("h1",{id:"our-story-icon-heading"},"Watch everywhere."),R("h3",{id:"our-story-icon-subheading"}," Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying more. ")]),R("div",{class:"our-story-icon-right"},[R("img",{src:Kf,alt:"",id:"tv"}),R("div",{class:"our-story-card-animation","data-uia":"our-story-card-animation"},[R("video",{class:"our-story-card-video-pc","data-uia":"our-story-card-video",autoplay:"",playsinline:"",muted:"",loop:""},[R("source",{src:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",type:"video/mp4"})])])])]),R("div",{class:"our-story-icon"},[R("div",{class:"our-story-icon-left"},[R("h1",{id:"our-story-icon-heading"},"Create profile for kids."),R("h3",{id:"our-story-icon-subheading"}," Send kids on adventures with their favorite characters in a space made just for them---free with your membership. ")]),R("div",{class:"our-story-icon-right"},[R("img",{src:Gf,alt:"",id:"tv"})])])],-1),Am={class:"our-story-faq"},Om=R("div",{class:"our-story-faq-heading"},[R("h1",{id:"our-story-faq-title"},"Frequently Asked Questions")],-1),Pm={class:"our-story-faq-content"},Nm={key:0,class:"faq-answer"},xm=tt(" Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. "),Mm=R("br",null,null,-1),Dm=R("br",null,null,-1),Lm=tt(" You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week! "),Um=[xm,Mm,Dm,Lm],Fm={key:1,class:"faq-answer"},Bm={key:2,class:"faq-answer"},$m=tt(" Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. "),Hm=R("br",null,null,-1),jm=R("br",null,null,-1),Vm=tt(" You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere. "),Wm=[$m,Hm,jm,Vm],qm={key:3,class:"faq-answer"},zm={key:4,class:"faq-answer"},Km={key:5,class:"faq-answer"},Gm=tt(" The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. "),Jm=R("br",null,null,-1),Ym=R("br",null,null,-1),Xm=tt(" Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\u2019t want kids to see. "),Qm=[Gm,Jm,Ym,Xm],Zm={class:"our-story-registration-field"},eg=R("h4",{id:"email-form-title"}," Ready to watch? Enter your email to create or restart your membership. ",-1),tg=R("button",{id:"getStarted"},"Get Started >",-1),ng=pa('<footer><div class="footer"><div class="top"><p id="footer-text">Questions? Contact us.</p></div><div class="bottom"><div class="bottomOne"><p id="footer-text">FAQ</p><p id="footer-text">Account</p><p id="footer-text">Investor Relations</p><p id="footer-text">Ways to Watch</p></div><div class="bottomTwo"><p id="footer-text">Privacy</p><p id="footer-text">Corporate Information</p><p id="footer-text">Speed Test</p><p id="footer-text">Legal Notices</p></div><div class="bottomThree"><p id="footer-text">Help Center</p><p id="footer-text">Media Center</p><p id="footer-text">Jobs</p><p id="footer-text">Terms of Use</p></div><div class="bottomFour"><p id="footer-text">Cookie Preferences</p><p id="footer-text">Contact Us</p><p id="footer-text">Legal Guarantee</p><p id="footer-text">Only on Netflix</p></div></div></div></footer>',1),sg={name:"Home",data(){return{faqVisible:{one:!1,two:!1,three:!1,four:!1,five:!1,six:!1},cookiesVisible:!0}},methods:{showFaqInfoOne(){this.faqVisible.one=!this.faqVisible.one},showFaqInfoTwo(){this.faqVisible.two=!this.faqVisible.two},showFaqInfoThree(){this.faqVisible.three=!this.faqVisible.three},showFaqInfoFour(){this.faqVisible.four=!this.faqVisible.four},showFaqInfoFive(){this.faqVisible.five=!this.faqVisible.five},showFaqInfoSix(){this.faqVisible.six=!this.faqVisible.six},showCookies(){this.cookiesVisible=!this.cookiesVisible}}},rg=Object.assign(sg,{setup(t){const e=Fo(""),n="password",s=Wf(),r=()=>{tp(vr(),e.value,n).then(i=>{console.log("Succesfully registered"),s.push("/login")}).catch(i=>{switch(console.log(i),i.code){case"auth/invalid-email":alert("Invalid email. Please try again.");break;case"auth/email-already-in-use":alert("The email address is already in use by another account.");break;case"auth/user-not-found":alert("No account with that email was found.");break;case"auth/missing-email":alert("Please enter your email.");break;default:alert("Something went wrong.")}})};return(i,o)=>(Fe(),rt(Be,null,[R("header",null,[R("div",dm,[i.cookiesVisible?(Fe(),rt("div",hm,[R("span",pm,[mm,R("div",gm,[R("button",{class:"cookies-button",onClick:o[0]||(o[0]=(...a)=>i.showCookies&&i.showCookies(...a))},"Accept"),R("button",{class:"cookies-button",onClick:o[1]||(o[1]=(...a)=>i.showCookies&&i.showCookies(...a))},"Reject"),R("button",{class:"cookies-button",onClick:o[2]||(o[2]=(...a)=>i.showCookies&&i.showCookies(...a))}," Personalize "),R("div",_m,[R("button",{class:"close-btn-txt",onClick:o[3]||(o[3]=(...a)=>i.showCookies&&i.showCookies(...a))},"X")])])])])):bt("",!0),R("div",vm,[ym,R("div",bm,[wm,R("button",Im,[pe(Ct(Oa),{to:"/login"},{default:Go(()=>[Em]),_:1})])])]),R("div",Tm,[Rm,R("div",Sm,[li(R("input",{type:"text",placeholder:"Email address",id:"emailField","onUpdate:modelValue":o[4]||(o[4]=a=>e.value=a)},null,512),[[ki,e.value]]),R("button",{id:"getStarted",onClick:r},"Get Started >")])])])]),R("section",null,[R("div",Cm,[km,R("div",Am,[Om,R("div",Pm,[R("button",{class:"faq",onClick:o[5]||(o[5]=(...a)=>i.showFaqInfoOne&&i.showFaqInfoOne(...a))},"What is Netflix?"),this.faqVisible.one?(Fe(),rt("div",Nm,Um)):bt("",!0),R("button",{class:"faq",onClick:o[6]||(o[6]=(...a)=>i.showFaqInfoTwo&&i.showFaqInfoTwo(...a))}," How much does Netflix cost? "),this.faqVisible.two?(Fe(),rt("div",Fm," Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts. ")):bt("",!0),R("button",{class:"faq",onClick:o[7]||(o[7]=(...a)=>i.showFaqInfoThree&&i.showFaqInfoThree(...a))}," Where can I watch? "),this.faqVisible.three?(Fe(),rt("div",Bm,Wm)):bt("",!0),R("button",{class:"faq",onClick:o[8]||(o[8]=(...a)=>i.showFaqInfoFour&&i.showFaqInfoFour(...a))},"How do I cancel?"),this.faqVisible.four?(Fe(),rt("div",qm," Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \u2013 start or stop your account anytime. ")):bt("",!0),R("button",{class:"faq",onClick:o[9]||(o[9]=(...a)=>i.showFaqInfoFive&&i.showFaqInfoFive(...a))}," What can I watch on Netflix? "),this.faqVisible.five?(Fe(),rt("div",zm," Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. ")):bt("",!0),R("button",{class:"faq",onClick:o[10]||(o[10]=(...a)=>i.showFaqInfoSix&&i.showFaqInfoSix(...a))}," Is Netflix good for kids? "),this.faqVisible.six?(Fe(),rt("div",Km,Qm)):bt("",!0),R("div",Zm,[eg,li(R("input",{type:"text",placeholder:"Email address",id:"emailField","onUpdate:modelValue":o[11]||(o[11]=a=>e.value=a)},null,512),[[ki,e.value]]),tg])])])])]),ng],64))}}),ss=jf({history:rf("/netflix-clone/"),routes:[{path:"/",name:"home",component:rg},{path:"/browse",name:"browse",component:()=>Fs(()=>import("./BrowseView.9e09966c.js"),["assets/BrowseView.9e09966c.js","assets/BrowseView.076d8217.css"])},{path:"/login",name:"login",component:()=>Fs(()=>import("./LoginView.dc294cca.js"),["assets/LoginView.dc294cca.js","assets/LoginView.3620c93d.css"])},{path:"/movies",name:"movies",component:()=>Fs(()=>import("./MoviesView.811060a7.js"),["assets/MoviesView.811060a7.js","assets/MoviesView.a0793876.css"])}]});ss.beforeEach(t=>{(t.path==="/browse"&&vr().currentUser===null||t.path==="/movies"&&vr().currentUser===null)&&ss.push("/login")});var ig="firebase",og="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(ig,og,"app");const ag={apiKey:"AIzaSyBQpo_FF9wy_VCg6U5AdhA3gsd_UEslzGQ",authDomain:"netflix-clone-e9eae.firebaseapp.com",projectId:"netflix-clone-e9eae",storageBucket:"netflix-clone-e9eae.appspot.com",messagingSenderId:"689313501708",appId:"1:689313501708:web:dfd44c551780514534d429",measurementId:"G-Z1KFEJR6HW"};ch(ag);const mc=xu(Fu);mc.use(ss);mc.mount("#app");export{Du as _,R as a,pe as b,rt as c,qf as d,Fo as e,li as f,bt as g,pa as h,vr as i,ug as j,Fe as o,lg as p,Nl as r,fg as s,cg as t,Wf as u,ki as v,Go as w};
