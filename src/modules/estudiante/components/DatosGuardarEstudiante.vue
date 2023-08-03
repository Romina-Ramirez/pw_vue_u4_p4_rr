<template>
  <label for="">Cedula</label>
  <input v-model="cedula" type="text" />
  <label for="">Nombre</label>
  <input v-model="nombre" type="text" />
  <label for="">Apellido</label>
  <input v-model="apellido" type="text" />
  <div>
    <button @click="guardarEstudiante">Guardar</button>
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
    };
  },
  methods: {
    guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: "2001-12-12T00:00:00",
        provincia: "Pichincha",
      };
      ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style>
</style>