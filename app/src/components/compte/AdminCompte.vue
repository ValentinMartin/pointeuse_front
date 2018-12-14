<template>
  <div id="content">
    <navBar />
    <p>Admin Compte</p>
    <AdminCompteCreation />
    <AdminCompteSuppression />
  </div>
</template>

<script>


export default {
  name: 'AdminCompte',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminCompteCreation: () => import("../compte/AdminCompteCreation.vue"),
    AdminCompteSuppression: () => import("../compte/AdminCompteSuppression.vue"),
  }
}
</script>

<style>

</style>
