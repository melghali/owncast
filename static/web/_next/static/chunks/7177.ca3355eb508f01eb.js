(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{77177:function(e,o,l){"use strict";l.r(o),l.d(o,{FollowModal:function(){return h}});var s=l(85893),r=l(26713),t=l(11382),a=l(14670),n=l(79531),i=l(71577),c=l(67294),d=l(7839),u=l.n(d);let h=e=>{let{handleClose:o,account:l,name:d}=e,[h,w]=(0,c.useState)(null),[_,f]=(0,c.useState)(!1),[m,v]=(0,c.useState)(!1),[j,x]=(0,c.useState)(null),g=e=>{w(e),function(e){let o=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(o).toLowerCase())}(e)?f(!0):f(!1)},p=()=>{window.open("https://owncast.online/join-fediverse","_blank")},F=async()=>{if(_){v(!0);try{let e=h.replace(/^@+/,""),l=await fetch("/api/remotefollow",{method:"POST",body:JSON.stringify({account:e})}),s=await l.json();if(s.redirectUrl&&(window.open(s.redirectUrl,"_blank"),o()),!s.success){x(s.message),v(!1);return}if(!s.redirectUrl){x("Unable to follow."),v(!1);return}}catch(e){x(e.message)}v(!1)}};return(0,s.jsxs)(r.Z,{direction:"vertical",id:"follow-modal",children:[(0,s.jsxs)("div",{className:u().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,s.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"\xa0learn about the Fediverse\xa0"}),"if it's new to you."]}),(0,s.jsxs)(t.Z,{spinning:m,children:[j&&(0,s.jsx)(a.Z,{message:"Follow Error",description:j,type:"error",showIcon:!0}),(0,s.jsxs)("div",{className:u().account,children:[(0,s.jsx)("img",{src:"/logo",alt:"logo",className:u().logo}),(0,s.jsxs)("div",{className:u().username,children:[(0,s.jsx)("div",{className:u().name,children:d}),(0,s.jsx)("div",{children:l})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:u().instructions,children:"Enter your username @server to follow"}),(0,s.jsx)(n.Z,{value:h,size:"large",onChange:e=>g(e.target.value),placeholder:"Your fediverse account @account@server",defaultValue:h}),(0,s.jsx)("div",{className:u().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,s.jsxs)(r.Z,{className:u().buttons,children:[(0,s.jsx)(i.Z,{disabled:!_,type:"primary",onClick:F,children:"Follow"}),(0,s.jsx)(i.Z,{onClick:p,type:"primary",children:"Join the Fediverse"})]})]})]})}},7839:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}}}]);