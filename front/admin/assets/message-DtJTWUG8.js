import{_ as J,k as o,A as Q,q as X,y as P,r as n,o as r,c as w,l as m,F as Y,g as Z,h as q,K as ee,t as C,d as s,w as a,f as c,i as V}from"./index-CeUf7hzR.js";import{q as u}from"./queueMessage-DIGbOQfa.js";const te={class:"ma-content-block p-3 lg:h-full block lg:border-0 lg:flex justify-between"},ae=["onClick"],se={class:"pl-3"},oe={class:"h-hull w-full lg:ml-3 lg:mr-2 pt-2"},ne=["innerHTML"],le={name:"message"},ie=Object.assign(le,{setup(ce){const R=o({send_box:"icon-send",receive_box:"icon-email",carbon_copy_mine:"icon-copy",todo:"icon-calendar",announcement:"icon-mobile",notice:"icon-notification",private_message:"icon-message"}),f=o([]),D=o(),g=o(),I=o(),y=o(),h=o(!1),x=o(!0),b=o(!1),v=o({});Q(async()=>{const t=await X.getDict("queue_msg_type");f.value=t.data,f.value.unshift({key:"receive_box",title:"收件箱"},{key:"send_box",title:"已发送"}),await T("receive_box",0)});const T=async(t,l)=>{P(()=>{const i=D.value.children;if(i&&i[l].className.indexOf("active")===-1){for(let p=0;p<i.length;p++)i[p].className="";i[l].className="active",["send_box","receive_box"].includes(t)?d.value.requestParams.content_type="all":d.value.requestParams.content_type=t,y.value=t,S(t)}else return})},S=t=>{d.value.api=t==="send_box"?u.getSendList:u.getReceiveList;const l={title:"发送人",dataIndex:"send_user.nickname",width:120,addDisplay:!1,editDisplay:!1};t==="send_box"&&_.value[0].title==="发送人"?_.value.splice(0,1):t!=="send_box"&&_.value[0].title!=="发送人"&&_.value.unshift(l),P(()=>g.value.requestData())},A=t=>{d.value.requestParams.read_status=t,g.value.requestData()},E=async t=>{h.value=!0,x.value=!0,await u.updateReadStatus({ids:t.id}),v.value=t,x.value=!1},O=t=>{b.value=!0,L.value.requestParams.id=t,I.value.requestData()},L=o({api:u.getReceiveUser,requestParams:{},autoRequest:!1}),U=o([{title:"用户名",dataIndex:"username"},{title:"昵称",dataIndex:"nickname"},{title:"查看状态",dataIndex:"read_status"}]),d=o({autoRequest:!1,showIndex:!1,requestParams:{read_status:"all"},rowSelection:{showCheckedAll:!0},add:{show:!0,text:"发私信",api:u.sendPrivateMessage},delete:{show:!0,api:u.deletes},operationColumn:!0,operationColumnWidth:240,formOption:{width:800},api:()=>{}}),_=o([{title:"消息标题",dataIndex:"title",search:!0,commonRules:[{required:!0,message:"消息标题必填"}],validateTrigger:"blur"},{title:"消息类型",dataIndex:"content_type",formType:"select",width:150,dict:{name:"queue_msg_type",translation:!0,props:{label:"title",value:"key"}},addDisplay:!1,editDisplay:!1},{title:"接收用户",dataIndex:"users",formType:"user-select",isEcho:!0,commonRules:[{required:!0,message:"请选择接收用户"}],hide:!0},{title:"消息内容",dataIndex:"content",formType:"editor",hide:!0},{title:"发送时间",dataIndex:"created_at",width:180,search:!0,formType:"range",addDisplay:!1,editDisplay:!1}]);return(t,l)=>{const i=n("a-radio"),p=n("a-radio-group"),$=n("icon-user-group"),M=n("a-link"),j=n("icon-eye"),B=n("ma-crud"),z=n("a-typography-title"),F=n("a-space"),N=n("a-typography-paragraph"),H=n("a-typography"),K=n("a-spin"),W=n("a-drawer"),G=n("a-modal");return r(),w("div",te,[m("ul",{class:"w-full lg:w-52 msg-menu p-2 shadow",ref_key:"msgMenuRef",ref:D},[(r(!0),w(Y,null,Z(f.value,(e,k)=>(r(),w("li",{key:e,onClick:re=>T(e.key,k)},[(r(),q(ee(R.value[e.key]?R.value[e.key]:"icon-message"))),m("span",se,C(e.title),1)],8,ae))),128))],512),m("div",oe,[s(B,{options:d.value,columns:_.value,ref_key:"crudRef",ref:g},{tableAfterButtons:a(()=>[y.value!=="send_box"?(r(),q(p,{key:0,class:"mt-2 lg:mt-0",type:"button","default-value":"all",onChange:A},{default:a(()=>[s(i,{value:"all"},{default:a(()=>[c("全部")]),_:1}),s(i,{value:"1"},{default:a(()=>[c("未读")]),_:1}),s(i,{value:"2"},{default:a(()=>[c("已读")]),_:1})]),_:1})):V("",!0)]),operationBeforeExtend:a(({record:e})=>[y.value==="send_box"?(r(),q(M,{key:0,onClick:k=>O(e.id)},{default:a(()=>[s($),c(" 接收用户 ")]),_:2},1032,["onClick"])):V("",!0),s(M,{onClick:k=>E(e)},{default:a(()=>[s(j),c(" 详细 ")]),_:2},1032,["onClick"])]),_:1},8,["options","columns"])]),s(W,{visible:h.value,"onUpdate:visible":l[0]||(l[0]=e=>h.value=e),width:"1000px",footer:!1},{title:a(()=>[c("消息详情")]),default:a(()=>[s(K,{loading:x.value,tip:"数据加载中...",class:"block"},{default:a(()=>[s(H,{style:{marginTop:"-30px"}},{default:a(()=>[s(z,null,{default:a(()=>{var e;return[c(C((e=v.value)==null?void 0:e.title),1)]}),_:1}),s(N,{class:"text-right",style:{"font-size":"13px",color:"var(--color-text-3)"}},{default:a(()=>[s(F,{size:"large"},{default:a(()=>{var e;return[m("span",null,"创建时间："+C((e=v.value)==null?void 0:e.created_at),1)]}),_:1})]),_:1}),s(N,null,{default:a(()=>{var e;return[m("div",{innerHTML:(e=v.value)==null?void 0:e.content},null,8,ne)]}),_:1})]),_:1})]),_:1},8,["loading"])]),_:1},8,["visible"]),s(G,{visible:b.value,"onUpdate:visible":l[1]||(l[1]=e=>b.value=e),width:"1000px"},{title:a(()=>[c("接收用户列表")]),default:a(()=>[s(B,{options:L.value,columns:U.value,ref_key:"receiveCrudRef",ref:I},null,8,["options","columns"])]),_:1},8,["visible"])])}}}),_e=J(ie,[["__scopeId","data-v-748b4aa4"]]);export{_e as default};