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

    const handleChange = (e) => {
      props.setAccountType(e.target.value);
    }
  
    const passwordHandler = (e) => {
      setPassword(e.target.value);
    };

    const submitHandler = e => {
      e.preventDefault();
      
      if (props.accountType === 'employee'){
        if (email === props.authentication.email && password === props.authentication.password) {
          changePage.push('/transactions');
        }
        else {
          console.log("Failed authentication");
          return;
        }
      }
      else if (props.accountType === 'customer') {
        const customerAccount  = props.owners.find(item => item.email.toUpperCase() === email.toUpperCase());
        
        if (customerAccount && customerAccount.password === password) {
          props.setCustomer(customerAccount);
          props.setAccountType('customer');
          changePage.push('/budgetapp');
        }
        else if (!customerAccount || customerAccount.password !== password) {
          console.log("Failed authentication");
        }
      }
      console.log(props.customer);
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
          <div className="account-type">
            <div>
              <input className="radio-input" type="radio" name="account-type" id="option1" value="employee" onChange={handleChange} checked={props.accountType === 'employee'} />
              <label className="radio-label" htmlFor="option1">Employee</label>
            </div>
            <div>
              <input className="radio-input" type="radio" name="account-type"  id="option2" value="customer" onChange={handleChange} checked={props.accountType === 'customer'} />
              <label className="radio-label" htmlFor="option2">Customer</label>
            </div>
          </div>
          <button className="login-btn" type="submit">LOGIN</button>
        </div>
      </form>
    );
  }

  export default LoginForm;