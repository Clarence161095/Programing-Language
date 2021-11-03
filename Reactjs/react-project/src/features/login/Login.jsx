import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'app/slice/UserSlice';
import FormInput from 'components/atoms/form-input/FormInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import './Login.scss';

Login.propTypes = {};

const SignupSchema = yup.object().shape({
  mail: yup.string().required().email(),
  password: yup.string().required(),
});

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const actionResult = await dispatch(
        login({ username: data.mail, password: data.password }),
      );
      unwrapResult(actionResult);
      history.push('/dashboard')
    } catch (error) {
      setErrorLogin(error.message)
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label='Email'
          name='mail'
          register={register}
          errors={errors}
        />

        <FormInput
          label='Password'
          name='password'
          register={register}
          errors={errors}
          type='password'
        />

        <input type='submit' value='Login' />
        {errorLogin && <p>{errorLogin}</p>}
      </form>
    </div>
  );
}

export default Login;
