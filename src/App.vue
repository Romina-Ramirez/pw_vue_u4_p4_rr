<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h1>Consultar Estudiante</h1>
    <ConsultaEstudiante />
  </div>
  <div>
    <h1>Ingresar Estudiante</h1>
    <GuardaEstudiante />
  </div>
  <div>
    <h1>Actualizar Estudiante</h1>
    <ActualizarEstudiante />
  </div>
  <div>
    <h1>Eliminar Estudiante</h1>
    <EliminarEstudiante />
  </div>
</template>

<script>
import ActualizarEstudiante from "./modules/estudiante/pages/ActualizarEstudiante.vue";
import ConsultaEstudiante from "./modules/estudiante/pages/ConsultaEstudiante.vue";
import EliminarEstudiante from "./modules/estudiante/pages/EliminarEstudiante.vue";
import GuardaEstudiante from "./modules/estudiante/pages/GuardaEstudiante.vue";

export default {
  name: "App",
  components: {
    ConsultaEstudiante,
    GuardaEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
