<template>
  <div class="background">
    <div class="form-card">
      <!-- Progreso -->
      <div class="progress">
        <div class="step completed">1</div>
        <div class="line completed"></div>
        <div class="step completed">2</div>
        <div class="line completed"></div>
        <div class="step completed">3</div>
        <div class="line completed"></div>
        <div class="step active">4</div>
      </div>
      <div class="progress-labels">
        <span class="label completed">Información Básica</span>
        <span class="label completed">Información Personal</span>
        <span class="label completed">Información Profesional</span>
        <span class="label active">Documentación</span>
      </div>

      <h2 class="title">Sube tu Documentación</h2>

      

      <form @submit.prevent="finalizarRegistro">
            <div class="upload-field" v-for="campo in documentosCampos" :key="campo.key">
                <label>{{ campo.label }}</label>
                <div class="upload-container">
                    <span class="filename">{{ documentos[campo.key]?.name || 'Subir documento' }}</span>
                    <label class="upload-btn">
                    <input type="file" @change="e => handleFileChange(e, campo.key)" hidden />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#00b4b0" viewBox="0 0 24 24">
                        <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.92v4h6.5V9h3.92L12 2z" />
                    </svg>
                    </label>
                </div>
                <small class="file-hint">Tamaño máximo permitido: 5MB</small>
            </div>

          <div class="form-actions">
            <button type="button" class="cancel" @click="volver">Volver</button>
            <button type="submit" class="submit">Finalizar</button>
          </div>

      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useFormularioStore } from '@/stores/formularioStore'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const store = useFormularioStore()
const router = useRouter()

// Campos de documentos (no obligatorios)
const documentos = reactive({
  matriculaColegio: null,
  tituloProfesional: null,
  certificadosEspecialidades: null
})

const documentosCampos = [
  { key: 'matriculaColegio', label: 'Matrícula Colegio de Médicos' },
  { key: 'tituloProfesional', label: 'Título profesional' },
  { key: 'certificadosEspecialidades', label: 'Certificados de especialidades (opcional)' }
]

function handleFileChange(event, key) {
  const file = event.target.files[0];
  const maxSize = 5 * 1024 * 1024; // 5MB en bytes

  if (file && file.size > maxSize) {
    toast.error("El archivo excede el límite de 5MB.");
    event.target.value = ""; // limpia el input
    return;
  }

  documentos[key] = file;
}



function finalizarRegistro() {
  const datosFinales = store.obtenerFormularioCompleto()
  console.log('Formulario completo:', datosFinales)
  console.log('Archivos adjuntos:', documentos)

  toast.success('¡Registro finalizado con éxito!', {
    position: 'top-right',
    autoClose: 3000
  })

  // Limpiar el formulario (campos paso1, paso2, paso3)
  store.resetFormulario();

  // Limpiar los archivos adjuntos
  for (const key in documentos) {
    documentos[key] = null;
  }

  // Esperar 3 segundos antes de redirigir
  setTimeout(() => {
    router.push('/')
  }, 3000);
   // Aquí puedes redirigir o limpiar formulario
}


function volver() {
  router.push('/registro/paso3')
}


</script>


<style scoped>
.file-hint {
  font-size: 0.75rem;
  color: #888;
  margin-top: 4px;
}


.form-row.document-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.form-row.document-row .form-group {
  flex: 1;
}

.form-row.document-row .form-group.ext {
  max-width: 120px;
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
  font-size: 1.6rem;
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
  box-sizing: border-box;
}

ul {
  padding-left: 0;
  list-style: none;
  margin-top: 10px;
}

ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 5px;
  background: #f9f9f9;
  padding: 8px 12px;
  border-radius: 6px;
}

.required {
  color: red;
  margin-left: 4px;
}

.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 4px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  gap: 10px;
}

.cancel,
.submit {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.cancel {
  background: none;
  color: #00b4b0;
}

.submit {
  background: #00b4b0;
  color: white;
}

input[type="file"] {
  border: 1px solid #ccc;
  padding: 0.4rem;
  border-radius: 6px;
  background-color: #f5f5f5;
}

.skip {
  background: none;
  color: #00b4b0;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.upload-field {
  margin-bottom: 1.2rem;
}

.upload-field label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.upload-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  background-color: #f9f9f9;
}

.filename {
  color: #888;
  font-size: 0.95rem;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.upload-btn {
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
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

  .form-row:not(.document-row) {
    flex-direction: column;
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

  .upload-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    height: 1%;
  }

  .upload-btn {
    align-self: flex-end;
  }
}
</style>

