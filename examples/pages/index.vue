<template>
  <div id="index">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <div class="group">
          <mt-cell-g title="表单组件">
            <mt-cell title="accordion" tips="折叠列表" value="查看示例" to="/accordion"></mt-cell>
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
            <!-- <mt-cell title="toast" tips="弹出提示" value="查看示例" to="/toast"></mt-cell> -->
            <mt-cell title="touchRipple" tips="触摸涟漪" value="查看示例" to="/touchRipple"></mt-cell>
            <mt-cell title="uploader" tips="图片上传" value="查看示例" to="/uploader"></mt-cell>
            <mt-cell title="steps" tips="步骤" value="查看示例" to="/steps"></mt-cell>
            <mt-cell title="picker" tips="选择器" value="查看示例" to="/picker"></mt-cell>
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
    };
  },
};
</script>

