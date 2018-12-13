<template>
    <div id="content_UsersHome_Resume">
        <hr>
        <h2>Résumé du pointage en cours</h2>
        <div id="content_Resume_bloc">
            <h3>Nom du Chantier : <span>{{nomChantier}}</span></h3>
            <hr>
            <div id="content_Resume_bloc_body">
                <h3>Devis : <span>{{numDevis}}</span></h3>
                <p>Date Pointage : <span>{{datePointage}}</span></p>
                <p>Heure Pointage : <span>{{heurePointage}}</span></p>
            </div>
            <hr>
            <h3>Nom User : <span>{{nomUser}}</span></h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UsersHomeResume',
        data() {
            return {
                nomChantier : "nomChantierTest",
                numDevis : "123Test",
                datePointage : "12/12/2018",
                heurePointage : "10:36",
                nomUser : "userMoka"
            }
        },
    components: {
      
    },
    methods : {
    }
}
</script>

<style>
#content_UsersHome_Resume{
    width: 100%;
    margin: 0 auto;
}
#content_UsersHome_Resume h2{
    text-align: center;
}
#content_Resume_bloc{    
    width: 40%;
    margin: 0 auto;
    background: white;
    border: 1px solid #0000ff82;
    border-radius: 3px;
    padding: 1rem 1rem;
    margin-bottom: 3rem;
    text-indent: 1.5rem;
    color: #808080;
}
#content_Resume_bloc span{
    font-style: italic; 
    font-size: 15px;
    color: black;
}

/******* MEDIA QUERIES *******/

@media (max-width: 900px){
    #content_Resume_bloc{
        width: 60%;
    }
}
@media (max-width: 450px){
    #content_Resume_bloc{
        width: 80%;
        text-indent: 0;
        margin-bottom: 2rem;
    }
} 
</style>
