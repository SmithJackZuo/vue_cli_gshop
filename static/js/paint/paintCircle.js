   import Paint from './paint';

   function PaintCircle(eleId) {
     Paint.call(this);
     this.ctx = document.getElementById(eleId).getContext('2d');
   }

   PaintCircle.prototype = new Paint();
   PaintCircle.prototype.constructor = PaintCircle;
   PaintCircle.prototype.bridge = function (x, y, param) {
     if (Array.isArray(param)) {
       param.map(function (item) {
         let r = item.r || 1;
         this.ctx.beginPath();
         this.ctx.arc(x, y, r, 0, 2 * Math.PI);
         this.ctx.lineWidth = r * 2;
         this.ctx.strokeStyle = item.color;
         this.finish(this.ctx);
       }, this);
     }
   };
   export default PaintCircle;
