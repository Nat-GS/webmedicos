<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-logo">🩺 MédicosYa!</div>
        <div class="social-icons">
          <a href="#"><img src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png" /></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png" /></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png" /></a>
        </div>
      </div>

      <div class="footer-links">
        <a href="#">Términos y condiciones</a>
        <a href="#">Política de Privacidad</a>
        <a href="#">Preguntas frecuentes</a>
      </div>

      <div class="footer-subscribe">
        <p><strong>¿Quieres mantenerte informado sobre nuevas especialidades, beneficios y actualizaciones de MedicosYa?</strong></p>
        <p>Déjanos tu correo y recibe novedades directamente en tu bandeja de entrada.</p>
        <div class="subscribe-form">
          <input type="email" placeholder="Correo electrónico" />
          <button>Suscribirse</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">MedicosYa © 2025 — Todos los derechos reservados.</div>
  </footer>
</template>

<script>
export default {
  name: 'FooterGeneral'
}
</script>

<style scoped>
.footer {
  background-color: #53aeb1;
  color: white;
  padding: 40px 30px 20px;
  font-family: 'Segoe UI', sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left {
  flex: 1;
  min-width: 250px;
}

.footer-logo {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.social-icons a {
  margin-right: 15px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
  flex: 1;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.footer-subscribe {
  flex: 1.5;
  min-width: 280px;
}

.footer-subscribe p {
  margin: 5px 0;
  font-size: 0.95rem;
}

.subscribe-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.subscribe-form input {
  padding: 10px;
  border-radius: 20px;
  border: none;
  flex: 1;
  min-width: 180px;
}

.subscribe-form button {
  padding: 10px 20px;
  border-radius: 20px;
  background: none;
  border: 2px solid white;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.footer-bottom {
  margin-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 10px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }

  .footer-links {
    align-items: center;
  }

  .subscribe-form {
    flex-direction: column;
    align-items: center;
  }

  .subscribe-form input,
  .subscribe-form button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
