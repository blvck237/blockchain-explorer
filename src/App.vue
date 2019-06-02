<template>
  <div id="app">
    <Nav> </Nav>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// import Home from './pages/Home.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
