(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n(15),a=n.n(o),u=n(6),i=n(3),l=function(e){var t=e.newFilter,n=e.handleFilterChange;return Object(r.jsxs)("div",{children:["filter shown with: ",Object(r.jsx)("input",{value:t,onChange:n})]})},d=function(e){var t=e.addNote,n=e.newName,c=e.newNumber,o=e.handleNameChange,a=e.handleNumberChange;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:n,onChange:o})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:c,onChange:a})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})},s=function(e){var t=e.person,n=e.deleteContact;return Object(r.jsx)("div",{children:Object(r.jsx)("form",{onSubmit:n,id:t.id,children:Object(r.jsxs)("li",{children:[" ",t.name," ",t.number," ",Object(r.jsx)("button",{type:"submit",children:"delete"})]})})})},b=function(e){var t=e.persons,n=e.deleteContact;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)(s,{person:e,deleteContact:n},e.id)}))})})},j=n(4),h=n.n(j),f="/api/persons/",m={getAll:function(){return h.a.get(f).then((function(e){return console.log("data = ",e.data),e.data}))},create:function(e){return h.a.post(f,e).then((function(e){return e.data}))},remove:function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){var t=e.data;return console.log("detele.response - ",t),console.log("delete.response.data - ",t.data),t}))},update:function(e,t){return h.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))}},g=function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},O=function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{style:{color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},v=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];console.log("persons =",n);var a=Object(c.useState)(""),s=Object(i.a)(a,2),j=s[0],h=s[1],f=Object(c.useState)(""),v=Object(i.a)(f,2),p=v[0],x=v[1],w=Object(c.useState)(""),y=Object(i.a)(w,2),C=y[0],S=y[1],N=Object(c.useState)(null),k=Object(i.a)(N,2),T=k[0],A=k[1],F=Object(c.useState)(null),B=Object(i.a)(F,2),E=B[0],R=B[1];Object(c.useEffect)((function(){console.log("dataServices =",m.getAll()),m.getAll().then((function(e){o(e)}))}),[]);var z,D=RegExp(C,"i");z=C?n.filter((function(e){return D.test(e.name)})):n;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(O,{message:E}),Object(r.jsx)(g,{message:T}),Object(r.jsx)(l,{newFilter:C,handleFilterChange:function(e){S(e.target.value)}}),Object(r.jsx)("h3",{children:"add a new"}),Object(r.jsx)(d,{addNote:function(e){e.preventDefault();var t={name:j,number:p},r=n.every((function(e){return e.number!==p})),c=n.every((function(e){return e.name!==j}));if(console.log("numberchange -",r),c)m.create(t).then((function(e){o(n.concat(e)),A("Added ".concat(j)),setTimeout((function(){return A(null)}),3e3)}));else if(r&&!c){if(window.confirm(" ".concat(j," is already added to phonebook, replace the old number with the new one?"))){var a=n.find((function(e){return e.name===j})),i=Object(u.a)(Object(u.a)({},a),{},{number:t.number});m.update(a.id,i).then((function(e){o(n.map((function(t){return t.id===a.id?e:t}))),A(" ".concat(j,"'s number has changed")),setTimeout((function(){return A(null)}),3e3)})).catch((function(e){R("".concat(j," has been deleted from the server")),setTimeout((function(){return R(null)}),3e3),o(n.filter((function(e){return e.id!==a.id})))}))}}else A(" ".concat(j," is already added to phonebook")),setTimeout((function(){return A(null)}),3e3);h(""),x("")},newName:j,newNumber:p,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){x(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(b,{persons:z,deleteContact:function(e){e.preventDefault();var t=Number(e.target.id);console.log("id -= ",e.target);var r=n.find((function(e){return e.id===t}));if(window.confirm("delete ".concat(r.name,"?"))){m.remove(t).catch((function(e){R("".concat(r," has been deleted from the server")),setTimeout((function(){return R(null)}),3e3)}));var c=n.filter((function(e){return e.id!==t}));o(c),A("".concat(r," is deleted succesfully")),setTimeout((function(){return A(null)}),3e3)}}})]})};a.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.89b7d9e4.chunk.js.map