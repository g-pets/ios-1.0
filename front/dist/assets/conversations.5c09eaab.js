import{u as s}from"./index.b3248e3a.js";import{_ as e,a}from"./navigationBarButton.4147c144.js";import{_ as t}from"./toggleButton.d556d73f.js";import{_ as i}from"./listView.e3229307.js";import{p as n,f as o,g as r,c as l,d as m,e as d,t as c,F as g,w as v}from"./vendor.7c4942a9.js";const p=v();n("data-v-6249e4da");const u={class:"message-body"},f={class:"header"},h={class:"full-name"},_={class:"last-name"},b={class:"first-name"},w={class:"time"},B={class:"message"};o();const x=p(((s,e,a,t,i,n)=>{const o=r("navigation-bar-button"),v=r("navigation-bar"),x=r("glyph"),j=r("list-view");return l(),m(g,null,[d(v,{title:"Messages"},{left:p((()=>[d(o,{label:"Edit"})])),right:p((()=>[d(o,{glyph:"plus"})])),_:1}),d(j,{list:t.records},{default:p((e=>[d("div",{class:"list-item message-preview",onClick:s=>n.openConversation(e.item.contactID)},[d("div",{class:["message-badge",{unread:n.isUnread(e.item.messages)}]},null,2),d("div",u,[d("div",f,[d("div",h,[d("span",_,c(e.item.lastName)+" ",1),d("span",b,c(e.item.firstName),1)]),d("div",w,c(s.$unixTime(e.item.lastMessageDate)),1)]),d("div",B,c(n.messagePreview(e.item.messages[e.item.messages.length-1].text[0])),1)]),d(x,{name:"arrow_more"})],8,["onClick"])])),_:1},8,["list"])],64)}));const j={name:"textMessages",components:{navigationBar:e,navigationBarButton:a,toggleButton:t,listView:i},methods:{openConversation(s){this.$router.push({name:"textApp_conversation",params:{id:s}})},messagePreview:s=>s.substring(0,60)+"...",isUnread:s=>s.filter((s=>s.unread)).length},setup(){document.title="All Messages | iOS";const{records:e}=s("conversations");return{records:e}}};j.render=x,j.__scopeId="data-v-6249e4da";export default j;
