<template>
  <div id="index">
    <button @click="showT">显示</button>
    <button @click="showT">Toast</button>
    <router-link to="/button" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Button</div>
            <div class="mtui-cell__ft">按钮案例</div>
    </router-link>
    <router-link to="/radio" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">radio</div>
            <div class="mtui-cell__ft">单选框案例</div>
    </router-link>
    <router-link to="/checkbox" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">checkbox</div>
            <div class="mtui-cell__ft">复选框案例</div>
    </router-link>
    <router-link to="/cell" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">cell</div>
            <div class="mtui-cell__ft">列表</div>
    </router-link>
    <router-link to="/input" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">input</div>
            <div class="mtui-cell__ft">表单</div>
    </router-link>
    <router-link to="/accordion" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">accortion</div>
            <div class="mtui-cell__ft">折叠面板</div>
    </router-link>
    <router-link to="/slider" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">slider</div>
            <div class="mtui-cell__ft">滑动条</div>
    </router-link>
    <router-link to="/picker" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">picker</div>
            <div class="mtui-cell__ft">选择器</div>
    </router-link>
    <router-link to="/steps" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">steps</div>
            <div class="mtui-cell__ft">步骤</div>
    </router-link>
  </div>
</template>
<script>

export default {
  methods: {
    showT() {
      this.$Toast('测试用例3', {
        time: 2000,
        className: 'afei',
        callback() {},
      });
    },
  },
};
</script>
<style>
.mtui-cell__bd {
  text-align: left;
}
</style>
