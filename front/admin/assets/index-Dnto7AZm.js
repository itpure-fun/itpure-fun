import{X as a,k as c,S as p,r as l,o as _,c as v,d as s,w as i,f as x,t as k}from"./index-CeUf7hzR.js";const o={getList(e={}){return a({url:"avenue/product/index",method:"get",params:e})},save(e={}){return a({url:"avenue/product/save",method:"post",data:e})},update(e,d={}){return a({url:"avenue/product/update/"+e,method:"put",data:d})},read(e){return a({url:"avenue/product/read/"+e,method:"get"})},deletes(e){return a({url:"avenue/product/delete",method:"delete",data:e})},fetchProduct(e){return a({url:"avenue/product/fetchProduct",method:"post",data:e})}},T={class:"ma-content-block lg:flex justify-between p-4"},w={name:"avenue:product"},D=Object.assign(w,{setup(e){const d=c(),m=async t=>{const n={url:t.formModel.value.link},r=await o.fetchProduct(n);t.formModel.value.title=r.data.title,t.formModel.value.desc=r.data.desc};c([{id:0,value:"关闭"},{id:1,value:"开启"},{id:2,value:"审核中"}]);const f=p({id:"avenue_product",rowSelection:{showCheckedAll:!0},pk:"id",operationColumn:!0,operationColumnWidth:160,formOption:{viewType:"modal",width:600},api:o.getList,add:{show:!0,api:o.save,auth:["avenue:product:save"]},edit:{show:!0,api:o.update,auth:["avenue:product:update"]},delete:{show:!0,api:o.deletes,auth:["avenue:product:delete"]}}),h=p([{title:"ID",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1,commonRules:{required:!0,message:"请输入ID"}},{title:"链接",dataIndex:"link",formType:"input",width:200,commonRules:{required:!0,message:"请输入链接"}},{title:"获取信息",dataIndex:"fetch_product",formType:"button",onClick:t=>{m(t)},hide:!0},{title:"名称",dataIndex:"title",formType:"input",search:!0,commonRules:{required:!0,message:"请输入名称"}},{title:"描述",dataIndex:"desc",formType:"textarea",commonRules:{required:!0,message:"请输入描述"}},{title:"logo",dataIndex:"logo",addDisplay:!1,editDisplay:!1},{title:"logo",dataIndex:"logo_hash",formType:"upload",hide:!0,dict:{type:"image",multiple:!1},requestData:{onlyUrl:!0,path:"product/logo"},commonRules:{required:!0,message:"请输入logo"}},{title:"分类",dataIndex:"cate_id",formType:"select",search:!0,dict:{url:"avenue/productCategory/index",params:{onlyMenu:!0},props:{label:"title",value:"id"},translation:!0},commonRules:{required:!0,message:"请选择分类id"}},{title:"标签",dataIndex:"tags",formType:"select",search:!0,multiple:!0,dict:{url:"avenue/tag/index",params:{onlyMenu:!0,type:0},props:{label:"title",value:"id"},translation:!0},commonRules:{required:!0,message:"请选择标签"}},{title:"状态",dataIndex:"status",formType:"radio",search:!0,addDefaultValue:"0",dict:{name:"product_status",props:{label:"title",value:"key"},translation:!0},commonRules:{required:!0,message:"请设置产品状态"}},{title:"排序",dataIndex:"sort",formType:"input",commonRules:{required:!1,message:"请输入排序"}},{title:"点击数",dataIndex:"click",formType:"input",addDisplay:!1,editDisplay:!1,commonRules:{required:!0,message:"请输入点击数"}},{title:"更新时间",dataIndex:"updated_at",formType:"date",addDisplay:!1,editDisplay:!1,width:200,commonRules:{required:!0,message:"请输入更新时间"},showTime:!0},{title:"删除时间",dataIndex:"deleted_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0}]);return(t,n)=>{const r=l("a-image"),y=l("a-link"),g=l("ma-crud");return _(),v("div",T,[s(g,{options:f,columns:h,ref_key:"crudRef",ref:d},{logo:i(({record:u})=>[s(r,{width:"20",src:u.logo},null,8,["src"])]),link:i(({record:u})=>[s(y,{href:u.link,target:"_blank"},{default:i(()=>[x(k(u.link),1)]),_:2},1032,["href"])]),_:1},8,["options","columns"])])}}});export{D as default};