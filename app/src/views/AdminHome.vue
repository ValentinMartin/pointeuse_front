<template>
    <div class="content">
        <nav>
            <ul>
                <li><a>Accueil</a></li>
                <li><a>Utilisateurs</a></li>
                <li><a>Ordres</a></li>
                <li><a>Carte</a></li>
                <li><a>Pointage</a></li>
                <li><a>Compte</a></li>
                <li><a>Images</a></li>
                <li><a>Logout</a></li>                
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'AdminHome',
        data() {
            return {};
        }
    }
</script>
<style>
    /* CSS GENERIQUE */
    body{
        background:#8080800a;
        margin:0;
        Overflow: hidden;
    }
    input{
        text-indent: 5px;
    }
    .flex_container{
        display:flex;
    }
    .flex_direction_column{
        flex-direction: column;
    }
    /* FIN CSS GENERIQUE */

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
  padding: 20px;
}

nav ul li a{
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 20px;
}

/* an underline appears at the bottom on hover of each link */
nav ul li a:hover, nav ul li a:active{
  border-bottom: 2px solid black;
  padding-bottom: 8px;
  transition: 0.8s; 
}
/* end of navigation section*/

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
