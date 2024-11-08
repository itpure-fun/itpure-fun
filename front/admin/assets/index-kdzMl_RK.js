import{d as t}from"./dept-B-4ODiIu.js";import b from"./leader-Ckn56hsw.js";import{k as i,S as l,r as o,o as C,c as I,d as n,w as c,f as D,M as p}from"./index-CeUf7hzR.js";const R={class:"ma-content-block lg:flex justify-between p-4"},T={name:"system:dept"},B=Object.assign(T,{setup(V){const m=i(),u=i(),h=async(e,d)=>{const a=await t.changeStatus({id:d,status:e});a.success&&p.success(a.message)},f=async(e,d)=>{const a=await t.numberOperation({id:d,numberName:"sort",numberValue:e});a.success&&p.success(a.message)},_=e=>{u.value.open(e)},y=l({api:t.getList,recycleApi:t.getRecycleList,showIndex:!1,pageLayout:"fixed",rowSelection:{showCheckedAll:!0},operationColumn:!0,operationColumnWidth:220,add:{show:!0,api:t.save,auth:["system:dept:save"]},edit:{show:!0,api:t.update,auth:["system:dept:update"]},delete:{show:!0,api:t.deletes,auth:["system:dept:delete"],realApi:t.realDeletes,realAuth:["system:dept:realDeletes"]},recovery:{show:!0,api:t.recoverys,auth:["system:dept:recovery"]},isExpand:!0}),w=l([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"上级部门",dataIndex:"parent_id",hide:!0,formType:"tree-select",dict:{url:"system/dept/tree"},editDefaultValue:e=>e.parent_id==0?void 0:e.parent_id},{title:"部门名称",dataIndex:"name",search:!0,width:150,commonRules:[{required:!0,message:"部门名称必填"}]},{title:"负责人",dataIndex:"leader",search:!0,width:120},{title:"手机",dataIndex:"phone",search:!0,width:150,commonRules:[{match:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码"}]},{title:"排序",dataIndex:"sort",formType:"input-number",addDefaultValue:1,width:180,min:0,max:1e3},{title:"状态",dataIndex:"status",search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",width:120},{title:"备注",dataIndex:"remark",hide:!0,formType:"textarea"},{title:"创建时间",dataIndex:"created_at",addDisplay:!1,editDisplay:!1,search:!0,formType:"range",width:180}]);return(e,d)=>{const a=o("a-input-number"),x=o("a-switch"),g=o("icon-user"),k=o("a-link"),v=o("ma-crud");return C(),I("div",R,[n(v,{options:y,columns:w,ref_key:"crudRef",ref:m},{sort:c(({record:s})=>[n(a,{"default-value":s.sort,mode:"button",onChange:r=>f(r,s.id),min:0,max:1e3},null,8,["default-value","onChange"])]),status:c(({record:s})=>[n(x,{"checked-value":1,"unchecked-value":"2",onChange:r=>h(r,s.id),"default-checked":s.status==1},null,8,["onChange","default-checked"])]),operationBeforeExtend:c(({record:s})=>[n(k,{onClick:r=>_(s)},{default:c(()=>[n(g),D(" 领导列表")]),_:2},1032,["onClick"])]),_:1},8,["options","columns"]),n(b,{ref_key:"leaderRef",ref:u},null,512)])}}});export{B as default};
