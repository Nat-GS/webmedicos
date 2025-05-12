import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Toast from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(createPinia())  
app.use(router)
app.use(Toast, {
  autoClose: 4000, // duración por defecto para todos
  position: 'top-right', // opcional
})

app.mount('#app')

