import{e as S,a as n,o,c as C,f as V,F,g as a,w as t,b as e,h as R,i as m,t as B,r as b,j,k as z,u as q,l as M,d as N,m as I,n as G,v as H,p as y,K as P,q as Q}from"./index.34fa3368.js";const W=""+new URL("logo.03d6d6da.png",import.meta.url).href,X=S({__name:"menuItem",props:{data:{default:()=>[]}},setup(g){return(p,s)=>{const _=n("el-icon"),h=n("menu-item",!0),i=n("el-sub-menu"),f=n("el-menu-item");return o(!0),C(F,null,V(g.data,(l,u)=>(o(),C(F,{key:u},[l.children?(o(),a(i,{key:0,index:l.path||l.title},{title:t(()=>[e(_,null,{default:t(()=>[(o(),a(R(l.icon)))]),_:2},1024),m("span",null,B(l.title),1)]),default:t(()=>[e(h,{data:l.children},null,8,["data"])]),_:2},1032,["index"])):(o(),a(f,{key:1,index:l.path||l.title},{default:t(()=>[e(_,null,{default:t(()=>[(o(),a(R(l.icon)))]),_:2},1024),m("span",null,B(l.title),1)]),_:2},1032,["index"]))],64))),128)}}}),Y=S({__name:"menu",props:{collapse:{type:Boolean}},emits:["getMenuList"],setup(g,{emit:p}){const s=b([{title:"\u9996\u9875",path:"/",icon:"HomeFilled"},{title:"\u5185\u5BB9\u7BA1\u7406",icon:"Document",children:[]},{title:"\u5BFC\u51FAvue\u6D4B\u8BD5",icon:"FolderOpened",children:[{title:"\u8868\u5355\u6D4B\u8BD5",icon:"Document",path:"/export/form"},{title:"\u5217\u8868\u6D4B\u8BD5",icon:"Tickets",path:"/export/list"}]},{title:"\u7CFB\u7EDF\u5DE5\u5177",icon:"platform",children:[{title:"\u8868\u5355\u7BA1\u7406",icon:"list",path:"/designform/formlist"},{title:"\u5E2E\u52A9\u6587\u6863",icon:"InfoFilled",path:"/docs"}]}]),_=()=>{},h=()=>{const i=window.sessionStorage.getItem("formMenuList");i?s.value[1].children=JSON.parse(i):z("getFormList",{status:1}).then(f=>{var c;const l=(c=f.data.data)==null?void 0:c.list;let u=[];l&&(l.forEach(d=>{var r;d.formId&&((r=d.status)==null?void 0:r.toString())==="1"&&u.push({title:d.name,icon:"List",path:"/designform/list?tid="+d.id})}),s.value[1].children=u,window.sessionStorage.setItem("formMenuList",JSON.stringify(u)))})};return j(()=>{p("getMenuList",s.value),h()}),(i,f)=>{const l=n("el-menu");return o(),a(l,{collapse:g.collapse,"active-text-color":"#ffd04b","background-color":"rgb(48 65 86)","text-color":"#fff",onSelect:_,router:""},{default:t(()=>[e(X,{data:s.value},null,8,["data"])]),_:1},8,["collapse"])}}}),Z=N("\u9996\u9875"),ee={class:"comm-header-tool"},te={class:"header-right"},ne={class:"header-avatar",style:{cursor:"pointer"}},oe={class:"name"},le=m("span",{class:"title"},"\u4E2A\u4EBA\u4E2D\u5FC3",-1),se=m("span",{class:"title"},"\u8BBE\u7F6E",-1),ae=m("span",{class:"title"},"\u9000\u51FA\u767B\u5F55",-1),ue=S({__name:"header",props:{collapse:{type:Boolean}},emits:["click"],setup(g,{emit:p}){const s=q(),_=M(()=>s==null?void 0:s.breadcrumb),h=b({name:"userName",avatar:""}),i=l=>{p("click",l)},f=()=>{console.log("logout")};return(l,u)=>{const c=n("Fold"),d=n("Expand"),r=n("el-icon"),k=n("el-breadcrumb-item"),D=n("el-breadcrumb"),E=n("RefreshRight"),x=n("FullScreen"),L=n("el-avatar"),A=n("arrow-down"),w=n("User"),$=n("el-menu-item"),K=n("Setting"),O=n("CircleClose"),T=n("el-menu"),U=n("el-dropdown");return o(),C(F,null,[e(r,{onClick:u[0]||(u[0]=v=>i("collapse")),class:"collapse-icon"},{default:t(()=>[g.collapse?(o(),a(d,{key:1})):(o(),a(c,{key:0}))]),_:1}),e(D,{separator:"/",class:"breadcrumb"},{default:t(()=>[e(k,{to:{path:"/"}},{default:t(()=>[Z]),_:1}),(o(!0),C(F,null,V(I(_),(v,J)=>(o(),C(F,{key:J},[v.path?(o(),a(k,{key:0,to:{path:v.path}},{default:t(()=>[N(B(v.label),1)]),_:2},1032,["to"])):(o(),a(k,{key:1},{default:t(()=>[N(B(v.label),1)]),_:2},1024))],64))),128))]),_:1}),m("div",ee,[e(r,{onClick:u[1]||(u[1]=v=>i("refresh")),title:"\u5237\u65B0\u9875\u9762"},{default:t(()=>[e(E)]),_:1}),e(r,{title:"\u5168\u5C4F"},{default:t(()=>[e(x,{onClick:u[2]||(u[2]=v=>i("fullScreen"))})]),_:1})]),m("div",te,[e(U,null,{dropdown:t(()=>[e(T,{class:"avatar-menu"},{default:t(()=>[e($,null,{default:t(()=>[e(r,null,{default:t(()=>[e(w)]),_:1}),le]),_:1}),e($,null,{default:t(()=>[e(r,null,{default:t(()=>[e(K)]),_:1}),se]),_:1}),e($,{onClick:f},{default:t(()=>[e(r,null,{default:t(()=>[e(O)]),_:1}),ae]),_:1})]),_:1})]),default:t(()=>[m("div",ne,[e(L,{class:"avatar",size:"small",shape:"circle",src:h.value.avatar},null,8,["src"]),m("span",oe,B(h.value.name),1),e(r,{class:"el-icon--right"},{default:t(()=>[e(A)]),_:1})])]),_:1})])],64)}}});const ce={class:"logo"},re=m("img",{src:W,alt:""},null,-1),_e=S({__name:"index",setup(g){const p=q(),s=b(!1),_=b(!1),h=b([]),i=M({get:()=>p.reloadFlag,set:()=>{p.setReloadRouter()}}),f=c=>{c==="collapse"&&(s.value=!s.value),c==="fullScreen"&&(_.value=!_.value),c==="refresh"&&(i.value=!1,Q(()=>{i.value=!0}))},l=c=>{h.value=c},u=M(()=>{const c=p==null?void 0:p.tabs;if(c){const d=[];return c.forEach(r=>{d.push(r.name)}),d}return[]});return(c,d)=>{const r=n("el-aside"),k=n("el-header"),D=n("router-view"),E=n("el-main"),x=n("el-container"),L=n("Close"),A=n("el-icon");return o(),a(x,{class:"common-layout"},{default:t(()=>[_.value?y("",!0):(o(),a(r,{key:0,width:s.value?"64px":"220px",class:"common-sidebar"},{default:t(()=>[m("div",ce,[re,G(m("span",null,"AK\u7BA1\u7406\u7CFB\u7EDF",512),[[H,!s.value]])]),e(Y,{collapse:s.value,onGetMenuList:l},null,8,["collapse"])]),_:1},8,["width"])),e(x,{class:"overflow-scroll"},{default:t(()=>[_.value?y("",!0):(o(),a(k,{key:0,class:"common-header"},{default:t(()=>[e(ue,{onClick:f,collapse:s.value},null,8,["collapse"])]),_:1})),e(E,{class:"common-main"},{default:t(()=>[I(i)?(o(),a(D,{key:0},{default:t(({Component:w})=>[(o(),a(P,{include:I(u)},[(o(),a(R(w)))],1032,["include"]))]),_:1})):y("",!0)]),_:1})]),_:1}),_.value?(o(),a(A,{key:1,class:"quit-full",onClick:d[0]||(d[0]=w=>f("fullScreen")),title:"\u9000\u51FA\u5168\u5C4F"},{default:t(()=>[e(L)]),_:1})):y("",!0)]),_:1})}}});export{_e as default};
