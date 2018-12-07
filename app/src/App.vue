<template>
  <div id="app">
    <HomePage />
    <!-- <Login /> -->
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'
import Login from './views/Login.vue'

export default {
  name: 'app',
  components: {
    HomePage,
    Login
  }
}
</script>

<style>

</style>
