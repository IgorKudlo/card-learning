import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { login } from './authSlice';

type InputsLogin = {
  email: string,
  password: string,
  rememberMe: boolean,
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const appStatus = useAppSelector(state => state.auth.status);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const { register, handleSubmit, formState: { errors } } = useForm<InputsLogin>();
  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile')
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <h1>Sign in</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={appStatus === 'loading' ? "statusLoading" : undefined}
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        /><br />
        {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        /><br />
        {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
        <label>
          <input type="checkbox" {...register("rememberMe")} /> Remember me
        </label><br />
        <Link to="/recovery">Forgot Password?</Link><br />
        <button type="submit">Sign In</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default Login;