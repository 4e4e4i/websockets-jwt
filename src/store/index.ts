import Vue from 'vue';
import Vuex from 'vuex';
import {AUTH_MODULE} from '@/store/modules/modules_names';
import { AxiosServiceImpl } from '@/services/axios/AxiosServiceImpl';
import makeAuthModule from './modules/auth';

Vue.use(Vuex);

const state = {};

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
