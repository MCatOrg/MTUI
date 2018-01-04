<template>
  <div id="toast-view">
    <h2 class="lTitle">Toast</h2>
    <button class="mtui-btn mtui-btn__default" id="showToast">文本提示</button>

    <div id="toast" style="display: none;">
        <div class="mtui-mask_transparent"></div>
        <div class="mtui-toast">
            <i class="mtui-icon-success-no-circle mtui-icon_toast"></i>
            <p class="mtui-toast__content">文本提示</p>
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
    var $toast = $("#toast");
    $("#showToast").on("click", function() {
      if ($toast.css("display") != "none") return;

      $toast.show(100);
      setTimeout(function() {
        $toast.hide(100);
      }, 2000);
    });
  }
};
</script>

