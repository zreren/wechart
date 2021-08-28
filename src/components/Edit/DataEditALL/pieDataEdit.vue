<template>
{{data}}
  <a-form v-if="visible" :model="formState" v-bind="formItemLayout">
    <a-form-item label="Field A">
      <a-input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item label="Field B">
      <a-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item v-bind="{wrapperCol: { span: 24 }}">
      <a-button type="primary" @click="handleOk">Submit</a-button>
    </a-form-item>
  </a-form>
<button @click="fn">跳出</button>
</template>

<script>
import {defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(false)
    const data = ref([[150,230,224,218,135,147,260],[260,240,120,110,60,0,60]])
    const formState = reactive({
      fieldA: [],
      fieldB: [],
    });
    const formItemLayout =reactive({labelCol: {span: 6,},wrapperCol: {span: 14,},})
    function fn() {
      formState.fieldA = data.value[0]
      formState.fieldB = data.value[1]
      visible.value = true
    }
    function handleOk() {
      if(typeof(formState.fieldA) == 'string')
      data.value[0] = formState.fieldA.split(',').map(item=>{return parseInt(item) })
      else
      data.value[0] = formState.fieldA
      if(typeof(formState.fieldB) == 'string')
      data.value[1] = formState.fieldB.split(',').map(item=>{return parseInt(item) })
      else
      data.value[1] = formState.fieldB
      visible.value = false
    }
    return {
      formState,
      formItemLayout,
      visible,
      fn,
      data,
      handleOk
    };
  },
});
</script>