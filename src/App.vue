<template>
  <header>
  <nav-bar></nav-bar><!-- z-index为7 -->
  </header>
  <router-view/>
</template>

<script>
import NavBar from './components/navBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang = 'less'>
@import "./common/font/Ubuntu.css";
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}
#app {
  font-family: 'Ubuntu',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
