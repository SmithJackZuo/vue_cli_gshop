/* 封装ajax函数 */
import ajax from './ajax'
// activAcctCheck
// const BASE_URL = '/api'
export const reqCategory = () => ajax('/api/index_category')
export const activeAcctCheck = (data) => ajax('/api/activAcctCheck', data, 'POST')