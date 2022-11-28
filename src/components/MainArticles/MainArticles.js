import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { articles } from './MainArticlesData.js';
import { NewsCard } from './NewsCard';
import { MainImage } from './MainImage';
import { CarouselCard } from './Carousel';
import { Box } from '@mui/material';

export const MainArticles = () => {
  return (
    <Container
      disableGutters={true}
      sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}
    >
      <Box sx={{ position: 'absolute', width: '100%', left: 656, top: 86 }}>
        <CarouselCard />
      </Box>

      <MainImage />

      <Grid container marginY={1.8} spacing={2}>
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </Grid>
    </Container>
  );
};
