import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes, // (缩写) 相当于 routes: routes
})

export default router