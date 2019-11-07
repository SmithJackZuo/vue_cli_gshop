<template>
    <div style="overflow: hidden;">
      <header class="title_deposit">
        <p>
          大额存单
        </p>
        <p>
          大额存单产品名称
        </p>
      </header>
      <section class="section_deposit">
        <div class="section_top">
         <div class="profit">
            <div class="content_profit">
                <p>
                   4.18%
                </p> 
                <p>
                  预期年化收益率
                </p>  
            </div>
         </div>
         <div class="profit">
            <div class="content_profit">
                 <p style="color:#222222">
                   五年期
                </p> 
                <p>
                  按资期限
                </p>  
            </div>
         </div>
         </div>
        <div class="section_center">
            <div class="form_input">
              <p>1万元起购 | 剩余额度：1282222222.00万元</p> 
            </div>
            <div class="form_input margin_15">
              <p>是否支持提前支取</p>
              <div class="form_radio">
                <input type="radio" id="female" name="sex" />
                <label for="female">是</label>
                <input type="radio" id="male" name="sex" />
                <label for="male">否</label>
              </div>     
            </div>
            <div class="form_input">
              <p>阶梯利率/随存随取/保本保息</p>    
            </div>
        </div>
        <div class="section_bottom">
            <qrCode></qrCode>
        </div>
      </section>
      <footer class="footer_deposit">
        <p>了解更多请下载乐山市商业银行手机APP进行查询</p>
      </footer>
       <!-- <img v-lazy="imgUrl" style="width:0.4rem;height:0.4rem"> -->
        <!-- <timePaint></timePaint> -->
      
     
    </div>
</template>
<style lang="less" rel="stylesheet/less">
// @import "../../common/css/base.less";
@import "../css/index.less";
</style>
<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { reqCategory } from "../../api/index.js";
import qrCode from "../../components/qrCode/qrCode";
import PaintLine from "../../../static/js/paint/paintLine";
import PaintCircle from "../../../static/js/paint/PaintCircle";
import { getTimeNoFormate, getPixelRatio } from "../../../static/js/util";
import timePaint from "../../components/timePaint/timePaint";

export default {
  data() {
    return {
      imgUrl: "../../../static/img/lsbank2.png"
    };
  },
  watch: {
    shop(val) {
      console.log(val);
    }
  },
  created() {
    //  this.$store.dispatch('getAddress')
  },
  mounted() {
    // this.$store.dispatch('getAddress');  //另一种启动vuex方式
    // this.getAddress()
    let param = {
      kehuzhao: "62162622222222222"
    };
    this.acctCheck(param);
    var data = {
      CHNL_TYPE: "MB",
      CLIENT_OS: "A",
      CLIENT_VER: "1.0.0",
      INCORP_NO: "000090"
    };
    this.menuList(data);
    this.sms({});
  },
  methods: {
    ...mapActions(["getAddress", "acctCheck", "menuList", "sms"])
  },
  filters: {},
  computed: {
    ...mapState(["shop"])
  },
  components: {
    qrCode,
    timePaint
  }
};
</script>

