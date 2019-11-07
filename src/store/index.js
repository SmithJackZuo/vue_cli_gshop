import Vue from 'vue'
import Vuex from 'vuex'
import {
  reqCategory,
  activeAcctCheck,
  menuList,
  smsSendRgeisE
} from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop: []
  },
  mutations: {
    shopMu(state, data) {
      state.shop = data
    }
  },
  actions: {
    async getAddress({ commit }) {
      const result = await reqCategory()
      commit('shopMu', { address: result.data })
    },
    async acctCheck({ commit }, param) {
      console.log(param)
      const result = await activeAcctCheck(param)
      console.log(result)
    },
    async menuList({ commit }, param) {
      console.log(param)
      const result = await menuList(param)
      console.log(result)
    },
    async sms({ commit }, param) {
      console.log(param)
      const result = await smsSendRgeisE(param)
      console.log(result)
    }
  }
})