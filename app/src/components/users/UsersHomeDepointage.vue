<template>
    <div id="content_UsersHome_Depointage" class="flex_container flex_direction_column">
        <h2>Dépointer mon action</h2>
        <div id="content_UsersHome_Depointage_content" class="flex_container flex_direction_column">
            <input type="text" placeholder="Commentaire sur le chantier" id="inputCommentUser"/>
            <button v-on:click="depointer()" id="btn_depointer">Dépointer</button>
            <button v-on:click="terminerChantier()" id="btn_terminerChantier">Chantier terminé</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsersHomeDepointage',
        data() {
            return {
            }
        },
    components: {
      
    },
    methods : {
        depointer(){

        },
        terminerChantier(){

        }
    }
}
</script>

<style>
#content_UsersHome_Depointage{
    width: 100%
}
#content_UsersHome_Depointage h2{
    text-align: center;
}
#content_UsersHome_Depointage_content{
    width: 60%;
    height: auto;
    margin: 0 auto;
    background: white;
    border: 1px solid #8080802b;
    border-radius: 3px;
    padding: 1rem 1rem;
    margin-bottom: 3rem;
}

#content_UsersHome_Depointage_content input{
    width: 80%;
    margin: 1.5rem auto;
    background: white;
    border: 1px solid #0000ff82;
    border-radius: 3px;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    text-indent: 1.5rem;
}
#content_UsersHome_Depointage_content button{
    width: 60%;
    margin: 1rem auto;
    padding: 0.5rem 0;
    border: none;
    border-radius: 3px;
    font-weight: bolder;
    font-size: 15px;  
}
#btn_depointer{
    background: #bb1515;
    color: white;
}
#btn_terminerChantier{
    background: white;
    color:#bb1515 ;
    border:1px solid #bb1515!important;
}
/******* MEDIA QUERIES *******/

@media (max-width: 900px){
    #content_UsersHome_Depointage_content{
        width: 80%
    }
}
@media (max-width: 450px){
    
} 
</style>
