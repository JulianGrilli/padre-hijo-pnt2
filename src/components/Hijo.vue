<template>

  <section class="src-components-hijo">
    <div class="jumbotron">
      <h1 class="display-4">HIJO</h1>
      <hr>
      <p class="lead">- formulario del hijo -</p>
      <input type="text" v-model="hijoTexto">
      <input type="number" v-model="hijoNumero">
      <button @click="enviarAPadre">Enviar al padre</button>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-hijo',
    props: ["onTexto", "onNumero"],
    mounted () {

    },
    data () {
      return {
      hijoTexto: '',
      hijoNumero: 0
      }
    },
    methods: {
      enviarAPadre(){
        console.log('activado evento click')
        this.$emit('texto', this.hijoTexto);
        this.$emit('numero', this.hijoNumero);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-hijo {

  }
</style>
