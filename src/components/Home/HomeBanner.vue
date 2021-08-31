<template>
    <header class="banner">
        <img class="bannerImage" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/72d3596d8935c1d4_1629282175658.png" alt="bannerBackgroudImage">
        <div class="mask"></div>
        <div class="content">
            <h1>更快更便捷的在线数据处理服务</h1>
            <h2>一站式数据服务，解决去哪找数据，做什么样的数据，怎么做数据的困扰。在线编辑图表，实时更新动态，及时下载成果进行应用</h2>
            <el-button class="bannerBtn" @click="$router.push('/login')">立即注册</el-button>
            <el-button type = "primary" class="bannerBtn" @click="$router.push('/edit')">绘制图表</el-button>
        </div>
    </header>
</template>


<script>
export default {
    name:'HomeBanner',
    setup() {
        
    }
}
</script>



<style lang = "less" scoped>
    * {
        padding: 0;
    }
    .banner {
        position: relative;
        height: 100vh;
        margin-top: 0;
        img {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }
        .mask {
            position: absolute;
            left: 0;
            right: 0;
            height: 100vh;
            background: rgb(48, 56, 68);
            opacity: 0.5;
        }
        .content {
            width: 100%;
            position: absolute;
            box-sizing: border-box;
            padding: 240px;
            padding-top: 15%;
            font-family: 'Ubuntu';
            top: 88px;
            text-align: center;
            h1 {
                color: #f2f3f8;
                margin-bottom: 18px;
                font-size: 48px;
                font-weight: 500;
            }
            h2 {
                color: #f2f3f8;
                font-size: 20px;
                font-weight: 250;
                margin-bottom: 40px;
            }
        }
        .bannerBtn{
            margin-top: 80px;
            width: 220px;
            height: 40px;
            border-radius: 10px;
            font-size: 18px;
            padding: 0;
        }
        .el-button{
            margin:20px;
        }
    }

    @media (max-width: 1200px) { 
        .banner {
            .content {
                padding: 120px;
            }
        }
     }

    @media (max-width: 768px) { 
        .banner {
            .content {
                padding: 60px;
            }
        }
    }

</style>