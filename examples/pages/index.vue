<template>
  <div id="index">
    <button @click="showT">显示1</button>
    <button @click="showT2">显示2</button>
  </div>
</template>
<script>
export default {
  methods: {
    showT() {
      this.$Toast('测试用例3', {
        time: 2000,
        className: 'afei',
        callback() {
          console.log('sdfsdaf');
        },
      });
    },
    showT2() {
      const T = this.$Toast('测试');
      console.log(T);
    },
  },
};
</script>

