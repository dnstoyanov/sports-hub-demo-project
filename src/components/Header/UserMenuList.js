import React, { useState } from 'react';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import avatarPicture from '../../assets/personal_form/pexels-pixabay-356043-scaled.jpg';
import { styles } from './Styles';
import { UserDropdownLink } from '../UI/Styles/NavStyles';

export default function UserMenuList() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const mySurveys = <UserDropdownLink to='/surveys'> My Surveys </UserDropdownLink>;
  const userPage = <UserDropdownLink to='/user'> My Profile </UserDropdownLink>;
  const userPassword = <UserDropdownLink to='/passchange'> Change Password </UserDropdownLink>;

  const listItems = ['vanyabalog@gmail.com', userPage, userPassword, mySurveys, 'Team Hub'];

  const mapedListItems = listItems.map((listitem, index) => {
    return (
      <ListItemButton sx={styles.userDropdownHover} key={index} disableRipple>
        {listitem}
      </ListItemButton>
    );
  });

  return (
    <Box>
      <List
        sx={{
          width: '80%',
          maxWidth: 220,
          bgcolor: 'background.paper',
          position: 'absolute',
          top: '6px',
          fontSize: '14px',
        }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        <ListItemButton
          onClick={handleClick}
          sx={{ background: 'white', '&:hover': { background: '#FFFFFF', color: '#D72130' } }}
          disableRipple
        >
          <ListItemIcon>
            <Avatar alt='Ivan Baloh' src={avatarPicture} sx={{ width: '56', height: '56' }} />
          </ListItemIcon>
          <ListItemText primary='Ivan Baloh' />
          {open ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {mapedListItems}
            <ListItemButton sx={styles.logout} disableRipple>
              <ListItemText primary='Log out' />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
