import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import AdminHome from "./views/AdminHome.vue"
import UsersHome from "./views/UsersHome.vue"
import NavBar from "./components/navbar/navBar.vue"
import AdminAccueil from "./components/accueil/AdminAccueil.vue"
import AdminUtilisateurs from "./components/utilisateurs/AdminUtilisateurs.vue"
import AdminOrdres from "./components/ordres/AdminOrdres.vue"
import AdminCarte from "./components/carte/AdminCarte.vue"
import AdminPointage from "./components/pointage/AdminPointage.vue"
import AdminCompte from "./components/compte/AdminCompte.vue"
import AdminImages from "./components/images/AdminImages.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "Login"
            }
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/AdminHome",
            name: "AdminHome",
            component: AdminHome
        },
        {
            path: "/NavBar",
            name: "NavBar",
            component: NavBar
        },
        {
            path: "/AdminAccueil",
            name: "AdminAccueil",
            component: AdminAccueil
        },
        {
            path: "/AdminUtilisateurs",
            name: "AdminUtilisateurs",
            component: AdminUtilisateurs
        },
        {
            path: "/AdminOrdres",
            name: "AdminOrdres",
            component: AdminOrdres
        },
        {
            path: "/AdminCarte",
            name: "AdminCarte",
            component: AdminCarte
        },
        {
            path: "/AdminPointage",
            name: "AdminPointage",
            component: AdminPointage
        },
        {
            path: "/AdminCompte",
            name: "AdminCompte",
            component: AdminCompte
        },
        {
            path: "/AdminImages",
            name: "AdminImages",
            component: AdminImages
        },
        {
            path: "/UsersHome",
            name: "UsersHome",
            component: UsersHome
        }
    ]
})