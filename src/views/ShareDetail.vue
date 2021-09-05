<template>
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
</template>
<script>
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    InboxOutlined,
  },

  setup() {
    const fileList = ref([])
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
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    return {
      handleChange,
      fileList,
    };
  },
});
</script>