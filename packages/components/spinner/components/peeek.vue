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

<style lang="less" scoped>
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
  z-index: 4000;
}
.peeek-loader {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 48.2842712474619px;
  height: 48.2842712474619px;
  margin-left: -24.14213562373095px;
  margin-top: -24.14213562373095px;
  border-radius: 100%;
  animation-name: loader;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 4s;
}
.peeek-loader .side {
  display: block;
  width: 6px;
  height: 20px;
  margin: 2px;
  position: absolute;
  border-radius: 50%;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
.peeek-loader .side:nth-child(1),
.peeek-loader .side:nth-child(5) {
  transform: rotate(0deg);
  animation-name: rotate0;
}
.peeek-loader .side:nth-child(3),
.peeek-loader .side:nth-child(7) {
  transform: rotate(90deg);
  animation-name: rotate90;
}
.peeek-loader .side:nth-child(2),
.peeek-loader .side:nth-child(6) {
  transform: rotate(45deg);
  animation-name: rotate45;
}
.peeek-loader .side:nth-child(4),
.peeek-loader .side:nth-child(8) {
  transform: rotate(135deg);
  animation-name: rotate135;
}
.peeek-loader .side:nth-child(1) {
  top: 24.14213562373095px;
  left: 48.2842712474619px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
.peeek-loader .side:nth-child(2) {
  top: 41.21320343109277px;
  left: 41.21320343109277px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
.peeek-loader .side:nth-child(3) {
  top: 48.2842712474619px;
  left: 24.14213562373095px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
.peeek-loader .side:nth-child(4) {
  top: 41.21320343109277px;
  left: 7.07106781636913px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
.peeek-loader .side:nth-child(5) {
  top: 24.14213562373095px;
  left: 0px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
.peeek-loader .side:nth-child(6) {
  top: 7.07106781636913px;
  left: 7.07106781636913px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
.peeek-loader .side:nth-child(7) {
  top: 0px;
  left: 24.14213562373095px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
.peeek-loader .side:nth-child(8) {
  top: 7.07106781636913px;
  left: 41.21320343109277px;
  margin-left: -3px;
  margin-top: -10px;
  animation-delay: 0;
}
@-moz-keyframes rotate0 {
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
@-webkit-keyframes rotate0 {
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
@-o-keyframes rotate0 {
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
@-moz-keyframes rotate90 {
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
@-webkit-keyframes rotate90 {
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
@-o-keyframes rotate90 {
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
@-moz-keyframes rotate45 {
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
@-webkit-keyframes rotate45 {
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
@-o-keyframes rotate45 {
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
@-moz-keyframes rotate135 {
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
@-webkit-keyframes rotate135 {
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
@-o-keyframes rotate135 {
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
@-moz-keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
