<template>
  <div id="content_AdminImages">
    <navBar />
    <AdminImagesForm />
  </div>
</template>

<script>


export default {
  name: 'AdminImages',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminImagesForm: () =>import("../images/AdminImagesForm.vue")
  }
}
</script>

<style>

</style>
