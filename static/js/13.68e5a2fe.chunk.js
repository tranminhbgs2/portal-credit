(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[13],{1381:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(280),r=function(){return{type:n.b}},c=function(){return{type:n.a}}},1382:function(e,t,a){"use strict";t.a={main:"#279925",white:"#ffffff",headerTable:"#5563CE",red:"#BF0707",green:"#279925"}},1383:function(e,t,a){"use strict";var n=a(1318),r=(a(1382),Object(n.a)((function(e){return{root:{width:"100%"},container:{maxHeight:580,wordBreak:"break-word !important"},action:{width:"130px"},image:{width:100,height:200,objectFit:"contain"},formControl:{minWidth:90,display:"flex",alignItems:"center",justifyContent:"center"},border:{borderRight:"0.05px solid #e0e0e0"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],borderRadius:5,padding:e.spacing(0,4,3),width:400,height:200},tableFooter:{paddingTop:5,paddingLeft:10,color:"white"},checkbox:{borderRadius:0,padding:0},columnTable:{writingMode:"horizontal-tb"},iconImge:{width:60,height:60}}})));t.a=r},1384:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(25),r=a(0);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=Object(r.useState)(e),c=Object(n.a)(a,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){i(e)}),t);return function(){return clearTimeout(a)}}),[e,t]),o}},1385:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(0),r=a.n(n),c=a(1361),o=a(1362),i=a(1369),l=a(1367),u=a(1368),s=a(1366),d=a(1320),m=r.a.forwardRef((function(e,t){return r.a.createElement(d.a,Object.assign({direction:"up",ref:t},e))}));function f(e){var t=e.open,a=e.handleClose,n=e.data,d=e.onAgree;return r.a.createElement(o.a,{open:t,maxWidth:"sm",fullWidth:!0,TransitionComponent:m,keepMounted:!0,onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(s.a,{id:"alert-dialog-slide-title"},n.title),r.a.createElement(l.a,null,r.a.createElement(u.a,{id:"alert-dialog-slide-description"},n.content)),r.a.createElement(i.a,null,r.a.createElement(c.a,{onClick:a,color:"primary"},"Quay l\u1ea1i"),r.a.createElement(c.a,{onClick:function(){d(),a()},color:"primary"},"\u0110\u1ed3ng \xfd")))}},1386:function(e,t,a){"use strict";var n=a(1407),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,c,o,i,l,u,s=!1;t||(t={}),a=t.debug||!1;try{if(o=n(),i=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=r[t.format]||r.default;window.clipboardData.setData(c,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(d){a&&console.error("unable to copy using execCommand: ",d),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),u&&document.body.removeChild(u),o()}return s}},1387:function(e,t,a){"use strict";a(3),a(8),a(11),a(25),a(1381),a(0),a(58),a(41)},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(25),r=a(0),c=a.n(r),o=a(1318),i=a(1353),l=a(374),u=a(1361),s=a(378),d=a(279),m=Object(o.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function f(e){m();var t=c.a.useState(null),a=Object(n.a)(t,2),o=a[0],f=a[1];Object(r.useEffect)((function(){p()}),[]);var p=function(){var e=new Date;e.setTime(e.getTime()-432e6),e&&v({startDate:e,endDate:new Date})},b=Object(r.useState)(),h=Object(n.a)(b,2),g=h[0],v=h[1],j=Boolean(o),O=j?"simple-popover":void 0;return c.a.createElement("div",null,c.a.createElement(u.a,{style:{padding:10,height:41,width:200},variant:"outlined",onClick:function(e){f(e.currentTarget)}},e.date?c.a.createElement("p",null,Object(d.e)(g.startDate)," -"," ",Object(d.e)(g.endDate)," "):c.a.createElement("p",null,"dd/mm/YY-dd/mm/YY")),c.a.createElement(i.a,{id:O,open:j,anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(s.DateRangePicker,{ranges:[g],onChange:function(e){v(e.range1)}}),c.a.createElement("div",{style:{justifyContent:"right",alignItems:"flex-end",display:"flex",paddingRight:10,paddingBottom:15}},c.a.createElement(u.a,{style:{width:100,height:30,marginRight:20},onClick:function(){return e.changeDateRange(null,null),void f(null)},variant:"contained"},c.a.createElement(l.a,{variant:"caption"},"Hu\u1ef7")),c.a.createElement(u.a,{style:{width:100,height:30},onClick:function(){return e.changeDateRange(g.startDate,g.endDate),void f(null)},variant:"contained",color:"primary"},c.a.createElement(l.a,{variant:"caption"},"\xc1p d\u1ee5ng")))))}},1391:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"g",(function(){return s})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return m})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return p}));var n=a(3),r=a.n(n),c=a(11),o=a(15),i=a(16),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlCreatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlUpdatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDetailPoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDeletePoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlChangeStatusPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlAssignPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1402:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"g",(function(){return s})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"f",(function(){return f})),a.d(t,"d",(function(){return p}));var n=a(3),r=a.n(n),c=a(11),o=a(15),i=a(16),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlCreateLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlUpdateLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDetailLotMoney,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDeleteLotMoney,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListReciprocal,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.finalLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1407:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1415:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(14),r=a(8),c=a(3),o=a.n(c),i=a(11),l=a(25),u=a(0),s=a.n(u),d=a(1362),m=a(1366),f=a(1367),p=a(1364),b=a(1398),h=a(1361),g=a(58),v=a(1376),j=(a(279),a(44)),O=a(620),y=a(1391);function E(e){var t=e.open,a=e.setOpen,c=e.selected,E=e.onDoneAssgin,x=Object(u.useState)({}),w=Object(l.a)(x,2),k=w[0],C=w[1],D=Object(u.useState)([]),S=Object(l.a)(D,2),_=S[0],P=S[1];Object(v.a)().t;function T(){a(!1),C({})}Object(u.useEffect)((function(){A()}),[]);var A=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)({});case 2:200==(t=e.sent).data.code&&t.data.data&&P(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){e.persist(),"price"===e.target.name?null!==e.target.value&&C(Object(r.a)(Object(r.a)({},k),{},Object(n.a)({},e.target.name,e.target.value.split(".").join("")))):C(Object(r.a)(Object(r.a)({},k),{},Object(n.a)({},e.target.name,e.target.value)))},N=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return e.next=3,Object(y.a)(Object(r.a)(Object(r.a)({},k),{},{pos_id:null===c||void 0===c?void 0:c.id}));case 3:200==(t=e.sent).data.code?(g.c.success("Cho thu\xea Poss th\xe0nh c\xf4ng!",{theme:"colored"}),a(!1),E(),C({})):g.c.error(t.data.error,{theme:"colored"}),e.next=8;break;case 7:g.c.warn("B\u1ea1n ch\u01b0a ch\u1ecdn Pos",{theme:"colored"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=k.agent_id,L=k.fee;return s.a.createElement(d.a,{open:t,onClose:T,"aria-labelledby":"form-dialog-title"},s.a.createElement(m.a,{id:"form-dialog-title"},"Cho thu\xea m\xe1y Pos ",null===c||void 0===c?void 0:c.name),s.a.createElement(f.a,{style:{minWidth:400}},s.a.createElement(j.ValidatorForm,{onSubmit:N,onError:function(){return null}},s.a.createElement(p.a,{container:!0,spacing:2},s.a.createElement(p.a,{item:!0,lg:12,md:12,sm:12,xs:12},s.a.createElement(j.SelectValidator,{variant:"outlined",label:"\u0110\u1ea1i l\xfd *",className:"w-full",value:I,name:"agent_id",displayEmpty:!0,onChange:R,validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]},_.map((function(e){return s.a.createElement(b.a,{value:e.id},e.name)})))),s.a.createElement(p.a,{item:!0,lg:12,md:12,sm:12,xs:12},s.a.createElement(j.TextValidator,{variant:"outlined",className:"w-full",label:"Ph\xed Pos *",onChange:R,type:"text",name:"fee",value:L||"",validators:["required","isFloat"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Ph\xed m\u1eb7c \u0111\u1ecbnh kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"]}))),s.a.createElement(p.a,{className:"mt-8 mb-4",container:!0,justify:"flex-end"},s.a.createElement(h.a,{style:{marginRight:20},color:"inherit",variant:"contained",onClick:T},s.a.createElement("span",{className:"capitalize"},"Quay l\u1ea1i")),s.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit"},s.a.createElement("span",{className:"capitalize"},"\u0110\u1ed3ng \xfd"))))))}},1452:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(3),r=a.n(n),c=a(11),o=(a(14),a(8),a(25)),i=a(0),l=a.n(i),u=a(1362),s=a(1366),d=a(1367),m=a(1364),f=a(1361),p=a(58),b=a(1376),h=a(279),g=a(44),v=a(1539),j=a(1402);function O(e){var t=e.open,a=e.setOpen,n=e.selected,O=e.reloadData,y=Object(i.useState)({}),E=Object(o.a)(y,2),x=E[0],w=E[1],k=Object(i.useState)(new Date),C=Object(o.a)(k,2),D=C[0],S=C[1];Object(b.a)().t;function _(){a(!1),w({})}var P=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return e.next=3,Object(j.d)({id:null===n||void 0===n?void 0:n.id,time_end:Object(h.i)(D)});case 3:200==(t=e.sent).data.code?(p.c.success("K\u1ebft to\xe1n l\xf4 ti\u1ec1n th\xe0nh c\xf4ng!",{theme:"colored"}),a(!1),O()):p.c.error(t.data.error,{theme:"colored"}),e.next=8;break;case 7:p.c.warn("B\u1ea1n ch\u01b0a ch\u1ecdn Pos",{theme:"colored"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();x.agent_id,x.fee;return l.a.createElement(u.a,{open:t,onClose:_,"aria-labelledby":"form-dialog-title"},l.a.createElement(s.a,{id:"form-dialog-title"},"K\u1ebft to\xe1n l\xf4 ".concat(null===n||void 0===n?void 0:n.lo_number,"-").concat(null===n||void 0===n?void 0:n.pos_name),"  "),l.a.createElement(d.a,{style:{minWidth:400}},l.a.createElement(g.ValidatorForm,{onSubmit:P,onError:function(){return null}},l.a.createElement(m.a,{container:!0,spacing:2},l.a.createElement(m.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(v.a,{placeholder:"hh:mm dd/MM/yyyy",label:"Th\u1eddi gian k\u1ebft to\xe1n",disableToolbar:!0,inputVariant:"outlined",type:"datetime",style:{width:350},fullWidth:!0,clearable:!0,format:"HH:mm dd/MM/yyyy",value:D,onChange:function(e){S(e)},KeyboardButtonProps:{"aria-label":"change date"},maxDate:new Date}))),l.a.createElement(m.a,{className:"mt-8 mb-4",container:!0,justify:"flex-end"},l.a.createElement(f.a,{style:{marginRight:20},color:"inherit",variant:"contained",onClick:_},l.a.createElement("span",{className:"capitalize"},"Quay l\u1ea1i")),l.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit"},l.a.createElement("span",{className:"capitalize"},"\u0110\u1ed3ng \xfd"))))))}},1548:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(3),c=a.n(r),o=a(11),i=a(25),l=a(0),u=a.n(l),s=a(14),d=a(1318),m=a(1364),f=a(590),p=a(1359),b=a(1379),h=a(1371),g=a(1361),v=a(374),j=a(120),O=a(47),y=a(52),E=a(1382),x=a(279),w=a(278),k=a(1440),C=a(1441),D=a(1442),S=a(1443),_=a(1444),P=a(1445),T=a(1563),A=a(1307),R=a(1351),N=a(1564),I=a(1385),L=a(146),M=(a(1386),a(145)),W=a(58),z=a(1383),B=a(1452),H=a(1415),F=[{id:"index",label:"STT",align:"center",minWidth:50},{id:"agency",label:"\u0110\u1ea1i l\xfd",align:"left",minWidth:160},{id:"pos_name",label:"M\xe1y Pos",align:"left",minWidth:160},{id:"lo_number",label:"S\u1ed1 l\xf4",align:"left",minWidth:80},{id:"fee_agent",label:"Ph\xed",align:"left",minWidth:80},{id:"total_price",label:"T\u1ed5ng ti\u1ec1n",align:"left",minWidth:120,isMonney:!0},{id:"payment_agent",label:"Th\xe0nh ti\u1ec1n",align:"left",minWidth:120,isMonney:!0},{id:"status_ket_toan",label:"Tr\u1ea1ng th\xe1i",align:"left",minWidth:120}];var K=Object(M.b)((function(e){return{}}),{})((function(e){var t=e.data,a=(e.handeChangeActive,e.removeItem),r=(e.changeActive,e.setChangeActive,e.setPageIndex),c=e.setPageSize,o=e.pageIndex,s=e.totalRecords,d=(e.permissions,e.paymentGateVPBank,e.onCreateLink,e.onDoneAssgin),f=e.reloadData,p=Object(z.a)(),b=Object(l.useState)(),h=Object(i.a)(b,2),g=(h[0],h[1],Object(l.useState)()),v=Object(i.a)(g,2),j=v[0],y=v[1],M=u.a.useState(!1),W=Object(i.a)(M,2),K=(W[0],W[1],u.a.useState(!1)),U=Object(i.a)(K,2),V=(U[0],U[1],Object(l.useState)([])),G=Object(i.a)(V,2),X=(G[0],G[1]),Y=Object(l.useState)(),q=Object(i.a)(Y,2),Q=q[0],J=q[1],Z=Object(l.useState)(!1),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=Object(O.g)(),ne=Object(l.useState)(!1),re=Object(i.a)(ne,2),ce=re[0],oe=re[1];Object(l.useEffect)((function(){X([])}),[t]);var ie=Object(L.a)().user;return u.a.createElement(w.a,{className:p.root},u.a.createElement(k.a,{className:p.container},u.a.createElement(C.a,{stickyHeader:!0,"aria-label":"sticky table"},u.a.createElement(D.a,null,u.a.createElement(S.a,null,F.map((function(e){return u.a.createElement(_.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:E.a.headerTable,color:"white"}},e.label)})),u.a.createElement(_.a,{style:{width:165,textAlign:"center",backgroundColor:E.a.headerTable,color:"white"}},"H\xe0nh \u0111\u1ed9ng"))),u.a.createElement(P.a,{className:p.columnTable},t.map((function(e){return u.a.createElement(S.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},F.map((function(t){var a=e[t.id];return u.a.createElement(_.a,{key:t.id,align:t.align,style:{textAlign:"index"===t.id?"center":"string"==typeof a?"left":"right"}},t.isMonney?Object(x.j)(a):a)})),u.a.createElement(_.a,{className:p.action},Object(x.b)(ie,"/lot-money/delete")&&1!=e.status?u.a.createElement(T.a,{title:"K\u1ebft to\xe1n"},u.a.createElement(A.a,{onClick:function(){y(Object(n.a)({type:"DELETE",title:"K\u1ebft to\xe1n",content:"Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n k\u1ebft to\xe1n l\xf4 ti\u1ec1n ".concat(null===e||void 0===e?void 0:e.pos_name," - ").concat(null===e||void 0===e?void 0:e.lo_number," hay kh\xf4ng?")},e)),te(!0)},className:p.button,"aria-label":"Delete"},u.a.createElement(R.a,{color:"primary"},"done_all"))):null,Object(x.b)(ie,"/transfer/create")?u.a.createElement(T.a,{title:"Chuy\u1ec3n ti\u1ec1n"},u.a.createElement(A.a,{onClick:function(){ae.push({pathname:"/transfer/create",state:Object(n.a)(Object(n.a)({},e),{},{type:"AGENCY"})})},className:p.button,"aria-label":"edit"},u.a.createElement(R.a,{style:{color:"#Fb9736"}},"currency_exchange"))):null,Object(x.b)(ie,"/reciprocal/update")?u.a.createElement(T.a,{title:"C\u1eadp nh\u1eadt"},u.a.createElement(A.a,{onClick:function(){ae.push({pathname:"/reciprocal/update",state:e.id})},className:p.button,"aria-label":"edit"},u.a.createElement(R.a,{color:"primary"},"edit"))):null,Object(x.b)(ie,"/reciprocal/delete")?u.a.createElement(T.a,{title:"Xo\xe1"},u.a.createElement(A.a,{onClick:function(){y(Object(n.a)({type:"DELETE",title:"Xo\xe1 l\xf4 ti\u1ec1n",content:"Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a l\xf4 ti\u1ec1n ".concat(null===e||void 0===e?void 0:e.pos_name," - ").concat(null===e||void 0===e?void 0:e.lo_number," hay kh\xf4ng?")},e)),oe(!0)},className:p.button,"aria-label":"Delete"},u.a.createElement(R.a,{color:"error"},"delete"))):null))}))))),u.a.createElement(I.a,{data:{title:"Xo\xe1 l\xf4 ti\u1ec1n",content:"Ba\u0323n co\u0301 ch\u1eafc ch\u1eafn mu\xf4\u0301n xo\u0301a l\xf4 ti\u1ec1n ".concat(null===j||void 0===j?void 0:j.lo_number," t\u1ea1i M\xe1y Pos ").concat(null===j||void 0===j?void 0:j.pos_name,"  hay kh\xf4ng?")},open:ce,handleClose:function(){return oe(!1)},onAgree:function(){a(null===j||void 0===j?void 0:j.id),oe(!1)}}),u.a.createElement(B.a,{open:ee,handleClose:function(){return te(!1)},selected:j,setOpen:te,reloadData:f}),u.a.createElement(H.a,{selected:j,open:Q,setOpen:J,onDoneAssgin:d}),u.a.createElement(m.a,{xs:12,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",className:p.tableFooter},u.a.createElement(m.a,{xs:6,item:!0}),u.a.createElement(m.a,{xs:6,item:!0},u.a.createElement(N.a,{component:"div",page:o,count:s,rowsPerPage:10,rowsPerPageOptions:[],onChangePage:function(e,t){r(t)},onChangeRowsPerPage:function(e){c(e.target.value)}}))))})),U=a(1390),V=Object(d.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:E.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:E.a.main}},formControl:{minWidth:200},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(s.a)(t,"textTransform","capitalize"),Object(s.a)(t,"background","#4caf50 !important"),Object(s.a)(t,"color","#fff"),t),search:{minWidth:200},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var G=function(e){Object(O.g)();var t=e.data,a=e.updateItem,n=e.removeItem,r=e.setTxtSearch,c=e.changeActive,o=e.setChangeActive,i=e.handeChangeActive,s=e.setPageIndex,d=e.pageIndex,E=e.totalRecords,w=(e.setActiveSeleted,e.activeSelected,e.permissions),k=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),C=e.onCreateLink,D=e.onDoneAssgin,S=e.household,_=e.setHousehold,P=e.listHousehold,T=e.startDate,A=e.changeDateRange,R=e.report,N=e.agent,I=e.setAgent,M=e.listAgent,W=e.reloadData,z=V(),B=Object(L.a)().user;return u.a.createElement(l.Fragment,null,u.a.createElement("div",{className:"m-sm-30"},u.a.createElement("div",{className:"mb-sm-30"},u.a.createElement(j.a,{routeSegments:[{name:"\u0110\u1ed1i \u1ee9ng \u0111\u1ea1i l\xfd",path:"/reciprocal"}]})),u.a.createElement(m.a,{container:!0,spacing:3},u.a.createElement(m.a,{item:!0,xs:12,container:!0,justifyContent:"space-between",alignItems:"center",spacing:3},u.a.createElement(m.a,{style:{padding:10,marginBottom:20},justify:"space-between",alignItems:"center",container:!0,spacing:3},u.a.createElement(m.a,{item:!0,container:!0,spacing:2,lg:10,md:10,sm:12,xs:12},u.a.createElement(m.a,{item:!0},u.a.createElement(f.a,{id:"outlined-basic",variant:"outlined",placeholder:"t\xecm ki\u1ebfm ...",onChange:function(e){return r(e.target.value)},className:z.search})),u.a.createElement(m.a,{item:!0},u.a.createElement(U.a,{date:T,changeDateRange:A})),u.a.createElement(m.a,{item:!0},u.a.createElement(p.a,{variant:"outlined",className:z.formControl},u.a.createElement(b.a,{htmlFor:"outlined-age-native-simple"},"\u0110\u1ea1i l\xfd"),u.a.createElement(h.a,{native:!0,label:"\u0110\u1ea1i l\xfd",value:N,onChange:function(e){return I(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},u.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),M.map((function(e){return u.a.createElement("option",{value:e.id},e.name)}))))),u.a.createElement(m.a,{item:!0},u.a.createElement(p.a,{variant:"outlined",className:z.formControl},u.a.createElement(b.a,{htmlFor:"outlined-age-native-simple"},"M\xe1y Pos"),u.a.createElement(h.a,{native:!0,label:"M\xe1y Pos",value:S,onChange:function(e){return _(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},u.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),P.map((function(e){return u.a.createElement("option",{value:e.id},e.name)})))))),Object(x.b)(B,"/reciprocal/create")?u.a.createElement(y.b,{to:"/reciprocal/create"},u.a.createElement(g.a,{variant:"contained",className:"bg-light-primary"},u.a.createElement("span",{className:"text-primary"},"Th\xeam m\u1edbi"))):null)),u.a.createElement(m.a,{xs:12,container:!0,item:!0},u.a.createElement(m.a,{xs:4,item:!0},u.a.createElement(v.a,{variant:"subtitle2"},"T\u1ed5ng ti\u1ec1n qu\u1eb9t:"," ",Object(x.j)(null===R||void 0===R?void 0:R.total_price,!0)," \u0111")),u.a.createElement(m.a,{xs:4,item:!0},u.a.createElement(v.a,{variant:"subtitle2"},"Th\xe0nh ti\u1ec1n:"," ",Object(x.j)(null===R||void 0===R?void 0:R.total_payment_agent,!0)," ","\u0111")),u.a.createElement(m.a,{xs:4,item:!0},u.a.createElement(v.a,{variant:"subtitle2"},"S\u1ed1 ti\u1ec1n \u0111\xe3 CK:"," ",Object(x.j)(null===R||void 0===R?void 0:R.total_transfer,!0)," \u0111")),u.a.createElement(m.a,{xs:4,item:!0},u.a.createElement(v.a,{variant:"subtitle2"},"C\xf2n l\u1ea1i: ",Object(x.j)(null===R||void 0===R?void 0:R.total_cash,!0)," ","\u0111"))),u.a.createElement(m.a,{xs:12,item:!0},u.a.createElement(K,{data:t,changeActive:c,setChangeActive:o,handeChangeActive:i,updateItem:a,removeItem:n,pageIndex:d,setPageIndex:s,totalRecords:E,permissions:w,paymentGateVPBank:k,onCreateLink:C,onDoneAssgin:D,reloadData:W})))))},X=a(1402),Y=a(41),q=a(1381),Q=a(1384),J=(a(1387),a(620));t.default=Object(M.b)((function(e){return{}}),{showLoading:q.b,hideLoading:q.a})((function(e){var t=Object(l.useState)(""),a=Object(i.a)(t,2),r=a[0],s=a[1],d=Object(l.useState)(null),m=Object(i.a)(d,2),f=m[0],p=m[1],b=Object(l.useState)(),h=Object(i.a)(b,2),g=h[0],v=h[1],j=Object(l.useState)([]),y=Object(i.a)(j,2),E=y[0],w=y[1],k=Object(l.useState)({}),C=Object(i.a)(k,2),D=C[0],S=C[1],_=Object(l.useState)(),P=Object(i.a)(_,2),T=P[0],A=P[1],R=Object(l.useState)([]),N=Object(i.a)(R,2),I=N[0],L=N[1],M=Object(l.useState)(1),z=Object(i.a)(M,2),B=z[0],H=z[1],F=Object(l.useState)(0),K=Object(i.a)(F,2),U=K[0],V=K[1],q=Object(l.useState)(10),Z=Object(i.a)(q,1)[0],$=Object(l.useState)(0),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ne=Object(l.useState)(),re=Object(i.a)(ne,2),ce=re[0],oe=re[1],ie=Object(l.useState)(new Date),le=Object(i.a)(ie,2),ue=le[0],se=le[1],de=Object(Q.a)(r,1e3),me=Object(O.g)(),fe=Object(l.useState)([]),pe=Object(i.a)(fe,2),be=pe[0],he=pe[1];Object(l.useEffect)((function(){ge()}),[]),Object(l.useEffect)((function(){je(!1)}),[U]),Object(l.useEffect)((function(){je(!0)}),[de,f,g,ue,T]);var ge=function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.m)({});case 2:return 200==(t=e.sent).data.code&&t.data.data&&w(t.data.data),e.next=6,Object(J.c)({});case 6:200==(a=e.sent).data.code&&a.data.data&&L(a.data.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(o.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),je=function(){var t=Object(o.a)(c.a.mark((function t(a){var r,o,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.showLoading(),!a){t.next=8;break}return V(0),t.next=5,Object(X.f)({page_index:1,page_size:Z,keyword:de,status:f||null,pos_id:g||null,date_from:ce?Object(x.i)(ce):null,date_to:ue?Object(x.i)(ue):null,agent_date_from:ce?Object(x.i)(ce):null,agent_date_to:ue?Object(x.i)(ue):null,agent_id:T||null});case 5:r=t.sent,t.next=11;break;case 8:return t.next=10,Object(X.f)({page_index:U+1,page_size:Z,keyword:de,status:f||null,pos_id:g||null,date_from:ce?Object(x.i)(ce):null,date_to:ue?Object(x.i)(ue):null,agent_id:T||null});case 10:r=t.sent;case 11:if(e.hideLoading(),200!=r.data.code||!r.data.data){t.next=19;break}i=null===(o=r.data.data)||void 0===o?void 0:o.data.map((function(e,t){var a,r,c;return Object(n.a)(Object(n.a)({},e),{},{index:t+1+U*Z,household:null===e||void 0===e||null===(a=e.hokinhdoanh)||void 0===a?void 0:a.name,pos_name:null===e||void 0===e||null===(r=e.pos)||void 0===r?void 0:r.name,time_end:Object(x.d)(null===e||void 0===e?void 0:e.time_end),agency:null===e||void 0===e||null===(c=e.agency)||void 0===c?void 0:c.name})})),he(i),ae(r.data.data.total_elements),S(r.data.data.total_payment),t.next=27;break;case 19:if(401!=r.data.code){t.next=26;break}return t.next=22,localStorage.removeItem(Y.a.API_TOKEN);case 22:setTimeout((function(){me.push("/")}),1e3),W.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=27;break;case 26:W.c.error(null===(l=r.data)||void 0===l?void 0:l.error,{theme:"colored"});case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Oe=function(){var t=Object(o.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(X.b)(a);case 3:n=t.sent,e.hideLoading(),200==n.data.code?(je(),W.c.success("Xo\xe1 l\xf4 ti\u1ec1n th\xe0nh c\xf4ng!",{theme:"colored"})):W.c.error(null===(r=n.data)||void 0===r?void 0:r.error,{theme:"colored"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(G,{data:be,removeItem:Oe,setTxtSearch:s,setActiveSeleted:p,pageIndex:U,changeActive:B,setChangeActive:H,setPageIndex:V,activeSelected:f,handeChangeActive:ve,totalRecords:te,onDoneAssgin:function(){je(!1)},household:g,setHousehold:v,listHousehold:E,changeDateRange:function(e,t){oe(e),se(t)},startDate:ce,report:D,agent:T,setAgent:A,listAgent:I,reloadData:function(){je()}})}))}}]);