<template>
 <div class="upload"> 
  <div class="x"><CloseCircleOutlined @click="removeUpload"/></div>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="sharefile"
    :multiple="false"
    action="https://qc5abu.fn.thelarkcloud.com/uploadFile"
    method="POST"
    @change="handleChange"
    list-type="picture"
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">选择或拖拽上传图片作为封面</p>
    <p class="ant-upload-hint">
      最大可支持10MB
    </p>
  </a-upload-dragger>
  </div>
</template>
<script>
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref, inject} from 'vue';
import {
CloseCircleOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    InboxOutlined,
    CloseCircleOutlined
  },
  setup() {
    const fileList = ref([])
    const geturl = inject('geturl')
    const handleChange = info => {
      const status = info.file.status;
      if(info.file.size >= 1024*1024*10) {
        message.error('Image must smaller than 2MB!')
        return
      }
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        info
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        fileList.value[fileList.value.length-1].url = fileList.value[fileList.value.length-1].response 
        geturl(fileList.value[fileList.value.length-1].response)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };
    const removeUpload = () => {
        geturl('x')
    }
    return {
      handleChange,
      fileList,
      removeUpload,
      geturl
    };
  },
});
</script>

<style lang="less" scoped>
.upload {
  z-index: 7;
  opacity: 1;
  padding: 50px 50px 100px 50px;
  position: fixed;
  top: 15vh;
  right: calc(50vw - 250px);
  width: 500px;
  height: 500px;
  background: rgb( 255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
    .x {
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
    }
}
</style>