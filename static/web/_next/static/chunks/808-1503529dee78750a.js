(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[808],{60808:function(e,t,n){"use strict";n.d(t,{u:function(){return ze}});var r=n(85893),s=n(9764),a=n(67294),o=n(36531),i=n(11622),c=n(13545),l=n.n(c),u=n(14924),d=n(47049),h=n(86492),m=n.n(h),f=n(94184),p=n.n(f),g=n(94199),x=n(29158),v=n(4480),j=n(78583),_=n.n(j);function y(e){var t=new Date(e);if(Number.isNaN(t))return"";if(function(e){var t="string"===typeof e?new Date(e):e;return(new Date-t)/864e5}(e)>=1){var n=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"at ".concat(n," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var C,M,N,b,w,S=n(47568),Z=n(70655),k=n(11475),E=n(90420),T=n(18429),A=n(64942),D=n(85402),B=n(12461),O=n(66516),U=n(38504),I=n(26713),P=n(32365),R=n(54907),L=n(25968),F=n(6226),H=n(71577),W=n(11382),z=n(20550),J=n(10355),V=n(58091),Y=n(48689),G=n(51438),X=function(){function e(){(0,G.Z)(this,e)}return e.removeMessage=function(e,t){return(0,S.Z)((function(){var n,r,s;return(0,Z.__generator)(this,(function(a){switch(a.label){case 0:return(n=new URL("/api/chat/messagevisibility",window.location.toString())).searchParams.append("accessToken",t),r=n.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[e]})},[4,fetch(r,s)];case 1:return a.sent(),[2]}}))}))()},e.banUser=function(e,t){return(0,S.Z)((function(){var n,r,s;return(0,Z.__generator)(this,(function(a){switch(a.label){case 0:return(n=new URL("/api/chat/users/setenabled",window.location.toString())).searchParams.append("accessToken",t),r=n.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})},[4,fetch(r,s)];case 1:return a.sent(),[2]}}))}))()},e}(),K=n(62638),q=n.n(K),Q=n(2766),$=R.Z.Panel,ee=function(){var e=(0,S.Z)((function(e,t){return(0,Z.__generator)(this,(function(n){try{X.removeMessage(e,t)}catch(r){console.error(r)}return[2]}))}));return function(t,n){return e.apply(this,arguments)}}(),te=function(e){var t=e.label,n=e.value;return(0,r.jsxs)(L.Z,{justify:"space-around",align:"middle",children:[(0,r.jsx)(F.Z,{span:12,children:t}),(0,r.jsx)(F.Z,{span:12,children:n})]})},ne=function(e){var t=e.client,n=t.messageCount,s=t.connectedAt,a=t.geo,o=(0,V.Z)(new Date(s),"PP pp");return(0,r.jsxs)("div",{children:[(0,r.jsx)(te,{label:"Messages Sent",value:"".concat(n)}),"N/A"!==a&&(0,r.jsx)(te,{label:"Geo",value:a}),(0,r.jsx)(te,{label:"Connected At",value:o})]})},re=function(e){var t=e.color,n="var(--theme-color-users-".concat(t,")");return(0,r.jsxs)("div",{className:q().colorBlock,style:{backgroundColor:n},children:["Color ",t]})},se=function(e){var t=e.userId,n=e.accessToken,s=(0,a.useState)(null),o=s[0],i=s[1],c=(0,a.useState)(!0),l=c[0],u=c[1],d=function(){var e=(0,S.Z)((function(){var e,r;return(0,Z.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,fetch("/api/moderation/chat/user/".concat(t,"?accessToken=").concat(n))];case 1:return[4,s.sent().json()];case 2:return e=s.sent(),i(e),u(!1),[3,4];case 3:return r=s.sent(),console.error(r),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();if((0,a.useEffect)((function(){d()}),[]),!o)return null;var h=o.user,m=o.connectedClients,f=o.messages,p=h.displayColor,g=h.createdAt,x=h.previousNames,v=h.scopes,j=h.isBot,_=h.authenticated,y=m.reduce((function(e,t){return e+t.messageCount}),0),C=(0,V.Z)(new Date(g),"PP pp"),M=[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:function(e){return(0,V.Z)(new Date(e),"PP pp")}},{title:"Delete",key:"delete",render:function(e,t){return(0,r.jsx)(H.Z,{type:"primary",ghost:!0,icon:(0,r.jsx)(Y.Z,{}),onClick:function(){return ee(t.id,n)}})}}];return(0,r.jsxs)(W.Z,{spinning:l,children:[(0,r.jsx)(re,{color:p}),v.map((function(e){return(0,r.jsx)(z.Z,{children:e},e)})),_&&(0,r.jsx)(z.Z,{children:"Authenticated"}),j&&(0,r.jsx)(z.Z,{children:"Bot"}),(0,r.jsx)(te,{label:"Messages Sent Across Clients",value:y.toString()}),(0,r.jsx)(te,{label:"User Created",value:C}),(0,r.jsx)(te,{label:"Known As",value:x.join(",")}),(0,r.jsxs)(R.Z,{accordion:!0,children:[(0,r.jsx)($,{header:"Currently Connected Clients",children:(0,r.jsx)(R.Z,{accordion:!0,children:m.map((function(e){return(0,r.jsx)($,{header:(0,Q.AB)(e.userAgent),children:(0,r.jsx)(ne,{client:e})},e.userAgent)}))})},"connected-clients"),(0,r.jsx)(R.Z,{accordion:!0,children:(0,r.jsx)($,{header:"Recent Chat Messages",children:(0,r.jsx)(J.Z,{size:"small",pagination:null,columns:M,dataSource:f})},"chat-messages")})]})]})},ae=n(31833),oe=n.n(ae),ie=D.Z.confirm,ce=function(e){var t=e.messageID,n=e.userID,s=e.userDisplayName,o=e.accessToken,i=(0,a.useState)(!1),c=i[0],l=i[1],u=function(){var e=(0,S.Z)((function(){var e;return(0,Z.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,X.banUser(n,o)];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),console.error(e),B.ZP.error(e),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,S.Z)((function(){var e;return(0,Z.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,X.removeMessage(t,o)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),console.error(e),B.ZP.error(e),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,S.Z)((function(){return(0,Z.__generator)(this,(function(e){return ie({icon:(0,r.jsx)(k.Z,{}),content:"Are you sure you want to remove this message from ".concat(s,"?"),onOk:function(){d()}}),[2]}))}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,S.Z)((function(){return(0,Z.__generator)(this,(function(e){return ie({icon:(0,r.jsx)(k.Z,{}),content:"Are you sure you want to ban ".concat(s," from chat?"),onOk:function(){u()}}),[2]}))}));return function(){return e.apply(this,arguments)}}(),f=(0,r.jsx)(O.Z,{onClick:function(e){var t=e.key;"hide-message"===t?h():"ban-user"===t?m():"more-info"===t&&l(!0)},items:[{label:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:oe().icon,children:(0,r.jsx)(E.Z,{})}),"Hide Message"]}),key:"hide-message"},{label:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:oe().icon,children:(0,r.jsx)(T.Z,{})}),"Ban User"]}),key:"ban-user"},{label:(0,r.jsx)("div",{children:"More Info..."}),key:"more-info"}]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{overlay:f,trigger:["click"],children:(0,r.jsx)("button",{type:"button",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)(I.Z,{children:(0,r.jsx)(A.Z,{})})})}),(0,r.jsx)(P.u,{title:s,visible:c,handleCancel:function(){l(!1)},children:(0,r.jsx)(se,{userId:n,accessToken:o})})]})},le=n(79010),ue=n.n(le),de=function(e){var t=e.badge,n=e.userColor,s="var(--theme-user-colors-".concat(n,")"),a={color:s,borderColor:s};return(0,r.jsx)("span",{style:a,className:ue().badge,children:t})},he=n(1899),me=function(e){var t=e.message,n=e.highlightString,s=e.showModeratorMenu,o=e.sentBySelf,i=e.sameUserAsLast,c=e.isAuthorModerator,l=e.isAuthorAuthenticated,h=t.id,f=t.body,j=t.user,C=t.timestamp,M=j.id,N=j.displayName,b=j.displayColor,w=(0,v.sJ)(he.FI),S="var(--theme-color-users-".concat(b,")"),Z="Sent ".concat(y(C)),k=(0,a.useState)(f),E=k[0],T=k[1],A=[];return c&&A.push((0,r.jsx)(de,{badge:"mod",userColor:b},"mod")),l&&A.push((0,r.jsx)(de,{badge:(0,r.jsx)(x.Z,{title:"authenticated"}),userColor:b},"auth")),(0,a.useEffect)((function(){T(m().decode(f))}),[t]),(0,r.jsx)("div",{className:p()(_().messagePadding,i&&_().messagePaddingCollapsed),children:(0,r.jsxs)("div",{className:p()(_().root,(0,u.Z)({},_().ownMessage,o)),style:{borderColor:S},children:[!i&&(0,r.jsx)(g.Z,{title:"user info goes here",placement:"topLeft",mouseEnterDelay:1,children:(0,r.jsxs)("div",{className:_().user,style:{color:S},children:[(0,r.jsx)("span",{className:_().userName,children:N}),(0,r.jsx)("span",{children:A})]})}),(0,r.jsx)(g.Z,{title:Z,mouseEnterDelay:1,children:(0,r.jsx)(d.y,{search:n,children:(0,r.jsx)("div",{className:_().message,dangerouslySetInnerHTML:{__html:E}})})}),s&&(0,r.jsx)("div",{className:_().modMenuWrapper,children:(0,r.jsx)(ce,{messageID:h,accessToken:w,userID:M,userDisplayName:N})}),(0,r.jsx)("div",{className:_().background,style:{color:S}})]})})},fe=n(26042),pe=n(69396),ge=n(828),xe=n(93045),ve=n(27496),je=n(55241),_e=n(77493),ye=n(96391),Ce=n(57741),Me=function(e){var t=(0,a.useState)([]),n=t[0],s=t[1],o=e.onEmojiSelect,i=e.onCustomEmojiSelect,c=(0,a.useRef)(),l=function(){var e=(0,S.Z)((function(){var e,t;return(0,Z.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch("/api/emoji")];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),s(e),[3,4];case 3:return t=n.sent(),console.error("cannot fetch custom emoji",t),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){l()}),[]),(0,a.useEffect)((function(){var e=n.map((function(e){return{emoji:e.name,label:e.name,url:e.url}}));(0,Ce.wU)({rootElement:c.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0}).addEventListener("emoji:select",(function(e){e.url?i(e):o(e)}))}),[n]),(0,r.jsx)("div",{ref:c})},Ne=n(25882),be=n.n(Ne),we=function(e){var t=e.attributes,n=e.element,s=e.children,a=(0,ye.vt)(),o=(0,ye.UE)();return(0,r.jsxs)("span",(0,pe.Z)((0,fe.Z)({},t),{contentEditable:!1,children:[(0,r.jsx)("img",{alt:n.alt,src:n.src,title:n.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(a&&o?"0 0 0 3px #B4D5FF":"none")}}),s]}))},Se=function(e){var t,n;if(_e.xv.isText(e))return e.text;0===e.children.length?t=[{text:""}]:t=null===(n=e.children)||void 0===n?void 0:n.map((function(e){return Se(e)})).join("");switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},Ze=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],s=(0,v.sJ)(he.Gt),o=(0,a.useMemo)((function(){return(0,ye.BU)(function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||t(e)},e.isInline=function(e){return"image"===e.type},e}((0,_e.Jh)()))}),[]),c=function(){if(s){var e=Se(o);s.send({type:i.C.CHAT,body:e}),_e.YR.delete(o,{at:{anchor:_e.ML.start(o,[]),focus:_e.ML.end(o,[])}})}else console.log("websocketService is not defined")},l=function(e,t){if(e){var n=o.selection,r=function(e,t,n){return{type:"image",alt:e,src:t,name:n,children:[{text:""}]}}(t,e,t);if(_e.YR.insertNodes(o,r,{select:!0}),n){var s,a=(0,ge.Z)(_e.ML.parent(o,null===(s=n.focus)||void 0===s?void 0:s.path),2),i=a[0],c=a[1];o.isVoid(i)||_e.NB.string(i).length?_e.YR.insertNodes(o,r,{at:_e.y$.next(c),select:!0}):(_e.YR.insertNodes(o,r,{at:c,select:!0}),_e.ML.normalize(o,{force:!0}))}else _e.YR.insertNodes(o,r,{select:!0})}};return(0,r.jsx)("div",{className:be().root,children:(0,r.jsxs)("div",{className:be().inputWrap,children:[(0,r.jsxs)(ye.mH,{editor:o,value:[{type:"paragraph",children:[{text:""}]}],children:[(0,r.jsx)(ye.CX,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),c())},renderElement:function(e){return"image"===e.element.type?(0,r.jsx)(we,(0,fe.Z)({},e)):(0,r.jsx)("p",(0,fe.Z)({},e))},placeholder:"Chat message goes here...",style:{width:"100%"},autoFocus:!0}),(0,r.jsx)(je.Z,{content:(0,r.jsx)(Me,{onEmojiSelect:function(e){if(ye.F3.focus(o),e.url){var t=e.url;l(t,t)}else{var n=e.emoji;_e.YR.insertText(o,n)}},onCustomEmojiSelect:function(e){ye.F3.focus(o);var t=e.url;l(t,t)}}),trigger:"click",onVisibleChange:function(e){return n(e)},visible:t})]}),(0,r.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,r.jsx)("button",{type:"button",className:be().emojiButton,title:"Emoji picker button",onClick:function(){return n(!t)},children:(0,r.jsx)(xe.Z,{})}),(0,r.jsx)("button",{type:"button",className:be().emojiButton,title:"Send message Button",onClick:c,children:(0,r.jsx)(ve.Z,{})})]})]})})},ke=n(93174),Ee=n.n(ke);function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}var Ae=function(e){return a.createElement("svg",Te({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg"},e),C||(C=a.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},a.createElement("stop",{offset:0,stopColor:"#2087e2"}),a.createElement("stop",{offset:1,stopColor:"#b63fff"}))),M||(M=a.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),N||(N=a.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),b||(b=a.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),w||(w=a.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))},De=function(){return(0,r.jsxs)("div",{className:Ee().chatModerationNotification,children:[(0,r.jsx)(Ae,{className:Ee().icon}),"You are now a moderator."]})},Be=n(31681),Oe=n.n(Be),Ue=function(e){var t=e.message,n=t.body,s=t.user.displayName,a=e.highlightString;return(0,r.jsxs)("div",{className:Oe().chatSystemMessage,children:[(0,r.jsx)("div",{className:Oe().user,children:(0,r.jsx)("span",{className:Oe().userName,children:s})}),(0,r.jsx)(d.y,{search:a,children:(0,r.jsx)("div",{className:Oe().message,dangerouslySetInnerHTML:{__html:n}})})]})},Ie=n(83066),Pe=n.n(Ie),Re=function(e){var t=e.isAuthorModerator,n=e.userColor,s=e.displayName,a="var(--theme-user-colors-".concat(n,")");return(0,r.jsxs)("div",{className:Pe().join,children:[(0,r.jsxs)("span",{style:{color:a},children:[s,t&&(0,r.jsx)("span",{children:(0,r.jsx)(de,{badge:"mod",userColor:n})})]})," ","joined the chat."]})},Le=n(66017),Fe=function(e){var t=e.chatContainerRef,n=e.messages;return(0,r.jsx)("div",{className:l().toBottomWrap,children:(0,r.jsx)(H.Z,{type:"default",style:{color:"currentColor"},icon:(0,r.jsx)(Le.Z,{}),onClick:function(){return t.current.scrollToIndex({index:n.length-1,behavior:"smooth"})},children:"Go to last message"})})};function He(e,t){if(e.length<2)return!1;var n=e[t],r=n.user.id,s=e[t-1];if((null===s||void 0===s?void 0:s.type)!==i.C.CHAT)return!1;if(!s.timestamp||!n.timestamp)return!1;var a=new Date(s.timestamp).getTime();return!(new Date(n.timestamp).getTime()-a>12e4)&&r===(null===s||void 0===s?void 0:s.user.id)}function We(e){var t=e.user.scopes;return!(!t||0===t.length)&&t.includes("MODERATOR")}var ze=function(e){var t=e.messages,n=e.usernameToHighlight,c=e.chatUserId,u=e.isModerator,d=e.showInput,h=e.height,m=(0,a.useState)(!1),f=m[0],p=m[1],g=(0,a.useRef)(null),x=function(e,s){switch(s.type){case i.C.CHAT:var a,d,h;return(0,r.jsx)(me,{message:s,showModeratorMenu:u,highlightString:n,sentBySelf:(null===(a=s.user)||void 0===a?void 0:a.id)===c,sameUserAsLast:He(t,e),isAuthorModerator:null===(d=s.user.scopes)||void 0===d?void 0:d.includes("MODERATOR"),isAuthorAuthenticated:null===(h=s.user)||void 0===h?void 0:h.authenticated},s.id);case i.C.NAME_CHANGE:return function(e){var t=e.oldName,n=e.user,s=n.displayName,a=n.displayColor,i="var(--theme-color-users-".concat(a,")");return(0,r.jsxs)("div",{className:l().nameChangeView,children:[(0,r.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,r.jsx)(o.Z,{})}),(0,r.jsxs)("div",{className:l().nameChangeText,children:[(0,r.jsx)("span",{style:{color:i},children:t}),(0,r.jsx)("span",{className:l().plain,children:" is now known as "}),(0,r.jsx)("span",{style:{color:i},children:s})]})]})}(s);case i.C.CONNECTED_USER_INFO:return function(e){if(!We(e))return(0,r.jsx)("div",{style:{width:"1px",height:"1px"}});return(0,r.jsx)(De,{})}(s);case i.C.USER_JOINED:return function(e){var t=e.user,n=t.displayName,s=t.displayColor,a=We(e);return(0,r.jsx)(Re,{displayName:n,userColor:s,isAuthorModerator:a})}(s);case i.C.SYSTEM:return(0,r.jsx)(Ue,{message:s,highlightString:n},s.id);default:return null}},v=(0,a.useMemo)((function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.OO,{style:{height:h},className:l().virtuoso,ref:g,initialTopMostItemIndex:t.length-1,data:t,itemContent:function(e,t){return x(e,t)},followOutput:"auto",alignToBottom:!0,atBottomStateChange:function(e){return p(e)}}),!f&&(0,r.jsx)(Fe,{chatContainerRef:g,messages:t})]})}),[t,n,c,u,f]);return(0,r.jsxs)("div",{className:l().chatContainer,children:[v,d&&(0,r.jsx)(Ze,{})]})};ze.defaultProps={showInput:!0,height:"auto"}},32365:function(e,t,n){"use strict";n.d(t,{u:function(){return u}});var r=n(85893),s=n(85402),a=n(26303),o=n(11382),i=n(67294),c=n(78890),l=n.n(c),u=function(e){var t=e.title,n=e.url,c=e.visible,u=e.handleOk,d=e.handleCancel,h=e.afterClose,m=e.height,f=e.width,p=e.children,g=(0,i.useState)(!!n),x=g[0],v=g[1],j={padding:"0px",minHeight:m},_=n&&(0,r.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,onLoad:function(){return v(!1)}}),y=x?"none":"inline";return(0,r.jsx)(s.Z,{title:t,visible:c,onOk:u,onCancel:d,afterClose:h,bodyStyle:j,width:f,zIndex:9999,footer:null,centered:!0,destroyOnClose:!0,children:(0,r.jsxs)(r.Fragment,{children:[x&&(0,r.jsx)(a.Z,{active:x,style:{padding:"10px"},paragraph:{rows:10}}),_&&(0,r.jsx)("div",{style:{display:y},children:_}),p&&(0,r.jsx)("div",{className:l().content,children:p}),x&&(0,r.jsx)(o.Z,{className:l().spinner,spinning:x,size:"large"})]})})};u.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0,height:"40vh",width:"70%"}},13545:function(e){e.exports={chatHeader:"ChatContainer_chatHeader__EJsYI",toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",toBottomBtn:"ChatContainer_toBottomBtn__453AG",nameChangeView:"ChatContainer_nameChangeView__ziyXN",nameChangeText:"ChatContainer_nameChangeText__yXG__",plain:"ChatContainer_plain__IPS19",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz"}},83066:function(e){e.exports={join:"ChatJoinMessage_join__fP0IQ"}},31833:function(e){e.exports={icon:"ChatModerationActionMenu_icon__9j6DF"}},62638:function(e){e.exports={modalContainer:"ChatModerationDetailsModal_modalContainer__czndV",chatHistory:"ChatModerationDetailsModal_chatHistory__PunRk",colorBlock:"ChatModerationDetailsModal_colorBlock___rAlw",displayName:"ChatModerationDetailsModal_displayName__p7pLI"}},93174:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},31681:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},25882:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",emojiButton:"ChatTextField_emojiButton__ON_Cu"}},79010:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},78583:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}},78890:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}}}]);