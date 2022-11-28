import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { Section } from '../UI/Section';
import { CardMainNews } from './CardMainNews';
import { breakdownNews } from './mockData';
import { CardFlex } from '../UI/CardFlex';

export const BreakdownSection = () => {
  return (
    <Section title='Breakdown'>
      <Grid container spacing={4}>
        {breakdownNews.map(news => (
          <Fragment key={news.main.id}>
            <Grid item xs={6}>
              <CardMainNews {...news.main} sx={{ position: 'relative' }} />
            </Grid>
            <Grid container item xs={6} flexDirection='column' justifyContent='space-between'>
              {news.additional.map(news => (
                <CardFlex key={news.id} {...news} boxShadow={true} showArrow={true} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Section>
  );
};
