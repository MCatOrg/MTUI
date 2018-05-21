<template>
  <div id="loading">
    <button @click="showLoading">默认Loading</button>
    <button @click="showRainbowLoading">（rainbow）Loading</button>
    <button @click="showPeeekLoading">（peeek）Loading</button>
    <button @click="showSnakeLoading">（snake）Loading</button>
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
