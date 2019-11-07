<template>
    <div>
      <div>
        
      </div>
       <p>分享页面</p>
       <img v-lazy="imgUrl" style="width:0.4rem;height:0.4rem">
        <timePaint></timePaint>
       <qrCode></qrCode>
    </div>
</template>
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
    ...mapActions(["getAddress", "acctCheck", "menuList", "sms"]),
  },
  filters :{
   
  },
  computed: {
    ...mapState(["shop"]),
  },
  components: {
    qrCode,
    timePaint
  }
};
</script>

