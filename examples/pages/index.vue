<template>
  <div id="index">
    <button @click="showT">显示</button>
    <mtui-button type="default" size="small">12345</mtui-button>
  </div>
</template>
<script>
import MtuiButton from '../../packages/components/button/button';
export default {
  components: {
      MtuiButton,
  },
  methods: {
    showT() {
      this.$Toast('测试用例3', {
        time: 2000,
        className: 'afei',
        callback() {},
      });
    },
  },
};
</script>

