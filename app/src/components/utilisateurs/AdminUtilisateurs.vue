<template>
  <div id="content">
    <navBar />
    <p>Admin Utilisateurs</p>
  </div>
</template>

<script>


export default {
  name: 'AdminUtilisateurs',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
  }
}
</script>

<style>

</style>
