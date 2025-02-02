import type { App } from 'vue'
import router from './router'
import PrimeVue from 'primevue/config'
import setupI18n from './i18n'
import Aura from '@primevue/themes/aura'

export default (app: App) => {
  console.info('Setting up app dependencies...')
  app.use(router)
  setupI18n(app)
  app.use(PrimeVue, {
    theme: Aura
  })
}
