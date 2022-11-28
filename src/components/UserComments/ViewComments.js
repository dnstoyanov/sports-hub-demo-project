import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';
import { UserComment } from './UserComment';

export const ViewComments = () => {
  return (
    <>
      <Box sx={styles.displayCommentsElement}>
        <UserComment />
      </Box>
    </>
  );
};
