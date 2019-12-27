import {ActionTree, Module, MutationTree} from 'vuex';
import {AuthState} from './types';
import action from './actions-names';
import mutation from './mutations-names';
import {RootState} from '@/store/types';
import { LoginService } from '@/services/LoginService';
import {UserInfoLocalStorageImpl} from '@/services/UserInfoLocalStorageImpl';
import {UserInfoData, UserInfoStorageService} from '@/services/UserInfoStorageService';

const storageService: UserInfoStorageService = new UserInfoLocalStorageImpl('auth');

export const state: AuthState = {
    isAuthenticated: false,
};

function makeActions(apiService: LoginService, localStorage: UserInfoStorageService): ActionTree<AuthState, RootState> {
    return {
        [action.AUTHENTICATE]({commit}, payload) {
            commit(mutation.SET_AUTH, payload);
        },

        async [action.LOGIN]({commit, dispatch}, payload) {
            try {
                const response = await apiService.login(payload);
                commit(mutation.SET_AUTH, true);
                dispatch(action.SET_TO_STORAGE);
                return response;
            } catch (e) {
                commit(mutation.SET_AUTH, false);
                throw Error(e);
            }
        },

        async [action.LOGOUT]({commit, dispatch}) {
            try {
                const response = await apiService.logout();
                return response;
            } catch {
                throw Error('Ошибка с сервером');
            } finally {
                commit(mutation.SET_AUTH, false);
                dispatch(action.SET_TO_STORAGE);
            }
        },

        [action.SET_TO_STORAGE]({state}) {
            const userData: UserInfoData = {
                authenticated: state.isAuthenticated,
            };
            localStorage.save(userData);
        },

        [action.LOAD_FROM_STORAGE]({commit}) {
            const userData = localStorage.load();
            if (userData) {
                commit(mutation.SET_AUTH, userData.authenticated);
            }
        },
    };
}

const mutations: MutationTree<AuthState> = {
    [mutation.SET_AUTH](state, payload: boolean) {
        state.isAuthenticated = payload;
    },
};


const namespaced: boolean = true;

export default function makeAuthModule(apiService: LoginService): Module<AuthState, RootState> {
    return {
        namespaced,
        state,
        actions: makeActions(apiService, storageService),
        mutations,
    };
}

