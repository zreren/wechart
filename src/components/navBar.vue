<template>
    <div v-if="$route.name !== 'Home'" class="zhanwei"></div>
    <main class="header">
    <home-header class="homeHeader" v-show="isShow">
    <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item  @click="$router.push('/')" index="1">主页</el-menu-item>    
    <el-menu-item  @click="$router.push('/explore')" index="2">发现</el-menu-item>
    <el-menu-item  @click="$router.push('/community')" index="3">广场</el-menu-item>
    </el-menu>
    <div class="userImg"></div>
    <el-button style="margin-right:28px" size="medium"  type="primary" round @click="$router.push('/edit')">制图</el-button>
    </home-header>
    <router-link to="/" class="logo">WeChart</router-link>
    </main>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
    name:'navBar',
    setup() {
        const route = useRoute()
        
        const activeIndex = ref('1');
        const isShow = ref(true)
        
        
        /**
         * 判断当前页面是否需要显示主页，发现，广场
         */
        watch(
            ()=>route.name,
            ()=>{
                if( new RegExp('(^Edit)|ChartType|ChartEdit').test(route.name))
                isShow.value = false
                else
                isShow.value = true
            }
        )
        return {
        activeIndex,
        isShow
        };
    }
}
</script>

<style  lang = "less" scoped>
    a {
        text-decoration: none;
    }
    .zhanwei {
        height: 66px;
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