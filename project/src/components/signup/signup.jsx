import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
//   const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
   
    axios.post('mongodb://localhost:27017/register',{
        email: email,
        password: password,
        name:name,
    }).then(
        result=>console.log(result)
    )
    // Implement sign-up logic here (e.g., API call)
    // Redirect to login page after successful sign-up
    // history.push('/login');
  };

  return (
    <div className='
    '>
      {/* <h2 className='justify-center text-center'>Sign Up</h2> */}
      <form onSubmit={handleSignUp} className="login-form justify-center text-center">
      <h2 className='justify-center text-center'>Sign Up</h2>
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
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="string" 
            value={name} 
            onChange={(e) => setname(e.target.value)} 
            required 
          />
        </div>
        <button type="submit justify-center">Sign Up</button>
        <div className="flex justify-center">
          <h1 className="">Don't have an account? </h1>
          <NavLink to="/login" className="text-center text-blue-500">Login</NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
