(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[37],{1078:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t(31),i=t.n(n),r=t(52),c=t(36),l=t(0),o=t.n(l),s=t(317),u=t(216),d=t(332),h=t(381),p=t(68),b=t(209),j=(t(222),t(946)),g=t(617),x=t(21),f=t(625),m=t(1083),O=(t(136),t(6)),v=Object(b.a)((function(e){return{form:{width:"100%"},FormControl:{margin:e.spacing(1),width:"-webkit-fill-available"},container:{width:"-webkit-fill-available",height:768,padding:"40px 16px 213px",backgroundColor:"#ffffff"},Title:{width:"-webkit-fill-available",height:"36",margin:"0 232px 31px 0",fontFamily:"NotoSansCJKtc",fontSize:"24px",fontweight:"500",fontStretch:"normal",fontStyle:"normal",lineheight:"1.5",letterspacing:"0.5px",color:"#232323"},Text:{width:"33",height:"24",margin:"0 0 1px 0",fontSize:"16px",fontWeight:"500",fontStretch:"normal",fontStyle:"normal",lineHeight:"1.5",letterSpacing:"0.5px",color:"#232323"},InputBackground:{width:"-webkit-fill-available",height:"40",margin:"8px 0 31px 0",borderColor:"#232323"},PhoneRegionBackground:{width:"123px",height:"40",margin:"8px 0 31px 0",padding:"8px 0 0"},PhoneNumberBackground:{width:"auto",height:"40",margin:"-12px 0 0px 40px",padding:"8px 0 0"},submit:{width:"-webkit-fill-available",height:"48px",margin:"40px 0px 0px 0px",backgroundColor:"#00d04c",color:"#ffffff"},ModifyTextFieldColor:{fontSize:"14px",color:"#979797",borderColor:"#979797"}}})),k=Object(b.a)((function(e){return{placeholder:{color:"#aaa"}}}));function y(){var e=v(),a=o.a.useState(""),n=Object(c.a)(a,2),b=n[0],y=n[1],w=o.a.useState(""),N=Object(c.a)(w,2),S=N[0],C=N[1],T=o.a.useState(""),B=Object(c.a)(T,2),I=B[0],P=B[1],z=o.a.useState(""),M=Object(c.a)(z,2),V=M[0],W=M[1],E=o.a.useState(""),F=Object(c.a)(E,2),J=F[0],K=F[1],R=Object(l.useState)(),_=Object(c.a)(R,2),A=_[0],D=_[1],H=o.a.useState(""),q=Object(c.a)(H,2),G=q[0],L=q[1],Q=Object(g.a)().handleSubmit,U=Object(x.k)(),X=function(e){var a=e.children,t=k();return Object(O.jsx)("div",{className:t.placeholder,children:a})},Y={name:b,gender:S,phone_number:V,phone_region:I,birth:A,live:G},Z={Authorization:"Bearer "+localStorage.getItem("token")};console.log(Z);var $,ee=t(136),ae=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Y,console.log(a),console.log(Z),e.next=5,ee.post("https://gohiking-server.herokuapp.com/api/profile",a,{headers:Z}).then((function(e){console.log("correct"),$=e.data})).catch((function(e){console.log("error"),$=e.response.data})).finally((function(){console.log($),U.push("/signin")}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:e.container,children:[Object(O.jsx)(p.a,{className:e.Title,children:"\u5efa\u7acb\u500b\u4eba\u8cc7\u6599"}),Object(O.jsxs)("form",{className:e.form,onSubmit:Q(ae),children:[Object(O.jsx)(p.a,{className:e.Text,children:"\u59d3\u540d"}),Object(O.jsx)(h.a,{className:e.InputBackground,placeholder:"\u8acb\u8f38\u5165\u60a8\u7684\u540d\u7a31",fullWidth:!0,onChange:function(e){return y(e.target.value)}}),Object(O.jsx)(p.a,{className:e.Text,children:"\u6027\u5225"}),Object(O.jsxs)(u.a,{className:e.InputBackground,value:S,displayEmpty:!0,renderValue:""!==S?void 0:function(){return Object(O.jsx)(X,{children:"\u8acb\u8f38\u5165\u60a8\u7684\u6027\u5225"})},onChange:function(e){C(e.target.value)},children:[Object(O.jsx)(d.a,{value:1,children:"\u7537"}),Object(O.jsx)(d.a,{value:0,children:"\u5973"})]}),Object(O.jsx)(p.a,{className:e.Text,children:"\u624b\u6a5f"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)(u.a,{className:e.PhoneRegionBackground,value:I,displayEmpty:!0,renderValue:""!==I?void 0:function(){return Object(O.jsx)(X,{children:"\u53f0\u7063+886"})},onChange:function(e){P(e.target.value)},children:[Object(O.jsx)(d.a,{value:886,children:"\u53f0\u7063+886"}),Object(O.jsx)(d.a,{value:852,children:"\u9999\u6e2f+852"})]}),Object(O.jsx)(h.a,{className:e.PhoneNumberBackground,placeholder:"\u8acb\u8f38\u60a8\u7684\u624b\u6a5f\u865f\u78bc",onChange:function(e){return W(e.target.value)},fullWidth:!0})]}),Object(O.jsx)(p.a,{className:e.Text,children:"\u751f\u65e5"}),Object(O.jsx)(f.a,{utils:j.a,children:Object(O.jsx)(m.a,{placeholder:"\u8acb\u9078\u64c7",className:e.InputBackground,disableToolbar:!0,variant:"inline",format:"yyyy/MM/dd",margin:"normal",invalidDateMessage:"",id:"date-picker-inline",value:J,inputValue:A,onChange:function(e,a){K(e),D(a)},KeyboardButtonProps:{"aria-label":"change date"}})}),Object(O.jsx)(p.a,{className:e.Text,children:"\u5c45\u4f4f\u5730"}),Object(O.jsxs)(u.a,{className:e.InputBackground,value:G,displayEmpty:!0,renderValue:""!==G?void 0:function(){return Object(O.jsx)(X,{children:"\u8acb\u9078\u64c7"})},onChange:function(e){L(e.target.value)},children:[Object(O.jsx)(d.a,{value:"Taipei",children:"\u53f0\u5317\u5e02"}),Object(O.jsx)(d.a,{value:"Taichung",children:"\u53f0\u4e2d\u5e02"})]}),Object(O.jsx)(s.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,children:"\u540c\u610f\u4e26\u8a3b\u518a"})]})]})}}}]);
//# sourceMappingURL=37.cad1eef0.chunk.js.map