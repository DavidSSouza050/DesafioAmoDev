import axios from 'axios';

const api = axios.create({
    baseURL: 'http://cloud.autosim.mangotest.com/rs/product',
});

export default api;