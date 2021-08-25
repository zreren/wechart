<template>
  <div class="container">
    <div>
      <!-- 下拉框 -->
        <div class="select">
          <el-select v-model="selectNode" placeholder="选择分类" size="mini">
              <el-option v-for="(item,index) in this.dataList2"
              :key="index"
              :value="item.value"
              :label="item.name"
              >{{item.name}}</el-option>
          </el-select>
      </div>
      <!-- 标题栏 -->
      <div class="bar">
          <ul>
              <router-link class="liStyle" tag="li" :to="`/explore/${item.value}`" v-for="(item,index) in this.dataList" :key="index"> {{item.name}}</router-link>
          </ul>
      </div>
       <!-- 搜索框 -->
      <div class="searchpack">
        <div class="search">
              <input type="text" class="input" placeholder="搜索关键字">  
        </div>  
        <i class="el-icon-search" style=""></i>
     </div>
    </div>
     <div class="divBody">
       <router-view><Body></Body></router-view>
     </div>
  </div>
</template>

<script>
import Body from './body.vue'
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
        ],
      dataList2:[
        {value:1,name:"流行"},
        {value:2,name:"最新"}
      ],
      selectNode:""
    }
  },
  components: {
    Body,
  }
}
</script>

<style scoped lang="less">
* ::-webkit-scrollbar {display:none}
.container{
    width: 80%;
    margin: 0 auto;
    height: auto;
    min-width: 700px;
    text-align: left;
    .select{
      display: inline-block;
      width: 10vw;
    }
    .bar{
      height: 5vh;
      display: inline-block;
      margin-left: 2vw;
      height: 100%;
        ul{ 
            list-style: none;
            display: flex;
            justify-content:center;
            align-items:center;
           .liStyle{
               text-decoration: none;
              margin: 1vh 1vw;
              color: #A9B4C1;
            }
            .liStyle:hover{
                  color: #2F80ED;
              }
        }
    }
    .searchpack{
      margin-left: 30px;
        height:5vh;
        width: auto;
        align-items: center;
        display: inline-flex;
        .search{
        height: 25px;
        width: 15vw;
        border-radius:15px;
        background: #EEF2F8;
        text-align: center;
        .input{
            text-align: right;
            color: #757575;
            font-size: 12px;
            width: 85%;
            height:100%;
            display: inline-block;
            background: #EEF2F8;
            outline: none;
        }
    }
    }
    .divBody{
      display: flex;
      width: 100%;
      margin: 1vh auto;
      height: 80vh;
      overflow: scroll;
    }
}
</style>