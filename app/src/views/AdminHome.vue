<template>
    <div>
        <AdminAccueil />
    </div>
</template>

<script>
export default {
    name: 'AdminHome',
        data() {
            return {
                authenticated : true,
            };
        },
    components: {
        AdminAccueil: () => import("../components/accueil/AdminAccueil.vue")
    },
    methods : {
        
    }
}
</script>
<style>
#content_AdminHome{
    margin: 0;
    width: 100%;
}
</style>
