import{u as e}from"./store.9c6d1abd.js";import{_ as s,a}from"./navigationBarButton.a1acfb0e.js";import{_ as t,a as l}from"./listView.79ed91ec.js";import{p as i,e as n,f as m,b as o,c as r,d,t as c,w as u,o as v,x as p}from"./vendor.23464d0d.js";const b=u();i("data-v-241e3884");const f={class:"recents"},g={class:"last-name"},_={class:"first-name"},k={class:"time"},N={class:"last-name"},y={class:"first-name"},w={class:"time"};n();const B=b(((e,s,a,t,l,i)=>{const n=m("toggle-button"),u=m("navigation-bar-button"),v=m("navigation-bar"),p=m("glyph"),B=m("list-view");return o(),r("div",f,[d(v,null,{center:b((()=>[d(n,{id:"recents-calls",data:l.sections,modelValue:l.section,"onUpdate:modelValue":s[1]||(s[1]=e=>l.section=e)},null,8,["data","modelValue"])])),right:b((()=>[d(u,{label:"Clear",onClick:t.deleteAllRecords},null,8,["onClick"])])),_:1}),"all"==l.section.value?(o(),r(B,{key:0,list:t.records},{default:b((s=>[s.item.lastName?(o(),r("div",{key:0,class:["full-name",{missed:s.item.missed}]},[d("span",g,c(s.item.lastName)+" ",1),d("span",_,c(s.item.firstName),1)],2)):(o(),r("div",{key:1,class:["number",{missed:s.item.missed}]},c(e.$phoneNumber(s.item.number.number)),3)),d("div",k,c(e.$unixTime(s.item.created)),1),d(p,{name:"arrow_more"})])),_:1},8,["list"])):(o(),r(B,{key:1,list:t.missedCalls},{default:b((s=>[s.item.lastName?(o(),r("div",{key:0,class:["full-name",{missed:s.item.missed}]},[d("span",N,c(s.item.lastName)+" ",1),d("span",y,c(s.item.firstName),1)],2)):(o(),r("div",{key:1,class:["number",{missed:s.item.missed}]},c(e.$phoneNumber(s.item.number.number)),3)),d("div",w,c(e.$unixTime(s.item.created)),1),d(p,{name:"arrow_more"})])),_:1},8,["list"]))])}));const C={name:"Recents",components:{navigationBar:s,navigationBarButton:a,toggleButton:t,listView:l},data:()=>({section:{value:"all",title:"All"},sections:[{value:"all",title:"All"},{value:"missed",title:"Missed"}]}),setup(){document.title="Recent Calls | iOS";const{records:s,getRecords:a,deleteAllRecords:t}=e("calls");v((()=>a()));const l=p((()=>s.value.filter((e=>e.missed))));return{records:s,missedCalls:l,deleteAllRecords:t}}};C.render=B,C.__scopeId="data-v-241e3884";export default C;
