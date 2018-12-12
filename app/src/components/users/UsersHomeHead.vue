<template>
    <div id="content_head" class="flex_container">
        <img src="../../assets/img/logo.png" alt="Modulancy_logo" id="logo_home_user">      
        <button v-on:click="logout()" to="/Login" class="btn_logOut" id="logOutUser">Se déconnecter</button>
    </div>
</template>

<script>
export default {
    name: 'UsersHomeHead',
        data() {
            return {
            }
        },
    components: {
      
    },
    methods : {
        
        logout(){
            this.authenticated = false;
            this.$router.replace({ name: "Login" });
        },
    }
}
</script>

<style>
#content_head{
  justify-content: space-between;
}
#logo_home_user{
    display: block;
    width: 50%;
    height: 150px;
}
#logOutUser{  
    margin-top: 3rem;
    margin-right: 6rem;
}
/******* MEDIA QUERIES *******/

@media (max-width: 900px){
  #logo_home_user{
    width: 45%;
  }
}
@media (max-width: 450px){
  #content_head {
    flex-direction: column;
  }
  #logo_home_user{
    width: 100%;
  }
  #logOutUser{
    width: 80%;
    margin:1rem auto;
  }
} 
</style>
