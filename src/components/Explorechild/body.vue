<template>
  <div class="container">
      <!-- 内容块 -->
      <div @click=" textLink(item._id)" class="content" id='1' v-for="item in infoData" :key="item._id">
          <div class="showImage">
              <img :src="item.img_url" alt="" >
          </div>
          <div class="showMessage"  >
              <div class="title">
                  <span>{{ item.autho}}</span>| <span>{{item.createdAt}}</span>|<span>{{item.c_type}}</span>|<span>图表类型：{{item.pic_type}}</span>
             </div>
              <div class="info">
                  <h3>{{item.title}}</h3>
                  <p style="margin-top:2vh;font-size:16px">{{item.content}}</p>
              </div>
              <div class="data">
                  <i class="el-icon-star-on"></i>{{item.collect}} <i style="margin-left:10px" class="el-icon-view"></i>{{item.getNum}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {onMounted,toRefs,reactive} from "vue"
import {  getExpore } from "../../api/Expliore"
import {useRouter} from 'vue-router'
export default {
  data () {
    return {
        dataList:['所有','数据可视化','图表类型','图标组合','学习资源','技术支持'],
        selectNode:"",
        search:""
    }
  },
  components: {


  },
  setup(){
      const router = useRouter()
      const data = reactive({
          infoData:{}
      })
      onMounted(()=>{
          getExpore().then(res=>{
              data.infoData= res.result
          })
      })
      function textLink(id){
         router.push({path:`/blog/detail/${id}` })
      }
      return{
          textLink,
          ...toRefs(data)
      }
  }, 
  methods: {
     
  }
}
</script>

<style scoped lang="less">
.container::-webkit-scrollbar {display:none}
.container{
    text-align: left;
    width: 70%;
    margin: 1vh auto;
    height: 80vh;
    overflow: scroll;

    .content{
        overflow: hidden;
        margin-top: 1vh;
        width: 100%;
        display: flex;
        align-items: center;
       justify-items: center;
        height:auto;
        .showImage:hover {cursor:pointer}
        .showImage{
            height: 150px;
            width:30%;
            text-align: center;
            img{
                height: 100%;
                width: auto;
                max-width: 100%;
            }
        }
        .showMessage > *:hover{cursor:pointer}
        .showMessage{
            width: 70%;
            color: #233062;
            .title{
                color: #A9B4C1;
                padding: 1vh 1vw;
                span{
                    margin: 0 5px;
                }
            }
            .info{
                 padding: 1vh 1vw;
            }
            .data{
                padding: 1vh 1vw;
            }
        }
    }

}

</style>