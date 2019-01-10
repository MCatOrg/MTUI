<template>
  <div class="mt-tab-container-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mt-tab-container-item',
  props: ['id'],
};
</script>

<style lang="less">
.mt-tab-container-item{
  width: 100%;
  flex-shrink: 0;
}
</style>
