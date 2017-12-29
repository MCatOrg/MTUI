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
    path: '/button', //按钮
    name: 'button',
    component: function (resolve) {
      require(['./example/fragment/button.vue'], resolve)
    }
  },{
    path: '/Badge', //徽章
    name: 'Badge',
    component: function (resolve) {
      require(['./example/fragment/Badge.vue'], resolve)
    }
  }]
})

export default router
