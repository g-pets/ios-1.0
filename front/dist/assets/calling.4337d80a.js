import"./store.bf7ffd0d.js";import{p as a,i as l,r as s,o as e,c,a as d,w as t}from"./vendor.77a37f1f.js";import"./index.cc4b6a56.js";const n=t();a("data-v-6c46d41c");const i={class:"view-calling waiting"},o=d("div",{class:"top-panel"},[d("div",{class:"calling-contact"},[d("div",{class:"number dark-text-shadow"},"+1 (234) 567-8900"),d("div",{class:"state"},"calling mobile...")])],-1),p={class:"control-panel glare"},v={class:"cell mute"},r=d("div",{class:"label"},"mute",-1),m={class:"cell keypad"},u=d("div",{class:"label"},"keypad",-1),b={class:"cell speaker"},h=d("div",{class:"label"},"speaker",-1),k={class:"cell add-call"},g=d("div",{class:"label"},"add call",-1),f={class:"cell hold"},_=d("div",{class:"label"},"hold",-1),C={class:"cell contacts"},w=d("div",{class:"label"},"contacts",-1),y={class:"bottom-panel"},x={class:"button-cell"},j=d("div",{class:"label dark-text-shadow"},"End Call",-1);l();const A=n(((a,l,t,n,A,E)=>{const I=s("glyph");return e(),c("div",i,[o,d("div",p,[d("div",v,[d(I,{name:"mute"}),r]),d("div",m,[d(I,{name:"keypad_rouded"}),u]),d("div",b,[d(I,{name:"speaker"}),h]),d("div",k,[d(I,{name:"plus_rounded"}),g]),d("div",f,[d(I,{name:"hold"}),_]),d("div",C,[d(I,{name:"contacts"}),w])]),d("div",y,[d("div",x,[d("button",{class:"end-call",onClick:l[1]||(l[1]=a=>E.endCall())},[d(I,{name:"phone_end_call"}),j])])])])}));const E={name:"Calling",methods:{endCall(){this.$router.push({name:"phoneApp_keypad"})}},setup:()=>(document.title="Calling | iOS",{})};E.render=A,E.__scopeId="data-v-6c46d41c";export default E;