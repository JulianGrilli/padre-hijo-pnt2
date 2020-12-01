import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    /*{ path: '/', name: 'Home', component: Padre },
    { path: '/hijo', name: 'Hijo', component: Hijo },
    { path: '/padre', name: 'Padre', component: Padre }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


