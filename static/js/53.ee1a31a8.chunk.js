(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[53],{1385:function(e,t,a){"use strict";a(3),a(8),a(12),a(25),a(1381),a(0),a(58),a(41)},1433:function(e,t,a){"use strict";a.d(t,"e",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return h}));var n=a(3),r=a.n(n),c=a(12),o=a(15),i=a(16),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListBankAccount,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlCreateBankAccount,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlUpdateBankAccount,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDetailBankAccount,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDeleteBankAccount,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlChangeStatusBankAccount,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1547:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(3),c=a.n(r),o=a(12),i=a(25),u=a(0),l=a.n(u),s=a(10),d=a(1318),m=a(1364),h=a(590),b=a(1361),f=a(120),p=a(47),g=a(52),v=a(1382),k=a(279),j=a(278),O=a(1451),x=a(1452),E=a(1453),y=a(1454),w=a(1455),C=a(1456),S=a(1371),A=a(1396),T=a(1556),I=a(1307),N=a(1351),P=a(1557),L=a(1386),_=a(146),B=(a(1387),a(145)),W=a(58),z=a(1383),R=(a(64),a(41)),D=(a(1401),a(1402),[{id:"index",label:"STT",align:"center",minWidth:50},{id:"agency_name",label:"S\u1edf h\u1eefu",align:"left",minWidth:160},{id:"account_name",label:"T\xean t\xe0i kho\u1ea3n",align:"left",minWidth:160},{id:"bank_code",label:"Ng\xe2n h\xe0ng",align:"left",minWidth:160},{id:"account_number",label:"S\u1ed1 t\xe0i kho\u1ea3n",align:"left",minWidth:160},{id:"balance",label:"S\u1ed1 d\u01b0",align:"left",minWidth:120,isMonney:!0}]);var F=Object(B.b)((function(e){return{}}),{})((function(e){var t=e.data,a=e.handeChangeActive,r=e.removeItem,c=(e.changeActive,e.setChangeActive,e.setPageIndex),o=e.setPageSize,s=e.pageIndex,d=e.totalRecords,h=(e.permissions,e.paymentGateVPBank,e.onCreateLink,Object(z.a)()),b=Object(u.useState)(),f=Object(i.a)(b,2),g=(f[0],f[1],Object(u.useState)()),B=Object(i.a)(g,2),W=B[0],R=B[1],F=l.a.useState(!1),X=Object(i.a)(F,2),G=(X[0],X[1],l.a.useState(!1)),H=Object(i.a)(G,2),V=(H[0],H[1],Object(u.useState)([])),K=Object(i.a)(V,2),M=(K[0],K[1]),J=Object(p.g)(),Q=Object(u.useState)(!1),U=Object(i.a)(Q,2),q=U[0],Y=U[1];Object(u.useEffect)((function(){M([])}),[t]);var Z=Object(_.a)().user;return l.a.createElement(j.a,{className:h.root},l.a.createElement(O.a,{className:h.container},l.a.createElement(x.a,{stickyHeader:!0,"aria-label":"sticky table"},l.a.createElement(E.a,null,l.a.createElement(y.a,null,D.map((function(e){return l.a.createElement(w.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:v.a.headerTable,color:"white"}},e.label)})),l.a.createElement(w.a,{style:{backgroundColor:v.a.headerTable,textAlign:"center",width:120,color:"white"}},"Tra\u0323ng tha\u0301i"),l.a.createElement(w.a,{style:{width:120,textAlign:"center",backgroundColor:v.a.headerTable,color:"white"}},"H\xe0nh \u0111\u1ed9ng"))),l.a.createElement(C.a,{className:h.columnTable},t.map((function(e){return l.a.createElement(y.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},D.map((function(t){var a=e[t.id];return l.a.createElement(w.a,{key:t.id,align:t.align,style:{textAlign:"index"===t.id?"center":"string"==typeof a?"left":"right"}},t.isMonney?Object(k.j)(a):a)})),l.a.createElement(w.a,{className:h.border},l.a.createElement(S.a,{variant:"outlined",labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",onChange:function(t){return a(e.id,t.target.value)},displayEmpty:!0,value:e.status,className:h.formControl},l.a.createElement(A.a,{value:1},"Hi\u1ec3n th\u1ecb"),l.a.createElement(A.a,{value:2},"Kho\u0301a"))),l.a.createElement(w.a,{className:h.action},Object(k.b)(Z,"/bank-account/update")?l.a.createElement(T.a,{title:"C\u1eadp nh\u1eadt"},l.a.createElement(I.a,{onClick:function(){J.push({pathname:"/bank-account/update",state:e.id})},className:h.button,"aria-label":"edit"},l.a.createElement(N.a,{color:"primary"},"edit"))):null,Object(k.b)(Z,"/bank-account/delete")?l.a.createElement(T.a,{title:"Xo\xe1"},l.a.createElement(I.a,{onClick:function(){R(Object(n.a)({type:"DELETE",title:"Xo\xe1 t\xe0i kho\u1ea3n ng\xe2n h\xe0ng",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a t\xe0i kho\u1ea3n ng\xe2n h\xe0ng  ".concat(e.name," hay kh\xf4ng?")},e)),Y(!0)},className:h.button,"aria-label":"Delete"},l.a.createElement(N.a,{color:"error"},"delete"))):null))}))))),l.a.createElement(L.a,{data:{title:"Xo\xe1 t\xe0i kho\u1ea3n ng\xe2n h\xe0ng",content:"Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a t\xe0i kho\u1ea3n ng\xe2n h\xe0ng ".concat(null===W||void 0===W?void 0:W.name," hay kh\xf4ng?")},open:q,handleClose:function(){return Y(!1)},onAgree:function(){r(null===W||void 0===W?void 0:W.id),Y(!1)}}),l.a.createElement(m.a,{xs:12,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",className:h.tableFooter},l.a.createElement(m.a,{xs:6,item:!0}),l.a.createElement(m.a,{xs:6,item:!0},l.a.createElement(P.a,{component:"div",page:s,count:d,rowsPerPage:10,rowsPerPageOptions:[],onChangePage:function(e,t){c(t)},onChangeRowsPerPage:function(e){o(e.target.value)}}))))})),X=Object(d.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:v.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:v.a.main}},formControl:{width:150,marginLeft:20},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(s.a)(t,"textTransform","capitalize"),Object(s.a)(t,"background","#4caf50 !important"),Object(s.a)(t,"color","#fff"),t),search:{minWidth:200,marginTop:8},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var G=function(e){Object(p.g)();var t=e.data,a=e.updateItem,n=e.removeItem,r=e.setTxtSearch,c=e.changeActive,o=e.setChangeActive,i=e.handeChangeActive,s=e.setPageIndex,d=e.pageIndex,v=e.totalRecords,j=(e.setActiveSeleted,e.activeSelected,e.permissions),O=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),x=e.onCreateLink,E=X(),y=Object(_.a)().user;return l.a.createElement(u.Fragment,null,l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(f.a,{routeSegments:[{name:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n ng\xe2n h\xe0ng",path:"/bank-account"}]})),l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,container:!0,justifyContent:"space-between",alignItems:"center",spacing:3},l.a.createElement(m.a,{style:{padding:10},justify:"space-between",alignItems:"center",container:!0,spacing:3},l.a.createElement(m.a,{item:!0,container:!0,spacing:2,lg:8,md:8,sm:8,xs:8},l.a.createElement(h.a,{id:"outlined-basic",variant:"outlined",placeholder:"t\xecm ki\u1ebfm ...",onChange:function(e){return r(e.target.value)},className:E.search})),Object(k.b)(y,"/bank-account/create")?l.a.createElement(g.b,{to:"/bank-account/create"},l.a.createElement(b.a,{variant:"contained",className:"bg-light-primary"},l.a.createElement("span",{className:"text-primary"},"Th\xeam m\u1edbi"))):null)),l.a.createElement(m.a,{xs:12,item:!0},l.a.createElement(F,{data:t,changeActive:c,setChangeActive:o,handeChangeActive:i,updateItem:a,removeItem:n,pageIndex:d,setPageIndex:s,totalRecords:v,permissions:j,paymentGateVPBank:O,onCreateLink:x})))))},H=a(1433),V=a(1381),K=a(1384);a(1385),t.default=Object(B.b)((function(e){return{}}),{showLoading:V.b,hideLoading:V.a})((function(e){var t=Object(u.useState)(""),a=Object(i.a)(t,2),r=a[0],s=a[1],d=Object(u.useState)(null),m=Object(i.a)(d,2),h=m[0],b=m[1],f=Object(u.useState)(1),g=Object(i.a)(f,2),v=g[0],k=g[1],j=Object(u.useState)(0),O=Object(i.a)(j,2),x=O[0],E=O[1],y=Object(u.useState)(10),w=Object(i.a)(y,1)[0],C=Object(u.useState)(0),S=Object(i.a)(C,2),A=S[0],T=S[1],I=Object(K.a)(r,1e3),N=Object(p.g)(),P=Object(u.useState)([]),L=Object(i.a)(P,2),_=L[0],B=L[1];Object(u.useEffect)((function(){F(!1)}),[x]),Object(u.useEffect)((function(){F(!0)}),[I,h]);var z=function(){var t=Object(o.a)(c.a.mark((function t(a,n){var r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(H.a)({id:a,status:n});case 3:r=t.sent,e.hideLoading(),200==r.data.code?(F(!1),W.c.success("Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i th\xe0nh c\xf4ng!",{theme:"colored"})):W.c.error(null===(o=r.data)||void 0===o?void 0:o.error,{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),D=function(e){var t,a;return"MASTER"==e.type?"T\xe0i kho\u1ea3n ngu\u1ed3n":"STAFF"==e.type?"NV-".concat(null===e||void 0===e||null===(t=e.staff)||void 0===t?void 0:t.display_name):"FEE"==e.type?"T\xe0i kho\u1ea3n nh\u1eadn ph\xed":"\u0110L-".concat(null===e||void 0===e||null===(a=e.agency)||void 0===a?void 0:a.name)},F=function(){var t=Object(o.a)(c.a.mark((function t(a){var r,o,i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.showLoading(),!a){t.next=8;break}return E(0),t.next=5,Object(H.e)({page_index:1,page_size:w,keyword:I});case 5:r=t.sent,t.next=11;break;case 8:return t.next=10,Object(H.e)({page_index:x+1,page_size:w,keyword:I});case 10:r=t.sent;case 11:if(e.hideLoading(),200!=r.data.code||!r.data.data){t.next=18;break}i=null===(o=r.data.data)||void 0===o?void 0:o.data.map((function(e,t){return Object(n.a)(Object(n.a)({},e),{},{index:t+1+x*w,agency_name:D(e)})})),B(i),T(r.data.data.total_elements),t.next=26;break;case 18:if(401!=r.data.code){t.next=25;break}return t.next=21,localStorage.removeItem(R.a.API_TOKEN);case 21:setTimeout((function(){N.push("/")}),1e3),W.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=26;break;case 25:W.c.error(null===(u=r.data)||void 0===u?void 0:u.error,{theme:"colored"});case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=function(){var t=Object(o.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(H.c)(a);case 3:if(n=t.sent,e.hideLoading(),200!=n.data.code){t.next=10;break}F(),W.c.success("Xo\xe1 t\xe0i kho\u1ea3n ng\xe2n h\xe0ng th\xe0nh c\xf4ng!",{theme:"colored"}),t.next=17;break;case 10:if(401!=n.data.code){t.next=16;break}return t.next=13,localStorage.removeItem(R.a.API_TOKEN);case 13:setTimeout((function(){N.push("/")}),1e3),t.next=17;break;case 16:W.c.error("Xo\xe1 t\xe0i kho\u1ea3n ng\xe2n h\xe0ng th\u1ea5t b\u1ea1i!",{theme:"colored"});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(G,{data:_,removeItem:X,setTxtSearch:s,setActiveSeleted:b,pageIndex:x,changeActive:v,setChangeActive:k,setPageIndex:E,activeSelected:h,handeChangeActive:z,totalRecords:A})}))}}]);