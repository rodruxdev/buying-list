(this["webpackJsonpbuying-list"]=this["webpackJsonpbuying-list"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),i=(a(12),a(6)),l=a(2);var o=a(0),u=c.a.createContext();function d(e){var t=function(e,t){var a=c.a.useState(!1),n=Object(l.a)(a,2),s=n[0],r=n[1],i=c.a.useState(!0),o=Object(l.a)(i,2),u=o[0],d=o[1],m=c.a.useState(t),j=Object(l.a)(m,2),b=j[0],h=j[1];return c.a.useEffect((function(){setTimeout((function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=[]),h(a),d(!1)}catch(s){r(s)}}),1e3)})),{item:b,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),h(t)}catch(s){r(s)}},loading:u,error:s}}("ITEMS_V1",[]),a=t.item,n=t.saveItem,s=t.loading,r=t.error,d=c.a.useState(""),m=Object(l.a)(d,2),j=m[0],b=m[1],h=c.a.useState(!1),O=Object(l.a)(h,2),x=O[0],f=O[1],g=a.filter((function(e){return!!e.buyed})).length,p=a.length,v=[];v=j.length<1?a:a.filter((function(e){var t=e.name.toLowerCase(),a=j.toLowerCase();return t.includes(a)}));return Object(o.jsx)(u.Provider,{value:{loading:s,error:r,totalItems:p,buyedItems:g,searchValue:j,setSearchValue:b,searchedItems:v,addItem:function(e){var t=e.quantity,c=e.measure,s=e.name,r=Object(i.a)(a);r.push({quantity:t,measure:c,name:s,buyed:!1}),n(r)},toggleBuyItem:function(e){var t=a.findIndex((function(t){return t.name===e})),c=Object(i.a)(a);c[t].buyed=!c[t].buyed,n(c)},deleteItem:function(e){var t=a.findIndex((function(t){return t.name===e})),c=Object(i.a)(a);c.splice(t,1),n(c)},openModal:x,setOpenModal:f},children:e.children})}a(14);function m(){var e=c.a.useContext(u),t=e.totalItems,a=e.buyedItems;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Lista de Compras"}),Object(o.jsxs)("h2",{children:["Has comprado ",a," de ",t," items de tu lista"]})]})}a(15);var j=a.p+"static/media/search.9c2249eb.svg";function b(){var e=c.a.useContext(u),t=e.searchValue,a=e.setSearchValue;return Object(o.jsx)("div",{className:"ListSearch",children:Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("input",{type:"text",id:"input-search",placeholder:"Buscar",value:t,onChange:function(e){console.log(e.target.value),a(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"input-search",children:Object(o.jsx)("img",{src:j,alt:"search"})})]})})}a(16);function h(e){return Object(o.jsx)("section",{children:Object(o.jsx)("ul",{className:"buyingList",children:e.children})})}a(17);var O=a.p+"static/media/cart-check.19883558.svg",x=a.p+"static/media/trash.53c48e82.svg";function f(e){var t=e.text,a=e.quantity,n=e.measure,c=e.buyed,s=e.toggleBuyed,r=e.onDelete;return Object(o.jsxs)("li",{className:"list-item",children:[Object(o.jsx)("img",{src:O,alt:"".concat(a," ").concat(n," de ").concat(t),className:"list-item--car-icon ".concat(c&&"list-item--car-icon__buyed"),onClick:s}),Object(o.jsx)("p",{className:"list-item--text ".concat(c&&"list-item--text__buyed"),children:"".concat(a," ").concat(n," de ").concat(t)}),Object(o.jsx)("img",{src:x,alt:"Eliminar item",className:"list-item--trash-icon",onClick:r})]})}a(18);var g=a.p+"static/media/cross.f4cf7fee.svg";function p(){var e=c.a.useContext(u),t=e.openModal,a=e.setOpenModal;return Object(o.jsx)("button",{className:"button ".concat(!!t&&"button__active"),type:"button",onClick:function(){a(!t)},children:Object(o.jsx)("img",{src:g,alt:"Add new item",className:"button--image"})})}a(19);function v(e){var t=e.children;return r.a.createPortal(Object(o.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}a(20);function y(){var e=c.a.useState(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=c.a.useState(""),r=Object(l.a)(s,2),i=r[0],d=r[1],m=c.a.useState("kgs"),j=Object(l.a)(m,2),b=j[0],h=j[1],O=c.a.useContext(u),x=O.addItem,f=O.setOpenModal;return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x({quantity:i,measure:b,name:a}),f(!1)},className:"form",children:[Object(o.jsx)("h3",{className:"form--title",children:"Agrega un item a tu lista"}),Object(o.jsxs)("div",{className:"form--container",children:[Object(o.jsxs)("div",{className:"form--small-wrapper",children:[Object(o.jsx)("label",{htmlFor:"quantity",children:"Cantidad:"}),Object(o.jsx)("div",{className:"form--input-container",children:Object(o.jsx)("input",{id:"quantity",type:"number",value:i,onChange:function(e){d(e.target.value)},placeholder:"1"})})]}),Object(o.jsxs)("div",{className:"form--small-wrapper",children:[Object(o.jsx)("label",{htmlFor:"measure",children:"Medida:"}),Object(o.jsxs)("div",{className:"form--input-container",children:[Object(o.jsx)("input",{list:"measures",id:"measure",onChange:function(e){h(e.target.value)},placeholder:"kgs"}),Object(o.jsxs)("datalist",{id:"measures",children:[Object(o.jsx)("option",{value:"kgs"}),Object(o.jsx)("option",{value:"lbs"}),Object(o.jsx)("option",{value:"unidad(es)"})]})]})]})]}),Object(o.jsxs)("div",{className:"form--container",children:[Object(o.jsx)("label",{htmlFor:"item-name",children:"Item:"}),Object(o.jsx)("div",{className:"form--input-container",children:Object(o.jsx)("textarea",{id:"item-name",value:a,onChange:function(e){n(e.target.value)},placeholder:"Tomate"})})]}),Object(o.jsxs)("div",{className:"form--button-container",children:[Object(o.jsx)("button",{type:"submit",className:"form--button__submit",children:"AGREGAR A LA LISTA"}),Object(o.jsx)("button",{type:"button",onClick:function(){f(!1)},className:"form--button__cancel",children:"Cancelar"})]})]})}function N(){var e=c.a.useContext(u),t=e.error,a=e.loading,n=e.searchedItems,s=e.toggleBuyItem,r=e.deleteItem,i=e.openModal;return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(b,{}),Object(o.jsxs)(h,{children:[t&&Object(o.jsx)("p",{children:"Hubo un error..."}),a&&Object(o.jsx)("p",{children:"Cargando la lista de compras..."}),!a&&!n.length&&Object(o.jsx)("p",{children:"Crea el primer item para comprar"}),n.map((function(e){return Object(o.jsx)(f,{text:e.name,quantity:e.quantity,measure:e.measure,buyed:e.buyed,toggleBuyed:function(){return s(e.name)},onDelete:function(){return r(e.name)}},e.name)}))]}),!!i&&Object(o.jsx)(v,{children:Object(o.jsx)(y,{})}),Object(o.jsx)(p,{})]})}var I=function(){return Object(o.jsx)(d,{children:Object(o.jsx)(N,{})})};r.a.render(Object(o.jsx)(I,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.1ed3b409.chunk.js.map