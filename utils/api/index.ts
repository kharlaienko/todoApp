import axios from 'axios';
import { parseCookies } from 'nookies';

export const instance = axios.create({
   baseURL: process.env.API_BASE_URL,
   headers: { Auhtorization: parseCookies()['token'] },
});
