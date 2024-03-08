import { createRouter, createWebHistory } from 'vue-router'
import admin from './admin.js';
import user from './user.js';


const routes = [
  admin,
  user
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router
