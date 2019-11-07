/* 路由控制器 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// const sharePage=()=>import('../pages/sharePage/sharePage.vue')   //路由懒加载
import depositShare from '../pages/depositShare/depositShare.vue'

Vue.use(VueRouter)

export default new VueRouter({
  router: [

    {
      path: '/',
      redirect: '/depositShare'
    },
    {
      path: '/depositShare',
      component: depositShare
    }
  ]
})