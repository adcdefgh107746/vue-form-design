import{r as e,b as o,c as r,d as s,g as n}from"./index-96eddb90.js";const b={__name:"post",setup(p){const a=e({}),l=e({columns:[{label:"多选",type:"selection"},{label:"序号",type:"index",width:70},{label:"岗位名称",prop:"name"},{label:"状态",prop:"status"},{label:"创建时间",prop:"updateTime"},{label:"操作",prop:"__control"}],config:{expand:!0},controlBtn:[{label:"添加",key:"add",type:"primary",size:"small",icon:"plus"},{label:"批量删除",key:"del",type:"danger",size:"small",icon:"delete"}],operateBtn:[{label:"编辑",key:"edit"},{label:"删除",key:"del"}]});return(c,i)=>{const t=o("ak-list");return r(),s("div",null,[n(t,{ref:"tableListEl",requestUrl:"",deleteUrl:"",searchData:a.value,tableData:l.value},null,8,["searchData","tableData"])])}}};export{b as default};
