(this.webpackJsonpgohiking0330=this.webpackJsonpgohiking0330||[]).push([[38],{1079:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var o=n(31),a=n.n(o),r=n(52),i=n(36),c=n(0),l=n.n(c),s=n(317),p=n(69),f=n(209),h=(n(222),n(318)),x=n(319),g=n(320),d=n(321),m=n(322),u=n(381),b=n(617),j=(n(136),n(21)),S=n(6),O=Object(f.a)((function(t){return{form:{width:"100%"},submit:{width:"-webkit-fill-available",height:"48px",margin:"56px 0 0",backgroundColor:"#00d04c",color:"#ffffff",borderRadius:4},container:{width:"-webkit-fill-available",height:"768px",padding:"125px 16px 213px",backgroundColor:"#ffffff"},InputBackground:{width:"-webkit-fill-available",height:"40px",margin:"1px 0 0",padding:"9px 0 0",borderColor:"#232323"},Title:{width:"98px",height:"36px",margin:"0 281px 31px 0",fontFamily:"NotoSansCJKtc",fontSize:"24px",fontweight:500,lineheight:1.5,letterspacing:"0.5px",color:"#232323"},Text:{width:"66px",height:"24px",margin:"0 313px 1px 0",fontSize:"16px",fontWeight:"500",fontStretch:"normal",fontStyle:"normal",lineHeight:"1.5",letterSpacing:"0.5px",color:"#232323"},Hint:{width:"180px",height:"21px",margin:"16px 211px 55px 0",fontFamily:"NotoSansCJKtc",fontSize:"14px",fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:"1.5",letterSpacing:"0.5px",color:"#979797"},ModifyTextFieldColor:{fontSize:"14px",color:"#979797",borderColor:"#979797"},DailogTitle:{fontFamily:"NotoSansCJKtc",fontSize:"20px",fontWeight:500,borderColor:"#232323"},DailogContent:{fontFamily:"NotoSansCJKtc",fontSize:"16px",borderColor:"#979797"},DailogCheck:{fontFamily:"NotoSansCJKtc",fontSize:"14px",fontWeight:500,borderColor:"#007aff"},ErrorInfo:{width:"100%",height:"21px",margin:"16px 263px 56px 0",fontFamily:"NotoSansCJKtc",fontSize:"14px",fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:"1.5",letterSpacing:"0.5px",color:"#ff3b30"}}}));function w(){var t=O(),e=l.a.useState(!1),o=Object(i.a)(e,2),f=o[0],w=o[1],C=l.a.useState("xs"),k=Object(i.a)(C,1)[0],N=Object(b.a)(),v=N.register,y=N.handleSubmit,z=N.errors,J=N.watch,T=Object(c.useRef)({});T.current=J("password","");var F,I=l.a.useState(""),D=Object(i.a)(I,2),K=(D[0],D[1]),W=(Object(j.k)(),n(136));var B=function(){w(!1)},H=localStorage.getItem("token");console.log(H.substring(10,H.length-2));var R={Authorization:"Bearer "+H.substring(10,H.length-2)};console.log(R);var E=function(){var t=Object(r.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,W.post("https://gohiking-server.herokuapp.com/api/password/change",e,{headers:R}).then((function(t){console.log("correct"),F=t.data,w(!0)})).catch((function(t){console.log("error"),F=t.response.data})).finally((function(){console.log(F)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:t.container,children:[Object(S.jsx)(p.a,{className:t.Title,textalign:"left",children:"\u91cd\u8a2d\u5bc6\u78bc"}),Object(S.jsxs)("form",{className:t.form,onSubmit:y(E),children:[Object(S.jsx)(p.a,{className:t.Text,textalign:"left",children:"\u5bc6\u78bc"}),Object(S.jsx)(u.a,{inputRef:v({required:!0,minLength:8}),className:t.InputBackground,id:"password",label:"\u8acb\u8f38\u5165\u65b0\u7684\u5bc6\u78bc",name:"password",type:"password"}),Object(S.jsx)(p.a,{className:t.ErrorInfo,children:z.password&&"\u5bc6\u78bc\u5fc5\u9808\u5305\u542b8\u500b\u5b57\u5143\u4ee5\u4e0a"}),Object(S.jsx)(p.a,{className:t.Text,textalign:"left",children:"\u78ba\u8a8d\u5bc6\u78bc"}),Object(S.jsx)(u.a,{onChange:function(t){return K(t.target.value)},className:t.InputBackground,id:"confirm",label:"\u8acb\u91cd\u65b0\u8f38\u5165\u5bc6\u78bc ",name:"confirm",type:"password",inputRef:v({validate:function(t){return t===T.current||"\u5bc6\u78bc\u4e0d\u4e00\u81f4\uff01"}})}),Object(S.jsx)(p.a,{className:t.ErrorInfo,children:z.confirm&&Object(S.jsx)("p",{children:z.confirm.message})}),Object(S.jsx)(s.a,{type:"submit",variant:"contained",className:t.submit,children:"\u7e7c\u7e8c"}),Object(S.jsxs)(h.a,{maxWidth:k,open:f,onClose:B,children:[Object(S.jsx)(m.a,{children:Object(S.jsx)(p.a,{component:"span",className:t.DailogTitle,children:"\u5bc6\u78bc\u66f4\u65b0\u6210\u529f"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)(d.a,{children:Object(S.jsx)(p.a,{component:"span",className:t.DailogContent,children:"\u8acb\u91cd\u65b0\u4ee5\u65b0\u7684\u5bc6\u78bc\u767b\u5165\u4f7f\u7528\u3002"})})}),Object(S.jsx)(x.a,{children:Object(S.jsx)(s.a,{onClick:B,color:"primary",children:Object(S.jsx)(p.a,{component:"span",className:t.DailogCheck,children:"\u5b8c\u6210"})})})]})]})]})}}}]);
//# sourceMappingURL=38.10b19087.chunk.js.map