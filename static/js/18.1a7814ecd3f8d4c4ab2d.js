webpackJsonp([18],{"11Wb":function(o,t){},rnAv:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={methods:{showLoading:function(){var o=this;this.$loading.open("加载中..."),setTimeout(function(){o.$loading.close()},3e3)},showRainbowLoading:function(){var o=this;this.$loading.open({text:"加载中...",spinnerType:"rainbow",showModal:!0,fontColor:"#fff"}),setTimeout(function(){o.$loading.close()},3e3)},showPeeekLoading:function(){var o=this;this.$loading.open({spinnerType:"peeek",color:"yellow"}),setTimeout(function(){o.$loading.close()},3e3)},showSnakeLoading:function(){var o=this;this.$loading.open({text:"加载中...",spinnerType:"snake",showModal:!0,fontColor:"#fff",color:"#fff"}),setTimeout(function(){o.$loading.close()},3e3)},toast:function(){this.$Toast("操作失败咯操作失败咯")}}},i={render:function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{attrs:{id:"loading"}},[n("mt-button",{attrs:{type:"primary"},on:{click:o.showLoading}},[o._v("默认Loading")]),o._v(" "),n("mt-button",{attrs:{type:"primary"},on:{click:o.showRainbowLoading}},[o._v("（rainbow）Loading")]),o._v(" "),n("mt-button",{attrs:{type:"primary"},on:{click:o.showPeeekLoading}},[o._v("（peeek）Loading")]),o._v(" "),n("mt-button",{attrs:{type:"primary"},on:{click:o.showSnakeLoading}},[o._v("（snake）Loading")]),o._v(" "),n("mt-button",{attrs:{type:"primary"},on:{click:o.toast}},[o._v("toast")])],1)},staticRenderFns:[]};var a=n("Z0/y")(e,i,!1,function(o){n("11Wb")},"data-v-13a719c5",null);t.default=a.exports}});
//# sourceMappingURL=18.1a7814ecd3f8d4c4ab2d.js.map