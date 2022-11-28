import Button from '@mui/material/Button';
import { useState } from 'react';
import VerticalMenu2 from './VerticalMenu2';
import { styles } from './styles.js';
import { MenuButtonsLink } from '../UI/Styles/NavStyles';

const Buttons = () => {
  const [isShown, setIsShown] = useState(false);

  const menuHandler = () => {
    setIsShown(current => !current);
  };

  const sections = [
    <MenuButtonsLink to='/'> HOME </MenuButtonsLink>,
    <MenuButtonsLink to='/articles'> NBA </MenuButtonsLink>,
    'NFL',
    'MLB',
    'NHL',
    'CBB',
    'CFB',
    'NASCAR',
    'GOLF',
    'SOCCER',
    'TEAM HUB',
    'lifestyle',
    <MenuButtonsLink to='/dealbook'> DEALBOOK </MenuButtonsLink>,
    'video',
  ];

  const menuButtonsMap = sections.map((element, index) => {
    return (
      <Button key={index} onClick={menuHandler} sx={styles.menuButtons} disableRipple>
        {element}
      </Button>
    );
  });

  return (
    <>
      {menuButtonsMap}
      {isShown && <VerticalMenu2 />}
    </>
  );
};

export default Buttons;
