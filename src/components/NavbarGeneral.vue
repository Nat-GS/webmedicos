<template>
  <header class="navbar">
    <div class="navbar-logo">
      <span class="logo-icon">🩺</span>
      <router-link to="/" class="logo-text">MedicosYa!</router-link>
    </div>
    <nav class="navbar-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/registro-usuario">Registrar Servicio</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarGeneral'
}
</script>

<style scoped>
.navbar {
  background-color: #808d96; /* gris del header */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  color: white;
}

.navbar-logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.4em;
}

.logo-icon {
  margin-right: 8px;
}

.navbar-links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navbar-links a:hover {
  text-decoration: underline;
}

.login-button {
  background-color: #2dcac5; /* celeste del botón */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.login-button:hover {
  background-color: #25a8a4;
}
</style>
