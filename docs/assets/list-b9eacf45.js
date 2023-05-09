import{i as w,D as x,J as L,r as l,C as B,b as a,c as N,d as T,g as i,w as s,h as C,t as d}from"./index-96eddb90.js";const F=w({__name:"list",setup(q){const n=x(),t=L({visible:!1,row:{}}),u=l(),r=l(),m=l({columns:[{label:"勾选",type:"selection"},{prop:"id",label:"ID",width:"60px"},{prop:"name",label:"名称",width:"150px"},{prop:"sourceName",label:"表单名称/ID",width:150},{prop:"category",label:"分类",config:{dictKey:"list"}},{prop:"status",label:"状态",config:{dictKey:"status",tagList:{0:"info",1:"success"}}},{prop:"creatName",label:"创建人"},{prop:"creatDate",label:"创建时间",width:200,config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"操作",prop:"__control",width:"110px",fixed:"right"}],controlBtn:[{label:"新增列表",icon:"plus",type:"primary",size:"small",click:()=>{c({})}},{label:"删除",key:"del",size:"small",type:"danger",icon:"delete"}],operateBtn:[{label:"编辑",click:e=>{c(e)}},{label:"设置",click:e=>{t.visible=!0,B(()=>{t.row=e})}},{label:"搜索设置",click:e=>{n.push({path:"/design/form",query:{type:"search",id:e.id,redirect:"/design/dataList/list"}})}},{label:"查看",click:e=>{n.push({path:"/design/dataList/content",query:{id:e.id}})}},{label:"删除",key:"del"}],config:{operateDropdown:!0}}),c=e=>{n.push({path:"/design/dataList",query:{id:e.id}})},b=l({list:[{type:"input",control:{modelValue:"",placeholder:"请输入列表名称"},config:{},name:"name",item:{label:"名称"}},{type:"input",control:{modelValue:"",placeholder:"请输入表单名称"},config:{},name:"sourceName",item:{label:"表单名称"}},{type:"button",control:{icon:"search",label:"查询",key:"submit",type:"primary"}},{type:"button",control:{label:"重置",key:"reset"}}],form:{labelWidth:"",class:"",size:"default"}}),f=l({list:[{type:"input",control:{modelValue:""},config:{},name:"name",item:{label:"名称"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"list"},name:"category",item:{label:"分类"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"roleList",method:"post",label:"name",value:"id",help:"哪些角色可以查看"},name:"roleId",item:{label:"权限角色"}},{type:"component",control:{modelValue:""},config:{componentName:"DiyIconfont"},name:"icon",item:{label:"icon图标"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"status"},name:"status",item:{label:"启用状态"}},{type:"switch",control:{modelValue:1,activeValue:1,inactiveValue:0},config:{},name:"showMenu",item:{label:"是否在菜单中显示"}},{type:"div",control:{},config:{textAlign:"center"},list:[{type:"button",control:{label:"修改",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"取消",key:"reset"},config:{span:0}}]}],form:{labelWidth:"140px",class:"",size:"default",name:"formDialog"},config:{source:""}}),y=e=>{e==="success"&&(t.visible=!1,t.row={},r.value.getListData())},g=e=>(e.id=t.row.id,e),h=e=>{e==="reset"&&(t.visible=!1)},_=e=>(e.type=2,e);return(e,p)=>{const k=a("router-link"),D=a("ak-list"),v=a("ak-form"),V=a("el-dialog");return N(),T("div",null,[i(D,{ref_key:"tableListEl",ref:r,requestUrl:"designList",deleteUrl:"designDelete",searchData:b.value,tableData:m.value,beforeRequest:_},{sourceName:s(({row:o})=>[i(k,{to:`/design/form?id=${o.source}`},{default:s(()=>[C(d(o.sourceName)+"/"+d(o.source),1)]),_:2},1032,["to"])]),_:1},8,["searchData","tableData"]),i(V,{modelValue:t.visible,"onUpdate:modelValue":p[0]||(p[0]=o=>t.visible=o),title:"设置",width:"480px","destroy-on-close":""},{default:s(()=>[i(v,{ref_key:"formEl",ref:u,formData:f.value,type:2,value:t.row,editUrl:"designChange",afterSubmit:y,beforeSubmit:g,onBtnClick:h},null,8,["formData","value"])]),_:1},8,["modelValue"])])}}});export{F as default};
