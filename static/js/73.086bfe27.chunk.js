(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[73],{1453:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(25),i=a(0),c=a.n(i),r=a(1318),o=a(1353),l=a(374),d=a(1361),s=a(378),u=a(279),m=Object(r.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function h(e){m();var t=c.a.useState(null),a=Object(n.a)(t,2),r=a[0],h=a[1],b=Object(i.useState)({startDate:new Date,endDate:new Date}),f=Object(n.a)(b,2),p=f[0],g=f[1],v=Boolean(r),j=v?"simple-popover":void 0;return c.a.createElement("div",null,c.a.createElement(d.a,{style:{padding:10,height:41,width:200},variant:"outlined",onClick:function(e){h(e.currentTarget)}},e.date?c.a.createElement("p",null,Object(u.e)(null===p||void 0===p?void 0:p.startDate)," -"," ",Object(u.e)(null===p||void 0===p?void 0:p.endDate)," "):c.a.createElement("p",null,"dd/mm/YY-dd/mm/YY")),c.a.createElement(o.a,{id:j,open:v,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(s.DateRangePicker,{ranges:[p],onChange:function(e){g(e.range1)}}),c.a.createElement("div",{style:{justifyContent:"right",alignItems:"flex-end",display:"flex",paddingRight:10,paddingBottom:15}},c.a.createElement(d.a,{style:{width:100,height:30,marginRight:20},onClick:function(){return e.changeDateRange(null,null),void h(null)},variant:"contained"},c.a.createElement(l.a,{variant:"caption"},"Hu\u1ef7")),c.a.createElement(d.a,{style:{width:100,height:30},onClick:function(){return e.changeDateRange(p.startDate,p.endDate),void h(null)},variant:"contained",color:"primary"},c.a.createElement(l.a,{variant:"caption"},"\xc1p d\u1ee5ng")))))}},1559:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a(3),c=a.n(i),r=a(11),o=a(25),l=a(0),d=a.n(l),s=a(14),u=a(1318),m=a(1364),h=a(590),b=a(1359),f=a(1379),p=a(1371),g=a(374),v=a(120),j=a(47),O=a(1382),E=a(279),_=a(278),y=a(1438),x=a(1439),k=a(1440),C=a(1441),S=a(1442),T=a(1443),w=a(1393),D=a(1307),I=a(1351),N=a(1577),L=a(1387),W=a(146),A=(a(1388),a(145)),P=a(58),R=a(1384),z=a(41),M=a(1452),H=[{id:"index",label:"STT",align:"center",minWidth:50},{id:"category",label:"Danh m\u1ee5c",align:"left",minWidth:120},{id:"method_name",label:"H\xecnh th\u1ee9c",align:"left",minWidth:100},{id:"customer_name",label:"T\xean kh\xe1ch",align:"left",minWidth:140},{id:"bank_card",label:"Th\u1ebb",align:"left",minWidth:120},{id:"pos",label:"M\xe1y",align:"left",minWidth:120},{id:"lo_number",label:"L\xf4",align:"left",minWidth:50},{id:"price_nop",label:"S\u1ed1 ti\u1ec1n n\u1ed9p",align:"left",minWidth:100,isMonney:!0},{id:"price_rut",label:"S\u1ed1 ti\u1ec1n r\xfat",align:"left",minWidth:100,isMonney:!0},{id:"fee",label:"Ph\xed (%)",align:"left",minWidth:90,isMonney:!0},{id:"price_fee",label:"Th\xe0nh ti\u1ec1n ph\xed",align:"left",minWidth:100,isMonney:!0},{id:"price_repair",label:"Ck b\xf9",align:"left",minWidth:100,isMonney:!0},{id:"total_fee",label:"T\u1ed5ng ph\xed",align:"left",minWidth:100,isMonney:!0},{id:"price_transfer",label:"Chuy\u1ec3n kho\u1ea3n l\u1ea1i",align:"left",minWidth:100,isMonney:!0},{id:"status_fee_name",label:"Tr\u1ea1ng th\xe1i",align:"left",minWidth:90}];var B=Object(A.b)((function(e){return{}}),{})((function(e){var t=e.data,a=(e.handeChangeActive,e.removeItem),i=(e.changeActive,e.setChangeActive,e.setPageIndex),c=e.setPageSize,r=e.pageIndex,s=e.totalRecords,u=(e.permissions,e.paymentGateVPBank,e.onCreateLink,e.reloadData),h=e.payItem,b=e.rollbackTrans,f=e.pageSize,p=e.duplicateTransaction,g=Object(R.a)(),v=Object(l.useState)(),A=Object(o.a)(v,2),P=(A[0],A[1],Object(l.useState)()),z=Object(o.a)(P,2),B=z[0],F=z[1],X=Object(l.useState)(!1),Y=Object(o.a)(X,2),K=(Y[0],Y[1],Object(l.useState)(!1)),G=Object(o.a)(K,2),V=(G[0],G[1],Object(l.useState)([])),J=Object(o.a)(V,2),Q=(J[0],J[1]),q=Object(l.useState)(!1),U=Object(o.a)(q,2),Z=U[0],$=U[1],ee=(Object(j.g)(),Object(l.useState)(!1)),te=Object(o.a)(ee,2),ae=te[0],ne=te[1];Object(l.useEffect)((function(){Q([])}),[t]);var ie=Object(W.a)().user;return d.a.createElement(_.a,{className:g.root},d.a.createElement(y.a,{className:g.container},d.a.createElement(x.a,{stickyHeader:!0,"aria-label":"sticky table"},d.a.createElement(k.a,null,d.a.createElement(C.a,null,H.map((function(e){return d.a.createElement(S.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:O.a.headerTable,color:"white"}},e.label)})),d.a.createElement(S.a,{style:{width:210,textAlign:"center",backgroundColor:O.a.headerTable,color:"white"}},"H\xe0nh \u0111\u1ed9ng"))),d.a.createElement(T.a,{className:g.columnTable},t.map((function(e){return d.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},H.map((function(t){var a=e[t.id];return d.a.createElement(S.a,{key:t.id,align:t.align,style:{textAlign:"index"===t.id||"fee"===t.id||"lo_number"===t.id?"center":"string"==typeof a?"left":"right",fontWeight:"price_nop"==t.id||"price_transfer"==t.id||"price_rut"==t.id?"bold":"normal",color:"status_fee_name"!=t.id?"#000":"\u0110\xe3 thanh to\xe1n"==a?"#08ad6c":"#Fb9736"}},t.isMonney?Object(E.j)(a):a)})),d.a.createElement(S.a,{className:g.action},Object(E.b)(ie,"/transaction/pay")&&2==e.status_fee?d.a.createElement(w.a,{title:"Thanh to\xe1n"},d.a.createElement(D.a,{onClick:function(){F(Object(n.a)({type:"PAY",title:"X\xe1c nh\u1eadn thanh to\xe1n ph\xed",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn kh\xe1ch h\xe0ng \u0111\xe3 thanh to\xe1n ".concat(Object(E.j)(e.price_fee)," \u0111 hay kh\xf4ng?")},e)),ne(!0)},className:g.button,"aria-label":"Delete"},d.a.createElement(I.a,{color:"primary"},"task_alt"))):null,Object(E.b)(ie,"/transaction/update")&&3==e.status_fee?d.a.createElement(w.a,{title:"Thao t\xe1c l\u1ea1i"},d.a.createElement(D.a,{onClick:function(){F(Object(n.a)({type:"ROLLBACK",title:"X\xe1c nh\u1eadn x\u1eed l\xfd l\u1ea1i giao d\u1ecbch",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\u1ed1n x\u1eed l\xfd l\u1ea1i giao d\u1ecbch ".concat(Object(E.j)(e.price_fee)," \u0111 hay kh\xf4ng?")},e)),ne(!0)},className:g.button,"aria-label":"Delete"},d.a.createElement(I.a,{style:{color:"#Fb9736"}},"restore"))):null,Object(E.b)(ie,"/transaction/create")&&2==e.status_fee?d.a.createElement(w.a,{title:"Nh\xe2n b\u1ea3n giao d\u1ecbch"},d.a.createElement(D.a,{onClick:function(){p(e)},className:g.button,"aria-label":"edit"},d.a.createElement(I.a,{style:{color:"#Fb9736"}},"content_copy"))):null,Object(E.b)(ie,"/transaction/update")&&2==e.status_fee?d.a.createElement(w.a,{title:"C\u1eadp nh\u1eadt"},d.a.createElement(D.a,{onClick:function(){$(!0),F(e)},className:g.button,"aria-label":"edit"},d.a.createElement(I.a,{style:{color:"#008ae6"}},"edit"))):null,Object(E.b)(ie,"/transaction/delete")&&2==e.status_fee?d.a.createElement(w.a,{title:"Xo\xe1"},d.a.createElement(D.a,{onClick:function(){F(Object(n.a)({type:"DELETE",title:"Xo\xe1 giao d\u1ecbch",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a giao d\u1ecbch ".concat(e.customer_name,"-").concat(Object(E.j)(e.price_rut)," hay kh\xf4ng?")},e)),ne(!0)},className:g.button,"aria-label":"Delete"},d.a.createElement(I.a,{color:"error"},"delete"))):null))}))))),d.a.createElement(L.a,{data:{title:null===B||void 0===B?void 0:B.title,content:null===B||void 0===B?void 0:B.content},open:ae,handleClose:function(){return ne(!1)},onAgree:function(){"PAY"==B.type?h(B):"ROLLBACK"==B.type?b(null===B||void 0===B?void 0:B.id):a(null===B||void 0===B?void 0:B.id),ne(!1)}}),d.a.createElement(M.a,{open:Z,setOpen:$,data:B,reloadData:u}),d.a.createElement(m.a,{xs:12,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",className:g.tableFooter},d.a.createElement(m.a,{xs:6,item:!0}),d.a.createElement(m.a,{xs:6,item:!0},d.a.createElement(N.a,{component:"div",page:r,count:s,rowsPerPage:f,rowsPerPageOptions:[],onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){c(e.target.value)}}))))})),F=a(1453),X=a(1454),Y=a(1556),K=Object(u.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:O.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:O.a.main}},formControl:{minWidth:200},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(s.a)(t,"textTransform","capitalize"),Object(s.a)(t,"background","#4caf50 !important"),Object(s.a)(t,"color","#fff"),t),search:{minWidth:50},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var G=function(e){Object(j.g)();var t=e.data,a=e.updateItem,n=e.removeItem,i=e.setTxtSearch,c=e.changeActive,r=e.setChangeActive,o=e.handeChangeActive,s=e.setPageIndex,u=e.pageIndex,O=e.totalRecords,_=(e.setActiveSeleted,e.activeSelected,e.permissions),y=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),x=e.onCreateLink,k=e.rootData,C=e.reloadData,S=e.startDate,T=e.changeDateRange,w=e.household,D=e.setHousehold,I=e.listHousehold,N=e.method,L=e.setMethod,A=e.listMethod,P=e.payItem,R=e.status,z=e.setStatus,M=e.rollbackTrans,H=e.pageSize,G=e.duplicateTransaction,V=e.staff,J=e.setStaff,Q=e.listStaff,q=e.category,U=e.setCategory,Z=e.listCategory,$=e.lotNumber,ee=e.setLotNumber,te=K(),ae=Object(W.a)().user;return d.a.createElement(l.Fragment,null,d.a.createElement("div",{className:"m-sm-30"},d.a.createElement("div",{className:"mb-sm-30"},d.a.createElement(v.a,{routeSegments:[{name:"Kh\xe1ch l\u1ebb",path:"/transaction"}]})),d.a.createElement(m.a,{container:!0,spacing:3},d.a.createElement(m.a,{item:!0,xs:12,container:!0,justifyContent:"space-between",alignItems:"center",spacing:3},d.a.createElement(m.a,{style:{padding:10},justify:"space-between",alignItems:"center",container:!0,spacing:3},d.a.createElement(m.a,{item:!0,container:!0,spacing:2,lg:12,md:12,sm:12,xs:12},d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4,style:{display:"flex"}},d.a.createElement(h.a,{id:"outlined-basic",variant:"outlined",placeholder:"T\u1eeb kho\xe1 ...",fullWidth:!0,onChange:function(e){return i(e.target.value)},className:te.search}),d.a.createElement("div",{style:{width:10}}),d.a.createElement(h.a,{id:"outlined-basic",variant:"outlined",fullWidth:!0,value:$,placeholder:"S\u1ed1 l\xf4...",onChange:function(e){return ee(e.target.value)},className:te.search})),d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4},d.a.createElement(Y.a,{id:"combo-box-demo",options:Z,value:q,native:!0,onChange:function(e,t){t?U(null===t||void 0===t?void 0:t.id):U()},style:{height:40},getOptionLabel:function(e){return e.name},renderInput:function(e){return d.a.createElement(h.a,Object.assign({style:{height:40}},e,{label:"Danh m\u1ee5c",variant:"outlined"}))}})),d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4},d.a.createElement(b.a,{variant:"outlined",className:te.formControl,fullWidth:!0},V?"":d.a.createElement(f.a,{htmlFor:"outlined-age-native-simple"},"Nh\xe2n vi\xean"),d.a.createElement(p.a,{fullWidth:!0,native:!0,label:"Nh\xe2n vi\xean",value:V,onChange:function(e){return J(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},d.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),Q.map((function(e){return d.a.createElement("option",{value:e.id},e.fullname)}))))),d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4},d.a.createElement(Y.a,{id:"combo-box-demo",options:I,value:w,native:!0,onChange:function(e,t){t?D(null===t||void 0===t?void 0:t.id):D()},style:{height:40},getOptionLabel:function(e){return e.name},renderInput:function(e){return d.a.createElement(h.a,Object.assign({style:{height:40}},e,{label:"M\xe1y Pos",variant:"outlined"}))}})),d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4},d.a.createElement(b.a,{variant:"outlined",className:te.formControl,fullWidth:!0},d.a.createElement(f.a,{htmlFor:"outlined-age-native-simple"},"H\xecnh th\u1ee9c"),d.a.createElement(p.a,{fullWidth:!0,native:!0,label:"H\xecnh th\u1ee9c",value:N,onChange:function(e){return L(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},d.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),A.map((function(e){return d.a.createElement("option",{value:e.code},e.name)}))))),d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4},d.a.createElement(b.a,{variant:"outlined",className:te.formControl,fullWidth:!0},d.a.createElement(f.a,{htmlFor:"outlined-age-native-simple"},"Tr\u1ea1ng th\xe1i"),d.a.createElement(p.a,{fullWidth:!0,native:!0,label:"Tr\u1ea1ng th\xe1i",value:R,onChange:function(e){return z(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},d.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),[{id:2,name:"Ch\u01b0a thanh to\xe1n"},{id:3,name:"\u0110\xe3 thanh to\xe1n"}].map((function(e){return d.a.createElement("option",{value:e.id},e.name)}))))),d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4},d.a.createElement(F.a,{date:S,changeDateRange:T})),d.a.createElement(m.a,{item:!0,lg:3,md:3,sm:4,xs:4},Object(E.b)(ae,"/transaction/create")?d.a.createElement(X.a,{reloadData:C}):null)))),d.a.createElement(m.a,{xs:12,container:!0,item:!0},d.a.createElement(m.a,{xs:6,item:!0},d.a.createElement(g.a,{variant:"h6"},"T\u1ed5ng ti\u1ec1n n\u1ed9p:"," ",Object(E.j)(null===k||void 0===k?void 0:k.price_nop,!0)," \u0111")),d.a.createElement(m.a,{xs:6,item:!0},d.a.createElement(g.a,{variant:"h6"},"T\u1ed5ng s\u1ed1 ti\u1ec1n t\xe0i kho\u1ea3n chuy\u1ec3n \u0111i:"," ",Object(E.j)(null===k||void 0===k?void 0:k.total_price_transfer,!0)," ","\u0111")),d.a.createElement(m.a,{xs:6,item:!0},d.a.createElement(g.a,{variant:"h6"},"T\u1ed5ng s\u1ed1 ti\u1ec1n qu\u1eb9t:"," ",Object(E.j)(null===k||void 0===k?void 0:k.price_rut,!0)," \u0111")),d.a.createElement(m.a,{xs:6,item:!0},d.a.createElement(g.a,{variant:"h6"},"T\u1ed5ng ti\u1ec1n Chuy\u1ec3n kho\u1ea3n l\u1ea1i:"," ",Object(E.j)(null===k||void 0===k?void 0:k.price_transfer,!0)," \u0111")),d.a.createElement(m.a,{xs:6,item:!0},d.a.createElement(g.a,{variant:"h6"},"T\u1ed5ng ph\xed thanh to\xe1n:"," ",Object(E.j)(null===k||void 0===k?void 0:k.total_fee_paid,!0),"\u0111")),d.a.createElement(m.a,{xs:6,item:!0},d.a.createElement(g.a,{variant:"h6"},"T\u1ed5ng ti\u1ec1n ch\u01b0a thanh to\xe1n:"," ",Object(E.j)(null===k||void 0===k?void 0:k.not_price_transfer,!0),"\u0111"))),d.a.createElement(m.a,{xs:12,item:!0},d.a.createElement(B,{data:t,changeActive:c,setChangeActive:r,handeChangeActive:o,updateItem:a,removeItem:n,pageIndex:u,setPageIndex:s,totalRecords:O,permissions:_,paymentGateVPBank:y,onCreateLink:x,reloadData:C,payItem:P,rollbackTrans:M,pageSize:H,duplicateTransaction:G})))))},V=a(1376),J=a(1389),Q=a(1381),q=a(1385),U=(a(1386),a(620));t.default=Object(A.b)((function(e){return{}}),{showLoading:Q.b,hideLoading:Q.a})((function(e){var t=Object(j.h)(),a=Object(l.useState)(""),i=Object(o.a)(a,2),s=i[0],u=i[1],m=Object(l.useState)(null),h=Object(o.a)(m,2),b=h[0],f=h[1],p=Object(l.useState)(1),g=Object(o.a)(p,2),v=g[0],O=g[1],_=Object(V.a)().t,y=Object(l.useState)(0),x=Object(o.a)(y,2),k=x[0],C=x[1],S=Object(l.useState)(50),T=Object(o.a)(S,1)[0],w=Object(l.useState)(0),D=Object(o.a)(w,2),I=D[0],N=D[1],L=Object(l.useState)({}),W=Object(o.a)(L,2),A=W[0],R=W[1],M=Object(l.useState)(new Date),H=Object(o.a)(M,2),B=H[0],F=H[1],X=Object(l.useState)(new Date),Y=Object(o.a)(X,2),K=Y[0],Q=Y[1],Z=Object(q.a)(s,1e3),$=Object(l.useState)(),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=Object(l.useState)([]),ie=Object(o.a)(ne,2),ce=ie[0],re=ie[1],oe=Object(l.useState)(),le=Object(o.a)(oe,2),de=le[0],se=le[1],ue=Object(l.useState)([{id:1,name:"\u0110\xe1o h\u1ea1n",code:"DAO_HAN"},{id:2,name:"R\xfat ti\u1ec1n m\u1eb7t",code:"RUT_TIEN_MAT"},{id:3,name:"Online",code:"ONLINE"},{id:4,name:"QR Code",code:"QR_CODE"}]),me=Object(o.a)(ue,2),he=me[0],be=(me[1],Object(l.useState)("")),fe=Object(o.a)(be,2),pe=fe[0],ge=fe[1],ve=Object(q.a)(pe,1e3),je=Object(l.useState)(),Oe=Object(o.a)(je,2),Ee=Oe[0],_e=Oe[1],ye=Object(l.useState)([]),xe=Object(o.a)(ye,2),ke=xe[0],Ce=xe[1],Se=Object(l.useState)(),Te=Object(o.a)(Se,2),we=Te[0],De=Te[1],Ie=Object(l.useState)([]),Ne=Object(o.a)(Ie,2),Le=Ne[0],We=Ne[1],Ae=Object(l.useState)(null===t||void 0===t?void 0:t.staff_id),Pe=Object(o.a)(Ae,2),Re=Pe[0],ze=Pe[1],Me=Object(j.g)(),He=Object(l.useState)([]),Be=Object(o.a)(He,2),Fe=Be[0],Xe=Be[1];Object(l.useEffect)((function(){Ke()}),[]),Object(l.useEffect)((function(){t.staff_id&&setTimeout((function(){ze(t.staff_id)}),1e3)}),[t.staff_id]),Object(l.useEffect)((function(){Ge(!1)}),[k]),Object(l.useEffect)((function(){Ge(!0)}),[Z,b,K,te,de,Ee,Re,we,ve]);var Ye=function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.n)({});case 2:return 200==(t=e.sent).data.code&&t.data.data&&(a=t.data.data.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{name:"".concat(null===e||void 0===e?void 0:e.bank_code," - ").concat(null===e||void 0===e?void 0:e.name)})})),re(a)),e.next=6,Object(U.o)({});case 6:return 200==(i=e.sent).data.code&&i.data.data&&We(i.data.data),e.next=10,Object(U.i)({});case 10:200==(r=e.sent).data.code&&r.data.data&&Ce(r.data.data);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var t=Object(r.a)(c.a.mark((function t(a){var i,r,o,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return e.showLoading(),C(0),t.next=5,Object(J.u)({page_index:1,page_size:T,keyword:Z,date_from:B?Object(E.i)(B):null,date_to:K?Object(E.i)(K):null,pos_id:te||null,method:de||null,status_fee:Ee||null,category_id:we||null,created_by:Re||null,lo_number:ve?parseInt(ve):null});case 5:i=t.sent,e.hideLoading(),t.next=12;break;case 9:return t.next=11,Object(J.u)({page_index:k+1,page_size:T,keyword:Z,date_from:B?Object(E.i)(B):null,date_to:K?Object(E.i)(K):null,pos_id:te||null,method:de||null,status_fee:Ee||null,category_id:we||null,created_by:Re||null,lo_number:ve?parseInt(ve):null});case 11:i=t.sent;case 12:if(200!=i.data.code||!i.data.data){t.next=19;break}o=null===(r=i.data.data)||void 0===r?void 0:r.data.map((function(e,t){var a,i,c,r;return Object(n.a)(Object(n.a)({},e),{},{index:t+1+k*T,category:null===e||void 0===e||null===(a=e.category)||void 0===a?void 0:a.name,pos:(null===e||void 0===e?void 0:e.pos)?"".concat(null===e||void 0===e||null===(i=e.pos)||void 0===i?void 0:i.bank_code,"-").concat(null===e||void 0===e||null===(c=e.pos)||void 0===c?void 0:c.name):"",status_fee_name:(r=null===e||void 0===e?void 0:e.status_fee,3==r?"\u0110\xe3 thanh to\xe1n":"Ch\u01b0a thanh to\xe1n")})})),Xe(o),N(i.data.data.total_elements),R(i.data.data.total),t.next=27;break;case 19:if(401!=i.data.code){t.next=26;break}return t.next=22,localStorage.removeItem(z.a.API_TOKEN);case 22:setTimeout((function(){Me.push("/")}),1e3),P.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=27;break;case 26:P.c.error(null===(l=i.data)||void 0===l?void 0:l.error,{theme:"colored"});case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ve=function(){var t=Object(r.a)(c.a.mark((function t(a){var n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(J.j)(a);case 3:n=t.sent,e.hideLoading(),200==n.data.code?(Ge(),P.c.success("Xo\xe1 giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"})):P.c.error(null===(i=n.data)||void 0===i?void 0:i.error,{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Je=function(){var t=Object(r.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return e.showLoading(),t.next=4,Object(J.y)({id:a.id,fee_paid:a.total_fee});case 4:n=t.sent,e.hideLoading(),200==n.data.code?(Ge(),P.c.success("X\xe1c nh\u1eadn thanh to\xe1n giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"})):P.c.error("X\xe1c nh\u1eadn thanh to\xe1n giao d\u1ecbch th\u1ea5t b\u1ea1i!",{theme:"colored"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Qe=function(){var t=Object(r.a)(c.a.mark((function t(a){var n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(J.z)(a);case 3:n=t.sent,e.hideLoading(),200==n.data.code?(Ge(),P.c.success("X\u1eed l\xfd l\u1ea1i giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"})):P.c.error(null===(i=n.data)||void 0===i?void 0:i.error,{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),qe=function(){var t=Object(r.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),e.showLoading(),t.next=4,Object(J.g)({bank_card:null===a||void 0===a?void 0:a.bank_card,method:null===a||void 0===a?void 0:a.method,category_id:null===a||void 0===a?void 0:a.category_id,pos_id:null===a||void 0===a?void 0:a.pos_id,fee:null===a||void 0===a?void 0:a.fee,time_payment:Object(E.i)(new Date),customer_name:null===a||void 0===a?void 0:a.customer_name,price_nop:null===a||void 0===a?void 0:a.price_nop,price_rut:null===a||void 0===a?void 0:a.price_rut,price_fee:null===a||void 0===a?void 0:a.price_fee,price_transfer:null===a||void 0===a?void 0:a.price_transfer,profit:null===a||void 0===a?void 0:a.profit,price_repair:null===a||void 0===a?void 0:a.price_repair,lo_number:null===a||void 0===a?void 0:a.lo_number,note:null===a||void 0===a?void 0:a.note});case 4:n=t.sent,e.hideLoading(),200==n.data.code?(Ge(!0),P.c.success("Nh\xe2n b\u1ea3n d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"})):P.c.error(_(n.data.error),{theme:"colored"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return d.a.createElement(G,{data:Fe,removeItem:Ve,setTxtSearch:u,setActiveSeleted:f,pageIndex:k,changeActive:v,setChangeActive:O,setPageIndex:C,activeSelected:b,handeChangeActive:Ye,totalRecords:I,rootData:A,reloadData:function(){Ge(!0)},changeDateRange:function(e,t){F(e),Q(t)},startDate:B,household:te,setHousehold:ae,listHousehold:ce,method:de,setMethod:se,listMethod:he,payItem:Je,status:Ee,setStatus:_e,rollbackTrans:Qe,pageSize:T,duplicateTransaction:qe,staff:Re,setStaff:ze,listStaff:Le,category:we,setCategory:De,listCategory:ke,lotNumber:pe,setLotNumber:ge})}))}}]);