import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
				//aca van los atributos que yo quiero que sean globales
                url: 'https://6286bd1ee9494df61b2cbd05.mockapi.io/tp2/usuarios/usuariosRestful/',
                usuarios: [],

		},
        actions:{
            //aca van las actions llamadas por los otros coponentes ej:
                borrar({commit}){
            console.warn('actions -> borrar', new Date().toLocaleString)
            commit('delete')
                
            },
            async getUsuarios({commit}){
                console.log('actions -> getUsuarios')
                try {
                    const {data} =  await axios.get(this.state.url);
                    commit('get',data)   
                } catch (error) {
                    alert(error.message)
                }
              
            },     
            async addUsuarios({commit},usuario){
                try {
                await axios.post(this.state.url, usuario,{'content-type':'application/json'});
                commit('addUsuarios',usuario)  
               } catch (error) {
                   alert(error.message)
               }
                    
                },     
		},
        mutations:{
					//aca van las mutaciones, el metodo real que cambia las cosas
                //en este caso la action llama a la mutation, ej:
            delete(state){
                            console.warn('mutations -> delete', new Date().toLocaleString)
                            state.usuarios=[]
                        },
            /* get(state){
                console.warn('mutations -> get', new Date().toLocaleString)
                state.usuarios= state.url
            }, */
            get(state,data) {
                console.log('mutations -> get')
                console.log(data)
                state.usuarios = data
                
                }, 
            addUsuarios(state,data){
                state.usuarios.push(data)
            }
                

		}
    })