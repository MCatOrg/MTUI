<template>
  <div id="slider-view">
    <h2 class="lTitle">Slider</h2>
    <div class="mtui-slider-box" id="slider">
        <div class="mtui-slider__inner">
          <div style="width:50%" class="mtui-slider__track"></div>
          <div style="left:50%" class="mtui-slider__handler"></div>
        </div>
      <div class="mtui-slider__value">50</div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: red;
}
</style>
<script>
import mtui from "../../js/mtui";
export default {
  mounted() {
    mtui.slider("#slider", {
      step: 10,        //每次移动的百分比，取值范围 [0-100]
      defaultValue: 10, //slider的默认百分比值，取值范围 [0-100]
      onChange: function(percent) {   //slider发生改变时返回对应的百分比，取值范围 [0-100]
        console.log(percent);
      }
    });
  }
};
</script>

