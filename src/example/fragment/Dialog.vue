<template>
  <div id="dialog-view">
    <h2 class="lTitle">Dialog</h2>
    <button class="mtui-btn mtui-btn__default" id="showDialog1">Dialog样式一</button>
    <button class="mtui-btn mtui-btn__default" id="showDialog2">Dialog样式二</button>
  </div>
</template>
<style scoped>
body {
  background-color: #fff;
}
</style>
<script>
import $ from "webpack-zepto";
import mtui from "../../js/mtui";
// *  主动关闭
// * var $dialog = mtui.dialog({...});
// * $dialog.hide(function(){
// *      console.log('`dialog` has been hidden');
// * });
export default {
  mounted() {
    $("#showDialog1").on("click", function() {
      var $dialog = mtui.dialog({
        title: "弹窗标题",
        content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
        className: "showDialog1",
        buttons: [
          {
            label: "辅助操作",
            type: "default",     //按钮的类型 [primary, default,..] 默认 primary .mtui-dialog__btn_default
            onClick: function() {
              console.log("辅助操作");
            }
          },
          {
            label: "主操作",
            type: "primary",     //按钮的类型 [primary, default,..] 默认 primary .mtui-dialog__btn_primary
            onClick: function() {
              mtui.confirm('hello')
              console.log(mtui.confirm);
            }
          }
        ]
      });
      setTimeout(function(){
          $dialog.hide(function(){
            console.log('主动关闭')
          })
        },2000)
    });
    $("#showDialog2").on("click", function() {
      mtui.dialog({
        title: "弹窗标题",
        content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
        className: "showDialog2",
        buttons: [
          {
            label: "确定",
            type: "primary",
            onClick: function() {
              console.log("确定");
            }
          }
        ]
      });
    });
  }
};
</script>

