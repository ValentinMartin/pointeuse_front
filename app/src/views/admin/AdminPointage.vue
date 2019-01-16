<template>
  <div id="content">
    <navBar />
    <AdminPointageFormulaire />
  </div>
</template>

<script>


export default {
  name: 'AdminPointage',
  components: {
    navBar: () => import("../../components/navbar/navBar.vue"),
    AdminPointageFormulaire: () => import("../../components/pointage/AdminPointageFormulaire.vue")
  }
}
</script>

<style>

</style>
