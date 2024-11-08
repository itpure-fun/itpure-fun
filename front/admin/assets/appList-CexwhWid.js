import{g as Z,a as ee,A as te,b as ae}from"./appDetail-hY3SfA4T.js";import se from"./app-AuO_x7do.js";import{_ as oe,a as le,k as o,m as ne,S as z,A as ie,M as S,r as l,o as p,c as C,d as a,w as n,f as m,l as i,e as ce,F as D,g as E,h as I,t as M,i as pe,W as re,G as de,H as ue,I as ve}from"./index-CeUf7hzR.js";const N=r=>(ue("data-v-3e954b50"),r=r(),ve(),r),_e={class:"rounded-md mt-2 flex justify-between"},me={class:"sticky card mt-2 -top-4 z-20 backdrop-blur border p-3 border-gray-200 dark:border-0 -mb-px rounded"},fe={class:"leading-8"},ye={class:"flex items-center"},ke=N(()=>i("span",null,"类型：",-1)),ge={class:"space-x-3 ml-3"},he={class:"flex items-center"},be=N(()=>i("span",null,"价格：",-1)),we={class:"space-x-3 ml-3"},Ae={__name:"appList",props:{isHasAccessToken:{type:Boolean,default:!1}},setup(r){const w=le(),P=r,R=o(ne.local.get("token")),H=o("https://www.itpure.fun/plugin/store/uploadLocalApp"),f=o(!1),O=o(),d=o(!1),A=o([]),y=o([]),T=o([]),L=o([]),k=o([]),j=o(0),u=z({page:1,size:9999,keywords:void 0,add_type:void 0,type:void 0,tag:void 0}),F=s=>window.open(s),x=(s={page:1,size:9999})=>{const e=Object.assign(u,s);f.value=!0,ae(e).then(h=>{var b;if(h.code===200){const{list:v,rowTotal:$}=(b=h.data)==null?void 0:b.data;A.value=v,T.value=A.value.map(_=>{if(!re.isUndefined(k.value[`${_.space}/${_.identifier}`]))return _}),j.value=$,f.value=!1,V()}})},V=()=>{d.value?y.value=T.value:y.value=A.value},c=z({addType:[{label:"全部",value:void 0},{label:"完整应用",value:"mixed"},{label:"后端应用",value:"backend"},{label:"前端应用",value:"frontend"}],types:[{label:"全部",value:void 0},{label:"免费应用",value:"0"},{label:"积分应用",value:"1"},{label:"付费应用",value:"2"}],keywords:void 0}),g=(s,e)=>{if(u[s]===e.value)return!0;u[s]=e.value,x()},q=async s=>{await O.value.open(s.identifier)},U=()=>{d.value=!d.value,V()},G=()=>{S.success("本地上传的应用已经安装成功"),de()};return ie(()=>{var s;if(P.isHasAccessToken||x(),Z().then(e=>{e.code===200&&(L.value=e.data)}),ee().then(e=>{e.code===200&&(k.value=e.data)}),(s=w.query)!=null&&s.install){const e=w.query.install.split("/")[1]??void 0;e?q({identifier:e}):S.error(`要安装插件：${w.query.install} 不存在`)}}),(s,e)=>{const h=l("a-alert"),b=l("icon-refresh"),v=l("a-button"),$=l("a-upload"),_=l("icon-desktop"),Q=l("icon-user"),W=l("a-space"),J=l("a-input-search"),B=l("a-tag"),K=l("a-empty"),X=l("a-spin");return p(),C("div",null,[a(h,null,{default:n(()=>[m("您可以在此页下载喜欢的应用，积分需要签到、做任务或者邀请好友、发布应用等方式获得。注意：只有开发环境才能使用应用市场")]),_:1}),i("div",_e,[i("div",null,[a(W,null,{default:n(()=>[a(v,{type:"primary",status:"danger",onClick:e[0]||(e[0]=t=>x())},{icon:n(()=>[a(b)]),_:1}),a($,{action:H.value,accept:".zip,.rar",name:"file",limit:1,"show-file-list":!0,headers:{Authorization:`Bearer ${R.value}`},onSuccess:G,onError:e[1]||(e[1]=()=>ce(S).error("上传失败"))},null,8,["action","headers"]),a(v,{type:d.value?"outline":"primary",onClick:U,status:"warning"},{icon:n(()=>[a(_)]),default:n(()=>[m("本地应用")]),_:1},8,["type"]),a(v,{status:"success",onClick:e[2]||(e[2]=t=>F("https://www.mineadmin.com/member/setting"))},{icon:n(()=>[a(Q)]),default:n(()=>[m("个人信息")]),_:1})]),_:1})]),a(J,{placeholder:"搜索应用...",modelValue:c.keywords,"onUpdate:modelValue":e[3]||(e[3]=t=>c.keywords=t),onPressEnter:e[4]||(e[4]=t=>g("keywords",{value:c.keywords})),onSearch:e[5]||(e[5]=t=>g("keywords",{value:c.keywords})),class:"w-52"},null,8,["modelValue"])]),i("div",me,[i("ul",fe,[i("li",ye,[ke,i("div",ge,[(p(!0),C(D,null,E(c.addType,t=>(p(),I(B,{checkable:"",color:"arcoblue",checked:u.add_type===t.value,onClick:Y=>g("add_type",t)},{default:n(()=>[m(M(t.label),1)]),_:2},1032,["checked","onClick"]))),256))])]),i("li",he,[be,i("div",we,[(p(!0),C(D,null,E(c.types,t=>(p(),I(B,{checkable:"",color:"arcoblue",checked:u.type===t.value,onClick:Y=>g("type",t)},{default:n(()=>[m(M(t.label),1)]),_:2},1032,["checked","onClick"]))),256))])])])]),y.value.length===0&&!f.value?(p(),I(K,{key:0,description:"暂无应用",class:"my-5 mt-20"})):pe("",!0),a(X,{loading:f.value,tip:"加载应用列表中...",class:"sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-60 -top-5 gap-4 mt-2 md:top-0 sm:top-2 relative md:mt-2.5"},{default:n(()=>[a(se,{myAppList:L.value,appList:y.value,localInstallList:k.value,isOnlyShowLocalApp:d.value,onOnOpenDetail:q},null,8,["myAppList","appList","localInstallList","isOnlyShowLocalApp"])]),_:1},8,["loading"]),a(te,{ref_key:"detailRef",ref:O,myApp:L.value,"install-list":k.value},null,8,["myApp","install-list"])])}}},Se=oe(Ae,[["__scopeId","data-v-3e954b50"]]);export{Se as default};