import React from 'react';
import { styles } from './styles';
import Buttons from './Buttons2';
import Box from '@mui/material/Box';

const VerticalMenu2 = props => {
  return (
    <Box sx={styles.VerticalMenu2}>
      <Box sx={styles.buttonWrapper}>
        <Box sx={styles.redElement}></Box>
        <Buttons />
      </Box>
    </Box>
  );
};

export default VerticalMenu2;
