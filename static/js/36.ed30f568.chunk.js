(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[36],{1385:function(e,t,a){"use strict";a(3),a(8),a(12),a(25),a(1381),a(0),a(58),a(41)},1391:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return m})),a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return f}));var n=a(3),r=a.n(n),c=a(12),o=a(15),i=a(16),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlCreatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlUpdatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDetailPoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDeletePoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlChangeStatusPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlAssignPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1412:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(10),r=a(8),c=a(3),o=a.n(c),i=a(12),l=a(25),s=a(0),u=a.n(s),d=a(1362),m=a(1366),h=a(1367),f=a(1364),p=a(1397),b=a(1361),g=a(58),v=a(1376),j=(a(279),a(44)),O=a(620),E=a(1391);function x(e){var t=e.open,a=e.setOpen,c=e.selected,x=e.onDoneAssgin,k=Object(s.useState)({}),y=Object(l.a)(k,2),w=y[0],C=y[1],P=Object(s.useState)([]),S=Object(l.a)(P,2),T=S[0],A=S[1];Object(v.a)().t;function N(){a(!1),C({})}Object(s.useEffect)((function(){I()}),[]);var I=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)({});case 2:200==(t=e.sent).data.code&&t.data.data&&A(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){e.persist(),"price"===e.target.name?null!==e.target.value&&C(Object(r.a)(Object(r.a)({},w),{},Object(n.a)({},e.target.name,e.target.value.split(".").join("")))):C(Object(r.a)(Object(r.a)({},w),{},Object(n.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return e.next=3,Object(E.a)(Object(r.a)(Object(r.a)({},w),{},{pos_id:null===c||void 0===c?void 0:c.id}));case 3:200==(t=e.sent).data.code?(g.c.success("Cho thu\xea Poss th\xe0nh c\xf4ng!",{theme:"colored"}),a(!1),x(),C({})):g.c.error(t.data.error,{theme:"colored"}),e.next=8;break;case 7:g.c.warn("B\u1ea1n ch\u01b0a ch\u1ecdn Pos",{theme:"colored"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=w.agent_id,D=w.fee;return u.a.createElement(d.a,{open:t,onClose:N,"aria-labelledby":"form-dialog-title"},u.a.createElement(m.a,{id:"form-dialog-title"},"Cho thu\xea m\xe1y Pos ",null===c||void 0===c?void 0:c.name),u.a.createElement(h.a,{style:{minWidth:400}},u.a.createElement(j.ValidatorForm,{onSubmit:L,onError:function(){return null}},u.a.createElement(f.a,{container:!0,spacing:2},u.a.createElement(f.a,{item:!0,lg:12,md:12,sm:12,xs:12},u.a.createElement(j.SelectValidator,{variant:"outlined",label:"\u0110\u1ea1i l\xfd *",className:"w-full",value:z,name:"agent_id",displayEmpty:!0,onChange:_,validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]},T.map((function(e){return u.a.createElement(p.a,{value:e.id},e.name)})))),u.a.createElement(f.a,{item:!0,lg:12,md:12,sm:12,xs:12},u.a.createElement(j.TextValidator,{variant:"outlined",className:"w-full",label:"Ph\xed Pos *",onChange:_,type:"text",name:"fee",value:D||"",validators:["required","isFloat"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Ph\xed m\u1eb7c \u0111\u1ecbnh kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"]}))),u.a.createElement(f.a,{className:"mt-8 mb-4",container:!0,justify:"flex-end"},u.a.createElement(b.a,{style:{marginRight:20},color:"inherit",variant:"contained",onClick:N},u.a.createElement("span",{className:"capitalize"},"Quay l\u1ea1i")),u.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit"},u.a.createElement("span",{className:"capitalize"},"\u0110\u1ed3ng \xfd"))))))}},1548:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(3),c=a.n(r),o=a(12),i=a(25),l=a(0),s=a.n(l),u=a(10),d=a(1318),m=a(1364),h=a(590),f=a(1359),p=a(1379),b=a(1371),g=a(1361),v=a(120),j=a(47),O=a(52),E=a(1382),x=a(279),k=a(278),y=a(1451),w=a(1452),C=a(1453),P=a(1454),S=a(1455),T=a(1456),A=a(1397),N=a(1556),I=a(1307),_=a(1351),L=a(1557),z=a(1386),D=a(146),H=(a(1387),a(145)),W=a(58),R=a(1383),B=(a(64),a(41)),F=(a(1401),a(1402),a(1412)),K=[{id:"index",label:"STT",align:"center",minWidth:50},{id:"method",label:"Ph\u01b0\u01a1ng th\u1ee9c",align:"left",minWidth:100},{id:"bank_code",label:"Ng\xe2n h\xe0ng",align:"left",minWidth:100},{id:"name",label:"T\xean m\xe1y",align:"left",minWidth:160},{id:"total_fee",label:"T\u1ed5ng ph\xed (%)",align:"left",minWidth:100},{id:"household",label:"H\u1ed9 kinh doanh",align:"left",minWidth:160},{id:"agent_name",label:"\u0110\u1ea1i l\xfd thu\xea",align:"left",minWidth:160}];var V=Object(H.b)((function(e){return{}}),{})((function(e){var t=e.data,a=e.handeChangeActive,r=e.removeItem,c=(e.changeActive,e.setChangeActive,e.setPageIndex),o=e.setPageSize,u=e.pageIndex,d=e.totalRecords,h=(e.permissions,e.paymentGateVPBank,e.onCreateLink,e.onDoneAssgin),f=e.pageSize,p=Object(R.a)(),g=Object(l.useState)(),v=Object(i.a)(g,2),O=(v[0],v[1],Object(l.useState)()),H=Object(i.a)(O,2),W=H[0],B=H[1],V=s.a.useState(!1),X=Object(i.a)(V,2),G=(X[0],X[1],s.a.useState(!1)),M=Object(i.a)(G,2),q=(M[0],M[1],Object(l.useState)([])),J=Object(i.a)(q,2),Q=(J[0],J[1]),U=Object(l.useState)(),Y=Object(i.a)(U,2),Z=Y[0],$=Y[1],ee=Object(j.g)(),te=Object(l.useState)(!1),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1];Object(l.useEffect)((function(){Q([])}),[t]);var ce=Object(D.a)().user;return s.a.createElement(k.a,{className:p.root},s.a.createElement(y.a,{className:p.container},s.a.createElement(w.a,{stickyHeader:!0,"aria-label":"sticky table"},s.a.createElement(C.a,null,s.a.createElement(P.a,null,K.map((function(e){return s.a.createElement(S.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:E.a.headerTable,color:"white"}},e.label)})),s.a.createElement(S.a,{style:{backgroundColor:E.a.headerTable,textAlign:"center",width:90,color:"white"}},"Tra\u0323ng tha\u0301i"),s.a.createElement(S.a,{style:{width:160,textAlign:"center",backgroundColor:E.a.headerTable,color:"white"}},"H\xe0nh \u0111\u1ed9ng"))),s.a.createElement(T.a,{className:p.columnTable},t.map((function(e){return s.a.createElement(P.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},K.map((function(t){var a=e[t.id];return s.a.createElement(S.a,{key:t.id,align:t.align,style:{textAlign:"index"===t.id?"center":"string"==typeof a?"left":"right"}},t.isMonney?Object(x.j)(a):a)})),s.a.createElement(S.a,{className:p.border},s.a.createElement(b.a,{variant:"outlined",labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",onChange:function(t){return a(e.id,t.target.value)},displayEmpty:!0,value:e.status,className:p.formControl},s.a.createElement(A.a,{value:1},"Hi\u1ec3n th\u1ecb"),s.a.createElement(A.a,{value:2},"Kho\u0301a"))),s.a.createElement(S.a,{className:p.action},Object(x.b)(ce,"/poss/update")?s.a.createElement(N.a,{title:"Cho thu\xea Pos"},s.a.createElement(I.a,{onClick:function(){B(Object(n.a)({},e)),$(!0)},className:p.button,"aria-label":"edit"},s.a.createElement(_.a,{color:"secondary"},"sell"))):null,Object(x.b)(ce,"/poss/update")?s.a.createElement(N.a,{title:"C\u1eadp nh\u1eadt"},s.a.createElement(I.a,{onClick:function(){ee.push({pathname:"/poss/update",state:e.id})},className:p.button,"aria-label":"edit"},s.a.createElement(_.a,{color:"primary"},"edit"))):null,Object(x.b)(ce,"/poss/delete")?s.a.createElement(N.a,{title:"Xo\xe1"},s.a.createElement(I.a,{onClick:function(){B(Object(n.a)({type:"DELETE",title:"Xo\xe1 Poss",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a Poss  ".concat(e.name," hay kh\xf4ng?")},e)),re(!0)},className:p.button,"aria-label":"Delete"},s.a.createElement(_.a,{color:"error"},"delete"))):null))}))))),s.a.createElement(z.a,{data:{title:"Xo\xe1 Poss",content:"Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a Poss ".concat(null===W||void 0===W?void 0:W.name," hay kh\xf4ng?")},open:ne,handleClose:function(){return re(!1)},onAgree:function(){r(null===W||void 0===W?void 0:W.id),re(!1)}}),s.a.createElement(F.a,{selected:W,open:Z,setOpen:$,onDoneAssgin:h}),s.a.createElement(m.a,{xs:12,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",className:p.tableFooter},s.a.createElement(m.a,{xs:6,item:!0}),s.a.createElement(m.a,{xs:6,item:!0},s.a.createElement(L.a,{component:"div",page:u,count:d,rowsPerPage:f,rowsPerPageOptions:[],onChangePage:function(e,t){c(t)},onChangeRowsPerPage:function(e){o(e.target.value)}}))))})),X=Object(d.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:E.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:E.a.main}},formControl:{minWidth:200},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(u.a)(t,"textTransform","capitalize"),Object(u.a)(t,"background","#4caf50 !important"),Object(u.a)(t,"color","#fff"),t),search:{minWidth:200},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var G=function(e){Object(j.g)();var t=e.data,a=e.updateItem,n=e.removeItem,r=e.setTxtSearch,c=e.changeActive,o=e.setChangeActive,i=e.handeChangeActive,u=e.setPageIndex,d=e.pageIndex,E=e.totalRecords,k=e.setActiveSeleted,y=e.activeSelected,w=e.permissions,C=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),P=e.onCreateLink,S=e.onDoneAssgin,T=e.household,A=e.setHousehold,N=e.listHousehold,I=e.pageSize,_=X(),L=Object(D.a)().user;return s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(v.a,{routeSegments:[{name:"Qu\u1ea3n l\xfd Poss",path:"/poss"}]})),s.a.createElement(m.a,{container:!0,spacing:3},s.a.createElement(m.a,{item:!0,xs:12,container:!0,justifyContent:"space-between",alignItems:"center",spacing:3},s.a.createElement(m.a,{style:{padding:10},justify:"space-between",alignItems:"center",container:!0,spacing:3},s.a.createElement(m.a,{item:!0,container:!0,spacing:2,lg:8,md:8,sm:8,xs:8},s.a.createElement(m.a,{item:!0},s.a.createElement(h.a,{id:"outlined-basic",variant:"outlined",placeholder:"t\xecm ki\u1ebfm ...",onChange:function(e){return r(e.target.value)},className:_.search})),s.a.createElement(m.a,{item:!0},s.a.createElement(f.a,{variant:"outlined",className:_.formControl},s.a.createElement(p.a,{htmlFor:"outlined-age-native-simple"},"Tr\u1ea1ng th\xe1i"),s.a.createElement(b.a,{native:!0,label:"Tr\u1ea1ng th\xe1i",value:y,onChange:function(e){return k(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},s.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),[{name:"Hi\u1ec3n th\u1ecb",id:1},{name:"Kho\xe1",id:2}].map((function(e){return s.a.createElement("option",{value:e.id},e.name)}))))),s.a.createElement(m.a,{item:!0},s.a.createElement(f.a,{variant:"outlined",className:_.formControl},s.a.createElement(p.a,{htmlFor:"outlined-age-native-simple"},"H\u1ed9 kinh doanh"),s.a.createElement(b.a,{native:!0,label:"H\u1ed9 kinh doanh",value:T,onChange:function(e){return A(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},s.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),N.map((function(e){return s.a.createElement("option",{value:e.id},e.name)})))))),Object(x.b)(L,"/poss/create")?s.a.createElement(O.b,{to:"/poss/create"},s.a.createElement(g.a,{variant:"contained",className:"bg-light-primary"},s.a.createElement("span",{className:"text-primary"},"Th\xeam m\u1edbi"))):null)),s.a.createElement(m.a,{xs:12,item:!0},s.a.createElement(V,{data:t,changeActive:c,setChangeActive:o,handeChangeActive:i,updateItem:a,removeItem:n,pageIndex:d,setPageIndex:u,totalRecords:E,permissions:w,paymentGateVPBank:C,onCreateLink:P,onDoneAssgin:S,pageSize:I})))))},M=a(1391),q=a(1381),J=a(1384),Q=(a(1385),a(620));t.default=Object(H.b)((function(e){return{}}),{showLoading:q.b,hideLoading:q.a})((function(e){var t=Object(l.useState)(""),a=Object(i.a)(t,2),r=a[0],u=a[1],d=Object(l.useState)(null),m=Object(i.a)(d,2),h=m[0],f=m[1],p=Object(l.useState)(),b=Object(i.a)(p,2),g=b[0],v=b[1],O=Object(l.useState)([]),E=Object(i.a)(O,2),k=E[0],y=E[1],w=Object(l.useState)(1),C=Object(i.a)(w,2),P=C[0],S=C[1],T=Object(l.useState)(0),A=Object(i.a)(T,2),N=A[0],I=A[1],_=Object(l.useState)(50),L=Object(i.a)(_,1)[0],z=Object(l.useState)(0),D=Object(i.a)(z,2),H=D[0],R=D[1],F=Object(J.a)(r,1e3),K=Object(j.g)(),V=Object(l.useState)([]),X=Object(i.a)(V,2),q=X[0],U=X[1];Object(l.useEffect)((function(){ee(!1)}),[N]),Object(l.useEffect)((function(){ee(!0)}),[F,h,g]),Object(l.useEffect)((function(){Y()}),[]);var Y=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.i)({});case 2:200==(t=e.sent).data.code&&t.data.data&&y(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var t=Object(o.a)(c.a.mark((function t(a,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(M.b)({id:a,status:n});case 3:r=t.sent,e.hideLoading(),200==r.data.code?(ee(!1),W.c.success("Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i th\xe0nh c\xf4ng!",{theme:"colored"})):W.c.error("Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i th\u1ea5t b\u1ea1i!",{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),$=function(e){var t=e.map((function(e){return"".concat(e.name," - ").concat(e.fee)}));return console.log("names",t),t.toString()},ee=function(){var t=Object(o.a)(c.a.mark((function t(a){var r,o,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.showLoading(),!a){t.next=8;break}return I(0),t.next=5,Object(M.f)({page_index:1,page_size:L,keyword:F,status:h||null,hkd_id:g||null});case 5:r=t.sent,t.next=11;break;case 8:return t.next=10,Object(M.f)({page_index:N+1,page_size:L,keyword:F,status:h||null,hkd_id:g||null});case 10:r=t.sent;case 11:if(e.hideLoading(),200!=r.data.code||!r.data.data){t.next=18;break}i=null===(o=r.data.data)||void 0===o?void 0:o.data.map((function(e,t){var a;return Object(n.a)(Object(n.a)({},e),{},{index:t+1+N*L,household:null===e||void 0===e||null===(a=e.hokinhdoanh)||void 0===a?void 0:a.name,agent_name:$(null===e||void 0===e?void 0:e.active_agents),price_pos:Object(x.j)(parseInt(null===e||void 0===e?void 0:e.price_pos))})})),U(i),R(r.data.data.total_elements),t.next=26;break;case 18:if(401!=r.data.code){t.next=25;break}return t.next=21,localStorage.removeItem(B.a.API_TOKEN);case 21:setTimeout((function(){K.push("/")}),1e3),W.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=26;break;case 25:W.c.error(null===(l=r.data)||void 0===l?void 0:l.error,{theme:"colored"});case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),te=function(){var t=Object(o.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(M.d)(a);case 3:if(n=t.sent,e.hideLoading(),200!=n.data.code){t.next=10;break}ee(),W.c.success("Xo\xe1 h\u1ed9 kinh doanh th\xe0nh c\xf4ng!",{theme:"colored"}),t.next=17;break;case 10:if(401!=n.data.code){t.next=16;break}return t.next=13,localStorage.removeItem(B.a.API_TOKEN);case 13:setTimeout((function(){K.push("/")}),1e3),t.next=17;break;case 16:W.c.error("Xo\xe1 h\u1ed9 kinh doanh th\u1ea5t b\u1ea1i!",{theme:"colored"});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement(G,{data:q,removeItem:te,setTxtSearch:u,setActiveSeleted:f,pageIndex:N,changeActive:P,setChangeActive:S,setPageIndex:I,activeSelected:h,handeChangeActive:Z,totalRecords:H,onDoneAssgin:function(){ee(!1)},household:g,setHousehold:v,listHousehold:k,pageSize:L})}))}}]);