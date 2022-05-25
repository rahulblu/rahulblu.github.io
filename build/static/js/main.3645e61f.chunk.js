(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",isLoading:"AvailableMeals_isLoading__2XYVO"}},,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(26),n(2)),r=n(1),s=n.n(r),o=n(14),l=n.n(o),u=n.p+"static/media/meals.2971f633.jpg",d=s.a.createContext({items:[],totalAmount:0,addItem:{},addFromCart:{},removeItem:{}}),m=n(0),j=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(8),O=n.n(b),p=function(e){var t=Object(r.useContext)(d),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],s=a[1],o=t.items,l=o.reduce((function(e,t){return e+t.amount}),0),u="".concat(O.a.button," ").concat(c?O.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(m.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(m.jsx)("span",{className:O.a.icon,children:Object(m.jsx)(j,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:O.a.badge,children:l})]})},x=function(e){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsxs)("header",{className:l.a.header,children:[Object(m.jsx)("h1",{children:"Meals"}),Object(m.jsx)(p,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:l.a["main-image"],children:Object(m.jsx)("img",{src:u,alt:"meals"})})]})},f=n(17),h=n(15),_=n.n(h),v=n(16),C=n.n(v),N=n(18),g=n.n(N),A=function(e){return Object(m.jsx)("div",{className:g.a.card,children:e.children})},y=n(3),I=n(19),w=n.n(I),M=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:w.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(y.a)({ref:t},e.input))]})})),H=n(20),k=n.n(H),D=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(i.a)(n,2),c=a[0],s=a[1];return Object(m.jsxs)("form",{className:k.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?s(!1):e.onAddToCart(c)},children:[Object(m.jsx)(M,{ref:t,label:"Amount",input:{id:"amount",max:"5",min:"1",step:"1",type:"number",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!c&&Object(m.jsx)("p",{children:"Please add items to the cart!"})]})},F=n(10),S=n.n(F),T=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(r.useContext)(d);return Object(m.jsxs)("li",{className:S.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:S.a.description,children:e.description}),Object(m.jsx)("div",{className:S.a.price,children:t})]}),Object(m.jsx)("div",{children:Object(m.jsx)(D,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,price:e.price,amount:t}),console.log(e.price)}})})]})},E=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),s=Object(i.a)(c,2),o=s[0],l=s[1],u=function(){var e=Object(f.a)(_.a.mark((function e(){var t,n,c,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-app-40ef8-default-rtdb.firebaseio.com/meals.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(i in n=e.sent,c=[],n)c.push({id:i,name:n[i].name,description:n[i].description,price:n[i].price});a(c),l(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(r.useEffect)((function(){u()}),[]),o)return Object(m.jsx)("section",{className:C.a.isLoading,children:"Loading..."});var d=n.map((function(e){return Object(m.jsx)(T,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(m.jsx)("section",{className:C.a.meals,children:Object(m.jsx)(A,{children:Object(m.jsx)("ul",{children:d})})})},R=n(21),B=n.n(R),L=function(){return Object(m.jsxs)("section",{className:B.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},P=function(){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(L,{}),Object(m.jsx)(E,{})]})},V=n(11),z=n.n(V),U=function(e){return Object(m.jsx)("div",{className:z.a.backdrop,onClick:e.onHideCart})},Y=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("div",{className:z.a.content,children:e.children})})},J=function(e){var t=document.getElementById("overlay");return Object(m.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(m.jsx)(U,{onHideCart:e.onHideCart}),t),c.a.createPortal(Object(m.jsx)(Y,{children:e.children}),t)]})},Q=n(4),X=n.n(Q),q=n(5),Z=n.n(q),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:Z.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:Z.a.summary,children:[Object(m.jsx)("span",{className:Z.a.price,children:t}),Object(m.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:Z.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addFromCart(e)},s=Object(m.jsx)("ul",{className:X.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(m.jsxs)(J,{onHideCart:e.onClose,children:[Object(m.jsx)("div",{children:s}),Object(m.jsxs)("div",{className:X.a.total,children:[Object(m.jsx)("span",{children:"Total Amount "}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:X.a.actions,children:[Object(m.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(m.jsx)("button",{className:X.a.button,children:"Order"})]})]})},W=n(12),G={items:[],totalAmount:0},ee=function(e,t){if("ADDCART"===t.type){var n,a=e.totalAmount+t.item.price,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(y.a)(Object(y.a)({},i),{},{amount:i.amount+1});(n=Object(W.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("ADD"===t.type){var s,o=e.totalAmount+t.item.price*t.item.amount,l=e.items.findIndex((function(e){return e.id===t.item.id})),u=e.items[l];if(u){var d=Object(y.a)(Object(y.a)({},u),{},{amount:u.amount+t.item.amount});(s=Object(W.a)(e.items))[l]=d}else s=e.items.concat(t.item);return{items:s,totalAmount:o}}if("REMOVE"===t.type){var m,j=e.items.findIndex((function(e){return e.id===t.id})),b=e.items[j],O=e.totalAmount-b.price;if(1===b.amount)m=e.items.filter((function(e){return e.id!==t.id}));else{var p=Object(y.a)(Object(y.a)({},b),{},{amount:b.amount-1});(m=Object(W.a)(e.items))[j]=p}return{items:m,totalAmount:O}}return G},te=function(e){var t=Object(r.useReducer)(ee,G),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},addFromCart:function(e){c({type:"ADDCART",item:e})}};return Object(m.jsx)(d.Provider,{value:s,children:e.children})};var ne=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(te,{children:[n&&Object(m.jsx)(K,{onClose:function(){a(!1)}}),Object(m.jsx)(x,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(P,{})})]})};c.a.render(Object(m.jsx)(ne,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.3645e61f.chunk.js.map