<template>
  <div class="container">
      <!-- 内容块 -->
      <div>
          {{this.$route.params}}
      </div>
      <div class="content" id='1'>
          <div class="showImage">
              <img src="../../assets/image/图表.png" alt="" height="150">
          </div>
          <div class="showMessage" @click=" textLink">
              <div class="title">
                  <span> 懒洋洋</span>| <span>2021-08-21 12:00:00</span>|<span>数据可视化</span>|<span>图表类型：树状图</span>
             </div>
              <div class="info">
                  <h2>Top 10  Charts in 2021</h2>
                  <h4 style="margin-top:1vh">what are the top 10 most popular chart reference page in 2021</h4>
              </div>
              <div class="data">
                  <i class="el-icon-star-on"></i>124 <i style="margin-left:10px" class="el-icon-view"></i> 200
              </div>
          </div>
      </div>
      <div class="content" id='1'>
          <div class="showImage">
              <img src="../../assets/image/图表.png" alt="" height="150">
          </div>
          <div class="showMessage" @click=" textLink">
              <div class="title">
                  <span> 懒洋洋</span>| <span>2021-08-21 12:00:00</span>|<span>数据可视化</span>|<span>图表类型：树状图</span>
             </div>
              <div class="info">
                  <h2>Top 10  Charts in 2021</h2>
                  <h4 style="margin-top:1vh">what are the top 10 most popular chart reference page in 2021</h4>
              </div>
              <div class="data">
                  <i class="el-icon-star-on"></i>124 <i style="margin-left:10px" class="el-icon-view"></i> 200
              </div>
          </div>
      </div>
      <div class="content" id='1'>
          <div class="showImage">
              <img src="../../assets/image/图表.png" alt="" height="150">
          </div>
          <div class="showMessage" @click=" textLink">
              <div class="title">
                  <span> 懒洋洋</span>| <span>2021-08-21 12:00:00</span>|<span>数据可视化</span>|<span>图表类型：树状图</span>
             </div>
              <div class="info">
                  <h2>Top 10  Charts in 2021</h2>
                  <h4 style="margin-top:1vh">what are the top 10 most popular chart reference page in 2021</h4>
              </div>
              <div class="data">
                  <i class="el-icon-star-on"></i>124 <i style="margin-left:10px" class="el-icon-view"></i> 200
              </div>
          </div>
      </div>
      <div class="content" id='1'>
          <div class="showImage">
              <img src="../../assets/image/图表.png" alt="" height="150">
          </div>
          <div class="showMessage" @click=" textLink">
              <div class="title">
                  <span> 懒洋洋</span>| <span>2021-08-21 12:00:00</span>|<span>数据可视化</span>|<span>图表类型：树状图</span>
             </div>
              <div class="info">
                  <h2>Top 10  Charts in 2021</h2>
                  <h4 style="margin-top:1vh">what are the top 10 most popular chart reference page in 2021</h4>
              </div>
              <div class="data">
                  <i class="el-icon-star-on"></i>124 <i style="margin-left:10px" class="el-icon-view"></i> 200
              </div>
          </div>
      </div>
      <div class="content" id='1'>
          <div class="showImage">
              <img src="../../assets/image/图表.png" alt="" height="150">
          </div>
          <div class="showMessage" @click=" textLink">
              <div class="title">
                  <span> 懒洋洋</span>| <span>2021-08-21 12:00:00</span>|<span>数据可视化</span>|<span>图表类型：树状图</span>
             </div>
              <div class="info">
                  <h2>Top 10  Charts in 2021</h2>
                  <h4 style="margin-top:1vh">what are the top 10 most popular chart reference page in 2021</h4>
              </div>
              <div class="data">
                  <i class="el-icon-star-on"></i>124 <i style="margin-left:10px" class="el-icon-view"></i> 200
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList:['所有','数据可视化','图表类型','图标组合','学习资源','技术支持'],
      selectNode:"",
      search:""
    }
  },
  components: {


  },
  setup(){

  }, 
  methods: {
      textLink(){
         this.$router.push({path:'/blog/detail',params: { id: this.id } })
      }
  }
}
</script>

<style scoped lang="less">

.container{
    float: left;
    margin: 0;
    .content{
        overflow: hidden;
        display: block;
        margin-top: 1vh;
        width: 100%;
        height:auto;
        .showImage:hover {cursor:pointer}
        .showImage{
            float: left;
        }
        .showMessage > *:hover{cursor:pointer}
        .showMessage{
            float: left;
            color: #233062;
            .title{
                color: #C9D0E1;
                padding: 1vh 1vw;
                span{
                    margin: 0 5px;
                }
            }
            .info{
                 padding: 1vh 1vw;
            }
            .data{
                padding: 1vh 1vw;
            }
        }
    }

}

</style>