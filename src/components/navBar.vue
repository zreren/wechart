<template>
    <div v-if="$route.name !== 'Home'" class="zhanwei"></div>
    <main class="header">
    <div class="homeHeader" v-show="isShow">
    <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item  @click="$router.push('/')" index="1">主页</el-menu-item>    
    <el-menu-item  @click="$router.push('/explore')" index="2">发现</el-menu-item>
    <el-menu-item  @click="$router.push('/community')" index="3">广场</el-menu-item>
    </el-menu>
    <el-tooltip v-if="isSignIn" :content="'你已登录:'+userName" placement="bottom" effect="light">
    <img   class="isImg" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/2dedbafcccf601c4_1630335837047.png" alt="">
    </el-tooltip>
    <div  v-else class="userImg" @click="logIn()"></div>
    <el-button style="margin-right:14px" size="medium"  type="primary" round @click="$router.push('/edit')">制图</el-button>
    </div>
    <el-button  v-show="!isShow" style="margin-right:14px" size="medium"  type="primary" round @click="share" id="shareBtn">分享</el-button>
    <el-button  v-show="!isShow" style="margin-right:14px" size="medium"  type="primary" round @click="download">保存</el-button>
    <div  @click="logIn()" class="userImg" v-show="!isShow && !isSignIn"></div>
    <el-tooltip  v-if="!isShow && isSignIn" :content="'你已登录:'+userName" placement="bottom" effect="light">
    <img  class="isImg" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/2dedbafcccf601c4_1630335837047.png" alt="">
    </el-tooltip>
    <router-link to="/" class="logo">WeChart</router-link>
    </main>
    

    <el-dialog title="作品分享" v-model="dialogFormVisible">
        <el-form :model="shareData">
        <el-form-item >
            <el-image style="width:80%;"  :src="shareDialog.img" :fit="scale-down"></el-image>
        </el-form-item>
        <el-form-item label="标题">
            <el-input v-model="shareDialog.title" autocomplete="off" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="标签">
            <el-select-v2
                v-model="shareDialog.tags"
                :options="tags"
                placeholder=" "
                style="width: 100%;"
                multiple
            />
        </el-form-item>
        <el-form-item label="内容">
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
</template>

<script>
import { onMounted, onUpdated, reactive, ref, watch } from 'vue'
import { ElNotification } from 'element-plus';
import { useRoute, useRouter} from 'vue-router'
import { useStore } from 'vuex'
import {shareSave} from '../http/share'
import judgeExpired from '../http/judgeExpired'
import { ElMessage } from 'element-plus'
import downloadFile from '../common/download/download.js'
export default {
    name:'navBar',
    setup() {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()
        const activeIndex = ref('0');
        const isShow = ref(true)
        const routerNow = {
                    Home:'1',
                    Explore:'2',
                    Community:'3',
                    BlogDetail:'2',
                }

        /**
         * 判断登录
         */
        const isSignIn = ref(false)
        const userName = ref('')
        onUpdated(async ()=>{
            try{
                const res = await judgeExpired({token:localStorage.getItem('token')})
                if(res.status === '403')
                {
                    if(res.result)
                    if(res.result.data)
                    if(res.result.data.message === 'jwt expired'){
                    ElMessage.warning('登陆过期了哦')
                    store.state.isSignIn = false
                    isSignIn.value = false
                }}
                else if(res.status === '200'){
                    store.state.isSignIn = true
                    userName.value = res.result.userName
                }
                else{
                    console.log('judgeExpiredOthersResponse:'+res)
                    store.state.isSignIn = false
                    isSignIn.value = false
                }
            }
            catch(err) {
                ElMessage.error('出错啦！')
            }
        })
        watch(()=>store.state.isSignIn,()=>{
            isSignIn.value = store.state.isSignIn
        })

        /**
         * 判断当前页面是否需要显示主页，发现，广场
         * 根据路由变化更改当前el-menu的index
         */
        watch(
            ()=>route.name,
            ()=>{
                if( new RegExp('(^Edit)|ChartType|ChartTheme').test(route.name))
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
        onMounted(()=>{
            if(routerNow[route.name])
            activeIndex.value = routerNow[route.name]   
        })
    

        /**
         * 保存功能
         */
        function download() {downloadFile('chart.png',store.state.myChart.getDataURL())}



        /**
         * 更改标签
        */
        const tags = ref([
            {value:'经济',label:'经济'},
            {value:'农业',label:'农业'},
            {value:'气候',label:'气候'},
            {value:'教育',label:'教育'},
            {value:'能源',label:'能源'},
            {value:'环境',label:'环境'},
            {value:'性别',label:'性别'},
            {value:'健康',label:'健康'},
            {value:'基础建设',label:'基础建设'},
            {value:'社会保障',label:'社会保障'},
        ])
        /**
         * 分享功能
         */
        const shareDialog = reactive({
        title:'',
        img:'',
        description:'',
        tags:[]
        });
        const dialogFormVisible = ref(false)
        const shareData = reactive({
            imageUrl:'default',
            title:'default',
            description:'default',
            tags:[],
            collect:0,
            getNum:0,
            userId:'3035816700@qq.com',
            userName:'Aei'
        })
        async function share() {     
            if(!store.state.isSignIn){
                ElMessage.warning('还未登录哦')
                return
            }
            try{
                const res = await judgeExpired({token:localStorage.getItem('token')})
                if(res.status === '403')
                if(res.result.data.message === 'jwt expired'){
                    ElMessage.warning('登陆过期了哦')
                    store.state.isSignIn = false
                    isSignIn.value = false
                    return
                }
                if(res.status === '200'){
                    shareData.userId = res.result.userId
                    shareData.userName = res.result.userName
                }
            }
            catch(err) {
                ElMessage.error('出错啦！')
            }
            document.getElementById('shareBtn').disabled = true
            shareDialog.img = await store.state.myChart.getDataURL()
            document.getElementById('shareBtn').disabled = false
            dialogFormVisible.value = true
        }
        async function toShare() {
            document.getElementById('toShareBtn').disabled = true
            shareData.imageUrl = shareDialog.img
            shareData.title = shareDialog.title
            shareData.description = shareDialog.description
            shareData.tags = shareDialog.tags
            try{
               let res = await shareSave(shareData)
               console.log(res)
               ElNotification({
                title: '分享成功',
                message: '分享内容可在分享大厅查看',   
                position: 'bottom-right'
                });
                shareDialog.title = ''
                shareDialog.description = ''
            }catch(error)
            {
                console.error(error)
                ElNotification({
                title: '分享失败',
                message: '分享过程出现意外',
                type: 'warning',
                position: 'bottom-right'
                });
            }
            document.getElementById('toShareBtn').disabled = false
            dialogFormVisible.value = false
        }

        /**
         * 登录
         */
        async function logIn() {
            router.push('/login')
        }

        return {
        activeIndex,
        isShow,
        download,
        share,
        shareDialog,
        tags,
        dialogFormVisible,
        toShare,
        isSignIn,
        logIn,
        userName
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
            cursor: pointer;
        }
        .isImg {
            height: 34px;
            background: white;
            margin-left: 28px;
            margin-right: 28px;
        }
        .toEdit {
            height: 36px;
        }
    }
    .el-select-v2__placeholder.is-transparent{
        transform: translateY(50%) translateX(-98%);
    }

</style>