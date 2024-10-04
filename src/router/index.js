import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'

const routes = [
  { path: '/', component: Portfolio },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
