import React, { useState } from "react";

import "./AccountForm.css";

const AccountForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const balanceHandler = (e) => {
    setBalance(e.target.value);
  };

  const birthdateHandler = (e) => {
    setBirthdate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const accountData = {
      email: email,
      password: password,
      name: name,
      balance: balance,
      birthdate: new Date(birthdate)
    }
    props.onSaveAccountData(accountData);
    setEmail('');
    setPassword('');
    setName('');
    setBalance('');
    setBirthdate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-account__controls">
        <div className="new-account__control">
          <label>Email</label>
          <input type="email" value={email} onChange={emailHandler} />
        </div>
        <div className="new-account__control">
          <label>Password</label>
          <input type="password" value={password} onChange={passwordHandler} />
        </div>
        <div className="new-account__control">
          <label>Name</label>
          <input type="text" value={name} onChange={nameHandler} />
        </div>
        <div className="new-account__control">
          <label>Balance</label>
          <input type="number" min="0.01" step="0.01" value={balance} onChange={balanceHandler} />
        </div>
        <div className="new-account__control">
          <label>Birthdate</label>
          <input type="date" min="1970-01-01" max="2004-07-29" value={birthdate} onChange={birthdateHandler} />
        </div>
      </div>
      <div className="new-account__actions">
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default AccountForm;
