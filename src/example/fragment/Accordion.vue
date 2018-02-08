<template>
  <div id="accordion-view">
    <h2 class="lTitle">Accordion</h2>

    <div class="mtui-cells__title">折叠面板</div>
    <ul class="mtui-cells_collapse">
      <li class="mtui-cells mtui-collapse mtui-collapse__active">
        <a href="#" class="mtui-cell mtui-collapse__title">
          <div class="mtui-cell__bd">一级列表</div>
          <div class="mtui-cell__ft"></div>
        </a>
        <div class="mtui-cells mtui-collapse__content">
          <div class="mtui-cell">二级列表</div>
          <div class="mtui-cell">二级列表</div>
          <div class="mtui-cell">二级列表</div>
        </div>
      </li>
      <li class="mtui-cells mtui-collapse">
        <a href="#" class="mtui-cell mtui-collapse__title">
          <div class="mtui-cell__bd">一级列表</div>
          <div class="mtui-cell__ft"></div>
        </a>
        <div class="mtui-collapse__content">
          是的
        </div>
      </li>
      <li class="mtui-cells mtui-collapse">
        <a href="#" class="mtui-cell mtui-collapse__title">
          <div class="mtui-cell__bd">一级列表</div>
          <div class="mtui-cell__ft"></div>
        </a>
        <div class="mtui-collapse__content">
          <img src="../images/logo.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
body {
  background-color: #fff;
}
</style>
<script>
// import $ from '../../js/util/util';
import $ from "webpack-zepto";
import mtui from "../../js/mtui";

export default {
  mounted() {
    console.log(mtui)
    mtui.accordion(".mtui-cells_collapse");
  }
};
</script>

