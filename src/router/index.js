/* 路由控制器 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// const sharePage=()=>import('../pages/sharePage/sharePage.vue')   //路由懒加载
import depositShare from '../pages/depositShare/depositShare.vue'
import moneyManage from '../pages/moneyManage/moneyManage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/',
      redirect: '/moneyManage'
    },
    {
      path: '/depositShare',
      component: depositShare
    },
    {
      path: '/moneyManage',
      component: moneyManage
    }
  ]
})