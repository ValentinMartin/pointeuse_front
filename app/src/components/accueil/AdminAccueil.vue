<template>
  <div id="content">
    <navBar />
    <AdminAccueilHead />
    <AdminAccueilTab />
  </div>
</template>

<script>


export default {
  name: 'AdminAccueil',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminAccueilHead: () => import("../accueil/AdminAccueilHead.vue"),
    AdminAccueilTab: () => import("../accueil/AdminAccueilTab.vue"),
  }
}
</script>

<style>

</style>
