(this.webpackJsonpflex=this.webpackJsonpflex||[]).push([[0],{56:function(e,c,t){},57:function(e,c,t){},84:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),s=t(13),r=t.n(s),i=(t(56),t(57),t(91)),j=t(89),o=t(92),l=t(90),d=t.p+"static/media/logo.6ce24c58.svg",b=(t(20),t(47)),h=t(48),u=t(1);var O=function(){return Object(u.jsx)("div",{className:"CartWidget",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(b.a,{icon:h.a,style:{color:"#fff",display:"inline-block"}}),Object(u.jsxs)(l.a,{id:"basic-nav-dropdown",style:{display:"inline-block"},children:[Object(u.jsx)(l.a.Item,{children:"Su carrito"}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("br",{})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("br",{})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("br",{})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("br",{})}),Object(u.jsx)(l.a.Item,{children:"Su carrito est\xe1 vacio."})]})]})})};var x=function(){return Object(u.jsx)("div",{className:"Navbar",children:Object(u.jsx)(i.a,{expand:"lg",variant:"dark",bg:"dark",fixed:"top",children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(i.a.Brand,{href:"#home",children:["Flex",Object(u.jsx)("img",{src:d,width:"30",height:"30",className:" align-top",alt:""})]}),Object(u.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(o.a,{className:"mr-auto",children:[Object(u.jsx)(o.a.Link,{href:"#home",children:"Inicio"}),Object(u.jsx)(o.a.Link,{href:"#link",children:"Nosotros"}),Object(u.jsxs)(l.a,{title:"Productos",id:"basic-nav-dropdown",children:[Object(u.jsx)(l.a.Item,{children:"Marca"}),Object(u.jsx)(l.a.Item,{children:"Otra marca"}),Object(u.jsx)(l.a.Item,{children:"Otra marca"})]})]})}),Object(u.jsx)(O,{})]})})})},m=t(18),f=t.n(m),p=t(29),v=t(32);var g=function(e){var c=e.item;return Object(u.jsx)("div",{"data-aos":"fade-up",className:"col-12 col-md-6 col-lg-4 col-xl-3",style:{marginBottom:"1%"},children:Object(u.jsxs)("div",{className:"card-ecommerce",children:[Object(u.jsx)("img",{src:c.image,className:"img",alt:""}),Object(u.jsxs)("h1",{className:"price",children:["$",c.price]}),Object(u.jsx)("h1",{className:"name",children:c.title}),Object(u.jsx)("h1",{className:"desc",children:c.description})]})})},N=function(e){var c=e.productos;c&&c.map((function(e,c){return Object(u.jsx)("div",{"data-aos":"fade-up",className:"col-12 col-md-6 col-lg-4 col-xl-3",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h1",{className:"title-card-weather",children:e.name}),Object(u.jsx)("p",{className:"text",children:e.image}),Object(u.jsx)("h1",{className:"title-card-weather-of",children:e.price}),Object(u.jsx)("div",{className:"container-btns-card-weather",children:Object(u.jsx)("i",{className:"icon-heart-btn-card far fa-heart"})})]})},c)}))},k=t(30),w=t.n(k),I=t(31),y=t.n(I);t(46);var C=function(){Object(a.useEffect)((function(){y.a.init({duration:2e3})}),[]);var e=Object(a.useState)([]),c=Object(v.a)(e,2),t=c[0],n=c[1],s=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://fakestoreapi.com/products/").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"tituloProductos",children:"Flex - PRODUCTOS"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:t?Object(u.jsx)(N,{productos:t}):"...cargando"})})]})};var F=function(){Object(a.useEffect)((function(){y.a.init({duration:2e3})}),[]);var e=Object(a.useState)([]),c=Object(v.a)(e,2),t=c[0],n=c[1],s=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://fakestoreapi.com/products/").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(u.jsx)(u.Fragment,{children:t?t.map((function(e,c){return Object(u.jsx)(g,{item:e},e.id)})):"Cargando..."})};var S=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)(x,{})}),Object(u.jsxs)("body",{className:"App-body",children:[Object(u.jsx)(C,{}),Object(u.jsx)(F,{})]})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),E()}},[[84,1,2]]]);
//# sourceMappingURL=main.dbb49846.chunk.js.map