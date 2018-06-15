<template>
  <div id="cellPage">
    <mt-cell-g title="带详细信息跳转列表">
      <mt-cell title="标题" value="详情信息"></mt-cell>
    </mt-cell-g>
    <mt-cell-g title="带图标、说明、跳转的列表项">
      <mt-cell title="单项跳转列表" value="详情信息" icon="https://avatars0.githubusercontent.com/u/8280645?s=88&v=4" to="/cell"></mt-cell>
    </mt-cell-g>

    <mt-cell-g title="跳转,带加载状态">
      <mt-cell title="标题" value="卢大师" to="/cell"></mt-cell>
      <mt-cell title="标题" value="卢大师" to="/cell" :showLoading="showLoading"></mt-cell>
      <mt-cell title="标题" tips="带说明、跳转的列表项" to="/cell"></mt-cell>
    </mt-cell-g>

    <mt-cell-g title="带图标、Tips、跳转的列表项">
      <mt-cell title="标题" tips="详细信息" to="/cell" icon="https://avatars0.githubusercontent.com/u/8280645?s=88&v=4"></mt-cell>
    </mt-cell-g>

    <mt-cell-g>
      <mt-cell to="cell">
        <p slot="head">标题</p>
        <p slot="footer">卢大师11</p>
      </mt-cell>
    </mt-cell-g>
    <mt-cell to="cell" title="标题" tips="详细信息"></mt-cell>
    <mt-cell title="标题" tips="详细信息" :showArrow="true" @click="hello"></mt-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  },
  methods: {
    hello() {
      console.log('hello');
    },
  },
};
</script>
<style lang="less" scoped>
#cellPage{
}
</style>
