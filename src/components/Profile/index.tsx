import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/Login/authSlice';
import Card from '../Card';
import s from './styles.module.css';

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
    <Card title={"Personal Information"}>
      <div className={s.profileAvatar}>
        <div className={s.profileAvatarImg}>
          <img src={user?.avatar} alt={user?.name} />
        </div>
        <IconButton className={s.profileAvatarBtn} aria-label="edit photo" size="small">
          <CameraAltIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className={s.profileName}>
        {user?.name}
        <IconButton className={s.profileNameBtn} aria-label="edit name">
          <BorderColorIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className={s.profileEmail}>{user?.email}</div>
      <Button
        onClick={() => dispatch(logout())}
        variant="outlined"
        startIcon={<LogoutIcon />}
        sx={{textTransform: 'none'}}
      >
        Log out
      </Button>
    </Card>
  );
};

export default Profile;