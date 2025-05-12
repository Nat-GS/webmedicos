<template>
  <div class="background">
    <div class="form-card">
      <!-- Barra de progreso -->
      <div class="progress">
        <div class="step completed">1</div>
        <div class="line completed"></div>
        <div class="step active">2</div>
        <div class="line"></div>
        <div class="step">3</div>
        <div class="line"></div>
        <div class="step">4</div>
      </div>
      <div class="progress-labels">
        <span class="label completed">Datos Básicos</span>
        <span class="label active">Datos Personales</span>
        <span class="label">Datos Profesionales</span>
        <span class="label">Documentación</span>
      </div>

      <h2 class="title">Información Personal</h2>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Fecha de Nacimiento</label>
          <input type="date" v-model="form.fechaNacimiento" />
        </div>

        <div class="form-group">
          <label>Sexo</label>
          <select v-model="form.sexo">
            <option disabled value="">Seleccione</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>

        <div class="form-group">
          <label>Tipo de Documento <span class="required">*</span></label>
          <select v-model="form.tipoDocumento">
            <option value="CI">Carnet de Identidad</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
          <p class="error" v-if="errors.tipoDocumento">{{ errors.tipoDocumento }}</p>
        </div>

        <div class="form-row document-row">
        <div class="form-group">
            <label>Número de Documento <span class="required">*</span></label>
            <input v-model="form.documentoIdentidad" placeholder="Ej: 12345678" />
            <p class="error" v-if="errors.documentoIdentidad">{{ errors.documentoIdentidad }}</p>
        </div>

        <div class="form-group ext" v-if="form.tipoDocumento === 'CI'">
            <label>Extensión <span class="required">*</span></label>
            <select v-model="form.extension">
            <option disabled value="">Seleccione</option>
            <option>CB</option>
            <option>LP</option>
            <option>SC</option>
            </select>
            <p class="error" v-if="errors.extension">{{ errors.extension }}</p>
        </div>
        </div>


        <div class="form-group">
          <label>Procedencia</label>
          <input v-model="form.procedencia" placeholder="Ej: Cochabamba" />
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
import { reactive, onMounted } from 'vue';
import { useFormularioStore } from '@/stores/formularioStore';
import { useRouter } from 'vue-router';

const store = useFormularioStore();
const router = useRouter();

const form = reactive({ ...store.paso2 });
const errors = reactive({});

onMounted(() => {
  Object.assign(form, store.paso2);
});

function validate() {
  const soloNumeros = /^[0-9]+$/;

  errors.tipoDocumento = !form.tipoDocumento ? 'Seleccione un tipo de documento' : '';
  errors.documentoIdentidad = !soloNumeros.test(form.documentoIdentidad || '')
    ? 'Ingrese solo números en el documento'
    : '';
  errors.extension = form.tipoDocumento === 'CI' && !form.extension ? 'Campo requerido' : '';
}

function handleSubmit() {
  validate();
  const invalido = Object.values(errors).some(e => e);
  if (!invalido) {
    store.paso2 = { ...form };
    router.push('/registro/paso3');
  }
}

function volver() {
  store.paso2 = { ...form };
  router.push('/registro/paso1');
}
</script>

<style scoped>
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
}
</style>
