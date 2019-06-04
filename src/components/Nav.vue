<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div class="logo" slot="title">
        <vs-navbar-title>
         <img src="../assets/logo.svg" alt="logo" width="50"> 
        </vs-navbar-title>
        <h3>Supcoin</h3>
      </div>
      <vs-navbar-item class="menu-btn" index="0">
        <router-link tag="a" to="/home">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="menu-btn" index="1">
        <router-link tag="a" to="/transactions">Transactions</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="menu-btn" index="2">
        <router-link tag="a" to="/blocks">Blocks</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="menu-btn" index="3">
        <router-link tag="a" to="/map">Livemap</router-link>
      </vs-navbar-item>
      </vs-navbar-item>
      <vs-navbar-item class="menu-btn" index="4">
        <router-link tag="a" to="/login">My wallet</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',

}
</script>


<style>
.nabarx{
    padding: 1em;
    padding-left: 15em;
    padding-right: 15em;
}
.menu-btn:hover a{
    color: #006084
}
.logo{
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
}
</style>
