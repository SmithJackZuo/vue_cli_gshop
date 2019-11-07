function Paint() {}

Paint.prototype.origin = function (ctx, point) {
  ctx.beginPath();
  ctx.moveTo(point[0], point[1]);
};

Paint.prototype.line = function (ctx, point) {
  ctx.lineTo(point[0], point[1]);
};

Paint.prototype.finish = function (ctx) {
  ctx.stroke();
};

export default Paint;
