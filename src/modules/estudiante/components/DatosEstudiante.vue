<template>
    <input v-model="cedula" type="text" placeholder="Ingrese la cédula...">
    <button @click="consultarEstudiante">Consultar</button>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      await obtenerEstudianteFachada(this.cedula);
    },
  },
};
</script>

<style>
</style>