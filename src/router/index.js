import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Appointment from '../components/Appointment.vue'
import Visit from '../components/Visit.vue'
import Price from '../components/Price.vue'
import Login from '../components/Login.vue'

const routes = [
  {path: '/', name: 'Home', component: Home, alias: '/main'},
  {path: '/Price', name: 'Price', component: Price,},
  {path: '/Appointment', name: 'Appointment', component: Appointment,},
  {path: '/Visit', name: 'Visit', component: Visit,},
  {path: '/Login', name: 'Login', component: Login,},

]
const router = createRouter({
  history: createWebHashHistory(), routes,
})

export default router
