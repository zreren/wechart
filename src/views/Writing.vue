<template>
  <div class="container">
      <!-- inpput框 -->
    <div style="margin:5vh 0;">
      <div class="title">
            <h3>作者名字:</h3>
            <el-input v-model="author" size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
        <div class="title">
            <h3>文章标题:</h3>
            <el-input v-model="title" size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
        <div  class="title">
            <h3>标题内容:</h3>
            <el-input v-model="content" size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
        <div  class="title">
            <h3>文章封面:</h3>
            <el-input v-model="img_url" size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
        <div  class="title">
            <h3>文章类型:</h3>
            <el-input v-model=" c_type" size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
        <div  class="title">
            <h3>图表类型:</h3>
            <el-input v-model=" pic_type" size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
    </div>
    <el-button @click="editorSubmit">提交</el-button>
    <div>
        <div id="editor" class="editor"></div>
    </div>
  </div>
</template>

<script>
import { SubEditor}  from "../api/Expliore"
// import xss from 'xss'
import Editor from 'wangeditor'
import {onMounted, reactive, toRefs} from "vue"
export default {
  components: {
  },
  setup(){
    let infoData = reactive({
      author:"",
      title:"",
      content:"",//标题内容
      c_type:"",//文章类型
      pic_type:"",//图表类型
      img_url:"",//封面链接
      content_main:"",//文章html
    })
    // let htmlStr = ""
     
    onMounted(()=>{
      let editor = new Editor('#editor') 
      editor.config.height = 500//设置高度
      editor.config.placeholder = '开始编辑文章啦~'
      editor.config.onchange = function () {
      infoData.content_main = editor.txt.html()
      }
      editor.create()
    });
    const editorSubmit=()=>{
      SubEditor({
        author:infoData.author,
        content:infoData.content,
        title:infoData.title,
        c_type:infoData.c_type,//文章类型
        pic_type:infoData.pic_type,//图表类型
        img_url:infoData.img_url,//封面链接
        content_main: infoData.content_main,//文章html
        }).then((res)=>{
        console.log("提交成功" +res)
        })
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
    .title{
        display: flex;
        margin: 15px;
    }
}
</style>