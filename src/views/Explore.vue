<template>
  <div class="main">
    <Content></Content>
  </div>
</template>

<script>
import Content from '../components/Explorechild/content'
export default {
  components:{
     Content
  },
  setup() {
    
  },
}
</script>


<style lang="less" scoped>
.main{
  width: 100vw;
  height:auto;
  overflow: hidden;
}
</style>