<template>
  <div id="home">
    <div>
      <img width="250" src="../assets/logo.svg" alt="logo" />
      <h1>Welcome to your blockchain explorer</h1>
      <div class="search">
        <vs-input class="search-input" label-placeholder="Search transactions" size="large" v-model="search"/>
        <vs-button v-on:click="searchTransaction" class="search-btn" color="#006084"  size="large" icon="search">Search</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { request } from "../../utils/api";
  export default {
    name: "Home",
    data() {
      return {
        walletInfo: {
          address: "foo-add",
          balance: 9000,
          search: ""
        }
      };
    },
    beforeMount() {
      this.getWalletInfo();
    },
    methods: {
      login() {
        request("supcoin/blocks")
          .then(res => {
            console.log("Log: login -> res", res);
          })
          .catch(err => {
            console.log("Log: login -> err", err);
          });
      },
      getWalletInfo() {
        request("supcoin/wallet-info")
          .then(res => {
            console.log("Log: getWalletInfo -> res", res);
          })
          .catch(err => {
            console.log("Log: getWalletInfo -> err", err);
          });
      },
      searchTransaction(){
        console.log(this.search)
      }
    }
  };
</script>

<style scoped>
  #home {
    text-align: center;
  }
  h1 {
    margin: 1.5em;
  }
  .search{
    display: flex;
  align-items: center;
  justify-content: center;
    flex-direction: column;
  }
  .search-input{
    text-align: left;
    width: 50%;
  }
  .search-btn{
    margin: 1em;
  }
</style>
