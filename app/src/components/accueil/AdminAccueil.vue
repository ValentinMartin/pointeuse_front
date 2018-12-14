<template>
  <div id="content">
    <navBar />
    <p>Accueil</p>
    <button>exporter tous les chantiers</button>
    <AdminAccueilTab />
  </div>
</template>

<script>


export default {
  name: 'AdminAccueil',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminAccueilTab: () => import("../accueil/AdminAccueilTab.vue"),
  }
}
</script>

<style>

</style>
