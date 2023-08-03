<template>
  <input v-model="id" type="text" />
  <button @click="eliminarEstudiante">Eliminar</button>
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
    },
  },
};
</script>

<style>
</style>