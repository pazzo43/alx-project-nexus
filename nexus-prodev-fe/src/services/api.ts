import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api.com/api/v1', // Replace with your IP during local dev
  headers: { 'Content-Type': 'application/json' }
});

export default api;
