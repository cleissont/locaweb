import * as VueRouter from "vue-router"

import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Plan from "./views/Plan.vue"
import Register from "./views/Register.vue"

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/plan",
    component: Plan,
  },
  {
    path: "/register",
    component: Register,
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

export default router
