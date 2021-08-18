<template>
  <div class="home">
    <home-banner/>
    <home-nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/Home/HomeBanner.vue'
import HomeNav from '@/components/Home/HomeNav.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeNav
  }
}
</script>


<style scoped>
</style>