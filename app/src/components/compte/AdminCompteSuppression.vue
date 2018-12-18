<template>
  <div id="content_AdminCompte_Suppression" class="flex_container flex_direction_column">
    <h2>Supprimer un compte</h2>
    <select name="employee">
      <option>--</option>
      <option :key="item.emp" v-for="item in employee" :value="item.emp"> {{item.emp}} </option>
    </select>  
    <button type="button" v-on:click="deleteCompte()">Supprimer un compte</button>
  </div>
</template>

<script>


export default {
  name: 'AdminCompteSuppression',
    data() {
        return {
            employee: [{emp: 'JHE'},{emp: 'AZU'},{emp: 'RGA'},{emp: 'FTH'},{emp: 'DPA'},{emp: 'SMA'},{emp: 'LGU'}],  
        }
    },
  components: {
  },
  methods: {
      deleteCompte() {

      }
  }
}
</script>

<style>
#content_AdminCompte_Suppression{
    width:60%;
    text-align: center;
    margin:3rem auto;
    margin-bottom: 10rem;
}
#content_AdminCompte_Suppression select,#content_AdminCompte_Suppression button{
    margin: 0.5rem auto;  
}
#content_AdminCompte_Suppression button{
      background: #bb1515;
      color: white;
      padding: 5px 5px;
      border: 1px solid #bb1515;
      border-radius: 5px;
      text-shadow: 0px -1px #8b0b0b;  
      font-weight: bolder;
      font-size: 15px;  
}
</style>
