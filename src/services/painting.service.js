import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/admin/';

class PaintingService {
    getDashboard(pageNumber, pageSize) {
        return axios.get(`${API_URL}dashboard?pageNumber=${pageNumber}&pageSize=${pageSize}`, { headers: authHeader() });
    }

    update(painting){
        // console.log("Chiamata a update in corso...");
        // const data = {};
        // console.log(painting);
        // if (painting.title !== null && painting.year >= 1993 && painting.year <= 2199) {
        //     this.data = painting;
        // }

        // return axios.put(API_URL + 'update', data, { headers: authHeader() });

    
        if (
            painting.title !== '' && // Aggiunto controllo sull'input non vuoto
            painting.year >= 1993 &&
            painting.year <= 2199
        ) {
            return axios.put(API_URL + 'update', painting, { headers: authHeader() });
        } else {
            return Promise.reject("I dati del quadro non sono validi.");
        }
    }
}

export default new PaintingService();