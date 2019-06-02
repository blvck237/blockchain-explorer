import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import VueRouter from "vue-router";
import router from "./router";

import "vuesax/dist/vuesax.css"; //Vuesax styles

Vue.use(VueRouter);
Vue.use(Vuesax);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
