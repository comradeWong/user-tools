import routes from './routes'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory('/user-tools/'),
  routes, // (缩写) 相当于 routes: routes
})

export default router
