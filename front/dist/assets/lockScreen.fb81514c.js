import{o as e,c as t,a,t as s,e as n,f as o}from"./vendor.c335db97.js";const l={class:"view view-lockscreen"},i={class:"top-panel panel-glow"},d={class:"time"},c={class:"date"},r=a("div",{class:"bottom-panel panel-glow"},[a("div",{class:"slider"},[a("div",{class:"toggle"},[a("svg",{class:"arrow",fill:"none",viewBox:"0 0 160 160"},[a("path",{d:"M6 54h81V26l67 54-67 54v-28H6V54z"})])]),a("div",{class:"text"},"slide to unlock")])],-1);const v={name:"LockScreen",setup(){let e=n({time:"",day:""});const t={weekday:"long",month:"long",day:"numeric"};function a(){let a=new Date;e.time=a.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}),e.day=a.toLocaleDateString("en-US",t)}return o((()=>{a(),setInterval(a,1e3)})),{date:e}},render:function(n,o,v,m,g,u){return e(),t("div",l,[a("div",i,[a("div",d,s(m.date.time),1),a("div",c,s(m.date.day),1)]),r])}};export default v;