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
  .group{margin-top: .3rem; font-size: .3rem;
    .group-header{background-color: #F5F5F5; margin-bottom: .1rem; line-height: .6rem; color: @mtuiColorPrimary}
  }
  li {
    line-height: .6rem;
    list-style: none;
    padding-left: .2rem;
  }
}
</style>
