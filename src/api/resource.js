/**
 * 返回服务器路径
 * @returns {str}
 */
export default function returnUrl() {
  //开发环境
  // return 'http://emalltest.lsccb.com:18089/';
  //sit环境
  // return 'http://emalltest.lsccb.com:18089/';
  //uat环境
  // return 'http://emalltest.lsccb.com:18089/';
  //内网sit环境
  return 'http://emalltest.lsccb.com:18089/';
  //内网uat环境
  //   return 'http://emalltest.lsccb.com:18089/';
  //内网uatA环境
  // return 'http://emalltest.lsccb.com:18089/';
  //内网灾备
  // return 'http://emalltest.lsccb.com:18089/';
  // 生产环境
  // return 'http://emalltest.lsccb.com:18089/';
}