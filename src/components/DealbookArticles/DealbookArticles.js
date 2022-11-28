import { Divider, Grid, Box } from '@mui/material';
import { dealBookArticles } from './mockData';
import { CardArticle } from '../UI/CardArticle';
import { Fragment } from 'react';
import { styles } from '../styles';

export const DealbookArticles = () => {
  return (
    <Box sx={{ width: '100%', mb: 10 }}>
      <Grid container sx={{ ...styles.scrollBar, p: 1.5 }}>
        <Grid xs={12} rowSpacing={5} item={true} sx={{ maxHeight: '795px' }}>
          {dealBookArticles.map((article, index) => (
            <Fragment key={article.id}>
              <CardArticle boxShadow={true} {...article} />
              {index !== dealBookArticles.length - 1 && <Divider sx={{ m: 1.5 }} />}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
