<template>
  <div id="content">
    <navBar />
    <p>Admin Ordres</p>
    <AdminOrdresTab />
  </div>
</template>

<script>


export default {
  name: 'AdminOrdres',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminOrdresTab: () => import("../ordres/AdminOrdresTab.vue")
  }
}
</script>

<style>

</style>
