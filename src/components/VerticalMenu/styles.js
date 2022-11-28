export const styles = {
  verticalMenu: {
    position: 'relative',
    width: '253px',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  VerticalMenu2: {
    position: 'absolute',
    width: '253px',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    left: '250px',
    top: '0px',
    boxShadow: '13px 4px 14px rgba(0, 0, 0, 0.09)',
    zIndex: 10,
  },

  greyAttribute: {
    width: '4px',
    height: '111px',
    position: 'absolute',
    background: '#D4D9E2',
    borderRadius: '8px',
    left: '15px',
    top: '120px',
  },

  redElement: {
    height: '36px',
    width: '4px',
    marginLeft: '-4px',
    position: 'absolute',
    background: '#D72130',
    top: '43px',
  },

  buttonWrapper: {
    width: '100%',
    margin: '109px 0 441px 0',
    position: 'relative',
  },

  activeMainButton: {
    color: '#D72130',
  },

  subMenuButtons: {
    width: '100%',
    height: '41px',
    fontSize: '14px',
    color: '#000000',
    lineHeight: '19px',
    background: '#FFFFFF',
    border: 'none',
    padding: '10px 30px 10px 25px',
    cursor: 'pointer',
    borderRadius: '0',
    textTransform: 'none',
    '&:hover': {
      background: 'rgba(215, 33, 48, 0.11)',
    },
  },

  menuButtons: {
    width: '205px',
    color: '#B2B2B2',
    fontSize: '15px',
    fontWeight: '700',
    textAlign: 'left',
    marginTop: '5px',
    justifyContent: 'flex-start',
    textTransform: 'uppercase',
    textDecoration: 'none',
    '&:hover': {
      color: '#7F7B7B',
      background: '#fafafa',
    },
  },

  active: {
    width: '100%',
    fontSize: '14px',
    color: '#000000',
    lineHeight: '19px',
    border: 'none',
    padding: '10px',
    background: 'rgba(215, 33, 48, 0.11)',
    cursor: 'pointer',
  },

  circleIcon: {
    fontSize: '8px',
    paddingRight: '5px',
    paddingTop: '3px',
    marginLeft: '-15px',
  },

  circleIconInactive: {
    fontSize: '8px',
    paddingRight: '5px',
    paddingBottom: '2px',
    marginLeft: '-15px',
    color: '#FFFFFF',
  },

  followMedia: {
    width: '60%',
  },

  follow: {
    textAlign: 'left',
    color: '#B2B2B2',
    fontSize: '16px',
    marginTop: '30px',
  },

  socialIcons: {
    width: '70%',
    textAlign: 'left',
  },

  icons: {
    fontSize: '18px',
    marginRight: '25px',
    marginTop: '20px',
  },

  ul: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },

  links: {
    width: '205px',
    color: '#B2B2B2',
    fontSize: '15px',
    fontWeight: '700',
    textAlign: 'left',
    marginTop: '5px',
    justifyContent: 'flex-start',
    textTransform: 'uppercase',
    textDecoration: 'none',
    '&:hover': {
      color: '#7F7B7B',
      background: '#fafafa',
    },
    '&:active': {
      color: '#D72130',
    },
  },
};
