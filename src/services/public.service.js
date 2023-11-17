import axios from 'axios';

const API_URL = 'http://localhost:8080/api/public/';

class PublicService {
    getSliderPaintings(){
        return axios.get(API_URL + 'home');
    }
}

export default new PublicService();