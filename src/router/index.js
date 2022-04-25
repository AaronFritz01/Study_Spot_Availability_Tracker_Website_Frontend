import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/about-view.vue"),
    },
    {
        path: "/campus_map",
        name: "campus-map",
        component: () =>
            import ( /* webpackChunkName: "campus-map-view" */ "../views/campus-map-view.vue"),
    },
    {
        path: "/study_spaces",
        name: "study-spaces",
        component: () =>
            import ( /* webpackChunkName: "campus-map-view" */ "../views/study-spaces-view.vue"),
    },
    {
        path: "/statistics",
        name: "statistics",
        component: () =>
            import ( /* webpackChunkName: "campus-map-view" */ "../views/statistics-view.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () =>
            import ( /* webpackChunkName: "campus-map-view" */ "../views/contact-view.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;