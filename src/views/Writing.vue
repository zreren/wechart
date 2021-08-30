<template>
  <div class="container">
      <!-- inpput框 -->
    <div class="imput">
      <div class="title">
            作者名字:
            <el-input v-model="author" size="mini" style="width:35vw;"></el-input>
        </div>
        <div class="title">
            文章标题:
            <el-input v-model="title" size="mini" style="width:35vw;"></el-input>
        </div>
        <div  class="title">
            标题内容:
            <el-input v-model="content" size="mini" style="width:35vw;"></el-input>
        </div>
        <div  class="title">
          文章封面:
            <el-input v-model="img_url" size="mini" style="width:35vw;"></el-input>
        </div>
        <div  class="title">
            文章类型:
          <el-select size="mini" v-model="c_type" multiple placeholder="请选择" style="width:35vw;">
            <el-option
              v-for="item in  dataList" :key="item.value"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
        </div>
        <div  class="title">
            图表类型:
            <el-select size="mini" v-model="pic_type" multiple placeholder="请选择" style="width:35vw;">
              <el-option
                v-for="item in   typeList" :key="item.value"
                :label="item.name"
                :value="item.name">
              </el-option>
             </el-select>
        </div>
    </div>
    <el-button @click="editorSubmit" type="primary" style=" width:150px">提交</el-button>
     
    <div>
        <div id="editor"></div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import { SubEditor}  from "../api/Expliore"
import xss from 'xss'
import Editor from 'wangeditor'
import {onMounted, reactive, toRefs,} from "vue"

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
  },
  setup(){
   
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
      editor.create()
    });
    const editorSubmit=()=>{
      if(infoData.author&&infoData.title&&infoData.content&&infoData.c_type&&infoData.img_url&&infoData.pic_type&&infoData.content_main!=""){
        SubEditor({
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
    
    return{
      editorSubmit,
      ...toRefs(infoData)
    }
  }
  
}
</script>

<style scoped lang="less">
.container{
    width: 80%;
    margin: 2vh auto;
    text-align: left;
    .input{
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
        .title{
        display: flex;
        margin: 10px;
        padding: 10px;
        el-input{
          display: block;
          padding: 8px;
        }
    }
    }
  
}
</style>