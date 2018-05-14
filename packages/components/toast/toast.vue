<template>
  <transition name="fade">
    <div :class="className" v-show="visible">
      <div class="mtui-mask_transparent"></div>
      <div class="mtui-toast">
          <i class="mtui-icon_toast mtui-icon-success-no-circle"></i>
          <p class="mtui-toast__content">{{content}}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      time: 2 * 1000,
      className: '',
      content: '',
      visible: false,
    };
  },
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
