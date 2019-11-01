<template>
    <div>
       分享页面
       <img v-lazy="imgUrl" style="width:40px;height:40px">
    </div>
</template>
<script>
import {reqCategory} from '../../api/index.js'

export default {
    data(){ 
       return{
         imgUrl:'../../../static/img/lsbank2.png'
        }  
     },
    async mounted(){
        console.log(777)
        const result = await reqCategory();
        console.log(result)
    }
}
</script>