webpackJsonp([13],{"37RQ":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup-demo"},[o("mt-button",{attrs:{type:"primary"},on:{click:function(e){t.showPopUp("center")}}},[t._v("中部弹出")]),t._v(" "),o("mt-popup",{attrs:{position:"center"},model:{value:t.isPopupShow.center,callback:function(e){t.$set(t.isPopupShow,"center",e)},expression:"isPopupShow.center"}},[o("div",{staticClass:"mt-example-popup-center"},[o("div",{staticClass:"mt-example-center-item flex-between"},[o("div",{staticClass:"flex-between_hd"},[t._v("操作状态")]),t._v(" "),o("div",{staticClass:"flex1 pass_status",on:{click:t.selectOperate}},[o("span",[t._v(t._s(t.operate[t.operateIndex].label))]),t._v(" "),o("i",{staticClass:"mtui-icon-right"})])]),t._v(" "),o("div",{staticClass:"mt-example-center-item"},[o("div",{staticStyle:{"text-align":"left"}},[t._v("操作备注")]),t._v(" "),o("div",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.targetRemark,expression:"targetRemark"}],staticClass:"targetRemark",domProps:{value:t.targetRemark},on:{input:function(e){e.target.composing||(t.targetRemark=e.target.value)}}})])])])]),t._v(" "),o("mt-button",{attrs:{type:"primary"},on:{click:function(e){t.showPopUp("top")}}},[t._v("顶部弹出")]),t._v(" "),o("mt-popup",{attrs:{position:"top",hasMask:!1},model:{value:t.isPopupShow.top,callback:function(e){t.$set(t.isPopupShow,"top",e)},expression:"isPopupShow.top"}},[o("div",{staticClass:"mt-example-popup-top"},[t._v("\n            Popup top\n        "),o("i",{staticClass:"icon mtui-icon-close",on:{click:function(e){t.hidePopUp("top")}}})])]),t._v(" "),o("mt-button",{attrs:{type:"primary"},on:{click:function(e){t.showPopUp("bottom")}}},[t._v("底部弹出")]),t._v(" "),o("mt-popup",{attrs:{position:"bottom"},model:{value:t.isPopupShow.bottom,callback:function(e){t.$set(t.isPopupShow,"bottom",e)},expression:"isPopupShow.bottom"}},[o("div",{staticClass:"mt-example-popup-bottom"},[t._v("\n            Popup bottom\n        ")])]),t._v(" "),o("mt-button",{attrs:{type:"primary"},on:{click:function(e){t.showPopUp("left")}}},[t._v("左侧弹出")]),t._v(" "),o("mt-popup",{attrs:{position:"left",hasMask:!1},model:{value:t.isPopupShow.left,callback:function(e){t.$set(t.isPopupShow,"left",e)},expression:"isPopupShow.left"}},[o("div",{staticClass:"mt-example-popup-left"},[t._v("\n            Popup Left\n            "),o("i",{staticClass:"icon mtui-icon-close",on:{click:function(e){t.hidePopUp("left")}}})])]),t._v(" "),o("mt-button",{attrs:{type:"primary"},on:{click:function(e){t.showPopUp("right")}}},[t._v("右侧弹出")]),t._v(" "),o("mt-popup",{attrs:{position:"right"},model:{value:t.isPopupShow.right,callback:function(e){t.$set(t.isPopupShow,"right",e)},expression:"isPopupShow.right"}},[o("div",{staticClass:"mt-example-popup-right"},[t._v("\n            Popup right\n        ")])])],1)},staticRenderFns:[]};var i=o("Z0/y")({name:"popup-demo",data:function(){return{isPopupShow:{},operate:[{label:"审核通过",value:0},{label:"审核失败",value:1}],operateIndex:0,targetRemark:""}},methods:{showPopUp:function(t){this.$set(this.isPopupShow,t,!0)},hidePopUp:function(t){this.$set(this.isPopupShow,t,!1)},selectOperate:function(){var t=this;this.$picker(this.operate,{id:"selectOperate",onConfirm:function(e){t.operateIndex=e[0].value,t.$Toast(e[0].label)}})}}},p,!1,function(t){o("QpM/")},"data-v-dda84fe4",null);e.default=i.exports},"QpM/":function(t,e){}});
//# sourceMappingURL=13.8197d69a792c14551519.js.map