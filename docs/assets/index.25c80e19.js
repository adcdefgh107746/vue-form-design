import{_ as Ue,a as Te}from"./vueFile.vue_vue_type_script_setup_true_lang.bf982536.js";import{e as de,A as be,o as s,c as h,i as B,F as x,f as z,d as b,t as ae,C as ve,p as _,r as oe,D as Re,l as ue,a as k,m as c,g as E,w as o,b as a,G as Ie,H as Pe,I as ke,s as Ae,J as ye,L as Le,M as pe,E as G,N as Ve,O as we,k as ce,u as Oe,z as qe,P as ze,x as He,n as je,_ as _e,y as Z,Q as fe,R as ee,S as me,q as Ke,U as Me}from"./index.34fa3368.js";const he=[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],re={type:"fixed",source:0,request:"get",sourceFun:""},Be=[{title:"\u57FA\u7840\u5B57\u6BB5",children:[{type:"input",label:"\u5355\u884C\u6587\u672C",icon:"input",control:{modelValue:""},config:{}},{type:"textarea",label:"\u591A\u884C\u6587\u672C",icon:"textarea",control:{modelValue:""},config:{}},{type:"radio",label:"\u5355\u9009\u6846\u7EC4",icon:"radio",control:{modelValue:""},options:he,config:re},{type:"checkbox",label:"\u591A\u9009\u6846\u7EC4",icon:"checkbox",control:{modelValue:[]},options:he,config:re},{type:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",icon:"select",control:{modelValue:"",appendToBody:!0},options:he,config:re},{type:"datePicker",label:"\u65E5\u671F\u9009\u62E9\u5668",icon:"date",control:{modelValue:"",type:"date"},config:{}},{type:"timePicker",label:"\u65F6\u95F4\u9009\u62E9\u5668",icon:"time",control:{modelValue:""},config:{}},{type:"colorPicker",label:"\u53D6\u8272\u5668",icon:"color",control:{modelValue:""},config:{}},{type:"switch",label:"\u5F00\u5173",icon:"switch",control:{modelValue:!1},config:{}},{type:"inputNumber",label:"\u8BA1\u6570\u5668",icon:"number",control:{modelValue:0},config:{}},{type:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668",icon:"cascader",control:{modelValue:[]},options:[],config:re},{type:"rate",label:"\u8BC4\u5206",icon:"rate",control:{modelValue:0},config:{}},{type:"slider",label:"\u6ED1\u5757",icon:"slider",control:{modelValue:0},config:{}},{type:"treeSelect",label:"\u6811\u5F62\u63A7\u4EF6",icon:"tree2",control:{modelValue:"",data:[],renderAfterExpand:!1},config:{}},{type:"txt",label:"\u6587\u5B57",icon:"text",control:{modelValue:""},config:{}},{type:"title",label:"\u6807\u9898",icon:"title",control:{modelValue:"\u6807\u9898"},config:{}}]},{title:"\u9AD8\u7EA7\u5B57\u6BB5",children:[{type:"table",label:"\u5B50\u8868",icon:"table",list:[],tableData:[],control:{border:!0},config:{}},{type:"component",label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",icon:"component",control:{modelValue:""},config:{}},{type:"upload",label:"\u56FE\u7247/\u6587\u4EF6",icon:"image",control:{modelValue:[]},config:{}},{type:"tinymce",label:"tinymce\u5BCC\u6587\u672C",icon:"tinymce",control:{modelValue:""},config:{}}]},{title:"\u5E03\u5C40\u5B57\u6BB5",children:[{type:"grid",label:"\u683C\u6805\u5E03\u5C40",icon:"grid",columns:[{attr:{span:12},list:[]},{attr:{span:12},list:[]}],control:{},config:{}},{type:"tabs",label:"\u6807\u7B7E\u9875",icon:"tabs",columns:[{label:"Tab1",list:[]}],control:{},config:{}},{type:"card",label:"\u5361\u7247\u5E03\u5C40",icon:"card",list:[],control:{},config:{},item:{}},{type:"flex",label:"\u5F39\u6027\u5E03\u5C40",icon:"flex",list:[],tableData:[],control:{},config:{}},{type:"divider",label:"\u5206\u5272\u7EBF",icon:"divider",control:{},config:{}},{type:"div",label:"div\u5BB9\u5668",icon:"div",control:{},config:{},list:[]}]}],Je=""+new URL("test.c644ce60.png",import.meta.url).href,We=Je,Qe="\u6F14\u793Atest",Ge={list:[{type:"input",control:{modelValue:""},config:{},name:"input1663920706618",item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1663920704871"},config:{title:"form1663920704871",formId:""}},Xe=Object.freeze(Object.defineProperty({__proto__:null,imgPath:We,title:Qe,formData:Ge},Symbol.toStringTag,{value:"Module"})),Ye={key:0,class:"no-date"},Ze={key:1,class:"list"},eu=["onClick"],uu=["src"],lu=de({__name:"template",emits:["click"],setup(X,{expose:L,emit:V}){const F=be({visible:!1,list:[]}),w=()=>{F.visible=!0,e()},e=()=>{const u=Object.assign({"../template/test.ts":Xe});console.log(u),F.list=[],Object.keys(u).forEach(I=>{const $=u[I];F.list.push({imgPath:$.imgPath,title:$.title,formData:$.formData})})},H=u=>{V("click",u.formData),F.visible=!1};return L({open:w}),(u,I)=>F.visible?(s(),h("div",{key:0,class:ve(["use-template",{active:F.visible}])},[B("span",{class:"close icon-close",onClick:I[0]||(I[0]=$=>F.visible=!1)}),F.list.length===0?(s(),h("div",Ye,"\u6682\u65E0\u53EF\u7528\u6A21\u677F")):(s(),h("div",Ze,[(s(!0),h(x,null,z(F.list,($,K)=>(s(),h("div",{class:"item",key:K,onClick:v=>H($)},[B("img",{src:$.imgPath},null,8,uu),b(ae($.title),1)],8,eu))),128))]))],2)):_("",!0)}}),tu={class:"components-list"},au={key:0},ou=B("div",{class:"title"},"\u5DF2\u6709\u8868\u5355\u5B57\u6BB5",-1),nu={class:"content"},su={class:"title"},iu=["title"],ru=de({__name:"dragControl",props:{formData:{default:()=>({list:[],form:{}})},searchData:{default:()=>[]},searchDesign:{type:Boolean,default:!1}},emits:["update:searchData","click"],setup(X,{emit:L}){const V=X,F=oe(V.searchData);Re(()=>V.searchData,y=>{F.value=y});const w=ue(()=>V.searchDesign?Be.slice(0,1):Be),e=y=>JSON.parse(JSON.stringify(y)),H=(y,N)=>{if(N){const g=JSON.parse(JSON.stringify(y));delete g.rules,delete g.customRules,F.value.push(g)}else V.searchData.forEach((g,O)=>{g.name===y.name&&F.value.splice(O,1)});L("update:searchData",F.value)},u=y=>{let N=!1;return V.searchData.forEach(g=>{g.name===y&&(N=!0)}),N},I=ue(()=>{const y=[];return K(V.formData.list,y),y}),$=["txt","title","table","component","upload"],K=(y,N)=>{y&&y.forEach(g=>{g.type==="grid"||g.type==="tabs"?g.columns.forEach(O=>{K(O.list,N)}):g.type==="card"?K(g.list,N):$.indexOf(g.type)===-1&&N.push(g)})},v=oe(),Y=()=>{v.value.open()},le=y=>{L("click",y)};return(y,N)=>{var O;const g=k("el-checkbox");return s(),h("div",tu,[X.searchDesign&&((O=c(I))==null?void 0:O.length)?(s(),h("div",au,[ou,B("div",nu,[(s(!0),h(x,null,z(c(I),m=>(s(),E(g,{key:m.name,checked:u(m.name),onChange:r=>H(m,r)},{default:o(()=>[b(ae(m.item.label),1)]),_:2},1032,["checked","onChange"]))),128))])])):_("",!0),(s(!0),h(x,null,z(c(w),(m,r)=>(s(),h("div",{key:r},[B("div",su,[b(ae(m.title)+" ",1),r===0&&!X.searchDesign?(s(),h("div",{key:0,class:"template",onClick:Y},"\u4F7F\u7528\u6A21\u677F")):_("",!0)]),a(c(Ie),{itemKey:"key123",tag:"ul",modelValue:m.children,"onUpdate:modelValue":p=>m.children=p,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:e},{item:o(({element:p})=>[B("li",{class:ve([p.type])},[B("i",{class:ve(`icon-${p.icon}`)},null,2),B("span",{title:p.label},ae(p.label),9,iu)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128)),a(lu,{ref_key:"useTemplateEl",ref:v,onClick:le},null,512)])}}}),cu={class:"sidebar-tools"},du=B("h3",null,"\u901A\u7528\u5C5E\u6027",-1),pu=b("\u9690\u85CF(\u9ED8\u8BA4)"),fu=b("\u7981\u7528"),mu=B("h3",null,"\u6807\u7B7E\u914D\u7F6E\u9879",-1),hu=["onClick"],vu=b("\u589E\u52A0\u6807\u7B7E"),bu={key:2},Fu=B("h3",null,"\u9009\u9879\u914D\u7F6E",-1),Eu={key:0},gu=["onClick"],Du=b("\u52A8\u6001\u9009\u9879"),Cu=b("\u6570\u636E\u6E90"),yu=b("\u65B9\u6CD5\u51FD\u6570 "),_u=b("\u63A5\u53E3\u5B57\u5178 "),Bu=b("\u8BF7\u6C42\u9644\u52A0\u53C2\u6570 "),ku=b("\u8BF7\u6C42\u7ED3\u679C\u5904\u7406\u4E8B\u4EF6 "),Au=B("h3",null,"\u6821\u9A8C\u8BBE\u7F6E",-1),Vu={key:0},wu=["onClick"],Su=b("\u5FEB\u901F\u6DFB\u52A0"),xu=b("\u7F16\u5199\u6821\u9A8C\u89C4\u5219 "),$u=b("\u5FC5\u586B "),Nu={key:4},Uu=B("h3",null,"\u5176\u4ED6\u5C5E\u6027",-1),Tu=b("\u7F16\u8F91\u5C5E\u6027 "),Ru=b("\u6DFB\u52A0\u65F6\u83B7\u53D6\u8BF7\u6C42 "),Iu=b("\u7F16\u8F91\u8868\u5355\u6837\u5F0F "),Pu=b("\u8BBE\u7F6E\u6570\u636E\u5B57\u5178 "),Lu=B("h3",null,"\u63A5\u53E3\u6570\u636E\u4E8B\u4EF6",-1),Ou=b("beforeRequest "),qu=b("afterResponse "),zu=b("beforeSubmit "),Hu=b("afterSubmit "),ju=de({__name:"formControlAttr",props:{formData:null,formConfig:{default:()=>({})}},emits:["openDialog","update:formData","update:formConfig"],setup(X,{emit:L}){const V=X,{formConfig:F,formData:w}=Pe(V),e=ke(),H=Ae(),u=ue(()=>e.controlAttr),I=oe([]),$=ue(()=>{const n=v.isSearch;return[{label:"\u8868\u5355\u540D\u79F0",value:F.value.title,key:"title",hide:n,path:"config"},{label:"\u6570\u636E\u6E90",placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90",value:pe(F.value.formId),type:"select",options:I.value,key:"formId",hide:n||!I.value.length,path:"config"},{label:"\u8868\u5355\u6807\u8BC6",value:w.value.name,key:"name"},{label:"\u8868\u5355\u6807\u7B7E\u5BBD\u5EA6",value:w.value.labelWidth,placeholder:"\u8868\u5355label\u5BBD\uFF0C\u5982180px",key:"labelWidth"},{label:"\u8868\u5355\u6837\u5F0F\u540D\u79F0",value:w.value.class,placeholder:"\u989D\u5916\u6DFB\u52A0\u7684\u8868\u5355class\u7C7B\u540D",key:"class"},{label:"\u7EC4\u4EF6\u5C3A\u5BF8",value:w.value.size,type:"select",key:"size",options:[{label:"large",value:"large"},{label:"default",value:"default"},{label:"small",value:"small"}]},{label:"\u63D0\u4EA4\u6309\u94AE",value:F.value.confirm,placeholder:n?"\u67E5\u8BE2\u6309\u94AE\u6587\u6848":"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u7A7A\u4E0D\u663E\u793A",key:"confirm",path:"config"},{label:"\u53D6\u6D88\u8FD4\u56DE\u6309\u94AE",value:F.value.cancel,placeholder:n?"\u53D6\u6D88\u67E5\u8BE2\u6587\u6848":"\u53D6\u6D88\u8FD4\u56DE\u6309\u94AE\u6587\u6848\uFF0C\u7A7A\u4E0D\u663E\u793A",path:"config",key:"cancel"},{label:"\u7B5B\u9009\u6761\u4EF6\u5C55\u5F00/\u6536\u8D77",value:F.value.expand,type:"switch",path:"config",key:"expand",hide:!n}]}),K=ue(()=>{if(Object.keys(u.value).length){const{control:n={},type:t,name:d,config:f={},item:A={},attr:D={}}=u.value;let C=!1;if(t==="table"){const S=u.value&&u.value.list;S&&S.length>0&&(C=S[0].type==="index")}return[{label:"\u81EA\u5B9A\u4E49Class",value:f.className,placeholder:"\u6837\u5F0F\u7C7B\u540D",path:"config.className"},{label:"\u5B57\u6BB5\u6807\u8BC6",value:d,type:Object.keys(v.dataSourceList).length>0?"select":"text",placeholder:"\u5B57\u6BB5\u552F\u4E00\u6807\u8BC6\uFF0C\u5BF9\u5E94\u6570\u636E\u5E93",dict:v.dataSourceList,path:"name",vHide:["grid","tabs","card","title","gridChild","tableColumn","divider","txt","div"],eventName:"filedNameKey"},{label:"\u5360\u4F4D\u5185\u5BB9",value:n.placeholder,placeholder:"placeholder",path:"control.placeholder",vShow:["password","input","textarea","select","date","number","datePicker","tinymce","timePicker","treeSelect"]},{label:"label\u503C",value:A.label,path:"item.label",vHide:["table","grid","tabs","title","gridChild","div","inputSlot","flex"]},{label:"\u9690\u85CFlabel",value:A.showLabel,path:"item.showLabel",type:"switch",vHide:["table","grid","tabs","title","gridChild","divider","card","div","inputSlot","flex"]},{label:"\u5E2E\u52A9\u4FE1\u606F",value:f.help,path:"config.help",vHide:["table","grid","tabs","gridChild","divider","div","inputSlot","flex"]},{label:"\u8868\u5355\u6805\u683C",value:f.span,placeholder:"\u8868\u5355\u533A\u57DF\u6805\u683C\u5BBD",path:"config.span",vHide:["table","grid","gridChild","divider"],isNum:!0},{label:"\u6587\u672C\u503C",value:n.modelValue,placeholder:"\u652F\u6301html",path:"control.modelValue",vShow:["txt"],inputStyle:"textarea"},{label:"\u8BBE\u4E3A\u5BC6\u7801",value:t,type:"select",dict:{\u6587\u672C:"input",\u5BC6\u7801:"password"},path:"type",vShow:["input","password"],vIf:v.isSearch},{label:"\u6587\u672C\u57DF\u9AD8\u5EA6",value:n.rows,placeholder:"\u8F93\u5165\u6846\u884C\u6570",path:"control.rows",vShow:["textarea"],isNum:!0},{label:"\u524D\u7F00",value:f.prepend,placeholder:"\u6587\u672C\u524D\u7F00",path:"config.prepend",vShow:["input","password"]},{label:"\u540E\u7F00",value:f.append,placeholder:"\u6587\u672C\u540E\u7F00",path:"config.append",vShow:["input","password"]},{label:"\u72B6\u6001\u6253\u5F00\u65F6\u7684\u503C",value:n.activeValue,placeholder:"\u72B6\u6001\u6253\u5F00\u65F6\u7684\u503C",path:"control.activeValue",vShow:["switch"],isNum:!0},{label:"\u72B6\u6001\u5173\u95ED\u65F6\u7684\u503C",value:n.inactiveValue,placeholder:"\u72B6\u6001\u5173\u95ED\u65F6\u7684\u503C",path:"control.inactiveValue",vShow:["switch"],isNum:!0},{label:"\u8F6C\u6362\u683C\u5F0F\u5316\u503C",value:f.transform,path:"config.transform",type:"switch",vShow:["checkbox","select","switch","cascader","slider","table","flex","treeSelect"]},{label:"\u589E\u52A0\u6309\u94AE\u6587\u6848",value:f.add,path:"config.add",type:"text",vShow:["flex","table"]},{label:"\u5220\u9664\u6309\u94AE\u6587\u6848",value:f.delete,path:"config.delete",type:"text",vShow:["flex","table"]},{label:"\u662F\u5426\u591A\u9009",value:n.multiple,path:"control.multiple",type:"switch",vShow:["select","treeSelect"],eventName:"selectMultiple"},{label:"\u662F\u5426\u7981\u7528",value:n.disabled,path:"control.disabled",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload","rate","tinymce","treeSelect"],vIf:v.isSearch},{label:"\u662F\u5426\u7981\u7528\u7F16\u8F91",value:f.editDisabled,path:"config.editDisabled",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload","treeSelect"],vIf:v.isSearch},{label:"\u6DFB\u52A0\u9875\u9690\u85CF",value:f.disabledAdd,path:"config.disabledAdd",type:"switch",vIf:v.isSearch,vHide:["inputSlot"]},{label:"\u7F16\u8F91\u9875\u9690\u85CF",value:f.disabledEdit,path:"config.disabledEdit",type:"switch",vIf:v.isSearch,vHide:["inputSlot"]},{label:"\u8BE6\u60C5\u9875\u9690\u85CF",value:f.disabledDetail,path:"config.disabledDetail",type:"switch",vIf:v.isSearch,vHide:["inputSlot"]},{label:"\u8BBE\u4E3AInput\u8F93\u5165\u6846\u7684\u524D/\u540E\u7F00",value:t==="inputSlot",path:"",type:"switch",vShow:["select","inputSlot"],eventName:"setInputSlot"},{label:"\u6807\u9898",value:n.modelValue,path:"control.modelValue",vShow:["title"]},{label:"\u5360\u636E\u7684\u5217\u6570span",value:D.span,path:"attr.span",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570offset",value:D.offset,path:"attr.offset",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5411\u53F3\u79FB\u52A8\u683C\u6570push",value:D.push,path:"attr.push",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5411\u5DE6\u79FB\u52A8\u683C\u6570pull",value:D.pull,path:"attr.pull",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5E8F\u53F7\u5217",value:C,type:"switch",vShow:["table"],eventName:"tableColumn1"},{label:"\u7EC4\u4EF6\u540D",value:f.template,placeholder:"\u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6\u540D\u79F0",path:"config.componentName",vShow:["component"]},{label:"\u4E0A\u4F20\u5730\u5740",value:n.action,placeholder:"\u56FE\u7247/\u6587\u4EF6\u4E0A\u4F20\u5730\u5740,\u53EF\u4E0D\u586B\u6709\u9ED8\u8BA4\u503C",path:"control.action",vShow:["upload"]},{label:"\u6587\u4EF6\u5B57\u6BB5\u540D",value:n.name,placeholder:"\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D,\u9ED8\u8BA4file",path:"control.name",vShow:["upload"]},{label:"\u5217\u8868\u7C7B\u578B",value:n.listType,type:"select",dict:{text:"text",picture:"picture","picture-card":"picture-card"},path:"control.listType",vShow:["upload"]},{label:"\u63D0\u793A\u6587\u5B57",value:f.tip,placeholder:"\u63D0\u793A\u8BF4\u660E\u6587\u5B57",path:"config.tip",vShow:["upload"]},{label:"\u6309\u94AE\u6587\u672C",value:f.btnText,placeholder:"\u4E0A\u4F20\u6309\u94AE\u6587\u672C",path:"config.btnText",vShow:["upload"]},{label:"direction",type:"select",dict:{horizontal:"horizontal",vertical:"vertical"},value:n.direction,path:"control.direction",vShow:["divider"]},{label:"border-style",value:n.borderStyle,path:"control.borderStyle",vShow:["divider"]},{label:"content-position",type:"select",dict:{left:"left",right:"right",center:"center"},value:n.contentPosition,path:"control.contentPosition",vShow:["divider"]},{label:"\u6700\u5C0F\u503C",value:n.min,path:"control.min",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"\u6700\u5927\u503C",value:n.max,path:"control.max",vShow:["rate","slider"],eventName:"formatNumber",isNum:!0},{label:"\u6B65\u957F",value:n.step,path:"control.step",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"type",value:n.type,path:"control.type",vShow:["datePicker"],type:"select",placeholder:"\u663E\u793A\u7C7B\u578B",dict:{year:"year",month:"month",date:"date",datetime:"datetime",week:"week",datetimerange:"datetimerange",daterange:"daterange",monthrange:"monthrange"}},{label:"format",value:n.format,path:"control.format",vShow:["datePicker","timePicker"],placeholder:"\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F"},{label:"color-format",value:n.colorFormat,path:"control.colorFormat",type:"select",placeholder:"\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F",dict:{hsl:"hsl",hsv:"hsv",hex:"hex",rgb:"rgb"},vShow:["colorPicker"]},{label:"\u6587\u672C\u9AD8\u5EA6",value:n.height,path:"control.height",placeholder:"\u6587\u672C\u9AD8\u5EA6(\u9884\u89C8\u67E5\u770B\u6548\u679C)",vShow:["tinymce"]},{label:"\u6587\u672C\u5BBD\u5EA6",value:n.width,path:"control.width",placeholder:"\u6587\u672C\u5BBD\u5EA6(\u9884\u89C8\u67E5\u770B\u6548\u679C)",vShow:["tinymce"]},{label:"\u56FE\u7247\u4E0A\u4F20\u5730\u5740",value:n.imgUrl,path:"control.imgUrl",placeholder:"\u56FE\u7247\u4E0A\u4F20\u5730\u5740",vShow:["tinymce"]},{label:"\u9644\u4EF6\u4E0A\u4F20\u5730\u5740",value:n.blobUrl,path:"control.blobUrl",placeholder:"\u9644\u4EF6\u4E0A\u4F20\u5730\u5740",vShow:["tinymce"]},{label:"\u663E\u793A\u6A21\u5F0F",value:f.style,path:"config.style",placeholder:"\u663E\u793A\u98CE\u683C(\u9884\u89C8\u67E5\u770B\u6548\u679C)",type:"select",dict:{default:"default",simple:"simple"},vShow:["tinymce"]}].filter(S=>{let j=!0;return S.vShow&&(j=S.vShow.includes(t)),S.vHide&&(j=!S.vHide.includes(t)),S.vIf&&(j=!1),j})}else return[]}),v=be({dataSourceList:{},customRulesList:[...ye,{type:"rules",label:"\u81EA\u5B9A\u4E49\u6B63\u5219"},{type:"methods",label:"\u81EA\u5B9A\u4E49\u65B9\u6CD5"}],isSearch:H.query.type==="search",tooltip:{css:"\u5F53\u524D\u8868\u5355\u5E94\u7528\u9875\u7684\u6837\u5F0F\uFF0C\u7C7B\u4F3C\u4E8E.vue\u6587\u4EF6\u4E2D\u7684<style scoped>\u4E2D\u7684\u6837\u5F0F</style>",dict:"\u6570\u636E\u5B57\u5178\uFF0C\u7528\u4E8E\u5339\u914D\u591A\u9009\u7EC4\u3001\u4E0B\u62C9\u9009\u62E9\u7B49\uFF0C\u63D0\u4F9B\u52A8\u6001\u83B7\u53D6Options\u63A5\u53E3\u5B57\u5178\u6570\u636E\uFF0C\u4E00\u822C\u4E0D\u8BBE\u7F6E\uFF0C\u4ECE\u63A5\u53E3dict\u83B7\u53D6\u3002\u683C\u5F0F\uFF1A{0:'\u7537',1:'\u5973'}",rules:"\u53EF\u53C2\u8003UI\u7EC4\u4EF6\u8868\u5355\u6821\u9A8C\uFF0C<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>\u8BE6\u60C5\u70B9\u51FB</a>",props:"\u53EF\u6DFB\u52A0\u5F53\u524D\u7EC4\u4EF6\u6240\u6709prop\u5C5E\u6027\u53CA\u4E8B\u4EF6\u65B9\u6CD5"}}),Y=(n,t)=>{switch(n.eventName){case"selectMultiple":t?u.value.control.modelValue=[]:u.value.control.modelValue="";break;case"tableColumn1":p(t);break;case"formatNumber":break;case"filedNameKey":for(const d in v.dataSourceList)if(v.dataSourceList[d]===t){u.value.item&&(u.value.item.label=d),u.value.name=t;return}break;case"setInputSlot":t?(u.value.type="inputSlot",u.value.item.showLabel=!0,G.success(`\u8BF7\u5728\u5BF9\u5E94\u7684Input\u8F93\u5165\u6846\u5C5E\u6027\u524D\u540E\u7F00\u8BBE\u7F6Ekey:${u.value.name}`)):(u.value.type="select",u.value.item.showLabel=!1);break}if(n.path){const d=n.isNum?pe(t):t;n.path&&le(u.value,n.path,d)}},le=(n,t,d)=>{let f=n;const A=t.split(".");let D=0;for(D;D<A.length-1;D++){const S=A[D];if(S in f)f=f[S];else throw new Error(`${S} is undefined`)}const C=A[D],M=f[A[D]];return d!==void 0&&(f[C]=d),{obj:f,key:C,value:M}},y=(n,t)=>{t==="tabs"?u.value.columns.splice(n,1):u.value.options.splice(n,1)},N=n=>{u.value.type==="cascader"?g("cascader"):u.value.type==="treeSelect"?g("treeSelect","\u7F16\u8F91\u7EC4\u4EF6\u4E0B\u62C9\u9009\u9879\u6570\u636E"):n==="tabs"?u.value.columns.push({label:"\u6807\u7B7E\u540D\u79F0",list:[]}):u.value.options.push({label:"",value:""})},g=(n,t)=>{let d=u.value.control,f={title:t};switch(n){case"treeSelect":d=u.value.control.data;break;case"cascader":d=u.value.options;break;case"optionsParams":d=u.value.config.beforeRequest||we;break;case"optionsResult":d=u.value.config.afterResponse||Ve;break}L("openDialog",d,A=>{switch(n){case"treeSelect":u.value.control.data=A;break;case"cascader":u.value.options=A;break;case"optionsParams":u.value.config.params=A;break;case"optionsResult":u.value.config.afterResponse=A;break;default:u.value.control={},Object.assign(u.value.control,A)}},f)},O=n=>{var t;(t=u.value.item)!=null&&t.rules||(u.value.item.rules=[]),n?u.value.item.rules.push({required:!0,message:"\u5FC5\u586B\u9879",trigger:"change"}):u.value.item.rules.splice(0,1)},m=n=>{var t,d;(t=u.value.item)!=null&&t.rules||(u.value.item.rules=[]),L("openDialog",(d=u.value.item)==null?void 0:d.rules,f=>{Object.assign(u.value.item.rules,f)},{title:n})},r=(n,t)=>{if(n&&n.length===0||Object.keys(u.value).length===0)return!1;const d=n.indexOf(u.value.type);return t?d!==-1:d===-1},p=n=>{const t={name:"index",type:"index",item:{label:"\u5E8F\u53F7"},control:{},config:{}};n?u.value.list.unshift(t):u.value.list.splice(0,1)},U=ue(()=>{var t;const n=u.value&&((t=u.value.item)==null?void 0:t.rules);return n&&n.length>0}),q=()=>{u.value.customRules||(u.value.customRules=[]),u.value.customRules.push({type:"required",message:"\u5FC5\u586B\u9879",trigger:"blur"})},te=n=>{u.value.customRules&&u.value.customRules.splice(n,1)},T=n=>{L("openDialog","","css",{codeType:"css",title:n})},Se=n=>{L("openDialog",{},"dict",{codeType:"json",title:n})},Fe=n=>{const t=n||H.query.formId;t&&ce("formFiled",{id:t}).then(d=>{d.data.code===200&&d.data.data.forEach(f=>{v.dataSourceList[f.label]=f.name})}).catch(d=>{console.log(d)}),H.query.type!=="search"&&ce("datasource").then(d=>{I.value=d.data.data})},ne=(n,t)=>{n.key==="formId"&&(Fe(n.value),e.setActiveKey(""),e.setControlAttr({})),n.path==="config"?F.value[n.key]=n.value||t:w.value[n.key]=n.value},xe=n=>{switch(n){case 0:return"\u6570\u636E\u6E90\u63A5\u53E3URL";case 1:return"\u65B9\u6CD5\u540D\u79F0";case 2:return"\u5B57\u5178key\uFF0C\u9ED8\u8BA4\u4E3A\u5B57\u6BB5\u6807\u8BC6"}return""},$e=(n,t)=>{const d=ye.filter(f=>f.type===t);d&&d.length&&(n.message=d[0].message)},Ee=(n,t)=>{g(n,t)},se=(n,t)=>{L("openDialog","",n,{title:t})};return Fe(),(n,t)=>{const d=k("el-option"),f=k("el-select"),A=k("el-switch"),D=k("el-input"),C=k("el-form-item"),M=k("el-radio"),S=k("el-radio-group"),j=k("el-col"),P=k("el-button"),ie=k("el-tab-pane"),J=k("QuestionFilled"),W=k("el-icon"),Q=k("el-tooltip"),ge=k("el-tabs"),Ne=k("el-checkbox"),De=k("el-form");return s(),h("div",cu,[a(ge,{modelValue:"first"},{default:o(()=>[a(ie,{label:"\u5B57\u6BB5\u914D\u7F6E",name:"first"},{default:o(()=>[a(De,{size:"small",class:"form"},{default:o(()=>[du,(s(!0),h(x,null,z(c(K),(l,R)=>(s(),E(C,{key:R,label:l.label},{default:o(()=>[l.type==="select"?(s(),E(f,{key:0,placeholder:l.placeholder,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,filterable:l.path==="name","allow-create":l.path==="name",onChange:i=>Y(l,i)},{default:o(()=>[(s(!0),h(x,null,z(l.dict,(i,Ce)=>(s(),E(d,{key:i,value:i,label:l.path==="name"?`${Ce}(${i})`:Ce},null,8,["value","label"]))),128))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue","filterable","allow-create","onChange"])):l.type==="switch"?(s(),E(A,{key:1,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,onChange:i=>Y(l,i)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(s(),E(D,{key:2,type:l.inputStyle,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,placeholder:l.placeholder,onInput:i=>Y(l,i)},null,8,["type","modelValue","onUpdate:modelValue","placeholder","onInput"]))]),_:2},1032,["label"]))),128)),c(u).config?(s(),h(x,{key:0},[a(C,{label:"\u8054\u52A8\u6761\u4EF6"},{default:o(()=>[a(A,{modelValue:c(u).config.linkKey,"onUpdate:modelValue":t[0]||(t[0]=l=>c(u).config.linkKey=l)},null,8,["modelValue"])]),_:1}),c(u).config.linkKey?(s(),h(x,{key:0},[a(C,null,{default:o(()=>[a(D,{type:"textarea",modelValue:c(u).config.linkValue,"onUpdate:modelValue":t[1]||(t[1]=l=>c(u).config.linkValue=l),placeholder:"\u8868\u8FBE\u5F0F\u5982: $.input>1 $\u8868\u793A\u4E3A\u5F53\u524D\u8868\u5355\u6570\u636E\uFF0Cinput\u4E3A\u5B57\u6BB5\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),r(["input","textarea","radio","checkbox","select","date","switch","number","cascader","slider","datePicker","timePicker","colorPicker","inputNumber","rate","treeSelect"],!0)?(s(),E(C,{key:0,label:"\u8054\u52A8\u7ED3\u679C"},{default:o(()=>[a(S,{class:"option-radio",modelValue:c(u).config.linkResult,"onUpdate:modelValue":t[2]||(t[2]=l=>c(u).config.linkResult=l)},{default:o(()=>[a(M,{label:"hidden"},{default:o(()=>[pu]),_:1}),a(M,{label:"disabled"},{default:o(()=>[fu]),_:1})]),_:1},8,["modelValue"])]),_:1})):_("",!0)],64)):_("",!0)],64)):_("",!0),r(["tabs"],!0)?(s(),h(x,{key:1},[mu,(s(!0),h(x,null,z(c(u).columns,(l,R)=>(s(),E(C,{key:R},{default:o(()=>[a(j,{span:12},{default:o(()=>[a(D,{placeholder:"\u6807\u7B7E\u914D\u7F6E\u9879",modelValue:l.label,"onUpdate:modelValue":i=>l.label=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(j,{span:2,offset:1},{default:o(()=>[B("i",{class:"icon-del",onClick:i=>y(R,"tabs")},null,8,hu)]),_:2},1024)]),_:2},1024))),128)),a(C,null,{default:o(()=>[a(P,{onClick:t[3]||(t[3]=l=>N("tabs"))},{default:o(()=>[vu]),_:1})]),_:1})],64)):_("",!0),r(["radio","select","checkbox","cascader","inputSlot","treeSelect"],!0)?(s(),h("div",bu,[Fu,r("select",!0)?(s(),E(C,{key:0,label:"\u6DFB\u52A0\u5168\u90E8\u9879"},{default:o(()=>[a(D,{placeholder:"\u8BF7\u8F93\u5165\u5168\u90E8\u9879\u6587\u6848",modelValue:c(u).config.addAll,"onUpdate:modelValue":t[4]||(t[4]=l=>c(u).config.addAll=l)},null,8,["modelValue"])]),_:1})):_("",!0),a(ge,{modelValue:c(u).config.type,"onUpdate:modelValue":t[11]||(t[11]=l=>c(u).config.type=l)},{default:o(()=>[a(ie,{label:"\u56FA\u5B9A\u9009\u9879",name:"fixed"},{default:o(()=>[c(u).type!=="cascader"?(s(),h("div",Eu,[(s(!0),h(x,null,z(c(u).options,(l,R)=>(s(),E(C,{key:R},{default:o(()=>[a(j,{span:10},{default:o(()=>[a(D,{placeholder:"\u9009\u9879\u6807\u7B7E",modelValue:l.label,"onUpdate:modelValue":i=>l.label=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(j,{span:10,offset:1},{default:o(()=>[a(D,{placeholder:"\u9009\u9879\u503C",modelValue:l.value,"onUpdate:modelValue":i=>l.value=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(j,{span:2,offset:1},{default:o(()=>[B("i",{class:"icon-del",onClick:i=>y(R)},null,8,gu)]),_:2},1024)]),_:2},1024))),128))])):_("",!0),a(C,null,{default:o(()=>[a(P,{onClick:N},{default:o(()=>[b(ae(c(u).type==="cascader"?"\u7F16\u8F91":"\u65B0\u589E"),1)]),_:1})]),_:1})]),_:1}),a(ie,{name:"async"},{label:o(()=>[a(Q,{content:"\u9009\u7528\u52A8\u6001\u9009\u9879\u65F6\u8BF7\u5220\u9664\u56FA\u5B9A\u9009\u9879\u6570\u636E",placement:"top"},{default:o(()=>[B("span",null,[Du,a(W,null,{default:o(()=>[a(J)]),_:1})])]),_:1})]),default:o(()=>[a(S,{class:"option-radio",modelValue:c(u).config.source,"onUpdate:modelValue":t[5]||(t[5]=l=>c(u).config.source=l),onChange:t[6]||(t[6]=l=>c(u).config.sourceFun="")},{default:o(()=>[a(M,{label:0},{default:o(()=>[Cu]),_:1}),a(M,{label:1},{default:o(()=>[yu,a(Q,{content:"\u9002\u7528\u4E8E\u5BFC\u51FA\u4E3A\u5355\u72EC\u7684vue\u6587\u4EF6\uFF0C\u5728\u5F53\u524D\u6587\u4EF6\u4F7F\u7528provide\u5F62\u5F0F\u5C06\u65B9\u6CD5\u4F20\u9012",placement:"top"},{default:o(()=>[a(W,null,{default:o(()=>[a(J)]),_:1})]),_:1})]),_:1}),a(M,{label:2},{default:o(()=>[_u,a(Q,{content:"\u4ECE\u5F53\u524D\u6570\u636E\u63A5\u53E3dict\u91CC\u5339\u914D\uFF0C\u53EF\u51CF\u5C11\u8BF7\u6C42\u6570\uFF0C\u5B9E\u9645\u9879\u76EE\u4E5F\u4E0D\u662F\u6BCF\u4E2A\u9009\u9879\u90FD\u6709\u5355\u72EC\u7684\u63A5\u53E3\u3002\u6B64\u8BBE\u7F6E\u9700\u8981\u5F00\u542F\u8868\u5355\u5C5E\u6027-\u6DFB\u52A0\u65F6\u83B7\u53D6\u8BF7\u6C42",placement:"top"},{default:o(()=>[a(W,null,{default:o(()=>[a(J)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(C,null,{default:o(()=>[a(D,{modelValue:c(u).config.sourceFun,"onUpdate:modelValue":t[8]||(t[8]=l=>c(u).config.sourceFun=l),placeholder:xe(c(u).config.source)},Le({_:2},[c(u).config.source?void 0:{name:"prepend",fn:o(()=>[a(f,{modelValue:c(u).config.request,"onUpdate:modelValue":t[7]||(t[7]=l=>c(u).config.request=l),style:{width:"80px"}},{default:o(()=>[a(d,{label:"get",value:"get"}),a(d,{label:"post",value:"post"})]),_:1},8,["modelValue"])])}]),1032,["modelValue","placeholder"])]),_:1}),c(u).config.source===0?(s(),E(C,{key:0},{default:o(()=>[a(P,{onClick:t[9]||(t[9]=l=>Ee("optionsParams","\u8BF7\u6C42\u524D\u5904\u7406\u4E8B\u4EF6"))},{default:o(()=>[Bu]),_:1}),a(P,{onClick:t[10]||(t[10]=l=>Ee("optionsResult"))},{default:o(()=>[ku]),_:1})]),_:1})):_("",!0)]),_:1})]),_:1},8,["modelValue"])])):_("",!0),!v.isSearch&&r(["txt","title","table","grid","tabs","card","switch","gridChild","tableColumn","divider","div"])?(s(),h(x,{key:3},[Au,r(["input","password","component"],!0)?(s(),h("div",Vu,[(s(!0),h(x,null,z(c(u).customRules,(l,R)=>(s(),E(C,{key:l.type},{default:o(()=>[a(D,{modelValue:l.message,"onUpdate:modelValue":i=>l.message=i,placeholder:"\u6821\u9A8C\u63D0\u793A\u4FE1\u606F"},{prepend:o(()=>[a(f,{modelValue:l.type,"onUpdate:modelValue":i=>l.type=i,style:{width:"80px"},onChange:i=>$e(l,i)},{default:o(()=>[(s(!0),h(x,null,z(v.customRulesList,i=>(s(),E(d,{key:i.type,label:i.label,value:i.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),append:o(()=>[B("i",{class:"icon-del",onClick:i=>te(R)},null,8,wu)]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.type==="rules"?(s(),E(D,{key:0,placeholder:"\u6B63\u5219\u8868\u8FBE\u5F0F",modelValue:l.rules,"onUpdate:modelValue":i=>l.rules=i},null,8,["modelValue","onUpdate:modelValue"])):_("",!0),l.type==="methods"?(s(),E(D,{key:1,placeholder:"\u65B9\u6CD5\u540D\u79F0",modelValue:l.methods,"onUpdate:modelValue":i=>l.methods=i},null,8,["modelValue","onUpdate:modelValue"])):_("",!0)]),_:2},1024))),128)),a(C,null,{default:o(()=>[a(P,{onClick:q},{default:o(()=>[Su]),_:1}),a(P,{onClick:t[12]||(t[12]=l=>m(v.tooltip.rules))},{default:o(()=>[xu,a(Q,{content:v.tooltip.rules,placement:"top","raw-content":""},{default:o(()=>[a(W,null,{default:o(()=>[a(J)]),_:1})]),_:1},8,["content"])]),_:1})]),_:1})])):(s(),E(C,{key:1},{default:o(()=>{var l,R;return[a(Ne,{modelValue:c(U),onChange:O},{default:o(()=>[$u]),_:1},8,["modelValue"]),((l=c(u).item)==null?void 0:l.rules)&&((R=c(u).item)==null?void 0:R.rules[0])?(s(),E(D,{key:0,placeholder:"\u81EA\u5B9A\u4E49\u5FC5\u586B\u9519\u8BEF\u63D0\u793A",modelValue:c(u).item.rules[0].message,"onUpdate:modelValue":t[13]||(t[13]=i=>c(u).item.rules[0].message=i)},null,8,["modelValue"])):_("",!0)]}),_:1}))],64)):_("",!0),r(["grid","card","gridChild","divider","div"])?(s(),h("div",Nu,[Uu,a(P,{size:"small",onClick:t[14]||(t[14]=l=>g("",v.tooltip.props))},{default:o(()=>[Tu,a(Q,{content:v.tooltip.props,placement:"top"},{default:o(()=>[a(W,null,{default:o(()=>[a(J)]),_:1})]),_:1},8,["content"])]),_:1})])):_("",!0)]),_:1})]),_:1}),a(ie,{label:"\u8868\u5355\u914D\u7F6E",name:"second"},{default:o(()=>[a(De,{size:"small",class:"form"},{default:o(()=>[(s(!0),h(x,null,z(c($).filter(l=>!l.hide),(l,R)=>(s(),E(C,{label:l.label,key:R},{default:o(()=>[l.type==="select"?(s(),E(f,{key:0,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,placeholder:l.placeholder,onChange:i=>ne(l)},{default:o(()=>[(s(!0),h(x,null,z(l.options,i=>(s(),E(d,{label:i.label||i.name,key:i.label||i.name,value:c(pe)(i.value||i.id)},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","onChange"])):l.type==="switch"?(s(),E(A,{key:1,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,onInput:i=>ne(l)},null,8,["modelValue","onUpdate:modelValue","onInput"])):(s(),E(D,{key:2,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,placeholder:l.placeholder,onInput:i=>ne(l)},null,8,["modelValue","onUpdate:modelValue","placeholder","onInput"]))]),_:2},1032,["label"]))),128)),v.isSearch?_("",!0):(s(),E(C,{key:0},{label:o(()=>[Ru,a(Q,{content:"\u65B0\u589E\u8868\u5355\u6570\u636E\u65F6\uFF0C\u4ECE\u63A5\u53E3\u83B7\u53D6\u65B0\u589E\u521D\u59CB\u6570\u636E",placement:"top"},{default:o(()=>[a(W,null,{default:o(()=>[a(J)]),_:1})]),_:1})]),default:o(()=>[a(A,{modelValue:c(F).addLoad,"onUpdate:modelValue":t[15]||(t[15]=l=>c(F).addLoad=l),onChange:t[16]||(t[16]=l=>ne({key:"addLoad",path:"config"},l))},null,8,["modelValue"])]),_:1})),a(C,null,{default:o(()=>[a(P,{onClick:t[17]||(t[17]=l=>T(v.tooltip.css))},{default:o(()=>[Iu,a(Q,{content:v.tooltip.css,placement:"top"},{default:o(()=>[a(W,null,{default:o(()=>[a(J)]),_:1})]),_:1},8,["content"])]),_:1}),a(P,{onClick:t[18]||(t[18]=l=>Se(v.tooltip.dict))},{default:o(()=>[Pu,a(Q,{content:v.tooltip.dict,placement:"top"},{default:o(()=>[a(W,null,{default:o(()=>[a(J)]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),v.isSearch?_("",!0):(s(),h(x,{key:1},[Lu,a(C,{class:"event-btn"},{default:o(()=>[a(P,{onClick:t[19]||(t[19]=l=>se("beforeRequest","\u83B7\u53D6\u8868\u5355\u521D\u59CB\u6570\u636E\u524D\u4E8B\u4EF6\uFF0C\u53EF\u4FEE\u6539\u8BF7\u6C42\u53C2\u6570"))},{default:o(()=>[Ou]),_:1}),a(P,{onClick:t[20]||(t[20]=l=>se("afterResponse","\u83B7\u53D6\u8868\u5355\u521D\u59CB\u6570\u636E\u540E\u4E8B\u4EF6\uFF0C\u53EF\u5BF9\u8BF7\u6C42\u8FD4\u56DE\u6570\u636E\u8FDB\u884C\u5904\u7406"))},{default:o(()=>[qu]),_:1}),a(P,{onClick:t[21]||(t[21]=l=>se("beforeSubmit","\u8868\u5355\u6570\u636E\u63D0\u4EA4\u524D\u4E8B\u4EF6\uFF0C\u53EF\u5BF9\u63D0\u4EA4\u6570\u636E\u8FDB\u884C\u5904\u7406"))},{default:o(()=>[zu]),_:1}),a(P,{onClick:t[22]||(t[22]=l=>se("afterSubmit","\u8868\u5355\u6570\u636E\u63D0\u4EA4\u6210\u529F\u4E8B\u4EF6"))},{default:o(()=>[Hu]),_:1})]),_:1})],64))]),_:1})]),_:1})]),_:1})])}}}),Ku={class:"design-container"},Mu={class:"main-body"},Ju={class:"main-form"},Wu={key:0,class:"empty-tips"},Qu=["innerHTML"],Gu={key:0,id:"editJson"},Xu={class:"dialog-footer"},Yu=b(" \u786E\u5B9A "),Zu={class:"dialog-footer"},el=b(" \u63D0\u4EA4 "),ul=b(" \u53D6\u6D88 "),al=de({__name:"index",setup(X){var O;Oe().changeBreadcrumb([{label:"\u7CFB\u7EDF\u5DE5\u5177"},{label:"\u8868\u5355\u8BBE\u8BA1"}]);const V=ke(),F=qe(),w=Ae(),e=be({formData:{list:[],form:{labelWidth:"",class:"",size:"default",name:"form"+new Date().getTime()},config:{title:"form"+new Date().getTime(),formId:w.query.formId||""}},visibleDialog:!1,dialogType:"",dialogTitle:"",codeType:"",editor:{},loading:!1,drawerDirection:"rtl",formDataPreview:{},previewVisible:!1,searchDesign:((O=w.query)==null?void 0:O.type)==="search",formDataList:{},formDataTemp:{},formDict:{}}),H=oe(),u=()=>{const m=w.query.id;m&&(e.loading=!0,ce("getFormById",{id:m}).then(r=>{if(r.data.code===200){const p=r.data.data;e.searchDesign?(p.searchData&&(e.formData=Z(p.searchData)),e.formDataList=Z(p.formData),e.formDataTemp=p):p.formData&&(e.formData=Z(p.formData)),e.formDict=fe(p.dict)}e.loading=!1}).catch(r=>{G.error(r.data.message||"\u52A0\u8F7D\u5F02\u5E38"),e.loading=!1}))},I=m=>{switch(e.dialogType="",m){case"del":e.formData.list=[],V.setActiveKey(""),V.setControlAttr({});break;case"eye":V.setActiveKey(""),V.setControlAttr({}),e.previewVisible=!0;let r=ee(e.formData);const p=e.formData.form.name,U=new RegExp(`get${p}ControlByName`,"g");r=r.replace(U,`getPreview${p}ControlByName`),e.formDataPreview=Z(r),e.formDataPreview.form.name=`Preview${p}`;break;case"json":v(e.formData,"",{title:"\u53EF\u7F16\u8F91\u4FEE\u6539\u6216\u5C06\u5DF2\u751F\u6210\u7684\u811A\u672C\u7C98\u8D34\u8FDB\u6765"});break;case"save":K();break;case"vue":H.value.open(e.formData);break}},$=()=>{try{const m=e.editor.getValue();if(typeof e.dialogType=="function"){const r=e.codeType==="json"?fe(m):Z(m);e.dialogType(r)}else switch(e.dialogType){case"css":e.formData.config||(e.formData.config={}),e.formData.config.style=m;break;case"dict":e.formDict=fe(m);break;case"beforeRequest":case"beforeSubmit":case"afterResponse":case"afterSubmit":e.formData.events||(e.formData.events={}),e.formData.events[e.dialogType]=Z(m);break;default:e.formData=Z(m)}e.visibleDialog=!1}catch{}},K=()=>{var p,U;const m=(p=e.formData.config)==null?void 0:p.title;if(!e.searchDesign&&!m){G.error("\u8BF7\u5207\u6362\u5230\u8868\u5355\u5C5E\u6027\u8F93\u5165\u8868\u5355\u540D\u79F0\uFF01");return}const r=Object.assign({},e.formDataTemp,{formData:ee(e.formData),id:w.query.id,formId:((U=e.formData.config)==null?void 0:U.formId)||w.query.formId,name:m,type:1,dict:me(e.formDict)});e.searchDesign&&Object.assign(r,{searchData:ee(e.formData),formData:e.formDataTemp.formData}),e.loading=!0,ce("saveForm",r).then(q=>{q.data.code===200?(G({message:"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"}),F.push({path:"/designform/formlist"})):G.error(q.data.message),e.loading=!1}).catch(q=>{G.error(q.data.message||"\u4FDD\u5B58\u5F02\u5E38"),e.loading=!1}),w.query.id||window.sessionStorage.removeItem("formMenuList"),V.setActiveKey(""),V.setControlAttr({})},v=(m,r,p)=>{var q;e.drawerDirection=r?"ltr":"rtl",e.dialogType=r,e.codeType=(p==null?void 0:p.codeType)||"",e.dialogTitle=p!=null&&p.title?`\u63D0\u793A\uFF1A${p==null?void 0:p.title}`:"",e.visibleDialog=!0;let U=e.codeType==="json"?me(m,!0):ee(m,!0);switch(r){case"css":U=((q=e.formData.config)==null?void 0:q.style)||"";break;case"dict":U=me(e.formDict,!0);break;case"beforeRequest":case"beforeSubmit":const te=e.formData.events||{};U=ee(te[r]||we,!0);break;case"afterResponse":case"afterSubmit":const T=e.formData.events||{};U=ee(T[r]||Ve,!0);break}Ke(()=>{e.editor=Me(U,"",e.codeType)})},Y=m=>{le(),m()},le=()=>{e.visibleDialog=!1,e.dialogType=""},y=oe(),N=()=>{y.value.validate((m,r)=>{if(m)G.success("\u6821\u9A8C\u901A\u8FC7"),console.log(r);else return G.error("\u6821\u9A8C\u4E0D\u901A\u8FC7"),!1})},g=m=>{e.formData=m};return u(),ze(()=>{Object.keys(e.editor).length!==0&&(e.editor.destroy(),e.editor.container.remove())}),(m,r)=>{const p=k("el-button"),U=k("el-drawer"),q=k("el-dialog"),te=He("loading");return s(),h("div",Ku,[a(ru,{formData:e.formDataList,searchData:e.formData.list,"onUpdate:searchData":r[0]||(r[0]=T=>e.formData.list=T),searchDesign:e.searchDesign,onClick:g},null,8,["formData","searchData","searchDesign"]),B("div",Mu,[a(Ue,{onClick:I}),je((s(),h("div",Ju,[e.formData.list.length===0?(s(),h("div",Wu," \u4ECE\u5DE6\u4FA7\u62D6\u62FD\u6765\u6DFB\u52A0\u5B57\u6BB5 ")):_("",!0),a(_e,{type:4,formData:e.formData,dict:e.formDict},null,8,["formData","dict"])])),[[te,e.loading]])]),a(ju,{formData:e.formData.form,"onUpdate:formData":r[1]||(r[1]=T=>e.formData.form=T),formConfig:e.formData.config,"onUpdate:formConfig":r[2]||(r[2]=T=>e.formData.config=T),onOpenDialog:v},null,8,["formData","formConfig"]),a(U,{modelValue:e.visibleDialog,"onUpdate:modelValue":r[3]||(r[3]=T=>e.visibleDialog=T),size:"60%",title:e.dialogTitle,direction:e.drawerDirection,"custom-class":"ace-dialog","append-to-body":!0,"before-close":Y},{header:o(()=>[B("div",{innerHTML:e.dialogTitle},null,8,Qu)]),default:o(()=>[e.visibleDialog?(s(),h("div",Gu)):_("",!0),B("div",Xu,[a(p,{type:"primary",size:"small",onClick:$},{default:o(()=>[Yu]),_:1})])]),_:1},8,["modelValue","title","direction"]),e.searchDesign?_("",!0):(s(),E(Te,{key:0,ref_key:"vueFileEl",ref:H},null,512)),a(q,{modelValue:e.previewVisible,"onUpdate:modelValue":r[5]||(r[5]=T=>e.previewVisible=T),title:"\u9884\u89C8",fullscreen:!0},{footer:o(()=>[B("div",Zu,[a(p,{size:"small",type:"primary",onClick:N},{default:o(()=>[el]),_:1}),a(p,{size:"small",onClick:r[4]||(r[4]=T=>e.previewVisible=!1)},{default:o(()=>[ul]),_:1})])]),default:o(()=>[e.previewVisible?(s(),E(_e,{key:0,"form-data":e.formDataPreview,dict:e.formDict,type:1,ref_key:"previewForm",ref:y},null,8,["form-data","dict"])):_("",!0)]),_:1},8,["modelValue"])])}}});export{al as default};
