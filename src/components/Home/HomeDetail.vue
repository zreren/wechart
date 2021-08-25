<template>
<!-- description 1 -->
    <el-row >
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text">
            <h1>Light, Fast & Powerful</h1>
            <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </h5>
        </div>
    </el-col>
     <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <div class = "pic" >
            pic-test
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>

    <!-- description2 -->
    <el-row >
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <div class = "pic2" >
            pic-test
        </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text2">
            <h1>Light, Fast & Powerful</h1>
            <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </h5>
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>

    <!-- description3 -->
    <el-row >
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text">
            <h1>Light, Fast & Powerful</h1>
            <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </h5>
        </div>
    </el-col>
    <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <div class = "pic" >
            pic-test
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>
    
    <footer>
        @create by WeChart
    </footer>
</template>

<script>
export default {
    name:'HomeDetail',
    setup() {

    }
}
</script>

<style lang="less" scoped>
/* .navcontainer{
    display: flex;
    justify-content: center;
}
 .navbox{
     display: flex;
     justify-content: center;
     align-content: center;
    //  margin: 60px;
     align-items: center;
     width: 300px;
     height: 440px;
     background-color: #EAEFF6;
 } */
.el-row {
    margin-bottom: 100px;
    padding:0 180px;
    .el-row{
        margin: 0;
    }
  }
 
 .pic{
    //  width:380px ;
     height: 300px;
     background-color: #EAEFF6;
     
     
 }
  .pic2{
    //  width:380px ;
     height: 300px;
     background-color: #EAEFF6;
     margin-right:40px;
     
 }
 .text{
     text-align: left;
     margin-bottom: 40px;
     margin-right:40px
 }
 .text2{
     text-align: left;
     margin-bottom: 40px;
 }
h5{
    font-weight: lighter;
    // width: 380px;
    margin-top: 10px;
    font-size: 20px;
}
footer{
    color: #c9d0da;
    padding-bottom: 40px;
}
</style>