import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Results from '@/components/Results.vue'

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Results',
      component: Results
    }
  ]
})

export default router
