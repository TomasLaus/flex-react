(this.webpackJsonpflex=this.webpackJsonpflex||[]).push([[0],{56:function(e,c,t){},57:function(e,c,t){},84:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),s=t(13),r=t.n(s),i=(t(56),t(57),t(91)),j=t(89),o=t(92),l=t(90),d=t.p+"static/media/logo.6ce24c58.svg",b=(t(23),t(47)),u=t(48),h=t(1);var O=function(){return Object(h.jsx)("div",{className:"CartWidget",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(b.a,{icon:u.a,style:{color:"#fff",display:"inline-block"}}),Object(h.jsxs)(l.a,{id:"basic-nav-dropdown",style:{display:"inline-block"},children:[Object(h.jsx)(l.a.Item,{children:"Su carrito"}),Object(h.jsx)(l.a.Item,{children:Object(h.jsx)("br",{})}),Object(h.jsx)(l.a.Item,{children:Object(h.jsx)("br",{})}),Object(h.jsx)(l.a.Item,{children:Object(h.jsx)("br",{})}),Object(h.jsx)(l.a.Item,{children:Object(h.jsx)("br",{})}),Object(h.jsx)(l.a.Item,{children:"Su carrito est\xe1 vacio."})]})]})})};var x=function(){return Object(h.jsx)("div",{className:"Navbar",children:Object(h.jsx)(i.a,{expand:"lg",variant:"dark",bg:"dark",fixed:"top",children:Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(i.a.Brand,{href:"#home",children:["Flex",Object(h.jsx)("img",{src:d,width:"30",height:"30",className:" align-top",alt:""})]}),Object(h.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(o.a,{className:"mr-auto",children:[Object(h.jsx)(o.a.Link,{href:"#home",children:"Inicio"}),Object(h.jsx)(o.a.Link,{href:"#link",children:"Nosotros"}),Object(h.jsxs)(l.a,{title:"Productos",id:"basic-nav-dropdown",children:[Object(h.jsx)(l.a.Item,{children:"Marca"}),Object(h.jsx)(l.a.Item,{children:"Otra marca"}),Object(h.jsx)(l.a.Item,{children:"Otra marca"})]})]})}),Object(h.jsx)(O,{})]})})})},m=t(18),f=t.n(m),p=t(29),v=t(32),g=function(e){var c=e.item;return Object(h.jsx)("div",{"data-aos":"fade-up",className:"col-12 col-md-6 col-lg-4 col-xl-3",children:Object(h.jsxs)("div",{className:"card-ecommerce",children:[Object(h.jsxs)("h1",{className:"price",children:["$",c.price]}),Object(h.jsx)("h1",{className:"name",children:c.title}),Object(h.jsx)("div",{className:"contenedor-boton",children:Object(h.jsx)("button",{className:"btn",type:"button",name:"button",children:"Comprar"})})]})})},N=t(30),k=t.n(N),I=t(31),y=t.n(I);t(46);var w=function(){Object(a.useEffect)((function(){y.a.init({duration:2e3})}),[]);var e=Object(a.useState)([]),c=Object(v.a)(e,2),t=c[0],n=c[1],s=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://fakestoreapi.com/products/").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"tituloProductos",children:"Flex - PRODUCTOS"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:t?Object(h.jsx)(g,{item:t}):"...cargando"})})]})};var C=function(e){var c=e.item;return Object(h.jsx)("div",{"data-aos":"fade-up",className:"col-12 col-md-6 col-lg-4 col-xl-3",style:{marginBottom:"1%"},children:Object(h.jsxs)("div",{className:"card-ecommerce",children:[Object(h.jsx)("img",{src:c.image,className:"img",alt:""}),Object(h.jsxs)("h1",{className:"price",children:["$",c.price]}),Object(h.jsx)("h1",{className:"name",children:c.title}),Object(h.jsx)("h1",{className:"desc",children:c.description})]})})};var F=function(){Object(a.useEffect)((function(){y.a.init({duration:2e3})}),[]);var e=Object(a.useState)([]),c=Object(v.a)(e,2),t=c[0],n=c[1],s=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://fakestoreapi.com/products/").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(h.jsx)(h.Fragment,{children:t?t.map((function(e){return Object(h.jsx)(C,{item:e},e.id)})):"Cargando..."})};var S=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(x,{})}),Object(h.jsxs)("body",{className:"App-body",children:[Object(h.jsx)(w,{}),Object(h.jsx)(F,{})]})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),E()}},[[84,1,2]]]);
//# sourceMappingURL=main.18d4cafa.chunk.js.map