import type {RouteRecordRaw, Router} from 'vue-router';
import { createRouter, createWebHistory} from 'vue-router';
import Home from '/@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/home',
        name: 'Home',
        component: Home,
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;