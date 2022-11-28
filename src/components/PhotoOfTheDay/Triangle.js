import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';
import { styles } from './styles';

export const Triangle = () => {
  return (
    <Fragment>
      <Box sx={styles.triangle} />
      <Typography variant='h6' color='white' sx={styles.trinagleTitle}>
        PHOTO OF THE DAY
      </Typography>
    </Fragment>
  );
};
