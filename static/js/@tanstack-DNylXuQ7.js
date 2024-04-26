import{s as t}from"./use-sync-external-store-9vKPV6GC.js";class e{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){const e={listener:t};return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const s="undefined"==typeof window||"Deno"in window;function i(){}function r(t){return"number"==typeof t&&t>=0&&t!==1/0}function n(t,e){return Math.max(t+(e||0)-Date.now(),0)}function a(t,e,s){return g(t)?"function"==typeof e?{...s,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function o(t,e,s){return g(t)?[{...e,queryKey:t},s]:[t||{},e]}function u(t,e){const{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(g(a))if(i){if(e.queryHash!==h(a,e.options))return!1}else if(!d(e.queryKey,a))return!1;if("all"!==s){const t=e.isActive();if("active"===s&&!t)return!1;if("inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&((void 0===r||r===e.state.fetchStatus)&&!(n&&!n(e)))}function c(t,e){const{exact:s,fetching:i,predicate:r,mutationKey:n}=t;if(g(n)){if(!e.options.mutationKey)return!1;if(s){if(l(e.options.mutationKey)!==l(n))return!1}else if(!d(e.options.mutationKey,n))return!1}return("boolean"!=typeof i||"loading"===e.state.status===i)&&!(r&&!r(e))}function h(t,e){return((null==e?void 0:e.queryKeyHashFn)||l)(t)}function l(t){return JSON.stringify(t,((t,e)=>m(e)?Object.keys(e).sort().reduce(((t,s)=>(t[s]=e[s],t)),{}):e))}function d(t,e){return f(t,e)}function f(t,e){return t===e||typeof t==typeof e&&(!(!t||!e||"object"!=typeof t||"object"!=typeof e)&&!Object.keys(e).some((s=>!f(t[s],e[s]))))}function p(t,e){if(t===e)return t;const s=v(t)&&v(e);if(s||m(t)&&m(e)){const i=s?t.length:Object.keys(t).length,r=s?e:Object.keys(e),n=r.length,a=s?[]:{};let o=0;for(let u=0;u<n;u++){const i=s?u:r[u];a[i]=p(t[i],e[i]),a[i]===t[i]&&o++}return i===n&&o===i?t:a}return e}function y(t,e){if(t&&!e||e&&!t)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function m(t){if(!b(t))return!1;const e=t.constructor;if(void 0===e)return!0;const s=e.prototype;return!!b(s)&&!!s.hasOwnProperty("isPrototypeOf")}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return Array.isArray(t)}function R(t){return new Promise((e=>{setTimeout(e,t)}))}function C(t){R(0).then(t)}function O(t,e,s){return null!=s.isDataEqual&&s.isDataEqual(t,e)?t:"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?p(t,e):e}const S=new class extends e{constructor(){super(),this.setup=t=>{if(!s&&window.addEventListener){const e=()=>t();return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var t;this.hasListeners()||(null==(t=this.cleanup)||t.call(this),this.cleanup=void 0)}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t((t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()}))}setFocused(t){this.focused!==t&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach((({listener:t})=>{t()}))}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},q=["online","offline"];const w=new class extends e{constructor(){super(),this.setup=t=>{if(!s&&window.addEventListener){const e=()=>t();return q.forEach((t=>{window.addEventListener(t,e,!1)})),()=>{q.forEach((t=>{window.removeEventListener(t,e)}))}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var t;this.hasListeners()||(null==(t=this.cleanup)||t.call(this),this.cleanup=void 0)}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t((t=>{"boolean"==typeof t?this.setOnline(t):this.onOnline()}))}setOnline(t){this.online!==t&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach((({listener:t})=>{t()}))}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function P(t){return Math.min(1e3*2**t,3e4)}function Q(t){return"online"!==(null!=t?t:"online")||w.isOnline()}class E{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}}function F(t){return t instanceof E}function D(t){let e,s,i,r=!1,n=0,a=!1;const o=new Promise(((t,e)=>{s=t,i=e})),u=()=>!S.isFocused()||"always"!==t.networkMode&&!w.isOnline(),c=i=>{a||(a=!0,null==t.onSuccess||t.onSuccess(i),null==e||e(),s(i))},h=s=>{a||(a=!0,null==t.onError||t.onError(s),null==e||e(),i(s))},l=()=>new Promise((s=>{e=t=>{const e=a||!u();return e&&s(t),e},null==t.onPause||t.onPause()})).then((()=>{e=void 0,a||null==t.onContinue||t.onContinue()})),d=()=>{if(a)return;let e;try{e=t.fn()}catch(s){e=Promise.reject(s)}Promise.resolve(e).then(c).catch((e=>{var s,i;if(a)return;const o=null!=(s=t.retry)?s:3,c=null!=(i=t.retryDelay)?i:P,f="function"==typeof c?c(n,e):c,p=!0===o||"number"==typeof o&&n<o||"function"==typeof o&&o(n,e);!r&&p?(n++,null==t.onFail||t.onFail(n,e),R(f).then((()=>{if(u())return l()})).then((()=>{r?h(e):d()}))):h(e)}))};return Q(t.networkMode)?d():l().then(d),{promise:o,cancel:e=>{a||(h(new E(e)),null==t.abort||t.abort())},continue:()=>(null==e?void 0:e())?o:Promise.resolve(),cancelRetry:()=>{r=!0},continueRetry:()=>{r=!1}}}const x=console;const A=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()};const r=i=>{e?t.push(i):C((()=>{s(i)}))},n=()=>{const e=t;t=[],e.length&&C((()=>{i((()=>{e.forEach((t=>{s(t)}))}))}))};return{batch:t=>{let s;e++;try{s=t()}finally{e--,e||n()}return s},batchCalls:t=>(...e)=>{r((()=>{t(...e)}))},schedule:r,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t}}}();class I{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),r(this.cacheTime)&&(this.gcTimeout=setTimeout((()=>{this.optionalRemove()}),this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:s?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class T extends I{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||x,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){const e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?null!=i?i:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){const s=O(this.state.data,t,this.options);return this.dispatch({data:s,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),s}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;const s=this.promise;return null==(e=this.retryer)||e.cancel(t),s?s.then(i).catch(i):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some((t=>!1!==t.options.enabled))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some((t=>t.getCurrentResult().isStale))}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!n(this.state.dataUpdatedAt,t)}onFocus(){var t;const e=this.observers.find((t=>t.shouldFetchOnWindowFocus()));e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;const e=this.observers.find((t=>t.shouldFetchOnReconnect()));e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter((e=>e!==t)),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var s,i;if("idle"!==this.state.fetchStatus)if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var r;return null==(r=this.retryer)||r.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){const t=this.observers.find((t=>t.options.queryFn));t&&this.setOptions(t.options)}const n=function(){if("function"==typeof AbortController)return new AbortController}(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},o=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(n)return this.abortSignalConsumed=!0,n.signal}})};o(a);const u={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};var c;(o(u),null==(s=this.options.behavior)||s.onFetch(u),this.revertState=this.state,"idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(i=u.fetchOptions)?void 0:i.meta))&&this.dispatch({type:"fetch",meta:null==(c=u.fetchOptions)?void 0:c.meta});const h=t=>{var e,s,i,r;(F(t)&&t.silent||this.dispatch({type:"error",error:t}),F(t))||(null==(e=(s=this.cache.config).onError)||e.call(s,t,this),null==(i=(r=this.cache.config).onSettled)||i.call(r,this.state.data,t,this));this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=D({fn:u.fetchFn,abort:null==n?void 0:n.abort.bind(n),onSuccess:t=>{var e,s,i,r;void 0!==t?(this.setData(t),null==(e=(s=this.cache.config).onSuccess)||e.call(s,t,this),null==(i=(r=this.cache.config).onSettled)||i.call(r,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1):h(new Error(this.queryHash+" data is undefined"))},onError:h,onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var s,i;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(s=t.meta)?s:null,fetchStatus:Q(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(i=t.dataUpdatedAt)?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=t.error;return F(r)&&r.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...e,error:r,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),A.batch((()=>{this.observers.forEach((e=>{e.onQueryUpdate(t)})),this.cache.notify({query:this,type:"updated",action:t})}))}}class U extends e{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,s){var i;const r=e.queryKey,n=null!=(i=e.queryHash)?i:h(r,e);let a=this.get(n);return a||(a=new T({cache:this,logger:t.getLogger(),queryKey:r,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(r)}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter((e=>e!==t)),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){A.batch((()=>{this.queries.forEach((t=>{this.remove(t)}))}))}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){const[s]=o(t,e);return void 0===s.exact&&(s.exact=!0),this.queries.find((t=>u(s,t)))}findAll(t,e){const[s]=o(t,e);return Object.keys(s).length>0?this.queries.filter((t=>u(s,t))):this.queries}notify(t){A.batch((()=>{this.listeners.forEach((({listener:e})=>{e(t)}))}))}onFocus(){A.batch((()=>{this.queries.forEach((t=>{t.onFocus()}))}))}onOnline(){A.batch((()=>{this.queries.forEach((t=>{t.onOnline()}))}))}}class M extends I{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||x,this.observers=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter((e=>e!==t)),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){const t=()=>{var t;return this.retryer=D({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},e="loading"===this.state.status;try{var s,i,r,n,a,o,u,c;if(!e){var h,l,d,f;this.dispatch({type:"loading",variables:this.options.variables}),await(null==(h=(l=this.mutationCache.config).onMutate)?void 0:h.call(l,this.state.variables,this));const t=await(null==(d=(f=this.options).onMutate)?void 0:d.call(f,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}const p=await t();return await(null==(s=(i=this.mutationCache.config).onSuccess)?void 0:s.call(i,p,this.state.variables,this.state.context,this)),await(null==(r=(n=this.options).onSuccess)?void 0:r.call(n,p,this.state.variables,this.state.context)),await(null==(a=(o=this.mutationCache.config).onSettled)?void 0:a.call(o,p,null,this.state.variables,this.state.context,this)),await(null==(u=(c=this.options).onSettled)?void 0:u.call(c,p,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:p}),p}catch(O){try{var p,y,v,m,b,g,R,C;throw await(null==(p=(y=this.mutationCache.config).onError)?void 0:p.call(y,O,this.state.variables,this.state.context,this)),await(null==(v=(m=this.options).onError)?void 0:v.call(m,O,this.state.variables,this.state.context)),await(null==(b=(g=this.mutationCache.config).onSettled)?void 0:b.call(g,void 0,O,this.state.variables,this.state.context,this)),await(null==(R=(C=this.options).onSettled)?void 0:R.call(C,void 0,O,this.state.variables,this.state.context)),O}finally{this.dispatch({type:"error",error:O})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Q(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),A.batch((()=>{this.observers.forEach((e=>{e.onMutationUpdate(t)})),this.mutationCache.notify({mutation:this,type:"updated",action:t})}))}}class K extends e{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,s){const i=new M({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:s,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter((e=>e!==t)),this.notify({type:"removed",mutation:t})}clear(){A.batch((()=>{this.mutations.forEach((t=>{this.remove(t)}))}))}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find((e=>c(t,e)))}findAll(t){return this.mutations.filter((e=>c(t,e)))}notify(t){A.batch((()=>{this.listeners.forEach((({listener:e})=>{e(t)}))}))}resumePausedMutations(){var t;return this.resuming=(null!=(t=this.resuming)?t:Promise.resolve()).then((()=>{const t=this.mutations.filter((t=>t.state.isPaused));return A.batch((()=>t.reduce(((t,e)=>t.then((()=>e.continue().catch(i)))),Promise.resolve())))})).then((()=>{this.resuming=void 0})),this.resuming}}function L(){return{onFetch:t=>{t.fetchFn=()=>{var e,s,i,r,n,a;const o=null==(e=t.fetchOptions)||null==(s=e.meta)?void 0:s.refetchPage,u=null==(i=t.fetchOptions)||null==(r=i.meta)?void 0:r.fetchMore,c=null==u?void 0:u.pageParam,h="forward"===(null==u?void 0:u.direction),l="backward"===(null==u?void 0:u.direction),d=(null==(n=t.state.data)?void 0:n.pages)||[],f=(null==(a=t.state.data)?void 0:a.pageParams)||[];let p=f,y=!1;const v=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),m=(t,e,s,i)=>(p=i?[e,...p]:[...p,e],i?[s,...t]:[...t,s]),b=(e,s,i,r)=>{if(y)return Promise.reject("Cancelled");if(void 0===i&&!s&&e.length)return Promise.resolve(e);const n={queryKey:t.queryKey,pageParam:i,meta:t.options.meta};var a;a=n,Object.defineProperty(a,"signal",{enumerable:!0,get:()=>{var e,s;return null!=(e=t.signal)&&e.aborted?y=!0:null==(s=t.signal)||s.addEventListener("abort",(()=>{y=!0})),t.signal}});const o=v(n);return Promise.resolve(o).then((t=>m(e,i,t,r)))};let g;if(d.length)if(h){const e=void 0!==c,s=e?c:k(t.options,d);g=b(d,e,s)}else if(l){const e=void 0!==c,s=e?c:(R=t.options,C=d,null==R.getPreviousPageParam?void 0:R.getPreviousPageParam(C[0],C));g=b(d,e,s,!0)}else{p=[];const e=void 0===t.options.getNextPageParam;g=!o||!d[0]||o(d[0],0,d)?b([],e,f[0]):Promise.resolve(m([],f[0],d[0]));for(let s=1;s<d.length;s++)g=g.then((i=>{if(!o||!d[s]||o(d[s],s,d)){const r=e?f[s]:k(t.options,i);return b(i,e,r)}return Promise.resolve(m(i,f[s],d[s]))}))}else g=b([]);var R,C;const O=g.then((t=>({pages:t,pageParams:p})));return O}}}}function k(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}class j{constructor(t={}){this.queryCache=t.queryCache||new U,this.mutationCache=t.mutationCache||new K,this.logger=t.logger||x,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=S.subscribe((()=>{S.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())})),this.unsubscribeOnline=w.subscribe((()=>{w.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())})))}unmount(){var t,e;this.mountCount--,0===this.mountCount&&(null==(t=this.unsubscribeFocus)||t.call(this),this.unsubscribeFocus=void 0,null==(e=this.unsubscribeOnline)||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){const[s]=o(t,e);return s.fetchStatus="fetching",this.queryCache.findAll(s).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var s;return null==(s=this.queryCache.find(t,e))?void 0:s.state.data}ensureQueryData(t,e,s){const i=a(t,e,s),r=this.getQueryData(i.queryKey);return r?Promise.resolve(r):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map((({queryKey:t,state:e})=>[t,e.data]))}setQueryData(t,e,s){const i=this.queryCache.find(t),r=function(t,e){return"function"==typeof t?t(e):t}(e,null==i?void 0:i.state.data);if(void 0===r)return;const n=a(t),o=this.defaultQueryOptions(n);return this.queryCache.build(this,o).setData(r,{...s,manual:!0})}setQueriesData(t,e,s){return A.batch((()=>this.getQueryCache().findAll(t).map((({queryKey:t})=>[t,this.setQueryData(t,e,s)]))))}getQueryState(t,e){var s;return null==(s=this.queryCache.find(t,e))?void 0:s.state}removeQueries(t,e){const[s]=o(t,e),i=this.queryCache;A.batch((()=>{i.findAll(s).forEach((t=>{i.remove(t)}))}))}resetQueries(t,e,s){const[i,r]=o(t,e,s),n=this.queryCache,a={type:"active",...i};return A.batch((()=>(n.findAll(i).forEach((t=>{t.reset()})),this.refetchQueries(a,r))))}cancelQueries(t,e,s){const[r,n={}]=o(t,e,s);void 0===n.revert&&(n.revert=!0);const a=A.batch((()=>this.queryCache.findAll(r).map((t=>t.cancel(n)))));return Promise.all(a).then(i).catch(i)}invalidateQueries(t,e,s){const[i,r]=o(t,e,s);return A.batch((()=>{var t,e;if(this.queryCache.findAll(i).forEach((t=>{t.invalidate()})),"none"===i.refetchType)return Promise.resolve();const s={...i,type:null!=(t=null!=(e=i.refetchType)?e:i.type)?t:"active"};return this.refetchQueries(s,r)}))}refetchQueries(t,e,s){const[r,n]=o(t,e,s),a=A.batch((()=>this.queryCache.findAll(r).filter((t=>!t.isDisabled())).map((t=>{var e;return t.fetch(void 0,{...n,cancelRefetch:null==(e=null==n?void 0:n.cancelRefetch)||e,meta:{refetchPage:r.refetchPage}})}))));let u=Promise.all(a).then(i);return null!=n&&n.throwOnError||(u=u.catch(i)),u}fetchQuery(t,e,s){const i=a(t,e,s),r=this.defaultQueryOptions(i);void 0===r.retry&&(r.retry=!1);const n=this.queryCache.build(this,r);return n.isStaleByTime(r.staleTime)?n.fetch(r):Promise.resolve(n.state.data)}prefetchQuery(t,e,s){return this.fetchQuery(t,e,s).then(i).catch(i)}fetchInfiniteQuery(t,e,s){const i=a(t,e,s);return i.behavior=L(),this.fetchQuery(i)}prefetchInfiniteQuery(t,e,s){return this.fetchInfiniteQuery(t,e,s).then(i).catch(i)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){const s=this.queryDefaults.find((e=>l(t)===l(e.queryKey)));s?s.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;const e=this.queryDefaults.find((e=>d(t,e.queryKey)));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){const s=this.mutationDefaults.find((e=>l(t)===l(e.mutationKey)));s?s.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;const e=this.mutationDefaults.find((e=>d(t,e.mutationKey)));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;const e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=h(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class H extends e{constructor(t,e){super(),this.client=t,this.options=e,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(e)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),B(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return G(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return G(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,e){const s=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),y(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const r=this.hasListeners();r&&N(this.currentQuery,i,this.options,s)&&this.executeFetch(),this.updateResult(e),!r||this.currentQuery===i&&this.options.enabled===s.enabled&&this.options.staleTime===s.staleTime||this.updateStaleTimeout();const n=this.computeRefetchInterval();!r||this.currentQuery===i&&this.options.enabled===s.enabled&&n===this.currentRefetchInterval||this.updateRefetchInterval(n)}getOptimisticResult(t){const e=this.client.getQueryCache().build(this.client,t),s=this.createResult(e,t);return function(t,e,s){if(s.keepPreviousData)return!1;if(void 0!==s.placeholderData)return e.isPlaceholderData;if(!y(t.getCurrentResult(),e))return!0;return!1}(this,s,t)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(t){const e={};return Object.keys(t).forEach((s=>{Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})})),e}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...e}={}){return this.fetch({...e,meta:{refetchPage:t}})}fetchOptimistic(t){const e=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,e);return s.isFetchingOptimistic=!0,s.fetch().then((()=>this.createResult(s,e)))}fetch(t){var e;return this.executeFetch({...t,cancelRefetch:null==(e=t.cancelRefetch)||e}).then((()=>(this.updateResult(),this.currentResult)))}executeFetch(t){this.updateQuery();let e=this.currentQuery.fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(i)),e}updateStaleTimeout(){if(this.clearStaleTimeout(),s||this.currentResult.isStale||!r(this.options.staleTime))return;const t=n(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((()=>{this.currentResult.isStale||this.updateResult()}),t)}computeRefetchInterval(){var t;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!s&&!1!==this.options.enabled&&r(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||S.isFocused())&&this.executeFetch()}),this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,e){const s=this.currentQuery,i=this.options,r=this.currentResult,n=this.currentResultState,a=this.currentResultOptions,o=t!==s,u=o?t.state:this.currentQueryInitialState,c=o?this.currentResult:this.previousQueryResult,{state:h}=t;let l,{dataUpdatedAt:d,error:f,errorUpdatedAt:p,fetchStatus:y,status:v}=h,m=!1,b=!1;if(e._optimisticResults){const r=this.hasListeners(),n=!r&&B(t,e),a=r&&N(t,s,e,i);(n||a)&&(y=Q(t.options.networkMode)?"fetching":"paused",d||(v="loading")),"isRestoring"===e._optimisticResults&&(y="idle")}if(e.keepPreviousData&&!h.dataUpdatedAt&&null!=c&&c.isSuccess&&"error"!==v)l=c.data,d=c.dataUpdatedAt,v=c.status,m=!0;else if(e.select&&void 0!==h.data)if(r&&h.data===(null==n?void 0:n.data)&&e.select===this.selectFn)l=this.selectResult;else try{this.selectFn=e.select,l=e.select(h.data),l=O(null==r?void 0:r.data,l,e),this.selectResult=l,this.selectError=null}catch(S){this.selectError=S}else l=h.data;if(void 0!==e.placeholderData&&void 0===l&&"loading"===v){let t;if(null!=r&&r.isPlaceholderData&&e.placeholderData===(null==a?void 0:a.placeholderData))t=r.data;else if(t="function"==typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.selectError=null}catch(S){this.selectError=S}void 0!==t&&(v="success",l=O(null==r?void 0:r.data,t,e),b=!0)}this.selectError&&(f=this.selectError,l=this.selectResult,p=Date.now(),v="error");const g="fetching"===y,R="loading"===v,C="error"===v;return{status:v,fetchStatus:y,isLoading:R,isSuccess:"success"===v,isError:C,isInitialLoading:R&&g,data:l,dataUpdatedAt:d,error:f,errorUpdatedAt:p,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>u.dataUpdateCount||h.errorUpdateCount>u.errorUpdateCount,isFetching:g,isRefetching:g&&!R,isLoadingError:C&&0===h.dataUpdatedAt,isPaused:"paused"===y,isPlaceholderData:b,isPreviousData:m,isRefetchError:C&&0!==h.dataUpdatedAt,isStale:_(t,e),refetch:this.refetch,remove:this.remove}}updateResult(t){const e=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,y(s,e))return;this.currentResult=s;const i={cache:!0};!1!==(null==t?void 0:t.listeners)&&(()=>{if(!e)return!0;const{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.trackedProps.size)return!0;const i=new Set(null!=s?s:this.trackedProps);return this.options.useErrorBoundary&&i.add("error"),Object.keys(this.currentResult).some((t=>{const s=t;return this.currentResult[s]!==e[s]&&i.has(s)}))})()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const e={};"success"===t.type?e.onSuccess=!t.manual:"error"!==t.type||F(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()}notify(t){A.batch((()=>{var e,s,i,r;if(t.onSuccess)null==(e=(s=this.options).onSuccess)||e.call(s,this.currentResult.data),null==(i=(r=this.options).onSettled)||i.call(r,this.currentResult.data,null);else if(t.onError){var n,a,o,u;null==(n=(a=this.options).onError)||n.call(a,this.currentResult.error),null==(o=(u=this.options).onSettled)||o.call(u,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach((({listener:t})=>{t(this.currentResult)})),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})}))}}function B(t,e){return function(t,e){return!(!1===e.enabled||t.state.dataUpdatedAt||"error"===t.state.status&&!1===e.retryOnMount)}(t,e)||t.state.dataUpdatedAt>0&&G(t,e,e.refetchOnMount)}function G(t,e,s){if(!1!==e.enabled){const i="function"==typeof s?s(t):s;return"always"===i||!1!==i&&_(t,e)}return!1}function N(t,e,s,i){return!1!==s.enabled&&(t!==e||!1===i.enabled)&&(!s.suspense||"error"!==t.state.status)&&_(t,s)}function _(t,e){return t.isStaleByTime(e.staleTime)}const z=t.useSyncExternalStore,W=React.createContext(void 0),J=React.createContext(!1);function V(t,e){return t||(e&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=W),window.ReactQueryClientContext):W)}const X=({context:t}={})=>{const e=React.useContext(V(t,React.useContext(J)));if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},Y=({client:t,children:e,context:s,contextSharing:i=!1})=>{React.useEffect((()=>(t.mount(),()=>{t.unmount()})),[t]);const r=V(s,i);return React.createElement(J.Provider,{value:!s&&i},React.createElement(r.Provider,{value:t},e))},Z=React.createContext(!1),$=()=>React.useContext(Z);Z.Provider;const tt=React.createContext(function(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}()),et=()=>React.useContext(tt);const st=(t,e)=>{(t.suspense||t.useErrorBoundary)&&(e.isReset()||(t.retryOnMount=!1))},it=t=>{React.useEffect((()=>{t.clearReset()}),[t])},rt=({result:t,errorResetBoundary:e,useErrorBoundary:s,query:i})=>{return t.isError&&!e.isReset()&&!t.isFetching&&(r=s,n=[t.error,i],"function"==typeof r?r(...n):!!r);var r,n},nt=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},at=(t,e,s)=>(null==t?void 0:t.suspense)&&((t,e)=>t.isLoading&&t.isFetching&&!e)(e,s),ot=(t,e,s)=>e.fetchOptimistic(t).then((({data:e})=>{null==t.onSuccess||t.onSuccess(e),null==t.onSettled||t.onSettled(e,null)})).catch((e=>{s.clearReset(),null==t.onError||t.onError(e),null==t.onSettled||t.onSettled(void 0,e)}));function ut(t,e,s){return function(t,e){const s=X({context:t.context}),i=$(),r=et(),n=s.defaultQueryOptions(t);n._optimisticResults=i?"isRestoring":"optimistic",n.onError&&(n.onError=A.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=A.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=A.batchCalls(n.onSettled)),nt(n),st(n,r),it(r);const[a]=React.useState((()=>new e(s,n))),o=a.getOptimisticResult(n);if(z(React.useCallback((t=>{const e=i?()=>{}:a.subscribe(A.batchCalls(t));return a.updateResult(),e}),[a,i]),(()=>a.getCurrentResult()),(()=>a.getCurrentResult())),React.useEffect((()=>{a.setOptions(n,{listeners:!1})}),[n,a]),at(n,o,i))throw ot(n,a,r);if(rt({result:o,errorResetBoundary:r,useErrorBoundary:n.useErrorBoundary,query:a.getCurrentQuery()}))throw o.error;return n.notifyOnChangeProps?o:a.trackResult(o)}(a(t,e,s),H)}export{j as Q,Y as a,ut as u};
