import { Box, Divider, Chip } from '@mui/material';
import { styles } from './styles';

export const Section = ({ title, children, sx, outline = true }) => {
  return (
    <Box sx={sx}>
      <Divider sx={styles.divider}>
        <Chip
          label={title}
          variant={outline ? 'outlined' : 'string'}
          sx={outline ? styles.chip : styles.noOutlineChip}
        />
      </Divider>
      {children}
    </Box>
  );
};
