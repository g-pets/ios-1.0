import{u as a}from"./store.88c4effe.js";import{p as l,e,f as n,b as s,c as t,d,t as c,F as o,h as u,g as i,w as r,a as v}from"./vendor.23464d0d.js";const m=r();l("data-v-8fd3be60");const p={key:0,class:"keypad"},b={class:"phone-number"},h={class:"val"},k={key:1,class:"label"},y={key:1,class:"calling"},g={class:"number"};e();const f=m(((a,l,e,r,v,m)=>{const f=n("glyph");return r.calling?(s(),t("div",y,[d("div",g,c(a.$phoneNumber(r.number)),1),d("button",{class:"end-call",onClick:l[1]||(l[1]=a=>r.endCall())},"End Call")])):(s(),t("div",p,[d("div",b,c(a.$phoneNumber(r.number)),1),(s(!0),t(o,null,u(v.keys,(a=>(s(),t("button",{class:"key",onClick:l=>r.addInt(a.val)},[d("div",h,c(a.val),1),d("div",{class:"add",innerHTML:a.add},null,8,["innerHTML"])],8,["onClick"])))),256)),(s(!0),t(o,null,u(v.actions,(a=>(s(),t("button",{class:["key action",a.class],onClick:a.action},[a.glyph?(s(),t(f,{key:0,name:a.glyph},null,8,["name"])):i("",!0),a.label?(s(),t("div",k,c(a.label),1)):i("",!0)],10,["onClick"])))),256))]))}));const C={name:"Keypad",data(){return{keys:[{val:"1",add:"&nbsp;"},{val:"2",add:"ABC"},{val:"3",add:"DEF"},{val:"4",add:"GHI"},{val:"5",add:"JKL"},{val:"6",add:"MNO"},{val:"7",add:"PQRS"},{val:"8",add:"TUV"},{val:"9",add:"WXYZ"},{val:"*"},{val:"0",add:"+"},{val:"#"}],actions:[{glyph:"add_contact",class:"add-contact"},{glyph:"phone_sharp",label:"Call",action:this.makeCall,class:"call"},{glyph:"back",action:this.removeInt,class:"back"}]}},setup(){document.title="Keypad | iOS";const{createRecord:l}=a("calls");let e=v(""),n=v("");return{number:e,calling:n,addInt:function(a){e.value.length>=8||(e.value+=a)},removeInt:function(){if(!e.value.length)return;const a=e.value.slice(0,-1);e.value=a},makeCall:function(){e.value.length&&(l({contactID:null,firstName:null,lastName:null,portrait:null,phoneNumber:{raw:e.value},outgoing:!0,missed:!1}),n.value=!0)},endCall:function(){n.value=!1}}}};C.render=f,C.__scopeId="data-v-8fd3be60";export default C;
