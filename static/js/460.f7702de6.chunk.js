"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{524:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(861),c=e(885),o=e(757),i=e.n(o),u=e(791),a=e(739),s=e(211),f=e(649),h=e(184);function p(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],o=t[1],p=(0,u.useState)(!1),v=(0,c.Z)(p,2),m=v[0],l=v[1],w=(0,u.useState)(null),d=(0,c.Z)(w,2),g=d[0],j=d[1],k=(0,a.UO)().id;(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,(0,s.uV)(k);case 4:t=n.sent,o(t.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),j(n.t0);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[k]);var x=e.map((function(n){var t=n.id,e=n.profile_path,r=n.name,c=n.character;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:null===e?"https://stringfixer.com/files/951711496.jpg":"https://image.tmdb.org/t/p/w342/".concat(e),alt:r,width:"100"}),(0,h.jsxs)("p",{children:[r," "]}),(0,h.jsxs)("p",{children:["Character: ",c," "]})]},t)}));return(0,h.jsxs)("div",{children:[(0,h.jsxs)("ul",{children:[" ",x]}),m&&(0,h.jsx)(f.Z,{}),g&&(0,h.jsx)("p",{children:"Somethink went wrong"})]})}},211:function(n,t,e){e.d(t,{Ch:function(){return s},Ny:function(){return i},Tg:function(){return o},r7:function(){return a},uV:function(){return u}});var r="03b6b40703e74b2f689e775724157322",c="https://api.themoviedb.org/3";function o(){var n="".concat(c,"/trending/movie/day?api_key=").concat(r);return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong!"))})).then((function(n){return n.results}))}function i(n){var t="".concat(c,"/movie/").concat(n,"?api_key=").concat(r);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function u(n){var t="".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function a(n){var t="".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))}))}function s(n){var t="".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something weent wrong!"))})).then((function(n){return n.results}))}},861:function(n,t,e){function r(n,t,e,r,c,o,i){try{var u=n[o](i),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var i=n.apply(t,e);function u(n){r(i,c,o,u,a,"next",n)}function a(n){r(i,c,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=460.f7702de6.chunk.js.map