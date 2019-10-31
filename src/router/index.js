/* 路由控制器 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import SharePage from '../pages/sharePage/sharePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  router: [

    {
      path: '/',
      redirect: '/sharePage'
    },
    {
      path: '/sharePage',
      component: SharePage
    }
  ]
})