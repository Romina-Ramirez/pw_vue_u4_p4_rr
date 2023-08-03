<template>
  <input v-model="cedula" type="text" placeholder="Ingrese la cédula..." />
  <button @click="consultarEstudiante">Consultar</button>
  <label for="">Nombre</label>
  <input v-model="nombre" type="text" />
  <label for="">Apellido</label>
  <input v-model="apellido" type="text" />
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
    },
  },
};
</script>

<style>
</style>