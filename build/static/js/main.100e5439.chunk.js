(this["webpackJsonpeccomerce-site1"]=this["webpackJsonpeccomerce-site1"]||[]).push([[0],{1114:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(10),l=a.n(n),m=(a(43),a(19)),o=a.n(m),i=a(35),s=a(8),u=(a(45),a(12)),d=r.a.createContext(),_=function(){var e=Object(c.useContext)(d);return r.a.createElement("div",{className:"navbar__wrapper"},r.a.createElement("div",{className:"navbar__container"},r.a.createElement("div",{className:"navbar__header"},r.a.createElement("h2",null,"BuyOnline")),r.a.createElement("div",{className:"navbar__searchbox"},r.a.createElement("input",{type:"text",value:e.query,onChange:function(t){return e.setQuery(t.target.value)},placeholder:"Search.."}),r.a.createElement(u.a,{className:"search__data",onClick:e.fetchData})),r.a.createElement("div",{className:"navbar__body"},r.a.createElement("div",{className:"navbar__addtoCart",onClick:function(){return e.setCart(!0),e.setViewProduct(!1),void e.setProduct({})}},r.a.createElement(u.c,null),r.a.createElement("p",null,"Cart"),e.cartItem.length>0?r.a.createElement("div",{className:"cartItem__marker"},r.a.createElement("span",null,e.cartItem.length)):r.a.createElement("div",null)))))},p=a(13),v=a(1),E=a(17),b=a(7),h=(a(24),function(){var e=Object(c.useContext)(d);return e.viewProduct?r.a.createElement(v.a,{to:"/productDetails"}):e.cart?r.a.createElement(v.a,{to:"/CartItems"}):r.a.createElement("div",{className:"items__container"},r.a.createElement(b.a,null),e.productItem.map((function(t){return r.a.createElement("div",{className:"individual__item__wrapper",key:t.id},r.a.createElement("div",{className:"individual__item__img"},r.a.createElement("img",{src:t.img,alt:t.category})),r.a.createElement("div",{className:"individual__item__content"},r.a.createElement("h3",{className:"individual__item__name"},t.productName),r.a.createElement("div",{className:"individual__item__price"},"$",t.productPrice)),r.a.createElement("div",{className:"item__addtoCart",onClick:function(){return function(t){return e.checkCart(t)?e.setCartItem([].concat(Object(E.a)(e.cartItem),[t])):Object(b.b)("Already Added in the cart \ud83d\uded2\ud83d\uded2!",{type:"warning",position:"top-right",autoClose:2e3})}(t)}},e.checkCart(t)?" Add to Cart":"Added to Cart",r.a.createElement(u.b,null)))})))}),N=a(37),I=a.n(N),f=a(22),C=function(){var e=Object(c.useContext)(d);return e.pay?e.paid?r.a.createElement("div",{className:"paid__wrapper"},r.a.createElement(b.a,null),r.a.createElement("div",{className:"paid__heading"},r.a.createElement("h3",null,"Paid Successfully")),r.a.createElement("div",{className:"paid__getBack"},r.a.createElement("button",{onClick:function(){return e.setPay(!1),e.setPaid(!1),e.cartItem.map((function(e){return e.noItem=1})),e.setCartItem([]),e.setTotal(0),e.setQuery(""),void e.setCart(!1)},className:"button__paid__goBack"},"\u25c0Get Back"))):r.a.createElement("div",{className:"checkout__container"},r.a.createElement(b.a,null),r.a.createElement("div",{className:"checkout__wrapper"},r.a.createElement("div",{className:"checkout__heading"},"Your Final Cart \ud83d\uded2"),r.a.createElement("div",{className:"checkount__body__container"},e.cartItem.map((function(e){return r.a.createElement("div",{className:"checkout__body",key:e.id},r.a.createElement("div",{className:"checkout__itemName"},r.a.createElement("h6",null,e.productName)),r.a.createElement("div",{className:"checkout__noItems"},r.a.createElement("h6",null,e.productPrice," x ",e.noItem,"=","$"+Number(e.productPrice)*Number(e.noItem))))}))),r.a.createElement("div",{className:"checkout__totalAmount"},r.a.createElement("h6",null,"Total Amount : $",e.total)),r.a.createElement("div",{className:"checkout__payNow"},r.a.createElement("button",{className:"button_checkout__goBack",onClick:function(){return e.setPay(!1)}},r.a.createElement("h6",null,"\u25c0Go-Back")),r.a.createElement("button",{onClick:function(){return Object(b.b)("Successfully Paid\ud83d\ude80",{type:"success"}),Object(b.b)("Purchased Successfully...\ud83c\udf89",{type:"success"}),void e.setPaid(!0)},className:"button_checkout__payNow"},r.a.createElement("h6",null,"Pay Now"))))):r.a.createElement(v.a,{to:"/CartItems"})},g=function(){var e=Object(c.useContext)(d);return Object(c.useEffect)((function(){e.changeTotal()}),[]),e.pay?r.a.createElement(v.a,{to:"/CheckOut"}):e.cart?r.a.createElement("div",{className:"cartItem__container"},r.a.createElement("div",{className:"cartItem__container__navbar"},r.a.createElement("div",{className:"cartItem__heading__warpper"},r.a.createElement("div",{className:"cartItem__heading"},r.a.createElement("h1",{className:"cartItem__title"},"Your Cart"),r.a.createElement("div",{className:"cartItem__backHome"},r.a.createElement("button",{onClick:function(){return e.setCart(!1)}},"Back to Home")))),r.a.createElement("div",{className:"cartItem__totol__wrapper"},e.cartItem.length>0?r.a.createElement("div",{className:"cartItem__total"},r.a.createElement("h2",null,"Total= "),r.a.createElement("div",{className:"cartItem__totalAmount"},r.a.createElement("h2",null,"$",e.total)),r.a.createElement("div",{className:"cartItem__buyButton"},r.a.createElement("button",{onClick:function(){return e.setPay(!0)},className:"button cartItem__butButton"},"Check Out \ud83d\uded2"))):"")),e.cartItem.length>0?r.a.createElement("div",{className:"cartItem__wrapper"},e.cartItem.map((function(t){return r.a.createElement("div",{className:"cartItem__body",key:t.id},r.a.createElement("div",{className:"cartItem__img"},r.a.createElement("img",{src:t.img,alt:t.category})),r.a.createElement("div",{className:"cartItem__details"},r.a.createElement("div",{className:"cartItem__name"},r.a.createElement("h5",null,t.productName)),r.a.createElement("div",{className:"cartItem__price"},"$",t.productPrice),r.a.createElement("div",{className:"cartItem__noItems"},r.a.createElement("h4",null,"No. Items"),r.a.createElement("div",{className:"cartItem__noItem__text"},r.a.createElement("input",{type:"number",min:"1",placeholder:"1",step:"1",value:t.noItem,onChange:function(a){return e.changeNoItem(t,a)}}))),r.a.createElement("div",{className:"cartItem__remove"},r.a.createElement("button",{className:"cartItem__remove__button",onClick:function(){return e.removeCartItem(t)}},"Remove from Cart"))))}))):r.a.createElement("div",{className:"cartItem__empty"},"Your Cart is Empty..\ud83d\uded2\ud83d\uded2\ud83d\uded2")):r.a.createElement(v.a,{to:"/viewItems"})},k=function(){var e=Object(c.useContext)(d);return e.viewProduct?e.cart?r.a.createElement(v.a,{to:"/CartItems"}):r.a.createElement("div",{className:"productDetails__wrapper"},r.a.createElement(b.a,null),r.a.createElement("div",{className:"productDetails__backbutton"},r.a.createElement("button",{onClick:function(){return e.setProduct({}),void e.setViewProduct(!1)},className:"button__productDetails__backbutton"},"\u25c0Go Back")),r.a.createElement("div",{className:"productDetails__container"},r.a.createElement("div",{className:"productDetails__img"},r.a.createElement("img",{src:e.product.img,alt:e.product.productName})),r.a.createElement("div",{className:"productDetails__description"},r.a.createElement("div",{className:"productDetails__heading"},r.a.createElement("h4",null,e.product.productName)),r.a.createElement("div",{className:"productDetails__price"},r.a.createElement("p",null,e.product.productPrice)),r.a.createElement("div",{className:"productDetails__overview"},r.a.createElement("p",null," ","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."," ")),r.a.createElement("div",{className:"productDetails__addtoCart",onClick:function(){return t=e,e.checkCart(t)?e.setCartItem([].concat(Object(E.a)(e.cartItem),[t])):Object(b.b)("Already Added in the cart \ud83d\uded2\ud83d\uded2!",{type:"warning",position:"top-right",autoClose:2e3});var t}},e.checkCart(e)?" Add to Cart":"Added to Cart",r.a.createElement(u.b,null))))):r.a.createElement(v.a,{to:"/viewItems"})};var y=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)({}),m=Object(s.a)(l,2),u=m[0],E=m[1],b=Object(c.useState)(!1),N=Object(s.a)(b,2),y=N[0],w=N[1],O=Object(c.useState)(!1),j=Object(s.a)(O,2),P=j[0],x=j[1],D=Object(c.useState)(""),S=Object(s.a)(D,2),A=S[0],B=S[1],q=Object(c.useState)([]),T=Object(s.a)(q,2),$=T[0],G=T[1],Q=Object(c.useState)([]),V=Object(s.a)(Q,2),Y=V[0],H=V[1],J=Object(c.useState)(0),W=Object(s.a)(J,2),z=W[0],F=W[1],L=Object(c.useState)(!1),M=Object(s.a)(L,2),R=M[0],U=M[1],K=function(){var e=0;console.log(Y),Y.map((function(t){return e+=Number(t.noItem)*Number(t.productPrice)})),F(e)},X=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,c,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=A,0===A.length&&(t="random"),e.next=5,I.a.get("https://api.pexels.com/v1/search?query="+t,{headers:{Authorization:"563492ad6f91700001000001d00c9e12894e4b339200b67dea5bbb58"}});case 5:a=e.sent,c=a.data,r=c.photos,n=r.map((function(e){var t,a;return{img:null===(t=e.src)||void 0===t?void 0:t.tiny,small:null===(a=e.src)||void 0===a?void 0:a.small,id:e.id,owner:e.photographer,category:A,productPrice:f.commerce.price(),productName:f.random.word(),noItem:1}})),G(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){X()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(d.Provider,{value:{query:A,setQuery:B,cartItem:Y,setCartItem:H,productItem:$,setProductItem:G,cart:P,setCart:x,removeCartItem:function(e){e.noItem=0,K(),e.noItem=1;var t=Y.filter((function(t){return t.id!==e.id}));H(t)},checkCart:function(e){return 0===Y.filter((function(t){return t.id===e.id})).length},changeNoItem:function(e,t){e.noItem=t.target.value,K()},total:z,setTotal:F,changeTotal:K,fetchData:X,pay:y,setPay:w,paid:R,setPaid:U,product:u,setProduct:E,viewProduct:a,setViewProduct:n}},r.a.createElement(_,null),r.a.createElement(v.a,{to:"/viewItems"}),r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/viewItems",component:h}),r.a.createElement(v.b,{exact:!0,path:"/CartItems",component:g}),r.a.createElement(v.b,{exact:!0,path:"/CheckOut",component:C}),r.a.createElement(v.b,{exact:!0,path:"/productDetails",component:k})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,a){e.exports=a(1114)},43:function(e,t,a){},45:function(e,t,a){}},[[38,1,2]]]);
//# sourceMappingURL=main.100e5439.chunk.js.map