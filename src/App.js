import React, { useState } from 'react';

import Accounts from "./components/Accounts";
import NewAccount from "./components/NewAccount";
import AccInteractPage from './components/AccInteractPage';

import "./App.css";

const dummyAccounts = [
  {
    name: "Timothy Coronel",
    balance: 25000,
    birthdate: "6/8/1990",
    id: 75053,
    email: "timothy@gmail.com",
    password: "pass1"
  },
  {
    name: "Pao Landicho",
    balance: 36000,
    birthdate: "23/4/1993",
    id: 83453,
    email: "pao@gmail.com",
    password: "pass1"
  },
  {
    name: "Jul Santos",
    balance: 18000,
    birthdate: "7/12/2002",
    id: 83490,
    email: "jul@gmail.com",
    password: "pass1"
  },
  {
    name: "Jas Santos",
    balance: 50000,
    birthdate: "31/7/1998",
    id: 89222,
    email: "jas@gmail.com",
    password: "pass1"
  },
];

let localAccounts = JSON.parse(localStorage.getItem('accounts'));

if (!localAccounts) {
  localStorage.setItem('accounts', JSON.stringify(dummyAccounts));
  localAccounts = JSON.parse(localStorage.getItem('accounts'));
  }

function App() {

  const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem('accounts')));
  const [update, setUpdate] = useState('');
  const [transferUpdate, setTransferUpdate] = useState('');
  
  const addAccountHandler = account => {
    setAccounts(prevAccounts => {
      return [account, ...prevAccounts];
    });
  }

  // Button features
  const [showNewAccForm, setShowNewAccForm] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  return (
    <div>
      <div className="header">
        <NewAccount onAddAccount={addAccountHandler} owners={accounts} showNewAccForm={showNewAccForm} />
        <div>
          <button onClick={() => setShowDeposit(!showDeposit)}>Deposit</button>
          <button onClick={() => setShowWithdraw(!showWithdraw)}>Withdraw</button>
          <button onClick={() => setShowTransfer(!showTransfer)}>Transfer</button>
          <button onClick={() => setShowNewAccForm(!showNewAccForm)}>Register</button>
        </div>
      </div>
      <Accounts owners={accounts}/>
      <AccInteractPage 
        showDeposit={showDeposit}
        showWithdraw={showWithdraw}
        showTransfer={showTransfer}
        owners={accounts} 
        update={update} 
        setUpdate={setUpdate} 
        transferUpdate={transferUpdate} 
        setTransferUpdate={setTransferUpdate} 
      />

    </div>
  );
}

export default App;