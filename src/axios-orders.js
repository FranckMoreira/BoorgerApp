import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://boogerapp.firebaseio.com/'
});

export default instance;