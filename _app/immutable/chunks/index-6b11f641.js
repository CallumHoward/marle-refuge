function $(){}const rt=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function q(){return Object.create(null)}function b(t){t.forEach(J)}function B(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function Rt(t,e,n,r){if(t){const s=K(t,e,n,r);return t[0](s)}}function K(t,e,n,r){return t[1]&&r?st(n.ctx.slice(),t[1](r(e))):n.ctx}function zt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],i=Math.max(e.dirty.length,s.length);for(let u=0;u<i;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function Bt(t,e,n,r,s,o){if(s){const i=K(e,n,r,o);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const W=typeof window<"u";let ct=W?()=>window.performance.now():()=>Date.now(),H=W?t=>requestAnimationFrame(t):$;const x=new Set;function Q(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&H(Q)}function ut(t){let e;return x.size===0&&H(Q),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let T=!1;function at(){T=!0}function ft(){T=!1}function _t(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=c?s+1:_t(1,s,a=>e[n[a]].claim_order,c))-1;r[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const o=[],i=[];let u=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);u>=l;u--)i.push(e[u]);u--}for(;u>=0;u--)i.push(e[u]);o.reverse(),i.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<i.length;l++){for(;c<o.length&&i[l].claim_order>=o[c].claim_order;)c++;const _=c<o.length?o[c]:null;t.insertBefore(i[l],_)}}function ht(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=X("style");return pt(U(t),e),e.sheet}function pt(t,e){return ht(t.head||t,e),e.sheet}function yt(t,e){if(T){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){T&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function Ft(){return L(" ")}function Gt(){return L("")}function It(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Jt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,r,s=!1){xt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const u=t[i];if(e(u)){const l=n(u);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),u}}for(let i=t.claim_info.last_index-1;i>=0;i--){const u=t[i];if(e(u)){const l=n(u);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,u}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function $t(t,e,n,r){return Y(t,s=>s.nodeName===e,s=>{const o=[];for(let i=0;i<s.attributes.length;i++){const u=s.attributes[i];n[u.name]||o.push(u.name)}o.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Wt(t,e,n){return $t(t,e,n,X)}function bt(t,e){return Y(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>L(e),!0)}function Qt(t){return bt(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e){t.value=e==null?"":e}function Xt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function wt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}function Yt(t,e){const n=[];let r=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(s)):o===`HEAD_${t}_START`&&(r+=1,n.push(s))}else r>0&&n.push(s);return n}function Zt(t,e){return new t(e)}const D=new Map;let k=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:mt(e),rules:{}};return D.set(t,n),n}function F(t,e,n,r,s,o,i,u=0){const l=16.666/r;let c=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);c+=p*100+`%{${i(g,1-g)}}
`}const _=c+`100% {${i(n,1-n)}}
}`,f=`__svelte_${vt(_)}_${u}`,a=U(t),{stylesheet:d,rules:h}=D.get(a)||Et(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,k+=1,f}function Nt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),k-=s,k||At())}function At(){H(()=>{k||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),D.clear())})}let N;function E(t){N=t}function Z(){if(!N)throw new Error("Function called outside component initialization");return N}function te(t){Z().$$.on_mount.push(t)}function ee(t){Z().$$.after_update.push(t)}const v=[],G=[],S=[],I=[],tt=Promise.resolve();let z=!1;function et(){z||(z=!0,tt.then(nt))}function ne(){return et(),tt}function M(t){S.push(t)}const P=new Set;let C=0;function nt(){const t=N;do{for(;C<v.length;){const e=v[C];C++,E(e),Ct(e.$$)}for(E(null),v.length=0,C=0;G.length;)G.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];P.has(n)||(P.add(n),n())}S.length=0}while(v.length);for(;I.length;)I.pop()();z=!1,P.clear(),E(t)}function Ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let w;function St(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function R(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const j=new Set;let m;function ie(){m={r:0,c:[],p:m}}function re(){m.r||b(m.c),m=m.p}function jt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function se(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),m.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Dt={duration:0};function oe(t,e,n,r){let s=e(t,n),o=r?0:1,i=null,u=null,l=null;function c(){l&&Nt(t,l)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=rt,tick:p=$,css:g}=s||Dt,O={start:ct()+d,b:a};a||(O.group=m,m.r+=1),i||u?u=O:(g&&(c(),l=F(t,o,a,h,d,y,g)),a&&p(0,1),i=_(O,h),M(()=>R(t,a,"start")),ut(A=>{if(u&&A>u.start&&(i=_(u,h),u=null,R(t,i.b,"start"),g&&(c(),l=F(t,o,i.b,i.duration,0,y,s.css))),i){if(A>=i.end)p(o=i.b,1-o),R(t,i.b,"end"),u||(i.b?c():--i.group.r||b(i.group.c)),i=null;else if(A>=i.start){const it=A-i.start;o=i.a+i.d*y(it/i.duration),p(o,1-o)}}return!!(i||u)}))}return{run(a){B(s)?St().then(()=>{s=s(),f(a)}):f(a)},end(){c(),i=u=null}}}function le(t){t&&t.c()}function ce(t,e){t&&t.l(e)}function kt(t,e,n,r){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),r||M(()=>{const i=t.$$.on_mount.map(J).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...i):b(i),t.$$.on_mount=[]}),o.forEach(M)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(v.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,r,s,o,i,u=[-1]){const l=N;E(t);const c=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};i&&i(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return c.ctx&&s(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),_&&Tt(t,f)),a}):[],c.update(),_=!0,b(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){at();const f=gt(e.target);c.fragment&&c.fragment.l(f),f.forEach(V)}else c.fragment&&c.fragment.c();e.intro&&jt(t.$$.fragment),kt(t,e.target,e.anchor,e.customElement),ft(),nt()}E(l)}class ae{$destroy(){Mt(this,1),this.$destroy=$}$on(e,n){if(!B(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ne as A,$ as B,Rt as C,Yt as D,Bt as E,Ht as F,zt as G,yt as H,Pt as I,Vt as J,It as K,Jt as L,b as M,qt as N,M as O,oe as P,ae as S,Ft as a,Lt as b,Qt as c,re as d,Gt as e,jt as f,ie as g,V as h,ue as i,ee as j,X as k,Wt as l,gt as m,Kt as n,te as o,Xt as p,L as q,bt as r,Ot as s,se as t,Ut as u,Zt as v,le as w,ce as x,kt as y,Mt as z};