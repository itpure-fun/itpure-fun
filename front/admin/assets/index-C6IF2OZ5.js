import{X as t,k as l,S as o,r as i,o as n,c,d as m}from"./index-CeUf7hzR.js";const a={getList(e={}){return t({url:"avenue/articleCategory/index",method:"get",params:e})},deletes(e){return t({url:"avenue/articleCategory/delete",method:"delete",data:e})},read(e){return t({url:"avenue/articleCategory/read/"+e,method:"get"})},update(e,r={}){return t({url:"avenue/articleCategory/update/"+e,method:"put",data:r})},save(e={}){return t({url:"avenue/articleCategory/save",method:"post",data:e})}},p={class:"ma-content-block lg:flex justify-between p-4"},y={name:"avenue:articleCategory"},_=Object.assign(y,{setup(e){const r=l(),s=o({id:"avenue_article_category",rowSelection:{showCheckedAll:!0},pk:"id",operationColumn:!0,operationColumnWidth:160,formOption:{viewType:"modal",width:600},api:a.getList,add:{show:!0,api:a.save,auth:["avenue:articleCategory:save"]},edit:{show:!0,api:a.update,auth:["avenue:articleCategory:update"]},delete:{show:!0,api:a.deletes,auth:["avenue:articleCategory:delete"]}}),d=o([{title:"ID",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1,commonRules:{required:!0,message:"请输入ID"}},{title:"分类名称",dataIndex:"title",formType:"input",search:!0,commonRules:{required:!0,message:"请输入分类名称"}},{title:"排序",dataIndex:"sort",formType:"input-number",commonRules:{required:!0,message:"请输入排序"}},{title:"创建时间",dataIndex:"created_at",formType:"date",addDisplay:!1,editDisplay:!1,commonRules:{required:!0,message:"请输入创建时间"},showTime:!0},{title:"更新时间",dataIndex:"updated_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,commonRules:{required:!0,message:"请输入更新时间"},showTime:!0},{title:"删除时间",dataIndex:"deleted_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0}]);return(f,h)=>{const u=i("ma-crud");return n(),c("div",p,[m(u,{options:s,columns:d,ref_key:"crudRef",ref:r},null,8,["options","columns"])])}}});export{_ as default};