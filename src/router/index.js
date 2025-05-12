import { createRouter, createWebHistory } from 'vue-router'

import RegistroDoctor from '@/components/RegistroDoctor.vue'
import RegistroDoctor2 from '@/components/RegistroDoctor2.vue'
import RegistroDoctor3 from '@/components/RegistroDoctor3.vue'

const routes = [
  { path: '/', redirect: '/registro/paso1' },
  { path: '/registro/paso1', name: 'Paso1', component: RegistroDoctor },
  { path: '/registro/paso2', name: 'Paso2', component: RegistroDoctor2 },
  { path: '/registro/paso3', name: 'Paso3', component: RegistroDoctor3 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
