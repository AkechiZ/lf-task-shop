import{_ as n,a as o,b as e,c as a,d as r,e as t}from"./@babel-DQ7tBuk8.js";import{c}from"./classnames-RrD-SoDV.js";import{i,r as s,a as l}from"./@ctrl-G4xHZZGI.js";import{w as d,g as u,u as m}from"./rc-util-R-jdSMKA.js";const f=React.createContext({});var p=2,y=.16,g=.05,C=.05,h=.15,v=5,b=4,x=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function k(n){var o=n.r,e=n.g,a=n.b,r=s(o,e,a);return{h:360*r.h,s:r.s,v:r.v}}function w(n){var o=n.r,e=n.g,a=n.b;return"#".concat(l(o,e,a,!1))}function R(n,o,e){var a;return(a=Math.round(n.h)>=60&&Math.round(n.h)<=240?e?Math.round(n.h)-p*o:Math.round(n.h)+p*o:e?Math.round(n.h)+p*o:Math.round(n.h)-p*o)<0?a+=360:a>=360&&(a-=360),a}function T(n,o,e){return 0===n.h&&0===n.s?n.s:((a=e?n.s-y*o:o===b?n.s+y:n.s+g*o)>1&&(a=1),e&&o===v&&a>.1&&(a=.1),a<.06&&(a=.06),Number(a.toFixed(2)));var a}function E(n,o,e){var a;return(a=e?n.v+C*o:n.v-h*o)>1&&(a=1),Number(a.toFixed(2))}function N(n){for(var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=[],a=i(n),r=v;r>0;r-=1){var t=k(a),c=w(i({h:R(t,r,!0),s:T(t,r,!0),v:E(t,r,!0)}));e.push(c)}e.push(w(a));for(var s=1;s<=b;s+=1){var l=k(a),d=w(i({h:R(l,s),s:T(l,s),v:E(l,s)}));e.push(d)}return"dark"===o.theme?x.map((function(n){var a,r,t,c=n.index,s=n.opacity;return w((a=i(o.backgroundColor||"#141414"),r=i(e[c]),t=100*s/100,{r:(r.r-a.r)*t+a.r,g:(r.g-a.g)*t+a.g,b:(r.b-a.b)*t+a.b}))})):e}var F={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},A={},j={};Object.keys(F).forEach((function(n){A[n]=N(F[n]),A[n].primary=A[n][5],j[n]=N(F[n],{theme:"dark",backgroundColor:"#141414"}),j[n].primary=j[n][5]}));var M=A.blue;function z(o){return"object"===n(o)&&"string"==typeof o.name&&"string"==typeof o.theme&&("object"===n(o.icon)||"function"==typeof o.icon)}function I(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(o,e){var a,r=n[e];if("class"===e)o.className=r,delete o.class;else delete o[e],o[(a=e,a.replace(/-(.)/g,(function(n,o){return o.toUpperCase()})))]=r;return o}),{})}function D(n,e,a){return a?React.createElement(n.tag,o(o({key:e},I(n.attrs)),a),(n.children||[]).map((function(o,a){return D(o,"".concat(e,"-").concat(n.tag,"-").concat(a))}))):React.createElement(n.tag,o({key:e},I(n.attrs)),(n.children||[]).map((function(o,a){return D(o,"".concat(e,"-").concat(n.tag,"-").concat(a))})))}function B(n){return N(n)[0]}function H(n){return n?Array.isArray(n)?n:[n]:[]}var L=["icon","className","onClick","style","primaryColor","secondaryColor"],O={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var S=function(n){var a,r,t,c,i,s,l,p=n.icon,y=n.className,g=n.onClick,C=n.style,h=n.primaryColor,v=n.secondaryColor,b=e(n,L),x=React.useRef(),k=O;if(h&&(k={primaryColor:h,secondaryColor:v||B(h)}),a=x,r=React.useContext(f),t=r.csp,c=r.prefixCls,i="\n.anticon {\n  display: inline-flex;\n  alignItems: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",c&&(i=i.replace(/anticon/g,c)),React.useEffect((function(){var n=a.current,o=u(n);m(i,"@ant-design-icons",{prepend:!0,csp:t,attachTo:o})}),[]),s=z(p),l="icon should be icon definiton, but got ".concat(p),d(s,"[@ant-design/icons] ".concat(l)),!z(p))return null;var w=p;return w&&"function"==typeof w.icon&&(w=o(o({},w),{},{icon:w.icon(k.primaryColor,k.secondaryColor)})),D(w.icon,"svg-".concat(w.name),o(o({className:y,onClick:g,style:C,"data-icon":w.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},b),{},{ref:x}))};S.displayName="IconReact",S.getTwoToneColors=function(){return o({},O)},S.setTwoToneColors=function(n){var o=n.primaryColor,e=n.secondaryColor;O.primaryColor=o,O.secondaryColor=e||B(o),O.calculated=!!e};const U=S;function _(n){var o=H(n),e=a(o,2),r=e[0],t=e[1];return U.setTwoToneColors({primaryColor:r,secondaryColor:t})}var q=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];_(M.primary);var G=React.forwardRef((function(n,o){var i=n.className,s=n.icon,l=n.spin,d=n.rotate,u=n.tabIndex,m=n.onClick,p=n.twoToneColor,y=e(n,q),g=React.useContext(f),C=g.prefixCls,h=void 0===C?"anticon":C,v=g.rootClassName,b=c(v,h,r(r({},"".concat(h,"-").concat(s.name),!!s.name),"".concat(h,"-spin"),!!l||"loading"===s.name),i),x=u;void 0===x&&m&&(x=-1);var k=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,w=H(p),R=a(w,2),T=R[0],E=R[1];return React.createElement("span",t({role:"img","aria-label":s.name},y,{ref:o,tabIndex:x,onClick:m,className:b}),React.createElement(U,{icon:s,primaryColor:T,secondaryColor:E,style:k}))}));G.displayName="AntdIcon",G.getTwoToneColor=function(){var n=U.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor},G.setTwoToneColor=_;const J=G;const K={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"}}]},name:"shopping-cart",theme:"outlined"};var P=function(n,o){return React.createElement(J,t({},n,{ref:o,icon:K}))};const Q=React.forwardRef(P);export{Q as S};