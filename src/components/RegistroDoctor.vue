<template>
  <div class="background">
    <div class="form-card">
      <!-- Barra de progreso -->
      <div class="progress">
        <div class="step active">1</div>
        <div class="line active"></div>
        <div class="step">2</div>
        <div class="line"></div>
        <div class="step">3</div>
      </div>
      <div class="progress-labels">
        <span class="label active">Datos Básicos</span>
        <span class="label">Datos Personales</span>
        <span class="label">Datos Profesionales</span>
      </div>

      <!-- Título -->
      <h2 class="title">Regístrate</h2>

      <!-- Botón Google -->
      <button class="google-button">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
        Sign up with Google
      </button>

      <!-- Divisor -->
      <div class="divider">
        <hr />
        <span>o regístrate con</span>
        <hr />
      </div>

      <!-- Formulario -->
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Nombres <span class="required">*</span></label>
          <input type="text" v-model="form.nombres" />
          <p v-if="errors.nombres" class="error">{{ errors.nombres }}</p>
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label>Apellido Paterno <span class="required">*</span></label>
            <input type="text" v-model="form.apellidoPaterno" />
            <p v-if="errors.apellidoPaterno" class="error">{{ errors.apellidoPaterno }}</p>
          </div>
          <div class="form-group half">
            <label>Apellido Materno <span class="required">*</span></label>
            <input type="text" v-model="form.apellidoMaterno" />
            <p v-if="errors.apellidoMaterno" class="error">{{ errors.apellidoMaterno }}</p>
          </div>
        </div>

        <div class="form-group">
          <label>Correo Electrónico <span class="required">*</span></label>
          <input type="email" v-model="form.correo" />
          <p v-if="errors.correo" class="error">{{ errors.correo }}</p>
        </div>

        <div class="form-group">
          <label>Teléfono <span class="required">*</span></label>
          <input type="text" v-model="form.telefono" />
          <p v-if="errors.telefono" class="error">{{ errors.telefono }}</p>
        </div>

        <div class="form-group">
          <label>Contraseña <span class="required">*</span></label>
          <div class="password-input">
            <input :type="showPassword ? 'text' : 'password'" v-model="form.password" />
            <button type="button" @click="showPassword = !showPassword">👁</button>
          </div>
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
        </div>

        <div class="form-group">
          <label>Confirmar Contraseña <span class="required">*</span></label>
          <div class="password-input">
            <input :type="showConfirmPassword ? 'text' : 'password'" v-model="form.confirmarPassword" />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword">👁</button>       
          </div>
          <p v-if="errors.confirmarPassword" class="error">{{ errors.confirmarPassword }}</p>
        </div>

        <div class="form-actions">
          <button type="button" class="cancel" @click="cancelar">Cancelar</button>
          <button type="submit" class="submit">Siguiente</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import { useFormularioStore } from '@/stores/formularioStore';
import { useRouter } from 'vue-router';

const store = useFormularioStore();
const router = useRouter();

const showPassword = ref(false)
const showConfirmPassword = ref(false) 

// Iniciar el form con los valores del store
const form = reactive({ ...store.paso1 });
const errors = reactive({});

function validate() {
  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7,15}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  errors.nombres = !nombreRegex.test(form.nombres) ? 'Nombre inválido' : '';
  errors.apellidoPaterno = !nombreRegex.test(form.apellidoPaterno) ? 'Apellido inválido' : '';
  errors.apellidoMaterno = !nombreRegex.test(form.apellidoMaterno) ? 'Apellido inválido' : '';
  errors.correo = !emailRegex.test(form.correo) ? 'Correo inválido' : '';
  errors.telefono = !phoneRegex.test(form.telefono) ? 'Solo números válidos (7 a 15 dígitos)' : '';
  errors.password = !passwordRegex.test(form.password)
    ? 'Mínimo 8 caracteres, una mayúscula y un número'
    : '';
  errors.confirmarPassword = form.password !== form.confirmarPassword
    ? 'Las contraseñas no coinciden'
    : '';
}

// Opcional: recuperar valores si el usuario vuelve
onMounted(() => {
  Object.assign(form, store.paso1);
});

function handleSubmit() {
  validate()
  const tieneErrores = Object.values(errors).some(e => e)
  if (!tieneErrores) {
    store.paso1 = { ...form } 
    router.push('/registro/paso2') 
  }
}


function cancelar() {
  alert('Cancelado');
}
</script>

<style scoped>
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
