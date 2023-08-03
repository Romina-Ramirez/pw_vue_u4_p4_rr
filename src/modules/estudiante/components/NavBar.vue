<template>
  <div class="container">
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/consulta">Consultar</router-link>
    <router-link to="/ingreso">Ingresar</router-link>
    <router-link to="/actualizacion">Actualizar</router-link>
    <router-link to="/borrar">Borrar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}

a {
  padding: 10px 70px;
}

.container {
  background: #41B883;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid #333B59;
}
</style>