import{o as e,_ as a,a as t}from"./index.958c2cfa.js";import{r as d,p as n,e as o,f as c,b as s,c as r,d as i,u as l,x as v,w as u,y as p}from"./vendor.5cd743d1.js";function m(){return JSON.stringify(Date.now())}const f=e("iOS",1,{upgrade(e){const a=e.createObjectStore("notes",{keyPath:"id",autoIncrement:!1});a.createIndex("id","id"),a.createIndex("created","created")}});const y=u();n("data-v-6d1e28d4");const g={class:"app note-screen"},x={class:"content"},b=p('<div class="line" data-v-6d1e28d4></div><div class="meta" data-v-6d1e28d4><div class="day" data-v-6d1e28d4>Today</div><div class="date" data-v-6d1e28d4>4/13/15,</div><div class="time" data-v-6d1e28d4>12:08 PM</div></div>',2);o();const h=y(((e,a,t,d,n,o)=>{const u=c("navigation-bar");return s(),r("div",g,[i(u,{title:"note",back:"Notes",background:["#875D52","#51372F","#3B2D21"]},{btn:y((()=>[i("div",{class:"add-note",onClick:a[1]||(a[1]=e=>d.createRecord(d.note))},"Save")])),_:1}),i("div",x,[b,l(i("textarea",{class:"note","onUpdate:modelValue":a[2]||(a[2]=e=>d.note.content=e)},null,512),[[v,d.note.content]])])])}));const w={name:"noteScreen",components:{navigationBar:t},setup(){const{createRecord:e}=function(e){const t=d({[e]:[]});return{records:t,getRecords:async()=>{try{(await f.getAllFromIndex(e,"created")).forEach((a=>t[e].push(a)))}catch(a){console.error(a)}},createRecord:async t=>{let d,n,o;try{d=m(),n=a(t),n.id=m(),n.created=Date.now(),o=await f.add(e,n),console.log(o)}catch(c){console.error(c)}finally{d=null,n=null,o=null}}}}("notes");return{note:{content:"Hello World!"},createRecord:e}}};w.render=h,w.__scopeId="data-v-6d1e28d4";export default w;
