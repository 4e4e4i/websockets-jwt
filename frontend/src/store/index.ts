import Vue from 'vue';
import Vuex from 'vuex';
import {AUTH_MODULE} from './modules/modules_names';
import {AxiosServiceImpl} from '@/services/impl/axios/AxiosServiceImpl';
import makeAuthModule from './modules/auth';
import {RootState} from '@/store/types';

Vue.use(Vuex);

const state: RootState = {
    statuses: [],
};

const getters = {};

const actions = {};

const mutations = {};

export default function makeStore(apiService: AxiosServiceImpl) {
    return new Vuex.Store({
        state,
        actions,
        getters,
        mutations,
        modules: {
            [AUTH_MODULE]: makeAuthModule(apiService),
        },
    });
}
