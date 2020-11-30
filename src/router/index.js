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
    component: () => import('../views/About.vue')
  },
  {
    path: '/menu',
    name: 'MenuMain',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/Example.vue')
  },
  {
    path: '/exercices',
    name: 'Exercices',
    component: () => import('../views/IdeesExercices.vue')
  },
  {
    path: '/formation',
    name: 'Formation',
    component: () => import('../views/Formation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
