import { createRouter, createWebHistory } from 'vue-router'

// Rutas paso a paso para registro de doctor
import RegistroDoctor from '@/components/RegistroDoctor.vue'
import RegistroDoctor2 from '@/components/RegistroDoctor2.vue'
import RegistroDoctor3 from '@/components/RegistroDoctor3.vue'
import RegistroDoctor4 from '@/components/RegistroDoctor4.vue'
import RegistroTerminos from '@/components/RegistroTerminos.vue'

// Vistas generales
import HomeVIew from '@/views/HomeVIew.vue'
import RegistrarServicio from '@/views/RegistrarServicio.vue'
import RegistroUsuario from '@/views/RegistroUsuario.vue'
import RepresentanteLegal from '@/views/RepresentanteLegal.vue'
import TerminosServicio from '@/components/TerminosServicio.vue'

const routes = [
  // Home
  { path: '/', name: 'Inicio', component: HomeVIew },

  // Registro de servicios
  { path: '/registrar-servicio', name: 'RegistrarServicio', component: RegistrarServicio },

  // Registro de usuario proveedor
  { path: '/registro-usuario', name: 'RegistroUsuario', component: RegistroUsuario },
  {
    path: '/registro-representante',
    name: 'RepresentanteLegal',
    component: RepresentanteLegal
  },
{
  path: '/terminos-servicio',
  name: 'TerminosServicio',
  component: TerminosServicio
},

  // Registro paso a paso de doctor
  { path: '/registro/paso1', name: 'Paso1', component: RegistroDoctor },
  { path: '/registro/paso2', name: 'Paso2', component: RegistroDoctor2 },
  { path: '/registro/paso3', name: 'Paso3', component: RegistroDoctor3 },
  { path: '/registro/paso4', name: 'Paso4', component: RegistroDoctor4 },
  { path: '/registro/paso0', name: 'Paso0', component: RegistroTerminos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
