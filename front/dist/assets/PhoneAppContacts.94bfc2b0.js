import{u as t}from"./store.27dd5034.js";import{d as a,o as s,c as o,a as e,y as n,F as i,t as r,i as l,u as c}from"./vendor.76519a72.js";import{_ as m}from"./navigationBar.85f56a58.js";import{_ as d}from"./NavigationBarButton.c0915ad6.js";import{_ as p}from"./listView.7b2d0eb6.js";import"./index.cc4b6a56.js";const u={class:"full-name"},f={class:"last-name"},v={class:"first-name"};const g={components:{navigationBar:m,navigationBarButton:d,listView:p},setup(){document.title="Phone App - Contacts | iOS";const a=c(),{records:s}=t("contacts");return{sortedRecords:l((()=>((t,a)=>{try{return t.sort(((t,s)=>{let o=t[a].toLowerCase(),e=s[a].toLowerCase();return o<e?-1:o>e?1:0})),t}catch(s){console.log(s)}})(s.value,"lastName"))),openRecord:t=>a.push({name:"PhoneAppContact",params:{id:t}})}},render:function(t,l,c,m,d,p){const g=a("navigation-bar-button"),C=a("navigation-bar"),b=a("list-view");return s(),o(i,null,[e(C,{title:"All Contacts"},{right:n((()=>[e(g,{glyph:"plus"})])),_:1}),e(b,{list:m.sortedRecords},{default:n((t=>[e("div",{class:"list-item",onClick:a=>m.openRecord(t.item.id)},[e("div",u,[e("span",f,r(t.item.lastName)+" ",1),e("span",v,r(t.item.firstName),1)])],8,["onClick"])])),_:1},8,["list"])],64)}};export default g;