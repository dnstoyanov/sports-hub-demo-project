import { Box } from '@mui/material';
import { BreakdownSection } from '../components/BreakdownSection';
import { MostPopularMostCommented } from '../components/MostPopularMostCommentedSection';
import { Layout } from '../components/layout';
import { MainArticles } from '../components/MainArticles';
import { PhotoOfTheDay } from '../components/PhotoOfTheDay';

function HomePage() {
  return (
    <Layout>
      <Box width={850} sx={{ margin: '50px auto', float: 'left' }}>
        <MainArticles />
        <BreakdownSection />
        <PhotoOfTheDay />
        <MostPopularMostCommented />
      </Box>
    </Layout>
  );
}

export default HomePage;
