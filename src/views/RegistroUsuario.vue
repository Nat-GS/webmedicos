<template>
  <div class="form-container">
    <h2>Registra tu cuenta de proveedor</h2>
    <form @submit.prevent="irAFormularioDeServicio">
      <input v-model="form.nombre" placeholder="Nombre *" required />
      <input v-model="form.correo" placeholder="Correo *" required />
      <input v-model="form.password" type="password" placeholder="Contraseña *" required />
      <select v-model="form.tipoUsuarioId" required>
        <option disabled value="">Selecciona tipo de usuario *</option>
        <option :value="2">Proveedor</option>
      </select>
      <button type="submit">¡Comencemos!</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const router = useRouter()

// Los datos se pueden escribir pero no se usan
const form = ref({
  nombre: '',
  correo: '',
  password: '',
  tipoUsuarioId: ''
})

const irAFormularioDeServicio = () => {
  toast.success('¡Continuemos!')
  router.push({ name: 'RegistrarServicio', query: { usuarioId: 1 } })
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: auto;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}
form {
  display: flex;
  flex-direction: column;
}
input, select {
  margin-bottom: 10px;
  padding: 10px;
}
button {
  background-color: #2dcac5;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
}
</style>
