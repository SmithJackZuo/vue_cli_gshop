 import StrokeCircleIcon from './strokeCircleIcon';

 function StrokeIconFactory(type) {
   if (type === 'serach') {
     return new StrokeCircleIcon();
   }

 }
 export default StrokeIconFactory;
