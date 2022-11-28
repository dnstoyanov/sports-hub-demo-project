import { Grid } from '@mui/material';
import { mainImages } from './MainImagesData.js';
import Box from '@mui/material/Box';
import { styles } from '../../styles';

export const MainImage = () => {
  return (
    <Grid>
      {mainImages.map(mainImage => (
        <Box key={mainImage.id}>
          <Box sx={{ ...styles.mainImageTitle }}>{mainImage.category}</Box>
          <img src={mainImage.image} alt=''></img>
        </Box>
      ))}
    </Grid>
  );
};
