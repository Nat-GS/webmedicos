import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router' 

const app = createApp(App)

app.use(createPinia())       // Registrar Pinia
app.use(router)              // Registrar Vue Router (si lo usas)

app.mount('#app')            // Montar la app

