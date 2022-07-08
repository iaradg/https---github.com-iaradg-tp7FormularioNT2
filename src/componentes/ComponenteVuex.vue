<template>
  

  <section class="src-componentes-componente-vuex">
    <div class="jumbotron">
    <h2>Componente Vuex</h2>
    <hr>
    <hr>
    <br>   
    <button class="btn btn-success my-3 mr-3" @click="getUsuarios()" > GET</button>
  <button class="btn btn-danger my-3 mr-3" @click="borrarUsuarios()" > Borrar</button>
<div class="table-responsive">
              <table class="table table-dark" v-if="obtenerPersonas.length" >
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Email</th>
                  </tr>
                  <tr v-for="(usuario,index) in obtenerPersonas" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ usuario.nombre }}</td>
                      <td>{{ usuario.edad }}</td>
                      <td>{{ usuario.email }}</td>
                  </tr>
              </table>
              <div class="alert alert-danger mt-1" v-else>
                <p>No hay datos cargados</p>
              </div>
      </div>
    </div>
  </section>
</template>

<script>
export default  {
    name: 'src-componentes-componente-vuex',
    props: [],
    mounted () {
       // this.getUsuarios()
    },
    data () {
      return {
        
      }
    },
    methods: {
           getUsuarios(){
        
        
             this.$store.dispatch('getUsuarios')
        
      },
       borrarUsuarios(){
           //try{
             console.log('borrarUsuarios')
             this.$store.dispatch('borrar')
            //}
        //catch(error){
          //console.error('error en deleteUsuarios', error.message)
        //}
      },
    
    },
    computed: {
        obtenerPersonas(){  
            return this.$store.state.personas
        }
        }
}
</script>

<style scoped lang="css">
.src-componentes-componente-vuex {

  }
  .jumbotron{
    background-color: rgb(2, 101, 32);
    color: bisque ;
  }

  hr{
    background-color: rgb(52, 130, 76);
  }
  pre{
    color: rgb(174, 0, 0);
  }
</style>