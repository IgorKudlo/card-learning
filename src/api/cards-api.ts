import axios from 'axios';
import {
  IBlockResponse,
  ILoginParams,
  ILoginResponse,
  ILogoutResponse,
  IMeResponse,
  IRecoveryParams,
  IRecoveryResponse,
  IRegisterParams,
  IRegisterResponse,
  IResetParams,
  IResetResponse
} from './types';

const settings = {
  withCredentials: true,
}
export const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/' ,
  // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:7542/2.0/' : 'https://neko-back.herokuapp.com/2.0/',
  ...settings,
})

// api
export const cardsAPI = {

}

export const authAPI = {
  login(data: ILoginParams) {
    return instance.post<ILoginResponse>('auth/login', data);
  },
  register(data: IRegisterParams) {
    return instance.post<IRegisterResponse>('auth/register', data);
  },
  me() {
    return instance.post<IMeResponse>('auth/me', {});
  },
  logout() {
    return instance.delete<ILogoutResponse>('auth/me', {});
  },
  recovery(data: IRecoveryParams) {
    return instance.post<IRecoveryResponse>('auth/forgot', data);
  },
  reset(data: IResetParams) {
    return instance.post<IResetResponse>('auth/set-new-password', data);
  },
  block(data: any) {
    return instance.post<IBlockResponse>('auth/block', data);
  }
}