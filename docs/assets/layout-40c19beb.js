import{i as V,r as c,C as $,o as z,b as r,c as t,d as a,e as C,F as d,f as v,n as A,t as u,s as D,g as h,w as s,k as m,h as k,T as q,m as F,D as M}from"./index-96eddb90.js";const R={class:"layout-docs"},j=["onClick"],J=V({__name:"layout",setup(G){const T=M(),_=c(),i=c([]);T.afterEach(()=>{y()});const y=()=>{$(()=>{setTimeout(()=>{if(_.value){const n=_.value.querySelectorAll("h2,h3"),o=Array.from(n).filter(l=>!!l.innerText.trim());o.length||(i.value=[]),i.value=o.map(l=>({title:l.id,lineIndex:l.getAttribute("data-source-line"),indent:parseInt(l.tagName.replace(/h/gi,""))}))}},500)})},b=n=>{const o=document.querySelector(`[data-source-line="${n.lineIndex}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"start"})},S=c([{title:"开发指南",to:"/docs"},{title:"组件",children:[{title:"ak-form",to:"/docs/form"},{title:"ak-list",to:"/docs/list"}]},{title:"接口文档",to:"/docs/api",children:[{title:"数据源设计",to:"/docs/api"},{title:"表单设计",to:"/docs/api"},{title:"列表页设计",to:"/docs/api"},{title:"数据统计",to:"/docs/api"},{title:"数据大屏",to:"/docs/api"},{title:"流程设计",to:"/docs/api"}]},{title:"使用手册",to:"/docs/use",children:[{title:"快速开始",to:"/docs/use-start"},{title:"数据源",to:"/docs/use-dataSource"},{title:"ak-form",to:"/docs/use-form"},{title:"ak-list",to:"/docs/use-list"},{title:"可视化数据大屏",to:"/docs/use-screen"}]}]),w=c("/docs"),I=(n,o)=>{console.log(n,o)};return z(()=>{y()}),(n,o)=>{var x;const l=r("el-menu-item"),B=r("el-sub-menu"),E=r("el-menu"),L=r("router-view");return t(),a("div",R,[C("div",{class:D(["sidebar",{show:(x=i.value)==null?void 0:x.length}])},[(t(!0),a(d,null,v(i.value,(e,f)=>(t(),a("a",{style:A([{cursor:"pointer"},{paddingLeft:`${(e.indent-2)*15}px`}]),onClick:p=>b(e),key:f},u(e.title),13,j))),128))],2),h(E,{"default-active":w.value,class:"nav",mode:"horizontal",router:"","active-color":"#409eff",ellipsis:!1,onSelect:I},{default:s(()=>[(t(!0),a(d,null,v(S.value,(e,f)=>{var p;return t(),a(d,{key:f},[(p=e.children)!=null&&p.length?(t(),m(B,{key:0,index:e.to||e.title},{title:s(()=>[k(u(e.title),1)]),default:s(()=>[(t(!0),a(d,null,v(e.children,(g,N)=>(t(),m(l,{index:g.to,key:N},{default:s(()=>[k(u(g.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"])):(t(),m(l,{key:1,index:e.to},{default:s(()=>[k(u(e.title),1)]),_:2},1032,["index"]))],64)}),128))]),_:1},8,["default-active"]),C("div",{class:"main-content",ref_key:"articleEl",ref:_},[h(L,null,{default:s(({Component:e})=>[h(q,{name:"left-fade",mode:"out-in"},{default:s(()=>[(t(),m(F(e)))]),_:2},1024)]),_:1})],512)])}}});export{J as default};
