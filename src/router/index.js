import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/StartView.vue')
    },
    {
      path: '/riddle/:id',
      name: 'riddle',
      component: () => import('../views/RiddleView.vue')
    }
  ]
})

export default router
