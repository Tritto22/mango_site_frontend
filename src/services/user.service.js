import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://www.simonetritto.site/api/user/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
axios.defaults.withCredentials = false;
axios.defaults.crossDomain = true;

class UserService {
    // getPublicContent() {
    //     return axios.get(API_URL + 'all');
    // }

    // getUserBoard() {
    //     return axios.get(API_URL + 'user', { headers: authHeader() });
    // }

    // getModeratorBoard() {
    //     return axios.get(API_URL + 'mod', { headers: authHeader() });
    // }

    // getAdminBoard() {
    //     return axios.get(API_URL + 'admin', { headers: authHeader() });
    // }

    update(user){
        const data = {};

        if (user.username !== null) {
            data.username = user.username;
        }

        if (user.email !== null) {
            data.email = user.email;
        }

        if (user.password !== null) {
            data.password = user.password;
        }

        return axios.put(API_URL + 'update', data, { headers: authHeader() });
    }
}

export default new UserService();