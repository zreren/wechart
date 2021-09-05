<template>
<!-- description 1 -->
<div class="detail">
    <el-row >
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text">
            <h1>专业，新颖</h1>
            <h5>
                支持多种数据导入模式，全方位的制图体验。
            </h5>
             <h5>
                为您制图时的疑惑提供专业性的建议，网罗前沿可视化设计。
            </h5>
        </div>
    </el-col>
     <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <div class = "pic" >
           <img class="detailImage" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/5e098c73c8a4874c_1630055132693.png" alt="detailImage">
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>

    <!-- description2 -->
    <el-row >
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text2">
            <h1>轻巧、快速</h1>
            <h5>我们的现成模板驱动参与，图表选择附带适合类型，让您更轻松的选择。
            </h5>
            <h5>获取带有您的品牌、颜色、的主题。让您的图表与主题内容契合，视觉统一。
            </h5>
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12" class = "pic2">
           <img class="detailImage2" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/e581f230d5991e52_1630055128420.png" alt="detailImage">
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>

    <!-- description3 -->
    <el-row >
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text">
            <h1>简洁，精准</h1>
            <h5>
                致力于打造极简的操作方式，最高效的完成内容的创作。
            </h5>
            <h5>
                依据分类，精准呈现用户所需的内容，更快的完成搜索。
            </h5>
        </div>
    </el-col>
    <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <div class = "pic" >
            <img class="detailImage" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/bd4134b48975adea_1630055123521.png" alt="detailImage">
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>
</div>
    <footer>
        @created by WeChart
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
.detail{
    background-color: #fafcff;
    padding: 100px 0 50px 0;
}
.el-row {
    margin-bottom: 140px;
    padding:0 180px;
    .el-row{
        margin: 0;
    }
  }
 
 .pic{
     height: 300px;
    //  background-color: #EAEFF6;
     
 }
.pic2{
    float:left;
}
 .detailImage{
         height:300px;
         float:right;
     }

.detailImage2{
     height: 300px;
     float:right;
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
h1{
    font-weight:300 ;
    font-size: 36px;
    color:#52575f
}
h5{
    font-weight: lighter;
    // width: 380px;
    margin-top: 10px;
    font-size: 20px;
}
footer{
    color: #c9d0da;
    padding: 20px 0;
}

</style>