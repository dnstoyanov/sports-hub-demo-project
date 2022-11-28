import {
  Grid,
  Container,
  Button,
  TextField,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Divider,
} from '@mui/material';
import LinksGroup from './LinksGroup';
import { Link } from 'react-router-dom';

export function Footer() {
  const companyLinks = [
    { text: 'About Sports Hub', url: '#' },
    { text: 'News / In the Press', url: '#' },
    { text: 'Advertising / Sport Blogger Ad Network', url: '#' },
    { text: 'Events', url: '#' },
    { text: 'Contact Us', url: '#' },
  ];

  const contributorLinks = [
    { text: 'Featured Writers Program', url: '#' },
    { text: 'Featured Team Writers Program', url: '#' },
    { text: 'Internship Program', url: '#' },
  ];

  return (
    <footer>
      <Divider variant='inset' sx={{ ml: 30, color: '#D72130' }} />
      <Box px={{ sm: 5 }} py={{ sm: 5 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={1} sx={{ paddingLeft: 12 }}>
            <Grid item xs={12} sm={4}>
              <LinksGroup name='COMPANY INFO' links={companyLinks}></LinksGroup>
            </Grid>

            <Grid item xs={12} sm={4}>
              <LinksGroup name='CONTRIBUTORS' links={contributorLinks}></LinksGroup>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant='h2' sx={{ paddingBottom: '29px' }}>
                NEWSLETTER
              </Typography>
              <Typography variant='h3' sx={{ paddingBottom: '14px', color: '#434C5D' }}>
                Sign up to receive the latest sports news
              </Typography>
              <Box>
                <TextField
                  id='outlined-basic'
                  placeholder='Your email address'
                  variant='outlined'
                  size='small'
                ></TextField>
                <Button
                  variant='contained'
                  sx={{
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    boxShadow: 0,
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <AppBar position='static'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <Box>
              <Typography
                variant='h1'
                sx={{
                  flexGrow: 1,
                  paddingLeft: '48px',
                  paddingRight: '38px',
                  paddingTop: '24px',
                  paddingBottom: '28px',
                }}
              >
                Sports Hub
              </Typography>
            </Box>
          </Link>
          <Box>
            <Typography variant='h4' sx={{ paddingRight: '56px' }}>
              Copyright 2022 Sports Hub
            </Typography>
            <Typography variant='h4' sx={{ float: 'right', paddingRight: '56px' }}>
              Privacy / Terms
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </footer>
  );
}
