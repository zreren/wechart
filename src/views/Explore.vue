<template>
  <img  class="upload"  @click="$router.push('/writing')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/ec764c8140385ab7_1630760604443.png" alt="">
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
.main {
  width: 100vw;
  height:auto;
  overflow: hidden;
}
.upload {
  position: fixed;
  cursor: pointer;
  top: 180px;
  right: 60px;
  width: 65px;
  transition: .8s;
}
.upload:hover {
  transform: scale(1.05);
} 
</style>