<template>
  <div id="loading">
    <mt-button @click="showLoading" type="primary">默认Loading</mt-button>
    <mt-button @click="showRainbowLoading" type="primary">（rainbow）Loading</mt-button>
    <mt-button @click="showPeeekLoading" type="primary">（peeek）Loading</mt-button>
    <mt-button @click="showSnakeLoading" type="primary">（snake）Loading</mt-button>
    <mt-button @click="toast" type="primary">toast</mt-button>
    <!-- <button @click="showLoading">默认Loading</button>
    <button @click="showRainbowLoading">（rainbow）Loading</button>
    <button @click="showPeeekLoading">（peeek）Loading</button>
    <button @click="showSnakeLoading">（snake）Loading</button>
    <button @click="toast">toast</button> -->
  </div>
</template>
<script>
export default {
  methods: {
    showLoading() {
      // spinnerType : dot
      this.$loading.open('加载中...');
      setTimeout(() => {
        this.$loading.close();
      }, 3000);
    },
    showRainbowLoading() {
      // spinnerType : rainbow
      this.$loading.open({
        text: '加载中...',
        spinnerType: 'rainbow',
        showModal: true,
        fontColor: '#fff',
      });
      setTimeout(() => {
        this.$loading.close();
      }, 3000);
    },
    showPeeekLoading() {
      // spinnerType : peeek
      this.$loading.open({
        spinnerType: 'peeek',
        color: 'yellow',
      });
      setTimeout(() => {
        this.$loading.close();
      }, 3000);
    },
    showSnakeLoading() {
      // spinnerType : snake
      this.$loading.open({
        text: '加载中...',
        spinnerType: 'snake',
        showModal: true,
        fontColor: '#fff',
        color: '#fff',
      });
      setTimeout(() => {
        this.$loading.close();
      }, 3000);
    },
    toast() {
      this.$Toast('操作失败咯操作失败咯');
    },
  },
};
</script>
<style lang="less" scoped>
#loading{
  display: flex;
  flex-direction: column;
}
#loading button{
  margin-bottom: 0.3rem;
}
</style>
