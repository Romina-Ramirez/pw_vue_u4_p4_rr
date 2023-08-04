<template>
  <div class="centrar">
    <div class="contCapacidad">
      <h2>Borre un estudiante por su id</h2>
      <input v-model="id" type="text" />
      <button @click="eliminarEstudiante">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    eliminarEstudiante() {
      eliminarEstudianteFachada(this.id);
      console.log('Estudiante eliminado.')
    },
  },
};
</script>

<style>
</style>