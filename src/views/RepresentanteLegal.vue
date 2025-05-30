<template>
  <div class="background">
    <div class="form-card">
      <!-- Progreso -->
      <div class="progress">
        <div class="step completed">1</div>
        <div class="line completed"></div>
        <div class="step active">2</div>
        <div class="line"></div>
        <div class="step">3</div>
      </div>
      <div class="progress-labels">
        <span class="label completed">Usuario</span>
        <span class="label active">Representante</span>
        <span class="label">Servicio</span>
      </div>

      <h2 class="title">Datos del Representante Legal</h2>

      <form @submit.prevent="guardarDatosRepresentante">
        <div class="form-group">
          <label>Nombre <span class="required">*</span></label>
          <input v-model="form.nombre" type="text" required />
        </div>

        <div class="form-group">
          <label>Apellido <span class="required">*</span></label>
          <input v-model="form.apellido" type="text" required />
        </div>

        <div class="form-group">
          <label>CI o Pasaporte <span class="required">*</span></label>
          <input v-model="form.ci" type="text" required />
        </div>

        <div class="form-group">
          <label>Extensión</label>
          <select v-model="form.extension">
            <option disabled value="">Selecciona una</option>
            <option value="LP">La Paz</option>
            <option value="CB">Cochabamba</option>
            <option value="SC">Santa Cruz</option>
            <option value="OR">Oruro</option>
            <option value="PT">Potosí</option>
            <option value="TJ">Tarija</option>
            <option value="CH">Chuquisaca</option>
            <option value="BN">Beni</option>
            <option value="PD">Pando</option>
          </select>
        </div>

        <div class="form-group">
          <label>Correo electrónico <span class="required">*</span></label>
          <input v-model="form.email" type="email" required />
        </div>

        <div class="form-actions">
          <button type="button" class="cancel" @click="router.push('/registro-usuario')">Volver</button>
          <button type="submit" class="submit">Siguiente</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'

const router = useRouter()
const route = useRoute()

const form = reactive({
  nombre: '',
  apellido: '',
  ci: '',
  extension: '',
  email: '',
  usuarioId: ''
})

onMounted(() => {
  const usuarioId = route.query.usuarioId
  if (!usuarioId) {
    toast.error('ID de usuario no encontrado en la URL')
    router.push('/')
    return
  }
  form.usuarioId = usuarioId
})

const guardarDatosRepresentante = () => {
  // Guardar datos temporalmente si se necesita
  localStorage.setItem('representanteLegal', JSON.stringify(form))

  toast.success('Datos del representante guardados ✅')

  // Redirigir al siguiente paso con el mismo usuarioId
  toast.success('¡Continuemos!')
  setTimeout(() => {
    router.push({ name: 'RegistrarServicio', query: { usuarioId: 1 } })
  }, 4000)
}
</script>

<style >
.background {
  background: linear-gradient(120deg, #00b4b0, #0077b6);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.eye-icon {
  width: 20px;
  height: 20px;
}


.form-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 400px;
  width: 80%;
  box-shadow: 0 0 20px rgba(0,0,0,0.15);
}

.title {
  text-align: center;
  color: #00b4b0;
  margin-bottom: 1rem;
}

.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.step {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #00b4b0;
  color: #00b4b0;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  background: white;
}

.step.completed {
  background: #00b4b0;
  color: white;
}

.line {
  width: 80px;
  height: 2px;
  background: #ccc;
  margin: 0 10px;
}

.line.completed {
  background: #00b4b0;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.label {
  color: #aaa;
  width: 45%;
  text-align: center;
}

.label.completed {
  color: #00b4b0;
  font-weight: bold;
}

.step.active {
  border: 2px solid #00b4b0;
  color: #00b4b0;
  background: white;
}

.label.active {
  color: #00b4b0;
  font-weight: bold;
}

.google-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #f5f5f5;
  border: none;
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.google-button img {
  width: 20px;
}

.divider {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.divider hr {
  flex: 1;
  border: none;
  border-top: 1px solid #ccc;
}

.divider span {
  margin: 0 10px;
  color: #777;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.form-row {
  display: flex;
  gap: 10%;
}

.half {
  flex: 1;
}

.required {
  color: red;
  margin-left: 4px;
}


.password-input {
  display: flex;
  align-items: center;
}

.password-input input {
  flex: 1;
}

.password-input button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0 0.5rem;
}

.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 4px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.cancel {
  background: none;
  color: #00b4b0;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.submit {
  background: #00b4b0;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 600px) {
  .form-card {
    padding: 1.2rem;
  }

  .title {
    font-size: 1.3rem;
  }

  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .cancel,
  .submit {
    width: 100%;
    text-align: center;
  }

  .form-row {
    flex-direction: column;
  }

  .form-row input[type='time'],
  .form-row .submit {
    width: 100%;
  }

    .form-group input,
  .form-group select {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  /* Limita el ancho real si el contenedor es muy grande */
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="number"],
  .form-group input[type="password"] {
    max-width: 320px;
    margin: 0 auto;
  }

  ul li {
    flex-direction: column;
    align-items: flex-start;
  }

  .delete-btn {
    align-self: flex-end;
    margin-top: 5px;
  }

  .progress-labels .label {
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>

