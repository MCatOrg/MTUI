webpackJsonp([11],{"+QWB":function(a,r){},nHcV:function(a,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var c={data:function(){return{searchKey:"",searchFocus:!1,historys:[{aaaa:"苹果",url:"###"},{aaaa:"香蕉",url:"###"},{aaaa:"柠檬",url:"###"},{aaaa:"火龙果",url:"###"},{aaaa:"雪梨",url:"###"},{aaaa:"菠萝",url:"###"}]}},methods:{onclear:function(){console.log("清空了")},oninputss:function(a){""==a&&console.log("清空了哈哈")},search:function(a){console.log(a),this.$Toast("你搜索了: "+a)},onsearchFocus:function(){console.log("focus"),this.searchFocus=!0},onsearchBlur:function(){console.log("searchbar had blur")},oncancle:function(){this.searchFocus=!1},onsearchInput:function(a){console.log("input event log: ",a),this.searchKey=a}},computed:{historyList:function(){var a=this;return this.historys.map(function(r){return-1!==r.title.indexOf(a.searchKey)&&""!==a.searchKey&&r})}}},e={render:function(){var a=this,r=a.$createElement,s=a._self._c||r;return s("div",{staticStyle:{"padding-left":".3rem","padding-right":".3rem","text-align":"left"}},[s("p",[a._v("默认")]),a._v(" "),s("mt-searchbar",{on:{onsearch:a.search,onclear:a.onclear}}),a._v(" "),s("br"),a._v(" "),s("p",[a._v("圆角")]),a._v(" "),s("mt-searchbar",{attrs:{circle:!0},on:{onsearch:a.search}}),a._v(" "),s("br"),a._v(" "),s("p",[a._v("onclear事件和oninput事件判断搜索条为空")]),a._v(" "),s("mt-searchbar",{on:{onsearch:a.search,onclear:a.onclear,onsearchInput:a.oninputss}}),a._v(" "),s("p",[a._v("除去action")]),a._v(" "),s("mt-searchbar",{attrs:{hasAction:!1},on:{onsearch:a.search}}),a._v(" "),s("br"),a._v(" "),s("p",[a._v("自定义placeholder")]),a._v(" "),s("mt-searchbar",{attrs:{placeholder:"输入你想要的关键词"},on:{onsearch:a.search}}),a._v(" "),s("br"),a._v(" "),s("p",[a._v("onfocus和oninput和oncancel用例")]),a._v(" "),s("div",{class:["searchbox",a.searchFocus?"cur":""]},[s("div",{staticClass:"mt-search"},[s("mt-searchbar",{attrs:{placeholder:"输入你想要的水果",historys:a.historys,historysLabel:"aaaa"},on:{onsearch:a.search,onsearchBlur:a.onsearchBlur,onsearchFocus:a.onsearchFocus,onsearchInput:a.onsearchInput,oncancle:a.oncancle}})],1),a._v(" "),a.searchFocus?s("div",{staticClass:"mt-search-close",on:{click:function(r){a.searchFocus=!1}}},[a._v("关闭")]):a._e()]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("history功能+自定义过滤关键词变量名")]),a._v(" "),s("mt-searchbar",{attrs:{historys:a.historys,historysLabel:"aaaa",placeholder:"输入你想要的水果"},on:{onsearch:a.search}})],1)},staticRenderFns:[]};var o=s("Z0/y")(c,e,!1,function(a){s("+QWB")},"data-v-3f40546a",null);r.default=o.exports}});
//# sourceMappingURL=11.16b890da57330cdc9814.js.map