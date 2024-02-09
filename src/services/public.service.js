import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/public/';
const API_URL = 'https://www.simonetritto.site/api/public/';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
class PublicService {
    getSliderPaintings(){
        return axios.get(API_URL + 'home');
    }
    
    getGalleriesPaintings(pageNumber, pageSize) {
        return axios.get(`${API_URL}gallery?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }
}

export default new PublicService();