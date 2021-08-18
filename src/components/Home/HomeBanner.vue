<template>
    <div style="height:100vh;">
    <header class="banner">
        <img class="bannerImage" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/72d3596d8935c1d4_1629282175658.png" alt="bannerBackgroudImage">
        <div class="mask"></div>
        <div class="content">
            <h1>Produce your data quicker and simpler</h1>
            <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h2>
            <el-button class="bannerBtn1" @click="$router.push('/signup')">立即注册</el-button>
            <el-button type = "primary" class="bannerBtn2" @click="$router.push('/edit')">绘制图表</el-button>
        </div>
    </header>
    </div>
</template>


<script>
export default {
    name:'HomeBanner',
    setup() {
        
    }
}
</script>



<style lang = "less" scoped>
    /* @import '/common/font/font.css'; */
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    .banner {
        position: relative;
        width: 100vw;
        margin-top: 0;
        background: yellowgreen;
        img {
            position: absolute;
            left: 0;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
        }
        .mask {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgb(48, 56, 68);
            opacity: 0.5;
        }
        .content {
            position: absolute;
            width: 100vw;
            padding: 240px;
            /* font-family: 'Ubuntu'; */
            top: 88px;
            /* or 75% */
            text-align: center;
            color: #f2f3f8;
            h1 {
                margin-bottom: 18px;
                font-size: 48px;
                font-weight: 400;
            }
            h2 {
                font-size: 20px;
                font-weight: 200;
            }
        }
        .bannerBtn1, .bannerBtn2{
            margin-top: 80px;
            width: 220px;
            height: 40px;
            mix-blend-mode: normal;
            border-radius: 10px;
            font-family: Ubuntu-Regular;
            font-size: 18px;
            padding: 0;
        }
        /* .bannerBtn2 {
            margin-left: 65px;
            background: #1f3bad;
            border: 2px solid #1f3bad;
            font-style: white;
        } */
    }
</style>