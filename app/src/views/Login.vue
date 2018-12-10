<template>    
    <div id="content">
        <img src="../assets/img/logo.png" alt="Modulancy_logo" id="logo_login">
        <i class="far fa-user" id="icon_user"></i>
        <div class="content_form">             
            <form id="form_login" method="post" class="flex_container flex_direction_column">
                <input type="text" name="nom" placeholder="Nom" v-model="input.username" required class="input_login_non"/>
                <input type="password" name="mdp" placeholder="Mot de passe" v-model="input.password" required class="input_login_mdp"/>
                <button type="button" class="btn_login" v-on:click="login()">Connexion</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.adminAccount.username && this.input.password == this.$parent.adminAccount.password) {
                        this.$emit("authenticated", true);
                        this.$emit("admin", true);
                        this.$router.replace({ name: "AdminHome" });
                    } 
                    if(this.input.username == this.$parent.userAccount.username && this.input.password == this.$parent.userAccount.password) {
                        this.$emit("authenticated", true);
                        this.$emit("admin", false);
                        this.$router.replace({ name: "UsersHome" });
                } else {
                        this.$emit("authenticated", false);
                        this.$router.replace({ name: "Login" });
                }
            }
        }
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
    ss
#content{
    width: 100%;
}
#logo_login{
    display: block;
    width: 50%;
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


 /* MEDIA QUERIES */

@media screen and (min-width: 900px) and (max-width: 1200px) {

    #logo_login{
        display: block;
        width: 70%;
        margin: 0 auto;

    }
    .content_form{        
        margin:-10rem auto;
        width: 55%;
    }
    #icon_user{
        top: 27%;
    }
}
@media screen and (min-width: 600px) and (max-width: 900px) {

    #logo_login{
        display: block;
        width: 80%;
        margin: 0 auto;

    }
    .content_form{        
        margin:3rem auto;
        width: 60%;
    }
    #icon_user{
        top: 39%;
    }

}
@media screen and (min-width: 450px) and (max-width: 600px){

    #logo_login{
        display: block;
        width: 100%;
        margin: 0 auto;

    }
    .content_form{        
        margin: 0 auto;
        width: 80%;
    }
    #icon_user{
        visibility: hidden;
    }
    .input_login_non, .input_login_mdp,.btn_login{
        margin: 20px 40px 0 40px;
        padding: 5px 0;
        border: none;
        border-bottom: 1px solid #8080802e;
        position: relative;
        top: 100px;
    }

}
@media screen and (max-width: 450px){
    
    #logo_login{
        display: block;
        width: 100%;
        margin: 0 auto;

    }
    .content_form{ 
        margin: 0px auto;
        width: 80%;
    }
    #icon_user{
        visibility: hidden;
    }
    .input_login_non, .input_login_mdp,.btn_login{
        margin: 20px 40px 0 40px;
        padding: 5px 0;
        border: none;
        border-bottom: 1px solid #8080802e;
        position: relative;
        top: 100px;
    }
}
</style>

