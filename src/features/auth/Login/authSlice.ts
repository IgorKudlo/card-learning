import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ILoginParams, ILoginResponse } from '../../../api/types';
import { authAPI } from '../../../api/cards-api';
import { RootState } from '../../../app/store';
import { errorHandler } from '../../../utils/errorHandler';

export interface AuthState {
  user: ILoginResponse | null,
  status: 'idle' | 'loading' | 'failed',
  isLoggedIn: boolean,
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  isLoggedIn: false,
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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload!;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state) => {
        state.status = 'failed';
      });
  }
})

export const user = (state: RootState) => state.auth.user;
export const loading = (state: RootState) => state.auth.status;
export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;