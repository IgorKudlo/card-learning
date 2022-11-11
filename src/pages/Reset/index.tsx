import React from 'react';

const Reset = () => {
  return (
    <div>
      <h1>Create new password</h1>
      <form>
        <input type="email" placeholder="Email"/><br />
        <p>Create new password and we will send you further instructions to email</p>
        <button type="submit">Create new password</button>
      </form>
    </div>
  );
};

export default Reset;