import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { styles } from './Styles.js';
import SiteSearch from './SiteSearch.js';
import SocialMediaShare from './SocialMediaShare.js';
import UserMenuList from './UserMenuList.js';
import SelectLanguage from './SelectLanguage.js';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box sx={styles.headerWrapper}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Box sx={styles.logo}>
          <Typography variant='h5' sx={{ color: 'white' }}>
            Sports Hub
          </Typography>
        </Box>
      </Link>

      <Box sx={styles.searchWrapper}>
        <SiteSearch />
      </Box>

      <Box sx={styles.socialMediaWrapper}>
        <SocialMediaShare />
      </Box>

      <Box sx={styles.userInfoWrapper}>
        <UserMenuList />
        <SelectLanguage />
      </Box>
    </Box>
  );
};
