(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[25],{1381:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(280),r=function(){return{type:a.b}},c=function(){return{type:a.a}}},1391:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b}));var a=n(3),r=n.n(a),c=n(11),o=n(15),i=n(16),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlCreatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlUpdatePoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDetailPoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDeletePoss,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlChangeStatusPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlAssignPoss,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1398:function(e,t,n){"use strict";var a=n(6),r=n(34),c=n(1),o=n(0),i=(n(5),n(4)),u=n(12),s=n(618),l=n(211),d=n(30),p=n(376),f=n(29),b="undefined"===typeof window?o.useEffect:o.useLayoutEffect,m=o.forwardRef((function(e,t){var n=e.alignItems,r=void 0===n?"center":n,u=e.autoFocus,m=void 0!==u&&u,g=e.button,h=void 0!==g&&g,v=e.children,O=e.classes,j=e.className,y=e.component,x=e.ContainerComponent,w=void 0===x?"li":x,E=e.ContainerProps,k=(E=void 0===E?{}:E).className,C=Object(a.a)(E,["className"]),N=e.dense,P=void 0!==N&&N,L=e.disabled,_=void 0!==L&&L,M=e.disableGutters,S=void 0!==M&&M,D=e.divider,I=void 0!==D&&D,T=e.focusVisibleClassName,V=e.selected,R=void 0!==V&&V,G=Object(a.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=o.useContext(p.a),q={dense:P||F.dense||!1,alignItems:r},K=o.useRef(null);b((function(){m&&K.current&&K.current.focus()}),[m]);var A=o.Children.toArray(v),z=A.length&&Object(l.a)(A[A.length-1],["ListItemSecondaryAction"]),B=o.useCallback((function(e){K.current=f.findDOMNode(e)}),[]),H=Object(d.a)(B,t),$=Object(c.a)({className:Object(i.a)(O.root,j,q.dense&&O.dense,!S&&O.gutters,I&&O.divider,_&&O.disabled,h&&O.button,"center"!==r&&O.alignItemsFlexStart,z&&O.secondaryAction,R&&O.selected),disabled:_},G),J=y||"li";return h&&($.component=y||"div",$.focusVisibleClassName=Object(i.a)(O.focusVisible,T),J=s.a),z?(J=$.component||y?J:"div","li"===w&&("li"===J?J="div":"li"===$.component&&($.component="div")),o.createElement(p.a.Provider,{value:q},o.createElement(w,Object(c.a)({className:Object(i.a)(O.container,k),ref:H},C),o.createElement(J,$,A),A.pop()))):o.createElement(p.a.Provider,{value:q},o.createElement(J,Object(c.a)({ref:H},$),A))})),g=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m),h=o.forwardRef((function(e,t){var n,r=e.classes,u=e.className,s=e.component,l=void 0===s?"li":s,d=e.disableGutters,p=void 0!==d&&d,f=e.ListItemClasses,b=e.role,m=void 0===b?"menuitem":b,h=e.selected,v=e.tabIndex,O=Object(a.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==v?v:-1),o.createElement(g,Object(c.a)({button:!0,role:m,tabIndex:n,component:l,selected:h,disableGutters:p,classes:Object(c.a)({dense:r.dense},f),className:Object(i.a)(r.root,u,h&&r.selected,!p&&r.gutters),ref:t},O))}));t.a=Object(u.a)((function(e){return{root:Object(c.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(c.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(h)},1402:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return b}));var a=n(3),r=n.n(a),c=n(11),o=n(15),i=n(16),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlCreateLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.urlUpdateLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDetailLotMoney,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)("".concat(i.a.urlDeleteLotMoney,"/").concat(t),{}).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.c)(i.a.urlGetListReciprocal,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.d)(i.a.finalLotMoney,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1414:function(e,t,n){"use strict";var a=n(1),r=n(6),c=n(34),o=n(0),i=(n(5),n(4)),u=n(12),s=o.forwardRef((function(e,t){var n=e.classes,c=e.className,u=e.component,s=void 0===u?"div":u,l=e.disableGutters,d=void 0!==l&&l,p=e.variant,f=void 0===p?"regular":p,b=Object(r.a)(e,["classes","className","component","disableGutters","variant"]);return o.createElement(s,Object(a.a)({className:Object(i.a)(n.root,n[f],c,!d&&n.gutters),ref:t},b))}));t.a=Object(u.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(c.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(s)},1431:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(14),r=n(3),c=n.n(r),o=n(11),i=n(8),u=n(25),s=n(0),l=n.n(s),d=n(1362),p=n(1366),f=n(1367),b=n(1364),m=n(1398),g=n(1361),h=n(58),v=n(1376),O=(n(279),n(44)),j=n(620),y=n(1391);function x(e){var t=e.open,n=e.setOpen,r=e.selected,x=e.onDoneAssgin,w=Object(s.useState)({}),E=Object(u.a)(w,2),k=E[0],C=E[1],N=Object(s.useState)([]),P=Object(u.a)(N,2),L=P[0],_=P[1];Object(v.a)().t;function M(){n(!1),C({})}Object(s.useEffect)((function(){r&&(null===r||void 0===r?void 0:r.agent_id)&&C(Object(i.a)(Object(i.a)({},k),{},{agent_id:r.agent_id}))}),[r]),Object(s.useEffect)((function(){S()}),[]);var S=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)({});case 2:200==(t=e.sent).data.code&&t.data.data&&_(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){e.persist(),"price"===e.target.name?null!==e.target.value&&C(Object(i.a)(Object(i.a)({},k),{},Object(a.a)({},e.target.name,e.target.value.split(".").join("")))):C(Object(i.a)(Object(i.a)({},k),{},Object(a.a)({},e.target.name,e.target.value)))},I=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,Object(y.a)(Object(i.a)(Object(i.a)({},k),{},{pos_id:null===r||void 0===r?void 0:r.pos_id,agent_id:T}));case 3:200==(t=e.sent).data.code?(h.c.success("Cho thu\xea Poss th\xe0nh c\xf4ng!",{theme:"colored"}),n(!1),x(),C({})):h.c.error(t.data.error,{theme:"colored"}),e.next=8;break;case 7:h.c.warn("B\u1ea1n ch\u01b0a ch\u1ecdn Pos",{theme:"colored"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=k.agent_id,V=k.fee;return l.a.createElement(d.a,{open:t,onClose:M,"aria-labelledby":"form-dialog-title"},l.a.createElement(p.a,{id:"form-dialog-title"},"M\xe1y Pos kh\xf4ng thu\u1ed9c \u0111\u1ea1i l\xfd m\u1eddi g\u1eafn l\u1ea1i"),l.a.createElement(f.a,{style:{minWidth:400}},l.a.createElement(O.ValidatorForm,{onSubmit:I,onError:function(){return null}},l.a.createElement(b.a,{container:!0,spacing:2},l.a.createElement(b.a,{item:!0,lg:12,md:12,sm:12,xs:12},l.a.createElement(O.SelectValidator,{variant:"outlined",label:"\u0110\u1ea1i l\xfd *",className:"w-full",value:T,name:"agent_id",displayEmpty:!0,onChange:D,validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]},L.map((function(e){return l.a.createElement(m.a,{value:e.id},e.name)})))),l.a.createElement(b.a,{item:!0,lg:12,md:12,sm:12,xs:12},l.a.createElement(O.TextValidator,{variant:"outlined",className:"w-full",label:"Ph\xed Pos *",onChange:D,type:"text",name:"fee",value:V||"",validators:["required","isFloat"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Ph\xed m\u1eb7c \u0111\u1ecbnh kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"]}))),l.a.createElement(b.a,{className:"mt-8 mb-4",container:!0,justify:"flex-end"},l.a.createElement(g.a,{style:{marginRight:20},color:"inherit",variant:"contained",onClick:M},l.a.createElement("span",{className:"capitalize"},"Quay l\u1ea1i")),l.a.createElement(g.a,{color:"primary",variant:"contained",type:"submit"},l.a.createElement("span",{className:"capitalize"},"\u0110\u1ed3ng \xfd"))))))}},1436:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(34),r=n(0),c=(n(5),n(1313)),o=n(4),i=(n(1),n(6),n(1318)),u=n(1424),s=n(1428),l=(n(1422),n(88),n(1425)),d=(n(379),n(148),n(1411),n(1412),n(1410),Object(i.a)({toolbar:{flexDirection:"column",alignItems:"flex-start"},toolbarLandscape:{padding:16},dateLandscape:{marginRight:16}},{name:"MuiPickersDatePickerRoot"})),p=function(e){var t=e.date,n=e.views,a=e.setOpenView,i=e.isLandscape,l=e.openView,p=Object(c.b)(),f=d(),b=Object(r.useMemo)((function(){return Object(s.d)(n)}),[n]),m=Object(r.useMemo)((function(){return Object(s.b)(n)}),[n]);return Object(r.createElement)(u.b,{isLandscape:i,className:Object(o.a)(!b&&f.toolbar,i&&f.toolbarLandscape)},Object(r.createElement)(u.c,{variant:b?"h3":"subtitle1",onClick:function(){return a("year")},selected:"year"===l,label:p.getYearText(t)}),!b&&!m&&Object(r.createElement)(u.c,{variant:"h4",selected:"date"===l,onClick:function(){return a("date")},align:i?"left":"center",label:p.getDatePickerHeaderText(t),className:Object(o.a)(i&&f.dateLandscape)}),m&&Object(r.createElement)(u.c,{variant:"h4",onClick:function(){return a("month")},selected:"month"===l,label:p.getMonthText(t)}))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var b=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l.c,{openTo:"date",views:["year","date"]});function m(e){var t=Object(c.b)();return{getDefaultFormat:function(){return Object(s.c)(e.views,t)}}}var g=Object(u.g)({useOptions:m,Input:u.d,useState:u.i,DefaultToolbarComponent:p}),h=Object(u.g)({useOptions:m,Input:u.a,useState:u.e,DefaultToolbarComponent:p});g.defaultProps=b,h.defaultProps=b},1506:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(8),c=n(3),o=n.n(c),i=n(11),u=n(25),s=n(0),l=n.n(s),d=n(1364),p=n(1398),f=n(1361),b=n(44),m=n(120),g=n(47),h=n(52),v=n(279),O=n(1381),j=n(1402),y=n(1436),x=n(58),w=n(620),E=n(145);n(1431);t.default=Object(E.b)((function(e){return{}}),{showLoading:O.b,hideLoading:O.a})((function(e){var t=Object(g.g)(),n=Object(g.h)(),c=Object(s.useState)({fee:0,fee_cashback:0}),O=Object(u.a)(c,2),E=O[0],k=O[1],C=Object(s.useState)(),N=Object(u.a)(C,2),P=(N[0],N[1],Object(s.useState)()),L=Object(u.a)(P,2),_=(L[0],L[1],Object(s.useState)(new Date)),M=Object(u.a)(_,2),S=M[0],D=M[1],I=Object(s.useState)([]),T=Object(u.a)(I,2),V=T[0],R=T[1],G=Object(s.useState)([]),F=Object(u.a)(G,2),q=F[0],K=F[1];Object(s.useEffect)((function(){z(),A()}),[]);var A=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.m)({});case 2:return 200==(t=e.sent).data.code&&t.data.data&&R(t.data.data),e.next=6,Object(w.c)({});case 6:200==(n=e.sent).data.code&&n.data.data&&K(n.data.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var t=Object(i.a)(o.a.mark((function t(){var a,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.prev=1,t.next=4,Object(j.c)(n.state,{});case 4:i=t.sent,k(Object(r.a)(Object(r.a)({},i.data.data),{},{price_pos:parseInt(null===(a=i.data.data)||void 0===a?void 0:a.price_pos)})),D(new Date(null===(c=i.data.data)||void 0===c?void 0:c.time_process)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),x.c.error("L\u1ea5y th\xf4ng tin chi ti\u1ebft th\u1ea5t b\u1ea1i",{theme:"colored"});case 12:e.hideLoading();case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),B=function(){var n=Object(i.a)(o.a.mark((function n(a){var c,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!E){n.next=8;break}return c=Object(v.l)(E),e.showLoading(),n.next=5,Object(j.g)(Object(r.a)(Object(r.a)({},c),{},{lo_number:parseInt(null===c||void 0===c?void 0:c.lo_number),total_price:parseInt(null===c||void 0===c?void 0:c.total_price),time_end:Object(v.i)(S).substring(0,10)}));case 5:i=n.sent,e.hideLoading(),200==i.data.code?(t.push("/reciprocal"),x.c.success("C\u1eadp nh\u1eadt giao d\u1ecbch \u0111\u1ed1i \u1ee9ng th\xe0nh c\xf4ng!",{theme:"colored"})):x.c.error(i.data.error,{theme:"colored"});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),H=function(e){e.persist(),"total_price"===e.target.name||"require_amount"===e.target.name?null!==e.target.value&&k(Object(r.a)(Object(r.a)({},E),{},Object(a.a)({},e.target.name,e.target.value.split(".").join("")))):k(Object(r.a)(Object(r.a)({},E),{},Object(a.a)({},e.target.name,e.target.value)))},$=E.agent_id,J=E.pos_id,Q=E.lo_number,U=E.total_price,W=E.fee_agent;return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(m.a,{routeSegments:[{name:"\u0110\u1ed1i \u1ee9ng \u0111\u1ea1i l\xfd",path:"/reciprocal"},{name:"C\u1eadp nh\u1eadt"}]})),l.a.createElement(m.o,null,l.a.createElement(b.ValidatorForm,{onSubmit:B,onError:function(){return null}},l.a.createElement(d.a,{container:!0,spacing:3},q.length>0&&l.a.createElement(d.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(b.SelectValidator,{variant:"outlined",label:"Ch\u1ecdn \u0111\u1ea1i l\xfd *",className:"w-full",value:$,name:"agent_id",displayEmpty:!0,onChange:H,validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]},q.map((function(e){return l.a.createElement(p.a,{value:e.id},e.name)})))),J&&l.a.createElement(d.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(b.SelectValidator,{variant:"outlined",label:"Ch\u1ecdn m\xe1y Pos *",className:"w-full",value:J,name:"pos_id",displayEmpty:!0,onChange:H,validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]},V.map((function(e){return l.a.createElement(p.a,{value:e.id},e.name)})))),l.a.createElement(d.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(b.TextValidator,{variant:"outlined",className:"w-full",label:"S\u1ed1 l\xf4 *",onChange:H,type:"text",name:"lo_number",value:Q||"",validators:["required","isNumber"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Tr\u01b0\u1eddng n\xe0y ph\u1ea3i nh\u1eadp s\u1ed1 "]})),l.a.createElement(d.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(b.TextValidator,{variant:"outlined",className:"w-full",label:"T\u1ed5ng ti\u1ec1n *",onChange:H,type:"text",name:"total_price",value:Object(v.k)(U)||"",validators:["required"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y"]})),l.a.createElement(d.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(b.TextValidator,{variant:"outlined",className:"w-full",label:"Ph\xed \u0111\u1ea1i l\xfd *",onChange:H,type:"text",name:"fee_agent",value:W||"",validators:["required","isFloat"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","Ph\xed m\u1eb7c \u0111\u1ecbnh kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"]})),l.a.createElement(d.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(y.a,{placeholder:"dd/MM/yyyy",label:"Th\u1eddi gian x\u1eed l\xfd",disableToolbar:!0,inputVariant:"outlined",type:"datetime",fullWidth:!0,clearable:!0,format:"dd/MM/yyyy",value:S,onChange:function(e){D(e)},KeyboardButtonProps:{"aria-label":"change date"},maxDate:new Date}))),l.a.createElement(d.a,{style:{marginTop:20},container:!0,justify:"flex-end"},l.a.createElement(h.b,{to:"/reciprocal"},l.a.createElement(f.a,{style:{marginRight:20},color:"inherit",variant:"contained",onClick:function(){}},l.a.createElement("span",{className:"capitalize"},"Quay l\u1ea1i"))),l.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit"},l.a.createElement("span",{className:"capitalize"},"C\u1eadp nh\u1eadt")))))))}))}}]);