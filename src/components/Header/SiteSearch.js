import React from 'react';
import { styles } from './Styles.js';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/InputAdornment';

export default function SiteSearch() {
  return (
    <Box sx={styles.searchWrapper}>
      <SearchIcon sx={{ marginLeft: '20px' }} />
      <Input position='start'>
        <TextField
          InputProps={{ disableUnderline: true }}
          id='input-with-icon-textfield'
          placeholder='Search By'
          variant='standard'
          sx={styles.searchForm}
          color='secondary'
        ></TextField>
      </Input>
    </Box>
  );
}
