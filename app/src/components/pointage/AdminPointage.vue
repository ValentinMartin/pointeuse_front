<template>
  <div id="content">
    <navBar />
    <p>Admin Pointage</p>
  </div>
</template>

<script>


export default {
  name: 'AdminPointage',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
  }
}
</script>

<style>

</style>
