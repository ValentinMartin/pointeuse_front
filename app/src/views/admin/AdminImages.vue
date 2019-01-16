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
    navBar: () => import("../../components/navbar/navBar.vue"),
    AdminImagesForm: () =>import("../../components/images/AdminImagesForm.vue")
  }
}
</script>

<style>

</style>
