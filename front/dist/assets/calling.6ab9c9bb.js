import"./store.5f87ebec.js";import{p as l,j as a,r as s,o as e,c,a as d,w as t}from"./vendor.fc0894b6.js";const n=t();l("data-v-6c46d41c");const o={class:"view-calling waiting"},i=d("div",{class:"top-panel"},[d("div",{class:"calling-contact"},[d("div",{class:"number dark-text-shadow"},"+1 (234) 567-8900"),d("div",{class:"state"},"calling mobile...")])],-1),v={class:"control-panel glare"},p={class:"cell mute"},r=d("div",{class:"label"},"mute",-1),m={class:"cell keypad"},u=d("div",{class:"label"},"keypad",-1),b={class:"cell speaker"},h=d("div",{class:"label"},"speaker",-1),k={class:"cell add-call"},g=d("div",{class:"label"},"add call",-1),_={class:"cell hold"},C=d("div",{class:"label"},"hold",-1),w={class:"cell contacts"},y=d("div",{class:"label"},"contacts",-1),f={class:"bottom-panel"},j={class:"button-cell"},x=d("div",{class:"label dark-text-shadow"},"End Call",-1);a();const A=n(((l,a,t,n,A,E)=>{const I=s("glyph");return e(),c("div",o,[i,d("div",v,[d("div",p,[d(I,{name:"mute"}),r]),d("div",m,[d(I,{name:"keypad_rouded"}),u]),d("div",b,[d(I,{name:"speaker"}),h]),d("div",k,[d(I,{name:"plus_rounded"}),g]),d("div",_,[d(I,{name:"hold"}),C]),d("div",w,[d(I,{name:"contacts"}),y])]),d("div",f,[d("div",j,[d("button",{class:"end-call",onClick:a[1]||(a[1]=l=>E.endCall())},[d(I,{name:"phone_end_call"}),x])])])])}));const E={name:"Calling",methods:{endCall(){this.$router.push({name:"phoneApp_keypad"})}},setup:()=>(document.title="Calling | iOS",{})};E.render=A,E.__scopeId="data-v-6c46d41c";export default E;