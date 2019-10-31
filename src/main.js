/* 入口JS函数 */

import Vue from 'vue'
import App from './app.vue'
import router from './router'

let main = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
Vue.use({ main })