import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styles } from './Styles.js';

export default function SocialMediaShare() {
  return (
    <Box sx={styles.socialMediaWrapper}>
      <Typography sx={{ color: '#7F8899', fontWeight: '500', fontSize: '20px' }}>Share:</Typography>
      <FacebookIcon sx={styles.icon} />
      <TwitterIcon sx={styles.icon} />
      <GoogleIcon sx={styles.icon} />
    </Box>
  );
}
