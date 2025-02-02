import { createRouter, createWebHistory } from 'vue-router'
import { useI18nLoader } from '@/i18n'
import site from './site'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...site]
})

useI18nLoader(router)
export default router
