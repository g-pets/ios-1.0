import{u as t}from"./index.b3248e3a.js";import{_ as a,a as s}from"./navigationBarButton.4147c144.js";import{_ as o}from"./toggleButton.d556d73f.js";import{_ as c}from"./listView.e3229307.js";import{p as e,f as n,g as i,c as r,d as l,e as d,t as m,F as v,i as p,h as u,w as g,o as b}from"./vendor.7c4942a9.js";const f=g();e("data-v-fc133544");const h={key:0,class:"contact section-scrolled"},k={class:"header"},y={class:"name"},B={key:0,class:"contact-section"},_={class:"phone-number"},j={class:"type"},A={class:"number"},C=d("div",{class:"phone-number"},[d("div",{class:"type"},"ringtone"),d("div",{class:"number"},"Ascending")],-1),w={key:1,class:"contact-section"},x={class:"phone-number"},F={class:"type"},R={class:"number"},I={class:"actions-block"},N=d("div",{class:"action-block"},"Text Message",-1),S=d("div",{class:"action-block"},"Share Contact",-1),V={key:0,class:"action-block"},$={key:1,class:"action-block"};n();const E=f(((t,a,s,o,c,e)=>{const n=i("navigation-bar-button"),g=i("navigation-bar");return r(),l(v,null,[d(g,{title:"Info"},{left:f((()=>[d(n,{label:"All Contacts",onClick:a[1]||(a[1]=t=>e.goBack())})])),right:f((()=>[d(n,{label:"Edit"})])),_:1}),e.contact?(r(),l("div",h,[d("div",k,[d("img",{class:"portrait",src:e.contact.portrait},null,8,["src"]),d("div",y,m(e.contact.firstName)+" "+m(e.contact.lastName),1)]),e.contact.phones?(r(),l("div",B,[(r(!0),l(v,null,p(e.contact.phones,(t=>(r(),l("div",_,[d("div",j,m(t.type),1),d("div",A,m(t.formatted),1)])))),256)),C])):u("",!0),e.contact.emails?(r(),l("div",w,[(r(!0),l(v,null,p(e.contact.emails,(t=>(r(),l("div",x,[d("div",F,m(t.type),1),d("div",R,m(t.email),1)])))),256))])):u("",!0),d("div",I,[N,S,e.contact.favorite?(r(),l("div",V,"Remove from Favorites")):(r(),l("div",$,"Add to Favorites"))])])):u("",!0)],64)}));const M={name:"Recents",components:{navigationBar:a,navigationBarButton:s,toggleButton:o,listView:c},computed:{contact(){let t=this.$route.params;return this.records.find((a=>a.id===t.id))}},methods:{goBack(){this.$router.push({name:"phoneApp_contacts"})}},setup(){document.title="Contact | iOS";const{records:a,getRecords:s}=t("contacts");return b((()=>s())),{records:a}}};M.render=E,M.__scopeId="data-v-fc133544";export default M;
