
import { createRouter, createWebHistory } from 'vue-router'
import routerGuards from './router-guards'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Questions from '../views/Questions.vue'
import Quizzes from '../views/Quizzes.vue'
import TakeQuiz from '../views/TakeQuiz.vue'

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
                path: '/questions',
                name: 'Questions',
                component: Questions,

            },
            {
                path: '/quizzes',
                name: 'Quizzes',
                component: Quizzes,

            },
            {
                path: '/takequiz',
                name: 'TakeQuiz',
                component: TakeQuiz,

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