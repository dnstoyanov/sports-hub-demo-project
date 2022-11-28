import React from 'react';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { styles } from './Styles';

export default function SelectLanguage() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 100,
          bgcolor: 'background.paper',
          position: 'absolute',
          top: '8px',
        }}
        aria-labelledby='nested-list-subheader'
      >
        <ListItemButton
          onClick={handleClick}
          sx={{ background: 'white', '&:hover': { background: '#FFFFFF' } }}
          disableRipple
        >
          <ListItemText primary='EN' />
          {open ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={styles.userDropdownHover} disableRipple>
              <ListItemText primary='EN' />
            </ListItemButton>

            <ListItemButton sx={styles.userDropdownHover} disableRipple>
              <ListItemText primary='BG' />
            </ListItemButton>

            <ListItemButton sx={styles.userDropdownHover} disableRipple>
              <ListItemText primary='UA' />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
