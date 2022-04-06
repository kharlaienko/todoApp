import axios from 'axios';
import { parseCookies } from 'nookies';

const token = parseCookies()['token'];

export const Axios = axios.create({
   baseURL: process.env.API_BASE_URL,
   headers: { Authorization: token ? `Bearer ${token}` : '' },
});
