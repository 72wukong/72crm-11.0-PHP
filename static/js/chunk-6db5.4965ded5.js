(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6db5"],{"/3Ri":function(t,a,i){"use strict";i.r(a);var s=i("hSIE"),e=i("zvRq"),l=i("2bXq"),c=i("dGSA"),o=i("W5iH"),n=i("9GgJ"),r={components:{StatisticalOverview:l.a,StatisticalTask:c.a,StatisticalMember:o.a,XrHeader:n.a},data:function(){return{loading:!1,detailData:{},projectList:[{work_id:"all",name:"全部"}],work_id:"all"}},created:function(){this.getProjectList(),this.getDetail()},methods:{getDetail:function(){var t=this;this.loading=!0,Object(e.a)({work_id:this.work_id}).then(function(a){t.detailData=a.data,t.loading=!1}).catch(function(){t.loading=!1})},getProjectList:function(){var t=this;Object(s.b)().then(function(a){t.projectList=[{work_id:"all",name:"全部"}].concat(a.data)}).catch(function(){})}}},d=(i("M+lX"),i("KHd+")),u=Object(d.a)(r,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"project"},[i("xr-header",{attrs:{"icon-class":"wk wk-results-solid","icon-color":"#2362FB",label:"统计分析"}}),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"project-body"},[i("statistical-overview",{staticClass:"statistical-overview",attrs:{data:t.detailData.dataCount,list:t.detailData.ownerList}},[i("el-select",{staticClass:"project-body-select",on:{change:t.getDetail},model:{value:t.work_id,callback:function(a){t.work_id=a},expression:"work_id"}},t._l(t.projectList,function(t){return i("el-option",{key:t.work_id,attrs:{label:t.name,value:t.work_id}})}))],1),t._v(" "),"all"!=t.work_id?i("flexbox",{staticClass:"statistical-task"},[i("statistical-task",{staticClass:"statistical-task-item",attrs:{list:t.detailData.classList,type:"task",title:"任务列表"}}),t._v(" "),i("statistical-task",{staticClass:"statistical-task-item",attrs:{list:t.detailData.labelList,type:"label",title:"标签分析"}})],1):t._e(),t._v(" "),i("statistical-member",{staticClass:"statistical-member",attrs:{list:t.detailData.userList}})],1)],1)},[],!1,null,"ba5c43ea",null);u.options.__file="index.vue";a.default=u.exports},"M+lX":function(t,a,i){"use strict";var s=i("hYcf");i.n(s).a},hYcf:function(t,a,i){}}]);