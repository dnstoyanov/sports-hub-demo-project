import { Button, Typography, Box } from '@mui/material';
import photo from '../../assets/dealbook_main_article/edgar-chaparro-kB5DnieBLtM-unsplash.jpg';

export function MainArticle() {
  return (
    <Box sx={{ marginBottom: '50px' }}>
      <img
        src={photo}
        alt='main article'
        sx={{ display: 'flex', position: 'relative' }}
        style={{
          width: '850px',
          height: '560px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '200px',
          marginLeft: '667px',
          width: '421px',
          height: '272px',
          backgroundColor: '#F6F6F6',
        }}
      >
        <Typography
          sx={{
            color: '#7F7B7B',
            paddingLeft: '33px',
            paddingTop: '40px',
            paddingBottom: '17px',
            fontWeight: 700,
          }}
        >
          Published / 20.09.2019
        </Typography>
        <Typography
          sx={{
            color: '#C63638',
            paddingLeft: '33px',
            paddingBottom: '11px',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Article by Some Name / Assosiated Prass
        </Typography>
        <Typography
          sx={{
            color: '#2B2F43',
            paddingLeft: '33px',
            paddingBottom: '30px',
            paddingRight: '97px',
            fontSize: '22px',
            fontWeight: 700,
          }}
        >
          How KUZMA has impoved and inspired in 2nd season in NBA
        </Typography>
        <Button
          variant='contained'
          sx={{
            width: 183,
            height: 42,
            bottom: 0,
            position: 'absolute',
            fontSize: 14,
            fontWeight: 600,
            color: '#fff',
            backgroundColor: '#D72130',
          }}
        >
          More
        </Button>
      </Box>
    </Box>
  );
}
