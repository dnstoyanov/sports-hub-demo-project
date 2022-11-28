import CameraAltIcon from '@mui/icons-material/CameraAlt';
import picture from '../../assets/personal_form/pexels-pixabay-356043-scaled.jpg';
import { TextField, Box, Button, Grid, Avatar, InputLabel } from '@mui/material';

export function PersonalForm() {
  return (
    <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
      <form>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingTop: '45px',
            paddingBottom: '27px',
          }}
        >
          <Avatar
            src={picture}
            alt='profile'
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              marginLeft: '44px',
            }}
          ></Avatar>
          <CameraAltIcon
            sx={{
              color: 'white',
              backgroundColor: '#D72130',
              borderRadius: '50%',
              padding: '9px',
              fontSize: '40px',
              position: 'relative',
              right: '42px',
            }}
          />
        </Box>
        <InputLabel
          sx={{
            fontSize: 10,
            color: '#434C5D',
            fontWeight: 600,
            paddingBottom: '8px',
          }}
        >
          FIRST NAME
        </InputLabel>
        <TextField
          sx={{ width: '389px', height: '42px' }}
          variant='outlined'
          size='small'
          required
          defaultValue='Ivan'
          inputProps={{
            style: { fontSize: 16, color: 'black', fontWeight: 400 },
          }}
        ></TextField>
        <InputLabel
          sx={{
            fontSize: 10,
            color: '#434C5D',
            fontWeight: 600,
            paddingBottom: '8px',
            paddingTop: '16px',
          }}
        >
          LAST NAME
        </InputLabel>
        <TextField
          sx={{ width: '389px', height: '42px' }}
          variant='outlined'
          size='small'
          required
          defaultValue='Baloh'
          inputProps={{
            style: { fontSize: 16, color: 'black', fontWeight: 400 },
          }}
        ></TextField>
        <InputLabel
          sx={{
            fontSize: 10,
            color: '#434C5D',
            fontWeight: 600,
            paddingBottom: '8px',
            paddingTop: '16px',
          }}
        >
          EMAIL
        </InputLabel>
        <TextField
          sx={{
            width: '389px',
            height: '42px',
          }}
          variant='outlined'
          size='small'
          required
          inputProps={{
            style: { fontSize: 16, color: 'black', fontWeight: 400 },
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
          }}
          defaultValue='vanyabalog@gmail.com'
        ></TextField>
        <Button
          variant='contained'
          sx={{
            height: '42px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '20px',
            paddingRight: '20px',
            boxShadow: 0,
            display: 'block',
            width: '389px',
            marginTop: '35px',
          }}
        >
          UPDATE PROFILE
        </Button>
      </form>
    </Grid>
  );
}
