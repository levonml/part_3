(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),o=t(15),a=t.n(o),u=t(6),i=t(3),l=function(e){var n=e.newFilter,t=e.handleFilterChange;return Object(r.jsxs)("div",{children:["filter shown with: ",Object(r.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.addNote,t=e.newName,c=e.newNumber,o=e.handleNameChange,a=e.handleNumberChange;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:o})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:c,onChange:a})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})},s=function(e){var n=e.person,t=e.deleteContact;return Object(r.jsx)("div",{children:Object(r.jsx)("form",{onSubmit:t,id:n.id,children:Object(r.jsxs)("li",{children:[" ",n.name," ",n.number," ",Object(r.jsx)("button",{type:"submit",children:"delete"})]})})})},b=function(e){var n=e.persons,t=e.deleteContact;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)(s,{person:e,deleteContact:t},e.id)}))})})},j=t(4),h=t.n(j),f="/api/persons",m={getAll:function(){return h.a.get(f).then((function(e){return console.log("data = ",e.data),e.data}))},create:function(e){return h.a.post(f,e).then((function(e){return e.data})).catch((function(e){return console.log("error in axios = ",e),e.message}))},remove:function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){var n=e.data;return console.log("detele.response - ",n),console.log("delete.response.data - ",n.data),n}))},update:function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))}},g=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n})},O=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{style:{color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n})},v=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1];console.log("persons =",t);var a=Object(c.useState)(""),s=Object(i.a)(a,2),j=s[0],h=s[1],f=Object(c.useState)(""),v=Object(i.a)(f,2),p=v[0],x=v[1],w=Object(c.useState)(""),y=Object(i.a)(w,2),C=y[0],S=y[1],N=Object(c.useState)(null),k=Object(i.a)(N,2),T=k[0],A=k[1],F=Object(c.useState)(null),B=Object(i.a)(F,2),E=B[0],R=B[1];Object(c.useEffect)((function(){console.log("dataServices =",m.getAll()),m.getAll().then((function(e){o(e)}))}),[]);var z,D=RegExp(C,"i");z=C?t.filter((function(e){return D.test(e.name)})):t;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(O,{message:E}),Object(r.jsx)(g,{message:T}),Object(r.jsx)(l,{newFilter:C,handleFilterChange:function(e){S(e.target.value)}}),Object(r.jsx)("h3",{children:"add a new"}),Object(r.jsx)(d,{addNote:function(e){e.preventDefault();var n={name:j,number:p},r=t.every((function(e){return e.number!==p})),c=t.every((function(e){return e.name!==j}));if(console.log("numberchange -",r),c)m.create(n).then((function(e){o(t.concat(e)),A("Added ".concat(j)),setTimeout((function(){return A(null)}),3e3)}));else if(r&&!c){if(window.confirm(" ".concat(j," is already added to phonebook, replace the old number with the new one?"))){var a=t.find((function(e){return e.name===j})),i=Object(u.a)(Object(u.a)({},a),{},{number:n.number});m.update(a.id,i).then((function(e){o(t.map((function(n){return n.id===a.id?e:n}))),A(" ".concat(j,"'s number has changed")),setTimeout((function(){return A(null)}),3e3)})).catch((function(e){R("".concat(j," has been deleted from the server")),setTimeout((function(){return R(null)}),3e3),o(t.filter((function(e){return e.id!==a.id})))}))}}else A(" ".concat(j," is already added to phonebook")),setTimeout((function(){return A(null)}),3e3);h(""),x("")},newName:j,newNumber:p,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){x(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(b,{persons:z,deleteContact:function(e){e.preventDefault();var n=e.target.id,r=t.find((function(e){return e.id===n})).name;if(window.confirm("delete ".concat(r,"?"))){m.remove(n).catch((function(e){R("".concat(r," has been deleted from the server")),setTimeout((function(){return R(null)}),3e3)}));var c=t.filter((function(e){return e.id!==n}));o(c),A("".concat(r," is deleted succesfully")),setTimeout((function(){return A(null)}),3e3)}}})]})};a.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.4b4561a9.chunk.js.map