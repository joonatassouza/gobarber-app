import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apigobarber.jsdev.me',
});

export default api;
