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
      cedula: this.$route.params.cedula,
      nombre: null,
      apellido: null,
      fecha: null,
      provincia: null,
    };
  },
  methods: {
    async consultarEstudiante(cedula) {
      const data = await obtenerEstudianteFachada(cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fecha = data.fechaNacimiento;
      this.provincia = data.provincia;
    },
  },
  mounted() {
    console.log(this.$route)
    const { cedula } = this.$route.params;
    console.log(cedula);
    this.consultarEstudiante(cedula);
    console.log(this.$route)
    const prov = this.$route.query.provincia;
    const {provincia} = this.$route.query;
    // http://localhost:8081/......./1723617216?ciudad=quito&edad=18
  },
};
</script>

<style>
</style>