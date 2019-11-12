<template>
    <div style="overflow: hidden;">
      <header class="title_deposit">
        <p>
          {{currentProduct.prod_name}}
        </p>
      </header>
      <section class="section_deposit">
        <div class="section_top">
         <div class="profit">
            <div class="content_profit">
                <p>{{currentProduct.ret_expect_income}}</p>         
                <p>
                  预期年化收益率
                </p>  
            </div>
         </div>
         <div class="profit">
            <div class="content_profit">
                 <p style="color:#222222">
                   {{timeTerm}}
                </p> 
                <p>
                  投资期限
                </p>  
            </div>
         </div>
         </div>
        <div class="section_center">
            <timePaint :time-data="currentProduct" v-show="showTime"></timePaint>
            <div class="form_input margin_15">  
              <p>{{currentProduct.prod_lifecycle?currentProduct.prod_lifecycle==='6'?fmtMyByTenthdAndThd(currentProduct.min_pchs_p):fmtMyByTenthdAndThd(currentProduct.min_subs_p):'--'}}起购 | 剩余额度：{{balance}}</p>
              <!-- <p>1万元起购 | 剩余额度：{{currentProduct&&currentProduct.total_quota&&currentProduct.canuser_amt?(currentProduct.total_quota-currentProduct.canuser_amt)/10000+ '万元':'--'}}</p>  -->
            </div>
            <div v-for="(item,index) in rules" :key="index" class="form_input"> 
              <p>{{item.title}}</p>
              <p style="margin-left:0.3rem">{{item.content}}</p>
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
      imgUrl: "../../../static/img/lsbank2.png",
      currentProduct:{},
      rules:[],
      balance:'--',
      timeTerm:'--',
      showTime:false
    };
  },
  watch: {
    moneyList(val){
      val.forEach((val,key) => {
          if(this.GetRequest().id===val.prod_code){
              this.currentProduct= val;
              this.balance=(val.total_quota-val.canuser_amt)/10000+ '万元'
              this.timeTerm=this.currentProduct.prod_days+"天"
               if (this.currentProduct.period_type === '1') {
                  //封闭
                  this.showTime=true;
                  this.rules = [
                    {
                      title: '购买费率',
                      content: '免费率'
                    },
                    {
                      title: '赎回时间',
                      content: '到期自动赎回'
                    },
                    {
                      title: '赎回费率',
                      content: '免费率'
                    },
                    {
                      title: '到账时间',
                      content: 'T+3内到账，最快T+0(T指工作日)'
                    }
                  ];
                } else {
                  this.rules = [
                    {
                      title: '购买费率',
                      content: '免费率'
                    },
                    {
                      title: '赎回时间',
                      content: '支持随时赎回'
                    },
                    {
                      title: '赎回费率',
                      content: '免费率'
                    }
                  ];
                  //根据文档所述除了123还有其他预留的所以用 push
                  let text = '';
                  let val = this.currentProduct.open_days_type;
                  if (val === '1') {
                    text = '每周三17:00后一个工作日内';
                  } else if (val === '2') {
                    text = '每个投资周期的周三17:00后一个工作日内';
                  } else if (val === '3') {
                    text = '17:00前为T+1，之后为T+2，T指工作日';
                  }
                  if (text) {
                    this.rules.push({
                      title: '到账时间',
                      content: text
                    });
                  }
                }
              return
          }
      });
    }
  },
  created() {
    // let productID=Window.localti
    // this.GetRequest()    
    // console.log(this.GetRequest())
    //  this.$store.dispatch('getAddress')
  },
  mounted() {
    // this.$store.dispatch('getAddress');  //另一种启动vuex方式
    // this.getAddress()   
    // var data = {
    //   CHNL_TYPE: "MB",
    //   CLIENT_OS: "A",
    //   CLIENT_VER: "1.0.0",
    //   INCORP_NO: "000090"
    // };
    // this.menuList(data);
    this.moneyListQry({});
  },
  methods: {
    ...mapActions(["moneyListQry"]),
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
    },
    fmtMyByTenthdAndThd(val) {
      return val && val.length <= 3 ? val + '元' : val / 10000 + '万元';
    },  
  },
  filters: {},
  computed: {
    ...mapState(['moneyList'])
  },
  components: {
    qrCode,
    timePaint
  }
};
</script>

