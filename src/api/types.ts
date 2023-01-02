export interface ILoginParams {
  email: string,
  password: string,
  rememberMe: boolean,
}

export interface ILoginResponse {
  _id: string,
  email: string,
  name: string,
  avatar?: string,
  publicCardPacksCount: number,
  created: Date,
  updated: Date,
  isAdmin: boolean,
  verified: boolean,
  rememberMe: boolean,
  error?: string,
}

export interface IRegisterParams {
  email: string,
  password: string,
}

export interface IRegisterResponse {
  addedUser: {},
  error?: string,
}

export interface IMeResponse {
  _id: string,
  email: string,
  name: string,
  avatar?: string,
  publicCardPacksCount: number,
  created: Date,
  updated: Date,
  isAdmin: boolean,
  verified: boolean,
  rememberMe: boolean,
  error?: string,
}

export interface ILogoutResponse {
  info: string,
  error: string,
}

export interface IRecoveryParams {
  email: string,
  from: string,
  message: string,
}

export interface IRecoveryResponse {
  info: string,
  error: string;
}

export interface IResetParams {
  password: string,
  resetPasswordToken: string,
}

export interface IResetResponse {
  info: string,
  error: string,
}

export interface IBlockParams {
  id: string,
  blockReason: string,
}

export interface IBlockResponse {
  user: string,
  blockedCardPacksCount: number,
}

