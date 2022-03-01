import { createRouter , createWebHistory } from "vue-router";
import Detail from "./components/detail.vue";
import Popular from "./components/Popularmovie.vue"
const routes=[
        {
            path:"/popular/",
            name:'Popular',
            component:Popular
        },
        {
            path:"/details/:id",
            name:'Detail',
            component:Detail
        },

]
const router= createRouter({
    history : createWebHistory(),
    routes,
});
export default router;

