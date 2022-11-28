import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import { useState } from 'react';
import { styles } from './styles';

const hoverStyle = {
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#fff',
    boxShadow: '0px 7px 15px 2px #D2D2D2',
  },
};

export const CardMainNews = ({ category, image, title, sx = {} }) => {
  const [arrowIsDisplayed, setArrowIsDisplayed] = useState({ display: 'none' });
  return (
    <Card
      sx={{ ...hoverStyle, ...sx }}
      onMouseEnter={e => {
        setArrowIsDisplayed({ display: 'block' });
      }}
      onMouseLeave={e => {
        setArrowIsDisplayed({ display: 'none' });
      }}
    >
      <CardActionArea disableRipple>
        <CardHeader
          title={category}
          sx={styles.cardHeader}
          titleTypographyProps={{ variant: 'subtitle1' }}
        />
        <CardMedia component='img' height={200} image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <EastIcon
            fontSize='large'
            color='primary'
            sx={{ ...styles.arrowButton, ...arrowIsDisplayed }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
