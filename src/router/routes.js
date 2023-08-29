const routes = [
  // { path: '/', redirect: '/home' },
  { path: '/', component: () => import('../views/home.vue') },
]
export default routes
