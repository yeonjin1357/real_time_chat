(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Yf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xf={exports:{}},Xo={},Jf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var is=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),Dv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Mv=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Uv=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),jv=Symbol.for("react.memo"),Wv=Symbol.for("react.lazy"),Nd=Symbol.iterator;function Bv(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var Zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep=Object.assign,tp={};function jr(t,e,n){this.props=t,this.context=e,this.refs=tp,this.updater=n||Zf}jr.prototype.isReactComponent={};jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function np(){}np.prototype=jr.prototype;function Lu(t,e,n){this.props=t,this.context=e,this.refs=tp,this.updater=n||Zf}var Mu=Lu.prototype=new np;Mu.constructor=Lu;ep(Mu,jr.prototype);Mu.isPureReactComponent=!0;var Rd=Array.isArray,rp=Object.prototype.hasOwnProperty,bu={current:null},ip={key:!0,ref:!0,__self:!0,__source:!0};function sp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rp.call(e,r)&&!ip.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:is,type:t,key:s,ref:o,props:i,_owner:bu.current}}function Vv(t,e){return{$$typeof:is,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fu(t){return typeof t=="object"&&t!==null&&t.$$typeof===is}function Hv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pd=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hv(""+t.key):e.toString(36)}function Bs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case is:case Ov:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xl(o,0):r,Rd(i)?(n="",t!=null&&(n=t.replace(Pd,"$&/")+"/"),Bs(i,e,n,"",function(u){return u})):i!=null&&(Fu(i)&&(i=Vv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+xl(s,l);o+=Bs(s,e,n,a,i)}else if(a=Bv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+xl(s,l++),o+=Bs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(t,e,n){if(t==null)return t;var r=[],i=0;return Bs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $v(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},Vs={transition:null},Gv={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:bu};U.Children={map:Cs,forEach:function(t,e,n){Cs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cs(t,function(){e++}),e},toArray:function(t){return Cs(t,function(e){return e})||[]},only:function(t){if(!Fu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=jr;U.Fragment=Dv;U.Profiler=Mv;U.PureComponent=Lu;U.StrictMode=Lv;U.Suspense=zv;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gv;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ep({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)rp.call(e,a)&&!ip.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:is,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Fv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bv,_context:t},t.Consumer=t};U.createElement=sp;U.createFactory=function(t){var e=sp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Uv,render:t}};U.isValidElement=Fu;U.lazy=function(t){return{$$typeof:Wv,_payload:{_status:-1,_result:t},_init:$v}};U.memo=function(t,e){return{$$typeof:jv,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Vs.transition;Vs.transition={};try{t()}finally{Vs.transition=e}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(t,e){return Ae.current.useCallback(t,e)};U.useContext=function(t){return Ae.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ae.current.useEffect(t,e)};U.useId=function(){return Ae.current.useId()};U.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ae.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};U.useRef=function(t){return Ae.current.useRef(t)};U.useState=function(t){return Ae.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ae.current.useTransition()};U.version="18.2.0";Jf.exports=U;var De=Jf.exports;const Kv=Yf(De);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=De,qv=Symbol.for("react.element"),Yv=Symbol.for("react.fragment"),Xv=Object.prototype.hasOwnProperty,Jv=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zv={key:!0,ref:!0,__self:!0,__source:!0};function op(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Xv.call(e,r)&&!Zv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qv,type:t,key:s,ref:o,props:i,_owner:Jv.current}}Xo.Fragment=Yv;Xo.jsx=op;Xo.jsxs=op;Xf.exports=Xo;var A=Xf.exports,va={},lp={exports:{}},He={},ap={exports:{}},up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,O){var D=I.length;I.push(O);e:for(;0<D;){var ne=D-1>>>1,ae=I[ne];if(0<i(ae,O))I[ne]=O,I[D]=ae,D=ne;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],D=I.pop();if(D!==O){I[0]=D;e:for(var ne=0,ae=I.length,ws=ae>>>1;ne<ws;){var En=2*(ne+1)-1,Pl=I[En],Cn=En+1,Es=I[Cn];if(0>i(Pl,D))Cn<ae&&0>i(Es,Pl)?(I[ne]=Es,I[Cn]=D,ne=Cn):(I[ne]=Pl,I[En]=D,ne=En);else if(Cn<ae&&0>i(Es,D))I[ne]=Es,I[Cn]=D,ne=Cn;else break e}}return O}function i(I,O){var D=I.sortIndex-O.sortIndex;return D!==0?D:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=I)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function y(I){if(v=!1,m(I),!_)if(n(a)!==null)_=!0,Nl(C);else{var O=n(u);O!==null&&Rl(y,O.startTime-I)}}function C(I,O){_=!1,v&&(v=!1,p(N),N=-1),g=!0;var D=h;try{for(m(O),c=n(a);c!==null&&(!(c.expirationTime>O)||I&&!Je());){var ne=c.callback;if(typeof ne=="function"){c.callback=null,h=c.priorityLevel;var ae=ne(c.expirationTime<=O);O=t.unstable_now(),typeof ae=="function"?c.callback=ae:c===n(a)&&r(a),m(O)}else r(a);c=n(a)}if(c!==null)var ws=!0;else{var En=n(u);En!==null&&Rl(y,En.startTime-O),ws=!1}return ws}finally{c=null,h=D,g=!1}}var T=!1,k=null,N=-1,G=5,b=-1;function Je(){return!(t.unstable_now()-b<G)}function Yr(){if(k!==null){var I=t.unstable_now();b=I;var O=!0;try{O=k(!0,I)}finally{O?Xr():(T=!1,k=null)}}else T=!1}var Xr;if(typeof f=="function")Xr=function(){f(Yr)};else if(typeof MessageChannel<"u"){var Ad=new MessageChannel,xv=Ad.port2;Ad.port1.onmessage=Yr,Xr=function(){xv.postMessage(null)}}else Xr=function(){x(Yr,0)};function Nl(I){k=I,T||(T=!0,Xr())}function Rl(I,O){N=x(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Nl(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var D=h;h=O;try{return I()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=h;h=I;try{return O()}finally{h=D}},t.unstable_scheduleCallback=function(I,O,D){var ne=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ne+D:ne):D=ne,I){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=D+ae,I={id:d++,callback:O,priorityLevel:I,startTime:D,expirationTime:ae,sortIndex:-1},D>ne?(I.sortIndex=D,e(u,I),n(a)===null&&I===n(u)&&(v?(p(N),N=-1):v=!0,Rl(y,D-ne))):(I.sortIndex=ae,e(a,I),_||g||(_=!0,Nl(C))),I},t.unstable_shouldYield=Je,t.unstable_wrapCallback=function(I){var O=h;return function(){var D=h;h=O;try{return I.apply(this,arguments)}finally{h=D}}}})(up);ap.exports=up;var ey=ap.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp=De,Ve=ey;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp=new Set,Pi={};function qn(t,e){Ar(t,e),Ar(t+"Capture",e)}function Ar(t,e){for(Pi[t]=e,t=0;t<e.length;t++)dp.add(e[t])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xd={},Od={};function ny(t){return ya.call(Od,t)?!0:ya.call(xd,t)?!1:ty.test(t)?Od[t]=!0:(xd[t]=!0,!1)}function ry(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iy(t,e,n,r){if(e===null||typeof e>"u"||ry(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ne(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Ne(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Ne(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Ne(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Ne(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Ne(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Ne(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Ne(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Ne(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Ne(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uu=/[\-:]([a-z])/g;function zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uu,zu);ve[e]=new Ne(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uu,zu);ve[e]=new Ne(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uu,zu);ve[e]=new Ne(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Ne(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Ne(t,1,!1,t.toLowerCase(),null,!0,!0)});function ju(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iy(e,n,i,r)&&(n=null),r||i===null?ny(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bt=cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),wa=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),fp=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Ca=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),pp=Symbol.for("react.offscreen"),Dd=Symbol.iterator;function Jr(t){return t===null||typeof t!="object"?null:(t=Dd&&t[Dd]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,Ol;function ci(t){if(Ol===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||""}return`
`+Ol+t}var Dl=!1;function Ll(t,e){if(!t||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ci(t):""}function sy(t){switch(t.tag){case 5:return ci(t.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function Sa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nr:return"Fragment";case tr:return"Portal";case wa:return"Profiler";case Wu:return"StrictMode";case Ea:return"Suspense";case Ca:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fp:return(t.displayName||"Context")+".Consumer";case hp:return(t._context.displayName||"Context")+".Provider";case Bu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vu:return e=t.displayName||null,e!==null?e:Sa(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return Sa(t(e))}catch{}}return null}function oy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sa(e);case 8:return e===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ly(t){var e=mp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Is(t){t._valueTracker||(t._valueTracker=ly(t))}function gp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ia(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ld(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _p(t,e){e=e.checked,e!=null&&ju(t,"checked",e,!1)}function Ta(t,e){_p(t,e);var n=dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ka(t,e.type,n):e.hasOwnProperty("defaultValue")&&ka(t,e.type,dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Md(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ka(t,e,n){(e!=="number"||io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var di=Array.isArray;function mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Aa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(di(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dn(n)}}function vp(t,e){var n=dn(e.value),r=dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Na(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ts,wp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ts.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ay=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(t){ay.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gi[e]=gi[t]})});function Ep(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gi.hasOwnProperty(t)&&gi[t]?(""+e).trim():e+"px"}function Cp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ep(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uy=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ra(t,e){if(e){if(uy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Pa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function Hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oa=null,gr=null,_r=null;function Ud(t){if(t=ls(t)){if(typeof Oa!="function")throw Error(w(280));var e=t.stateNode;e&&(e=nl(e),Oa(t.stateNode,t.type,e))}}function Sp(t){gr?_r?_r.push(t):_r=[t]:gr=t}function Ip(){if(gr){var t=gr,e=_r;if(_r=gr=null,Ud(t),e)for(t=0;t<e.length;t++)Ud(e[t])}}function Tp(t,e){return t(e)}function kp(){}var Ml=!1;function Ap(t,e,n){if(Ml)return t(e,n);Ml=!0;try{return Tp(t,e,n)}finally{Ml=!1,(gr!==null||_r!==null)&&(kp(),Ip())}}function Oi(t,e){var n=t.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Da=!1;if(Rt)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Da=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Da=!1}function cy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var _i=!1,so=null,oo=!1,La=null,dy={onError:function(t){_i=!0,so=t}};function hy(t,e,n,r,i,s,o,l,a){_i=!1,so=null,cy.apply(dy,arguments)}function fy(t,e,n,r,i,s,o,l,a){if(hy.apply(this,arguments),_i){if(_i){var u=so;_i=!1,so=null}else throw Error(w(198));oo||(oo=!0,La=u)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Np(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zd(t){if(Yn(t)!==t)throw Error(w(188))}function py(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zd(i),t;if(s===r)return zd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Rp(t){return t=py(t),t!==null?Pp(t):null}function Pp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pp(t);if(e!==null)return e;t=t.sibling}return null}var xp=Ve.unstable_scheduleCallback,jd=Ve.unstable_cancelCallback,my=Ve.unstable_shouldYield,gy=Ve.unstable_requestPaint,re=Ve.unstable_now,_y=Ve.unstable_getCurrentPriorityLevel,$u=Ve.unstable_ImmediatePriority,Op=Ve.unstable_UserBlockingPriority,lo=Ve.unstable_NormalPriority,vy=Ve.unstable_LowPriority,Dp=Ve.unstable_IdlePriority,Jo=null,mt=null;function yy(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Jo,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Cy,wy=Math.log,Ey=Math.LN2;function Cy(t){return t>>>=0,t===0?32:31-(wy(t)/Ey|0)|0}var ks=64,As=4194304;function hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ao(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=hi(l):(s&=o,s!==0&&(r=hi(s)))}else o=n&~i,o!==0?r=hi(o):s!==0&&(r=hi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ot(e),i=1<<n,r|=t[n],e&=~i;return r}function Sy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Sy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lp(){var t=ks;return ks<<=1,!(ks&4194240)&&(ks=64),t}function bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ss(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ot(e),t[e]=n}function Ty(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Mp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bp,Ku,Fp,Up,zp,ba=!1,Ns=[],Zt=null,en=null,tn=null,Di=new Map,Li=new Map,$t=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(t,e){switch(t){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(e.pointerId)}}function ei(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ls(e),e!==null&&Ku(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ay(t,e,n,r,i){switch(e){case"focusin":return Zt=ei(Zt,t,e,n,r,i),!0;case"dragenter":return en=ei(en,t,e,n,r,i),!0;case"mouseover":return tn=ei(tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Di.set(s,ei(Di.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Li.set(s,ei(Li.get(s)||null,t,e,n,r,i)),!0}return!1}function jp(t){var e=An(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=Np(n),e!==null){t.blockedOn=e,zp(t.priority,function(){Fp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return e=ls(n),e!==null&&Ku(e),t.blockedOn=n,!1;e.shift()}return!0}function Bd(t,e,n){Hs(t)&&n.delete(e)}function Ny(){ba=!1,Zt!==null&&Hs(Zt)&&(Zt=null),en!==null&&Hs(en)&&(en=null),tn!==null&&Hs(tn)&&(tn=null),Di.forEach(Bd),Li.forEach(Bd)}function ti(t,e){t.blockedOn===e&&(t.blockedOn=null,ba||(ba=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Ny)))}function Mi(t){function e(i){return ti(i,t)}if(0<Ns.length){ti(Ns[0],t);for(var n=1;n<Ns.length;n++){var r=Ns[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zt!==null&&ti(Zt,t),en!==null&&ti(en,t),tn!==null&&ti(tn,t),Di.forEach(e),Li.forEach(e),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)jp(n),n.blockedOn===null&&$t.shift()}var vr=bt.ReactCurrentBatchConfig,uo=!0;function Ry(t,e,n,r){var i=W,s=vr.transition;vr.transition=null;try{W=1,Qu(t,e,n,r)}finally{W=i,vr.transition=s}}function Py(t,e,n,r){var i=W,s=vr.transition;vr.transition=null;try{W=4,Qu(t,e,n,r)}finally{W=i,vr.transition=s}}function Qu(t,e,n,r){if(uo){var i=Fa(t,e,n,r);if(i===null)Gl(t,e,r,co,n),Wd(t,r);else if(Ay(i,t,e,n,r))r.stopPropagation();else if(Wd(t,r),e&4&&-1<ky.indexOf(t)){for(;i!==null;){var s=ls(i);if(s!==null&&bp(s),s=Fa(t,e,n,r),s===null&&Gl(t,e,r,co,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gl(t,e,r,null,n)}}var co=null;function Fa(t,e,n,r){if(co=null,t=Hu(r),t=An(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Np(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return co=t,null}function Wp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_y()){case $u:return 1;case Op:return 4;case lo:case vy:return 16;case Dp:return 536870912;default:return 16}default:return 16}}var Xt=null,qu=null,$s=null;function Bp(){if($s)return $s;var t,e=qu,n=e.length,r,i="value"in Xt?Xt.value:Xt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $s=i.slice(t,1<r?1-r:void 0)}function Gs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rs(){return!0}function Vd(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rs:Vd,this.isPropagationStopped=Vd,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),e}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=$e(Wr),os=Z({},Wr,{view:0,detail:0}),xy=$e(os),Fl,Ul,ni,Zo=Z({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ni&&(ni&&t.type==="mousemove"?(Fl=t.screenX-ni.screenX,Ul=t.screenY-ni.screenY):Ul=Fl=0,ni=t),Fl)},movementY:function(t){return"movementY"in t?t.movementY:Ul}}),Hd=$e(Zo),Oy=Z({},Zo,{dataTransfer:0}),Dy=$e(Oy),Ly=Z({},os,{relatedTarget:0}),zl=$e(Ly),My=Z({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),by=$e(My),Fy=Z({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uy=$e(Fy),zy=Z({},Wr,{data:0}),$d=$e(zy),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=By[t])?!!e[t]:!1}function Xu(){return Vy}var Hy=Z({},os,{key:function(t){if(t.key){var e=jy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?Gs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$y=$e(Hy),Gy=Z({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=$e(Gy),Ky=Z({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),Qy=$e(Ky),qy=Z({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=$e(qy),Xy=Z({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=$e(Xy),Zy=[9,13,27,32],Ju=Rt&&"CompositionEvent"in window,vi=null;Rt&&"documentMode"in document&&(vi=document.documentMode);var e0=Rt&&"TextEvent"in window&&!vi,Vp=Rt&&(!Ju||vi&&8<vi&&11>=vi),Kd=" ",Qd=!1;function Hp(t,e){switch(t){case"keyup":return Zy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function t0(t,e){switch(t){case"compositionend":return $p(e);case"keypress":return e.which!==32?null:(Qd=!0,Kd);case"textInput":return t=e.data,t===Kd&&Qd?null:t;default:return null}}function n0(t,e){if(rr)return t==="compositionend"||!Ju&&Hp(t,e)?(t=Bp(),$s=qu=Xt=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vp&&e.locale!=="ko"?null:e.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!r0[t.type]:e==="textarea"}function Gp(t,e,n,r){Sp(r),e=ho(e,"onChange"),0<e.length&&(n=new Yu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yi=null,bi=null;function i0(t){rm(t,0)}function el(t){var e=or(t);if(gp(e))return t}function s0(t,e){if(t==="change")return e}var Kp=!1;if(Rt){var jl;if(Rt){var Wl="oninput"in document;if(!Wl){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Wl=typeof Yd.oninput=="function"}jl=Wl}else jl=!1;Kp=jl&&(!document.documentMode||9<document.documentMode)}function Xd(){yi&&(yi.detachEvent("onpropertychange",Qp),bi=yi=null)}function Qp(t){if(t.propertyName==="value"&&el(bi)){var e=[];Gp(e,bi,t,Hu(t)),Ap(i0,e)}}function o0(t,e,n){t==="focusin"?(Xd(),yi=e,bi=n,yi.attachEvent("onpropertychange",Qp)):t==="focusout"&&Xd()}function l0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return el(bi)}function a0(t,e){if(t==="click")return el(e)}function u0(t,e){if(t==="input"||t==="change")return el(e)}function c0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ut=typeof Object.is=="function"?Object.is:c0;function Fi(t,e){if(ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ya.call(e,i)||!ut(t[i],e[i]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zd(t,e){var n=Jd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jd(n)}}function qp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yp(){for(var t=window,e=io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=io(t.document)}return e}function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function d0(t){var e=Yp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qp(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zd(n,s);var o=Zd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var h0=Rt&&"documentMode"in document&&11>=document.documentMode,ir=null,Ua=null,wi=null,za=!1;function eh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;za||ir==null||ir!==io(r)||(r=ir,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Fi(wi,r)||(wi=r,r=ho(Ua,"onSelect"),0<r.length&&(e=new Yu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ir)))}function Ps(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Bl={},Xp={};Rt&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function tl(t){if(Bl[t])return Bl[t];if(!sr[t])return t;var e=sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xp)return Bl[t]=e[n];return t}var Jp=tl("animationend"),Zp=tl("animationiteration"),em=tl("animationstart"),tm=tl("transitionend"),nm=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(t,e){nm.set(t,e),qn(e,[t])}for(var Vl=0;Vl<th.length;Vl++){var Hl=th[Vl],f0=Hl.toLowerCase(),p0=Hl[0].toUpperCase()+Hl.slice(1);gn(f0,"on"+p0)}gn(Jp,"onAnimationEnd");gn(Zp,"onAnimationIteration");gn(em,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(tm,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function nh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fy(r,e,void 0,t),t.currentTarget=null}function rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;nh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;nh(i,l,u),s=a}}}if(oo)throw t=La,oo=!1,La=null,t}function K(t,e){var n=e[Ha];n===void 0&&(n=e[Ha]=new Set);var r=t+"__bubble";n.has(r)||(im(e,t,2,!1),n.add(r))}function $l(t,e,n){var r=0;e&&(r|=4),im(n,t,r,e)}var xs="_reactListening"+Math.random().toString(36).slice(2);function Ui(t){if(!t[xs]){t[xs]=!0,dp.forEach(function(n){n!=="selectionchange"&&(m0.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xs]||(e[xs]=!0,$l("selectionchange",!1,e))}}function im(t,e,n,r){switch(Wp(e)){case 1:var i=Ry;break;case 4:i=Py;break;default:i=Qu}n=i.bind(null,e,n,t),i=void 0,!Da||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=An(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ap(function(){var u=s,d=Hu(n),c=[];e:{var h=nm.get(t);if(h!==void 0){var g=Yu,_=t;switch(t){case"keypress":if(Gs(n)===0)break e;case"keydown":case"keyup":g=$y;break;case"focusin":_="focus",g=zl;break;case"focusout":_="blur",g=zl;break;case"beforeblur":case"afterblur":g=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Qy;break;case Jp:case Zp:case em:g=by;break;case tm:g=Yy;break;case"scroll":g=xy;break;case"wheel":g=Jy;break;case"copy":case"cut":case"paste":g=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gd}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Oi(f,p),y!=null&&v.push(zi(f,y,m)))),x)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==xa&&(_=n.relatedTarget||n.fromElement)&&(An(_)||_[Pt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?An(_):null,_!==null&&(x=Yn(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Hd,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Gd,y="onPointerLeave",p="onPointerEnter",f="pointer"),x=g==null?h:or(g),m=_==null?h:or(_),h=new v(y,f+"leave",g,n,d),h.target=x,h.relatedTarget=m,y=null,An(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=x,y=v),x=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=Zn(m))f++;for(m=0,y=p;y;y=Zn(y))m++;for(;0<f-m;)v=Zn(v),f--;for(;0<m-f;)p=Zn(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Zn(v),p=Zn(p)}v=null}else v=null;g!==null&&rh(c,h,g,v,!1),_!==null&&x!==null&&rh(c,x,_,v,!0)}}e:{if(h=u?or(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=s0;else if(qd(h))if(Kp)C=u0;else{C=l0;var T=o0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=a0);if(C&&(C=C(t,u))){Gp(c,C,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ka(h,"number",h.value)}switch(T=u?or(u):window,t){case"focusin":(qd(T)||T.contentEditable==="true")&&(ir=T,Ua=u,wi=null);break;case"focusout":wi=Ua=ir=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,eh(c,n,d);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":eh(c,n,d)}var k;if(Ju)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else rr?Hp(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Vp&&n.locale!=="ko"&&(rr||N!=="onCompositionStart"?N==="onCompositionEnd"&&rr&&(k=Bp()):(Xt=d,qu="value"in Xt?Xt.value:Xt.textContent,rr=!0)),T=ho(u,N),0<T.length&&(N=new $d(N,t,null,n,d),c.push({event:N,listeners:T}),k?N.data=k:(k=$p(n),k!==null&&(N.data=k)))),(k=e0?t0(t,n):n0(t,n))&&(u=ho(u,"onBeforeInput"),0<u.length&&(d=new $d("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}rm(c,e)})}function zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ho(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oi(t,n),s!=null&&r.unshift(zi(t,s,i)),s=Oi(t,e),s!=null&&r.push(zi(t,s,i))),t=t.return}return r}function Zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Oi(n,s),a!=null&&o.unshift(zi(n,a,l))):i||(a=Oi(n,s),a!=null&&o.push(zi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var g0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function ih(t){return(typeof t=="string"?t:""+t).replace(g0,`
`).replace(_0,"")}function Os(t,e,n){if(e=ih(e),ih(t)!==e&&n)throw Error(w(425))}function fo(){}var ja=null,Wa=null;function Ba(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(t){return sh.resolve(null).then(t).catch(w0)}:Va;function w0(t){setTimeout(function(){throw t})}function Kl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mi(e)}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function oh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),pt="__reactFiber$"+Br,ji="__reactProps$"+Br,Pt="__reactContainer$"+Br,Ha="__reactEvents$"+Br,E0="__reactListeners$"+Br,C0="__reactHandles$"+Br;function An(t){var e=t[pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=oh(t);t!==null;){if(n=t[pt])return n;t=oh(t)}return e}t=n,n=t.parentNode}return null}function ls(t){return t=t[pt]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function nl(t){return t[ji]||null}var $a=[],lr=-1;function _n(t){return{current:t}}function q(t){0>lr||(t.current=$a[lr],$a[lr]=null,lr--)}function $(t,e){lr++,$a[lr]=t.current,t.current=e}var hn={},Se=_n(hn),Le=_n(!1),bn=hn;function Nr(t,e){var n=t.type.contextTypes;if(!n)return hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Me(t){return t=t.childContextTypes,t!=null}function po(){q(Le),q(Se)}function lh(t,e,n){if(Se.current!==hn)throw Error(w(168));$(Se,e),$(Le,n)}function sm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,oy(t)||"Unknown",i));return Z({},n,r)}function mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hn,bn=Se.current,$(Se,t),$(Le,Le.current),!0}function ah(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=sm(t,e,bn),r.__reactInternalMemoizedMergedChildContext=t,q(Le),q(Se),$(Se,t)):q(Le),$(Le,n)}var Et=null,rl=!1,Ql=!1;function om(t){Et===null?Et=[t]:Et.push(t)}function S0(t){rl=!0,om(t)}function vn(){if(!Ql&&Et!==null){Ql=!0;var t=0,e=W;try{var n=Et;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,rl=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),xp($u,vn),i}finally{W=e,Ql=!1}}return null}var ar=[],ur=0,go=null,_o=0,Ge=[],Ke=0,Fn=null,Ct=1,St="";function Sn(t,e){ar[ur++]=_o,ar[ur++]=go,go=t,_o=e}function lm(t,e,n){Ge[Ke++]=Ct,Ge[Ke++]=St,Ge[Ke++]=Fn,Fn=t;var r=Ct;t=St;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-ot(e)+i|n<<i|r,St=s+t}else Ct=1<<s|n<<i|r,St=t}function ec(t){t.return!==null&&(Sn(t,1),lm(t,1,0))}function tc(t){for(;t===go;)go=ar[--ur],ar[ur]=null,_o=ar[--ur],ar[ur]=null;for(;t===Fn;)Fn=Ge[--Ke],Ge[Ke]=null,St=Ge[--Ke],Ge[Ke]=null,Ct=Ge[--Ke],Ge[Ke]=null}var Be=null,We=null,Y=!1,nt=null;function am(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fn!==null?{id:Ct,overflow:St}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function Ga(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ka(t){if(Y){var e=We;if(e){var n=e;if(!uh(t,e)){if(Ga(t))throw Error(w(418));e=nn(n.nextSibling);var r=Be;e&&uh(t,e)?am(r,n):(t.flags=t.flags&-4097|2,Y=!1,Be=t)}}else{if(Ga(t))throw Error(w(418));t.flags=t.flags&-4097|2,Y=!1,Be=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Ds(t){if(t!==Be)return!1;if(!Y)return ch(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ba(t.type,t.memoizedProps)),e&&(e=We)){if(Ga(t))throw um(),Error(w(418));for(;e;)am(t,e),e=nn(e.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?nn(t.stateNode.nextSibling):null;return!0}function um(){for(var t=We;t;)t=nn(t.nextSibling)}function Rr(){We=Be=null,Y=!1}function nc(t){nt===null?nt=[t]:nt.push(t)}var I0=bt.ReactCurrentBatchConfig;function et(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vo=_n(null),yo=null,cr=null,rc=null;function ic(){rc=cr=yo=null}function sc(t){var e=vo.current;q(vo),t._currentValue=e}function Qa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yr(t,e){yo=t,rc=cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pe=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(rc!==t)if(t={context:t,memoizedValue:e,next:null},cr===null){if(yo===null)throw Error(w(308));cr=t,yo.dependencies={lanes:0,firstContext:t}}else cr=cr.next=t;return e}var Nn=null;function oc(t){Nn===null?Nn=[t]:Nn.push(t)}function cm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,oc(e)):(n.next=i.next,i.next=n),e.interleaved=n,xt(t,r)}function xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ht=!1;function lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xt(t,n)}return i=r.interleaved,i===null?(e.next=e,oc(r)):(e.next=i.next,i.next=e),r.interleaved=e,xt(t,n)}function Ks(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}function dh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wo(t,e,n,r){var i=t.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=Z({},c,h);break e;case 2:Ht=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zn|=o,t.lanes=o,t.memoizedState=c}}function hh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var hm=new cp.Component().refs;function qa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var il={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=on(t),s=At(r,i);s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(lt(e,t,i,r),Ks(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=on(t),s=At(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(lt(e,t,i,r),Ks(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=on(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=rn(t,i,r),e!==null&&(lt(e,t,r,n),Ks(e,t,r))}};function fh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,s):!0}function fm(t,e,n){var r=!1,i=hn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=Me(e)?bn:Se.current,r=e.contextTypes,s=(r=r!=null)?Nr(t,i):hn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ph(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&il.enqueueReplaceState(e,e.state,null)}function Ya(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=hm,lc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=Me(e)?bn:Se.current,i.context=Nr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&il.enqueueReplaceState(i,i.state,null),wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===hm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Ls(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mh(t){var e=t._init;return e(t._payload)}function pm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=ln(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=ta(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var C=m.type;return C===nr?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&mh(C)===f.type)?(y=i(f,m.props),y.ref=ri(p,f,m),y.return=p,y):(y=Zs(m.type,m.key,m.props,null,p.mode,y),y.ref=ri(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=na(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,C){return f===null||f.tag!==7?(f=Dn(m,p.mode,y,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ta(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ss:return m=Zs(f.type,f.key,f.props,null,p.mode,m),m.ref=ri(p,null,f),m.return=p,m;case tr:return f=na(f,p.mode,m),f.return=p,f;case Vt:var y=f._init;return c(p,y(f._payload),m)}if(di(f)||Jr(f))return f=Dn(f,p.mode,m,null),f.return=p,f;Ls(p,f)}return null}function h(p,f,m,y){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ss:return m.key===C?a(p,f,m,y):null;case tr:return m.key===C?u(p,f,m,y):null;case Vt:return C=m._init,h(p,f,C(m._payload),y)}if(di(m)||Jr(m))return C!==null?null:d(p,f,m,y,null);Ls(p,m)}return null}function g(p,f,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ss:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,C);case tr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,C);case Vt:var T=y._init;return g(p,f,m,T(y._payload),C)}if(di(y)||Jr(y))return p=p.get(m)||null,d(f,p,y,C,null);Ls(f,y)}return null}function _(p,f,m,y){for(var C=null,T=null,k=f,N=f=0,G=null;k!==null&&N<m.length;N++){k.index>N?(G=k,k=null):G=k.sibling;var b=h(p,k,m[N],y);if(b===null){k===null&&(k=G);break}t&&k&&b.alternate===null&&e(p,k),f=s(b,f,N),T===null?C=b:T.sibling=b,T=b,k=G}if(N===m.length)return n(p,k),Y&&Sn(p,N),C;if(k===null){for(;N<m.length;N++)k=c(p,m[N],y),k!==null&&(f=s(k,f,N),T===null?C=k:T.sibling=k,T=k);return Y&&Sn(p,N),C}for(k=r(p,k);N<m.length;N++)G=g(k,p,N,m[N],y),G!==null&&(t&&G.alternate!==null&&k.delete(G.key===null?N:G.key),f=s(G,f,N),T===null?C=G:T.sibling=G,T=G);return t&&k.forEach(function(Je){return e(p,Je)}),Y&&Sn(p,N),C}function v(p,f,m,y){var C=Jr(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var T=C=null,k=f,N=f=0,G=null,b=m.next();k!==null&&!b.done;N++,b=m.next()){k.index>N?(G=k,k=null):G=k.sibling;var Je=h(p,k,b.value,y);if(Je===null){k===null&&(k=G);break}t&&k&&Je.alternate===null&&e(p,k),f=s(Je,f,N),T===null?C=Je:T.sibling=Je,T=Je,k=G}if(b.done)return n(p,k),Y&&Sn(p,N),C;if(k===null){for(;!b.done;N++,b=m.next())b=c(p,b.value,y),b!==null&&(f=s(b,f,N),T===null?C=b:T.sibling=b,T=b);return Y&&Sn(p,N),C}for(k=r(p,k);!b.done;N++,b=m.next())b=g(k,p,N,b.value,y),b!==null&&(t&&b.alternate!==null&&k.delete(b.key===null?N:b.key),f=s(b,f,N),T===null?C=b:T.sibling=b,T=b);return t&&k.forEach(function(Yr){return e(p,Yr)}),Y&&Sn(p,N),C}function x(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===nr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ss:e:{for(var C=m.key,T=f;T!==null;){if(T.key===C){if(C=m.type,C===nr){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&mh(C)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=ri(p,T,m),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===nr?(f=Dn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Zs(m.type,m.key,m.props,null,p.mode,y),y.ref=ri(p,f,m),y.return=p,p=y)}return o(p);case tr:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=na(m,p.mode,y),f.return=p,p=f}return o(p);case Vt:return T=m._init,x(p,f,T(m._payload),y)}if(di(m))return _(p,f,m,y);if(Jr(m))return v(p,f,m,y);Ls(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ta(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return x}var Pr=pm(!0),mm=pm(!1),as={},gt=_n(as),Wi=_n(as),Bi=_n(as);function Rn(t){if(t===as)throw Error(w(174));return t}function ac(t,e){switch($(Bi,e),$(Wi,t),$(gt,as),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Na(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Na(e,t)}q(gt),$(gt,e)}function xr(){q(gt),q(Wi),q(Bi)}function gm(t){Rn(Bi.current);var e=Rn(gt.current),n=Na(e,t.type);e!==n&&($(Wi,t),$(gt,n))}function uc(t){Wi.current===t&&(q(gt),q(Wi))}var X=_n(0);function Eo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function cc(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Qs=bt.ReactCurrentDispatcher,Yl=bt.ReactCurrentBatchConfig,Un=0,J=null,se=null,ce=null,Co=!1,Ei=!1,Vi=0,T0=0;function ye(){throw Error(w(321))}function dc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ut(t[n],e[n]))return!1;return!0}function hc(t,e,n,r,i,s){if(Un=s,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qs.current=t===null||t.memoizedState===null?R0:P0,t=n(r,i),Ei){s=0;do{if(Ei=!1,Vi=0,25<=s)throw Error(w(301));s+=1,ce=se=null,e.updateQueue=null,Qs.current=x0,t=n(r,i)}while(Ei)}if(Qs.current=So,e=se!==null&&se.next!==null,Un=0,ce=se=J=null,Co=!1,e)throw Error(w(300));return t}function fc(){var t=Vi!==0;return Vi=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=t:ce=ce.next=t,ce}function Xe(){if(se===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=ce===null?J.memoizedState:ce.next;if(e!==null)ce=e,se=t;else{if(t===null)throw Error(w(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?J.memoizedState=ce=t:ce=ce.next=t}return ce}function Hi(t,e){return typeof e=="function"?e(t):e}function Xl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Un&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,J.lanes|=d,zn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ut(r,e.memoizedState)||(Pe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,J.lanes|=s,zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ut(s,e.memoizedState)||(Pe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _m(){}function vm(t,e){var n=J,r=Xe(),i=e(),s=!ut(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,pc(Em.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,$i(9,wm.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(w(349));Un&30||ym(n,e,i)}return i}function ym(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wm(t,e,n,r){e.value=n,e.getSnapshot=r,Cm(e)&&Sm(t)}function Em(t,e,n){return n(function(){Cm(e)&&Sm(t)})}function Cm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ut(t,n)}catch{return!0}}function Sm(t){var e=xt(t,1);e!==null&&lt(e,t,1,-1)}function gh(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},e.queue=t,t=t.dispatch=N0.bind(null,J,t),[e.memoizedState,t]}function $i(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Im(){return Xe().memoizedState}function qs(t,e,n,r){var i=ft();J.flags|=t,i.memoizedState=$i(1|e,n,void 0,r===void 0?null:r)}function sl(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&dc(r,o.deps)){i.memoizedState=$i(e,n,s,r);return}}J.flags|=t,i.memoizedState=$i(1|e,n,s,r)}function _h(t,e){return qs(8390656,8,t,e)}function pc(t,e){return sl(2048,8,t,e)}function Tm(t,e){return sl(4,2,t,e)}function km(t,e){return sl(4,4,t,e)}function Am(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nm(t,e,n){return n=n!=null?n.concat([t]):null,sl(4,4,Am.bind(null,e,t),n)}function mc(){}function Rm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xm(t,e,n){return Un&21?(ut(n,e)||(n=Lp(),J.lanes|=n,zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pe=!0),t.memoizedState=n)}function k0(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Yl.transition;Yl.transition={};try{t(!1),e()}finally{W=n,Yl.transition=r}}function Om(){return Xe().memoizedState}function A0(t,e,n){var r=on(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dm(t))Lm(e,n);else if(n=cm(t,e,n,r),n!==null){var i=ke();lt(n,t,r,i),Mm(n,e,r)}}function N0(t,e,n){var r=on(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dm(t))Lm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ut(l,o)){var a=e.interleaved;a===null?(i.next=i,oc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=cm(t,e,i,r),n!==null&&(i=ke(),lt(n,t,r,i),Mm(n,e,r))}}function Dm(t){var e=t.alternate;return t===J||e!==null&&e===J}function Lm(t,e){Ei=Co=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}var So={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},R0={readContext:Ye,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:_h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qs(4194308,4,Am.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qs(4194308,4,t,e)},useInsertionEffect:function(t,e){return qs(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=A0.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:gh,useDebugValue:mc,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=gh(!1),e=t[0];return t=k0.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,i=ft();if(Y){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),fe===null)throw Error(w(349));Un&30||ym(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_h(Em.bind(null,r,s,t),[t]),r.flags|=2048,$i(9,wm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ft(),e=fe.identifierPrefix;if(Y){var n=St,r=Ct;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},P0={readContext:Ye,useCallback:Rm,useContext:Ye,useEffect:pc,useImperativeHandle:Nm,useInsertionEffect:Tm,useLayoutEffect:km,useMemo:Pm,useReducer:Xl,useRef:Im,useState:function(){return Xl(Hi)},useDebugValue:mc,useDeferredValue:function(t){var e=Xe();return xm(e,se.memoizedState,t)},useTransition:function(){var t=Xl(Hi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:_m,useSyncExternalStore:vm,useId:Om,unstable_isNewReconciler:!1},x0={readContext:Ye,useCallback:Rm,useContext:Ye,useEffect:pc,useImperativeHandle:Nm,useInsertionEffect:Tm,useLayoutEffect:km,useMemo:Pm,useReducer:Jl,useRef:Im,useState:function(){return Jl(Hi)},useDebugValue:mc,useDeferredValue:function(t){var e=Xe();return se===null?e.memoizedState=t:xm(e,se.memoizedState,t)},useTransition:function(){var t=Jl(Hi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:_m,useSyncExternalStore:vm,useId:Om,unstable_isNewReconciler:!1};function Or(t,e){try{var n="",r=e;do n+=sy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function bm(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){To||(To=!0,lu=r),Xa(t,e)},n}function Fm(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xa(t,e),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new O0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=G0.bind(null,t,e,n),e.then(t,t))}function yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,rn(n,e,1))),n.lanes|=1),t)}var D0=bt.ReactCurrentOwner,Pe=!1;function Te(t,e,n,r){e.child=t===null?mm(e,null,n,r):Pr(e,t.child,n,r)}function Eh(t,e,n,r,i){n=n.render;var s=e.ref;return yr(e,i),r=hc(t,e,n,r,s,i),n=fc(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(Y&&n&&ec(e),e.flags|=1,Te(t,e,r,i),e.child)}function Ch(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Um(t,e,s,r,i)):(t=Zs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(o,r)&&t.ref===e.ref)return Ot(t,e,i)}return e.flags|=1,t=ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function Um(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fi(s,r)&&t.ref===e.ref)if(Pe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pe=!0);else return e.lanes=t.lanes,Ot(t,e,i)}return Ja(t,e,n,r,i)}function zm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(hr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(hr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(hr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(hr,je),je|=r;return Te(t,e,i,n),e.child}function jm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ja(t,e,n,r,i){var s=Me(n)?bn:Se.current;return s=Nr(e,s),yr(e,i),n=hc(t,e,n,r,s,i),r=fc(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ot(t,e,i)):(Y&&r&&ec(e),e.flags|=1,Te(t,e,n,i),e.child)}function Sh(t,e,n,r,i){if(Me(n)){var s=!0;mo(e)}else s=!1;if(yr(e,i),e.stateNode===null)Ys(t,e),fm(e,n,r),Ya(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Me(n)?bn:Se.current,u=Nr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ph(e,o,r,u),Ht=!1;var h=e.memoizedState;o.state=h,wo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Le.current||Ht?(typeof d=="function"&&(qa(e,n,d,r),a=e.memoizedState),(l=Ht||fh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=Me(n)?bn:Se.current,a=Nr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&ph(e,o,r,a),Ht=!1,h=e.memoizedState,o.state=h,wo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Le.current||Ht?(typeof g=="function"&&(qa(e,n,g,r),_=e.memoizedState),(u=Ht||fh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Za(t,e,n,r,s,i)}function Za(t,e,n,r,i,s){jm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ah(e,n,!1),Ot(t,e,s);r=e.stateNode,D0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Pr(e,t.child,null,s),e.child=Pr(e,null,l,s)):Te(t,e,l,s),e.memoizedState=r.state,i&&ah(e,n,!0),e.child}function Wm(t){var e=t.stateNode;e.pendingContext?lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lh(t,e.context,!1),ac(t,e.containerInfo)}function Ih(t,e,n,r,i){return Rr(),nc(i),e.flags|=256,Te(t,e,n,r),e.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bm(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(X,i&1),t===null)return Ka(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=al(o,r,0,null),t=Dn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tu(n),e.memoizedState=eu,t):gc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return L0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ln(l,s):(s=Dn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eu,r}return s=t.child,t=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gc(t,e){return e=al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ms(t,e,n,r){return r!==null&&nc(r),Pr(e,t.child,null,n),t=gc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function L0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zl(Error(w(422))),Ms(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=al({mode:"visible",children:r.children},i,0,null),s=Dn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Pr(e,t.child,null,o),e.child.memoizedState=tu(o),e.memoizedState=eu,s);if(!(e.mode&1))return Ms(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=Zl(s,r,void 0),Ms(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pe||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(t,i),lt(r,t,i,-1))}return Cc(),r=Zl(Error(w(421))),Ms(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=K0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=nn(i.nextSibling),Be=e,Y=!0,nt=null,t!==null&&(Ge[Ke++]=Ct,Ge[Ke++]=St,Ge[Ke++]=Fn,Ct=t.id,St=t.overflow,Fn=e),e=gc(e,r.children),e.flags|=4096,e)}function Th(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qa(t.return,e,n)}function ea(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Vm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Te(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Th(t,n,e);else if(t.tag===19)Th(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Eo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ea(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Eo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ea(e,!0,n,null,s);break;case"together":ea(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ys(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ot(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function M0(t,e,n){switch(e.tag){case 3:Wm(e),Rr();break;case 5:gm(e);break;case 1:Me(e.type)&&mo(e);break;case 4:ac(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(vo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Bm(t,e,n):($(X,X.current&1),t=Ot(t,e,n),t!==null?t.sibling:null);$(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,zm(t,e,n)}return Ot(t,e,n)}var Hm,nu,$m,Gm;Hm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};$m=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rn(gt.current);var s=null;switch(n){case"input":i=Ia(t,i),r=Ia(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=Aa(t,i),r=Aa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fo)}Ra(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ii(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function b0(t,e,n){var r=e.pendingProps;switch(tc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return Me(e.type)&&po(),we(e),null;case 3:return r=e.stateNode,xr(),q(Le),q(Se),cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ds(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(cu(nt),nt=null))),nu(t,e),we(e),null;case 5:uc(e);var i=Rn(Bi.current);if(n=e.type,t!==null&&e.stateNode!=null)$m(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return we(e),null}if(t=Rn(gt.current),Ds(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pt]=e,r[ji]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<fi.length;i++)K(fi[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ld(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":bd(r,s),K("invalid",r)}Ra(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Os(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Os(r.textContent,l,t),i=["children",""+l]):Pi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Is(r),Md(r,s,!0);break;case"textarea":Is(r),Fd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pt]=e,t[ji]=r,Hm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pa(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<fi.length;i++)K(fi[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Ld(t,r),i=Ia(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),K("invalid",t);break;case"textarea":bd(t,r),i=Aa(t,r),K("invalid",t);break;default:i=r}Ra(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Cp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&wp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xi(t,a):typeof a=="number"&&xi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&ju(t,s,a,o))}switch(n){case"input":Is(t),Md(t,r,!1);break;case"textarea":Is(t),Fd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)Gm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Rn(Bi.current),Rn(gt.current),Ds(e)){if(r=e.stateNode,n=e.memoizedProps,r[pt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:Os(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Os(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=e,e.stateNode=r}return we(e),null;case 13:if(q(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&We!==null&&e.mode&1&&!(e.flags&128))um(),Rr(),e.flags|=98560,s=!1;else if(s=Ds(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[pt]=e}else Rr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),s=!1}else nt!==null&&(cu(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?le===0&&(le=3):Cc())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return xr(),nu(t,e),t===null&&Ui(e.stateNode.containerInfo),we(e),null;case 10:return sc(e.type._context),we(e),null;case 17:return Me(e.type)&&po(),we(e),null;case 19:if(q(X),s=e.memoizedState,s===null)return we(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ii(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Eo(t),o!==null){for(e.flags|=128,ii(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>Dr&&(e.flags|=128,r=!0,ii(s,!1),e.lanes=4194304)}else{if(!r)if(t=Eo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return we(e),null}else 2*re()-s.renderingStartTime>Dr&&n!==1073741824&&(e.flags|=128,r=!0,ii(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=X.current,$(X,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return Ec(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function F0(t,e){switch(tc(e),e.tag){case 1:return Me(e.type)&&po(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xr(),q(Le),q(Se),cc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uc(e),null;case 13:if(q(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Rr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(X),null;case 4:return xr(),null;case 10:return sc(e.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var bs=!1,Ee=!1,U0=typeof WeakSet=="function"?WeakSet:Set,S=null;function dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function ru(t,e,n){try{n()}catch(r){ee(t,e,r)}}var kh=!1;function z0(t,e){if(ja=uo,t=Yp(),Zu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wa={focusedElem:t,selectionRange:n},uo=!1,S=e;S!==null;)if(e=S,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,S=t;else for(;S!==null;){e=S;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,x=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:et(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){ee(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}return _=kh,kh=!1,_}function Ci(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ru(e,n,s)}i=i.next}while(i!==r)}}function ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function iu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Km(t){var e=t.alternate;e!==null&&(t.alternate=null,Km(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pt],delete e[ji],delete e[Ha],delete e[E0],delete e[C0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qm(t){return t.tag===5||t.tag===3||t.tag===4}function Ah(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fo));else if(r!==4&&(t=t.child,t!==null))for(su(t,e,n),t=t.sibling;t!==null;)su(t,e,n),t=t.sibling}function ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ou(t,e,n),t=t.sibling;t!==null;)ou(t,e,n),t=t.sibling}var me=null,tt=!1;function jt(t,e,n){for(n=n.child;n!==null;)qm(t,e,n),n=n.sibling}function qm(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:Ee||dr(n,e);case 6:var r=me,i=tt;me=null,jt(t,e,n),me=r,tt=i,me!==null&&(tt?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(tt?(t=me,n=n.stateNode,t.nodeType===8?Kl(t.parentNode,n):t.nodeType===1&&Kl(t,n),Mi(t)):Kl(me,n.stateNode));break;case 4:r=me,i=tt,me=n.stateNode.containerInfo,tt=!0,jt(t,e,n),me=r,tt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ru(n,e,o),i=i.next}while(i!==r)}jt(t,e,n);break;case 1:if(!Ee&&(dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,e,l)}jt(t,e,n);break;case 21:jt(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,jt(t,e,n),Ee=r):jt(t,e,n);break;default:jt(t,e,n)}}function Nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new U0),e.forEach(function(r){var i=Q0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,tt=!1;break e;case 3:me=l.stateNode.containerInfo,tt=!0;break e;case 4:me=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(me===null)throw Error(w(160));qm(s,o,i),me=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ym(e,t),e=e.sibling}function Ym(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),dt(t),r&4){try{Ci(3,t,t.return),ol(3,t)}catch(v){ee(t,t.return,v)}try{Ci(5,t,t.return)}catch(v){ee(t,t.return,v)}}break;case 1:Ze(e,t),dt(t),r&512&&n!==null&&dr(n,n.return);break;case 5:if(Ze(e,t),dt(t),r&512&&n!==null&&dr(n,n.return),t.flags&32){var i=t.stateNode;try{xi(i,"")}catch(v){ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&_p(i,s),Pa(l,o);var u=Pa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Cp(i,c):d==="dangerouslySetInnerHTML"?wp(i,c):d==="children"?xi(i,c):ju(i,d,c,u)}switch(l){case"input":Ta(i,s);break;case"textarea":vp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?mr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?mr(i,!!s.multiple,s.defaultValue,!0):mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ji]=s}catch(v){ee(t,t.return,v)}}break;case 6:if(Ze(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ee(t,t.return,v)}}break;case 3:if(Ze(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mi(e.containerInfo)}catch(v){ee(t,t.return,v)}break;case 4:Ze(e,t),dt(t);break;case 13:Ze(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yc=re())),r&4&&Nh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||d,Ze(e,t),Ee=u):Ze(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(S=t,d=t.child;d!==null;){for(c=S=d;S!==null;){switch(h=S,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ci(4,h,h.return);break;case 1:dr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ee(r,n,v)}}break;case 5:dr(h,h.return);break;case 22:if(h.memoizedState!==null){Ph(c);continue}}g!==null?(g.return=h,S=g):Ph(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Ep("display",o))}catch(v){ee(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ee(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(e,t),dt(t),r&4&&Nh(t);break;case 21:break;default:Ze(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qm(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var s=Ah(t);ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ah(t);su(t,l,o);break;default:throw Error(w(161))}}catch(a){ee(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j0(t,e,n){S=t,Xm(t)}function Xm(t,e,n){for(var r=(t.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=bs;var u=Ee;if(bs=o,(Ee=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?xh(i):a!==null?(a.return=o,S=a):xh(i);for(;s!==null;)S=s,Xm(s),s=s.sibling;S=i,bs=l,Ee=u}Rh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):Rh(t)}}function Rh(t){for(;S!==null;){var e=S;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Mi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||e.flags&512&&iu(e)}catch(h){ee(e,e.return,h)}}if(e===t){S=null;break}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}}function Ph(t){for(;S!==null;){var e=S;if(e===t){S=null;break}var n=e.sibling;if(n!==null){n.return=e.return,S=n;break}S=e.return}}function xh(t){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ol(4,e)}catch(a){ee(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ee(e,i,a)}}var s=e.return;try{iu(e)}catch(a){ee(e,s,a)}break;case 5:var o=e.return;try{iu(e)}catch(a){ee(e,o,a)}}}catch(a){ee(e,e.return,a)}if(e===t){S=null;break}var l=e.sibling;if(l!==null){l.return=e.return,S=l;break}S=e.return}}var W0=Math.ceil,Io=bt.ReactCurrentDispatcher,_c=bt.ReactCurrentOwner,qe=bt.ReactCurrentBatchConfig,z=0,fe=null,ie=null,_e=0,je=0,hr=_n(0),le=0,Gi=null,zn=0,ll=0,vc=0,Si=null,Re=null,yc=0,Dr=1/0,wt=null,To=!1,lu=null,sn=null,Fs=!1,Jt=null,ko=0,Ii=0,au=null,Xs=-1,Js=0;function ke(){return z&6?re():Xs!==-1?Xs:Xs=re()}function on(t){return t.mode&1?z&2&&_e!==0?_e&-_e:I0.transition!==null?(Js===0&&(Js=Lp()),Js):(t=W,t!==0||(t=window.event,t=t===void 0?16:Wp(t.type)),t):1}function lt(t,e,n,r){if(50<Ii)throw Ii=0,au=null,Error(w(185));ss(t,n,r),(!(z&2)||t!==fe)&&(t===fe&&(!(z&2)&&(ll|=n),le===4&&Gt(t,_e)),be(t,r),n===1&&z===0&&!(e.mode&1)&&(Dr=re()+500,rl&&vn()))}function be(t,e){var n=t.callbackNode;Iy(t,e);var r=ao(t,t===fe?_e:0);if(r===0)n!==null&&jd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jd(n),e===1)t.tag===0?S0(Oh.bind(null,t)):om(Oh.bind(null,t)),y0(function(){!(z&6)&&vn()}),n=null;else{switch(Mp(r)){case 1:n=$u;break;case 4:n=Op;break;case 16:n=lo;break;case 536870912:n=Dp;break;default:n=lo}n=sg(n,Jm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jm(t,e){if(Xs=-1,Js=0,z&6)throw Error(w(327));var n=t.callbackNode;if(wr()&&t.callbackNode!==n)return null;var r=ao(t,t===fe?_e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ao(t,r);else{e=r;var i=z;z|=2;var s=eg();(fe!==t||_e!==e)&&(wt=null,Dr=re()+500,On(t,e));do try{H0();break}catch(l){Zm(t,l)}while(!0);ic(),Io.current=s,z=i,ie!==null?e=0:(fe=null,_e=0,e=le)}if(e!==0){if(e===2&&(i=Ma(t),i!==0&&(r=i,e=uu(t,i))),e===1)throw n=Gi,On(t,0),Gt(t,r),be(t,re()),n;if(e===6)Gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!B0(i)&&(e=Ao(t,r),e===2&&(s=Ma(t),s!==0&&(r=s,e=uu(t,s))),e===1))throw n=Gi,On(t,0),Gt(t,r),be(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:In(t,Re,wt);break;case 3:if(Gt(t,r),(r&130023424)===r&&(e=yc+500-re(),10<e)){if(ao(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Va(In.bind(null,t,Re,wt),e);break}In(t,Re,wt);break;case 4:if(Gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W0(r/1960))-r,10<r){t.timeoutHandle=Va(In.bind(null,t,Re,wt),r);break}In(t,Re,wt);break;case 5:In(t,Re,wt);break;default:throw Error(w(329))}}}return be(t,re()),t.callbackNode===n?Jm.bind(null,t):null}function uu(t,e){var n=Si;return t.current.memoizedState.isDehydrated&&(On(t,e).flags|=256),t=Ao(t,e),t!==2&&(e=Re,Re=n,e!==null&&cu(e)),t}function cu(t){Re===null?Re=t:Re.push.apply(Re,t)}function B0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gt(t,e){for(e&=~vc,e&=~ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ot(e),r=1<<n;t[n]=-1,e&=~r}}function Oh(t){if(z&6)throw Error(w(327));wr();var e=ao(t,0);if(!(e&1))return be(t,re()),null;var n=Ao(t,e);if(t.tag!==0&&n===2){var r=Ma(t);r!==0&&(e=r,n=uu(t,r))}if(n===1)throw n=Gi,On(t,0),Gt(t,e),be(t,re()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,In(t,Re,wt),be(t,re()),null}function wc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Dr=re()+500,rl&&vn())}}function jn(t){Jt!==null&&Jt.tag===0&&!(z&6)&&wr();var e=z;z|=1;var n=qe.transition,r=W;try{if(qe.transition=null,W=1,t)return t()}finally{W=r,qe.transition=n,z=e,!(z&6)&&vn()}}function Ec(){je=hr.current,q(hr)}function On(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,v0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(tc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&po();break;case 3:xr(),q(Le),q(Se),cc();break;case 5:uc(r);break;case 4:xr();break;case 13:q(X);break;case 19:q(X);break;case 10:sc(r.type._context);break;case 22:case 23:Ec()}n=n.return}if(fe=t,ie=t=ln(t.current,null),_e=je=e,le=0,Gi=null,vc=ll=zn=0,Re=Si=null,Nn!==null){for(e=0;e<Nn.length;e++)if(n=Nn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return t}function Zm(t,e){do{var n=ie;try{if(ic(),Qs.current=So,Co){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Co=!1}if(Un=0,ce=se=J=null,Ei=!1,Vi=0,_c.current=null,n===null||n.return===null){le=1,Gi=e,ie=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=yh(o);if(g!==null){g.flags&=-257,wh(g,o,l,s,e),g.mode&1&&vh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){vh(s,u,e),Cc();break e}a=Error(w(426))}}else if(Y&&l.mode&1){var x=yh(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),wh(x,o,l,s,e),nc(Or(a,l));break e}}s=a=Or(a,l),le!==4&&(le=2),Si===null?Si=[s]:Si.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=bm(s,a,e);dh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sn===null||!sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Fm(s,l,e);dh(s,y);break e}}s=s.return}while(s!==null)}ng(n)}catch(C){e=C,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function eg(){var t=Io.current;return Io.current=So,t===null?So:t}function Cc(){(le===0||le===3||le===2)&&(le=4),fe===null||!(zn&268435455)&&!(ll&268435455)||Gt(fe,_e)}function Ao(t,e){var n=z;z|=2;var r=eg();(fe!==t||_e!==e)&&(wt=null,On(t,e));do try{V0();break}catch(i){Zm(t,i)}while(!0);if(ic(),z=n,Io.current=r,ie!==null)throw Error(w(261));return fe=null,_e=0,le}function V0(){for(;ie!==null;)tg(ie)}function H0(){for(;ie!==null&&!my();)tg(ie)}function tg(t){var e=ig(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?ng(t):ie=e,_c.current=null}function ng(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=F0(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,ie=null;return}}else if(n=b0(n,e,je),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);le===0&&(le=5)}function In(t,e,n){var r=W,i=qe.transition;try{qe.transition=null,W=1,$0(t,e,n,r)}finally{qe.transition=i,W=r}return null}function $0(t,e,n,r){do wr();while(Jt!==null);if(z&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ty(t,s),t===fe&&(ie=fe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fs||(Fs=!0,sg(lo,function(){return wr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=W;W=1;var l=z;z|=4,_c.current=null,z0(t,n),Ym(n,t),d0(Wa),uo=!!ja,Wa=ja=null,t.current=n,j0(n),gy(),z=l,W=o,qe.transition=s}else t.current=n;if(Fs&&(Fs=!1,Jt=t,ko=i),s=t.pendingLanes,s===0&&(sn=null),yy(n.stateNode),be(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(To)throw To=!1,t=lu,lu=null,t;return ko&1&&t.tag!==0&&wr(),s=t.pendingLanes,s&1?t===au?Ii++:(Ii=0,au=t):Ii=0,vn(),null}function wr(){if(Jt!==null){var t=Mp(ko),e=qe.transition,n=W;try{if(qe.transition=null,W=16>t?16:t,Jt===null)var r=!1;else{if(t=Jt,Jt=null,ko=0,z&6)throw Error(w(331));var i=z;for(z|=4,S=t.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:Ci(8,d,s)}var c=d.child;if(c!==null)c.return=d,S=c;else for(;S!==null;){d=S;var h=d.sibling,g=d.return;if(Km(d),d===u){S=null;break}if(h!==null){h.return=g,S=h;break}S=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ci(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,S=p;break e}S=s.return}}var f=t.current;for(S=f;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=f;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ol(9,l)}}catch(C){ee(l,l.return,C)}if(l===o){S=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,S=y;break e}S=l.return}}if(z=i,vn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Jo,t)}catch{}r=!0}return r}finally{W=n,qe.transition=e}}return!1}function Dh(t,e,n){e=Or(n,e),e=bm(t,e,1),t=rn(t,e,1),e=ke(),t!==null&&(ss(t,1,e),be(t,e))}function ee(t,e,n){if(t.tag===3)Dh(t,t,n);else for(;e!==null;){if(e.tag===3){Dh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=Or(n,t),t=Fm(e,t,1),e=rn(e,t,1),t=ke(),e!==null&&(ss(e,1,t),be(e,t));break}}e=e.return}}function G0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(_e&n)===n&&(le===4||le===3&&(_e&130023424)===_e&&500>re()-yc?On(t,0):vc|=n),be(t,e)}function rg(t,e){e===0&&(t.mode&1?(e=As,As<<=1,!(As&130023424)&&(As=4194304)):e=1);var n=ke();t=xt(t,e),t!==null&&(ss(t,e,n),be(t,n))}function K0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rg(t,n)}function Q0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),rg(t,n)}var ig;ig=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Le.current)Pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pe=!1,M0(t,e,n);Pe=!!(t.flags&131072)}else Pe=!1,Y&&e.flags&1048576&&lm(e,_o,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ys(t,e),t=e.pendingProps;var i=Nr(e,Se.current);yr(e,n),i=hc(null,e,r,t,i,n);var s=fc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(s=!0,mo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(e),i.updater=il,e.stateNode=i,i._reactInternals=e,Ya(e,r,t,n),e=Za(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&ec(e),Te(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ys(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Y0(r),t=et(r,t),i){case 0:e=Ja(null,e,r,t,n);break e;case 1:e=Sh(null,e,r,t,n);break e;case 11:e=Eh(null,e,r,t,n);break e;case 14:e=Ch(null,e,r,et(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Ja(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Sh(t,e,r,i,n);case 3:e:{if(Wm(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dm(t,e),wo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Or(Error(w(423)),e),e=Ih(t,e,r,n,i);break e}else if(r!==i){i=Or(Error(w(424)),e),e=Ih(t,e,r,n,i);break e}else for(We=nn(e.stateNode.containerInfo.firstChild),Be=e,Y=!0,nt=null,n=mm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){e=Ot(t,e,n);break e}Te(t,e,r,n)}e=e.child}return e;case 5:return gm(e),t===null&&Ka(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ba(r,i)?o=null:s!==null&&Ba(r,s)&&(e.flags|=32),jm(t,e),Te(t,e,o,n),e.child;case 6:return t===null&&Ka(e),null;case 13:return Bm(t,e,n);case 4:return ac(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Pr(e,null,r,n):Te(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Eh(t,e,r,i,n);case 7:return Te(t,e,e.pendingProps,n),e.child;case 8:return Te(t,e,e.pendingProps.children,n),e.child;case 12:return Te(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(vo,r._currentValue),r._currentValue=o,s!==null)if(ut(s.value,o)){if(s.children===i.children&&!Le.current){e=Ot(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=At(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Qa(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yr(e,n),i=Ye(i),r=r(i),e.flags|=1,Te(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),Ch(t,e,r,i,n);case 15:return Um(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Ys(t,e),e.tag=1,Me(r)?(t=!0,mo(e)):t=!1,yr(e,n),fm(e,r,i),Ya(e,r,i,n),Za(null,e,r,!0,t,n);case 19:return Vm(t,e,n);case 22:return zm(t,e,n)}throw Error(w(156,e.tag))};function sg(t,e){return xp(t,e)}function q0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new q0(t,e,n,r)}function Sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y0(t){if(typeof t=="function")return Sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bu)return 11;if(t===Vu)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case nr:return Dn(n.children,i,s,e);case Wu:o=8,i|=8;break;case wa:return t=Qe(12,n,e,i|2),t.elementType=wa,t.lanes=s,t;case Ea:return t=Qe(13,n,e,i),t.elementType=Ea,t.lanes=s,t;case Ca:return t=Qe(19,n,e,i),t.elementType=Ca,t.lanes=s,t;case pp:return al(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hp:o=10;break e;case fp:o=9;break e;case Bu:o=11;break e;case Vu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function al(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=pp,t.lanes=n,t.stateNode={isHidden:!1},t}function ta(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function na(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ic(t,e,n,r,i,s,o,l,a){return t=new X0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(s),t}function J0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function og(t){if(!t)return hn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Me(n))return sm(t,n,e)}return e}function lg(t,e,n,r,i,s,o,l,a){return t=Ic(n,r,!0,t,i,s,o,l,a),t.context=og(null),n=t.current,r=ke(),i=on(n),s=At(r,i),s.callback=e??null,rn(n,s,i),t.current.lanes=i,ss(t,i,r),be(t,r),t}function ul(t,e,n,r){var i=e.current,s=ke(),o=on(i);return n=og(n),e.context===null?e.context=n:e.pendingContext=n,e=At(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rn(i,e,o),t!==null&&(lt(t,i,o,s),Ks(t,i,o)),o}function No(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tc(t,e){Lh(t,e),(t=t.alternate)&&Lh(t,e)}function Z0(){return null}var ag=typeof reportError=="function"?reportError:function(t){console.error(t)};function kc(t){this._internalRoot=t}cl.prototype.render=kc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));ul(t,e,null,null)};cl.prototype.unmount=kc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jn(function(){ul(null,t,null,null)}),e[Pt]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Up();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$t.length&&e!==0&&e<$t[n].priority;n++);$t.splice(n,0,t),n===0&&jp(t)}};function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mh(){}function ew(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=No(o);s.call(u)}}var o=lg(e,r,t,0,null,!1,!1,"",Mh);return t._reactRootContainer=o,t[Pt]=o.current,Ui(t.nodeType===8?t.parentNode:t),jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=No(a);l.call(u)}}var a=Ic(t,0,!1,null,null,!1,!1,"",Mh);return t._reactRootContainer=a,t[Pt]=a.current,Ui(t.nodeType===8?t.parentNode:t),jn(function(){ul(e,a,n,r)}),a}function hl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=No(o);l.call(a)}}ul(e,o,t,i)}else o=ew(n,e,t,i,r);return No(o)}bp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hi(e.pendingLanes);n!==0&&(Gu(e,n|1),be(e,re()),!(z&6)&&(Dr=re()+500,vn()))}break;case 13:jn(function(){var r=xt(t,1);if(r!==null){var i=ke();lt(r,t,1,i)}}),Tc(t,1)}};Ku=function(t){if(t.tag===13){var e=xt(t,134217728);if(e!==null){var n=ke();lt(e,t,134217728,n)}Tc(t,134217728)}};Fp=function(t){if(t.tag===13){var e=on(t),n=xt(t,e);if(n!==null){var r=ke();lt(n,t,e,r)}Tc(t,e)}};Up=function(){return W};zp=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};Oa=function(t,e,n){switch(e){case"input":if(Ta(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nl(r);if(!i)throw Error(w(90));gp(r),Ta(r,i)}}}break;case"textarea":vp(t,n);break;case"select":e=n.value,e!=null&&mr(t,!!n.multiple,e,!1)}};Tp=wc;kp=jn;var tw={usingClientEntryPoint:!1,Events:[ls,or,nl,Sp,Ip,wc]},si={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nw={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rp(t),t===null?null:t.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{Jo=Us.inject(nw),mt=Us}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tw;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(e))throw Error(w(200));return J0(t,e,null,n)};He.createRoot=function(t,e){if(!Ac(t))throw Error(w(299));var n=!1,r="",i=ag;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ic(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,Ui(t.nodeType===8?t.parentNode:t),new kc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Rp(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return jn(t)};He.hydrate=function(t,e,n){if(!dl(e))throw Error(w(200));return hl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Ac(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ag;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lg(e,null,t,1,n??null,i,!1,s,o),t[Pt]=e.current,Ui(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cl(e)};He.render=function(t,e,n){if(!dl(e))throw Error(w(200));return hl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!dl(t))throw Error(w(40));return t._reactRootContainer?(jn(function(){hl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};He.unstable_batchedUpdates=wc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return hl(t,e,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug)}catch(t){console.error(t)}}ug(),lp.exports=He;var rw=lp.exports,bh=rw;va.createRoot=bh.createRoot,va.hydrateRoot=bh.hydrateRoot;var Fh={};/**
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
 */const cg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Vr(e)},Vr=function(t){return new Error("Firebase Database ("+cg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const dg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new sw;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hg=function(t){const e=dg(t);return Nc.encodeByteArray(e,!0)},Ro=function(t){return hg(t).replace(/\./g,"")},Po=function(t){try{return Nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ow(t){return fg(void 0,t)}function fg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lw(n)||(t[n]=fg(t[n],e[n]));return t}function lw(t){return t!=="__proto__"}/**
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
 */function aw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uw=()=>aw().__FIREBASE_DEFAULTS__,cw=()=>{if(typeof process>"u"||typeof Fh>"u")return;const t=Fh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Po(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return uw()||cw()||dw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pg=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mg=t=>{const e=pg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gg=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},_g=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ro(JSON.stringify(n)),Ro(JSON.stringify(o)),""].join(".")}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function fw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pw(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yg(){return cg.NODE_ADMIN===!0}function mw(){try{return typeof indexedDB=="object"}catch{return!1}}function gw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const _w="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_w,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new yn(i,l,r)}}function vw(t,e){return t.replace(yw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yw=/\{\$([^}]+)}/g;/**
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
 */function Ki(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
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
 */const wg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ki(Po(s[0])||""),n=Ki(Po(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ww=function(t){const e=wg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ew=function(t){const e=wg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Lr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uh(s)&&Uh(o)){if(!Oo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
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
 */function Hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Cw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Sw(t,e){const n=new Iw(t,e);return n.subscribe.bind(n)}class Iw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ra),i.error===void 0&&(i.error=ra),i.complete===void 0&&(i.complete=ra);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ra(){}function xc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pe(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class Aw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rw(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nw(t){return t===Tn?void 0:t}function Rw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Aw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const xw={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Ow=B.INFO,Dw={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Lw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Dw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=Ow,this._logHandler=Lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Mw=(t,e)=>e.some(n=>t instanceof n);let zh,jh;function bw(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fw(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,hu=new WeakMap,Cg=new WeakMap,ia=new WeakMap,Dc=new WeakMap;function Uw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(an(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),Dc.set(e,t),e}function zw(t){if(hu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jw(t){fu=t(fu)}function Ww(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sa(this),e,...n);return Cg.set(r,e.sort?e.sort():[e]),an(r)}:Fw().includes(t)?function(...e){return t.apply(sa(this),e),an(Eg.get(this))}:function(...e){return an(t.apply(sa(this),e))}}function Bw(t){return typeof t=="function"?Ww(t):(t instanceof IDBTransaction&&zw(t),Mw(t,bw())?new Proxy(t,fu):t)}function an(t){if(t instanceof IDBRequest)return Uw(t);if(ia.has(t))return ia.get(t);const e=Bw(t);return e!==t&&(ia.set(t,e),Dc.set(e,t)),e}const sa=t=>Dc.get(t);function Vw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=an(o);return r&&o.addEventListener("upgradeneeded",a=>{r(an(o.result),a.oldVersion,a.newVersion,an(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Hw=["get","getKey","getAll","getAllKeys","count"],$w=["put","add","delete","clear"],oa=new Map;function Wh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return oa.set(e,s),s}jw(t=>({...t,get:(e,n,r)=>Wh(e,n)||t.get(e,n,r),has:(e,n)=>!!Wh(e,n)||t.has(e,n)}));/**
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
 */class Gw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",Bh="0.9.26";/**
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
 */const Wn=new Oc("@firebase/app"),Qw="@firebase/app-compat",qw="@firebase/analytics-compat",Yw="@firebase/analytics",Xw="@firebase/app-check-compat",Jw="@firebase/app-check",Zw="@firebase/auth",eE="@firebase/auth-compat",tE="@firebase/database",nE="@firebase/database-compat",rE="@firebase/functions",iE="@firebase/functions-compat",sE="@firebase/installations",oE="@firebase/installations-compat",lE="@firebase/messaging",aE="@firebase/messaging-compat",uE="@firebase/performance",cE="@firebase/performance-compat",dE="@firebase/remote-config",hE="@firebase/remote-config-compat",fE="@firebase/storage",pE="@firebase/storage-compat",mE="@firebase/firestore",gE="@firebase/firestore-compat",_E="firebase",vE="10.7.2";/**
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
 */const mu="[DEFAULT]",yE={[pu]:"fire-core",[Qw]:"fire-core-compat",[Yw]:"fire-analytics",[qw]:"fire-analytics-compat",[Jw]:"fire-app-check",[Xw]:"fire-app-check-compat",[Zw]:"fire-auth",[eE]:"fire-auth-compat",[tE]:"fire-rtdb",[nE]:"fire-rtdb-compat",[rE]:"fire-fn",[iE]:"fire-fn-compat",[sE]:"fire-iid",[oE]:"fire-iid-compat",[lE]:"fire-fcm",[aE]:"fire-fcm-compat",[uE]:"fire-perf",[cE]:"fire-perf-compat",[dE]:"fire-rc",[hE]:"fire-rc-compat",[fE]:"fire-gcs",[pE]:"fire-gcs-compat",[mE]:"fire-fst",[gE]:"fire-fst-compat","fire-js":"fire-js",[_E]:"fire-js-all"};/**
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
 */const Do=new Map,gu=new Map;function wE(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(gu.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Do.values())wE(n,t);return!0}function ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const EE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new us("app","Firebase",EE);/**
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
 */class CE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=vE;function Sg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=gg()),!n)throw un.create("no-options");const s=Do.get(i);if(s){if(Oo(n,s.options)&&Oo(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new Pw(i);for(const a of gu.values())o.addComponent(a);const l=new CE(n,r,o);return Do.set(i,l),l}function Lc(t=mu){const e=Do.get(t);if(!e&&t===mu&&gg())return Sg();if(!e)throw un.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let i=(r=yE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}Bn(new fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const SE="firebase-heartbeat-database",IE=1,Qi="firebase-heartbeat-store";let la=null;function Ig(){return la||(la=Vw(SE,IE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),la}async function TE(t){try{return await(await Ig()).transaction(Qi).objectStore(Qi).get(Tg(t))}catch(e){if(e instanceof yn)Wn.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Vh(t,e){try{const r=(await Ig()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,Tg(t)),await r.done}catch(n){if(n instanceof yn)Wn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function Tg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kE=1024,AE=30*24*60*60*1e3;class NE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hh(),{heartbeatsToSend:r,unsentEntries:i}=RE(this._heartbeatsCache.heartbeats),s=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Hh(){return new Date().toISOString().substring(0,10)}function RE(t,e=kE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$h(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$h(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mw()?gw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $h(t){return Ro(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xE(t){Bn(new fn("platform-logger",e=>new Gw(e),"PRIVATE")),Bn(new fn("heartbeat",e=>new NE(e),"PRIVATE")),_t(pu,Bh,t),_t(pu,Bh,"esm2017"),_t("fire-js","")}xE("");function Mc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OE=kg,Ag=new us("auth","Firebase",kg());/**
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
 */const Lo=new Oc("@firebase/auth");function DE(t,...e){Lo.logLevel<=B.WARN&&Lo.warn(`Auth (${$r}): ${t}`,...e)}function eo(t,...e){Lo.logLevel<=B.ERROR&&Lo.error(`Auth (${$r}): ${t}`,...e)}/**
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
 */function ct(t,...e){throw bc(t,...e)}function vt(t,...e){return bc(t,...e)}function LE(t,e,n){const r=Object.assign(Object.assign({},OE()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function bc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ag.create(t,...e)}function P(t,e,...n){if(!t)throw bc(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eo(e),new Error(e)}function Dt(t,e){t||It(e)}/**
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
 */function _u(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ME(){return Gh()==="http:"||Gh()==="https:"}function Gh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ME()||fw()||"connection"in navigator)?navigator.onLine:!0}function FE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Pc()||vg()}get(){return bE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fc(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ng{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const UE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zE=new cs(3e4,6e4);function wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ut(t,e,n,r,i={}){return Rg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Hr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ng.fetch()(Pg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Rg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UE),e);try{const i=new WE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw zs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw zs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw zs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw LE(t,d,u);ct(t,d)}}catch(i){if(i instanceof yn)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function ds(t,e,n,r,i={}){const s=await Ut(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Pg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fc(t.config,i):`${t.config.apiScheme}://${i}`}function jE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),zE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}function Kh(t){return t!==void 0&&t.enterprise!==void 0}class BE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function VE(t,e){return Ut(t,"GET","/v2/recaptchaConfig",wn(t,e))}/**
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
 */async function HE(t,e){return Ut(t,"POST","/v1/accounts:delete",e)}async function $E(t,e){return Ut(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GE(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=Uc(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ti(aa(i.auth_time)),issuedAtTime:Ti(aa(i.iat)),expirationTime:Ti(aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function aa(t){return Number(t)*1e3}function Uc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Po(n);return i?JSON.parse(i):(eo("Failed to decode base64 JWT payload"),null)}catch(i){return eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function KE(t){const e=Uc(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&QE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mr(t,$E(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?JE(s.providerUserInfo):[],l=XE(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new xg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function YE(t){const e=pe(t);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function JE(t){return t.map(e=>{var{providerId:n}=e,r=Mc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ZE(t,e){const n=await Rg(t,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Pg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ng.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eC(t,e){return Ut(t,"POST","/v2/accounts:revokeToken",wn(t,e))}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qi;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Wt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GE(this,e)}reload(){return YE(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mr(this,HE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:C,providerData:T,stsTokenManager:k}=n;P(m&&k,e,"internal-error");const N=qi.fromJSON(this.name,k);P(typeof m=="string",e,"internal-error"),Wt(c,e.name),Wt(h,e.name),P(typeof y=="boolean",e,"internal-error"),P(typeof C=="boolean",e,"internal-error"),Wt(g,e.name),Wt(_,e.name),Wt(v,e.name),Wt(x,e.name),Wt(p,e.name),Wt(f,e.name);const G=new Ln({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(G.providerData=T.map(b=>Object.assign({},b))),x&&(G._redirectEventId=x),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new qi;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mo(s),s}}/**
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
 */const Qh=new Map;function Tt(t){Dt(t instanceof Function,"Expected a class definition");let e=Qh.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qh.set(t,e),e)}/**
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
 */class Og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Og.type="NONE";const qh=Og;/**
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
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}class Er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=to(this.userKey,i.apiKey,s),this.fullPersistenceKey=to("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Er(Tt(qh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tt(qh);const o=to(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Ln._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Er(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Er(s,e,r))}}/**
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
 */function Yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fg(e))return"Blackberry";if(Ug(e))return"Webos";if(zc(e))return"Safari";if((e.includes("chrome/")||Lg(e))&&!e.includes("edge/"))return"Chrome";if(bg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dg(t=Ie()){return/firefox\//i.test(t)}function zc(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lg(t=Ie()){return/crios\//i.test(t)}function Mg(t=Ie()){return/iemobile/i.test(t)}function bg(t=Ie()){return/android/i.test(t)}function Fg(t=Ie()){return/blackberry/i.test(t)}function Ug(t=Ie()){return/webos/i.test(t)}function gl(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tC(t=Ie()){var e;return gl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nC(){return pw()&&document.documentMode===10}function zg(t=Ie()){return gl(t)||bg(t)||Ug(t)||Fg(t)||/windows phone/i.test(t)||Mg(t)}function rC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Yh(Ie());break;case"Worker":n=`${Yh(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
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
 */class iC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sC(t,e={}){return Ut(t,"GET","/v2/passwordPolicy",wn(t,e))}/**
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
 */const oC=6;class lC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class aC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xh(this),this.idTokenSubscription=new Xh(this),this.beforeStateQueue=new iC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pe(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sC(this),n=new lC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xn(t){return pe(t)}class Xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function uC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uC().appendChild(r)})}function cC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dC="https://www.google.com/recaptcha/enterprise.js?render=",hC="recaptcha-enterprise",fC="NO_RECAPTCHA";class pC{constructor(e){this.type=hC,this.auth=Xn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{VE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new BE(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Kh(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(fC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Kh(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Wg(dC+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Jh(t,e,n,r=!1){const i=new pC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function vu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Jh(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jh(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function mC(t,e){const n=ml(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oo(s,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function gC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _C(t,e,n){const r=Xn(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Bg(e),{host:o,port:l}=vC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yC()}function Bg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vC(t){const e=Bg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zh(o)}}}function Zh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function wC(t,e){return Ut(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function EC(t,e){return ds(t,"POST","/v1/accounts:signInWithPassword",wn(t,e))}/**
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
 */async function CC(t,e){return ds(t,"POST","/v1/accounts:signInWithEmailLink",wn(t,e))}async function SC(t,e){return ds(t,"POST","/v1/accounts:signInWithEmailLink",wn(t,e))}/**
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
 */class Yi extends jc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vu(e,n,"signInWithPassword",EC);case"emailLink":return CC(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vu(e,r,"signUpPassword",wC);case"emailLink":return SC(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cr(t,e){return ds(t,"POST","/v1/accounts:signInWithIdp",wn(t,e))}/**
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
 */const IC="http://localhost";class Vn extends jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:IC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hr(n)}return e}}/**
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
 */function TC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kC(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,r=pi(mi(t)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||e||t}class Wc{constructor(e){var n,r,i,s,o,l;const a=pi(mi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=TC((i=a.mode)!==null&&i!==void 0?i:null);P(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=kC(e);try{return new Wc(n)}catch{return null}}}/**
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
 */class Gr{constructor(){this.providerId=Gr.PROVIDER_ID}static credential(e,n){return Yi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wc.parseLink(n);return P(r,"argument-error"),Yi._fromEmailAndCode(e,r.code,r.tenantId)}}Gr.PROVIDER_ID="password";Gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hs extends Vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kt extends hs{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
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
 */class Qt extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
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
 */class qt extends hs{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Yt extends hs{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
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
 */async function AC(t,e){return ds(t,"POST","/v1/accounts:signUp",wn(t,e))}/**
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
 */class Hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=ef(r);return new Hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ef(r);return new Hn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bo extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bo(e,n,r,i)}}function Hg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(t,s,e,r):s})}async function NC(t,e,n=!1){const r=await Mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hn._forOperation(t,"link",r)}/**
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
 */async function RC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Mr(t,Hg(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Uc(s.idToken);P(o,r,"internal-error");const{sub:l}=o;return P(t.uid===l,r,"user-mismatch"),Hn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
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
 */async function $g(t,e,n=!1){const r="signIn",i=await Hg(t,r,e),s=await Hn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PC(t,e){return $g(Xn(t),e)}/**
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
 */async function Gg(t){const e=Xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xC(t,e,n){const r=Xn(t),o=await vu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AC).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Gg(t),a}),l=await Hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function OC(t,e,n){return PC(pe(t),Gr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gg(t),r})}/**
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
 */async function DC(t,e){return Ut(t,"POST","/v1/accounts:update",e)}/**
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
 */async function LC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mr(r,DC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MC(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function bC(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function FC(t,e,n,r){return pe(t).onAuthStateChanged(e,n,r)}function UC(t){return pe(t).signOut()}const Fo="__sak";/**
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
 */class Kg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zC(){const t=Ie();return zc(t)||gl(t)}const jC=1e3,WC=10;class Qg extends Kg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zC()&&rC(),this.fallbackToPolling=zg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qg.type="LOCAL";const BC=Qg;/**
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
 */class qg extends Kg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qg.type="SESSION";const Yg=qg;/**
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
 */function VC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await VC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_l.receivers=[];/**
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
 */function Bc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Bc("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function $C(t){yt().location.href=t}/**
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
 */function Xg(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function GC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QC(){return Xg()?self:null}/**
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
 */const Jg="firebaseLocalStorageDb",qC=1,Uo="firebaseLocalStorage",Zg="fbase_key";class fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vl(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function YC(){const t=indexedDB.deleteDatabase(Jg);return new fs(t).toPromise()}function yu(){const t=indexedDB.open(Jg,qC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:Zg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await YC(),e(await yu()))})})}async function tf(t,e,n){const r=vl(t,!0).put({[Zg]:e,value:n});return new fs(r).toPromise()}async function XC(t,e){const n=vl(t,!1).get(e),r=await new fs(n).toPromise();return r===void 0?null:r.value}function nf(t,e){const n=vl(t,!0).delete(e);return new fs(n).toPromise()}const JC=800,ZC=3;class e_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(QC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GC(),!this.activeServiceWorker)return;this.sender=new HC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yu();return await tf(e,Fo,"1"),await nf(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vl(i,!1).getAll();return new fs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e_.type="LOCAL";const eS=e_;new cs(3e4,6e4);/**
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
 */function tS(t,e){return e?Tt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vc extends jc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nS(t){return $g(t.auth,new Vc(t),t.bypassAuthState)}function rS(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),RC(n,new Vc(t),t.bypassAuthState)}async function iS(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),NC(n,new Vc(t),t.bypassAuthState)}/**
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
 */class t_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nS;case"linkViaPopup":case"linkViaRedirect":return iS;case"reauthViaPopup":case"reauthViaRedirect":return rS;default:ct(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sS=new cs(2e3,1e4);class fr extends t_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sS.get())};e()}}fr.currentPopupAction=null;/**
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
 */const oS="pendingRedirect",no=new Map;class lS extends t_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await aS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aS(t,e){const n=dS(e),r=cS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uS(t,e){no.set(t._key(),e)}function cS(t){return Tt(t._redirectPersistence)}function dS(t){return to(oS,t.config.apiKey,t.name)}async function hS(t,e,n=!1){const r=Xn(t),i=tS(r,e),o=await new lS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fS=10*60*1e3;class pS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!n_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fS&&this.cachedEventUids.clear(),this.cachedEventUids.has(rf(e))}saveEventToCache(e){this.cachedEventUids.add(rf(e)),this.lastProcessedEventTime=Date.now()}}function rf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function n_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n_(t);default:return!1}}/**
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
 */async function gS(t,e={}){return Ut(t,"GET","/v1/projects",e)}/**
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
 */const _S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vS=/^https?/;async function yS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gS(t);for(const n of e)try{if(wS(n))return}catch{}ct(t,"unauthorized-domain")}function wS(t){const e=_u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vS.test(n))return!1;if(_S.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ES=new cs(3e4,6e4);function sf(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CS(t){return new Promise((e,n)=>{var r,i,s;function o(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),n(vt(t,"network-request-failed"))},timeout:ES.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yt().gapi)===null||s===void 0)&&s.load)o();else{const l=cC("iframefcb");return yt()[l]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},Wg(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ro=null,e})}let ro=null;function SS(t){return ro=ro||CS(t),ro}/**
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
 */const IS=new cs(5e3,15e3),TS="__/auth/iframe",kS="emulator/auth/iframe",AS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RS(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fc(e,kS):`https://${t.config.authDomain}/${TS}`,r={apiKey:e.apiKey,appName:t.name,v:$r},i=NS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function PS(t){const e=await SS(t),n=yt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:RS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),l=yt().setTimeout(()=>{s(o)},IS.get());function a(){yt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const xS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OS=500,DS=600,LS="_blank",MS="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bS(t,e,n,r=OS,i=DS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},xS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(l=Lg(u)?LS:n),Dg(u)&&(e=e||MS,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(tC(u)&&l!=="_self")return FS(e||"",l),new of(null);const c=window.open(e||"",l,d);P(c,t,"popup-blocked");try{c.focus()}catch{}return new of(c)}function FS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const US="__/auth/handler",zS="emulator/auth/handler",jS=encodeURIComponent("fac");async function lf(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:i};if(e instanceof Vg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof hs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${jS}=${encodeURIComponent(a)}`:"";return`${WS(t)}?${Hr(l).slice(1)}${u}`}function WS({config:t}){return t.emulator?Fc(t,zS):`https://${t.authDomain}/${US}`}/**
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
 */const ua="webStorageSupport";class BS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yg,this._completeRedirectFn=hS,this._overrideRedirectResult=uS}async _openPopup(e,n,r,i){var s;Dt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lf(e,n,r,_u(),i);return bS(e,o,Bc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lf(e,n,r,_u(),i);return $C(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PS(e),r=new pS(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ua,{type:ua},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ua];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zg()||zc()||gl()}}const VS=BS;var af="@firebase/auth",uf="1.5.1";/**
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
 */class HS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $S(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GS(t){Bn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},u=new aC(r,i,s,a);return gC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new fn("auth-internal",e=>{const n=Xn(e.getProvider("auth").getImmediate());return(r=>new HS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(af,uf,$S(t)),_t(af,uf,"esm2017")}/**
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
 */const KS=5*60,QS=_g("authIdTokenMaxAge")||KS;let cf=null;const qS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QS)return;const i=n==null?void 0:n.token;cf!==i&&(cf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YS(t=Lc()){const e=ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mC(t,{popupRedirectResolver:VS,persistence:[eS,BC,Yg]}),r=_g("authTokenSyncURL");if(r){const s=qS(r);bC(n,s,()=>s(n.currentUser)),MC(n,o=>s(o))}const i=pg("auth");return i&&_C(n,`http://${i}`),n}GS("Browser");var XS="firebase",JS="10.7.2";/**
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
 */_t(XS,JS,"app");var df={};const hf="@firebase/database",ff="1.0.2";/**
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
 */let r_="";function ZS(t){r_=t}/**
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
 */class eI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ki(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const i_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eI(e)}}catch{}return new tI},Pn=i_("localStorage"),wu=i_("sessionStorage");/**
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
 */const Sr=new Oc("@firebase/database"),nI=function(){let t=1;return function(){return t++}}(),s_=function(t){const e=kw(t),n=new Cw;n.update(e);const r=n.digest();return Nc.encodeByteArray(r)},ps=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ps.apply(null,r):typeof r=="object"?e+=he(r):e+=r,e+=" "}return e};let Mn=null,pf=!0;const rI=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Sr.logLevel=B.VERBOSE,Mn=Sr.log.bind(Sr),e&&wu.set("logging_enabled",!0)):typeof t=="function"?Mn=t:(Mn=null,wu.remove("logging_enabled"))},Ce=function(...t){if(pf===!0&&(pf=!1,Mn===null&&wu.get("logging_enabled")===!0&&rI(!0)),Mn){const e=ps.apply(null,t);Mn(e)}},ms=function(t){return function(...e){Ce(t,...e)}},Eu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ps(...t);Sr.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${ps(...t)}`;throw Sr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+ps(...t);Sr.warn(e)},iI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},o_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},br="[MIN_NAME]",$n="[MAX_NAME]",Kr=function(t,e){if(t===e)return 0;if(t===br||e===$n)return-1;if(e===br||t===$n)return 1;{const n=mf(t),r=mf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},oI=function(t,e){return t===e?0:t<e?-1:1},oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Hc=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=he(e[r]),n+=":",n+=Hc(t[e[r]]);return n+="}",n},l_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const a_=function(t){E(!o_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},lI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const cI=new RegExp("^-?(0*)\\d{1,10}$"),dI=-2147483648,hI=2147483647,mf=function(t){if(cI.test(t)){const e=Number(t);if(e>=dI&&e<=hI)return e}return null},Qr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},fI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class mI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Ir{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ir.OWNER="owner";/**
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
 */const $c="5",u_="v",c_="s",d_="r",h_="f",f_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,p_="ls",m_="p",Cu="ac",g_="websocket",__="long_polling";/**
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
 */class v_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function y_(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===g_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===__)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gI(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class _I{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ow(this.counters_)}}/**
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
 */const ca={},da={};function Gc(t){const e=t.toString();return ca[e]||(ca[e]=new _I),ca[e]}function vI(t,e){const n=t.toString();return da[n]||(da[n]=e()),da[n]}/**
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
 */class yI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Qr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gf="start",wI="close",EI="pLPCommand",CI="pRTLPCB",w_="id",E_="pw",C_="ser",SI="cb",II="seg",TI="ts",kI="d",AI="dframe",S_=1870,I_=30,NI=S_-I_,RI=25e3,PI=3e4;class pr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ms(e),this.stats_=Gc(n),this.urlFn=a=>(this.appCheckToken&&(a[Cu]=this.appCheckToken),y_(n,__,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PI)),sI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gf)this.id=l,this.password=a;else if(o===wI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[gf]="t",r[C_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[SI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[u_]=$c,this.transportSessionId&&(r[c_]=this.transportSessionId),this.lastSessionId&&(r[p_]=this.lastSessionId),this.applicationId&&(r[m_]=this.applicationId),this.appCheckToken&&(r[Cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&f_.test(location.hostname)&&(r[d_]=h_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pr.forceAllow_=!0}static forceDisallow(){pr.forceDisallow_=!0}static isAvailable(){return pr.forceAllow_?!0:!pr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lI()&&!aI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hg(n),i=l_(r,NI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[AI]="t",r[w_]=e,r[E_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nI(),window[EI+this.uniqueCallbackIdentifier]=e,window[CI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[w_]=this.myID,e[E_]=this.myPW,e[C_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I_+r.length<=S_;){const o=this.pendingSegs.shift();r=r+"&"+II+i+"="+o.seg+"&"+TI+i+"="+o.ts+"&"+kI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(RI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const xI=16384,OI=45e3;let zo=null;typeof MozWebSocket<"u"?zo=MozWebSocket:typeof WebSocket<"u"&&(zo=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ms(this.connId),this.stats_=Gc(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[u_]=$c,typeof location<"u"&&location.hostname&&f_.test(location.hostname)&&(o[d_]=h_),n&&(o[c_]=n),r&&(o[p_]=r),i&&(o[Cu]=i),s&&(o[m_]=s),y_(e,g_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let r;yg(),this.mySock=new zo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&zo!==null&&!rt.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ki(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=l_(n,xI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
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
 */class Xi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pr,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of Xi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Xi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xi.globalTransportInitialized_=!1;/**
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
 */const DI=6e4,LI=5e3,MI=10*1024,bI=100*1024,ha="t",_f="d",FI="s",vf="r",UI="e",yf="o",wf="a",Ef="n",Cf="p",zI="h";class jI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ms("c:"+this.id+":"),this.transportManager_=new Xi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ha in e){const n=e[ha];n===wf?this.upgradeIfSecondaryHealthy_():n===vf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oi("t",e),r=oi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ef,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oi("t",e),r=oi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oi(ha,e);if(_f in e){const r=e[_f];if(n===zI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ef){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===FI?this.onConnectionShutdown_(r):n===vf?this.onReset_(r):n===UI?Eu("Server Error: "+r):n===yf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Eu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$c!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class T_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class k_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class jo extends k_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jo}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sf=32,If=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new V("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function A_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function WI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function N_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function R_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return xe(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Qc(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class BI{constructor(e,n){this.errorPrefix_=n,this.parts_=N_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=pl(this.parts_[r]);P_(this)}}function VI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pl(e),P_(t)}function HI(t){const e=t.parts_.pop();t.byteLength_-=pl(e),t.parts_.length>0&&(t.byteLength_-=1)}function P_(t){if(t.byteLength_>If)throw new Error(t.errorPrefix_+"has a key path longer than "+If+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sf+") or object contains a cycle "+kn(t))}function kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class qc extends k_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qc}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const li=1e3,$I=60*5*1e3,Tf=30*1e3,GI=1.3,KI=3e4,QI="server_kill",kf=3;class Nt extends T_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Nt.nextPersistentConnectionId_++,this.log_=ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=li,this.maxReconnectDelay_=$I,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!yg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(he(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new fl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Nt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const r=Lr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ew(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ww(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Eu("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KI&&(this.reconnectDelay_=li),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new jI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Fe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(QI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Fe(c),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],du(this.interruptReasons_)&&(this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kf&&(this.reconnectDelay_=Tf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+r_.replace(/\./g,"-")]=1,Pc()?e["framework.cordova"]=1:vg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jo.getInstance().currentlyOnline();return du(this.interruptReasons_)&&e}}Nt.nextPersistentConnectionId_=0;Nt.nextConnectionId_=0;/**
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
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
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
 */class yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(br,e),i=new M(br,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
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
 */let js;class x_ extends yl{static get __EMPTY_NODE(){return js}static set __EMPTY_NODE(e){js=e}compare(e,n){return Kr(e.name,n.name)}isDefinedOn(e){throw Vr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M($n,js)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,js)}toString(){return".key"}}const Tr=new x_;/**
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
 */class Ws{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class de{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??de.RED,this.left=i??Oe.EMPTY_NODE,this.right=s??Oe.EMPTY_NODE}copy(e,n,r,i,s){return new de(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Oe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}de.RED=!0;de.BLACK=!1;class qI{copy(e,n,r,i,s){return this}insert(e,n,r){return new de(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,de.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,de.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ws(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new qI;/**
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
 */function YI(t,e){return Kr(t.name,e.name)}function Yc(t,e){return Kr(t,e)}/**
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
 */let Su;function XI(t){Su=t}const O_=function(t){return typeof t=="number"?"number:"+a_(t):"string:"+t},D_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else E(t===Su||t.isEmpty(),"priority of unexpected type.");E(t===Su||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Af;class ue{constructor(e,n=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),D_(this.priorityNode_)}static set __childrenNodeConstructor(e){Af=e}static get __childrenNodeConstructor(){return Af}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:L(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+O_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=a_(this.value_):e+=this.value_,this.lazyHash_=s_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ue.VALUE_TYPE_ORDER.indexOf(n),s=ue.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let L_,M_;function JI(t){L_=t}function ZI(t){M_=t}class eT extends yl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Kr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M($n,new ue("[PRIORITY-POST]",M_))}makePost(e,n){const r=L_(e);return new M(n,new ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const te=new eT;/**
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
 */const tT=Math.log(2);class nT{constructor(e){const n=s=>parseInt(Math.log(s)/tT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new de(h,c.node,de.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new de(h,c.node,de.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const x=c-_,p=c;c-=_;const f=i(x+1,p),m=t[x],y=n?n(m):m;g(new de(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),x=Math.pow(2,a.count-(_+1));v?h(x,de.BLACK):(h(x,de.BLACK),h(x,de.RED))}return d},o=new nT(t.length),l=s(o);return new Oe(r||e,l)};/**
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
 */let fa;const er={};class kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(er&&te,"ChildrenNode.ts has not been loaded"),fa=fa||new kt({".priority":er},{".priority":te}),fa}get(e){const n=Lr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Tr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Wo(r,e.getCompare()):l=er;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new kt(d,u)}addToIndexes(e,n){const r=xo(this.indexes_,(i,s)=>{const o=Lr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===er)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Wo(l,o.getCompare())}else return er;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=xo(this.indexes_,i=>{if(i===er)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new kt(r,this.indexSet_)}}/**
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
 */let ai;class R{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&D_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ai||(ai=new R(new Oe(Yc),null,kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ai}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ai:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ai:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{E(L(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(te,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+O_(this.getPriority().val())+":"),this.forEachChild(te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":s_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gs?-1:0}withIndex(e){if(e===Tr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Tr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(te),i=n.getIterator(te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Tr?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rT extends R{constructor(){super(new Oe(Yc),R.EMPTY_NODE,kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const gs=new rT;Object.defineProperties(M,{MIN:{value:new M(br,R.EMPTY_NODE)},MAX:{value:new M($n,gs)}});x_.__EMPTY_NODE=R.EMPTY_NODE;ue.__childrenNodeConstructor=R;XI(gs);ZI(gs);/**
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
 */const iT=!0;function ge(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ue(n,ge(e))}if(!(t instanceof Array)&&iT){const n=[];let r=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=Wo(n,YI,o=>o.name,Yc);if(r){const o=Wo(n,te.getCompare());return new R(s,ge(e),new kt({".priority":o},{".priority":te}))}else return new R(s,ge(e),kt.Default)}else{let n=R.EMPTY_NODE;return Ue(t,(r,i)=>{if(Ft(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}JI(ge);/**
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
 */class sT extends yl{constructor(e){super(),this.indexPath_=e,E(!F(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Kr(e.name,n.name):s}makePost(e,n){const r=ge(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,gs);return new M($n,e)}toString(){return N_(this.indexPath_,0).join("/")}}/**
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
 */class oT extends yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Kr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=ge(e);return new M(n,r)}toString(){return".value"}}const lT=new oT;/**
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
 */function b_(t){return{type:"value",snapshotNode:t}}function Fr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ji(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Xc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ji(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Fr(n,r)):o.trackChildChange(Zi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(te,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ji(i,s))}),n.isLeafNode()||n.forEachChild(te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Zi(i,s,o))}else r.trackChildChange(Fr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class es{constructor(e){this.indexedFilter_=new Xc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=es.getStartPost_(e),this.endPost_=es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(te,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class uT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Zi(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ji(n,c));const v=l.updateImmediateChild(n,R.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Fr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ji(u.name,u.node)),s.trackChildChange(Fr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,R.EMPTY_NODE)):e}}/**
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
 */class Jc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:br}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$n}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new Jc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cT(t){return t.loadsAllData()?new Xc(t.getIndex()):t.hasLimit()?new uT(t):new es(t)}function Nf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===lT?n="$value":t.index_===Tr?n="$key":(E(t.index_ instanceof sT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=he(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+he(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=he(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
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
 */class Bo extends T_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ms("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Bo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Nf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Lr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Bo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Nf(e._queryParams),r=e._path.toString(),i=new fl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ki(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class dT{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Vo(){return{value:null,children:new Map}}function F_(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,Vo());const i=t.children.get(r);e=H(e),F_(i,e,n)}}function Iu(t,e,n){t.value!==null?n(e,t.value):hT(t,(r,i)=>{const s=new V(e.toString()+"/"+r);Iu(i,s,n)})}function hT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class fT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Pf=10*1e3,pT=30*1e3,mT=5*60*1e3;class gT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fT(e);const r=Pf+(pT-Pf)*Math.random();ki(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ue(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*mT))}}/**
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
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function U_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ed(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ho{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=st.ACK_USER_WRITE,this.source=U_()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Ho(j(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new Ho(H(this.path),this.affectedTree,this.revert)}}/**
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
 */class ts{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new ts(this.source,j()):new ts(this.source,H(this.path))}}/**
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
 */class Gn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=st.OVERWRITE}operationForChild(e){return F(this.path)?new Gn(this.source,j(),this.snap.getImmediateChild(e)):new Gn(this.source,H(this.path),this.snap)}}/**
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
 */class ns{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=st.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new Gn(this.source,j(),n.value):new ns(this.source,j(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ns(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Kn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _T{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(aT(o.childName,o.snapshotNode))}),ui(t,i,"child_removed",e,r,n),ui(t,i,"child_added",e,r,n),ui(t,i,"child_moved",s,r,n),ui(t,i,"child_changed",e,r,n),ui(t,i,"value",e,r,n),i}function ui(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>wT(t,l,a)),o.forEach(l=>{const a=yT(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function yT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wT(t,e,n){if(e.childName==null||n.childName==null)throw Vr("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function wl(t,e){return{eventCache:t,serverCache:e}}function Ai(t,e,n,r){return wl(new Kn(e,n,r),t.serverCache)}function z_(t,e,n,r){return wl(t.eventCache,new Kn(e,n,r))}function Tu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let pa;const ET=()=>(pa||(pa=new Oe(oI)),pa);class Q{constructor(e,n=ET()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Ue(e,(r,i)=>{n=n.set(new V(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(F(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:oe(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new Q(null)}}set(e,n){if(F(e))return new Q(n,this.children);{const r=L(e),s=(this.children.get(r)||new Q(null)).set(H(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(F(e))return n;{const r=L(e),s=(this.children.get(r)||new Q(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(H(e),oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),oe(n,i),r):new Q(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new Q(null))}}function Ni(t,e,n){if(F(e))return new at(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xe(i,e);return s=s.updateChild(o,n),new at(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new at(s)}}}function xf(t,e,n){let r=t;return Ue(n,(i,s)=>{r=Ni(r,oe(e,i),s)}),r}function Of(t,e){if(F(e))return at.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new at(n)}}function ku(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function Df(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function cn(t,e){if(F(e))return t;{const n=Jn(t,e);return n!=null?new at(new Q(n)):new at(t.writeTree_.subtree(e))}}function Au(t){return t.writeTree_.isEmpty()}function Ur(t,e){return j_(j(),t.writeTree_,e)}function j_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=j_(oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(oe(t,".priority"),r)),n}}/**
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
 */function td(t,e){return H_(e,t)}function CT(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ni(t.visibleWrites,e,n)),t.lastWriteId=r}function ST(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function IT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&TT(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return kT(t),!0;if(r.snap)t.visibleWrites=Of(t.visibleWrites,r.path);else{const l=r.children;Ue(l,a=>{t.visibleWrites=Of(t.visibleWrites,oe(r.path,a))})}return!0}else return!1}function TT(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(oe(t.path,n),e))return!0;return!1}function kT(t){t.visibleWrites=W_(t.allWrites,AT,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AT(t){return t.visible}function W_(t,e,n){let r=at.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=xe(n,o),r=Ni(r,l,s.snap)):it(o,n)&&(l=xe(o,n),r=Ni(r,j(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=xe(n,o),r=xf(r,l,s.children);else if(it(o,n))if(l=xe(o,n),F(l))r=xf(r,j(),s.children);else{const a=Lr(s.children,L(l));if(a){const u=a.getChild(H(l));r=Ni(r,j(),u)}}}else throw Vr("WriteRecord should have .snap or .children")}}return r}function B_(t,e,n,r,i){if(!r&&!i){const s=Jn(t.visibleWrites,e);if(s!=null)return s;{const o=cn(t.visibleWrites,e);if(Au(o))return n;if(n==null&&!ku(o,j()))return null;{const l=n||R.EMPTY_NODE;return Ur(o,l)}}}else{const s=cn(t.visibleWrites,e);if(!i&&Au(s))return n;if(!i&&n==null&&!ku(s,j()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=W_(t.allWrites,o,e),a=n||R.EMPTY_NODE;return Ur(l,a)}}}function NT(t,e,n){let r=R.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=cn(t.visibleWrites,e);return n.forEachChild(te,(o,l)=>{const a=Ur(cn(s,new V(o)),l);r=r.updateImmediateChild(o,a)}),Df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=cn(t.visibleWrites,e);return Df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function RT(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=oe(e,n);if(ku(t.visibleWrites,s))return null;{const o=cn(t.visibleWrites,s);return Au(o)?i.getChild(n):Ur(o,i.getChild(n))}}function PT(t,e,n,r){const i=oe(e,n),s=Jn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=cn(t.visibleWrites,i);return Ur(o,r.getNode().getImmediateChild(n))}else return null}function xT(t,e){return Jn(t.visibleWrites,e)}function OT(t,e,n,r,i,s,o){let l;const a=cn(t.visibleWrites,e),u=Jn(a,j());if(u!=null)l=u;else if(n!=null)l=Ur(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function DT(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function $o(t,e,n,r){return B_(t.writeTree,t.treePath,e,n,r)}function nd(t,e){return NT(t.writeTree,t.treePath,e)}function Lf(t,e,n,r){return RT(t.writeTree,t.treePath,e,n,r)}function Go(t,e){return xT(t.writeTree,oe(t.treePath,e))}function LT(t,e,n,r,i,s){return OT(t.writeTree,t.treePath,e,n,r,i,s)}function rd(t,e,n){return PT(t.writeTree,t.treePath,e,n)}function V_(t,e){return H_(oe(t.treePath,e),t.writeTree)}function H_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class MT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Zi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ji(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Fr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Zi(r,e.snapshotNode,i.oldSnap));else throw Vr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const $_=new bT;class id{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qn(this.viewCache_),s=LT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function FT(t){return{filter:t}}function UT(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zT(t,e,n,r,i){const s=new MT;let o,l;if(n.type===st.OVERWRITE){const u=n;u.source.fromUser?o=Nu(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=Ko(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===st.MERGE){const u=n;u.source.fromUser?o=WT(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ru(t,e,u.path,u.children,r,i,l,s))}else if(n.type===st.ACK_USER_WRITE){const u=n;u.revert?o=HT(t,e,u.path,r,i,s):o=BT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===st.LISTEN_COMPLETE)o=VT(t,e,n.path,r,s);else throw Vr("Unknown operation type: "+n.type);const a=s.getChanges();return jT(e,o,a),{viewCache:o,changes:a}}function jT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Tu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(b_(Tu(e)))}}function G_(t,e,n,r,i,s){const o=e.eventCache;if(Go(r,n)!=null)return e;{let l,a;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Qn(e),d=u instanceof R?u:R.EMPTY_NODE,c=nd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=$o(r,Qn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){E(pn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Lf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=H(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Lf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=rd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ai(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Ko(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=L(n);if(!a.isCompleteForPath(n)&&pn(n)>1)return e;const _=H(n),x=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),x):u=d.updateChild(a.getNode(),g,x,_,$_,null)}const c=z_(e,u,a.isFullyInitialized()||F(n),d.filtersNodes()),h=new id(i,c,s);return G_(t,c,n,i,h,l)}function Nu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new id(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ai(e,u,!0,t.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ai(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=H(n),g=l.getNode().getImmediateChild(c);let _;if(F(h))_=r;else{const v=d.getCompleteChild(c);v!=null?A_(h)===".priority"&&v.getChild(R_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=R.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Ai(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Mf(t,e){return t.eventCache.isCompleteForChild(e)}function WT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=oe(n,a);Mf(e,L(d))&&(l=Nu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=oe(n,a);Mf(e,L(d))||(l=Nu(t,l,d,u,i,s,o))}),l}function bf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ru(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=bf(t,g,h);a=Ko(t,a,new V(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=bf(t,_,h);a=Ko(t,a,new V(c),v,i,s,o,l)}}),a}function BT(t,e,n,r,i,s,o){if(Go(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ko(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new Q(null);return a.getNode().forEachChild(Tr,(d,c)=>{u=u.set(new V(d),c)}),Ru(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const h=oe(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Ru(t,e,n,u,i,s,l,o)}}function VT(t,e,n,r,i){const s=e.serverCache,o=z_(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return G_(t,o,n,r,$_,i)}function HT(t,e,n,r,i,s){let o;if(Go(r,n)!=null)return e;{const l=new id(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||L(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=$o(r,Qn(e));else{const c=e.serverCache.getNode();E(c instanceof R,"serverChildren would be complete if leaf node"),d=nd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=L(n);let c=rd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,H(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,R.EMPTY_NODE,H(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$o(r,Qn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Go(r,j())!=null,Ai(e,u,o,t.filter.filtersNodes())}}/**
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
 */class $T{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xc(r.getIndex()),s=cT(r);this.processor_=FT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),d=new Kn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Kn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=wl(c,d),this.eventGenerator_=new _T(this.query_)}get query(){return this.query_}}function GT(t){return t.viewCache_.serverCache.getNode()}function KT(t,e){const n=Qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Ff(t){return t.eventRegistrations_.length===0}function QT(t,e){t.eventRegistrations_.push(e)}function Uf(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function zf(t,e,n,r){e.type===st.MERGE&&e.source.queryId!==null&&(E(Qn(t.viewCache_),"We should always have a full cache before handling merges"),E(Tu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=zT(t.processor_,i,e,n,r);return UT(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,K_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function qT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(s,o)=>{r.push(Fr(s,o))}),n.isFullyInitialized()&&r.push(b_(n.getNode())),K_(t,r,n.getNode(),e)}function K_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return vT(t.eventGenerator_,e,n,i)}/**
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
 */let Qo;class YT{constructor(){this.views=new Map}}function XT(t){E(!Qo,"__referenceConstructor has already been defined"),Qo=t}function JT(){return E(Qo,"Reference.ts has not been loaded"),Qo}function ZT(t){return t.views.size===0}function sd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),zf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(zf(o,e,n,r));return s}}function ek(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=$o(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=nd(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const u=wl(new Kn(l,a,!1),new Kn(r,i,!1));return new $T(e,u)}return o}function tk(t,e,n,r,i,s){const o=ek(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),QT(o,n),qT(o,n)}function nk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=mn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Uf(u,n,r)),Ff(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Uf(a,n,r)),Ff(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!mn(t)&&s.push(new(JT())(e._repo,e._path)),{removed:s,events:o}}function Q_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function kr(t,e){let n=null;for(const r of t.views.values())n=n||KT(r,e);return n}function q_(t,e){if(e._queryParams.loadsAllData())return El(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Y_(t,e){return q_(t,e)!=null}function mn(t){return El(t)!=null}function El(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let qo;function rk(t){E(!qo,"__referenceConstructor has already been defined"),qo=t}function ik(){return E(qo,"Reference.ts has not been loaded"),qo}let sk=1;class jf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=DT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function X_(t,e,n,r,i){return CT(t.pendingWriteTree_,e,n,r,i),i?_s(t,new Gn(U_(),e,n)):[]}function xn(t,e,n=!1){const r=ST(t.pendingWriteTree_,e);if(IT(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(j(),!0):Ue(r.children,o=>{s=s.set(new V(o),!0)}),_s(t,new Ho(r.path,s,n))}else return[]}function Cl(t,e,n){return _s(t,new Gn(Zc(),e,n))}function ok(t,e,n){const r=Q.fromObject(n);return _s(t,new ns(Zc(),e,r))}function lk(t,e){return _s(t,new ts(Zc(),e))}function ak(t,e,n){const r=ld(t,n);if(r){const i=ad(r),s=i.path,o=i.queryId,l=xe(s,e),a=new ts(ed(o),l);return ud(t,s,a)}else return[]}function Pu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Y_(o,e))){const a=nk(o,e,n,r);ZT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>mn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=dk(h);for(let _=0;_<g.length;++_){const v=g[_],x=v.query,p=ev(t,v);t.listenProvider_.startListening(Ri(x),Yo(t,x),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ri(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Sl(h));t.listenProvider_.stopListening(Ri(h),g)}))}hk(t,u)}return l}function uk(t,e,n,r){const i=ld(t,r);if(i!=null){const s=ad(i),o=s.path,l=s.queryId,a=xe(o,e),u=new Gn(ed(l),a,n);return ud(t,o,u)}else return[]}function ck(t,e,n,r){const i=ld(t,r);if(i){const s=ad(i),o=s.path,l=s.queryId,a=xe(o,e),u=Q.fromObject(n),d=new ns(ed(l),a,u);return ud(t,o,d)}else return[]}function Wf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=xe(h,i);s=s||kr(g,_),o=o||mn(g)});let l=t.syncPointTree_.get(i);l?(o=o||mn(l),s=s||kr(l,j())):(l=new YT,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=kr(_,j());v&&(s=s.updateImmediateChild(g,v))}));const u=Y_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Sl(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=fk();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=td(t.pendingWriteTree_,i);let c=tk(l,e,n,d,s,a);if(!u&&!o&&!r){const h=q_(l,e);c=c.concat(pk(t,e,h))}return c}function od(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),u=kr(l,a);if(u)return u});return B_(i,e,s,n,!0)}function _s(t,e){return J_(e,t.syncPointTree_,null,td(t.pendingWriteTree_,j()))}function J_(t,e,n,r){if(F(t.path))return Z_(t,e,n,r);{const i=e.get(j());n==null&&i!=null&&(n=kr(i,j()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=V_(r,o);s=s.concat(J_(l,a,u,d))}return i&&(s=s.concat(sd(i,t,r,n))),s}}function Z_(t,e,n,r){const i=e.get(j());n==null&&i!=null&&(n=kr(i,j()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=V_(r,o),d=t.operationForChild(o);d&&(s=s.concat(Z_(d,l,a,u)))}),i&&(s=s.concat(sd(i,t,r,n))),s}function ev(t,e){const n=e.query,r=Yo(t,n);return{hashFn:()=>(GT(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ak(t,n._path,r):lk(t,n._path);{const s=uI(i,n);return Pu(t,n,null,s)}}}}function Yo(t,e){const n=Sl(e);return t.queryToTagMap.get(n)}function Sl(t){return t._path.toString()+"$"+t._queryIdentifier}function ld(t,e){return t.tagToQueryMap.get(e)}function ad(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function ud(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=td(t.pendingWriteTree_,e);return sd(r,n,i,null)}function dk(t){return t.fold((e,n,r)=>{if(n&&mn(n))return[El(n)];{let i=[];return n&&(i=Q_(n)),Ue(r,(s,o)=>{i=i.concat(o)}),i}})}function Ri(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ik())(t._repo,t._path):t}function hk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Sl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function fk(){return sk++}function pk(t,e,n){const r=e._path,i=Yo(t,e),s=ev(t,n),o=t.listenProvider_.startListening(Ri(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!mn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!F(u)&&d&&mn(d))return[El(d).query];{let h=[];return d&&(h=h.concat(Q_(d).map(g=>g.query))),Ue(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ri(d),Yo(t,d))}}return o}/**
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
 */class cd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cd(n)}node(){return this.node_}}class dd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new dd(this.syncTree_,n)}node(){return od(this.syncTree_,this.path_)}}const mk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bf=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return gk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _k(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},gk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},_k=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},vk=function(t,e,n,r){return hd(e,new dd(n,t),r)},tv=function(t,e,n){return hd(t,new cd(e),n)};function hd(t,e,n){const r=t.getPriority().val(),i=Bf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Bf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ue(l,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ue(i))),o.forEachChild(te,(l,a)=>{const u=hd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class fd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function pd(t,e){let n=e instanceof V?e:new V(e),r=t,i=L(n);for(;i!==null;){const s=Lr(r.node.children,i)||{children:{},childCount:0};r=new fd(i,r,s),n=H(n),i=L(n)}return r}function qr(t){return t.node.value}function nv(t,e){t.node.value=e,xu(t)}function rv(t){return t.node.childCount>0}function yk(t){return qr(t)===void 0&&!rv(t)}function Il(t,e){Ue(t.node.children,(n,r)=>{e(new fd(n,t,r))})}function iv(t,e,n,r){n&&!r&&e(t),Il(t,i=>{iv(i,e,!0,r)}),n&&r&&e(t)}function wk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vs(t){return new V(t.parent===null?t.name:vs(t.parent)+"/"+t.name)}function xu(t){t.parent!==null&&Ek(t.parent,t.name,t)}function Ek(t,e,n){const r=yk(n),i=Ft(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xu(t))}/**
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
 */const Ck=/[\[\].#$\/\u0000-\u001F\u007F]/,Sk=/[\[\].#$\u0000-\u001F\u007F]/,ma=10*1024*1024,sv=function(t){return typeof t=="string"&&t.length!==0&&!Ck.test(t)},ov=function(t){return typeof t=="string"&&t.length!==0&&!Sk.test(t)},Ik=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ov(t)},lv=function(t,e,n,r){r&&e===void 0||md(xc(t,"value"),e,n)},md=function(t,e,n){const r=n instanceof V?new BI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+kn(r));if(typeof e=="function")throw new Error(t+"contains a function "+kn(r)+" with contents = "+e.toString());if(o_(e))throw new Error(t+"contains "+e.toString()+" "+kn(r));if(typeof e=="string"&&e.length>ma/3&&pl(e)>ma)throw new Error(t+"contains a string greater than "+ma+" utf8 bytes "+kn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sv(o)))throw new Error(t+" contains an invalid key ("+o+") "+kn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VI(r,o),md(t,l,r),HI(r)}),i&&s)throw new Error(t+' contains ".value" child '+kn(r)+" in addition to actual children.")}},av=function(t,e,n,r){if(!(r&&n===void 0)&&!ov(n))throw new Error(xc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Tk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),av(t,e,n,r)},uv=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ik(n))throw new Error(xc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ak{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Qc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function cv(t,e,n){gd(t,n),dv(t,r=>Qc(r,e))}function Mt(t,e,n){gd(t,n),dv(t,r=>it(r,e)||it(e,r))}function dv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Nk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Nk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mn&&Ce("event: "+n.toString()),Qr(r)}}}/**
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
 */const Rk="repo_interrupt",Pk=25;class xk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ak,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vo(),this.transactionQueueTree_=new fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ok(t,e,n){if(t.stats_=Gc(t.repoInfo_),t.forceRestClient_||fI())t.server_=new Bo(t.repoInfo_,(r,i,s,o)=>{Vf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nt(t.repoInfo_,e,(r,i,s,o)=>{Vf(t,r,i,s,o)},r=>{Hf(t,r)},r=>{Dk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=vI(t.repoInfo_,()=>new gT(t.stats_,t.server_)),t.infoData_=new dT,t.infoSyncTree_=new jf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Cl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),vd(t,"connected",!1),t.serverSyncTree_=new jf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Mt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function hv(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _d(t){return mk({timestamp:hv(t)})}function Vf(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=xo(n,u=>ge(u));o=ck(t.serverSyncTree_,s,a,i)}else{const a=ge(n);o=uk(t.serverSyncTree_,s,a,i)}else if(r){const a=xo(n,u=>ge(u));o=ok(t.serverSyncTree_,s,a)}else{const a=ge(n);o=Cl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Tl(t,s)),Mt(t.eventQueue_,l,o)}function Hf(t,e){vd(t,"connected",e),e===!1&&Mk(t)}function Dk(t,e){Ue(e,(n,r)=>{vd(t,n,r)})}function vd(t,e,n){const r=new V("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=Cl(t.infoSyncTree_,r,i);Mt(t.eventQueue_,r,s)}function fv(t){return t.nextWriteId_++}function Lk(t,e,n,r,i){yd(t,"set",{path:e.toString(),value:n,priority:r});const s=_d(t),o=ge(n,r),l=od(t.serverSyncTree_,e),a=tv(o,l,s),u=fv(t),d=X_(t.serverSyncTree_,e,a,u,!0);gd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Fe("set at "+e+" failed: "+h);const v=xn(t.serverSyncTree_,u,!_);Mt(t.eventQueue_,e,v),Uk(t,i,h,g)});const c=vv(t,e);Tl(t,c),Mt(t.eventQueue_,c,[])}function Mk(t){yd(t,"onDisconnectEvents");const e=_d(t),n=Vo();Iu(t.onDisconnect_,j(),(i,s)=>{const o=vk(i,s,t.serverSyncTree_,e);F_(n,i,o)});let r=[];Iu(n,j(),(i,s)=>{r=r.concat(Cl(t.serverSyncTree_,i,s));const o=vv(t,i);Tl(t,o)}),t.onDisconnect_=Vo(),Mt(t.eventQueue_,j(),r)}function bk(t,e,n){let r;L(e._path)===".info"?r=Wf(t.infoSyncTree_,e,n):r=Wf(t.serverSyncTree_,e,n),cv(t.eventQueue_,e._path,r)}function $f(t,e,n){let r;L(e._path)===".info"?r=Pu(t.infoSyncTree_,e,n):r=Pu(t.serverSyncTree_,e,n),cv(t.eventQueue_,e._path,r)}function Fk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rk)}function yd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function Uk(t,e,n,r){e&&Qr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pv(t,e,n){return od(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function wd(t,e=t.transactionQueueTree_){if(e||kl(t,e),qr(e)){const n=gv(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zk(t,vs(e),n)}else rv(e)&&Il(e,n=>{wd(t,n)})}function zk(t,e,n){const r=n.map(u=>u.currentWriteId),i=pv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=xe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{yd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();kl(t,pd(t.transactionQueueTree_,e)),wd(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Qr(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Fe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Tl(t,e)}},o)}function Tl(t,e){const n=mv(t,e),r=vs(n),i=gv(t,n);return jk(t,i,r),r}function jk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=xe(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(xn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Pk)d=!0,c="maxretry",i=i.concat(xn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=pv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){md("transaction failed: Data returned ",g,a.path);let _=ge(g);typeof g=="object"&&g!=null&&Ft(g,".priority")||(_=_.updatePriority(h.getPriority()));const x=a.currentWriteId,p=_d(t),f=tv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=fv(t),o.splice(o.indexOf(x),1),i=i.concat(X_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(xn(t.serverSyncTree_,x,!0))}else d=!0,c="nodata",i=i.concat(xn(t.serverSyncTree_,a.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}kl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Qr(r[l]);wd(t,t.transactionQueueTree_)}function mv(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&qr(r)===void 0;)r=pd(r,n),e=H(e),n=L(e);return r}function gv(t,e){const n=[];return _v(t,e,n),n.sort((r,i)=>r.order-i.order),n}function _v(t,e,n){const r=qr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Il(e,i=>{_v(t,i,n)})}function kl(t,e){const n=qr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nv(e,n.length>0?n:void 0)}Il(e,r=>{kl(t,r)})}function vv(t,e){const n=vs(mv(t,e)),r=pd(t.transactionQueueTree_,e);return wk(r,i=>{ga(t,i)}),ga(t,r),iv(r,i=>{ga(t,i)}),n}function ga(t,e){const n=qr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nv(e,void 0):n.length=s+1,Mt(t.eventQueue_,vs(e),i);for(let o=0;o<r.length;o++)Qr(r[o])}}/**
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
 */function Wk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Bk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gf=function(t,e){const n=Vk(t),r=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new v_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},Vk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Wk(t.substring(d,c)));const h=Bk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const Kf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Hk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Kf.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Kf.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class yv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class wv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class $k{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ed{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:A_(this._path)}get ref(){return new zt(this._repo,this._path)}get _queryIdentifier(){const e=Rf(this._queryParams),n=Hc(e);return n==="{}"?"default":n}get _queryObject(){return Rf(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof Ed))return!1;const n=this._repo===e._repo,r=Qc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+WI(this._path)}}class zt extends Ed{constructor(e,n){super(e,n,new Jc,!1)}get parent(){const e=R_(this._path);return e===null?null:new zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=zr(this.ref,e);return new rs(this._node.getChild(n),r,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new rs(i,zr(this.ref,r),te)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cd(t,e){return t=pe(t),t._checkNotDeleted("ref"),e!==void 0?zr(t._root,e):t._root}function zr(t,e){return t=pe(t),L(t._path)===null?Tk("child","path",e,!1):av("child","path",e,!1),new zt(t._repo,oe(t._path,e))}function Gk(t,e){t=pe(t),uv("push",t._path),lv("push",e,t._path,!0);const n=hv(t._repo),r=Hk(n),i=zr(t,r),s=zr(t,r);let o;return e!=null?o=Ev(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ev(t,e){t=pe(t),uv("set",t._path),lv("set",e,t._path,!1);const n=new fl;return Lk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Sd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new yv("value",this,new rs(e.snapshotNode,new zt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wv(this,e,n):null}matches(e){return e instanceof Sd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Id{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wv(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=zr(new zt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new yv(e.type,this,new rs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Id?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Kk(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{$f(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new $k(n,s||void 0),l=e==="value"?new Sd(o):new Id(e,o);return bk(t._repo,t,l),()=>$f(t._repo,t,l)}function Qk(t,e,n,r){return Kk(t,"value",e,n,r)}XT(zt);rk(zt);/**
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
 */const qk="FIREBASE_DATABASE_EMULATOR_HOST",Ou={};let Yk=!1;function Xk(t,e,n,r){t.repoInfo_=new v_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Jk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&df&&(u=df[qk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Gf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Ir(Ir.OWNER):new mI(t.name,t.options,e);kk("Invalid Firebase Database URL",o),F(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=eA(l,t,d,new pI(t.name,n));return new tA(c,t)}function Zk(t,e){const n=Ou[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Fk(t),delete n[t.key]}function eA(t,e,n,r){let i=Ou[e.name];i||(i={},Ou[e.name]=i);let s=i[t.toURLString()];return s&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new xk(t,Yk,n,r),i[t.toURLString()]=s,s}class tA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ok(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function nA(t=Lc(),e){const n=ml(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=mg("database");r&&rA(n,...r)}return n}function rA(t,e,n,r={}){t=pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ir(Ir.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hw(r.mockUserToken,t.app.options.projectId);s=new Ir(o)}Xk(i,e,n,s)}/**
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
 */function iA(t){ZS($r),Bn(new fn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Jk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_t(hf,ff,t),_t(hf,ff,"esm2017")}Nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iA();/**
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
 */const Cv="functions";/**
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
 */class sA{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const Du="us-central1";class oA{constructor(e,n,r,i,s=Du,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new sA(n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin,this.region=Du}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function lA(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const Qf="@firebase/functions",qf="0.11.0";/**
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
 */const aA="auth-internal",uA="app-check-internal",cA="messaging-internal";function dA(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(aA),l=r.getProvider(cA),a=r.getProvider(uA);return new oA(s,o,l,a,i,t)};Bn(new fn(Cv,n,"PUBLIC").setMultipleInstances(!0)),_t(Qf,qf,e),_t(Qf,qf,"esm2017")}/**
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
 */function hA(t=Lc(),e=Du){const r=ml(pe(t),Cv).getImmediate({identifier:e}),i=mg("functions");return i&&fA(r,...i),r}function fA(t,e,n){lA(pe(t),e,n)}dA(fetch.bind(self));const pA={apiKey:"AIzaSyBshhkfIbVHWMQnp9O2-GHnzjc5GmU1G_Q",authDomain:"realtimechat-cbd7c.firebaseapp.com",databaseURL:"https://realtimechat-cbd7c-default-rtdb.firebaseio.com",projectId:"realtimechat-cbd7c",storageBucket:"realtimechat-cbd7c.appspot.com",messagingSenderId:"72961990118",appId:"1:72961990118:web:3d71a66fcbfc4f7c620a27",measurementId:"G-J86JR38K0E"},Td=Sg(pA),kd=nA(Td),Al=YS(Td),mA=hA(Td),gA="_message_list_12ffx_1",_A="_message_12ffx_1",vA="_profile_12ffx_47",yA="_nickname_12ffx_77",wA="_text_12ffx_87",EA="_time_12ffx_105",CA="_current_user_12ffx_117",Bt={message_list:gA,message:_A,profile:vA,nickname:yA,text:wA,time:EA,current_user:CA};var Sv={exports:{}},SA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",IA=SA,TA=IA;function Iv(){}function Tv(){}Tv.resetWarningCache=Iv;var kA=function(){function t(r,i,s,o,l,a){if(a!==TA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Tv,resetWarningCache:Iv};return n.PropTypes=n,n};Sv.exports=kA();var AA=Sv.exports;const ys=Yf(AA),NA="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCADIAMgDAREAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAUGBwQBAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfJVyNJItB9AAAAAAAAAAzIgieIEnjTAAAAAAAAADmMONuOw4jEjcTpAAAAAAAABxmIm7H6H5GFG3HYAAAAAAAADwx87iylaOE2A9AAAAAAAAAOQoJHEiX46wAAAAAAAAAAAAAAAAAAAADwqRUzgPD6JQuJYwAAAAAAAfBlZGF2JQ9PkhCklvNDAAAAAAAKAVw1s/cAAjzHzSC0AAAAAAAyEuRbAAADPD8zRwAAAAAAZCcR0gAAHEWg0cAAAAAAECcwAAABIEuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QAQxAAAQMCAQULBwkJAAAAAAAAAQIDBAAFBhFBUVKTBxIWFyExQFVhgaEwMlRxkcHREBQ1NmNwc7LSICIjJFBTkqPi/9oACAEBAAE/APugUpKElSyEpAykk5AKuW6Da4ThbjhyWrSjkR7a4zkdVnb/APNW7dBtcxYRJDkRelfKj2ikLStAWhQUkjKCDlBHRcb4mcnzHLdFWREZORf2ihVpsM+9uFMJnfBPnLPIlNcW119Jhe1X6au1hn2RwJms70K81Y5UqrA+JXIM1FtlLyxXjkR9ms9EuD5i22U+nnaaWsdwJokqVlOUk1abc1arYxEZAAbSATrKzn5LtbmrtbH4jwBDieQ6qsxrlSdBFW58yrbFfVzusoWe8A9DuyC7ZpqE+cphwDvSaByEHRUd9EqM2+0cqHEhaT2H5JD6IsZx905G20laj2Cid8SdNWhBas0JCuRSWGwe5I6Jimxrsd3cQEkRnSVsns0d1Yaxq/ZGRFktl+Lm1kVxkWn+xN/wT+qsSY1fvTJixmzHi59ZdYWsa73d20FP8s0Qt5XZo7+i3K2RbtDVGmNhbZ9qTpBq47nE5lZMB9t9vQs7xdcBb96GNsj41bdzia8sG4vtsNaEHfLq22yLaYaY0NsIbHtJ0k/0xSghJUogJAykmrxugwYRLUBHzt3X5m6l45vcrmkhhOq0gUcR3jrOXtTXCG79ZzNsqkYlvKDlFzld7hNQcf3iKf46mpSNC0AH2irJjW3XhYZWTFknmQ5zK9R6C66hhlbrqghtAKlKOYCsU4tfvbymIxLUEZs7naas9hnXx4ohNZUjz3FciE1A3NobQBnyXXl6G/3E0MDWD0E7ZfxrgPYPQP8Ac58aXgWwr5oZR6nl+81c9zVG8K7XKP4b/wARU+3yrZJMeayppwZjnGkHOKwfjNbS0W+6OFTZ5GntTsPQN0S+HKm0sHQt/wBwrDNgcv8AcQ1yojt8ry6hw2IEVEeK0ltpAyBI/avNmi3uCqPKT2oXnQdIq525+03B2JJGRbZ7lDMRWBb6brajGfVlkxcg7VIzHy+NfrbO9aPyCtzlAGHXFZy+ryG6ahImQF5yhYrcz+lZn4Pv8vjX62zvWj8gqDfrlbWCzClraaJ329FcLr51i74VwuvnWLvhXC6+dYu+FcLr51i74VwuvnWLvhXC6+dYu+FcLr51i74VcLtNupQZ0hTxbyhO+rcz+lZn4Pv8vcMHWu5znZclDpdc84hdcX1k1H9rXF9ZNR/a1xfWTUf2tcX1k1H9rXF9ZNR/a1xfWTUf2tcX1k1H9rXF9ZNR/a1xfWTUf2tWfDUCxvOOwg4FOJ3p3y8v3Pf/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAECAQE/ABx//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAwEBPwAcf//Z",kv=({currentUser:t})=>{const[e,n]=De.useState([]);return De.useEffect(()=>{const r=Cd(kd,"messages"),i=Qk(r,s=>{const o=s.val(),l=[];for(const a in o)l.push({id:a,...o[a]});n(l)});return()=>i()},[]),A.jsx("div",{className:Bt.message_list,children:e.map(r=>A.jsxs("div",{className:`${Bt.message} ${r.nickname===t.displayName?Bt.current_user:""}`,children:[A.jsx("div",{className:Bt.profile,children:A.jsx("img",{src:NA,alt:""})}),A.jsxs("div",{className:Bt.content,children:[A.jsx("p",{className:Bt.nickname,children:r.nickname}),A.jsx("p",{className:Bt.text,children:r.text}),A.jsx("p",{className:Bt.time,children:new Date(r.timestamp).toLocaleString()})]})]},r.id))})};kv.propTypes={currentUser:ys.object.isRequired};const RA="_message_input_1wwjy_1",PA={message_input:RA},Av=({nickname:t})=>{const[e,n]=De.useState(""),r=()=>{if(e.trim()!==""){const i=Cd(kd,"messages");Gk(i,{text:e,nickname:t,timestamp:Date.now()}),console.log("Nickname:",t,"Message:",e),n("")}};return A.jsxs("div",{className:PA.message_input,children:[A.jsx("input",{type:"text",value:e,onChange:i=>n(i.target.value),placeholder:"메시지를 입력해주세요"}),A.jsx("button",{onClick:r,children:"발송"})]})};Av.propTypes={nickname:ys.string.isRequired};const xA="_chat_room_m5zzj_1",OA="_message_m5zzj_21",_a={chat_room:xA,message:OA},Nv=({user:t})=>{const e=()=>{UC(Al).then(()=>{console.log("Logged out successfully!")}).catch(r=>{console.error("Logout failed",r)})},n=t.displayName;return A.jsxs("div",{className:_a.chat_room,children:[A.jsxs("div",{className:_a.message,children:[A.jsx(kv,{currentUser:t}),A.jsx(Av,{nickname:n})]}),A.jsx("button",{onClick:e,className:_a.logoutButton,children:"로그아웃"})]})};Nv.propTypes={user:ys.object.isRequired};const DA="_login_form_ij596_1",LA="_input_wrap_ij596_39",MA="_focus_ij596_95",bA="_login_btn_ij596_215",FA="_login_btn_bg_ij596_251",UA="_signup_link_ij596_307",ht={login_form:DA,input_wrap:LA,focus:MA,login_btn:bA,login_btn_bg:FA,signup_link:UA},Rv=({onSignUpClick:t})=>{const[e,n]=De.useState(""),[r,i]=De.useState(""),s=async o=>{o.preventDefault();try{await OC(Al,e,r)}catch(l){alert("로그인 정보가 정확하지 않습니다."),console.error("Login failed",l)}};return A.jsx("form",{onSubmit:s,className:ht.login_form,children:A.jsxs("article",{children:[A.jsxs("div",{className:`${ht.email_input} ${ht.input_wrap}`,children:[A.jsx("label",{children:"Email"}),A.jsx("input",{type:"email",value:e,onChange:o=>n(o.target.value),placeholder:"이메일을 입력해주세요"}),A.jsx("span",{className:ht.focus,"data-symbol":"email"})]}),A.jsxs("div",{className:`${ht.password_input} ${ht.input_wrap}`,children:[A.jsx("label",{children:"비밀번호"}),A.jsx("input",{type:"password",value:r,onChange:o=>i(o.target.value),placeholder:"패스워드를 입력해주세요"}),A.jsx("span",{className:ht.focus,"data-symbol":"password"})]}),A.jsx("div",{className:ht.signup_link,children:A.jsx("button",{type:"button",onClick:t,children:"회원가입 하기"})}),A.jsx("div",{className:ht.login_btn,children:A.jsxs("div",{children:[A.jsx("div",{className:ht.login_btn_bg}),A.jsx("button",{type:"submit",children:" 채팅 참여하기 "})]})})]})})};Rv.propTypes={onSignUpClick:ys.func.isRequired};const zA="_signup_form_tflze_1",jA="_input_wrap_tflze_39",WA="_focus_tflze_95",BA="_signup_btn_tflze_215",VA="_signup_btn_bg_tflze_251",HA="_login_link_tflze_305",ze={signup_form:zA,input_wrap:jA,focus:WA,signup_btn:BA,signup_btn_bg:VA,login_link:HA},$A=async t=>{const e=mA.httpsCallable("checkNickname");try{return(await e({nickname:t})).data.unique}catch(n){throw console.error("Error checking nickname uniqueness",n),n}},Pv=({onSignUpSuccess:t})=>{const[e,n]=De.useState(""),[r,i]=De.useState(""),[s,o]=De.useState(""),l=async a=>{if(a.preventDefault(),!await $A(s)){alert("이미 사용 중인 닉네임입니다.");return}try{const c=(await xC(Al,e,r)).user;await LC(c,{displayName:s}),await Ev(Cd(kd,"users/"+c.uid),{email:e,nickname:s}),alert("회원가입이 성공적으로 완료되었습니다."),t()}catch(d){d.code==="auth/email-already-in-use"?alert("이미 사용 중인 이메일 주소입니다."):d.code==="auth/invalid-email"?alert("잘못된 이메일 형식입니다. 올바른 이메일 주소를 입력해주세요."):d.code==="auth/weak-password"?alert("비밀번호가 너무 약합니다. 보다 강력한 비밀번호를 사용해주세요."):d.code==="auth/network-request-failed"?alert("네트워크 문제가 발생했습니다. 인터넷 연결을 확인해주세요."):(alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요."),console.error("SignUp failed",d))}};return A.jsx("form",{onSubmit:l,className:ze.signup_form,children:A.jsxs("article",{children:[A.jsxs("div",{className:`${ze.email_input} ${ze.input_wrap}`,children:[A.jsx("label",{children:"이메일"}),A.jsx("input",{type:"email",value:e,onChange:a=>n(a.target.value),placeholder:"이메일을 입력해주세요"}),A.jsx("span",{className:ze.focus,"data-symbol":"email"})]}),A.jsxs("div",{className:`${ze.password_input} ${ze.input_wrap}`,children:[A.jsx("label",{children:"비밀번호"}),A.jsx("input",{type:"password",value:r,onChange:a=>i(a.target.value),placeholder:"패스워드를 입력해주세요"}),A.jsx("span",{className:ze.focus,"data-symbol":"password"})]}),A.jsxs("div",{className:`${ze.nickname_input} ${ze.input_wrap}`,children:[A.jsx("label",{children:"닉네임"}),A.jsx("input",{type:"text",value:s,onChange:a=>o(a.target.value),placeholder:"닉네임을 입력해주세요"}),A.jsx("span",{className:ze.focus,"data-symbol":"user"})]}),A.jsx("div",{className:ze.login_link,children:A.jsx("button",{type:"button",onClick:t,children:"로그인 화면으로 돌아가기"})}),A.jsx("div",{className:ze.signup_btn,children:A.jsxs("div",{children:[A.jsx("div",{className:ze.signup_btn_bg}),A.jsx("button",{type:"submit",children:" 계정 생성 "})]})})]})})};Pv.propTypes={onSignUpSuccess:ys.func.isRequired};const GA=()=>{const[t,e]=De.useState(null),[n,r]=De.useState(!1),i=()=>{r(!0)},s=()=>{r(!1)};return De.useEffect(()=>{const o=FC(Al,l=>{e(l||null)});return()=>o()},[]),A.jsx("div",{className:"app",children:t?A.jsx(Nv,{user:t}):n?A.jsx(Pv,{onSignUpSuccess:s}):A.jsx(Rv,{onSignUpClick:i})})};va.createRoot(document.getElementById("root")).render(A.jsx(Kv.StrictMode,{children:A.jsx(GA,{})}));
