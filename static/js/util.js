function getTimeNoFormate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  return String(year) + String(month) + String(strDate);
}
//节流 第一次会顺利执行，之后的点击会到期（gapTime）再执行
function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500;
  }
  let _lastTime = null;
  return function () {
    let _nowTime = Number(new Date());
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments);
      _lastTime = _nowTime;
    }
  };
}

function getPixelRatio(context) {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
}

/**
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
 * @param idle   {number}    空闲时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 * des 类似电梯等人，关门就走，门没关来人就开门重新等，
 */
function debounce(action, idle = 200) {
  let last;
  return function () {
    let ctx = this,
      args = arguments;
    clearTimeout(last);
    last = setTimeout(function () {
      action.apply(ctx, args);
    }, idle);
  };
}

function px2rem(value) {
  return value / ((screen.availWidth * 100) / 375);
}

function fmtRate(val) {
  if (!val) {
    return;
  }
  let arr = val.split('~');
  let re = `${arr[0]}%~${arr[1]}%`;
  if (arr[0] === arr[1]) {
    re = arr[0] + '%';
  }
  return re;
}
module.exports = {
  px2rem,
  throttle,
  debounce,
  getTimeNoFormate,
  getPixelRatio,
  fmtRate
};
