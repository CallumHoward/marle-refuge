import{w as u}from"./index-283fca98.js";let f="",p="";function R(e){f=e.base,p=e.assets||f}let _="";function k(e){_=e}const x="sveltekit:scroll",I="sveltekit:index",d={tap:1,hover:2,viewport:3,eager:4,off:-1};function y(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function A(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const g={...d,"":d.hover};function b(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=b(e)}}function T(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},o=!n||w(n,t)||s.rel_external||s.target||s.download;return{url:n,has:s,external:o}}function U(e){let t=null,n=null,s=null,o=null,a=e;for(;a&&a!==document.documentElement;)n===null&&(n=l(a,"preload-code")),s===null&&(s=l(a,"preload-data")),t===null&&(t=l(a,"noscroll")),o===null&&(o=l(a,"reload")),a=b(a);return{preload_code:g[n!=null?n:"off"],preload_data:g[s!=null?s:"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function h(e){const t=u(e);let n=!0;function s(){n=!0,t.update(r=>r)}function o(r){n=!1,t.set(r)}function a(r){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&r(i=c)})}return{notify:s,set:o,subscribe:a}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${p}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const r=(await o.json()).version!==_;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:s}}function w(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let m;function L(e){m=e.client}const O={url:h({}),page:h({}),navigating:u(null),updated:v()};export{I,d as P,x as S,T as a,U as b,A as c,R as d,L as e,S as f,y as g,k as h,w as i,m as j,O as s};
