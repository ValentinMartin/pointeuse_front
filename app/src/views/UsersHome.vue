<template>
  <div id="content_UsersHome">
        <UsersHomeHead />
        <UsersHomePointeur />
        <UsersHomeResume /> <!-- A afficher uniquement apres pointage -->
        <UsersHomeImages /> <!-- A afficher uniquement apres pointage -->
        <UsersHomeDepointage /> <!-- A afficher uniquement apres pointage -->
  </div>
</template>

<script>
export default {
    name: 'UsersHome',
        data() {
            return {
            }
        },
    components: {
        UsersHomeHead: () => import("../components/users/UsersHomeHead.vue"),
        UsersHomePointeur: () => import("../components/users/UsersHomePointeur.vue"),
        UsersHomeResume: () => import("../components/users/UsersHomeResume.vue"),
        UsersHomeImages: () => import("../components/users/UsersHomeImages.vue"),
        UsersHomeDepointage: () => import("../components/users/UsersHomeDepointage.vue"),
    },
    methods : {
    }
}
</script>

<style>
#content_UsersHome{
    width: 100%;
}
</style>
