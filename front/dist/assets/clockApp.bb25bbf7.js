import{_ as a,a as t}from"./navigationBarButton.a1acfb0e.js";import{_ as o}from"./tabBar.38655796.js";import{p as n,e as l,f as s,b as c,c as e,d as r,t as p,w as i}from"./vendor.23464d0d.js";const b=i();n("data-v-56bc80f8");const d={class:"tab-bar-button"},m={class:"label"};l();const g=b(((a,t,o,n,l,i)=>{const b=s("glyph");return c(),e("button",d,[r(b,{name:o.glyph},null,8,["name"]),r("div",m,p(o.label),1)])}));const u={name:"tabBarButton",props:{label:String,glyph:String}};u.render=g,u.__scopeId="data-v-56bc80f8";const v=i();n("data-v-f523d19c");const h={class:"app clock-app"};l();const f=v(((a,t,o,n,l,p)=>{const i=s("navigation-bar-button"),b=s("navigation-bar"),d=s("router-view"),m=s("tab-bar");return c(),e("div",h,[r(b,null,{left:v((()=>[r(i,{label:"Edit"})])),right:v((()=>[r(i,{glyph:"plus"})])),_:1}),r(d,{class:"content"}),r(m,{sections:l.appSections},null,8,["sections"])])}));const B={name:"textApp",components:{navigationBar:a,navigationBarButton:t,tabBar:o,tabBarButton:u},data:()=>({appSections:[{name:"clockApp_worldClock",label:"World Clock",glyph:"globe"},{name:"clockApp_alarm",label:"Alarm",glyph:"alarm"},{name:"clockApp_stopwatch",label:"Stopwatch",glyph:"stopwatch"},{name:"clockApp_timer",label:"Timer",glyph:"timer"}]})};B.render=f,B.__scopeId="data-v-f523d19c";export default B;
