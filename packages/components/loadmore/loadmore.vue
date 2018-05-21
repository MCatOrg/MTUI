<template>
  <div class="mt-loadmore">
    <div class="mt-loadmore-content">
      <div class="mt-loadmore-top">
        <span>↓</span>
        <mt-spinner type="dot" :size="1"></mt-spinner>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less">
.mt-loadmore-content{
  width: 7.5rem;
  border-top: 0.01rem solid #e5e5e5;
  .mt-loadmore-top{
    width: 7.5rem;
    height: 0.88rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
<script>
import Spinner from '../spinner';

export default {
  name: 'mt-loadmore',
  components: {
    Spinner,
  },
  mounted() {
    console.log(this.$el);
  },
};
</script>
