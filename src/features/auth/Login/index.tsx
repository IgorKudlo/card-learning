import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Container from '@mui/material/Container';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { isLoggedInSelector, loadingSelector, login } from './authSlice';
import Card from '../../../components/Card';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  TextField
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type InputsLogin = {
  email: string,
  password: string,
  rememberMe: boolean,
};

const Login = () => {
  // 1qazxcvBG
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const appStatus = useAppSelector(loadingSelector);
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const { register, handleSubmit, formState: { errors } } = useForm<InputsLogin>();
  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    dispatch(login(data));
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile')
    }
  }, [navigate, isLoggedIn]);

  return (
    <Container maxWidth="xl">
      <Card title={"Sign in"}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={appStatus === 'loading' ? "statusLoading" : undefined}
        >
          <TextField
            {...register("email", { required: true })}
            type="email"
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.type === 'required' && "Email is required"}
            variant="standard"
            fullWidth
            margin="dense"
          />

          <FormControl variant="standard" fullWidth margin="dense">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              {...register("password", { required: true })}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChange}
              error={!!errors.email}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password?.type === 'required' && <FormHelperText>Password is required</FormHelperText>}
          </FormControl>

          <FormGroup sx={{mt: 1}}>
            <FormControlLabel
              {...register("rememberMe")}
              control={<Checkbox size="small" />}
              label="Remember me"
            />
          </FormGroup>

          <Link to="/recovery">Forgot Password?</Link><br />
          <button type="submit">Sign In</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/register">Sign Up</Link>
      </Card>
    </Container>
  );
};

export default Login;