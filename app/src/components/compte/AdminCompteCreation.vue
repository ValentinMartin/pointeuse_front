<template>
  <div id="content_AdminCompte_Creation" class="flex_container flex_direction_column">
    <h2>Créer un compte</h2>
    <input type="text" name="nom" placeholder="Nom" />
    <input type="password" name="mdp" placeholder="Mot de passe" />
    <button type="button" v-on:click="createCompte()">Créer un compte</button>
  </div>
</template>

<script>


export default {
  name: 'AdminCompteCreation',
  components: {
  },
  methods: {
      createCompte() {

      }
  }
}
</script>

<style>
#content_AdminCompte_Creation{
    width:60%;
    text-align: center;
    margin:2rem auto;
}
#content_AdminCompte_Creation input,#content_AdminCompte_Creation button{
    margin: 0.5rem auto;
}
#content_AdminCompte_Creation button{
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
