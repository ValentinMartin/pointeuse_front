<template>
    <div id="content_UserHome_Head" class="flex_container">
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
#content_UserHome_Head{
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
    width: 60%;
  }
  #logOutUser{
    margin: 3rem auto;
  }
}
@media (max-width: 450px){
  #content_UserHome_Head {
    flex-direction: column;
  }
  #logo_home_user{
    width: 100%;
  }
  #logOutUser{
    width: 60%;
    margin:1rem auto;
  }
} 
</style>
