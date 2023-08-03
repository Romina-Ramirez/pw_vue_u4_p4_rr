<template>
  <label for="">Id</label>
  <input v-model="id" type="text" />
  <label for="">Cedula</label>
  <input v-model="cedula" type="text" />
  <label for="">Nombre</label>
  <input v-model="nombre" type="text" />
  <label for="">Apellido</label>
  <input v-model="apellido" type="text" />
  <div>
    <button @click="actualizarEstudiante">Actualizar</button>
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
    };
  },
  methods: {
    actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: "2001-12-12T00:00:00",
        provincia: "Pichincha",
      };
      actualizarEstudianteFachada(data, this.id);
    },
  },
};
</script>

<style>
</style>