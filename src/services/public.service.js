import axios from 'axios';

const API_URL = 'http://localhost:8080/api/public/';

class PublicService {
    getSliderPaintings(){
        return axios.get(API_URL + 'home');
    }
    
    getGalleriesPaintings(pageNumber, pageSize) {
        return axios.get(`${API_URL}gallery?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }
}

export default new PublicService();