/* 入口JS函数 */

import Vue from 'vue'
import App from './app.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import loading from '../static/img/loading.gif'

Vue.use(VueLazyLoad, { loading })
let main = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
Vue.use({ main })