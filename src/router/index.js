import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: 'Pogoda',
        },
    },
    {
        path: '/fav-cities',
        name: 'FavCities',
        component: () => import('../views/FavCities.vue'),
        meta: {
            title: 'Ulubione Miasta',
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | LuxWeather`;
    next();
});

export default router
