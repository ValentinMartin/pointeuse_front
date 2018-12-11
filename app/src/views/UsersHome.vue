<template>
  <div id="content">
    <p>Utilisateurs Home</p>    
    <br />
    <button v-on:click.native="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'UsersHome',
  components: {
  },
  methods:{
      logout() {
        this.authenticated = false;
      },
  }
}
</script>

<style>

</style>
