<template>
  <div class="centrar">
    <div class="contCapacidad">
      <h2>Consulte un estudiante por su cédula</h2>
      <input v-model="cedula" type="text" placeholder="Ingrese la cédula..." />
      <button @click="consultarEstudiante">Consultar</button>
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      <label for="">Fecha de Nacimiento</label>
      <input v-model="fecha" type="text" />
      <label for="">Provincia</label>
      <input v-model="provincia" type="text" />
    </div>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fecha: null,
      provincia: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fecha = data.fecha;
      this.provincia = data.provincia;
    },
  },
};
</script>

<style>
</style>