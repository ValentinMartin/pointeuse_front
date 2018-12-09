// 1. Define route components.
var Navbar = {
    template: '#Navbar'
};
var Bar = {
    template: '#bar'
};
var Nope = {
    template: '#nope'
};
Vue.component('routing', {
    template: '#routing',
    computed: {
        routes: function () {
            var routes = [];
            for (var i in this.$router.options.routes) {
                if (!this.$router.options.routes.hasOwnProperty(i)) {
                    continue
                }
                var route = this.$router.options.routes[i];
                if(route.hasOwnProperty('title')) {
                    routes.push(route);
                }
            }
            return routes;
        }
    }
});

// 2. Define some routes
var routes = [{
    name: 'Home',
    path: '/Home',
    component: Home
}, {
    name: 'bar',
    title: 'Bar stool',
    path: '/bar',
    component: Bar
}, {
    name: 'nope',
    path: '/nope',
    component: Nope
}, {
    path: '*',
    redirect: {
        name: 'foo'
    }
}];

// 3. Create the router instance and pass the `routes` option
var router = new VueRouter({
    routes // short for routes: routes
});

// 4. Create and mount the root instance.
var app = new Vue({
    router
}).$mount('#app');

// Now the app has started!