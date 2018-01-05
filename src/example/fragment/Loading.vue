
<template>
  <div id="Loading-view">
    <h2 class="lTitle">Loading</h2>

    <i class="mtui-loading__icon"></i>
    <hr/>
    <div class="mtui-loading_top">
      <i class="mtui-loading__icon"></i>
      <span class="mtui-loading__tips">加载中</span>
    </div>
    <hr/>
    <div class="mtui-loading_left">
      <i class="mtui-loading__icon"></i>
      <span class="mtui-loading__tips">加载中...</span>
    </div>

  </div>
</template>
<style>
body {
  background-color: #fff;
}
</style>
<script>
import mtui from "../../js/mtui";

/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 *
 * @example
 * var loading = mtui.loading('正在加载', {
 *     className: 'custom-classname'
 * });
 * setTimeout(function () {
 *     loading.hide(function() {
 *          console.log('`loading` has been hidden');
 *      });
 * }, 3000);
 */

export default {
  mounted() {
    var loading = mtui.loading("正在加载", { className: "custom-classname" });
    setTimeout(function() {
      loading.hide(function() {
        console.log("`loading` has been hidden");
      });
    }, 3000);
  }
};
</script>

