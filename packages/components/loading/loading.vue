<template>
  <div class="mt-loading">
    <mt-spinner :type="type" :color="color" :size="size"></mt-spinner>
  </div>
</template>
<script>
export default {
  props: {
    size: Number,
    color: String,
    type: String,
  },
};
</script>
<style lang="less" scoped>
.mt-loading{

}
</style>

