<template>
    <div id="app">
        <div>
            <router-link v-if="authenticated == true && admin == true" to="/AdminHome"></router-link>
            <router-link v-else to="/UsersHome"></router-link>
        </div>
        <router-view @authenticated="setAuthenticated"></router-view>
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
}
</script>

<style>
    /* CSS GENERIQUE */
    body{
        background:#8080800a;
        font-family: "Gill Sans", sans-serif;
        margin:0;
    }
    input{
        text-indent: 5px;
        margin: 2rem 5rem 0 5rem;
        padding: 0.4rem 0;
        border: none;
        border-bottom: 1px solid #8080802e;
    }
    .flex_container{
        display:flex;
    }
    .flex_direction_column{
        flex-direction: column;
    }
    button{
        cursor: pointer;
    }
    .btn_logOut{
      height: 30px;
      padding-left: 15px;
      padding-right: 15px;
      color: #bb1515;
      border: 1px solid #bb1515;
      border-radius: 5px;
      background: white;
      font-weight: bolder;
    }
    *:focus {
    outline: none;
}
    /* FIN CSS GENERIQUE */


</style>
