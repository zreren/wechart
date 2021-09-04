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
            :class="selectedIndex == index ? 'active' : ''"
            @click="changeType(item.name, index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 搜索框 -->
      <div class="searchpack">
        <div class="search">
          <input
            type="text"
            class="input"
            placeholder="搜索关键字"
            v-model="searchText"
            @keyup.enter="searchClick"
          />
        </div>
        <i class="el-icon-search" style="" @click="searchClick"></i>
      </div>
    </div>
    <!-- 视图 -->
    <div class="divBodynull" v-if="infoData.length == 0">
      y
      <el-empty description="暂无数据" :image-size="200"></el-empty>
    </div>
    <div class="divBody" v-show="show" v-else>
      <div
        class="view"
        v-for="item in infoData"
        :key="item"
        @click="clickItem(item._id)"
      >
        <div class="viewimg">
          <img :src="item.imageUrl" alt="数据加载失败，请重试.." />
        </div>
        <div class="viewtext">
          <div>{{ item.title }}</div>
          <div>
            <i class="el-icon-star-on"></i>{{ item.collect
            }}<i class="el-icon-view"></i>{{ item.getNum }}
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <el-dialog
      v-model="showDialog"
      width="90%"
      top="5vh"
      :destroy-on-close="true"
    >
      <div class="dialogMain">
        <div class="dialogTitle">
          <!-- 头像 -->
          <div class="head">
            <div class="head-img">
              <img
                class="img"
                src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/4c17df5d0a3daf64_1630413232491.png"
                alt="头像加载失败"
              />
            </div>
          </div>
          <!-- 作者信息 -->
          <div class="author">
            <div class="author_name">{{ toRaw(dialogData[0].userName) }}</div>
            <div class="create_time">
              <span
                >发表时间：
                {{ toRaw(dialogData[0].createdAt.substr(0, 10)) }}
              </span>
            </div>
          </div>
          <!-- 文章信息 -->
          <div class="message">
            <div class="message_title">{{ toRaw(dialogData[0].title) }}</div>
            <div class="message_type">
              <span>内容关键词：</span>
              <el-tag
                size="mini"
                v-for="item in toRaw(dialogData[0].tags)"
                :key="item"
                >{{ item }}</el-tag
              >
            </div>
          </div>
          <!-- like按钮 -->
          <div class="like">
            <el-button
              type="primary"
              class="button"
              size="mini"
              @click="like(toRaw(dialogData[0]._id))"
            >
              <i class="el-icon-star-on">&nbsp;Like</i>&nbsp;&nbsp;&nbsp;{{
                toRaw(dialogData[0].collect)
              }}</el-button
            >
          </div>
        </div>
        <div class="dialogImg">
          <div class="main_img">
            <img :src="toRaw(dialogData[0].imageUrl)" alt="" />
          </div>
          <div class="dialogContent">
            {{ toRaw(dialogData[0].description) }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { toRaw } from "@vue/reactivity";
import { onMounted, toRefs, reactive } from "vue";
import { getPlazaData } from "../api/Plaza";
export default {
  data() {
    return {
      dataList: [
        {
          value: "all",
          name: "所有",
        },
        {
          value: "economics",
          name: "经济",
        },
        {
          value: "farming",
          name: "农业",
        },
        {
          value: "weather",
          name: "气候",
        },
        {
          value: "energy",
          name: "能源",
        },
        {
          value: "education",
          name: "教育",
        },
        {
          value: "health",
          name: "健康",
        },
        {
          value: "gender",
          name: "性别",
        },
        {
          value: "environment ",
          name: "环境",
        },
        {
          value: "infrastructure",
          name: "基础建设",
        },
        {
          value: "society ",
          name: "社会保障",
        },
      ],
      dataList2: [
        { value: "pop", name: "流行" },
        { value: "new", name: "最新" },
      ],
      selectNode: "",
    };
  },
  setup() {
    const data = reactive({
      infoData: {},
      show: false,
      showDialog: false,
      dialogData: [],
      selectedIndex: 0,
      searchText: "",
    });
    onMounted(() => {
      getPlazaData({}).then((res) => {
        data.infoData = res.result;
        data.show = !data.show;
      });
    });
    //搜索
    function searchClick() {
      getPlazaData({ searchText: data.searchText }).then((res) => {
        data.infoData = res.result;
      });
    }
    //改变类型从接口获取数据,
    const changeType = (value, index) => {
      getPlazaData({ type: value }).then((res) => {
        data.infoData = res.result;
        data.selectedIndex = index;
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
          data.dialogData = res.result;
        })
        .catch(() => {
          {
            alert("接口调用错误!");
          }
        });
      data.showDialog = true;
    };
    //喜欢按钮事件
    const like = (value) => {
      getPlazaData({ likeID: value })
        .then((res) => {
          data.dialogData = res.result;
          ElMessage.success({
            message: "Like成功！",
          });
        })
        .catch(() => {
          ElMessage.error({
            message: "接口调用错误！",
          });
        });
    };
    return {
      toRaw,
      clickItem,
      changeSort,
      changeType,
      like,
      searchClick,
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
      vertical-align: middle;
    }
    .bar {
      vertical-align: middle;
      white-space: nowrap;
      height: 100%;
      width: 60%;
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
        .liStyle.active {
          border-bottom: #66a4f5 solid 2px;
        }
      }
    }
    .searchpack {
      vertical-align: middle;
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
          vertical-align: top;
          text-align: right;
          color: #757575;
          font-size: 12px;
          width: 85%;
          height: 100%;
          background: #eef2f8;
          outline: none;
        }
      }
    }
  }

  .divBodynull {
    margin-top: 10%;
    width: 100%;
    height: 85vh;
  }
  .divBody {
    overflow: auto;
    margin-top: 1vh;
    width: 100%;
    height: 85vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
    .view {
      cursor: pointer;
      margin-left: 2%;
      margin-top: 3vh;
      height: 45%;
      min-height: 300px;
      width: 22%;
      min-width: 300px;
      .viewimg {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
        width: 100%;
        border-radius: 15px;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
          rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
        img {
          padding: 3px;
          width: 100%;
        }
      }
      .viewimg:hover {
        transform: scale(1.02);
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
  :deep(.el-dialog) {
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
          img {
            height: 100%;
            width: auto;
            margin: 0 auto;
          }
        }
      }
      .author {
        flex: 1.5;
        height: 10vh;
        .author_name {
          font-size: 28px;
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
        font-size: 28px;
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
        vertical-align: middle;
        flex: 3;
        height: 10vh;
        .button {
          margin-top: 4%;
          border-radius: 20px;
          width: 150px;
          height: 50%;
          float: right;
          i {
            font-size: 16px;
            color: #eef2f8;
          }
        }
      }
    }
    .dialogImg {
      overflow: scroll;
      width: 95%;
      margin: 1% auto;
      height: 90%;
      .main_img {
        margin: 1% auto;
        width: 85%;
        height: auto;
        text-align: center;
        img {
          object-fit: contain;
          width: 100%;
          height: auto;
          max-height: 100%;
        }
      }
      .dialogContent {
        font-size: 20px;
        height: auto;
        width: 80%;
        margin: 2% auto;
        text-indent: 32px;
      }
    }
  }
}
</style>