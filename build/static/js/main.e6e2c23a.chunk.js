(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(18),s=n.n(r),a=n(12),l=n.n(a),i=n(26),j=n(15),u=n(22),d=n.n(u),b=n(4),h=(n(132),n(2));var O=function(e){var t=e.id,n=e.go,c=e.fetchedUser,r=e.count,s=e.timer,a=e.setTimer;function i(e){a(-1),l.a.send("VKWebAppFlashSetLevel",{level:0}).then((function(e){return console.log(e)})),console.log(s),r=0,n(e)}return s>0?o.a.useEffect((function(){var e=s>0&&setInterval((function(){return a(s-1)}),1e3);return function(){return clearInterval(e)}}),[s]):0===s&&l.a.send("VKWebAppFlashSetLevel",{level:1}).then((function(e){return console.log(e)})),Object(h.jsxs)(b.o,{id:t,children:[Object(h.jsx)(b.p,{children:"Example"}),c&&Object(h.jsx)(b.k,{header:Object(h.jsx)(b.l,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(h.jsx)(b.e,{before:c.photo_200?Object(h.jsx)(b.c,{src:c.photo_200}):null,description:c.city&&c.city.title?c.city.title:"",children:"".concat(c.first_name," ").concat(c.last_name)})}),Object(h.jsxs)(b.k,{header:Object(h.jsx)(b.l,{mode:"secondary",children:"Navigation Example"}),children:[Object(h.jsx)(b.h,{children:Object(h.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",onClick:i,"data-to":"categories",children:"Categories"})}),Object(h.jsx)(b.h,{children:Object(h.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",onClick:i,"data-to":"countPlayers",children:"Start game"})}),Object(h.jsx)(b.h,{children:Object(h.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",onClick:n,"data-to":"timer",count:r,timer:s,setTimer:a,children:"Timer"})})]})]})},m=n.p+"static/media/persik.ae9f0072.png",f=(n(134),function(e){return Object(h.jsxs)(b.o,{id:e.id,children:[Object(h.jsx)(b.p,{left:Object(h.jsx)(b.q,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(h.jsx)("img",{className:"Persik",src:m,alt:"Persik The Cat"})]})}),p=(n(135),n(141));var x=function(e){var t=e.id,n=e.go,c=e.categories,o=e.setCategories;console.log(c);var r=c;return Object(h.jsxs)(b.o,{id:t,children:[Object(h.jsx)(b.p,{left:Object(h.jsx)(b.q,{onClick:n,"data-to":"home",count:0}),children:"Categories"}),Object(h.jsxs)(b.j,{className:"categories","data-to":"home",count:0,onSubmit:function(e){o(r),n(e)},children:[Object(h.jsx)(b.i,{children:Object(h.jsx)(b.f,{onChange:function(e){r=e,console.log(r)},value:c,after:Object(h.jsx)(b.m,{hoverMode:"opacity","aria-label":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u0435",onClick:function(e){e.stopPropagation(),o([])},children:Object(h.jsx)(p.a,{})})})}),Object(h.jsx)(b.d,{type:"submit",children:"Confirm"})]})]})};n(136);var g=function(e){var t=e.id,n=e.go,c=e.count,o=e.setPlayers,r=e.categories,s=r[Math.floor(Math.random()*r.length)].label;console.log(s);for(var a=[],l=0;l<c;l++){var i="name"+l;a[l]=Object(h.jsx)(b.i,{top:"Enter name",id:"nameItem",children:Object(h.jsx)(b.n,{id:i,class:"name",type:"text",required:"required"})})}return Object(h.jsxs)(b.o,{id:t,children:[Object(h.jsx)(b.p,{left:Object(h.jsx)(b.q,{onClick:n,"data-to":"home"}),children:"Name"}),Object(h.jsxs)(b.j,{id:"namesForm",onSubmit:function(e){e.preventDefault();for(var t=[],r=0;r<c;r++){var a="name"+r;t[r]=e.target.elements[a].value}console.log(t);for(var l=Math.floor(t.length/4),i=[],j=0;j<t.length;j++)i[j]=s;console.log(i);for(var u=0;u<l;u++){var d=Math.floor(Math.random()*t.length);"spy"===i[d]?u--:i[d]="spy"}console.log(i);for(var b=[],h=0;h<t.length;h++)b[h]={label:t[h],value:i[h]};console.log(b),o(b),n(e)},"data-to":"role",children:[a,Object(h.jsx)(b.d,{type:"submit",className:"submitButton",children:"Submit"})]})]})};n(137);var v=function(e){var t=e.id,n=e.go,c=e.setCount;return Object(h.jsxs)(b.o,{id:t,children:[Object(h.jsx)(b.p,{left:Object(h.jsx)(b.q,{onClick:n,"data-to":"home"}),children:"Names"}),Object(h.jsxs)(b.j,{onSubmit:function(e){e.preventDefault(),c(e.target.elements.count.value),n(e)},"data-to":"playersNames",children:[Object(h.jsx)(b.i,{top:"Enter count of players",id:"countItem",children:Object(h.jsx)(b.n,{id:"count",type:"text",defaultValue:"4"})}),Object(h.jsx)(b.d,{type:"submit",className:"submitButton",children:"Submit"})]})]})};n(138);var y=function(e){var t=e.id,n=e.go,c=e.players,o=e.counter;return console.log(c),Object(h.jsxs)(b.o,{id:t,children:[Object(h.jsx)(b.p,{left:Object(h.jsx)(b.q,{onClick:n,"data-to":"home"}),children:"Roles"}),Object(h.jsx)(b.l,{className:"name",children:c[o].label}),Object(h.jsx)(b.d,{onClick:function(e){e.preventDefault(),n(e)},"data-to":"secretRole",counter:o,className:"button",children:"Show role"})]})};n(139);var C=function(e){var t=e.id,n=e.go,c=e.players,o=e.counter,r=e.setCounter;e.setTimer,console.log(o);var s="role",a="Next player",l=o+1;return o+1===c.length&&(s="timer",console.log(s),a="start",l=0),Object(h.jsxs)(b.o,{id:t,children:[Object(h.jsx)(b.p,{left:Object(h.jsx)(b.q,{onClick:n,"data-to":"home"}),children:"Roles"}),Object(h.jsx)(b.l,{className:"role",children:c[o].value}),Object(h.jsx)(b.d,{onClick:function(e){e.preventDefault(),r(l),n(e)},"data-to":s,counter:l,count:c.length,className:"button",children:a})]})};var k=function(e){var t=e.id,n=e.go,c=e.count,r=e.timer,s=e.setTimer;return console.log(r),-1===r&&(s(20*c),l.a.send("VKWebAppFlashSetLevel",{level:0}).then((function(e){return console.log(e)}))),o.a.useEffect((function(){var e=r>0&&setInterval((function(){return s(r-1)}),1e3);return function(){return clearInterval(e)}}),[r]),0===r&&l.a.send("VKWebAppFlashSetLevel",{level:1}).then((function(e){return console.log(e)})),Object(h.jsxs)(b.o,{id:t,className:"App",children:[Object(h.jsx)(b.p,{left:Object(h.jsx)(b.q,{onClick:n,"data-to":"home",timer:r,setTimer:s}),children:"Timer"}),Object(h.jsxs)(b.l,{children:["Countdown: ",r]})]})},S=function(){var e=Object(c.useState)("bright_light"),t=Object(j.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(-1),s=Object(j.a)(r,2),a=s[0],u=s[1],m=Object(c.useState)("home"),p=Object(j.a)(m,2),S=p[0],N=p[1],T=Object(c.useState)(null),V=Object(j.a)(T,2),q=V[0],I=V[1],P=Object(c.useState)(4),A=Object(j.a)(P,2),E=A[0],K=A[1],w=Object(c.useState)([]),W=Object(j.a)(w,2),F=W[0],M=W[1],z=Object(c.useState)(0),D=Object(j.a)(z,2),U=D[0],_=D[1],B=Object(c.useState)([{value:"church",label:"\u0426\u0435\u0440\u043a\u043e\u0432\u044c"},{value:"bar",label:"\u0411\u0430\u0440"},{value:"circus",label:"\u0426\u0438\u0440\u043a"},{value:"hospital",label:"\u0411\u043e\u043b\u044c\u043d\u0438\u0446\u0430"},{value:"Vezdekod",label:"\u0412\u0435\u0437\u0434\u0435\u043a\u043e\u0434"}]),L=Object(j.a)(B,2),R=L[0],J=L[1],G=Object(c.useState)(Object(h.jsx)(b.r,{size:"large"})),H=Object(j.a)(G,2),Q=H[0],X=H[1];Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,I(t),X(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;"VKWebAppUpdateConfig"===n&&o(c.scheme)})),function(){e.apply(this,arguments)}()}),[]);var Y=function(e){N(e.currentTarget.dataset.to)};return Object(h.jsx)(b.g,{scheme:n,children:Object(h.jsx)(b.a,{children:Object(h.jsx)(b.b,{children:Object(h.jsx)(b.t,{popout:Q,children:Object(h.jsx)(b.s,{children:Object(h.jsxs)(b.u,{activePanel:S,children:[Object(h.jsx)(O,{id:"home",fetchedUser:q,go:Y,count:F.length,timer:a,setTimer:u}),Object(h.jsx)(x,{id:"categories",go:Y,categories:R,setCategories:J}),Object(h.jsx)(v,{id:"countPlayers",go:Y,setCount:K}),Object(h.jsx)(f,{id:"persik",go:Y}),Object(h.jsx)(g,{id:"playersNames",go:Y,count:E,setPlayers:M,categories:R}),Object(h.jsx)(y,{id:"role",go:Y,players:F,counter:U}),Object(h.jsx)(C,{id:"secretRole",go:Y,players:F,counter:U,setCounter:_,setTimer:u}),Object(h.jsx)(k,{id:"timer",go:Y,count:F.length,timer:a,setTimer:u})]})})})})})})};l.a.send("VKWebAppInit"),s.a.render(Object(h.jsx)(S,{}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.e6e2c23a.chunk.js.map