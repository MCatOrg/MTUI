<template>
  <div class="spinner" :style="{'width':`${1*spinnerSize}rem`,
     'height':`${1.2*spinnerSize}rem`,'font-size': `${0.2*spinnerSize}rem`}">
    <div :class="[`rect${i}`]" v-for="i in sideCount" :key="i"
    :style="{backgroundColor:spinnerColor,'width':`${0.12*spinnerSize}rem`}"></div>
  </div>
</template>
<script>
import common from './common';

export default {
  mixins: [common],
  data() {
    return {
      sideCount: 5,
    };
  },
};
</script>
<style lang="less" scoped>
.spinner {
  text-align: center;
}

.spinner > div {
  height: 100%;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
  margin-left: 0.05rem;
}
.spinner > div:first-of-type{
  margin-left:0;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>

