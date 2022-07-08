<template >

 <div class="jumbotron">
  <button class="btn btn-success my-3 mr-3" @click="getUsuarios()" > GET</button>
  <button class="btn btn-danger my-3 mr-3" @click="usuarios=[]" > Borrar</button>

      <div class="media alert alert-success" v-for="(usuario,index) in usuarios" :key="index">
        <!-- // eslint-disable-next-line vue/no-parsing-error -->
        <div class="media-body ml-3">
          <img v-if=" usuario.foto!=null" :src="usuario.foto" width="300" :alt="usuario.nombre">
          <img v-else :src="fotoIncognito "  width="300" :alt="usuario.nombre">
            <h5 class="mt-0"><u>usuario {{ index + 1 }} - ID: {{usuario.id}} </u></h5>
            <br>
            <p>Nombre: {{ usuario.nombre }} </p>
            <p>edad: {{ usuario.edad }} </p>
            <p>email: {{ usuario.email }} </p>

        </div>
    </div>


    <!-- <div class="table-responsive">
      <table class="table table-dark">
          <tr>
              <th>id</th>
              <th>nombre</th>
              <th>edad</th>
              <th>email</th>
          </tr>
          <tr v-for="(usuario,index) in usuarios" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.nrotel }}</td>
              
          </tr>
      </table>

</div> -->
 </div>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-tabla-personas',
    props: [],
    mounted () {

    },
    data () {
      return {
       /*  url:'https://6286bd1ee9494df61b2cbd05.mockapi.io/tp2/usuarios/usuarios' ,
        fotoIncognito:'https://icon-library.com/icon/unknown-person-icon-27.html',
        usuarios: [], */
      }
    },
    methods: {
           
      /* ------------------- */
      /*     API REST: GET  */
      /* ------------------ */
      async getUsuarios(){
        try{
          let {data:usuarios} = await this.axios(this.url)
          console.log('AXIOS GET usuarios',usuarios)
          this.usuarios=usuarios
        }
        catch(error){
          console.error('error en getUsuarios', error.message)
        }
      },
/* 
       async getUsuariosFetch(){
           try{
            let response = await fetch(this.url) //pongo await cuando quiero esperar que una promesa se cumpla
            let respuesta= await response.json()
              console.log(respuesta)
              this.usuarios=respuesta
            }
            catch( error){
              console.error('Error en Fetch:', error)
            }
        }, */
       
        },
    
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-tabla-personas {


  }
  jumbotron{
    background-color:darkolivegreen ;
    color:rgb(231, 203, 168) ;
  }
</style>
