<template>
  <div id="content_adminAccueilTabContent">
    <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>AAC</td>
          <td>AUSTRALIAN COMPANY</td>
          <td>$1.38</td>
          <td>+2.01</td>
          <td>-0.36%</td>
          <td>-0.36%</td>
          <td>-0.36%</td>
          <td>-0.36%</td>
          <td><button class="btn_AccueilTabAnnuler">Annuler</button></td>
          <td><button class="btn_AccueilTabModifier">Modifier</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>


export default {
  name: 'AdminAccueilTabContent',
  components: {
  },
  mounted:{

  }
}
</script>

<style>
.tbl-content{
  height:300px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
  text-align: center;
  text-transform: capitalize;
  font-size: 13px;
}
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
