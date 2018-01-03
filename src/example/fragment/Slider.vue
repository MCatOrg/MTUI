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
<style>
body {
  background-color: #fff;
}
</style>
<script>
import $ from "webpack-zepto";
export default {
  mounted() {
    var $sliderTrack = $(".mtui-slider__track"),
      $sliderHandler = $(".mtui-slider__handler"),
      $sliderValue = $(".mtui-slider__value");
    var totalLen = $(".mtui-slider__inner").width(),
      startLeft = 0,
      startX = 0;

    $sliderHandler
      .on("touchstart", function(e) {
        startLeft = parseInt($sliderHandler.css("left")) * totalLen / 100;
        startX = e.changedTouches[0].clientX;
      })
      .on("touchmove", function(e) {
        var dist = startLeft + e.changedTouches[0].clientX - startX, percent;
        dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
        percent = parseInt(dist / totalLen * 100);
        $sliderTrack.css("width", percent + "%");
        $sliderHandler.css("left", percent + "%");
        $sliderValue.text(percent);
        e.preventDefault();
      });

  }
};
</script>

