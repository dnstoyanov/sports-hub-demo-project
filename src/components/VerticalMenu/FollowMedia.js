import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import { styles } from './styles';

const FollowMedia = props => {
  return (
    <Box sx={styles.followMedia}>
      <Box sx={styles.follow}>Follow</Box>
      <Box sx={styles.socialIcons}>
        <FacebookIcon sx={styles.icons} />
        <TwitterIcon sx={styles.icons} />
      </Box>
      <Box sx={styles.socialIcons}>
        <GoogleIcon sx={styles.icons} />
        <YouTubeIcon sx={styles.icons} />
      </Box>
    </Box>
  );
};
export default FollowMedia;
