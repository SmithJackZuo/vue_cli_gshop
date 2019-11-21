<template>
    <div style="overflow: hidden;">
      <header class="title_deposit">
        <p>
          {{urlType}}
        </p>
        <p>
          {{currentProduct.prod_name}}          
        </p>
      </header>
      <section class="section_deposit">
        <div class="section_top">
         <div class="profit">
            <div class="content_profit">
                <p>
                   {{rate|rateFloat}}%
                </p> 
                <p>
                  年利率
                </p>  
            </div>
         </div>
         <div class="profit">
            <div class="content_profit">
                 <p style="color:#222222">
                   {{(currentProduct.issue_num)|chineseNum}}{{(currentProduct.issue_type)|dateEng2CN}}
                </p> 
                <!-- <p>
                  投资期限
                </p>   -->
            </div>
         </div>
         </div>
        <div class="section_center">
            <div class="form_input">  
              <p>{{depositList.min_pur | fmtMoneyUnit}}元起存 | 剩余额度：{{balance}}</p> 
            </div>
            <div class="form_input margin_15">
              <p>是否支持提前支取</p>
              <div class="form_radio">
                <input type="radio" id="female" name="sex" :checked='switchOn' disabled/>
                <label for="female">是</label>
                <input type="radio" id="male" name="sex" :checked='!switchOn' disabled/>
                <label for="male">否</label>
              </div>     
            </div>
            <div class="form_input">
              <p>{{tip}}</p>    
            </div>
        </div>
        <div class="section_bottom">
            <qrCode :page='2'></qrCode>
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
import { depoNum2Chinese, depoDateFormat, rateFloat,fmtMoneyUnit } from '../../filters/formate.js';

export default {
  data() {
    return {
      imgUrl: "../../../static/img/lsbank2.png",
      currentProduct:{},
      rate:'',
      balance:'--',
      switchOn:true,
      tip:'',
      urlType:''
    };
  },
  watch: {
    depositList(val) {
      this.currentProduct=val;      
      this.rate=val.sale_rate.replace('%', '')
      this.balance=val.residue_quota/10000+ '万元'
      this.switchOn=val.is_draw==='01'?true:false
    }
  },
  created() {
    let productId=this.GetRequest().id;
    let type=this.GetRequest().type;
    this.depositListQry({id:productId,type:type});
    if(type==='1'){
      this.urlType="大额存单"
      this.tip='阶梯利率、随存随取、保本保息'
    }else if(type==='2'){
      this.urlType="乐惠存"
      this.tip='智能计息、存取便利、存款保障'
    }
  },
  mounted() {
   
  },
  methods: {
    ...mapActions(["depositListQry"]),
     GetRequest() {   
            var url = window.location.search; //获取url中"?"符后的字串   
            var theRequest = new Object();   
            if (url.indexOf("?") != -1) {   
                var str = url.substr(1);   
                let strs = str.split("&");   
                for(var i = 0; i < strs.length; i ++) {   
                    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
                }   
            }   
     return theRequest;   
    }   
  },
  filters: {
     rateFloat(arg) {
      return rateFloat(arg);
    },
    chineseNum(arg) {
      return depoNum2Chinese(arg);
    },
    dateEng2CN(arg) {
      return depoDateFormat(arg);
    },
    fmtMoneyUnit(arg) {
      return fmtMoneyUnit(arg);
    },
  },
  computed: {
    ...mapState(["depositList"])
  },
  components: {
    qrCode,
    timePaint
  }
};
</script>

