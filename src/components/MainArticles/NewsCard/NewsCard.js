import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
import { styles } from '../../styles';

export const NewsCard = ({ article }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <Grid item xs={3}>
      <Card
        sx={{ ...styles.mainArticleCard }}
        onMouseOver={e => {
          setIsDisplayed(true);
        }}
        onMouseLeave={e => {
          setIsDisplayed(false);
        }}
      >
        <CardMedia component='img' height='128' image={article.image} alt='' />
        <CardContent sx={{ p: 0, position: 'relative' }}>
          <Typography variant='h2' component='h2' sx={{ marginTop: 1 }}>
            {article.title}
          </Typography>
          <Typography variant='body1' component='h2' sx={{ color: '#7F7B7B' }}>
            {article.subTitle}
          </Typography>
          {isDisplayed && (
            <IconButton sx={{ ...styles.nextBtn }}>
              <EastIcon color='primary' />
            </IconButton>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
