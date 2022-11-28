export const styles = {
  headerWrapper: {
    width: '100%',
    height: '84px',
    background: '#FFF',
    borderBottom: '1px solid #EDEDED',
    display: 'grid',
    gridTemplateColumns: '253px 33% 18% 30.5%',
    justifyContent: 'space-between',
  },

  logo: {
    background: '#D72130',
    height: '84px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  searchWrapper: {
    display: 'flex',
    float: 'left',
    position: 'relative',
    alignItems: 'center',
    width: '457px',
    height: '83px',
    background: 'white',
    borderRight: '1px solid #EdEdEd',
  },

  searchForm: {
    border: 'white',
    marginLeft: '20px',
    padding: '5px',
    color: 'black',
    fontSize: '18px',
    outline: 'none',
    width: '250px',
  },

  socialMediaWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '83px',
    background: 'white',
  },

  userInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'auto',
    height: '83px',
    background: 'white',
    borderLeft: '1px solid #EdEdEd',
  },

  userDropdownHover: {
    padding: '10px',
    background: '#FFFFFF',
    pl: '2',
    zIndex: '50',
    '&:hover': {
      background: '#fbe7e8',
      color: '#d72130',
    },
  },

  logout: {
    padding: '10px',
    background: '#FFFFFF',
    borderTop: '1px solid #EDEDED',
    pl: '2',
    fontSize: '14px',
    zIndex: '10',
    '&:hover': {
      background: '#fbe7e8',
      color: '#D72130',
    },
  },

  icon: {
    color: 'black',
    padding: '10px 10px 10px 10px',
    fontSize: '46px',
    '&:hover': {
      color: 'gray',
      cursor: 'pointer',
    },
  },
};
