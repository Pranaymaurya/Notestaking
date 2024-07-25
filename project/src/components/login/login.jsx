import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., API call)
    // Redirect to another page after successful login
    // history.push('/');
   

  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form justify-center text-center">
        <h2 className="justify-center text-center">Login</h2>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            className="border-black"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
        <br/>
        <div className="flex justify-center">
          <h1 className="">Don't have an account? </h1>
          <NavLink to="/signup" className="text-center text-blue-500">SignUp</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;

