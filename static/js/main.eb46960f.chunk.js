(this.webpackJsonpcard_simulator=this.webpackJsonpcard_simulator||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),r=n.n(a),c=n(6),l=n.n(c),o=(n(15),n(9)),s=n(7),d=n.n(s);var h=function(t){var e=t.values,n=Object(a.useRef)(null);Object(a.useEffect)((function(){var t=n.current.getContext("2d");t.clearRect(0,0,200,300),t.fillStyle="rgba(128,255,128, 0)",t.fillRect(0,0,200,300),t.strokeStyle="black",t.fillStyle=e.bgcolor,function(t,e){"undefined"===typeof e.stroke&&(e.stroke=!0),"undefined"===typeof e.radius&&(e.radius=5),"number"===typeof e.radius&&(e.radius={tl:e.radius,tr:e.radius,br:e.radius,bl:e.radius}),t.beginPath(),t.moveTo(e.x+e.radius.tl,e.y),t.lineTo(e.x+e.width-e.radius.tr,e.y),t.quadraticCurveTo(e.x+e.width,e.y,e.x+e.width,e.y+e.radius.tr),t.lineTo(e.x+e.width,e.y+e.height-e.radius.br),t.quadraticCurveTo(e.x+e.width,e.y+e.height,e.x+e.width-e.radius.br,e.y+e.height),t.lineTo(e.x+e.radius.bl,e.y+e.height),t.quadraticCurveTo(e.x,e.y+e.height,e.x,e.y+e.height-e.radius.bl),t.lineTo(e.x,e.y+e.radius.tl),t.quadraticCurveTo(e.x,e.y,e.x+e.radius.tl,e.y),t.closePath(),e.fill&&t.fill(),e.stroke&&t.stroke()}(t,{x:0,y:0,width:200,height:300,radius:20,fill:!0,stroke:!0}),e.point&&e.point.length>0&&(t.strokeStyle="black",t.fillStyle="white",t.beginPath(),t.arc(30,30,20,0,2*Math.PI),t.closePath(),t.fill(),t.stroke(),t.textAlign="center",t.font="1.5rem 'Sawarabi Gothic'",t.fillStyle="black",t.fillText(e.point,30,38,30)),t.textAlign="center",t.font="2rem 'Sawarabi Gothic'",t.fillStyle="black",t.fillText(e.title,100,80,190);t.textAlign="left",t.font="".concat(14,"px 'Sawarabi Gothic'"),t.fillStyle="black",e.text.split("\n").forEach((function(e,n){t.fillText(e,10,130+14*n+2*n,180)})),t.save()}));return Object(i.jsxs)("div",{className:d.a.CardCanvasContainer,children:[Object(i.jsx)("canvas",{ref:n,width:"200",height:"300"}),Object(i.jsx)("p",{children:Object(i.jsx)("button",{onClick:function(){var t=n.current,i=document.createElement("a");i.href=t.toDataURL("image/png",.85),i.download="".concat(e.title.length>0?e.title:"image",".png"),i.click()},children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})})]})},u=n(2),j=n(4),b=n(5),x=n.n(b),f=function(t){var e=t.values,n=t.onChange,a=function(t){n(Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.target.name,t.target.value)))};return Object(i.jsx)("div",{className:x.a.CardFormContainer,children:Object(i.jsxs)("table",{className:x.a.CardFormTable,children:[Object(i.jsx)("caption",{children:"Card Details"}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("td",{children:Object(i.jsx)("input",{type:"text",name:"title",value:e.title,onChange:a})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Backgroud Color"}),Object(i.jsx)("td",{children:Object(i.jsx)("input",{type:"color",name:"bgcolor",value:e.bgcolor,onChange:a})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Point"}),Object(i.jsx)("td",{children:Object(i.jsx)("input",{type:"text",name:"point",value:e.point,onChange:a})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Text"}),Object(i.jsx)("td",{children:Object(i.jsx)("textarea",{name:"text",onChange:a,children:e.text})})]})]})]})})},g=n(8),O=n.n(g);var p=function(){var t=Object(a.useState)({title:"",text:"",bgcolor:"#ffffff"}),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(i.jsxs)("div",{className:O.a.App,children:[Object(i.jsx)("h1",{children:"Card Simulator"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{values:n,onChange:function(t){r(t)}}),Object(i.jsx)(h,{values:n})]})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),r(t),c(t)}))};l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),C()},5:function(t,e,n){t.exports={CardFormTable:"CardForm_CardFormTable__3zcUi"}},7:function(t,e,n){t.exports={CardCanvasContainer:"CardCanvas_CardCanvasContainer__2j7nk"}},8:function(t,e,n){t.exports={App:"App_App__15LM-"}}},[[16,1,2]]]);
//# sourceMappingURL=main.eb46960f.chunk.js.map