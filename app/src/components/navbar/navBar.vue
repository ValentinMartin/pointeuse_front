<template>
  <div id="content_navBar">
    <nav>
        <ul>
            <li><router-link append :to="{ name: 'AdminAccueil' }">Accueil</router-link></li>
            <li><router-link append :to="{ name: 'AdminCarte' }">Carte</router-link></li>
            <li><router-link append :to="{ name: 'AdminPointage' }">Pointage</router-link></li>
            <li><router-link append :to="{ name: 'AdminCompte' }">Compte</router-link></li>
            <li><router-link append :to="{ name: 'AdminImages' }">Images</router-link></li>
            <li><button v-on:click="logout()" to="/Login" class="btn_logOut" id="logOut_Navbar">Déconnexion</button></li>                
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'navBar',
        data() {
            return {
                authenticated : true,
            };
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

nav{  
  margin: 0 auto;
  width: 100%;
  background-color: #fff000c9;
  border-bottom: 6px solid #fff;
}

nav ul{
  list-style-type: none;
  text-align: center;
  margin-top: 0;
  padding-top: 1rem;
}

nav ul li{
  display: inline-block;
  text-align: center;
  padding: 15px;
}

nav ul li a{
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 20px;
  cursor: pointer;
}

/* an underline appears at the bottom on hover of each link */
nav ul li a:hover{
  border-bottom: 2px solid black;
  padding-bottom: 8px;
  transition: 0.8s; 
}
/* end of navigation section*/
#logOut_Navbar{
    background-color:#fafafa;
}
 /******* MEDIA QUERIES *******/

@media (max-width: 900px){
   nav ul li a{
    text-align: center;
    margin: 0;
  }

}

@media (max-width: 400px){
  nav ul li{
    padding: 5px;
  }
} 

</style>