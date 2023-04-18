import * as VueRouter from "vue-router"

import Login from "./views/Login.vue"

const routes = [
  {
    path: "/",
    component: Login,
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

export default router
