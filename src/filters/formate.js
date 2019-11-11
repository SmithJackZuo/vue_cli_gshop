export function fmtMoney(v, c, d, t) {
  let dataV = v;
  let dataC = c;
  let dataD = d;
  let dataT = t;
  // 防止JSON传过来的类型为number
  if (typeof(dataV) === 'number') {
    dataV = dataV.toString();
  }
  dataV = dataV.replace(/,/g, '');
  dataV *= 1;
  let p = dataV < 0 ? '-' : '';
  dataC = dataC || 2;
  //        v = v.toFixed(dataC);
  dataV = Math.round(dataV * 100000) / 100000;
  dataC = Math.abs(dataC) + 1 ? dataC : 0;
  dataD = dataD || '.';
  dataT = dataT || ',';
  let m = (/(\d+)(?:(\.\d+)|)/.exec(String(dataV)));
  let x = m[1].length > 3 ? m[1].length % 3 : 0;
  return p + (x ? m[1].substr(0, x) + dataT : '') +
    m[1].substr(x).replace(/(\d{3})(?=\d)/g, '$1' + dataT) +
    (dataC ? dataD + (Number(m[2]) || 0).toFixed(dataC).substr(2) : '');
}
export function depoDateFormat(val) {
  switch (val) {
    case 'D':
      return '天';
    case 'M':
      return '个月';
    case 'Y':
      return '年';
    default:
      return '';
  }
}

/**
 * 格式化阿拉伯整数为大写
 * @param n {String} 需整数
 */
export function depoNum2Chinese(n) {
  var integral, result, digits, radices, bigRadices, zeroCount, i, p, d, quotient, modulus;
  integral = String(n);
  digits = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
  radices = new Array('', '十', '百', '千');
  bigRadices = new Array('', '万', '亿');
  result = '';
  if (Number(integral) > 0) { //整数不为零
    zeroCount = 0;
    for (i = 0; i < integral.length; i++) {
      p = integral.length - i - 1;
      d = integral.substr(i, 1);
      quotient = p / 4;
      modulus = p % 4;
      if (d === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          result += digits[0];
        }
        zeroCount = 0;
        result += digits[Number(d)] + radices[modulus];
      }
      if (modulus === 0 && zeroCount < 4) {
        result += bigRadices[quotient];
      }
    }
  }
  if (integral === '0') {
    result = '零';
  }
  return result;
}

/**
 * 不足2位小数，保留2位，超过2位,小于4位不做处理，大于4位展示4位，不做四舍五入
 */
export function rateFloat(value) {
  var val = value;
  var s = [];
  if (typeof(value) !== 'string') {
    val = Number(value.toString().replace(/^(.*\..{4}).*$/, '$1')).toString();
  } else {
    val = Number(value.replace(/^(.*\..{4}).*$/, '$1')).toString();
  }
  s = val.split('.');
  if (s.length === 1) {
    val = val.toString() + '.00';
    return val;
  }
  if (s.length > 1) {
    if (s[1].length < 2) {
      val = val.toString() + '0';
    }
    return val.toString();
  }
}
export function fmtMoneyUnit(num) {
  let data = '';
  if (num) {
    data = num;
  } else {
    data = 0;
  }
  // let data = num ? num : 0;
  let retNum = parseFloat(data);
  if (retNum >= 10000) {
    if (retNum % 10000 === 0) { // 能整除
      retNum = parseFloat(retNum / 10000) + '万';
    } else {
      retNum = fmtMoney(retNum, 0, '.', ',');
    }
  } else {
    retNum = fmtMoney(retNum, 0, '.', ',');
  }
  return retNum;
}