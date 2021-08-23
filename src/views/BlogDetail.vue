<template>
  <div class="container">
    <div class=" catalog ">
      <ul>
        <li>目录</li>
        <li>最受欢迎的图标</li>
        <li>鸽子的用图</li>
        <li>获取数据的路径</li>
        <li>结语</li>
        <li>关注</li>
      </ul>
    </div>
    <div class="content">
      <h1 style="color：#233062">如何进入字节跳动？</h1>
      <div class="info">
        <span>懒洋洋</span>|
        <span>2021.08.21</span>|
        <span>200</span>
      </div>
      <div id="main">
      </div>
    </div>
    <div>底部元素</div>
  </div>
</template>

<script>
import { getExploreInfo } from '../api/Expliore'
import {onMounted, reactive, toRefs} from "vue"
import {useRoute} from 'vue-router'
export default {
  data() {
    return {

    }
  },
  components: {

  },
  setup(){
    const route = useRoute()
    const info = reactive({
      author:"",
      title:"",
      content:"",//标题内容
      c_type:"",//文章类型
      pic_type:"",//图表类型
      img_url:"",//封面链接
      content_main:"",//文章html
    })

    onMounted(()=>{
      console.log(route.params.id )
      getExploreInfo().then(res=>{
        document.getElementById('main').innerHTML=res.result[0].content_main
      })
    })
    return {
      ...toRefs(info)
    }
  }
}
</script>

<style scoped lang="less">
.container{
  width:70%;
  margin: 5vh auto;
  border:solid 1px #CDCFD4;
  border-top: none;
  height: auto;

  .content{
    .info{
      margin: 2vh 1vw;
      color: #CDD7E5;
      span{
        margin: 0vw 15px;
      }
    }
  }
  .main{
    margin: 0 auto;
    text-align: center;
    width: 80%;
    margin-top: 5vh;
  }
}
  .catalog{
    ul li{
      margin: 1vh 1vw;
      list-style: none;
    }
    height: 300px;
    width: 10vw;
    margin-left: -12vw;
    position: fixed;
  } 
</style>
