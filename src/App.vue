<template>
  <div id="app">
    <NavbarGeneral />
    <router-view />
  </div>
</template>

<script>
import NavbarGeneral from './components/NavbarGeneral.vue'

export default {
  name: 'App',
  components: { NavbarGeneral }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: white;
}
</style>
