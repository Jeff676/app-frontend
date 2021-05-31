import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import isAuthenticated from '../controllers/auth.ctrl'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: isAuthenticated
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: (to, from, next) => {
      sessionStorage.clear()
      next({ name: 'login' })
    }
  },
  {
    path: '/about',
    name: 'About',
    beforeEnter: isAuthenticated,
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (sessionStorage.jwt) {
    console.log('cheched jwt')
  } else {
    console.log('No jwt')
  }
  next()
})

export default router
