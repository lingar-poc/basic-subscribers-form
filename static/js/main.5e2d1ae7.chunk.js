(this["webpackJsonpbasic-subscribers-form"]=this["webpackJsonpbasic-subscribers-form"]||[]).push([[0],{26:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(8),r=a.n(n),i=(a(26),a(27),a(28),a(10)),l=a(15),o=a(7),u=a(20);var j=a(37),m=a(17),b=a(36),d=a(5);function O(){var e=Object(s.useState)({firstName:"",lastName:"",email:"",tel:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("default"),r=Object(o.a)(n,2),O=r[0],h=r[1],f=Object(s.useState)(!1),x=Object(o.a)(f,2),p=x[0],v=x[1],N=Object(s.useState)(!1),g=Object(o.a)(N,2),S=g[0],C=g[1],y=Object(s.useRef)(!1),I=Object(s.useState)(!1),F=Object(o.a)(I,2),T=F[0],w=F[1],R=function(e,t){var a=Object(s.useState)(!0),c=Object(o.a)(a,2),n=c[0],r=c[1],i=Object(s.useRef)(!0);return Object(s.useEffect)((function(){if(!i.current){var a=setTimeout((function(){var t;r(/\S+@\S+\.\S+/.test(t=e)||""===t)}),t);return function(){clearTimeout(a)}}i.current=!1}),[e,t]),n}(a.email,600);Object(s.useLayoutEffect)((function(){setTimeout((function(){h(""),v(!1)}),2e3)}),[O]);var z=function(e){e.persist(),"email"===e.target.name?y.current=!0:y.current=!1,c((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))}))};return Object(d.jsxs)("div",{className:"subscribers-input",children:[Object(d.jsx)("h3",{children:"Subscribers - Form"}),Object(d.jsxs)(j.a,{className:"needs-validation",noValidate:!0,validated:T,onSubmit:function(e){if(!1===e.currentTarget.checkValidity()||!R)return e.preventDefault(),e.stopPropagation(),void w(!0);e.preventDefault(),alert("Those are the details - you can send it from here to the server !!! :)  \n\nname = "+a.firstName+" "+a.lastName+"\nemail = "+a.email+"\nphone = "+a.tel),w(!1),h("Your details have been successfully saved"),C(!1),c({firstName:"",lastName:"",email:"",tel:""}),v(!0)},children:[Object(d.jsx)(j.a.Row,{className:"",children:Object(d.jsx)(m.a,{xs:12,className:"",children:Object(d.jsx)(j.a.Group,{controlId:"firstName",className:"",children:Object(d.jsx)(j.a.Control,{type:"text",placeholder:"First name",value:a.firstName,onChange:z,name:"firstName",required:!0,size:"sm","aria-label":"first name"})})})}),Object(d.jsx)(j.a.Row,{className:"",children:Object(d.jsx)(m.a,{xs:12,className:"",children:Object(d.jsx)(j.a.Group,{controlId:"lastName",className:"",children:Object(d.jsx)(j.a.Control,{type:"text",placeholder:"Last name",value:a.lastName,onChange:z,name:"lastName",required:!0,size:"sm","aria-label":"last name"})})})}),Object(d.jsx)(j.a.Row,{className:"",children:Object(d.jsx)(m.a,{xs:12,className:"",children:Object(d.jsxs)(j.a.Group,{controlId:"email",className:"",children:[Object(d.jsx)(j.a.Control,{type:"email",placeholder:"Email",value:a.email,onChange:z,name:"email",required:!0,size:"sm","aria-label":"email",isInvalid:!R}),Object(d.jsx)(j.a.Control.Feedback,{type:"invalid",children:"Email is Invalid"})]})})}),Object(d.jsx)(j.a.Row,{className:"",children:Object(d.jsx)(m.a,{xs:12,className:"",children:Object(d.jsx)(j.a.Group,{controlId:"tel",className:"",children:Object(d.jsx)(j.a.Control,{type:"tel",placeholder:"Phone",value:a.tel,onChange:z,name:"tel",required:!0,size:"sm","aria-label":"phone"})})})}),p&&Object(d.jsx)(b.a,{variant:S?"danger":"success",children:O}),Object(d.jsx)(u.a,{type:"submit",size:"sm",children:"Save"})]})]})}var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(O,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.5e2d1ae7.chunk.js.map