import React, { useState } from 'react';

import Accounts from "./components/Accounts";
import NewAccount from "./components/NewAccount";
import AccInteractPage from './components/AccInteractPage';

import "./App.css";
import ChooseAccount from './components/ChooseAccount';

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
  // Choose Acc
  const [whoseAccount, setWhoseAccount] = useState('');
  const [showProfile, setShowProfile] = useState('');
  const [getName, setGetName] = useState('');

  // Button features
  const [showNewAccForm, setShowNewAccForm] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const showClick = (whichButton) => {
    setShowResult(false);
    if (whichButton === 'deposit') {
      setShowDeposit(!showDeposit);
      setShowWithdraw(false);
      setShowTransfer(false);
      setShowNewAccForm(false);
      setUpdate('');
    } else if (whichButton === 'withdraw') {
      setShowDeposit(false);
      setShowWithdraw(!showWithdraw);
      setShowTransfer(false);
      setShowNewAccForm(false);
      setUpdate('');
    } else if (whichButton === 'transfer') {
      setShowDeposit(false);
      setShowWithdraw(false);
      setShowTransfer(!showTransfer);
      setShowNewAccForm(false);
      setUpdate('');
    } else if (whichButton === 'register') {
      setShowDeposit(false);
      setShowWithdraw(false);
      setShowTransfer(false);
      setShowNewAccForm(!showNewAccForm);
      setUpdate('');
    }
  }

  return (
    <div>
      <div className="header-main">
        {
          showNewAccForm ?
          <NewAccount onAddAccount={addAccountHandler} owners={accounts} showNewAccForm={showNewAccForm} />
          :
          <div>
          <ChooseAccount  showProfile={showProfile} setShowProfile={setShowProfile} getName={getName} setGetName={setGetName} owners={accounts} whoseAccount={whoseAccount} setWhoseAccount={setWhoseAccount} setShowDeposit={setShowDeposit} setShowWithdraw={setShowWithdraw} setShowTransfer={setShowTransfer} />
          <AccInteractPage 
            whoseAccount={whoseAccount}
            showDeposit={showDeposit}
            showWithdraw={showWithdraw}
            showTransfer={showTransfer}
            owners={accounts} 
            update={update} 
            setUpdate={setUpdate} 
            transferUpdate={transferUpdate} 
            setTransferUpdate={setTransferUpdate} 
            showResult={showResult}
            setShowResult={setShowResult}
          />
          </div>
        }
        <div className="buttons-wrapper">
          <div className="button-set">
            <button onClick={() => showClick('deposit')} className="feature-button">Deposit</button>
            <button onClick={() => showClick('withdraw')} className="feature-button">Withdraw</button>
          </div>
          <div className="button-set">
            <button onClick={() => showClick('transfer')} className="feature-button">Transfer</button>
            <button onClick={() => showClick('register')} className="feature-button">Register</button>
          </div>
        </div>
      </div>
      <Accounts owners={accounts}/>
    </div>
  );
}

export default App;