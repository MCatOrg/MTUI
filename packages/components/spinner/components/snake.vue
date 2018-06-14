<template>
  <div class="mint-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'width':`${0.56*spinnerSize}rem`,
    'height':`${0.56*spinnerSize}rem`}">
  </div>
</template>

<script>
import common from './common';

export default {
  name: 'snake',
  mixins: [common],
};
</script>

<style lang="css">
  .mint-spinner-snake {
    animation: mt-spinner-rotate 0.8s infinite linear;
    border: 0.04rem solid transparent;
    border-radius: 50%;
  }

  @keyframes mt-spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
