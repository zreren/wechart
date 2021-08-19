<template>
  <div class="home">
    <home-banner/>
    <home-nav/>
    <home-detail/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/Home/HomeBanner.vue'
import HomeNav from '@/components/Home/HomeNav.vue'
import HomeDetail from '../components/Home/HomeDetail.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeNav,
    HomeDetail
  }
}
</script>


<style lang="less" scoped>

</style>