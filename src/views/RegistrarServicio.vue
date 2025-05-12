<template>
  <div class="registro-container">
    <h2>Registro de Servicio</h2>

    <form @submit.prevent="registrarServicio">
      <input v-model="form.nombreServicio" type="text" placeholder="Nombre comercial del servicio *" required />
      <input v-model="form.nombreLegal" type="text" placeholder="Nombre legal de la empresa *" required />
      <input v-model="form.nit" type="text" placeholder="NIT *" required />

      <input v-model="form.direccionCentral" type="text" placeholder="Dirección oficina central *" required />
      <input v-model="form.direccionSucursales" type="text" placeholder="Dirección de sucursales o agencias" />
      <input v-model="form.direccion" type="text" placeholder="Dirección actual (este local)" />

      <input v-model="form.paginaWeb" type="text" placeholder="Página web" />
      <input v-model="form.tipoServicio" type="text" placeholder="Tipo de servicio que ofrece *" required />

      <select v-model="form.categoria" required>
        <option disabled value="">Categoría principal *</option>
        <option value="Farmacia">Farmacia</option>
        <option value="Laboratorio">Laboratorio</option>
      </select>

      <input
        v-if="form.categoria === 'Laboratorio'"
        v-model="form.tipoLaboratorio"
        type="text"
        placeholder="Tipo de laboratorio (si aplica)"
        required
      />

      <input v-model="form.telefonoContacto" type="tel" placeholder="Teléfono de contacto *" required />
      <input v-model="form.gmailContacto" type="email" placeholder="Correo Gmail de contacto *" required />
      <label>
        <input type="checkbox" v-model="form.virtual" />
        ¿Puede enviar resultados virtualmente (PDF, imagen)?
      </label>

      <textarea v-model="form.infoFinanciera" placeholder="Información para el manejo financiero"></textarea>
      <input v-model="form.cuentaBancaria" type="text" placeholder="Cuenta bancaria" />

      <input v-model="form.representanteLegal" type="text" placeholder="Representante legal *" required />
     <div class="ci-container">
        <input
            v-model="form.ciRepresentante"
            type="number"
            placeholder="CI del representante *"
            required
        />
        <input
            v-model="form.complementoCi"
            type="text"
            placeholder="Complemento (si aplica)"
            class="complemento-input"
        />
        </div>

      <button type="submit">Registrar</button>
    </form>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import api from '@/services/api'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = ref({
  nombreServicio: '',
  descripcion: '',
  direccion: '',
  telefono: '',
  categoria: '',
  tipoLaboratorio: '',
  usuarioId: '',
  nombreLegal: '',
  nit: '',
  direccionCentral: '',
  direccionSucursales: '',
  paginaWeb: '',
  tipoServicio: '',
  telefonoContacto: '',
  gmailContacto: '',
  virtual: false,
  infoFinanciera: '',
  cuentaBancaria: '',
  representanteLegal: '',
  ciRepresentante: '',
  complementoCi: '' 
})

onMounted(() => {
  form.value.usuarioId = route.query.usuarioId || ''
})

const registrarServicio = async () => {
  try {
    const data = { ...form.value }
    if (data.categoria !== 'Laboratorio') {
      data.tipoLaboratorio = null
    }

    await api.post('/servicios', data)
    toast.success('✅ Servicio registrado con éxito')
  } catch (error) {
    console.error(error)
    const mensaje = error.response?.data?.mensaje || '❌ Error al registrar el servicio'
    toast.error(mensaje)
  }
}
</script>





<style scoped>
.registro-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea,
select {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #2dcac5;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #25a8a4;
}

.ci-container {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.complemento-input {
  width: 200px;
}

</style>
