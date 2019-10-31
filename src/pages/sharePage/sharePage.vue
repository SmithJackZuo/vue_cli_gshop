<template>
    <div>
       分享页面
    </div>
</template>
<script>
import {reqCategory} from '../../api/index.js'

export default {
    async mounted(){
        console.log(777)
        const result = await reqCategory();
        console.log(result)
    }
}
</script>