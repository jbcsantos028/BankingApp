  import React, { useState } from 'react';
  import { useHistory } from "react-router-dom";


  import "./LoginPage.css"

  const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let changePage = useHistory();

    const emailHandler = (e) => {
      setEmail(e.target.value);
    };
  
    const passwordHandler = (e) => {
      setPassword(e.target.value);
    };

    const submitHandler = e => {
      e.preventDefault();
      
      if (email === props.authentication.email && password === props.authentication.password) {
        changePage.push('/transactions');
      }
      else {
        console.log("Failed authentication");
        return;
      }
    }

    return (
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2>Sign in to ShawnPH</h2>
            {/* ERROR! */}
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" onChange={emailHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="password" onChange={passwordHandler} />
            </div>
            <button className="login-btn" type="submit">LOGIN</button>
          </div>
        </form>
    );
  }

  export default LoginForm;