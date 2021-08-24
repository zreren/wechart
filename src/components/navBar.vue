<template>
    <div v-if="$route.name !== 'Home'" class="zhanwei"></div>
    <main class="header">
    <div class="homeHeader" v-show="isShow">
    <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item  @click="$router.push('/')" index="1">主页</el-menu-item>    
    <el-menu-item  @click="$router.push('/explore')" index="2">发现</el-menu-item>
    <el-menu-item  @click="$router.push('/community')" index="3">广场</el-menu-item>
    <el-menu-item  @click="$router.push('/writing')" index="4">分享啦~</el-menu-item>
    </el-menu>
    <div class="userImg"></div>
    <el-button style="margin-right:14px" size="medium"  type="primary" round @click="$router.push('/edit')">制图</el-button>
    </div>
    <el-button  v-show="!isShow" style="margin-right:14px" size="medium"  type="primary" round @click="share">分享</el-button>
    <el-button  v-show="!isShow" style="margin-right:14px" size="medium"  type="primary" round @click="download">保存</el-button>
    <div class="userImg" v-show="!isShow"></div>
    <router-link to="/" class="logo">WeChart</router-link>
    </main>
</template>

<script>
import { onBeforeMount, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import {shareSave} from '../http/share'
import downloadFile from '../common/download/download.js'
export default {
    name:'navBar',
    setup() {
        const route = useRoute()
        const store = useStore()

        const activeIndex = ref('0');
        const isShow = ref(true)
        const routerNow = {
                    Home:'1',
                    Explore:'2',
                    Community:'3'
                }
        /**
         * 判断当前页面是否需要显示主页，发现，广场
         * 根据路由变化更改当前el-menu的index
         */
        watch(
            ()=>route.name,
            ()=>{
                if( new RegExp('(^Edit)|ChartType|ChartEdit').test(route.name))
                isShow.value = false
                else
                isShow.value = true

                if(routerNow[route.name])
                activeIndex.value = routerNow[route.name]
            }
        )

        /**
         * 优化刷新时的el-menu的index跳转 
         */
        onBeforeMount(()=>{
            if(routerNow[route.name])
                activeIndex.value = routerNow[route.name]
        })

        /**
         * 保存功能
         */
        function download() {downloadFile('测试.png',store.state.myChart.getDataURL())}

        /**
         * 分享功能
         */
        const shareData = reactive({
            imageUrl:'default',
            title:'default',
            description:'default',
            tags:[],
        })
        async function share() {
            try{
               let res = await shareSave(shareData)
               console.log(res)
            }catch(error)
            {
                console.error(error)
            }
        }

        return {
        activeIndex,
        isShow,
        download,
        share
        };
    }
}
</script>

<style  lang = "less" scoped>
    a {
        text-decoration: none;
    }
    .zhanwei {
        height: 60px;
    }
    .header {
        z-index: 7;
        position: fixed;
        display: flex;
        flex-direction: row-reverse;
        top: 0;
        align-items:center;
        background: white;
        height: 60px;
        width: 100%;
        .logo {
            flex:1;
            color: #2F80ED;
            text-align: left;
            font-size: 24px;
            margin-left: 18px;
        }
        .el-menu-demo {
            border: 0;
        }
        .homeHeader {
            display: flex;
            align-items: center;
        }
        .userImg {
            height: 34px;
            width: 34px;
            border-radius: 50%;
            background: #C4C4C4;
            margin-left: 28px;
            margin-right: 28px;
        }
        .toEdit {
            height: 36px;
        }
    }
</style>