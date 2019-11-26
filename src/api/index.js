/* 封装ajax函数 */
import ajax from './ajax'

// const baseUrl = '/sit_' //sit环境
// const baseUrl = '/uat_' //uat环境
// const baseUrl = '/' // 生产环境(uata)
const baseUrl = '/api/sit_' //开发环境(设置代理)
export const moneyManageList = (data) => ajax(baseUrl + 'safe/finProductInfoQry.do', data, 'POST')
export const depositManageList = (data) => ajax(baseUrl + 'lsDeposit/depositProdInfo.do', data, 'POST')