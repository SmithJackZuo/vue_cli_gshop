<template>
    <div id="app">
       <router-view></router-view>
       <SharePage></SharePage>
    </div>
</template>
<script>
import SharePage from './pages/sharePage/sharePage.vue';
export default {
    components: { SharePage }
}
</script>