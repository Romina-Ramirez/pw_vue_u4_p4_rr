import axios from "axios"

export const obtenerEstudianteFachada = async (cedula) => {
    return await obtenerEstudianteAPIAxios(cedula);
}

export const ingresarEstudianteFachada = (bodyEstudiante) => {
    ingresarEstudianteAPI(bodyEstudiante);
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudianteAPI(bodyEstudiante, id);
}

export const eliminarEstudianteFachada = (id) => {
    eliminarEstudianteAPI(id);
}

const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

const obtenerEstudianteAPIAxios = async (cedula) => {
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`).then(r => r.data);
    console.log('AXIOS')
    console.log(data);
    return data;
}

const ingresarEstudianteAPI = (bodyEstudiante) => {
    axios.post(`http://localhost:8081/API/V1.0/Matricula/estudiantes`, bodyEstudiante).then(r => r.data);
}

const actualizarEstudianteAPI = (bodyEstudiante, id) => {
    axios.put(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`, bodyEstudiante).then(r => r.data);
}

const eliminarEstudianteAPI = (id) => {
    axios.delete(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`).then(r => r.data);
}