import Vue from 'vue';
import Router, {NavigationGuard, RouteConfig} from 'vue-router';
import {RouterNames} from './routerNames';
import Login from '../views/Login.vue';
import Main from '../views/Main.vue';
import { securityGuardRoutes } from './routerGuard';

Vue.use(Router);

export function routerFactory(isAuthenticated: boolean): Router {
    const isAuth: NavigationGuard = securityGuardRoutes(isAuthenticated);
    const login: RouteConfig = {path: `/login`, name: RouterNames.LOGIN, component: Login};
    const main: RouteConfig = {path: `/plan`, name: RouterNames.MAIN, component: Main, beforeEnter: isAuth};
    const notFound: RouteConfig = {path: '*', redirect: RouterNames.MAIN};

    return new Router({
        routes: [
            login,
            main,
            notFound,
        ],
    });
}
