import { Box } from '@mui/material';
import { Section } from '../UI/Section';
import { photoData } from './mockData';
import { PhotoDescription } from './PhotoDescription';
import { PhotoImage } from './PhotoImage';
import { styles } from './styles';
import { Triangle } from './Triangle';

export const PhotoOfTheDay = () => {
  return (
    <Section title={'Photo of the day'}>
      <Box sx={{ position: 'relative' }}>
        <Triangle />
        <PhotoImage title={photoData.title} image={photoData.image} />
        <Box sx={styles.imageContainer}>
          <PhotoDescription
            title={photoData.title}
            subTitle={photoData.subTitle}
            author={photoData.author}
          />
        </Box>
      </Box>
    </Section>
  );
};
