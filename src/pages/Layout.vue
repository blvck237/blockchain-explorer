<template>
  <div>
    <Nav class="nav"> </Nav>
    <transition name="fade">
        <keep-alive>
          <router-view class="view"></router-view>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  export default {
    name: "Layout",
    components: {
      Nav
    }
  };
</script>

<style scoped> 
  .nav {
    padding-bottom: 2.5em;
  }
  .view{
    padding-left: 15em;
    padding-right: 15em;
  }
</style>
