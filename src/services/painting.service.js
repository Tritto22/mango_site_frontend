import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/admin/';

class PaintingService {
    newPainting(painting){
        if (
            painting.title !== '' && // Aggiunto controllo sull'input non vuoto
            painting.year >= 1993 &&
            painting.year <= 2199
        ) {
            return axios.post(API_URL + 'addPainting', painting, { headers: authHeader() });
        } else {
            return Promise.reject("I dati del quadro non sono validi.");
        }
    }
    getDashboard(pageNumber, pageSize) {
        return axios.get(`${API_URL}dashboard?pageNumber=${pageNumber}&pageSize=${pageSize}`, { headers: authHeader() });
    }

    update(painting){    
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

    delete(painting){
        if(painting.slug != null){
            return axios.delete(API_URL + 'delete', { data: painting, headers: authHeader() });
        }
    }
}

export default new PaintingService();