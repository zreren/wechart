<template>
    <header class="banner">
        <img class="bannerImage" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/72d3596d8935c1d4_1629282175658.png" alt="bannerBackgroudImage">
        <div class="mask"></div>
        <div class="content">
            <h1>Produce your data quicker and simpler</h1>
            <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h2>
            <el-button class="bannerBtn" @click="$router.push('/signup')">立即注册</el-button>
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
            position: absolute;
            box-sizing: border-box;
            padding: 240px;
            padding-top: 12%;
            font-family: 'Ubuntu';
            top: 88px;
            text-align: center;
            color: #f2f3f8;
            h1 {
                margin-bottom: 18px;
                font-size: 48px;
                font-weight: 400;
            }
            h2 {
                font-size: 20px;
                font-weight: 250;
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