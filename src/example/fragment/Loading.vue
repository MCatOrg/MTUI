
<template>
  <div id="Loading-view">
    <h2 class="lTitle">Loading</h2>
    <i class="mtui-loading__icon"></i>

    <div class="mtui-loading_top">
      <i class="mtui-loading__icon"></i>
      <span class="mtui-loading__tips">加载中</span>
    </div>


    <div class="mtui-loading_left">
      <i class="mtui-loading__icon"></i>
      <span class="mtui-loading__tips">加载中...</span>
    </div>


    <div class="mtui-loading_toast">
      <i class="mtui-loading__icon"></i>
      <span class="mtui-loading__tips">正在加载</span>
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
  mounted() {}
};
</script>

