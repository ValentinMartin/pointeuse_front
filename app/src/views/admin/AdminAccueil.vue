<template>
  <div id="content_adminAccueil">
    <navBar />
    <AdminAccueilHead />
    <AdminAccueilFiltres />
    <AdminAccueilTabHead />
    <AdminAccueilTabContent />
  </div>
</template>

<script>


export default {
  name: 'AdminAccueil',
    data() {
            return {
                authenticated : true,
            };
        },
  components: {
    navBar: () => import("../../components/navbar/navBar.vue"),
    AdminAccueilHead: () => import("../../components/accueil/AdminAccueilHead.vue"),
    AdminAccueilFiltres: () => import("../../components/accueil/AdminAccueilFiltres.vue"),
    AdminAccueilTabHead: () => import("../../components/accueil/AdminAccueilTabHead.vue"),    
    AdminAccueilTabContent: () => import("../../components/accueil/AdminAccueilTabContent.vue"),
  }
}
</script>

<style>

</style>
