(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[66],{1545:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a(3),c=a.n(i),r=a(11),l=a(25),o=a(0),s=a.n(o),d=a(14),u=a(1318),m=a(1364),h=a(590),b=a(1359),g=a(1379),p=a(1371),f=a(374),v=a(120),j=a(47),O=a(1382),E=a(279),x=a(278),y=a(1440),k=a(1441),_=a(1442),C=a(1443),S=a(1444),w=a(1445),T=a(1562),D=a(1307),A=a(1351),I=a(1563),P=a(1385),W=a(146),L=(a(1386),a(145)),N=a(58),R=a(1383),M=a(41),z=a(1437),H=[{id:"index",label:"STT",align:"center",minWidth:50},{id:"category",label:"Danh m\u1ee5c",align:"left",minWidth:120},{id:"method_name",label:"H\xecnh th\u1ee9c",align:"left",minWidth:100},{id:"customer_name",label:"T\xean kh\xe1ch",align:"left",minWidth:140},{id:"bank_card",label:"Th\u1ebb",align:"left",minWidth:120},{id:"pos",label:"M\xe1y",align:"left",minWidth:120},{id:"lo_number",label:"L\xf4",align:"left",minWidth:50},{id:"price_nop",label:"S\u1ed1 ti\u1ec1n n\u1ed9p",align:"left",minWidth:90,isMonney:!0},{id:"price_rut",label:"S\u1ed1 ti\u1ec1n r\xfat",align:"left",minWidth:90,isMonney:!0},{id:"fee",label:"Ph\xed (%)",align:"left",minWidth:90,isMonney:!0},{id:"price_fee",label:"Th\xe0nh ti\u1ec1n ph\xed",align:"left",minWidth:90,isMonney:!0},{id:"price_transfer",label:"Chuy\u1ec3n kho\u1ea3n l\u1ea1i",align:"left",minWidth:90,isMonney:!0},{id:"price_repair",label:"Ck b\xf9",align:"left",minWidth:90,isMonney:!0},{id:"profit",label:"L\u1ee3i nhu\u1eadn",align:"left",minWidth:90,isMonney:!0},{id:"status_fee_name",label:"Tr\u1ea1ng th\xe1i",align:"left",minWidth:90}];var B=Object(L.b)((function(e){return{}}),{})((function(e){var t=e.data,a=(e.handeChangeActive,e.removeItem),i=(e.changeActive,e.setChangeActive,e.setPageIndex),c=e.setPageSize,r=e.pageIndex,d=e.totalRecords,u=(e.permissions,e.paymentGateVPBank,e.onCreateLink,e.reloadData),h=e.payItem,b=e.rollbackTrans,g=e.pageSize,p=Object(R.a)(),f=Object(o.useState)(),v=Object(l.a)(f,2),L=(v[0],v[1],Object(o.useState)()),N=Object(l.a)(L,2),M=N[0],B=N[1],X=Object(o.useState)(!1),F=Object(l.a)(X,2),Y=(F[0],F[1],Object(o.useState)(!1)),K=Object(l.a)(Y,2),G=(K[0],K[1],Object(o.useState)([])),V=Object(l.a)(G,2),J=(V[0],V[1]),U=Object(o.useState)(!1),q=Object(l.a)(U,2),Q=q[0],Z=q[1],$=(Object(j.g)(),Object(o.useState)(!1)),ee=Object(l.a)($,2),te=ee[0],ae=ee[1];Object(o.useEffect)((function(){J([])}),[t]);var ne=Object(W.a)().user;return s.a.createElement(x.a,{className:p.root},s.a.createElement(y.a,{className:p.container},s.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},s.a.createElement(_.a,null,s.a.createElement(C.a,null,H.map((function(e){return s.a.createElement(S.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:O.a.headerTable,color:"white"}},e.label)})),s.a.createElement(S.a,{style:{width:160,textAlign:"center",backgroundColor:O.a.headerTable,color:"white"}},"H\xe0nh \u0111\u1ed9ng"))),s.a.createElement(w.a,{className:p.columnTable},t.map((function(e){return s.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},H.map((function(t){var a=e[t.id];return s.a.createElement(S.a,{key:t.id,align:t.align,style:{textAlign:"index"===t.id||"fee"===t.id||"lo_number"===t.id?"center":"string"==typeof a?"left":"right",color:"status_fee_name"!=t.id?"#000":"\u0110\xe3 thanh to\xe1n"==a?"#08ad6c":"#Fb9736"}},t.isMonney?Object(E.j)(a):a)})),s.a.createElement(S.a,{className:p.action},Object(E.b)(ne,"/household/delete")&&!e.status_fee?s.a.createElement(T.a,{title:"Thanh to\xe1n"},s.a.createElement(D.a,{onClick:function(){B(Object(n.a)({type:"PAY",title:"X\xe1c nh\u1eadn thanh to\xe1n ph\xed",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn kh\xe1ch h\xe0ng \u0111\xe3 thanh to\xe1n ".concat(Object(E.j)(e.price_fee)," \u0111 hay kh\xf4ng?")},e)),ae(!0)},className:p.button,"aria-label":"Delete"},s.a.createElement(A.a,{color:"primary"},"task_alt"))):null,Object(E.b)(ne,"/household/delete")&&e.status_fee&&"DAO_HAN"==(null===e||void 0===e?void 0:e.method)?s.a.createElement(T.a,{title:"Thao t\xe1c l\u1ea1i"},s.a.createElement(D.a,{onClick:function(){B(Object(n.a)({type:"ROLLBACK",title:"X\xe1c nh\u1eadn x\u1eed l\xfd l\u1ea1i giao d\u1ecbch",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\u1ed1n x\u1eed l\xfd l\u1ea1i giao d\u1ecbch ".concat(Object(E.j)(e.price_fee)," \u0111 hay kh\xf4ng?")},e)),ae(!0)},className:p.button,"aria-label":"Delete"},s.a.createElement(A.a,{style:{color:"#Fb9736"}},"restore"))):null,Object(E.b)(ne,"/household/update")&&!e.status_fee?s.a.createElement(T.a,{title:"C\u1eadp nh\u1eadt"},s.a.createElement(D.a,{onClick:function(){Z(!0),B(e)},className:p.button,"aria-label":"edit"},s.a.createElement(A.a,{style:{color:"#008ae6"}},"edit"))):null,Object(E.b)(ne,"/household/delete")&&!e.status_fee?s.a.createElement(T.a,{title:"Xo\xe1"},s.a.createElement(D.a,{onClick:function(){B(Object(n.a)({type:"DELETE",title:"Xo\xe1 giao d\u1ecbch",content:" Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a giao d\u1ecbch ".concat(e.customer_name,"-").concat(Object(E.j)(e.price_rut)," hay kh\xf4ng?")},e)),ae(!0)},className:p.button,"aria-label":"Delete"},s.a.createElement(A.a,{color:"error"},"delete"))):null))}))))),s.a.createElement(P.a,{data:{title:null===M||void 0===M?void 0:M.title,content:null===M||void 0===M?void 0:M.content},open:te,handleClose:function(){return ae(!1)},onAgree:function(){"PAY"==M.type?h(M):"ROLLBACK"==M.type?b(null===M||void 0===M?void 0:M.id):a(null===M||void 0===M?void 0:M.id),ae(!1)}}),s.a.createElement(z.a,{open:Q,setOpen:Z,data:M,reloadData:u}),s.a.createElement(m.a,{xs:12,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",className:p.tableFooter},s.a.createElement(m.a,{xs:6,item:!0}),s.a.createElement(m.a,{xs:6,item:!0},s.a.createElement(I.a,{component:"div",page:r,count:d,rowsPerPage:g,rowsPerPageOptions:[],onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){c(e.target.value)}}))))})),X=a(1353),F=a(1361),Y=a(378),K=Object(u.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function G(e){K();var t=s.a.useState(null),a=Object(l.a)(t,2),n=a[0],i=a[1],c=Object(o.useState)({startDate:new Date,endDate:new Date}),r=Object(l.a)(c,2),d=r[0],u=r[1],m=Boolean(n),h=m?"simple-popover":void 0;return s.a.createElement("div",null,s.a.createElement(F.a,{style:{padding:10,height:41,width:200},variant:"outlined",onClick:function(e){i(e.currentTarget)}},e.date?s.a.createElement("p",null,Object(E.e)(null===d||void 0===d?void 0:d.startDate)," -"," ",Object(E.e)(null===d||void 0===d?void 0:d.endDate)," "):s.a.createElement("p",null,"dd/mm/YY-dd/mm/YY")),s.a.createElement(X.a,{id:h,open:m,anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},s.a.createElement(Y.DateRangePicker,{ranges:[d],onChange:function(e){u(e.range1)}}),s.a.createElement("div",{style:{justifyContent:"right",alignItems:"flex-end",display:"flex",paddingRight:10,paddingBottom:15}},s.a.createElement(F.a,{style:{width:100,height:30,marginRight:20},onClick:function(){return e.changeDateRange(null,null),void i(null)},variant:"contained"},s.a.createElement(f.a,{variant:"caption"},"Hu\u1ef7")),s.a.createElement(F.a,{style:{width:100,height:30},onClick:function(){return e.changeDateRange(d.startDate,d.endDate),void i(null)},variant:"contained",color:"primary"},s.a.createElement(f.a,{variant:"caption"},"\xc1p d\u1ee5ng")))))}var V=a(1438),J=Object(u.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:O.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:O.a.main}},formControl:{minWidth:200},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(d.a)(t,"textTransform","capitalize"),Object(d.a)(t,"background","#4caf50 !important"),Object(d.a)(t,"color","#fff"),t),search:{minWidth:200},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var U=function(e){Object(j.g)();var t=e.data,a=e.updateItem,n=e.removeItem,i=e.setTxtSearch,c=e.changeActive,r=e.setChangeActive,l=e.handeChangeActive,d=e.setPageIndex,u=e.pageIndex,O=e.totalRecords,x=(e.setActiveSeleted,e.activeSelected,e.permissions),y=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),k=e.onCreateLink,_=e.rootData,C=e.reloadData,S=e.startDate,w=e.changeDateRange,T=e.household,D=e.setHousehold,A=e.listHousehold,I=e.method,P=e.setMethod,L=e.listMethod,N=e.payItem,R=e.status,M=e.setStatus,z=e.rollbackTrans,H=e.pageSize,X=J(),F=Object(W.a)().user;return s.a.createElement(o.Fragment,null,s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(v.a,{routeSegments:[{name:"Kh\xe1ch l\u1ebb",path:"/transaction"}]})),s.a.createElement(m.a,{container:!0,spacing:3},s.a.createElement(m.a,{item:!0,xs:12,container:!0,justifyContent:"space-between",alignItems:"center",spacing:3},s.a.createElement(m.a,{style:{padding:10},justify:"space-between",alignItems:"center",container:!0,spacing:3},s.a.createElement(m.a,{item:!0,container:!0,spacing:2,lg:12,md:12,sm:12,xs:12},s.a.createElement(m.a,{item:!0,lg:2,md:2,sm:4,xs:4},s.a.createElement(h.a,{id:"outlined-basic",variant:"outlined",placeholder:"t\xecm ki\u1ebfm ...",fullWidth:!0,onChange:function(e){return i(e.target.value)},className:X.search})),s.a.createElement(m.a,{item:!0,lg:2,md:2,sm:4,xs:4},s.a.createElement(b.a,{variant:"outlined",className:X.formControl,fullWidth:!0},s.a.createElement(g.a,{htmlFor:"outlined-age-native-simple"},"M\xe1y Pos"),s.a.createElement(p.a,{fullWidth:!0,native:!0,label:"M\xe1y Pos",value:T,onChange:function(e){return D(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},s.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),A.map((function(e){return s.a.createElement("option",{value:e.id},e.name)}))))),s.a.createElement(m.a,{item:!0,lg:2,md:2,sm:4,xs:4},s.a.createElement(b.a,{variant:"outlined",className:X.formControl,fullWidth:!0},s.a.createElement(g.a,{htmlFor:"outlined-age-native-simple"},"H\xecnh th\u1ee9c"),s.a.createElement(p.a,{fullWidth:!0,native:!0,label:"H\xecnh th\u1ee9c",value:I,onChange:function(e){return P(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},s.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),L.map((function(e){return s.a.createElement("option",{value:e.code},e.name)}))))),s.a.createElement(m.a,{item:!0,lg:2,md:2,sm:4,xs:4},s.a.createElement(b.a,{variant:"outlined",className:X.formControl,fullWidth:!0},s.a.createElement(g.a,{htmlFor:"outlined-age-native-simple"},"Tr\u1ea1ng th\xe1i"),s.a.createElement(p.a,{fullWidth:!0,native:!0,label:"Tr\u1ea1ng th\xe1i",value:R,onChange:function(e){return M(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},s.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),[{id:4,name:"Nh\xe1p"},{id:2,name:"Ch\u01b0a thanh to\xe1n"},{id:3,name:"\u0110\xe3 thanh to\xe1n"}].map((function(e){return s.a.createElement("option",{value:e.id},e.name)}))))),s.a.createElement(m.a,{item:!0,lg:2,md:2,sm:4,xs:4},s.a.createElement(G,{date:S,changeDateRange:w})),s.a.createElement(m.a,{item:!0,lg:2,md:2,sm:4,xs:4},Object(E.b)(F,"/transaction/create")?s.a.createElement(V.a,{reloadData:C}):null)))),s.a.createElement(m.a,{xs:12,container:!0,item:!0},s.a.createElement(m.a,{xs:6,item:!0},s.a.createElement(f.a,{variant:"subtitle2"},"T\u1ed5ng ti\u1ec1n n\u1ed9p:"," ",Object(E.j)(null===_||void 0===_?void 0:_.price_nop,!0)," \u0111")),s.a.createElement(m.a,{xs:6,item:!0},s.a.createElement(f.a,{variant:"subtitle2"},"S\u1ed1 ti\u1ec1n r\xfat:"," ",Object(E.j)(null===_||void 0===_?void 0:_.price_rut,!0)," \u0111")),s.a.createElement(m.a,{xs:6,item:!0},s.a.createElement(f.a,{variant:"subtitle2"},"T\u1ed5ng ti\u1ec1n Chuy\u1ec3n kho\u1ea3n:"," ",Object(E.j)(null===_||void 0===_?void 0:_.price_transfer,!0)," \u0111")),s.a.createElement(m.a,{xs:6,item:!0},s.a.createElement(f.a,{variant:"subtitle2"},"L\u1ee3i nhu\u1eadn: ",Object(E.j)(null===_||void 0===_?void 0:_.profit,!0),"\u0111"))),s.a.createElement(m.a,{xs:12,item:!0},s.a.createElement(B,{data:t,changeActive:c,setChangeActive:r,handeChangeActive:l,updateItem:a,removeItem:n,pageIndex:u,setPageIndex:d,totalRecords:O,permissions:x,paymentGateVPBank:y,onCreateLink:k,reloadData:C,payItem:N,rollbackTrans:z,pageSize:H})))))},q=a(1388),Q=a(1381),Z=a(1384),$=(a(1387),a(620));t.default=Object(L.b)((function(e){return{}}),{showLoading:Q.b,hideLoading:Q.a})((function(e){var t=Object(o.useState)(""),a=Object(l.a)(t,2),i=a[0],d=a[1],u=Object(o.useState)(null),m=Object(l.a)(u,2),h=m[0],b=m[1],g=Object(o.useState)(1),p=Object(l.a)(g,2),f=p[0],v=p[1],O=Object(o.useState)(0),x=Object(l.a)(O,2),y=x[0],k=x[1],_=Object(o.useState)(50),C=Object(l.a)(_,1)[0],S=Object(o.useState)(0),w=Object(l.a)(S,2),T=w[0],D=w[1],A=Object(o.useState)({}),I=Object(l.a)(A,2),P=I[0],W=I[1],L=Object(o.useState)(new Date),R=Object(l.a)(L,2),z=R[0],H=R[1],B=Object(o.useState)(new Date),X=Object(l.a)(B,2),F=X[0],Y=X[1],K=Object(Z.a)(i,1e3),G=Object(o.useState)(),V=Object(l.a)(G,2),J=V[0],Q=V[1],ee=Object(o.useState)([]),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ie=Object(o.useState)(),ce=Object(l.a)(ie,2),re=ce[0],le=ce[1],oe=Object(o.useState)([{id:1,name:"\u0110\xe1o h\u1ea1n",code:"DAO_HAN"},{id:2,name:"R\xfat ti\u1ec1n m\u1eb7t",code:"RUT_TIEN_MAT"},{id:3,name:"Online",code:"ONLINE"}]),se=Object(l.a)(oe,2),de=se[0],ue=(se[1],Object(o.useState)()),me=Object(l.a)(ue,2),he=me[0],be=me[1],ge=Object(j.g)(),pe=Object(o.useState)([]),fe=Object(l.a)(pe,2),ve=fe[0],je=fe[1];Object(o.useEffect)((function(){Ee()}),[]),Object(o.useEffect)((function(){xe(!1)}),[y]),Object(o.useEffect)((function(){xe(!0)}),[K,h,F,J,re,he]);var Oe=function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.m)({});case 2:200==(t=e.sent).data.code&&t.data.data&&ne(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var t=Object(r.a)(c.a.mark((function t(a){var i,r,l,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return e.showLoading(),k(0),t.next=5,Object(q.u)({page_index:1,page_size:C,keyword:K,date_from:z?Object(E.i)(z):null,date_to:F?Object(E.i)(F):null,pos_id:J||null,method:re||null,status_fee:he||null});case 5:i=t.sent,e.hideLoading(),t.next=12;break;case 9:return t.next=11,Object(q.u)({page_index:y+1,page_size:C,keyword:K,date_from:z?Object(E.i)(z):null,date_to:F?Object(E.i)(F):null,pos_id:J||null,method:re||null,status_fee:he||null});case 11:i=t.sent;case 12:if(200!=i.data.code||!i.data.data){t.next=19;break}l=null===(r=i.data.data)||void 0===r?void 0:r.data.map((function(e,t){var a,i,c;return Object(n.a)(Object(n.a)({},e),{},{index:t+1+y*C,category:null===e||void 0===e||null===(a=e.category)||void 0===a?void 0:a.name,pos:"".concat(null===e||void 0===e||null===(i=e.pos)||void 0===i?void 0:i.name),status_fee_name:(c=null===e||void 0===e?void 0:e.status_fee,2==c?"Ch\u01b0a thanh to\xe1n":3==c?"\u0110\xe3 thanh to\xe1n":"Nh\xe1p")})})),je(l),D(i.data.data.total_elements),W(i.data.data.total),t.next=27;break;case 19:if(401!=i.data.code){t.next=26;break}return t.next=22,localStorage.removeItem(M.a.API_TOKEN);case 22:setTimeout((function(){ge.push("/")}),1e3),N.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=27;break;case 26:N.c.error(null===(o=i.data)||void 0===o?void 0:o.error,{theme:"colored"});case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ye=function(){var t=Object(r.a)(c.a.mark((function t(a){var n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(q.j)(a);case 3:n=t.sent,e.hideLoading(),200==n.data.code?(xe(),N.c.success("Xo\xe1 giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"})):N.c.error(null===(i=n.data)||void 0===i?void 0:i.error,{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ke=function(){var t=Object(r.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return e.showLoading(),t.next=4,Object(q.x)({id:a.id,fee_paid:a.price_fee});case 4:n=t.sent,e.hideLoading(),200==n.data.code?(xe(),N.c.success("X\xe1c nh\u1eadn thanh to\xe1n giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"})):N.c.error("X\xe1c nh\u1eadn thanh to\xe1n giao d\u1ecbch th\u1ea5t b\u1ea1i!",{theme:"colored"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_e=function(){var t=Object(r.a)(c.a.mark((function t(a){var n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(q.y)(a);case 3:n=t.sent,e.hideLoading(),200==n.data.code?(xe(),N.c.success("X\u1eed l\xfd l\u1ea1i giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"})):N.c.error(null===(i=n.data)||void 0===i?void 0:i.error,{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement(U,{data:ve,removeItem:ye,setTxtSearch:d,setActiveSeleted:b,pageIndex:y,changeActive:f,setChangeActive:v,setPageIndex:k,activeSelected:h,handeChangeActive:Oe,totalRecords:T,rootData:P,reloadData:function(){xe(!0)},changeDateRange:function(e,t){H(e),Y(t)},startDate:z,household:J,setHousehold:Q,listHousehold:ae,method:re,setMethod:le,listMethod:de,payItem:ke,status:he,setStatus:be,rollbackTrans:_e,pageSize:C})}))}}]);