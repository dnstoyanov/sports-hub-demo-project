import { Grid } from '@mui/material';
import { Section } from '../UI/Section';
import { mostArticles } from './mockData';
import { CardFlex } from '../UI/CardFlex';

export const MostPopularMostCommented = () => {
  return (
    <Grid container spacing={4}>
      {mostArticles.map(articles => (
        <Grid
          item
          key={articles.items[0].id}
          xs={6}
          flexDirection='column'
          justifyContent='space-between'
        >
          <Section title={articles.title} outline={false}>
            {articles.items.map(article => (
              <CardFlex key={article.id} boxShadow={true} {...article} />
            ))}
          </Section>
        </Grid>
      ))}
    </Grid>
  );
};
