<template>
  <div class="landing-page">
    <NavbarGeneral />

  <section class="hero-block">
    <div class="hero-content">
      <div class="hero-left">
        <div class="image-background">
          <div class="doctor-image">
            <img :src="DoctorHero" alt="Doctor" />
          </div>
        </div>
      </div>
      <div class="hero-right">
        <h1>
          Conectamos a <span class="blue">personas</span>,
          <span class="blue">profesionales</span> y
          <span class="blue">servicios</span> de salud
        </h1>
        <p>
          MedicosYa es la plataforma que une pacientes, doctores y centros médicos para ofrecer atención remota, rápida y confiable, desde cualquier lugar.
        </p>
        <a href="#registro" class="cta">Comienza ahora</a>
      </div>
    </div>
  </section>

  <section class="about-block">
    <div class="about-text">
      <h2>¿Qué es MédicosYa!?</h2>
      <p>
        MedicosYa es una solución integral de salud digital que conecta pacientes, doctores y servicios médicos en un mismo ecosistema virtual. 
        Facilita el acceso a consultas médicas en línea, permite el llenado colaborativo de historiales clínicos y ofrece acceso directo a farmacias, 
        laboratorios, servicios de imagenología y enfermería desde cualquier lugar.<br />
        Esta plataforma está pensada para quienes valoran su tiempo y desean una atención médica confiable sin necesidad de trasladarse. <br />
        Ya sea para un control rutinario, una orientación especializada o la continuidad de un tratamiento, 
        MedicosYa te brinda la posibilidad de recibir atención de calidad desde la comodidad de tu hogar.
      </p>
    </div>

    <div class="about-image-section">
      <div class="circle-deco"></div>
      <img :src="AboutDoctor" alt="AboutDoctor" />
    </div>
  </section>

<section class="specialties-section">
  <div class="specialties-container">
    <h2>
      Atención <span class="highlight">médica</span> especializada
    </h2>
    <p class="subtitle">
      Contamos con profesionales de distintas áreas de salud, disponibles<br />
      para atenderte de forma remota.
    </p>
    <p class="note">
      Estas son solo algunas de las especialidades disponibles en nuestra plataforma.
    </p>

    <div class="specialties-grid">
      <div class="card" v-for="(item, i) in especialidades" :key="i">
        <div class="icon-number">
          <img :src="item.icono" :alt="item.titulo" />
          <span class="number">{{ item.numero }}</span>
        </div>
        <h3 class="titulo">{{ item.titulo }}</h3>
        <p class="descripcion">{{ item.descripcion }}</p>
      </div>
    </div>
  </div>
</section>

<section id="registro" class="registro-header">
  <h3><span class="azul">Bienvenido a MédicosYa!</span></h3>
  <h2>
    Tu camino hacia una mejor salud comienza aquí.<br />
    <span class="registro-cta">¡Regístrate!</span>
  </h2>
</section>

<section class="registro-card light">
  <div class="registro-img">
    <img :src="PacienteCard" alt="Paciente" />
  </div>
  <div class="registro-text">
    <h3>¿Eres <span class="azul">paciente</span>? Solo descarga la app</h3>
    <p>
      Desde la app móvil podrás registrarte, crear una consulta, elegir al doctor que mejor se adapte a ti y atenderte por videollamada. Además, tendrás acceso a tu historial clínico y podrás calificar cada atención.
    </p>
    <a href="https://play.google.com/store" target="_blank">
      <button class="btn">Descargar en Play Store</button>
    </a>
  </div>
</section>

<section class="registro-card">
  <div class="registro-text">
    <h3>
      <span class="azul">Atiende pacientes</span> desde tu celular<br />
      Tú decides cuánto <span class="azul">cobrar</span>
    </h3>
    <p>
      En MedicosYa puedes postularte a consultas, establecer tu tarifa, atender por videollamada y recibir valoraciones que potencien tu perfil profesional. Todo desde una interfaz intuitiva y sin comisiones ocultas.
    </p>
    <router-link to="/registro/paso0">
      <button class="btn">Registrarme como Doctor</button>
    </router-link>
  </div>
  <div class="registro-img">
    <img :src="DoctorCard" alt="Doctor" />
  </div>
</section>

<section class="registro-card light">
  <div class="registro-img">
    <img :src="ServicioCard" alt="Servicio" />
  </div>
  <div class="registro-text">
    <h3>
      Expande tu alcance digital como <span class="azul">servicio</span> de salud
    </h3>
    <p>
      Si tienes una farmacia, laboratorio, clínica de imagenología o servicio de enfermería, MédicosYa te conecta con pacientes y doctores que necesitan tus servicios ahora mismo. Regístrate y forma parte del ecosistema.
    </p>
    <router-link to="/registro-usuario">
      <button class="btn">Registrar mi Servicio</button>
    </router-link>
  </div>
</section>



    <FooterGeneral />
  </div>
</template>

<script>
import FooterGeneral from '@/components/FooterGeneral.vue'
import DoctorHero from '../assets/Doctor1.png'
import AboutDoctor from '@/assets/telemedicina.jpg'
import DoctorCard from '../assets/Doctor.jpg'
import PacienteCard from '../assets/Paciente.webp'
import ServicioCard from '../assets/Servicio.jpg'

export default {
  name: 'LandingPage',
  components: {
    FooterGeneral
  },
  data() {
    return {
      DoctorHero,
      AboutDoctor,
      DoctorCard,
      PacienteCard,
      ServicioCard,
      especialidades: [
        {
          numero: '01',
          titulo: 'Odontología',
          icono: 'https://img.icons8.com/fluency/48/tooth.png',
          descripcion:
            'Prevención, diagnóstico y tratamiento de problemas dentales. Atención en caries, limpieza dental, ortodoncia y salud bucal general.'
        },
        {
          numero: '02',
          titulo: 'Pediatría',
          icono: 'https://img.icons8.com/fluency/48/baby.png',
          descripcion:
            'Atención médica integral para niños, desde recién nacidos hasta adolescentes, asegurando su correcto desarrollo físico y emocional.'
        },
        {
          numero: '03',
          titulo: 'Cardiología',
          icono: 'https://img.icons8.com/?size=100&id=fS2gQg2rrN9C&format=png&color=000000',
          descripcion:
            'Diagnóstico y tratamiento de enfermedades del corazón y del sistema circulatorio. Ideal para chequeos, control de presión y más.'
        },
        {
          numero: '04',
          titulo: 'Neurología',
          icono: 'https://img.icons8.com/fluency/48/brain.png',
          descripcion:
            'Diagnóstico y tratamiento de trastornos del sistema nervioso. Atención a pacientes con migrañas, epilepsia y otros problemas neurológicos.'
        },
        {
          numero: '05',
          titulo: 'Oftalmología',
          icono: 'https://img.icons8.com/fluency/48/visible.png',
          descripcion:
            'Cuidado de la salud visual. Exámenes de vista, tratamiento de infecciones oculares, control de miopía y prescripción de lentes.'
        },
        {
          numero: '06',
          titulo: 'Medicina General',
          icono: 'https://img.icons8.com/fluency/48/stethoscope.png',
          descripcion:
            'Atención primaria para todo tipo de pacientes. Consulta general, orientación médica y seguimiento básico de salud.'
        }
      ]
    }
  }, 

}
</script>

<style scoped>
/* GENERAL RESET */
.landing-page {
  font-family: 'Segoe UI', sans-serif;
  color: #212121;
}

html {
  scroll-behavior: smooth;
}



/* BLOQUE UNO - HERO       */

.hero-block {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 60px 0;
}

.hero-content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1400px;
  padding: 0 15%;
  gap: 10%;
  align-items: center;
  justify-content: flex-start;
}

.hero-left {
  position: relative;
  width: 280px;
  height: 280px;
  flex-shrink: 0;
}

.image-background {
  background-color: #bff1f2;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  position: relative;
}

.doctor-image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.doctor-image img {
  width: 250px;
  object-fit: cover;
}

.hero-right {
  flex: 1;
  min-width: 280px;
  max-width: 700px;
  align-items: center;
  text-align: center;
}

.hero-right h1 {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.hero-right p {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 20px;
}

.blue {
  color: #2196f3;
  font-weight: bold;
}

.cta {
  background-color: #00bfa5;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none; 
  display: inline-block;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    padding: 0 20px;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }

  .hero-left {
    width: 220px;
    height: 220px;
  }

  .doctor-image img {
    width: 200px;
  }

  .hero-right {
    max-width: 100%;
    text-align: center;
  }

  .hero-right h1 {
    font-size: 1.6rem;
  }

  .hero-right p {
    font-size: 1rem;
  }

  .cta {
    padding: 10px 18px;
    font-size: 0.95rem;
  }
}



/* BLOQUE DOS - ABOUT      */

.about-block {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #f4fafa;
  align-items: stretch;
}

.about-text {
  flex: 5;
  background-color: #3ba2a4;
  color: white;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  border-radius: 15px;
}

.about-text h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  margin-top: 10px;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 10px;
}

.about-image-section {
  flex: 3;
  background-color: #c7ecf1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-width: 280px;
  border-radius: 15px;
}

.about-image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.circle-deco {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffab9d;
  width: 80px;
  height: 80px;
  border-bottom-left-radius: 100%;
  z-index: 1;
}


/* RESPONSIVE */

@media (max-width: 768px) {
 
 .about-block {
    flex-direction: column;
  }

  .about-text {
    text-align: center;
  }

  .about-image-section {
    height: 300px;
  }
}



/*BLOQUE TRES */
.specialties-section {
  background-color: #eaf9fc;
  padding: 60px 20px;
  width: 100%;
}

.specialties-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.specialties-container h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.highlight {
  color: #2196f3;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.note {
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 40px;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 25px 20px;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  max-width: 350px;
}

.icon-number {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.icon-number img {
  width: 40px;
  background: #f2f7fa;
  padding: 10px;
  border-radius: 12px;
}

.icon-number .number {
  font-size: 1.6rem;
  font-weight: bold;
  color: #c6e2f9;
}

.titulo {
  color: #0071ce;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.descripcion {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .specialties-section {
    padding: 40px 16px;
  }

  .specialties-container {
    padding: 0 16px;
  }

  .card {
    padding: 20px;
  }

  .specialties-container h2 {
    font-size: 1.8rem;
  }

  .specialties-container .subtitle {
    font-size: 0.95rem;
  }

  .specialties-container .note {
    font-size: 0.9rem;
  }
}



/*BLOQUES RESTANTES */
.registro-header {
  text-align: center;
  padding: 60px 20px;
}

.registro-header h2 {
  font-size: 2.5rem;
  font-weight: bold;
}


.registro-header .azul,
.registro-header .registro-cta {
  color: #2B88D9;
}

.registro-cta {
  font-size: 1.8rem;
  font-weight: bold;
}

.registro-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f7f7f7;
  border-radius: 12px;
  margin: 20px auto;
  padding: 30px;
  max-width: 1100px;
  align-items: center;
  gap: 20px;
}

.registro-card.light {
  background-color: #f0f6f8;
}

.registro-img {
  flex: 1;
  min-width: 400px;
  text-align: center;
}

.registro-img img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
}

.registro-text {
  flex: 2;
  min-width: 260px;
}

.registro-text h3 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 20px;
  text-align: center;
}

.registro-text p {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #333;
  margin-left: 20px;
}

.azul {
  color: #2196f3;
}

.btn {
  background-color: #00bfa5;
  color: white;
  padding: 10px 22px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
}

@media (max-width: 768px) {
  .registro-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 20px;
    width: 95%;
    margin: 20px auto;
  }

  .registro-img {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .registro-img img {
    max-width: 260px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .registro-text {
    width: 100%;
    padding: 0 10px;
  }

  .registro-text h3,
  .registro-text p,
  .btn {
    margin-left: 0 !important;
    text-align: center;
  }

  .registro-text h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  .registro-text p {
    font-size: 0.95rem;
    margin-bottom: 16px;
  }

  .btn {
    margin: 0 auto;
    display: inline-block;
  }
}




</style>