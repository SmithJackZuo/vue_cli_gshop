/* 封装ajax函数 */
import ajax from './ajax'
// activAcctCheck
// const BASE_URL = '/api'
const baseUrl = '/api/ares-mobile-gateway/common'
export const reqCategory = () => ajax('/api/index_category')
export const activeAcctCheck = (data) => ajax(baseUrl + '/activAcctCheck.do', data, 'POST')
export const menuList = (data) => ajax(baseUrl + '/menuListQry.do', data, 'POST')