import{p as a,e as l,f as s,b as n,c as d,d as e,t as c,F as t,h as i,g as o,w as v}from"./vendor.fbc0f821.js";const r=v();a("data-v-509a19c6");const h={key:0,class:"keypad"},b={class:"number"},m={class:"num-grid"},u={class:"val"},k={class:"add"},g={key:1,class:"label"},y={key:1,class:"calling"},p={class:"number"};l();const C=r(((a,l,v,r,C,f)=>{const I=s("glyph");return C.calling?(n(),d("div",y,[e("div",p,c(C.number),1),e("button",{class:"end-call",onClick:l[1]||(l[1]=a=>f.endCall())},"End Call")])):(n(),d("div",h,[e("div",b,c(C.number),1),e("div",m,[(n(!0),d(t,null,i(C.keys,(a=>(n(),d("button",{class:"key",onClick:l=>f.addInt(a.val)},[e("div",u,c(a.val),1),e("div",k,c(a.add),1)],8,["onClick"])))),256)),(n(!0),d(t,null,i(C.actions,(a=>(n(),d("button",{class:["key action",a.class],onClick:a.action},[a.glyph?(n(),d(I,{key:0,name:a.glyph},null,8,["name"])):o("",!0),a.label?(n(),d("div",g,c(a.label),1)):o("",!0)],10,["onClick"])))),256))])]))}));const f={name:"Keypad",data(){return{number:"",calling:!1,keys:[{val:"1"},{val:"2",add:"ABC"},{val:"3",add:"DEF"},{val:"4",add:"GHI"},{val:"5",add:"JKL"},{val:"6",add:"MNO"},{val:"7",add:"PQRS"},{val:"8",add:"TUV"},{val:"9",add:"WXYZ"},{val:"*"},{val:"0",add:"+"},{val:"#"}],actions:[{glyph:"add_contact",class:"add-contact"},{glyph:"phone_sharp",label:"Call",action:this.makeCall,class:"call"},{glyph:"back",action:this.removeInt,class:"back"}]}},methods:{addInt(a){this.number.length>=14||(this.number+=a)},removeInt(){if(!this.number.length)return;const a=this.number.slice(0,-1);this.number=a},makeCall(){this.number.length&&(this.calling=!0)},endCall(){this.calling=!1}}};f.render=C,f.__scopeId="data-v-509a19c6";export default f;
