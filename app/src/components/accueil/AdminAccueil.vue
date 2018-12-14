<template>
  <div id="content">
    <navBar />
    <p>Accueil</p>
  </div>
</template>

<script>


export default {
  name: 'AdminAccueil',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
  }
}
</script>

<style>

</style>
