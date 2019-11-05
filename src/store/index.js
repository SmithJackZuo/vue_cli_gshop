import Vue from 'vue'
import Vuex from 'vuex'
import {
  reqCategory,
  activeAcctCheck
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
    }
  }
})