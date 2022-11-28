export const styles = {
  mainComponent: {
    width: '850px',
    background: '#F1F1F1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginLeft: '526px',
    marginBottom: '100px',
  },

  addCommentElement: {
    width: '95%',
    background: '#FFFFFF',
    border: '1px solid #D8D8D8',
    height: '64px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
    height: '55px',
    margin: 'auto',
    alignItems: 'center',
  },

  textFieldWrapper: {
    display: 'flex',
    width: '60%',
    height: '55px',
    margin: 'auto',
    alignItems: 'center',
  },

  buttonWrapper: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
  },

  displayCommentsElement: {
    width: '95%',
    border: '1px solid #D8D8D8',
    borderTop: 'none',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
  },

  avatarAndNameWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  commenterAvatar: {
    width: '20%',
    height: '55px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userCommentBox: {
    width: '75%',
    marginLeft: '20%',
    borderBottom: '1px solid #D8D8D8',
    padding: '10px 0',
  },

  userLikesDislikesBox: {
    display: 'flex',
    width: '75%',
    marginLeft: '20%',
    padding: '10px 0',
    justifyContent: 'space-between',
  },

  likeAndDislike: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  modifyComment: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  showMoreButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
    '&:hover': {
      background: '#FFFFFF',
      cursor: 'pointer',
    },
  },

  icon: {
    color: '#7F8899',
    fontSize: '20px',
    margin: '0 5px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
};
