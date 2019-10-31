/* ajax函数 */
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function(resolve, reject) {
    let promise
    if (type === 'GET') {
      let dirUrl = ''
      Object.keys(data).forEach(key => {
        dirUrl += key + '=' + 'data[key]' + '&'
      })
      if (dirUrl !== '') {
        dirUrl = dirUrl.substring(0, dirUrl.lastIndexOf('&'))
        url = url + '?' + dirUrl
      }
      promise = axios.get(url)
    } else if (type === 'POST') {
      promise = axios.post(url, data)
    } else {
      console.log('不支持其他请求方式')
    }
    promise.then(response => { resolve(response.data) }).catch(error => { reject(error) })
  })
}