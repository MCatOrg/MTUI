webpackJsonp([16],{CkLK:function(e,r){},j0lh:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"mt-example-wrapper"},e._l(e.numberKeyboard,function(r,o){return t("div",{key:o,staticClass:"mt-example-section"},[t("div",{staticClass:"mt-example-title"},[e._v(e._s(r.title))]),e._v(" "),t("div",{staticClass:"mt-example-describe"},[e._v(e._s(r.describe))]),e._v(" "),t("mt-button",{attrs:{type:"primary"},on:{click:function(e){r.isKeyBoardShow=!r.isKeyBoardShow}}},[e._v(e._s(r.isKeyBoardShow?"收起键盘":"唤起键盘"))]),e._v(" "),t("mt-number-keyboard",{attrs:{type:r.type,disorder:r.disorder},on:{enter:function(t){e.onNumberEnter(t,r)},delete:function(t){e.onNumberDelete(r)}},model:{value:r.isKeyBoardShow,callback:function(t){e.$set(r,"isKeyBoardShow",t)},expression:"keyboard.isKeyBoardShow"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:r.isKeyBoardShow,expression:"keyboard.isKeyBoardShow"}],staticClass:"mt-example-display",domProps:{textContent:e._s(r.number)}})],1)}))},staticRenderFns:[]};var s=t("Z0/y")({name:"number-keyboard-demo",data:function(){return{numberKeyboard:[{title:"基础",describe:"有确认健和小数点，一般用于价格或金额输入",isKeyBoardShow:!1,type:"professional",disorder:!1,number:""},{title:"简单类型",describe:"无确认健和小数点，一般用于密码或验证码输入",isKeyBoardShow:!1,type:"simple",disorder:!1,number:""},{title:"数字键乱序",describe:"",isKeyBoardShow:!1,type:"professional",disorder:!0,number:""}]}},methods:{onNumberEnter:function(e,r){r.number+=e},onNumberDelete:function(e){""!==e.number&&(e.number=e.number.substr(0,e.number.length-1))}}},o,!1,function(e){t("CkLK")},"data-v-c7d3c6ae",null);r.default=s.exports}});
//# sourceMappingURL=16.1ed6535c53ce156e92b1.js.map