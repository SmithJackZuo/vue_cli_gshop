/* 封装ajax函数 */
import ajax from './ajax'

const BASE_URL = 'http://localhost:4000'
export const reqCategory = () => { ajax(BASE_URL + '/api/index_category') }