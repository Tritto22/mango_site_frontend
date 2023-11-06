import axios from 'axios';
// import authHeader from './auth-header';

// const API_URL = 'http://localhost:8080/api/';

class UserService {
    getPublicContent(pageNumber, pageSize) {
        console.log(pageNumber);
        return axios.get(`http://localhost:8080/api/dashboard?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    // getUserBoard() {
    //     return axios.get(API_URL + 'user', { headers: authHeader() });
    // }

    // getModeratorBoard() {
    //     return axios.get(API_URL + 'mod', { headers: authHeader() });
    // }

    // getAdminBoard() {
    //     return axios.get(API_URL + 'admin', { headers: authHeader() });
    // }
}

export default new UserService();