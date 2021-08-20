<template>
  <div class="about">
    <h1>This is an Explore Page</h1>
  </div>
  <el-button @click="$router.push('/blog/detail')">详情</el-button>
  
  {{$store.state.name}}
</template>

<script>
export default {
  components:{
  },
  setup() {
    
  },
}
</script>


<style lang="less" scoped>

</style>