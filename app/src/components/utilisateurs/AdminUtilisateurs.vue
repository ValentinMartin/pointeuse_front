<template>
  <div id="content">
    <navBar />
    <p>Admin Utilisateurs</p>
    <AdminUtilisateursTab />
  </div>
</template>

<script>

export default {
  name: 'AdminUtilisateurs',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminUtilisateursTab:() => import("../utilisateurs/AdminUtilisateursTab.vue")
  }
}
</script>

<style>

</style>
