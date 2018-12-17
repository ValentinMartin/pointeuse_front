<template>
  <div id="content_adminCarte">
    <navBar />
    <h2>Carte des pointages</h2>    
    <AdminCarteMap />
  </div>
</template>

<script>


export default {
  name: 'AdminCarte',
  components: {
    navBar: () => import("../navbar/navBar.vue"),
    AdminCarteMap: () => import("../carte/AdminCarteMap.vue")
  }
}
</script>

<style>
#content_adminCarte{
  width:100%;
}
#content_adminCarte h2{
  margin: 3rem auto;
  text-align: center;
}
</style>
