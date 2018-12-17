<template>    
    <div id="content_login" class="flex_container flex_direction_column">
        <img src="../assets/img/logo.png" alt="Modulancy_logo" id="logo_login">        
        <div class="content_form">
            <i class="far fa-user" id="icon_user"></i>             
            <form id="form_login" method="post" class="flex_container flex_direction_column">
                <input type="text" name="nom" placeholder="Nom" v-model="input.username" required class="input_login_nom"/>
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
    components: {
        
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "")
            {
                if(this.input.username == this.$parent.adminAccount.username && this.input.password == this.$parent.adminAccount.password) {
                    this.$emit("authenticated", true);
                    this.$emit("admin", true);
                    this.$router.replace({ name: "AdminHome" });
                } 
                else if(this.input.username == this.$parent.userAccount.username && this.input.password == this.$parent.userAccount.password) {
                    this.$emit("authenticated", true);
                    this.$emit("admin", false);
                    this.$router.replace({ name: "UsersHome" });
                } 
                else {
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
      height: 50px;
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

#content_login{
    width: 100%;
}
#logo_login{
    width: 60%;
    height: auto;
    margin: 0 auto;
    border : 5px solid white;
    border-top: none;
}
.content_form{
    width:40%;
    height: auto;
    margin: 5rem auto;
    background: white;
    border: 1px solid #8080802e;
    border-radius: 5px;    
}
#icon_user{
    border: 1px solid #8080802e;
    border-radius: 50%;
    padding: 2rem;
    color: #00000080;
    background-color: white;
    font-size: 3em;
    position: relative;
    top: -3rem;
    left: 11rem;   

}
#form_login{
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
}
.input_login_nom, .input_login_mdp,.btn_login{
    margin: 2rem 5rem 0 5rem;
    padding: 0.4rem 0;
    border: none;
    border-bottom: 1px solid #8080802e;
}
.btn_login{
    color: white;
    border: none;
    background-color: #2ecc71;
    border-bottom: 5px solid #27ae60;
    border-radius: 5px;
    text-shadow: 0px -2px #27ae60;  
    font-weight: bolder;
    font-size: 15px;  
}

 /* MEDIA QUERIES */
@media screen and (min-width: 600px) and (max-width: 900px) {

    #logo_login{
        width: 80%;
        margin: 0 auto;

    }
    .content_form{        
        margin:3rem auto;
        width: 60%;
    }

}
@media screen and (min-width: 450px) and (max-width: 600px){

    #logo_login{
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
    .input_login_nom, .input_login_mdp,.btn_login{
        margin: 20px 40px 0 40px;
        padding: 5px 0;
        border: none;
        border-bottom: 1px solid #8080802e;
    }

}
@media screen and (max-width: 450px){
    body{
        font-size: .98em;
    }
    #logo_login{
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
    .input_login_nom, .input_login_mdp,.btn_login{
        margin: 20px 40px 0 40px;
        padding: 5px 0;
        border: none;
        border-bottom: 1px solid #8080802e;
    }
}
</style>

