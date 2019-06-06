<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  // import Home from './pages/Home.vue'
  import Nav from "./components/Nav.vue";
  import "material-icons/iconfont/material-icons.css";
  export default {
    name: "app",
    components: {
      Nav
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  .nav {
    padding-bottom: 2.5em;
  }
  .router-link-active {
    border-bottom: 2px solid #006084;
    color: #006084;
  }
  .router-link-active a {
    color: #006084;
  }
</style>
