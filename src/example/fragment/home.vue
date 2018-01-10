<template>
  <div id="app">
    <header>
      <img src="../images/logo.png">
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <div class="group">
        <h3 class="group-header">表单组件</h3>
        <ul class="group-body">
          <li>
            <router-link to="/button">按钮</router-link>
          </li>
          <li>
            <router-link to="/list">List</router-link>
          </li>
          <li>
            <router-link to="/switch">switch</router-link>
          </li>
          <li>
          <router-link to="/input">Input</router-link>
          </li>
          <li>
          <router-link to="/accordion">Accordion</router-link>
          </li>
          <li>
          <router-link to="/slider">Slider</router-link>
          </li>
          <li>
          <router-link to="/uploader">Uploader</router-link>
          </li>
        </ul>
      </div>
      <div class="group">
        <h3 class="group-header">基本组件</h3>
        <ul class="group-body">
          <li>
            <router-link to="/Badge">Badge(徽章)</router-link>
          </li>
          <li>
            <router-link to="/grid">Grid(九宫格)</router-link>
          </li>
          <li>
            <router-link to="/step">step(步骤)</router-link>
          </li>
        </ul>
      </div>
      <div class="group">
        <h3 class="group-header">操作反馈</h3>
        <ul class="group-body">
          <li>
            <router-link to="/picker">picker(多列选择器)</router-link>
          </li>
          <li>
            <router-link to="/stepper">stepper(数量加减器)</router-link>
          </li>
          <li>
            <router-link to="/actionSheet">ActionSheet</router-link>
          </li>
          <li>
            <router-link to="/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/toast">Toast</router-link>
          </li>
          <li>
            <router-link to="/loading">Loading</router-link>
          </li>
        </ul>
      </div>
      <div class="group">
        <h3 class="group-header">导航相关</h3>
        <ul class="group-body">
          <li>
            <router-link to="/tabs">Tabs(工具栏)<i class="mtui-icon-search"></i></router-link>
          </li>
          <li>
            <router-link to="/searchbar">SearchBar(搜索栏)<i class="mtui-icon-search"></i></router-link>
          </li>
        </ul>
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
body{background-color: #F5F5F5;}
</style>


<style lang="less" scoped>
@import '../../styles/base/fn';
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
  padding-left: .3rem;
  padding-right: .3rem;
  .group-body{font-size: .26rem;}
  li {
    line-height: .6rem;
    list-style: none;
    padding-left: .4rem;
  }
}
</style>
