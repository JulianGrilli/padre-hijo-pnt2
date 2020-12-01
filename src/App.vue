<template>
  <div id="app">
    <Padre/>
    <router-view />
  </div> 
</template>

<script>
import Padre from './components/Padre.vue'

export default {
  name: 'App',
  components: {
    Padre
  }
}
</script>

<style>
  #app {
  }
</style>
