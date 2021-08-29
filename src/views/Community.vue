<template>
  <div class="container">
    <div class="header">
      <!-- 下拉框 -->
      <div class="select">
        <el-select
          @change="changeSort"
          v-model="selectNode"
          placeholder="选择分类"
          size="mini"
        >
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
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="searchpack">
      <div class="search">
        <input
          type="text"
          class="input"
          placeholder="搜索关键字"
          v-model="searchText"
        />
      </div>
      <i class="el-icon-search" style=""></i>
    </div>
    <div class="divBody" v-show="show">
      <div
        class="view"
        v-for="item in infoData"
        :key="item"
        @click="clickItem(item._id)"
      >
        <div class="viewimg"><img :src="item.imageUrl" alt="" /></div>
        <div class="viewtext">
          <div>{{ item.title }}</div>
          <div>
            <i class="el-icon-star-on"></i>{{ item.collect
            }}<i class="el-icon-view"></i>{{ item.getNum }}
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="showDialog" width="90%" top="5vh">
      <div class="dialogMain">
        <!-- {{ dialogData }} -->
        <div class="dialogTitle">
          <!-- 头像 -->
          <div class="head">
            <div class="head-img"></div>
          </div>
          <!-- 作者信息 -->
          <div class="author">
            <div class="author_name"><h1>懒洋洋</h1></div>
            <div class="create_time">
              <span style="font-size: 16px">发表时机：2021/08/29/10:08</span>
            </div>
          </div>
          <!-- 文章信息 -->
          <div class="message">
            <div class="message_title"><h1>青青草原地图</h1></div>
            <div class="message_type">
              <span>内容关键词：</span>
              <el-tag type="info" size="mini">标签一</el-tag>
              <el-tag type="info" size="mini">标签一</el-tag>
              <el-tag type="info" size="mini">标签一</el-tag>
            </div>
          </div>
          <!-- like按钮 -->
          <div class="like">
            <div class="button">
              <i class="el-icon-star-on">&nbsp;Like</i>
            </div>
          </div>
        </div>
        <div class="dialogImg">
          <div class="main_img"></div>
        </div>
        <div class="dialogContent">
          黑塞说过一句富有哲理的话，有勇气承担命运这才是英雄好汉。这似乎解答了我的疑惑。
          米歇潘曾经说过，生命是一条艰险的峡谷，只有勇敢的人才能通过。带着这句话，我们还要更加慎重的审视这个问题：
          可是，即使是这样，访问来源的比例的出现仍然代表了一定的意义。
          从这个角度来看， 经过上述讨论，
          所谓访问来源的比例，关键是访问来源的比例需要如何写。
          我们不得不面对一个非常尴尬的事实，那就是， 既然如此， 我认为，
          访问来源的比例因何而发生？
          我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。
          我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。
          达尔文说过一句富有哲理的话，敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。这似乎解答了我的疑惑。
          普列姆昌德在不经意间这样说过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这不禁令我深思。
          可是，即使是这样，访问来源的比例的出现仍然代表了一定的意义。
          我们都知道，只要有意义，那么就必须慎重考虑。 从这个角度来看，
          既然如何，
          了解清楚访问来源的比例到底是一种怎么样的存在，是解决一切问题的关键。
          我认为， 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。
          问题的关键究竟为何？ 那么， 问题的关键究竟为何？
          了解清楚访问来源的比例到底是一种怎么样的存在，是解决一切问题的关键。
          塞涅卡曾经说过，生命如同寓言，其价值不在与长短，而在与内容。这似乎解答了我的疑惑。
          既然如何，
          迈克尔·F·斯特利曾经提到过，最具挑战性的挑战莫过于提升自我。这句话语虽然很短，但令我浮想联翩。
          访问来源的比例因何而发生？ 那么，
          佚名曾经提到过，感激每一个新的挑战，因为它会锻造你的意志和品格。这不禁令我深思。
          既然如何， 一般来说， 而这些并不是完全重要，更加重要的问题是，
          了解清楚访问来源的比例到底是一种怎么样的存在，是解决一切问题的关键。
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { onMounted, toRefs, reactive, ref, computed } from "vue";
import { getPlazaData } from "../api/Plaza";
import Fuse from "fuse.js";
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
        {
          value: "technology",
          name: "技术支持",
        },
        {
          value: "technology",
          name: "技术支持",
        },
        {
          value: "technology",
          name: "技术支持",
        },
        {
          value: "technology",
          name: "技术支持",
        },
        {
          value: "technology",
          name: "技术支持",
        },
        {
          value: "technology",
          name: "技术支持",
        },
      ],
      dataList2: [
        { value: "pop", name: "流行" },
        { value: "new", name: "最新" },
      ],
      selectNode: "",
    };
  },
  components: {},

  setup() {
    // const router = useRouter();
    const data = reactive({
      infoData: {},
      show: false,
      showDialog: false,
    });
    let searchText = ref("");
    onMounted(() => {
      getPlazaData({}).then((res) => {
        data.infoData = res.result;
        data.dialogData = res.result;
        data.show = !data.show;
      });
    });
    //使用fuse组件实现模糊搜索
    const searchList = computed(() => {
      if (searchText.value.trim()) {
        return new Fuse(data.infoData, { keys: ["title", "author"] })
          .search(searchText.value.trim())
          .map((e) => e.item);
      } else {
        return data.infoData;
      }
    });

    //改变类型从接口获取数据,
    const changeType = (value) => {
      getPlazaData({ type: value }).then((res) => {
        data.infoData = res.result;
      });
    };
    //下拉框做排序
    const changeSort = (value) => {
      if (value === "pop") {
        const fn = (a, b) => {
          return b.getNum - a.getNum;
        };
        data.infoData = data.infoData.sort(fn);
      }
      if (value === "new") {
        const fn = (a, b) => {
          return b.updatedAt > a.updatedAt ? 1 : -1;
        };
        data.infoData = data.infoData.sort(fn);
      }
    };
    // 点击图表的点击事件
    const clickItem = (value) => {
      getPlazaData({ id: value })
        .then((res) => {
          console.log("这是res的值");
          console.log(res.result);

          let a = [];
          a = res.result;
          console.log("这是res.result赋值给a 的值");
          console.log(a);
          console.log("这是res.result赋值给 data.dialogData的值");
          data.dialogData = res.result;
          console.log(data.dialogData);
        })
        .catch(() => {
          {
            alert("接口调用错误");
          }
        });
      data.showDialog = true;
    };
    return {
      clickItem,
      changeSort,
      changeType,
      searchList,
      searchText,
      ...toRefs(data),
    };
  },
};
</script>

<style scoped lang="less">
* ::-webkit-scrollbar {
  display: none;
}
.container {
  border: 1px solid transparent;
  width: 80vw;
  margin: 0 auto;
  height: 95vh;
  min-width: 700px;
  text-align: left;

  .header {
    line-height: 5vh;
    height: 5vh;
    width: 100%;
    .select {
      height: 5vh;
      display: inline-block;
      width: 10%;
    }
    .bar {
      white-space: nowrap;
      vertical-align: top;
      overflow-x: auto;
      height: 100%;
      width: 80%;
      display: inline-block;
      height: 50px;
      ul {
        .liStyle {
          list-style: none;
          display: inline-block;
          margin: 0 1vw;
          color: #c5cddf;
        }
        .liStyle:hover {
          cursor: pointer;
          color: #2f80ed;
        }
      }
    }
  }

  .searchpack {
    height: 5vh;
    width: auto;
    align-items: center;
    display: inline-flex;
    .search {
      height: 25px;
      width: 25vw;
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
    overflow: auto;
    margin-top: 1vh;
    width: 100%;
    height: 85vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    .view {
      cursor: pointer;
      margin-top: 3vh;
      height: 45%;
      min-height: 300px;
      width: 22%;
      min-width: 300px;
      .viewimg {
        height: 90%;
        width: 100%;
        border-radius: 15px;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
          rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
        img {
          padding: 10px;
          height: 100%;
          width: 100%;
        }
      }
      .viewimg:hover {
        transform: scale(1.2);
        transition: 0.3s;
      }
      .viewtext {
        font-weight: 500;
        color: #233062;
        display: flex;
        height: 10%;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        i {
          margin: 0 10px;
        }
      }
    }
  }
  /deep/.el-dialog {
    border-radius: 20px;
    background: #e9ebf0;
    min-width: 880px;
  }
  .dialogMain {
    color: #233062;
    height: 85vh;
    width: 100%;

    .dialogTitle {
      margin: 0 auto;
      height: auto;
      width: 90%;
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-around;
      cursor: pointer;
      .head {
        text-align: right;
        flex: 1;
        height: 10vh;
        .head-img {
          height: 90px;
          width: 90px;
          background: white;
          border-radius: 50%;
          float: right;
          margin-right: 1vw;
        }
      }
      .author {
        flex: 1.5;
        height: 10vh;
        .author_name {
          height: 60%;
          padding: 10px 0;
        }
        .create_time {
          font-size: 16px;
          height: 40%;
          padding: 8px 0;
        }
      }
      .message {
        flex: 4;
        height: 10vh;
        .message_title {
          height: 60%;
          padding: 10px 0;
        }
        .message_type {
          font-size: 16px;
          height: 40%;
          padding: 8px 0;
          .el-tag {
            margin: 0 5px;
          }
        }
      }
      .like {
        position: relative;
        vertical-align: middle;
        flex: 3;
        height: 10vh;
        .button {
          position: absolute;
          top: 50%;
          left: 60%;
          margin: -20px 0 0 0;
          border-radius: 20px;
          height: 40px;
          width: 140px;
          background: #2f80ed;
          i {
            color: #eef2f8;
            font-size: 25px;
            margin: 8px 25px;
          }
        }
      }
    }
    .dialogImg {
      margin-top: 2vh;
      height: 60%;
      width: 85%;
      margin: 2vh auto;
      background: #757575;
      .main_img {
      }
    }
    .dialogContent {
      height: auto;
      width: 85%;
      margin: 0 auto;
      text-indent: 32px;
      overflow: scroll;
    }
  }
}
</style>