<template>
<div class="upload">
  <img    @click="$router.push('/writing')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/ec764c8140385ab7_1630760604443.png" alt="">
   分享文章
</div> 
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
  display: flex;
  flex-direction: column;
  cursor: pointer;
  bottom: 120px;
  right: 60px;
  transition: .8s;
  img {    
  width: 65px;
  }
}
.upload:hover {
  transform: scale(1.05);
} 
</style>