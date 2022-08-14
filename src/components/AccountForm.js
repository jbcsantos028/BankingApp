import React, { useState } from "react";

import "./AccountForm.css";
import ErrorModal from "./ErrorModal";


const AccountForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [error, setError] = useState();

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

  const getDate = (birthdate) => {
    const date = new Date(birthdate);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // getUTCMonth() returns month from 0 to 11
    const year = date.getUTCFullYear();

    const str = `${day}/${month}/${year}`;

    return str;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(email.trim().length === 0 || password.trim().length === 0 || name.trim().length === 0 || balance.trim().length === 0) {
      setError({
        title: 'Empty Field/s',
        message: 'Please enter valid input/s (non-empty values).'
      });
      return;
    }
    if (name.charAt(0) === '0' || name.charAt(0) === '1' || name.charAt(0) === '2' || name.charAt(0) === '3' || name.charAt(0) === '4' || name.charAt(0) === '5' || name.charAt(0) === '6' || name.charAt(0) === '7' || name.charAt(0) === '8' || name.charAt(0) === '9') {
      setError({
        title: 'Invalid Input',
        message: 'Account name cannot start with a number.'
      });
      return;
    }
    if (+balance < 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid balance (> 0).'
      });
      return;
    }

    if (getDate(birthdate) === `${NaN}/${NaN}/${NaN}`) {
      setError({
        title: 'Empty Field/s',
        message: 'Please enter valid input/s (non-empty values).'
      });
      return;
    }


    const existingAccount = props.ownerList.find(item => item.name.toUpperCase() === name.toUpperCase());

    if (existingAccount && existingAccount.birthdate === getDate(birthdate)) {
      setError({
        title: 'Existing Account',
        message: 'An account with the same name and birthdate already exists.'
      });
      return;
    }

    const accountData = {
      email: email,
      password: password,
      name: name,
      balance: +balance,
      birthdate: getDate(birthdate),
      history: []
    }
    props.onSaveAccountData(accountData);
    setEmail('');
    setPassword('');
    setName('');
    setBalance('');
    setBirthdate('');
    setError({
      title: 'Confirmation Message',
      message: 'New account was successfully created.'
    });
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} accountList={props.ownerList} />}
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
            <input type="number" step="0.01" value={balance} onChange={balanceHandler} />
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
    </div>
  );
};

export default AccountForm;
