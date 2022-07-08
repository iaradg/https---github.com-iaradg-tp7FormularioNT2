<template >

  <section class="src-componentes-formulario-av">
    <div class="jumbotron">
    <h2>Formulario:</h2>
    <hr>
    <br>
  <div id="app">
    <vue-form :state="formState" @submit.prevent="enviar()">
    
    <!-- -Campo nomnre + validaciones  -->

    <validate tag="div">
      <label for="nombre" >Nombre</label>
      
      <input
      id="nombre"
      type="text"
      class="form-control"
      autocomplete="off"
      v-model.trim="formData.nombre" 
      name="nombre" 
      required 
      minlength="3"
      maxlength="15"
      no-espacios
        />

      <field-messages name="nombre" show="$dirty">
        <!-- <div class="alert alert-success mt-1">Success!</div> -->
        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        <div slot="minlength" class="alert alert-danger mt-1">Este Campo debe poseer al menos 3 caracteres</div>
          <div slot="maxlength" class="alert alert-danger mt-1">Este Campo no debe superar los 15 caracteres</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">Este Campo no debe contener espacios en el medio</div>
      </field-messages>
    </validate>


<br>
      <!-- -Campo edad + validaciones  -->

    <validate tag="div">
      <label for="edad" >Edad</label>
      
      <input
      id="edad"
      type="number"
      class="form-control"
      autocomplete="off"
      v-model.number="formData.edad" 
      name="edad" 
      required 
      min="18"
      max="120"
        />

      <field-messages name="edad" show="$dirty">
        <!-- <div class="alert alert-success mt-1">Success!</div> -->
        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        <div slot="min" class="alert alert-danger mt-1">Debe tener al menos 18 años</div>
        <div slot="max" class="alert alert-danger mt-1">No puede tener mas de 120 años</div>
      </field-messages>
    </validate>


<br>
      <!-- -Campo Email + validaciones  -->

    <validate tag="div">
      <label for="email" >Email</label>
      
      <input
      id="email"
      type="email"
      class="form-control"
      autocomplete="off"
      v-model.trim="formData.email" 
      name="email" 
      required 
    
        />

      <field-messages name="email" show="$dirty">
        <!-- <div class="alert alert-success mt-1">Success!</div> -->
        <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        <div slot="email" class="alert alert-danger mt-1" >Email no valido</div>
      </field-messages>
    </validate>


<br>
      
    <button class="btn btn-success my-3" :disabled="formState.$invalid" @click="enviar()"> Enviar </button>

    </vue-form>

    <!-- <p><u>FormState</u></p>
    <pre> {{ formState }}</pre> -->

    <hr>
<div class="table-responsive">
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
        <td>{{ usuario.edad }}</td>
        <td>{{ usuario.email }}</td>
        
    </tr>
</table>
  </div>
</div>
    <TablaPersonas/>
</div>
</section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario-av',
    components:{
        
    },
    props: ['usuarios'],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        
       url:this.$store.state.url
      }
    },
    methods: {
      enviar(){
        this.$store.dispatch("addUsuarios",this.formData);
        console.log({...this.formData})
        this.formData = this.getInicialData()
        this.formState._reset()
      
      },
      getInicialData(){
        return{
          
          nombre:null,
          edad:null,
          email:null,
        } 
      },
      /* ------------------- */
      /*     API REST: POST  */
      /* ------------------ */
      async  postUsuario(usuarioNew){
        
          try{
            let {data:usuario} = await this.axios.post(this.url,usuarioNew,{'content-type': 'application/json'})
            console.log('AXIOS POST usuario',usuario)
           /*  this.$emit('usuarioEnviado',usuarioNew) */
            //this.usuarios.push(usuario)

            //una ves hecho esto, el nuevo usuario ya es parte del mockapi, esta en la nube
          }
          catch(error){
            console.error('error en postUsuarios', error.message)
          }
          this.formData=this.getInicialData() //esto hace que despues de enviar se reseteee el formulario
          this.formState._reset()
      },
      


    
    computed: {
        obtenerPersonas(){  
        return this.$store.state.personas
      }
    },
    }
  }


</script>

<style scoped lang="css">
  .src-componentes-binding {

  }
  .jumbotron{
    background-color: rgb(231, 203, 168);
    color: darkolivegreen;
  }

  hr{
    background-color: darkolivegreen;
  }
  pre{
    color:antiquewhite
  }
  td{
color:blanchedalmond
  }
</style>
