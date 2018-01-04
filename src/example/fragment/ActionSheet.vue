<template>
  <div id="actionSheet-view">
    <h2 class="lTitle">ActionSheet</h2>
    <button id="showActionSheet" class="mtui-btn mtui-btn__default">ActionSheet</button>

    <div>
        <div class="mtui-mask" id="Mask" style="display: none"></div>
        <div class="mtui-actionsheet" id="Actionsheet">
            <div class="mtui-actionsheet__title">
                <p class="mtui-actionsheet__title-text">这是一个标题，可以为一行或者两行。</p>
            </div>
            <div class="mtui-actionsheet__menu">
                <div class="mtui-actionsheet__cell">示例菜单</div>
                <div class="mtui-actionsheet__cell">示例菜单</div>
                <div class="mtui-actionsheet__cell">示例菜单</div>
                <div class="mtui-actionsheet__cell">示例菜单</div>
            </div>
            <div class="mtui-actionsheet__action">
                <div class="mtui-actionsheet__cell" id="iosActionsheetCancel">取消</div>
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
    var $iosActionsheet = $("#Actionsheet");
    var $iosMask = $("#Mask");

    function hideActionSheet() {
      $iosActionsheet.removeClass("mtui-actionsheet_toggle");
      $iosMask.hide(200);
    }

    $iosMask.on("click", hideActionSheet);
    $("#iosActionsheetCancel").on("click", hideActionSheet);
    $("#showActionSheet").on("click", function() {
      $iosActionsheet.addClass("mtui-actionsheet_toggle");
      $iosMask.show(200);
    });
  }
};
</script>

