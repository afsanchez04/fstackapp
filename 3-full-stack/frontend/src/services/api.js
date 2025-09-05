import axios from 'axios';

export const api = axios.create({ 
  baseURL: 'https://fstackapp.vercel.app/api',
  withCredentials: true 
});
