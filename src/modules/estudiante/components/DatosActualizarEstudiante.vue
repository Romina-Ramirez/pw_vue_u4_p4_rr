<template>
  <div class="centrar">
    <div class="contCapacidad">
      <h2>Actualice los datos de un estudiante por su id</h2>
      <label for="">Id</label>
      <input v-model="id" type="text" />
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
      <button @click="actualizarEstudiante">Actualizar</button>
    </div>
  </div>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
      cedula: null,
      nombre: null,
      apellido: null,
      fecha: null,
      provincia: null,
    };
  },
  methods: {
    actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fecha,
        provincia: this.provincia,
      };
      actualizarEstudianteFachada(data, this.id);
    },
  },
};
</script>

<style>
</style>