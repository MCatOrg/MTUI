<template>
  <div id="app">
    <header>
      <img src="../images/logo.png">
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <div class="group">
        <div class="mtui-cells__title">表单组件</div>
        <div class="mtui-cells">
          <router-link to="/button" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Button</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/list" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">List</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/switch" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Switch</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/input" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Input</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/accordion" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Accordion</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/slider" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Slider</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/uploader" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Uploader</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
        </div>
      </div>
      <div class="group">
        <div class="mtui-cells__title">基本组件</div>
        <div class="mtui-cells">
          <router-link to="/Badge" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Badge(徽章)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/grid" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Grid(九宫格)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/step" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">step(步骤)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/popup" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">popup(弹窗)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
        </div>
      </div>
      <div class="group">
        <div class="mtui-cells__title">操作反馈</div>
        <div class="mtui-cells">
          <router-link to="/picker" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">picker(多列选择器)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/stepper" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">stepper(数量加减器)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/actionSheet" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">ActionSheet</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/dialog" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Dialog</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/toast" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Toast</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/loading" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Loading</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
        </div>
      </div>
      <div class="group">
        <div class="mtui-cells__title">导航相关</div>
        <div class="mtui-cells">
          <router-link to="/tabs" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Tabs(工具栏)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/searchbar" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">SearchBar(搜索栏)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
          <router-link to="/popover" class="mtui-cell mtui-cell__link">
            <div class="mtui-cell__bd">Popover(弹出菜单)</div>
            <div class="mtui-cell__ft"></div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello MTUI"
    };
  }
};
</script>
<style lang="less">
body {
  background-color: #f5f5f5;
}
</style>


<style lang="less" scoped>
@import "../../styles/base/fn";
header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    line-height: 60px;
  }
}
main {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  .group-body {
    font-size: 0.26rem;
  }
  li {
    line-height: 0.6rem;
    list-style: none;
    padding-left: 0.4rem;
  }
}
</style>
