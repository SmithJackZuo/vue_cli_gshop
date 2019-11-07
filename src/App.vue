<template>
    <div id="app">
       <router-view></router-view>
       <depositShare></depositShare>
    </div>
</template>
<script>
import depositShare from './pages/depositShare/depositShare.vue';
export default {
    components: { depositShare }
}
</script>