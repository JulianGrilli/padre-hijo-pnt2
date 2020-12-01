<template>

  <section class="src-components-padre">
    <div class="jumbotron">
      <h1 class="display-4">PADRE</h1>
      <hr>
      <p class="lead">- formulario del padre -</p>
      <br>
      <span>{{padreTexto}}</span>
      <br>
      <span>{{padreNumero}}</span>
    </div>
    <br>
  </section>
  <div>
    <Hijo @texto="notificarTexto($event)" @numero="notificarNumero($event)"/>
  </div>

</template>

<script>
  import Hijo from './Hijo.vue'
  export default  {
    name: 'src-components-padre',
    components: {Hijo},
    props: [],
    mounted () {

    },
    data () {
      return {
        padreTexto: '',
        padreNumero: 0
      }
    },
    methods: {
      notificarTexto(texto){
        console.log(texto);
        this.padreTexto = texto;
      },
      notificarNumero(numero){
        console.log(numero);
        this.padreNumero = numero;
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-padre {

  }
</style>
