<template>
  <div id="content">
    <navBar />
    <AdminCompteCreation />
    <AdminCompteSuppression />
  </div>
</template>

<script>


export default {
  name: 'AdminCompte',
  components: {
    navBar: () => import("../../components/navbar/navBar.vue"),
    AdminCompteCreation: () => import("../../components/compte/AdminCompteCreation.vue"),
    AdminCompteSuppression: () => import("../../components/compte/AdminCompteSuppression.vue"),
  }
}
</script>

<style>

</style>
