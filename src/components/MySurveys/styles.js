export const styles = {
  mainComponent: {
    width: '850px',
    background: '#F1F1F1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '100px',
  },

  sortCommentsElement: {
    width: '95%',
    height: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px',
  },

  sortCommentsList: {
    maxWidth: '210px',
    width: '100%',
    height: '35px',
    fontSize: '12px',
    color: '#D72130',
    fontWeight: '700',
    top: '0',
    justifyContent: 'flex-end',
    background: '#f1f1f1',
    zIndex: '10',
    '&:hover': {
      background: '#f1f1f1',
      color: 'black',
    },
  },

  buttonWrapper: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
  },

  mainArticleCard: {
    minWidth: 202,
    height: 30,
    border: '12px solid transparent',
    '&:hover': {
      boxShadow: '0px 2px 24px rgba(0, 0, 0, 0.110932)',
      background: '#FFF',
      border: '1px solid #FFF',
      height: '204',
      zIndex: '10',
    },
  },

  scrollBar: {
    width: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C4C4C4',
      borderRadius: '4px',
    },
  },
};
