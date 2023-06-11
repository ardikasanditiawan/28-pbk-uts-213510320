import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/AboutView.vue'
import catatan from '../views/catatan.vue'
import login from '../views/login.vue'
import pinia from '../views/pinia.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/catatan',
    name: 'catatan',
    component: catatan
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: pinia
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
