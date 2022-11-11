import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <input type="email" placeholder="Email"/><br />
        <input type="password" placeholder="Password"/><br />
        <label><input type="checkbox"/> Remember me</label><br />
        <Link to="recovery">Forgot Password?</Link><br />
        <button type="submit">Sign In</button>
      </form>
      <p>Already have an account?</p>
      <Link to="register">Sign Up</Link>
    </div>
  );
};

export default Login;