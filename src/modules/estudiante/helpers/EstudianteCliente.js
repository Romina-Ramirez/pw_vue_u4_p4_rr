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
    const data = await fetch(`http://localhost:8082/API/V1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

const obtenerEstudianteAPIAxios = async (cedula) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIb2xhIiwiaWF0IjoxNjkyODQxNzc0LCJleHAiOjE2OTI4NDI5NzR9.ez0mxtuws0icQaFEbG8cipWk5BsOfeNzKtYkEOw1qsB-wOQOVSWMl4vWPqevuZwyZ-kGj76zz_vrJtApLdA8eQ",
        "Mensaje": "Valor"
    }
    const data = axios.get(`http://localhost:8082/API/V1.0/Matricula/estudiantes/${cedula}`, { headers: headers }).then(r => r.data);
    console.log('AXIOS')
    console.log(data);
    return data;
}

const ingresarEstudianteAPI = (bodyEstudiante) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIb2xhIiwiaWF0IjoxNjkyODQxNzc0LCJleHAiOjE2OTI4NDI5NzR9.ez0mxtuws0icQaFEbG8cipWk5BsOfeNzKtYkEOw1qsB-wOQOVSWMl4vWPqevuZwyZ-kGj76zz_vrJtApLdA8eQ",
        "Mensaje": "Valor"
    }
    axios.post(`http://localhost:8082/API/V1.0/Matricula/estudiantes`, bodyEstudiante, { headers: headers }).then(r => r.data);
}

const actualizarEstudianteAPI = (bodyEstudiante, id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIb2xhIiwiaWF0IjoxNjkyODQxNzc0LCJleHAiOjE2OTI4NDI5NzR9.ez0mxtuws0icQaFEbG8cipWk5BsOfeNzKtYkEOw1qsB-wOQOVSWMl4vWPqevuZwyZ-kGj76zz_vrJtApLdA8eQ",
        "Mensaje": "Valor"
    }
    axios.put(`http://localhost:8082/API/V1.0/Matricula/estudiantes/${id}`, bodyEstudiante, { headers: headers }).then(r => r.data);
}

const eliminarEstudianteAPI = (id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIb2xhIiwiaWF0IjoxNjkyODQxNzc0LCJleHAiOjE2OTI4NDI5NzR9.ez0mxtuws0icQaFEbG8cipWk5BsOfeNzKtYkEOw1qsB-wOQOVSWMl4vWPqevuZwyZ-kGj76zz_vrJtApLdA8eQ",
        "Mensaje": "Valor"
    }
    axios.delete(`http://localhost:8082/API/V1.0/Matricula/estudiantes/${id}`, { headers: headers }).then(r => r.data);
}