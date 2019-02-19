<template>
  <div id="peekBox">
    <div class="peeek-loader">
      <div class="side" :style="{backgroundColor:spinnerColor}"
      v-for="i in sideCount" :key="i"></div>
    </div>
  </div>
</template>
<script>
import common from './common';

export default {
  mixins: [common],
  data() {
    return {
      sideCount: 8,
    };
  },
};
</script>

<style lang="less">
@import "../../../styles/base/mixin/for.less";
@side-length: 0.44rem;
@side-width : 0.12rem;
@loader-size : @side-length * (1 + sqrt(2));
@anim-duration : 1.5s;
@anim-offset : 0;
#peekBox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0.1rem;
  z-index: 19;
}
.peeek-loader {
  position: absolute;
  left: 50%;
  top: 50%;
  width: @loader-size;
  height: @loader-size;
  margin-left: (@loader-size / -2);
  margin-top: (@loader-size / -2);
  border-radius: 100%;
  animation-name: loader;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 4s;
  .side {
    display: block;
    width: @side-width;
    height: @side-length;
    margin: 2px;
    position: absolute;
    border-radius: 50%;
    animation-duration: @anim-duration;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    &:nth-child(1),
    &:nth-child(5) {
      transform: rotate(0deg);
      animation-name: rotate0;
    }
    &:nth-child(3),
    &:nth-child(7) {
      transform: rotate(90deg);
      animation-name: rotate90;
    }
    &:nth-child(2),
    &:nth-child(6) {
      transform: rotate(45deg);
      animation-name: rotate45;
    }
    &:nth-child(4),
    &:nth-child(8) {
      transform: rotate(135deg);
      animation-name: rotate135;
    }
  }

  @counts: 0, 1, 2, 3, 4, 5, 6, 7;

  .for(8);
  .-each(@i) {
    .side:nth-child(@{i}) {
      @side-offset: (@side-width / 2) * (@i - 1);
      @dotval :(@loader-size / 2);
      top: sin(45deg * (@i - 1)) * @dotval + @dotval;
      left: cos(45deg * (@i - 1)) * @dotval + @dotval;
      margin-left: (@side-width / -2);
      margin-top: (@side-length / -2);
      animation-delay: @anim-offset * (@i - 1);
    }
  }

  // side keyframes
  @keyframes rotate0 {
    0% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes rotate90 {
    0% {
      transform: rotate(90deg);
    }
    60% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
  @keyframes rotate45 {
    0% {
      transform: rotate(45deg);
    }
    60% {
      transform: rotate(225deg);
    }
    100% {
      transform: rotate(225deg);
    }
  }
  @keyframes rotate135 {
    0% {
      transform: rotate(135deg);
    }
    60% {
      transform: rotate(315deg);
    }
    100% {
      transform: rotate(315deg);
    }
  }
  // loader keyframe
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
