import{_ as t,a}from"./navigationBarButton.ce3ad092.js";import{_ as s}from"./listView.fca92e41.js";import{u as i}from"./store.67a60616.js";import{r as n,o as e,c as o,a as r,x as l,F as c,t as m,i as p,u as f}from"./vendor.7fc95355.js";import"./index.cc4b6a56.js";const u={class:"full-name"},v={class:"last-name"},d={class:"first-name"};const g={name:"recentCalls",components:{navigationBar:t,navigationBarButton:a,listView:s},setup(){document.title="Favorite Contacts | iOS";const{records:t}=i("contacts"),a=f();return{favorites:p((()=>t.value.filter((t=>t.favorite)))),openContact:function(t){a.push({name:"phoneApp_contact",params:{id:t}})}}},render:function(t,a,s,i,p,f){const g=n("navigation-bar-button"),C=n("navigation-bar"),_=n("glyph"),b=n("list-view");return e(),o(c,null,[r(C,{title:"Favorites"},{left:l((()=>[r(g,{label:"Edit"})])),right:l((()=>[r(g,{glyph:"plus"})])),_:1}),r(b,{list:i.favorites},{default:l((t=>[r("div",{class:"list-item",onClick:a=>i.openContact(t.item.id)},[r("div",u,[r("span",v,m(t.item.lastName)+" ",1),r("span",d,m(t.item.firstName),1)]),r(_,{name:"arrow_more"})],8,["onClick"])])),_:1},8,["list"])],64)}};export default g;
