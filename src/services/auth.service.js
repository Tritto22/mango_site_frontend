import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/auth/';
const API_URL = 'http://54.237.136.155:8080/api/auth/';

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