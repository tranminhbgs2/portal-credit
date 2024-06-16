(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[22],{1381:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(280),r=function(){return{type:n.b}},c=function(){return{type:n.a}}},1398:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1410:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1439:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(25),r=a(0),c=a.n(r),i=a(1318),l=a(1353),o=a(374),s=a(1361),m=a(378),d=a(279),u=Object(i.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function f(e){u();var t=c.a.useState(null),a=Object(n.a)(t,2),i=a[0],f=a[1],p=Object(r.useState)({startDate:new Date,endDate:new Date}),b=Object(n.a)(p,2),g=b[0],v=b[1],h=Boolean(i),E=h?"simple-popover":void 0;return c.a.createElement("div",null,c.a.createElement(s.a,{style:{padding:10,height:43},variant:"outlined",onClick:function(e){f(e.currentTarget)}},e.date?c.a.createElement("p",null,Object(d.e)(g.startDate)," -"," ",Object(d.e)(g.endDate)," "):c.a.createElement("p",null,"dd/mm/YY-dd/mm/YY")),c.a.createElement(l.a,{id:E,open:h,anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(m.DateRangePicker,{ranges:[g],onChange:function(e){v(e.range1)}}),c.a.createElement("div",{style:{justifyContent:"right",alignItems:"flex-end",display:"flex",paddingRight:10,paddingBottom:15}},c.a.createElement(s.a,{style:{width:100,height:30,marginRight:20},onClick:function(){return e.changeDateRange(null,null),void f(null)},variant:"contained"},c.a.createElement(o.a,{variant:"caption"},"Hu\u1ef7")),c.a.createElement(s.a,{style:{width:100,height:30},onClick:function(){return e.changeDateRange(g.startDate,g.endDate),void f(null)},variant:"contained",color:"primary"},c.a.createElement(o.a,{variant:"caption"},"\xc1p d\u1ee5ng")))))}},1443:function(e,t,a){"use strict";var n=a(1),r=a(6),c=a(0),i=(a(5),a(4)),l=a(12),o=c.forwardRef((function(e,t){var a=e.classes,l=e.className,o=e.component,s=void 0===o?"div":o,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({ref:t,className:Object(i.a)(a.root,l)},m))}));t.a=Object(l.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(o)},1444:function(e,t,a){"use strict";var n=a(6),r=a(1),c=a(0),i=(a(5),a(4)),l=a(12),o=a(1410),s=c.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,m=void 0===s?"table":s,d=e.padding,u=void 0===d?"default":d,f=e.size,p=void 0===f?"medium":f,b=e.stickyHeader,g=void 0!==b&&b,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=c.useMemo((function(){return{padding:u,size:p,stickyHeader:g}}),[u,p,g]);return c.createElement(o.a.Provider,{value:h},c.createElement(m,Object(r.a)({role:"table"===m?null:"table",ref:t,className:Object(i.a)(a.root,l,g&&a.stickyHeader)},v)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1445:function(e,t,a){"use strict";var n=a(1),r=a(6),c=a(0),i=(a(5),a(4)),l=a(12),o=a(1398),s={variant:"head"},m=c.forwardRef((function(e,t){var a=e.classes,l=e.className,m=e.component,d=void 0===m?"thead":m,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(o.a.Provider,{value:s},c.createElement(d,Object(n.a)({className:Object(i.a)(a.root,l),ref:t,role:"thead"===d?null:"rowgroup"},u)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1446:function(e,t,a){"use strict";var n=a(1),r=a(6),c=a(0),i=(a(5),a(4)),l=a(12),o=a(1398),s=a(35),m=c.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,m=void 0===s?"tr":s,d=e.hover,u=void 0!==d&&d,f=e.selected,p=void 0!==f&&f,b=Object(r.a)(e,["classes","className","component","hover","selected"]),g=c.useContext(o.a);return c.createElement(m,Object(n.a)({ref:t,className:Object(i.a)(a.root,l,g&&{head:a.head,footer:a.footer}[g.variant],u&&a.hover,p&&a.selected),role:"tr"===m?null:"row"},b))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(m)},1447:function(e,t,a){"use strict";var n=a(6),r=a(1),c=a(0),i=(a(5),a(4)),l=a(12),o=a(18),s=a(35),m=a(1410),d=a(1398),u=c.forwardRef((function(e,t){var a,l,s=e.align,u=void 0===s?"inherit":s,f=e.classes,p=e.className,b=e.component,g=e.padding,v=e.scope,h=e.size,E=e.sortDirection,j=e.variant,x=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=c.useContext(m.a),O=c.useContext(d.a),N=O&&"head"===O.variant;b?(l=b,a=N?"columnheader":"cell"):l=N?"th":"td";var w=v;!w&&N&&(w="col");var _=g||(y&&y.padding?y.padding:"default"),k=h||(y&&y.size?y.size:"medium"),T=j||O&&O.variant,S=null;return E&&(S="asc"===E?"ascending":"descending"),c.createElement(l,Object(r.a)({ref:t,className:Object(i.a)(f.root,f[T],p,"inherit"!==u&&f["align".concat(Object(o.a)(u))],"default"!==_&&f["padding".concat(Object(o.a)(_))],"medium"!==k&&f["size".concat(Object(o.a)(k))],"head"===T&&y&&y.stickyHeader&&f.stickyHeader),"aria-sort":S,role:a,scope:w},x))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1448:function(e,t,a){"use strict";var n=a(1),r=a(6),c=a(0),i=(a(5),a(4)),l=a(12),o=a(1398),s={variant:"body"},m=c.forwardRef((function(e,t){var a=e.classes,l=e.className,m=e.component,d=void 0===m?"tbody":m,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(o.a.Provider,{value:s},c.createElement(d,Object(n.a)({className:Object(i.a)(a.root,l),ref:t,role:"tbody"===d?null:"rowgroup"},u)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m)},1551:function(e,t,a){"use strict";a.r(t);var n,r,c=a(3),i=a.n(c),l=a(11),o=a(25),s=a(0),m=a.n(s),d=a(1364),u=(a(483),a(20)),f=a(1365),p=a(1318),b=(a(52),a(279)),g=["palette"],v=(Object(p.a)((function(e){var t=e.palette;Object(u.a)(e,g);return{icon:{fontSize:"44px",opacity:.6,color:t.primary.main}}})),a(277)),h=a(15),E=a(16),j=a(145),x=a(1381),y=a(58),O=(a(41),a(47)),N=a(1376),w=a(1351),_=a(374),k=a(146),T=["palette"],S=Object(p.a)((function(e){e.palette,Object(u.a)(e,T);return{icon:{fontSize:"30px",opacity:.6}}})),C=function(e){var t,a,n,r,c,i,l,o,s=S(),u=Object(k.a)().user;console.log("user",u);var p=e.dataHeader;e.startDate,e.changeDateRange;return m.a.createElement(d.a,{container:!0,spacing:2},m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:s.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"S\u1ea3n l\u01b0\u1ee3ng"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80  "},"H\xf4m nay:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-brand font-medium"},Object(b.j)(null===p||void 0===p||null===(t=p.day)||void 0===t?void 0:t.san_luong,!0)," ","\u0111")),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80 "},"Th\xe1ng:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-brand font-medium"},Object(b.j)(null===p||void 0===p||null===(a=p.month)||void 0===a?void 0:a.san_luong,!0)," ","\u0111")))))),m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:s.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"L\u1ee3i nhu\u1eadn"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80  "},"H\xf4m nay:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-green font-medium"},Object(b.j)(null===p||void 0===p||null===(n=p.day)||void 0===n?void 0:n.profit,!0)," ","\u0111")),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80 "},"Th\xe1ng:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-green font-medium"},Object(b.j)(null===p||void 0===p||null===(r=p.month)||void 0===r?void 0:r.profit,!0)," ","\u0111")))))),m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:s.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"T\u1ed5ng s\u1ed1 ti\u1ec1n chuy\u1ec3n kho\u1ea3n"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80  "},"H\xf4m nay:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===p||void 0===p||null===(c=p.day)||void 0===c?void 0:c.tien_chuyen,!0)," ","\u0111")),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80 "},"Th\xe1ng:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===p||void 0===p||null===(i=p.month)||void 0===i?void 0:i.tien_chuyen,!0)," ","\u0111")))))),m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:s.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"T\u1ed5ng s\u1ed1 ti\u1ec1n nh\u1eadn"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80  "},"H\xf4m nay:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===p||void 0===p||null===(l=p.day)||void 0===l?void 0:l.tien_nhan,!0)," ","\u0111")),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80 "},"Th\xe1ng:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===p||void 0===p||null===(o=p.month)||void 0===o?void 0:o.tien_nhan,!0)," ","\u0111")))))))},D=["palette"],H=Object(p.a)((function(e){e.palette,Object(u.a)(e,D);return{icon:{fontSize:"30px",opacity:.6}}})),R=function(e){var t,a,n,r,c,i,l=H(),o=Object(k.a)().user;console.log("user",o);var s=e.dataHeader;e.startDate,e.changeDateRange;return m.a.createElement(d.a,{container:!0,spacing:2},m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:l.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"S\u1ed1 d\u01b0 v\xed"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{variant:"h6",className:"m-0 mt-1 text-green font-medium"},Object(b.j)(null===o||void 0===o?void 0:o.balance,!0)," ","\u0111")),m.a.createElement("div",{style:{height:14}}))))),m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:l.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"S\u1ea3n l\u01b0\u1ee3ng"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80  "},"H\xf4m nay:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-brand font-medium"},Object(b.j)(null===s||void 0===s||null===(t=s.day)||void 0===t?void 0:t.san_luong,!0)," ","\u0111")),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80 "},"Th\xe1ng:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-brand font-medium"},Object(b.j)(null===s||void 0===s||null===(a=s.month)||void 0===a?void 0:a.san_luong,!0)," ","\u0111")))))),m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:l.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"T\u1ed5ng s\u1ed1 ti\u1ec1n chuy\u1ec3n kho\u1ea3n"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80  "},"H\xf4m nay:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===s||void 0===s||null===(n=s.day)||void 0===n?void 0:n.tien_chuyen,!0)," ","\u0111")),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80 "},"Th\xe1ng:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===s||void 0===s||null===(r=s.month)||void 0===r?void 0:r.tien_chuyen,!0)," ","\u0111")))))),m.a.createElement(d.a,{item:!0,xs:6,md:3},m.a.createElement(f.a,{className:"flex flex-wrap justify-between items-center p-4 bg-paper",elevation:6},m.a.createElement("div",{className:"flex items-center"},m.a.createElement(w.a,{className:l.icon},"attach_money"),m.a.createElement("div",{className:"ml-3"},m.a.createElement(_.a,{variant:"subtitle2"},"T\u1ed5ng s\u1ed1 ti\u1ec1n nh\u1eadn"),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80  "},"H\xf4m nay:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===s||void 0===s||null===(c=s.day)||void 0===c?void 0:c.tien_nhan,!0)," ","\u0111")),m.a.createElement("div",{className:"flex items-center  "},m.a.createElement(_.a,{className:"m-0 mt-1 w-80 "},"Th\xe1ng:"),m.a.createElement(_.a,{className:"m-0 mt-1 text-organge font-medium"},Object(b.j)(null===s||void 0===s||null===(i=s.month)||void 0===i?void 0:i.tien_nhan,!0)," ","\u0111")))))))},W=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(h.c)(E.a.urlReportHeader,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(h.c)(E.a.reportTransactionStaff,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(h.c)(E.a.reportLotAgent,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=a(8),M=a(14),B=a(1443),Y=a(1444),F=a(1445),I=a(1446),P=a(1447),$=a(1448),J=a(120),q=a(1439),K=[{id:"index",label:"STT",align:"center",minWidth:100},{id:"name",label:"T\xean \u0111\u1ea1i l\xfd",align:"center",minWidth:220},(n={id:"total_price_rut",label:"T\u1ed5ng s\u1ed1 ti\u1ec1n \u0111\xe3 qu\u1eb9t",align:"center",minWidth:"auto"},Object(M.a)(n,"minWidth",140),Object(M.a)(n,"isNumber",!0),n),{id:"total_payment",label:"Th\xe0nh ti\u1ec1n",align:"center",minWidth:140,isNumber:!0},{id:"total_transfer",label:"S\u1ed1 ti\u1ec1n \u0111\u1ed1i \u1ee9ng",align:"center",minWidth:140,isNumber:!0},{id:"total_cash",label:"S\u1ed1 d\u01b0 c\xf2n l\u1ea1i",align:"center",minWidth:140,isNumber:!0}],X=Object(p.a)((function(e){return{root:{width:"100%"},container:{maxHeight:500},action:{display:"flex",alignContent:"center",justifyContent:"center",padding:"33px 10px !important"},image:{width:50,height:50},formControl:{minWidth:110},border:{borderRight:"0.05px solid #e0e0e0"}}}));function G(e){var t=Object(s.useState)([]),a=Object(o.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)(new Date),d=Object(o.a)(c,2),u=d[0],f=d[1],p=Object(s.useState)(new Date),g=Object(o.a)(p,2),v=g[0],h=g[1],E=Object(O.g)();Object(s.useEffect)((function(){j()}),[u]);var j=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u||!v){e.next=5;break}return e.next=3,A({date_from:Object(b.i)(u).substring(0,10),date_to:Object(b.i)(v).substring(0,10)});case 3:200==(t=e.sent).data.code&&t.data.data&&(a=t.data.data.map((function(e,t){return Object(L.a)(Object(L.a)({},e),{},{index:t+1})})),r(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=X();return m.a.createElement(J.o,{className:x.root},m.a.createElement("div",{className:"flex items-center justify-between mb-5"},m.a.createElement(_.a,{variant:"h6"},"B\u1ea3n x\u1ebfp h\u1ea1ng \u0111\u1ea1i l\xfd"),m.a.createElement(q.a,{date:u,changeDateRange:function(e,t){f(e),h(t)}})),m.a.createElement(B.a,null,m.a.createElement(Y.a,{stickyHeader:!0,"aria-label":"sticky table"},m.a.createElement(F.a,null,m.a.createElement(I.a,null,K.map((function(e){return m.a.createElement(P.a,{key:e.id,align:"center",style:{width:e.minWidth,color:"black"}},e.label)})))),m.a.createElement($.a,{className:x.columnTable},n.map((function(e,t){return m.a.createElement(I.a,{style:0==t?{backgroundColor:"#D9E8FF"}:{},hover:!0,tabIndex:-1,key:e.id},K.map((function(t){var a=e[t.id];return"full_name"==t.id?m.a.createElement(P.a,{key:t.id,align:t.align,style:{color:"#202020",textAlign:"left"}},m.a.createElement(_.a,{style:{fontWeight:"bold",fontSize:16,color:"#46A775"}},e.full_name)):m.a.createElement(P.a,{key:t.id,align:t.align,onClick:function(){"total_price_rut"==t.id?E.push({pathname:"/reciprocal",agent_id:e.agent_id}):"total_transfer"==t.id&&E.push({pathname:"/transfer",agent_id:e.agent_id})},style:{textAlign:t.isNumber?"end":"center",color:"black",fontSize:16,cursor:"total_price_rut"==t.id||"total_transfer"==t.id?"pointer":"default",textDecorationLine:"total_price_rut"==t.id||"total_transfer"==t.id?"underline":"none"}},t.isNumber?Object(b.j)(a):a)})))}))))))}var Q=[{id:"index",label:"STT",align:"center",minWidth:100},{id:"name",label:"T\xean nh\xe2n vi\xean",align:"center",minWidth:220},(r={id:"total_price_rut",label:"T\u1ed5ng s\u1ed1 ti\u1ec1n \u0111\xe3 qu\u1eb9t",align:"center",minWidth:"auto"},Object(M.a)(r,"minWidth",140),Object(M.a)(r,"isNumber",!0),r),{id:"total_mester_transfer",label:"T\u1ed5ng s\u1ed1 ti\u1ec1n \u0111\xe3 nh\u1eadn",align:"center",minWidth:140,isNumber:!0},{id:"total_price_transfer",label:"T\u1ed5ng s\u1ed1 ti\u1ec1n \u0111\xe3 CK",align:"center",minWidth:140,isNumber:!0},{id:"user_balance",label:"S\u1ed1 d\u01b0 t\xe0i kho\u1ea3n",align:"center",minWidth:140,isNumber:!0}],U=Object(p.a)((function(e){return{root:{width:"100%"},container:{maxHeight:500},action:{display:"flex",alignContent:"center",justifyContent:"center",padding:"33px 10px !important"},image:{width:50,height:50},formControl:{minWidth:110},border:{borderRight:"0.05px solid #e0e0e0"}}}));function V(e){var t=Object(s.useState)([]),a=Object(o.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)(new Date),d=Object(o.a)(c,2),u=d[0],f=d[1],p=Object(s.useState)(new Date),g=Object(o.a)(p,2),v=g[0],h=g[1],E=Object(O.g)();Object(s.useEffect)((function(){j()}),[u]);var j=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u||!v){e.next=5;break}return e.next=3,z({date_from:Object(b.i)(u).substring(0,10),date_to:Object(b.i)(v).substring(0,10)});case 3:200==(t=e.sent).data.code&&t.data.data&&(a=t.data.data.map((function(e,t){return Object(L.a)(Object(L.a)({},e),{},{index:t+1})})),r(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=U();return m.a.createElement(J.o,{className:x.root},m.a.createElement("div",{className:"flex items-center justify-between mb-5"},m.a.createElement(_.a,{variant:"h6"},"B\u1ea3n x\u1ebfp h\u1ea1ng nh\xe2n vi\xean"),m.a.createElement(q.a,{date:u,changeDateRange:function(e,t){f(e),h(t)}})),m.a.createElement(B.a,null,m.a.createElement(Y.a,{stickyHeader:!0,"aria-label":"sticky table"},m.a.createElement(F.a,null,m.a.createElement(I.a,null,Q.map((function(e){return m.a.createElement(P.a,{key:e.id,align:"center",style:{width:e.minWidth,color:"black"}},e.label)})))),m.a.createElement($.a,{className:x.columnTable},n.map((function(e,t){return m.a.createElement(I.a,{style:0==t?{backgroundColor:"#D9E8FF"}:{},hover:!0,tabIndex:-1,key:e.id},Q.map((function(t){var a=e[t.id];return"full_name"==t.id?m.a.createElement(P.a,{key:t.id,align:t.align,style:{color:"#202020",textAlign:"left"}},m.a.createElement(_.a,{style:{fontWeight:"bold",fontSize:16,color:"#46A775"}},e.full_name)):m.a.createElement(P.a,{key:t.id,align:t.align,onClick:function(){"total_price_rut"==t.id?E.push({pathname:"/transaction",staff_id:e.id}):"total_mester_transfer"==t.id&&E.push({pathname:"/transfer",staff_id:e.id})},style:{textAlign:t.isNumber?"end":"center",color:"black",fontSize:16,cursor:"total_price_rut"==t.id||"total_mester_transfer"==t.id?"pointer":"default",textDecorationLine:"total_price_rut"==t.id||"total_mester_transfer"==t.id?"underline":"none"}},t.isNumber?Object(b.j)(a):a)})))}))))))}t.default=Object(j.b)((function(e){return{}}),{showLoading:x.b,hideLoading:x.a})((function(e){Object(v.a)();var t=Object(s.useState)(),a=Object(o.a)(t,2),n=(a[0],a[1],Object(O.g)(),Object(s.useState)()),r=Object(o.a)(n,2),c=(r[0],r[1],Object(s.useState)(new Date)),u=Object(o.a)(c,2),f=u[0],p=(u[1],Object(s.useState)(new Date)),b=Object(o.a)(p,2),g=b[0],h=(b[1],Object(k.a)().user);Object(s.useEffect)((function(){f&&g&&T()}),[g]);var E=Object(s.useState)({day:{san_luong:0,tien_nhan:0,profit:0,tien_chuyen:0},month:{san_luong:0,tien_nhan:0,profit:0,tien_chuyen:0}}),j=Object(o.a)(E,2),x=j[0],w=j[1],_=Object(N.a)().t,T=function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,W();case 3:a=t.sent,e.hideLoading(),200==a.data.code&&a.data.data?(console.log(a.data.data),w(a.data.data)):y.c.error(_(a.data.error),{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m.a.createElement("div",{className:"analytics m-sm-30"},"SYSTEM"==(null===h||void 0===h?void 0:h.account_type)?m.a.createElement(d.a,{container:!0,spacing:3},m.a.createElement(d.a,{xs:12,item:!0},m.a.createElement(C,{dataHeader:x})),m.a.createElement(d.a,{xs:12,item:!0},m.a.createElement(V,null)),m.a.createElement(d.a,{xs:12,item:!0},m.a.createElement(G,null))):m.a.createElement(d.a,{container:!0,spacing:3},m.a.createElement(d.a,{xs:12,item:!0},m.a.createElement(R,{dataHeader:x}))))}))}}]);