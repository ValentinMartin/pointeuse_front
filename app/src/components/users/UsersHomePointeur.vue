<template>
    <div class="flex_container flex_direction_column" id="content_UserHome_Pointeur">
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
#content_UserHome_Pointeur h2{
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

}
#btn_pointer{
    margin: 1em auto;
    color: white;
    padding: 5px 5px;
    border: 1px solid #2ecc71;
    background-color: #2ecc71;
    border-radius: 5px;
    text-shadow: 0px -1px #27ae60;  
    font-weight: bolder;
    font-size: 15px; 
}
#btn_deplacer{
    margin: 1em auto;
    color: white;
    padding: 5px 5px;
    border: 1px solid #271dca;
    background-color: #271dca;
    border-radius: 5px;
    text-shadow: 0px -1px #1d1596;
    font-weight: bolder;
    font-size: 15px; 
}
@media (max-width: 900px){
    #content_input_btn{
        width: 60%;
    }  
} 
@media (max-width: 450px){
  #content_UserHome_Pointeur h2{
    margin: 2rem auto;
  }
  #content_input_btn {
    width: 80%;
  }
  #content_input_btn{
      margin-bottom: 2rem;
  }
} 
</style>
