(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-173b"],{MVFt:function(t,i,e){"use strict";var n=e("SfZn");e.n(n).a},SfZn:function(t,i,e){},o2d2:function(t,i,e){"use strict";e.r(i);var n=e("JrBc"),a=e("MT78"),s=e.n(a),o=e("pHUW"),l={name:"RankingRecordNunStatistics",mixins:[n.a],data:function(){return{}},computed:{},mounted:function(){this.fieldList=[{field:"user_name",name:"员工"},{field:"structure_name",name:"部门"},{field:"count",name:"跟进次数（次）"}],this.initAxis()},methods:{getDataList:function(t){var i=this;this.postParams=t,this.loading=!0,Object(o.o)(t).then(function(t){i.loading=!1,i.list=t.data||[];for(var e=[],n=[],a=t.data.length>10?10:t.data.length,s=0;s<a;s++){var o=t.data[s];e.splice(0,0,parseFloat(o.count)),n.splice(0,0,o.user_name)}i.axisOption.yAxis[0].data=n,i.axisOption.series[0].data=e,i.chartObj.setOption(i.axisOption,!0)}).catch(function(){i.loading=!1})},initAxis:function(){this.chartObj=s.a.init(document.getElementById("axismain")),this.axisOption.tooltip.formatter="{b} : {c}次",this.axisOption.xAxis[0].name="（次）",this.chartObj.setOption(this.axisOption,!0)},exportClick:function(){this.requestExportInfo(o.p,this.postParams,"recordNun")}}},r=(e("MVFt"),e("KHd+")),c=Object(r.a)(l,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[e("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{"show-user-select":!1,title:"跟进次数排行","module-type":"ranking"},on:{load:function(i){t.loading=!0},change:t.getDataList}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"content-title"},[t._v("跟进次数排行（按拜访时间统计）")]),t._v(" "),e("div",{directives:[{name:"empty",rawName:"v-empty",value:0===t.list.length,expression:"list.length === 0"}],staticClass:"axis-content",attrs:{"xs-empty-text":"暂无排行"}},[e("div",{attrs:{id:"axismain"}})]),t._v(" "),e("div",{staticClass:"table-content"},[e("div",{staticClass:"handle-bar"}),t._v(" "),e("el-table",{attrs:{data:t.list,height:"400",stripe:"",border:"","highlight-current-row":""}},[e("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"公司总排名"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v("\n            "+t._s(i.$index+1)+"\n          ")]}}])}),t._v(" "),t._l(t.fieldList,function(t,i){return e("el-table-column",{key:i,attrs:{prop:t.field,label:t.name,align:"center","header-align":"center","show-overflow-tooltip":""}})})],2)],1)])],1)},[],!1,null,"5c8b030b",null);c.options.__file="RankingRecordNunStatistics.vue";i.default=c.exports}}]);