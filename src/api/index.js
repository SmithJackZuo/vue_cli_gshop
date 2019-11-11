/* 封装ajax函数 */
import ajax from './ajax'
// activAcctCheck
// const BASE_URL = '/api'
const baseUrl = '/api/ares-mobile-gateway/'
  // export const reqCategory = () => ajax('/api/index_category')
  // export const activeAcctCheck = (data) => ajax(baseUrl + '/activAcctCheck.do', data, 'POST')
  // export const menuList = (data) => ajax(baseUrl + 'common/menuListQry.do', data, 'POST')
export const moneyManageList = (data) => ajax(baseUrl + 'safe/finProductInfoQry.do', data, 'POST')
export const depositManageList = (data) => ajax(baseUrl + 'lsDeposit/depositProdInfo.do', data, 'POST')