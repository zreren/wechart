<template>
    <el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>

  <el-col>
  <!-- <el-row :gutter="16" class="navcontainer">
  <el-col :span="6"><div class="grid-content bg-purple"></div> -->
  <div class="navcontainer">

  <div class="navbox">学习发现</div>
  <!-- </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div>  -->
  <div class="navbox">生成图表</div>
  <!-- </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div> -->
   <div class="navbox">数据广场</div>
   <!-- </el-col>
  </el-row>
  </el-col> -->
  </div>
  </el-col>
  
 <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>

</el-row>
</template>
      
  
 

<script>
export default {
    name:'HomeNav',
    setup() {

    }
}
</script>

<style lang="less" scoped>
.navcontainer{
    display: flex;
    justify-content: center;
}
 .navbox{
     display: flex;
     justify-content: center;
     align-content: center;
     margin: 60px;
     align-items: center;
     width: 300px;
     height: 440px;
     background-color: #EAEFF6;
 }

</style>