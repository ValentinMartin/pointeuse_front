<template>
  <div id="content">
    <navBar />
    <p>Admin Images</p>
  </div>
</template>

<script>


export default {
  name: 'AdminImages',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
  }
}
</script>

<style>

</style>
