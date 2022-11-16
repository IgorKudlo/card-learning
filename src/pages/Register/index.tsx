import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="email" placeholder="Email"/><br />
        <input type="password" placeholder="Password"/><br />
        <input type="password" placeholder="Confirm password"/><br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Sign In</Link>
    </div>
  );
};

export default Register;