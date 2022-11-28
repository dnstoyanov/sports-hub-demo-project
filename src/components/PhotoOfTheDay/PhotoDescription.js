import { Box, Typography } from '@mui/material';

export const PhotoDescription = ({ title, subTitle, author }) => {
  return (
    <Box>
      <Typography variant='h5' color='white' sx={{ mb: '15px' }}>
        {title}
      </Typography>
      <Typography variant='string' color='white' component='p'>
        {subTitle}
      </Typography>
      <Typography
        variant='string'
        color='white'
        component='p'
        sx={{ fontStyle: 'italic', fontWeight: 600 }}
      >
        {author}
      </Typography>
    </Box>
  );
};
