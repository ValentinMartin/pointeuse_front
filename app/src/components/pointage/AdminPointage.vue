<template>
  <div id="content">
    <navBar />
    <p>Admin Pointage</p>
    <AdminPointageFormulaire />
  </div>
</template>

<script>


export default {
  name: 'AdminPointage',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminPointageFormulaire: () => import("../pointage/AdminPointageFormulaire.vue")
  }
}
</script>

<style>

</style>
