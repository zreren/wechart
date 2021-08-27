<template>
  <div class="container">
    <div class=" catalog ">
        <ul >
          <li>目录</li>
          <li v-for="item in catalog" :key="item"
           @click="changeHash(`${item.id}`)"
           >{{item.text}}</li>
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
   <div class="bottom">
     <div class="title"><h2>相关文章：</h2></div> 
     <bodyBottom></bodyBottom>
     </div>
  </div>
</template>

<script>
import bodyBottom from '../components/Explorechild/body' 
import { getExploreInfo } from '../api/Expliore'
import {onMounted, reactive, toRefs} from "vue"
import {useRoute} from 'vue-router'
export default {
  data() {
    return {
    //   liList1:{
    //   'font-size': '14px',
    //   'text-align':'left',
    //   margin:'1vh 1vw',
    //   color: '#58607D'
    // },
    // liList2:{
    //    'font-size': '14px',
    //   'text-align':'left',
    //   margin:'1vh 1vw',
    //   color: 'red'
    // }
    }
  },
  components: {
    bodyBottom
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
    //  目录点击事件
      const changeHash=(idName)=>{
      //   console.log(idName);
      //   console.log( document.querySelector());
        document.querySelector(`[id='${idName}']`).scrollIntoView(true);
     }

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
       changeHash,
      ...toRefs(info)
    }
  }
}
</script>

<style scoped lang="less">
.container{
  margin-top: 5vh;
  padding: 5vh 0;
  width:100vw;
  height: auto;
  .content{
    margin: 0 auto;
    width: 65%;
    border:solid 1px #CDCFD4;
    border-top: none;
      #main{
        margin: 0 auto;
        text-align: left;
        width: 90%;
        margin-top: 5vh;
        overflow: hidden;
        img{
          max-width: 100% !important;
          height: auto;
        }
      }
    .info{
      margin: 4vh 1vw;
      color: #CDD7E5;
      span{
        margin: 0vw 15px;
      }
    }
  }
   .catalog{
      /* 去除滚动条- 兼容火狐和IE10+ */
      scrollbar-width: none;
      -ms-overflow-style: none; 
  }

   .catalog::-webkit-scrollbar {
      /* Chrome去除滚动条 */
      display: none;
  }
  .catalog{
    overflow: auto;
    position: fixed;
    height:60vh;
    width: 12vw;
    margin-left:4vw;
    li:hover {cursor:pointer}
    li{
      font-size: 14px;
      text-align: left;
      color: #555785;
      margin-top: 1vh;
    }
  } 
  .bottom{
    margin: 0 auto;
    height: 500px;
    width: 65%;
    .title{
      margin-top: 3vh;
      text-align: left;
      color: #555785;
    }
  }
}

 
</style>
