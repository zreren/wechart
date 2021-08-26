<template>
  <div class="container">
    <div class=" catalog ">
      <ul >
        <li>目录</li>
        <li v-for="item in catalog" :key="item"><a style="color：#233062" :href="'#'+item.id">{{item.text}}{{item.id}}</a></li>
      </ul>
    </div>
    <div class="content">
      <h1 style="color：#233062">{{title}}</h1>
      <div class="info">
        <span>{{author}}</span>|
        <span>{{creatTime}}</span>|
        <span><i class="el-icon-star-on"></i>&nbsp;&nbsp;{{collect}}</span>
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
      creatTime:"",
      collect:0,
      catalog:[]
    })

    onMounted(()=>{
  
      getExploreInfo({'id':`${route.params.id}`}).then(res=>{
        document.getElementById('main').innerHTML=res.result[0].content_main
        console.log(res.result)
        info.author=res.result[0].autho
        info.title=res.result[0].title
        info.content=res.result[0].content
        info.c_type=res.result[0].c_type
        info.pic_type=res.result[0].pic_type
        info.creatTime=res.result[0].updatedAt
        info.collect=res.result[0].collect
        info.collect=res.result[0].collect
        info.catalog=res.result[0].tagArr
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
  #main{
    margin: 0 auto;
    text-align: left;
    width: 80%;
    margin-top: 5vh;
    overflow: hidden;
   
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
