<template>
    <div id="content_AdminHome">
        <nav>
            <ul>
                <li><a>Accueil</a></li>
                <li><a>Utilisateurs</a></li>
                <li><a>Ordres</a></li>
                <li><a>Carte</a></li>
                <li><a>Pointage</a></li>
                <li><a>Compte</a></li>
                <li><a>Images</a></li>
                <li><button v-on:click="logout()" to="/Login" class="btn_logOut" id="logOut_Navbar">Déconnexion</button></li>                
            </ul>
        </nav>
    </div>
</template>

<script>
// import AdminAccueil from "../components/accueil/AdminAccueil.vue"
// import AdminUtilisateurs from "../components/utilisateurs/AdminUtilisateurs.vue"
// import AdminOrdres from "../components/ordres/AdminOrdres.vue"
// import AdminCarte from "../components/carte/AdminCarte.vue"
// import AdminPointage from "../components/pointage/AdminPointage.vue"
// import AdminCompte from "../components/compte/AdminCompte.vue"
// import AdminImages from "../components/images/AdminImages.vue"


export default {
    name: 'AdminHome',
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
        }
    }
}
</script>
<style>

/* navigation section */

nav{
  position: fixed;
  top: 0px;
  left: 0px;
  margin: 0 auto;
  width: 100%;
  background-color: #fff000c9;
  border-bottom: 6px solid #fff;
}

nav ul{
  list-style-type: none;
  text-align: center;
}

nav ul li{
  display: inline-block;
  text-align: center;
  padding: 17px;
}

nav ul li a{
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 20px;
  cursor: pointer;
}

/* an underline appears at the bottom on hover of each link */
nav ul li a:hover, nav ul li a:active{
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
  body{
    font-size: .98em;
  }

  nav ul li{
    padding: 5px;
  }
} 

</style>
