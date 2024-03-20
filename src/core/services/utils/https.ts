
import axios from 'axios';
import { handleUnAuthResInterceptor } from './http-utils';
import { env } from '../../../utils/env';

export const httpsUnauthenticated = axios.create({
  baseURL: env('REACT_APP_API_URL_UNAUTHENTICATED'),
  auth: {
    username: env('REACT_APP_API_AUTH'),
    password: '',
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

httpsUnauthenticated.interceptors.response.use((res) => res, handleUnAuthResInterceptor);
