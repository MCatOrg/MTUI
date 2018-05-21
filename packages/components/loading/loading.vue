<template>
  <transition name="fade" v-on:after-leave="afterLeave">
    <div class="mt-loading" v-show="visible"
    :style="{'background-color':showModal?'rgba(0,0,0,0.3)':''}">
      <mt-spinner :type="spinnerType" :color="color" :size="size"></mt-spinner>
      <span class="mt-loading-span" :style="{color:fontColor}">{{text}}</span>
    </div>
  </transition>
</template>
<script>
import Spinner from '../spinner';

export default {
  name: 'mt-loading',
  data() {
    return {
      visible: false, // 控制显示隐藏
      text: '', // 记载的文本显示
      fontColor: 'rgb(105, 195, 236)', // 默认文本颜色
      showModal: false, // 是否显示半透明黑色记载框
      spinnerType: 'dot',
      color: '',
      size: 1,
    };
  },
  components: {
    Spinner,
  },
  methods: {
    afterLeave() {
      this.text = '';
      this.fontColor = 'rgb(105, 195, 236)';
      this.showModal = false;
      this.spinnerType = 'dot';
      this.color = '';
      this.size = 1;
    },
  },
};
</script>
<style lang="less" scoped>
.mt-loading{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  margin: auto;
  border-radius: 0.1rem;
  z-index: 4000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.mt-loading::before{
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3999;
}
.mt-loading-span{
  text-align: center;
  display: block;
  width: 100%;
  font-size: 0.3rem;
  margin-top: 0.3rem;
}
</style>

