<template>
  <div class="container">
      <!-- 内容块 -->
      <div class="content" id='1' v-for="item in infoData" :key="item._id">
          <div class="showImage">
              <img src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/8313889093d1a638_1629530133006.png" alt="" height="150">
          </div>
          <div class="showMessage" @click=" textLink" >
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
import { getExplioreInfo } from "../../api/Expliore"
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
      const data = reactive({
          infoData:{}
      })
      onMounted(()=>{
          getExplioreInfo().then(res=>{
              console.log(res.result)
              data.infoData= res.result
          })
      })
      return{
          ...toRefs(data)
      }
  }, 
  methods: {
      textLink(){
         this.$router.push({path:'/blog/detail',params: { id: this.id } })
      }
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
        display: block;
        margin-top: 1vh;
        width: 100%;
        height:auto;
        .showImage:hover {cursor:pointer}
        .showImage{
            float: left;
        }
        .showMessage > *:hover{cursor:pointer}
        .showMessage{
            float: left;
            color: #233062;
            .title{
                color: #C9D0E1;
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