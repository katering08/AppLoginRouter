(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],{19:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(21),a=n.n(s),o=(n(29),n(30),n(19),n(11)),i=n(1);var l=function(e){var t=e.label,n=e.uri;return Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:n,children:t})})};n(37);var d=function(){var e=[{label:"Login",uri:"/"},{label:"Lista de Series",uri:"/todos"}].map((function(e,t){return Object(i.jsx)(l,{label:e.label,uri:e.uri},t)}));return Object(i.jsx)("nav",{children:Object(i.jsx)("ul",{children:e})})},j=n.p+"static/media/anime.b2067705.png";var b=function(){return Object(i.jsx)("img",{src:j})};var u=function(){return Object(i.jsxs)("header",{children:[Object(i.jsx)(b,{}),Object(i.jsx)(d,{})]})};n(38);var x=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("p",{children:" Katering M Osorto P \xa9 2021 Desarrollo de Portales Web "})})};var h=function(e){var t=e.children;return Object(i.jsx)("div",{className:"flex items-center w-full h-screen overflow-hidden",children:Object(i.jsx)("div",{className:"container mx-auto",children:Object(i.jsx)("div",{className:"max-w-md mx-auto my-10 mb-10",children:t})})})},O=n(12),m=n(6),f=n(14);var v=function(e){var t=e.lblfor,n=e.text;return Object(i.jsx)("label",{for:t,class:"block mb-3 text-sm text-white font-bold",children:n})},p=n(24);var g=function(e){var t=e.type,n=e.name,c=e.id,r=e.placeholder,s=e.onChange,a=e.value,o=Object(p.a)(e,["type","name","id","placeholder","onChange","value"]);return Object(i.jsx)("section",{children:Object(i.jsx)("input",Object(m.a)(Object(m.a)({type:t,name:n,id:c,placeholder:r,onChange:s,value:a},o),{},{class:"w-full px-3 py-2 mb-5 placeholder-gray-500 border border-gray-300 rounded-md"}))})};var w=function(e){var t=e.text,n=e.onClick;return Object(i.jsx)("button",{type:"button",onClick:n,class:"w-full p-3 mb-3 text-white bg-pink-800 rounded-md hover:bg-yellow-700",children:t})};var C=function(){return Object(i.jsx)("div",{class:"mx-20 my-5",children:Object(i.jsxs)("a",{href:"#",class:"flex px-4 py-3 border text-white hover:text-black hover:border-transparent border-gray-800 rounded-md bg-black hover:bg-blue-300 focus:outline-none",children:[Object(i.jsx)("span",{children:Object(i.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 256 262",children:[Object(i.jsx)("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),Object(i.jsx)("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),Object(i.jsx)("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),Object(i.jsx)("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]})}),Object(i.jsx)("span",{class:"mx-auto text-sm",children:"Continuar con google"})]})})};var N=function(e){var t=e.text,n=e.url,c=e.link;return Object(i.jsxs)("p",{class:"text-sm text-center text-white",children:[t,Object(i.jsx)("a",{href:n,class:"text-blue-400 focus:outline-none focus:underline focus:text-blue-200",children:c}),"."]})};var y=function(){return Object(i.jsx)("div",{class:"w-full text-right -mt-2 mb-5 pr-2",children:Object(i.jsx)("a",{class:"underline text-sm text-gray-400 hover:text-white",href:"#",children:"\xbfOlvid\xf3 su contrase\xf1a?"})})};var k=function(e){var t=e.titulo;return Object(i.jsx)("div",{class:"text-center text-white font-serif mb-9",children:Object(i.jsx)("h1",{class:"pt-6 text-3xl font-bold",children:t})})};n(39);var T=function(){var e=Object(c.useState)({email:"",password:"",usernameError:"",passwordError:""}),t=Object(f.a)(e,2),n=t[0],r=t[1],s=function(e){var t=e.currentTarget,c=t.name,s=t.value;r(Object(m.a)(Object(m.a)({},n),{},Object(O.a)({},c,s)))};return Object(i.jsxs)("form",{action:"",class:"style",children:[Object(i.jsx)(k,{titulo:"Iniciar Sesi\xf3n"}),Object(i.jsx)(v,{lblfor:"email",text:"Correo electr\xf3nico:"}),Object(i.jsx)(g,{type:"email",name:"email",id:"email",placeholder:"correo@dominio.com",onChange:s,value:n.email}),Object(i.jsx)(v,{lblfor:"password",text:"Contrase\xf1a:"}),Object(i.jsx)(g,{type:"password",name:"password",id:"password",placeholder:"contrase\xf1a",onChange:s,value:n.password}),Object(i.jsx)(y,{}),Object(i.jsx)(w,{text:"Acceder",onClick:function(e){e.preventDefault(),e.stopPropagation();var t=n.email,c=n.password;alert("Usuario: ".concat(t," Psswd: ").concat(c))}}),Object(i.jsx)(N,{text:"\xbfNo tienes cuenta? ",url:"#",link:" Crear una"}),Object(i.jsx)(C,{})]})};var H=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(h,{children:Object(i.jsx)(T,{})})})},L=n(13);var F=function(e){var t=e.onChange,n=e.value,c=e.onAddNew;return Object(i.jsx)("div",{className:"TodoAddNew",children:Object(i.jsxs)("div",{className:"flex justify-between w-screem mx-3 px-4",children:[Object(i.jsx)(g,{type:"text",id:"txtNTodo",name:"txtNTodo",onChange:t,value:n,className:"Todo-Input",onKeyUp:function(e){13==e.keyCode&&c(e)}}),Object(i.jsx)(L.a,{className:"text-white  bg-blue-800  hover:bg-white hover:text-blue-800 hover:border-blue-800 rounded-md",size:"2.8rem",onClick:c})]})})},S=n(23);function A(e){var t=e.descripcion,n=e.id,c=e.completed,r=e.doneHandler,s=e.deleteHandler,a=c?"striked":"";return Object(i.jsxs)("li",{className:"content",children:[Object(i.jsx)("div",{class:"description",children:Object(i.jsx)("span",{className:a,children:t})}),Object(i.jsxs)("div",{className:"icons",children:[Object(i.jsx)(L.b,{className:"edit",onClick:function(e){r(n)}}),Object(i.jsx)(S.a,{className:"delete",onClick:function(e){s(n)}})]})]})}var B=function(e){var t=e.todos,n=e.doneHandler,c=e.deleteHandler,r=t.map((function(e){return Object(i.jsx)(A,{descripcion:e.description,id:e.id,completed:e.completed,doneHandler:n,deleteHandler:c},e.doneHandlerid)}));return Object(i.jsx)("section",{className:"TodoList",children:Object(i.jsx)("ul",{children:r})})};n(40);var M=function(){var e=Object(c.useState)({todos:[],newTodo:""}),t=Object(f.a)(e,2),n=t[0],r=t[1];return n.todos.map((function(e){return JSON.stringify(e)})).join(" | "),Object(i.jsx)("section",{children:Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("div",{class:"text-center text-white font-serif mb-12",children:Object(i.jsx)("h1",{class:"pt-7 text-2xl font-bold",children:"Lista de Serias Favoritas"})}),Object(i.jsx)(F,{onChange:function(e){var t=e.currentTarget,c=(t.name,t.value);r(Object(m.a)(Object(m.a)({},n),{},{newTodo:c}))},value:n.newTodo,onAddNew:function(e){var t={description:n.newTodo,completed:!1,id:(new Date).getTime()},c=n.todos;c.push(t),r({todos:c,newTodo:""})}}),Object(i.jsx)(B,{todos:n.todos,doneHandler:function(e){var t=n.todos.map((function(t){return t.id==e&&(t.completed=!t.completed),t}));r(Object(m.a)(Object(m.a)({},n),{},{todos:t}))},deleteHandler:function(e){var t=n.todos.filter((function(t){return t.id!==e}));r(Object(m.a)(Object(m.a)({},n),{},{todos:t}))}})]})})},P=n(3);var D=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("body",{className:"Login",children:[Object(i.jsxs)("div",{className:"Fondo-Login",children:[Object(i.jsx)("header",{children:Object(i.jsx)(u,{})}),Object(i.jsx)("main",{children:Object(i.jsxs)(P.c,{children:[Object(i.jsx)(P.a,{path:"/",exact:!0,children:Object(i.jsx)(H,{})}),Object(i.jsx)(P.a,{path:"/todos",exact:!0,children:Object(i.jsx)("div",{className:"Todo-App",children:Object(i.jsx)(M,{})})})]})})]}),Object(i.jsx)(x,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root")),E()}},[[41,1,2]]]);
//# sourceMappingURL=main.20e3f36e.chunk.js.map