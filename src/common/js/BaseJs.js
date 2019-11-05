/**
 * 获取唯一ID/UUID方法
 */
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0
    let v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

/**
 * 判断用户使用的操作系统
 */
export function getSystem() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
    // alert('这是IOS');
    return 'I'
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
    // alert('这是Android');
    return 'A'
  } else {
    // alert('这是PC');
    return 'P'
  }
}

/**
 * 获取当前时间戳
 */
export function getTime() {
  return String(new Date().getTime())
}

/**
 * 获取客户ip地址
 */
export function getIP() {
  return String(window.location.host)
}

/**
 * 获取客户经纬度
 */
export function getLocation(location) {
  let back = new Promise((resolve, reject) => {

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     let latitude = position.coords.latitude
    //     let longitude = position.coords.longitude
    //     let data = {
    //       latitude: latitude,
    //       longitude: longitude
    //     }
    //     resolve(data)
    //   }, () => {
    //     // reject('')
    //   })
    // } else {
    //   reject('你的浏览器不支持当前地理位置信息获取')
    // }
  })

  // alert(JSON.stringify(back))
}

/**
 * 生成请求头数据
 */
export function getHeader() {
  let requestBody = {
    head: {
      'CLIENT_CRACK': 'N',
      'CLIENT_ID': 'H5.share',
      'CLIENT_INFO': 'H5.share',
      'CLIENT_IP': '192.168.1.52', //ip
      'CLIENT_OS': getSystem(),
      'CLIENT_TYPE': getSystem(),
      'CLIENT_VER_NO': 'H5.share',
      'H_CHNL_ID': '1001',
      'H_NONCE': getUUID(), //uuid
      'H_TIME': getTime(),
      'H_TIME_OFFSET': getTime(),
      'INCORP_NO': '000090',
      'X_LINE': '0.000000',
      'Y_LINE': '0.000000'
    }
  }
  return requestBody
}