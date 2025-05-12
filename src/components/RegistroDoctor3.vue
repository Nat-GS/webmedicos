<template>
  <div class="background">
    <div class="form-card">
      <!-- Barra de progreso -->
      <div class="progress">
        <div class="step completed">1</div>
        <div class="line completed"></div>
        <div class="step completed">2</div>
        <div class="line completed"></div>
        <div class="step active">3</div>
        <div class="line"></div>
        <div class="step">4</div>
      </div>
      <div class="progress-labels">
        <span class="label completed">Datos Básica</span>
        <span class="label completed">Datos Personal</span>
        <span class="label active">Datos Profesionales</span>
        <span class="label">Documentación</span>
      </div>

      <h2 class="title">Información Profesional</h2>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Matrícula Colegio Médico <span class="required">*</span></label>
          <input v-model="form.matricula_colm" placeholder="Ej: 12345-CBM" />
          <p class="error" v-if="errors.matricula_colm">{{ errors.matricula_colm }}</p>
        </div>

        <div class="form-group">
          <label>Dirección del Consultorio</label>
          <input v-model="form.direccion_consultorio" placeholder="Ej: Av. Las Américas #123" />
        </div>

        <div class="form-group">
          <label>Año de Titulación</label>
          <input v-model="form.titulacion" type="number" min="1900" max="2099" placeholder="Ej: 2015" />
        </div>

        <div class="form-group">
          <label>Universidad</label>
          <input v-model="form.universidad" placeholder="Ej: Universidad Mayor de San Simón" />
        </div>

        <div class="form-group">
          <label>Especialidad <span class="required">*</span></label>
          <input v-model="form.especialidad" placeholder="Ej: Pediatría" />
          <p class="error" v-if="errors.especialidad">{{ errors.especialidad }}</p>
        </div>

        <div class="form-group">
        <label>Disponibilidad <span class="required">*</span></label>

        <div class="days-selector">
            <button
            v-for="dia in diasSemana"
            :key="dia.nombre"
            :class="['day-button', diaSeleccionado === dia.nombre ? 'active' : '']"
            type="button"
            @click="diaSeleccionado = dia.nombre"
            >
            {{ dia.abreviado }}
            </button>
        </div>

        <div class="form-row">
            <input type="time" v-model="nuevaDisponibilidad.hora_inicio" />
            <input type="time" v-model="nuevaDisponibilidad.hora_fin" />
            <button type="button" class="submit1" @click="agregarDisponibilidad">Añadir</button>
        </div>

        <ul>
            <li v-for="(item, index) in form.disponibilidad" :key="index">
            {{ item.dia }}: {{ item.hora_inicio }} - {{ item.hora_fin }}
            <button type="button" class="delete-btn" @click="form.disponibilidad.splice(index, 1)">
            ✕
            </button>
            </li>
        </ul>

        <p class="error" v-if="errors.disponibilidad">{{ errors.disponibilidad }}</p>
        </div>

        <div class="form-actions">
          <button type="button" class="cancel" @click="volver">Anterior</button>
          <button type="submit" class="submit">Siguiente</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useFormularioStore } from '@/stores/formularioStore'
import { useRouter } from 'vue-router'

const store = useFormularioStore()
const router = useRouter()
const form = reactive({
  ...store.paso3,
  disponibilidad: store.paso3.disponibilidad || []
})
const errors = reactive({})
const nuevaDisponibilidad = reactive({ dia: '', hora_inicio: '', hora_fin: '' })
const diaSeleccionado = ref('')
const diasSemana = [
  { nombre: 'Lunes', abreviado: 'Lu' },
  { nombre: 'Martes', abreviado: 'Mar' },
  { nombre: 'Miércoles', abreviado: 'Mi' },
  { nombre: 'Jueves', abreviado: 'Ju' },
  { nombre: 'Viernes', abreviado: 'Vi' },
  { nombre: 'Sábado', abreviado: 'Sa' },
  { nombre: 'Domingo', abreviado: 'Do' },
]

onMounted(() => {
  Object.assign(form, store.paso3)
})

function agregarDisponibilidad() {
  if (diaSeleccionado.value && nuevaDisponibilidad.hora_inicio && nuevaDisponibilidad.hora_fin) {
    form.disponibilidad.push({
      dia: diaSeleccionado.value,
      hora_inicio: nuevaDisponibilidad.hora_inicio,
      hora_fin: nuevaDisponibilidad.hora_fin
    })
    diaSeleccionado.value = ''
    nuevaDisponibilidad.hora_inicio = ''
    nuevaDisponibilidad.hora_fin = ''
  }
}


function validate() {
  errors.matricula_colm = !form.matricula_colm ? 'Campo obligatorio' : ''
  errors.especialidad = !form.especialidad ? 'Campo obligatorio' : ''
  errors.disponibilidad = form.disponibilidad.length === 0 ? 'Debe agregar al menos una disponibilidad' : ''
}

function handleSubmit() {
  validate()
  if (!Object.values(errors).some(e => e)) {
    store.paso3 = { ...form }
    router.push('/registro/paso4');
  }
}

function volver() {
  store.paso3 = { ...form }
  router.push('/registro/paso2')
}
</script>

<style scoped>
.delete-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  margin-left: 10px;
  margin: 5px;
  font-size: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.delete-btn:hover {
  background-color: #e60000;
}

.days-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.day-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #00b4b0;
  background: white;
  color: #00b4b0;
  font-weight: bold;
  cursor: pointer;
}

.day-button.active {
  background: #00b4b0;
  color: white;
}

.background {
  background: linear-gradient(120deg, #00b4b0, #0077b6);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 40px;
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

.submit1 {
  background: #27b400;
  color: white;
  padding: 0.1rem 0.8rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

/* 📱 Responsive para móviles */
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

  .form-row:not() {
    flex-direction: column;
  }

  .form-group input,
  .form-group select {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .form-row input[type='time'],
  .form-row .submit {
    width: 100%;
  }

  ul li {
    flex-direction: column;
    align-items: flex-start;
  }

  .delete-btn {
    align-self: flex-end;
    margin-top: 5px;
  }

  .progress-labels {
    flex-direction: row;
    gap: 5px;
  }

  .progress-labels .label {
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>

