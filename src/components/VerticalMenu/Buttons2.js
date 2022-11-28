import { Button } from '@mui/material';
import { styles } from './styles';

const Buttons = () => {
  const sections = [
    'AFC East',
    'AFC North',
    'AFC South',
    'AFC West',
    'NFC East',
    'NFC North',
    'NFC South',
    'NFC West',
  ];

  const subMenuButtonsMap = sections.map((element, index) => {
    return (
      <Button key={index} sx={styles.subMenuButtons} disableRipple>
        {element}
      </Button>
    );
  });

  return subMenuButtonsMap;
};

export default Buttons;
