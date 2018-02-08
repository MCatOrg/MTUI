<template>
  <div id="toast-view">
    <h2 class="lTitle">Toast</h2>
    <button class="mtui-btn mtui-btn__default" id="showToast">文本提示</button>
    <button class="mtui-btn mtui-btn__default" id="showToast2">带回调函数调用法</button>
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
/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.time=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 *
 * @example
 * mtui.toast('操作成功', 3000);     简单调用法
 * mtui.toast('操作成功', {          带回调函数调用法
 *     time: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 */
export default {
  mounted() {
    $("#showToast").on("click", function() {
      mtui.toast('文本提示', 3000);
    });
    $("#showToast2").on("click", function() {
      mtui.toast('带回调函数调用法',{
        time:3000,
        className:'custom-classname',
        callback:function(){
          console.log('主动关闭')
        }
      });
    });
  }
};
</script>

