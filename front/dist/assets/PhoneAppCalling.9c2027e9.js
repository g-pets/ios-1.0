import{p as l,j as a,d as s,o as e,c,a as n,t as d,F as t,l as o,w as p,i as r,u as i,x as u}from"./vendor.76519a72.js";const h=p();l("data-v-2d6f9146");const b={class:"view-calling waiting"},m={class:"top-panel"},v={class:"calling-contact"},g={class:"number dark-text-shadow"},y=n("div",{class:"state"},"calling mobile...",-1),k={class:"control-panel glare"},_={class:"label"},w={class:"bottom-panel"},C={class:"button-cell"},f=n("div",{class:"label dark-text-shadow"},"End Call",-1);a();const x=h(((l,a,p,r,i,u)=>{const h=s("glyph");return e(),c("div",b,[n("div",m,[n("div",v,[n("div",g,d(l.$phoneNumber(r.phoneNumber)),1),y])]),n("div",k,[(e(!0),c(t,null,o(r.keys,(l=>(e(),c("div",{class:["cell",l.class]},[n(h,{name:l.glyph},null,8,["name"]),n("div",_,d(l.label),1)],2)))),256))]),n("div",w,[n("div",C,[n("button",{class:"end-call",onClick:a[1]||(a[1]=l=>r.endCall())},[n(h,{name:"phone_end_call"}),f])])])])}));const N={setup(){document.title="Phone App - Calling | iOS";const l=i(),a=u();return{keys:[{label:"mute",glyph:"mute",class:"mute"},{label:"keypad",glyph:"keypad_rouded",class:"keypad"},{label:"speaker",glyph:"speaker",class:"speaker"},{label:"add call",glyph:"plus_rounded",class:"add-call"},{label:"hold",glyph:"hold",class:"hold"},{label:"contacts",glyph:"contacts",class:"contacts"}],phoneNumber:r((()=>a.params.number)),endCall:()=>l.push({name:"PhoneAppKeypad"})}}};N.render=x,N.__scopeId="data-v-2d6f9146";export default N;