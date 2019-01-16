import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import UsersHome from "./views/UsersHome.vue"
import NavBar from "./components/navbar/navBar.vue"
import AdminAccueil from "./views/admin/AdminAccueil.vue"
import AdminCarte from "./views/admin/AdminCarte.vue"
import AdminPointage from "./views/admin/AdminPointage.vue"
import AdminCompte from "./views/admin/AdminCompte.vue"
import AdminImages from "./views/admin/AdminImages.vue"

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