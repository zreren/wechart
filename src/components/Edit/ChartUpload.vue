
<template>
    <div class="mask"></div>
    <div id="uploadBoxF" style="position:absolute;top:15%;left:0;width:100%;display:flex;justify-content:center">
    <div class="uploadBox">
        <i class="el-icon-close"  @click="$router.push('/edit')"></i>
        <div>
          <h3>请上传json/csv文件</h3>
        <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
         multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
        >
        <el-button size="meduim" type="primary">点击上传</el-button>
        </el-upload>
        </div>
        <div>
           <el-progress class = "progress" :text-inside="true" :stroke-width="20" :percentage="0"></el-progress>
        </div>
        <div class="notice">
          <h4>注意文件格式如下</h4>
          <h5>1.只能上传 jpg/png 文件，且不超过 500kb</h5>
          <h5>2.只能上传 jpg/png 文件，且不超过 500kb</h5>
          <h5>3.只能上传 jpg/png 文件，且不超过 500kb</h5>
        </div> 
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
        console.log(file, fileList);
      }
    }
    
  }
</script>

<style  lang="less" scoped>
 .mask {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 8;
    background: rgba(80, 116, 183, 0.25);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
  }
    .uploadBox {
    display: flex;
    flex-direction: column;
    width: 750px;
    height: 420px;
    z-index: 9;
    background: rgba( 255, 255, 255, 0.95 );
    box-shadow: 0 8px 32px 0 rgba(48, 53, 126, 0.37);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transition-duration: 0.5s;
    .el-icon-close{
      position: absolute;
      right: 0;
      margin: 10px;
    }
    .progress{
      width:60%;
      margin:20px auto;
    }
    h3 {
      flex-basis: 100%;
      margin: 100px 0 24px 0;
      color: #233062;
    }
    .notice{
      text-align: left;
      margin:0 auto;
      color: #233062;
      line-height: 1.5em;
    }
    h4{
      font-weight: 500;
    }
    h5{
      font-weight: 300;
    }
    }
</style>


