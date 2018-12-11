<template>
<<<<<<< HEAD
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './views/Login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
=======
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated == true && admin == true" to="/AdminHome"></router-link>
            <router-link v-else to="/UsersHome"></router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                admin: false,
                adminAccount: {
                    username: "admin",
                    password: "admin"
                },
                userAccount: {
                    username: "user",
                    password: "user"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "Login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
>>>>>>> origin/master
}
</script>

<style>

</style>
