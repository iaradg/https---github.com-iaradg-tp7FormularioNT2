import Vue from 'vue'
import App from './App.vue'
import './form'
import {router} from './router'
/* AXIOS( vue-axios)*/
import './axios'

/* VUEX / store */
/* https://vuex.vuejs.org/ */
/* npm i vuex@3 */
import store from './store'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

