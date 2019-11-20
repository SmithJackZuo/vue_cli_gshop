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
          deviceAddress='https://apps.apple.com/cn/app/le-shan-shang-ye-yin-xing/id1131143701'
      }else{
          deviceAddress='https://sj.qq.com/myapp/detail.htm?apkName=com.csii.LeShanBank'
      }
      this.qrcode(deviceAddress);
    },
    methods:{
        qrcode(address) {
            let qrcode = new QRCode('qrcode', {
                width: 180,  
                height: 180,
                text: address, // 二维码地址
            })
        }
     }
}
</script>