import{X as t}from"./index-CeUf7hzR.js";const o={getPageList(e={}){return t({url:"setting/code/index",method:"get",params:e})},deletes(e){return t({url:"setting/code/delete",method:"delete",data:e})},update(e={}){return t({url:"setting/code/update",method:"post",data:e})},readTable(e={}){return t({url:"setting/code/readTable",method:"get",params:e})},generateCode(e={}){return t({url:"setting/code/generate",method:"post",responseType:"blob",timeout:20*1e3,data:e})},loadTable(e={}){return t({url:"setting/code/loadTable",method:"post",data:e})},sync(e){return t({url:"setting/code/sync/"+e,method:"put"})},preview(e={}){return t({url:"setting/code/preview",method:"get",params:e})},getTableColumns(e={}){return t({url:"setting/code/getTableColumns",method:"get",params:e})},getDataSourceList(e={}){return t({url:"setting/code/getDataSourceList",method:"get",params:e})},getModels(){return t({url:"setting/code/getModels",method:"get"})}};export{o as g};
