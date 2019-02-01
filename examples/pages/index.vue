<template>
  <div id="index">
    <header>
      <img src="@/assets/logo.png">
    </header>
    <main>
      <div class="group">
        <template v-for="(route, index) in routerList">
          <mt-cell-g v-if="!route.meta || !route.meta.hide" :title="route.meta && route.meta.title || '未知分组'" :key="index">
            <mt-cell
              v-for="(r,i) in route.children" :key="i"
              :title="r.meta && r.meta.title || '未定义名称'"
              :tips="r.name"
              value="查看示例"
              :to="r.path"/>
          </mt-cell-g>
        </template>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello MTUI',
      routerList: this.$router.options.routes,
    };
  },
};
</script>

<style lang="less" scoped>
header{text-align: center;}
</style>
