<template>    
    <div id="content">
        <img src="../assets/img/logo.png" alt="Modulancy_logo" id="logo_login">
        <i class="far fa-user" id="icon_user"></i>
        <div class="content_form">             
            <form id="form_login" method="post" class="flex_container flex_direction_column">
                <input type="text" name="nom" placeholder="Nom" required="required" class="input_login_non"/>
                <input type="password" name="mdp" placeholder="Mot de passe" required="required" class="input_login_mdp"/>
                <button type="submit" class="btn_login">Connexion</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    props: {

    },
}    
</script>

<style>
    /* CSS GENERIQUE */
body{ 
    height: 100%;
    background:#8080800a;
    margin:0;
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

#content{
    width: 100%;
}
#logo_login{
    display: block;
    width: 60%;
    margin: 0 auto;

}
.content_form{
    width:40%;
    height: 300px;
    margin:10rem auto;
    background: white;
    border: 1px solid #8080802e;
    border-radius: 5px;    
    position: absolute; /* postulat de départ */
    top: 50%; left: 50%; /* à 50%/50% du parent référent */
    transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */
    z-index: 1;
}
#icon_user{
    border: 1px solid #8080802e;
    border-radius: 50%;
    padding: 2rem;
    color: #00000080;
    background-color: white;
    font-size: 3em;    
    z-index: 2;
    position: absolute; /* postulat de départ */
    top: 51%; left: 50%; /* à 50%/50% du parent référent */
    transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */

}
#form_login{
    width: 100%;
    height: 100%;
}
.input_login_non, .input_login_mdp,.btn_login{
    margin: 20px 60px 0 60px;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid #8080802e;
    position: relative;
    top: 140px;
}
.input_login_non{
    
}
.input_login_mdp{
    
}
.btn_login{
    
}


</style>

