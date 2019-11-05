<template>
    <div>
       <p>分享页面</p>
       <img v-lazy="imgUrl" style="width:0.4rem;height:0.4rem">
       {{shop}}
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
import {reqCategory} from '../../api/index.js'

export default {
    data(){ 
       return{
         imgUrl:'../../../static/img/lsbank2.png'
        }  
     },
     watch:{
        shop(val){
          console.log(val)
        }
     },
     created(){
        //  this.$store.dispatch('getAddress')
     },
    mounted(){
        // this.$store.dispatch('getAddress');  //另一种启动vuex方式
        this.getAddress()
        let param = {
          kehuzhao: '62162622222222222'
        };
        this.acctCheck(param)
    },
    methods:{
      ...mapActions(['getAddress','acctCheck'])
    },
    computed: {
      ...mapState(['shop']),
    }
}
</script>