import{B as d,s as v}from"./index-6b11f641.js";const c=[];function b(e,t=d){let n;const s=new Set;function o(a){if(v(e,a)&&(e=a,n)){const u=!c.length;for(const l of s)l[1](),c.push(l,e);if(u){for(let l=0;l<c.length;l+=2)c[l][0](c[l+1]);c.length=0}}}function r(a){o(a(e))}function i(a,u=d){const l=[a,u];return s.add(l),s.size===1&&(n=t(o)||d),a(e),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:o,update:r,subscribe:i}}let h="",m="";function I(e){h=e.base,m=e.assets||h}let w="";function y(e){w=e}const A="sveltekit:scroll",S="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const g={...p,"":p.hover};function E(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=E(e)}}function O(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},o=!n||k(n,t)||s.rel_external||s.target||s.download;return{url:n,has:s,external:o}}function V(e){let t=null,n=null,s=null,o=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=E(r);return{preload_code:g[n!=null?n:"off"],preload_data:g[s!=null?s:"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function _(e){const t=b(e);let n=!0;function s(){n=!0,t.update(i=>i)}function o(i){n=!1,t.set(i)}function r(i){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&i(a=u)})}return{notify:s,set:o,subscribe:r}}function R(){const{set:e,subscribe:t}=b(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==w;return i&&(e(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:s}}function k(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function N(e){e.client}const $={url:_({}),page:_({}),navigating:b(null),updated:R()};export{S as I,p as P,A as S,O as a,V as b,U as c,I as d,N as e,L as f,T as g,y as h,k as i,$ as s};
