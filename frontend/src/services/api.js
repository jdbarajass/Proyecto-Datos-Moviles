import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Cambia a tu IP local si pruebas en dispositivo físico
});

export default api;
