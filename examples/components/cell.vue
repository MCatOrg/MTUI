<template>
  <div>
    <mt-cell title="测试" :cells="test"></mt-cell>

    <mt-cell title="测试"
    :cells="[{title: '我是主题文字',rightText: '测试一',tips: '跳转github'}]"
    to="//github.com"></mt-cell>

    <mt-cell title="测试"
    :cells="[{title: '我是主题文字',rightText: '测试一'}]" to="/radio">
    <i slot="icon" style="display: block; width: 10px; height: 10px; background: red;"></i>
    </mt-cell>
  </div>
</template>

<script>

export default {

  created() {
    this.test = [
      {
        title: '我是主题文字',
      }, {
        title: '我是主题文字',
        rightText: '测试二',
        tips: '我是备注',
      }, {
        title: '我是主题文字',
        leftText: '我是段落描述',
        rightText: '测试一',
        tips: '我是备注',
      }, {
        leftText: '我是段落描述',
        rightText: '测试一',
        tips: '我是备注',
      },
    ];
  },
};
</script>
