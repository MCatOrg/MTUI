<template>
  <div id="index">
    <header id="testHead">
      <h1 id="testEm">{{ msg }}</h1>
    </header>
    <header>
      <h1 id="testRem">{{ msg }}</h1>
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
          </mt-cell-g>
      </div>
      <div class="testScoll">
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
        <h1>11111</h1>
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
    console.log(document.documentElement.style.fontSize)
    var ss = window.getComputedStyle(document.getElementById('testHead'))
    console.log(ss)
    var testRem = document.getElementById('testRem').getBoundingClientRect().width;
    var testEm = document.getElementById('testEm').getBoundingClientRect().width;
    console.log(testRem,testEm)
  },
};
</script>

<style lang="less" scoped>
#testHead{
  font-size: 24px;
}
#testRem,#testEm{
  width: 1em;
  height: 1rem;
  line-height: 1rem;
  background-color: red;
  color: #fff;
  font-size: 24px;
}
#testRem{
  width: 1rem;
  background-color: blue;
}
.testScoll{
  height: 200px;
  overflow: scroll;
  border:1px solid #e5e5e5;
  margin-top: 10px;
  -webkit-overflow-scrolling: touch;
}
</style>
