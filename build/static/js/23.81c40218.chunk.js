(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[23],{1395:function(e,t,a){"use strict";var n=a(0),i=n.createContext();t.a=i},1410:function(e,t,a){"use strict";var n=a(0),i=n.createContext();t.a=i},1438:function(e,t,a){"use strict";var n=a(1),i=a(6),r=a(0),o=(a(5),a(4)),l=a(12),c=r.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,d=void 0===c?"div":c,s=Object(i.a)(e,["classes","className","component"]);return r.createElement(d,Object(n.a)({ref:t,className:Object(o.a)(a.root,l)},s))}));t.a=Object(l.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(c)},1439:function(e,t,a){"use strict";var n=a(6),i=a(1),r=a(0),o=(a(5),a(4)),l=a(12),c=a(1410),d=r.forwardRef((function(e,t){var a=e.classes,l=e.className,d=e.component,s=void 0===d?"table":d,u=e.padding,m=void 0===u?"default":u,g=e.size,p=void 0===g?"medium":g,b=e.stickyHeader,v=void 0!==b&&b,h=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),f=r.useMemo((function(){return{padding:m,size:p,stickyHeader:v}}),[m,p,v]);return r.createElement(c.a.Provider,{value:f},r.createElement(s,Object(i.a)({role:"table"===s?null:"table",ref:t,className:Object(o.a)(a.root,l,v&&a.stickyHeader)},h)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1440:function(e,t,a){"use strict";var n=a(1),i=a(6),r=a(0),o=(a(5),a(4)),l=a(12),c=a(1395),d={variant:"head"},s=r.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,u=void 0===s?"thead":s,m=Object(i.a)(e,["classes","className","component"]);return r.createElement(c.a.Provider,{value:d},r.createElement(u,Object(n.a)({className:Object(o.a)(a.root,l),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(s)},1441:function(e,t,a){"use strict";var n=a(1),i=a(6),r=a(0),o=(a(5),a(4)),l=a(12),c=a(1395),d=a(35),s=r.forwardRef((function(e,t){var a=e.classes,l=e.className,d=e.component,s=void 0===d?"tr":d,u=e.hover,m=void 0!==u&&u,g=e.selected,p=void 0!==g&&g,b=Object(i.a)(e,["classes","className","component","hover","selected"]),v=r.useContext(c.a);return r.createElement(s,Object(n.a)({ref:t,className:Object(o.a)(a.root,l,v&&{head:a.head,footer:a.footer}[v.variant],m&&a.hover,p&&a.selected),role:"tr"===s?null:"row"},b))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(s)},1442:function(e,t,a){"use strict";var n=a(6),i=a(1),r=a(0),o=(a(5),a(4)),l=a(12),c=a(18),d=a(35),s=a(1410),u=a(1395),m=r.forwardRef((function(e,t){var a,l,d=e.align,m=void 0===d?"inherit":d,g=e.classes,p=e.className,b=e.component,v=e.padding,h=e.scope,f=e.size,j=e.sortDirection,O=e.variant,y=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=r.useContext(s.a),E=r.useContext(u.a),_=E&&"head"===E.variant;b?(l=b,a=_?"columnheader":"cell"):l=_?"th":"td";var k=h;!k&&_&&(k="col");var w=v||(x&&x.padding?x.padding:"default"),C=f||(x&&x.size?x.size:"medium"),S=O||E&&E.variant,N=null;return j&&(N="asc"===j?"ascending":"descending"),r.createElement(l,Object(i.a)({ref:t,className:Object(o.a)(g.root,g[S],p,"inherit"!==m&&g["align".concat(Object(c.a)(m))],"default"!==w&&g["padding".concat(Object(c.a)(w))],"medium"!==C&&g["size".concat(Object(c.a)(C))],"head"===S&&x&&x.stickyHeader&&g.stickyHeader),"aria-sort":N,role:a,scope:k},y))}));t.a=Object(l.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(d.i)(Object(d.d)(e.palette.divider,1),.88):Object(d.a)(Object(d.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},1443:function(e,t,a){"use strict";var n=a(1),i=a(6),r=a(0),o=(a(5),a(4)),l=a(12),c=a(1395),d={variant:"body"},s=r.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,u=void 0===s?"tbody":s,m=Object(i.a)(e,["classes","className","component"]);return r.createElement(c.a.Provider,{value:d},r.createElement(u,Object(n.a)({className:Object(o.a)(a.root,l),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(s)},1453:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(25),i=a(0),r=a.n(i),o=a(1318),l=a(1353),c=a(374),d=a(1361),s=a(378),u=a(279),m=Object(o.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function g(e){m();var t=r.a.useState(null),a=Object(n.a)(t,2),o=a[0],g=a[1],p=Object(i.useState)({startDate:new Date,endDate:new Date}),b=Object(n.a)(p,2),v=b[0],h=b[1],f=Boolean(o),j=f?"simple-popover":void 0;return r.a.createElement("div",null,r.a.createElement(d.a,{style:{padding:10,height:41,width:200},variant:"outlined",onClick:function(e){g(e.currentTarget)}},e.date?r.a.createElement("p",null,Object(u.e)(null===v||void 0===v?void 0:v.startDate)," -"," ",Object(u.e)(null===v||void 0===v?void 0:v.endDate)," "):r.a.createElement("p",null,"dd/mm/YY-dd/mm/YY")),r.a.createElement(l.a,{id:j,open:f,anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(s.DateRangePicker,{ranges:[v],onChange:function(e){h(e.range1)}}),r.a.createElement("div",{style:{justifyContent:"right",alignItems:"flex-end",display:"flex",paddingRight:10,paddingBottom:15}},r.a.createElement(d.a,{style:{width:100,height:30,marginRight:20},onClick:function(){return e.changeDateRange(null,null),void g(null)},variant:"contained"},r.a.createElement(c.a,{variant:"caption"},"Hu\u1ef7")),r.a.createElement(d.a,{style:{width:100,height:30},onClick:function(){return e.changeDateRange(v.startDate,v.endDate),void g(null)},variant:"contained",color:"primary"},r.a.createElement(c.a,{variant:"caption"},"\xc1p d\u1ee5ng")))))}},1558:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),r=a(11),o=a(25),l=a(0),c=a.n(l),d=a(14),s=a(1318),u=a(1364),m=a(590),g=a(1361),p=a(1351),b=a(374),v=a(120),h=a(47),f=a(1382),j=a(279),O=a(278),y=a(1438),x=a(1439),E=a(1440),_=a(1441),k=a(1442),w=a(1443),C=a(1387),S=a(146),N=(a(1388),a(145)),T=a(58),D=a(1384),A=[{id:"index",label:"STT",align:"center",minWidth:50},{id:"name_pos",label:"M\xe1y Pos",align:"left",minWidth:220},{id:"time_end",label:"Th\u1eddi gian",align:"left",minWidth:120},{id:"lo_number",label:"L\xf4",align:"left",minWidth:80},{id:"total_price",label:"S\u1ed1 ti\u1ec1n qu\u1eb9t",align:"left",minWidth:120,isMonney:!0},{id:"fee_agent",label:"Ph\xed (%)",align:"left",minWidth:80},{id:"payment_agent",label:"Th\xe0nh ti\u1ec1n",align:"left",minWidth:120,isMonney:!0},{id:"total_payment",label:"S\u1ed1 ti\u1ec1n \u0111\xe3 chuy\u1ec3n kho\u1ea3n",align:"left",minWidth:120,isMonney:!0}];var R=Object(N.b)((function(e){return{}}),{})((function(e){var t=e.data,a=(e.handeChangeActive,e.removeItem),n=(e.changeActive,e.setChangeActive,e.setPageIndex,e.setPageSize,e.pageIndex,e.totalRecords,e.permissions,e.paymentGateVPBank,e.onCreateLink,e.onDoneAssgin,Object(D.a)()),i=Object(l.useState)(),r=Object(o.a)(i,2),d=(r[0],r[1],Object(l.useState)()),s=Object(o.a)(d,2),u=s[0],m=(s[1],c.a.useState(!1)),g=Object(o.a)(m,2),p=(g[0],g[1],c.a.useState(!1)),b=Object(o.a)(p,2),v=(b[0],b[1],Object(l.useState)([])),N=Object(o.a)(v,2),T=(N[0],N[1]),R=Object(l.useState)(),I=Object(o.a)(R,2),z=(I[0],I[1],Object(h.g)()),P=Object(l.useState)(!1),L=Object(o.a)(P,2),W=L[0],H=L[1];return Object(l.useEffect)((function(){T([])}),[t]),Object(S.a)().user,c.a.createElement(O.a,{className:n.root},c.a.createElement(y.a,{className:n.container},c.a.createElement(x.a,{stickyHeader:!0,"aria-label":"sticky table"},c.a.createElement(E.a,null,c.a.createElement(_.a,null,A.map((function(e){return c.a.createElement(k.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:f.a.headerTable,color:"white"}},e.label)})))),c.a.createElement(w.a,{className:n.columnTable},t.map((function(e){return c.a.createElement(_.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},A.map((function(t){var a=e[t.id];return c.a.createElement(k.a,{key:t.id,align:t.align,onClick:function(){"lo_number"==t.id?e.id_lot&&z.push({pathname:"/reciprocal/update",state:{id:e.id_lot,agent:null,household:null,source:"/agent-report"}}):"total_payment"==t.id&&e.id_transfer&&z.push({pathname:"/transfer/update",state:e.id_transfer})},style:{textAlign:"center",cursor:"lo_number"==t.id||"total_payment"==t.id?"pointer":"default",textDecorationLine:"lo_number"==t.id||"total_payment"==t.id?"underline":"none"}},t.isMonney?Object(j.j)(a):a)})))}))))),c.a.createElement(C.a,{data:{title:"Xo\xe1 Poss",content:"Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a Poss ".concat(null===u||void 0===u?void 0:u.name," hay kh\xf4ng?")},open:W,handleClose:function(){return H(!1)},onAgree:function(){a(null===u||void 0===u?void 0:u.id),H(!1)}}))})),I=a(1453),z=a(1556),P=a(8),L=a(1362),W=a(1366),H=a(1367),M=a(1400),V=a(1376),B=a(44),q=a(1401),K=a(620),Y=a(1381);var $=Object(N.b)((function(e){return{}}),{showLoading:Y.b,hideLoading:Y.a})((function(e){var t=e.open,a=e.setOpen,n=e.selected,s=e.reloadData,p=Object(l.useState)([]),b=Object(o.a)(p,2),v=b[0],h=b[1],f=Object(l.useState)({time_end:Object(j.i)(new Date)}),O=Object(o.a)(f,2),y=O[0],x=O[1],E=Object(l.useState)("123"),_=Object(o.a)(E,2),k=(_[0],_[1],Object(l.useState)([])),w=Object(o.a)(k,2),C=w[0],S=w[1],N=Object(V.a)().t;function D(){a(!1),x(Object(P.a)(Object(P.a)({},y),{},{pos_id:null,lo_number:""}))}Object(l.useEffect)((function(){var e;n&&x(Object(P.a)(Object(P.a)({},y),{},{agent_id:null===n||void 0===n||null===(e=n.agent)||void 0===e?void 0:e.id}))}),[n]),Object(l.useEffect)((function(){A()}),[]);var A=function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.n)({});case 2:return 200==(t=e.sent).data.code&&t.data.data&&(a=t.data.data.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{name:"".concat(null===e||void 0===e?void 0:e.bank_code," - ").concat(null===e||void 0===e?void 0:e.name)})})),S(a)),e.next=6,Object(K.c)({});case 6:200==(n=e.sent).data.code&&n.data.data&&h(n.data.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){e.persist(),"total_price"===e.target.name?null!==e.target.value&&x(Object(P.a)(Object(P.a)({},y),{},Object(d.a)({},e.target.name,e.target.value.split(".").join("")))):x(Object(P.a)(Object(P.a)({},y),{},Object(d.a)({},e.target.name,e.target.value)))},I=function(){var t=Object(r.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(j.l)(y),e.showLoading(),t.next=4,Object(q.a)(Object(P.a)(Object(P.a)({},n),{},{lo_number:parseInt(null===n||void 0===n?void 0:n.lo_number),total_price:parseInt(null===n||void 0===n?void 0:n.total_price)}));case 4:r=t.sent,e.hideLoading(),200==r.data.code?(D(),T.c.success("T\u1ea1o giao d\u1ecbch \u0111\u1ed1i \u1ee9ng th\xe0nh c\xf4ng!",{theme:"colored"}),s(),x(Object(P.a)(Object(P.a)({},y),{},{pos_id:null,lo_number:""}))):T.c.error(N(r.data.error),{theme:"colored"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=y.agent_id,$=y.pos_id,F=y.lo_number,G=y.total_price,J=y.fee_agent,X=y.time_end;return console.log("pos_id",$),c.a.createElement(L.a,{open:t,onClose:D,"aria-labelledby":"form-dialog-title",maxWidth:"md"},c.a.createElement(W.a,{id:"form-dialog-title"},"T\u1ea1o l\xf4 ti\u1ec1n \u0111\u1ea1i l\xfd"),c.a.createElement(H.a,{style:{minWidth:500}},c.a.createElement(B.ValidatorForm,{onSubmit:I,onError:function(){return null}},c.a.createElement(u.a,{container:!0,spacing:2},Y&&c.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(B.SelectValidator,{variant:"outlined",fullWidth:!0,label:"Ch\u1ecdn \u0111\u1ea1i l\xfd ",className:"w-full",value:Y,name:"agent_id",displayEmpty:!0,onChange:R},v.map((function(e){return c.a.createElement(M.a,{value:e.id},e.name)})))),c.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(z.a,{id:"combo-box-demo",options:C,native:!0,fullWidth:!0,getOptionSelected:function(e,t){return e.name==t.name},onChange:function(e,t){console.log("newValue",t),x(t?Object(P.a)(Object(P.a)({},y),{},{pos_id:null===t||void 0===t?void 0:t.id}):Object(P.a)(Object(P.a)({},y),{},{pos_id:null}))},style:{height:40},getOptionLabel:function(e){return e.name||""},renderInput:function(e){return c.a.createElement(m.a,Object.assign({style:{height:40}},e,{label:"M\xe1y Pos",variant:"outlined"}))}})),c.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(B.TextValidator,{variant:"outlined",className:"w-full",label:"S\u1ed1 l\xf4 *",onChange:R,type:"text",name:"lo_number",value:F||"",validators:["required","isNumber"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Tr\u01b0\u1eddng n\xe0y ph\u1ea3i nh\u1eadp s\u1ed1 "]})),c.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(B.TextValidator,{variant:"outlined",className:"w-full",label:"T\u1ed5ng ti\u1ec1n *",onChange:R,type:"text",name:"total_price",value:Object(j.k)(G)||"",validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]})),c.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(B.TextValidator,{variant:"outlined",className:"w-full",label:"Ph\xed \u0111\u1ea1i l\xfd *",onChange:R,type:"text",name:"fee_agent",value:J||"",validators:["required","isFloat"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Ph\xed m\u1eb7c \u0111\u1ecbnh kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"]})),c.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(B.TextValidator,{variant:"outlined",className:"w-full",label:"Th\u1eddi gian k\u1ebft to\xe1n *",onChange:R,type:"text",name:"time_end",value:X||"",validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]}))),c.a.createElement(u.a,{className:"mt-8 mb-4",container:!0,justify:"flex-end"},c.a.createElement(g.a,{style:{marginRight:20},color:"inherit",variant:"contained",onClick:D},c.a.createElement("span",{className:"capitalize"},"Quay l\u1ea1i")),c.a.createElement(g.a,{color:"primary",variant:"contained",type:"submit"},c.a.createElement("span",{className:"capitalize"},"\u0110\u1ed3ng \xfd"))))))})),F=a(1464),G=Object(s.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:f.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:f.a.main}},formControl:{minWidth:200},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(d.a)(t,"textTransform","capitalize"),Object(d.a)(t,"background","#4caf50 !important"),Object(d.a)(t,"color","#fff"),t),search:{minWidth:200},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var J=function(e){Object(h.g)();var t=e.data,a=e.updateItem,n=e.removeItem,i=(e.setTxtSearch,e.changeActive),r=e.setChangeActive,d=e.handeChangeActive,s=e.setPageIndex,f=e.pageIndex,O=e.totalRecords,y=(e.setActiveSeleted,e.activeSelected,e.permissions),x=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),E=e.onCreateLink,_=e.onDoneAssgin,k=(e.household,e.setHousehold,e.listHousehold,e.startDate),w=e.changeDateRange,C=e.report,N=e.setAgent,T=e.agent,D=e.listAgent,A=e.reloadData,P=e.location,L=Object(l.useState)(!1),W=Object(o.a)(L,2),H=W[0],M=W[1],V=Object(l.useState)(!1),B=Object(o.a)(V,2),q=B[0],K=B[1],Y=(G(),Object(S.a)().user);return c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(v.a,{routeSegments:[{name:"\u0110\u1ed1i \u1ee9ng \u0111\u1ea1i l\xfd",path:"/agent-report"}]})),c.a.createElement(u.a,{container:!0,spacing:3},c.a.createElement(u.a,{item:!0,xs:12,container:!0,justifyContent:"space-between",alignItems:"center",spacing:3},c.a.createElement(u.a,{style:{padding:10},justify:"space-between",alignItems:"center",container:!0,spacing:3},c.a.createElement(u.a,{item:!0,container:!0,spacing:2,lg:12,md:12,sm:12,xs:12},c.a.createElement(u.a,{item:!0,lg:3,md:4,sm:6,xs:6},c.a.createElement(z.a,{id:"combo-box-demo",options:D,value:T,native:!0,defaultValue:null===P||void 0===P?void 0:P.state,fullWidth:!0,onChange:function(e,t){t?N(t):N()},style:{height:40},getOptionLabel:function(e){return e.name},renderInput:function(e){return c.a.createElement(m.a,Object.assign({style:{height:40}},e,{label:"\u0110\u1ea1i l\xfd",variant:"outlined"}))}})),c.a.createElement(u.a,{item:!0,lg:3,md:3,sm:6,xs:6},c.a.createElement(I.a,{date:k,changeDateRange:w})),c.a.createElement(u.a,{item:!0,lg:6,md:6,sm:12,xs:12,style:{display:"flex",justifyContent:"flex-end"}},Object(j.b)(Y,"/reciprocal/create")?c.a.createElement(g.a,{variant:"contained",className:"bg-light-primary",onClick:function(){K(!0)},style:{height:40,marginRight:20,width:150}},c.a.createElement(p.a,{style:{color:"white",marginRight:10}},"add_circle"),c.a.createElement("span",{className:"text-primary"},"L\xf4 ti\u1ec1n")):null,Object(j.b)(Y,"/transfer/create")?c.a.createElement(g.a,{variant:"contained",className:"bg-light-primary",onClick:function(){M(!0)},style:{height:40,width:150}},c.a.createElement(p.a,{style:{color:"white",marginRight:10}},"add_circle"),c.a.createElement("span",{className:"text-primary"},"Chuy\u1ec3n ti\u1ec1n")):null)))),c.a.createElement(u.a,{xs:12,container:!0,item:!0},c.a.createElement(u.a,{lg:6,md:6,sm:6,xs:6,container:!0,item:!0},c.a.createElement(b.a,{variant:"h6"},"T\u1ed5ng ti\u1ec1n c\u1ea7n chuy\u1ec3n kho\u1ea3n:"," ",Object(j.j)(null===C||void 0===C?void 0:C.total_payment_agent,!0)," ","\u0111")),c.a.createElement(u.a,{lg:6,md:6,sm:6,xs:6,container:!0,item:!0},c.a.createElement(b.a,{variant:"h6"},"T\u1ed5ng ti\u1ec1n \u0111\xe3 chuy\u1ec3n kho\u1ea3n:"," ",Object(j.j)(null===C||void 0===C?void 0:C.total_transfer,!0)," \u0111")),c.a.createElement(u.a,{lg:6,md:6,sm:6,xs:6,container:!0,item:!0},c.a.createElement(b.a,{variant:"h6"},"D\u01b0 n\u1ee3: ",Object(j.j)(null===C||void 0===C?void 0:C.total_cash,!0)," \u0111"))),c.a.createElement(u.a,{xs:12,item:!0},c.a.createElement(R,{data:t,changeActive:i,setChangeActive:r,handeChangeActive:d,updateItem:a,removeItem:n,pageIndex:f,setPageIndex:s,totalRecords:O,permissions:y,paymentGateVPBank:x,onCreateLink:E,onDoneAssgin:_})),c.a.createElement($,{selected:{agent:T},open:q,setOpen:K,reloadData:A}),c.a.createElement(F.a,{selected:{agent:T},open:H,setOpen:M,reloadData:A}))))},X=a(1389),Q=a(41),U=a(1385);a(1386),t.default=Object(N.b)((function(e){return{}}),{showLoading:Y.b,hideLoading:Y.a})((function(e){var t=Object(h.h)(),a=Object(l.useState)(""),n=Object(o.a)(a,2),d=n[0],s=n[1],u=Object(l.useState)(null),m=Object(o.a)(u,2),g=m[0],p=m[1],b=Object(l.useState)(),v=Object(o.a)(b,2),f=v[0],O=v[1],y=Object(l.useState)([]),x=Object(o.a)(y,2),E=x[0],_=(x[1],Object(l.useState)({})),k=Object(o.a)(_,2),w=k[0],C=k[1],S=Object(l.useState)(),N=Object(o.a)(S,2),D=N[0],A=N[1],R=Object(l.useState)([]),I=Object(o.a)(R,2),z=I[0],P=I[1],L=Object(l.useState)(1),W=Object(o.a)(L,2),H=W[0],M=W[1],V=Object(l.useState)(0),B=Object(o.a)(V,2),q=B[0],Y=B[1],$=Object(l.useState)(200),F=(Object(o.a)($,1)[0],Object(l.useState)(0)),G=Object(o.a)(F,2),Z=G[0],ee=(G[1],Object(U.a)(d,1e3),Object(l.useState)(new Date)),te=Object(o.a)(ee,2),ae=te[0],ne=te[1],ie=Object(l.useState)(new Date),re=Object(o.a)(ie,2),oe=re[0],le=re[1],ce=Object(h.g)(),de=Object(l.useState)([]),se=Object(o.a)(de,2),ue=se[0],me=se[1];Object(l.useEffect)((function(){t.state&&setTimeout((function(){A(t.state)}),1e3)}),[t.state]),Object(l.useEffect)((function(){D&&be(!1)}),[q]),Object(l.useEffect)((function(){D&&be(!0)}),[D,ae]),Object(l.useEffect)((function(){ge()}),[]);var ge=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)({});case 2:200==(t=e.sent).data.code&&t.data.data&&P(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(r.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),be=function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n,r,o,l,c,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.x)({date_from:ae?Object(j.i)(ae):null,date_to:oe?Object(j.i)(oe):null,agent_id:D?D.id:null});case 2:if(200!=(a=e.sent).data.code||!a.data.data){e.next=9;break}o=null===(n=a.data.data)||void 0===n?void 0:n.map((function(e,t){var a,n,i,r,o,l,c,d,s,u,m,g,p,b,v,h,f,j;return(null===e||void 0===e||null===(a=e.doi_ung)||void 0===a?void 0:a.id)?{index:t+1,name_pos:"".concat(null===e||void 0===e||null===(n=e.doi_ung)||void 0===n||null===(i=n.pos)||void 0===i?void 0:i.bank_code,"-").concat(null===e||void 0===e||null===(r=e.doi_ung)||void 0===r||null===(o=r.pos)||void 0===o?void 0:o.name),time_end:null===e||void 0===e||null===(l=e.doi_ung)||void 0===l?void 0:l.time_end,lo_number:null===e||void 0===e||null===(c=e.doi_ung)||void 0===c?void 0:c.lo_number,total_price:null===e||void 0===e||null===(d=e.doi_ung)||void 0===d?void 0:d.total_price,fee_agent:null===e||void 0===e||null===(s=e.doi_ung)||void 0===s?void 0:s.fee_agent,total_payment:(null===e||void 0===e||null===(u=e.transfer)||void 0===u?void 0:u.price)?null===e||void 0===e||null===(m=e.transfer)||void 0===m?void 0:m.price:"",id_lot:null===e||void 0===e||null===(g=e.doi_ung)||void 0===g?void 0:g.id,payment_agent:null===e||void 0===e||null===(p=e.doi_ung)||void 0===p?void 0:p.payment_agent,id_transfer:null===e||void 0===e||null===(b=e.transfer)||void 0===b?void 0:b.id}:{index:t+1,name_pos:"",time_end:"",lo_number:"",total_price:"",fee_agent:"",payment_agent:"",total_payment:(null===e||void 0===e||null===(v=e.transfer)||void 0===v?void 0:v.price)?null===e||void 0===e||null===(h=e.transfer)||void 0===h?void 0:h.price:"",id_lot:null===e||void 0===e||null===(f=e.doi_ung)||void 0===f?void 0:f.id,id_transfer:null===e||void 0===e||null===(j=e.transfer)||void 0===j?void 0:j.id}})),me(o),(null===(r=a.data)||void 0===r?void 0:r.total)&&C(null===(l=a.data)||void 0===l||null===(c=l.total)||void 0===c?void 0:c.total_payment),e.next=17;break;case 9:if(401!=a.data.code){e.next=16;break}return e.next=12,localStorage.removeItem(Q.a.API_TOKEN);case 12:setTimeout((function(){ce.push("/")}),1e3),T.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),e.next=17;break;case 16:T.c.error(null===(d=a.data)||void 0===d?void 0:d.error,{theme:"colored"});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(J,{data:ue,removeItem:ve,setTxtSearch:s,setActiveSeleted:p,pageIndex:q,changeActive:H,setChangeActive:M,setPageIndex:Y,activeSelected:g,handeChangeActive:pe,totalRecords:Z,onDoneAssgin:function(){be(!1)},household:f,setHousehold:O,listHousehold:E,changeDateRange:function(e,t){ne(e),le(t)},startDate:ae,report:w,agent:D,setAgent:A,listAgent:z,reloadData:function(){be()},location:t})}))}}]);