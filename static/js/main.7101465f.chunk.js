(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{27:function(e,t,n){},37:function(e,t){},38:function(e,t,n){"use strict";n.r(t);var c=n(13),i=n.n(c),r=n(20),s=n.n(r),a=n(1),o=n(6),u=(n(27),n(40)),d=n(5),l=function(){var e=Object(c.useState)([0]),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(d.jsx)("div",{id:"body",children:Object(d.jsxs)("div",{className:"calculator",children:[Object(d.jsx)("div",{id:"screen",children:Object(d.jsx)("h1",{id:"number",children:n})}),Object(d.jsx)("div",{className:"bottom",children:Object(d.jsx)("div",{id:"numpad",children:[7,8,9,"+",4,5,6,"-",1,2,3,"*","AC",0,"=","/"].map((function(e){return Object(d.jsx)("button",{id:"num",onClick:function(){return function(e){var t=n;if(0===n[0]&&t.shift(),"AC"===e)i([0]);else if("="===e){var c=t.join(""),r=Object(u.a)(c),s=parseFloat(r.toFixed(2));i([s])}else{if(t.length>=11)return;t.push(e),i(Object(a.a)(t))}}(e)},children:e})}))})})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),j()}},[[38,1,2]]]);
//# sourceMappingURL=main.7101465f.chunk.js.map