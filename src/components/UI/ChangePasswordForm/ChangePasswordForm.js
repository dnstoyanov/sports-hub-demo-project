import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { styles } from './styles';
import { Box } from '@mui/system';
import { Button, Input, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = data => console.log(data);
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const password = watch('password');

  return (
    <Box sx={{ width: '100%', margin: '50px auto', display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={styles.formContainer}>
          <Box sx={styles.inputFieldBox}>
            <label style={styles.labelTxt}>OLD PASSWORD</label>
            <Input
              disableUnderline
              sx={errors.oldPassword ? styles.inputFieldErr : styles.inputField}
              type={'password'}
              placeholder='Enter your old password here'
              {...register('oldPassword', {
                required: 'Old password is required',
              })}
            />
            {errors.oldPassword && <span style={styles.errMsg}>{errors.oldPassword.message}</span>}
          </Box>
          <Box sx={styles.inputFieldBox}>
            <label style={styles.labelTxt}>New password</label>
            <Input
              disableUnderline
              sx={errors.password ? styles.inputFieldErr : styles.inputField}
              type={passwordEye === false ? 'password' : 'text'}
              placeholder='8 + characters (letters and numbers)'
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
                  message: 'Entered password format is wrong ',
                },
                minLength: {
                  value: 6,
                  message: 'Minimum Required length is 8',
                },
                maxLength: {
                  value: 15,
                  message: 'Maximum Required length is 15',
                },
              })}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    edge='end'
                    disableRipple
                    sx={{ ...styles.eyeIcon }}
                    onClick={handlePasswordClick}
                  >
                    {passwordEye === false ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && <span style={styles.errMsg}>{errors.password.message}</span>}
          </Box>

          <Box style={styles.inputFieldBox}>
            <label style={styles.labelTxt}>Confirm Password</label>

            <Input
              disableUnderline
              sx={errors.confirmPassword ? styles.inputFieldErr : styles.inputField}
              type={confirmPasswordEye === false ? 'password' : 'text'}
              placeholder='Enter new password again'
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: value => value === password || 'The passwords do not match',
              })}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    edge='end'
                    disableRipple
                    sx={{ ...styles.eyeIcon }}
                    onClick={handleConfirmPasswordClick}
                  >
                    {passwordEye === false ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.confirmPassword && (
              <span style={styles.errMsg}>{errors.confirmPassword.message}</span>
            )}
          </Box>

          <Button type='submit' style={styles.submitBtn}>
            CHANGE PASSWORD
          </Button>

          {(errors.confirmPassword?.type === 'required' ||
            errors.password?.type === 'required' ||
            errors.oldPassword?.type === 'required') && (
            <span style={styles.btnErrMsg}>All fields are required!</span>
          )}
        </Box>
      </form>
    </Box>
  );
};
