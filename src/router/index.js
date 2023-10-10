import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Admin from '../Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')

  },

  {
    path: '/manage',
    name: 'admin',
    component: Admin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes,
})

export default router
