<template>
  <div id="content">
    <p>Utilisateurs Home</p>    
    <br />
    <button v-on:click="logout()" to="/Login">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'UsersHome',
  components: {
  },
    methods : {
        logout(){
            this.authenticated = false;
            this.$router.replace({ name: "Login" });
      }
  }
}
</script>

<style>

</style>
