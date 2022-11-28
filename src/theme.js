import { createTheme } from '@mui/material/styles';
import { cardActionAreaClasses } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      main: '#D72130',
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: 'Open Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 22,
      fontWeight: 600,
    },
    h2: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0,
    },
    h3: {
      fontSize: 12,
      fontWeight: 400,
      color: '#7F7B7B',
    },
    h4: {
      fontSize: 12,
      fontWeight: 600,
    },
    button: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'none',
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fafafa',
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #EDEDED',
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          [`&:hover .${cardActionAreaClasses.focusHighlight}`]: {
            opacity: 0,
          },
        },
      },
    },
  },
});

export default theme;
