(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[16],{1070:function(e,t,a){"use strict";a.r(t);var n=a(225),r=a(31),i=a.n(r),l=a(24),o=a(52),u=a(36),c=a(584),s=a(931),d=a.n(s),f=a(408),p=a.n(f),h=a(331),m=a(382),v=a(406),g=a.n(v),b=a(83),y=a(665),j=a.n(y),O=a(0),x=a(932),w=a.n(x),M=a(68),_=a(580),C=a(176),E=a(47),P=a(666),k=a(928),D=a.n(k),S=a(6);t.default=function(){var e,t=Object(E.a)(),a=Object(P.useQuestions)().openDialog,r=Object(C.useAuth)(),s=r.auth,f=r.updateAuth,v=r.setAuth,y=s||{},x=y.photoURL,k=void 0===x?"":x,A=y.displayName,z=void 0===A?"":A,T=y.email,I=void 0===T?"":T,L=Object(O.useState)(z),R=Object(u.a)(L,2),U=R[0],H=R[1],F=Object(O.useState)(k),N=Object(u.a)(F,2),Q=N[0],W=N[1],V=Object(O.useState)(!1),B=Object(u.a)(V,2),J=B[0],q=B[1],G=U!==z||Q!==k,Z=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(Object(l.a)(Object(l.a)({},s),{},{displayName:U,photoURL:Q}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v({isAuthenticated:!1}),t();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(g.a,{pageTitle:t.formatMessage({id:"my_account",defaultMessage:"My Account"}),children:Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[Object(S.jsxs)(b.a,{elevation:3,style:{position:"relative",borderRadius:18,display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"center"},children:[Object(S.jsx)(h.a,{size:"medium",style:{position:"absolute",bottom:40,right:-16},onClick:function(){a({title:t.formatMessage({id:"delete_account_dialog_title",defaultMessage:"Delete Account?"}),message:t.formatMessage({id:"delete_account_dialog_message",defaultMessage:"This Account and all related data to it will be deleted permanently. Do you want to proceed with the deletion?"}),action:t.formatMessage({id:"delete_account_dialog_action",defaultMessage:"DELETE ACCOUNT"}),handleAction:K})},color:"secondary","aria-label":"delete",children:Object(S.jsx)(p.a,{})}),Object(S.jsx)(h.a,{onClick:function(){return q(!0)},style:{position:"absolute",zIndex:99,top:50,marginRight:-60},color:"primary","aria-label":"save",size:"small",children:Object(S.jsx)(d.a,{})}),Q&&Object(S.jsx)(c.a,{style:{width:120,height:120,marginTop:-40},alt:"User Picture",src:Q}),!Q&&Object(S.jsx)(c.a,{style:{width:120,height:120,marginTop:-40},alt:"User Picture",children:U?U[0].toUpperCase():Object(S.jsx)(j.a,{})}),Object(S.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:18,marginBottom:18},children:[Object(S.jsx)(m.a,{value:U,onChange:function(e){return H(e.target.value)},inputProps:{"aria-label":"naked",style:{fontSize:26,fontWeight:"bold",textAlign:"center"}}}),Object(S.jsx)(M.a,{variant:"h6",children:I})]}),Object(S.jsx)(_.a,{in:G,children:Object(S.jsx)(h.a,{onClick:Z,style:{marginBottom:-20},color:"primary","aria-label":"save",children:Object(S.jsx)(w.a,{})})})]}),Object(S.jsx)(D.a,(e={isOpen:J},Object(n.a)(e,"isOpen",J),Object(n.a)(e,"handleClose",(function(){return q(!1)})),Object(n.a)(e,"handleCropSubmit",(function(e){W(e)})),e))]})})}},665:function(e,t,a){"use strict";var n=a(58),r=a(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),l=(0,n(a(60)).default)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=l},666:function(e,t,a){"use strict";t.__esModule=!0,t.useQuestions=function(){return(0,n.useContext)(r.default)},t.default=t.withQuestions=void 0;var n=a(0),r=o(a(387)),i=o(a(667));t.withQuestions=i.default;var l=o(a(401));function o(e){return e&&e.__esModule?e:{default:e}}t.default=l.default},667:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=i(a(387)),r=i(a(0));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return function(t){return r.default.createElement(n.default.Consumer,null,(function(a){return r.default.createElement(e,l({},a,t))}))}};t.default=o,e.exports=t.default},928:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){var t=e.isOpen,a=void 0!==t&&t,h=e.handleClose,j=e.handleCropSubmit,O=e.path,x=e.cropperProps,C=(0,g.useIntl)(),E=(0,b.useTheme)(),P=(0,p.useState)(!1),k=P[0],D=P[1],S=(0,p.useState)(!1),A=S[0],z=S[1],T=(0,v.default)(E.breakpoints.down("sm")),I=(0,p.useState)(!1),L=I[0],R=I[1],U=(0,p.useState)({x:0,y:0}),H=U[0],F=U[1],N=(0,p.useState)(1),Q=N[0],W=N[1],V=(0,p.useState)(null),B=V[0],J=V[1],q=(0,y.useAuth)(),G=q.auth,Z=(q.updateAuth,G||{}),K=Z.photoURL,X=void 0===K?"":K,Y=(Z.displayName,(0,p.useState)(X)),$=(Y[0],Y[1],(0,p.useCallback)((function(e,t){J(t)}),[])),ee=function(){R(!1),z(!1),J(null),D(!1)};(0,p.useEffect)((function(){return ee(),ee}),[O]);var te=(0,p.useCallback)(w(n.default.mark((function e(){var t;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.default)(A,B,0);case 3:t=e.sent,R(t),j&&(h(),j(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[B]);return p.default.createElement(c.default,{fullScreen:T,open:a,onClose:h,TransitionComponent:_,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},p.default.createElement(f.default,null,p.default.createElement("div",{style:{width:"100%",height:"100%",minWidth:350,padding:0,display:"flex",justifyContent:"center",alignItems:"center"}},!A&&p.default.createElement("div",{onDrop:function(e){e.preventDefault();var t=function(e){var t=[];if(e.dataTransfer.items)for(var a=0;a<e.dataTransfer.items.length;a++)"file"===e.dataTransfer.items[a].kind&&t.push(e.dataTransfer.items[a].getAsFile());else for(a=0;a<e.dataTransfer.files.length;a++)t.push(e.dataTransfer.files[a]);return t}(e);if(t.length){var a=new FileReader;a.onload=function(e){z(e.target.result)},a.readAsDataURL(t[0])}},onDragOver:function(e){e.preventDefault(),D(!0)},onDragLeave:function(e){e.preventDefault(),D(!1)},style:{width:"100%",minHeight:350,borderStyle:"dashed",borderColor:k?"red":"grey",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},p.default.createElement(s.default,{color:"disabled",style:{height:60,width:60}}),p.default.createElement(r.default,{variant:"h6",style:{color:"grey"}},C.formatMessage({id:"file_upload_text",defaultMessage:"Drop image here or "})),p.default.createElement("input",{style:{display:"none"},accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){if(e.target.files){var t=new FileReader;t.onload=function(e){z(e.target.result)},t.readAsDataURL(e.target.files[0])}}}),p.default.createElement("label",{htmlFor:"contained-button-file"},p.default.createElement(l.default,{variant:"contained",color:"primary",component:"span",style:{margin:8}},"Upload"))),A&&!L&&p.default.createElement("div",{style:{position:"relative",height:300,width:"100%",background:"black"}},p.default.createElement(u.default,M({cropShape:"round",showGrid:!1,image:A,crop:H,zoom:Q,aspect:1,onCropChange:F,onCropComplete:$,onZoomChange:W},x))),L&&p.default.createElement(i.default,{position:"relative",display:"inline-flex",style:{height:280}},p.default.createElement(o.default,{size:280,variant:"determinate"}),p.default.createElement(i.default,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},p.default.createElement("img",{style:{height:250,borderRadius:"50%"},src:L,alt:"img"}))))),p.default.createElement(d.default,null,p.default.createElement(l.default,{onClick:h,color:"secondary"},C.formatMessage({id:"cancel",defaultMessage:"Cancel"})),p.default.createElement(l.default,{disabled:!A,onClick:te,color:"primary"},C.formatMessage({id:"save",defaultMessage:"Save"}))))};var n=O(a(241)),r=O(a(30)),i=O(a(172)),l=O(a(76)),o=O(a(137)),u=O(a(366)),c=O(a(116)),s=O(a(929)),d=O(a(117)),f=O(a(118)),p=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=j();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),h=O(a(97)),m=O(a(930)),v=O(a(95)),g=a(77),b=a(35),y=a(176);function j(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return j=function(){return e},e}function O(e){return e&&e.__esModule?e:{default:e}}function x(e,t,a,n,r,i,l){try{var o=e[i](l),u=o.value}catch(c){return void a(c)}o.done?t(u):Promise.resolve(u).then(n,r)}function w(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function l(e){x(i,n,r,l,o,"next",e)}function o(e){x(i,n,r,l,o,"throw",e)}l(void 0)}))}}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var _=p.default.forwardRef((function(e,t){return p.default.createElement(h.default,M({direction:"up"},e,{ref:t}))}));e.exports=t.default},929:function(e,t,a){"use strict";var n=a(58),r=a(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),l=(0,n(a(60)).default)(i.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=l},930:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t,a){return c.apply(this,arguments)};var n,r=(n=a(241))&&n.__esModule?n:{default:n};function i(e,t,a,n,r,i,l){try{var o=e[i](l),u=o.value}catch(c){return void a(c)}o.done?t(u):Promise.resolve(u).then(n,r)}function l(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){i(l,n,r,o,u,"next",e)}function u(e){i(l,n,r,o,u,"throw",e)}o(void 0)}))}}var o=function(e){return new Promise((function(t,a){var n=new Image;n.addEventListener("load",(function(){return t(n)})),n.addEventListener("error",(function(e){return a(e)})),n.setAttribute("crossOrigin","anonymous"),n.src=e}))};function u(e){return e*Math.PI/180}function c(){return(c=l(r.default.mark((function e(t,a,n){var i,l,c,s,d,f;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=0),e.next=3,o(t);case 3:return i=e.sent,l=document.createElement("canvas"),c=l.getContext("2d"),s=Math.max(i.width,i.height),d=s/2*Math.sqrt(2)*2,l.width=d,l.height=d,c.translate(d/2,d/2),c.rotate(u(n)),c.translate(-d/2,-d/2),c.drawImage(i,d/2-.5*i.width,d/2-.5*i.height),f=c.getImageData(0,0,d,d),l.width=a.width,l.height=a.height,c.putImageData(f,0-d/2+.5*i.width-a.x,0-d/2+.5*i.height-a.y),e.abrupt("return",l.toDataURL("image/jpeg"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.exports=t.default},931:function(e,t,a){"use strict";var n=a(58),r=a(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),l=(0,n(a(60)).default)(i.createElement(i.Fragment,null,i.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),i.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"CameraAlt");t.default=l},932:function(e,t,a){"use strict";var n=a(58),r=a(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),l=(0,n(a(60)).default)(i.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=l}}]);
//# sourceMappingURL=16.308f1378.chunk.js.map