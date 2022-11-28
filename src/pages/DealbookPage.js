import { Box } from '@mui/material';
import { Layout } from '../components/layout';
import { MostPopularMostCommented } from '../components/MostPopularMostCommentedSection/MostPopularMostCommented';
import { DealbookArticles } from '../components/DealbookArticles/DealbookArticles';
import { MainArticle } from '../components/Dealbook-MainArticle/MainArticle';

function DealbookPage() {
  return (
    <Layout>
      <Box width={850} sx={{ margin: '50px auto' }}>
        <MainArticle />
        <DealbookArticles />
        <MostPopularMostCommented />
      </Box>
    </Layout>
  );
}

export default DealbookPage;
