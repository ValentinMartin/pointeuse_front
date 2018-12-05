<template>
    <div id="content">
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
.content_form{
    width:40%;
    height: 300px;
    background: white;
    border: 1px solid #8080802e;
    border-radius: 5px;
}
#form_login{
    width: 80%;
}
.input_login_non, .input_login_mdp,.btn_login{
}
.input_login_non{
}
.input_login_mdp{

}
.btn_login{

}


</style>
