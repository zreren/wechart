<template>
  <div class="container">
      <!-- inpput框 -->
    <div class="input">
      <!-- <div class="title">
            作者名字:
            <el-input v-model="userName" size="mini" style="width:35vw;"></el-input>
        </div> -->
        <div class="title">
            <el-input v-model="title" size="middle" style="width:80%;" placeholder="輸入您的文章标题"></el-input>
            <el-button  @click="editorSubmit" :disabled="btnDisable"  type="primary" style=" width:20%;height=30px;margin=30px">提交</el-button>
        </div>
        <div class="content">
            <el-input  placeholder="輸入您的文章简介" v-model="content" size="mini" ></el-input>
        </div>
      <!-- 
        <div  class="title">
          文章封面:
            <el-input v-model="img_url" size="mini" style="width:35vw;"></el-input>
        </div>
          </div> -->
          
        <div  class="title">
            
          <el-select size="mini" v-model="c_type" multiple placeholder="请选择文章类型" style="width:100%;margin-top:10px">
            <el-option
              v-for="item in  dataList" :key="item.value"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
        </div>
        <div  class="title">
          
            <el-select size="mini" v-model="pic_type" multiple placeholder="请选择图表类型" style="width:100%;margin-top:10px;margin-bottom:10px">
              <el-option
                v-for="item in   typeList" :key="item.value"
                :label="item.name"
                :value="item.name">
              </el-option>
             </el-select>
        </div>
        
    </div>
  
     
    <div>
        <div id="editor"></div>
    </div>
  </div>
  <writing-upload-img  v-if="uploadImg" />
</template>

<script>
import { ElMessage } from 'element-plus';
import { SubEditor}  from "../api/Expliore"
import xss from 'xss'
import Editor from 'wangeditor'
import {onMounted, reactive, ref, toRefs, watch, provide} from "vue"
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import judgeExpired from '../http/judgeExpired'
import WritingUploadImg from '../components/Writing/WritingUploadImg.vue';

export default {  
  data () {
    return {
     dataList:[
        {
         value:"all",
          name:"所有"
        },
        {
         value:"views",
          name:"数据可视化"
        },
        {
         value:"pic",
          name:"图表类型"
        },
        {
         value:"icon",
          name:"图标组合"
        },
        {
         value:"wealth",
          name:"学习资源"
        },
        {
         value:"technology",
          name:"技术支持"
        },
        {
         value:"other",
          name:"其他"
        },
        ],
    typeList:[
        {
         value:"zxt",
          name:"折线图"
        },
        {
         value:"szt",
          name:"树状图"
        },
        {
         value:"bzt",
          name:"饼状图"
        },
        {
         value:"sdt",
          name:"散点图"
        },
        {
         value:"gxt",
          name:"关系图"
        },
        {
         value:"other",
          name:"其他"
        },
        ],
    }
  },
  components: {
    WritingUploadImg
  },
  setup(){
        const store = useStore()
        const router = useRouter()
        const uploadImg = ref(false)
        const btnDisable = ref(false)



        window.onbeforeunload=function(e){     
          e = e || window.event;
          if (e) {
              // 兼容IE8和Firefox 4之前的版本
              e.returnValue = "当前内容未保存，确认离开？";
          }
          return "当前内容未保存，确认离开？";
        }
        //獲取用戶名
        // const isSignIn = ref(false)
        // const userName = ref('')
        // onUpdated(async ()=>{
        //     try{
        //         const res = await judgeExpired({token:localStorage.getItem('token')})
        //         if(res.status === '403')
        //         if(res.result.data.message === 'jwt expired'){
        //             ElMessage.warning('登陆过期了哦')
        //             store.state.isSignIn = false
        //             isSignIn.value = false
        //             return
        //         }
        //         if(res.status === '200'){
        //             store.state.isSignIn = true
        //             userName.value = res.result.userName
        //         }
        //     }
        //     catch(err) {
        //         ElMessage.error('出错啦！')
        //     }
        // })
    
   
  let infoData = reactive({
      author:"",
      title:"",
      content:"",//标题内容
      c_type:[],//文章类型
      pic_type:[],//图表类型
      img_url:"",//封面链接
      content_main:"",//文章html
      tagArr:[]
    })
    // let htmlStr = ""
    // var options = {
    //   whiteList: {
    //      h1: ['id', 'class', 'title', 'style', 'dir', 'lang', 'xml:lang'],
    //      h2: ['id', 'class', 'title', 'style', 'dir', 'lang', 'xml:lang'],
    //      h3: ['id', 'class', 'title', 'style', 'dir', 'lang', 'xml:lang'],
    //      h4: ['id', 'class', 'title', 'style', 'dir', 'lang', 'xml:lang'],
    //      h5: ['id', 'class', 'title', 'style', 'dir', 'lang', 'xml:lang'],
    //      h6: ['id', 'class', 'title', 'style', 'dir', 'lang', 'xml:lang'],
         
    //   },
    // };
    onMounted(()=>{
      let editor = new Editor('#editor') 
      editor.config.height =666//设置高度
      editor.config.showFullScreen = true //全屏
      editor.config.placeholder = '开始编辑文章啦~'
      editor.config.zIndex = 0
      //获取html
      editor.config.onchange = function () {
      infoData.content_main = editor.txt.html()
      }
      //获取tag
      editor.config.onCatalogChange = function (headList){
        infoData.tagArr=headList
      }
      editor.config.uploadImgShowBase64 = true
      editor.create()
    });
    const editorSubmit = async()=>{
      btnDisable.value = true
      try{
            const res = await judgeExpired({token:localStorage.getItem('token')})
            if(res.status === '403')
            {
                if(res.result)
                if(res.result.data)
                if(res.result.data.message === 'jwt expired'){
                ElMessage.warning('登陆过期了哦')
                store.state.isSignIn = false
                return
            }}
            else if(res.status === '200') infoData.author = res.result.userName
            else store.state.isSignIn = false
          }
          catch(err) {
              ElMessage.error('出错啦！')
              return
          }
      uploadImg.value = true
    }
    /**
     * 父子组件传值
     */
    const url = ref('')
    function geturl(str) {
      url.value = str
    }
    provide('geturl',geturl)
    watch(()=>url.value,()=>{
      btnDisable.value = false
      if(url.value != 'x') {
        infoData.img_url = url.value
        
        if(infoData.author&&infoData.title&&infoData.content&&infoData.c_type&&infoData.img_url&&infoData.pic_type&&infoData.content_main!=""){
        SubEditor({
          // text_main:infoData.content,
          author:xss(infoData.author),
          content:xss(infoData.content),
          title:xss(infoData.title),
          c_type:xss(infoData.c_type),//文章类型
          pic_type:xss(infoData.pic_type),//图表类型
          img_url:xss(infoData.img_url),//封面链接
          content_main:infoData.content_main,//文章html
          tagArr:infoData.tagArr,//
        }).then(()=>{
          ElMessage.success({
            message: '文章提交成功！',
            })
          router.push('/explore')
        }).catch(()=>{
          ElMessage.error({
            message: '后台接口连接错误~',
            })
        })
        }else{
            ElMessage.warning({
            message: '请填写完整文章内容~',
          });
        }

      }
    })

    return{
      editorSubmit,
      ...toRefs(infoData),
      uploadImg,
      btnDisable
    }
  }
  
}
</script>

<style scoped lang="less">
.container{
    width: 80%;
    margin: 2vh auto;
    text-align: left;
    .content {
      margin-top: 10px;
    }

}
</style>