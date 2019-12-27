import Vue from 'vue';
import App from './App.vue';
import {routerFactory} from './router';
import {AxiosServiceImpl} from '@/services/impl/axios/AxiosServiceImpl';
import { LoginService } from '@/services/LoginService';
import makeStore from '@/store';
import {AUTH_MODULE} from '@/store/modules/modules_names';
import {AuthState} from '@/store/modules/auth/types';
import { VueRouter } from 'vue-router/types/router';
import { LoginServiceMock } from "@/services/impl/mock/LoginServiceMock";
import { UserService, UserInfo } from "@/services/UserService";

Vue.config.productionTip = false;

let urlParams = new URLSearchParams(window.location.search);
let isProd: boolean = !urlParams.has('demo');
let loginServiceDependency: LoginService;
let userServiceDependency: UserService;

if(isProd){
  const axiosServiceImplementation: AxiosServiceImpl = new AxiosServiceImpl(
      '',
  );
  loginServiceDependency = axiosServiceImplementation;
}
else {
  const loginService: LoginServiceMock = new LoginServiceMock();

  class FakeUserService implements UserService {
    public getUserInfo(): UserInfo {
      return {};
    }

    public isAuthenticated(): boolean {
      return true;
    }
  }

  const fakeUserService: UserService = new FakeUserService();
  userServiceDependency = fakeUserService;
  loginServiceDependency = loginService;
}

const store: any = makeStore(axiosServiceImplementation);
const authState: AuthState = store.state[AUTH_MODULE];
const isAuth: boolean = authState.isAuthenticated;
const router: VueRouter = routerFactory(isAuth);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
