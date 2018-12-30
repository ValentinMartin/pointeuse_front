<template>
  <div id="content_adminPointage_formulaire">
      <h2>Créer un pointage</h2>
      <div class="flex_container" id="contentpointage">
          <div class="flex_container flex_direction_column" id="contentpointageleft">
              <select name="employee" id="selectEmployee">
                <option>-    -</option>
                <option :key="item.emp" v-for="item in employee"> {{item.emp}} </option>
              </select>
              <input type="text" name="numOrdre" placeholder="Numéro d'ordre" />
              <input type="text" name="nomChantier" placeholder="Nom du chantier" />
          </div>
          <div id="contentpointageright">
              <datetime format="DD/MM/YYYY H:i:s" width="300px" v-model="val"></datetime>
          </div>              
      </div>
      <button v-on:click="pointer()" id="btn_pointer_admin">Pointer</button>
  </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker'

export default {
  name: 'AdminPointageFormulaire',
    data() {
        return {
            employee: [{emp: 'JHE'},{emp: 'AZU'},{emp: 'RGA'},{emp: 'FTH'},{emp: 'DPA'},{emp: 'SMA'},{emp: 'LGU'}],            
        }
    },
  components: {
    datetime 
  },
  methods:{

  },
  mounted:{
  }
}
</script>

<style>
#content_adminPointage_formulaire{
  width: 100%;
  margin: 3rem auto;
  text-align: center; 
}
#contentpointage{
  margin-top: 3rem;
  justify-content: space-evenly;
  width:100%;
}
#contentpointageleft{
  width: 45%;
}
#contentpointageleft #selectEmployee{
  width : 5rem;
  margin : 0 auto;
}
#contentpointageright{
  width: 45%;
}
#btn_pointer_admin {
  width: 45%;
  margin: 3rem auto;
  color: white;
  padding: 5px 5px;
  border: 1px solid #2ecc71;
  background-color: #2ecc71;
  border-radius: 5px;
  text-shadow: 0px -1px #27ae60;  
  font-weight: bolder;
  font-size: 15px;  
}


/* Modification CSS Datetime picker */

.calender-div[data-v-4bd11526] {
    min-width: 280px;
    -webkit-box-shadow: 1px 2px 5px #ccc;
    box-shadow: 1px 2px 5px #ccc;
    background: #FFF;
    position: absolute;
    display: inline-block;
    left: 107px;
    top: 72px;
    color: #444;
    font-size: 14px;
    padding-bottom: 10px;
}
.nav-l[data-v-4bd11526], .nav-r[data-v-4bd11526],.year-month-wrapper[data-v-4bd11526]{
    background-color: #fff000c9;
}
.days[data-v-4bd11526]{
  color: #000000;
}
.month[data-v-4bd11526], .year[data-v-4bd11526],.nav-l[data-v-4bd11526], .nav-r[data-v-4bd11526]{
    color :#444;  
}
</style>
