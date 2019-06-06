import Vue from "vue";
import Router from "vue-router";
// Page imports
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Transactions from "@/pages/Transactions";
import Blocks from "@/pages/Blocks";
import Map from "@/pages/Map";
import Layout from "@/pages/Layout";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "Home",
          component: Home,
        },
        {
          path: "transactions",
          name: "Transactions",
          component: Transactions,
        },
        {
          path: "blocks",
          name: "Blocks",
          component: Blocks,
        },
        {
          path: "map",
          name: "Map",
          component: Map,
        }
      ]
    },

    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
