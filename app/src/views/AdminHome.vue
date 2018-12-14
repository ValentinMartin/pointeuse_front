<template>
    <div id="content_AdminHome" class="flex_container flex_direction_column">
        <NavBar />
        <div id="content_AdminHome_body">
            <router-view></router-view>
        </div>
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
        NavBar: () => import("../components/navbar/navBar.vue"),
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
