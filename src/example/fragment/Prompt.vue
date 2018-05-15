<template>
  <div id="toast-view">
    <h2 class="lTitle">Prompt</h2>
    <button class="mtui-btn mtui-btn__default" id="showPrompt">文本提示</button>
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
 * Prompt  一般用于需要输入参数的场景
 * @param {string} title 提示框的标题
 * @param {Object|function=} options 配置项或回调
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 *
 * @example
 * mtui.prompt('操作成功', {
    callback:function(value,action){
      console.log(value)
    }
 * });     简单调用法

 */
export default {
  mounted() {
    $("#showPrompt").on("click", function() {
      mtui.prompt('输码认证', function(value,action){
        console.log(value,action)
      });
    });
  }
};
</script>

