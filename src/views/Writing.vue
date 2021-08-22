<template>
  <div class="container">
      <!-- inpput框 -->
    <div style="margin:5vh 0;">
        <div class="title">
            <h3>标题:</h3>
            <el-input size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
        <div  class="title">
            <h3>标题内容:</h3>
            <el-input size="mini" style="width:35vw;margin: 0 2vw"></el-input>
        </div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>
    <!-- 显示框测试 -->
    <div>
        <textarea id="text1" style="width:100%; height:200px;"></textarea>
    </div>
    <!-- 富文本编辑器 -->
    <div>
        <div id="editor" class="editor"></div>
    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import {onMounted} from "vue"
export default {
  data() {
    return {
        text:""
    }
  },
  components: {

  },
  setup(){
    let html= ""
    onMounted(()=>{
      {
          var editor = new Editor('#editor') 
        editor.config.height = 500//设置高度
        editor.config.placeholder = '开始编辑文章啦~'
        const $text1 = $('#text1')
        editor.config.onchange = function (html) {
        // 第二步，监控变化，同步更新到 textarea
        $text1.val(html)
        console.log(html)
        }
        editor.create()
    }
    })

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