<template>
  <div>
    <div>
      <h1>Welcome {{ walletInfo.address }} to your blockchain explorer</h1>
      <!-- <vs-button v-on:click="login" color="primary" type="filled"
        >Primary</vs-button
      > -->
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
          balance: 9000
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
      }
    }
  };
</script>

<style scoped>
  h1{
    margin: 1.5em;
  }
</style>
