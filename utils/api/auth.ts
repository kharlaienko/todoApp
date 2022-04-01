import { AuthRegisterDTO } from './types';
import { instance } from './index';

export interface AuthResponse {
   access_token: string;
}

export const AuthApi = {
   async register(dto: AuthRegisterDTO): Promise<AuthResponse> {
      const { data } = await instance.post('auth/register', dto);
      return data;
   },

   async login(dto: AuthLoginDTO): Promise<AuthResponse> {
      const { data } = await instance.post('auth/login', dto);
      return data;
   },
};
