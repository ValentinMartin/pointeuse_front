<template>
  <div id="content">
    <navBar />
    <p>Admin Utilisateurs</p>
    <AdminUtilisateursFiltre />
    <AdminUtilisateursTab />
  </div>
</template>

<script>

export default {
  name: 'AdminUtilisateurs',
  components: {
    navBar: () => import("../navbar/navBar.vue"),    
    AdminUtilisateursFiltre:() => import("../utilisateurs/AdminUtilisateursFiltre.vue"),
    AdminUtilisateursTab:() => import("../utilisateurs/AdminUtilisateursTab.vue")
  }
}
</script>

<style>

</style>
