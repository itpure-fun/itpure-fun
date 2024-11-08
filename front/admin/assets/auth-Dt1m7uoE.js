import{_ as g,u as A,Z as x,b as I,a as V,k as m,r as s,o as E,c as R,l as u,d as o,w as l,f as k,E as q,e as w,y as C,H as D,I as T}from"./index-CeUf7hzR.js";import{d as B}from"./doc-QQinN6SY.js";const N=r=>(D("data-v-bf57a6f4"),r=r(),T(),r),$={class:"auth-panel"},j={class:"flex text-2xl justify-center mt-5 title"},z=["src"],U=N(()=>u("div",{class:"mt-0.5"},"Api Document",-1)),H={__name:"auth",setup(r){const f=A(),c=x(),v=I(),p=V(),t=m({app_id:"",app_secret:""}),_=m(),h=({values:a,errors:e})=>{if(e)return!1;_.value.validate().then(()=>{i(a)})},i=a=>{B.login(a).then(e=>{e.success&&e.code==200&&(c.appId=a.app_id,c.appSecret=a.app_secret,c.auth=!0,C(()=>{v.push({name:"interfaceList"})}))})};return p.query.app_id&&p.query.app_secret&&(t.value.app_id=p.query.app_id,t.value.app_secret=p.query.app_secret,i(t.value)),(a,e)=>{const y=s("a-input"),n=s("a-form-item"),S=s("a-input-password"),b=s("a-button"),P=s("a-form");return E(),R("div",{class:"auth-container flex justify-center items-center",style:q(`background-color: ${w(f).mode=="light"?"#ebedf1":"#242424"}`)},[u("div",$,[u("div",j,[u("img",{src:`${a.$url}logo.svg`,width:"56",class:"mr-2"},null,8,z),U]),o(P,{model:t.value,layout:"vertical",class:"mt-3 p-5",onSubmit:h,ref_key:"formRef",ref:_},{default:l(()=>[o(n,{label:"APP ID",field:"app_id",rules:[{required:!0,message:"APP ID必填"}]},{default:l(()=>[o(y,{modelValue:t.value.app_id,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value.app_id=d),placeholder:"请输入 APP ID"},null,8,["modelValue"])]),_:1}),o(n,{label:"APP SECRET",field:"app_secret",rules:[{required:!0,message:"APP SECRET必填"}]},{default:l(()=>[o(S,{modelValue:t.value.app_secret,"onUpdate:modelValue":e[1]||(e[1]=d=>t.value.app_secret=d),placeholder:"请输入 APP SECRET"},null,8,["modelValue"])]),_:1}),o(n,{class:"mt-2"},{default:l(()=>[o(b,{long:"",type:"primary",size:"large","html-type":"submit"},{default:l(()=>[k("登录文档")]),_:1})]),_:1})]),_:1},8,["model"])])],4)}}},F=g(H,[["__scopeId","data-v-bf57a6f4"]]);export{F as default};
