(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(7),s=c.n(a),d=(c(13),c(8)),l=c(6),j=c(3),o=c.p+"static/media/logo.8de8ac97.png",r=c(0),b=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),s=Object(j.a)(a,2),b=s[0],u=s[1],m=Object(n.useState)(!0),O=Object(j.a)(m,2),f=O[0],h=O[1],x=Object(n.useState)(null),p=Object(j.a)(x,2),v=p[0],g=p[1],N=function(){if(c)if(c&&!f)u(b.map((function(e){return e.id===v?Object(l.a)(Object(l.a)({},e),{},{name:c}):e}))),h(!0),i(""),g(null);else{var e={id:(new Date).getTime().toString(),name:c};u([].concat(Object(d.a)(b),[e])),i("")}else;};return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"main-div",children:Object(r.jsxs)("div",{className:"child-div",children:[Object(r.jsxs)("figure",{children:[Object(r.jsx)("img",{src:o,alt:"todologo"}),Object(r.jsx)("figcaption",{children:"Add Your To Do's Here"})]}),Object(r.jsxs)("div",{className:"addItems",children:[Object(r.jsx)("input",{type:"text",placeholder:"\u270d\ufe0f Add Items...",value:c,onChange:function(e){i(e.target.value)}}),f?Object(r.jsx)("i",{className:"fa fa-plus add-btn",title:"add item",onClick:N}):Object(r.jsx)("i",{className:"fa fa-edit add-btn",title:"Update item",onClick:N})]}),Object(r.jsxs)("div",{className:"showItems",children:[b.map((function(e){return Object(r.jsxs)("div",{className:"eachItem",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsxs)("div",{className:"todo-btn",children:[Object(r.jsx)("i",{className:"fas fa-edit  add-btn",title:"editItem",onClick:function(){return function(e){var t=b.find((function(t){return t.id===e}));h(!1),i(t.name),g(e),console.log(t)}(e.id)}}),Object(r.jsx)("i",{className:"fas fa-trash-alt add-btn",title:"deleteItem",onClick:function(){return function(e){var t=b.filter((function(t){return e!==t.id}));u(t)}(e.id)}})]})]},e.id)})),Object(r.jsx)("div",{className:"showItems",children:Object(r.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:Object(r.jsx)("span",{children:"Check List"})})})]})]})})})},u=(c(15),function(){return Object(r.jsx)("div",{children:Object(r.jsx)(b,{})})});s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9d71f537.chunk.js.map