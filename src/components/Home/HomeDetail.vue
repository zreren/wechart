<template>
  <el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>

  <el-col :span="16">
  <div class="detailcontainer">
  <div class="text">
          <h1>Light, Fast & Powerful</h1>
          <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </h5>
  </div>
  <div class="detail-right">
      <div class="pic">pic-test</div>
  </div>
</div>
  </el-col>
  
 <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>

</el-row>
</template>
      
  
 

<script>
export default {
    name:'HomeDetail',
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
    //  margin: 60px;
     align-items: center;
     width: 300px;
     height: 440px;
     background-color: #EAEFF6;
 }
 .pic{
     width:450px ;
     height: 330px;
     background-color: #EAEFF6;
 }
 .detailcontainer{
     display: flex;
     justify-content: space-between;
 }
 .text{
     text-align: left;
 }
h5{
    font-weight: lighter;
    width: 400px;
    margin-right: 30px;
    margin-top: 10px;
    font-size: 20px;
}
div1{
    font-weight: bolder;
    font-size: 30px;
}
</style>