import React from 'react';
import { Box, Typography } from '@mui/material';
import { SortList } from '../UI/SortList/SortList';

const SortComments = () => {
  const comments = 2;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
      }}
    >
      <Box>
        <Typography variant='h6'> {`COMMENTS (${comments})`} </Typography>
      </Box>
      <Box>
        <SortList />
      </Box>
    </Box>
  );
};

export default SortComments;
