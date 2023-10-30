import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

// Inizializza lo stato in base alla presenza di un utente nel localStorage.
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        // Azione di accesso
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        // Azione di logout
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
        // // Azione di registrazione
        // register({ commit }, user) {
        //     return AuthService.register(user).then(
        //         response => {
        //             commit('registerSuccess');
        //             return Promise.resolve(response.data);
        //         },
        //         error => {
        //             commit('registerFailure');
        //             return Promise.reject(error);
        //         }
        //     );
        // },
        // Azione di update
        update({commit}, user){
            return UserService.update(user).then(
                response => {
                    commit('updateSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('updateFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        // Mutazione di successo per il login
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        // Mutazione di fallimento per il login
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        // Mutazione per il logout
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        // // Mutazione di successo per la registrazione
        // registerSuccess(state) {
        //     state.status.loggedIn = false;
        // },
        // // Mutazione di fallimento per la registrazione
        // registerFailure(state) {
        //     state.status.loggedIn = false;
        // },
        // Mutazione di successo per il login
        updateSuccess(state, user) {
            state.status.loggedIn = false;
            state.user = user;
        },
        // Mutazione di fallimento per il login
        updateFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        }
    }
}