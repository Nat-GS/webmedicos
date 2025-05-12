import { createRouter, createWebHistory } from 'vue-router'
import HomeVIew from '@/views/HomeVIew.vue'
import RegistrarServicio from '@/views/RegistrarServicio.vue'
import RegistroUsuario from '@/views/RegistroUsuario.vue'

const routes = [
  { path: '/', name: 'Inicio', component: HomeVIew },
  { path: '/registrar-servicio', name: 'RegistrarServicio', component: RegistrarServicio },
  { path: '/registro-usuario', name: 'RegistroUsuario', component: RegistroUsuario }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
