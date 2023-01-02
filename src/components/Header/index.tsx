import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { useAppSelector } from '../../app/hooks';
import { userSelector } from '../../features/auth/Login/authSlice';
import ProfileMenu from './Menu';
import s from './styles.module.css';


const Header = () => {
  const user = useAppSelector(userSelector);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={s.AppBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <span className={s.logo}>Learning Cards</span>
          <Box sx={{ ml: 'auto' }}>
            {user
              ? (<>
                <Link to="/profile" className={s.userName}>{user?.name}</Link>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user?.name} src={user?.avatar} />
                  </IconButton>
                </Tooltip>
                <ProfileMenu anchorElUser={anchorElUser} closeHandler={handleCloseUserMenu} />
              </>)
              : <Button to="/login" component={Link} variant="contained">Sign in</Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;