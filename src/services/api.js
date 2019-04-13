import axios from 'axios';

const api = axios.create({
    baseURL: 'https://prizon-backend.herokuapp.com',
});

export default api;