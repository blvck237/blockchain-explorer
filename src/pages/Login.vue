<template>
  <div id="login">
    <div action="" class="login-form">
      <div>
        <img class="logo" src="../assets/logo.svg" width="100" alt="" />
      </div>
      <h2>Login</h2>
      <p>Sign in to your blockchain</p>
      <vs-input class="login-input" size="large" label-placeholder="Email" v-model="email"/>
      <vs-input class="login-input" size="large" label-placeholder="Password" v-model="password"/>
      <vs-button class="login-btn" v-on:click="login()">Signin</vs-button>
    </div>
      <vs-button class="" v-on:click="getUser()">Get</vs-button>
  </div>
</template>

<script>
  import { request, googleProvider } from "../../utils";
  import router from '../router'
  export default {
    name: "Login",
    data() {
      return {
        email: "test@test.com",
        password: "test123",
        dialog: false
      };
    },
    methods: {
      login() {
        request({
          url: "/supcoin/login",
          method: "post",
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(res => {
            if (res.data.hasOwnProperty("uid")) {
              this.clearFields();
              localStorage.setItem('user', JSON.stringify(res.data))
              router.push({ path: 'home' })
              console.log("Log: login -> res", res.data);
            } else {
              this.alert("Login error", res.data.message, 'danger' )
            }
          })
          .catch(err => {
            console.log("Log: login -> err", err);
            this.clearFields();
          });
      },

      getUser(){
        let e = JSON.parse(localStorage.getItem("user"))
        console.log("User",e)
      },

      close() {
        this.clearFields();
      },
      alert(title, msg, color) {
        this.$vs.notify({
          title: title,
          text: msg,
          color: color,
          position: "top-right"
        });
      },
      clearFields() {
        this.email = "";
        this.password = "";
      }
    }
  };
</script>

<style scoped>
  .login-form {
    margin: 0 auto;
    width: 35%;
    padding: 2em;
    border-radius: 3px;
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    -webkit-box-shadow: 2px 20px 14px -11px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 2px 20px 14px -11px rgba(0, 0, 0, 0.31);
    box-shadow: 2px 20px 14px -11px rgba(0, 0, 0, 0.31);
  }
  .logo {
    margin: 0 auto;
    margin-bottom: 2em;
  }
  .login-btn {
    margin-top: 1.5em;
    width: 25%;
  }
  .login-input {
    width: 100%;
  }
</style>
