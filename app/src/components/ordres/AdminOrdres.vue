<template>
  <div id="content">
    <navBar />
    <p>Admin Ordres</p>
  </div>
</template>

<script>


export default {
  name: 'AdminOrdres',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
  }
}
</script>

<style>

</style>
