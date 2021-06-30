import{o as e,c as t,a as o,r as n,u as a,b as c,d as r,v as i,n as p,w as s,e as m}from"./vendor.fc0894b6.js";const l={class:"app-container"},_={class:"screen"},d={class:"phone-body section-fixed"};const h={name:"App",data:()=>({ready:!0}),methods:{goHome(){this.$router.push({name:"homeScreen"})}},setup(){const e=a();let t=localStorage.getItem("installed");e.beforeEach(((e,o,n)=>{"loadingScreen"===e.name||t?n():n({name:"loadingScreen"})}))}};let E;h.render=function(a,c,r,i,p,s){const m=n("router-view");return e(),t("div",l,[o("div",_,[o(m)]),o("div",d,[o("div",{class:"home-button",onClick:c[1]||(c[1]=(...e)=>s.goHome&&s.goHome(...e))})])])};const u={},A=function(e,t){if(!t)return e();if(void 0===E){const e=document.createElement("link").relList;E=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in u)return;u[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":E,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},g=[{path:"/loading",name:"loadingScreen",component:()=>A((()=>import("./loadingScreen.4063eac6.js")),["/assets/loadingScreen.4063eac6.js","/assets/loadingScreen.1dc18973.css","/assets/vendor.fc0894b6.js"])},{path:"/locked",name:"lockScreen",component:()=>A((()=>import("./lockScreen.2a738403.js")),["/assets/lockScreen.2a738403.js","/assets/lockScreen.e14cb2dd.css","/assets/appState.cc2c42af.js","/assets/vendor.fc0894b6.js"])},{path:"/home",name:"homeScreen",component:()=>A((()=>import("./homeScreen.6fd4bd55.js")),["/assets/homeScreen.6fd4bd55.js","/assets/homeScreen.a3c115d8.css","/assets/vendor.fc0894b6.js","/assets/appState.cc2c42af.js"])},{path:"/apps/clock",component:()=>A((()=>import("./clockApp.399708a0.js")),["/assets/clockApp.399708a0.js","/assets/clockApp.00b64049.css","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/vendor.fc0894b6.js","/assets/tabBar.8fd6bf4a.js","/assets/tabBar.2d73dccd.css"]),children:[{path:"world-clock",name:"clockApp_worldClock",component:()=>A((()=>import("./worldClock.0e58a4c3.js")),["/assets/worldClock.0e58a4c3.js","/assets/worldClock.8ab548b4.css","/assets/vendor.fc0894b6.js"]),meta:{title:"World Clock"}},{path:"alarm",name:"clockApp_alarm",component:()=>A((()=>import("./alarm.fe80a5d1.js")),["/assets/alarm.fe80a5d1.js","/assets/vendor.fc0894b6.js"]),meta:{title:"Alarm"}},{path:"stopwatch",name:"clockApp_stopwatch",component:()=>A((()=>import("./stopwatch.653acc57.js")),["/assets/stopwatch.653acc57.js","/assets/vendor.fc0894b6.js"]),meta:{title:"Stopwatch"}},{path:"timer",name:"clockApp_timer",component:()=>A((()=>import("./timer.fadb47cd.js")),["/assets/timer.fadb47cd.js","/assets/vendor.fc0894b6.js"]),meta:{title:"Timer"}},{path:"",redirect:{name:"clockApp_worldClock"}}]},{path:"/apps/phone",component:()=>A((()=>import("./phoneApp.6736f1e2.js")),["/assets/phoneApp.6736f1e2.js","/assets/phoneApp.14e3668f.css","/assets/tabBar.8fd6bf4a.js","/assets/tabBar.2d73dccd.css","/assets/vendor.fc0894b6.js","/assets/store.5f87ebec.js"]),children:[{path:"favorites",name:"phoneApp_favorites",component:()=>A((()=>import("./favorites.4bb43a0a.js")),["/assets/favorites.4bb43a0a.js","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/vendor.fc0894b6.js","/assets/listView.d7fb0a47.js","/assets/listView.d505a2fd.css","/assets/store.5f87ebec.js"]),meta:{title:"Favorites"}},{path:"recents",name:"phoneApp_recents",component:()=>A((()=>import("./recents.f6a65782.js")),["/assets/recents.f6a65782.js","/assets/recents.cb65037d.css","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/toggleButton.5c947eb6.js","/assets/toggleButton.973ed10c.css","/assets/listView.d7fb0a47.js","/assets/listView.d505a2fd.css"]),meta:{title:"Recents"}},{path:"contacts",name:"phoneApp_contacts",component:()=>A((()=>import("./contacts.7624f2d2.js")),["/assets/contacts.7624f2d2.js","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/toggleButton.5c947eb6.js","/assets/toggleButton.973ed10c.css","/assets/listView.d7fb0a47.js","/assets/listView.d505a2fd.css"]),meta:{title:"Contacts"}},{path:"contacts/:id",name:"phoneApp_contact",component:()=>A((()=>import("./contact.e81f5ee0.js")),["/assets/contact.e81f5ee0.js","/assets/contact.a55006c6.css","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/toggleButton.5c947eb6.js","/assets/toggleButton.973ed10c.css","/assets/listView.d7fb0a47.js","/assets/listView.d505a2fd.css"]),meta:{title:"Contact"}},{path:"keypad",name:"phoneApp_keypad",component:()=>A((()=>import("./keypad.05359e3f.js")),["/assets/keypad.05359e3f.js","/assets/keypad.fc14754b.css","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js"]),meta:{title:"Keypad"}},{path:"calling/:number",name:"phoneApp_calling",component:()=>A((()=>import("./calling.6ab9c9bb.js")),["/assets/calling.6ab9c9bb.js","/assets/calling.77001039.css","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js"]),meta:{title:"Calling"}},{path:"voicemail",name:"phoneApp_voicemail",component:()=>A((()=>import("./voicemail.9f76384e.js")),["/assets/voicemail.9f76384e.js","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/toggleButton.5c947eb6.js","/assets/toggleButton.973ed10c.css","/assets/listView.d7fb0a47.js","/assets/listView.d505a2fd.css"]),meta:{title:"Voicemail"}},{path:"",redirect:{name:"phoneApp_keypad"}}]},{path:"/apps/text",component:()=>A((()=>import("./textApp.9c5ee0c0.js")),["/assets/textApp.9c5ee0c0.js","/assets/textApp.29801468.css","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js"]),children:[{path:"conversations",name:"textApp_conversations",component:()=>A((()=>import("./conversations.999aee6d.js")),["/assets/conversations.999aee6d.js","/assets/conversations.7511f499.css","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/toggleButton.5c947eb6.js","/assets/toggleButton.973ed10c.css","/assets/listView.d7fb0a47.js","/assets/listView.d505a2fd.css"]),meta:{title:"Messages"}},{path:"conversations/:id",name:"textApp_conversation",component:()=>A((()=>import("./conversation.330de07f.js")),["/assets/conversation.330de07f.js","/assets/conversation.de446bd1.css","/assets/store.5f87ebec.js","/assets/vendor.fc0894b6.js","/assets/navigationBarButton.467b7abb.js","/assets/navigationBarButton.5a5c9bb2.css","/assets/toggleButton.5c947eb6.js","/assets/toggleButton.973ed10c.css","/assets/listView.d7fb0a47.js","/assets/listView.d505a2fd.css"]),meta:{title:"Conversation"}},{path:"",redirect:{name:"textApp_conversations"}}]},{path:"/:pathMatch(.*)*",redirect:{name:"homeScreen"}}];var f=c({history:r(),routes:g});const v=s()(((n,a,c,r,i,p)=>(e(),t("svg",{class:["icon",`icon-${c.name}`]},[o("use",{"xlink:href":`#icon_${c.name}`},null,8,["xlink:href"])],2))));const L={props:{name:String}};L.render=v,L.__scopeId="data-v-97f5d626";var k={install:e=>{e.config.globalProperties.$phoneNumber=e=>{try{if(!e)return e;const t=e.replace(/[^\d]/g,""),o=t.length;return o<4?t:o<7?`(${t.slice(0,3)}) ${t.slice(3)}`:`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,10)}`}catch(t){console.log(t)}},e.config.globalProperties.$unixTime=e=>{try{const t={hour12:!1,hour:"2-digit",minute:"2-digit"};let o,n=Date.now(),a=new Date(e);return o=n-e<864e5?a.toLocaleTimeString("en-US",t):a.toLocaleDateString("en-US"),o}catch(t){console.log(t)}},e.config.globalProperties.$sortObjects=(e,t)=>{try{return e.sort(((e,o)=>{let n=e[t].toLowerCase(),a=o[t].toLowerCase();return n<a?-1:n>a?1:0})),e}catch(o){console.log(o)}},e.provide("phoneNumber","unixTime","sortObjects")}};!function(e={}){const{immediate:t=!1,onNeedRefresh:o,onOfflineReady:n}=e;let a,c;if("serviceWorker"in navigator){a=new i("/sw.js",{scope:"/"}),a.addEventListener("activated",(e=>{e.isUpdate||null==n||n()}));{const e=()=>{null==o||o()};a.addEventListener("waiting",e),a.addEventListener("externalwaiting",e)}a.register({immediate:t}).then((e=>c=e))}}(),m(h).use(f).use(k).component("glyph",L).mount("#app");
