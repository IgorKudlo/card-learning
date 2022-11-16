import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { user } from '../../features/auth/Login/authSlice';
import s from './styles.module.css';

const Header = () => {
  const userInfo = useAppSelector(user);

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div>Learning Cards</div>
        {userInfo
          ? (
            <div className={s.user}>
              <div className={s.userName}>{userInfo?.name}</div>
              <div className={s.userAvatar}>
                <img src={userInfo?.avatar} alt={userInfo?.name}/>
              </div>
            </div>
          )
          : <Link to="/login">Sign in</Link>
        }
      </div>
    </div>
  );
};

export default Header;