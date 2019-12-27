import Vue from 'vue';
import App from './App.vue';
import {routerFactory} from './router';
import {AxiosServiceImpl} from '@/services/axios/AxiosServiceImpl';
import { LoginService } from '@/services/LoginService';
import makeStore from '@/store';
import {AUTH_MODULE} from '@/store/modules/modules_names';
import {AuthState} from '@/store/modules/auth/types';
import { VueRouter } from 'vue-router/types/router';

Vue.config.productionTip = false;

const axiosServiceImplementation: AxiosServiceImpl = new AxiosServiceImpl(
    '',
);

let loginServiceDependency: LoginService;
loginServiceDependency = axiosServiceImplementation;

const store: any = makeStore(axiosServiceImplementation);
const authState: AuthState = store.state[AUTH_MODULE];
const isAuth: boolean = authState.isAuthenticated;
const router: VueRouter = routerFactory(isAuth);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
