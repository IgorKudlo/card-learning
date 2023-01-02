import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ILoginParams, ILoginResponse } from '../../../api/types';
import { authAPI } from '../../../api/cards-api';
import { RootState } from '../../../app/store';
import { errorHandler } from '../../../utils/errorHandler';

export interface AuthState {
  user: ILoginResponse | null,
  status: 'idle' | 'loading' | 'failed',
  isLoggedIn: boolean,
  isInitialized: boolean,
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  isLoggedIn: false,
  isInitialized: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (data: ILoginParams) => {
    try {
      const response = await authAPI.login(data);
      return response.data;
    } catch (error) {
      errorHandler(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      const response = await authAPI.logout();
      return response.data;
    } catch (error) {
      errorHandler(error);
    }
  }
);

export const initializeApp = createAsyncThunk(
  'auth/me',
  async () => {
    const response = await authAPI.me();
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload!;
        state.isInitialized = true;
      })
      .addCase(initializeApp.rejected, (state) => {
        state.isInitialized = true;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
        state.status = 'loading';
      })
      .addMatcher((action) => action.type.endsWith('/fulfilled'), (state) => {
        state.status = 'idle';
      })
      .addMatcher((action) => action.type.endsWith('/rejected'), (state) => {
        state.status = 'failed';
      });
  }
})

export const userSelector = (state: RootState) => state.auth.user;
export const loadingSelector = (state: RootState) => state.auth.status;
export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const isInitializedSelector = (state: RootState) => state.auth.isInitialized;

export default authSlice.reducer;