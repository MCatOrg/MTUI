<template>
  <div class="mtui-cell-g">
    <div class="mtui-cells__title">{{title}}</div>
    <div class="mtui-cells">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mt-cell-g',
  props: {
    title: [String, Number],
  },
};
</script>
<style lang="less">
.mtui-cell-g{
  &+.mtui-cell-g,&+.mtui-cell{
    margin-top: 0.2rem;
  }
}
</style>
