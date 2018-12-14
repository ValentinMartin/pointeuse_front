<template>
  <div id="content">
    <navBar />
    <p>Admin Carte</p>
  </div>
</template>

<script>


export default {
  name: 'AdminCarte',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
  }
}
</script>

<style>

</style>
