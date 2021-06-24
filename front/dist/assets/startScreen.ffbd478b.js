import{o as e,_ as t,a}from"./index.958c2cfa.js";import{a as r,f as o,b as c,c as n,d as l,q as d,F as s,h as i,t as u,o as h}from"./vendor.5cd743d1.js";const m=e("iOS",1,{upgrade(e){const t=e.createObjectStore("notes",{keyPath:"id",autoIncrement:!1});t.createIndex("id","id"),t.createIndex("created","created")}});const y={class:"app notes-app"},p={class:"list-view notes"},R={class:"title"},v={class:"time"},f=l("div",{class:"arrow"}," >",-1);const g={name:"textApp",components:{navigationBar:a},methods:{openNote(e){this.$router.push({name:"noteScreen",params:{id:e}})},async addRecord(){let e=this.generateId();await this.$router.push({name:"noteScreen",params:{id:e}}),await this.createRecord({id:e})}},setup(){document.title="Notes | iOS";const{records:e,getRecords:a,createRecord:o,generateId:c,deleteAllRecords:n}=function(e){const a=r([]),o=()=>JSON.stringify(Date.now()),c=async(r={})=>{let c,n,l;try{return c=o(),n=t(r),n.id=c,n.created=Date.now(),a.value.push(n),l=await m.add(e,n),l}catch(d){console.error(d)}finally{c=null,n=null,l=null}};return{records:a,getRecordF:async e=>{let t;try{return t={content:"343"},t}catch(a){console.error(a)}finally{t=null}},getRecords:async()=>{let t;try{t=await m.getAllFromIndex(e,"created"),a.value=t}catch(r){console.error(r)}finally{t=null}},createRecord:c,updateRecord:async e=>{let r,o,c;try{let n=e._id;r=t(a[n]),o=t(e),o.updated=Date.now(),a[n]=o,c=await restRequest({method:"put",module:module,id:n,data:o}),c.ok||(a[n]=r)}catch(n){console.error(n)}finally{r=null,o=null,c=null}},dublicateRecord:async e=>{let r,o;try{r=a[e],o=t(r),await c(o)}catch(n){console.error(n)}finally{r=null,o=null}},deleteRecord:async e=>{let t;try{a[e].hidden=!0,t=await restRequest({method:"delete",module:module,id:e}),t.ok?delete a[e]:a[e].hidden=!1}catch(r){console.error(r)}finally{t=null}},createDummyRecords:async(e,t)=>{try{let a=await fetch(`http://localhost:85/v1/${e}/${t}`);(await a.json()).forEach((e=>c(e)))}catch(a){console.error(a)}},deleteAllRecords:async()=>{try{a.value=[],await m.clear(e)}catch(t){console.error(t)}},generateId:o}}("notes");return h((()=>a())),{records:e,createRecord:o,convertTime:function(e){return new Date(e).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})},generateId:c,deleteAllRecords:n}},render:function(e,t,a,r,h,m){const g=o("navigation-bar");return c(),n("div",y,[l(g,{title:`Notes (${r.records.length})`,background:["#875D52","#51372F","#3B2D21"]},{btn:d((()=>[l("div",{class:"add-note",onClick:t[1]||(t[1]=(...e)=>m.addRecord&&m.addRecord(...e))},"+"),l("div",{class:"add-note",onClick:t[2]||(t[2]=(...e)=>r.deleteAllRecords&&r.deleteAllRecords(...e))},"-")])),_:1},8,["title"]),l("div",p,[(c(!0),n(s,null,i(r.records,(e=>(c(),n("div",{class:"note",onClick:t=>m.openNote(e.id)},[l("div",R,u(e.title),1),l("div",v,u(r.convertTime(e.created)),1),f],8,["onClick"])))),256))])])}};export default g;
