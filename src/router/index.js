
import { createRouter, createWebHistory } from 'vue-router'
import routerGuards from './router-guards'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import AddQuestion from '../views/AddQuestion.vue'

const routes = [

    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home

            },
            {
                path: '/addquestion',
                name: 'Add Question',
                component: AddQuestion,

            }],
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { guest: true },

    },

]

const router = createRouter({

    history: createWebHistory(),
    routes,
})

routerGuards(router);

export default router