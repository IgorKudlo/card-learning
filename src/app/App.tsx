import React, { useEffect } from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import {initializeApp, isInitializedSelector, isLoggedInSelector} from '../features/auth/Login/authSlice';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(isInitializedSelector);
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [navigate, isLoggedIn]);

  if (!isInitialized) {
    return (
      <div style={{position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'white'}}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
