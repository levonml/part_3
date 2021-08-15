(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(17),u=n.n(a),i=n(8),o=n(3),s=function(e){var t=e.newFilter,n=e.handleFilterChange;return Object(r.jsxs)("div",{children:["filter shown with: ",Object(r.jsx)("input",{value:t,onChange:n})]})},l=function(e){var t=e.addNote,n=e.newName,c=e.newNumber,a=e.handleNameChange,u=e.handleNumberChange;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:n,onChange:a})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:c,onChange:u})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})},d=function(e){var t=e.person,n=e.deleteContact;return Object(r.jsx)("div",{children:Object(r.jsx)("form",{onSubmit:n,id:t.id,children:Object(r.jsxs)("li",{children:[" ",t.name," ",t.number," ",Object(r.jsx)("button",{type:"submit",children:"delete"})]})})})},b=function(e){var t=e.persons,n=e.deleteContact;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)(d,{person:e,deleteContact:n},e.id)}))})})},f=n(4),j=n.n(f),h=n(7),m=n(5),p=n.n(m),v="/api/persons",O={getAll:function(){var e=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.a.get(v),e.prev=1,e.next=4,t;case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(h.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.a.post(v,t),e.prev=1,e.next=4,n;case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(e){return p.a.delete("".concat(v,"/").concat(e)).then((function(e){return e.data})).catch((function(e){return e.message}))},update:function(e,t){return p.a.put("".concat(v,"/").concat(e),t).then((function(e){return e.data})).catch((function(e){return e.message}))}},g=function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},x=function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{style:{color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},w=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),f=d[0],j=d[1],h=Object(c.useState)(""),m=Object(o.a)(h,2),p=m[0],v=m[1],w=Object(c.useState)(""),y=Object(o.a)(w,2),C=y[0],S=y[1],k=Object(c.useState)(null),N=Object(o.a)(k,2),T=N[0],A=N[1],E=Object(c.useState)(null),F=Object(o.a)(E,2),B=F[0],R=F[1];Object(c.useEffect)((function(){console.log("dataServices =",O.getAll()),O.getAll().then((function(e){a(e)}))}),[]);var z,D=RegExp(C,"i");z=C?n.filter((function(e){return D.test(e.name)})):n;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(x,{message:B}),Object(r.jsx)(g,{message:T}),Object(r.jsx)(s,{newFilter:C,handleFilterChange:function(e){S(e.target.value)}}),Object(r.jsx)("h3",{children:"add a new"}),Object(r.jsx)(l,{addNote:function(e){e.preventDefault();var t={name:f,number:p},r=n.every((function(e){return e.number!==p})),c=n.every((function(e){return e.name!==f}));if(c)O.create(t).then((function(e){a(n.concat(e)),A("Added ".concat(f)),setTimeout((function(){return A(null)}),3e3)})).catch((function(e){R("Error ".concat(e)),setTimeout((function(){return R(null)}),3e3)}));else if(r&&!c){if(window.confirm(" ".concat(f," is already added to phonebook, replace the old number with the new one?"))){var u=n.find((function(e){return e.name===f})),o=Object(i.a)(Object(i.a)({},u),{},{number:t.number});O.update(u.id,o).then((function(e){a(n.map((function(t){return t.id===u.id?e:t}))),A(" ".concat(f,"'s number has changed")),setTimeout((function(){return A(null)}),3e3)})).catch((function(e){R("".concat(f," has been deleted from the server")),setTimeout((function(){return R(null)}),3e3),a(n.filter((function(e){return e.id!==u.id})))}))}}else A(" ".concat(f," is already added to phonebook")),setTimeout((function(){return A(null)}),3e3);j(""),v("")},newName:f,newNumber:p,handleNameChange:function(e){j(e.target.value)},handleNumberChange:function(e){v(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(b,{persons:z,deleteContact:function(e){e.preventDefault();var t=e.target.id;if(t){var r=n.find((function(e){return e.id===t})).name;if(window.confirm("delete ".concat(r,"?"))){O.remove(t).catch((function(e){R("".concat(r," has been deleted from the server")),setTimeout((function(){return R(null)}),3e3)}));var c=n.filter((function(e){return e.id!==t}));a(c),A("".concat(r," is deleted succesfully")),setTimeout((function(){return A(null)}),3e3)}}}})]})};u.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d94d47d9.chunk.js.map