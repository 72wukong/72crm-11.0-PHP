(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-04f3"],{"9kPm":function(t,e,n){"use strict";e.a={data:function(){return{showTable:!0}},methods:{mixinSortFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ascending";if("[object Array]"!==Object.prototype.toString.call(t))return[];if(!e)return t;t.sort(function(t,i){if(t[e]===i[e])return 0;var a=isNaN(Number(t[e]))||isNaN(Number(i[e]))?t[e]<i[e]:Number(t[e])<Number(i[e]);return"descending"===n?a?1:-1:a?-1:1})}}}},Rbz8:function(t,e,n){},SMVw:function(t,e,n){"use strict";n.r(e);var i=n("9kPm"),a=n("31UX"),o=n("JgLm"),r={name:"CustomerSatisfaction",components:{FiltrateHandleView:n("CMIa").a},mixins:[a.a,i.a],data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-200,postParams:{},list:[],fieldList:[]}},computed:{},mounted:function(){var t=this;window.onresize=function(){t.tableHeight=document.documentElement.clientHeight-200}},methods:{getDataList:function(t){var e=this;this.postParams=t,this.loading=!0,Object(o.q)(t).then(function(t){var n=t.data||[];if(0==e.fieldList.length&&n.length>0){var i=n[0],a=[];for(var o in i)"realname"!==o&&"visitContractNum"!==o&&a.push({field:o,name:o});e.fieldList=[{field:"realname",name:"员工姓名"},{field:"visitContractNum",name:"回访合同总数"}].concat(a)}e.list=n,e.loading=!1}).catch(function(){e.loading=!1})},exportClick:function(){this.requestExportInfo(o.r,this.postParams,"customerSatisfaction")}}},s=(n("u3rJ"),n("KHd+")),l=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[n("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{title:"员工客户满意度分析","module-type":"contract"},on:{load:function(e){t.loading=!0},change:t.getDataList}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"table-content"},[n("el-table",{attrs:{data:t.list,height:t.tableHeight,stripe:"",border:"","highlight-current-row":""},on:{"sort-change":function(e){var n=e.prop,i=e.order;return t.mixinSortFn(t.list,n,i)}}},t._l(t.fieldList,function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.field,label:t.name,sortable:"custom",align:"center","header-align":"center","show-overflow-tooltip":""}})}))],1)])],1)},[],!1,null,"62b0c95f",null);l.options.__file="CustomerSatisfaction.vue";e.default=l.exports},u3rJ:function(t,e,n){"use strict";var i=n("Rbz8");n.n(i).a}}]);