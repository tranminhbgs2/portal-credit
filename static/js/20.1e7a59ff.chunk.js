(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[20],{1381:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(280),r=function(){return{type:n.b}},c=function(){return{type:n.a}}},1382:function(e,t,a){"use strict";t.a={main:"#279925",white:"#ffffff",headerTable:"#5563CE",red:"#BF0707",green:"#279925"}},1383:function(e,t,a){"use strict";var n=a(1318),r=(a(1382),Object(n.a)((function(e){return{root:{width:"100%"},container:{maxHeight:580,wordBreak:"break-word !important"},action:{width:"130px"},image:{width:100,height:200,objectFit:"contain"},formControl:{minWidth:90,display:"flex",alignItems:"center",justifyContent:"center"},border:{borderRight:"0.05px solid #e0e0e0"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],borderRadius:5,padding:e.spacing(0,4,3),width:400,height:200},tableFooter:{paddingTop:5,paddingLeft:10,color:"white"},checkbox:{borderRadius:0,padding:0},columnTable:{writingMode:"horizontal-tb"},iconImge:{width:60,height:60}}})));t.a=r},1384:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(25),r=a(0);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=Object(r.useState)(e),c=Object(n.a)(a,2),i=c[0],o=c[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){o(e)}),t);return function(){return clearTimeout(a)}}),[e,t]),i}},1385:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(0),r=a.n(n),c=a(1361),i=a(1362),o=a(1369),l=a(1367),u=a(1368),s=a(1366),d=a(1320),m=r.a.forwardRef((function(e,t){return r.a.createElement(d.a,Object.assign({direction:"up",ref:t},e))}));function f(e){var t=e.open,a=e.handleClose,n=e.data,d=e.onAgree;return r.a.createElement(i.a,{open:t,maxWidth:"sm",fullWidth:!0,TransitionComponent:m,keepMounted:!0,onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(s.a,{id:"alert-dialog-slide-title"},n.title),r.a.createElement(l.a,null,r.a.createElement(u.a,{id:"alert-dialog-slide-description"},n.content)),r.a.createElement(o.a,null,r.a.createElement(c.a,{onClick:a,color:"primary"},"Quay l\u1ea1i"),r.a.createElement(c.a,{onClick:function(){d(),a()},color:"primary"},"\u0110\u1ed3ng \xfd")))}},1386:function(e,t,a){"use strict";var n=a(1407),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,c,i,o,l,u,s=!1;t||(t={}),a=t.debug||!1;try{if(i=n(),o=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=r[t.format]||r.default;window.clipboardData.setData(c,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),o.selectNodeContents(u),l.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(d){a&&console.error("unable to copy using execCommand: ",d),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(o):l.removeAllRanges()),u&&document.body.removeChild(u),i()}return s}},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(25),r=a(0),c=a.n(r),i=a(1318),o=a(1353),l=a(374),u=a(1361),s=a(378),d=a(279),m=Object(i.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function f(e){m();var t=c.a.useState(null),a=Object(n.a)(t,2),i=a[0],f=a[1];Object(r.useEffect)((function(){p()}),[]);var p=function(){var e=new Date;e.setTime(e.getTime()-432e6),e&&v({startDate:e,endDate:new Date})},g=Object(r.useState)(),b=Object(n.a)(g,2),h=b[0],v=b[1],j=Boolean(i),O=j?"simple-popover":void 0;return c.a.createElement("div",null,c.a.createElement(u.a,{style:{padding:10,height:41,width:200},variant:"outlined",onClick:function(e){f(e.currentTarget)}},e.date?c.a.createElement("p",null,Object(d.e)(h.startDate)," -"," ",Object(d.e)(h.endDate)," "):c.a.createElement("p",null,"dd/mm/YY-dd/mm/YY")),c.a.createElement(o.a,{id:O,open:j,anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(s.DateRangePicker,{ranges:[h],onChange:function(e){v(e.range1)}}),c.a.createElement("div",{style:{justifyContent:"right",alignItems:"flex-end",display:"flex",paddingRight:10,paddingBottom:15}},c.a.createElement(u.a,{style:{width:100,height:30,marginRight:20},onClick:function(){return e.changeDateRange(null,null),void f(null)},variant:"contained"},c.a.createElement(l.a,{variant:"caption"},"Hu\u1ef7")),c.a.createElement(u.a,{style:{width:100,height:30},onClick:function(){return e.changeDateRange(h.startDate,h.endDate),void f(null)},variant:"contained",color:"primary"},c.a.createElement(l.a,{variant:"caption"},"\xc1p d\u1ee5ng")))))}},1407:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1453:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(3),r=a.n(n),c=a(11),i=a(15),o=a(16),l=function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.a)("".concat(o.a.urlDetailRecipcal,"/").concat(t),a).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i.d)(o.a.urlListAccess,t).then((function(e){return e})).catch((function(e){return null})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1549:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(8),i=a(11),o=a(25),l=a(0),u=a.n(l),s=a(14),d=a(1318),m=a(1364),f=a(590),p=a(1359),g=a(1379),b=a(1371),h=a(374),v=a(120),j=a(1390),O=a(47),y=a(1382),x=a(279),E=a(278),w=a(1440),C=a(1441),k=a(1442),S=a(1443),T=a(1444),D=a(1445),A=a(1563),I=a(1307),_=a(1351),R=a(1564),P=a(1385),L=a(146),W=(a(1386),a(145)),N=a(58),z=a(1383),M=[{id:"index",label:"STT",align:"center",minWidth:50},{id:"trans_code",label:"M\xe3 y\xeau c\u1ea7u",align:"left",minWidth:160},{id:"name",label:"Ng\u01b0\u1eddi y\xeau c\u1ea7u",align:"left",minWidth:160},{id:"phone",label:"S\u0110T",align:"left",minWidth:120},{id:"amount",label:"S\u1ed1 ti\u1ec1n y\xeau c\u1ea7u",align:"left",minWidth:120,isMonney:!0},{id:"benefit",label:"L\u1ee3i nhu\u1eadn",align:"left",minWidth:120,isMonney:!0},{id:"amount_received_back",label:"S\u1ed1 ti\u1ec1n thu v\u1ec1",align:"left",minWidth:120,isMonney:!0},{id:"date_created",label:"Th\u1eddi gian",align:"left",minWidth:120},{id:"status_text",label:"Tr\u1ea1ng th\xe1i",align:"left",minWidth:120}];var B=Object(W.b)((function(e){return{}}),{})((function(e){var t=e.data,a=(e.handeChangeActive,e.removeItem),n=(e.changeActive,e.setChangeActive,e.setPageIndex),r=e.setPageSize,c=e.pageIndex,i=e.totalRecords,s=(e.permissions,e.paymentGateVPBank,e.onCreateLink,Object(z.a)()),d=Object(l.useState)(),m=Object(o.a)(d,2),f=(m[0],m[1],Object(l.useState)({fullname:"",sscid:""})),p=Object(o.a)(f,2),g=p[0],b=(p[1],u.a.useState(!1)),h=Object(o.a)(b,2),v=h[0],j=h[1],W=u.a.useState(!1),N=Object(o.a)(W,2),B=(N[0],N[1],Object(l.useState)([])),H=Object(o.a)(B,2),U=(H[0],H[1]),F=Object(l.useState)(!1),K=Object(o.a)(F,2),Y=(K[0],K[1],Object(l.useState)(!1)),G=Object(o.a)(Y,2),V=(G[0],G[1],Object(O.g)()),J=Object(l.useState)(!1),Q=Object(o.a)(J,2);Q[0],Q[1],Object(l.useEffect)((function(){U([])}),[t]);var X=function(){j(!1)};return Object(L.a)().user,u.a.createElement(E.a,{className:s.root},u.a.createElement(w.a,{className:s.container},u.a.createElement(C.a,{stickyHeader:!0,"aria-label":"sticky table"},u.a.createElement(k.a,null,u.a.createElement(S.a,null,M.map((function(e){return u.a.createElement(T.a,{key:e.id,align:"center",style:{width:e.minWidth,backgroundColor:y.a.headerTable,color:"white"}},e.label)})),u.a.createElement(T.a,{style:{width:100,textAlign:"center",backgroundColor:y.a.headerTable,color:"white"}},"H\xe0nh \u0111\u1ed9ng"))),u.a.createElement(D.a,{className:s.columnTable},t.map((function(e){return u.a.createElement(S.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},M.map((function(t){var a=e[t.id];return u.a.createElement(T.a,{key:t.id,align:t.align,style:{textAlign:"index"===t.id?"center":"string"==typeof a?"left":"right"}},t.isMonney?Object(x.j)(a):a)})),u.a.createElement(T.a,{className:s.action},u.a.createElement(A.a,{title:"C\u1eadp nh\u1eadt"},u.a.createElement(I.a,{onClick:function(){V.push({pathname:"/for-control/detail",state:e.id})},className:s.button,"aria-label":"eyes"},u.a.createElement(_.a,{color:"primary"},"visibility")))))}))))),u.a.createElement(P.a,{data:g,open:v,handleClose:X,onAgree:function(){a(g.id,g.accept),X()}}),u.a.createElement(R.a,{component:"div",page:c,count:i,rowsPerPage:10,rowsPerPageOptions:[],onChangePage:function(e,t){n(t)},onChangeRowsPerPage:function(e){r(e.target.value)}}))})),H=Object(d.a)((function(e){var t;return{home:{display:"flex",fontSize:20,marginTop:20,textTransform:"capitalize"},button:{textTransform:"capitalize",backgroundColor:y.a.main,color:"#fff",width:100,"&:hover":{backgroundColor:y.a.main}},formControl:{marginLeft:20},icon:{marginTop:3},title:{fontWeight:"bold"},buttons:(t={marginRight:e.spacing(2),textTransform:"capitalize"},Object(s.a)(t,"textTransform","capitalize"),Object(s.a)(t,"background","#4caf50 !important"),Object(s.a)(t,"color","#fff"),t),search:{minWidth:200},flexfilter:{display:"flex"},active:{marginLeft:30},addaccount:{color:"#fff",textDecoration:"none"}}}));var U=function(e){Object(O.g)();var t=e.data,a=e.updateItem,n=e.removeItem,r=e.setTxtSearch,c=e.changeActive,i=e.setChangeActive,o=e.handeChangeActive,s=e.setPageIndex,d=e.pageIndex,y=e.totalRecords,E=e.setActiveSeleted,w=e.activeSelected,C=e.permissions,k=(e.handleChangeError,e.handleDateChangeLast,e.datePicker,e.paymentGateVPBank),S=e.onCreateLink,T=e.listStatus,D=e.rootData,A=e.startDate,I=e.changeDateRange,_=H();return Object(L.a)().user,u.a.createElement(l.Fragment,null,u.a.createElement("div",{className:"m-sm-30"},u.a.createElement("div",{className:"mb-sm-30"},u.a.createElement(v.a,{routeSegments:[{name:"\u0110\u1ed1i so\xe1t",path:"/for-control"}]})),u.a.createElement(m.a,{container:!0,spacing:3},u.a.createElement(m.a,{item:!0,container:!0,spacing:2,lg:9,md:9,sm:9,xs:9},u.a.createElement(m.a,{item:!0,lg:3,md:3,sm:3,xs:3},u.a.createElement(f.a,{id:"outlined-basic",variant:"outlined",placeholder:"t\xecm ki\u1ebfm ...",onChange:function(e){return r(e.target.value)},className:_.search,fullWidth:!0})),u.a.createElement(m.a,{lg:3,md:3,sm:3,xs:3,item:!0},u.a.createElement(p.a,{variant:"outlined",className:_.formControl,fullWidth:!0},u.a.createElement(g.a,{htmlFor:"outlined-age-native-simple"},"Tr\u1ea1ng th\xe1i"),u.a.createElement(b.a,{fullWidth:!0,native:!0,label:"Tr\u1ea1ng th\xe1i",value:w,onChange:function(e){return E(e.target.value)},inputProps:{name:"age",id:"outlined-age-native-simple"}},u.a.createElement("option",{"aria-label":"T\u1ea5t c\u1ea3",value:""}),T.map((function(e){return u.a.createElement("option",{value:e.id},e.name)}))))),u.a.createElement(m.a,{style:{marginLeft:40},item:!0,lg:3,md:3,sm:3,xs:3},u.a.createElement(j.a,{date:A,changeDateRange:I}))),u.a.createElement(m.a,{xs:12,container:!0,item:!0},u.a.createElement(m.a,{xs:8,item:!0},u.a.createElement(h.a,{variant:"h6"},"T\u1ed5ng s\u1ed1 y\xeau c\u1ea7u \u0111\u1ed1i \u1ee9ng \u0111\xe3 duy\u1ec7t:"," ",Object(x.j)(null===D||void 0===D?void 0:D.total_access)," \u0111"),u.a.createElement(h.a,{variant:"h6"},"T\u1ed5ng s\u1ed1 ti\u1ec1n thu v\u1ec1:"," ",Object(x.j)(null===D||void 0===D?void 0:D.total_amount_received_back)," ","\u0111"),u.a.createElement(h.a,{variant:"h6"},"T\u1ed5ng s\u1ed1 ti\u1ec1n \u0111\xe3 gi\u1ea3i ng\xe2n:"," ",Object(x.j)(null===D||void 0===D?void 0:D.total_amount_pay)," \u0111"),u.a.createElement(h.a,{variant:"h6"},"T\u1ed5ng s\u1ed1 l\u1ee3i nhu\u1eadn:"," ",Object(x.j)(null===D||void 0===D?void 0:D.total_benefit)," \u0111"))),u.a.createElement(m.a,{xs:12,item:!0},u.a.createElement(B,{data:t,changeActive:c,setChangeActive:i,handeChangeActive:o,updateItem:a,removeItem:n,pageIndex:d,setPageIndex:s,totalRecords:y,permissions:C,paymentGateVPBank:k,onCreateLink:S})))))},F=a(1453),K=a(620),Y=a(41),G=a(1381),V=a(1384);t.default=Object(W.b)((function(e){return{}}),{showLoading:G.b,hideLoading:G.a})((function(e){var t=Object(l.useState)(""),a=Object(o.a)(t,2),n=a[0],s=a[1],d=Object(l.useState)(null),m=Object(o.a)(d,2),f=m[0],p=m[1],g=Object(l.useState)(1),b=Object(o.a)(g,2),h=b[0],v=b[1],j=Object(l.useState)(0),y=Object(o.a)(j,2),E=y[0],w=y[1],C=Object(l.useState)(10),k=Object(o.a)(C,1)[0],S=Object(l.useState)(0),T=Object(o.a)(S,2),D=T[0],A=T[1],I=Object(l.useState)([]),_=Object(o.a)(I,2),R=_[0],P=_[1],L=Object(V.a)(n,1e3),W=Object(l.useState)({}),z=Object(o.a)(W,2),M=z[0],B=z[1],H=Object(l.useState)(),G=Object(o.a)(H,2),J=G[0],Q=G[1],X=Object(l.useState)(new Date),q=Object(o.a)(X,2),Z=q[0],$=q[1],ee=Object(O.g)(),te=Object(l.useState)([]),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1];Object(l.useEffect)((function(){le()}),[E]),Object(l.useEffect)((function(){oe()}),[L,f,J]),Object(l.useEffect)((function(){ce()}),[]);var ce=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(K.k)();case 3:200==(t=e.sent).data.code&&t.data.data&&(a=t.data.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{name:e.value})})),P(a)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(i.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),oe=function(){var t=Object(i.a)(r.a.mark((function t(){var a,n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(0),e.showLoading(),t.next=4,Object(F.b)({trans_code:L,page_no:0,page_size:k,status:f,from_date:J?Object(x.e)(J):null,to_date:Z?Object(x.e)(Z):null});case 4:if(a=t.sent,e.hideLoading(),200!=a.data.code||!a.data.data){t.next=14;break}n=a.data.data.data,B(n),i=null===n||void 0===n?void 0:n.list_detail.map((function(e,t){return Object(c.a)(Object(c.a)({},e),{},{index:t+1+E*k})})),re(i),A(a.data.data.total_elements),t.next=25;break;case 14:if(401!=a.data.code){t.next=21;break}return t.next=17,localStorage.removeItem(Y.a.API_TOKEN);case 17:setTimeout((function(){ee.push("/")}),1e3),N.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=25;break;case 21:return t.next=23,localStorage.removeItem(Y.a.API_TOKEN);case 23:setTimeout((function(){ee.push("/")}),1e3),N.c.error("L\u1ea5y danh s\xe1ch nh\xe2n vi\xean th\u1ea5t b\u1ea1i!",{theme:"colored"});case 25:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),le=function(){var t=Object(i.a)(r.a.mark((function t(){var a,n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.showLoading(),t.next=3,Object(F.b)({trans_code:L,page_no:E+1,page_size:k,status:f,from_date:J?Object(x.e)(J):null,to_date:Z?Object(x.e)(Z):null});case 3:if(a=t.sent,e.hideLoading(),200!=a.data.code||!a.data.data){t.next=13;break}n=a.data.data.data,B(n),i=null===n||void 0===n?void 0:n.list_detail.map((function(e,t){return Object(c.a)(Object(c.a)({},e),{},{index:t+1+E*k})})),re(i),A(a.data.data.total_elements),t.next=24;break;case 13:if(401!=a.data.code){t.next=20;break}return t.next=16,localStorage.removeItem(Y.a.API_TOKEN);case 16:setTimeout((function(){ee.push("/")}),1e3),N.c.error("H\u1ebft phi\xean \u0111\u0103ng nh\u1eadp",{theme:"colored"}),t.next=24;break;case 20:return N.c.error("L\u1ea5y danh s\xe1ch nh\xe2n vi\xean th\u1ea5t b\u1ea1i!",{theme:"colored"}),t.next=23,localStorage.removeItem(Y.a.API_TOKEN);case 23:setTimeout((function(){ee.push("/")}),1e3);case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ue=function(){var e=Object(i.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return u.a.createElement(U,{data:ne,removeItem:ue,setTxtSearch:s,setActiveSeleted:p,pageIndex:E,changeActive:h,setChangeActive:v,setPageIndex:w,activeSelected:f,handeChangeActive:ie,totalRecords:D,listStatus:R,rootData:M,changeDateRange:function(e,t){Q(e),$(t)},startDate:J})}))}}]);