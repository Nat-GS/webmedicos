<template>
  <div class="background">
    <div class="form-card">
      <h2 class="title">Términos y Condiciones del Servicio</h2>

      <div class="terms-content">
        <p><strong>Responsabilidad sobre los Datos Registrados</strong></p>

        <p>
          Al registrar los datos del servicio en esta plataforma, usted declara que la información
          proporcionada es precisa, verídica y actualizada. El sistema no se responsabiliza por
          errores, falsedades o inexactitudes proporcionadas por el usuario.
        </p>

        <p>
          La veracidad de los datos del representante legal, ubicación, tipo de servicios y demás
          detalles son responsabilidad exclusiva de quien los proporciona.
        </p>

        <p>
          Cualquier uso indebido o tergiversación de la información puede derivar en sanciones o
          bloqueo del acceso al sistema, de acuerdo con las políticas de la organización.
        </p>

        <p>
          Al continuar, usted acepta estos términos y se compromete a cumplir con las normativas
          aplicables.
        </p>
      </div>

      <div class="form-actions" style="justify-content: center;">
        <button class="submit" @click="aceptar">Acepto y Finalizar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function aceptar() {
  // Redirigir al inicio o dashboard
  router.push('/')
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
  max-width: 600px;
  width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  max-height: 90vh;
}

.title {
  text-align: center;
  color: #00b4b0;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

.terms-content {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 8px;
}

.form-actions {
  display: flex;
  gap: 10px;
}

button.submit {
  background-color: #00b4b0;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

button.submit:hover {
  background-color: #009e9b;
}
</style>
