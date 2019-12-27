import {RouterNames} from './routerNames';
import {NavigationGuard} from 'vue-router';
export function securityGuardRoutes(isAuthenticated: boolean): NavigationGuard {
    return function isAuth(to: any, from: any, next: any) {
        if (isAuthenticated) {
            next();
        } else {
            next({name: RouterNames.LOGIN});
        }
    };
}
