import{g as V}from"./generate-Cwn7oav1.js";import{_ as C,k as l,r as o,o as r,h as _,w as t,f as u,d as s,c as B,F as U,g as h,l as M,M as N,$ as F}from"./index-CeUf7hzR.js";const T={class:"relative"},$={__name:"preview",setup(E,{expose:v}){const i=l("controller"),c=l(!1),p=l([]),m=async n=>{const a=await V.preview({id:n});a.success?(p.value=a.data,c.value=!0):N.info(a.message)},f=async n=>{await F(n)};return v({open:m}),(n,a)=>{const y=o("ma-code-editor"),b=o("icon-copy"),g=o("a-button"),k=o("a-tab-pane"),w=o("a-tabs"),x=o("a-modal");return r(),_(x,{width:"1000px",visible:c.value,"onUpdate:visible":a[1]||(a[1]=e=>c.value=e),footer:!1},{title:t(()=>[u("预览代码")]),default:t(()=>[s(w,{"active-key":i.value,"onUpdate:activeKey":a[0]||(a[0]=e=>i.value=e)},{default:t(()=>[(r(!0),B(U,null,h(p.value,e=>(r(),_(k,{key:e.name,title:e.tab_name},{default:t(()=>[M("div",T,[s(y,{modelValue:e.code,"onUpdate:modelValue":d=>e.code=d,readonly:"",miniMap:"",language:e.lang,height:600},null,8,["modelValue","onUpdate:modelValue","language"]),s(g,{class:"copy-button",type:"primary",onClick:d=>f(e.code)},{default:t(()=>[s(b),u(" 复制")]),_:2},1032,["onClick"])])]),_:2},1032,["title"]))),128))]),_:1},8,["active-key"])]),_:1},8,["visible"])}}},L=C($,[["__scopeId","data-v-f500c460"]]);export{L as default};
