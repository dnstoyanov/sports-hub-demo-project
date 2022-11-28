import React from 'react';
import FollowMedia from './FollowMedia';
import MenuButtons from './MenuButtons';
import Box from '@mui/material/Box';
import { styles } from './styles.js';

export const VerticalMenu = props => {
  return (
    <>
      <Box sx={styles.verticalMenu}>
        <Box sx={styles.greyAttribute}></Box>
        <MenuButtons />
        <FollowMedia />
      </Box>
    </>
  );
};
