import { AuthLoginDTO, AuthRegisterDTO } from './types';
import { Axios } from './index';

export interface AuthResponse {
   access_token: string;
}

export const AuthApi = {
   async register(dto: AuthRegisterDTO): Promise<AuthResponse> {
      const { data } = await Axios.post('auth/register', dto);
      return data;
   },

   async login(dto: AuthLoginDTO): Promise<AuthResponse> {
      const { data } = await Axios.post('auth/login', dto);
      return data;
   },
};
