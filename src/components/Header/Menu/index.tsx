import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface IProfileMenu {
  anchorElUser: null | HTMLElement,
  closeHandler: () => void,
}

const ProfileMenu = ({anchorElUser, closeHandler}: IProfileMenu) => {
  return (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={closeHandler}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={closeHandler}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ProfileMenu;