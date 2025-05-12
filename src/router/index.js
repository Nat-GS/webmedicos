import { createRouter, createWebHistory } from 'vue-router'

// Rutas paso a paso para registro de doctor
import RegistroDoctor from '@/components/RegistroDoctor.vue'
import RegistroDoctor2 from '@/components/RegistroDoctor2.vue'
import RegistroDoctor3 from '@/components/RegistroDoctor3.vue'
import RegistroDoctor4 from '@/components/RegistroDoctor4.vue'

// Vistas generales
import HomeVIew from '@/views/HomeVIew.vue'
import RegistrarServicio from '@/views/RegistrarServicio.vue'
import RegistroUsuario from '@/views/RegistroUsuario.vue'

const routes = [
  // Home
  { path: '/', name: 'Inicio', component: HomeVIew },

  // Registro de servicios
  { path: '/registrar-servicio', name: 'RegistrarServicio', component: RegistrarServicio },

  // Registro de usuario proveedor
  { path: '/registro-usuario', name: 'RegistroUsuario', component: RegistroUsuario },

  // Registro paso a paso de doctor
  { path: '/registro/paso1', name: 'Paso1', component: RegistroDoctor },
  { path: '/registro/paso2', name: 'Paso2', component: RegistroDoctor2 },
  { path: '/registro/paso3', name: 'Paso3', component: RegistroDoctor3 },
  { path: '/registro/paso4', name: 'Paso4', component: RegistroDoctor4 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
