import{p as e,b as t,r as a,o,c as n,a as p,t as s,w as i,F as r,j as c,k as d,e as l}from"./vendor.c1d6a809.js";const A=i();e("data-v-c18dd39e");const k={class:"name"};t();const m=A(((e,t,i,r,c,d)=>{const l=a("icon");return o(),n("div",{class:"app-icon",onClick:t[1]||(t[1]=e=>d.openApp(i.data.key))},[p(l,{name:i.data.icon},null,8,["name"]),p("div",k,s(i.data.title),1)])}));const u={name:"appIcon",props:{data:Object},methods:{openApp(e){this.$router.push({name:e})}}};u.render=m,u.__scopeId="data-v-c18dd39e";const y={class:"view view-homescreen"},D={class:"app-icon live calendar"},g={class:"icon"},v={class:"head"},h={class:"day"},f=p("div",{class:"name"},"Calendar",-1);const I={name:"HomeScreen",components:{appIcon:u},methods:{openApp(e){this.$router.push({name:e})}},computed:{screenApps(){return this.apps.filter((e=>"screen"===e.position))},dockApps(){return this.apps.filter((e=>"dock"===e.position))},calendarDate(){var e=(t=new Date).getDay(),t=t.getDate();return{weekday:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e],date:t}}},methods:{startDrag:(e,t)=>{t.onDrag=!0,e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("appId",t.id)},onDrop(e,t){const a=e.dataTransfer.getData("appId");this.apps.find((e=>e.id==a)).position=t}},setup(){document.title="Home Screen | iOS 1";return{apps:l([{id:11,title:"Notes",key:"notesApp",icon:"notesApp",position:"screen"},{id:1,title:"Text",key:"textApp",icon:"textApp",position:"screen"},{id:2,title:"Calendar",key:"calendarApp",icon:"calendarApp",position:"screen"},{id:3,title:"Photos",key:"photosApp",icon:"tempIconApp",position:"screen"},{id:4,title:"Camera",key:"cameraApp",icon:"tempIconApp",position:"screen"},{id:5,title:"YouTube",key:"youTubeApp",icon:"youTubeApp",position:"screen"},{id:6,title:"Stocks",key:"stocksApp",icon:"tempIconApp",position:"screen"},{id:7,title:"Maps",key:"mapsApp",icon:"tempIconApp",position:"screen"},{id:8,title:"Weather",key:"weatherApp",icon:"tempIconApp",position:"screen"},{id:9,title:"Clock",key:"clockApp",icon:"tempIconApp",position:"screen"},{id:10,title:"Calculator",key:"calculatorApp",icon:"calculatorApp",position:"screen"},{id:12,title:"Settings",key:"settings",icon:"tempIconApp",position:"screen"},{id:13,title:"Phone",key:"phoneApp",icon:"phoneApp",position:"dock"},{id:14,title:"Mail",key:"mailApp",icon:"tempIconApp",position:"dock"},{id:15,title:"Safari",key:"safariApp",icon:"tempIconApp",position:"dock"},{id:16,title:"iPod",key:"iPodApp",icon:"iPodApp",position:"dock"}])}},render:function(e,t,i,l,A,k){const m=a("app-icon");return o(),n("div",y,[p("div",{class:"apps-grid drop-zone",onDrop:t[1]||(t[1]=e=>k.onDrop(e,"screen")),onDragover:t[2]||(t[2]=d((()=>{}),["prevent"])),onDragenter:t[3]||(t[3]=d((()=>{}),["prevent"]))},[(o(!0),n(r,null,c(k.screenApps,(e=>(o(),n(m,{class:["drag-el",{onDrag:e.onDrag}],data:e,key:e.id,draggable:!0,onDragstart:t=>k.startDrag(t,e)},null,8,["data","onDragstart","class"])))),128)),p("div",D,[p("div",g,[p("div",v,s(k.calendarDate.weekday),1),p("div",h,s(k.calendarDate.date),1)]),f])],32),p("div",{class:"dock drop-zone",onDrop:t[4]||(t[4]=e=>k.onDrop(e,"dock")),onDragover:t[5]||(t[5]=d((()=>{}),["prevent"])),onDragenter:t[6]||(t[6]=d((()=>{}),["prevent"]))},[(o(!0),n(r,null,c(k.dockApps,(e=>(o(),n(m,{class:"drag-el",data:e,key:e.id,draggable:!0,onDragstart:t=>k.startDrag(t,e)},null,8,["data","onDragstart"])))),128))],32)])}};export default I;