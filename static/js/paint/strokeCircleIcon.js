function StrokeCircleIcon() {

  this.getLinePisition = function (raduis) {
    return Math.sqrt(Math.pow(raduis, 2) / 2);
  };
}

StrokeCircleIcon.prototype.stroke = function (eleId, lineWidth, raduis, strokeColor, shankLength = 0) {
  let circleXY = raduis + (lineWidth - 1),
    lineXY = this.getLinePisition(raduis) + circleXY,
    c = document.getElementById(eleId),
    ctx = c.getContext('2d');
  c.width = 2 * raduis + (lineWidth - 1) * 2 + shankLength;
  c.height = 2 * raduis + (lineWidth - 1) * 2 + shankLength;
  ctx.beginPath();
  ctx.arc(circleXY, circleXY, raduis, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(lineXY, lineXY);
  ctx.lineTo(lineXY + raduis, lineXY + raduis);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
};

export default StrokeCircleIcon;
