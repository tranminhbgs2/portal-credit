(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[35],{1387:function(e,t,a){"use strict";a(3),a(8),a(11),a(25),a(1381),a(0),a(58),a(41)},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(25),r=a(0),c=a.n(r),i=a(1318),o=a(1353),l=a(374),u=a(1361),s=a(378),m=a(279),d=Object(i.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function f(e){d();var t=c.a.useState(null),a=Object(n.a)(t,2),i=a[0],f=a[1];Object(r.useEffect)((function(){p()}),[]);var p=function(){var e=new Date;e.setTime(e.getTime()-432e6),e&&v({startDate:e,endDate:new Date})},b=Object(r.useState)(),h=Object(n.a)(b,2),g=h[0],v=h[1],j=Boolean(i),O=j?"simple-popover":void 0;return c.a.createElement("div",null,c.a.createElement(u.a,{style:{padding:10,height:41,width:200},variant:"outlined",onClick:function(e){f(e.currentTarget)}},e.date?c.a.createElement("p",null,Object(m.e)(g.startDate)," -"," ",Object(m.e)(g.endDate)," "):c.a.createElement("p",null,"dd/mm/YY-dd/mm/YY")),c.a.createElement(o.a,{id:O,open:j,anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(s.DateRangePicker,{ranges:[g],onChange:function(e){v(e.range1)}}),c.a.createElement("div",{style:{justifyContent:"right",alignItems:"flex-end",display:"flex",paddingRight:10,paddingBottom:15}},c.a.createElement(u.a,{style:{width:100,height:30,marginRight:20},onClick:function(){return e.changeDateRange(null,null),void f(null)},variant:"contained"},c.a.createElement(l.a,{variant:"caption"},"Hu\u1ef7")),c.a.createElement(u.a,{style:{width:100,height:30},onClick:function(){return e.changeDateRange(g.startDate,g.endDate),void f(null)},variant:"contained",color:"primary"},c.a.createElement(l.a,{variant:"caption"},"\xc1p d\u1ee5ng")))))}},1391:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"g",(function(){return s})),a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return p}));var n=a(3),r=a.n(n),c=a(11),i=a(15),o=a(16),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.c)(o.a.urlGetListPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.d)(o.a.urlCreatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.d)(o.a.urlUpdatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.c)("".concat(o.a.urlDetailPoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.c)("".concat(o.a.urlDeletePoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.d)(o.a.urlChangeStatusPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.d)(o.a.urlAssignPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1415:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(14),r=a(8),c=a(3),i=a.n(c),o=a(11),l=a(25),u=a(0),s=a.n(u),m=a(1362),d=a(1366),f=a(1367),p=a(1364),b=a(1398),h=a(1361),g=a(58),v=a(1376),j=(a(279),a(44)),O=a(620),E=a(1391);function x(e){var t=e.open,a=e.setOpen,c=e.selected,x=e.onDoneAssgin,y=Object(u.useState)({}),k=Object(l.a)(y,2),w=k[0],S=k[1],T=Object(u.useState)([]),C=Object(l.a)(T,2),_=C[0],A=C[1];Object(v.a)().t;function P(){a(!1),S({})}Object(u.useEffect)((function(){D()}),[]);var D=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)({});case 2:200==(t=e.sent).data.code&&t.data.data&&A(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){e.persist(),"price"===e.target.name?null!==e.target.value&&S(Object(r.a)(Object(r.a)({},w),{},Object(n.a)({},e.target.name,e.target.value.split(".").join("")))):S(Object(r.a)(Object(r.a)({},w),{},Object(n.a)({},e.target.name,e.target.value)))},N=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return e.next=3,Object(E.a)(Object(r.a)(Object(r.a)({},w),{},{pos_id:null===c||void 0===c?void 0:c.id}));case 3:200==(t=e.sent).data.code?(g.c.success("Cho thu\xea Poss th\xe0nh c\xf4ng!",{theme:"colored"}),a(!1),x(),S({})):g.c.error(t.data.error,{theme:"colored"}),e.next=8;break;case 7:g.c.warn("B\u1ea1n ch\u01b0a ch\u1ecdn Pos",{theme:"colored"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=w.agent_id,R=w.fee;return s.a.createElement(m.a,{open:t,onClose:P,"aria-labelledby":"form-dialog-title"},s.a.createElement(d.a,{id:"form-dialog-title"},"Cho thu\xea m\xe1y Pos ",null===c||void 0===c?void 0:c.name),s.a.createElement(f.a,{style:{minWidth:400}},s.a.createElement(j.ValidatorForm,{onSubmit:N,onError:function(){return null}},s.a.createElement(p.a,{container:!0,spacing:2},s.a.createElement(p.a,{item:!0,lg:12,md:12,sm:12,xs:12},s.a.createElement(j.SelectValidator,{variant:"outlined",label:"\u0110\u1ea1i l\xfd *",className:"w-full",value:I,name:"agent_id",displayEmpty:!0,onChange:F,validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]},_.map((function(e){return s.a.createElement(b.a,{value:e.id},e.name)})))),s.a.createElement(p.a,{item:!0,lg:12,md:12,sm:12,xs:12},s.a.createElement(j.TextValidator,{variant:"outlined",className:"w-full",label:"Ph\xed Pos *",onChange:F,type:"text",name:"fee",value:R||"",validators:["required","isFloat"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Ph\xed m\u1eb7c \u0111\u1ecbnh kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"]}))),s.a.createElement(p.a,{className:"mt-8 mb-4",container:!0,justify:"flex-end"},s.a.createElement(h.a,{style:{marginRight:20},color:"inherit",variant:"contained",onClick:P},s.a.createElement("span",{className:"capitalize"},"Quay l\u1ea1i")),s.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit"},s.a.createElement("span",{className:"capitalize"},"\u0110\u1ed3ng \xfd"))))))}},1556:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(8),i=a(11),o=a(25),l=a(0),u=a.n(l),s=a(14),m=a(1318),d=a(1364),f=a(590),p=a(1359),b=a(1379),h=a(1371),g=a(1361),v=a(374),j=a(120),O=a(47),E=a(52),x=a(1382),y=a(279),k=a(278),w=a(1440),S=a(1441),T=a(1442),C=a(1443),_=a(1444),A=a(1445),P=a(1563),D=a(1307),F=a(1351),N=a(1564),I=a(1385),R=a(146),W=(a(1386),a(145)),L=a(58),B=a(1383),z=(a(64),a(41)),H=(a(1404),a(1405),a(1415)),M=[{id:"index",label:"STT",align:"center",minWidth:50},{id:"bank_from",label:"NH chuy\u1ec3n",align:"left",minWidth:80},{id:"account_From",label:"T\xe0i kho\u1ea3n chuy\u1ec3n",align:"left",minWidth:120},{id:"bank_to",label:"NH nh\u1eadn",align:"left",minWidth:140},{id:"account_to",label:"T\xe0i kho\u1ea3n nh\u1eadn",align:"left",minWidth:160},{id:"price",label:"S\u1ed1 ti\u1ec1n",align:"left",minWidth:100,isMonney:!0},{id:"time_payment",label:"Th\u1eddi gian",align:"left",minWidth:140}];var V=Object(W.b)((function(e){return{}}),{})((function(e){var t=e.data,a=(e.handeChangeActive,e.removeItem),n=(e.changeActive,e.setChangeActive,e.setPageIndex),r=e.setPageSize,i=e.pageIndex,s=e.totalRecords,m=(e.permissions,e.paymentGateVPBank,e.onCreateLink,e.onDoneAssgin),f=Object(B.a)(),p=Object(l.useState)(),b=Object(o.a)(p,2),h=(b[0],b[1],Object(l.useState)()),g=Object(o.a)(h,2),v=g[0],j=g[1],E=u.a.useState(!1),W=Object(o.a)(E,2),L=(W[0],W[1],u.a.useState(!1)),z=Object(o.a)(L,2),V=(z[0],z[1],Object(l.useState)([])),G=Object(o.a)(V,2),K=(G[0],G[1]),X=Object(l.useState)(),Y=Object(o.a)(X,2),q=Y[0],J=Y[1],Q=(Object(O.g)(),Object(l.useState)(!1)),U=Object(o.a)(Q,2),Z=U[0],$=U[1];Object(l.useEffect)((function(){K([])}),[t]);var ee=Object(R.a)().user;return u.a.createElement(k.a,{className:f.root},u.a.createElement(w.a,{className:f.container},u.a.createElement(S.a,{stickyHeader:!0,"aria-label":"sticky table"},u.a.createElement(T.a,null,u.a.createElement(C.a,null,M.map((function(e){return u.a.createElement(_.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:x.a.headerTable,color:"white"}},e.label)})),u.a.createElement(_.a,{style:{width:100,textAlign:"center",backgroundColor:x.a.headerTable,color:"white"}},"H\xe0nh \u0111\u1ed9ng"))),u.a.createElement(A.a,{className:f.columnTable},t.map((function(e){return u.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},M.map((function(t){var a=e[t.id];return u.a.createElement(_.a,{key:t.id,align:t.align,style:{textAlign:"index"===t.id?"center":"string"==typeof a?"left":"right"}},t.isMonney?Object(y.j)(a):a)})),u.a.createElement(_.a,{className:f.action},Object(y.b)(ee,"/transfer/delete")?u.a.createElement(P.a,{title:"Xo\xe1"},u.a.createElement(D.a,{onClick:function(){j(Object(c.a)({type:"DELETE",title:"Xo\xe1 l\u1ec7nh r\xfat ti\u1ec1n",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a l\u1ec7nh r\xfat ti\u1ec1n  ".concat(e.name," hay kh\xf4ng?")},e)),$(!0)},className:f.button,"aria-label":"Delete"},u.a.createElement(F.a,{color:"error"},"delete"))):null))}))))),u.a.createElement(I.a,{data:{title:"Xo\xe1 l\u1ec7nh chuy\u1ec3n ti\u1ec1n",content:"Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a l\u1ec7nh chuy\u1ec3n ti\u1ec1n ".concat(Object(y.j)(null===v||void 0===v?void 0:v.price)," hay kh\xf4ng?")},open:Z,handleClose:function(){return $(!1)},onAgree:function(){a(null===v||void 0===v?void 0:v.id),$(!1)}}),u.a.createElement(H.a,{selected:v,open:q,setOpen:J,onDoneAssgin:m}),u.a.createElement(d.a,{xs:12,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",className:f.tableFooter},u.a.createElement(d.a,{xs:6,item:!0}),u.a.createElement(d.a,{xs:6,item:!0},u.a.createElement(N.a,{component:"div",page:i,count:s,rowsPerPage:10,rowsPerPageOptions:[],onChangePage:function(e,t){n(t)},onChangeRowsPerPage:function(e){r(e.target.value)}}))))})),G=a(1390),K=Object(m.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:x.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:x.a.main}},formControl:{minWidth:200},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(s.a)(t,"textTransform","capitalize"),Object(s.a)(t,"background","#4caf50 !important"),Object(s.a)(t,"color","#fff"),t),search:{minWidth:200},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var X=function(e){Object(O.g)();var t=e.data,a=e.updateItem,n=e.removeItem,r=e.setTxtSearch,c=e.changeActive,i=e.setChangeActive,o=e.handeChangeActive,s=e.setPageIndex,m=e.pageIndex,x=e.totalRecords,k=(e.setActiveSeleted,e.activeSelected,e.permissions),w=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),S=e.onCreateLink,T=e.onDoneAssgin,C=(e.household,e.setHousehold,e.listHousehold,e.startDate),_=e.changeDateRange,A=(e.setStatus,e.status,e.listType),P=e.type_to,D=e.setTypeTo,F=e.type_from,N=e.setTypeFrom,I=e.listBankFrom,W=e.listAccountTo,L=e.bankFrom,B=e.setBankFrom,z=e.bankTo,H=e.setBankTo,M=e.report,X=K(),Y=Object(R.a)().user;return u.a.createElement(l.Fragment,null,u.a.createElement("div",{className:"m-sm-30"},u.a.createElement("div",{className:"mb-sm-30"},u.a.createElement(j.a,{routeSegments:[{name:"Qu\u1ea3n l\xfd Chuy\u1ec3n ti\u1ec1n",path:"/transfer"}]})),u.a.createElement(d.a,{container:!0,spacing:3},u.a.createElement(d.a,{item:!0,xs:12,container:!0,justifyContent:"space-between",alignItems:"center",spacing:3},u.a.createElement(d.a,{style:{padding:10},justify:"space-between",alignItems:"center",container:!0,spacing:3},u.a.createElement(d.a,{item:!0,container:!0,spacing:2,lg:12,md:12,sm:12,xs:12},u.a.createElement(d.a,{item:!0,lg:2,md:2,sm:4,xs:4},u.a.createElement(f.a,{id:"outlined-basic",variant:"outlined",placeholder:"t\xecm ki\u1ebfm ...",onChange:function(e){return r(e.target.value)},className:X.search})),u.a.createElement(d.a,{item:!0,lg:2,md:2,sm:4,xs:4},u.a.createElement(G.a,{date:C,changeDateRange:_})),u.a.createElement(d.a,{item:!0,lg:2,md:2,sm:4,xs:4},u.a.createElement(p.a,{variant:"outlined",className:X.formControl,fullWidth:!0},F?"":u.a.createElement(b.a,{htmlFor:"outlined-age-native-simple"},"Lo\u1ea1i chuy\u1ec3n ti\u1ec1n"),u.a.createElement(h.a,{fullWidth:!0,native:!0,label:"Lo\u1ea1i chuy\u1ec3n ti\u1ec1n",value:F,onChange:function(e){return N(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},u.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),A.map((function(e){return u.a.createElement("option",{value:e.code},e.name)}))))),"MASTER"!=F?u.a.createElement(d.a,{item:!0,lg:2,md:2,sm:4,xs:4},u.a.createElement(p.a,{variant:"outlined",className:X.formControl,fullWidth:!0},u.a.createElement(b.a,{htmlFor:"outlined-age-native-simple"},"Ng\u01b0\u1eddi chuy\u1ec3n ti\u1ec1n"),u.a.createElement(h.a,{fullWidth:!0,native:!0,label:"Ng\u01b0\u1eddi chuy\u1ec3n ti\u1ec1n",value:L,onChange:function(e){return B(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},u.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),I.map((function(e){return u.a.createElement("option",{value:e.id},e.name)}))))):null,u.a.createElement(d.a,{item:!0,lg:2,md:2,sm:4,xs:4},u.a.createElement(p.a,{variant:"outlined",className:X.formControl,fullWidth:!0},P?"":u.a.createElement(b.a,{htmlFor:"outlined-age-native-simple"},"Lo\u1ea1i nh\u1eadn ti\u1ec1n"),u.a.createElement(h.a,{fullWidth:!0,native:!0,label:"Lo\u1ea1i nh\u1eadn ti\u1ec1n",value:P,onChange:function(e){return D(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},u.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),A.map((function(e){return u.a.createElement("option",{value:e.code},e.name)}))))),"MASTER"!=P?u.a.createElement(d.a,{item:!0,lg:2,md:2,sm:4,xs:4},u.a.createElement(p.a,{variant:"outlined",className:X.formControl,fullWidth:!0},u.a.createElement(b.a,{htmlFor:"outlined-age-native-simple"},"Ng\u01b0\u1eddi nh\u1eadn ti\u1ec1n"),u.a.createElement(h.a,{fullWidth:!0,native:!0,label:"Ng\u01b0\u1eddi nh\u1eadn ti\u1ec1n",value:z,onChange:function(e){return H(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},u.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),W.map((function(e){return u.a.createElement("option",{value:e.id},e.name)}))))):null,u.a.createElement(d.a,{item:!0,lg:2,md:2,sm:4,xs:4},Object(y.b)(Y,"/transfer/create")?u.a.createElement(E.b,{to:"/transfer/create"},u.a.createElement(g.a,{variant:"contained",className:"bg-light-primary",style:{height:40}},u.a.createElement("span",{className:"text-primary"},"Th\xeam m\u1edbi"))):null)))),u.a.createElement(d.a,{xs:12,container:!0,item:!0},u.a.createElement(v.a,{variant:"h6"},"T\u1ed5ng ti\u1ec1n : ",Object(y.j)(null===M||void 0===M?void 0:M.price,!0)," \u0111")),u.a.createElement(d.a,{xs:12,item:!0},u.a.createElement(V,{data:t,changeActive:c,setChangeActive:i,handeChangeActive:o,updateItem:a,removeItem:n,pageIndex:m,setPageIndex:s,totalRecords:x,permissions:k,paymentGateVPBank:w,onCreateLink:S,onDoneAssgin:T})))))},Y=a(1388),q=a(1381),J=a(1384),Q=(a(1387),a(620));t.default=Object(W.b)((function(e){return{}}),{showLoading:q.b,hideLoading:q.a})((function(e){var t=Object(O.h)(),a=Object(l.useState)(""),n=Object(o.a)(a,2),s=n[0],m=n[1],d=Object(l.useState)(null),f=Object(o.a)(d,2),p=f[0],b=f[1],h=Object(l.useState)(),g=Object(o.a)(h,2),v=g[0],j=g[1],E=Object(l.useState)([]),x=Object(o.a)(E,2),k=x[0],w=(x[1],Object(l.useState)([])),S=Object(o.a)(w,2),T=S[0],C=S[1],_=Object(l.useState)("STAFF"),A=Object(o.a)(_,2),P=A[0],D=A[1],F=Object(l.useState)("MASTER"),N=Object(o.a)(F,2),I=N[0],R=N[1],W=Object(l.useState)([]),B=Object(o.a)(W,2),H=B[0],M=B[1],V=Object(l.useState)([]),G=Object(o.a)(V,2),K=G[0],q=G[1],U=Object(l.useState)(),Z=Object(o.a)(U,2),$=Z[0],ee=Z[1],te=Object(l.useState)(null===t||void 0===t?void 0:t.staff_id),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],ce=Object(l.useState)({total:1e6}),ie=Object(o.a)(ce,2),oe=ie[0],le=ie[1],ue=Object(l.useState)(1),se=Object(o.a)(ue,2),me=se[0],de=se[1],fe=Object(l.useState)(0),pe=Object(o.a)(fe,2),be=pe[0],he=pe[1],ge=Object(l.useState)(10),ve=Object(o.a)(ge,1)[0],je=Object(l.useState)(0),Oe=Object(o.a)(je,2),Ee=Oe[0],xe=Oe[1],ye=Object(l.useState)(),ke=Object(o.a)(ye,2),we=ke[0],Se=ke[1],Te=Object(l.useState)(new Date),Ce=Object(o.a)(Te,2),_e=Ce[0],Ae=Ce[1],Pe=Object(J.a)(s,1e3),De=Object(O.g)(),Fe=Object(l.useState)([]),Ne=Object(o.a)(Fe,2),Ie=Ne[0],Re=Ne[1];Object(l.useEffect)((function(){He(!1)}),[be]),Object(l.useEffect)((function(){t.staff_id&&setTimeout((function(){re(t.staff_id)}),2e3)}),[t.staff_id]),Object(l.useEffect)((function(){He(!0)}),[Pe,p,_e,P,I,ne,$]),Object(l.useEffect)((function(){Be()}),[]),Object(l.useEffect)((function(){I&&"MASTER"!=I&&We(I)}),[I]),Object(l.useEffect)((function(){P&&"MASTER"!=P&&Le(P)}),[P]);var We=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee(),a=[],"STAFF"!=t){e.next=8;break}return e.next=5,Object(Q.o)({});case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,Object(Q.c)({});case 10:a=e.sent;case 11:200==a.data.code&&a.data.data&&(n=a.data.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{name:"STAFF"==t?e.fullname:e.name})})),M(n));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re(),a=[],"STAFF"!=t){e.next=8;break}return e.next=5,Object(Q.o)({});case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,Object(Q.c)({});case 10:a=e.sent;case 11:200==a.data.code&&a.data.data&&(n=a.data.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{name:"STAFF"==t?e.fullname:e.name})})),q(n));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Be=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.r)({});case 2:200==(t=e.sent).data.code&&t.data.data&&C(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ze=function(){var e=Object(i.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),He=function(){var t=Object(i.a)(r.a.mark((function t(a){var n,i,o,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.showLoading(),!a){t.next=8;break}return he(0),t.next=5,Object(Y.v)({page_index:1,page_size:ve,keyword:Pe,date_from:we?Object(y.i)(we):null,date_to:_e?Object(y.i)(_e):null,type_to:P||null,type_from:I||null,id_to:ne||null,id_from:$||null});case 5:n=t.sent,t.next=11;break;case 8:return t.next=10,Object(Y.v)({page_index:be+1,page_size:ve,keyword:Pe,date_from:we?Object(y.i)(we):null,date_to:_e?Object(y.i)(_e):null,type_to:P||null,type_from:I||null,id_to:ne||null,id_from:$||null});case 10:n=t.sent;case 11:if(e.hideLoading(),200!=n.data.code||!n.data.data){t.next=20;break}o=null===(i=n.data.data)||void 0===i?void 0:i.data.map((function(e,t){return Object(c.a)(Object(c.a)({},e),{},{index:t+1+be*ve,account_From:"".concat(e.acc_number_from,"\n").concat(e.acc_name_from),account_to:"".concat(e.acc_number_to,"\n").concat(e.acc_name_to)})})),Re(o),console.log("res.data.data",n.data.data),le(n.data.data.total),xe(n.data.data.total_elements),t.next=28;break;case 20:if(401!=n.data.code){t.next=27;break}return t.next=23,localStorage.removeItem(z.a.API_TOKEN);case 23:setTimeout((function(){De.push("/")}),1e3),L.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=28;break;case 27:L.c.error(null===(l=n.data)||void 0===l?void 0:l.error,{theme:"colored"});case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Me=function(){var t=Object(i.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(Y.k)(a);case 3:if(n=t.sent,e.hideLoading(),200!=n.data.code){t.next=10;break}He(),L.c.success("Xo\xe1 l\u1ec7nh chuy\u1ec3n ti\u1ec1n th\xe0nh c\xf4ng!",{theme:"colored"}),t.next=17;break;case 10:if(401!=n.data.code){t.next=16;break}return t.next=13,localStorage.removeItem(z.a.API_TOKEN);case 13:setTimeout((function(){De.push("/")}),1e3),t.next=17;break;case 16:L.c.error(null===(c=n.data)||void 0===c?void 0:c.error,{theme:"colored"});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(X,{data:Ie,removeItem:Me,setTxtSearch:m,setActiveSeleted:b,pageIndex:be,changeActive:me,setChangeActive:de,setPageIndex:he,activeSelected:p,handeChangeActive:ze,totalRecords:Ee,onDoneAssgin:function(){He(!1)},household:v,setHousehold:j,listHousehold:k,changeDateRange:function(e,t){Se(e),Ae(t)},startDate:we,listType:T,type_to:P,setTypeTo:D,type_from:I,setTypeFrom:R,listBankFrom:H,listAccountTo:K,bankFrom:$,setBankFrom:ee,bankTo:ne,setBankTo:re,report:oe})}))}}]);