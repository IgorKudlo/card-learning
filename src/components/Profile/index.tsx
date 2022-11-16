import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/Login/authSlice';
import s from './styles.module.css';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
  const user = useAppSelector(state => state.auth.user);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate, isLoggedIn]);

  return (
    <div className={s.profile}>
      <h1>Personal Information</h1>
      <div className={s.profileAvatar}>
        <img src={user?.avatar} alt={user?.name}/>
      </div>
      <div className={s.profileName}>{user?.name}</div>
      <div className={s.profileEmail}>{user?.email}</div>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
};

export default Profile;