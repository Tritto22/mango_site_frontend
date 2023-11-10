import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import { painting } from './painting.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        painting
    }
});
