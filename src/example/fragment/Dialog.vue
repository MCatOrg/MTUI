<template>
  <div id="dialog-view">
    <h2 class="lTitle">Dialog</h2>
    <button class="mtui-btn mtui-btn__default" id="showDialog1">Dialog样式一</button>
    <button class="mtui-btn mtui-btn__default" id="showDialog2">Dialog样式二</button>

    <div id="dialogs">
      <div class="js_dialog" id="Dialog1" style="display: none;">
            <div class="mtui-mask"></div>
            <div class="mtui-dialog">
                <div class="mtui-dialog__hd"><strong class="mtui-dialog__title">弹窗标题</strong></div>
                <div class="mtui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
                <div class="mtui-dialog__ft">
                    <a href="javascript:;" class="mtui-dialog__btn mtui-dialog__btn_default">辅助操作</a>
                    <a href="javascript:;" class="mtui-dialog__btn mtui-dialog__btn_primary">主操作</a>
                </div>
            </div>
        </div>
        <!--END dialog1-->
        <!--BEGIN dialog2-->
        <div class="js_dialog" id="Dialog2" style="display: none;">
            <div class="mtui-mask"></div>
            <div class="mtui-dialog">
              <div class="mtui-dialog__hd"><strong class="mtui-dialog__title">弹窗标题</strong></div>
                <div class="mtui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
                <div class="mtui-dialog__ft">
                    <a href="javascript:;" class="mtui-dialog__btn mtui-dialog__btn_primary">确定</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style>
body {
  background-color: #fff;
}
</style>
<script>
// import $ from '../../js/util/util';
import $ from "webpack-zepto";

export default {
  mounted() {
    var $Dialog1 = $("#Dialog1"),
      $Dialog2 = $("#Dialog2");

    $("#dialogs").on("click", ".mtui-dialog__btn", function() {
      $(this)
        .parents(".js_dialog")
        .hide(200);
    });

    $("#showDialog1").on("click", function() {
      $Dialog1.show(200);
    });
    $("#showDialog2").on("click", function() {
      $Dialog2.show(200);
    });
  }
};
</script>

