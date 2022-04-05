import axios from 'axios';
import { parseCookies } from 'nookies';

export const Axios = axios.create({
   baseURL: process.env.API_BASE_URL,
   headers: { Auhtorization: parseCookies()['token'] || '' },
});
