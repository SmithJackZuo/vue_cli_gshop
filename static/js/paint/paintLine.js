 import Paint from './paint';

 function PaintLine(eleId) {
   Paint.call(this);
   this.ctx = document.getElementById(eleId).getContext('2d');
   this._super = new Paint();
 }
 PaintLine.prototype = new Paint();
 PaintLine.prototype.constructor = PaintLine;

 PaintLine.prototype.origin = function (point, width, color) {
   this._super.origin(this.ctx, point);
   if (width) {
     this.ctx.lineWidth = width;
   }
   if (color) {
     this.ctx.strokeStyle = color;
   }
 };
 PaintLine.prototype.line = function (point, width, color) {
   this._super.line(this.ctx, point);
   if (width) {
     this.ctx.lineWidth = width;
   }
   if (color) {
     this.ctx.strokeStyle = color;
   }
 };
 PaintLine.prototype.bridgeMulti = function (points, y, fiterFnc, width = 1) {
   if (Array.isArray(points)) {
     points.map(function (item, index) {
       // eslint-disable-next-line no-param-reassign
       item = fiterFnc(item, index);
       this.origin([item.moveX, y], width, item.color);
       this.line([item.lineX, y], width, item.color);
       this.finish(this.ctx);
     }, this);
   }
 };
 export default PaintLine;
