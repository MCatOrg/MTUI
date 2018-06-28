<template>
  <div id="index">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <div class="group">
          <mt-cell-g title="表单组件">
            <mt-cell
            v-for="(router,index) in routerList" :key="index"
            :title="router.name"
            :tips="router.name"
            value="查看示例"
            :to="router.path"/>
            <!-- <mt-cell title="accordion" tips="折叠列表" value="查看示例" to="/accordion"></mt-cell>
            <mt-cell title="actionsheet" tips="上拉列表" value="查看示例" to="/actionsheet"></mt-cell>
            <mt-cell title="bigPicture" tips="查看大图" value="查看示例" to="/bigPicture"></mt-cell>
            <mt-cell title="button" tips="按钮" value="查看示例" to="/button"></mt-cell>
            <mt-cell title="cell" tips="列表" value="查看示例" to="/cell"></mt-cell>
            <mt-cell title="checklist" tips="多选列表" value="查看示例" to="/checklist"></mt-cell>
            <mt-cell title="input" tips="表单" value="查看示例" to="/input"></mt-cell>
            <mt-cell title="lazyload" tips="延迟加载" value="查看示例" to="/lazyload"></mt-cell>
            <mt-cell title="loading" tips="加载中" value="查看示例" to="/loading"></mt-cell>
            <mt-cell title="loadmore" tips="加载更多" value="查看示例" to="/loadmore"></mt-cell>
            <mt-cell title="messageBox" tips="对话框" value="查看示例" to="/messageBox"></mt-cell>
            <mt-cell title="radio" tips="单选列表" value="查看示例" to="/radio"></mt-cell>
            <mt-cell title="slider" tips="滑块" value="查看示例" to="/slider"></mt-cell>
            <mt-cell title="spinner" tips="加载动画" value="查看示例" to="/spinner"></mt-cell>
            <mt-cell title="swipe" tips="轮播图" value="查看示例" to="/swipe"></mt-cell>
            <mt-cell title="tabContainer" value="查看示例" to="/tabContainer"></mt-cell>
            <mt-cell title="touchRipple" tips="触摸涟漪" value="查看示例" to="/touchRipple"></mt-cell>
            <mt-cell title="uploader" tips="图片上传" value="查看示例" to="/uploader"></mt-cell>
            <mt-cell title="picker" tips="picker" value="查看示例" to="/picker"></mt-cell>
            <mt-cell title="steps" tips="步骤" value="查看示例" to="/steps"></mt-cell>
            <mt-cell title="search" tips="搜索" value="查看示例" to="/search"></mt-cell>
            <mt-cell title="tabs" tips="tabs" value="查看示例" to="/tabs"></mt-cell>
            <mt-cell title="directives" tips="全局自定义指令" value="查看示例" to="/directives"></mt-cell>
            <mt-cell title="stepper" tips="加减" value="查看示例" to="/stepper"></mt-cell>
            <mt-cell title="switch" tips="开关" value="查看示例" to="/switch"></mt-cell> -->
          </mt-cell-g>
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
  mounted() {
    console.log(this.$router);
  },
};
</script>

