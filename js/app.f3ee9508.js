(function(){"use strict";var n={330:function(n,t,e){var r=e(9242),o=e(3396);function u(n,t,e,r,u,a){const i=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.j4)(i,{msg:"Welcome to Your Vue.js App"})}var a=e(7139);const i=n=>((0,o.dD)("data-v-f342d7de"),n=n(),(0,o.Cn)(),n),l={class:"data"},c=i((()=>(0,o._)("h1",null,"Asset List",-1))),s=i((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Asset name"),(0,o._)("th",null,"Department")])],-1))),d={class:"button-container"};function f(n,t,e,r,u,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",l,[c,(0,o._)("table",null,[s,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.assets,((n,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,a.zw)(t),1),(0,o._)("td",null,(0,a.zw)(n),1)])))),128))])])]),(0,o._)("div",d,[(0,o._)("button",{onClick:t[0]||(t[0]=(...n)=>i.downloadCSV&&i.downloadCSV(...n))},"Download CSV")])],64)}e(2062);var p=e(6026),v=e.n(p),h={data(){return{assets:{Printer:"HR",Monitor:"IT","Barcode Scanner":"ACCOUNT"}}},methods:{downloadCSV(){const n=v().unparse(Object.entries(this.assets)),t=new Blob([n],{type:"text/csv;charset=utf-8;"}),e=URL.createObjectURL(t),r=document.createElement("a");r.setAttribute("href",e),r.setAttribute("download","assets.csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}},b=e(89);const w=(0,b.Z)(h,[["render",f],["__scopeId","data-v-f342d7de"]]);var _=w,m={name:"App",components:{HelloWorld:_}};const y=(0,b.Z)(m,[["render",u]]);var O=y;(0,r.ri)(O).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return n[r].call(u.exports,u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,u){if(!r){var a=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var i=!0,l=0;l<r.length;l++)(!1&u||a>=u)&&Object.keys(e.O).every((function(n){return e.O[n](r[l])}))?r.splice(l--,1):(i=!1,u<a&&(a=u));if(i){n.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==n[t]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(l)var s=l(e)}for(t&&t(r);c<a.length;c++)u=a[c],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(s)},r=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(330)}));r=e.O(r)})();
//# sourceMappingURL=app.f3ee9508.js.map