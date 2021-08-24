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
    <el-button  v-show="!isShow" style="margin-right:14px" size="medium"  type="primary" round @click="share" id="shareBtn">分享</el-button>
    <el-button  v-show="!isShow" style="margin-right:14px" size="medium"  type="primary" round @click="download">保存</el-button>
    <div class="userImg" v-show="!isShow"></div>
    <router-link to="/" class="logo">WeChart</router-link>
    </main>
    

    <el-dialog title="作品分享" v-model="dialogFormVisible">
        <el-form :model="shareData">
        <el-form-item >
            <el-image style="width:80%;"  :src="shareDialog.img" :fit="scale-down"></el-image>
        </el-form-item>
        <el-form-item label="标题">
            <el-input v-model="shareDialog.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签">
            <el-check-tag @change="changeTag(0)" :checked="tags[0].isCheck" style="margin-right: 8px;">{{tags[0].name}}</el-check-tag>
            <el-check-tag @change="changeTag(1)" :checked="tags[1].isCheck">{{tags[1].name}}</el-check-tag>
        </el-form-item>
        <el-form-item label="活动名称">
            <el-input v-model="shareDialog.description"  type="textarea" :rows="4" placeholder="请输入内容"></el-input>
        </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button id="toShareBtn" type="primary" @click="toShare">确 定</el-button>
        </span>
        </template>
    </el-dialog>


    {{ptext}}
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
         * 更改标签
        */
        const tags = ref({
            0:{name:'经济',isCheck:false},
            1:{name:'农业',isCheck:false}
        })
        function changeTag(index) {
            tags.value[index].isCheck = !tags.value[index].isCheck
        }   
        /**
         * 分享功能
         */
        const shareDialog = reactive({
        title:'',
        img:'',
        description:'',
        });
        const dialogFormVisible = ref(false)
        const shareData = reactive({
            imageUrl:'default',
            title:'default',
            description:'default',
            tags:[],
            userId:'1',
            userName:'Aei'
        })
        async function share() {            
            document.getElementById('shareBtn').disabled = true
            shareDialog.img = await store.state.myChart.getDataURL()
            document.getElementById('shareBtn').disabled = false
            dialogFormVisible.value = true
        }
        async function toShare() {
            document.getElementById('toShareBtn').disabled = true
            for(let index = 0; tags.value[index]; index++){
                if(tags.value[index].isCheck)
                {
                    shareData.tags.push(tags.value[index].name)
                }   
                
            }
            shareData.imageUrl = shareDialog.img
            shareData.title = shareDialog.title
            shareData.description = shareDialog.description
            shareData
            try{
               let res = await shareSave(shareData)
               console.log(res)
            }catch(error)
            {
                console.error(error)
            }
            document.getElementById('toShareBtn').disabled = false
            dialogFormVisible.value = false
        }


        return {
        activeIndex,
        isShow,
        download,
        share,
        shareDialog,
        tags,
        changeTag,
        dialogFormVisible,
        toShare
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