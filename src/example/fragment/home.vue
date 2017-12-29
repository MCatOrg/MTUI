<template>
  <div id="app">
    <header>
      <img src="../images/logo.png">
      <h1>{{ msg }}</h1>
    </header>
    <main>
      <ul>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
        <li>
          <router-link to="/list">List</router-link>
        </li>
        <li>
          <router-link to="/icon">图标</router-link>
          <router-link to="/icon">图标s</router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello MTUI'
    }
  }
}
</script>

<style lang="less">
header{display: flex; align-items: center; justify-content: center; flex-direction: column;
  h1{line-height: 60px;}
}
main{padding-left: 30px; padding-right: 30px;
  li{line-height: 40px; list-style: none;}
}
</style>
