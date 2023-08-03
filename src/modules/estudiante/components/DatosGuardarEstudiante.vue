<template>
  <div class="centrar">
    <div class="contCapacidad">
      <h2>Ingrese un estudiante</h2>
      <label for="">Cédula</label>
      <input v-model="cedula" type="text" />
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      <label for="">Fecha de Nacimiento</label>
      <input v-model="fecha" type="text" />
      <label for="">Provincia</label>
      <input v-model="provincia" type="text" />
      <button @click="guardarEstudiante">Guardar</button>
    </div>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js";
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
    guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fecha,
        provincia: this.provincia,
      };
      ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style>
</style>