import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from './components/LogIn.vue'
import AddRes from './components/AddRes.vue'
import UpDate from './components/UpDate.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
    {
        name: 'AddRes',
        component: AddRes,
        path: '/addres'
    },
    {
        name: 'UpDate',
        component: UpDate,
        path: '/update/:id'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;