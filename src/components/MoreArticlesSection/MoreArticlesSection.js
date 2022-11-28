import { Grid } from '@mui/material';
import { Section } from '../UI/Section';
import { moreArticles } from './mockData';
import { CardFlex } from '../UI/CardFlex';

export const MoreArticlesSection = () => {
  return (
    <Section title='More Articles'>
      <Grid container spacing={4}>
        {moreArticles.map(allArticles => (
          <Grid
            item
            key={allArticles.articles[0].id}
            xs={6}
            flexDirection='column'
            justifyContent='space-between'
          >
            {allArticles.articles.map(article => (
              <CardFlex key={article.id} boxShadow={true} {...article} />
            ))}
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};
