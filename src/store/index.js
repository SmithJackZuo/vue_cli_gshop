import Vue from 'vue'
import Vuex from 'vuex'
import {
  moneyManageList,
  depositManageList
} from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moneyList: '',
    depositList: ''
  },
  mutations: {
    moneyListMu(state, data) {
      state.moneyList = data.LIST
    },
    depositListMu(state, data) {
      console.log(data)
      state.depositList = data
    }
  },
  actions: {
    async moneyListQry({ commit }, param) {
      const result = await moneyManageList(param)
      if (result.body.STATUS === '1') {
        commit('moneyListMu', result.body)
      }
    },
    async depositListQry({ commit }, param) {
      console.log(param)
      const result = await depositManageList({
        DEPOSIT_ID: param.id,
        DEPOSIT_TYPE: param.type
      })
      if (result.body.STATUS === '1') {
        commit('depositListMu', result.body)
      }
    }
  }
})