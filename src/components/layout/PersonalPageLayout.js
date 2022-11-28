import { Header } from '../Header';
import { VerticalMenu } from '../VerticalMenu';
import { Grid, Box } from '@mui/material';

export const PersonalPageLayout = ({ children }) => {
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
      </Grid>
    </Box>
  );
};
