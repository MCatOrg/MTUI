<template>
  <div>
    <h1>全局自定义指令</h1>
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

