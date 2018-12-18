<template>
  <div id="content_adminAccueil">
    <navBar />
    <AdminAccueilHead />
    <AdminAccueilTabHead />
    <AdminAccueilTabContent />
  </div>
</template>

<script>


export default {
  name: 'AdminAccueil',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminAccueilHead: () => import("../accueil/AdminAccueilHead.vue"),
    AdminAccueilTabHead: () => import("../accueil/AdminAccueilTabHead.vue"),    
    AdminAccueilTabContent: () => import("../accueil/AdminAccueilTabContent.vue"),
  }
}
</script>

<style>

</style>
