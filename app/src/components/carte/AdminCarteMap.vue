<template>
  <div id="content_AdminCarteMap" class="flex_container flex_direction_column">
      <div class="flex_container" id="content_adminCarteMap_filtre">
          <select name="employee" id="selectCarteEmployee">
              <option>-    -</option>
              <option :key="item.emp" v-for="item in employee" :value="item.emp"> {{item.emp}} </option>
          </select>
          <select name="chantier" id="selectCarteChantier">
              <option>-    -</option>
              <option :key="item.cha" v-for="item in chantier" :value="item.cha"> {{item.cha}} </option>
          </select>
          <select name="ordre" id="selectCarteOrdre">
              <option>-    -</option>
              <option :key="item.ord" v-for="item in ordre" :value="item.ord"> {{item.ord}} </option>
          </select>
      </div>
        <!-- map -->
        <img src="../../assets/img/modele_carte.png" id="test"/>
  </div>
</template>

<script>


export default {
  name: 'AdminCarteMap',
    data() {
        return {
            employee: [{emp: 'JHE'},{emp: 'AZU'},{emp: 'RGA'},{emp: 'FTH'},{emp: 'DPA'},{emp: 'SMA'},{emp: 'LGU'}],
            chantier: [{cha: 'Dépot'},{cha: 'Troinex'},{cha: 'Reverdin2'},{cha: 'Route de troinex'},{cha: 'Bajules'},{cha: 'Bel air'},{cha: 'Bajule'}],
            ordre: [{ord: '3442'},{ord: '3589'},{ord: '3587'},{ord: '3601'},{ord: '3606'},{ord: '3861'},{ord: '3456'}]            
        }
    },
  components: {
  }
}
</script>

<style>
#content_AdminCarteMap{
  width:100%;
  margin: 4rem auto;
}
#content_adminCarteMap_filtre{
  width: 60%;
  margin: 0 auto;
  justify-content: space-evenly;
}
#test{
    height: 30rem;
    margin: 1.5rem auto;
}
</style>
