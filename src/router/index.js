import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/LineasInteres',
    name: 'LineasInteres',
    component: () => import('../views/LineasInteres.vue')
  },
  {
    path: '/Linea1',
    name: 'Linea1',
    component: () => import('../views/Linea1.vue')
  },
  {
    path: '/Linea2',
    name: 'Linea2',
    component: () => import('../views/Linea2.vue')
  },
  {
    path: '/Linea3',
    name: 'Linea3',
    component: () => import('../views/Linea3.vue')
  },

  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../components/Login.vue')
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../components/User/Users.vue")
  },
  {
    path: "/users/detail/:id",
    name: "detailusers",
    component: () => import("../components/User/DetailUsers")
  },
  {
    path: "/users/add",
    name: "addusers",
    component: () => import("../components/User/AddUsers")
  },
  {
    path: "/users/edit/:id",
    name: "editusers",
    component: () => import("../components/User/EditUsers")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
