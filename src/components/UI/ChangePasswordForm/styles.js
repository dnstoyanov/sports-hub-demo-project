export const styles = {
  formContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputFieldBox: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 2,
  },
  inputField: {
    width: '389px',
    height: '42px',
    paddingLeft: '14px',
    fontSize: '12px',
    border: '1px solid #D4D9E2',
    '&:placeholder': {
      fontSize: 4,
      color: '#333',
    },
  },
  inputFieldErr: {
    width: '389px',
    height: '42px',
    paddingLeft: '14px',
    fontSize: '12px',
    border: '1px solid #E1464E',
  },
  labelTxt: {
    color: '#434C5D',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 10,
    fontFamily: 'Roboto',
    letterSpacing: '0.9px',
    marginBottom: '8px',
  },

  eyeIcon: {
    color: '#D4D9E2',
    marginRight: '5px',
    width: '33px',
    height: '33px',
  },

  submitBtn: {
    backgroundColor: '#D72130',
    fontSize: 14,
    color: '#fff',
    height: '42px',
    marginTop: 35,
  },

  errMsg: {
    color: '#D72130',
    fontSize: 10,
    justifyContent: 'flex-end',
    display: 'flex',
  },
  btnErrMsg: {
    color: '#D72130',
    fontSize: 10,
    justifyContent: 'center',
    display: 'flex',
  },
};
