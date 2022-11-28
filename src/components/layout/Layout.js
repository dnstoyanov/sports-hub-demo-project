import { Header } from '../Header';
import { VerticalMenu } from '../VerticalMenu';
import { Footer } from '../Footer';
import { Grid, Box } from '@mui/material';

export const Layout = ({ children }) => {
  return (
    <Box sx={{ margin: 'auto', overflowX: 'hidden' }} width={1440}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
          <VerticalMenu />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
