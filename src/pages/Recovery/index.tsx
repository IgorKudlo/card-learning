import React from 'react';
import { Link } from 'react-router-dom';

const Recovery = () => {
  return (
    <div>
      <h1>Forgot your password?</h1>
      <form>
        <input type="email" placeholder="Email"/><br />
        <p>Enter your email address and we will send you further instructions</p>
        <button type="submit">Send Instructions</button>
      </form>
      <p>Did you remember your password?</p>
      <Link to="/login">Try logging in</Link>
    </div>
  );
};

export default Recovery;