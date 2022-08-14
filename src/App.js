import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Accounts from "./components/Accounts";
import NewAccount from "./components/NewAccount";
import AccInteractPage from './components/AccInteractPage';
import ChooseAccount from './components/ChooseAccount';
import LoginForm from './components/LoginPage';
import MainNavigation from './components/MainNavigation';
import BudgetAppHome from './components/BudgetAppHome';

import "./App.css";
import { TransactionHistory } from './components/TransactionHistory';
import { StashPage } from './components/Stash Feature/StashPage';

const adminUser = {
  email: "admin@admin.com",
  password: "admin123"
}

const dummyAccounts = [
  {
    name: "Timothy Coronel",
    balance: 25000,
    birthdate: "6/8/1990",
    id: 75053,
    email: "timothy@gmail.com",
    password: "pass1",
    history: [
      {
        transactionType: "Depusit",
        amount: 10001
      },
      {
        transactionType: "Widwoah",
        amount: 3000
      },
      {
        transactionType: "Transfer: Sent",
        amount: 500
      }
    ],
    stash: [
      {
        stashType: "bills",
        amount: 1000
      },
      {
        stashType: "dream car",
        amount: 2000
      }
    ]
  },
  {
    name: "Pao Landicho",
    balance: 36000,
    birthdate: "23/4/1993",
    id: 83453,
    email: "pao@gmail.com",
    password: "pass1",
    history: [
      {
        transactionType: "Depusit",
        amount: 100002
      },
      {
        transactionType: "Widwoah",
        amount: 2000
      },
      {
        transactionType: "Transfer: Reshived",
        amount: 500
      }
    ]
  },
  {
    name: "Jul Santos",
    balance: 18000,
    birthdate: "7/12/2002",
    id: 83490,
    email: "jul@gmail.com",
    password: "pass1",
    history: [
      {
        transactionType: "Depusit",
        amount: 100003
      },
      {
        transactionType: "Widwoah",
        amount: 2000
      },
      {
        transactionType: "Transfer: Sent",
        amount: 500
      }
    ]
  },
  {
    name: "Jas Santos",
    balance: 50000,
    birthdate: "31/7/1998",
    id: 89222,
    email: "jas@gmail.com",
    password: "pass1",
    history: [
      {
        transactionType: "Depusit",
        amount: 100004
      },
      {
        transactionType: "Widwoah",
        amount: 2000
      },
      {
        transactionType: "Transfer: Reshived",
        amount: 500
      }
    ]
  },
];

let localAccounts = JSON.parse(localStorage.getItem('accounts'));

if (!localAccounts) {
  localStorage.setItem('accounts', JSON.stringify(dummyAccounts));
  localAccounts = JSON.parse(localStorage.getItem('accounts'));
}

function App() {

  const [accounts, setAccounts] = useState(localAccounts);
  const [update, setUpdate] = useState('');
  const [transferUpdate, setTransferUpdate] = useState('');
  
  const addAccountHandler = account => {
    setAccounts(prevAccounts => {
      return [account, ...prevAccounts];
    });
  }

  // Login Page
  const [accountType, setAccountType] = useState('');

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

  // Budget App
  const [customer, setCustomer] = useState('');
  

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
      <MainNavigation accountType={accountType}/>
      <Route path="/" exact>
        {/* <header className="login-header"><div>ShawnPH Bank</div></header> */}
        <div className="login">
          <LoginForm authentication={adminUser} owners={accounts} setCustomer={setCustomer} customer={customer} accountType={accountType} setAccountType={setAccountType} />
        </div>
      </Route>
      <Route path="/transactions">
        <div className="header-main">
          {
            showNewAccForm ?
            <NewAccount onAddAccount={addAccountHandler} owners={accounts} showNewAccForm={showNewAccForm} />
            : 
            <div className='acc-interact-wrapper'>
              <ChooseAccount  showProfile={showProfile} setShowProfile={setShowProfile} getName={getName} setGetName={setGetName} owners={accounts} whoseAccount={whoseAccount} setWhoseAccount={setWhoseAccount} />
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
              <button onClick={() => setShowNewAccForm(!showNewAccForm)} className="feature-button">Register</button>
            </div>
          </div>
        </div>
      </Route>
      <Route path="/accounts">
        <Accounts owners={accounts}/>
      </Route>
      <Route path="/transaction-history">
        <TransactionHistory owners={accounts} customer={customer} accountType={accountType} />
      </Route>
      <Route path="/budgetapp">
        <BudgetAppHome customer={customer} accountType={accountType} />
      </Route>
      <Route path="/stash-page">
        <StashPage owners={accounts} customer={customer} accountType={accountType} />
      </Route>
    </div>
  );
}

export default App;