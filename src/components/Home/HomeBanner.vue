<template>
    <div style="height:100vh;">
    <header class="banner">
        <img class="bannerImage" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/27a1f15016432b02_1629273922386.png" alt="bannerBackgroudImage">
        <div class="mask"></div>
        <div class="content">
            <h1>Produce your data quicker and simpler</h1>
            <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h2>
            <el-button class="bannerBtn1" @click="$router.push('/signup')">立即注册</el-button>
            <el-button class="bannerBtn2" @click="$router.push('/edit')">绘制图表</el-button>
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
    @import '/common/font/font.css';
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
            opacity: 0.8;
        }
        .content {
            position: absolute;
            width: 100vw;
            padding: 240px;
            top: 88px;
            font-family: Ubuntu-Regular;
            font-style: normal;
            font-weight: bold;
            /* or 75% */
            text-align: center;
            color: #eceefa;
            h1 {
                margin-bottom: 18px;
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
        .bannerBtn2 {
            margin-left: 65px;
            background: #233062;
            border: 2px solid #233062;
        }
    }
</style>