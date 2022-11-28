export const styles = {
  divider: {
    margin: '30px 0 50px',
    '.MuiDivider-wrapper': {
      padding: 0,
    },
    position: 'relative',
  },
  chip: {
    background: 'none',
    padding: '17px 20px',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  noOutlineChip: {
    background: '#fafafa',
    textTransform: 'uppercase',
    fontWeight: 700,
    position: 'absolute',
    left: 0,
    bottom: -13,
    '.MuiChip-label': {
      paddingLeft: 0,
    },
  },
};
