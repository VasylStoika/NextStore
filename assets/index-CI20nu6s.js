(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&r(b)}).observe(document,{childList:!0,subtree:!0});function s(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(m){if(m.ep)return;m.ep=!0;const h=s(m);fetch(m.href,h)}})();function bm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var _r={exports:{}},Dn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function hp(){if(lm)return Dn;lm=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(r,m,h){var b=null;if(h!==void 0&&(b=""+h),m.key!==void 0&&(b=""+m.key),"key"in m){h={};for(var A in m)A!=="key"&&(h[A]=m[A])}else h=m;return m=h.ref,{$$typeof:u,type:r,key:b,ref:m!==void 0?m:null,props:h}}return Dn.Fragment=d,Dn.jsx=s,Dn.jsxs=s,Dn}var nm;function pp(){return nm||(nm=1,_r.exports=hp()),_r.exports}var o=pp(),Cr={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function gp(){if(im)return ee;im=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),U=Symbol.iterator;function q(v){return v===null||typeof v!="object"?null:(v=U&&v[U]||v["@@iterator"],typeof v=="function"?v:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,G={};function H(v,w,Q){this.props=v,this.context=w,this.refs=G,this.updater=Q||Y}H.prototype.isReactComponent={},H.prototype.setState=function(v,w){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,w,"setState")},H.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function $(){}$.prototype=H.prototype;function L(v,w,Q){this.props=v,this.context=w,this.refs=G,this.updater=Q||Y}var I=L.prototype=new $;I.constructor=L,B(I,H.prototype),I.isPureReactComponent=!0;var ne=Array.isArray;function ge(){}var J={H:null,A:null,T:null,S:null},ze=Object.prototype.hasOwnProperty;function we(v,w,Q){var V=Q.ref;return{$$typeof:u,type:v,key:w,ref:V!==void 0?V:null,props:Q}}function Qe(v,w){return we(v.type,w,v.props)}function et(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function $e(v){var w={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Q){return w[Q]})}var _t=/\/+/g;function vt(v,w){return typeof v=="object"&&v!==null&&v.key!=null?$e(""+v.key):w.toString(36)}function We(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ge,ge):(v.status="pending",v.then(function(w){v.status==="pending"&&(v.status="fulfilled",v.value=w)},function(w){v.status==="pending"&&(v.status="rejected",v.reason=w)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function C(v,w,Q,V,te){var ie=typeof v;(ie==="undefined"||ie==="boolean")&&(v=null);var pe=!1;if(v===null)pe=!0;else switch(ie){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(v.$$typeof){case u:case d:pe=!0;break;case R:return pe=v._init,C(pe(v._payload),w,Q,V,te)}}if(pe)return te=te(v),pe=V===""?"."+vt(v,0):V,ne(te)?(Q="",pe!=null&&(Q=pe.replace(_t,"$&/")+"/"),C(te,w,Q,"",function(ql){return ql})):te!=null&&(et(te)&&(te=Qe(te,Q+(te.key==null||v&&v.key===te.key?"":(""+te.key).replace(_t,"$&/")+"/")+pe)),w.push(te)),1;pe=0;var Pe=V===""?".":V+":";if(ne(v))for(var _e=0;_e<v.length;_e++)V=v[_e],ie=Pe+vt(V,_e),pe+=C(V,w,Q,ie,te);else if(_e=q(v),typeof _e=="function")for(v=_e.call(v),_e=0;!(V=v.next()).done;)V=V.value,ie=Pe+vt(V,_e++),pe+=C(V,w,Q,ie,te);else if(ie==="object"){if(typeof v.then=="function")return C(We(v),w,Q,V,te);throw w=String(v),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return pe}function X(v,w,Q){if(v==null)return v;var V=[],te=0;return C(v,V,"","",function(ie){return w.call(Q,ie,te++)}),V}function P(v){if(v._status===-1){var w=v._result;w=w(),w.then(function(Q){(v._status===0||v._status===-1)&&(v._status=1,v._result=Q)},function(Q){(v._status===0||v._status===-1)&&(v._status=2,v._result=Q)}),v._status===-1&&(v._status=0,v._result=w)}if(v._status===1)return v._result.default;throw v._result}var me=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},Z={map:X,forEach:function(v,w,Q){X(v,function(){w.apply(this,arguments)},Q)},count:function(v){var w=0;return X(v,function(){w++}),w},toArray:function(v){return X(v,function(w){return w})||[]},only:function(v){if(!et(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return ee.Activity=T,ee.Children=Z,ee.Component=H,ee.Fragment=s,ee.Profiler=m,ee.PureComponent=L,ee.StrictMode=r,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ee.__COMPILER_RUNTIME={__proto__:null,c:function(v){return J.H.useMemoCache(v)}},ee.cache=function(v){return function(){return v.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(v,w,Q){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var V=B({},v.props),te=v.key;if(w!=null)for(ie in w.key!==void 0&&(te=""+w.key),w)!ze.call(w,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&w.ref===void 0||(V[ie]=w[ie]);var ie=arguments.length-2;if(ie===1)V.children=Q;else if(1<ie){for(var pe=Array(ie),Pe=0;Pe<ie;Pe++)pe[Pe]=arguments[Pe+2];V.children=pe}return we(v.type,te,V)},ee.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},ee.createElement=function(v,w,Q){var V,te={},ie=null;if(w!=null)for(V in w.key!==void 0&&(ie=""+w.key),w)ze.call(w,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(te[V]=w[V]);var pe=arguments.length-2;if(pe===1)te.children=Q;else if(1<pe){for(var Pe=Array(pe),_e=0;_e<pe;_e++)Pe[_e]=arguments[_e+2];te.children=Pe}if(v&&v.defaultProps)for(V in pe=v.defaultProps,pe)te[V]===void 0&&(te[V]=pe[V]);return we(v,ie,te)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(v){return{$$typeof:A,render:v}},ee.isValidElement=et,ee.lazy=function(v){return{$$typeof:R,_payload:{_status:-1,_result:v},_init:P}},ee.memo=function(v,w){return{$$typeof:g,type:v,compare:w===void 0?null:w}},ee.startTransition=function(v){var w=J.T,Q={};J.T=Q;try{var V=v(),te=J.S;te!==null&&te(Q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ge,me)}catch(ie){me(ie)}finally{w!==null&&Q.types!==null&&(w.types=Q.types),J.T=w}},ee.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ee.use=function(v){return J.H.use(v)},ee.useActionState=function(v,w,Q){return J.H.useActionState(v,w,Q)},ee.useCallback=function(v,w){return J.H.useCallback(v,w)},ee.useContext=function(v){return J.H.useContext(v)},ee.useDebugValue=function(){},ee.useDeferredValue=function(v,w){return J.H.useDeferredValue(v,w)},ee.useEffect=function(v,w){return J.H.useEffect(v,w)},ee.useEffectEvent=function(v){return J.H.useEffectEvent(v)},ee.useId=function(){return J.H.useId()},ee.useImperativeHandle=function(v,w,Q){return J.H.useImperativeHandle(v,w,Q)},ee.useInsertionEffect=function(v,w){return J.H.useInsertionEffect(v,w)},ee.useLayoutEffect=function(v,w){return J.H.useLayoutEffect(v,w)},ee.useMemo=function(v,w){return J.H.useMemo(v,w)},ee.useOptimistic=function(v,w){return J.H.useOptimistic(v,w)},ee.useReducer=function(v,w,Q){return J.H.useReducer(v,w,Q)},ee.useRef=function(v){return J.H.useRef(v)},ee.useState=function(v){return J.H.useState(v)},ee.useSyncExternalStore=function(v,w,Q){return J.H.useSyncExternalStore(v,w,Q)},ee.useTransition=function(){return J.H.useTransition()},ee.version="19.2.4",ee}var um;function kr(){return um||(um=1,Cr.exports=gp()),Cr.exports}var S=kr();const yp=bm(S);var Or={exports:{}},wn={},Dr={exports:{}},wr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function vp(){return cm||(cm=1,(function(u){function d(C,X){var P=C.length;C.push(X);e:for(;0<P;){var me=P-1>>>1,Z=C[me];if(0<m(Z,X))C[me]=X,C[P]=Z,P=me;else break e}}function s(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var X=C[0],P=C.pop();if(P!==X){C[0]=P;e:for(var me=0,Z=C.length,v=Z>>>1;me<v;){var w=2*(me+1)-1,Q=C[w],V=w+1,te=C[V];if(0>m(Q,P))V<Z&&0>m(te,Q)?(C[me]=te,C[V]=P,me=V):(C[me]=Q,C[w]=P,me=w);else if(V<Z&&0>m(te,P))C[me]=te,C[V]=P,me=V;else break e}}return X}function m(C,X){var P=C.sortIndex-X.sortIndex;return P!==0?P:C.id-X.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var b=Date,A=b.now();u.unstable_now=function(){return b.now()-A}}var x=[],g=[],R=1,T=null,U=3,q=!1,Y=!1,B=!1,G=!1,H=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function I(C){for(var X=s(g);X!==null;){if(X.callback===null)r(g);else if(X.startTime<=C)r(g),X.sortIndex=X.expirationTime,d(x,X);else break;X=s(g)}}function ne(C){if(B=!1,I(C),!Y)if(s(x)!==null)Y=!0,ge||(ge=!0,$e());else{var X=s(g);X!==null&&We(ne,X.startTime-C)}}var ge=!1,J=-1,ze=5,we=-1;function Qe(){return G?!0:!(u.unstable_now()-we<ze)}function et(){if(G=!1,ge){var C=u.unstable_now();we=C;var X=!0;try{e:{Y=!1,B&&(B=!1,$(J),J=-1),q=!0;var P=U;try{t:{for(I(C),T=s(x);T!==null&&!(T.expirationTime>C&&Qe());){var me=T.callback;if(typeof me=="function"){T.callback=null,U=T.priorityLevel;var Z=me(T.expirationTime<=C);if(C=u.unstable_now(),typeof Z=="function"){T.callback=Z,I(C),X=!0;break t}T===s(x)&&r(x),I(C)}else r(x);T=s(x)}if(T!==null)X=!0;else{var v=s(g);v!==null&&We(ne,v.startTime-C),X=!1}}break e}finally{T=null,U=P,q=!1}X=void 0}}finally{X?$e():ge=!1}}}var $e;if(typeof L=="function")$e=function(){L(et)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,vt=_t.port2;_t.port1.onmessage=et,$e=function(){vt.postMessage(null)}}else $e=function(){H(et,0)};function We(C,X){J=H(function(){C(u.unstable_now())},X)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(C){C.callback=null},u.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<C?Math.floor(1e3/C):5},u.unstable_getCurrentPriorityLevel=function(){return U},u.unstable_next=function(C){switch(U){case 1:case 2:case 3:var X=3;break;default:X=U}var P=U;U=X;try{return C()}finally{U=P}},u.unstable_requestPaint=function(){G=!0},u.unstable_runWithPriority=function(C,X){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=U;U=C;try{return X()}finally{U=P}},u.unstable_scheduleCallback=function(C,X,P){var me=u.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?me+P:me):P=me,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,C={id:R++,callback:X,priorityLevel:C,startTime:P,expirationTime:Z,sortIndex:-1},P>me?(C.sortIndex=P,d(g,C),s(x)===null&&C===s(g)&&(B?($(J),J=-1):B=!0,We(ne,P-me))):(C.sortIndex=Z,d(x,C),Y||q||(Y=!0,ge||(ge=!0,$e()))),C},u.unstable_shouldYield=Qe,u.unstable_wrapCallback=function(C){var X=U;return function(){var P=U;U=X;try{return C.apply(this,arguments)}finally{U=P}}}})(wr)),wr}var rm;function bp(){return rm||(rm=1,Dr.exports=vp()),Dr.exports}var Ur={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function xp(){if(om)return Fe;om=1;var u=kr();function d(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)g+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(d(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(x,g,R){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:T==null?null:""+T,children:x,containerInfo:g,implementation:R}}var b=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Fe.createPortal=function(x,g){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(d(299));return h(x,g,null,R)},Fe.flushSync=function(x){var g=b.T,R=r.p;try{if(b.T=null,r.p=2,x)return x()}finally{b.T=g,r.p=R,r.d.f()}},Fe.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(x,g))},Fe.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},Fe.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var R=g.as,T=A(R,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;R==="style"?r.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:U,fetchPriority:q}):R==="script"&&r.d.X(x,{crossOrigin:T,integrity:U,fetchPriority:q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Fe.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var R=A(g.as,g.crossOrigin);r.d.M(x,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(x)},Fe.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var R=g.as,T=A(R,g.crossOrigin);r.d.L(x,R,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Fe.preloadModule=function(x,g){if(typeof x=="string")if(g){var R=A(g.as,g.crossOrigin);r.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(x)},Fe.requestFormReset=function(x){r.d.r(x)},Fe.unstable_batchedUpdates=function(x,g){return x(g)},Fe.useFormState=function(x,g,R){return b.H.useFormState(x,g,R)},Fe.useFormStatus=function(){return b.H.useHostTransitionStatus()},Fe.version="19.2.4",Fe}var sm;function Sp(){if(sm)return Ur.exports;sm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Ur.exports=xp(),Ur.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function Ep(){if(fm)return wn;fm=1;var u=bp(),d=kr(),s=Sp();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return x(n),e;if(i===l)return x(n),t;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,f=n.child;f;){if(f===a){c=!0,a=n,l=i;break}if(f===l){c=!0,l=n,a=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===a){c=!0,a=i,l=n;break}if(f===l){c=!0,l=i,a=n;break}f=f.sibling}if(!c)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,U=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),L=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),Qe=Symbol.for("react.memo_cache_sentinel"),et=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=et&&e[et]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case H:return"Profiler";case G:return"StrictMode";case ne:return"Suspense";case ge:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case L:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:vt(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return vt(e(t))}catch{}}return null}var We=Array.isArray,C=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},me=[],Z=-1;function v(e){return{current:e}}function w(e){0>Z||(e.current=me[Z],me[Z]=null,Z--)}function Q(e,t){Z++,me[Z]=e.current,e.current=t}var V=v(null),te=v(null),ie=v(null),pe=v(null);function Pe(e,t){switch(Q(ie,t),Q(te,e),Q(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ad(t),e=Td(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(V),Q(V,e)}function _e(){w(V),w(te),w(ie)}function ql(e){e.memoizedState!==null&&Q(pe,e);var t=V.current,a=Td(t,e.type);t!==a&&(Q(te,e),Q(V,a))}function Gn(e){te.current===e&&(w(V),w(te)),pe.current===e&&(w(pe),Rn._currentValue=P)}var du,eo;function Oa(e){if(du===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);du=t&&t[1]||"",eo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+du+e+eo}var mu=!1;function hu(e,t){if(!e||mu)return"";mu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var N=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){N=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){N=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&N&&typeof M.stack=="string")return[M.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var p=c.split(`
`),j=f.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===j.length)for(l=p.length-1,n=j.length-1;1<=l&&0<=n&&p[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==j[n]){var _=`
`+p[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=n);break}}}finally{mu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Oa(a):""}function km(e,t){switch(e.tag){case 26:case 27:case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return e.child!==t&&t!==null?Oa("Suspense Fallback"):Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return hu(e.type,!1);case 11:return hu(e.type.render,!1);case 1:return hu(e.type,!0);case 31:return Oa("Activity");default:return""}}function to(e){try{var t="",a=null;do t+=km(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var pu=Object.prototype.hasOwnProperty,gu=u.unstable_scheduleCallback,yu=u.unstable_cancelCallback,Vm=u.unstable_shouldYield,Km=u.unstable_requestPaint,rt=u.unstable_now,Jm=u.unstable_getCurrentPriorityLevel,ao=u.unstable_ImmediatePriority,lo=u.unstable_UserBlockingPriority,Xn=u.unstable_NormalPriority,$m=u.unstable_LowPriority,no=u.unstable_IdlePriority,Wm=u.log,Fm=u.unstable_setDisableYieldValue,Yl=null,ot=null;function ua(e){if(typeof Wm=="function"&&Fm(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Yl,e)}catch{}}var st=Math.clz32?Math.clz32:eh,Pm=Math.log,Im=Math.LN2;function eh(e){return e>>>=0,e===0?32:31-(Pm(e)/Im|0)|0}var Qn=256,Zn=262144,kn=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~i,l!==0?n=Da(l):(c&=f,c!==0?n=Da(c):a||(a=f&~e,a!==0&&(n=Da(a))))):(f=l&~i,f!==0?n=Da(f):c!==0?n=Da(c):a||(a=l&~e,a!==0&&(n=Da(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Gl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function th(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function io(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function vu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ah(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,p=e.expirationTimes,j=e.hiddenUpdates;for(a=c&~a;0<a;){var _=31-st(a),D=1<<_;f[_]=0,p[_]=-1;var N=j[_];if(N!==null)for(j[_]=null,_=0;_<N.length;_++){var M=N[_];M!==null&&(M.lane&=-536870913)}a&=~D}l!==0&&uo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function uo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-st(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function co(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-st(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ro(e,t){var a=t&-t;return a=(a&42)!==0?1:bu(a),(a&(e.suspendedLanes|t))!==0?0:a}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oo(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Wd(e.type))}function so(e,t){var a=X.p;try{return X.p=e,t()}finally{X.p=a}}var ca=Math.random().toString(36).slice(2),Ze="__reactFiber$"+ca,tt="__reactProps$"+ca,Pa="__reactContainer$"+ca,Su="__reactEvents$"+ca,lh="__reactListeners$"+ca,nh="__reactHandles$"+ca,fo="__reactResources$"+ca,Ql="__reactMarker$"+ca;function Eu(e){delete e[Ze],delete e[tt],delete e[Su],delete e[lh],delete e[nh]}function Ia(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Pa]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=wd(e);e!==null;){if(a=e[Ze])return a;e=wd(e)}return t}e=a,a=e.parentNode}return null}function el(e){if(e=e[Ze]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function tl(e){var t=e[fo];return t||(t=e[fo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Ql]=!0}var mo=new Set,ho={};function wa(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(ho[e]=t,e=0;e<t.length;e++)mo.add(t[e])}var ih=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),po={},go={};function uh(e){return pu.call(go,e)?!0:pu.call(po,e)?!1:ih.test(e)?go[e]=!0:(po[e]=!0,!1)}function Kn(e,t,a){if(uh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Jn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ch(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zu(e){if(!e._valueTracker){var t=yo(e)?"checked":"value";e._valueTracker=ch(e,t,""+e[t])}}function vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=yo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function $n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rh=/[\n"\\]/g;function xt(e){return e.replace(rh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ju(e,t,a,l,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Nu(e,c,bt(t)):a!=null?Nu(e,c,bt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+bt(f):e.removeAttribute("name")}function bo(e,t,a,l,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){zu(e);return}a=a!=null?""+bt(a):"",t=t!=null?""+bt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),zu(e)}function Nu(e,t,a){t==="number"&&$n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function xo(e,t,a){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+bt(a):""}function So(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(r(92));if(We(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=bt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),zu(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var oh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||oh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zo(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Eo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Eo(e,i,t[i])}function Au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(e){return fh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Tu=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,ul=null;function jo(e){var t=el(e);if(t&&(e=t.stateNode)){var a=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ju(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[tt]||null;if(!n)throw Error(r(90));ju(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&vo(l)}break e;case"textarea":xo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var Ru=!1;function No(e,t,a){if(Ru)return e(t,a);Ru=!0;try{var l=e(t);return l}finally{if(Ru=!1,(il!==null||ul!==null)&&(Bi(),il&&(t=il,e=ul,ul=il=null,jo(t),e)))for(t=0;t<e.length;t++)jo(e[t])}}function kl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[tt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Xt)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{_u=!1}var ra=null,Cu=null,Fn=null;function Ao(){if(Fn)return Fn;var e,t=Cu,a=t.length,l,n="value"in ra?ra.value:ra.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Fn=n.slice(e,1<l?1-l:void 0)}function Pn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function To(){return!1}function at(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?In:To,this.isPropagationStopped=To,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=at(Ua),Kl=T({},Ua,{view:0,detail:0}),dh=at(Kl),Ou,Du,Jl,ti=T({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jl&&(Jl&&e.type==="mousemove"?(Ou=e.screenX-Jl.screenX,Du=e.screenY-Jl.screenY):Du=Ou=0,Jl=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),Mo=at(ti),mh=T({},ti,{dataTransfer:0}),hh=at(mh),ph=T({},Kl,{relatedTarget:0}),wu=at(ph),gh=T({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=at(gh),vh=T({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bh=at(vh),xh=T({},Ua,{data:0}),Ro=at(xh),Sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zh[e])?!!t[e]:!1}function Uu(){return jh}var Nh=T({},Kl,{key:function(e){if(e.key){var t=Sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ah=at(Nh),Th=T({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_o=at(Th),Mh=T({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Rh=at(Mh),_h=T({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=at(_h),Oh=T({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dh=at(Oh),wh=T({},Ua,{newState:0,oldState:0}),Uh=at(wh),Hh=[9,13,27,32],Hu=Xt&&"CompositionEvent"in window,$l=null;Xt&&"documentMode"in document&&($l=document.documentMode);var Bh=Xt&&"TextEvent"in window&&!$l,Co=Xt&&(!Hu||$l&&8<$l&&11>=$l),Oo=" ",Do=!1;function wo(e,t){switch(e){case"keyup":return Hh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function Lh(e,t){switch(e){case"compositionend":return Uo(t);case"keypress":return t.which!==32?null:(Do=!0,Oo);case"textInput":return e=t.data,e===Oo&&Do?null:e;default:return null}}function qh(e,t){if(cl)return e==="compositionend"||!Hu&&wo(e,t)?(e=Ao(),Fn=Cu=ra=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Co&&t.locale!=="ko"?null:t.data;default:return null}}var Yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yh[e.type]:t==="textarea"}function Bo(e,t,a,l){il?ul?ul.push(l):ul=[l]:il=l,t=Zi(t,"onChange"),0<t.length&&(a=new ei("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Wl=null,Fl=null;function Gh(e){xd(e,0)}function ai(e){var t=Zl(e);if(vo(t))return e}function Lo(e,t){if(e==="change")return t}var qo=!1;if(Xt){var Bu;if(Xt){var Lu="oninput"in document;if(!Lu){var Yo=document.createElement("div");Yo.setAttribute("oninput","return;"),Lu=typeof Yo.oninput=="function"}Bu=Lu}else Bu=!1;qo=Bu&&(!document.documentMode||9<document.documentMode)}function Go(){Wl&&(Wl.detachEvent("onpropertychange",Xo),Fl=Wl=null)}function Xo(e){if(e.propertyName==="value"&&ai(Fl)){var t=[];Bo(t,Fl,e,Mu(e)),No(Gh,t)}}function Xh(e,t,a){e==="focusin"?(Go(),Wl=t,Fl=a,Wl.attachEvent("onpropertychange",Xo)):e==="focusout"&&Go()}function Qh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Fl)}function Zh(e,t){if(e==="click")return ai(t)}function kh(e,t){if(e==="input"||e==="change")return ai(t)}function Vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Vh;function Pl(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!pu.call(t,n)||!ft(e[n],t[n]))return!1}return!0}function Qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zo(e,t){var a=Qo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qo(a)}}function ko(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ko(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$n(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$n(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kh=Xt&&"documentMode"in document&&11>=document.documentMode,rl=null,Yu=null,Il=null,Gu=!1;function Ko(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||rl==null||rl!==$n(l)||(l=rl,"selectionStart"in l&&qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Pl(Il,l)||(Il=l,l=Zi(Yu,"onSelect"),0<l.length&&(t=new ei("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rl)))}function Ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Xu={},Jo={};Xt&&(Jo=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ba(e){if(Xu[e])return Xu[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Jo)return Xu[e]=t[a];return e}var $o=Ba("animationend"),Wo=Ba("animationiteration"),Fo=Ba("animationstart"),Jh=Ba("transitionrun"),$h=Ba("transitionstart"),Wh=Ba("transitioncancel"),Po=Ba("transitionend"),Io=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Ct(e,t){Io.set(e,t),wa(t,[e])}var li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],sl=0,Zu=0;function ni(){for(var e=sl,t=Zu=sl=0;t<e;){var a=St[t];St[t++]=null;var l=St[t];St[t++]=null;var n=St[t];St[t++]=null;var i=St[t];if(St[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&es(a,n,i)}}function ii(e,t,a,l){St[sl++]=e,St[sl++]=t,St[sl++]=a,St[sl++]=l,Zu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ku(e,t,a,l){return ii(e,t,a,l),ui(e)}function La(e,t){return ii(e,null,null,t),ui(e)}function es(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-st(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ui(e){if(50<En)throw En=0,er=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fl={};function Fh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,l){return new Fh(e,t,a,l)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ts(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Vu(e)&&(c=1);else if(typeof e=="string")c=ap(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=dt(31,a,t,n),e.elementType=we,e.lanes=i,e;case B:return qa(a.children,n,i,t);case G:c=8,n|=24;break;case H:return e=dt(12,a,t,n|2),e.elementType=H,e.lanes=i,e;case ne:return e=dt(13,a,t,n),e.elementType=ne,e.lanes=i,e;case ge:return e=dt(19,a,t,n),e.elementType=ge,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:c=10;break e;case $:c=9;break e;case I:c=11;break e;case J:c=14;break e;case ze:c=16,l=null;break e}c=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=dt(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function qa(e,t,a,l){return e=dt(7,e,l,t),e.lanes=a,e}function Ku(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function as(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Ju(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ls=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=ls.get(e);return a!==void 0?a:(t={value:e,source:t,stack:to(t)},ls.set(e,t),t)}return{value:e,source:t,stack:to(t)}}var dl=[],ml=0,ri=null,en=0,zt=[],jt=0,oa=null,Ht=1,Bt="";function Zt(e,t){dl[ml++]=en,dl[ml++]=ri,ri=e,en=t}function ns(e,t,a){zt[jt++]=Ht,zt[jt++]=Bt,zt[jt++]=oa,oa=e;var l=Ht;e=Bt;var n=32-st(l)-1;l&=~(1<<n),a+=1;var i=32-st(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Ht=1<<32-st(t)+n|a<<n|l,Bt=i+e}else Ht=1<<i|a<<n|l,Bt=e}function $u(e){e.return!==null&&(Zt(e,1),ns(e,1,0))}function Wu(e){for(;e===ri;)ri=dl[--ml],dl[ml]=null,en=dl[--ml],dl[ml]=null;for(;e===oa;)oa=zt[--jt],zt[jt]=null,Bt=zt[--jt],zt[jt]=null,Ht=zt[--jt],zt[jt]=null}function is(e,t){zt[jt++]=Ht,zt[jt++]=Bt,zt[jt++]=oa,Ht=t.id,Bt=t.overflow,oa=e}var ke=null,je=null,se=!1,sa=null,Nt=!1,Fu=Error(r(519));function fa(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(Et(t,e)),Fu}function us(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[tt]=l,a){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(a=0;a<jn.length;a++)ce(jn[a],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),bo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),So(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||jd(t.textContent,a)?(l.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),l.onScroll!=null&&ce("scroll",t),l.onScrollEnd!=null&&ce("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||fa(e,!0)}function cs(e){for(ke=e.return;ke;)switch(ke.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:ke=ke.return}}function hl(e){if(e!==ke)return!1;if(!se)return cs(e),se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||pr(e.type,e.memoizedProps)),a=!a),a&&je&&fa(e),cs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=Dd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=Dd(e)}else t===27?(t=je,Na(e.type)?(e=xr,xr=null,je=e):je=t):je=ke?Tt(e.stateNode.nextSibling):null;return!0}function Ya(){je=ke=null,se=!1}function Pu(){var e=sa;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),sa=null),e}function tn(e){sa===null?sa=[e]:sa.push(e)}var Iu=v(null),Ga=null,kt=null;function da(e,t,a){Q(Iu,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=Iu.current,w(Iu)}function ec(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function tc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var p=0;p<t.length;p++)if(f.context===t[p]){i.lanes|=a,f=i.alternate,f!==null&&(f.lanes|=a),ec(i.return,a,e),l||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),ec(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function pl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var f=n.type;ft(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===pe.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Rn):e=[Rn])}n=n.return}e!==null&&tc(t,e,a,l),t.flags|=262144}function oi(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ga=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return rs(Ga,e)}function si(e,t){return Ga===null&&Xa(e),rs(e,t)}function rs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},kt===null){if(e===null)throw Error(r(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return a}var Ph=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ih=u.unstable_scheduleCallback,e0=u.unstable_NormalPriority,Ue={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new Ph,data:new Map,refCount:0}}function an(e){e.refCount--,e.refCount===0&&Ih(e0,function(){e.controller.abort()})}var ln=null,lc=0,gl=0,yl=null;function t0(e,t){if(ln===null){var a=ln=[];lc=0,gl=ur(),yl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return lc++,t.then(os,os),t}function os(){if(--lc===0&&ln!==null){yl!==null&&(yl.status="fulfilled");var e=ln;ln=null,gl=0,yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function a0(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ss=C.S;C.S=function(e,t){Jf=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&t0(e,t),ss!==null&&ss(e,t)};var Qa=v(null);function nc(){var e=Qa.current;return e!==null?e:Ee.pooledCache}function fi(e,t){t===null?Q(Qa,Qa.current):Q(Qa,t.pool)}function fs(){var e=nc();return e===null?null:{parent:Ue._currentValue,pool:e}}var vl=Error(r(460)),ic=Error(r(474)),di=Error(r(542)),mi={then:function(){}};function ds(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ms(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ps(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ps(e),e}throw ka=t,vl}}function Za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ka=a,vl):a}}var ka=null;function hs(){if(ka===null)throw Error(r(459));var e=ka;return ka=null,e}function ps(e){if(e===vl||e===di)throw Error(r(483))}var bl=null,nn=0;function hi(e){var t=nn;return nn+=1,bl===null&&(bl=[]),ms(bl,e,t)}function un(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pi(e,t){throw t.$$typeof===U?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gs(e){function t(E,y){if(e){var z=E.deletions;z===null?(E.deletions=[y],E.flags|=16):z.push(y)}}function a(E,y){if(!e)return null;for(;y!==null;)t(E,y),y=y.sibling;return null}function l(E){for(var y=new Map;E!==null;)E.key!==null?y.set(E.key,E):y.set(E.index,E),E=E.sibling;return y}function n(E,y){return E=Qt(E,y),E.index=0,E.sibling=null,E}function i(E,y,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<y?(E.flags|=67108866,y):z):(E.flags|=67108866,y)):(E.flags|=1048576,y)}function c(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function f(E,y,z,O){return y===null||y.tag!==6?(y=Ku(z,E.mode,O),y.return=E,y):(y=n(y,z),y.return=E,y)}function p(E,y,z,O){var W=z.type;return W===B?_(E,y,z.props.children,O,z.key):y!==null&&(y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ze&&Za(W)===y.type)?(y=n(y,z.props),un(y,z),y.return=E,y):(y=ci(z.type,z.key,z.props,null,E.mode,O),un(y,z),y.return=E,y)}function j(E,y,z,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==z.containerInfo||y.stateNode.implementation!==z.implementation?(y=Ju(z,E.mode,O),y.return=E,y):(y=n(y,z.children||[]),y.return=E,y)}function _(E,y,z,O,W){return y===null||y.tag!==7?(y=qa(z,E.mode,O,W),y.return=E,y):(y=n(y,z),y.return=E,y)}function D(E,y,z){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Ku(""+y,E.mode,z),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case q:return z=ci(y.type,y.key,y.props,null,E.mode,z),un(z,y),z.return=E,z;case Y:return y=Ju(y,E.mode,z),y.return=E,y;case ze:return y=Za(y),D(E,y,z)}if(We(y)||$e(y))return y=qa(y,E.mode,z,null),y.return=E,y;if(typeof y.then=="function")return D(E,hi(y),z);if(y.$$typeof===L)return D(E,si(E,y),z);pi(E,y)}return null}function N(E,y,z,O){var W=y!==null?y.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return W!==null?null:f(E,y,""+z,O);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case q:return z.key===W?p(E,y,z,O):null;case Y:return z.key===W?j(E,y,z,O):null;case ze:return z=Za(z),N(E,y,z,O)}if(We(z)||$e(z))return W!==null?null:_(E,y,z,O,null);if(typeof z.then=="function")return N(E,y,hi(z),O);if(z.$$typeof===L)return N(E,y,si(E,z),O);pi(E,z)}return null}function M(E,y,z,O,W){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return E=E.get(z)||null,f(y,E,""+O,W);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case q:return E=E.get(O.key===null?z:O.key)||null,p(y,E,O,W);case Y:return E=E.get(O.key===null?z:O.key)||null,j(y,E,O,W);case ze:return O=Za(O),M(E,y,z,O,W)}if(We(O)||$e(O))return E=E.get(z)||null,_(y,E,O,W,null);if(typeof O.then=="function")return M(E,y,z,hi(O),W);if(O.$$typeof===L)return M(E,y,z,si(y,O),W);pi(y,O)}return null}function k(E,y,z,O){for(var W=null,fe=null,K=y,le=y=0,oe=null;K!==null&&le<z.length;le++){K.index>le?(oe=K,K=null):oe=K.sibling;var de=N(E,K,z[le],O);if(de===null){K===null&&(K=oe);break}e&&K&&de.alternate===null&&t(E,K),y=i(de,y,le),fe===null?W=de:fe.sibling=de,fe=de,K=oe}if(le===z.length)return a(E,K),se&&Zt(E,le),W;if(K===null){for(;le<z.length;le++)K=D(E,z[le],O),K!==null&&(y=i(K,y,le),fe===null?W=K:fe.sibling=K,fe=K);return se&&Zt(E,le),W}for(K=l(K);le<z.length;le++)oe=M(K,E,le,z[le],O),oe!==null&&(e&&oe.alternate!==null&&K.delete(oe.key===null?le:oe.key),y=i(oe,y,le),fe===null?W=oe:fe.sibling=oe,fe=oe);return e&&K.forEach(function(_a){return t(E,_a)}),se&&Zt(E,le),W}function F(E,y,z,O){if(z==null)throw Error(r(151));for(var W=null,fe=null,K=y,le=y=0,oe=null,de=z.next();K!==null&&!de.done;le++,de=z.next()){K.index>le?(oe=K,K=null):oe=K.sibling;var _a=N(E,K,de.value,O);if(_a===null){K===null&&(K=oe);break}e&&K&&_a.alternate===null&&t(E,K),y=i(_a,y,le),fe===null?W=_a:fe.sibling=_a,fe=_a,K=oe}if(de.done)return a(E,K),se&&Zt(E,le),W;if(K===null){for(;!de.done;le++,de=z.next())de=D(E,de.value,O),de!==null&&(y=i(de,y,le),fe===null?W=de:fe.sibling=de,fe=de);return se&&Zt(E,le),W}for(K=l(K);!de.done;le++,de=z.next())de=M(K,E,le,de.value,O),de!==null&&(e&&de.alternate!==null&&K.delete(de.key===null?le:de.key),y=i(de,y,le),fe===null?W=de:fe.sibling=de,fe=de);return e&&K.forEach(function(mp){return t(E,mp)}),se&&Zt(E,le),W}function Se(E,y,z,O){if(typeof z=="object"&&z!==null&&z.type===B&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case q:e:{for(var W=z.key;y!==null;){if(y.key===W){if(W=z.type,W===B){if(y.tag===7){a(E,y.sibling),O=n(y,z.props.children),O.return=E,E=O;break e}}else if(y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ze&&Za(W)===y.type){a(E,y.sibling),O=n(y,z.props),un(O,z),O.return=E,E=O;break e}a(E,y);break}else t(E,y);y=y.sibling}z.type===B?(O=qa(z.props.children,E.mode,O,z.key),O.return=E,E=O):(O=ci(z.type,z.key,z.props,null,E.mode,O),un(O,z),O.return=E,E=O)}return c(E);case Y:e:{for(W=z.key;y!==null;){if(y.key===W)if(y.tag===4&&y.stateNode.containerInfo===z.containerInfo&&y.stateNode.implementation===z.implementation){a(E,y.sibling),O=n(y,z.children||[]),O.return=E,E=O;break e}else{a(E,y);break}else t(E,y);y=y.sibling}O=Ju(z,E.mode,O),O.return=E,E=O}return c(E);case ze:return z=Za(z),Se(E,y,z,O)}if(We(z))return k(E,y,z,O);if($e(z)){if(W=$e(z),typeof W!="function")throw Error(r(150));return z=W.call(z),F(E,y,z,O)}if(typeof z.then=="function")return Se(E,y,hi(z),O);if(z.$$typeof===L)return Se(E,y,si(E,z),O);pi(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,y!==null&&y.tag===6?(a(E,y.sibling),O=n(y,z),O.return=E,E=O):(a(E,y),O=Ku(z,E.mode,O),O.return=E,E=O),c(E)):a(E,y)}return function(E,y,z,O){try{nn=0;var W=Se(E,y,z,O);return bl=null,W}catch(K){if(K===vl||K===di)throw K;var fe=dt(29,K,null,E.mode);return fe.lanes=O,fe.return=E,fe}finally{}}}var Va=gs(!0),ys=gs(!1),ma=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(he&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ui(e),es(e,null,a),t}return ii(e,l,t,a),ui(e)}function cn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,co(e,a)}}function rc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var oc=!1;function rn(){if(oc){var e=yl;if(e!==null)throw e}}function on(e,t,a,l){oc=!1;var n=e.updateQueue;ma=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var p=f,j=p.next;p.next=null,c===null?i=j:c.next=j,c=p;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==c&&(f===null?_.firstBaseUpdate=j:f.next=j,_.lastBaseUpdate=p))}if(i!==null){var D=n.baseState;c=0,_=j=p=null,f=i;do{var N=f.lane&-536870913,M=N!==f.lane;if(M?(re&N)===N:(l&N)===N){N!==0&&N===gl&&(oc=!0),_!==null&&(_=_.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var k=e,F=f;N=t;var Se=a;switch(F.tag){case 1:if(k=F.payload,typeof k=="function"){D=k.call(Se,D,N);break e}D=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=F.payload,N=typeof k=="function"?k.call(Se,D,N):k,N==null)break e;D=T({},D,N);break e;case 2:ma=!0}}N=f.callback,N!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[N]:M.push(N))}else M={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(j=_=M,p=D):_=_.next=M,c|=N;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;M=f,f=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);_===null&&(p=D),n.baseState=p,n.firstBaseUpdate=j,n.lastBaseUpdate=_,i===null&&(n.shared.lanes=0),xa|=c,e.lanes=c,e.memoizedState=D}}function vs(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function bs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vs(a[e],t)}var xl=v(null),gi=v(0);function xs(e,t){e=ta,Q(gi,e),Q(xl,t),ta=e|t.baseLanes}function sc(){Q(gi,ta),Q(xl,xl.current)}function fc(){ta=gi.current,w(xl),w(gi)}var mt=v(null),At=null;function ga(e){var t=e.alternate;Q(Ce,Ce.current&1),Q(mt,e),At===null&&(t===null||xl.current!==null||t.memoizedState!==null)&&(At=e)}function dc(e){Q(Ce,Ce.current),Q(mt,e),At===null&&(At=e)}function Ss(e){e.tag===22?(Q(Ce,Ce.current),Q(mt,e),At===null&&(At=e)):ya()}function ya(){Q(Ce,Ce.current),Q(mt,mt.current)}function ht(e){w(mt),At===e&&(At=null),w(Ce)}var Ce=v(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vr(a)||br(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kt=0,ae=null,be=null,He=null,vi=!1,Sl=!1,Ka=!1,bi=0,sn=0,El=null,l0=0;function Me(){throw Error(r(321))}function mc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function hc(e,t,a,l,n,i){return Kt=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?nf:Rc,Ka=!1,i=a(l,n),Ka=!1,Sl&&(i=zs(t,a,l,n)),Es(e),i}function Es(e){C.H=mn;var t=be!==null&&be.next!==null;if(Kt=0,He=be=ae=null,vi=!1,sn=0,El=null,t)throw Error(r(300));e===null||Be||(e=e.dependencies,e!==null&&oi(e)&&(Be=!0))}function zs(e,t,a,l){ae=e;var n=0;do{if(Sl&&(El=null),sn=0,Sl=!1,25<=n)throw Error(r(301));if(n+=1,He=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=uf,i=t(a,l)}while(Sl);return i}function n0(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?fn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(ae.flags|=1024),t}function pc(){var e=bi!==0;return bi=0,e}function gc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function yc(e){if(vi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vi=!1}Kt=0,He=be=ae=null,Sl=!1,sn=bi=0,El=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ae.memoizedState=He=e:He=He.next=e,He}function Oe(){if(be===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=He===null?ae.memoizedState:He.next;if(t!==null)He=t,be=e;else{if(e===null)throw ae.alternate===null?Error(r(467)):Error(r(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},He===null?ae.memoizedState=He=e:He=He.next=e}return He}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(e){var t=sn;return sn+=1,El===null&&(El=[]),e=ms(El,e,t),t=ae,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?nf:Rc),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fn(e);if(e.$$typeof===L)return Ve(e)}throw Error(r(438,String(e)))}function vc(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=xi(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Qe;return t.index++,a}function Jt(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=Oe();return bc(t,be,e)}function bc(e,t,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,p=null,j=t,_=!1;do{var D=j.lane&-536870913;if(D!==j.lane?(re&D)===D:(Kt&D)===D){var N=j.revertLane;if(N===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),D===gl&&(_=!0);else if((Kt&N)===N){j=j.next,N===gl&&(_=!0);continue}else D={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},p===null?(f=p=D,c=i):p=p.next=D,ae.lanes|=N,xa|=N;D=j.action,Ka&&a(i,D),i=j.hasEagerState?j.eagerState:a(i,D)}else N={lane:D,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},p===null?(f=p=N,c=i):p=p.next=N,ae.lanes|=D,xa|=D;j=j.next}while(j!==null&&j!==t);if(p===null?c=i:p.next=f,!ft(i,e.memoizedState)&&(Be=!0,_&&(a=yl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function xc(e){var t=Oe(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ft(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function js(e,t,a){var l=ae,n=Oe(),i=se;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=t();var c=!ft((be||n).memoizedState,a);if(c&&(n.memoizedState=a,Be=!0),n=n.queue,zc(Ts.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,zl(9,{destroy:void 0},As.bind(null,l,n,a,t),null),Ee===null)throw Error(r(349));i||(Kt&127)!==0||Ns(l,t,a)}return a}function Ns(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=xi(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function As(e,t,a,l){t.value=a,t.getSnapshot=l,Ms(t)&&Rs(e)}function Ts(e,t,a){return a(function(){Ms(t)&&Rs(e)})}function Ms(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Rs(e){var t=La(e,2);t!==null&&ct(t,e,2)}function Sc(e){var t=Ie();if(typeof e=="function"){var a=e;if(e=a(),Ka){ua(!0);try{a()}finally{ua(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function _s(e,t,a,l){return e.baseState=a,bc(e,be,typeof l=="function"?l:Jt)}function i0(e,t,a,l,n){if(Ni(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};C.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Cs(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Cs(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=C.T,c={};C.T=c;try{var f=a(n,l),p=C.S;p!==null&&p(c,f),Os(e,t,f)}catch(j){Ec(e,t,j)}finally{i!==null&&c.types!==null&&(i.types=c.types),C.T=i}}else try{i=a(n,l),Os(e,t,i)}catch(j){Ec(e,t,j)}}function Os(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ds(e,t,l)},function(l){return Ec(e,t,l)}):Ds(e,t,a)}function Ds(e,t,a){t.status="fulfilled",t.value=a,ws(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cs(e,a)))}function Ec(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ws(t),t=t.next;while(t!==l)}e.action=null}function ws(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Us(e,t){return t}function Hs(e,t){if(se){var a=Ee.formState;if(a!==null){e:{var l=ae;if(se){if(je){t:{for(var n=je,i=Nt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Tt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){je=Tt(n.nextSibling),l=n.data==="F!";break e}}fa(l)}l=!1}l&&(t=a[0])}}return a=Ie(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},a.queue=l,a=tf.bind(null,ae,l),l.dispatch=a,l=Sc(!1),i=Mc.bind(null,ae,!1,l.queue),l=Ie(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=i0.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Bs(e){var t=Oe();return Ls(t,be,e)}function Ls(e,t,a){if(t=bc(e,t,Us)[0],e=Ei(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fn(t)}catch(c){throw c===vl?di:c}else l=t;t=Oe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,zl(9,{destroy:void 0},u0.bind(null,n,a),null)),[l,i,e]}function u0(e,t){e.action=t}function qs(e){var t=Oe(),a=be;if(a!==null)return Ls(t,a,e);Oe(),t=t.memoizedState,a=Oe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function zl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=xi(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ys(){return Oe().memoizedState}function zi(e,t,a,l){var n=Ie();ae.flags|=e,n.memoizedState=zl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ji(e,t,a,l){var n=Oe();l=l===void 0?null:l;var i=n.memoizedState.inst;be!==null&&l!==null&&mc(l,be.memoizedState.deps)?n.memoizedState=zl(t,i,a,l):(ae.flags|=e,n.memoizedState=zl(1|t,i,a,l))}function Gs(e,t){zi(8390656,8,e,t)}function zc(e,t){ji(2048,8,e,t)}function c0(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=xi(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Xs(e){var t=Oe().memoizedState;return c0({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Qs(e,t){return ji(4,2,e,t)}function Zs(e,t){return ji(4,4,e,t)}function ks(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vs(e,t,a){a=a!=null?a.concat([e]):null,ji(4,4,ks.bind(null,t,e),a)}function jc(){}function Ks(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&mc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Js(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&mc(t,l[1]))return l[0];if(l=e(),Ka){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l}function Nc(e,t,a){return a===void 0||(Kt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Wf(),ae.lanes|=e,xa|=e,a)}function $s(e,t,a,l){return ft(a,t)?a:xl.current!==null?(e=Nc(e,a,l),ft(e,t)||(Be=!0),e):(Kt&42)===0||(Kt&1073741824)!==0&&(re&261930)===0?(Be=!0,e.memoizedState=a):(e=Wf(),ae.lanes|=e,xa|=e,t)}function Ws(e,t,a,l,n){var i=X.p;X.p=i!==0&&8>i?i:8;var c=C.T,f={};C.T=f,Mc(e,!1,t,a);try{var p=n(),j=C.S;if(j!==null&&j(f,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var _=a0(p,l);dn(e,t,_,yt(e))}else dn(e,t,l,yt(e))}catch(D){dn(e,t,{then:function(){},status:"rejected",reason:D},yt())}finally{X.p=i,c!==null&&f.types!==null&&(c.types=f.types),C.T=c}}function r0(){}function Ac(e,t,a,l){if(e.tag!==5)throw Error(r(476));var n=Fs(e).queue;Ws(e,n,t,P,a===null?r0:function(){return Ps(e),a(l)})}function Fs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ps(e){var t=Fs(e);t.next===null&&(t=e.alternate.memoizedState),dn(e,t.next.queue,{},yt())}function Tc(){return Ve(Rn)}function Is(){return Oe().memoizedState}function ef(){return Oe().memoizedState}function o0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=yt();e=ha(a);var l=pa(t,e,a);l!==null&&(ct(l,t,a),cn(l,t,a)),t={cache:ac()},e.payload=t;return}t=t.return}}function s0(e,t,a){var l=yt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)?af(t,a):(a=ku(e,t,a,l),a!==null&&(ct(a,e,l),lf(a,t,l)))}function tf(e,t,a){var l=yt();dn(e,t,a,l)}function dn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))af(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,a);if(n.hasEagerState=!0,n.eagerState=f,ft(f,c))return ii(e,t,n,0),Ee===null&&ni(),!1}catch{}finally{}if(a=ku(e,t,n,l),a!==null)return ct(a,e,l),lf(a,t,l),!0}return!1}function Mc(e,t,a,l){if(l={lane:2,revertLane:ur(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(t)throw Error(r(479))}else t=ku(e,a,l,2),t!==null&&ct(t,e,2)}function Ni(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function af(e,t){Sl=vi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function lf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,co(e,a)}}var mn={readContext:Ve,use:Si,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};mn.useEffectEvent=Me;var nf={readContext:Ve,use:Si,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Gs,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,zi(4194308,4,ks.bind(null,t,e),a)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var a=Ie();t=t===void 0?null:t;var l=e();if(Ka){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ie();if(a!==void 0){var n=a(t);if(Ka){ua(!0);try{a(t)}finally{ua(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=s0.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=Sc(e);var t=e.queue,a=tf.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:jc,useDeferredValue:function(e,t){var a=Ie();return Nc(a,e,t)},useTransition:function(){var e=Sc(!1);return e=Ws.bind(null,ae,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=Ie();if(se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Ee===null)throw Error(r(349));(re&127)!==0||Ns(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Gs(Ts.bind(null,l,i,e),[e]),l.flags|=2048,zl(9,{destroy:void 0},As.bind(null,l,i,a,t),null),a},useId:function(){var e=Ie(),t=Ee.identifierPrefix;if(se){var a=Bt,l=Ht;a=(l&~(1<<32-st(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=bi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=l0++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Tc,useFormState:Hs,useActionState:Hs,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mc.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:vc,useCacheRefresh:function(){return Ie().memoizedState=o0.bind(null,ae)},useEffectEvent:function(e){var t=Ie(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Rc={readContext:Ve,use:Si,useCallback:Ks,useContext:Ve,useEffect:zc,useImperativeHandle:Vs,useInsertionEffect:Qs,useLayoutEffect:Zs,useMemo:Js,useReducer:Ei,useRef:Ys,useState:function(){return Ei(Jt)},useDebugValue:jc,useDeferredValue:function(e,t){var a=Oe();return $s(a,be.memoizedState,e,t)},useTransition:function(){var e=Ei(Jt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:js,useId:Is,useHostTransitionStatus:Tc,useFormState:Bs,useActionState:Bs,useOptimistic:function(e,t){var a=Oe();return _s(a,be,e,t)},useMemoCache:vc,useCacheRefresh:ef};Rc.useEffectEvent=Xs;var uf={readContext:Ve,use:Si,useCallback:Ks,useContext:Ve,useEffect:zc,useImperativeHandle:Vs,useInsertionEffect:Qs,useLayoutEffect:Zs,useMemo:Js,useReducer:xc,useRef:Ys,useState:function(){return xc(Jt)},useDebugValue:jc,useDeferredValue:function(e,t){var a=Oe();return be===null?Nc(a,e,t):$s(a,be.memoizedState,e,t)},useTransition:function(){var e=xc(Jt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:js,useId:Is,useHostTransitionStatus:Tc,useFormState:qs,useActionState:qs,useOptimistic:function(e,t){var a=Oe();return be!==null?_s(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vc,useCacheRefresh:ef};uf.useEffectEvent=Xs;function _c(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=yt(),n=ha(l);n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(ct(t,e,l),cn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=yt(),n=ha(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(ct(t,e,l),cn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=yt(),l=ha(a);l.tag=2,t!=null&&(l.callback=t),t=pa(e,l,a),t!==null&&(ct(t,e,a),cn(t,e,a))}};function cf(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(n,i):!0}function rf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Cc.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function of(e){li(e)}function sf(e){console.error(e)}function ff(e){li(e)}function Ai(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function df(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Oc(e,t,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Ai(e,t)},a}function mf(e){return e=ha(e),e.tag=3,e}function hf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){df(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){df(t,a,l),typeof n!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function f0(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,n,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return At===null?Li():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===mi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),lr(e,l,n)),!1;case 22:return a.flags|=65536,l===mi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),lr(e,l,n)),!1}throw Error(r(435,a.tag))}return lr(e,l,n),Li(),!1}if(se)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Fu&&(e=Error(r(422),{cause:l}),tn(Et(e,a)))):(l!==Fu&&(t=Error(r(423),{cause:l}),tn(Et(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Et(l,a),n=Oc(e.stateNode,l,n),rc(e,n),Re!==4&&(Re=2)),!1;var i=Error(r(520),{cause:l});if(i=Et(i,a),Sn===null?Sn=[i]:Sn.push(i),Re!==4&&(Re=2),t===null)return!0;l=Et(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Oc(a.stateNode,l,e),rc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=mf(n),hf(n,e,a,l),rc(a,n),!1}a=a.return}while(a!==null);return!1}var Dc=Error(r(461)),Be=!1;function Ke(e,t,a,l){t.child=e===null?ys(t,null,a,l):Va(t,e.child,a,l)}function pf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return Xa(t),l=hc(e,t,a,c,i,n),f=pc(),e!==null&&!Be?(gc(e,t,n),$t(e,t,n)):(se&&f&&$u(t),t.flags|=1,Ke(e,t,l,n),t.child)}function gf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Vu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,yf(e,t,i,l,n)):(e=ci(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Gc(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(c,l)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=Qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function yf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Pl(i,l)&&e.ref===t.ref)if(Be=!1,t.pendingProps=l=i,Gc(e,n))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,$t(e,t,n)}return wc(e,t,a,l,n)}function vf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return bf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fi(t,i!==null?i.cachePool:null),i!==null?xs(t,i):sc(),Ss(t);else return l=t.lanes=536870912,bf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(fi(t,i.cachePool),xs(t,i),ya(),t.memoizedState=null):(e!==null&&fi(t,null),sc(),ya());return Ke(e,t,n,a),t.child}function hn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bf(e,t,a,l,n){var i=nc();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&fi(t,null),sc(),Ss(t),e!==null&&pl(e,t,l,!0),t.childLanes=n,null}function Ti(e,t){return t=Ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xf(e,t,a){return Va(t,e.child,null,a),e=Ti(t,t.pendingProps),e.flags|=2,ht(t),t.memoizedState=null,e}function d0(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(l.mode==="hidden")return e=Ti(t,l),t.lanes=536870912,hn(null,e);if(dc(t),(e=je)?(e=Od(e,Nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=as(e),a.return=t,t.child=a,ke=t,je=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return Ti(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(dc(t),n)if(t.flags&256)t.flags&=-257,t=xf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Be||pl(e,t,a,!1),n=(a&e.childLanes)!==0,Be||n){if(l=Ee,l!==null&&(c=ro(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,La(e,c),ct(l,e,c),Dc;Li(),t=xf(e,t,a)}else e=i.treeContext,je=Tt(c.nextSibling),ke=t,se=!0,sa=null,Nt=!1,e!==null&&is(t,e),t=Ti(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Mi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function wc(e,t,a,l,n){return Xa(t),a=hc(e,t,a,l,void 0,n),l=pc(),e!==null&&!Be?(gc(e,t,n),$t(e,t,n)):(se&&l&&$u(t),t.flags|=1,Ke(e,t,a,n),t.child)}function Sf(e,t,a,l,n,i){return Xa(t),t.updateQueue=null,a=zs(t,l,a,n),Es(e),l=pc(),e!==null&&!Be?(gc(e,t,i),$t(e,t,i)):(se&&l&&$u(t),t.flags|=1,Ke(e,t,a,i),t.child)}function Ef(e,t,a,l,n){if(Xa(t),t.stateNode===null){var i=fl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Ve(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},uc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Ve(c):fl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(_c(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Cc.enqueueReplaceState(i,i.state,null),on(t,l,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,p=Ja(a,f);i.props=p;var j=i.context,_=a.contextType;c=fl,typeof _=="object"&&_!==null&&(c=Ve(_));var D=a.getDerivedStateFromProps;_=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||j!==c)&&rf(t,i,l,c),ma=!1;var N=t.memoizedState;i.state=N,on(t,l,i,n),rn(),j=t.memoizedState,f||N!==j||ma?(typeof D=="function"&&(_c(t,a,D,l),j=t.memoizedState),(p=ma||cf(t,a,p,l,N,j,c))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=c,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,cc(e,t),c=t.memoizedProps,_=Ja(a,c),i.props=_,D=t.pendingProps,N=i.context,j=a.contextType,p=fl,typeof j=="object"&&j!==null&&(p=Ve(j)),f=a.getDerivedStateFromProps,(j=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==D||N!==p)&&rf(t,i,l,p),ma=!1,N=t.memoizedState,i.state=N,on(t,l,i,n),rn();var M=t.memoizedState;c!==D||N!==M||ma||e!==null&&e.dependencies!==null&&oi(e.dependencies)?(typeof f=="function"&&(_c(t,a,f,l),M=t.memoizedState),(_=ma||cf(t,a,_,l,N,M,p)||e!==null&&e.dependencies!==null&&oi(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,M,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,M,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=p,l=_):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Mi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Va(t,e.child,null,n),t.child=Va(t,null,a,n)):Ke(e,t,a,n),t.memoizedState=i.state,e=t.child):e=$t(e,t,n),e}function zf(e,t,a,l){return Ya(),t.flags|=256,Ke(e,t,a,l),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:fs()}}function Bc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function jf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?ga(t):ya(),(e=je)?(e=Od(e,Nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=as(e),a.return=t,t.child=a,ke=t,je=null)):e=null,e===null)throw fa(t);return br(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,n?(ya(),n=t.mode,f=Ri({mode:"hidden",children:f},n),l=qa(l,n,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=Hc(a),l.childLanes=Bc(e,c,a),t.memoizedState=Uc,hn(null,l)):(ga(t),Lc(t,f))}var p=e.memoizedState;if(p!==null&&(f=p.dehydrated,f!==null)){if(i)t.flags&256?(ga(t),t.flags&=-257,t=qc(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),f=l.fallback,n=t.mode,l=Ri({mode:"visible",children:l.children},n),f=qa(f,n,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,Va(t,e.child,null,a),l=t.child,l.memoizedState=Hc(a),l.childLanes=Bc(e,c,a),t.memoizedState=Uc,t=hn(null,l));else if(ga(t),br(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var j=c.dgst;c=j,l=Error(r(419)),l.stack="",l.digest=c,tn({value:l,source:null,stack:null}),t=qc(e,t,a)}else if(Be||pl(e,t,a,!1),c=(a&e.childLanes)!==0,Be||c){if(c=Ee,c!==null&&(l=ro(c,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,La(e,l),ct(c,e,l),Dc;vr(f)||Li(),t=qc(e,t,a)}else vr(f)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,je=Tt(f.nextSibling),ke=t,se=!0,sa=null,Nt=!1,e!==null&&is(t,e),t=Lc(t,l.children),t.flags|=4096);return t}return n?(ya(),f=l.fallback,n=t.mode,p=e.child,j=p.sibling,l=Qt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,j!==null?f=Qt(j,f):(f=qa(f,n,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,hn(null,l),l=t.child,f=e.child.memoizedState,f===null?f=Hc(a):(n=f.cachePool,n!==null?(p=Ue._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=fs(),f={baseLanes:f.baseLanes|a,cachePool:n}),l.memoizedState=f,l.childLanes=Bc(e,c,a),t.memoizedState=Uc,hn(e.child,l)):(ga(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Lc(e,t){return t=Ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ri(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function qc(e,t,a){return Va(t,e.child,null,a),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ec(e.return,t,a)}function Yc(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Af(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Ce.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,Q(Ce,c),Ke(e,t,l,a),l=se?en:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,a,t);else if(e.tag===19)Nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Yc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Yc(t,!0,a,null,i,l);break;case"together":Yc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function $t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&oi(e)))}function m0(e,t,a){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),da(t,Ue,e.memoizedState.cache),Ya();break;case 27:case 5:ql(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,dc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?jf(e,t,a):(ga(t),e=$t(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Af(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(Ce,Ce.current),l)break;return null;case 22:return t.lanes=0,vf(e,t,a,t.pendingProps);case 24:da(t,Ue,e.memoizedState.cache)}return $t(e,t,a)}function Tf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Gc(e,a)&&(t.flags&128)===0)return Be=!1,m0(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,se&&(t.flags&1048576)!==0&&ns(t,en,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e=="function")Vu(e)?(l=Ja(e,l),t.tag=1,t=Ef(null,t,e,l,a)):(t.tag=0,t=wc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===I){t.tag=11,t=pf(null,t,e,l,a);break e}else if(n===J){t.tag=14,t=gf(null,t,e,l,a);break e}}throw t=vt(e)||e,Error(r(306,t,""))}}return t;case 0:return wc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ja(l,t.pendingProps),Ef(e,t,l,n,a);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,cc(e,t),on(t,l,null,a);var c=t.memoizedState;if(l=c.cache,da(t,Ue,l),l!==i.cache&&tc(t,[Ue],a,!0),rn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=zf(e,t,l,a);break e}else if(l!==n){n=Et(Error(r(424)),t),tn(n),t=zf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Tt(e.firstChild),ke=t,se=!0,sa=null,Nt=!0,a=ys(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ya(),l===n){t=$t(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return Mi(e,t),e===null?(a=Ld(t.type,null,t.pendingProps,null))?t.memoizedState=a:se||(a=t.type,e=t.pendingProps,l=ki(ie.current).createElement(a),l[Ze]=t,l[tt]=e,Je(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=Ld(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ql(t),e===null&&se&&(l=t.stateNode=Ud(t.type,t.pendingProps,ie.current),ke=t,Nt=!0,n=je,Na(t.type)?(xr=n,je=Tt(l.firstChild)):je=n),Ke(e,t,t.pendingProps.children,a),Mi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=l=je)&&(l=Q0(l,t.type,t.pendingProps,Nt),l!==null?(t.stateNode=l,ke=t,je=Tt(l.firstChild),Nt=!1,n=!0):n=!1),n||fa(t)),ql(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,pr(n,i)?l=null:c!==null&&pr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=hc(e,t,n0,null,null,a),Rn._currentValue=n),Mi(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&se&&((e=a=je)&&(a=Z0(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,ke=t,je=null,e=!0):e=!1),e||fa(t)),null;case 13:return jf(e,t,a);case 4:return Pe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Va(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return pf(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,da(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Xa(t),n=Ve(n),l=l(n),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return gf(e,t,t.type,t.pendingProps,a);case 15:return yf(e,t,t.type,t.pendingProps,a);case 19:return Af(e,t,a);case 31:return d0(e,t,a);case 22:return vf(e,t,a,t.pendingProps);case 24:return Xa(t),l=Ve(Ue),e===null?(n=nc(),n===null&&(n=Ee,i=ac(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},uc(t),da(t,Ue,n)):((e.lanes&a)!==0&&(cc(e,t),on(t,null,null,a),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),da(t,Ue,l)):(l=i.cache,da(t,Ue,l),l!==n.cache&&tc(t,[Ue],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Wt(e){e.flags|=4}function Xc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ed())e.flags|=8192;else throw ka=mi,ic}else e.flags&=-16777217}function Mf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qd(t))if(ed())e.flags|=8192;else throw ka=mi,ic}function _i(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?io():536870912,e.lanes|=t,Tl|=t)}function pn(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function h0(e,t,a){var l=t.pendingProps;switch(Wu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vt(Ue),_e(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pu())),Ne(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Wt(t),i!==null?(Ne(t),Mf(t,i)):(Ne(t),Xc(t,n,null,l,a))):i?i!==e.memoizedState?(Wt(t),Ne(t),Mf(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),Ne(t),Xc(t,n,e,l,a)),null;case 27:if(Gn(t),a=ie.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Ne(t),null}e=V.current,hl(t)?us(t):(e=Ud(n,l,a),t.stateNode=e,Wt(t))}return Ne(t),null;case 5:if(Gn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Ne(t),null}if(i=V.current,hl(t))us(t);else{var c=ki(ie.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Ze]=t,i[tt]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Je(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return Ne(t),Xc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=ie.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||jd(e.nodeValue,a)),e||fa(t,!0)}else e=ki(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=hl(t),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ze]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ht(t),t):(ht(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ze]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ht(t),t):(ht(t),null)}return ht(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),_i(t,t.updateQueue),Ne(t),null);case 4:return _e(),e===null&&sr(t.stateNode.containerInfo),Ne(t),null;case 10:return Vt(t.type),Ne(t),null;case 19:if(w(Ce),l=t.memoizedState,l===null)return Ne(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)pn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=yi(e),i!==null){for(t.flags|=128,pn(l,!1),e=i.updateQueue,t.updateQueue=e,_i(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ts(a,e),a=a.sibling;return Q(Ce,Ce.current&1|2),se&&Zt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&rt()>Ui&&(t.flags|=128,n=!0,pn(l,!1),t.lanes=4194304)}else{if(!n)if(e=yi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,_i(t,e),pn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!se)return Ne(t),null}else 2*rt()-l.renderingStartTime>Ui&&a!==536870912&&(t.flags|=128,n=!0,pn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=rt(),e.sibling=null,a=Ce.current,Q(Ce,n?a&1|2:a&1),se&&Zt(t,l.treeForkCount),e):(Ne(t),null);case 22:case 23:return ht(t),fc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&_i(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&w(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Ue),Ne(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function p0(e,t){switch(Wu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Ue),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gn(t),null;case 31:if(t.memoizedState!==null){if(ht(t),t.alternate===null)throw Error(r(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(Ce),null;case 4:return _e(),null;case 10:return Vt(t.type),null;case 22:case 23:return ht(t),fc(),e!==null&&w(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Ue),null;case 25:return null;default:return null}}function Rf(e,t){switch(Wu(t),t.tag){case 3:Vt(Ue),_e();break;case 26:case 27:case 5:Gn(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&ht(t);break;case 13:ht(t);break;case 19:w(Ce);break;case 10:Vt(t.type);break;case 22:case 23:ht(t),fc(),e!==null&&w(Qa);break;case 24:Vt(Ue)}}function gn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(f){ve(t,t.return,f)}}function va(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var p=a,j=f;try{j()}catch(_){ve(n,p,_)}}}l=l.next}while(l!==i)}}catch(_){ve(t,t.return,_)}}function _f(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{bs(t,a)}catch(l){ve(e,e.return,l)}}}function Cf(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ve(e,t,l)}}function yn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ve(e,t,n)}}function Lt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ve(e,t,n)}else a.current=null}function Of(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ve(e,e.return,n)}}function Qc(e,t,a){try{var l=e.stateNode;B0(l,e.type,a,t),l[tt]=t}catch(n){ve(e,e.return,n)}}function Df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Na(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(kc(e,t,a),e=e.sibling;e!==null;)kc(e,t,a),e=e.sibling}function Ci(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ci(e,t,a),e=e.sibling;e!==null;)Ci(e,t,a),e=e.sibling}function wf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[Ze]=e,t[tt]=a}catch(i){ve(e,e.return,i)}}var Ft=!1,Le=!1,Vc=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function g0(e,t){if(e=e.containerInfo,mr=Pi,e=Vo(e),qu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,f=-1,p=-1,j=0,_=0,D=e,N=null;t:for(;;){for(var M;D!==a||n!==0&&D.nodeType!==3||(f=c+n),D!==i||l!==0&&D.nodeType!==3||(p=c+l),D.nodeType===3&&(c+=D.nodeValue.length),(M=D.firstChild)!==null;)N=D,D=M;for(;;){if(D===e)break t;if(N===a&&++j===n&&(f=c),N===i&&++_===l&&(p=c),(M=D.nextSibling)!==null)break;D=N,N=D.parentNode}D=M}a=f===-1||p===-1?null:{start:f,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(hr={focusedElem:e,selectionRange:a},Pi=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var k=Ja(a.type,n);e=l.getSnapshotBeforeUpdate(k,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){ve(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Hf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),l&4&&gn(5,a);break;case 1:if(It(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ve(a,a.return,c)}else{var n=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ve(a,a.return,c)}}l&64&&_f(a),l&512&&yn(a,a.return);break;case 3:if(It(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{bs(e,t)}catch(c){ve(a,a.return,c)}}break;case 27:t===null&&l&4&&wf(a);case 26:case 5:It(e,a),t===null&&l&4&&Of(a),l&512&&yn(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),l&4&&qf(e,a);break;case 13:It(e,a),l&4&&Yf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=N0.bind(null,a),k0(e,a))));break;case 22:if(l=a.memoizedState!==null||Ft,!l){t=t!==null&&t.memoizedState!==null||Le,n=Ft;var i=Le;Ft=l,(Le=t)&&!i?ea(e,a,(a.subtreeFlags&8772)!==0):It(e,a),Ft=n,Le=i}break;case 30:break;default:It(e,a)}}function Bf(e){var t=e.alternate;t!==null&&(e.alternate=null,Bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,lt=!1;function Pt(e,t,a){for(a=a.child;a!==null;)Lf(e,t,a),a=a.sibling}function Lf(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Yl,a)}catch{}switch(a.tag){case 26:Le||Lt(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Lt(a,t);var l=Ae,n=lt;Na(a.type)&&(Ae=a.stateNode,lt=!1),Pt(e,t,a),An(a.stateNode),Ae=l,lt=n;break;case 5:Le||Lt(a,t);case 6:if(l=Ae,n=lt,Ae=null,Pt(e,t,a),Ae=l,lt=n,Ae!==null)if(lt)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(i){ve(a,t,i)}else try{Ae.removeChild(a.stateNode)}catch(i){ve(a,t,i)}break;case 18:Ae!==null&&(lt?(e=Ae,_d(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ul(e)):_d(Ae,a.stateNode));break;case 4:l=Ae,n=lt,Ae=a.stateNode.containerInfo,lt=!0,Pt(e,t,a),Ae=l,lt=n;break;case 0:case 11:case 14:case 15:va(2,a,t),Le||va(4,a,t),Pt(e,t,a);break;case 1:Le||(Lt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cf(a,t,l)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,Pt(e,t,a),Le=l;break;default:Pt(e,t,a)}}function qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ul(e)}catch(a){ve(t,t.return,a)}}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ul(e)}catch(a){ve(t,t.return,a)}}function y0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Uf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Uf),t;default:throw Error(r(435,e.tag))}}function Oi(e,t){var a=y0(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=A0.bind(null,e,l);l.then(n,n)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Na(f.type)){Ae=f.stateNode,lt=!1;break e}break;case 5:Ae=f.stateNode,lt=!1;break e;case 3:case 4:Ae=f.stateNode.containerInfo,lt=!0;break e}f=f.return}if(Ae===null)throw Error(r(160));Lf(i,c,n),Ae=null,lt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}var Ot=null;function Gf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),it(e),l&4&&(va(3,e,e.return),gn(3,e),va(5,e,e.return));break;case 1:nt(t,e),it(e),l&512&&(Le||a===null||Lt(a,a.return)),l&64&&Ft&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ot;if(nt(t,e),it(e),l&512&&(Le||a===null||Lt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ql]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[Ze]=e,Ye(i),l=i;break e;case"link":var c=Gd("link","href",n).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(c=Gd("meta","content",n).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[Ze]=e,Ye(i),l=i}e.stateNode=l}else Xd(n,e.type,e.stateNode);else e.stateNode=Yd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Xd(n,e.type,e.stateNode):Yd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),it(e),l&512&&(Le||a===null||Lt(a,a.return)),a!==null&&l&4&&Qc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),it(e),l&512&&(Le||a===null||Lt(a,a.return)),e.flags&32){n=e.stateNode;try{nl(n,"")}catch(k){ve(e,e.return,k)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Qc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Vc=!0);break;case 6:if(nt(t,e),it(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(k){ve(e,e.return,k)}}break;case 3:if(Ji=null,n=Ot,Ot=Vi(t.containerInfo),nt(t,e),Ot=n,it(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ul(t.containerInfo)}catch(k){ve(e,e.return,k)}Vc&&(Vc=!1,Xf(e));break;case 4:l=Ot,Ot=Vi(e.stateNode.containerInfo),nt(t,e),it(e),Ot=l;break;case 12:nt(t,e),it(e);break;case 31:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 13:nt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wi=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,j=Ft,_=Le;if(Ft=j||n,Le=_||p,nt(t,e),Le=_,Ft=j,it(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||Ft||Le||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=p.stateNode;var D=p.memoizedProps.style,N=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(k){ve(p,p.return,k)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(k){ve(p,p.return,k)}}}else if(t.tag===18){if(a===null){p=t;try{var M=p.stateNode;n?Cd(M,!0):Cd(p.stateNode,!1)}catch(k){ve(p,p.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Oi(e,a))));break;case 19:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 30:break;case 21:break;default:nt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Df(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,i=Zc(e);Ci(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(nl(c,""),a.flags&=-33);var f=Zc(e);Ci(e,f,c);break;case 3:case 4:var p=a.stateNode.containerInfo,j=Zc(e);kc(e,j,p);break;default:throw Error(r(161))}}catch(_){ve(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hf(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),$a(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Cf(t,t.return,a),$a(t);break;case 27:An(t.stateNode);case 26:case 5:Lt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:ea(n,i,a),gn(4,i);break;case 1:if(ea(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){ve(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var f=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)vs(p[n],f)}catch(j){ve(l,l.return,j)}}a&&c&64&&_f(i),yn(i,i.return);break;case 27:wf(i);case 26:case 5:ea(n,i,a),a&&l===null&&c&4&&Of(i),yn(i,i.return);break;case 12:ea(n,i,a);break;case 31:ea(n,i,a),a&&c&4&&qf(n,i);break;case 13:ea(n,i,a),a&&c&4&&Yf(n,i);break;case 22:i.memoizedState===null&&ea(n,i,a),yn(i,i.return);break;case 30:break;default:ea(n,i,a)}t=t.sibling}}function Kc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&an(a))}function Jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qf(e,t,a,l),t=t.sibling}function Qf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),n&2048&&gn(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&an(e)));break;case 12:if(n&2048){Dt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ve(t,t.return,p)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Dt(e,t,a,l):vn(e,t):i._visibility&2?Dt(e,t,a,l):(i._visibility|=2,jl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Kc(c,t);break;case 24:Dt(e,t,a,l),n&2048&&Jc(t.alternate,t);break;default:Dt(e,t,a,l)}}function jl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,f=a,p=l,j=c.flags;switch(c.tag){case 0:case 11:case 15:jl(i,c,f,p,n),gn(8,c);break;case 23:break;case 22:var _=c.stateNode;c.memoizedState!==null?_._visibility&2?jl(i,c,f,p,n):vn(i,c):(_._visibility|=2,jl(i,c,f,p,n)),n&&j&2048&&Kc(c.alternate,c);break;case 24:jl(i,c,f,p,n),n&&j&2048&&Jc(c.alternate,c);break;default:jl(i,c,f,p,n)}t=t.sibling}}function vn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:vn(a,l),n&2048&&Kc(l.alternate,l);break;case 24:vn(a,l),n&2048&&Jc(l.alternate,l);break;default:vn(a,l)}t=t.sibling}}var bn=8192;function Nl(e,t,a){if(e.subtreeFlags&bn)for(e=e.child;e!==null;)Zf(e,t,a),e=e.sibling}function Zf(e,t,a){switch(e.tag){case 26:Nl(e,t,a),e.flags&bn&&e.memoizedState!==null&&lp(a,Ot,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,a);break;case 3:case 4:var l=Ot;Ot=Vi(e.stateNode.containerInfo),Nl(e,t,a),Ot=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=bn,bn=16777216,Nl(e,t,a),bn=l):Nl(e,t,a));break;default:Nl(e,t,a)}}function kf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Kf(l,e)}kf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vf(e),e=e.sibling}function Vf(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&va(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):xn(e);break;default:xn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Kf(l,e)}kf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Kf(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:an(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var n=l.sibling,i=l.return;if(Bf(l),l===a){Ge=null;break e}if(n!==null){n.return=i,Ge=n;break e}Ge=i}}}var v0={getCacheForType:function(e){var t=Ve(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ve(Ue).controller.signal}},b0=typeof WeakMap=="function"?WeakMap:Map,he=0,Ee=null,ue=null,re=0,ye=0,pt=null,ba=!1,Al=!1,$c=!1,ta=0,Re=0,xa=0,Wa=0,Wc=0,gt=0,Tl=0,Sn=null,ut=null,Fc=!1,wi=0,Jf=0,Ui=1/0,Hi=null,Sa=null,qe=0,Ea=null,Ml=null,aa=0,Pc=0,Ic=null,$f=null,En=0,er=null;function yt(){return(he&2)!==0&&re!==0?re&-re:C.T!==null?ur():oo()}function Wf(){if(gt===0)if((re&536870912)===0||se){var e=Zn;Zn<<=1,(Zn&3932160)===0&&(Zn=262144),gt=e}else gt=536870912;return e=mt.current,e!==null&&(e.flags|=32),gt}function ct(e,t,a){(e===Ee&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),za(e,re,gt,!1)),Xl(e,a),((he&2)===0||e!==Ee)&&(e===Ee&&((he&2)===0&&(Wa|=a),Re===4&&za(e,re,gt,!1)),qt(e))}function Ff(e,t,a){if((he&6)!==0)throw Error(r(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Gl(e,t),n=l?E0(e,t):ar(e,t,!0),i=l;do{if(n===0){Al&&!l&&za(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!x0(a)){n=ar(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=Sn;var p=f.current.memoizedState.isDehydrated;if(p&&(Rl(f,c).flags|=256),c=ar(f,c,!1),c!==2){if($c&&!p){f.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=ut,ut=n,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Rl(e,0),za(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:za(l,t,gt,!ba);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=wi+300-rt(),10<n)){if(za(l,t,gt,!ba),Vn(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=Md(Pf.bind(null,l,a,ut,Hi,Fc,t,gt,Wa,Tl,ba,i,"Throttled",-0,0),n);break e}Pf(l,a,ut,Hi,Fc,t,gt,Wa,Tl,ba,i,null,-0,0)}}break}while(!0);qt(e)}function Pf(e,t,a,l,n,i,c,f,p,j,_,D,N,M){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Zf(t,i,D);var k=(i&62914560)===i?wi-rt():(i&4194048)===i?Jf-rt():0;if(k=np(D,k),k!==null){aa=i,e.cancelPendingCommit=k(ud.bind(null,e,t,i,a,l,n,c,f,p,_,D,null,N,M)),za(e,i,c,!j);return}}ud(e,t,i,a,l,n,c,f,p)}function x0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ft(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function za(e,t,a,l){t&=~Wc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-st(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&uo(e,a,t)}function Bi(){return(he&6)===0?(zn(0),!1):!0}function tr(){if(ue!==null){if(ye===0)var e=ue.return;else e=ue,kt=Ga=null,yc(e),bl=null,nn=0,e=ue;for(;e!==null;)Rf(e.alternate,e),e=e.return;ue=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Y0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,tr(),Ee=e,ue=a=Qt(e.current,null),re=t,ye=0,pt=null,ba=!1,Al=Gl(e,t),$c=!1,Tl=gt=Wc=Wa=xa=Re=0,ut=Sn=null,Fc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-st(l),i=1<<n;t|=e[n],l&=~i}return ta=t,ni(),a}function If(e,t){ae=null,C.H=mn,t===vl||t===di?(t=hs(),ye=3):t===ic?(t=hs(),ye=4):ye=t===Dc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ue===null&&(Re=1,Ai(e,Et(t,e.current)))}function ed(){var e=mt.current;return e===null?!0:(re&4194048)===re?At===null:(re&62914560)===re||(re&536870912)!==0?e===At:!1}function td(){var e=C.H;return C.H=mn,e===null?mn:e}function ad(){var e=C.A;return C.A=v0,e}function Li(){Re=4,ba||(re&4194048)!==re&&mt.current!==null||(Al=!0),(xa&134217727)===0&&(Wa&134217727)===0||Ee===null||za(Ee,re,gt,!1)}function ar(e,t,a){var l=he;he|=2;var n=td(),i=ad();(Ee!==e||re!==t)&&(Hi=null,Rl(e,t)),t=!1;var c=Re;e:do try{if(ye!==0&&ue!==null){var f=ue,p=pt;switch(ye){case 8:tr(),c=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var j=ye;if(ye=0,pt=null,_l(e,f,p,j),a&&Al){c=0;break e}break;default:j=ye,ye=0,pt=null,_l(e,f,p,j)}}S0(),c=Re;break}catch(_){If(e,_)}while(!0);return t&&e.shellSuspendCounter++,kt=Ga=null,he=l,C.H=n,C.A=i,ue===null&&(Ee=null,re=0,ni()),c}function S0(){for(;ue!==null;)ld(ue)}function E0(e,t){var a=he;he|=2;var l=td(),n=ad();Ee!==e||re!==t?(Hi=null,Ui=rt()+500,Rl(e,t)):Al=Gl(e,t);e:do try{if(ye!==0&&ue!==null){t=ue;var i=pt;t:switch(ye){case 1:ye=0,pt=null,_l(e,t,i,1);break;case 2:case 9:if(ds(i)){ye=0,pt=null,nd(t);break}t=function(){ye!==2&&ye!==9||Ee!==e||(ye=7),qt(e)},i.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:ds(i)?(ye=0,pt=null,nd(t)):(ye=0,pt=null,_l(e,t,i,7));break;case 5:var c=null;switch(ue.tag){case 26:c=ue.memoizedState;case 5:case 27:var f=ue;if(c?Qd(c):f.stateNode.complete){ye=0,pt=null;var p=f.sibling;if(p!==null)ue=p;else{var j=f.return;j!==null?(ue=j,qi(j)):ue=null}break t}}ye=0,pt=null,_l(e,t,i,5);break;case 6:ye=0,pt=null,_l(e,t,i,6);break;case 8:tr(),Re=6;break e;default:throw Error(r(462))}}z0();break}catch(_){If(e,_)}while(!0);return kt=Ga=null,C.H=l,C.A=n,he=a,ue!==null?0:(Ee=null,re=0,ni(),Re)}function z0(){for(;ue!==null&&!Vm();)ld(ue)}function ld(e){var t=Tf(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?qi(e):ue=t}function nd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Sf(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=Sf(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:yc(t);default:Rf(a,t),t=ue=ts(t,ta),t=Tf(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?qi(e):ue=t}function _l(e,t,a,l){kt=Ga=null,yc(t),bl=null,nn=0;var n=t.return;try{if(f0(e,n,t,a,re)){Re=1,Ai(e,Et(a,e.current)),ue=null;return}}catch(i){if(n!==null)throw ue=n,i;Re=1,Ai(e,Et(a,e.current)),ue=null;return}t.flags&32768?(se||l===1?e=!0:Al||(re&536870912)!==0?e=!1:(ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),id(t,e)):qi(t)}function qi(e){var t=e;do{if((t.flags&32768)!==0){id(t,ba);return}e=t.return;var a=h0(t.alternate,t,ta);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Re===0&&(Re=5)}function id(e,t){do{var a=p0(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);Re=6,ue=null}function ud(e,t,a,l,n,i,c,f,p){e.cancelPendingCommit=null;do Yi();while(qe!==0);if((he&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=Zu,ah(e,a,i,c,f,p),e===Ee&&(ue=Ee=null,re=0),Ml=t,Ea=e,aa=a,Pc=i,Ic=n,$f=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,T0(Xn,function(){return fd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,n=X.p,X.p=2,c=he,he|=4;try{g0(e,t,a)}finally{he=c,X.p=n,C.T=l}}qe=1,cd(),rd(),od()}}function cd(){if(qe===1){qe=0;var e=Ea,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=X.p;X.p=2;var n=he;he|=4;try{Gf(t,e);var i=hr,c=Vo(e.containerInfo),f=i.focusedElem,p=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&ko(f.ownerDocument.documentElement,f)){if(p!==null&&qu(f)){var j=p.start,_=p.end;if(_===void 0&&(_=j),"selectionStart"in f)f.selectionStart=j,f.selectionEnd=Math.min(_,f.value.length);else{var D=f.ownerDocument||document,N=D&&D.defaultView||window;if(N.getSelection){var M=N.getSelection(),k=f.textContent.length,F=Math.min(p.start,k),Se=p.end===void 0?F:Math.min(p.end,k);!M.extend&&F>Se&&(c=Se,Se=F,F=c);var E=Zo(f,F),y=Zo(f,Se);if(E&&y&&(M.rangeCount!==1||M.anchorNode!==E.node||M.anchorOffset!==E.offset||M.focusNode!==y.node||M.focusOffset!==y.offset)){var z=D.createRange();z.setStart(E.node,E.offset),M.removeAllRanges(),F>Se?(M.addRange(z),M.extend(y.node,y.offset)):(z.setEnd(y.node,y.offset),M.addRange(z))}}}}for(D=[],M=f;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var O=D[f];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Pi=!!mr,hr=mr=null}finally{he=n,X.p=l,C.T=a}}e.current=t,qe=2}}function rd(){if(qe===2){qe=0;var e=Ea,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=X.p;X.p=2;var n=he;he|=4;try{Hf(e,t.alternate,t)}finally{he=n,X.p=l,C.T=a}}qe=3}}function od(){if(qe===4||qe===3){qe=0,Km();var e=Ea,t=Ml,a=aa,l=$f;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ml=Ea=null,sd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Sa=null),xu(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,n=X.p,X.p=2,C.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];i(f.value,{componentStack:f.stack})}}finally{C.T=t,X.p=n}}(aa&3)!==0&&Yi(),qt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===er?En++:(En=0,er=e):En=0,zn(0)}}function sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,an(t)))}function Yi(){return cd(),rd(),od(),fd()}function fd(){if(qe!==5)return!1;var e=Ea,t=Pc;Pc=0;var a=xu(aa),l=C.T,n=X.p;try{X.p=32>a?32:a,C.T=null,a=Ic,Ic=null;var i=Ea,c=aa;if(qe=0,Ml=Ea=null,aa=0,(he&6)!==0)throw Error(r(331));var f=he;if(he|=4,Vf(i.current),Qf(i,i.current,c,a),he=f,zn(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Yl,i)}catch{}return!0}finally{X.p=n,C.T=l,sd(e,t)}}function dd(e,t,a){t=Et(a,t),t=Oc(e.stateNode,t,2),e=pa(e,t,2),e!==null&&(Xl(e,2),qt(e))}function ve(e,t,a){if(e.tag===3)dd(e,e,a);else for(;t!==null;){if(t.tag===3){dd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=Et(a,e),a=mf(2),l=pa(t,a,2),l!==null&&(hf(a,l,t,e),Xl(l,2),qt(l));break}}t=t.return}}function lr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new b0;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||($c=!0,n.add(a),e=j0.bind(null,e,t,a),t.then(e,e))}function j0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(re&a)===a&&(Re===4||Re===3&&(re&62914560)===re&&300>rt()-wi?(he&2)===0&&Rl(e,0):Wc|=a,Tl===re&&(Tl=0)),qt(e)}function md(e,t){t===0&&(t=io()),e=La(e,t),e!==null&&(Xl(e,t),qt(e))}function N0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),md(e,a)}function A0(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),md(e,a)}function T0(e,t){return gu(e,t)}var Gi=null,Cl=null,nr=!1,Xi=!1,ir=!1,ja=0;function qt(e){e!==Cl&&e.next===null&&(Cl===null?Gi=Cl=e:Cl=Cl.next=e),Xi=!0,nr||(nr=!0,R0())}function zn(e,t){if(!ir&&Xi){ir=!0;do for(var a=!1,l=Gi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,f=l.pingedLanes;i=(1<<31-st(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,yd(l,i))}else i=re,i=Vn(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Gl(l,i)||(a=!0,yd(l,i));l=l.next}while(a);ir=!1}}function M0(){hd()}function hd(){Xi=nr=!1;var e=0;ja!==0&&q0()&&(e=ja);for(var t=rt(),a=null,l=Gi;l!==null;){var n=l.next,i=pd(l,t);i===0?(l.next=null,a===null?Gi=n:a.next=n,n===null&&(Cl=a)):(a=l,(e!==0||(i&3)!==0)&&(Xi=!0)),l=n}qe!==0&&qe!==5||zn(e),ja!==0&&(ja=0)}function pd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-st(i),f=1<<c,p=n[c];p===-1?((f&a)===0||(f&l)!==0)&&(n[c]=th(f,t)):p<=t&&(e.expiredLanes|=f),i&=~f}if(t=Ee,a=re,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&yu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&yu(l),xu(a)){case 2:case 8:a=lo;break;case 32:a=Xn;break;case 268435456:a=no;break;default:a=Xn}return l=gd.bind(null,e),a=gu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&yu(l),e.callbackPriority=2,e.callbackNode=null,2}function gd(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yi()&&e.callbackNode!==a)return null;var l=re;return l=Vn(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ff(e,l,t),pd(e,rt()),e.callbackNode!=null&&e.callbackNode===a?gd.bind(null,e):null)}function yd(e,t){if(Yi())return null;Ff(e,t,!0)}function R0(){G0(function(){(he&6)!==0?gu(ao,M0):hd()})}function ur(){if(ja===0){var e=gl;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),ja=e}return ja}function vd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wn(""+e)}function bd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function _0(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=vd((n[tt]||null).action),c=l.submitter;c&&(t=(t=c[tt]||null)?vd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new ei("action","action",null,l,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ja!==0){var p=c?bd(n,c):new FormData(n);Ac(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(f.preventDefault(),p=c?bd(n,c):new FormData(n),Ac(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var cr=0;cr<Qu.length;cr++){var rr=Qu[cr],C0=rr.toLowerCase(),O0=rr[0].toUpperCase()+rr.slice(1);Ct(C0,"on"+O0)}Ct($o,"onAnimationEnd"),Ct(Wo,"onAnimationIteration"),Ct(Fo,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Jh,"onTransitionRun"),Ct($h,"onTransitionStart"),Ct(Wh,"onTransitionCancel"),Ct(Po,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));function xd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],p=f.instance,j=f.currentTarget;if(f=f.listener,p!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=j;try{i(n)}catch(_){li(_)}n.currentTarget=null,i=p}else for(c=0;c<l.length;c++){if(f=l[c],p=f.instance,j=f.currentTarget,f=f.listener,p!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=j;try{i(n)}catch(_){li(_)}n.currentTarget=null,i=p}}}}function ce(e,t){var a=t[Su];a===void 0&&(a=t[Su]=new Set);var l=e+"__bubble";a.has(l)||(Sd(t,e,2,!1),a.add(l))}function or(e,t,a){var l=0;t&&(l|=4),Sd(a,e,l,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Qi]){e[Qi]=!0,mo.forEach(function(a){a!=="selectionchange"&&(D0.has(a)||or(a,!1,e),or(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,or("selectionchange",!1,t))}}function Sd(e,t,a,l){switch(Wd(t)){case 2:var n=cp;break;case 8:n=rp;break;default:n=Nr}a=n.bind(null,t,a,e),n=void 0,!_u||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function fr(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=l.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=Ia(f),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){l=i=c;continue e}f=f.parentNode}}l=l.return}No(function(){var j=i,_=Mu(a),D=[];e:{var N=Io.get(e);if(N!==void 0){var M=ei,k=e;switch(e){case"keypress":if(Pn(a)===0)break e;case"keydown":case"keyup":M=Ah;break;case"focusin":k="focus",M=wu;break;case"focusout":k="blur",M=wu;break;case"beforeblur":case"afterblur":M=wu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Rh;break;case $o:case Wo:case Fo:M=yh;break;case Po:M=Ch;break;case"scroll":case"scrollend":M=dh;break;case"wheel":M=Dh;break;case"copy":case"cut":case"paste":M=bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=_o;break;case"toggle":case"beforetoggle":M=Uh}var F=(t&4)!==0,Se=!F&&(e==="scroll"||e==="scrollend"),E=F?N!==null?N+"Capture":null:N;F=[];for(var y=j,z;y!==null;){var O=y;if(z=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||z===null||E===null||(O=kl(y,E),O!=null&&F.push(Nn(y,O,z))),Se)break;y=y.return}0<F.length&&(N=new M(N,k,null,a,_),D.push({event:N,listeners:F}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",N&&a!==Tu&&(k=a.relatedTarget||a.fromElement)&&(Ia(k)||k[Pa]))break e;if((M||N)&&(N=_.window===_?_:(N=_.ownerDocument)?N.defaultView||N.parentWindow:window,M?(k=a.relatedTarget||a.toElement,M=j,k=k?Ia(k):null,k!==null&&(Se=h(k),F=k.tag,k!==Se||F!==5&&F!==27&&F!==6)&&(k=null)):(M=null,k=j),M!==k)){if(F=Mo,O="onMouseLeave",E="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(F=_o,O="onPointerLeave",E="onPointerEnter",y="pointer"),Se=M==null?N:Zl(M),z=k==null?N:Zl(k),N=new F(O,y+"leave",M,a,_),N.target=Se,N.relatedTarget=z,O=null,Ia(_)===j&&(F=new F(E,y+"enter",k,a,_),F.target=z,F.relatedTarget=Se,O=F),Se=O,M&&k)t:{for(F=w0,E=M,y=k,z=0,O=E;O;O=F(O))z++;O=0;for(var W=y;W;W=F(W))O++;for(;0<z-O;)E=F(E),z--;for(;0<O-z;)y=F(y),O--;for(;z--;){if(E===y||y!==null&&E===y.alternate){F=E;break t}E=F(E),y=F(y)}F=null}else F=null;M!==null&&Ed(D,N,M,F,!1),k!==null&&Se!==null&&Ed(D,Se,k,F,!0)}}e:{if(N=j?Zl(j):window,M=N.nodeName&&N.nodeName.toLowerCase(),M==="select"||M==="input"&&N.type==="file")var fe=Lo;else if(Ho(N))if(qo)fe=kh;else{fe=Qh;var K=Xh}else M=N.nodeName,!M||M.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&Au(j.elementType)&&(fe=Lo):fe=Zh;if(fe&&(fe=fe(e,j))){Bo(D,fe,a,_);break e}K&&K(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&Nu(N,"number",N.value)}switch(K=j?Zl(j):window,e){case"focusin":(Ho(K)||K.contentEditable==="true")&&(rl=K,Yu=j,Il=null);break;case"focusout":Il=Yu=rl=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Ko(D,a,_);break;case"selectionchange":if(Kh)break;case"keydown":case"keyup":Ko(D,a,_)}var le;if(Hu)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else cl?wo(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Co&&a.locale!=="ko"&&(cl||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&cl&&(le=Ao()):(ra=_,Cu="value"in ra?ra.value:ra.textContent,cl=!0)),K=Zi(j,oe),0<K.length&&(oe=new Ro(oe,e,null,a,_),D.push({event:oe,listeners:K}),le?oe.data=le:(le=Uo(a),le!==null&&(oe.data=le)))),(le=Bh?Lh(e,a):qh(e,a))&&(oe=Zi(j,"onBeforeInput"),0<oe.length&&(K=new Ro("onBeforeInput","beforeinput",null,a,_),D.push({event:K,listeners:oe}),K.data=le)),_0(D,e,j,a,_)}xd(D,t)})}function Nn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Zi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=kl(e,a),n!=null&&l.unshift(Nn(e,n,i)),n=kl(e,t),n!=null&&l.push(Nn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function w0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ed(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var f=a,p=f.alternate,j=f.stateNode;if(f=f.tag,p!==null&&p===l)break;f!==5&&f!==26&&f!==27||j===null||(p=j,n?(j=kl(a,i),j!=null&&c.unshift(Nn(a,j,p))):n||(j=kl(a,i),j!=null&&c.push(Nn(a,j,p)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var U0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(U0,`
`).replace(H0,"")}function jd(e,t){return t=zd(t),zd(e)===t}function xe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Jn(e,"class",l);break;case"tabIndex":Jn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,a,l);break;case"style":zo(e,l,i);break;case"data":if(t!=="object"){Jn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Wn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",n.name,n,null),xe(e,t,"formEncType",n.formEncType,n,null),xe(e,t,"formMethod",n.formMethod,n,null),xe(e,t,"formTarget",n.formTarget,n,null)):(xe(e,t,"encType",n.encType,n,null),xe(e,t,"method",n.method,n,null),xe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Wn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&ce("scroll",e);break;case"onScrollEnd":l!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Wn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ce("beforetoggle",e),ce("toggle",e),Kn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sh.get(a)||a,Kn(e,a,l))}}function dr(e,t,a,l,n,i){switch(a){case"style":zo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&ce("scroll",e);break;case"onScrollEnd":l!=null&&ce("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ho.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[tt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Kn(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:xe(e,t,i,c,a,null)}}n&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":ce("invalid",e);var f=i=c=n=null,p=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var _=a[l];if(_!=null)switch(l){case"name":n=_;break;case"type":c=_;break;case"checked":p=_;break;case"defaultChecked":j=_;break;case"value":i=_;break;case"defaultValue":f=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,t));break;default:xe(e,t,l,_,a,null)}}bo(e,i,f,p,j,c,n,!1);return;case"select":ce("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(f=a[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:xe(e,t,n,f,a,null)}t=i,a=c,e.multiple=!!l,t!=null?ll(e,!!l,t,!1):a!=null&&ll(e,!!l,a,!0);return;case"textarea":ce("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:xe(e,t,c,f,a,null)}So(e,l,n,i);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xe(e,t,p,l,a,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(l=0;l<jn.length;l++)ce(jn[l],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:xe(e,t,j,l,a,null)}return;default:if(Au(t)){for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!==void 0&&dr(e,t,_,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&xe(e,t,f,l,a,null))}function B0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,p=null,j=null,_=null;for(M in a){var D=a[M];if(a.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":p=D;default:l.hasOwnProperty(M)||xe(e,t,M,null,l,D)}}for(var N in l){var M=l[N];if(D=a[N],l.hasOwnProperty(N)&&(M!=null||D!=null))switch(N){case"type":i=M;break;case"name":n=M;break;case"checked":j=M;break;case"defaultChecked":_=M;break;case"value":c=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:M!==D&&xe(e,t,N,M,l,D)}}ju(e,c,f,p,j,_,i,n);return;case"select":M=c=f=N=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":M=p;default:l.hasOwnProperty(i)||xe(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":N=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==p&&xe(e,t,n,i,l,p)}t=f,a=c,l=M,N!=null?ll(e,!!a,N,!1):!!l!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":M=N=null;for(f in a)if(n=a[f],a.hasOwnProperty(f)&&n!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:xe(e,t,f,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":N=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&xe(e,t,c,n,l,i)}xo(e,N,M);return;case"option":for(var k in a)if(N=a[k],a.hasOwnProperty(k)&&N!=null&&!l.hasOwnProperty(k))switch(k){case"selected":e.selected=!1;break;default:xe(e,t,k,null,l,N)}for(p in l)if(N=l[p],M=a[p],l.hasOwnProperty(p)&&N!==M&&(N!=null||M!=null))switch(p){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:xe(e,t,p,N,l,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)N=a[F],a.hasOwnProperty(F)&&N!=null&&!l.hasOwnProperty(F)&&xe(e,t,F,null,l,N);for(j in l)if(N=l[j],M=a[j],l.hasOwnProperty(j)&&N!==M&&(N!=null||M!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:xe(e,t,j,N,l,M)}return;default:if(Au(t)){for(var Se in a)N=a[Se],a.hasOwnProperty(Se)&&N!==void 0&&!l.hasOwnProperty(Se)&&dr(e,t,Se,void 0,l,N);for(_ in l)N=l[_],M=a[_],!l.hasOwnProperty(_)||N===M||N===void 0&&M===void 0||dr(e,t,_,N,l,M);return}}for(var E in a)N=a[E],a.hasOwnProperty(E)&&N!=null&&!l.hasOwnProperty(E)&&xe(e,t,E,null,l,N);for(D in l)N=l[D],M=a[D],!l.hasOwnProperty(D)||N===M||N==null&&M==null||xe(e,t,D,N,l,M)}function Nd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function L0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,f=n.duration;if(i&&f&&Nd(c)){for(c=0,f=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],j=p.startTime;if(j>f)break;var _=p.transferSize,D=p.initiatorType;_&&Nd(D)&&(p=p.responseEnd,c+=_*(p<f?1:(f-j)/(p-j)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mr=null,hr=null;function ki(e){return e.nodeType===9?e:e.ownerDocument}function Ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Td(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gr=null;function q0(){var e=window.event;return e&&e.type==="popstate"?e===gr?!1:(gr=e,!0):(gr=null,!1)}var Md=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(X0)}:Md;function X0(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function _d(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ul(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")An(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,An(a);for(var i=a.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[Ql]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&An(e.ownerDocument.body);a=n}while(a);Ul(t)}function Cd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function yr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yr(a),Eu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Q0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Z0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function Od(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function vr(e){return e.data==="$?"||e.data==="$~"}function br(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function k0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xr=null;function Dd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ud(e,t,a){switch(t=ki(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eu(e)}var Mt=new Map,Hd=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=X.d;X.d={f:V0,r:K0,D:J0,C:$0,L:W0,m:F0,X:I0,S:P0,M:ep};function V0(){var e=la.f(),t=Bi();return e||t}function K0(e){var t=el(e);t!==null&&t.tag===5&&t.type==="form"?Ps(t):la.r(e)}var Ol=typeof document>"u"?null:document;function Bd(e,t,a){var l=Ol;if(l&&typeof t=="string"&&t){var n=xt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Hd.has(n)||(Hd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ye(t),l.head.appendChild(t)))}}function J0(e){la.D(e),Bd("dns-prefetch",e,null)}function $0(e,t){la.C(e,t),Bd("preconnect",e,t)}function W0(e,t,a){la.L(e,t,a);var l=Ol;if(l&&e&&t){var n='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+xt(a.imageSizes)+'"]')):n+='[href="'+xt(e)+'"]';var i=n;switch(t){case"style":i=Dl(e);break;case"script":i=wl(e)}Mt.has(i)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Tn(i))||t==="script"&&l.querySelector(Mn(i))||(t=l.createElement("link"),Je(t,"link",e),Ye(t),l.head.appendChild(t)))}}function F0(e,t){la.m(e,t);var a=Ol;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+xt(l)+'"][href="'+xt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=wl(e)}if(!Mt.has(i)&&(e=T({rel:"modulepreload",href:e},t),Mt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mn(i)))return}l=a.createElement("link"),Je(l,"link",e),Ye(l),a.head.appendChild(l)}}}function P0(e,t,a){la.S(e,t,a);var l=Ol;if(l&&e){var n=tl(l).hoistableStyles,i=Dl(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(Tn(i)))f.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(i))&&Sr(e,a);var p=c=l.createElement("link");Ye(p),Je(p,"link",e),p._p=new Promise(function(j,_){p.onload=j,p.onerror=_}),p.addEventListener("load",function(){f.loading|=1}),p.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ki(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function I0(e,t){la.X(e,t);var a=Ol;if(a&&e){var l=tl(a).hoistableScripts,n=wl(e),i=l.get(n);i||(i=a.querySelector(Mn(n)),i||(e=T({src:e,async:!0},t),(t=Mt.get(n))&&Er(e,t),i=a.createElement("script"),Ye(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function ep(e,t){la.M(e,t);var a=Ol;if(a&&e){var l=tl(a).hoistableScripts,n=wl(e),i=l.get(n);i||(i=a.querySelector(Mn(n)),i||(e=T({src:e,async:!0,type:"module"},t),(t=Mt.get(n))&&Er(e,t),i=a.createElement("script"),Ye(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ld(e,t,a,l){var n=(n=ie.current)?Vi(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Dl(a.href),a=tl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Dl(a.href);var i=tl(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Tn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),i||tp(n,e,a,c.state))),t&&l===null)throw Error(r(528,""));return c}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wl(a),a=tl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Dl(e){return'href="'+xt(e)+'"'}function Tn(e){return'link[rel="stylesheet"]['+e+"]"}function qd(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function tp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ye(t),e.head.appendChild(t))}function wl(e){return'[src="'+xt(e)+'"]'}function Mn(e){return"script[async]"+e}function Yd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Je(l,"style",n),Ki(l,a.precedence,e),t.instance=l;case"stylesheet":n=Dl(a.href);var i=e.querySelector(Tn(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;l=qd(a),(n=Mt.get(n))&&Sr(l,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var c=i;return c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Je(i,"link",l),t.state.loading|=4,Ki(i,a.precedence,e),t.instance=i;case"script":return i=wl(a.src),(n=e.querySelector(Mn(i)))?(t.instance=n,Ye(n),n):(l=a,(n=Mt.get(i))&&(l=T({},a),Er(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ki(l,a.precedence,e));return t.instance}function Ki(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Er(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ji=null;function Gd(e,t,a){if(Ji===null){var l=new Map,n=Ji=new Map;n.set(a,l)}else n=Ji,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ql]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(i):l.set(c,[i])}}return l}function Xd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ap(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Dl(l.href),i=t.querySelector(Tn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$i.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ye(i);return}i=t.ownerDocument||t,l=qd(l),(n=Mt.get(n))&&Sr(l,n),i=i.createElement("link"),Ye(i);var c=i;c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Je(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$i.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var zr=0;function np(e,t){return e.stylesheets&&e.count===0&&Fi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Fi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&zr===0&&(zr=62500*L0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>zr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function $i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wi=null;function Fi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wi=new Map,t.forEach(ip,e),Wi=null,$i.call(e))}function ip(e,t){if(!(t.state.loading&4)){var a=Wi.get(e);if(a)var l=a.get(null);else{a=new Map,Wi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=$i.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Rn={$$typeof:L,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function up(e,t,a,l,n,i,c,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Zd(e,t,a,l,n,i,c,f,p,j,_,D){return e=new up(e,t,a,c,p,j,_,D,f),t=1,i===!0&&(t|=24),i=dt(3,null,null,t),e.current=i,i.stateNode=e,t=ac(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},uc(i),e}function kd(e){return e?(e=fl,e):fl}function Vd(e,t,a,l,n,i){n=kd(n),l.context===null?l.context=n:l.pendingContext=n,l=ha(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=pa(e,l,t),a!==null&&(ct(a,e,t),cn(a,e,t))}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function jr(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function Jd(e){if(e.tag===13||e.tag===31){var t=La(e,67108864);t!==null&&ct(t,e,67108864),jr(e,67108864)}}function $d(e){if(e.tag===13||e.tag===31){var t=yt();t=bu(t);var a=La(e,t);a!==null&&ct(a,e,t),jr(e,t)}}var Pi=!0;function cp(e,t,a,l){var n=C.T;C.T=null;var i=X.p;try{X.p=2,Nr(e,t,a,l)}finally{X.p=i,C.T=n}}function rp(e,t,a,l){var n=C.T;C.T=null;var i=X.p;try{X.p=8,Nr(e,t,a,l)}finally{X.p=i,C.T=n}}function Nr(e,t,a,l){if(Pi){var n=Ar(l);if(n===null)fr(e,t,l,Ii,a),Fd(e,l);else if(sp(n,e,t,a,l))l.stopPropagation();else if(Fd(e,l),t&4&&-1<op.indexOf(e)){for(;n!==null;){var i=el(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Da(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var p=1<<31-st(c);f.entanglements[1]|=p,c&=~p}qt(i),(he&6)===0&&(Ui=rt()+500,zn(0))}}break;case 31:case 13:f=La(i,2),f!==null&&ct(f,i,2),Bi(),jr(i,2)}if(i=Ar(l),i===null&&fr(e,t,l,Ii,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else fr(e,t,l,null,a)}}function Ar(e){return e=Mu(e),Tr(e)}var Ii=null;function Tr(e){if(Ii=null,e=Ia(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ii=e,null}function Wd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jm()){case ao:return 2;case lo:return 8;case Xn:case $m:return 32;case no:return 268435456;default:return 32}default:return 32}}var Mr=!1,Aa=null,Ta=null,Ma=null,_n=new Map,Cn=new Map,Ra=[],op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":_n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function On(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=el(t),t!==null&&Jd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function sp(e,t,a,l,n){switch(t){case"focusin":return Aa=On(Aa,e,t,a,l,n),!0;case"dragenter":return Ta=On(Ta,e,t,a,l,n),!0;case"mouseover":return Ma=On(Ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return _n.set(i,On(_n.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,On(Cn.get(i)||null,e,t,a,l,n)),!0}return!1}function Pd(e){var t=Ia(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,so(e.priority,function(){$d(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,so(e.priority,function(){$d(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ar(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Tu=l,a.target.dispatchEvent(l),Tu=null}else return t=el(a),t!==null&&Jd(t),e.blockedOn=a,!1;t.shift()}return!0}function Id(e,t,a){eu(e)&&a.delete(t)}function fp(){Mr=!1,Aa!==null&&eu(Aa)&&(Aa=null),Ta!==null&&eu(Ta)&&(Ta=null),Ma!==null&&eu(Ma)&&(Ma=null),_n.forEach(Id),Cn.forEach(Id)}function tu(e,t){e.blockedOn===t&&(e.blockedOn=null,Mr||(Mr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,fp)))}var au=null;function em(e){au!==e&&(au=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){au===e&&(au=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Tr(l||a)===null)continue;break}var i=el(a);i!==null&&(e.splice(t,3),t-=3,Ac(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ul(e){function t(p){return tu(p,e)}Aa!==null&&tu(Aa,e),Ta!==null&&tu(Ta,e),Ma!==null&&tu(Ma,e),_n.forEach(t),Cn.forEach(t);for(var a=0;a<Ra.length;a++){var l=Ra[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Pd(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[tt]||null;if(typeof i=="function")c||em(a);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[tt]||null)f=c.formAction;else if(Tr(n)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),em(a)}}}function tm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Rr(e){this._internalRoot=e}lu.prototype.render=Rr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,l=yt();Vd(a,l,e,t,null,null)},lu.prototype.unmount=Rr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vd(e.current,2,null,e,null,null),Bi(),t[Pa]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=oo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Pd(e)}};var am=d.version;if(am!=="19.2.4")throw Error(r(527,am,"19.2.4"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var dp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Yl=nu.inject(dp),ot=nu}catch{}}return wn.createRoot=function(e,t){if(!m(e))throw Error(r(299));var a=!1,l="",n=of,i=sf,c=ff;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Zd(e,1,!1,null,null,a,l,null,n,i,c,tm),e[Pa]=t.current,sr(e),new Rr(t)},wn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(r(299));var l=!1,n="",i=of,c=sf,f=ff,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Zd(e,1,!0,t,a??null,l,n,p,i,c,f,tm),t.context=kd(null),a=t.current,l=yt(),l=bu(l),n=ha(l),n.callback=null,pa(a,n,l),a=l,t.current.lanes=a,Xl(t,a),qt(t),e[Pa]=t.current,sr(e),new lu(t)},wn.version="19.2.4",wn}var dm;function zp(){if(dm)return Or.exports;dm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Or.exports=Ep(),Or.exports}var jp=zp();const Np=bm(jp);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mm="popstate";function Ap(u={}){function d(r,m){let{pathname:h,search:b,hash:A}=r.location;return Gr("",{pathname:h,search:b,hash:A},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function s(r,m){return typeof m=="string"?m:Hn(m)}return Mp(d,s,null,u)}function Te(u,d){if(u===!1||u===null||typeof u>"u")throw new Error(d)}function wt(u,d){if(!u){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Tp(){return Math.random().toString(36).substring(2,10)}function hm(u,d){return{usr:u.state,key:u.key,idx:d}}function Gr(u,d,s=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof d=="string"?Bl(d):d,state:s,key:d&&d.key||r||Tp()}}function Hn({pathname:u="/",search:d="",hash:s=""}){return d&&d!=="?"&&(u+=d.charAt(0)==="?"?d:"?"+d),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function Bl(u){let d={};if(u){let s=u.indexOf("#");s>=0&&(d.hash=u.substring(s),u=u.substring(0,s));let r=u.indexOf("?");r>=0&&(d.search=u.substring(r),u=u.substring(0,r)),u&&(d.pathname=u)}return d}function Mp(u,d,s,r={}){let{window:m=document.defaultView,v5Compat:h=!1}=r,b=m.history,A="POP",x=null,g=R();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function R(){return(b.state||{idx:null}).idx}function T(){A="POP";let G=R(),H=G==null?null:G-g;g=G,x&&x({action:A,location:B.location,delta:H})}function U(G,H){A="PUSH";let $=Gr(B.location,G,H);g=R()+1;let L=hm($,g),I=B.createHref($);try{b.pushState(L,"",I)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;m.location.assign(I)}h&&x&&x({action:A,location:B.location,delta:1})}function q(G,H){A="REPLACE";let $=Gr(B.location,G,H);g=R();let L=hm($,g),I=B.createHref($);b.replaceState(L,"",I),h&&x&&x({action:A,location:B.location,delta:0})}function Y(G){return Rp(G)}let B={get action(){return A},get location(){return u(m,b)},listen(G){if(x)throw new Error("A history only accepts one active listener");return m.addEventListener(mm,T),x=G,()=>{m.removeEventListener(mm,T),x=null}},createHref(G){return d(m,G)},createURL:Y,encodeLocation(G){let H=Y(G);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:q,go(G){return b.go(G)}};return B}function Rp(u,d=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Te(s,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:Hn(u);return r=r.replace(/ $/,"%20"),!d&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function xm(u,d,s="/"){return _p(u,d,s,!1)}function _p(u,d,s,r){let m=typeof d=="string"?Bl(d):d,h=ia(m.pathname||"/",s);if(h==null)return null;let b=Sm(u);Cp(b);let A=null;for(let x=0;A==null&&x<b.length;++x){let g=Xp(h);A=Yp(b[x],g,r)}return A}function Sm(u,d=[],s=[],r="",m=!1){let h=(b,A,x=m,g)=>{let R={relativePath:g===void 0?b.path||"":g,caseSensitive:b.caseSensitive===!0,childrenIndex:A,route:b};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(r)&&x)return;Te(R.relativePath.startsWith(r),`Absolute route path "${R.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(r.length)}let T=na([r,R.relativePath]),U=s.concat(R);b.children&&b.children.length>0&&(Te(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),Sm(b.children,d,U,T,x)),!(b.path==null&&!b.index)&&d.push({path:T,score:Lp(T,b.index),routesMeta:U})};return u.forEach((b,A)=>{var x;if(b.path===""||!((x=b.path)!=null&&x.includes("?")))h(b,A);else for(let g of Em(b.path))h(b,A,!0,g)}),d}function Em(u){let d=u.split("/");if(d.length===0)return[];let[s,...r]=d,m=s.endsWith("?"),h=s.replace(/\?$/,"");if(r.length===0)return m?[h,""]:[h];let b=Em(r.join("/")),A=[];return A.push(...b.map(x=>x===""?h:[h,x].join("/"))),m&&A.push(...b),A.map(x=>u.startsWith("/")&&x===""?"/":x)}function Cp(u){u.sort((d,s)=>d.score!==s.score?s.score-d.score:qp(d.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var Op=/^:[\w-]+$/,Dp=3,wp=2,Up=1,Hp=10,Bp=-2,pm=u=>u==="*";function Lp(u,d){let s=u.split("/"),r=s.length;return s.some(pm)&&(r+=Bp),d&&(r+=wp),s.filter(m=>!pm(m)).reduce((m,h)=>m+(Op.test(h)?Dp:h===""?Up:Hp),r)}function qp(u,d){return u.length===d.length&&u.slice(0,-1).every((r,m)=>r===d[m])?u[u.length-1]-d[d.length-1]:0}function Yp(u,d,s=!1){let{routesMeta:r}=u,m={},h="/",b=[];for(let A=0;A<r.length;++A){let x=r[A],g=A===r.length-1,R=h==="/"?d:d.slice(h.length)||"/",T=ru({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},R),U=x.route;if(!T&&g&&s&&!r[r.length-1].route.index&&(T=ru({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},R)),!T)return null;Object.assign(m,T.params),b.push({params:m,pathname:na([h,T.pathname]),pathnameBase:Vp(na([h,T.pathnameBase])),route:U}),T.pathnameBase!=="/"&&(h=na([h,T.pathnameBase]))}return b}function ru(u,d){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,r]=Gp(u.path,u.caseSensitive,u.end),m=d.match(s);if(!m)return null;let h=m[0],b=h.replace(/(.)\/+$/,"$1"),A=m.slice(1);return{params:r.reduce((g,{paramName:R,isOptional:T},U)=>{if(R==="*"){let Y=A[U]||"";b=h.slice(0,h.length-Y.length).replace(/(.)\/+$/,"$1")}const q=A[U];return T&&!q?g[R]=void 0:g[R]=(q||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:b,pattern:u}}function Gp(u,d=!1,s=!0){wt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,A,x)=>(r.push({paramName:A,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),r]}function Xp(u){try{return u.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return wt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),u}}function ia(u,d){if(d==="/")return u;if(!u.toLowerCase().startsWith(d.toLowerCase()))return null;let s=d.endsWith("/")?d.length-1:d.length,r=u.charAt(s);return r&&r!=="/"?null:u.slice(s)||"/"}var Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Zp(u,d="/"){let{pathname:s,search:r="",hash:m=""}=typeof u=="string"?Bl(u):u,h;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?h=gm(s.substring(1),"/"):h=gm(s,d)):h=d,{pathname:h,search:Kp(r),hash:Jp(m)}}function gm(u,d){let s=d.replace(/\/+$/,"").split("/");return u.split("/").forEach(m=>{m===".."?s.length>1&&s.pop():m!=="."&&s.push(m)}),s.length>1?s.join("/"):"/"}function Hr(u,d,s,r){return`Cannot include a '${u}' character in a manually specified \`to.${d}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kp(u){return u.filter((d,s)=>s===0||d.route.path&&d.route.path.length>0)}function zm(u){let d=kp(u);return d.map((s,r)=>r===d.length-1?s.pathname:s.pathnameBase)}function jm(u,d,s,r=!1){let m;typeof u=="string"?m=Bl(u):(m={...u},Te(!m.pathname||!m.pathname.includes("?"),Hr("?","pathname","search",m)),Te(!m.pathname||!m.pathname.includes("#"),Hr("#","pathname","hash",m)),Te(!m.search||!m.search.includes("#"),Hr("#","search","hash",m)));let h=u===""||m.pathname==="",b=h?"/":m.pathname,A;if(b==null)A=s;else{let T=d.length-1;if(!r&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),T-=1;m.pathname=U.join("/")}A=T>=0?d[T]:"/"}let x=Zp(m,A),g=b&&b!=="/"&&b.endsWith("/"),R=(h||b===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(g||R)&&(x.pathname+="/"),x}var na=u=>u.join("/").replace(/\/\/+/g,"/"),Vp=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Kp=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Jp=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,$p=class{constructor(u,d,s,r=!1){this.status=u,this.statusText=d||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Wp(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Fp(u){return u.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Am(u,d){let s=u;if(typeof s!="string"||!Qp.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,m=!1;if(Nm)try{let h=new URL(window.location.href),b=s.startsWith("//")?new URL(h.protocol+s):new URL(s),A=ia(b.pathname,d);b.origin===h.origin&&A!=null?s=A+b.search+b.hash:m=!0}catch{wt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:m,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tm=["POST","PUT","PATCH","DELETE"];new Set(Tm);var Pp=["GET",...Tm];new Set(Pp);var Ll=S.createContext(null);Ll.displayName="DataRouter";var ou=S.createContext(null);ou.displayName="DataRouterState";var Ip=S.createContext(!1),Mm=S.createContext({isTransitioning:!1});Mm.displayName="ViewTransition";var eg=S.createContext(new Map);eg.displayName="Fetchers";var tg=S.createContext(null);tg.displayName="Await";var Rt=S.createContext(null);Rt.displayName="Navigation";var Bn=S.createContext(null);Bn.displayName="Location";var Ut=S.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var Vr=S.createContext(null);Vr.displayName="RouteError";var Rm="REACT_ROUTER_ERROR",ag="REDIRECT",lg="ROUTE_ERROR_RESPONSE";function ng(u){if(u.startsWith(`${Rm}:${ag}:{`))try{let d=JSON.parse(u.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function ig(u){if(u.startsWith(`${Rm}:${lg}:{`))try{let d=JSON.parse(u.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new $p(d.status,d.statusText,d.data)}catch{}}function ug(u,{relative:d}={}){Te(Ln(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=S.useContext(Rt),{hash:m,pathname:h,search:b}=qn(u,{relative:d}),A=h;return s!=="/"&&(A=h==="/"?s:na([s,h])),r.createHref({pathname:A,search:b,hash:m})}function Ln(){return S.useContext(Bn)!=null}function Ca(){return Te(Ln(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Bn).location}var _m="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cm(u){S.useContext(Rt).static||S.useLayoutEffect(u)}function su(){let{isDataRoute:u}=S.useContext(Ut);return u?Eg():cg()}function cg(){Te(Ln(),"useNavigate() may be used only in the context of a <Router> component.");let u=S.useContext(Ll),{basename:d,navigator:s}=S.useContext(Rt),{matches:r}=S.useContext(Ut),{pathname:m}=Ca(),h=JSON.stringify(zm(r)),b=S.useRef(!1);return Cm(()=>{b.current=!0}),S.useCallback((x,g={})=>{if(wt(b.current,_m),!b.current)return;if(typeof x=="number"){s.go(x);return}let R=jm(x,JSON.parse(h),m,g.relative==="path");u==null&&d!=="/"&&(R.pathname=R.pathname==="/"?d:na([d,R.pathname])),(g.replace?s.replace:s.push)(R,g.state,g)},[d,s,h,m,u])}var rg=S.createContext(null);function og(u){let d=S.useContext(Ut).outlet;return S.useMemo(()=>d&&S.createElement(rg.Provider,{value:u},d),[d,u])}function sg(){let{matches:u}=S.useContext(Ut),d=u[u.length-1];return d?d.params:{}}function qn(u,{relative:d}={}){let{matches:s}=S.useContext(Ut),{pathname:r}=Ca(),m=JSON.stringify(zm(s));return S.useMemo(()=>jm(u,JSON.parse(m),r,d==="path"),[u,m,r,d])}function fg(u,d){return Om(u,d)}function Om(u,d,s,r,m){var $;Te(Ln(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=S.useContext(Rt),{matches:b}=S.useContext(Ut),A=b[b.length-1],x=A?A.params:{},g=A?A.pathname:"/",R=A?A.pathnameBase:"/",T=A&&A.route;{let L=T&&T.path||"";wm(g,!T||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let U=Ca(),q;if(d){let L=typeof d=="string"?Bl(d):d;Te(R==="/"||(($=L.pathname)==null?void 0:$.startsWith(R)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${L.pathname}" was given in the \`location\` prop.`),q=L}else q=U;let Y=q.pathname||"/",B=Y;if(R!=="/"){let L=R.replace(/^\//,"").split("/");B="/"+Y.replace(/^\//,"").split("/").slice(L.length).join("/")}let G=xm(u,{pathname:B});wt(T||G!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),wt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=gg(G&&G.map(L=>Object.assign({},L,{params:Object.assign({},x,L.params),pathname:na([R,h.encodeLocation?h.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?R:na([R,h.encodeLocation?h.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),b,s,r,m);return d&&H?S.createElement(Bn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...q},navigationType:"POP"}},H):H}function dg(){let u=Sg(),d=Wp(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},b=null;return console.error("Error handled by React Router default ErrorBoundary:",u),b=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:h},"ErrorBoundary")," or"," ",S.createElement("code",{style:h},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},d),s?S.createElement("pre",{style:m},s):null,b)}var mg=S.createElement(dg,null),Dm=class extends S.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,d){return d.location!==u.location||d.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:d.error,location:d.location,revalidation:u.revalidation||d.revalidation}}componentDidCatch(u,d){this.props.onError?this.props.onError(u,d):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=ig(u.digest);s&&(u=s)}let d=u!==void 0?S.createElement(Ut.Provider,{value:this.props.routeContext},S.createElement(Vr.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?S.createElement(hg,{error:u},d):d}};Dm.contextType=Ip;var Br=new WeakMap;function hg({children:u,error:d}){let{basename:s}=S.useContext(Rt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let r=ng(d.digest);if(r){let m=Br.get(d);if(m)throw m;let h=Am(r.location,s);if(Nm&&!Br.get(d))if(h.isExternal||r.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:r.replace}));throw Br.set(d,b),b}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function pg({routeContext:u,match:d,children:s}){let r=S.useContext(Ll);return r&&r.static&&r.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=d.route.id),S.createElement(Ut.Provider,{value:u},s)}function gg(u,d=[],s=null,r=null,m=null){if(u==null){if(!s)return null;if(s.errors)u=s.matches;else if(d.length===0&&!s.initialized&&s.matches.length>0)u=s.matches;else return null}let h=u,b=s==null?void 0:s.errors;if(b!=null){let R=h.findIndex(T=>T.route.id&&(b==null?void 0:b[T.route.id])!==void 0);Te(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),h=h.slice(0,Math.min(h.length,R+1))}let A=!1,x=-1;if(s)for(let R=0;R<h.length;R++){let T=h[R];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(x=R),T.route.id){let{loaderData:U,errors:q}=s,Y=T.route.loader&&!U.hasOwnProperty(T.route.id)&&(!q||q[T.route.id]===void 0);if(T.route.lazy||Y){A=!0,x>=0?h=h.slice(0,x+1):h=[h[0]];break}}}let g=s&&r?(R,T)=>{var U,q;r(R,{location:s.location,params:((q=(U=s.matches)==null?void 0:U[0])==null?void 0:q.params)??{},unstable_pattern:Fp(s.matches),errorInfo:T})}:void 0;return h.reduceRight((R,T,U)=>{let q,Y=!1,B=null,G=null;s&&(q=b&&T.route.id?b[T.route.id]:void 0,B=T.route.errorElement||mg,A&&(x<0&&U===0?(wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,G=null):x===U&&(Y=!0,G=T.route.hydrateFallbackElement||null)));let H=d.concat(h.slice(0,U+1)),$=()=>{let L;return q?L=B:Y?L=G:T.route.Component?L=S.createElement(T.route.Component,null):T.route.element?L=T.route.element:L=R,S.createElement(pg,{match:T,routeContext:{outlet:R,matches:H,isDataRoute:s!=null},children:L})};return s&&(T.route.ErrorBoundary||T.route.errorElement||U===0)?S.createElement(Dm,{location:s.location,revalidation:s.revalidation,component:B,error:q,children:$(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:g}):$()},null)}function Kr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yg(u){let d=S.useContext(Ll);return Te(d,Kr(u)),d}function vg(u){let d=S.useContext(ou);return Te(d,Kr(u)),d}function bg(u){let d=S.useContext(Ut);return Te(d,Kr(u)),d}function Jr(u){let d=bg(u),s=d.matches[d.matches.length-1];return Te(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function xg(){return Jr("useRouteId")}function Sg(){var r;let u=S.useContext(Vr),d=vg("useRouteError"),s=Jr("useRouteError");return u!==void 0?u:(r=d.errors)==null?void 0:r[s]}function Eg(){let{router:u}=yg("useNavigate"),d=Jr("useNavigate"),s=S.useRef(!1);return Cm(()=>{s.current=!0}),S.useCallback(async(m,h={})=>{wt(s.current,_m),s.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:d,...h}))},[u,d])}var ym={};function wm(u,d,s){!d&&!ym[u]&&(ym[u]=!0,wt(!1,s))}S.memo(zg);function zg({routes:u,future:d,state:s,onError:r}){return Om(u,void 0,s,r,d)}function jg(u){return og(u.context)}function Hl(u){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ng({basename:u="/",children:d=null,location:s,navigationType:r="POP",navigator:m,static:h=!1,unstable_useTransitions:b}){Te(!Ln(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=u.replace(/^\/*/,"/"),x=S.useMemo(()=>({basename:A,navigator:m,static:h,unstable_useTransitions:b,future:{}}),[A,m,h,b]);typeof s=="string"&&(s=Bl(s));let{pathname:g="/",search:R="",hash:T="",state:U=null,key:q="default"}=s,Y=S.useMemo(()=>{let B=ia(g,A);return B==null?null:{location:{pathname:B,search:R,hash:T,state:U,key:q},navigationType:r}},[A,g,R,T,U,q,r]);return wt(Y!=null,`<Router basename="${A}"> is not able to match the URL "${g}${R}${T}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:S.createElement(Rt.Provider,{value:x},S.createElement(Bn.Provider,{children:d,value:Y}))}function Ag({children:u,location:d}){return fg(Xr(u),d)}function Xr(u,d=[]){let s=[];return S.Children.forEach(u,(r,m)=>{if(!S.isValidElement(r))return;let h=[...d,m];if(r.type===S.Fragment){s.push.apply(s,Xr(r.props.children,h));return}Te(r.type===Hl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!r.props.index||!r.props.children,"An index route cannot have child routes.");let b={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(b.children=Xr(r.props.children,h)),s.push(b)}),s}var uu="get",cu="application/x-www-form-urlencoded";function fu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Tg(u){return fu(u)&&u.tagName.toLowerCase()==="button"}function Mg(u){return fu(u)&&u.tagName.toLowerCase()==="form"}function Rg(u){return fu(u)&&u.tagName.toLowerCase()==="input"}function _g(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Cg(u,d){return u.button===0&&(!d||d==="_self")&&!_g(u)}function Qr(u=""){return new URLSearchParams(typeof u=="string"||Array.isArray(u)||u instanceof URLSearchParams?u:Object.keys(u).reduce((d,s)=>{let r=u[s];return d.concat(Array.isArray(r)?r.map(m=>[s,m]):[[s,r]])},[]))}function Og(u,d){let s=Qr(u);return d&&d.forEach((r,m)=>{s.has(m)||d.getAll(m).forEach(h=>{s.append(m,h)})}),s}var iu=null;function Dg(){if(iu===null)try{new FormData(document.createElement("form"),0),iu=!1}catch{iu=!0}return iu}var wg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lr(u){return u!=null&&!wg.has(u)?(wt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cu}"`),null):u}function Ug(u,d){let s,r,m,h,b;if(Mg(u)){let A=u.getAttribute("action");r=A?ia(A,d):null,s=u.getAttribute("method")||uu,m=Lr(u.getAttribute("enctype"))||cu,h=new FormData(u)}else if(Tg(u)||Rg(u)&&(u.type==="submit"||u.type==="image")){let A=u.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=u.getAttribute("formaction")||A.getAttribute("action");if(r=x?ia(x,d):null,s=u.getAttribute("formmethod")||A.getAttribute("method")||uu,m=Lr(u.getAttribute("formenctype"))||Lr(A.getAttribute("enctype"))||cu,h=new FormData(A,u),!Dg()){let{name:g,type:R,value:T}=u;if(R==="image"){let U=g?`${g}.`:"";h.append(`${U}x`,"0"),h.append(`${U}y`,"0")}else g&&h.append(g,T)}}else{if(fu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=uu,r=null,m=cu,b=u}return h&&m==="text/plain"&&(b=h,h=void 0),{action:r,method:s.toLowerCase(),encType:m,formData:h,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $r(u,d){if(u===!1||u===null||typeof u>"u")throw new Error(d)}function Hg(u,d,s,r){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${r}`:m.pathname=`${m.pathname}.${r}`:m.pathname==="/"?m.pathname=`_root.${r}`:d&&ia(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${r}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${r}`,m}async function Bg(u,d){if(u.id in d)return d[u.id];try{let s=await import(u.module);return d[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lg(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function qg(u,d,s){let r=await Promise.all(u.map(async m=>{let h=d.routes[m.route.id];if(h){let b=await Bg(h,s);return b.links?b.links():[]}return[]}));return Qg(r.flat(1).filter(Lg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function vm(u,d,s,r,m,h){let b=(x,g)=>s[g]?x.route.id!==s[g].route.id:!0,A=(x,g)=>{var R;return s[g].pathname!==x.pathname||((R=s[g].route.path)==null?void 0:R.endsWith("*"))&&s[g].params["*"]!==x.params["*"]};return h==="assets"?d.filter((x,g)=>b(x,g)||A(x,g)):h==="data"?d.filter((x,g)=>{var T;let R=r.routes[x.route.id];if(!R||!R.hasLoader)return!1;if(b(x,g)||A(x,g))return!0;if(x.route.shouldRevalidate){let U=x.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((T=s[0])==null?void 0:T.params)||{},nextUrl:new URL(u,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function Yg(u,d,{includeHydrateFallback:s}={}){return Gg(u.map(r=>{let m=d.routes[r.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),s&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function Gg(u){return[...new Set(u)]}function Xg(u){let d={},s=Object.keys(u).sort();for(let r of s)d[r]=u[r];return d}function Qg(u,d){let s=new Set;return new Set(d),u.reduce((r,m)=>{let h=JSON.stringify(Xg(m));return s.has(h)||(s.add(h),r.push({key:h,link:m})),r},[])}function Um(){let u=S.useContext(Ll);return $r(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Zg(){let u=S.useContext(ou);return $r(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Wr=S.createContext(void 0);Wr.displayName="FrameworkContext";function Hm(){let u=S.useContext(Wr);return $r(u,"You must render this element inside a <HydratedRouter> element"),u}function kg(u,d){let s=S.useContext(Wr),[r,m]=S.useState(!1),[h,b]=S.useState(!1),{onFocus:A,onBlur:x,onMouseEnter:g,onMouseLeave:R,onTouchStart:T}=d,U=S.useRef(null);S.useEffect(()=>{if(u==="render"&&b(!0),u==="viewport"){let B=H=>{H.forEach($=>{b($.isIntersecting)})},G=new IntersectionObserver(B,{threshold:.5});return U.current&&G.observe(U.current),()=>{G.disconnect()}}},[u]),S.useEffect(()=>{if(r){let B=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(B)}}},[r]);let q=()=>{m(!0)},Y=()=>{m(!1),b(!1)};return s?u!=="intent"?[h,U,{}]:[h,U,{onFocus:Un(A,q),onBlur:Un(x,Y),onMouseEnter:Un(g,q),onMouseLeave:Un(R,Y),onTouchStart:Un(T,q)}]:[!1,U,{}]}function Un(u,d){return s=>{u&&u(s),s.defaultPrevented||d(s)}}function Vg({page:u,...d}){let{router:s}=Um(),r=S.useMemo(()=>xm(s.routes,u,s.basename),[s.routes,u,s.basename]);return r?S.createElement(Jg,{page:u,matches:r,...d}):null}function Kg(u){let{manifest:d,routeModules:s}=Hm(),[r,m]=S.useState([]);return S.useEffect(()=>{let h=!1;return qg(u,d,s).then(b=>{h||m(b)}),()=>{h=!0}},[u,d,s]),r}function Jg({page:u,matches:d,...s}){let r=Ca(),{future:m,manifest:h,routeModules:b}=Hm(),{basename:A}=Um(),{loaderData:x,matches:g}=Zg(),R=S.useMemo(()=>vm(u,d,g,h,r,"data"),[u,d,g,h,r]),T=S.useMemo(()=>vm(u,d,g,h,r,"assets"),[u,d,g,h,r]),U=S.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let B=new Set,G=!1;if(d.forEach($=>{var I;let L=h.routes[$.route.id];!L||!L.hasLoader||(!R.some(ne=>ne.route.id===$.route.id)&&$.route.id in x&&((I=b[$.route.id])!=null&&I.shouldRevalidate)||L.hasClientLoader?G=!0:B.add($.route.id))}),B.size===0)return[];let H=Hg(u,A,m.unstable_trailingSlashAwareDataRequests,"data");return G&&B.size>0&&H.searchParams.set("_routes",d.filter($=>B.has($.route.id)).map($=>$.route.id).join(",")),[H.pathname+H.search]},[A,m.unstable_trailingSlashAwareDataRequests,x,r,h,R,d,u,b]),q=S.useMemo(()=>Yg(T,h),[T,h]),Y=Kg(T);return S.createElement(S.Fragment,null,U.map(B=>S.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...s})),q.map(B=>S.createElement("link",{key:B,rel:"modulepreload",href:B,...s})),Y.map(({key:B,link:G})=>S.createElement("link",{key:B,nonce:s.nonce,...G,crossOrigin:G.crossOrigin??s.crossOrigin})))}function $g(...u){return d=>{u.forEach(s=>{typeof s=="function"?s(d):s!=null&&(s.current=d)})}}var Wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wg&&(window.__reactRouterVersion="7.13.0")}catch{}function Fg({basename:u,children:d,unstable_useTransitions:s,window:r}){let m=S.useRef();m.current==null&&(m.current=Ap({window:r,v5Compat:!0}));let h=m.current,[b,A]=S.useState({action:h.action,location:h.location}),x=S.useCallback(g=>{s===!1?A(g):S.startTransition(()=>A(g))},[s]);return S.useLayoutEffect(()=>h.listen(x),[h,x]),S.createElement(Ng,{basename:u,children:d,location:b.location,navigationType:b.action,navigator:h,unstable_useTransitions:s})}var Bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=S.forwardRef(function({onClick:d,discover:s="render",prefetch:r="none",relative:m,reloadDocument:h,replace:b,state:A,target:x,to:g,preventScrollReset:R,viewTransition:T,unstable_defaultShouldRevalidate:U,...q},Y){let{basename:B,unstable_useTransitions:G}=S.useContext(Rt),H=typeof g=="string"&&Bm.test(g),$=Am(g,B);g=$.to;let L=ug(g,{relative:m}),[I,ne,ge]=kg(r,q),J=ty(g,{replace:b,state:A,target:x,preventScrollReset:R,relative:m,viewTransition:T,unstable_defaultShouldRevalidate:U,unstable_useTransitions:G});function ze(Qe){d&&d(Qe),Qe.defaultPrevented||J(Qe)}let we=S.createElement("a",{...q,...ge,href:$.absoluteURL||L,onClick:$.isExternal||h?d:ze,ref:$g(Y,ne),target:x,"data-discover":!H&&s==="render"?"true":void 0});return I&&!H?S.createElement(S.Fragment,null,we,S.createElement(Vg,{page:L})):we});De.displayName="Link";var Pg=S.forwardRef(function({"aria-current":d="page",caseSensitive:s=!1,className:r="",end:m=!1,style:h,to:b,viewTransition:A,children:x,...g},R){let T=qn(b,{relative:g.relative}),U=Ca(),q=S.useContext(ou),{navigator:Y,basename:B}=S.useContext(Rt),G=q!=null&&cy(T)&&A===!0,H=Y.encodeLocation?Y.encodeLocation(T).pathname:T.pathname,$=U.pathname,L=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;s||($=$.toLowerCase(),L=L?L.toLowerCase():null,H=H.toLowerCase()),L&&B&&(L=ia(L,B)||L);const I=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ne=$===H||!m&&$.startsWith(H)&&$.charAt(I)==="/",ge=L!=null&&(L===H||!m&&L.startsWith(H)&&L.charAt(H.length)==="/"),J={isActive:ne,isPending:ge,isTransitioning:G},ze=ne?d:void 0,we;typeof r=="function"?we=r(J):we=[r,ne?"active":null,ge?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Qe=typeof h=="function"?h(J):h;return S.createElement(De,{...g,"aria-current":ze,className:we,ref:R,style:Qe,to:b,viewTransition:A},typeof x=="function"?x(J):x)});Pg.displayName="NavLink";var Ig=S.forwardRef(({discover:u="render",fetcherKey:d,navigate:s,reloadDocument:r,replace:m,state:h,method:b=uu,action:A,onSubmit:x,relative:g,preventScrollReset:R,viewTransition:T,unstable_defaultShouldRevalidate:U,...q},Y)=>{let{unstable_useTransitions:B}=S.useContext(Rt),G=iy(),H=uy(A,{relative:g}),$=b.toLowerCase()==="get"?"get":"post",L=typeof A=="string"&&Bm.test(A),I=ne=>{if(x&&x(ne),ne.defaultPrevented)return;ne.preventDefault();let ge=ne.nativeEvent.submitter,J=(ge==null?void 0:ge.getAttribute("formmethod"))||b,ze=()=>G(ge||ne.currentTarget,{fetcherKey:d,method:J,navigate:s,replace:m,state:h,relative:g,preventScrollReset:R,viewTransition:T,unstable_defaultShouldRevalidate:U});B&&s!==!1?S.startTransition(()=>ze()):ze()};return S.createElement("form",{ref:Y,method:$,action:H,onSubmit:r?x:I,...q,"data-discover":!L&&u==="render"?"true":void 0})});Ig.displayName="Form";function ey(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lm(u){let d=S.useContext(Ll);return Te(d,ey(u)),d}function ty(u,{target:d,replace:s,state:r,preventScrollReset:m,relative:h,viewTransition:b,unstable_defaultShouldRevalidate:A,unstable_useTransitions:x}={}){let g=su(),R=Ca(),T=qn(u,{relative:h});return S.useCallback(U=>{if(Cg(U,d)){U.preventDefault();let q=s!==void 0?s:Hn(R)===Hn(T),Y=()=>g(u,{replace:q,state:r,preventScrollReset:m,relative:h,viewTransition:b,unstable_defaultShouldRevalidate:A});x?S.startTransition(()=>Y()):Y()}},[R,g,T,s,r,d,u,m,h,b,A,x])}function ay(u){wt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let d=S.useRef(Qr(u)),s=S.useRef(!1),r=Ca(),m=S.useMemo(()=>Og(r.search,s.current?null:d.current),[r.search]),h=su(),b=S.useCallback((A,x)=>{const g=Qr(typeof A=="function"?A(new URLSearchParams(m)):A);s.current=!0,h("?"+g,x)},[h,m]);return[m,b]}var ly=0,ny=()=>`__${String(++ly)}__`;function iy(){let{router:u}=Lm("useSubmit"),{basename:d}=S.useContext(Rt),s=xg(),r=u.fetch,m=u.navigate;return S.useCallback(async(h,b={})=>{let{action:A,method:x,encType:g,formData:R,body:T}=Ug(h,d);if(b.navigate===!1){let U=b.fetcherKey||ny();await r(U,s,b.action||A,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:R,body:T,formMethod:b.method||x,formEncType:b.encType||g,flushSync:b.flushSync})}else await m(b.action||A,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:R,body:T,formMethod:b.method||x,formEncType:b.encType||g,replace:b.replace,state:b.state,fromRouteId:s,flushSync:b.flushSync,viewTransition:b.viewTransition})},[r,m,d,s])}function uy(u,{relative:d}={}){let{basename:s}=S.useContext(Rt),r=S.useContext(Ut);Te(r,"useFormAction must be used inside a RouteContext");let[m]=r.matches.slice(-1),h={...qn(u||".",{relative:d})},b=Ca();if(u==null){h.search=b.search;let A=new URLSearchParams(h.search),x=A.getAll("index");if(x.some(R=>R==="")){A.delete("index"),x.filter(T=>T).forEach(T=>A.append("index",T));let R=A.toString();h.search=R?`?${R}`:""}}return(!u||u===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:na([s,h.pathname])),Hn(h)}function cy(u,{relative:d}={}){let s=S.useContext(Mm);Te(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Lm("useViewTransitionState"),m=qn(u,{relative:d});if(!s.isTransitioning)return!1;let h=ia(s.currentLocation.pathname,r)||s.currentLocation.pathname,b=ia(s.nextLocation.pathname,r)||s.nextLocation.pathname;return ru(m.pathname,b)!=null||ru(m.pathname,h)!=null}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qm=(...u)=>u.filter((d,s,r)=>!!d&&d.trim()!==""&&r.indexOf(d)===s).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=S.forwardRef(({color:u="currentColor",size:d=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:m="",children:h,iconNode:b,...A},x)=>S.createElement("svg",{ref:x,...oy,width:d,height:d,stroke:u,strokeWidth:r?Number(s)*24/Number(d):s,className:qm("lucide",m),...A},[...b.map(([g,R])=>S.createElement(g,R)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(u,d)=>{const s=S.forwardRef(({className:r,...m},h)=>S.createElement(sy,{ref:h,iconNode:d,className:qm(`lucide-${ry(u)}`,r),...m}));return s.displayName=`${u}`,s};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fr=Xe("ArrowRight",fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],my=Xe("Check",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],py=Xe("ChevronDown",hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yy=Xe("ChevronLeft",gy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],by=Xe("ChevronRight",vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Sy=Xe("CircleCheckBig",xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],zy=Xe("CreditCard",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Ny=Xe("Instagram",jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Ty=Xe("Menu",Ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M5 12h14",key:"1ays0h"}]],Ry=Xe("Minus",My);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Cy=Xe("Phone",_y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ym=Xe("Plus",Oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],wy=Xe("Send",Dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Hy=Xe("Shield",Uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],Zr=Xe("ShoppingBag",By);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],qy=Xe("Trash2",Ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Pr=Xe("Truck",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ir=Xe("X",Gy),Gm=S.createContext(),Yn=()=>S.useContext(Gm),Xy=({children:u})=>{const[d,s]=S.useState([]),[r,m]=S.useState(!1),[h,b]=S.useState(!1),A=Y=>{s(B=>B.find(H=>H.id===Y.id)?B.map(H=>H.id===Y.id?{...H,quantity:H.quantity+1}:H):[...B,{...Y,quantity:1}]),b(!0),setTimeout(()=>b(!1),600),m(!0)},x=Y=>{s(B=>B.filter(G=>G.id!==Y))},g=(Y,B)=>{s(G=>G.map(H=>H.id===Y?{...H,quantity:Math.max(1,H.quantity+B)}:H))},R=()=>m(!r),T=()=>m(!1),U=d.reduce((Y,B)=>Y+B.quantity,0),q=d.reduce((Y,B)=>Y+B.price*B.quantity,0);return o.jsx(Gm.Provider,{value:{items:d,addToCart:A,removeFromCart:x,updateQuantity:g,isOpen:r,toggleCart:R,closeCart:T,checkCount:U,subtotal:q,badgePulse:h},children:u})},Qy=()=>{const[u,d]=S.useState(!1),[s,r]=S.useState(!1),{toggleCart:m,checkCount:h,badgePulse:b}=Yn();return S.useEffect(()=>{const A=()=>{d(window.scrollY>20)};return window.addEventListener("scroll",A),()=>window.removeEventListener("scroll",A)},[]),o.jsxs("header",{className:`navbar ${u?"scrolled":""}`,children:[o.jsxs("div",{className:"container navbar-content",children:[o.jsx(De,{to:"/",className:"logo",children:"NextStore"}),o.jsxs("nav",{className:`desktop-nav ${s?"open":""}`,children:[o.jsx(De,{to:"/",className:"nav-link",children:"Головна"}),o.jsx(De,{to:"/shop",className:"nav-link",children:"Каталог"}),o.jsx(De,{to:"/shop",className:"nav-link",children:"Аксесуари"}),o.jsx(De,{to:"#",className:"nav-link",children:"Підтримка"})]}),o.jsxs("div",{className:"nav-actions",children:[o.jsxs("button",{className:"icon-btn cart-btn-wrapper","aria-label":"Кошик",onClick:m,children:[o.jsx(Zr,{size:22}),h>0&&o.jsx("span",{className:`cart-badge ${b?"pulse":""}`,children:h})]}),o.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!s),children:s?o.jsx(Ir,{size:24}):o.jsx(Ty,{size:24})})]})]}),o.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.2rem 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--color-text-primary);
          letter-spacing: -0.04em;
          position: relative;
        }
        
        .logo::after {
          content: none;
        }

        .desktop-nav {
          display: flex;
          gap: 2.5rem;
          background: rgba(255, 255, 255, 0.6);
          padding: 0.6rem 2rem;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.03);
          backdrop-filter: blur(10px);
        }
        
        .navbar.scrolled .desktop-nav {
           background: transparent;
           border-color: transparent;
           backdrop-filter: none;
           padding: 0;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          transition: all 0.2s;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-text-primary);
        }

        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .icon-btn {
          background: rgba(255,255,255,0.8);
          color: var(--color-text-primary);
          padding: 10px;
          border-radius: 50%;
          transition: all 0.2s;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
        }
        
        .navbar.scrolled .icon-btn {
           background: transparent;
        }

        .icon-btn:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border-color: rgba(0,0,0,0.05);
        }

        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--color-accent);
          color: white;
          font-size: 0.7rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          border: 2px solid white;
        }

        .cart-badge.pulse {
          animation: badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes badgePop {
          0% { transform: scale(1); }
          40% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-primary);
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            border-radius: 0 0 24px 24px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            gap: 1.5rem;
            align-items: center;
          }
          
          .desktop-nav.open {
            display: flex;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `})]})},Zy=()=>{const[u,d]=S.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx("footer",{className:"site-footer",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"footer-grid",children:[o.jsxs("div",{className:"footer-col",children:[o.jsx("h3",{children:"NextStore"}),o.jsx("p",{children:"Преміальна техніка для сучасних творців."})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{className:"section-title",children:"Каталог"}),o.jsx(De,{to:"/shop",className:"footer-link",children:"Телефони"}),o.jsx(De,{to:"/shop",className:"footer-link",children:"Планшети"}),o.jsx(De,{to:"/shop",className:"footer-link",children:"Аудіо"})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{className:"section-title",children:"Клієнтам"}),o.jsx("button",{onClick:()=>d(!0),className:"footer-link contact-btn",children:"Контакти"}),o.jsx(De,{to:"/shop",className:"footer-link",children:"Повернення"}),o.jsx(De,{to:"/shop",className:"footer-link",children:"FAQ"})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{className:"section-title",children:"Юридична інформація"}),o.jsx("a",{href:"#",className:"footer-link",children:"Політика конфіденційності"}),o.jsx("a",{href:"#",className:"footer-link",children:"Умови використання"})]})]}),o.jsx("div",{className:"footer-bottom",children:o.jsx("p",{children:"© 2026 NextStore Inc. Всі права захищені."})})]})}),u&&o.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:o.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[o.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:o.jsx(Ir,{size:24})}),o.jsx("h2",{children:"Наші Контакти"}),o.jsx("p",{className:"modal-desc",children:"Зв'яжіться з нами у будь-який зручний спосіб"}),o.jsxs("div",{className:"contacts-list",children:[o.jsxs("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"contact-item instagram",children:[o.jsx("div",{className:"icon-box",children:o.jsx(Ny,{size:28})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Instagram"}),o.jsx("p",{children:"@nextstore_ua"})]})]}),o.jsxs("a",{href:"https://t.me",target:"_blank",rel:"noopener noreferrer",className:"contact-item telegram",children:[o.jsx("div",{className:"icon-box",children:o.jsx(wy,{size:28})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Telegram"}),o.jsx("p",{children:"@nextstore_support"})]})]}),o.jsxs("a",{href:"tel:+380000000000",className:"contact-item phone",children:[o.jsx("div",{className:"icon-box",children:o.jsx(Cy,{size:28})}),o.jsxs("div",{children:[o.jsx("h3",{children:"Телефон"}),o.jsx("p",{children:"+380 00 000 00 00"})]})]})]})]})}),o.jsx("style",{children:`
        .site-footer {
          background: var(--color-bg-secondary);
          padding: 5rem 0 3rem;
          margin-top: 6rem;
          color: var(--color-text-secondary);
          border-top: 1px solid var(--color-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-col h3 {
          color: var(--color-text-primary);
          margin-bottom: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .section-title {
          color: var(--color-text-primary);
          margin-bottom: 1.2rem;
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-link {
          display: block;
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
          transition: all 0.2s;
          color: var(--color-text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-decoration: none;
        }
        .contact-btn {
          font-family: inherit;
        }
        .footer-link:hover {
          color: var(--color-accent);
          transform: translateX(4px);
        }
        .footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
        }



        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: white;
          padding: 2.5rem;
          border-radius: 24px;
          width: 90%;
          max-width: 450px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--color-bg-secondary);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modal-close:hover {
          background: #eee;
          transform: rotate(90deg);
        }

        .modal-content h2 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .modal-desc {
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 16px;
          background: var(--color-bg-secondary);
          text-decoration: none;
          color: var(--color-text-primary);
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .contact-item:hover {
          background: white;
          border-color: var(--color-border);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transform: translateY(-2px);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .instagram .icon-box { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
        .telegram .icon-box { background: #0088cc; }
        .phone .icon-box { background: #34c759; }

        .contact-item h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 2px;
        }
        
        .contact-item p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `})]})},ky=()=>o.jsxs("div",{className:"app-container",children:[o.jsx(Qy,{}),o.jsx("main",{children:o.jsx(jg,{})}),o.jsx(Zy,{})]}),Xm=({product:u})=>{const{addToCart:d}=Yn();su();const s=r=>{r.preventDefault(),r.stopPropagation(),d(u)};return o.jsxs("div",{className:"product-card",children:[o.jsxs(De,{to:`/product/${u.id}`,className:"card-link",children:[o.jsxs("div",{className:"card-image-wrapper",children:[o.jsx("img",{src:u.image,alt:u.name,className:"card-image"}),o.jsx("div",{className:"card-overlay",children:o.jsx("span",{className:"view-text",children:"Детальніше"})})]}),o.jsxs("div",{className:"card-info",children:[o.jsx("p",{className:"card-category",children:u.category}),o.jsx("h3",{className:"card-title",children:u.name}),o.jsxs("div",{className:"card-price-row",children:[o.jsxs("span",{className:"card-price",children:[u.price.toLocaleString()," ₴"]}),o.jsxs("button",{className:"add-btn-mini",onClick:s,"aria-label":"Додати в кошик",children:[o.jsx(Ym,{size:20}),o.jsx("span",{children:"Купити"})]})]})]})]}),o.jsx("style",{children:`
        .product-card {
          background: #fff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-medium);
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .card-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          color: inherit;
        }

        .card-image-wrapper {
          position: relative;
          padding-top: 110%;
          background: var(--color-bg-secondary);
          overflow: hidden;
        }

        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
          transition: transform var(--transition-smooth);
        }

        .product-card:hover .card-image {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.03);
          opacity: 0;
          transition: opacity var(--transition-medium);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-card:hover .card-overlay {
          opacity: 1;
        }

        .view-text {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          padding: 12px 28px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 1rem;
          transform: translateY(10px);
          transition: transform var(--transition-medium);
          opacity: 0;
          box-shadow: var(--shadow-md);
        }

        .product-card:hover .view-text {
          transform: translateY(0);
          opacity: 1;
        }

        .card-info {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-category {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-secondary);
          margin-bottom: 0.8rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: auto;
          color: var(--color-text-primary);
          line-height: 1.2;
        }

        .card-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;
        }

        .card-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .add-btn-mini {
          background: var(--color-bg-secondary);
          color: var(--color-text-primary);
          padding: 10px 20px;
          border-radius: 30px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.2s;
        }

        .add-btn-mini:hover {
          background: var(--color-text-primary);
          color: white;
          border-color: var(--color-text-primary);
        }
      `})]})},qr=({products:u,title:d})=>{const s=S.useRef(null),[r,m]=S.useState(!1),[h,b]=S.useState(!0),A=S.useRef(null),x=()=>{if(!s.current)return;const{scrollLeft:U,scrollWidth:q,clientWidth:Y}=s.current;m(U>0),b(U<q-Y-10)};S.useEffect(()=>((()=>{A.current=setInterval(()=>{if(s.current){const{scrollLeft:q,scrollWidth:Y,clientWidth:B}=s.current;q+B>=Y-10?s.current.scrollTo({left:0,behavior:"smooth"}):s.current.scrollBy({left:300,behavior:"smooth"})}},3e3)})(),()=>{A.current&&clearInterval(A.current)}),[]);const g=()=>{A.current&&clearInterval(A.current)},R=()=>{A.current&&clearInterval(A.current),A.current=setInterval(()=>{if(s.current){const{scrollLeft:U,scrollWidth:q,clientWidth:Y}=s.current;U+Y>=q-10?s.current.scrollTo({left:0,behavior:"smooth"}):s.current.scrollBy({left:300,behavior:"smooth"})}},3e3)},T=U=>{if(!s.current)return;const{clientWidth:q}=s.current,Y=U==="left"?-q/1.5:q/1.5;s.current.scrollBy({left:Y,behavior:"smooth"})};return!u||u.length===0?null:o.jsxs("div",{className:"product-carousel-section",onMouseEnter:g,onMouseLeave:R,children:[o.jsxs("div",{className:"carousel-header",children:[o.jsx("h2",{className:"carousel-title",children:d}),o.jsxs("div",{className:"carousel-nav",children:[o.jsx("button",{className:`nav-btn ${r?"":"disabled"}`,onClick:()=>T("left"),disabled:!r,"aria-label":"Previous",children:o.jsx(yy,{size:24})}),o.jsx("button",{className:`nav-btn ${h?"":"disabled"}`,onClick:()=>T("right"),disabled:!h,"aria-label":"Next",children:o.jsx(by,{size:24})})]})]}),o.jsx("div",{className:"carousel-container",ref:s,onScroll:x,children:u.map(U=>o.jsx("div",{className:"carousel-item",children:o.jsx(Xm,{product:U})},U.id))}),o.jsx("style",{children:`
        .product-carousel-section {
          margin-bottom: 4rem;
          position: relative;
        }

        .carousel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }

        .carousel-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .carousel-nav {
          display: flex;
          gap: 1rem;
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--color-text-primary);
        }

        .nav-btn:hover:not(:disabled) {
          background: var(--color-text-primary);
          color: white;
          border-color: var(--color-text-primary);
        }

        .nav-btn:disabled, .nav-btn.disabled {
          opacity: 0.3;
          cursor: default;
          background: transparent;
          color: var(--color-text-secondary);
        }

        .carousel-container {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          padding: 1rem 1rem 3rem 1rem;
          margin: 0 -1rem;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .carousel-container::-webkit-scrollbar {
          display: none;
        }

        .carousel-item {
          min-width: 320px;
          flex: 0 0 320px;
          scroll-snap-align: start;
        }

        @media (max-width: 768px) {
          .carousel-title {
            font-size: 1.8rem;
          }
          
          .carousel-item {
            min-width: 280px;
            flex: 0 0 280px;
          }
        }
      `})]})},Vy="/NextStore/assets/Iphone17pro-DwugWRjB.webp",Ky="/NextStore/assets/SamsungS25Ultra-CF3kY_wN.webp",Jy="/NextStore/assets/SamsungS25-AI3i8F61.webp",$y="/NextStore/assets/SamsungA56-AqdkcMzm.webp",Wy="/NextStore/assets/SamsungA36-gYE8uoQL.webp",Fy="/NextStore/assets/SamsungA26-FT_OA1Vk.webp",Py="/NextStore/assets/Redmi13S-D5s9j5wx.webp",Iy="/NextStore/assets/Redmi14-dBNOn_T2.webp",e1="/NextStore/assets/RedmiPro14-Ch8pD_uJ.webp",t1="/NextStore/assets/AppleWatchUltra-MP55INpi.webp",a1="/NextStore/assets/AppleWatchSe3-BHVV5fhd.webp",l1="/NextStore/assets/AppleWatchSeries10-jMg6RPqP.webp",n1="/NextStore/assets/SamsungWatch8-BEoAafWz.webp",i1="/NextStore/assets/XiomiWatch5-CZpfMW4U.webp",u1="/NextStore/assets/AirPods2pro-D9ERaX7-.webp",c1="/NextStore/assets/AirPods3pro-3qUV23aB.webp",r1="/NextStore/assets/AirPods4-DWIYumuR.webp",o1="/NextStore/assets/AirPodsMax2-DxloHoAm.webp",s1="/NextStore/assets/Asus-UzkSg3q5.webp",f1="/NextStore/assets/AsusRog-CD_9ZQBu.webp",d1="/NextStore/assets/Dell-Y1nk_vmu.webp",m1="/NextStore/assets/DellPro-B4UHh6MT.webp",h1="/NextStore/assets/LenovoLegion9-Sb0e_0r7.webp",p1="/NextStore/assets/MsiTitan18-BVML8ZP9.webp",g1="/NextStore/assets/MacbookAir15-TZt-9F2f.jpg",y1="/NextStore/assets/MacbookPro14-6HY5ZOrJ.jpg",v1="/NextStore/assets/MacbookPro16-B4TY9cKh.jpg",Fa=[{id:1,name:"iPhone 17 Pro",price:64999,category:"Телефони",image:Vy,description:"Майбутнє вже тут. iPhone 17 Pro з революційним дизайном та можливостями.",specs:{screen:"6.7-inch Super Retina XDR",chip:"A19 Pro",camera:"48MP Main | Ultra Wide | Telephoto",battery:"До 30 годин відео"}},{id:3,name:"Samsung Galaxy S25 Ultra",price:62999,category:"Телефони",image:Ky,description:"Флагман нового покоління. Титановий корпус та AI функції.",specs:{screen:"6.8-inch QHD+ AMOLED",chip:"Snapdragon 8 Gen 4",camera:"200MP Wide | 50MP Zoom",battery:"5000 mAh"}},{id:301,name:"Samsung Galaxy S25",price:42999,category:"Телефони",image:Jy,description:"Компактний флагман з неймовірною продуктивністю.",specs:{screen:"6.2-inch Dynamic AMOLED 2X",chip:"Exynos 2500",camera:"50MP Main",battery:"4000 mAh"}},{id:302,name:"Samsung Galaxy A56",price:18999,category:"Телефони",image:$y,description:"Народний улюбленець. Преміальний дизайн та чудовий дисплей.",specs:{screen:"6.6-inch Super AMOLED",chip:"Exynos 1580",camera:"50MP Main",battery:"5000 mAh"}},{id:303,name:"Samsung Galaxy A36",price:14999,category:"Телефони",image:Wy,description:"Стильний та функціональний смартфон на кожен день.",specs:{screen:"6.6-inch Super AMOLED 120Hz",chip:"Snapdragon 7s Gen 2",camera:"50MP OIS",battery:"5000 mAh"}},{id:304,name:"Samsung Galaxy A26",price:10999,category:"Телефони",image:Fy,description:"Доступний смартфон з великим екраном та хорошою батареєю.",specs:{screen:"6.5-inch Super AMOLED",chip:"Exynos 1280",camera:"50MP Main",battery:"5000 mAh"}},{id:401,name:"Redmi Note 14 Pro",price:15999,category:"Телефони",image:e1,description:"Професійна камера та швидка зарядка в стильному корпусі.",specs:{screen:"6.67-inch AMOLED 1.5K",chip:"Snapdragon 7s Gen 3",camera:"200MP OIS",battery:"5100 mAh"}},{id:402,name:"Redmi Note 14",price:9999,category:"Телефони",image:Iy,description:"Новий стандарт бюджетного смартфона. Яскравий дисплей та стереозвук.",specs:{screen:"6.67-inch AMOLED 120Hz",chip:"Dimensity 7025 Ultra",camera:"50MP Main",battery:"5110 mAh"}},{id:403,name:"Redmi 13S",price:5999,category:"Телефони",image:Py,description:"Ультрабюджетний смартфон з необхідним набором функцій.",specs:{screen:"6.74-inch LCD 90Hz",chip:"Helio G85",camera:"50MP Main",battery:"5000 mAh"}},{id:501,name:"MacBook Pro 16 M3",price:114999,category:"Ноутбуки",image:v1,description:"Найпотужніший MacBook Pro для професіоналів.",specs:{screen:"16.2 Liquid Retina XDR",chip:"M3 Max",memory:"36GB / 1TB",battery:"До 22 годин"}},{id:502,name:"MacBook Pro 14 M3",price:89999,category:"Ноутбуки",image:y1,description:"Потужність у компактному корпусі.",specs:{screen:"14.2 Liquid Retina XDR",chip:"M3 Pro",memory:"18GB / 512GB",battery:"До 18 годин"}},{id:503,name:"MacBook Air 15",price:64999,category:"Ноутбуки",image:g1,description:"Великий екран. Неймовірно тонкий дизайн.",specs:{screen:"15.3 Liquid Retina",chip:"M3",memory:"8GB / 256GB",battery:"До 18 годин"}},{id:504,name:"ASUS ROG Strix",price:78999,category:"Ноутбуки",image:f1,description:"Домінуйте в іграх з максимальною продуктивністю.",specs:{screen:"16 QHD+ 240Hz",chip:"Intel Core i9-14900HX",graphics:"RTX 4070 8GB",memory:"32GB DDR5"}},{id:505,name:"ASUS ZenBook",price:54999,category:"Ноутбуки",image:s1,description:"Елегантність та потужність для творчості.",specs:{screen:"14 OLED 2.8K",chip:"Intel Core Ultra 7",memory:"16GB / 1TB",battery:"До 15 годин"}},{id:506,name:"Lenovo Legion 9i",price:149999,category:"Ноутбуки",image:h1,description:"Вершина ігрових технологій з рідинним охолодженням.",specs:{screen:"16 Mini-LED 3.2K",chip:"Intel Core i9-14900HX",graphics:"RTX 4090 16GB",memory:"64GB DDR5"}},{id:507,name:"MSI Titan 18 HX",price:199999,category:"Ноутбуки",image:p1,description:"Безкомпромісна продуктивність десктопного рівня.",specs:{screen:"18 UHD+ 120Hz Mini-LED",chip:"Intel Core i9-14900HX",graphics:"RTX 4090 16GB",memory:"128GB DDR5"}},{id:508,name:"Dell XPS 15",price:94999,category:"Ноутбуки",image:d1,description:"Іконічний дизайн та приголомшлива продуктивність.",specs:{screen:"15.6 OLED 3.5K",chip:"Intel Core i7-13700H",graphics:"RTX 4050",memory:"32GB DDR5"}},{id:509,name:"Dell Precision",price:84999,category:"Ноутбуки",image:m1,description:"Мобільна робоча станція для професіоналів.",specs:{screen:"16 FHD+",chip:"Intel Core i7-13800H",graphics:"RTX A2000",memory:"32GB DDR5"}},{id:10,name:"Apple Watch Ultra 2",price:36999,category:"Годинники",image:t1,description:"Годинник для екстремалів. Титановий корпус.",specs:{case:"49мм Титан",water_resistance:"100м",sensors:"Глибиномір, Кисень у крові",battery:"До 36 годин"}},{id:11,name:"Apple Watch Series 10",price:21999,category:"Годинники",image:l1,description:"Найтонший Apple Watch з найбільшим дисплеєм.",specs:{case:"46мм або 42мм Алюміній/Титан",water_resistance:"50м",sensors:"Глибиномір, Температура води",battery:"До 18 годин"}},{id:13,name:"Samsung Galaxy Watch 8",price:14999,category:"Годинники",image:n1,description:"Ваш особистий тренер та помічник здоров'я.",specs:{case:"44мм або 40мм Алюміній",water_resistance:"IP68 + 5ATM",sensors:"BioActive Sensor",battery:"До 40 годин"}},{id:14,name:"Xiaomi Watch S5",price:6999,category:"Годинники",image:i1,description:"Стильний дизайн та до 15 днів роботи.",specs:{case:"46мм Сталь",water_resistance:"5ATM",sensors:"SpO2, Пульс",battery:"До 15 днів"}},{id:12,name:"Apple Watch SE 3",price:12999,category:"Годинники",image:a1,description:"Усе, що вам потрібно. За меншу ціну.",specs:{case:"44мм або 40мм Алюміній",water_resistance:"50м",sensors:"Пульс, Сон",battery:"До 18 годин"}},{id:200,name:"AirPods Pro 2",price:11499,category:"Навушники",image:u1,description:"Магія звуку. Активне шумозаглушення у 2 рази краще.",specs:{chip:"H2",audio:"Адаптивне аудіо",case:"USB-C MagSafe",battery:"До 6 годин"}},{id:201,name:"AirPods Pro 3",price:13999,category:"Навушники",image:c1,description:"Нове покоління Pro. Ще кращий звук.",specs:{chip:"H3",audio:"Lossless Audio",case:"USB-C MagSafe + Find My",battery:"До 7 годин"}},{id:202,name:"AirPods 4",price:7999,category:"Навушники",image:r1,description:"Відкрита конструкція з новим рівнем звучання.",specs:{chip:"H2",audio:"Personalized Spatial Audio",case:"USB-C",battery:"До 5 годин"}},{id:203,name:"AirPods Max 2",price:24999,category:"Навушники",image:o1,description:"Ідеальний баланс захоплюючого аудіо Hi-Fi та комфорту.",specs:{chip:"H2 (x2)",audio:"Просторове аудіо, Lossless",colors:"5 нових кольорів",battery:"До 20 годин"}}],b1=()=>o.jsxs("div",{className:"home-page",children:[o.jsxs("section",{className:"hero",children:[o.jsx("div",{className:"hero-background"}),o.jsxs("div",{className:"container hero-container",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs("h1",{className:"hero-title fade-in-up",children:["Втілення ",o.jsx("br",{}),o.jsx("span",{className:"gradient-text",children:"Досконалості."})]}),o.jsx("p",{className:"hero-subtitle fade-in-up delay-1",children:"Твій світ стає безмежним з технологіями нового покоління."}),o.jsxs("div",{className:"hero-actions fade-in-up delay-2",children:[o.jsx(De,{to:"/shop",className:"btn-primary",children:"Купити Зараз"}),o.jsxs(De,{to:"/shop",className:"btn-secondary",children:["Дізнатись більше ",o.jsx(Fr,{size:20})]})]})]}),o.jsx("div",{className:"hero-image-wrapper fade-in delay-3",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=2080&auto=format&fit=crop",alt:"NextPhone Titanium",className:"hero-image"})})]})]}),o.jsx("section",{className:"featured-section",children:o.jsxs("div",{className:"container",children:[o.jsx(qr,{title:"Останні Новинки",products:Fa.slice(0,8)}),o.jsx("div",{style:{height:"4rem"}}),o.jsx(qr,{title:"Смартфони",products:Fa.filter(u=>u.category==="Телефони")}),o.jsx("div",{style:{height:"4rem"}}),o.jsx(qr,{title:"Аксесуари",products:Fa.filter(u=>["Годинники","Навушники","Аксесуари"].includes(u.category))})]})}),o.jsx("section",{className:"categories-section",children:o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title text-center mb-5",children:"Популярні Категорії"}),o.jsxs("div",{className:"categories-grid",children:[o.jsxs(De,{to:"/shop?category=Телефони",className:"category-card",onClick:()=>window.scrollTo(0,0),children:[o.jsx("div",{className:"cat-icon",children:"📱"}),o.jsx("h3",{children:"iPhone"})]}),o.jsxs(De,{to:"/shop?category=Годинники",className:"category-card",onClick:()=>window.scrollTo(0,0),children:[o.jsx("div",{className:"cat-icon",children:"⌚"}),o.jsx("h3",{children:"Watch"})]}),o.jsxs(De,{to:"/shop?category=Ноутбуки",className:"category-card",onClick:()=>window.scrollTo(0,0),children:[o.jsx("div",{className:"cat-icon",children:"💻"}),o.jsx("h3",{children:"MacBook"})]}),o.jsxs(De,{to:"/shop?category=Навушники",className:"category-card",onClick:()=>window.scrollTo(0,0),children:[o.jsx("div",{className:"cat-icon",children:"🎧"}),o.jsx("h3",{children:"AirPods"})]})]})]})}),o.jsx("style",{children:`
        .home-page {
          overflow-x: hidden;
        }


        .hero {
          position: relative;
          min-height: 95vh;
          display: flex;
          align-items: center;
          background: #Fbfbfd;
          padding-top: 100px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 6rem;
          width: 100%;
        }

        .hero-content {
          z-index: 2;
        }

        .hero-title {
          font-size: var(--font-size-hero);
          font-weight: 700;
          line-height: 1.05;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
          color: #1d1d1f;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0071E3 0%, #00C6FB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: var(--color-text-secondary);
          margin-bottom: 3.5rem;
          max-width: 600px;
          line-height: 1.4;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .hero-image-wrapper {
          position: relative;
          height: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .hero-image {
          width: 130%; 
          max-width: 1000px;
          transform: rotate(-10deg) translateX(80px);
          mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
          filter: drop-shadow(0 50px 100px rgba(0,0,0,0.3));
        }

        @media (max-width: 1200px) {
          .hero-title { font-size: 4.5rem; }
          .hero-image-wrapper { height: 600px; }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 4rem;
            gap: 2rem;
          }
          
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
             font-size: 3.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }

          .hero-image-wrapper {
             height: 500px;
             margin-top: -50px;
          }
          
          .hero-image {
            width: 100%;
            transform: rotate(0);
          }
        }


        .featured-section {
          padding: 10rem 0;
          background: #fff;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          color: #1d1d1f;
        }

        .section-desc {
          font-size: 1.5rem;
          color: var(--color-text-secondary);
        }

        .see-all-link {
          color: var(--color-accent);
          font-size: 1.25rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: gap 0.2s;
        }
        
        .see-all-link:hover {
          gap: 15px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }


        .categories-section {
          padding-bottom: 8rem;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .category-card {
           background: var(--color-bg-secondary);
           padding: 3rem 1.5rem;
           border-radius: var(--radius-lg);
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 1rem;
           transition: all 0.3s;
           text-decoration: none;
           color: var(--color-text-primary);
           border: 1px solid transparent;
        }

        .category-card:hover {
           background: white;
           transform: translateY(-5px);
           box-shadow: var(--shadow-lg);
           border-color: var(--color-border);
        }

        .cat-icon {
           font-size: 3rem;
        }
        
        .category-card h3 {
           margin: 0;
           font-size: 1.25rem;
           font-weight: 600;
        }
        
        .mb-5 { margin-bottom: 3rem; }



        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `})]}),x1=()=>{const[u]=ay(),[d,s]=S.useState("Всі");S.useEffect(()=>{const h=u.get("category");h&&s(h)},[u]);const r=["Всі",...new Set(Fa.map(h=>h.category))],m=d==="Всі"?Fa:Fa.filter(h=>h.category===d);return o.jsxs("div",{className:"shop-page container",children:[o.jsxs("div",{className:"shop-header text-center",children:[o.jsx("h1",{className:"display-title",children:"Каталог"}),o.jsx("p",{className:"lead-text",children:"Досконалість у кожній деталі."})]}),o.jsxs("div",{className:"shop-layout",children:[o.jsx("aside",{className:"filters-sidebar",children:o.jsxs("div",{className:"sticky-filter",children:[o.jsx("h3",{className:"filter-heading",children:"Категорії"}),o.jsx("div",{className:"category-list",children:r.map(h=>o.jsx("button",{className:`category-btn ${d===h?"active":""}`,onClick:()=>s(h),children:o.jsx("span",{className:"cat-name",children:h})},h))}),o.jsxs("div",{className:"promo-box",children:[o.jsx("h4",{children:"Знижка 10%"}),o.jsx("p",{children:"На аксесуари при покупці телефону"})]})]})}),o.jsxs("main",{className:"product-grid-container",children:[o.jsxs("div",{className:"results-count",children:["Знайдено ",m.length," товарів"]}),o.jsx("div",{className:"product-grid",children:m.map(h=>o.jsx(Xm,{product:h},h.id))})]})]}),o.jsx("style",{children:`
        .shop-page {
          padding-top: 140px;
          padding-bottom: 8rem;
        }

        .shop-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .display-title {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-primary);
        }

        .lead-text {
          font-size: 1.8rem;
          color: var(--color-text-secondary);
        }

        .shop-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 5rem;
          align-items: start;
        }

        .sticky-filter {
          position: sticky;
          top: 140px;
          padding: 2.5rem;
          background: #Fbfbfd;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .filter-heading {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .category-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .category-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.2rem;
          background: transparent;
          color: var(--color-text-primary);
          border-radius: var(--radius-md);
          font-size: 1.15rem;
          text-align: left;
          transition: all 0.2s;
          font-weight: 500;
        }

        .category-btn:hover {
          background: rgba(0,0,0,0.03);
        }

        .category-btn.active {
          background: #1d1d1f;
          color: white;
        }

        .cat-dot {
          width: 8px;
          height: 8px;
          background: var(--color-accent);
          border-radius: 50%;
        }
        
        .category-btn.active .cat-dot {
           background: white;
        }

        .promo-box {
          margin-top: 4rem;
          padding: 2rem;
          background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
          border-radius: var(--radius-md);
          border: 1px solid #bfdbfe;
        }
        
        .promo-box h4 { color: #0369a1; margin-bottom: 0.8rem; font-size: 1.2rem; }
        .promo-box p { font-size: 1rem; color: #0c4a6e; line-height: 1.5; }

        .results-count {
           font-size: 1rem;
           color: var(--color-text-secondary);
           margin-bottom: 2rem;
           text-align: right;
        }

        .product-grid {
          display: grid;

          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 3rem;
        }

        @media (max-width: 1024px) {
          .shop-layout {
            grid-template-columns: 1fr;
          }

          .filters-sidebar {
            margin-bottom: 3rem;
          }

          .sticky-filter {
             position: static;
             display: flex;
             flex-direction: column;
             padding: 1.5rem;
          }

          .category-list {
             flex-direction: row;
             flex-wrap: wrap;
          }

          .category-btn {
             padding: 0.8rem 1.5rem;
             background: var(--color-bg-secondary);
          }
           
          .promo-box { display: none; }
          
          .product-grid {
             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }
      `})]})},S1=()=>{const{id:u}=sg(),{addToCart:d}=Yn(),s=Fa.find(r=>r.id===parseInt(u));return s?o.jsxs("div",{className:"product-details-page",children:[o.jsx("div",{className:"container",children:o.jsxs("div",{className:"details-grid",children:[o.jsx("div",{className:"product-gallery",children:o.jsx("img",{src:s.image,alt:s.name})}),o.jsxs("div",{className:"product-info",children:[o.jsx("h1",{className:"product-title",children:s.name}),o.jsxs("p",{className:"product-price",children:[s.price.toLocaleString()," ₴"]}),o.jsx("p",{className:"product-description",children:s.description}),o.jsxs("div",{className:"specs-list",children:[o.jsx("h3",{children:"Характеристики"}),o.jsx("ul",{children:Object.entries(s.specs).map(([r,m])=>o.jsxs("li",{children:[o.jsxs("span",{className:"spec-label",children:[r,":"]})," ",m]},r))})]}),o.jsx("div",{className:"actions",children:o.jsx("button",{className:"btn-buy",onClick:()=>d(s),children:"Додати в кошик"})}),o.jsxs("div",{className:"benefits",children:[o.jsxs("div",{className:"benefit-item",children:[o.jsx(Pr,{size:20}),o.jsx("span",{children:"Безкоштовна доставка"})]}),o.jsxs("div",{className:"benefit-item",children:[o.jsx(Hy,{size:20}),o.jsx("span",{children:"Гарантія 2 роки"})]}),o.jsxs("div",{className:"benefit-item",children:[o.jsx(my,{size:20}),o.jsx("span",{children:"30 Днів на повернення"})]})]})]})]})}),o.jsx("style",{children:`
        .product-details-page {
          padding-top: 100px;
          padding-bottom: 4rem;
          min-height: 100vh;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .product-gallery {
          background: var(--color-bg-secondary);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-gallery img {
          width: 100%;
          height: auto;
          mix-blend-mode: multiply;
        }

        .product-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .product-price {
          font-size: 1.5rem;
          color: var(--color-accent);
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .product-description {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .specs-list {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--color-bg-secondary);
          border-radius: var(--radius-md);
        }

        .specs-list h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        .specs-list ul {
          list-style: none;
        }

        .specs-list li {
          margin-bottom: 0.5rem;
          display: flex;
          gap: 0.5rem;
        }

        .spec-label {
          font-weight: 600;
          text-transform: capitalize;
        }

        .btn-buy {
          width: 100%;
          padding: 1rem;
          background: var(--color-accent);
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          transition: background 0.2s;
        }

        .btn-buy:hover {
          background: var(--color-accent-hover);
        }

        .benefits {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          border-top: 1px solid var(--color-border);
          padding-top: 2rem;
        }

        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .details-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `})]}):o.jsx("div",{className:"container",style:{paddingTop:"100px"},children:"Товар не знайдено"})},Yr=2e4,E1=({item:u,onRemove:d,onUpdateQuantity:s})=>{const[r,m]=S.useState(0),[h,b]=S.useState(!1),A=S.useRef(0),x=S.useRef(0),g=S.useRef(!1),R=S.useRef(!1),T=S.useCallback(H=>{H<-40?(m(-90),x.current=-90,g.current=!0):(m(0),x.current=0,g.current=!1)},[]),U=H=>{A.current=H.touches[0].clientX,R.current=!0},q=H=>{if(!R.current)return;const $=H.touches[0].clientX-A.current;let L;g.current?L=Math.max(Math.min(-90+$,0),-90):L=Math.max(Math.min($,0),-90),m(L),x.current=L},Y=()=>{R.current=!1,T(x.current)};S.useEffect(()=>{const H=L=>{if(!R.current)return;const I=L.clientX-A.current;let ne;g.current?ne=Math.max(Math.min(-90+I,0),-90):ne=Math.max(Math.min(I,0),-90),m(ne),x.current=ne},$=()=>{R.current&&(R.current=!1,T(x.current))};return document.addEventListener("mousemove",H),document.addEventListener("mouseup",$),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",$)}},[T]);const B=H=>{H.preventDefault(),A.current=H.clientX,R.current=!0},G=()=>{b(!0),m(-400),setTimeout(()=>d(u.id),300)};return o.jsxs("div",{className:`swipe-wrapper ${h?"removing":""}`,children:[o.jsxs("div",{className:"swipe-delete-bg",onClick:G,children:[o.jsx(qy,{size:20}),o.jsx("span",{children:"Видалити"})]}),o.jsxs("div",{className:"cart-item",style:{transform:`translateX(${r}px)`,transition:R.current?"none":"transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)"},onTouchStart:U,onTouchMove:q,onTouchEnd:Y,onMouseDown:B,children:[o.jsx("div",{className:"item-image",children:o.jsx("img",{src:u.image,alt:u.name,draggable:"false"})}),o.jsxs("div",{className:"item-details",children:[o.jsx("h3",{children:u.name}),o.jsxs("p",{className:"item-price",children:[u.price.toLocaleString()," ₴"]}),o.jsxs("div",{className:"item-quantity",children:[o.jsx("button",{onClick:H=>{H.stopPropagation(),s(u.id,-1)},children:o.jsx(Ry,{size:14})}),o.jsx("span",{children:u.quantity}),o.jsx("button",{onClick:H=>{H.stopPropagation(),s(u.id,1)},children:o.jsx(Ym,{size:14})})]})]}),o.jsxs("div",{className:"item-total",children:[(u.price*u.quantity).toLocaleString()," ₴"]})]})]})},z1=()=>{const{isOpen:u,closeCart:d,items:s,removeFromCart:r,updateQuantity:m,subtotal:h}=Yn(),b=su();S.useEffect(()=>{u?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[u]);const A=()=>{d(),b("/checkout")},x=Math.min(h/Yr*100,100),g=Yr-h,R=h>=Yr;return u?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"cart-overlay",onClick:d}),o.jsxs("div",{className:`cart-drawer ${u?"open":""}`,children:[o.jsxs("div",{className:"cart-header",children:[o.jsxs("div",{className:"cart-header-left",children:[o.jsx(Zr,{size:20}),o.jsxs("h2",{children:["Кошик ",o.jsx("span",{className:"cart-count",children:s.length})]})]}),o.jsx("button",{className:"close-btn",onClick:d,children:o.jsx(Ir,{size:22})})]}),s.length>0&&o.jsxs("div",{className:"shipping-bar",children:[o.jsxs("div",{className:"shipping-info",children:[o.jsx(Pr,{size:16}),R?o.jsx("span",{className:"shipping-free",children:"Безкоштовна доставка! 🎉"}):o.jsxs("span",{children:["До безкоштовної доставки ще ",o.jsxs("strong",{children:[g.toLocaleString()," ₴"]})]})]}),o.jsx("div",{className:"shipping-progress-track",children:o.jsx("div",{className:`shipping-progress-fill ${R?"complete":""}`,style:{width:`${x}%`}})})]}),o.jsx("div",{className:"cart-items",children:s.length===0?o.jsxs("div",{className:"empty-cart",children:[o.jsx("div",{className:"empty-icon-wrapper",children:o.jsx(Zr,{size:40})}),o.jsx("h3",{children:"Кошик порожній"}),o.jsx("p",{children:"Додайте товари, які вам сподобались"}),o.jsx("button",{className:"btn-shop",onClick:d,children:"Перейти до каталогу"})]}):s.map(T=>o.jsx(E1,{item:T,onRemove:r,onUpdateQuantity:m},T.id))}),s.length>0&&o.jsxs("div",{className:"cart-footer",children:[o.jsxs("div",{className:"subtotal",children:[o.jsx("span",{children:"Разом"}),o.jsxs("span",{className:"subtotal-amount",children:[h.toLocaleString()," ₴"]})]}),o.jsxs("button",{className:"btn-checkout",onClick:A,children:["Оформити замовлення",o.jsx(Fr,{size:18})]})]})]}),o.jsx("style",{children:`
        .cart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1001;
          animation: fadeIn 0.3s ease;
        }

        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 420px;
          height: 100%;
          background: #fafafa;
          z-index: 1002;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.12);
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 24px 0 0 24px;
        }

        .cart-header {
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          border-radius: 24px 0 0 0;
        }

        .cart-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cart-header h2 {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
          color: #1d1d1f;
        }

        .cart-count {
          background: #0071e3;
          color: white;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 20px;
          margin-left: 4px;
          font-weight: 600;
        }

        .close-btn {
          background: #f5f5f7;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: #1d1d1f;
        }

        .close-btn:hover {
          background: #e8e8ed;
          transform: rotate(90deg);
        }


        .shipping-bar {
          padding: 1rem 1.5rem;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .shipping-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #86868b;
          margin-bottom: 0.6rem;
        }

        .shipping-info strong {
          color: #1d1d1f;
        }

        .shipping-free {
          color: #34c759;
          font-weight: 600;
        }

        .shipping-progress-track {
          height: 4px;
          background: #e8e8ed;
          border-radius: 4px;
          overflow: hidden;
        }

        .shipping-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0071e3, #00c6fb);
          border-radius: 4px;
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .shipping-progress-fill.complete {
          background: linear-gradient(90deg, #34c759, #30d158);
        }


        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 0.75rem 0;
        }

        .cart-items::-webkit-scrollbar {
          width: 0;
        }


        .swipe-wrapper {
          position: relative;
          overflow: hidden;
          margin-bottom: 2px;
        }

        .swipe-delete-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 90px;
          background: linear-gradient(135deg, #ff3b30, #ff453a);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .swipe-delete-bg:hover {
          background: linear-gradient(135deg, #e5342a, #ff453a);
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          padding: 1rem 1.5rem;
          position: relative;
          background: #fafafa;
          align-items: center;
          user-select: none;
          cursor: grab;
        }

        .cart-item:active {
          cursor: grabbing;
        }

        .item-image {
          width: 72px;
          height: 72px;
          background: white;
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 6px;
        }

        .item-details {
          flex: 1;
          min-width: 0;
        }

        .item-details h3 {
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0 0 4px;
          color: #1d1d1f;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-price {
          color: #86868b;
          margin: 0 0 8px;
          font-size: 0.82rem;
        }

        .item-total {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1d1d1f;
          white-space: nowrap;
        }

        .item-quantity {
          display: inline-flex;
          align-items: center;
          gap: 0;
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .item-quantity button {
          background: none;
          border: none;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: #1d1d1f;
          transition: background 0.15s;
        }

        .item-quantity button:hover {
          background: #f5f5f7;
        }

        .item-quantity button:active {
          background: #e8e8ed;
        }

        .item-quantity span {
          font-size: 0.85rem;
          min-width: 24px;
          text-align: center;
          font-weight: 600;
        }


        .cart-footer {
          padding: 1.25rem 1.5rem;
          padding-bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px));
          background: white;
          border-top: 1px solid rgba(0,0,0,0.06);
          border-radius: 0 0 0 24px;
        }

        .subtotal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .subtotal span:first-child {
          font-size: 0.95rem;
          color: #86868b;
          font-weight: 500;
        }

        .subtotal-amount {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1d1d1f;
        }

        .btn-checkout {
          width: 100%;
          padding: 1rem;
          background: #1d1d1f;
          color: white;
          font-weight: 600;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .btn-checkout:hover {
          background: #333;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-checkout:active {
          transform: translateY(0);
        }


        .empty-cart {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .empty-icon-wrapper {
          width: 80px;
          height: 80px;
          background: #f5f5f7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: #86868b;
        }

        .empty-cart h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1d1d1f;
          margin: 0 0 0.5rem;
        }

        .empty-cart p {
          color: #86868b;
          font-size: 0.9rem;
          margin: 0;
        }

        .btn-shop {
          margin-top: 1.5rem;
          padding: 0.8rem 2rem;
          background: #1d1d1f;
          color: white;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-shop:hover {
          background: #333;
          transform: translateY(-1px);
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 440px) {
          .cart-drawer {
            max-width: 100%;
            border-radius: 0;
          }
          .cart-header {
            border-radius: 0;
          }
        }
      `})]}):null},Qm="3e085e3c3414d07a4f78ac66c1399fb9",Zm="https://api.novaposhta.ua/v2.0/json/",j1=async u=>{if(!u)return[];const d={apiKey:Qm,modelName:"Address",calledMethod:"searchSettlements",methodProperties:{CityName:u,Limit:"50",Page:"1",Language:"UA"}};try{const r=await(await fetch(Zm,{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}})).json();return r.success&&r.data&&r.data.length>0?r.data[0].Addresses.map(m=>({label:`${m.Present}`,value:m.DeliveryCity,ref:m.DeliveryCity})):[]}catch(s){return console.error("NP API Error:",s),[]}},N1=async u=>{if(!u)return[];const d={apiKey:Qm,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityRef:u,Limit:"500",Language:"UA"}};try{const r=await(await fetch(Zm,{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}})).json();return r.success?r.data.map(m=>({label:m.Description,value:m.Ref})):[]}catch(s){return console.error("NP API Error:",s),[]}},A1=()=>{const{items:u,subtotal:d}=Yn(),[s,r]=S.useState(1),[m,h]=S.useState(!1),[b,A]=S.useState(!1),[x,g]=S.useState(""),[R,T]=S.useState(""),[U,q]=S.useState(""),[Y,B]=S.useState("card"),[G,H]=S.useState(""),[$,L]=S.useState([]),[I,ne]=S.useState(null),[ge,J]=S.useState(!1),[ze,we]=S.useState([]),[Qe,et]=S.useState(null),[$e,_t]=S.useState(!1),[vt,We]=S.useState("");S.useEffect(()=>{const Z=setTimeout(async()=>{if(G.length>=1&&!I){h(!0);const v=await j1(G);L(v),h(!1),J(!0)}else G.length<1&&(L([]),J(!1))},300);return()=>clearTimeout(Z)},[G,I]),S.useEffect(()=>{I?(async()=>{A(!0);const v=await N1(I.ref);we(v),A(!1)})():(we([]),et(null),We(""))},[I]);const C=Z=>{ne(Z),H(Z.label),J(!1),et(null),We("")},X=Z=>{et(Z),We(Z.label),_t(!1)},P=Z=>{if(Z.preventDefault(),s<2){if(!I||!Qe||!x||!R||!U){alert("Будь ласка, заповніть всі поля");return}r(s+1)}else setTimeout(()=>r(3),1500)},me=ze.filter(Z=>Z.label.toLowerCase().includes(vt.toLowerCase()));return u.length===0&&s!==3?o.jsxs("div",{className:"container empty-checkout",children:[o.jsx("h1",{children:"Ваш кошик порожній"}),o.jsx(De,{to:"/shop",className:"btn-primary",children:"Перейти до каталогу"})]}):s===3?o.jsxs("div",{className:"success-page-wrapper",children:[o.jsx("style",{children:`
          .success-page-wrapper {
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 120px 24px 60px;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          }
          .success-card {
            background: white;
            padding: 3rem 2.5rem;
            border-radius: 28px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.08);
            text-align: center;
            max-width: 460px;
            width: 100%;
            animation: cardAppear 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .success-icon-container {
            width: 90px;
            height: 90px;
            background: linear-gradient(135deg, #34c759 0%, #30d158 100%);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            box-shadow: 0 12px 30px rgba(52, 199, 89, 0.35);
            animation: iconBounce 0.6s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          }
          .success-card .success-title {
            font-size: 1.8rem;
            font-weight: 800;
            margin: 0 0 0.75rem;
            color: #1d1d1f;
            letter-spacing: -0.02em;
          }
          .success-card .success-message {
            color: #86868b;
            margin: 0 0 2rem;
            line-height: 1.6;
            font-size: 0.95rem;
          }
          .order-id {
            color: #1d1d1f;
            font-weight: 700;
            background: #f5f5f7;
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 0.9rem;
          }
          .order-summary-box {
            background: #f5f5f7;
            padding: 1.25rem 1.5rem;
            border-radius: 16px;
            margin-bottom: 1.5rem;
            text-align: left;
          }
          .order-summary-box .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
          }
          .order-summary-box .summary-row span:first-child {
            font-size: 0.95rem;
            font-weight: 600;
            color: #1d1d1f;
          }
          .order-summary-box .total-amount {
            color: #0071e3;
            font-size: 1.3rem;
            font-weight: 800;
          }
          .shipping-note {
            font-size: 0.85rem;
            color: #86868b;
            margin: 0;
            line-height: 1.5;
          }
          .success-page-wrapper .btn-primary.full-width {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0071e3;
            color: white;
            padding: 1rem 2rem;
            border-radius: 14px;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: all 0.25s ease;
            text-decoration: none;
          }
          .success-page-wrapper .btn-primary.full-width:hover {
            background: #0077ed;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 113, 227, 0.3);
          }
          @keyframes cardAppear {
            from { opacity: 0; transform: translateY(30px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes iconBounce {
            from { opacity: 0; transform: scale(0); }
            to { opacity: 1; transform: scale(1); }
          }
          @media (max-width: 500px) {
            .success-page-wrapper { padding: 100px 16px 40px; }
            .success-card { padding: 2rem 1.5rem; border-radius: 20px; }
            .success-card .success-title { font-size: 1.5rem; }
          }
        `}),o.jsxs("div",{className:"success-card",children:[o.jsx("div",{className:"success-icon-container",children:o.jsx(Sy,{size:44,strokeWidth:2.5})}),o.jsx("h1",{className:"success-title",children:"Замовлення прийнято!"}),o.jsxs("p",{className:"success-message",children:["Дякуємо, ",x,"! Ваше замовлення ",o.jsxs("span",{className:"order-id",children:["#",Math.floor(Math.random()*1e4)]})," успішно оформлено."]}),o.jsxs("div",{className:"order-summary-box",children:[o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Сума до сплати:"}),o.jsxs("span",{className:"total-amount",children:[d.toLocaleString()," ₴"]})]}),o.jsx("p",{className:"shipping-note",children:"Ми зв'яжемося з вами найближчим часом для підтвердження деталей доставки."})]}),o.jsx(De,{to:"/",className:"btn-primary full-width",children:"Продовжити покупки"})]})]}):o.jsxs("div",{className:"checkout-page container",children:[o.jsx("h1",{className:"page-title",children:"Оформлення замовлення"}),o.jsxs("div",{className:"checkout-grid",children:[o.jsxs("div",{className:"checkout-form-section",children:[o.jsxs("div",{className:"steps-indicator",children:[o.jsx("div",{className:`step ${s>=1?"active":""}`,children:"1. Доставка"}),o.jsx("div",{className:"step-line"}),o.jsx("div",{className:`step ${s>=2?"active":""}`,children:"2. Оплата"})]}),o.jsx("form",{onSubmit:P,className:"checkout-form",children:s===1?o.jsxs("div",{className:"form-step fade-in",children:[o.jsx("h2",{children:"Контактні дані"}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Ім'я"}),o.jsx("input",{type:"text",required:!0,value:x,onChange:Z=>g(Z.target.value),placeholder:"Іван"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Прізвище"}),o.jsx("input",{type:"text",required:!0,value:R,onChange:Z=>T(Z.target.value),placeholder:"Петренко"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Телефон"}),o.jsx("input",{type:"tel",required:!0,value:U,onChange:Z=>q(Z.target.value),placeholder:"+380 00 000 00 00"})]}),o.jsx("h2",{style:{marginTop:"2rem"},children:"Доставка (Нова Пошта)"}),o.jsxs("div",{className:"form-group dropdown-group",children:[o.jsx("label",{children:"Місто"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx("input",{type:"text",value:G,onChange:Z=>{H(Z.target.value),ne(null)},onFocus:()=>{$.length>0&&J(!0)},placeholder:"Почніть вводити назву міста...",required:!0}),m&&o.jsx("div",{className:"loader-spinner"})]}),ge&&$.length>0&&o.jsx("div",{className:"dropdown-list",children:$.map((Z,v)=>o.jsx("div",{className:"dropdown-item",onClick:()=>C(Z),children:Z.label},v))})]}),o.jsxs("div",{className:"form-group dropdown-group",children:[o.jsx("label",{children:"Відділення"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx("input",{type:"text",value:vt,onChange:Z=>{We(Z.target.value),_t(!0)},onFocus:()=>_t(!0),placeholder:I?"Оберіть відділення...":"Спочатку оберіть місто",disabled:!I,required:!0}),o.jsx(py,{size:16,className:"input-icon"})]}),$e&&I&&o.jsx("div",{className:"dropdown-list",children:b?o.jsx("div",{className:"dropdown-item",children:"Завантаження..."}):me.length>0?me.map(Z=>o.jsx("div",{className:"dropdown-item",onClick:()=>X(Z),children:Z.label},Z.value)):o.jsx("div",{className:"dropdown-item",children:"Нічого не знайдено"})})]}),o.jsxs("button",{type:"submit",className:"btn-next",children:["Далі до оплати ",o.jsx(Fr,{size:18})]})]}):o.jsxs("div",{className:"form-step fade-in",children:[o.jsx("h2",{children:"Виберіть спосіб оплати"}),o.jsxs("div",{className:"payment-methods",children:[o.jsxs("label",{className:`payment-option ${Y==="card"?"selected":""}`,children:[o.jsx("input",{type:"radio",name:"paymentMethod",value:"card",checked:Y==="card",onChange:()=>B("card")}),o.jsxs("div",{className:"option-content",children:[o.jsx(zy,{size:24}),o.jsxs("div",{children:[o.jsx("h3",{children:"Оплата карткою"}),o.jsx("p",{children:"Visa / Mastercard / Apple Pay"})]})]})]}),o.jsxs("label",{className:`payment-option ${Y==="cod"?"selected":""}`,children:[o.jsx("input",{type:"radio",name:"paymentMethod",value:"cod",checked:Y==="cod",onChange:()=>B("cod")}),o.jsxs("div",{className:"option-content",children:[o.jsx(Pr,{size:24}),o.jsxs("div",{children:[o.jsx("h3",{children:"Накладений платіж"}),o.jsx("p",{children:"Оплата при отриманні (+ комісія НП)"})]})]})]})]}),o.jsxs("div",{className:"summary-card",children:[o.jsx("h3",{children:"Дані доставки:"}),o.jsxs("p",{children:[x," ",R]}),o.jsx("p",{children:U}),o.jsx("p",{children:I==null?void 0:I.label}),o.jsx("p",{children:Qe==null?void 0:Qe.label})]}),o.jsxs("div",{className:"payment-actions",children:[o.jsx("button",{type:"button",className:"btn-back",onClick:()=>r(1),children:"Назад"}),o.jsxs("button",{type:"submit",className:"btn-confirm",children:["Підтвердити замовлення (",d," ₴)"]})]})]})})]}),o.jsxs("div",{className:"checkout-summary",children:[o.jsx("h2",{children:"Ваше замовлення"}),o.jsx("div",{className:"summary-items",children:u.map(Z=>o.jsxs("div",{className:"summary-item",children:[o.jsx("div",{className:"summary-img",children:o.jsx("img",{src:Z.image,alt:Z.name})}),o.jsxs("div",{className:"summary-details",children:[o.jsx("h4",{children:Z.name}),o.jsxs("p",{children:["x",Z.quantity]})]}),o.jsxs("div",{className:"summary-price",children:[Z.price*Z.quantity," ₴"]})]},Z.id))}),o.jsxs("div",{className:"summary-total",children:[o.jsx("span",{children:"Разом до сплати:"}),o.jsxs("span",{className:"total-amount",children:[d," ₴"]})]})]})]}),o.jsx("style",{children:`
        .checkout-page {
          padding-top: 100px;
          padding-bottom: 4rem;
          min-height: 100vh;
        }

        .empty-checkout {
          padding-top: 140px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }

        .success-page-wrapper {
          min-height: 80vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px 50px;
        }

        .success-card {
          background: white;
          padding: 3.5rem 2.5rem;
          border-radius: 32px;
          box-shadow: 0 25px 80px -12px rgba(0, 0, 0, 0.15);
          text-align: center;
          max-width: 480px;
          width: 100%;
          border: 1px solid rgba(0,0,0,0.04);
          animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .success-icon-container {
          width: 88px;
          height: 88px;
          background: rgba(52, 199, 89, 0.1);
          color: #34c759;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .success-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }

        .success-message {
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          line-height: 1.5;
          font-size: 1rem;
        }

        .order-id {
          color: var(--color-text-primary);
          font-weight: 700;
          background: var(--color-bg-secondary);
          padding: 2px 6px;
          border-radius: 6px;
        }

        .order-summary-box {
          background: var(--color-bg-secondary);
          padding: 1.25rem;
          border-radius: 20px;
          margin-bottom: 2rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .total-amount {
          color: var(--color-accent);
          font-size: 1.4rem;
          font-weight: 800;
        }

        .shipping-note {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .full-width {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .order-details-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          width: 100%;
          margin-bottom: 2rem;
        }

        .btn-primary {
          background: var(--color-accent);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 999px;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 113, 227, 0.2);
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }


        @media (max-width: 900px) {
          .checkout-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .checkout-summary {
            order: 2; 
          }
          .checkout-form-section {
            order: 1;
          }
        }

        .checkout-form-section {
          background: #fff;
        }

        .steps-indicator {
          display: flex;
          align-items: center;
          margin-bottom: 2.5rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .step.active {
          color: var(--color-accent);
          font-weight: 700;
        }

        .step-line {
          height: 1px;
          background: var(--color-border);
          flex: 1;
          margin: 0 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          right: 14px;
          color: var(--color-text-secondary);
          pointer-events: none;
        }

        .form-group input {
          width: 100%;
          padding: 0.9rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.2s;
          background: var(--color-bg-secondary);
        }

        .form-group input:focus {
          outline: none;
          background: white;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
        }

        .form-group input:disabled {
          background-color: var(--color-bg-secondary);
          cursor: not-allowed;
          opacity: 0.7;
        }


        .dropdown-list {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          width: 100%;
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: var(--radius-md);
          max-height: 280px;
          overflow-y: auto;
          z-index: 100;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          padding: 5px;
        }

        .dropdown-item {
          padding: 12px 16px;
          cursor: pointer;
          font-size: 0.95rem;
          border-radius: var(--radius-sm);
          transition: background 0.1s;
        }

        .dropdown-item:hover {
          background: var(--color-bg-secondary);
          color: var(--color-accent);
        }

        .loader-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid var(--color-border);
          border-top-color: var(--color-accent);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          position: absolute;
          right: 14px;
        }
        
        @keyframes spin { to { transform: rotate(360deg); } }

        .payment-option {
          display: block;
          margin-bottom: 1rem;
          cursor: pointer;
        }

        .payment-option input {
          display: none;
        }

        .option-content {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        
        .option-content:hover {
          border-color: var(--color-text-secondary);
        }

        .payment-option input:checked + .option-content {
          border-color: var(--color-accent);
          background: rgba(0, 113, 227, 0.04);
          box-shadow: 0 0 0 1px var(--color-accent);
        }

        .option-content h3 {
          font-size: 1.05rem;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .option-content p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .payment-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .btn-next, .btn-confirm {
          background: var(--color-accent);
          color: white;
          border-radius: 999px;
          padding: 1.1rem 2.5rem;
          font-weight: 600;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          width: 100%;
          justify-content: center;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0, 113, 227, 0.2);
        }

        .btn-next:hover, .btn-confirm:hover {
          background: var(--color-accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 113, 227, 0.3);
        }

        .btn-back {
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          border-radius: 999px;
          padding: 1.1rem 2.5rem;
          font-weight: 600;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-back:hover {
          background: var(--color-bg-secondary);
          border-color: var(--color-text-primary);
        }

        .checkout-summary {
          background: var(--color-bg-secondary);
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          height: fit-content;
          position: sticky;
          top: 120px;
        }

        .summary-item {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .summary-img {
          width: 70px;
          height: 70px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: white;
          flex-shrink: 0;
          border: 1px solid rgba(0,0,0,0.04);
        }
        
        .summary-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .summary-details {
          flex: 1;
        }

        .summary-details h4 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }
        
        .summary-details p {
           color: var(--color-text-secondary);
           font-size: 0.9rem;
        }

        .summary-price {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          font-size: 1.4rem;
          font-weight: 800;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 1.5rem;
        }

        .summary-card {
           background: white;
           padding: 1.5rem;
           border-radius: var(--radius-lg);
           margin-top: 2rem;
           border: 1px solid var(--color-border);
           box-shadow: var(--shadow-sm);
        }
        .summary-card h3 { font-size: 1.1rem; margin-bottom: 0.8rem; }
        .summary-card p { font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: 0.4rem; }
      `})]})},T1=()=>{const u=S.useRef(null),d=S.useRef({x:-100,y:-100}),s=S.useRef({x:-100,y:-100}),[r,m]=S.useState(!1),[h,b]=S.useState(!1),[A,x]=S.useState(!1),g=S.useRef(null);return S.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;const U=J=>{s.current={x:J.clientX,y:J.clientY},A||x(!0)},q=()=>b(!0),Y=()=>b(!1),B=()=>m(!0),G=()=>m(!1),H=()=>x(!1),$=()=>x(!0),L=()=>{const J=document.querySelectorAll('a, button, [role="button"], input, select, textarea, .product-card, .category-card, .category-btn, .nav-btn, .add-btn-mini, .btn-primary, .btn-secondary, .btn-checkout, .btn-shop, .close-btn, .card-link');return J.forEach(ze=>{ze.addEventListener("mouseenter",B),ze.addEventListener("mouseleave",G)}),J};document.addEventListener("mousemove",U),document.addEventListener("mousedown",q),document.addEventListener("mouseup",Y),document.documentElement.addEventListener("mouseleave",H),document.documentElement.addEventListener("mouseenter",$);let I=L();const ne=new MutationObserver(()=>{I.forEach(J=>{J.removeEventListener("mouseenter",B),J.removeEventListener("mouseleave",G)}),I=L()});ne.observe(document.body,{childList:!0,subtree:!0});const ge=()=>{d.current.x+=(s.current.x-d.current.x)*.12,d.current.y+=(s.current.y-d.current.y)*.12,u.current&&(u.current.style.transform=`translate(${d.current.x}px, ${d.current.y}px)`),g.current=requestAnimationFrame(ge)};return g.current=requestAnimationFrame(ge),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mousedown",q),document.removeEventListener("mouseup",Y),document.documentElement.removeEventListener("mouseleave",H),document.documentElement.removeEventListener("mouseenter",$),I.forEach(J=>{J.removeEventListener("mouseenter",B),J.removeEventListener("mouseleave",G)}),ne.disconnect(),g.current&&cancelAnimationFrame(g.current)}},[A]),typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:u,className:`custom-cursor ${A?"visible":""} ${r?"hovering":""} ${h?"clicking":""}`}),o.jsx("style",{children:`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          margin-left: -10px;
          margin-top: -10px;
          background: radial-gradient(circle, #3b9eff 0%, #0071e3 50%, #005bb5 100%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          opacity: 0;
          box-shadow: 0 0 12px 4px rgba(0, 113, 227, 0.35),
                      0 0 24px 8px rgba(0, 113, 227, 0.15);
          transition: opacity 0.3s,
                      width 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      height 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      margin 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      box-shadow 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      background 0.35s;
          will-change: transform;
        }

        .custom-cursor.visible {
          opacity: 1;
        }

        .custom-cursor.hovering {
          width: 44px;
          height: 44px;
          margin-left: -22px;
          margin-top: -22px;
          background: radial-gradient(circle, #5aadff 0%, #0071e3 60%, #005bb5 100%);
          box-shadow: 0 0 20px 6px rgba(0, 113, 227, 0.4),
                      0 0 40px 14px rgba(0, 113, 227, 0.15);
        }

        .custom-cursor.clicking {
          width: 14px;
          height: 14px;
          margin-left: -7px;
          margin-top: -7px;
          background: radial-gradient(circle, #66b3ff 0%, #0077ed 60%, #004fa3 100%);
          box-shadow: 0 0 16px 6px rgba(0, 113, 227, 0.5),
                      0 0 32px 12px rgba(0, 113, 227, 0.2);
        }

        @media (hover: none), (pointer: coarse) {
          .custom-cursor {
            display: none !important;
          }
        }
      `})]})};function M1(){return o.jsxs(o.Fragment,{children:[o.jsx(T1,{}),o.jsx(z1,{}),o.jsx(Ag,{children:o.jsxs(Hl,{path:"/",element:o.jsx(ky,{}),children:[o.jsx(Hl,{index:!0,element:o.jsx(b1,{})}),o.jsx(Hl,{path:"shop",element:o.jsx(x1,{})}),o.jsx(Hl,{path:"product/:id",element:o.jsx(S1,{})}),o.jsx(Hl,{path:"checkout",element:o.jsx(A1,{})})]})})]})}Np.createRoot(document.getElementById("root")).render(o.jsx(yp.StrictMode,{children:o.jsx(Fg,{basename:"/NextStore",children:o.jsx(Xy,{children:o.jsx(M1,{})})})}));
