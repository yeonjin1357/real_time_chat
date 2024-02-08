function m0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Zm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e_={exports:{}},ta={},t_={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),_0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),I0=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),hf=Symbol.iterator;function k0(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,i_={};function Ei(t,e,n){this.props=t,this.context=e,this.refs=i_,this.updater=n||n_}Ei.prototype.isReactComponent={};Ei.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ei.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function s_(){}s_.prototype=Ei.prototype;function ld(t,e,n){this.props=t,this.context=e,this.refs=i_,this.updater=n||n_}var ad=ld.prototype=new s_;ad.constructor=ld;r_(ad,Ei.prototype);ad.isPureReactComponent=!0;var ff=Array.isArray,o_=Object.prototype.hasOwnProperty,ud={current:null},l_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)o_.call(e,r)&&!l_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ks,type:t,key:s,ref:o,props:i,_owner:ud.current}}function R0(t,e){return{$$typeof:Ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ks}function N0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pf=/\/+/g;function Wa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N0(""+t.key):e.toString(36)}function zo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ks:case _0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wa(o,0):r,ff(i)?(n="",t!=null&&(n=t.replace(pf,"$&/")+"/"),zo(i,e,n,"",function(u){return u})):i!=null&&(cd(i)&&(i=R0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ff(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Wa(s,l);o+=zo(s,e,n,a,i)}else if(a=k0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Wa(s,l++),o+=zo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function mo(t,e,n){if(t==null)return t;var r=[],i=0;return zo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function P0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},$o={transition:null},x0={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:$o,ReactCurrentOwner:ud};F.Children={map:mo,forEach:function(t,e,n){mo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mo(t,function(){e++}),e},toArray:function(t){return mo(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Ei;F.Fragment=g0;F.Profiler=v0;F.PureComponent=ld;F.StrictMode=y0;F.Suspense=C0;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=r_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ud.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)o_.call(e,a)&&!l_.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ks,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:E0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w0,_context:t},t.Consumer=t};F.createElement=a_;F.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:S0,render:t}};F.isValidElement=cd;F.lazy=function(t){return{$$typeof:T0,_payload:{_status:-1,_result:t},_init:P0}};F.memo=function(t,e){return{$$typeof:I0,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return Le.current.useCallback(t,e)};F.useContext=function(t){return Le.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};F.useEffect=function(t,e){return Le.current.useEffect(t,e)};F.useId=function(){return Le.current.useId()};F.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Le.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};F.useRef=function(t){return Le.current.useRef(t)};F.useState=function(t){return Le.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Le.current.useTransition()};F.version="18.2.0";t_.exports=F;var de=t_.exports;const dd=Zm(de),mf=m0({__proto__:null,default:dd},[de]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=de,A0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),b0=Object.prototype.hasOwnProperty,L0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M0={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)b0.call(e,r)&&!M0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:A0,type:t,key:s,ref:o,props:i,_owner:L0.current}}ta.Fragment=D0;ta.jsx=u_;ta.jsxs=u_;e_.exports=ta;var w=e_.exports,bu={},c_={exports:{}},et={},d_={exports:{}},h_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,A){var L=P.length;P.push(A);e:for(;0<L;){var le=L-1>>>1,pe=P[le];if(0<i(pe,A))P[le]=A,P[L]=pe,L=le;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],L=P.pop();if(L!==A){P[0]=L;e:for(var le=0,pe=P.length,fo=pe>>>1;le<fo;){var Hn=2*(le+1)-1,$a=P[Hn],Gn=Hn+1,po=P[Gn];if(0>i($a,L))Gn<pe&&0>i(po,$a)?(P[le]=po,P[Gn]=L,le=Gn):(P[le]=$a,P[Hn]=L,le=Hn);else if(Gn<pe&&0>i(po,L))P[le]=po,P[Gn]=L,le=Gn;else break e}}return A}function i(P,A){var L=P.sortIndex-A.sortIndex;return L!==0?L:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(u)}}function y(P){if(v=!1,p(P),!g)if(n(a)!==null)g=!0,ja(C);else{var A=n(u);A!==null&&za(y,A.startTime-P)}}function C(P,A){g=!1,v&&(v=!1,m(k),k=-1),_=!0;var L=h;try{for(p(A),d=n(a);d!==null&&(!(d.expirationTime>A)||P&&!Ve());){var le=d.callback;if(typeof le=="function"){d.callback=null,h=d.priorityLevel;var pe=le(d.expirationTime<=A);A=t.unstable_now(),typeof pe=="function"?d.callback=pe:d===n(a)&&r(a),p(A)}else r(a);d=n(a)}if(d!==null)var fo=!0;else{var Hn=n(u);Hn!==null&&za(y,Hn.startTime-A),fo=!1}return fo}finally{d=null,h=L,_=!1}}var T=!1,R=null,k=-1,B=5,D=-1;function Ve(){return!(t.unstable_now()-D<B)}function Oi(){if(R!==null){var P=t.unstable_now();D=P;var A=!0;try{A=R(!0,P)}finally{A?Ai():(T=!1,R=null)}}else T=!1}var Ai;if(typeof f=="function")Ai=function(){f(Oi)};else if(typeof MessageChannel<"u"){var df=new MessageChannel,p0=df.port2;df.port1.onmessage=Oi,Ai=function(){p0.postMessage(null)}}else Ai=function(){S(Oi,0)};function ja(P){R=P,T||(T=!0,Ai())}function za(P,A){k=S(function(){P(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||_||(g=!0,ja(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var L=h;h=A;try{return P()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=h;h=P;try{return A()}finally{h=L}},t.unstable_scheduleCallback=function(P,A,L){var le=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?le+L:le):L=le,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=L+pe,P={id:c++,callback:A,priorityLevel:P,startTime:L,expirationTime:pe,sortIndex:-1},L>le?(P.sortIndex=L,e(u,P),n(a)===null&&P===n(u)&&(v?(m(k),k=-1):v=!0,za(y,L-le))):(P.sortIndex=pe,e(a,P),g||_||(g=!0,ja(C))),P},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(P){var A=h;return function(){var L=h;h=A;try{return P.apply(this,arguments)}finally{h=L}}}})(h_);d_.exports=h_;var U0=d_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_=de,Xe=U0;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p_=new Set,ms={};function wr(t,e){ti(t,e),ti(t+"Capture",e)}function ti(t,e){for(ms[t]=e,t=0;t<e.length;t++)p_.add(e[t])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},gf={};function j0(t){return Lu.call(gf,t)?!0:Lu.call(_f,t)?!1:F0.test(t)?gf[t]=!0:(_f[t]=!0,!1)}function z0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $0(t,e,n,r){if(e===null||typeof e>"u"||z0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hd,fd);Ie[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hd,fd);Ie[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hd,fd);Ie[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($0(e,n,i,r)&&(n=null),r||i===null?j0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var en=f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),m_=Symbol.for("react.provider"),__=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Fu=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),g_=Symbol.for("react.offscreen"),yf=Symbol.iterator;function Di(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Ba;function Ki(t){if(Ba===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ba=e&&e[1]||""}return`
`+Ba+t}var Va=!1;function Ha(t,e){if(!t||Va)return"";Va=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Va=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ki(t):""}function W0(t){switch(t.tag){case 5:return Ki(t.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return t=Ha(t.type,!1),t;case 11:return t=Ha(t.type.render,!1),t;case 1:return t=Ha(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xr:return"Fragment";case Pr:return"Portal";case Mu:return"Profiler";case md:return"StrictMode";case Uu:return"Suspense";case Fu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case __:return(t.displayName||"Context")+".Consumer";case m_:return(t._context.displayName||"Context")+".Provider";case _d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case ln:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function B0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function On(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V0(t){var e=y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function go(t){t._valueTracker||(t._valueTracker=V0(t))}function v_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=y_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=On(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w_(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function $u(t,e){w_(t,e);var n=On(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,On(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qi=Array.isArray;function Vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+On(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ef(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(qi(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:On(n)}}function E_(t,e){var n=On(e.value),r=On(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yo,C_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H0=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(t){H0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),es[e]=es[t]})});function I_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||es.hasOwnProperty(t)&&es[t]?(""+e).trim():e+"px"}function T_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=I_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var G0=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(G0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Hr=null,Gr=null;function Cf(t){if(t=Ys(t)){if(typeof qu!="function")throw Error(E(280));var e=t.stateNode;e&&(e=oa(e),qu(t.stateNode,t.type,e))}}function k_(t){Hr?Gr?Gr.push(t):Gr=[t]:Hr=t}function R_(){if(Hr){var t=Hr,e=Gr;if(Gr=Hr=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function N_(t,e){return t(e)}function P_(){}var Ga=!1;function x_(t,e,n){if(Ga)return t(e,n);Ga=!0;try{return N_(t,e,n)}finally{Ga=!1,(Hr!==null||Gr!==null)&&(P_(),R_())}}function gs(t,e){var n=t.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Qu=!1;if(Gt)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Qu=!1}function K0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ts=!1,rl=null,il=!1,Yu=null,q0={onError:function(t){ts=!0,rl=t}};function Q0(t,e,n,r,i,s,o,l,a){ts=!1,rl=null,K0.apply(q0,arguments)}function Y0(t,e,n,r,i,s,o,l,a){if(Q0.apply(this,arguments),ts){if(ts){var u=rl;ts=!1,rl=null}else throw Error(E(198));il||(il=!0,Yu=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function If(t){if(Er(t)!==t)throw Error(E(188))}function X0(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return If(i),t;if(s===r)return If(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function A_(t){return t=X0(t),t!==null?D_(t):null}function D_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D_(t);if(e!==null)return e;t=t.sibling}return null}var b_=Xe.unstable_scheduleCallback,Tf=Xe.unstable_cancelCallback,J0=Xe.unstable_shouldYield,Z0=Xe.unstable_requestPaint,ae=Xe.unstable_now,eE=Xe.unstable_getCurrentPriorityLevel,vd=Xe.unstable_ImmediatePriority,L_=Xe.unstable_UserBlockingPriority,sl=Xe.unstable_NormalPriority,tE=Xe.unstable_LowPriority,M_=Xe.unstable_IdlePriority,na=null,Ot=null;function nE(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(na,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:sE,rE=Math.log,iE=Math.LN2;function sE(t){return t>>>=0,t===0?32:31-(rE(t)/iE|0)|0}var vo=64,wo=4194304;function Qi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Qi(l):(s&=o,s!==0&&(r=Qi(s)))}else o=n&~i,o!==0?r=Qi(o):s!==0&&(r=Qi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function oE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=oE(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U_(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function Ka(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function aE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function F_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j_,Ed,z_,$_,W_,Ju=!1,Eo=[],vn=null,wn=null,En=null,ys=new Map,vs=new Map,un=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Li(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ys(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cE(t,e,n,r,i){switch(e){case"focusin":return vn=Li(vn,t,e,n,r,i),!0;case"dragenter":return wn=Li(wn,t,e,n,r,i),!0;case"mouseover":return En=Li(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ys.set(s,Li(ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,Li(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function B_(t){var e=Jn(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=O_(n),e!==null){t.blockedOn=e,W_(t.priority,function(){z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ku=r,n.target.dispatchEvent(r),Ku=null}else return e=Ys(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function Rf(t,e,n){Wo(t)&&n.delete(e)}function dE(){Ju=!1,vn!==null&&Wo(vn)&&(vn=null),wn!==null&&Wo(wn)&&(wn=null),En!==null&&Wo(En)&&(En=null),ys.forEach(Rf),vs.forEach(Rf)}function Mi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,dE)))}function ws(t){function e(i){return Mi(i,t)}if(0<Eo.length){Mi(Eo[0],t);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&Mi(vn,t),wn!==null&&Mi(wn,t),En!==null&&Mi(En,t),ys.forEach(e),vs.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)B_(n),n.blockedOn===null&&un.shift()}var Kr=en.ReactCurrentBatchConfig,ll=!0;function hE(t,e,n,r){var i=$,s=Kr.transition;Kr.transition=null;try{$=1,Sd(t,e,n,r)}finally{$=i,Kr.transition=s}}function fE(t,e,n,r){var i=$,s=Kr.transition;Kr.transition=null;try{$=4,Sd(t,e,n,r)}finally{$=i,Kr.transition=s}}function Sd(t,e,n,r){if(ll){var i=Zu(t,e,n,r);if(i===null)ru(t,e,r,al,n),kf(t,r);else if(cE(i,t,e,n,r))r.stopPropagation();else if(kf(t,r),e&4&&-1<uE.indexOf(t)){for(;i!==null;){var s=Ys(i);if(s!==null&&j_(s),s=Zu(t,e,n,r),s===null&&ru(t,e,r,al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ru(t,e,r,null,n)}}var al=null;function Zu(t,e,n,r){if(al=null,t=yd(r),t=Jn(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function V_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eE()){case vd:return 1;case L_:return 4;case sl:case tE:return 16;case M_:return 536870912;default:return 16}default:return 16}}var _n=null,Cd=null,Bo=null;function H_(){if(Bo)return Bo;var t,e=Cd,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bo=i.slice(t,1<r?1-r:void 0)}function Vo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function Nf(){return!1}function tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:Nf,this.isPropagationStopped=Nf,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=tt(Si),Qs=ne({},Si,{view:0,detail:0}),pE=tt(Qs),qa,Qa,Ui,ra=ne({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ui&&(Ui&&t.type==="mousemove"?(qa=t.screenX-Ui.screenX,Qa=t.screenY-Ui.screenY):Qa=qa=0,Ui=t),qa)},movementY:function(t){return"movementY"in t?t.movementY:Qa}}),Pf=tt(ra),mE=ne({},ra,{dataTransfer:0}),_E=tt(mE),gE=ne({},Qs,{relatedTarget:0}),Ya=tt(gE),yE=ne({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),vE=tt(yE),wE=ne({},Si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EE=tt(wE),SE=ne({},Si,{data:0}),xf=tt(SE),CE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TE[t])?!!e[t]:!1}function Td(){return kE}var RE=ne({},Qs,{key:function(t){if(t.key){var e=CE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NE=tt(RE),PE=ne({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=tt(PE),xE=ne({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),OE=tt(xE),AE=ne({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),DE=tt(AE),bE=ne({},ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LE=tt(bE),ME=[9,13,27,32],kd=Gt&&"CompositionEvent"in window,ns=null;Gt&&"documentMode"in document&&(ns=document.documentMode);var UE=Gt&&"TextEvent"in window&&!ns,G_=Gt&&(!kd||ns&&8<ns&&11>=ns),Af=" ",Df=!1;function K_(t,e){switch(t){case"keyup":return ME.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function FE(t,e){switch(t){case"compositionend":return q_(e);case"keypress":return e.which!==32?null:(Df=!0,Af);case"textInput":return t=e.data,t===Af&&Df?null:t;default:return null}}function jE(t,e){if(Or)return t==="compositionend"||!kd&&K_(t,e)?(t=H_(),Bo=Cd=_n=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G_&&e.locale!=="ko"?null:e.data;default:return null}}var zE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zE[t.type]:e==="textarea"}function Q_(t,e,n,r){k_(r),e=ul(e,"onChange"),0<e.length&&(n=new Id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rs=null,Es=null;function $E(t){og(t,0)}function ia(t){var e=br(t);if(v_(e))return t}function WE(t,e){if(t==="change")return e}var Y_=!1;if(Gt){var Xa;if(Gt){var Ja="oninput"in document;if(!Ja){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),Ja=typeof Lf.oninput=="function"}Xa=Ja}else Xa=!1;Y_=Xa&&(!document.documentMode||9<document.documentMode)}function Mf(){rs&&(rs.detachEvent("onpropertychange",X_),Es=rs=null)}function X_(t){if(t.propertyName==="value"&&ia(Es)){var e=[];Q_(e,Es,t,yd(t)),x_($E,e)}}function BE(t,e,n){t==="focusin"?(Mf(),rs=e,Es=n,rs.attachEvent("onpropertychange",X_)):t==="focusout"&&Mf()}function VE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(Es)}function HE(t,e){if(t==="click")return ia(e)}function GE(t,e){if(t==="input"||t==="change")return ia(e)}function KE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:KE;function Ss(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lu.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function Uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ff(t,e){var n=Uf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qE(t){var e=Z_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(r!==null&&Rd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ff(n,s);var o=Ff(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QE=Gt&&"documentMode"in document&&11>=document.documentMode,Ar=null,ec=null,is=null,tc=!1;function jf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tc||Ar==null||Ar!==nl(r)||(r=Ar,"selectionStart"in r&&Rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),is&&Ss(is,r)||(is=r,r=ul(ec,"onSelect"),0<r.length&&(e=new Id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ar)))}function Co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Za={},eg={};Gt&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function sa(t){if(Za[t])return Za[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eg)return Za[t]=e[n];return t}var tg=sa("animationend"),ng=sa("animationiteration"),rg=sa("animationstart"),ig=sa("transitionend"),sg=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){sg.set(t,e),wr(e,[t])}for(var eu=0;eu<zf.length;eu++){var tu=zf[eu],YE=tu.toLowerCase(),XE=tu[0].toUpperCase()+tu.slice(1);$n(YE,"on"+XE)}$n(tg,"onAnimationEnd");$n(ng,"onAnimationIteration");$n(rg,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(ig,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function $f(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Y0(r,e,void 0,t),t.currentTarget=null}function og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;$f(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;$f(i,l,u),s=a}}}if(il)throw t=Yu,il=!1,Yu=null,t}function q(t,e){var n=e[oc];n===void 0&&(n=e[oc]=new Set);var r=t+"__bubble";n.has(r)||(lg(e,t,2,!1),n.add(r))}function nu(t,e,n){var r=0;e&&(r|=4),lg(n,t,r,e)}var Io="_reactListening"+Math.random().toString(36).slice(2);function Cs(t){if(!t[Io]){t[Io]=!0,p_.forEach(function(n){n!=="selectionchange"&&(JE.has(n)||nu(n,!1,t),nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Io]||(e[Io]=!0,nu("selectionchange",!1,e))}}function lg(t,e,n,r){switch(V_(e)){case 1:var i=hE;break;case 4:i=fE;break;default:i=Sd}n=i.bind(null,e,n,t),i=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ru(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}x_(function(){var u=s,c=yd(n),d=[];e:{var h=sg.get(t);if(h!==void 0){var _=Id,g=t;switch(t){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":_=NE;break;case"focusin":g="focus",_=Ya;break;case"focusout":g="blur",_=Ya;break;case"beforeblur":case"afterblur":_=Ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=_E;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=OE;break;case tg:case ng:case rg:_=vE;break;case ig:_=DE;break;case"scroll":_=pE;break;case"wheel":_=LE;break;case"copy":case"cut":case"paste":_=EE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Of}var v=(e&4)!==0,S=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,p;f!==null;){p=f;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,m!==null&&(y=gs(f,m),y!=null&&v.push(Is(f,y,p)))),S)break;f=f.return}0<v.length&&(h=new _(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Ku&&(g=n.relatedTarget||n.fromElement)&&(Jn(g)||g[Kt]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(g=n.relatedTarget||n.toElement,_=u,g=g?Jn(g):null,g!==null&&(S=Er(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(_=null,g=u),_!==g)){if(v=Pf,y="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Of,y="onPointerLeave",m="onPointerEnter",f="pointer"),S=_==null?h:br(_),p=g==null?h:br(g),h=new v(y,f+"leave",_,n,c),h.target=S,h.relatedTarget=p,y=null,Jn(c)===u&&(v=new v(m,f+"enter",g,n,c),v.target=p,v.relatedTarget=S,y=v),S=y,_&&g)t:{for(v=_,m=g,f=0,p=v;p;p=kr(p))f++;for(p=0,y=m;y;y=kr(y))p++;for(;0<f-p;)v=kr(v),f--;for(;0<p-f;)m=kr(m),p--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=kr(v),m=kr(m)}v=null}else v=null;_!==null&&Wf(d,h,_,v,!1),g!==null&&S!==null&&Wf(d,S,g,v,!0)}}e:{if(h=u?br(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var C=WE;else if(bf(h))if(Y_)C=GE;else{C=VE;var T=BE}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=HE);if(C&&(C=C(t,u))){Q_(d,C,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Wu(h,"number",h.value)}switch(T=u?br(u):window,t){case"focusin":(bf(T)||T.contentEditable==="true")&&(Ar=T,ec=u,is=null);break;case"focusout":is=ec=Ar=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,jf(d,n,c);break;case"selectionchange":if(QE)break;case"keydown":case"keyup":jf(d,n,c)}var R;if(kd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Or?K_(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(G_&&n.locale!=="ko"&&(Or||k!=="onCompositionStart"?k==="onCompositionEnd"&&Or&&(R=H_()):(_n=c,Cd="value"in _n?_n.value:_n.textContent,Or=!0)),T=ul(u,k),0<T.length&&(k=new xf(k,t,null,n,c),d.push({event:k,listeners:T}),R?k.data=R:(R=q_(n),R!==null&&(k.data=R)))),(R=UE?FE(t,n):jE(t,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(c=new xf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}og(d,e)})}function Is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gs(t,n),s!=null&&r.unshift(Is(t,s,i)),s=gs(t,e),s!=null&&r.push(Is(t,s,i))),t=t.return}return r}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=gs(n,s),a!=null&&o.unshift(Is(n,a,l))):i||(a=gs(n,s),a!=null&&o.push(Is(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZE=/\r\n?/g,eS=/\u0000|\uFFFD/g;function Bf(t){return(typeof t=="string"?t:""+t).replace(ZE,`
`).replace(eS,"")}function To(t,e,n){if(e=Bf(e),Bf(t)!==e&&n)throw Error(E(425))}function cl(){}var nc=null,rc=null;function ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sc=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(t){return Vf.resolve(null).then(t).catch(rS)}:sc;function rS(t){setTimeout(function(){throw t})}function iu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Ci,Ts="__reactProps$"+Ci,Kt="__reactContainer$"+Ci,oc="__reactEvents$"+Ci,iS="__reactListeners$"+Ci,sS="__reactHandles$"+Ci;function Jn(t){var e=t[Nt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kt]||n[Nt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hf(t);t!==null;){if(n=t[Nt])return n;t=Hf(t)}return e}t=n,n=t.parentNode}return null}function Ys(t){return t=t[Nt]||t[Kt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function oa(t){return t[Ts]||null}var lc=[],Lr=-1;function Wn(t){return{current:t}}function Q(t){0>Lr||(t.current=lc[Lr],lc[Lr]=null,Lr--)}function K(t,e){Lr++,lc[Lr]=t.current,t.current=e}var An={},Ne=Wn(An),ze=Wn(!1),lr=An;function ni(t,e){var n=t.type.contextTypes;if(!n)return An;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function dl(){Q(ze),Q(Ne)}function Gf(t,e,n){if(Ne.current!==An)throw Error(E(168));K(Ne,e),K(ze,n)}function ag(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,B0(t)||"Unknown",i));return ne({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||An,lr=Ne.current,K(Ne,t),K(ze,ze.current),!0}function Kf(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=ag(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,Q(ze),Q(Ne),K(Ne,t)):Q(ze),K(ze,n)}var Ft=null,la=!1,su=!1;function ug(t){Ft===null?Ft=[t]:Ft.push(t)}function oS(t){la=!0,ug(t)}function Bn(){if(!su&&Ft!==null){su=!0;var t=0,e=$;try{var n=Ft;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,la=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),b_(vd,Bn),i}finally{$=e,su=!1}}return null}var Mr=[],Ur=0,fl=null,pl=0,nt=[],rt=0,ar=null,jt=1,zt="";function Kn(t,e){Mr[Ur++]=pl,Mr[Ur++]=fl,fl=t,pl=e}function cg(t,e,n){nt[rt++]=jt,nt[rt++]=zt,nt[rt++]=ar,ar=t;var r=jt;t=zt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-yt(e)+i|n<<i|r,zt=s+t}else jt=1<<s|n<<i|r,zt=t}function Nd(t){t.return!==null&&(Kn(t,1),cg(t,1,0))}function Pd(t){for(;t===fl;)fl=Mr[--Ur],Mr[Ur]=null,pl=Mr[--Ur],Mr[Ur]=null;for(;t===ar;)ar=nt[--rt],nt[rt]=null,zt=nt[--rt],nt[rt]=null,jt=nt[--rt],nt[rt]=null}var Ye=null,Ke=null,X=!1,pt=null;function dg(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,Ke=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:jt,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,Ke=null,!0):!1;default:return!1}}function ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uc(t){if(X){var e=Ke;if(e){var n=e;if(!qf(t,e)){if(ac(t))throw Error(E(418));e=Sn(n.nextSibling);var r=Ye;e&&qf(t,e)?dg(r,n):(t.flags=t.flags&-4097|2,X=!1,Ye=t)}}else{if(ac(t))throw Error(E(418));t.flags=t.flags&-4097|2,X=!1,Ye=t}}}function Qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function ko(t){if(t!==Ye)return!1;if(!X)return Qf(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ic(t.type,t.memoizedProps)),e&&(e=Ke)){if(ac(t))throw hg(),Error(E(418));for(;e;)dg(t,e),e=Sn(e.nextSibling)}if(Qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ke=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=Ye?Sn(t.stateNode.nextSibling):null;return!0}function hg(){for(var t=Ke;t;)t=Sn(t.nextSibling)}function ri(){Ke=Ye=null,X=!1}function xd(t){pt===null?pt=[t]:pt.push(t)}var lS=en.ReactCurrentBatchConfig;function ht(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ml=Wn(null),_l=null,Fr=null,Od=null;function Ad(){Od=Fr=_l=null}function Dd(t){var e=ml.current;Q(ml),t._currentValue=e}function cc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qr(t,e){_l=t,Od=Fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(Od!==t)if(t={context:t,memoizedValue:e,next:null},Fr===null){if(_l===null)throw Error(E(308));Fr=t,_l.dependencies={lanes:0,firstContext:t}}else Fr=Fr.next=t;return e}var Zn=null;function bd(t){Zn===null?Zn=[t]:Zn.push(t)}function fg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,qt(t,r)}function qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var an=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qt(t,n)}return i=r.interleaved,i===null?(e.next=e,bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,qt(t,n)}function Ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wd(t,n)}}function Yf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,r){var i=t.updateQueue;an=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,v=l;switch(h=e,_=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(_,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(_,d,h):g,h==null)break e;d=ne({},d,h);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=d}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var mg=new f_.Component().refs;function dc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var aa={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=Tn(t),s=Vt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(vt(e,t,i,r),Ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=Tn(t),s=Vt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(vt(e,t,i,r),Ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=Tn(t),i=Vt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(vt(e,t,r,n),Ho(e,t,r))}};function Jf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ss(n,r)||!Ss(i,s):!0}function _g(t,e,n){var r=!1,i=An,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=$e(e)?lr:Ne.current,r=e.contextTypes,s=(r=r!=null)?ni(t,i):An),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=aa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&aa.enqueueReplaceState(e,e.state,null)}function hc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mg,Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=$e(e)?lr:Ne.current,i.context=ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&aa.enqueueReplaceState(i,i.state,null),gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===mg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ro(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function gg(t){function e(m,f){if(t){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=kn(m,f),m.index=0,m.sibling=null,m}function s(m,f,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=2,f):p):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,p,y){return f===null||f.tag!==6?(f=hu(p,m.mode,y),f.return=m,f):(f=i(f,p),f.return=m,f)}function a(m,f,p,y){var C=p.type;return C===xr?c(m,f,p.props.children,y,p.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ln&&ep(C)===f.type)?(y=i(f,p.props),y.ref=Fi(m,f,p),y.return=m,y):(y=Xo(p.type,p.key,p.props,null,m.mode,y),y.ref=Fi(m,f,p),y.return=m,y)}function u(m,f,p,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=fu(p,m.mode,y),f.return=m,f):(f=i(f,p.children||[]),f.return=m,f)}function c(m,f,p,y,C){return f===null||f.tag!==7?(f=rr(p,m.mode,y,C),f.return=m,f):(f=i(f,p),f.return=m,f)}function d(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=hu(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:return p=Xo(f.type,f.key,f.props,null,m.mode,p),p.ref=Fi(m,null,f),p.return=m,p;case Pr:return f=fu(f,m.mode,p),f.return=m,f;case ln:var y=f._init;return d(m,y(f._payload),p)}if(qi(f)||Di(f))return f=rr(f,m.mode,p,null),f.return=m,f;Ro(m,f)}return null}function h(m,f,p,y){var C=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:l(m,f,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _o:return p.key===C?a(m,f,p,y):null;case Pr:return p.key===C?u(m,f,p,y):null;case ln:return C=p._init,h(m,f,C(p._payload),y)}if(qi(p)||Di(p))return C!==null?null:c(m,f,p,y,null);Ro(m,p)}return null}function _(m,f,p,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(p)||null,l(f,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _o:return m=m.get(y.key===null?p:y.key)||null,a(f,m,y,C);case Pr:return m=m.get(y.key===null?p:y.key)||null,u(f,m,y,C);case ln:var T=y._init;return _(m,f,p,T(y._payload),C)}if(qi(y)||Di(y))return m=m.get(p)||null,c(f,m,y,C,null);Ro(f,y)}return null}function g(m,f,p,y){for(var C=null,T=null,R=f,k=f=0,B=null;R!==null&&k<p.length;k++){R.index>k?(B=R,R=null):B=R.sibling;var D=h(m,R,p[k],y);if(D===null){R===null&&(R=B);break}t&&R&&D.alternate===null&&e(m,R),f=s(D,f,k),T===null?C=D:T.sibling=D,T=D,R=B}if(k===p.length)return n(m,R),X&&Kn(m,k),C;if(R===null){for(;k<p.length;k++)R=d(m,p[k],y),R!==null&&(f=s(R,f,k),T===null?C=R:T.sibling=R,T=R);return X&&Kn(m,k),C}for(R=r(m,R);k<p.length;k++)B=_(R,m,k,p[k],y),B!==null&&(t&&B.alternate!==null&&R.delete(B.key===null?k:B.key),f=s(B,f,k),T===null?C=B:T.sibling=B,T=B);return t&&R.forEach(function(Ve){return e(m,Ve)}),X&&Kn(m,k),C}function v(m,f,p,y){var C=Di(p);if(typeof C!="function")throw Error(E(150));if(p=C.call(p),p==null)throw Error(E(151));for(var T=C=null,R=f,k=f=0,B=null,D=p.next();R!==null&&!D.done;k++,D=p.next()){R.index>k?(B=R,R=null):B=R.sibling;var Ve=h(m,R,D.value,y);if(Ve===null){R===null&&(R=B);break}t&&R&&Ve.alternate===null&&e(m,R),f=s(Ve,f,k),T===null?C=Ve:T.sibling=Ve,T=Ve,R=B}if(D.done)return n(m,R),X&&Kn(m,k),C;if(R===null){for(;!D.done;k++,D=p.next())D=d(m,D.value,y),D!==null&&(f=s(D,f,k),T===null?C=D:T.sibling=D,T=D);return X&&Kn(m,k),C}for(R=r(m,R);!D.done;k++,D=p.next())D=_(R,m,k,D.value,y),D!==null&&(t&&D.alternate!==null&&R.delete(D.key===null?k:D.key),f=s(D,f,k),T===null?C=D:T.sibling=D,T=D);return t&&R.forEach(function(Oi){return e(m,Oi)}),X&&Kn(m,k),C}function S(m,f,p,y){if(typeof p=="object"&&p!==null&&p.type===xr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case _o:e:{for(var C=p.key,T=f;T!==null;){if(T.key===C){if(C=p.type,C===xr){if(T.tag===7){n(m,T.sibling),f=i(T,p.props.children),f.return=m,m=f;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ln&&ep(C)===T.type){n(m,T.sibling),f=i(T,p.props),f.ref=Fi(m,T,p),f.return=m,m=f;break e}n(m,T);break}else e(m,T);T=T.sibling}p.type===xr?(f=rr(p.props.children,m.mode,y,p.key),f.return=m,m=f):(y=Xo(p.type,p.key,p.props,null,m.mode,y),y.ref=Fi(m,f,p),y.return=m,m=y)}return o(m);case Pr:e:{for(T=p.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=i(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=fu(p,m.mode,y),f.return=m,m=f}return o(m);case ln:return T=p._init,S(m,f,T(p._payload),y)}if(qi(p))return g(m,f,p,y);if(Di(p))return v(m,f,p,y);Ro(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,p),f.return=m,m=f):(n(m,f),f=hu(p,m.mode,y),f.return=m,m=f),o(m)):n(m,f)}return S}var ii=gg(!0),yg=gg(!1),Xs={},At=Wn(Xs),ks=Wn(Xs),Rs=Wn(Xs);function er(t){if(t===Xs)throw Error(E(174));return t}function Md(t,e){switch(K(Rs,e),K(ks,t),K(At,Xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}Q(At),K(At,e)}function si(){Q(At),Q(ks),Q(Rs)}function vg(t){er(Rs.current);var e=er(At.current),n=Vu(e,t.type);e!==n&&(K(ks,t),K(At,n))}function Ud(t){ks.current===t&&(Q(At),Q(ks))}var J=Wn(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function Fd(){for(var t=0;t<ou.length;t++)ou[t]._workInProgressVersionPrimary=null;ou.length=0}var Go=en.ReactCurrentDispatcher,lu=en.ReactCurrentBatchConfig,ur=0,te=null,ce=null,_e=null,vl=!1,ss=!1,Ns=0,aS=0;function Te(){throw Error(E(321))}function jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function zd(t,e,n,r,i,s){if(ur=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Go.current=t===null||t.memoizedState===null?hS:fS,t=n(r,i),ss){s=0;do{if(ss=!1,Ns=0,25<=s)throw Error(E(301));s+=1,_e=ce=null,e.updateQueue=null,Go.current=pS,t=n(r,i)}while(ss)}if(Go.current=wl,e=ce!==null&&ce.next!==null,ur=0,_e=ce=te=null,vl=!1,e)throw Error(E(300));return t}function $d(){var t=Ns!==0;return Ns=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?te.memoizedState=_e=t:_e=_e.next=t,_e}function ut(){if(ce===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=_e===null?te.memoizedState:_e.next;if(e!==null)_e=e,ce=t;else{if(t===null)throw Error(E(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},_e===null?te.memoizedState=_e=t:_e=_e.next=t}return _e}function Ps(t,e){return typeof e=="function"?e(t):e}function au(t){var e=ut(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((ur&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,te.lanes|=c,cr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ct(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,cr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uu(t){var e=ut(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wg(){}function Eg(t,e){var n=te,r=ut(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Wd(Ig.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,xs(9,Cg.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(E(349));ur&30||Sg(n,e,i)}return i}function Sg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cg(t,e,n,r){e.value=n,e.getSnapshot=r,Tg(e)&&kg(t)}function Ig(t,e,n){return n(function(){Tg(e)&&kg(t)})}function Tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function kg(t){var e=qt(t,1);e!==null&&vt(e,t,1,-1)}function tp(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},e.queue=t,t=t.dispatch=dS.bind(null,te,t),[e.memoizedState,t]}function xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Rg(){return ut().memoizedState}function Ko(t,e,n,r){var i=Rt();te.flags|=t,i.memoizedState=xs(1|e,n,void 0,r===void 0?null:r)}function ua(t,e,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&jd(r,o.deps)){i.memoizedState=xs(e,n,s,r);return}}te.flags|=t,i.memoizedState=xs(1|e,n,s,r)}function np(t,e){return Ko(8390656,8,t,e)}function Wd(t,e){return ua(2048,8,t,e)}function Ng(t,e){return ua(4,2,t,e)}function Pg(t,e){return ua(4,4,t,e)}function xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Og(t,e,n){return n=n!=null?n.concat([t]):null,ua(4,4,xg.bind(null,e,t),n)}function Bd(){}function Ag(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bg(t,e,n){return ur&21?(Ct(n,e)||(n=U_(),te.lanes|=n,cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function uS(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=lu.transition;lu.transition={};try{t(!1),e()}finally{$=n,lu.transition=r}}function Lg(){return ut().memoizedState}function cS(t,e,n){var r=Tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mg(t))Ug(e,n);else if(n=fg(t,e,n,r),n!==null){var i=De();vt(n,t,r,i),Fg(n,e,r)}}function dS(t,e,n){var r=Tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mg(t))Ug(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var a=e.interleaved;a===null?(i.next=i,bd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=fg(t,e,i,r),n!==null&&(i=De(),vt(n,t,r,i),Fg(n,e,r))}}function Mg(t){var e=t.alternate;return t===te||e!==null&&e===te}function Ug(t,e){ss=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wd(t,n)}}var wl={readContext:at,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},hS={readContext:at,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cS.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:tp,useDebugValue:Bd,useDeferredValue:function(t){return Rt().memoizedState=t},useTransition:function(){var t=tp(!1),e=t[0];return t=uS.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=Rt();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ve===null)throw Error(E(349));ur&30||Sg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,np(Ig.bind(null,r,s,t),[t]),r.flags|=2048,xs(9,Cg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=ve.identifierPrefix;if(X){var n=zt,r=jt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fS={readContext:at,useCallback:Ag,useContext:at,useEffect:Wd,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Pg,useMemo:Dg,useReducer:au,useRef:Rg,useState:function(){return au(Ps)},useDebugValue:Bd,useDeferredValue:function(t){var e=ut();return bg(e,ce.memoizedState,t)},useTransition:function(){var t=au(Ps)[0],e=ut().memoizedState;return[t,e]},useMutableSource:wg,useSyncExternalStore:Eg,useId:Lg,unstable_isNewReconciler:!1},pS={readContext:at,useCallback:Ag,useContext:at,useEffect:Wd,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Pg,useMemo:Dg,useReducer:uu,useRef:Rg,useState:function(){return uu(Ps)},useDebugValue:Bd,useDeferredValue:function(t){var e=ut();return ce===null?e.memoizedState=t:bg(e,ce.memoizedState,t)},useTransition:function(){var t=uu(Ps)[0],e=ut().memoizedState;return[t,e]},useMutableSource:wg,useSyncExternalStore:Eg,useId:Lg,unstable_isNewReconciler:!1};function oi(t,e){try{var n="",r=e;do n+=W0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mS=typeof WeakMap=="function"?WeakMap:Map;function jg(t,e,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sl||(Sl=!0,Cc=r),fc(t,e)},n}function zg(t,e,n){n=Vt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fc(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=PS.bind(null,t,e,n),e.then(t,t))}function ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var _S=en.ReactCurrentOwner,Fe=!1;function Oe(t,e,n,r){e.child=t===null?yg(e,null,n,r):ii(e,t.child,n,r)}function op(t,e,n,r,i){n=n.render;var s=e.ref;return qr(e,i),r=zd(t,e,n,r,s,i),n=$d(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(X&&n&&Nd(e),e.flags|=1,Oe(t,e,r,i),e.child)}function lp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$g(t,e,s,r,i)):(t=Xo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ss,n(o,r)&&t.ref===e.ref)return Qt(t,e,i)}return e.flags|=1,t=kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function $g(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ss(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Qt(t,e,i)}return pc(t,e,n,r,i)}function Wg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(zr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(zr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(zr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(zr,Ge),Ge|=r;return Oe(t,e,i,n),e.child}function Bg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pc(t,e,n,r,i){var s=$e(n)?lr:Ne.current;return s=ni(e,s),qr(e,i),n=zd(t,e,n,r,s,i),r=$d(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(X&&r&&Nd(e),e.flags|=1,Oe(t,e,n,i),e.child)}function ap(t,e,n,r,i){if($e(n)){var s=!0;hl(e)}else s=!1;if(qr(e,i),e.stateNode===null)qo(t,e),_g(e,n,r),hc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=$e(n)?lr:Ne.current,u=ni(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Zf(e,o,r,u),an=!1;var h=e.memoizedState;o.state=h,gl(e,r,o,i),a=e.memoizedState,l!==r||h!==a||ze.current||an?(typeof c=="function"&&(dc(e,n,c,r),a=e.memoizedState),(l=an||Jf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ht(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=at(a):(a=$e(n)?lr:Ne.current,a=ni(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Zf(e,o,r,a),an=!1,h=e.memoizedState,o.state=h,gl(e,r,o,i);var g=e.memoizedState;l!==d||h!==g||ze.current||an?(typeof _=="function"&&(dc(e,n,_,r),g=e.memoizedState),(u=an||Jf(e,n,u,r,h,g,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return mc(t,e,n,r,s,i)}function mc(t,e,n,r,i,s){Bg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kf(e,n,!1),Qt(t,e,s);r=e.stateNode,_S.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ii(e,t.child,null,s),e.child=ii(e,null,l,s)):Oe(t,e,l,s),e.memoizedState=r.state,i&&Kf(e,n,!0),e.child}function Vg(t){var e=t.stateNode;e.pendingContext?Gf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gf(t,e.context,!1),Md(t,e.containerInfo)}function up(t,e,n,r,i){return ri(),xd(i),e.flags|=256,Oe(t,e,n,r),e.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hg(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(J,i&1),t===null)return uc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ha(o,r,0,null),t=rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gc(n),e.memoizedState=_c,t):Vd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=kn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=kn(l,s):(s=rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_c,r}return s=t.child,t=s.sibling,r=kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vd(t,e){return e=ha({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function No(t,e,n,r){return r!==null&&xd(r),ii(e,t.child,null,n),t=Vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cu(Error(E(422))),No(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ha({mode:"visible",children:r.children},i,0,null),s=rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ii(e,t.child,null,o),e.child.memoizedState=gc(o),e.memoizedState=_c,s);if(!(e.mode&1))return No(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=cu(s,r,void 0),No(t,e,o,r)}if(l=(o&t.childLanes)!==0,Fe||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qt(t,i),vt(r,t,i,-1))}return Yd(),r=cu(Error(E(421))),No(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ke=Sn(i.nextSibling),Ye=e,X=!0,pt=null,t!==null&&(nt[rt++]=jt,nt[rt++]=zt,nt[rt++]=ar,jt=t.id,zt=t.overflow,ar=e),e=Vd(e,r.children),e.flags|=4096,e)}function cp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cc(t.return,e,n)}function du(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cp(t,n,e);else if(t.tag===19)cp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),du(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}du(e,!0,n,null,s);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yS(t,e,n){switch(e.tag){case 3:Vg(e),ri();break;case 5:vg(e);break;case 1:$e(e.type)&&hl(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?Hg(t,e,n):(K(J,J.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,Wg(t,e,n)}return Qt(t,e,n)}var Kg,yc,qg,Qg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yc=function(){};qg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,er(At.current);var s=null;switch(n){case"input":i=zu(t,i),r=zu(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=Bu(t,i),r=Bu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cl)}Hu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ms.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ms.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ji(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vS(t,e,n){var r=e.pendingProps;switch(Pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return $e(e.type)&&dl(),ke(e),null;case 3:return r=e.stateNode,si(),Q(ze),Q(Ne),Fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(kc(pt),pt=null))),yc(t,e),ke(e),null;case 5:Ud(e);var i=er(Rs.current);if(n=e.type,t!==null&&e.stateNode!=null)qg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return ke(e),null}if(t=er(At.current),ko(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nt]=e,r[Ts]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Yi.length;i++)q(Yi[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":vf(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Ef(r,s),q("invalid",r)}Hu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&To(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&To(r.textContent,l,t),i=["children",""+l]):ms.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":go(r),wf(r,s,!0);break;case"textarea":go(r),Sf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nt]=e,t[Ts]=r,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gu(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yi.length;i++)q(Yi[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":vf(t,r),i=zu(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),q("invalid",t);break;case"textarea":Ef(t,r),i=Bu(t,r),q("invalid",t);break;default:i=r}Hu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?T_(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&C_(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&_s(t,a):typeof a=="number"&&_s(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ms.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&pd(t,s,a,o))}switch(n){case"input":go(t),wf(t,r,!1);break;case"textarea":go(t),Sf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+On(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ke(e),null;case 6:if(t&&e.stateNode!=null)Qg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=er(Rs.current),er(At.current),ko(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nt]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(t.tag){case 3:To(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=e,e.stateNode=r}return ke(e),null;case 13:if(Q(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Ke!==null&&e.mode&1&&!(e.flags&128))hg(),ri(),e.flags|=98560,s=!1;else if(s=ko(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Nt]=e}else ri(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),s=!1}else pt!==null&&(kc(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?fe===0&&(fe=3):Yd())),e.updateQueue!==null&&(e.flags|=4),ke(e),null);case 4:return si(),yc(t,e),t===null&&Cs(e.stateNode.containerInfo),ke(e),null;case 10:return Dd(e.type._context),ke(e),null;case 17:return $e(e.type)&&dl(),ke(e),null;case 19:if(Q(J),s=e.memoizedState,s===null)return ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ji(s,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,ji(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&ae()>li&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return ke(e),null}else 2*ae()-s.renderingStartTime>li&&n!==1073741824&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ae(),e.sibling=null,n=J.current,K(J,r?n&1|2:n&1),e):(ke(e),null);case 22:case 23:return Qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function wS(t,e){switch(Pd(e),e.tag){case 1:return $e(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return si(),Q(ze),Q(Ne),Fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(Q(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));ri()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(J),null;case 4:return si(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Po=!1,Re=!1,ES=typeof WeakSet=="function"?WeakSet:Set,N=null;function jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function vc(t,e,n){try{n()}catch(r){re(t,e,r)}}var dp=!1;function SS(t,e){if(nc=ll,t=Z_(),Rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(rc={focusedElem:t,selectionRange:n},ll=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:ht(e.type,v),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){re(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=dp,dp=!1,g}function os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vc(e,n,s)}i=i.next}while(i!==r)}}function ca(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yg(t){var e=t.alternate;e!==null&&(t.alternate=null,Yg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nt],delete e[Ts],delete e[oc],delete e[iS],delete e[sS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xg(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ec(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(r!==4&&(t=t.child,t!==null))for(Ec(t,e,n),t=t.sibling;t!==null;)Ec(t,e,n),t=t.sibling}function Sc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sc(t,e,n),t=t.sibling;t!==null;)Sc(t,e,n),t=t.sibling}var Se=null,ft=!1;function rn(t,e,n){for(n=n.child;n!==null;)Jg(t,e,n),n=n.sibling}function Jg(t,e,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:Re||jr(n,e);case 6:var r=Se,i=ft;Se=null,rn(t,e,n),Se=r,ft=i,Se!==null&&(ft?(t=Se,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ft?(t=Se,n=n.stateNode,t.nodeType===8?iu(t.parentNode,n):t.nodeType===1&&iu(t,n),ws(t)):iu(Se,n.stateNode));break;case 4:r=Se,i=ft,Se=n.stateNode.containerInfo,ft=!0,rn(t,e,n),Se=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vc(n,e,o),i=i.next}while(i!==r)}rn(t,e,n);break;case 1:if(!Re&&(jr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}rn(t,e,n);break;case 21:rn(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,rn(t,e,n),Re=r):rn(t,e,n);break;default:rn(t,e,n)}}function fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ES),e.forEach(function(r){var i=OS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,ft=!1;break e;case 3:Se=l.stateNode.containerInfo,ft=!0;break e;case 4:Se=l.stateNode.containerInfo,ft=!0;break e}l=l.return}if(Se===null)throw Error(E(160));Jg(s,o,i),Se=null,ft=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zg(e,t),e=e.sibling}function Zg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),Tt(t),r&4){try{os(3,t,t.return),ca(3,t)}catch(v){re(t,t.return,v)}try{os(5,t,t.return)}catch(v){re(t,t.return,v)}}break;case 1:dt(e,t),Tt(t),r&512&&n!==null&&jr(n,n.return);break;case 5:if(dt(e,t),Tt(t),r&512&&n!==null&&jr(n,n.return),t.flags&32){var i=t.stateNode;try{_s(i,"")}catch(v){re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&w_(i,s),Gu(l,o);var u=Gu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?T_(i,d):c==="dangerouslySetInnerHTML"?C_(i,d):c==="children"?_s(i,d):pd(i,c,d,u)}switch(l){case"input":$u(i,s);break;case"textarea":E_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Vr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vr(i,!!s.multiple,s.defaultValue,!0):Vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ts]=s}catch(v){re(t,t.return,v)}}break;case 6:if(dt(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){re(t,t.return,v)}}break;case 3:if(dt(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(v){re(t,t.return,v)}break;case 4:dt(e,t),Tt(t);break;case 13:dt(e,t),Tt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kd=ae())),r&4&&fp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(u=Re)||c,dt(e,t),Re=u):dt(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(d=N=c;N!==null;){switch(h=N,_=h.child,h.tag){case 0:case 11:case 14:case 15:os(4,h,h.return);break;case 1:jr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){re(r,n,v)}}break;case 5:jr(h,h.return);break;case 22:if(h.memoizedState!==null){mp(d);continue}}_!==null?(_.return=h,N=_):mp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=I_("display",o))}catch(v){re(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){re(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dt(e,t),Tt(t),r&4&&fp(t);break;case 21:break;default:dt(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_s(i,""),r.flags&=-33);var s=hp(t);Sc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hp(t);Ec(t,l,o);break;default:throw Error(E(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CS(t,e,n){N=t,ey(t)}function ey(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Po;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Re;l=Po;var u=Re;if(Po=o,(Re=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?_p(i):a!==null?(a.return=o,N=a):_p(i);for(;s!==null;)N=s,ey(s),s=s.sibling;N=i,Po=l,Re=u}pp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):pp(t)}}function pp(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||ca(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ws(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Re||e.flags&512&&wc(e)}catch(h){re(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function mp(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function _p(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ca(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{wc(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{wc(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var IS=Math.ceil,El=en.ReactCurrentDispatcher,Hd=en.ReactCurrentOwner,ot=en.ReactCurrentBatchConfig,j=0,ve=null,ue=null,Ce=0,Ge=0,zr=Wn(0),fe=0,Os=null,cr=0,da=0,Gd=0,ls=null,Ue=null,Kd=0,li=1/0,Ut=null,Sl=!1,Cc=null,In=null,xo=!1,gn=null,Cl=0,as=0,Ic=null,Qo=-1,Yo=0;function De(){return j&6?ae():Qo!==-1?Qo:Qo=ae()}function Tn(t){return t.mode&1?j&2&&Ce!==0?Ce&-Ce:lS.transition!==null?(Yo===0&&(Yo=U_()),Yo):(t=$,t!==0||(t=window.event,t=t===void 0?16:V_(t.type)),t):1}function vt(t,e,n,r){if(50<as)throw as=0,Ic=null,Error(E(185));qs(t,n,r),(!(j&2)||t!==ve)&&(t===ve&&(!(j&2)&&(da|=n),fe===4&&cn(t,Ce)),We(t,r),n===1&&j===0&&!(e.mode&1)&&(li=ae()+500,la&&Bn()))}function We(t,e){var n=t.callbackNode;lE(t,e);var r=ol(t,t===ve?Ce:0);if(r===0)n!==null&&Tf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Tf(n),e===1)t.tag===0?oS(gp.bind(null,t)):ug(gp.bind(null,t)),nS(function(){!(j&6)&&Bn()}),n=null;else{switch(F_(r)){case 1:n=vd;break;case 4:n=L_;break;case 16:n=sl;break;case 536870912:n=M_;break;default:n=sl}n=ay(n,ty.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ty(t,e){if(Qo=-1,Yo=0,j&6)throw Error(E(327));var n=t.callbackNode;if(Qr()&&t.callbackNode!==n)return null;var r=ol(t,t===ve?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Il(t,r);else{e=r;var i=j;j|=2;var s=ry();(ve!==t||Ce!==e)&&(Ut=null,li=ae()+500,nr(t,e));do try{RS();break}catch(l){ny(t,l)}while(!0);Ad(),El.current=s,j=i,ue!==null?e=0:(ve=null,Ce=0,e=fe)}if(e!==0){if(e===2&&(i=Xu(t),i!==0&&(r=i,e=Tc(t,i))),e===1)throw n=Os,nr(t,0),cn(t,r),We(t,ae()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!TS(i)&&(e=Il(t,r),e===2&&(s=Xu(t),s!==0&&(r=s,e=Tc(t,s))),e===1))throw n=Os,nr(t,0),cn(t,r),We(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:qn(t,Ue,Ut);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=Kd+500-ae(),10<e)){if(ol(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sc(qn.bind(null,t,Ue,Ut),e);break}qn(t,Ue,Ut);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IS(r/1960))-r,10<r){t.timeoutHandle=sc(qn.bind(null,t,Ue,Ut),r);break}qn(t,Ue,Ut);break;case 5:qn(t,Ue,Ut);break;default:throw Error(E(329))}}}return We(t,ae()),t.callbackNode===n?ty.bind(null,t):null}function Tc(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(nr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=Ue,Ue=n,e!==null&&kc(e)),t}function kc(t){Ue===null?Ue=t:Ue.push.apply(Ue,t)}function TS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~Gd,e&=~da,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function gp(t){if(j&6)throw Error(E(327));Qr();var e=ol(t,0);if(!(e&1))return We(t,ae()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var r=Xu(t);r!==0&&(e=r,n=Tc(t,r))}if(n===1)throw n=Os,nr(t,0),cn(t,e),We(t,ae()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qn(t,Ue,Ut),We(t,ae()),null}function qd(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(li=ae()+500,la&&Bn())}}function dr(t){gn!==null&&gn.tag===0&&!(j&6)&&Qr();var e=j;j|=1;var n=ot.transition,r=$;try{if(ot.transition=null,$=1,t)return t()}finally{$=r,ot.transition=n,j=e,!(j&6)&&Bn()}}function Qd(){Ge=zr.current,Q(zr)}function nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tS(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:si(),Q(ze),Q(Ne),Fd();break;case 5:Ud(r);break;case 4:si();break;case 13:Q(J);break;case 19:Q(J);break;case 10:Dd(r.type._context);break;case 22:case 23:Qd()}n=n.return}if(ve=t,ue=t=kn(t.current,null),Ce=Ge=e,fe=0,Os=null,Gd=da=cr=0,Ue=ls=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zn=null}return t}function ny(t,e){do{var n=ue;try{if(Ad(),Go.current=wl,vl){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vl=!1}if(ur=0,_e=ce=te=null,ss=!1,Ns=0,Hd.current=null,n===null||n.return===null){fe=1,Os=e,ue=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=ip(o);if(_!==null){_.flags&=-257,sp(_,o,l,s,e),_.mode&1&&rp(s,u,e),e=_,a=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(a),e.updateQueue=v}else g.add(a);break e}else{if(!(e&1)){rp(s,u,e),Yd();break e}a=Error(E(426))}}else if(X&&l.mode&1){var S=ip(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),sp(S,o,l,s,e),xd(oi(a,l));break e}}s=a=oi(a,l),fe!==4&&(fe=2),ls===null?ls=[s]:ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=jg(s,a,e);Yf(s,m);break e;case 1:l=a;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(In===null||!In.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=zg(s,l,e);Yf(s,y);break e}}s=s.return}while(s!==null)}sy(n)}catch(C){e=C,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function ry(){var t=El.current;return El.current=wl,t===null?wl:t}function Yd(){(fe===0||fe===3||fe===2)&&(fe=4),ve===null||!(cr&268435455)&&!(da&268435455)||cn(ve,Ce)}function Il(t,e){var n=j;j|=2;var r=ry();(ve!==t||Ce!==e)&&(Ut=null,nr(t,e));do try{kS();break}catch(i){ny(t,i)}while(!0);if(Ad(),j=n,El.current=r,ue!==null)throw Error(E(261));return ve=null,Ce=0,fe}function kS(){for(;ue!==null;)iy(ue)}function RS(){for(;ue!==null&&!J0();)iy(ue)}function iy(t){var e=ly(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?sy(t):ue=e,Hd.current=null}function sy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wS(n,e),n!==null){n.flags&=32767,ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,ue=null;return}}else if(n=vS(n,e,Ge),n!==null){ue=n;return}if(e=e.sibling,e!==null){ue=e;return}ue=e=t}while(e!==null);fe===0&&(fe=5)}function qn(t,e,n){var r=$,i=ot.transition;try{ot.transition=null,$=1,NS(t,e,n,r)}finally{ot.transition=i,$=r}return null}function NS(t,e,n,r){do Qr();while(gn!==null);if(j&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aE(t,s),t===ve&&(ue=ve=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,ay(sl,function(){return Qr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=$;$=1;var l=j;j|=4,Hd.current=null,SS(t,n),Zg(n,t),qE(rc),ll=!!nc,rc=nc=null,t.current=n,CS(n),Z0(),j=l,$=o,ot.transition=s}else t.current=n;if(xo&&(xo=!1,gn=t,Cl=i),s=t.pendingLanes,s===0&&(In=null),nE(n.stateNode),We(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,t=Cc,Cc=null,t;return Cl&1&&t.tag!==0&&Qr(),s=t.pendingLanes,s&1?t===Ic?as++:(as=0,Ic=t):as=0,Bn(),null}function Qr(){if(gn!==null){var t=F_(Cl),e=ot.transition,n=$;try{if(ot.transition=null,$=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,Cl=0,j&6)throw Error(E(331));var i=j;for(j|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:os(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var h=c.sibling,_=c.return;if(Yg(c),c===u){N=null;break}if(h!==null){h.return=_,N=h;break}N=_}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:os(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,N=p;else e:for(o=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ca(9,l)}}catch(C){re(l,l.return,C)}if(l===o){N=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,N=y;break e}N=l.return}}if(j=i,Bn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(na,t)}catch{}r=!0}return r}finally{$=n,ot.transition=e}}return!1}function yp(t,e,n){e=oi(n,e),e=jg(t,e,1),t=Cn(t,e,1),e=De(),t!==null&&(qs(t,1,e),We(t,e))}function re(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=oi(n,t),t=zg(e,t,1),e=Cn(e,t,1),t=De(),e!==null&&(qs(e,1,t),We(e,t));break}}e=e.return}}function PS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(Ce&n)===n&&(fe===4||fe===3&&(Ce&130023424)===Ce&&500>ae()-Kd?nr(t,0):Gd|=n),We(t,e)}function oy(t,e){e===0&&(t.mode&1?(e=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):e=1);var n=De();t=qt(t,e),t!==null&&(qs(t,e,n),We(t,n))}function xS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),oy(t,n)}function OS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),oy(t,n)}var ly;ly=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,yS(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,X&&e.flags&1048576&&cg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qo(t,e),t=e.pendingProps;var i=ni(e,Ne.current);qr(e,n),i=zd(null,e,r,t,i,n);var s=$d();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ld(e),i.updater=aa,e.stateNode=i,i._reactInternals=e,hc(e,r,t,n),e=mc(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Nd(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DS(r),t=ht(r,t),i){case 0:e=pc(null,e,r,t,n);break e;case 1:e=ap(null,e,r,t,n);break e;case 11:e=op(null,e,r,t,n);break e;case 14:e=lp(null,e,r,ht(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),pc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),ap(t,e,r,i,n);case 3:e:{if(Vg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pg(t,e),gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oi(Error(E(423)),e),e=up(t,e,r,n,i);break e}else if(r!==i){i=oi(Error(E(424)),e),e=up(t,e,r,n,i);break e}else for(Ke=Sn(e.stateNode.containerInfo.firstChild),Ye=e,X=!0,pt=null,n=yg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ri(),r===i){e=Qt(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return vg(e),t===null&&uc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ic(r,i)?o=null:s!==null&&ic(r,s)&&(e.flags|=32),Bg(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&uc(e),null;case 13:return Hg(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ii(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),op(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(ml,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!ze.current){e=Qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Vt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qr(e,n),i=at(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=ht(r,e.pendingProps),i=ht(r.type,i),lp(t,e,r,i,n);case 15:return $g(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),qo(t,e),e.tag=1,$e(r)?(t=!0,hl(e)):t=!1,qr(e,n),_g(e,r,i),hc(e,r,i,n),mc(null,e,r,!0,t,n);case 19:return Gg(t,e,n);case 22:return Wg(t,e,n)}throw Error(E(156,e.tag))};function ay(t,e){return b_(t,e)}function AS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new AS(t,e,n,r)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DS(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_d)return 11;if(t===gd)return 14}return 2}function kn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xr:return rr(n.children,i,s,e);case md:o=8,i|=8;break;case Mu:return t=it(12,n,e,i|2),t.elementType=Mu,t.lanes=s,t;case Uu:return t=it(13,n,e,i),t.elementType=Uu,t.lanes=s,t;case Fu:return t=it(19,n,e,i),t.elementType=Fu,t.lanes=s,t;case g_:return ha(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m_:o=10;break e;case __:o=9;break e;case _d:o=11;break e;case gd:o=14;break e;case ln:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function rr(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function ha(t,e,n,r){return t=it(22,t,r,e),t.elementType=g_,t.lanes=n,t.stateNode={isHidden:!1},t}function hu(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function fu(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jd(t,e,n,r,i,s,o,l,a){return t=new bS(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=it(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function LS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uy(t){if(!t)return An;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if($e(n))return ag(t,n,e)}return e}function cy(t,e,n,r,i,s,o,l,a){return t=Jd(n,r,!0,t,i,s,o,l,a),t.context=uy(null),n=t.current,r=De(),i=Tn(n),s=Vt(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,qs(t,i,r),We(t,r),t}function fa(t,e,n,r){var i=e.current,s=De(),o=Tn(i);return n=uy(n),e.context===null?e.context=n:e.pendingContext=n,e=Vt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(vt(t,i,o,s),Ho(t,i,o)),o}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){vp(t,e),(t=t.alternate)&&vp(t,e)}function MS(){return null}var dy=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}pa.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));fa(t,e,null,null)};pa.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){fa(null,t,null,null)}),e[Kt]=null}};function pa(t){this._internalRoot=t}pa.prototype.unstable_scheduleHydration=function(t){if(t){var e=$_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&B_(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ma(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function US(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Tl(o);s.call(u)}}var o=cy(e,r,t,0,null,!1,!1,"",wp);return t._reactRootContainer=o,t[Kt]=o.current,Cs(t.nodeType===8?t.parentNode:t),dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Tl(a);l.call(u)}}var a=Jd(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=a,t[Kt]=a.current,Cs(t.nodeType===8?t.parentNode:t),dr(function(){fa(e,a,n,r)}),a}function _a(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Tl(o);l.call(a)}}fa(e,o,t,i)}else o=US(n,e,t,i,r);return Tl(o)}j_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qi(e.pendingLanes);n!==0&&(wd(e,n|1),We(e,ae()),!(j&6)&&(li=ae()+500,Bn()))}break;case 13:dr(function(){var r=qt(t,1);if(r!==null){var i=De();vt(r,t,1,i)}}),Zd(t,1)}};Ed=function(t){if(t.tag===13){var e=qt(t,134217728);if(e!==null){var n=De();vt(e,t,134217728,n)}Zd(t,134217728)}};z_=function(t){if(t.tag===13){var e=Tn(t),n=qt(t,e);if(n!==null){var r=De();vt(n,t,e,r)}Zd(t,e)}};$_=function(){return $};W_=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};qu=function(t,e,n){switch(e){case"input":if($u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oa(r);if(!i)throw Error(E(90));v_(r),$u(r,i)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&Vr(t,!!n.multiple,e,!1)}};N_=qd;P_=dr;var FS={usingClientEntryPoint:!1,Events:[Ys,br,oa,k_,R_,qd]},zi={findFiberByHostInstance:Jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jS={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A_(t),t===null?null:t.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{na=Oo.inject(jS),Ot=Oo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FS;et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(E(200));return LS(t,e,null,n)};et.createRoot=function(t,e){if(!th(t))throw Error(E(299));var n=!1,r="",i=dy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jd(t,1,!1,null,null,n,!1,r,i),t[Kt]=e.current,Cs(t.nodeType===8?t.parentNode:t),new eh(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=A_(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return dr(t)};et.hydrate=function(t,e,n){if(!ma(e))throw Error(E(200));return _a(null,t,e,!0,n)};et.hydrateRoot=function(t,e,n){if(!th(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cy(e,null,t,1,n??null,i,!1,s,o),t[Kt]=e.current,Cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pa(e)};et.render=function(t,e,n){if(!ma(e))throw Error(E(200));return _a(null,t,e,!1,n)};et.unmountComponentAtNode=function(t){if(!ma(t))throw Error(E(40));return t._reactRootContainer?(dr(function(){_a(null,null,t,!1,function(){t._reactRootContainer=null,t[Kt]=null})}),!0):!1};et.unstable_batchedUpdates=qd;et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ma(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return _a(t,e,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy)}catch(t){console.error(t)}}hy(),c_.exports=et;var zS=c_.exports,Ep=zS;bu.createRoot=Ep.createRoot,bu.hydrateRoot=Ep.hydrateRoot;function Ee(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var $S=typeof Symbol=="function"&&Symbol.observable||"@@observable",Sp=$S,pu=()=>Math.random().toString(36).substring(7).split("").join("."),WS={INIT:`@@redux/INIT${pu()}`,REPLACE:`@@redux/REPLACE${pu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${pu()}`},kl=WS;function nh(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function fy(t,e,n){if(typeof t!="function")throw new Error(Ee(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ee(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ee(1));return n(fy)(t,e)}let r=t,i=e,s=new Map,o=s,l=0,a=!1;function u(){o===s&&(o=new Map,s.forEach((S,m)=>{o.set(m,S)}))}function c(){if(a)throw new Error(Ee(3));return i}function d(S){if(typeof S!="function")throw new Error(Ee(4));if(a)throw new Error(Ee(5));let m=!0;u();const f=l++;return o.set(f,S),function(){if(m){if(a)throw new Error(Ee(6));m=!1,u(),o.delete(f),s=null}}}function h(S){if(!nh(S))throw new Error(Ee(7));if(typeof S.type>"u")throw new Error(Ee(8));if(typeof S.type!="string")throw new Error(Ee(17));if(a)throw new Error(Ee(9));try{a=!0,i=r(i,S)}finally{a=!1}return(s=o).forEach(f=>{f()}),S}function _(S){if(typeof S!="function")throw new Error(Ee(10));r=S,h({type:kl.REPLACE})}function g(){const S=d;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Ee(11));function f(){const y=m;y.next&&y.next(c())}return f(),{unsubscribe:S(f)}},[Sp](){return this}}}return h({type:kl.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:_,[Sp]:g}}function BS(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:kl.INIT})>"u")throw new Error(Ee(12));if(typeof n(void 0,{type:kl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ee(13))})}function VS(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{BS(n)}catch(s){i=s}return function(o={},l){if(i)throw i;let a=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],_=o[d],g=h(_,l);if(typeof g>"u")throw l&&l.type,new Error(Ee(14));u[d]=g,a=a||g!==_}return a=a||r.length!==Object.keys(o).length,a?u:o}}function Rl(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function HS(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Ee(15))};const o={getState:i.getState,dispatch:(a,...u)=>s(a,...u)},l=t.map(a=>a(o));return s=Rl(...l)(i.dispatch),{...i,dispatch:s}}}function GS(t){return nh(t)&&"type"in t&&typeof t.type=="string"}var py=Symbol.for("immer-nothing"),Cp=Symbol.for("immer-draftable"),Je=Symbol.for("immer-state");function mt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ai=Object.getPrototypeOf;function Dn(t){return!!t&&!!t[Je]}function Yt(t){var e;return t?my(t)||Array.isArray(t)||!!t[Cp]||!!((e=t.constructor)!=null&&e[Cp])||ya(t)||va(t):!1}var KS=Object.prototype.constructor.toString();function my(t){if(!t||typeof t!="object")return!1;const e=ai(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===KS}function As(t,e){ga(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function ga(t){const e=t[Je];return e?e.type_:Array.isArray(t)?1:ya(t)?2:va(t)?3:0}function Rc(t,e){return ga(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function _y(t,e,n){const r=ga(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function qS(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function ya(t){return t instanceof Map}function va(t){return t instanceof Set}function Qn(t){return t.copy_||t.base_}function Nc(t,e){if(ya(t))return new Map(t);if(va(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&my(t))return ai(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[Je];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(ai(t),n)}function rh(t,e=!1){return wa(t)||Dn(t)||!Yt(t)||(ga(t)>1&&(t.set=t.add=t.clear=t.delete=QS),Object.freeze(t),e&&As(t,(n,r)=>rh(r,!0))),t}function QS(){mt(2)}function wa(t){return Object.isFrozen(t)}var YS={};function hr(t){const e=YS[t];return e||mt(0,t),e}var Ds;function gy(){return Ds}function XS(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ip(t,e){e&&(hr("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Pc(t){xc(t),t.drafts_.forEach(JS),t.drafts_=null}function xc(t){t===Ds&&(Ds=t.parent_)}function Tp(t){return Ds=XS(Ds,t)}function JS(t){const e=t[Je];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function kp(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Je].modified_&&(Pc(e),mt(4)),Yt(t)&&(t=Nl(e,t),e.parent_||Pl(e,t)),e.patches_&&hr("Patches").generateReplacementPatches_(n[Je].base_,t,e.patches_,e.inversePatches_)):t=Nl(e,n,[]),Pc(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==py?t:void 0}function Nl(t,e,n){if(wa(e))return e;const r=e[Je];if(!r)return As(e,(i,s)=>Rp(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Pl(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),As(s,(l,a)=>Rp(t,r,i,l,a,n,o)),Pl(t,i,!1),n&&t.patches_&&hr("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function Rp(t,e,n,r,i,s,o){if(Dn(i)){const l=s&&e&&e.type_!==3&&!Rc(e.assigned_,r)?s.concat(r):void 0,a=Nl(t,i,l);if(_y(n,r,a),Dn(a))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Yt(i)&&!wa(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Nl(t,i),(!e||!e.scope_.parent_)&&Pl(t,i)}}function Pl(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&rh(e,n)}function ZS(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:gy(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=ih;n&&(i=[r],s=bs);const{revoke:o,proxy:l}=Proxy.revocable(i,s);return r.draft_=l,r.revoke_=o,l}var ih={get(t,e){if(e===Je)return t;const n=Qn(t);if(!Rc(n,e))return eC(t,n,e);const r=n[e];return t.finalized_||!Yt(r)?r:r===mu(t.base_,e)?(_u(t),t.copy_[e]=Ac(r,t)):r},has(t,e){return e in Qn(t)},ownKeys(t){return Reflect.ownKeys(Qn(t))},set(t,e,n){const r=yy(Qn(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=mu(Qn(t),e),s=i==null?void 0:i[Je];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(qS(n,i)&&(n!==void 0||Rc(t.base_,e)))return!0;_u(t),Oc(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return mu(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,_u(t),Oc(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Qn(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){mt(11)},getPrototypeOf(t){return ai(t.base_)},setPrototypeOf(){mt(12)}},bs={};As(ih,(t,e)=>{bs[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});bs.deleteProperty=function(t,e){return bs.set.call(this,t,e,void 0)};bs.set=function(t,e,n){return ih.set.call(this,t[0],e,n,t[0])};function mu(t,e){const n=t[Je];return(n?Qn(n):t)[e]}function eC(t,e,n){var i;const r=yy(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function yy(t,e){if(!(e in t))return;let n=ai(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=ai(n)}}function Oc(t){t.modified_||(t.modified_=!0,t.parent_&&Oc(t.parent_))}function _u(t){t.copy_||(t.copy_=Nc(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var tC=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(a=s,...u){return o.produce(a,c=>n.call(this,c,...u))}}typeof n!="function"&&mt(6),r!==void 0&&typeof r!="function"&&mt(7);let i;if(Yt(e)){const s=Tp(this),o=Ac(e,void 0);let l=!0;try{i=n(o),l=!1}finally{l?Pc(s):xc(s)}return Ip(s,r),kp(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===py&&(i=void 0),this.autoFreeze_&&rh(i,!0),r){const s=[],o=[];hr("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else mt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...l)=>this.produceWithPatches(o,a=>e(a,...l));let r,i;return[this.produce(e,n,(o,l)=>{r=o,i=l}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Yt(t)||mt(8),Dn(t)&&(t=vy(t));const e=Tp(this),n=Ac(t,void 0);return n[Je].isManual_=!0,xc(e),n}finishDraft(t,e){const n=t&&t[Je];(!n||!n.isManual_)&&mt(9);const{scope_:r}=n;return Ip(r,e),kp(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=hr("Patches").applyPatches_;return Dn(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Ac(t,e){const n=ya(t)?hr("MapSet").proxyMap_(t,e):va(t)?hr("MapSet").proxySet_(t,e):ZS(t,e);return(e?e.scope_:gy()).drafts_.push(n),n}function vy(t){return Dn(t)||mt(10,t),wy(t)}function wy(t){if(!Yt(t)||wa(t))return t;const e=t[Je];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Nc(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Nc(t,!0);return As(n,(r,i)=>{_y(n,r,wy(i))}),e&&(e.finalized_=!1),n}var Ze=new tC,Ey=Ze.produce;Ze.produceWithPatches.bind(Ze);Ze.setAutoFreeze.bind(Ze);Ze.setUseStrictShallowCopy.bind(Ze);Ze.applyPatches.bind(Ze);Ze.createDraft.bind(Ze);Ze.finishDraft.bind(Ze);function nC(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function rC(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function iC(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var Np=t=>Array.isArray(t)?t:[t];function sC(t){const e=Array.isArray(t[0])?t[0]:t;return iC(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function oC(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var lC=class{constructor(t){this.value=t}deref(){return this.value}},aC=typeof WeakRef<"u"?WeakRef:lC,uC=0,Pp=1;function Ao(){return{s:uC,v:void 0,o:null,p:null}}function sh(t,e={}){let n=Ao();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let l=n;const{length:a}=arguments;for(let h=0,_=a;h<_;h++){const g=arguments[h];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=l.o;v===null&&(l.o=v=new WeakMap);const S=v.get(g);S===void 0?(l=Ao(),v.set(g,l)):l=S}else{let v=l.p;v===null&&(l.p=v=new Map);const S=v.get(g);S===void 0?(l=Ao(),v.set(g,l)):l=S}}const u=l;let c;if(l.s===Pp?c=l.v:(c=t.apply(null,arguments),s++),u.s=Pp,r){const h=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;h!=null&&r(h,c)&&(c=h,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new aC(c):c}return u.v=c,c}return o.clearCache=()=>{n=Ao(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function Sy(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,l,a={},u=i.pop();typeof u=="object"&&(a=u,u=i.pop()),nC(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...a},{memoize:d,memoizeOptions:h=[],argsMemoize:_=sh,argsMemoizeOptions:g=[],devModeChecks:v={}}=c,S=Np(h),m=Np(g),f=sC(i),p=d(function(){return s++,u.apply(null,arguments)},...S),y=_(function(){o++;const T=oC(f,arguments);return l=p.apply(null,T),l},...m);return Object.assign(y,{resultFunc:u,memoizedResultFunc:p,dependencies:f,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>l,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:_})};return Object.assign(r,{withTypes:()=>r}),r}var cC=Sy(sh),dC=Object.assign((t,e=cC)=>{rC(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,l,a)=>(o[n[a]]=l,o),{}))},{withTypes:()=>dC});function Cy(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var hC=Cy(),fC=Cy,pC=(...t)=>{const e=Sy(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...l)=>i(Dn(o)?vy(o):o,...l);return Object.assign(s,i),s},{withTypes:()=>n});return n};pC(sh);var mC=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Rl:Rl.apply(null,arguments)};function ui(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Be(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>GS(r)&&r.type===t,n}var Iy=class Xi extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Xi.prototype)}static get[Symbol.species](){return Xi}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Xi(...e[0].concat(this)):new Xi(...e.concat(this))}};function xp(t){return Yt(t)?Ey(t,()=>{}):t}function Op(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(Be(10));const r=n.insert(e,t);return t.set(e,r),r}function _C(t){return typeof t=="boolean"}var gC=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new Iy;return n&&(_C(n)?o.push(hC):o.push(fC(n.extraArgument))),o},yC="RTK_autoBatch",Ty=t=>e=>{setTimeout(e,t)},vC=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ty(10),wC=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const l=new Set,a=t.type==="tick"?queueMicrotask:t.type==="raf"?vC:t.type==="callback"?t.queueNotification:Ty(t.timeout),u=()=>{o=!1,s&&(s=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return l.add(c),()=>{h(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[yC]),s=!i,s&&(o||(o=!0,a(u))),r.dispatch(c)}finally{i=!0}}})},EC=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new Iy(t);return r&&i.push(wC(typeof r=="object"?r:void 0)),i},SC=!0;function CC(t){const e=gC(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let l;if(typeof n=="function")l=n;else if(nh(n))l=VS(n);else throw new Error(Be(1));let a;typeof r=="function"?a=r(e):a=e();let u=Rl;i&&(u=mC({trace:!SC,...typeof i=="object"&&i}));const c=HS(...a),d=EC(c);let h=typeof o=="function"?o(d):d();const _=u(...h);return fy(l,s,_)}function ky(t){const e={},n=[];let r;const i={addCase(s,o){const l=typeof s=="string"?s:s.type;if(!l)throw new Error(Be(28));if(l in e)throw new Error(Be(29));return e[l]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function IC(t){return typeof t=="function"}function TC(t,e){let[n,r,i]=ky(e),s;if(IC(t))s=()=>xp(t());else{const l=xp(t);s=()=>l}function o(l=s(),a){let u=[n[a.type],...r.filter(({matcher:c})=>c(a)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Dn(c)){const _=d(c,a);return _===void 0?c:_}else{if(Yt(c))return Ey(c,h=>d(h,a));{const h=d(c,a);if(h===void 0){if(c===null)return c;throw new Error(Be(9))}return h}}return c},l)}return o.getInitialState=s,o}var kC="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",RC=(t=21)=>{let e="",n=t;for(;n--;)e+=kC[Math.random()*64|0];return e},NC=Symbol.for("rtk-slice-createasyncthunk");function PC(t,e){return`${t}/${e}`}function xC({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[NC];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(Be(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(AC()):i.reducers)||{},a=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(p,y){const C=typeof p=="string"?p:p.type;if(!C)throw new Error(Be(12));if(C in u.sliceCaseReducersByType)throw new Error(Be(13));return u.sliceCaseReducersByType[C]=y,c},addMatcher(p,y){return u.sliceMatchers.push({matcher:p,reducer:y}),c},exposeAction(p,y){return u.actionCreators[p]=y,c},exposeCaseReducer(p,y){return u.sliceCaseReducersByName[p]=y,c}};a.forEach(p=>{const y=l[p],C={reducerName:p,type:PC(s,p),createNotation:typeof i.reducers=="function"};bC(y)?MC(C,y,c,e):DC(C,y,c)});function d(){const[p={},y=[],C=void 0]=typeof i.extraReducers=="function"?ky(i.extraReducers):[i.extraReducers],T={...p,...u.sliceCaseReducersByType};return TC(i.initialState,R=>{for(let k in T)R.addCase(k,T[k]);for(let k of u.sliceMatchers)R.addMatcher(k.matcher,k.reducer);for(let k of y)R.addMatcher(k.matcher,k.reducer);C&&R.addDefaultCase(C)})}const h=p=>p,_=new Map;let g;function v(p,y){return g||(g=d()),g(p,y)}function S(){return g||(g=d()),g.getInitialState()}function m(p,y=!1){function C(R){let k=R[p];return typeof k>"u"&&y&&(k=S()),k}function T(R=h){const k=Op(_,y,{insert:()=>new WeakMap});return Op(k,R,{insert:()=>{const B={};for(const[D,Ve]of Object.entries(i.selectors??{}))B[D]=OC(Ve,R,S,y);return B}})}return{reducerPath:p,getSelectors:T,get selectors(){return T(C)},selectSlice:C}}const f={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...m(o),injectInto(p,{reducerPath:y,...C}={}){const T=y??o;return p.inject({reducerPath:T,reducer:v},C),{...f,...m(T,!0)}}};return f}}function OC(t,e,n,r){function i(s,...o){let l=e(s);return typeof l>"u"&&r&&(l=n()),t(l,...o)}return i.unwrapped=t,i}var Ry=xC();function AC(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function DC({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!LC(r))throw new Error(Be(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?ui(t,o):ui(t))}function bC(t){return t._reducerDefinitionType==="asyncThunk"}function LC(t){return t._reducerDefinitionType==="reducerWithPrepare"}function MC({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Be(18));const{payloadCreator:s,fulfilled:o,pending:l,rejected:a,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),l&&r.addCase(d.pending,l),a&&r.addCase(d.rejected,a),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Do,pending:l||Do,rejected:a||Do,settled:u||Do})}function Do(){}var UC=(t,e)=>{if(typeof t!="function")throw new Error(Be(32))},oh="listenerMiddleware",FC=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=ui(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(Be(21));return UC(s),{predicate:i,type:e,effect:s}},jC=Object.assign(t=>{const{type:e,predicate:n,effect:r}=FC(t);return{id:RC(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Be(22))}}},{withTypes:()=>jC}),zC=Object.assign(ui(`${oh}/add`),{withTypes:()=>zC});ui(`${oh}/removeAll`);var $C=Object.assign(ui(`${oh}/remove`),{withTypes:()=>$C});function Be(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Ny=Ry({name:"user",initialState:{currentUser:null,isLoading:!0},reducers:{setUser:(t,e)=>{if(e.payload){const{displayName:n,email:r,uid:i,profileURL:s,status:o}=e.payload;t.currentUser={displayName:n,email:r,uid:i,profileURL:s,status:o}}else t.currentUser=null},setLoading:(t,e)=>{t.isLoading=e.payload}}}),{setUser:Dc,setLoading:WC}=Ny.actions,BC=Ny.reducer,Py=Ry({name:"ui",initialState:{isSigningUp:!1,isMenuOpen:!1},reducers:{toggleSignUp:t=>{t.isSigningUp=!t.isSigningUp},toggleMenu:t=>{t.isMenuOpen=!t.isMenuOpen}}}),{toggleSignUp:bc,toggleMenu:VC}=Py.actions,HC=Py.reducer,GC=CC({reducer:{user:BC,ui:HC}});var xy={exports:{}},Oy={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=de;function KC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qC=typeof Object.is=="function"?Object.is:KC,QC=Js.useSyncExternalStore,YC=Js.useRef,XC=Js.useEffect,JC=Js.useMemo,ZC=Js.useDebugValue;Oy.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=YC(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=JC(function(){function a(_){if(!u){if(u=!0,c=_,_=r(_),i!==void 0&&o.hasValue){var g=o.value;if(i(g,_))return d=g}return d=_}if(g=d,qC(c,_))return g;var v=r(_);return i!==void 0&&i(g,v)?g:(c=_,d=v)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return a(e())},h===null?void 0:function(){return a(h())}]},[e,n,r,i]);var l=QC(t,s[0],s[1]);return XC(function(){o.hasValue=!0,o.value=l},[l]),ZC(l),l};xy.exports=Oy;var eI=xy.exports,qe="default"in mf?dd:mf,Ap=Symbol.for("react-redux-context"),Dp=typeof globalThis<"u"?globalThis:{};function tI(){if(!qe.createContext)return{};const t=Dp[Ap]??(Dp[Ap]=new Map);let e=t.get(qe.createContext);return e||(e=qe.createContext(null),t.set(qe.createContext,e)),e}var bn=tI(),nI=()=>{throw new Error("uSES not initialized!")};function lh(t=bn){return function(){return qe.useContext(t)}}var Ay=lh(),Dy=nI,rI=t=>{Dy=t},iI=(t,e)=>t===e;function sI(t=bn){const e=t===bn?Ay:lh(t),n=(r,i={})=>{const{equalityFn:s=iI,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:a,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();qe.useRef(!0);const h=qe.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),_=Dy(a.addNestedSub,l.getState,u||l.getState,h,s);return qe.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var Ln=sI();function oI(t){t()}function lI(){let t=null,e=null;return{clear(){t=null,e=null},notify(){oI(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var bp={notify(){},get:()=>[]};function aI(t,e){let n,r=bp,i=0,s=!1;function o(v){c();const S=r.subscribe(v);let m=!1;return()=>{m||(m=!0,S(),d())}}function l(){r.notify()}function a(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(a):t.subscribe(a),r=lI())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=bp)}function h(){s||(s=!0,c())}function _(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:l,handleChangeWrapper:a,isSubscribed:u,trySubscribe:h,tryUnsubscribe:_,getListeners:()=>r};return g}var uI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cI=uI?qe.useLayoutEffect:qe.useEffect;function dI({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=qe.useMemo(()=>{const u=aI(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),l=qe.useMemo(()=>t.getState(),[t]);cI(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,l]);const a=e||bn;return qe.createElement(a.Provider,{value:o},n)}var hI=dI;function by(t=bn){const e=t===bn?Ay:lh(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var fI=by();function pI(t=bn){const e=t===bn?fI:by(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Zs=pI();rI(eI.useSyncExternalStoreWithSelector);var Lp={};/**
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
 */const Ly={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw Ii(e)},Ii=function(t){return new Error("Firebase Database ("+Ly.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const My=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(My(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new _I;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uy=function(t){const e=My(t);return ah.encodeByteArray(e,!0)},xl=function(t){return Uy(t).replace(/\./g,"")},Ol=function(t){try{return ah.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gI(t){return Fy(void 0,t)}function Fy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yI(n)||(t[n]=Fy(t[n],e[n]));return t}function yI(t){return t!=="__proto__"}/**
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
 */function vI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wI=()=>vI().__FIREBASE_DEFAULTS__,EI=()=>{if(typeof process>"u"||typeof Lp>"u")return;const t=Lp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ol(t[1]);return e&&JSON.parse(e)},uh=()=>{try{return wI()||EI()||SI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jy=t=>{var e,n;return(n=(e=uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ch=t=>{const e=jy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zy=()=>{var t;return(t=uh())===null||t===void 0?void 0:t.config},$y=t=>{var e;return(e=uh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Wy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xl(JSON.stringify(n)),xl(JSON.stringify(o)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function CI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function By(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function II(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vy(){return Ly.NODE_ADMIN===!0}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function kI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const RI="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RI,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new tn(i,l,r)}}function NI(t,e){return t.replace(PI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PI=/\{\$([^}]+)}/g;/**
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
 */function Ls(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
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
 */const Hy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ls(Ol(s[0])||""),n=Ls(Ol(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},xI=function(t){const e=Hy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},OI=function(t){const e=Hy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Al(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function bl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mp(s)&&Mp(o)){if(!bl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class AI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function DI(t,e){const n=new bI(t,e);return n.subscribe.bind(n)}class bI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gu),i.error===void 0&&(i.error=gu),i.complete===void 0&&(i.complete=gu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gu(){}function di(t,e){return`${t} failed: ${e} argument `}/**
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
 */const MI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ea=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class UI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jI(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FI(t){return t===Yn?void 0:t}function jI(t){return t.instantiationMode==="EAGER"}/**
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
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const $I={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},WI=V.INFO,BI={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},VI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hh{constructor(e){this.name=e,this._logLevel=WI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const HI=(t,e)=>e.some(n=>t instanceof n);let Up,Fp;function GI(){return Up||(Up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KI(){return Fp||(Fp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gy=new WeakMap,Lc=new WeakMap,Ky=new WeakMap,yu=new WeakMap,fh=new WeakMap;function qI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gy.set(n,t)}).catch(()=>{}),fh.set(e,t),e}function QI(t){if(Lc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lc.set(t,e)}let Mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ky.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YI(t){Mc=t(Mc)}function XI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vu(this),e,...n);return Ky.set(r,e.sort?e.sort():[e]),Rn(r)}:KI().includes(t)?function(...e){return t.apply(vu(this),e),Rn(Gy.get(this))}:function(...e){return Rn(t.apply(vu(this),e))}}function JI(t){return typeof t=="function"?XI(t):(t instanceof IDBTransaction&&QI(t),HI(t,GI())?new Proxy(t,Mc):t)}function Rn(t){if(t instanceof IDBRequest)return qI(t);if(yu.has(t))return yu.get(t);const e=JI(t);return e!==t&&(yu.set(t,e),fh.set(e,t)),e}const vu=t=>fh.get(t);function ZI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Rn(o.result),a.oldVersion,a.newVersion,Rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const eT=["get","getKey","getAll","getAllKeys","count"],tT=["put","add","delete","clear"],wu=new Map;function jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wu.get(e))return wu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eT.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return wu.set(e,s),s}YI(t=>({...t,get:(e,n,r)=>jp(e,n)||t.get(e,n,r),has:(e,n)=>!!jp(e,n)||t.has(e,n)}));/**
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
 */class nT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",zp="0.9.26";/**
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
 */const fr=new hh("@firebase/app"),iT="@firebase/app-compat",sT="@firebase/analytics-compat",oT="@firebase/analytics",lT="@firebase/app-check-compat",aT="@firebase/app-check",uT="@firebase/auth",cT="@firebase/auth-compat",dT="@firebase/database",hT="@firebase/database-compat",fT="@firebase/functions",pT="@firebase/functions-compat",mT="@firebase/installations",_T="@firebase/installations-compat",gT="@firebase/messaging",yT="@firebase/messaging-compat",vT="@firebase/performance",wT="@firebase/performance-compat",ET="@firebase/remote-config",ST="@firebase/remote-config-compat",CT="@firebase/storage",IT="@firebase/storage-compat",TT="@firebase/firestore",kT="@firebase/firestore-compat",RT="firebase",NT="10.7.2";/**
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
 */const Fc="[DEFAULT]",PT={[Uc]:"fire-core",[iT]:"fire-core-compat",[oT]:"fire-analytics",[sT]:"fire-analytics-compat",[aT]:"fire-app-check",[lT]:"fire-app-check-compat",[uT]:"fire-auth",[cT]:"fire-auth-compat",[dT]:"fire-rtdb",[hT]:"fire-rtdb-compat",[fT]:"fire-fn",[pT]:"fire-fn-compat",[mT]:"fire-iid",[_T]:"fire-iid-compat",[gT]:"fire-fcm",[yT]:"fire-fcm-compat",[vT]:"fire-perf",[wT]:"fire-perf-compat",[ET]:"fire-rc",[ST]:"fire-rc-compat",[CT]:"fire-gcs",[IT]:"fire-gcs-compat",[TT]:"fire-fst",[kT]:"fire-fst-compat","fire-js":"fire-js",[RT]:"fire-js-all"};/**
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
 */const Ll=new Map,jc=new Map;function xT(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(jc.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,t);for(const n of Ll.values())xT(n,t);return!0}function to(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const OT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new eo("app","Firebase",OT);/**
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
 */class AT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=NT;function qy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=zy()),!n)throw Nn.create("no-options");const s=Ll.get(i);if(s){if(bl(n,s.options)&&bl(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new zI(i);for(const a of jc.values())o.addComponent(a);const l=new AT(n,r,o);return Ll.set(i,l),l}function Sa(t=Fc){const e=Ll.get(t);if(!e&&t===Fc&&zy())return qy();if(!e)throw Nn.create("no-app",{appName:t});return e}function lt(t,e,n){var r;let i=(r=PT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(l.join(" "));return}Mn(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const DT="firebase-heartbeat-database",bT=1,Ms="firebase-heartbeat-store";let Eu=null;function Qy(){return Eu||(Eu=ZI(DT,bT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ms)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),Eu}async function LT(t){try{return await(await Qy()).transaction(Ms).objectStore(Ms).get(Yy(t))}catch(e){if(e instanceof tn)fr.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function $p(t,e){try{const r=(await Qy()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,Yy(t)),await r.done}catch(n){if(n instanceof tn)fr.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function Yy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MT=1024,UT=30*24*60*60*1e3;class FT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=UT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wp(),{heartbeatsToSend:r,unsentEntries:i}=jT(this._heartbeatsCache.heartbeats),s=xl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wp(){return new Date().toISOString().substring(0,10)}function jT(t,e=MT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?kI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bp(t){return xl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $T(t){Mn(new Xt("platform-logger",e=>new nT(e),"PRIVATE")),Mn(new Xt("heartbeat",e=>new FT(e),"PRIVATE")),lt(Uc,zp,t),lt(Uc,zp,"esm2017"),lt("fire-js","")}$T("");var WT="firebase",BT="10.7.2";/**
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
 */lt(WT,BT,"app");var Vp={};const Hp="@firebase/database",Gp="1.0.2";/**
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
 */let Xy="";function VT(t){Xy=t}/**
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
 */class HT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class GT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Jy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HT(e)}}catch{}return new GT},tr=Jy("localStorage"),zc=Jy("sessionStorage");/**
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
 */const Yr=new hh("@firebase/database"),KT=function(){let t=1;return function(){return t++}}(),Zy=function(t){const e=MI(t),n=new AI;n.update(e);const r=n.digest();return ah.encodeByteArray(r)},no=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=no.apply(null,r):typeof r=="object"?e+=he(r):e+=r,e+=" "}return e};let ir=null,Kp=!0;const qT=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Yr.logLevel=V.VERBOSE,ir=Yr.log.bind(Yr),e&&zc.set("logging_enabled",!0)):typeof t=="function"?ir=t:(ir=null,zc.remove("logging_enabled"))},ye=function(...t){if(Kp===!0&&(Kp=!1,ir===null&&zc.get("logging_enabled")===!0&&qT(!0)),ir){const e=no.apply(null,t);ir(e)}},ro=function(t){return function(...e){ye(t,...e)}},$c=function(...t){const e="FIREBASE INTERNAL ERROR: "+no(...t);Yr.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${no(...t)}`;throw Yr.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+no(...t);Yr.warn(e)},QT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ca=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},YT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hi="[MIN_NAME]",pr="[MAX_NAME]",Cr=function(t,e){if(t===e)return 0;if(t===hi||e===pr)return-1;if(e===hi||t===pr)return 1;{const n=qp(t),r=qp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},XT=function(t,e){return t===e?0:t<e?-1:1},$i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},ph=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=he(e[r]),n+=":",n+=ph(t[e[r]]);return n+="}",n},ev=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function we(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tv=function(t){I(!Ca(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},JT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ek(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const tk=new RegExp("^-?(0*)\\d{1,10}$"),nk=-2147483648,rk=2147483647,qp=function(t){if(tk.test(t)){const e=Number(t);if(e>=nk&&e<=rk)return e}return null},ki=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},ik=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ok{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class Xr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xr.OWNER="owner";/**
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
 */const mh="5",nv="v",rv="s",iv="r",sv="f",ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lv="ls",av="p",Wc="ac",uv="websocket",cv="long_polling";/**
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
 */class dv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hv(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===uv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===cv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lk(t)&&(n.ns=t.namespace);const i=[];return we(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class ak{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gI(this.counters_)}}/**
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
 */const Su={},Cu={};function _h(t){const e=t.toString();return Su[e]||(Su[e]=new ak),Su[e]}function uk(t,e){const n=t.toString();return Cu[n]||(Cu[n]=e()),Cu[n]}/**
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
 */class ck{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ki(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Qp="start",dk="close",hk="pLPCommand",fk="pRTLPCB",fv="id",pv="pw",mv="ser",pk="cb",mk="seg",_k="ts",gk="d",yk="dframe",_v=1870,gv=30,vk=_v-gv,wk=25e3,Ek=3e4;class $r{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ro(e),this.stats_=_h(n),this.urlFn=a=>(this.appCheckToken&&(a[Wc]=this.appCheckToken),hv(n,cv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ck(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ek)),YT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gh((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qp)this.id=l,this.password=a;else if(o===dk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qp]="t",r[mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[nv]=mh,this.transportSessionId&&(r[rv]=this.transportSessionId),this.lastSessionId&&(r[lv]=this.lastSessionId),this.applicationId&&(r[av]=this.applicationId),this.appCheckToken&&(r[Wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&ov.test(location.hostname)&&(r[iv]=sv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$r.forceAllow_=!0}static forceDisallow(){$r.forceDisallow_=!0}static isAvailable(){return $r.forceAllow_?!0:!$r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JT()&&!ZT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Uy(n),i=ev(r,vk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yk]="t",r[fv]=e,r[pv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KT(),window[hk+this.uniqueCallbackIdentifier]=e,window[fk+this.uniqueCallbackIdentifier]=n,this.myIFrame=gh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ye("frame writing exception"),l.stack&&ye(l.stack),ye(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fv]=this.myID,e[pv]=this.myPW,e[mv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gv+r.length<=_v;){const o=this.pendingSegs.shift();r=r+"&"+mk+i+"="+o.seg+"&"+_k+i+"="+o.ts+"&"+gk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Sk=16384,Ck=45e3;let Ml=null;typeof MozWebSocket<"u"?Ml=MozWebSocket:typeof WebSocket<"u"&&(Ml=WebSocket);class _t{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ro(this.connId),this.stats_=_h(n),this.connURL=_t.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[nv]=mh,typeof location<"u"&&location.hostname&&ov.test(location.hostname)&&(o[iv]=sv),n&&(o[rv]=n),r&&(o[lv]=r),i&&(o[Wc]=i),s&&(o[av]=s),hv(e,uv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let r;Vy(),this.mySock=new Ml(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ml!==null&&!_t.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ls(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ev(n,Sk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ck))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class Us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$r,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of Us.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Us.globalTransportInitialized_=!1;/**
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
 */const Ik=6e4,Tk=5e3,kk=10*1024,Rk=100*1024,Iu="t",Yp="d",Nk="s",Xp="r",Pk="e",Jp="o",Zp="a",em="n",tm="p",xk="h";class Ok{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ro("c:"+this.id+":"),this.transportManager_=new Us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Rk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Iu in e){const n=e[Iu];n===Zp?this.upgradeIfSecondaryHealthy_():n===Xp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$i("t",e),r=$i("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:em,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$i("t",e),r=$i("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$i(Iu,e);if(Yp in e){const r=e[Yp];if(n===xk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===em){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Nk?this.onConnectionShutdown_(r):n===Xp?this.onReset_(r):n===Pk?$c("Server Error: "+r):n===Jp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$c("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mh!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ik))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class vv{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ul extends vv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ul}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const nm=32,rm=768;class W{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new W("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Un(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new W(t.pieces_,e)}function yh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ak(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new W(e,0)}function Z(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof W)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new W(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return Ae(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dk(t,e){const n=Fs(t,0),r=Fs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Cr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function vh(t,e){if(Un(t)!==Un(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Un(t)>Un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bk{constructor(e,n){this.errorPrefix_=n,this.parts_=Fs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ea(this.parts_[r]);Ev(this)}}function Lk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ea(e),Ev(t)}function Mk(t){const e=t.parts_.pop();t.byteLength_-=Ea(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ev(t){if(t.byteLength_>rm)throw new Error(t.errorPrefix_+"has a key path longer than "+rm+" bytes ("+t.byteLength_+").");if(t.parts_.length>nm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nm+") or object contains a cycle "+Xn(t))}function Xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class wh extends vv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new wh}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wi=1e3,Uk=60*5*1e3,im=30*1e3,Fk=1.3,jk=3e4,zk="server_kill",sm=3;class Ht extends yv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ht.nextPersistentConnectionId_++,this.log_=ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=Uk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Vy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(he(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Pt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ht.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const r=ci(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=im)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$c("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jk&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Fk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ht.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ye("getToken() completed but was canceled"):(ye("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new Ok(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(zk)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&be(d),a())}}}interrupt(e){ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Al(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ph(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new W(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sm&&(this.reconnectDelay_=im,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xy.replace(/\./g,"-")]=1,dh()?e["framework.cordova"]=1:By()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ul.getInstance().currentlyOnline();return Al(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class Ia{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(hi,e),i=new U(hi,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
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
 */let bo;class Sv extends Ia{static get __EMPTY_NODE(){return bo}static set __EMPTY_NODE(e){bo=e}compare(e,n){return Cr(e.name,n.name)}isDefinedOn(e){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(pr,bo)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,bo)}toString(){return".key"}}const Jr=new Sv;/**
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
 */class Lo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??je.EMPTY_NODE,this.right=s??je.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class $k{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,n=je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Lo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Lo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Lo(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new $k;/**
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
 */function Wk(t,e){return Cr(t.name,e.name)}function Eh(t,e){return Cr(t,e)}/**
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
 */let Bc;function Bk(t){Bc=t}const Cv=function(t){return typeof t=="number"?"number:"+tv(t):"string:"+t},Iv=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else I(t===Bc||t.isEmpty(),"priority of unexpected type.");I(t===Bc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let om;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iv(this.priorityNode_)}static set __childrenNodeConstructor(e){om=e}static get __childrenNodeConstructor(){return om}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:b(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tv(this.value_):e+=this.value_,this.lazyHash_=Zy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Tv,kv;function Vk(t){Tv=t}function Hk(t){kv=t}class Gk extends Ia{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Cr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(pr,new me("[PRIORITY-POST]",kv))}makePost(e,n){const r=Tv(e);return new U(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ee=new Gk;/**
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
 */const Kk=Math.log(2);class qk{constructor(e){const n=s=>parseInt(Math.log(s)/Kk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new ge(h,d.node,ge.BLACK,null,null);{const _=parseInt(c/2,10)+a,g=i(a,_),v=i(_+1,u);return d=t[_],h=n?n(d):d,new ge(h,d.node,ge.BLACK,g,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(g,v){const S=d-g,m=d;d-=g;const f=i(S+1,m),p=t[S],y=n?n(p):p;_(new ge(y,p.node,v,null,f))},_=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),S=Math.pow(2,a.count-(g+1));v?h(S,ge.BLACK):(h(S,ge.BLACK),h(S,ge.RED))}return c},o=new qk(t.length),l=s(o);return new je(r||e,l)};/**
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
 */let Tu;const Rr={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Rr&&ee,"ChildrenNode.ts has not been loaded"),Tu=Tu||new $t({".priority":Rr},{".priority":ee}),Tu}get(e){const n=ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof je?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Fl(r,e.getCompare()):l=Rr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new $t(c,u)}addToIndexes(e,n){const r=Dl(this.indexes_,(i,s)=>{const o=ci(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Rr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Fl(l,o.getCompare())}else return Rr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new $t(r,this.indexSet_)}removeFromIndexes(e,n){const r=Dl(this.indexes_,i=>{if(i===Rr)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new $t(r,this.indexSet_)}}/**
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
 */let Bi;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Iv(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bi||(Bi=new x(new je(Eh),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bi:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{I(b(e)!==".priority"||Un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cv(this.getPriority().val())+":"),this.forEachChild(ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Zy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===io?-1:0}withIndex(e){if(e===Jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ee),i=n.getIterator(ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Jr?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qk extends x{constructor(){super(new je(Eh),x.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const io=new Qk;Object.defineProperties(U,{MIN:{value:new U(hi,x.EMPTY_NODE)},MAX:{value:new U(pr,io)}});Sv.__EMPTY_NODE=x.EMPTY_NODE;me.__childrenNodeConstructor=x;Bk(io);Hk(io);/**
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
 */const Yk=!0;function ie(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,ie(e))}if(!(t instanceof Array)&&Yk){const n=[];let r=!1;if(we(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ie(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return x.EMPTY_NODE;const s=Fl(n,Wk,o=>o.name,Eh);if(r){const o=Fl(n,ee.getCompare());return new x(s,ie(e),new $t({".priority":o},{".priority":ee}))}else return new x(s,ie(e),$t.Default)}else{let n=x.EMPTY_NODE;return we(t,(r,i)=>{if(Lt(t,r)&&r.substring(0,1)!=="."){const s=ie(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ie(e))}}Vk(ie);/**
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
 */class Xk extends Ia{constructor(e){super(),this.indexPath_=e,I(!M(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Cr(e.name,n.name):s}makePost(e,n){const r=ie(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,io);return new U(pr,e)}toString(){return Fs(this.indexPath_,0).join("/")}}/**
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
 */class Jk extends Ia{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Cr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=ie(e);return new U(n,r)}toString(){return".value"}}const Zk=new Jk;/**
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
 */function Rv(t){return{type:"value",snapshotNode:t}}function fi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function js(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function e1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Sh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(js(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(fi(n,r)):o.trackChildChange(zs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(js(i,s))}),n.isLeafNode()||n.forEachChild(ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(zs(i,s,o))}else r.trackChildChange(fi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $s{constructor(e){this.indexedFilter_=new Sh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$s.getStartPost_(e),this.endPost_=$s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(ee,(o,l)=>{s.matches(new U(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class t1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new U(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(zs(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(js(n,d));const v=l.updateImmediateChild(n,x.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(fi(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(js(u.name,u.node)),s.trackChildChange(fi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
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
 */class Ch{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hi}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Ch;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function n1(t){return t.loadsAllData()?new Sh(t.getIndex()):t.hasLimit()?new t1(t):new $s(t)}function lm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ee?n="$priority":t.index_===Zk?n="$value":t.index_===Jr?n="$key":(I(t.index_ instanceof Xk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=he(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+he(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=he(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function am(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
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
 */class jl extends yv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ro("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=jl.getListenId_(e,r),l={};this.listens_[o]=l;const a=lm(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ci(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=jl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=lm(e._queryParams),r=e._path.toString(),i=new Pt;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ls(l.responseText)}catch{be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class r1{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function zl(){return{value:null,children:new Map}}function Ri(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,zl());const i=t.children.get(r);e=H(e),Ri(i,e,n)}}function Vc(t,e){if(M(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ee,(r,i)=>{Ri(t,new W(r),i)}),Vc(t,e)}}else if(t.children.size>0){const n=b(e);return e=H(e),t.children.has(n)&&Vc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Hc(t,e,n){t.value!==null?n(e,t.value):i1(t,(r,i)=>{const s=new W(e.toString()+"/"+r);Hc(i,s,n)})}function i1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class s1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&we(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const um=10*1e3,o1=30*1e3,l1=5*60*1e3;class a1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new s1(e);const r=um+(o1-um)*Math.random();us(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;we(e,(i,s)=>{s>0&&Lt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*l1))}}/**
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
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function Ih(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Th(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $l{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=gt.ACK_USER_WRITE,this.source=Ih()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new W(e));return new $l(z(),n,this.revert)}}else return I(b(this.path)===e,"operationForChild called for unrelated child."),new $l(H(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ws{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new Ws(this.source,z()):new Ws(this.source,H(this.path))}}/**
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
 */class mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=gt.OVERWRITE}operationForChild(e){return M(this.path)?new mr(this.source,z(),this.snap.getImmediateChild(e)):new mr(this.source,H(this.path),this.snap)}}/**
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
 */class pi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=gt.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new W(e));return n.isEmpty()?null:n.value?new mr(this.source,z(),n.value):new pi(this.source,z(),n)}else return I(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pi(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class u1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function c1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(e1(o.childName,o.snapshotNode))}),Vi(t,i,"child_removed",e,r,n),Vi(t,i,"child_added",e,r,n),Vi(t,i,"child_moved",s,r,n),Vi(t,i,"child_changed",e,r,n),Vi(t,i,"value",e,r,n),i}function Vi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>h1(t,l,a)),o.forEach(l=>{const a=d1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function d1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function h1(t,e,n){if(e.childName==null||n.childName==null)throw Ii("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Ta(t,e){return{eventCache:t,serverCache:e}}function cs(t,e,n,r){return Ta(new Fn(e,n,r),t.serverCache)}function Nv(t,e,n,r){return Ta(t.eventCache,new Fn(e,n,r))}function Wl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _r(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ku;const f1=()=>(ku||(ku=new je(XT)),ku);class G{constructor(e,n=f1()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return we(e,(r,i)=>{n=n.set(new W(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(M(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:Z(new W(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new G(null)}}set(e,n){if(M(e))return new G(n,this.children);{const r=b(e),s=(this.children.get(r)||new G(null)).set(H(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(M(e))return n;{const r=b(e),s=(this.children.get(r)||new G(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Z(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(H(e),Z(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),Z(n,i),r):new G(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Z(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new G(null))}}function ds(t,e,n){if(M(e))return new wt(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new wt(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new wt(s)}}}function Gc(t,e,n){let r=t;return we(n,(i,s)=>{r=ds(r,Z(e,i),s)}),r}function cm(t,e){if(M(e))return wt.empty();{const n=t.writeTree_.setTree(e,new G(null));return new wt(n)}}function Kc(t,e){return Ir(t,e)!=null}function Ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function dm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Pn(t,e){if(M(e))return t;{const n=Ir(t,e);return n!=null?new wt(new G(n)):new wt(t.writeTree_.subtree(e))}}function qc(t){return t.writeTree_.isEmpty()}function mi(t,e){return Pv(z(),t.writeTree_,e)}function Pv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Pv(Z(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Z(t,".priority"),r)),n}}/**
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
 */function ka(t,e){return Dv(e,t)}function p1(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ds(t.visibleWrites,e,n)),t.lastWriteId=r}function m1(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Gc(t.visibleWrites,e,n),t.lastWriteId=r}function _1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function g1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&y1(l,r.path)?i=!1:st(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return v1(t),!0;if(r.snap)t.visibleWrites=cm(t.visibleWrites,r.path);else{const l=r.children;we(l,a=>{t.visibleWrites=cm(t.visibleWrites,Z(r.path,a))})}return!0}else return!1}function y1(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(Z(t.path,n),e))return!0;return!1}function v1(t){t.visibleWrites=xv(t.allWrites,w1,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function w1(t){return t.visible}function xv(t,e,n){let r=wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)st(n,o)?(l=Ae(n,o),r=ds(r,l,s.snap)):st(o,n)&&(l=Ae(o,n),r=ds(r,z(),s.snap.getChild(l)));else if(s.children){if(st(n,o))l=Ae(n,o),r=Gc(r,l,s.children);else if(st(o,n))if(l=Ae(o,n),M(l))r=Gc(r,z(),s.children);else{const a=ci(s.children,b(l));if(a){const u=a.getChild(H(l));r=ds(r,z(),u)}}}else throw Ii("WriteRecord should have .snap or .children")}}return r}function Ov(t,e,n,r,i){if(!r&&!i){const s=Ir(t.visibleWrites,e);if(s!=null)return s;{const o=Pn(t.visibleWrites,e);if(qc(o))return n;if(n==null&&!Kc(o,z()))return null;{const l=n||x.EMPTY_NODE;return mi(o,l)}}}else{const s=Pn(t.visibleWrites,e);if(!i&&qc(s))return n;if(!i&&n==null&&!Kc(s,z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(st(u.path,e)||st(e,u.path))},l=xv(t.allWrites,o,e),a=n||x.EMPTY_NODE;return mi(l,a)}}}function E1(t,e,n){let r=x.EMPTY_NODE;const i=Ir(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pn(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=mi(Pn(s,new W(o)),l);r=r.updateImmediateChild(o,a)}),dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pn(t.visibleWrites,e);return dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function S1(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Z(e,n);if(Kc(t.visibleWrites,s))return null;{const o=Pn(t.visibleWrites,s);return qc(o)?i.getChild(n):mi(o,i.getChild(n))}}function C1(t,e,n,r){const i=Z(e,n),s=Ir(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,i);return mi(o,r.getNode().getImmediateChild(n))}else return null}function I1(t,e){return Ir(t.visibleWrites,e)}function T1(t,e,n,r,i,s,o){let l;const a=Pn(t.visibleWrites,e),u=Ir(a,z());if(u!=null)l=u;else if(n!=null)l=mi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function k1(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function Bl(t,e,n,r){return Ov(t.writeTree,t.treePath,e,n,r)}function Rh(t,e){return E1(t.writeTree,t.treePath,e)}function hm(t,e,n,r){return S1(t.writeTree,t.treePath,e,n,r)}function Vl(t,e){return I1(t.writeTree,Z(t.treePath,e))}function R1(t,e,n,r,i,s){return T1(t.writeTree,t.treePath,e,n,r,i,s)}function Nh(t,e,n){return C1(t.writeTree,t.treePath,e,n)}function Av(t,e){return Dv(Z(t.treePath,e),t.writeTree)}function Dv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class N1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,zs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,js(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,zs(r,e.snapshotNode,i.oldSnap));else throw Ii("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class P1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const bv=new P1;class Ph{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),s=R1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function x1(t){return{filter:t}}function O1(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function A1(t,e,n,r,i){const s=new N1;let o,l;if(n.type===gt.OVERWRITE){const u=n;u.source.fromUser?o=Qc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=Hl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===gt.MERGE){const u=n;u.source.fromUser?o=b1(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Yc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===gt.ACK_USER_WRITE){const u=n;u.revert?o=U1(t,e,u.path,r,i,s):o=L1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===gt.LISTEN_COMPLETE)o=M1(t,e,n.path,r,s);else throw Ii("Unknown operation type: "+n.type);const a=s.getChanges();return D1(e,o,a),{viewCache:o,changes:a}}function D1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Wl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Rv(Wl(e)))}}function Lv(t,e,n,r,i,s){const o=e.eventCache;if(Vl(r,n)!=null)return e;{let l,a;if(M(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=_r(e),c=u instanceof x?u:x.EMPTY_NODE,d=Rh(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Bl(r,_r(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){I(Un(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=hm(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=H(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=hm(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Nh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return cs(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function Hl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=b(n);if(!a.isCompleteForPath(n)&&Un(n)>1)return e;const g=H(n),S=a.getNode().getImmediateChild(_).updateChild(g,r);_===".priority"?u=c.updatePriority(a.getNode(),S):u=c.updateChild(a.getNode(),_,S,g,bv,null)}const d=Nv(e,u,a.isFullyInitialized()||M(n),c.filtersNodes()),h=new Ph(i,d,s);return Lv(t,d,n,i,h,l)}function Qc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Ph(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=cs(e,u,!0,t.filter.filtersNodes());else{const d=b(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=cs(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=H(n),_=l.getNode().getImmediateChild(d);let g;if(M(h))g=r;else{const v=c.getCompleteChild(d);v!=null?yh(h)===".priority"&&v.getChild(wv(h)).isEmpty()?g=v:g=v.updateChild(h,r):g=x.EMPTY_NODE}if(_.equals(g))a=e;else{const v=t.filter.updateChild(l.getNode(),d,g,h,c,o);a=cs(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function fm(t,e){return t.eventCache.isCompleteForChild(e)}function b1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=Z(n,a);fm(e,b(c))&&(l=Qc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=Z(n,a);fm(e,b(c))||(l=Qc(t,l,c,u,i,s,o))}),l}function pm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Yc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new G(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),g=pm(t,_,h);a=Hl(t,a,new W(d),g,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const g=e.serverCache.getNode().getImmediateChild(d),v=pm(t,g,h);a=Hl(t,a,new W(d),v,i,s,o,l)}}),a}function L1(t,e,n,r,i,s,o){if(Vl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Hl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new G(null);return a.getNode().forEachChild(Jr,(c,d)=>{u=u.set(new W(c),d)}),Yc(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((c,d)=>{const h=Z(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Yc(t,e,n,u,i,s,l,o)}}function M1(t,e,n,r,i){const s=e.serverCache,o=Nv(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return Lv(t,o,n,r,bv,i)}function U1(t,e,n,r,i,s){let o;if(Vl(r,n)!=null)return e;{const l=new Ph(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||b(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Bl(r,_r(e));else{const d=e.serverCache.getNode();I(d instanceof x,"serverChildren would be complete if leaf node"),c=Rh(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=b(n);let d=Nh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,H(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,x.EMPTY_NODE,H(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bl(r,_r(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Vl(r,z())!=null,cs(e,u,o,t.filter.filtersNodes())}}/**
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
 */class F1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Sh(r.getIndex()),s=n1(r);this.processor_=x1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,l.getNode(),null),c=new Fn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Fn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ta(d,c),this.eventGenerator_=new u1(this.query_)}get query(){return this.query_}}function j1(t){return t.viewCache_.serverCache.getNode()}function z1(t){return Wl(t.viewCache_)}function $1(t,e){const n=_r(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function mm(t){return t.eventRegistrations_.length===0}function W1(t,e){t.eventRegistrations_.push(e)}function _m(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function gm(t,e,n,r){e.type===gt.MERGE&&e.source.queryId!==null&&(I(_r(t.viewCache_),"We should always have a full cache before handling merges"),I(Wl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=A1(t.processor_,i,e,n,r);return O1(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Mv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function B1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(s,o)=>{r.push(fi(s,o))}),n.isFullyInitialized()&&r.push(Rv(n.getNode())),Mv(t,r,n.getNode(),e)}function Mv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return c1(t.eventGenerator_,e,n,i)}/**
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
 */let Gl;class Uv{constructor(){this.views=new Map}}function V1(t){I(!Gl,"__referenceConstructor has already been defined"),Gl=t}function H1(){return I(Gl,"Reference.ts has not been loaded"),Gl}function G1(t){return t.views.size===0}function xh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),gm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(gm(o,e,n,r));return s}}function Fv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Bl(n,i?r:null),a=!1;l?a=!0:r instanceof x?(l=Rh(n,r),a=!1):(l=x.EMPTY_NODE,a=!1);const u=Ta(new Fn(l,a,!1),new Fn(r,i,!1));return new F1(e,u)}return o}function K1(t,e,n,r,i,s){const o=Fv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),W1(o,n),B1(o,n)}function q1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=jn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(_m(u,n,r)),mm(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(_m(a,n,r)),mm(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!jn(t)&&s.push(new(H1())(e._repo,e._path)),{removed:s,events:o}}function jv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const r of t.views.values())n=n||$1(r,e);return n}function zv(t,e){if(e._queryParams.loadsAllData())return Ra(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $v(t,e){return zv(t,e)!=null}function jn(t){return Ra(t)!=null}function Ra(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Kl;function Q1(t){I(!Kl,"__referenceConstructor has already been defined"),Kl=t}function Y1(){return I(Kl,"Reference.ts has not been loaded"),Kl}let X1=1;class ym{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=k1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wv(t,e,n,r,i){return p1(t.pendingWriteTree_,e,n,r,i),i?Ni(t,new mr(Ih(),e,n)):[]}function J1(t,e,n,r){m1(t.pendingWriteTree_,e,n,r);const i=G.fromObject(n);return Ni(t,new pi(Ih(),e,i))}function yn(t,e,n=!1){const r=_1(t.pendingWriteTree_,e);if(g1(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(z(),!0):we(r.children,o=>{s=s.set(new W(o),!0)}),Ni(t,new $l(r.path,s,n))}else return[]}function so(t,e,n){return Ni(t,new mr(Th(),e,n))}function Z1(t,e,n){const r=G.fromObject(n);return Ni(t,new pi(Th(),e,r))}function eR(t,e){return Ni(t,new Ws(Th(),e))}function tR(t,e,n){const r=Ah(t,n);if(r){const i=Dh(r),s=i.path,o=i.queryId,l=Ae(s,e),a=new Ws(kh(o),l);return bh(t,s,a)}else return[]}function ql(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||$v(o,e))){const a=q1(o,e,n,r);G1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>jn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=iR(h);for(let g=0;g<_.length;++g){const v=_[g],S=v.query,m=Gv(t,v);t.listenProvider_.startListening(hs(S),Bs(t,S),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(hs(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(Na(h));t.listenProvider_.stopListening(hs(h),_)}))}sR(t,u)}return l}function Bv(t,e,n,r){const i=Ah(t,r);if(i!=null){const s=Dh(i),o=s.path,l=s.queryId,a=Ae(o,e),u=new mr(kh(l),a,n);return bh(t,o,u)}else return[]}function nR(t,e,n,r){const i=Ah(t,r);if(i){const s=Dh(i),o=s.path,l=s.queryId,a=Ae(o,e),u=G.fromObject(n),c=new pi(kh(l),a,u);return bh(t,o,c)}else return[]}function Xc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const g=Ae(h,i);s=s||xn(_,g),o=o||jn(_)});let l=t.syncPointTree_.get(i);l?(o=o||jn(l),s=s||xn(l,z())):(l=new Uv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const v=xn(g,z());v&&(s=s.updateImmediateChild(_,v))}));const u=$v(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Na(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=oR();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=ka(t.pendingWriteTree_,i);let d=K1(l,e,n,c,s,a);if(!u&&!o&&!r){const h=zv(l,e);d=d.concat(lR(t,e,h))}return d}function Oh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),u=xn(l,a);if(u)return u});return Ov(i,e,s,n,!0)}function rR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Ae(u,n);r=r||xn(c,d)});let i=t.syncPointTree_.get(n);i?r=r||xn(i,z()):(i=new Uv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Fn(r,!0,!1):null,l=ka(t.pendingWriteTree_,e._path),a=Fv(i,e,l,s?o.getNode():x.EMPTY_NODE,s);return z1(a)}function Ni(t,e){return Vv(e,t.syncPointTree_,null,ka(t.pendingWriteTree_,z()))}function Vv(t,e,n,r){if(M(t.path))return Hv(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=xn(i,z()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Av(r,o);s=s.concat(Vv(l,a,u,c))}return i&&(s=s.concat(xh(i,t,r,n))),s}}function Hv(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=xn(i,z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Av(r,o),c=t.operationForChild(o);c&&(s=s.concat(Hv(c,l,a,u)))}),i&&(s=s.concat(xh(i,t,r,n))),s}function Gv(t,e){const n=e.query,r=Bs(t,n);return{hashFn:()=>(j1(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?tR(t,n._path,r):eR(t,n._path);{const s=ek(i,n);return ql(t,n,null,s)}}}}function Bs(t,e){const n=Na(e);return t.queryToTagMap.get(n)}function Na(t){return t._path.toString()+"$"+t._queryIdentifier}function Ah(t,e){return t.tagToQueryMap.get(e)}function Dh(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new W(t.substr(0,e))}}function bh(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=ka(t.pendingWriteTree_,e);return xh(r,n,i,null)}function iR(t){return t.fold((e,n,r)=>{if(n&&jn(n))return[Ra(n)];{let i=[];return n&&(i=jv(n)),we(r,(s,o)=>{i=i.concat(o)}),i}})}function hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Y1())(t._repo,t._path):t}function sR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Na(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function oR(){return X1++}function lR(t,e,n){const r=e._path,i=Bs(t,e),s=Gv(t,n),o=t.listenProvider_.startListening(hs(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!jn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!M(u)&&c&&jn(c))return[Ra(c).query];{let h=[];return c&&(h=h.concat(jv(c).map(_=>_.query))),we(d,(_,g)=>{h=h.concat(g)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(hs(c),Bs(t,c))}}return o}/**
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
 */class Lh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lh(n)}node(){return this.node_}}class Mh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Z(this.path_,e);return new Mh(this.syncTree_,n)}node(){return Oh(this.syncTree_,this.path_)}}const aR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vm=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cR(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},cR=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Kv=function(t,e,n,r){return Uh(e,new Mh(n,t),r)},qv=function(t,e,n){return Uh(t,new Lh(e),n)};function Uh(t,e,n){const r=t.getPriority().val(),i=vm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=vm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new me(l,ie(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(ee,(l,a)=>{const u=Uh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Fh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function jh(t,e){let n=e instanceof W?e:new W(e),r=t,i=b(n);for(;i!==null;){const s=ci(r.node.children,i)||{children:{},childCount:0};r=new Fh(i,r,s),n=H(n),i=b(n)}return r}function Pi(t){return t.node.value}function Qv(t,e){t.node.value=e,Jc(t)}function Yv(t){return t.node.childCount>0}function dR(t){return Pi(t)===void 0&&!Yv(t)}function Pa(t,e){we(t.node.children,(n,r)=>{e(new Fh(n,t,r))})}function Xv(t,e,n,r){n&&!r&&e(t),Pa(t,i=>{Xv(i,e,!0,r)}),n&&r&&e(t)}function hR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function oo(t){return new W(t.parent===null?t.name:oo(t.parent)+"/"+t.name)}function Jc(t){t.parent!==null&&fR(t.parent,t.name,t)}function fR(t,e,n){const r=dR(n),i=Lt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Jc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Jc(t))}/**
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
 */const pR=/[\[\].#$\/\u0000-\u001F\u007F]/,mR=/[\[\].#$\u0000-\u001F\u007F]/,Ru=10*1024*1024,zh=function(t){return typeof t=="string"&&t.length!==0&&!pR.test(t)},Jv=function(t){return typeof t=="string"&&t.length!==0&&!mR.test(t)},_R=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Jv(t)},Zv=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ca(t)||t&&typeof t=="object"&&Lt(t,".sv")},Ql=function(t,e,n,r){r&&e===void 0||xa(di(t,"value"),e,n)},xa=function(t,e,n){const r=n instanceof W?new bk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xn(r)+" with contents = "+e.toString());if(Ca(e))throw new Error(t+"contains "+e.toString()+" "+Xn(r));if(typeof e=="string"&&e.length>Ru/3&&Ea(e)>Ru)throw new Error(t+"contains a string greater than "+Ru+" utf8 bytes "+Xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(we(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Lk(r,o),xa(t,l,r),Mk(r)}),i&&s)throw new Error(t+' contains ".value" child '+Xn(r)+" in addition to actual children.")}},gR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Fs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!zh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Dk);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&st(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ew=function(t,e,n,r){if(r&&e===void 0)return;const i=di(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];we(e,(o,l)=>{const a=new W(o);if(xa(i,l,Z(n,a)),yh(a)===".priority"&&!Zv(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),gR(i,s)},yR=function(t,e,n){if(!(n&&e===void 0)){if(Ca(e))throw new Error(di(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Zv(e))throw new Error(di(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},tw=function(t,e,n,r){if(!(r&&n===void 0)&&!Jv(n))throw new Error(di(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tw(t,e,n,r)},Wr=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},wR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_R(n))throw new Error(di(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ER{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Oa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!vh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function nw(t,e,n){Oa(t,n),rw(t,r=>vh(r,e))}function ct(t,e,n){Oa(t,n),rw(t,r=>st(r,e)||st(e,r))}function rw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(SR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ir&&ye("event: "+n.toString()),ki(r)}}}/**
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
 */const CR="repo_interrupt",IR=25;class TR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ER,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zl(),this.transactionQueueTree_=new Fh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kR(t,e,n){if(t.stats_=_h(t.repoInfo_),t.forceRestClient_||ik())t.server_=new jl(t.repoInfo_,(r,i,s,o)=>{wm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Em(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ht(t.repoInfo_,e,(r,i,s,o)=>{wm(t,r,i,s,o)},r=>{Em(t,r)},r=>{RR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uk(t.repoInfo_,()=>new a1(t.stats_,t.server_)),t.infoData_=new r1,t.infoSyncTree_=new ym({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=so(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$h(t,"connected",!1),t.serverSyncTree_=new ym({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function iw(t){const n=t.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Aa(t){return aR({timestamp:iw(t)})}function wm(t,e,n,r,i){t.dataUpdateCount++;const s=new W(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Dl(n,u=>ie(u));o=nR(t.serverSyncTree_,s,a,i)}else{const a=ie(n);o=Bv(t.serverSyncTree_,s,a,i)}else if(r){const a=Dl(n,u=>ie(u));o=Z1(t.serverSyncTree_,s,a)}else{const a=ie(n);o=so(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=_i(t,s)),ct(t.eventQueue_,l,o)}function Em(t,e){$h(t,"connected",e),e===!1&&OR(t)}function RR(t,e){we(e,(n,r)=>{$h(t,n,r)})}function $h(t,e,n){const r=new W("/.info/"+e),i=ie(n);t.infoData_.updateSnapshot(r,i);const s=so(t.infoSyncTree_,r,i);ct(t.eventQueue_,r,s)}function Wh(t){return t.nextWriteId_++}function NR(t,e,n){const r=rR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ie(i).withIndex(e._queryParams.getIndex());Xc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=so(t.serverSyncTree_,e._path,s);else{const l=Bs(t.serverSyncTree_,e);o=Bv(t.serverSyncTree_,e._path,s,l)}return ct(t.eventQueue_,e._path,o),ql(t.serverSyncTree_,e,n,null,!0),s},i=>(lo(t,"get for query "+he(e)+" failed: "+i),Promise.reject(new Error(i))))}function PR(t,e,n,r,i){lo(t,"set",{path:e.toString(),value:n,priority:r});const s=Aa(t),o=ie(n,r),l=Oh(t.serverSyncTree_,e),a=qv(o,l,s),u=Wh(t),c=Wv(t.serverSyncTree_,e,a,u,!0);Oa(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const g=h==="ok";g||be("set at "+e+" failed: "+h);const v=yn(t.serverSyncTree_,u,!g);ct(t.eventQueue_,e,v),zn(t,i,h,_)});const d=Vh(t,e);_i(t,d),ct(t.eventQueue_,d,[])}function xR(t,e,n,r){lo(t,"update",{path:e.toString(),value:n});let i=!0;const s=Aa(t),o={};if(we(n,(l,a)=>{i=!1,o[l]=Kv(Z(e,l),ie(a),t.serverSyncTree_,s)}),i)ye("update() called with empty data.  Don't do anything."),zn(t,r,"ok",void 0);else{const l=Wh(t),a=J1(t.serverSyncTree_,e,o,l);Oa(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||be("update at "+e+" failed: "+u);const h=yn(t.serverSyncTree_,l,!d),_=h.length>0?_i(t,e):e;ct(t.eventQueue_,_,h),zn(t,r,u,c)}),we(n,u=>{const c=Vh(t,Z(e,u));_i(t,c)}),ct(t.eventQueue_,e,[])}}function OR(t){lo(t,"onDisconnectEvents");const e=Aa(t),n=zl();Hc(t.onDisconnect_,z(),(i,s)=>{const o=Kv(i,s,t.serverSyncTree_,e);Ri(n,i,o)});let r=[];Hc(n,z(),(i,s)=>{r=r.concat(so(t.serverSyncTree_,i,s));const o=Vh(t,i);_i(t,o)}),t.onDisconnect_=zl(),ct(t.eventQueue_,z(),r)}function AR(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Vc(t.onDisconnect_,e),zn(t,n,r,i)})}function Sm(t,e,n,r){const i=ie(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ri(t.onDisconnect_,e,i),zn(t,r,s,o)})}function DR(t,e,n,r,i){const s=ie(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,l)=>{o==="ok"&&Ri(t.onDisconnect_,e,s),zn(t,i,o,l)})}function bR(t,e,n,r){if(Al(n)){ye("onDisconnect().update() called with empty data.  Don't do anything."),zn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&we(n,(o,l)=>{const a=ie(l);Ri(t.onDisconnect_,Z(e,o),a)}),zn(t,r,i,s)})}function LR(t,e,n){let r;b(e._path)===".info"?r=Xc(t.infoSyncTree_,e,n):r=Xc(t.serverSyncTree_,e,n),nw(t.eventQueue_,e._path,r)}function Cm(t,e,n){let r;b(e._path)===".info"?r=ql(t.infoSyncTree_,e,n):r=ql(t.serverSyncTree_,e,n),nw(t.eventQueue_,e._path,r)}function MR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(CR)}function lo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ye(n,...e)}function zn(t,e,n,r){e&&ki(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sw(t,e,n){return Oh(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Bh(t,e=t.transactionQueueTree_){if(e||Da(t,e),Pi(e)){const n=lw(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&UR(t,oo(e),n)}else Yv(e)&&Pa(e,n=>{Bh(t,n)})}function UR(t,e,n){const r=n.map(u=>u.currentWriteId),i=sw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ae(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{lo(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(yn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Da(t,jh(t.transactionQueueTree_,e)),Bh(t,t.transactionQueueTree_),ct(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)ki(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{be("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}_i(t,e)}},o)}function _i(t,e){const n=ow(t,e),r=oo(n),i=lw(t,n);return FR(t,i,r),r}function FR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ae(n,a.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=IR)c=!0,d="maxretry",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=sw(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){xa("transaction failed: Data returned ",_,a.path);let g=ie(_);typeof _=="object"&&_!=null&&Lt(_,".priority")||(g=g.updatePriority(h.getPriority()));const S=a.currentWriteId,m=Aa(t),f=qv(g,h,m);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=f,a.currentWriteId=Wh(t),o.splice(o.indexOf(S),1),i=i.concat(Wv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(yn(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Da(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ki(r[l]);Bh(t,t.transactionQueueTree_)}function ow(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&Pi(r)===void 0;)r=jh(r,n),e=H(e),n=b(e);return r}function lw(t,e){const n=[];return aw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function aw(t,e,n){const r=Pi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Pa(e,i=>{aw(t,i,n)})}function Da(t,e){const n=Pi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Qv(e,n.length>0?n:void 0)}Pa(e,r=>{Da(t,r)})}function Vh(t,e){const n=oo(ow(t,e)),r=jh(t.transactionQueueTree_,e);return hR(r,i=>{Nu(t,i)}),Nu(t,r),Xv(r,i=>{Nu(t,i)}),n}function Nu(t,e){const n=Pi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Qv(e,void 0):n.length=s+1,ct(t.eventQueue_,oo(e),i);for(let o=0;o<r.length;o++)ki(r[o])}}/**
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
 */function jR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Im=function(t,e){const n=$R(t),r=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new W(n.pathString)}},$R=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=jR(t.substring(c,d)));const h=zR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const Tm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",WR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Tm.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Tm.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class uw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class cw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class dw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class BR{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Pt;return AR(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Wr("OnDisconnect.remove",this._path);const e=new Pt;return Sm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Wr("OnDisconnect.set",this._path),Ql("OnDisconnect.set",e,this._path,!1);const n=new Pt;return Sm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Wr("OnDisconnect.setWithPriority",this._path),Ql("OnDisconnect.setWithPriority",e,this._path,!1),yR("OnDisconnect.setWithPriority",n,!1);const r=new Pt;return DR(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Wr("OnDisconnect.update",this._path),ew("OnDisconnect.update",e,this._path,!1);const n=new Pt;return bR(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Hh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:yh(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=am(this._queryParams),n=ph(e);return n==="{}"?"default":n}get _queryObject(){return am(this._queryParams)}isEqual(e){if(e=Y(e),!(e instanceof Hh))return!1;const n=this._repo===e._repo,r=vh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ak(this._path)}}class Mt extends Hh{constructor(e,n){super(e,n,new Ch,!1)}get parent(){const e=wv(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new W(e),r=yi(this.ref,e);return new gi(this._node.getChild(n),r,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gi(i,yi(this.ref,r),ee)))}hasChild(e){const n=new W(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Et(t,e){return t=Y(t),t._checkNotDeleted("ref"),e!==void 0?yi(t._root,e):t._root}function yi(t,e){return t=Y(t),b(t._path)===null?vR("child","path",e,!1):tw("child","path",e,!1),new Mt(t._repo,Z(t._path,e))}function VR(t){return t=Y(t),new BR(t._repo,t._path)}function HR(t,e){t=Y(t),Wr("push",t._path),Ql("push",e,t._path,!0);const n=iw(t._repo),r=WR(n),i=yi(t,r),s=yi(t,r);let o;return e!=null?o=hw(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hw(t,e){t=Y(t),Wr("set",t._path),Ql("set",e,t._path,!1);const n=new Pt;return PR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Gh(t,e){ew("update",e,t._path,!1);const n=new Pt;return xR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Kh(t){t=Y(t);const e=new dw(()=>{}),n=new ba(e);return NR(t._repo,t,n).then(r=>new gi(r,new Mt(t._repo,t._path),t._queryParams.getIndex()))}class ba{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new uw("value",this,new gi(e.snapshotNode,new Mt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cw(this,e,n):null}matches(e){return e instanceof ba?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class qh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cw(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=yi(new Mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new uw(e.type,this,new gi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof qh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function GR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{Cm(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new dw(n,s||void 0),l=e==="value"?new ba(o):new qh(e,o);return LR(t._repo,t,l),()=>Cm(t._repo,t,l)}function Zc(t,e,n,r){return GR(t,"value",e,n,r)}V1(Mt);Q1(Mt);/**
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
 */const KR="FIREBASE_DATABASE_EMULATOR_HOST",ed={};let qR=!1;function QR(t,e,n,r){t.repoInfo_=new dv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function YR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Im(s,i),l=o.repoInfo,a,u;typeof process<"u"&&Vp&&(u=Vp[KR]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Im(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Xr(Xr.OWNER):new ok(t.name,t.options,e);wR("Invalid Firebase Database URL",o),M(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=JR(l,t,c,new sk(t.name,n));return new ZR(d,t)}function XR(t,e){const n=ed[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),MR(t),delete n[t.key]}function JR(t,e,n,r){let i=ed[e.name];i||(i={},ed[e.name]=i);let s=i[t.toURLString()];return s&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new TR(t,qR,n,r),i[t.toURLString()]=s,s}class ZR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function eN(t=Sa(),e){const n=to(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ch("database");r&&tN(n,...r)}return n}function tN(t,e,n,r={}){t=Y(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xr(Xr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Wy(r.mockUserToken,t.app.options.projectId);s=new Xr(o)}QR(i,e,n,s)}/**
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
 */function nN(t){VT(Sr),Mn(new Xt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return YR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),lt(Hp,Gp,t),lt(Hp,Gp,"esm2017")}/**
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
 */const rN={".sv":"timestamp"};function td(){return rN}Ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nN();function Qh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iN=fw,pw=new eo("auth","Firebase",fw());/**
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
 */const Yl=new hh("@firebase/auth");function sN(t,...e){Yl.logLevel<=V.WARN&&Yl.warn(`Auth (${Sr}): ${t}`,...e)}function Jo(t,...e){Yl.logLevel<=V.ERROR&&Yl.error(`Auth (${Sr}): ${t}`,...e)}/**
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
 */function It(t,...e){throw Yh(t,...e)}function Dt(t,...e){return Yh(t,...e)}function oN(t,e,n){const r=Object.assign(Object.assign({},iN()),{[e]:n});return new eo("auth","Firebase",r).create(e,{appName:t.name})}function Yh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pw.create(t,...e)}function O(t,e,...n){if(!t)throw Yh(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jo(e),new Error(e)}function Zt(t,e){t||Wt(e)}/**
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
 */function nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lN(){return km()==="http:"||km()==="https:"}function km(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lN()||CI()||"connection"in navigator)?navigator.onLine:!0}function uN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=dh()||By()}get(){return aN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xh(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dN=new ao(3e4,6e4);function Vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nn(t,e,n,r,i={}){return _w(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ti(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),mw.fetch()(gw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function _w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cN),e);try{const i=new fN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Mo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oN(t,c,u);It(t,c)}}catch(i){if(i instanceof tn)throw i;It(t,"network-request-failed",{message:String(i)})}}async function uo(t,e,n,r,i={}){const s=await nn(t,e,n,r,i);return"mfaPendingCredential"in s&&It(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xh(t.config,i):`${t.config.apiScheme}://${i}`}function hN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),dN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}function Rm(t){return t!==void 0&&t.enterprise!==void 0}class pN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mN(t,e){return nn(t,"GET","/v2/recaptchaConfig",Vn(t,e))}/**
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
 */async function _N(t,e){return nn(t,"POST","/v1/accounts:delete",e)}async function gN(t,e){return nn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yN(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=Jh(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fs(Pu(i.auth_time)),issuedAtTime:fs(Pu(i.iat)),expirationTime:fs(Pu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pu(t){return Number(t)*1e3}function Jh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ol(n);return i?JSON.parse(i):(Jo("Failed to decode base64 JWT payload"),null)}catch(i){return Jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vN(t){const e=Jh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&wN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vi(t,gN(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?IN(s.providerUserInfo):[],l=CN(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function SN(t){const e=Y(t);await Xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function IN(t){return t.map(e=>{var{providerId:n}=e,r=Qh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TN(t,e){const n=await _w(t,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",mw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kN(t,e){return nn(t,"POST","/v2/accounts:revokeToken",Vn(t,e))}/**
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
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vs;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function sn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yN(this,e)}reload(){return SN(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vi(this,_N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:y,isAnonymous:C,providerData:T,stsTokenManager:R}=n;O(p&&R,e,"internal-error");const k=Vs.fromJSON(this.name,R);O(typeof p=="string",e,"internal-error"),sn(d,e.name),sn(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),sn(_,e.name),sn(g,e.name),sn(v,e.name),sn(S,e.name),sn(m,e.name),sn(f,e.name);const B=new sr({uid:p,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:C,photoURL:g,phoneNumber:_,tenantId:v,stsTokenManager:k,createdAt:m,lastLoginAt:f});return T&&Array.isArray(T)&&(B.providerData=T.map(D=>Object.assign({},D))),S&&(B._redirectEventId=S),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vs;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xl(s),s}}/**
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
 */const Nm=new Map;function Bt(t){Zt(t instanceof Function,"Expected a class definition");let e=Nm.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nm.set(t,e),e)}/**
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
 */class vw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vw.type="NONE";const Pm=vw;/**
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
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(Bt(Pm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bt(Pm);const o=Zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=sr._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Zr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zr(s,e,r))}}/**
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
 */function xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ww(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iw(e))return"Blackberry";if(Tw(e))return"Webos";if(Zh(e))return"Safari";if((e.includes("chrome/")||Ew(e))&&!e.includes("edge/"))return"Chrome";if(Cw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ww(t=Pe()){return/firefox\//i.test(t)}function Zh(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ew(t=Pe()){return/crios\//i.test(t)}function Sw(t=Pe()){return/iemobile/i.test(t)}function Cw(t=Pe()){return/android/i.test(t)}function Iw(t=Pe()){return/blackberry/i.test(t)}function Tw(t=Pe()){return/webos/i.test(t)}function La(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RN(t=Pe()){var e;return La(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NN(){return II()&&document.documentMode===10}function kw(t=Pe()){return La(t)||Cw(t)||Tw(t)||Iw(t)||/windows phone/i.test(t)||Sw(t)}function PN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Rw(t,e=[]){let n;switch(t){case"Browser":n=xm(Pe());break;case"Worker":n=`${xm(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
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
 */class xN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ON(t,e={}){return nn(t,"GET","/v2/passwordPolicy",Vn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const AN=6;class DN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class bN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Om(this),this.idTokenSubscription=new Om(this),this.beforeStateQueue=new xN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Y(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ON(this),n=new DN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return Y(t)}class Om{constructor(e){this.auth=e,this.observer=null,this.addObserver=DI(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function LN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Nw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LN().appendChild(r)})}function MN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UN="https://www.google.com/recaptcha/enterprise.js?render=",FN="recaptcha-enterprise",jN="NO_RECAPTCHA";class zN{constructor(e){this.type=FN,this.auth=Tr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{mN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new pN(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Rm(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(jN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Rm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Nw(UN+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Am(t,e,n,r=!1){const i=new zN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Am(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Am(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function $N(t,e){const n=to(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(bl(s,e??{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function WN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BN(t,e,n){const r=Tr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Pw(e),{host:o,port:l}=VN(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||HN()}function Pw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VN(t){const e=Pw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dm(o)}}}function Dm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function GN(t,e){return nn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function KN(t,e){return uo(t,"POST","/v1/accounts:signInWithPassword",Vn(t,e))}/**
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
 */async function qN(t,e){return uo(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}async function QN(t,e){return uo(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}/**
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
 */class Hs extends ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rd(e,n,"signInWithPassword",KN);case"emailLink":return qN(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rd(e,r,"signUpPassword",GN);case"emailLink":return QN(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ei(t,e){return uo(t,"POST","/v1/accounts:signInWithIdp",Vn(t,e))}/**
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
 */const YN="http://localhost";class gr extends ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:YN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
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
 */function XN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JN(t){const e=Ji(Zi(t)).link,n=e?Ji(Zi(e)).deep_link_id:null,r=Ji(Zi(t)).deep_link_id;return(r?Ji(Zi(r)).link:null)||r||n||e||t}class tf{constructor(e){var n,r,i,s,o,l;const a=Ji(Zi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=XN((i=a.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=JN(e);try{return new tf(n)}catch{return null}}}/**
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
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,n){return Hs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tf.parseLink(n);return O(r,"argument-error"),Hs._fromEmailAndCode(e,r.code,r.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends xw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends co{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class hn extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class fn extends co{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class pn extends co{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function ZN(t,e){return uo(t,"POST","/v1/accounts:signUp",Vn(t,e))}/**
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
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=bm(r);return new yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bm(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jl extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jl(e,n,r,i)}}function Ow(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jl._fromErrorAndOperation(t,s,e,r):s})}async function eP(t,e,n=!1){const r=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
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
 */async function tP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await vi(t,Ow(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Jh(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
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
 */async function Aw(t,e,n=!1){const r="signIn",i=await Ow(t,r,e),s=await yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nP(t,e){return Aw(Tr(t),e)}/**
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
 */async function Dw(t){const e=Tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rP(t,e,n){const r=Tr(t),o=await rd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZN).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Dw(t),a}),l=await yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function iP(t,e,n){return nP(Y(t),xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dw(t),r})}/**
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
 */async function sP(t,e){return nn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function oP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vi(r,sP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function lP(t,e){return Y(t).setPersistence(e)}function aP(t,e,n,r){return Y(t).onIdTokenChanged(e,n,r)}function uP(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}function cP(t,e,n,r){return Y(t).onAuthStateChanged(e,n,r)}function bw(t){return Y(t).signOut()}const Zl="__sak";/**
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
 */class Lw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zl,"1"),this.storage.removeItem(Zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dP(){const t=Pe();return Zh(t)||La(t)}const hP=1e3,fP=10;class Mw extends Lw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dP()&&PN(),this.fallbackToPolling=kw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mw.type="LOCAL";const pP=Mw;/**
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
 */class Uw extends Lw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uw.type="SESSION";const nf=Uw;/**
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
 */function mP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await mP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function rf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _P{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=rf("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bt(){return window}function gP(t){bt().location.href=t}/**
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
 */function Fw(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function yP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wP(){return Fw()?self:null}/**
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
 */const jw="firebaseLocalStorageDb",EP=1,ea="firebaseLocalStorage",zw="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(t,e){return t.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function SP(){const t=indexedDB.deleteDatabase(jw);return new ho(t).toPromise()}function id(){const t=indexedDB.open(jw,EP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ea,{keyPath:zw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ea)?e(r):(r.close(),await SP(),e(await id()))})})}async function Lm(t,e,n){const r=Ua(t,!0).put({[zw]:e,value:n});return new ho(r).toPromise()}async function CP(t,e){const n=Ua(t,!1).get(e),r=await new ho(n).toPromise();return r===void 0?null:r.value}function Mm(t,e){const n=Ua(t,!0).delete(e);return new ho(n).toPromise()}const IP=800,TP=3;class $w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(wP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yP(),!this.activeServiceWorker)return;this.sender=new _P(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await Lm(e,Zl,"1"),await Mm(e,Zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ua(i,!1).getAll();return new ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$w.type="LOCAL";const kP=$w;new ao(3e4,6e4);/**
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
 */function RP(t,e){return e?Bt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sf extends ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NP(t){return Aw(t.auth,new sf(t),t.bypassAuthState)}function PP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),tP(n,new sf(t),t.bypassAuthState)}async function xP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),eP(n,new sf(t),t.bypassAuthState)}/**
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
 */class Ww{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NP;case"linkViaPopup":case"linkViaRedirect":return xP;case"reauthViaPopup":case"reauthViaRedirect":return PP;default:It(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OP=new ao(2e3,1e4);class Br extends Ww{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}Br.currentPopupAction=null;/**
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
 */const AP="pendingRedirect",el=new Map;class DP extends Ww{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const r=await bP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bP(t,e){const n=UP(e),r=MP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LP(t,e){el.set(t._key(),e)}function MP(t){return Bt(t._redirectPersistence)}function UP(t){return Zo(AP,t.config.apiKey,t.name)}async function FP(t,e,n=!1){const r=Tr(t),i=RP(r,e),o=await new DP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jP=10*60*1e3;class zP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$P(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $P(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(t);default:return!1}}/**
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
 */async function WP(t,e={}){return nn(t,"GET","/v1/projects",e)}/**
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
 */const BP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VP=/^https?/;async function HP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WP(t);for(const n of e)try{if(GP(n))return}catch{}It(t,"unauthorized-domain")}function GP(t){const e=nd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VP.test(n))return!1;if(BP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const KP=new ao(3e4,6e4);function Fm(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qP(t){return new Promise((e,n)=>{var r,i,s;function o(){Fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fm(),n(Dt(t,"network-request-failed"))},timeout:KP.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bt().gapi)===null||s===void 0)&&s.load)o();else{const l=MN("iframefcb");return bt()[l]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},Nw(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw tl=null,e})}let tl=null;function QP(t){return tl=tl||qP(t),tl}/**
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
 */const YP=new ao(5e3,15e3),XP="__/auth/iframe",JP="emulator/auth/iframe",ZP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tx(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xh(e,JP):`https://${t.config.authDomain}/${XP}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},i=ex.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ti(r).slice(1)}`}async function nx(t){const e=await QP(t),n=bt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:tx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),l=bt().setTimeout(()=>{s(o)},YP.get());function a(){bt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const rx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ix=500,sx=600,ox="_blank",lx="http://localhost";class jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ax(t,e,n,r=ix,i=sx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},rx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(l=Ew(u)?ox:n),ww(u)&&(e=e||lx,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,g])=>`${h}${_}=${g},`,"");if(RN(u)&&l!=="_self")return ux(e||"",l),new jm(null);const d=window.open(e||"",l,c);O(d,t,"popup-blocked");try{d.focus()}catch{}return new jm(d)}function ux(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cx="__/auth/handler",dx="emulator/auth/handler",hx=encodeURIComponent("fac");async function zm(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:i};if(e instanceof xw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Al(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof co){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${hx}=${encodeURIComponent(a)}`:"";return`${fx(t)}?${Ti(l).slice(1)}${u}`}function fx({config:t}){return t.emulator?Xh(t,dx):`https://${t.authDomain}/${cx}`}/**
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
 */const xu="webStorageSupport";class px{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nf,this._completeRedirectFn=FP,this._overrideRedirectResult=LP}async _openPopup(e,n,r,i){var s;Zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zm(e,n,r,nd(),i);return ax(e,o,rf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zm(e,n,r,nd(),i);return gP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nx(e),r=new zP(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xu,{type:xu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xu];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kw()||Zh()||La()}}const mx=px;var $m="@firebase/auth",Wm="1.5.1";/**
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
 */class _x{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yx(t){Mn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rw(t)},u=new bN(r,i,s,a);return WN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new Xt("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(r=>new _x(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt($m,Wm,gx(t)),lt($m,Wm,"esm2017")}/**
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
 */const vx=5*60,wx=$y("authIdTokenMaxAge")||vx;let Bm=null;const Ex=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wx)return;const i=n==null?void 0:n.token;Bm!==i&&(Bm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sx(t=Sa()){const e=to(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$N(t,{popupRedirectResolver:mx,persistence:[kP,pP,nf]}),r=$y("authTokenSyncURL");if(r){const s=Ex(r);uP(n,s,()=>s(n.currentUser)),aP(n,o=>s(o))}const i=jy("auth");return i&&BN(n,`http://${i}`),n}yx("Browser");/**
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
 */const Vw="functions";/**
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
 */class Cx{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const sd="us-central1";class Ix{constructor(e,n,r,i,s=sd,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Cx(n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin,this.region=sd}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Tx(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const Vm="@firebase/functions",Hm="0.11.0";/**
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
 */const kx="auth-internal",Rx="app-check-internal",Nx="messaging-internal";function Px(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(kx),l=r.getProvider(Nx),a=r.getProvider(Rx);return new Ix(s,o,l,a,i,t)};Mn(new Xt(Vw,n,"PUBLIC").setMultipleInstances(!0)),lt(Vm,Hm,e),lt(Vm,Hm,"esm2017")}/**
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
 */function xx(t=Sa(),e=sd){const r=to(Y(t),Vw).getImmediate({identifier:e}),i=ch("functions");return i&&Ox(r,...i),r}function Ox(t,e,n){Tx(Y(t),e,n)}Px(fetch.bind(self));/**
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
 */const Hw="firebasestorage.googleapis.com",Gw="storageBucket",Ax=2*60*1e3,Dx=10*60*1e3;/**
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
 */class oe extends tn{constructor(e,n,r=0){super(Ou(e),`Firebase Storage: ${n} (${Ou(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ou(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function Ou(t){return"storage/"+t}function of(){const t="An unknown error occurred, please check the error payload for server response.";return new oe(se.UNKNOWN,t)}function bx(t){return new oe(se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Lx(t){return new oe(se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Mx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new oe(se.UNAUTHENTICATED,t)}function Ux(){return new oe(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Fx(t){return new oe(se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function jx(){return new oe(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zx(){return new oe(se.CANCELED,"User canceled the upload/download.")}function $x(t){return new oe(se.INVALID_URL,"Invalid URL '"+t+"'.")}function Wx(t){return new oe(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Bx(){return new oe(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gw+"' property when initializing the app?")}function Vx(){return new oe(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Hx(){return new oe(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gx(t){return new oe(se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function od(t){return new oe(se.INVALID_ARGUMENT,t)}function Kw(){return new oe(se.APP_DELETED,"The Firebase app was deleted.")}function Kx(t){return new oe(se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ps(t,e){return new oe(se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hi(t){throw new oe(se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Qe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qe.makeFromUrl(e,n)}catch{return new Qe(e,"")}if(r.path==="")return r;throw Wx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),g={bucket:1,path:3},v=n===Hw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${S}`,"i"),p=[{regex:l,indices:a,postModify:s},{regex:_,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<p.length;y++){const C=p[y],T=C.regex.exec(e);if(T){const R=T[C.indices.bucket];let k=T[C.indices.path];k||(k=""),r=new Qe(R,k),C.postModify(r);break}}if(r==null)throw $x(e);return r}}class qx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Qx(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...S){u||(u=!0,e.apply(null,S))}function d(S){i=setTimeout(()=>{i=null,t(_,a())},S)}function h(){s&&clearTimeout(s)}function _(S,...m){if(u){h();return}if(S){h(),c.call(null,S,...m);return}if(a()||o){h(),c.call(null,S,...m);return}r<64&&(r*=2);let p;l===1?(l=2,p=0):p=(r+Math.random())*1e3,d(p)}let g=!1;function v(S){g||(g=!0,h(),!u&&(i!==null?(S||(l=2),clearTimeout(i),d(0)):S||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Yx(t){t(!1)}/**
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
 */function Xx(t){return t!==void 0}function Jx(t){return typeof t=="object"&&!Array.isArray(t)}function lf(t){return typeof t=="string"||t instanceof String}function Gm(t){return af()&&t instanceof Blob}function af(){return typeof Blob<"u"}function Km(t,e,n,r){if(r<e)throw od(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw od(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function uf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var or;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(or||(or={}));/**
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
 */function Zx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class eO{constructor(e,n,r,i,s,o,l,a,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,g)=>{this.resolve_=_,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Uo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===or.NO_ERROR,a=s.getStatus();if(!l||Zx(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===or.ABORT;r(!1,new Uo(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Uo(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Xx(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=of();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?Kw():zx();o(a)}else{const a=jx();o(a)}};this.canceled_?n(!1,new Uo(!1,null,!0)):this.backoffId_=Qx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function tO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function iO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sO(t,e,n,r,i,s,o=!0){const l=qw(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return rO(u,e),tO(u,n),nO(u,s),iO(u,r),new eO(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function oO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lO(...t){const e=oO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(af())return new Blob(t);throw new oe(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function uO(t){if(typeof atob>"u")throw Gx("base-64");return atob(t)}/**
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
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Au{constructor(e,n){this.data=e,this.contentType=n||null}}function cO(t,e){switch(t){case xt.RAW:return new Au(Qw(e));case xt.BASE64:case xt.BASE64URL:return new Au(Yw(t,e));case xt.DATA_URL:return new Au(hO(e),fO(e))}throw of()}function Qw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dO(t){let e;try{e=decodeURIComponent(t)}catch{throw ps(xt.DATA_URL,"Malformed data URL.")}return Qw(e)}function Yw(t,e){switch(t){case xt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ps(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ps(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=uO(e)}catch(i){throw i.message.includes("polyfill")?i:ps(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Xw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ps(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=pO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hO(t){const e=new Xw(t);return e.base64?Yw(xt.BASE64,e.rest):dO(e.rest)}function fO(t){return new Xw(t).contentType}function pO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class mn{constructor(e,n){let r=0,i="";Gm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Gm(this.data_)){const r=this.data_,i=aO(r,e,n);return i===null?null:new mn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mn(r,!0)}}static getBlob(...e){if(af()){const n=e.map(r=>r instanceof mn?r.data_:r);return new mn(lO.apply(null,n))}else{const n=e.map(o=>lf(o)?cO(xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new mn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Jw(t){let e;try{e=JSON.parse(t)}catch{return null}return Jx(e)?e:null}/**
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
 */function mO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _O(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Zw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gO(t,e){return e}class xe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gO}}let Fo=null;function yO(t){return!lf(t)||t.length<2?t:Zw(t)}function e0(){if(Fo)return Fo;const t=[];t.push(new xe("bucket")),t.push(new xe("generation")),t.push(new xe("metageneration")),t.push(new xe("name","fullPath",!0));function e(s,o){return yO(o)}const n=new xe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new xe("size");return i.xform=r,t.push(i),t.push(new xe("timeCreated")),t.push(new xe("updated")),t.push(new xe("md5Hash",null,!0)),t.push(new xe("cacheControl",null,!0)),t.push(new xe("contentDisposition",null,!0)),t.push(new xe("contentEncoding",null,!0)),t.push(new xe("contentLanguage",null,!0)),t.push(new xe("contentType",null,!0)),t.push(new xe("metadata","customMetadata",!0)),Fo=t,Fo}function vO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Qe(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function wO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return vO(r,t),r}function t0(t,e,n){const r=Jw(e);return r===null?null:wO(t,r,n)}function EO(t,e,n,r){const i=Jw(e);if(i===null||!lf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),_=uf(h,n,r),g=qw({alt:"media",token:u});return _+g})[0]}function SO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class n0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function r0(t){if(!t)throw of()}function CO(t,e){function n(r,i){const s=t0(t,i,e);return r0(s!==null),s}return n}function IO(t,e){function n(r,i){const s=t0(t,i,e);return r0(s!==null),EO(s,i,t.host,t._protocol)}return n}function i0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Ux():i=Mx():n.getStatus()===402?i=Lx(t.bucket):n.getStatus()===403?i=Fx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function TO(t){const e=i0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=bx(t.path)),s.serverResponse=i.serverResponse,s}return n}function kO(t,e,n){const r=e.fullServerUrl(),i=uf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new n0(i,s,IO(t,n),o);return l.errorHandler=TO(e),l}function RO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function NO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RO(null,e)),r}function PO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let p="";for(let y=0;y<2;y++)p=p+Math.random().toString().slice(2);return p}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=NO(e,r,i),c=SO(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",_=mn.getBlob(d,r,h);if(_===null)throw Vx();const g={name:u.fullPath},v=uf(s,t.host,t._protocol),S="POST",m=t.maxUploadRetryTime,f=new n0(v,S,CO(t,n),m);return f.urlParams=g,f.headers=o,f.body=_.uploadData(),f.errorHandler=i0(e),f}class xO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Hi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OO extends xO{initXhr(){this.xhr_.responseType="text"}}function s0(){return new OO}/**
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
 */class vr{constructor(e,n){this._service=e,n instanceof Qe?this._location=n:this._location=Qe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vr(e,n)}get root(){const e=new Qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zw(this._location.path)}get storage(){return this._service}get parent(){const e=mO(this._location.path);if(e===null)return null;const n=new Qe(this._location.bucket,e);return new vr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Kx(e)}}function AO(t,e,n){t._throwIfRoot("uploadBytes");const r=PO(t.storage,t._location,e0(),new mn(e,!0),n);return t.storage.makeRequestWithTokens(r,s0).then(i=>({metadata:i,ref:t}))}function DO(t){t._throwIfRoot("getDownloadURL");const e=kO(t.storage,t._location,e0());return t.storage.makeRequestWithTokens(e,s0).then(n=>{if(n===null)throw Hx();return n})}function bO(t,e){const n=_O(t._location.path,e),r=new Qe(t._location.bucket,n);return new vr(t.storage,r)}/**
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
 */function LO(t){return/^[A-Za-z]+:\/\//.test(t)}function MO(t,e){return new vr(t,e)}function o0(t,e){if(t instanceof cf){const n=t;if(n._bucket==null)throw Bx();const r=new vr(n,n._bucket);return e!=null?o0(r,e):r}else return e!==void 0?bO(t,e):t}function UO(t,e){if(e&&LO(e)){if(t instanceof cf)return MO(t,e);throw od("To use ref(service, url), the first argument must be a Storage instance.")}else return o0(t,e)}function qm(t,e){const n=e==null?void 0:e[Gw];return n==null?null:Qe.makeFromBucketSpec(n,t)}function FO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Wy(i,t.app.options.projectId))}class cf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Hw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ax,this._maxUploadRetryTime=Dx,this._requests=new Set,i!=null?this._bucket=Qe.makeFromBucketSpec(i,this._host):this._bucket=qm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qe.makeFromBucketSpec(this._url,e):this._bucket=qm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Km("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Km("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new qx(Kw());{const o=sO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Qm="@firebase/storage",Ym="0.12.0";/**
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
 */const l0="storage";function jO(t,e,n){return t=Y(t),AO(t,e,n)}function zO(t){return t=Y(t),DO(t)}function $O(t,e){return t=Y(t),UO(t,e)}function WO(t=Sa(),e){t=Y(t);const r=to(t,l0).getImmediate({identifier:e}),i=ch("storage");return i&&BO(r,...i),r}function BO(t,e,n,r={}){FO(t,e,n,r)}function VO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new cf(n,r,i,e,Sr)}function HO(){Mn(new Xt(l0,VO,"PUBLIC").setMultipleInstances(!0)),lt(Qm,Ym,""),lt(Qm,Ym,"esm2017")}HO();const GO={apiKey:"AIzaSyBshhkfIbVHWMQnp9O2-GHnzjc5GmU1G_Q",authDomain:"realtimechat-cbd7c.firebaseapp.com",databaseURL:"https://realtimechat-cbd7c-default-rtdb.firebaseio.com",projectId:"realtimechat-cbd7c",storageBucket:"realtimechat-cbd7c.appspot.com",messagingSenderId:"72961990118",appId:"1:72961990118:web:3d71a66fcbfc4f7c620a27",measurementId:"G-J86JR38K0E"},Fa=qy(GO),St=eN(Fa),wi=Sx(Fa);xx(Fa);const KO=WO(Fa),qO="_message_list_1nohu_1",QO="_message_1nohu_1",YO="_profile_1nohu_49",XO="_nickname_1nohu_79",JO="_text_1nohu_89",ZO="_time_1nohu_107",eA="_current_user_1nohu_119",on={message_list:qO,message:QO,profile:YO,nickname:XO,text:JO,time:ZO,current_user:eA},tA=()=>{const[t,e]=de.useState([]),[n,r]=de.useState({}),i=de.useRef(null),s=Ln(o=>o.user.currentUser);return de.useEffect(()=>{const o=async a=>{const u=Et(St,`users/${a}`),c=await Kh(u);if(c.exists()){const d=c.val();r(h=>({...h,[a]:d.profileURL||"img/default_profile.png"}))}},l=Et(St,"messages");Zc(l,a=>{const u=a.val(),c=[];for(const d in u)c.push({id:d,...u[d]}),o(u[d].uid);e(c)})},[]),de.useEffect(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[t]),w.jsx("div",{ref:i,className:on.message_list,children:t.map(o=>w.jsxs("div",{className:`${on.message} ${o.uid===s.uid?on.current_user:""}`,children:[w.jsx("div",{className:on.profile,children:w.jsx("img",{src:n[o.uid]||"img/default_profile.png",alt:"Profile"})}),w.jsxs("div",{className:on.content,children:[w.jsx("p",{className:on.nickname,children:o.nickname}),w.jsx("p",{className:on.text,children:o.text}),w.jsx("p",{className:on.time,children:new Date(o.timestamp).toLocaleString()})]})]},o.id))})},nA="_message_input_1orjg_1",rA={message_input:nA},iA=()=>{const[t,e]=de.useState(""),n=Ln(s=>s.user.currentUser),r=()=>{if(t.trim()!==""&&n){const s=Et(St,"messages");HR(s,{text:t,uid:n.uid,nickname:n.displayName,timestamp:Date.now()}),e("")}},i=s=>{s.key==="Enter"&&!s.shiftKey&&(r(),s.preventDefault())};return w.jsxs("div",{className:rA.message_input,children:[w.jsx("input",{type:"text",value:t,onKeyDown:i,onChange:s=>e(s.target.value),placeholder:"메시지를 입력해주세요"}),w.jsx("button",{onClick:r,children:"발송"})]})},sA="_mobile_menu_1r54r_1",oA="_hamburger_wrap_1r54r_17",lA="_checkbox_1r54r_31",aA="_hamburger_1r54r_17",uA="_active_1r54r_199",Gi={mobile_menu:sA,hamburger_wrap:oA,checkbox:lA,hamburger:aA,active:uA};var a0={exports:{}},cA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dA=cA,hA=dA;function u0(){}function c0(){}c0.resetWarningCache=u0;var fA=function(){function t(r,i,s,o,l,a){if(a!==hA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c0,resetWarningCache:u0};return n.PropTypes=n,n};a0.exports=fA();var pA=a0.exports;const Gs=Zm(pA),d0=({onToggleMenu:t,isOpen:e})=>w.jsx("div",{className:`${Gi.mobile_menu} ${e?Gi.active:""}`,children:w.jsxs("div",{className:Gi.hamburger_wrap,children:[w.jsx("input",{type:"checkbox",id:"checkbox",autoComplete:"off",className:Gi.checkbox}),w.jsx("label",{htmlFor:"checkbox",children:w.jsxs("div",{className:Gi.hamburger,onClick:t,children:[w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{})]})})]})});d0.propTypes={onToggleMenu:Gs.func.isRequired,isOpen:Gs.bool.isRequired};const mA="_profile_jfqku_1",_A="_profile_img_jfqku_17",gA="_nickname_jfqku_43",yA="_profile_change_jfqku_53",jo={profile:mA,profile_img:_A,nickname:gA,profile_change:yA},vA=()=>{const t=Ln(r=>r.user.currentUser),e=Zs(),n=async r=>{const i=r.target.files[0];if(!(!i||!t))try{const s=$O(KO,`profileImages/${t.uid}`);await jO(s,i);const o=await zO(s);await Gh(Et(St,`users/${t.uid}`),{profileURL:o}),e(Dc({...t,profileURL:o}))}catch(s){console.error("Failed to upload profile image",s)}};return w.jsxs("div",{className:jo.profile,children:[w.jsxs("div",{className:jo.profile_img,children:[w.jsx("img",{src:t.profileURL||"img/default_profile.png",alt:"Profile"}),w.jsxs("div",{className:jo.profile_change,children:[w.jsx("label",{htmlFor:"profileImageInput",children:w.jsx("img",{src:"img/camera_icon.png",alt:"Change profile"})}),w.jsx("input",{id:"profileImageInput",type:"file",hidden:!0,onChange:n})]})]}),t&&w.jsx("p",{className:jo.nickname,children:t.displayName})]})},wA="_online_users_xik4z_1",EA="_online_users_list_xik4z_23",SA="_userinfo_xik4z_51",CA="_profile_xik4z_61",IA="_nickname_xik4z_71",TA="_dot_xik4z_79",kA="_pulse_xik4z_1",Nr={online_users:wA,online_users_list:EA,userinfo:SA,profile:CA,nickname:IA,dot:TA,pulse:kA},RA=()=>{const[t,e]=de.useState([]),n=Ln(r=>r.user.currentUser);return de.useEffect(()=>{if(!n)return;const r=Et(St,`/users/${n.uid}`),i=Et(St,".info/connected"),s={status:!1,last_changed:td()},o={status:!0,last_changed:td()};Zc(i,a=>{a.val()!==!1&&VR(r).update(s).then(()=>{Gh(r,o)})});const l=Et(St,"/users");Zc(l,a=>{const u=a.val(),d=Object.keys(u).filter(h=>u[h].status===!0).map(h=>({uid:h,...u[h]})).sort((h,_)=>h.uid===n.uid?-1:_.uid===n.uid?1:0);e(d)})},[n]),w.jsxs("div",{className:Nr.online_users,children:[w.jsxs("h2",{children:["현재 접속자 (",t.length,"명)"]}),w.jsx("ul",{className:Nr.online_users_list,children:t.map(r=>w.jsxs("li",{children:[w.jsxs("div",{className:Nr.userinfo,children:[w.jsx("img",{className:Nr.profile,src:r.profileURL||"img/default_profile.png",alt:`${r.nickname}'s profile`}),w.jsx("p",{className:Nr.nickname,children:r.nickname})]}),w.jsx("span",{className:Nr.dot})]},r.uid))})]})},NA="_menu_1dxig_1",PA={menu:NA},h0=({onLogout:t})=>w.jsxs("div",{className:PA.menu,children:[w.jsx("div",{onClick:t,children:w.jsx("i",{className:"fa-solid fa-arrow-right-from-bracket"})}),w.jsx("div",{children:w.jsx("i",{className:"fa-solid fa-gear"})}),w.jsx("div",{children:w.jsx("i",{className:"fa-solid fa-bell"})})]});h0.propTypes={onLogout:Gs.func.isRequired};const xA="_sidebar_j31qd_1",OA="_active_j31qd_71",Xm={sidebar:xA,active:OA},f0=({onLogout:t,isOpen:e})=>w.jsx("div",{className:`${Xm.sidebar} ${e?Xm.active:""}`,children:w.jsxs("article",{children:[w.jsx(vA,{}),w.jsx(RA,{}),w.jsx(h0,{onLogout:t})]})});f0.propTypes={onLogout:Gs.func.isRequired,isOpen:Gs.bool.isRequired};const AA="_chat_room_1rqyb_1",DA="_message_1rqyb_23",Jm={chat_room:AA,message:DA},bA=()=>{const t=Zs(),e=Ln(i=>i.ui.isMenuOpen),n=Ln(i=>i.user.currentUser),r=async()=>{try{await Gh(Et(St,`/users/${n.uid}`),{status:!1,last_changed:td()}),await bw(wi),console.log("Logged out successfully!")}catch(i){console.error("Logout failed",i)}};return w.jsxs("div",{className:Jm.chat_room,children:[w.jsx(d0,{onToggleMenu:()=>t(VC()),isOpen:e}),w.jsx(f0,{isOpen:e,onLogout:r}),w.jsxs("div",{className:Jm.message,children:[w.jsx(tA,{}),w.jsx(iA,{})]})]})},LA="_login_form_1grj4_1",MA="_input_wrap_1grj4_39",UA="_focus_1grj4_95",FA="_login_btn_1grj4_215",jA="_login_btn_bg_1grj4_251",zA="_signup_link_1grj4_307",kt={login_form:LA,input_wrap:MA,focus:UA,login_btn:FA,login_btn_bg:jA,signup_link:zA},$A=()=>{const[t,e]=de.useState(""),[n,r]=de.useState(""),i=Zs(),s=async o=>{o.preventDefault();try{await lP(wi,nf),await iP(wi,t,n)}catch(l){alert("로그인 정보가 정확하지 않습니다."),console.error("Login failed",l)}};return w.jsx("form",{onSubmit:s,className:kt.login_form,children:w.jsxs("article",{children:[w.jsxs("div",{className:`${kt.email_input} ${kt.input_wrap}`,children:[w.jsx("label",{children:"Email"}),w.jsx("input",{type:"email",value:t,onChange:o=>e(o.target.value),placeholder:"이메일을 입력해주세요"}),w.jsx("span",{className:kt.focus,"data-symbol":"email"})]}),w.jsxs("div",{className:`${kt.password_input} ${kt.input_wrap}`,children:[w.jsx("label",{children:"비밀번호"}),w.jsx("input",{type:"password",value:n,onChange:o=>r(o.target.value),placeholder:"패스워드를 입력해주세요"}),w.jsx("span",{className:kt.focus,"data-symbol":"password"})]}),w.jsx("div",{className:kt.signup_link,children:w.jsx("button",{type:"button",onClick:()=>i(bc()),children:"회원가입 하기"})}),w.jsx("div",{className:kt.login_btn,children:w.jsxs("div",{children:[w.jsx("div",{className:kt.login_btn_bg}),w.jsx("button",{type:"submit",children:"채팅 참여하기"})]})})]})})},WA="_signup_form_ba256_1",BA="_input_wrap_ba256_39",VA="_focus_ba256_95",HA="_signup_btn_ba256_215",GA="_signup_btn_bg_ba256_251",KA="_login_link_ba256_305",He={signup_form:WA,input_wrap:BA,focus:VA,signup_btn:HA,signup_btn_bg:GA,login_link:KA},qA=()=>{const[t,e]=de.useState(""),[n,r]=de.useState(""),[i,s]=de.useState(""),o=Zs(),l=async u=>{const c=Et(St,"users"),d=await Kh(c);let h=!0;return d.forEach(_=>{_.val().nickname===u&&(h=!1)}),h},a=async u=>{if(u.preventDefault(),!await l(i)){alert("이미 사용 중인 닉네임입니다.");return}try{const h=(await rP(wi,t,n)).user;await oP(h,{displayName:i,profileURL:"img/default_profile.png",status:!1}),await hw(Et(St,"users/"+h.uid),{email:t,nickname:i,profileURL:"img/default_profile.png",status:!1}),alert("회원가입이 완료되었습니다."),await bw(wi),o(bc())}catch(d){d.code==="auth/email-already-in-use"?alert("이미 사용 중인 이메일 주소입니다."):d.code==="auth/invalid-email"?alert("잘못된 이메일 형식입니다. 올바른 이메일 주소를 입력해주세요."):d.code==="auth/weak-password"?alert("비밀번호가 너무 약합니다. 보다 강력한 비밀번호를 사용해주세요."):d.code==="auth/network-request-failed"?alert("네트워크 문제가 발생했습니다. 인터넷 연결을 확인해주세요."):(alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요."),console.error("SignUp failed",d))}};return w.jsx("form",{onSubmit:a,className:He.signup_form,children:w.jsxs("article",{children:[w.jsxs("div",{className:`${He.email_input} ${He.input_wrap}`,children:[w.jsx("label",{children:"이메일"}),w.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),placeholder:"이메일을 입력해주세요"}),w.jsx("span",{className:He.focus,"data-symbol":"email"})]}),w.jsxs("div",{className:`${He.password_input} ${He.input_wrap}`,children:[w.jsx("label",{children:"비밀번호"}),w.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),placeholder:"패스워드를 입력해주세요"}),w.jsx("span",{className:He.focus,"data-symbol":"password"})]}),w.jsxs("div",{className:`${He.nickname_input} ${He.input_wrap}`,children:[w.jsx("label",{children:"닉네임"}),w.jsx("input",{type:"text",value:i,onChange:u=>s(u.target.value),placeholder:"닉네임을 입력해주세요"}),w.jsx("span",{className:He.focus,"data-symbol":"user"})]}),w.jsx("div",{className:He.login_link,children:w.jsx("button",{type:"button",onClick:()=>o(bc()),children:"로그인 화면으로 돌아가기"})}),w.jsx("div",{className:He.signup_btn,children:w.jsxs("div",{children:[w.jsx("div",{className:He.signup_btn_bg}),w.jsx("button",{type:"submit",children:" 계정 생성 "})]})})]})})},QA="_loading_wrap_6x5ah_1",YA="_loading_bg_6x5ah_21",XA="_loader_6x5ah_57",JA="_spin_6x5ah_1",Du={loading_wrap:QA,loading_bg:YA,loader:XA,spin:JA},ZA=()=>w.jsxs("div",{className:Du.loading_wrap,children:[w.jsx("div",{className:Du.loading_bg}),w.jsx("div",{className:Du.loader})]}),eD=()=>{const{currentUser:t,isLoading:e}=Ln(i=>i.user),{isSigningUp:n}=Ln(i=>i.ui),r=Zs();return de.useEffect(()=>{const i=cP(wi,async s=>{if(s){const o=Et(St,`users/${s.uid}`),l=await Kh(o);if(l.exists()){const a=l.val();r(Dc({displayName:a.displayName||s.displayName,email:s.email,uid:s.uid,profileURL:a.profileURL||"img/default_profile.png"}))}}else r(Dc(null));r(WC(!1))});return()=>i()},[r]),e?w.jsx(ZA,{}):(console.log(t),w.jsx("div",{className:"app",children:t?w.jsx(bA,{}):n?w.jsx(qA,{}):w.jsx($A,{})}))};bu.createRoot(document.getElementById("root")).render(w.jsx(dd.StrictMode,{children:w.jsx(hI,{store:GC,children:w.jsx(eD,{})})}));
