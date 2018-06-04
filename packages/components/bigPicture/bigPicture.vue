<template>
<transition name="fade">
  <div class="mtui-bigPicturePopup" v-show="showBox"  @click="hideBigImg">
    <div class="mtui-mask"></div>
    <transition name="bottomScale"
    @before-enter="beforeEnter"
    @after-leave="afterLeave">
      <img :src="imgSrc" class="mtui-bigPicture" alt=""
      v-show="currentValue"
      >
    </transition>
  </div>
</transition>
</template>
<script>
export default {
  name: 'mt-big-picture',
  props: {
    imgSrc: {
      type: String,
    },
    value: Boolean,
    longTouchTime: {
      type: Number,
      default: 800,
    },
  },
  data() {
    return {
      currentValue: this.value,
      showBox: false,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    hideBigImg(event) {
      this.currentValue = false;
      this.$emit('click', event);
    },
    beforeEnter() {
      this.showBox = true;
    },
    afterLeave() {
      this.showBox = false;
    },
  },
};
</script>
