<template>
  <div class="background">
    <div class="form-card">
      <h2 class="title">Términos y Condiciones</h2>

      <div class="terms-content">
        <p><strong>Descargo de Responsabilidad sobre Información Médica</strong></p>

        <p>
          Al utilizar esta aplicación, usted reconoce y acepta que la veracidad, exactitud,
          actualidad y completitud de la información médica que registre es de su exclusiva
          responsabilidad.
        </p>

        <p>
          La aplicación y sus desarrolladores no garantizan, validan ni verifican los datos
          ingresados, y no se hacen responsables, de manera directa o indirecta, por omisiones,
          errores, falsedades o inexactitudes en la información proporcionada por los usuarios.
        </p>

        <p>
          Asimismo, usted entiende que la calidad y pertinencia de los servicios, recomendaciones o
          acciones que pudieran derivarse del uso de esta aplicación dependen íntegramente de la
          exactitud de los datos suministrados por usted.
        </p>

        <p>
          Al aceptar este descargo, usted libera a la aplicación, a sus propietarios,
          desarrolladores, empleados, afiliados y representantes de toda responsabilidad legal,
          médica o de cualquier otra índole derivada del uso, interpretación o mal uso de la
          información que usted mismo haya registrado.
        </p>

        <p>
          Se le recuerda expresamente la importancia de incluir todos los antecedentes médicos
          relevantes, con la mayor precisión y exhaustividad posible, para evitar riesgos,
          confusiones o consecuencias adversas a su salud.
        </p>

        <p>
          La omisión, tergiversación o falsificación de cualquier dato es responsabilidad única y
          exclusiva del usuario.
        </p>

        <p>
          Al continuar utilizando esta aplicación, usted declara haber leído, comprendido y
          aceptado plenamente los términos de este descargo de responsabilidad.
        </p>
      </div>

      <div class="form-actions" style="justify-content: center;">
        <button class="submit" @click="aceptar">Acepto y Continuar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function aceptar() {
  router.push('/registro/paso1')
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
