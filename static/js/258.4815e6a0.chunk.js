"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[258],{7258:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(885),r=n(2791),s=n(9354),c="Form_Form__xzXav",i="Form_Input__Ln-gV",o="Form_FormBtn__LoHzR",l=n(184);var u=function(){var e=(0,s.Ol)(),t=(0,a.Z)(e,1)[0],n=(0,s.Jx)().data,u=(0,r.useState)(""),m=(0,a.Z)(u,2),d=m[0],_=m[1],h=(0,r.useState)(""),x=(0,a.Z)(h,2),p=x[0],C=x[1],f=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":_(a);break;case"number":C(a);break;default:return}};return(0,l.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault(),function(e){return n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(d)?alert("Sory Bro the name ( ".concat(d," ) is already in contacts.")):(t({name:d,number:p}),console.log(p),_(""),C(""))},children:[(0,l.jsx)("label",{children:(0,l.jsx)("input",{className:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:d,onChange:f})}),(0,l.jsx)("label",{children:(0,l.jsx)("input",{className:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:f})}),(0,l.jsx)("button",{className:o,type:"submit",children:"Add Contact"})]})},m=n(5048),d=function(e){return e.filter.value},_=n(3463),h="Filter_FilterTitle__Ru2Vc",x="Filter_InputFilter__pobpL",p=function(){var e=(0,m.v9)(d),t=(0,m.I0)();return(0,l.jsxs)("label",{children:[(0,l.jsx)("p",{className:h,children:"Find contacts bu name"}),(0,l.jsx)("input",{className:x,name:"filter",type:"text",value:e,onChange:function(e){return t((0,_.xO)(e.target.value))}})]})},C="ContactList_List__gG+lN",f="ContactList_ContactContainer__iVHKM",j="ContactList_ContactItem__XiC+M",b="ContactList_ContactBtn__H8RHy",v="ContactList_ContactText__tFhUS",N=n(6373),F="Loader_Loader__wqo9C",L=function(){return(0,l.jsx)("div",{className:F,children:(0,l.jsx)(N.gy,{color:"#00BFFF",height:140,width:140})})},g=function(){var e=(0,s.Jx)(),t=e.data,n=e.isFetching,r=(0,s.zr)(),c=(0,a.Z)(r,1)[0],i=(0,m.v9)(d).toLowerCase(),o=t&&t.filter((function(e){return e.name.toLowerCase().includes(i)}));return(0,l.jsxs)("ul",{className:C,children:[n&&(0,l.jsx)(L,{}),t&&o.map((function(e){var t=e.name,n=e.number,a=e.id;return(0,l.jsxs)("div",{className:f,children:[(0,l.jsxs)("li",{className:j,children:[(0,l.jsx)("p",{className:v,children:t}),(0,l.jsx)("p",{className:v,children:n})]},a),(0,l.jsx)("button",{className:b,onClick:function(){return c(a)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},a)}))]})},w="Contacts_MainContainer__qrMM3",k="Contacts_Title__dAILr",y=function(){return(0,l.jsxs)("main",{className:w,children:[(0,l.jsx)("h1",{className:k,children:"Phonebook"}),(0,l.jsx)(u,{}),(0,l.jsx)("h2",{className:k,children:"Contacts"}),(0,l.jsx)(p,{}),(0,l.jsx)(g,{})]})}}}]);
//# sourceMappingURL=258.4815e6a0.chunk.js.map