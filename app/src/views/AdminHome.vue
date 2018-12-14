<template>
    <div id="content_AdminHome" class="flex_container flex_direction_column">
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
