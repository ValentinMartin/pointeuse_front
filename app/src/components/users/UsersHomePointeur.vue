<template>
    <div class="flex_container flex_direction_column" id="content_body">
        <h2>POINTEUSE</h2>
        <div id="content_input_btn" class="flex_container flex_direction_column">
            <input type="text" name="numOrdre" placeholder="Numéro d'ordre" v-model="input.numOrdre" required class="input_numOrdre"/>
            <input type="text" name="idChantier" placeholder="Nom du chantier" v-model="input.idChantier" required class="input_idChantier"/>
            <button v-on:click="pointer()" id="btn_pointer">Pointer</button>
            <button v-on:click="deplacer()" id="btn_deplacer">Déplacer</button>
        </div>
    </div>
 </template>

<script>
export default {
    name: 'UsersHomePointeur',
        data() {
            return {                
                input: {
                    numOrdre: "",
                    idChantier: ""
                }                
                }
        },
    components: {
      
    },
    methods : {        
        pointer(){

        },
        deplacer(){
          
        }
    }
}
</script>

<style>
#content_body h2{
    margin:4rem auto; 
    width: auto; 

}
#content_input_btn{
    width:40%;
    margin: 0 auto;
    background: white;
    border: 1px solid #8080802b;
    border-radius: 3px;
    padding: 1rem 1rem;
    margin-bottom: 5rem;
}
#content_input_btn input{
    width: 80%;
    margin: 1rem auto;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1px solid #8080802e;
}
#btn_pointer,#btn_deplacer{
  width: 60%;
  margin: 1rem auto;
  padding: 0.5rem 0;
  border: none;
  border-radius: 3px;
}
#btn_pointer{
  background: #00c60069;
  color: #808080;
}
#btn_deplacer{
  background: #0000ff82;
  color: #808080;
}
@media (max-width: 450px){
  #content_body h2{
    margin: 20px auto;
  }
  #content_input_btn {
    width: 80%;
  }
} 




</style>
