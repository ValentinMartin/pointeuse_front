import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
 
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    //Page principale Admin
    path: '/AdminHomePage',
    name: 'adminhomepage',
    component: () => import('../components/admin/AdminHomePage'),

    children: [
      //Accueil
      {
        path: '',
        name: 'accueil',
        component: () => import('../components/admin/accueil/AdminAccueil')
      },

      //Utilisateurs
      {
        path: '',
        name: 'utilisateurs',
        component: () => import('../components/admin/utilisateurs/AdminUtilisateurs')
      },
      //Ordres
      {
        path: '',
        name: 'ordres',
        component: () => import('../components/admin/ordres/AdminOrdres')
      },
      //Carte
      {
        path: '',
        name: 'carte',
        component: () => import('../components/admin/carte/AdminCarte')
      },
      //Pointage
      {
        path: '',
        name: 'pointage',
        component: () => import('../components/admin/pointage/AdminPointage')
      },
      //Compte
      {
        path: '',
        name: 'compte',
        component: () => import('../components/admin/compte/AdminCompte')
      },
      //Images
      {
        path: '',
        name: 'images',
        component: () => import('../components/admin/images/AdminImages')
      }
    ]
  },
  {
    //Page principale Users
    path: '/UsersHomePage',
    name: 'usershomepage',
    component: () => import('../components/users/UsersHomePage'),

    
  }
]

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes

})
