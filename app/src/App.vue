<template>
  <div id="app">
    <Login/>
    <router-view/>
  </div>
</template>

<script>
import Login from "./views/Login";

export default {
  name: 'app',
  components: {
    Login
    
  }
}
</script>

<style>

</style>
