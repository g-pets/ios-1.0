import"./store.a03b7ae3.js";import{p as a,i as l,r as e,o as n,c as s,a as t,t as d,F as c,k as o,w as i,j as r,l as v}from"./vendor.326f3398.js";import"./index.cc4b6a56.js";const u=i();a("data-v-c171b628");const p={class:"keypad section-scrolled"},m={class:"phone-number"},h={class:"val"},b={key:1,class:"label"};l();const k=u(((a,l,i,v,u,k)=>{const y=e("glyph");return n(),s("div",p,[t("div",m,d(a.$phoneNumber(v.number)),1),(n(!0),s(c,null,o(u.keys,(a=>(n(),s("button",{class:"key",onClick:l=>v.addInt(a.val)},[t("div",h,d(a.val),1),t("div",{class:"add",innerHTML:a.add},null,8,["innerHTML"])],8,["onClick"])))),256)),(n(!0),s(c,null,o(u.actions,(a=>(n(),s("button",{class:["key action",a.class],onClick:a.action},[a.glyph?(n(),s(y,{key:0,name:a.glyph},null,8,["name"])):r("",!0),a.label?(n(),s("div",b,d(a.label),1)):r("",!0)],10,["onClick"])))),256))])}));const y={name:"Keypad",data(){return{keys:[{val:"1",add:"&nbsp;"},{val:"2",add:"ABC"},{val:"3",add:"DEF"},{val:"4",add:"GHI"},{val:"5",add:"JKL"},{val:"6",add:"MNO"},{val:"7",add:"PQRS"},{val:"8",add:"TUV"},{val:"9",add:"WXYZ"},{val:"*"},{val:"0",add:"+"},{val:"#"}],actions:[{glyph:"add_contact",class:"add-contact"},{glyph:"phone_sharp",label:"Call",action:this.makeCall,class:"call"},{glyph:"back",action:this.removeInt,class:"back"}]}},methods:{makeCall(a){this.number.length&&this.$router.push({name:"phoneApp_calling",params:{number:a}})}},setup(){document.title="Keypad | iOS";let a=v(""),l=v("");return{number:a,calling:l,addInt:function(l){a.value.length>=11||(a.value+=l)},removeInt:function(){if(!a.value.length)return;const l=a.value.slice(0,-1);a.value=l},endCall:function(){l.value=!1}}}};y.render=k,y.__scopeId="data-v-c171b628";export default y;
