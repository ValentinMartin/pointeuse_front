<template>
  <div id="content">
    <navBar />
    <p>Admin Compte</p>
  </div>
</template>

<script>


export default {
  name: 'AdminCompte',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
  }
}
</script>

<style>

</style>
