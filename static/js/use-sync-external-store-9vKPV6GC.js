import{g as e}from"./@babel-DQ7tBuk8.js";import{r as t}from"./react-Bi74NbOF.js";var n={exports:{}},r={},u={exports:{}},o={},a=t;var i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=a.useState,c=a.useEffect,f=a.useLayoutEffect,l=a.useDebugValue;function v(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}var p="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),u=r[0].inst,o=r[1];return f((function(){u.value=n,u.getSnapshot=t,v(u)&&o({inst:u})}),[e,n,t]),c((function(){return v(u)&&o({inst:u}),e((function(){v(u)&&o({inst:u})}))}),[e]),l(n),n};o.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:p,u.exports=o;var S=u.exports,d=t,x=S;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},E=x.useSyncExternalStore,b=d.useRef,h=d.useEffect,m=d.useMemo,g=d.useDebugValue;r.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var o=b(null);if(null===o.current){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=m((function(){function e(e){if(!s){if(s=!0,o=e,e=r(e),void 0!==u&&a.hasValue){var t=a.value;if(u(t,e))return i=t}return i=e}if(t=i,y(o,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(o=e,i=n)}var o,i,s=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,n,r,u]);var i=E(e,o[0],o[1]);return h((function(){a.hasValue=!0,a.value=i}),[i]),g(i),i},n.exports=r;const j=e(n.exports);export{S as s,j as u};
