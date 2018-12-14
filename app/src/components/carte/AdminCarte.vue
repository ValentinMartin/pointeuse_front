<template>
  <div id="content">
    <navBar />
    <p>Carte des Pointages</p>

    <AdminCarteMap />
  </div>
</template>

<script>


export default {
  name: 'AdminCarte',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminCarteMap: () => import("../carte/AdminCarteMap.vue")
  }
}
</script>

<style>

</style>
