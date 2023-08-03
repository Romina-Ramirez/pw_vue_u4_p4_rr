import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../modules/estudiante/pages/Bienvenida.vue')
    },
    {
        path: '/consulta',
        component: () => import('../modules/estudiante/pages/ConsultaEstudiante.vue')
    },
    {
        path: '/ingreso',
        component: () => import('../modules/estudiante/pages/GuardaEstudiante.vue')
    },
    {
        path: '/actualizacion',
        component: () => import('../modules/estudiante/pages/ActualizarEstudiante.vue')
    },
    {
        path: '/borrar',
        component: () => import('../modules/estudiante/pages/EliminarEstudiante.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../modules/estudiante/pages/NoEncontrada.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router