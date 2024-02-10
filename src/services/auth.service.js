import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/auth/';
const API_URL = 'https://www.simonetritto.site/api/auth/';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
axios.defaults.withCredentials = false;
axios.defaults.crossDomain = true;
class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                } else{
                    console.log('token mancante:  ' + JSON.stringify(response));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    // register(user) {
    //     return axios.post(API_URL + 'signup', {
    //         username: user.username,
    //         email: user.email,
    //         password: user.password
    //     });
    // }
}

export default new AuthService();