<template>
  <div id="swipe">
    <div class="swipeBox">
      <mt-swipe :auto="3000" @change="bannerChange" @before="beforeChange" @end="endEvent">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <transition-group name="fadeIn">
        <div class="swipeBox" v-for="i in 3" :key="i"
        :class="`slide${i}`" v-show="bannerIndex === i-1"
        style="position: absolute;top: 0;left: 0;">{{i}}</div>
      </transition-group>
  </div>
</template>
<style lang="less" scoped>
.fadeIn-enter-active ,.fade-leave-active {
  transition: opacity 0.5s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.swipeBox{
  width: 7rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 0.1rem;
  overflow: hidden;
  margin-top: 0.3rem;
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
      bannerIndex: 0,
    };
  },
  methods: {
    bannerChange(index) {
      console.log(index);
    },
    beforeChange(obj) {
      this.bannerIndex = obj.newIndex;
    },
    endEvent(index) {
      console.log('end', index);
    },
  },
};
</script>
