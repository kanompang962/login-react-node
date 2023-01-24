import React, { useState } from 'react';
// functions
import { login } from '../../fonctions/auth';

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const handleChang = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    // checkpassword seccess
    login(value).then(res => {
      console.log(res.data);
      alert(res.data);
    }).catch(err => {
      console.log(err.response.data);
      alert(err.response.data);
    });

  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChang} />

        <label>Password</label>
        <input type="text" name="password" onChange={handleChang} />

        <button >Submit</button>

      </form>
    </div>
  )
}

export default Login