import{d as g,I as r,X as k,b as o,c as l,e as u,W as C,N as i,f as p,g as d,n as b,Y as B,l as $}from"./entry.2ab60c9d.js";import x from"./ContentSlot.dc7bd37f.js";const N={class:"alert-content-wrapper"},S={class:"content"},w=g({__name:"Alert",props:{type:{type:String,default:"neutral",validator(e){return["info","success","warning","danger","primary","secondary","neutral"].includes(e)}},closable:{type:Boolean,default:!1},icon:{type:[String,Boolean],default:!1}},emits:["close"],setup(e,{emit:_}){const t=e,m=r(()=>((n=a)=>`{elements.state.${n.type}.backgroundColor.secondary}`)()),f=r(()=>t.icon===!1?"":t.icon===!0?`type:${t.type}`:t.icon),a=t,{$pinceau:y}=k(a,void 0,{_yvz_backgroundColor:m});return(n,s)=>{const c=B,v=x;return o(),l("div",{class:b(["alert",[e.type,i(y)]])},[u("div",N,[e.icon?(o(),C(c,{key:0,name:i(f),class:"alert-icon"},null,8,["name"])):p("",!0),u("span",S,[d(v,{use:n.$slots.default,unwrap:"p"},null,8,["use"])])]),e.closable?(o(),l("button",{key:0,onClick:s[0]||(s[0]=A=>_("close"))},[d(c,{name:"tabler:x"})])):p("",!0)],2)}}});const z=$(w,[["__scopeId","data-v-6a77c047"]]);export{z as default};
