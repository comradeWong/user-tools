const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/home.vue') },
]
export default routes