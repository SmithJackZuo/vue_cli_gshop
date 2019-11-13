/* 封装ajax函数 */
import ajax from './ajax'

const baseUrl = '/ares-mobile-gateway/' //生产环境
  // const baseUrl = '/api/ares-mobile-gateway/' //开发环境

export const moneyManageList = (data) => ajax(baseUrl + 'safe/finProductInfoQry.do', data, 'POST')
export const depositManageList = (data) => ajax(baseUrl + 'lsDeposit/depositProdInfo.do', data, 'POST')