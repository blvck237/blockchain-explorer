import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import VueRouter from "vue-router";
import router from "./router";

import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles

Vue.use(VueRouter);
Vue.use(Vuesax);
Vue.config.productionTip = false;

const user = localStorage.getItem("user");

router.beforeEach((to, from, next) => {
  if (
    to.path !== "/login" &&
    to.path !== "login" &&
    !localStorage.getItem("user")
  ) {
    next({ path: "/login" });

    console.log("no access");
  } else if (
    (to.path === "/login" || to.path === "login") &&
    localStorage.getItem("user")
  ) {
    next({ path: "/" });
    console.log("no access 2");
  } else {
    console.log("access");
    next();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
