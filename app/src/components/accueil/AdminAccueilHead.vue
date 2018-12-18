<template>
  <div id="content_adminAccueilHead">    
    <h2>Accueil</h2>
    <button id="btn_adminExportAll">Exporter tous les chantiers</button>
  </div>
</template>

<script>


export default {
  name: 'AdminAccueilHead',
  components: {
  }
}
</script>

<style>
#content_adminAccueilHead{
  width:100%;
  text-align: center;
}
#content_adminAccueilHead h2{
  margin: 3rem auto;
}
#btn_adminExportAll{
  width: 30%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  color: white;
  padding: 5px 5px;
  border: 1px solid #271dca;
  background-color: #271dca;
  border-radius: 5px;
  text-shadow: 0px -1px #1d1596;
  font-weight: bolder;
  font-size: 15px; 
}

</style>
