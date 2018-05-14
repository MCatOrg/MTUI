<template>
  <div id="index">
    <button @click="showT">显示</button>
  </div>
</template>
<script>
export default {
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

