//VueJS
import Vue from 'vue'

//Module globaux
import router from './router/router.js' //Déclaration Router spécifique


//Point d'entrée 
import App from './App.vue'


Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')