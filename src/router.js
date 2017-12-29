import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/', //地图
    name: 'home',
    component: function (resolve) {
      require(['./example/fragment/home.vue'], resolve)
    }
  },{
    path: '/button', //Button
    name: 'button',
    component: function (resolve) {
      require(['./example/fragment/button.vue'], resolve)
    }
  },{
    path: '/list', //List
    name: 'list',
    component: function (resolve) {
      require(['./example/fragment/list.vue'], resolve)
    }
  }]
})

export default router
