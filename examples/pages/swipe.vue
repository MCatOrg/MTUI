<template>
  <div id="swipe">
    <div class="swipeBox">
      <mt-swipe :auto="3000">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<style lang="less" scoped>
.swipeBox{
  width: 7rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 0.1rem;
  overflow: hidden;
}
.slide1{
  background-color: red;
  color: #fff;
  font-size: 0.8rem;
}
.slide2{
  background-color: yellow;
  color: #fff;
  font-size: 0.8rem;
}
.slide3{
  background-color: burlywood;
  color: #fff;
  font-size: 0.8rem;
}
</style>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>
