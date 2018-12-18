<template>
  <div id="content_adminAccueilTabHead">
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Employé</th>
              <th>N°Ordre</th>
              <th>Chantier</th>
              <th>Date</th>
              <th>Pointage</th>
              <th>Dépointage</th>
              <th>Temps</th>
              <th>Etat pointage</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
  </div>
</template>

<script>


export default {
  name: 'AdminAccueilTabHead',
  components: {
  }
}
</script>

<style>
table{
  width:100%;
  margin-top: 1rem;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(97, 93, 93, 0.3);
 }

th{
  padding: 20px 15px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
</style>
