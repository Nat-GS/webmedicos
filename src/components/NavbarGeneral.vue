<template>
  <header class="navbar">
    <div class="logo">
      🩺 <router-link to="/">MédicosYa!</router-link>
    </div>
    <nav class="nav-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/registro/paso0">Registro Doctor</router-link>
      <router-link to="/registro-usuario">Registro Servicio</router-link>
    </nav>
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <div class="mobile-menu" v-if="isOpen">
      <router-link to="/">Inicio</router-link>
      <router-link to="/registro/paso0">Registro Doctor</router-link>
      <router-link to="/registro-usuario">Registro Servicio</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarGeneral',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #808D96;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  flex-wrap: wrap;
  position: relative;
}

.logo {
  font-size: 1.3rem;
  font-weight: bold;
}

.logo a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  font-weight: 600;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  font-size: 1.6rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Mobile menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  width: 100%;
  background: #808D96;
  padding: 10px 0;
}

.mobile-menu a {
  padding: 10px 24px;
  color: white;
  text-decoration: none;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .menu-toggle {
    display: block;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
