<template>
    <div>
        <div id="qrcode"></div> <!-- 创建一个div，并设置id为qrcode -->
    </div>
</template>
<script>
import QRCode from 'qrcodejs2'  // 引入qrcode
import {getDeviceOS}  from '../../common/js/BaseJs'

export default {
    mounted(){
      let deviceAddress=''
      let data = getDeviceOS();
      if(data==='ios'){
          deviceAddress='https://www.baidu.com'
      }else{
          deviceAddress='https://vuex.vuejs.org/'
      }
      this.qrcode(deviceAddress);
    },
    methods:{
        qrcode(address) {
            let qrcode = new QRCode('qrcode', {
                width: 132,  
                height: 132,
                text: address, // 二维码地址
            })
        }
     }
}
</script>