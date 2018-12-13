<template>
    <div id="content_AdminHome" class="flex_container flex_direction_column">
        <nav>
            <ul>
                <li><a v-on:click="changeContent(1)">Accueil</a></li>
                <li><a v-on:click="changeContent(2)">Utilisateurs</a></li>
                <li><a v-on:click="changeContent(3)">Ordres</a></li>
                <li><a v-on:click="changeContent(4)">Carte</a></li>
                <li><a v-on:click="changeContent(5)">Pointage</a></li>
                <li><a v-on:click="changeContent(6)">Compte</a></li>
                <li><a v-on:click="changeContent(7)">Images</a></li>
                <li><button v-on:click="logout()" to="/Login" class="btn_logOut" id="logOut_Navbar">Déconnexion</button></li>                
            </ul>
        </nav>
        <div id="content_AdminHome_body">
            <AdminAccueil id="1" class="content_AdminHome visible"/>
            <AdminUtilisateurs id="2" class="content_AdminHome hidden"/>
            <AdminOrdres id="3" class="content_AdminHome hidden"/>
            <AdminCarte id="4" class="content_AdminHome hidden"/>
            <AdminPointage id="5" class="content_AdminHome hidden"/>
            <AdminCompte id="6" class="content_AdminHome hidden"/>
            <AdminImages id="7" class="content_AdminHome hidden"/>
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
        AdminAccueil: () => import("../components/accueil/AdminAccueil.vue"),
        AdminUtilisateurs: () => import("../components/utilisateurs/AdminUtilisateurs.vue"),
        AdminOrdres: () => import("../components/ordres/AdminOrdres.vue"),
        AdminCarte: () => import("../components/carte/AdminCarte.vue"),
        AdminPointage: () => import("../components/pointage/AdminPointage.vue"),
        AdminCompte: () => import("../components/compte/AdminCompte.vue"),
        AdminImages: () => import("../components/images/AdminImages.vue"),
    },
    methods : {
        logout(){
            this.authenticated = false;
            this.$router.replace({ name: "Login" });
        },
        changeContent(idContent){
            var el = document.getElementsByClassName('content_AdminHome');
                for (var i = 0; i < el.length; i++) {
                    el[i].classList.remove('visible')
                    el[i].classList.add('hidden');
                }          
            var elementAAfficher = document.getElementById(idContent);
            elementAAfficher.classList.remove('hidden');
            elementAAfficher.classList.add('visible');            
        }
    }
}
</script>
<style>
.hidden{
    visibility: hidden;
}
.visible{
    visibility: visible;
}
/* navigation section */

nav{  
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
