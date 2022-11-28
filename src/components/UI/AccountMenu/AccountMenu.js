import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { styles } from './styles';
import { ButtonGroupLink } from '../Styles/NavStyles';

export const AccountMenu = () => {
  return (
    <Box sx={{ width: '90%', margin: '50px auto' }}>
      <ButtonGroup disableRipple>
        <ButtonGroupLink to='/user'>
          <Button sx={{ ...styles.menuButton }}> Personal </Button>
        </ButtonGroupLink>
        <ButtonGroupLink to='/passchange'>
          <Button sx={{ ...styles.menuButton }}>Change password</Button>
        </ButtonGroupLink>
        <ButtonGroupLink to='/surveys'>
          <Button sx={{ ...styles.menuButton }}>My surveys</Button>
        </ButtonGroupLink>
        <Button sx={{ ...styles.menuButton }}>Team hub</Button>
      </ButtonGroup>
    </Box>
  );
};
