import{_ as B,k as p,b as I,a as U,S as R,n as T,c as j,l as e,t as c,d as o,w as l,F as A,s as D,r as n,o as w,e as F,h as E,Y as H,i as M,f as y,H as P,I as Y}from"./index-CeUf7hzR.js";const m=i=>(P("data-v-8c81e054"),i=i(),Y(),i),Z=m(()=>e("div",{id:"background",class:"fixed"},null,-1)),G=m(()=>e("div",{class:"bg-backdrop-layout"},null,-1)),J={class:"login-container"},K={class:"login-width md:w-10/12 w-11/12 mx-auto flex justify-between h-full items-center"},L={class:"w-6/12 mx-auto left-panel rounded-l pl-5 pr-5 hidden md:block"},O={class:"logo"},Q=["src"],W={class:"text-black"},X={class:"slogan flex justify-end"},ee={class:"md:w-6/12 w-11/12 md:rounded-r mx-auto pl-5 pr-5 pb-10"},se={class:"mt-10 text-3xl pb-0 mb-10"},oe=m(()=>e("div",{class:"w-full absolute mb-[-550px] text-center text-white"},[e("div",{class:"p-2]"},[y("Powered by "),e("a",{href:"https://www.mineadmin.com/",target:"_blank",class:"text-[#fff] underline"},"MineAdmin")])],-1)),le={__name:"login",setup(i){p("");const v=I(),_=U(),f=p(null),r=p(!1);let b=!1;var k={username:"",password:"",code:""};const t=R(k),V=T(),$=_.query.redirect?_.query.redirect:"/",x=async({values:s,errors:a})=>{if(!r.value){if(r.value=!0,f.value.checkResult(t.code)&&!a){if(!await V.login(t)){r.value=!1;return}D().clearTags(),v.push($)}r.value=!1}};return(s,a)=>{const g=n("icon-user"),h=n("a-input"),u=n("a-form-item"),S=n("icon-lock"),N=n("a-input-password"),C=n("icon-safe"),q=n("a-button"),z=n("a-form");return w(),j(A,null,[Z,G,e("div",J,[e("div",K,[e("div",L,[e("div",O,[e("img",{src:`${s.$url}logo.png`,width:"45"},null,8,Q),e("span",W,c(s.$title),1)]),e("div",X,[e("span",null,"---- "+c(s.$t("sys.login.slogan")),1)])]),e("div",ee,[e("h2",se,c(s.$t("sys.login.title")),1),o(z,{model:t,onSubmit:x},{default:l(()=>[o(u,{field:"username","hide-label":!0,rules:[{required:!0,message:s.$t("sys.login.usernameNotice")}]},{default:l(()=>[o(h,{modelValue:t.username,"onUpdate:modelValue":a[0]||(a[0]=d=>t.username=d),class:"w-full",size:"large",placeholder:s.$t("sys.login.username"),"allow-clear":""},{prefix:l(()=>[o(g)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),o(u,{field:"password","hide-label":!0,rules:[{required:!0,message:s.$t("sys.login.passwordNotice")}]},{default:l(()=>[o(N,{modelValue:t.password,"onUpdate:modelValue":a[1]||(a[1]=d=>t.password=d),placeholder:s.$t("sys.login.password"),size:"large","allow-clear":""},{prefix:l(()=>[o(S)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),F(b)?M("",!0):(w(),E(u,{key:0,field:"code","hide-label":!0,rules:[{required:!0,match:/^[a-zA-Z0-9]{4}$/,message:s.$t("sys.login.verifyCodeNotice")}]},{default:l(()=>[o(h,{modelValue:t.code,"onUpdate:modelValue":a[2]||(a[2]=d=>t.code=d),placeholder:s.$t("sys.login.verifyCode"),size:"large","allow-clear":""},{prefix:l(()=>[o(C)]),append:l(()=>[o(H,{ref_key:"Verify",ref:f},null,512)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"])),o(u,{"hide-label":!0,class:"mt-5"},{default:l(()=>[o(q,{"html-type":"submit",type:"primary",long:"",size:"large",loading:r.value,style:{"background-color":"#000"}},{default:l(()=>[y(c(s.$t("sys.login.loginBtn")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),oe])])],64)}}},ae=B(le,[["__scopeId","data-v-8c81e054"]]);export{ae as default};
