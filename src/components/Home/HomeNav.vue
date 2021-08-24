<template>
    <el-row >
    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" ><div class="navbox" id="leftcard">学习发现</div></el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" > <div class="navbox">生成图表</div></el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" ><div class="navbox" id="rightcard">数据广场</div></el-col>
  <!-- <el-row :gutter="16" class="navcontainer">
  <el-col :span="6"><div class="grid-content bg-purple"></div> -->
    <!-- <div class="navcontainer"> -->
  <!-- </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div>  -->
  <!-- </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div> -->
   <!-- </el-col>
  </el-row>
  </el-col> -->
    <!-- </div> -->
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
// .navcontainer{
//     margin:60p;
//     display: flex;
//     justify-content: center;
// }
//  .navbox{
//      display: flex;
//      justify-content: center;
//      align-content: center;
//      margin: 80px 60px 80px 0px;
//      align-items: center;
//      width: 240px;
//      height: 360px;
//      background-color: #EAEFF6;
//  }
    .el-row {
    margin: 100px 0;
    padding: 0 135px;
    .el-row{
        margin: 0;
    }
  }
    .el-col{
        // background-color: aquamarine;
        height:360px;
        width: 240px;
        padding:0 45px 45px 45px;
        margin-bottom: 45px;
    }
    .navbox{
        background-color: #EAEFF6;
        height:360px;
        // width:240px;
    }



</style>