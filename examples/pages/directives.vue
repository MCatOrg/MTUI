<template>
  <div>
    <h1>全局自定义指令</h1>
    <p>表单点击全选</p>
    <input type="text" v-allSelect v-model="val">
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: 'sdfsdf',
    };
  },
};
</script>

