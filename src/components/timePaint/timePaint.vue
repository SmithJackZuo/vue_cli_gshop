<template>
  <div class="mmg_periodPaint" style="padding-bottom: 0.1rem;">
    <canvas id="myCanvas">Your browser does not support the HTML5 canvas tag.</canvas>
    <div id="des"
      class="mmg_periodPaint_text">
      <section>
        <div :style="'width:'+width+'rem;'">{{type==='1'?'募集期':'认购'}}</div>
        <div :style="'width:'+width+'rem;'">{{dates[0]|fmtDate}}</div>
      </section>
      <section>
        <div :style="'width:'+width+'rem;'">{{type==='1'?'起息日':'申购'}}</div>
        <div :style="'width:'+width+'rem;'">{{dates[1]|fmtDate}}</div>
      </section>
      <section>
        <div :style="'width:'+width+'rem;'">{{type==='1'?'到期日':'终止日'}}</div>
        <div :style="'width:'+width+'rem;'">{{dates[2]|fmtDate}}</div>
      </section>
    </div>
  </div>
</template> 
<style lang="less" rel="stylesheet/less" scoped>
.mmg {
  &_periodPaint {
    width: 100%;
    text-align: center;
    background-color: #fff;
    &_text {
      display: flex;
      font-size: 0.12rem;
      color: #222222;
      div:nth-of-type(1) {
        line-height: 0.17rem;
      }
      div:nth-of-type(2) {
        margin-top: 0.06rem;
        line-height: 0.17rem;
      }
    }
  }
}
</style>

<script>
import { getTimeNoFormate, getPixelRatio } from "../../../static/js/util";
import PaintLine from "../../../static/js/paint/paintLine";
import PaintCircle from "../../../static/js/paint/PaintCircle";

export default {
  data() {
    return {
        padding: 0.15, //canvas的左右边距，单位:rem
        dates: [], //产品周期日期
        type: 0, //产品类型
        index: -1,
        width: 0.7
        };
  },
  watch:{
    timeData(newval){
     let type = newval.period_type, //产品类型
        closeType = "1", //封闭式
        now = getTimeNoFormate(); //获取当前时间，判断产品跑到那个生命周期了
      this.type = type;
      let dates = [
        type === closeType ? newval.subs_begin_date : newval.subs_begin_date,
        type === closeType ? newval.value_date : newval.open_begin_date,
        type === closeType ? newval.winding_date : newval.winding_date
      ];
      this.dates = dates;
      if (now >= dates[0] && now <= dates[1]) {
        this.index = 0;
        document
          .getElementById("des")
          .getElementsByTagName("section")[0].style.color = "#999";
        document
          .getElementById("des")
          .getElementsByTagName("section")[1].style.color = "#999";
      } else if (now >= dates[1] && now <= dates[2]) {
        this.index = 1;
        document
          .getElementById("des")
          .getElementsByTagName("section")[1].style.color = "#999";
        document
          .getElementById("des")
          .getElementsByTagName("section")[2].style.color = "#999";
      } else if (now > dates[2]) {
        this.index = 2;
        document
          .getElementById("des")
          .getElementsByTagName("section")[2].style.color = "#999";
      }
      this.paint();
    }
  },
  mounted(){
    
  },
  methods: {
    rem2px(value) {
      return value * ((screen.availWidth * 100) / 375);
    },
    paint() {
      let eleId = "myCanvas";
      let mycanvas = document.getElementById(eleId);
      let ratio = getPixelRatio(mycanvas);
      let dates = this.dates;
      let C = this.compRate(dates[1], dates[0]),
        R = this.compRate(dates[2], dates[1]),
        interval = this.rem2px(0.036),
        maxRadius = this.rem2px(0.036), //中心圆点半径
        maxDiameter = maxRadius * 2, //中心圆直径
        y = maxRadius * 2 * ratio,
        activceColor = "#4985E3", //活跃圆点颜色
        canvasWidth = this.canvasWidth;
      mycanvas.width = canvasWidth;
      mycanvas.height = maxRadius * 5; //canvas高度（中心圆点半径==外圈半径） （中心圆点半径+外圈半径）*2 + 半径(预留) = 5*半径
      // 适配，解决canvas模糊问题
      mycanvas.style.width = mycanvas.width + "px";
      mycanvas.style.height = mycanvas.height + "px";
      mycanvas.width = mycanvas.width * ratio;
      mycanvas.height = mycanvas.height * ratio;

      document.getElementById("des").style.width = canvasWidth;
      let secL = document
        .getElementById("des")
        .getElementsByTagName("section")[0], //认购、募集期
        secC = document
          .getElementById("des")
          .getElementsByTagName("section")[1], //申购、起息日
        secR = document
          .getElementById("des")
          .getElementsByTagName("section")[2], //终止日、到期日
        leftInterval = mycanvas.offsetLeft,
        textpos = this.rem2px(this.width); //描述文字中心距离
      let mgleftC = (canvasWidth - textpos * 2) * (C / (C + R));
      let mgleftR = (canvasWidth - textpos * 2) * (R / (C + R)) - textpos;
      if (mgleftC >= canvasWidth - textpos * 3) {
        //临界值判断
        mgleftC = canvasWidth - textpos * 3;
        mgleftR = 0;
      }
      secC.style.marginLeft = mgleftC + "px";
      secR.style.marginLeft = mgleftR + "px";
      //获取三个圆点X左边 (文字TEXT左边X坐标-做间隔-文字TEXT宽度的一半)*像素比
      let circleL = (secL.offsetLeft - leftInterval + textpos / 2) * ratio, //左边圆点x坐标-认购
        circleC = (secC.offsetLeft - leftInterval + textpos / 2) * ratio, //中间圆点x坐标-申购
        circleR = (secR.offsetLeft - leftInterval + textpos / 2) * ratio; //右边圆点x坐标-终止日
      // 以下是canvas绘图
      let pc = new PaintCircle(eleId); //画圆点
      [circleL, circleC, circleR, -100].map(function (x, index) {
        let circleParam = [
          //包括圆中心，圆外圈半径+颜色
          {
            r: maxRadius * Number(ratio),
            color: "#eee"
          },
          {
            r: this.rem2px(0.018) * Number(ratio),
            color: "#D7D7D7"
          }
        ];
        if (index - 1 <= this.index) {
          circleParam = [
            //选中后的圆中心，圆外圈半径+颜色
            {
              r: maxRadius * Number(ratio),
              color: "#E2EDFD"
            },
            {
              r: this.rem2px(0.018) * Number(ratio),
              color: activceColor
            }
          ];
        }
        pc.bridge(x, y, circleParam);
      }, this);
      let points = [
        {
          moveX: circleL + maxDiameter * ratio + interval * ratio,
          lineX: circleC - maxDiameter * ratio - interval * ratio,
          color: "#eee"
        },
        {
          moveX: circleC + maxDiameter * ratio + interval * ratio,
          lineX: circleR - maxDiameter * ratio - interval * ratio,
          color: "#eee"
        }
      ];
      //画线
      new PaintLine(eleId).bridgeMulti(
        points,
        y,
        function (item, index) {
          // if (this.index === index) {
          if (index <= this.index) {
            item.color = activceColor;
          }
          return item;
        }.bind(this),
        Number(ratio) * 1
      );
    },
    compRate(date1, date2) {
      return (
        Number(date1.substring(0, 4) * 12 + Number(date1.substring(4, 6))) *
        30 +
        Number(date1.substring(6, 8)) -
        ((Number(date2.substring(0, 4)) * 12 + Number(date2.substring(4, 6))) *
          30 +
          Number(date2.substring(6, 8)))
      );
    }
  },
  filters:{
    fmtDate(dateStr) {
      if (!dateStr) {
        return;
      }
      return (
        dateStr.substring(0, 4) +
        "." +
        dateStr.substring(4, 6) +
        "." +
        dateStr.substring(6, 8)
      );
    }
  },
  computed:{
    //canvas的宽度 = 屏幕宽度 - 边距*2
    canvasWidth() {
      return screen.availWidth - this.rem2px(this.padding * 2);
    }
  },
  props: ['timeData'],
  
}
</script>



