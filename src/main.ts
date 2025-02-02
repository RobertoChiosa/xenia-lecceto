import './assets/css/styles.css'
import { createApp } from 'vue'
import setup from './setup'
import App from './App.vue'

const app = createApp(App)
setup(app)
app.mount('#app')
