import{u as s}from"./store.1ff14714.js";import{_ as a,a as e}from"./navigationBarButton.75291d21.js";import{_ as t,a as o}from"./listView.b01ee7bf.js";import{p as n,e as r,f as i,b as c,c as l,d,F as u,h as m,t as p,g,w as v,o as f}from"./vendor.4a6d3ba9.js";const b=v();n("data-v-1998cfaa");const h={key:0,class:"messages section-scrolled"};r();const B=b(((s,a,e,t,o,n)=>{const r=i("navigation-bar-button"),v=i("navigation-bar");return c(),l(u,null,[d(v,{title:"Messages"},{left:b((()=>[d(r,{label:"Messages",onClick:a[1]||(a[1]=s=>n.goBack())})])),right:b((()=>[d(r,{label:"Clear"})])),_:1}),n.conversation?(c(),l("div",h,[(c(!0),l(u,null,m(n.conversation.messages,(s=>(c(),l("div",{class:["message",{recieved:s.recieved}]},[(c(!0),l(u,null,m(s.text,(s=>(c(),l("p",null,p(s),1)))),256))],2)))),256))])):g("",!0)],64)}));const _={name:"textMessages",components:{navigationBar:a,navigationBarButton:e,toggleButton:t,listView:o},methods:{goBack(){this.$router.push({name:"textApp_conversations"})},openConversation(s){this.$router.push({name:"textApp_conversation",params:{id:s}})}},computed:{conversation(){let s=this.$route.params;return this.records.find((a=>a.contactID===s.id))}},setup(){document.title="All Messages | iOS";const{records:a,getRecords:e}=s("conversations");return f((()=>{e()})),{records:a}}};_.render=B,_.__scopeId="data-v-1998cfaa";export default _;