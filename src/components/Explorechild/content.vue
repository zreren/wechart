<template>
  <div class="container">
    <div>
      <!-- 下拉框 -->
      <div class="select">
        <el-select @change="changeSort" v-model="selectNode" placeholder="选择分类" size="mini">
          <el-option
            v-for="(item, index) in this.dataList2"
            :key="index"
            :value="item.value"
            :label="item.name"
            >{{ item.name }}</el-option
          >
        </el-select>
      </div>
      <!-- 标题栏 -->
      <div class="bar">
        <ul>
          <li
            class="liStyle"
             v-for="(item, index) in this.dataList"
            :key="index"
            @click="changeType(item.value)"
          >
            {{ item.name }}</li>
        </ul>
      </div>
      <!-- 搜索框 -->
      <div class="searchpack">
        <div class="search">
          <input type="text" class="input" placeholder="搜索关键字" v-model="searchText"/>
        </div>
        <i class="el-icon-search" style=""></i>
      </div>
    </div>
    <div v-if="!show">
       这是一个加载页面
    </div>
    <div class="divBody" v-show="show">
      <div class="bodyContainer">
        <!-- 内容块 -->
        <div
          @click="textLink(item._id)"
          class="content"
          id="1"
          v-for="item in searchList"
          :key="item._id"
        >
          <div class="showImage">
            <img :src="item.img_url" alt="" />
          </div>
          <div class="showMessage">
            <div class="title">
              <span>{{ item.autho }}</span>|
               <span>{{ item.createdAt }}</span>|
               <span>{{ item.c_type }}</span>|
               <span>图表类型：{{ item.pic_type }}</span>
            </div>
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p style="margin-top: 2vh; font-size: 16px">{{ item.content }}</p>
            </div>
            <div class="data">
              <i class="el-icon-star-on"></i>{{ item.collect }}
              <i style="margin-left: 10px" class="el-icon-view"></i
              >{{ item.getNum }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, toRefs, reactive, ref, computed } from "vue";
import { getExpore } from "../../api/Expliore";
import { useRouter } from "vue-router";
import Fuse from 'fuse.js';
export default {
  data() {
    return {
   
      dataList: [
        {
          value: "all",
          name: "所有",
        },
        {
          value: "views",
          name: "数据可视化",
        },
        {
          value: "pic",
          name: "图表类型",
        },
        {
          value: "icon",
          name: "图标组合",
        },
        {
          value: "wealth",
          name: "学习资源",
        },
        {
          value: "technology",
          name: "技术支持",
        },
      ],
      dataList2: [
        { value: 'pop', name: "流行" },
        { value: 'new', name: "最新" },
      ],
      selectNode:''
    };
  },
  components: {},
 
  setup() {

    const router = useRouter();
    const data = reactive({
      infoData: {},
      show:false,
    });
    let searchText=ref('');
    onMounted(() => {
     
      getExpore({}).then((res) => {
        data.infoData = res.result;
        console.log(res.result);
          data.show=!data.show
      });
    });
    //使用fuse组件实现模糊搜索
    const searchList=computed(()=>{
      if(searchText.value.trim()){
        return (new Fuse(data.infoData,{keys:['title','author']}).search(searchText.value.trim()).map(e=>e.item))
      }
      else{
        return data.infoData;
      }
    })
    function textLink(id) {
      router.push({ path: `/blog/detail/${id}` });
    }
    //改变类型从接口获取数据
   const changeType =(value)=>{
      getExpore({type:value}).then((res) => {
        data.infoData = []
        data.infoData = res.result;
      });
  
  }
    const changeSort=(value)=>{
      if(value==="pop"){
        const fn =(a,b)=>{
        return a.getNum-b.getNum
      }
      data.infoData=data.infoData.sort(fn)
      }
      if(value==='new'){
         const fn =(a,b)=>{
        return a.updatedAt>b.updatedAt?1:-1
      }
      data.infoData=data.infoData.sort(fn)
      }
    }
  return {
    changeSort,
    changeType,
      textLink,
      searchText,
      ...toRefs(data),
      searchList
    };
  },
};
</script>

<style scoped lang="less">
* ::-webkit-scrollbar {
  display: none;
}
.container {
  width: 80%;
  margin: 0 auto;
  height: auto;
  min-width: 700px;
  text-align: left;
  .select {
    display: inline-block;
    width: 10vw;
  }
  .bar {
    height: 5vh;
    display: inline-block;
    margin-left: 2vw;
    height: 100%;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      .liStyle {
        text-decoration: none;
        margin: 1vh 1vw;
        color: #c5cddf;
      }
      .liStyle:hover  {
        cursor: pointer;
        color: #2f80ed;
      }
    }
  }
  .searchpack {
    margin-left: 30px;
    height: 5vh;
    width: auto;
    align-items: center;
    display: inline-flex;
    .search {
      height: 25px;
      width: 15vw;
      border-radius: 15px;
      background: #eef2f8;
      text-align: center;
      .input {
        text-align: right;
        color: #757575;
        font-size: 12px;
        width: 85%;
        height: 100%;
        display: inline-block;
        background: #eef2f8;
        outline: none;
      }
    }
  }
  .divBody {
    display: flex;
    width: 100%;
    margin: 1vh auto;
    height: 80vh;
    overflow: scroll;

    .bodyContainer {
      text-align: left;
      width: 70%;
      margin: 1vh auto;
      height: 80vh;
      overflow: scroll;

      .content {
        overflow: hidden;
        margin-top: 1vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-items: center;
        height: auto;
        .showImage:hover {
          cursor: pointer;
        }
        .showImage {
          height: 150px;
          width: 30%;
          text-align: center;
          img {
            height: 100%;
            width: auto;
            max-width: 100%;
          }
        }
        .showMessage > *:hover {
          cursor: pointer;
        }
        .showMessage {
          width: 70%;
          color: #233062;
          .title {
            color: #c9d0e1;
            padding: 1vh 1vw;
            span {
              margin: 0 5px;
            }
          }
          .info {
            padding: 1vh 1vw;
          }
          .data {
            padding: 1vh 1vw;
          }
        }
      }
    }
  }
}
</style>