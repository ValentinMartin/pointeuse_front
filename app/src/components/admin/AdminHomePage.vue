<template>    
    <div id="content">
        <AdminNavbar />        
        <router-view></router-view>
        <AdminAccueil />
    </div>
</template>

<script>
export default {
    name: "AdminHomePage",
    props: {
      AdminNavbar: () => import("../../components/admin/navbar/AdminNavbar"),
      AdminAccueil: () => import("../../components/admin/accueil/AdminAccueil")

    },
}    
</script>

<style>
</style>

