<template>
    <div>
         <div id="codeDiv" style="display: none;"></div>
        <div id="qrcode"></div> <!-- 创建一个div，并设置id为qrcode -->
    </div>
</template>
<script>
import QRCode from 'qrcodejs2'  // 引入qrcode
import {getDeviceOS}  from '../../common/js/BaseJs'
import $ from 'jquery'

export default {
    props:{
     page:''
    },
    mounted(){
      let deviceAddress=''
      let data = getDeviceOS();
      if(data==='ios'){
          deviceAddress='https://apps.apple.com/cn/app/le-shan-shang-ye-yin-xing/id1131143701'
      }else{
          deviceAddress='https://sj.qq.com/myapp/detail.htm?apkName=com.csii.LeShanBank'
      }
      this.qrcodes(deviceAddress);
    },
    methods:{
        qrcodes(address) {
            let qrcode = new QRCode('codeDiv', {
                width: 180,  
                height: 180,
                text: address, // 二维码地址
            })
            console.log(this.page)
             let myCanvas;
            //  let myCanvas = document.getElementsByTagName('canvas')[1];
            if(this.page=='1'){               
              myCanvas = document.getElementsByTagName('canvas')[1];
            }else{
               myCanvas = document.getElementsByTagName('canvas')[0];
            }
            
            let img = this.convertCanvasToImage(myCanvas);
            // console.log($("#qrcode"))
            $("#qrcode").append(img);
        },
        convertCanvasToImage(canvas){
            let image = new Image();  
            image.src = canvas.toDataURL("image/png");  
            return image;  
        }
     }
}
</script>