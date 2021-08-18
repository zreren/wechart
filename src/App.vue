<template>
  <header>

  <router-link to="/">主页</router-link>
  <home-header  v-show="$route.name !== 'Edit'">
  |<router-link to="/community">数据广场</router-link>|
  <router-link to="/edit">生成图表</router-link>|
  <router-link to="/explore">学习发现</router-link>
  </home-header>

  </header>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap');
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Ubuntu',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
