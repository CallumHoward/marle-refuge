import{S as L,i as P,s as B,k as O,l as w,m as C,h,n as E,b as y,f as _,d as N,t as p,N as H,o as M,e as b,g as x,q as m,a as U,r as g,c as j,H as d,u as S,O as z,P as k}from"../../../chunks/index-6b11f641.js";import{e as A,a as F,d as G}from"../../../chunks/app-e872d811.js";function J(o){const l=o-1;return l*l*l+1}function $(o,{delay:l=0,duration:s=400,easing:t=J,x:e=0,y:i=0,opacity:n=0}={}){const r=getComputedStyle(o),a=+r.opacity,f=r.transform==="none"?"":r.transform,c=a*(1-n);return{delay:l,duration:s,easing:t,css:(u,D)=>`
			transform: ${f} translate(${(1-u)*e}px, ${(1-u)*i}px);
			opacity: ${a-c*D}`}}function v(o,l,s){const t=o.slice();return t[2]=l[s].agentId,t[3]=l[s].timestamp,t[4]=l[s].userName,t[6]=s,t}function q(o){let l,s=o[2]+"",t,e,i=new Date(o[3]).toISOString().slice(0,10)+"",n,r,a,f;return{c(){l=O("li"),t=m(s),e=m(" rescued on "),n=m(i),r=U(),this.h()},l(c){l=w(c,"LI",{class:!0});var u=C(l);t=g(u,s),e=g(u," rescued on "),n=g(u,i),r=j(u),u.forEach(h),this.h()},h(){E(l,"class","text-2xl")},m(c,u){y(c,l,u),d(l,t),d(l,e),d(l,n),d(l,r),f=!0},p(c,u){(!f||u&1)&&s!==(s=c[2]+"")&&S(t,s),(!f||u&1)&&i!==(i=new Date(c[3]).toISOString().slice(0,10)+"")&&S(n,i)},i(c){f||(z(()=>{a||(a=k(l,$,{delay:o[6]*500,duration:300,y:10},!0)),a.run(1)}),f=!0)},o(c){a||(a=k(l,$,{delay:o[6]*500,duration:300,y:10},!1)),a.run(0),f=!1},d(c){c&&h(l),c&&a&&a.end()}}}function I(o){let l,s,t=o[4]&&q(o);return{c(){t&&t.c(),l=b()},l(e){t&&t.l(e),l=b()},m(e,i){t&&t.m(e,i),y(e,l,i),s=!0},p(e,i){e[4]?t?(t.p(e,i),i&1&&_(t,1)):(t=q(e),t.c(),_(t,1),t.m(l.parentNode,l)):t&&(x(),p(t,1,1,()=>{t=null}),N())},i(e){s||(_(t),s=!0)},o(e){p(t),s=!1},d(e){t&&t.d(e),e&&h(l)}}}function K(o){let l,s,t=o[0],e=[];for(let n=0;n<t.length;n+=1)e[n]=I(v(o,t,n));const i=n=>p(e[n],1,1,()=>{e[n]=null});return{c(){l=O("ul");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){l=w(n,"UL",{class:!0});var r=C(l);for(let a=0;a<e.length;a+=1)e[a].l(r);r.forEach(h),this.h()},h(){E(l,"class","p-10")},m(n,r){y(n,l,r);for(let a=0;a<e.length;a+=1)e[a].m(l,null);s=!0},p(n,[r]){if(r&1){t=n[0];let a;for(a=0;a<t.length;a+=1){const f=v(n,t,a);e[a]?(e[a].p(f,r),_(e[a],1)):(e[a]=I(f),e[a].c(),_(e[a],1),e[a].m(l,null))}for(x(),a=t.length;a<e.length;a+=1)i(a);N()}},i(n){if(!s){for(let r=0;r<t.length;r+=1)_(e[r]);s=!0}},o(n){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)p(e[r]);s=!1},d(n){n&&h(l),H(e,n)}}}function Q(o,l,s){const t=A(G,"refugees");let e=[];return M(async()=>{(await F(t)).forEach(n=>e.push(n.data())),s(0,e)}),[e]}class V extends L{constructor(l){super(),P(this,l,Q,K,B,{})}}export{V as default};
