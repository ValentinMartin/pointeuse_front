<template>
  <div id="content_adminAccueilFiltres" class="flex_container">  
    <div>
      <h2>Filtres</h2>
    </div>  
    <div>
      <button class="btn_AccueilTabAnnuler">Annuler</button>
      <button class="btn_AccueilTabModifier">Modifier</button>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'AdminAccueilFiltres',
  components: {
  }
}
</script>

<style>

.btn_AccueilTabModifier{
    color: white;
    padding: 5px 5px;
    background-color: #2ecc71;
    border: 1px solid #27ae60;
    border-radius: 5px;
    text-shadow: 0px -1px #27ae60;  
    font-weight: bolder;
    font-size: 15px; 
}
.btn_AccueilTabAnnuler{
      background: #bb1515;
      color: white;
      padding: 5px 5px;
      border: 1px solid #8b0b0b;
      border-radius: 5px;
      text-shadow: 0px -1px #8b0b0b;  
      font-weight: bolder;
      font-size: 15px;
}
</style>
