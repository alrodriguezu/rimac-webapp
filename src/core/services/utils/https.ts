
import axios from 'axios';
import { handleUnAuthResInterceptor } from './http-utils';

export const httpsUnauthenticated = axios.create({
  baseURL: 'https://rimac-front-end-challenge.netlify.app/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

httpsUnauthenticated.interceptors.response.use((res) => res, handleUnAuthResInterceptor);
