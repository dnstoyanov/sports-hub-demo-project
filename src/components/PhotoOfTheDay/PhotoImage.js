import { Box } from '@mui/material';
import { styles } from './styles';

export const PhotoImage = ({ title, image }) => {
  return (
    <Box sx={styles.imageGradient}>
      <Box component='img' sx={styles.image} alt={title} src={image} />
    </Box>
  );
};
