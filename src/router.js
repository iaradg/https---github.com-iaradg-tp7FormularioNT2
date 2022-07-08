import Vue from 'vue'
import VueRouter from 'vue-router'



import TablaPersonas from './componentes/TablaPersonas.vue'
import Formulario from './componentes/Formulario.vue'
import ComponenteVuex from './componentes/ComponenteVuex.vue'

Vue.use(VueRouter)

export const router =new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect: '/binding'},
        {path: '/tabla-personas', component: TablaPersonas},
        {path: '/formulario', component: Formulario},
        {path: '/comp-vuex', component: ComponenteVuex},
         ]
})