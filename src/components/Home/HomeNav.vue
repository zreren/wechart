<template>
    <el-row >
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" ><div class="navbox" id="leftcard">学习发现</div></el-col>
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" > <div class="navbox">生成图表</div></el-col>
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" ><div class="navbox" id="rightcard">数据广场</div></el-col>
</el-row>
</template>

<script>
export default {
    name:'HomeNav',
    setup() {
        return {
        
        }
    }
}
</script>

<style lang="less" scoped>
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