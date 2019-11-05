/* 入口JS函数 */

import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import loading from '../static/img/loading.gif'

// import './mock/mockServer'   //是否使用mock数据

Vue.use(VueLazyLoad, { loading })
let main = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
Vue.use({ main })