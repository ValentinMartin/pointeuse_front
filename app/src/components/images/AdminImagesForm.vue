<template>
    <div id="content_AdminImagesForm">    
        <h2>Télécharger les images</h2>
        <div id="content_AdminImagesForm_select">
            <select name="chantier" id="selectImagesChantier">
                <option>-    -</option>
                <option :key="item.cha" v-for="item in chantier" :value="item.cha"> {{item.cha}} </option>
            </select>
        </div>
        <button id="btn_AdminDLImages">Télécharger</button>
    </div>
</template>

<script>

export default {
  name: 'AdminImagesForm',
    data() {
        return {
            chantier: [{cha: 'Dépot'},{cha: 'Troinex'},{cha: 'Reverdin2'},{cha: 'Route de troinex'},{cha: 'Bajules'},{cha: 'Bel air'},{cha: 'Bajule'}],    
        }
    },
  components: {
  }
}
</script>

<style>
#content_AdminImagesForm{
    width:100%;
    margin: 3rem auto;
    text-align: center;
}
#content_AdminImagesForm_select{
    margin: 3rem auto;
}
#btn_AdminDLImages{
    width: 35%;
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
</style>
